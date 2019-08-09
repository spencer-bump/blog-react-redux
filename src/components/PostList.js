import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    return(
      <div>
        Post List
      </div>
    );
  };
};

// don't need state, therefore pass 'null'
export default connect(
  null,
  { fetchPosts }
)(PostList);
