import React, { useContext,useRef } from 'react'
import { PostListData } from '../store/post-list-store';

const CreatePost = () => {
  const {addPost}=useContext(PostListData);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const likesElement=useRef();
  const dislikesElement=useRef();
  const viewsElement=useRef();
  const tagsElement=useRef();

  let handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const likes=likesElement.current.value;
    const views=viewsElement.current.value;
    const dislikes=dislikesElement.current.value;
    const tags=tagsElement.current.value.split(' ');

    userIdElement.current.value="";
    postTitleElement.current.value="";
    likesElement.current.value="";
    dislikesElement.current.value="";
    viewsElement.current.value="";
    postBodyElement.current.value="";
    tagsElement.current.value="";
    
    addPost(userId,postTitle,postBody,{likes,dislikes},views,tags);
  }

  return (
    <div>
      <form className='create-post' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="user-id"  className="form-label">User Id</label>
    <input type="text" ref={userIdElement} className="form-control" id="user-id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="body"  className="form-label">Body</label>
    <textarea rows="3" ref={postBodyElement} type="text" className="form-control" id="body"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="like"  className="form-label">Like</label>
    <input type="text" ref={likesElement} className="form-control" id="like"/>
  </div>
  <div className="mb-3">
    <label htmlFor="dislike"  className="form-label">Dislike</label>
    <input type="text" ref={dislikesElement} className="form-control" id="dislike"/>
  </div>
  <div className="mb-3">
    <label htmlFor="views" className="form-label">Views</label>
    <input type="text" ref={viewsElement}  className="form-control" id="views"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" ref={tagsElement}  className="form-control" id="tags"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </div>
  )
}

export default CreatePost