import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import Clipboard from 'clipboard';

function LinkListItem(props) {
    const { shortUrl, url, visible, _id } = props;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    useEffect(() => {
        const cb = new Clipboard('#copyBtn');
        cb.on('success', () => {
            console.log('copy success');
        }).on('error', () => {
            alert('Failed.');
        });
    }, []);
    return (
        <>
            <p>{url}</p>
            <p>{shortUrl}</p>
            <p>{visible.toString()}</p>
            <button
                id="copyBtn"
                data-clipboard-text={shortUrl}
                onClick={handleCopy}
            >
                {isCopied ? 'Copied' : 'Copy'}
            </button>
            <button
                onClick={() => {
                    Meteor.call(
                        'links.setVisibleValue',
                        _id,
                        !visible
                    );
                }}
            >
                {visible ? 'Hide' : 'Show'}
            </button>
        </>
    );
}

export default LinkListItem;
