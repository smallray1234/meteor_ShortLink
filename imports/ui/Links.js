import React from 'react';
import { Redirect } from 'react-router-dom';
import { Session } from 'meteor/session';

import LinksList from './components/LinksList';
import PrivateHeader from './components/PrivateHeader';
import AddLink from './components/AddLink';
import LinksFilter from './components/LinksFilter';

function Links(props) {
    const { isAuth } = props;
    if (!isAuth) {
        alert('You have to login to use this function.');
        return <Redirect to="/login" />;
    }
    Session.set('showVisible', true);
    return (
        <>
            <PrivateHeader />
            <div className="page-content">
                <LinksFilter />
                <AddLink />
                <LinksList />
            </div>
        </>
    );
}

export default Links;
