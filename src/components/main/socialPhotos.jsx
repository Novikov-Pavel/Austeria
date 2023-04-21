import React from "react";
import "../../SCSS/Components/main/socialPhotos.scss";

let socialPhotos = ({ img, id }) => {
    return (
        <div className="socialPhotos" key={id}>
            <img className="socialPhotos__img" src={img} alt={id} />
        </div>
    );
};

export default socialPhotos;
