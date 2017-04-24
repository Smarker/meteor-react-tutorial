import React from 'react';
import { Label, Form, Button } from 'semantic-ui-react'
import { Posts } from '../imports/Post';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', desc: '', author: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let s = {};
    s[type] = event.target.value;
    this.setState(s);
  }

  handleSubmit(event) {
    console.log('A title was submitted: ' + this.state.title);
    console.log('A desc was submitted: ' + this.state.desc);
    console.log('A author was submitted: ' + this.state.author);

    Posts.insert({
      title: this.state.title, 
      desc: this.state.desc,
      author: this.state.author, 
      dateCreated: "4/24/2017"
    });
  
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Post Title:</label>
          <input placeholder='title' value={this.state.title} onChange={(event) => {this.handleChange(event, "title")}} />
        </Form.Field>
        <Form.Field>
          <label>Post Description:</label>
          <input placeholder='description' value={this.state.description} onChange={(event) => {this.handleChange(event, "desc")}} />
        </Form.Field>
        <Form.Field>
          <label>Post Author:</label>
          <input placeholder='author' value={this.state.user} onChange={(event) => {this.handleChange(event, "author")}} />
        </Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}