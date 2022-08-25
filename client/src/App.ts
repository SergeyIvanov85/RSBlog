import {Layout} from "./components/Layout.js";
import {Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/MainPage";
import {PostsPage} from "./pages/PostsPage";
import {PostPage} from "./pages/PostPage";
import {AddPostPage} from "./pages/AddPostPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {EditPostPage} from "./pages/EditPostPage";
import {AboutPage} from "./pages/AboutPage";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMe} from "./redux/features/auth/authSlice";
import {FeedPostsPage} from "./pages/FeedPostsPage";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path=':id' element={<PostPage />} />
        <Route path=':id/edit' element={<EditPostPage />} />
        <Route path='new' element={<AddPostPage />} />
        <Route path='feed' element={<FeedPostsPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>

      <ToastContainer position='bottom-right' />
    </Layout>
  );
}

export default App;
