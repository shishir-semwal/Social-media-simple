import React, { useContext,useRef } from 'react'
import { PostListData } from '../store/post-list-store';

const CreatePost = () => {
  const {addPost}=useContext(PostListData);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  let handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');

    userIdElement.current.value="";
    postTitleElement.current.value="";
    reactionsElement.current.value="";
    postBodyElement.current.value="";
    tagsElement.current.value="";
    
    addPost(userId,postTitle,postBody,reactions,tags);
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
    <label htmlFor="reaction"  className="form-label">Reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reaction"/>
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