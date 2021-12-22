import React from 'react';
import { useHistory } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

function PrivateHeader() {
    const history = useHistory();
    const onLogout = () => {
        Accounts.logout();
        history.push('/');
    };
    return (
        <>
            <h1>Links here</h1>
            <button onClick={onLogout}>Logout</button>
        </>
    );
}

export default PrivateHeader;
