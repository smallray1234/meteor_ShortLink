import React from 'react';
import { Session } from 'meteor/session';

function LinksFilter() {
    return (
        <div className="checkbox">
            <input
                id="showCheck"
                type="checkbox"
                onChange={(e) => {
                    Session.set('showVisible', !e.target.checked);
                }}
            />
            <label className="checkbox-label" htmlFor="showCheck">
                Show Hidden Links
            </label>
        </div>
    );
}

export default LinksFilter;
