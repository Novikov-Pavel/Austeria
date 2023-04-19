import React from "react";
import { Link } from "react-router-dom";
import "../../SCSS/Components/main/paginate.scss";

let Paginate = ({
    artsPerPage,
    totalItems,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / artsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="paginate">
            {pageNumbers.map((e) => {
                let klass = "";
                e === currentPage
                    ? (klass = "paginate__link paginate__link-active")
                    : (klass = "paginate__link");

                return (
                    <span key={e} className="paginate__pages">
                        <Link
                            to=""
                            className={klass}
                            onClick={() => paginate(e)}
                        >
                            {e}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Paginate;
