import React from 'react';
import { Icon, Image, Card, Grid, Label, List } from 'semantic-ui-react'

import { Posts } from '../imports/Post';
import { createContainer } from 'meteor/react-meteor-data';

export class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const postList = this.props.posts.map((post) =>
      <Card fluid key={post._id}>
        <Card.Content>
          <Grid columns={4} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Icon name='thumbs outline up' size='large' /> 
                {post.numLikes}
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>
                  {post.title}
                </Card.Header>
                <Card.Meta>
                  {post.created}
                </Card.Meta>
                <Label>Rutgers</Label>
                <Label>Computer Science</Label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Card.Description>
                  {post.desc}
                </Card.Description>
              </Grid.Column>
               <Grid.Column width={2}>
                  <Image src='./flower.jpg' size='tiny' shape='circular' spaced/>
                  {post.author}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );

    return(
      <List>
        <List.Item>{postList}</List.Item>
      </List>
    );
  }
}

export default PostsContainer = createContainer( () => {
	Meteor.subscribe('Posts');
	return { posts: Posts.find().fetch() }
}, Post);