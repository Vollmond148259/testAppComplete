import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import PropTypes from "prop-types";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import MainPage from "./mainPage";
import CreatePostPage from "./createPostPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/layout";
import ArticlePage from "./articlePage";
App.propTypes = {
  emotionCache: PropTypes.object,
};
const clientSideEmotionCache = createEmotionCache();
function App({ emotionCache = clientSideEmotionCache }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<MainPage />} />
              <Route path="articles/:id" element={<ArticlePage />} />
              <Route path="articles/create" element={<CreatePostPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
