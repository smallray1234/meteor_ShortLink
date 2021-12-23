import React from 'react';
import { Session } from 'meteor/session';

function LinksFilter() {
    return (
        <>
            <input
                id="showCheck"
                type="checkbox"
                onChange={(e) => {
                    Session.set('showVisible', !e.target.checked);
                }}
            />
            <label htmlFor="showCheck">Show Hidden Links</label>
        </>
    );
}

export default LinksFilter;
