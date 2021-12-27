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
        <div className="list-item">
            <h2>{url}</h2>
            <p className="list-item__message">{shortUrl}</p>
            {/* <p className="list-item__message">{visible.toString()}</p> */}
            <p className="list-item__message">{visit()}</p>
            <a
                href={shortUrl}
                target="_blank"
                className="button button--pill button--link"
            >
                Visit
            </a>
            <button
                className="button button--pill"
                id="copyBtn"
                data-clipboard-text={shortUrl}
                onClick={handleCopy}
            >
                {isCopied ? 'Copied' : 'Copy'}
            </button>
            <button
                className="button button--pill"
                onClick={() => {
                    Meteor.call('links.setVisibleValue', _id, !visible);
                }}
            >
                {visible ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default LinkListItem;
