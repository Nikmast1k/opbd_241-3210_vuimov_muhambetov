import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import AuthPage from "./pages/AuthPage/AuthPage";

const App = () => {
    return (
        <div>
            {
                localStorage.getItem('isLoggedIn')
                    ? (
                        <Routes>
                            <Route index path='/' element={<HomePage />} />
                            <Route index path='/posts' element={<PostsPage />} />
                            <Route index path='/posts/:id' element={<PostDetailsPage />} />
                            <Route index path='/create' element={<CreatePostPage />} />
                        </Routes>
                    )
                    : <AuthPage />
            }
        </div>
    );
};

export default App;