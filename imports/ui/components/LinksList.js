import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { Links_API } from '../../api/links';
import LinkListItem from './LinkListItem';

function LinksList() {
    const [links, setLinks] = useState([]);
    useTracker(() => {
        Meteor.subscribe('links');
        const newLinks = Links_API.find().fetch();
        setLinks(newLinks);
    }, []);
    // console.log('links:', links);
    return (
        <>
            <h2>Your Links</h2>
            <p>Link List</p>
            {links.length === 0 ? (
                <span>There is no links exist.</span>
            ) : (
                links.map((v) => {
                    const shortUrl = Meteor.absoluteUrl(
                        v._id
                    );
                    return (
                        <LinkListItem
                            key={v._id}
                            shortUrl={shortUrl}
                            url={v.url}
                            userId={v.userId}
                        />
                    );
                })
            )}
        </>
    );
}

export default LinksList;
