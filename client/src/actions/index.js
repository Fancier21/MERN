
export const postsList = (posts) => ({
	type: 'POSTS_LIST',
	payload: posts
})

function fetchPostsJson() {
	return fetch('/api/post')
	.then(response => response.json())
}

export function fetchPosts() {
	return function(dispatch) {
		return fetchPostsJson()
			.then(json => dispatch(postsList(json)))
	}
}




export const addPost = (post) => ({
	type: 'ADD_POST',
	payload: post
})

export function onAddPost(data) {
  return dispatch => {
    return fetch('/api/post', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(data => dispatch(addPost(data)));
  }
}




export const deletePost = (postId) => ({
	type: 'DELETE_POST',
	payload: postId
})

export function onDeletePost(id) {
  return dispatch => {
    return fetch(`/api/post/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(data => dispatch(deletePost(id)));
  }
}




// export const updatePost = (post) => ({
//   type: 'UPDATE_POST',
//   payload: post
// })

// export function onEditPost(data) {
//   return dispatch => {
//     return fetch(`/api/post/${data._id}`, {
//       method: 'put',
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(response => response.json())
//     .then(data => dispatch(updatePost(data)));
//   }
// }


