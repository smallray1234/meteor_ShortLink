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
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">Short Link App</h1>
                <button className="button button--link-text" onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default PrivateHeader;
