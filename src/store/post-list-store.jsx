import { createContext, useReducer } from "react";

export const  PostListData=createContext({
  postList:[],
  addPost:()=>{},
  addInitialPosts:()=>{},
  deletePost:()=>{},
});

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;  

  if(action.type === 'DELETE_POST'){
    newPostList=currPostList.filter((post)=>post.id !== action.payload.postId);
  }
  else if (action.type === 'ADD_POST'){
    newPostList=[action.payload,...currPostList]
  }
  else if (action.type === 'ADD_INITIAL_POST'){
    newPostList=action.payload.posts;
  }

 return newPostList;
}


const  PostListProvider=({children})=>{

   

  const [postList,dispatchPostList]=useReducer(postListReducer,[]);
const addPost=(userId,postTitle,postBody,reactions,views,tags)=>{
dispatchPostList({
  type:"ADD_POST",
  payload:{
  id:Date.now(),
  title:postTitle,
  body:postBody,
  reactions:reactions,
  views:views,
  userId:userId,
  tags:tags,
  }

})
}

const addInitialPosts=(posts)=>{
  dispatchPostList({
    type:"ADD_INITIAL_POST",
    payload:{
    posts
    }
  
  })
  }


const deletePost=(postId)=>{

  dispatchPostList({
    type:"DELETE_POST",
    payload:{
      postId,
    },
  });
}
    
  
return (< PostListData.Provider value={{postList,addInitialPosts,addPost,deletePost}}>{children}</ PostListData.Provider>);


}

export default PostListProvider;

