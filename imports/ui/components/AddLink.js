import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

function AddLink() {
    const [url, setUrl] = useState('');
    const sendAddLinks = (e) => {
        e.preventDefault();
        const urlTxt = url;
        if (urlTxt) {
            Meteor.call('links.insert', urlTxt);
            setUrl('');
        }
    };
    return (
        <>
            <h2>Add Link</h2>
            <form onSubmit={sendAddLinks}>
                <input
                    type="text"
                    name="url"
                    placeholder="URL"
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value.trim());
                    }}
                />
                <button>Add Link</button>
            </form>
        </>
    );
}

export default AddLink;
