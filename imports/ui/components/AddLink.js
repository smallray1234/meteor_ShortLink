import React, { useState, useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

function AddLink() {
    const urlRef = useRef();
    const [url, setUrl] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const sendAddLinks = (e) => {
        e.preventDefault();
        const urlTxt = url;
        if (urlTxt) {
            Meteor.call('links.insert', urlTxt, (err) => {
                if (err) {
                    setErrMsg(err.reason);
                } else {
                    handleModalClose();
                }
            });
        }
    };
    const handleModalClose = () => {
        setModalOpen(false);
        setUrl('');
        setErrMsg('');
    };
    return (
        <div>
            <button
                className="button"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                + Add Link
            </button>
            <Modal
                className="boxed-view__box"
                overlayClassName="boxed-view boxed-view--modal"
                ariaHideApp={false}
                isOpen={modalOpen}
                contentLabel="Add Link"
                onAfterOpen={() => {
                    urlRef.current.focus();
                }}
                onRequestClose={handleModalClose}
            >
                <h1>Add Link</h1>
                <p>{errMsg === '' ? '' : errMsg}</p>
                <form onSubmit={sendAddLinks} className="boxed-view__form">
                    <input
                        type="text"
                        ref={urlRef}
                        placeholder="URL"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value.trim());
                        }}
                    />
                    <button className="button">Add Link</button>
                    <button
                        type="button"
                        className="button button--sencondary"
                        onClick={handleModalClose}
                    >
                        Cancel
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default AddLink;
