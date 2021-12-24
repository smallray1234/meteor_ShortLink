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
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                + Add Link
            </button>
            <Modal
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
                <form onSubmit={sendAddLinks}>
                    <input
                        type="text"
                        ref={urlRef}
                        placeholder="URL"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value.trim());
                        }}
                    />
                    <button>Add Link</button>
                </form>
                <button onClick={handleModalClose}>Cancel</button>
            </Modal>
        </div>
    );
}

export default AddLink;
