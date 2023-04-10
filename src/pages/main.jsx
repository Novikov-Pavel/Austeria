import React from "react";
import HEADER from "../components/header";
import FOOTER from "../components/footer";
import BANNER from "../components/main/banner";
import SECONDDISPLAY from "../components/main/secondDisplay";

function main() {
    return (
        <>
            <HEADER />
            <BANNER />
            <SECONDDISPLAY />
            <FOOTER />
        </>
    );
}

export default main;
