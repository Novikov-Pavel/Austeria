import { ABOUT, MAIN, ARTICLEPAGE } from "./consts";
import Main from "./pages/main";
import About from "./pages/about";
import ArticlePage from "./pages/articlePage";

export const pages = [
    {
        path: MAIN,
        element: <Main />,
        errorElement: <div>404</div>,
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
