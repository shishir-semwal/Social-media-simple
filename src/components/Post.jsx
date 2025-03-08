import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListData } from '../store/post-list-store';

const Post = ({post}) => {
  const {deletePost}=useContext(PostListData);
  return (
    <div>
      <div className="card post-card" style={{width: "30rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <MdDelete />

    <span className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{post.body}</p>
    <div className="alert alert-success reactions " role="alert">
    <p>This post got {post.reactions} reactions</p>
</div>
    {post.tags.map((tag)=><span key={tag} className="badge text-bg-primary hashtag">{tag}&nbsp;</span>)}
    
  </div>
</div>
    </div>
  )
}

export default Post