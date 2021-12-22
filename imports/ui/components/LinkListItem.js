import React from 'react';

function LinkListItem(props) {
    const { shortUrl, url, userId } = props;
    return (
        <>
            <p>{url}</p>
            <p>{shortUrl}</p>
        </>
    );
}

export default LinkListItem;
