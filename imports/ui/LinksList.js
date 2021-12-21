import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Links_API } from '../api/links';

function LinksList() {
  const [links, setLinks] = useState([]);
  useTracker(() => {
    const newLinks = Links_API.find().fetch();
    setLinks(newLinks);
  }, []);
  console.log('links:', links);
  return (
    <div>
      <p>Link List</p>
      {links.length === 0 ? (
        <span>There is no links exist.</span>
      ) : (
        links.map((v) => {
          return <p key={v._id}>- {v.url}</p>;
        })
      )}
    </div>
  );
}

export default LinksList;
