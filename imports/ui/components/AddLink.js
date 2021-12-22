import React from 'react';
import { Meteor } from 'meteor/meteor';

function AddLink() {
    const sendAddLinks = (e) => {
        e.preventDefault();
        const urlTxt = e.target.url.value.trim();
        if (urlTxt) {
            Meteor.call('links.insert', urlTxt);
            e.target.url.value = '';
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
                />
                <button>Add Link</button>
            </form>
        </>
    );
}

export default AddLink;
