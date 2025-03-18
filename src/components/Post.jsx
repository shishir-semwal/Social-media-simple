import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListData } from '../store/post-list-store';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";


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
    &nbsp;
    {post.reactions.likes}<AiOutlineLike />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {post.reactions.dislikes} <AiOutlineDislike />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     {post.views} <MdRemoveRedEye />
<br /><br />
    {post.tags.map((tag)=><span key={tag} className="badge text-bg-primary hashtag">{tag}&nbsp;</span>)}
    
  </div>
</div>
    </div>
  )
}

export default Post