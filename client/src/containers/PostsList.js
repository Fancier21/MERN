import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, onDeletePost } from '../actions';
import Post from './Post';

class PostsList extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts = posts => (
		posts.map(post => 
    	<li key={post._id}>
    		<Post 
    			{...post} onDeletePost={this.props.onDeletePost}/>
    	</li>)
	)

  render() {
    return (
      <div>
        <ul>{this.renderPosts(this.props.posts)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	posts: state.posts
})

export default connect(mapStateToProps, { fetchPosts, onDeletePost })(PostsList)
