import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links_API } from '../imports/api/links';

import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
    // 解析url
    WebApp.connectHandlers.use((req, res, next) => {
        const _id = req.url.slice(1); // 去掉路由的/ ex:/links
        const link = Links_API.findOne({ _id: _id });

        if (link) {
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
        } else {
            next();
        }
    });

    WebApp.connectHandlers.use((req, res, next) => {
        console.log('Custom Middleware');
        next();
    });
});
