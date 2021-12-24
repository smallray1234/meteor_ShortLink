import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Clipboard from 'clipboard';
import moment from 'moment';

function LinkListItem(props) {
    const { shortUrl, url, visible, _id, visitedCount, lastVisitedAt } = props;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    function visit() {
        let visitMsg = visitedCount <= 1 ? 'visit' : 'visits';
        let lastVisitMsg = '';
        if (typeof lastVisitedAt === 'number') {
            lastVisitMsg = `(visited ${moment(lastVisitedAt).fromNow()})`;
        }

        return `${visitedCount} ${visitMsg} ${lastVisitMsg}`;
    }

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
            <p>{visit()}</p>
            <a href={shortUrl} target="_blank">
                Visit
            </a>
            <button
                id="copyBtn"
                data-clipboard-text={shortUrl}
                onClick={handleCopy}
            >
                {isCopied ? 'Copied' : 'Copy'}
            </button>
            <button
                onClick={() => {
                    Meteor.call('links.setVisibleValue', _id, !visible);
                }}
            >
                {visible ? 'Hide' : 'Show'}
            </button>
        </>
    );
}

export default LinkListItem;
