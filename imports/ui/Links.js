import React from 'react';
import { Redirect } from 'react-router-dom';

import LinksList from './components/LinksList';
import PrivateHeader from './components/PrivateHeader';
import AddLink from './components/AddLink';

function Links(props) {
    const { isAuth } = props;
    if (!isAuth) {
        alert('You have to login to use this function.');
        return <Redirect to="/login" />;
    }

    return (
        <>
            <PrivateHeader />
            <AddLink />
            <LinksList />
        </>
    );
}

export default Links;
