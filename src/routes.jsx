import { ABOUT, MAIN, ARTICLEPAGE } from "./consts";
import Main from "./pages/main";
import About from "./pages/about";
import ArticlePage from "./pages/articlePage";
import Page404 from "./pages/page404";

export const pages = [
    {
        path: MAIN,
        element: <Main />,
        errorElement: <Page404 />,
    },
    {
        path: ABOUT,
        element: <About />,
    },
    {
        path: ARTICLEPAGE,
        element: <ArticlePage />,
    },
];
