import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page not found.</h1>
                <p>Sorry, we can't find that page.</p>
                <Link to="/">HeLinkdtoe</Link>
            </div>
        </div>
    );
}

export default NotFound;
