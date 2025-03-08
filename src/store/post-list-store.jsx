import { createContext, useReducer } from "react";

export const  PostListData=createContext({
  postList:[],
  addPost:()=>{},
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

 return newPostList;
}


const  PostListProvider=({children})=>{

  const DEFAULT_POST_LIST=[{
    id:'1',
    title:'GOING TO MUMBAI',
    body:'Very nice city,enjoying my time over here.You should visit too',
    reactions:3,
    userId:'user01',
    tags:["mumbai","travel","enjoy"],
    },
    {
      id:'2',
      title:'College Over',
      body:'Never knew I could do it,lol, how did i do it ',
      reactions:15,
      userId:'user02',
      tags:["exam","tech","achivement"],
      }];
  

  const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
const addPost=(userId,postTitle,postBody,reactions,tags)=>{
dispatchPostList({
  type:"ADD_POST",
  payload:{
  id:Date.now(),
  title:postTitle,
  body:postBody,
  reactions:reactions,
  userId:userId,
  tags:tags,
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
    
  
return (< PostListData.Provider value={{postList,addPost,deletePost}}>{children}</ PostListData.Provider>);


}

export default PostListProvider

