import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links_API } from '../../api/links';
import LinkListItem from './LinkListItem';

function LinksList() {
    const [links, setLinks] = useState([{}]);
    useTracker(() => {
        Meteor.subscribe('links');
        const newLinks = Links_API.find({
            visible: Session.get('showVisible'),
        }).fetch();
        setLinks(newLinks);
    }, []);
    return (
        <>
            <h2>Your Links</h2>
            {links.length === 0 ? (
                <div className="list-item">
                    <p className="list-item__notfound">
                        There is no links exist.
                    </p>
                </div>
            ) : (
                <FlipMove maintainContainerHeight="true">
                    {links.map((v) => {
                        const shortUrl = Meteor.absoluteUrl(v._id);
                        return (
                            <div key={`key${v._id}`}>
                                <LinkListItem
                                    shortUrl={shortUrl}
                                    url={v.url}
                                    _id={v._id}
                                    visible={v.visible}
                                    visitedCount={v.visitedCount}
                                    lastVisitedAt={v.lastVisitedAt}
                                />
                            </div>
                        );
                    })}
                </FlipMove>
            )}
        </>
    );
}

export default LinksList;
