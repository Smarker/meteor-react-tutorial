import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

import { Post } from './Post';
import PostForm from './PostForm';
import PostsContainer from './Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostForm />
        <PostsContainer />
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});