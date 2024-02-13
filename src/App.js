
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./global/layout";
import Index from "./pages/home";
import TitlePage from "./pages/title";
import AuthorContact from "./pages/features/authorContact";
import SinglePost from "./pages/singlePost";
import CreateBlogPost from "./pages/createBlog";
import Login from "./pages/loginPage";
import SignupPage from "./pages/singUp";

function App() {
  return (

    // <ThemeProvider>
      <div>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/blogs" exact element={<TitlePage />} />
            <Route path="/author" exact element={<AuthorContact />} />
            <Route path="/blog_post/:id" exact element={<SinglePost />} />
            {/* <privateRoute path="/create_blog" exact element={<CreateBlogPost />}/> */}
            <Route path="/create_blog" exact element={<CreateBlogPost />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignupPage />} />
          </Routes>

        </Layout>
      </div>
    // </ThemeProvider>

  );
}

export default App;
