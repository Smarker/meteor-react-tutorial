import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Posts = new Mongo.Collection("Posts");

Posts.schema = new SimpleSchema({
  title: {type: String},
  dateCreated: {type: String},
  author: {type: String},
  desc: {type: String},
  numLikes: {type: Number, defaultValue: 0}
});