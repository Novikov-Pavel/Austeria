import { ABOUT, MAIN } from "./consts";
import Main from "./pages/main";
import About from "./pages/about";

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
];
