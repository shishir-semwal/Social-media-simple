import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import Sidebar  from './components/Sidebar'
import PostList from './components/PostList'

import PostListProvider from './store/post-list-store'
const App = () => {
 const [selectedTab,setSelectedTab]= useState("Create Post");
  return (
    <PostListProvider>
    <div>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
       <div className="content">
       <Header/>
       {selectedTab==='Home'?<PostList/>:<CreatePost/>
       }
       
       <Footer/>
       </div>
      </div>         
    </div>
    </PostListProvider>
  )
}

export default App