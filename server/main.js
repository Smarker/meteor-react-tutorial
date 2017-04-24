import { Posts } from '../imports/Post';

Meteor.publish('Posts', function() {
  console.log(Posts.find({}).fetch());
  return Posts.find({});
});