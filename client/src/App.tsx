//import { AddPostPage } from "./pages/AddPostPage";
import {useEffect} from "react";
import { useAppDispatch } from "./redux/hooks";
import { getMe } from "./redux/features/auth/authSlice";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Routes, Route} from "react-router-dom";

import {Layout} from "./components/Layout";
import {MainPage} from "./pages/MainPage";
import { PostPage } from "./pages/PostPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {AddPostPage} from "./pages/AddPostPage";
import {PostsPage} from "./pages/PostsPage";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(getMe())
  }, [dispatch])

return (
  <Layout>
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path=':id' element={<PostPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='new' element={<AddPostPage />} />
      <Route path='posts' element={<PostsPage />} />
    </Routes>
    <ToastContainer position='bottom-right' />
  </Layout>
);
}

export default App;