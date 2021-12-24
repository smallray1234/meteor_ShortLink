import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Links_API = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links_API.find({ userId: this.userId });
    });
}

Meteor.methods({
    'links.insert'(urlTxt) {
        if (!this.userId) {
            // not login check
            throw new Meteor.Error('No-authorized');
        }
        // schema
        new SimpleSchema({
            urlTxt: {
                type: String,
                label: 'The URL Link', //會成為error message的主詞
                regEx: SimpleSchema.RegEx.Url,
            },
        }).validate({ urlTxt });

        // insert method
        Links_API.insert({
            url: urlTxt,
            userId: this.userId,
            visible: true,
            visitedCount: 0,
            lastVisitedAt: null,
        });
    },

    'links.setVisibleValue'(_id, visible) {
        if (!this.userId) {
            throw new Meteor.Error('No-authorized');
        }
        new SimpleSchema({
            _id: {
                type: String,
                min: 1,
            },
            visible: {
                type: Boolean,
            },
        }).validate({ _id, visible });

        Links_API.update(
            {
                _id: _id,
                userId: this.userId,
            },
            {
                $set: { visible },
            }
        );
    },
    'links.trackVisit'(_id) {
        new SimpleSchema({
            _id: {
                type: String,
                min: 1,
            },
        }).validate({ _id });

        Links_API.update(
            { _id },
            {
                $set: { lastVisitedAt: new Date().getTime() },
                $inc: { visitedCount: 1 },
            }
        );
    },
});
