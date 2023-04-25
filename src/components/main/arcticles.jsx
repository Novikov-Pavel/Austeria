import React, { useState } from "react";
import * as DB from "../../DB";
import { Link } from "react-router-dom";
import { ARTICLEPAGE } from "../../consts";
import Paginate from "./paginate";
import paginationLeft from '../../assets/img/Components/main/pagination-left.svg'
import paginationRight from '../../assets/img/Components/main/pagination-right.svg'
import "../../SCSS/Components/main/articles.scss";

let a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"A","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

export let transliterate = word => {
    return word.toLowerCase().replace(/[\s\/]/gi, '-').split('').map(e => a[e] || e).join("").replace(/[\'\"]/gi,'')}

let Articles = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [artsPerPage] = useState(6)

    const lastItem = currentPage * artsPerPage
    const firstItem = lastItem - artsPerPage
    const currentItem = DB.articles.slice(firstItem, lastItem)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="articles">
            <div className="articles__tabs">
                {currentItem.map((e) => {
                    return (
                        <Link to={`${ARTICLEPAGE}/${transliterate(e.title)}`} className="articles__tab" key={e.id}>
                            {e.img ? (
                                <img
                                    key={e.id}
                                    src={e.img}
                                    alt={e.title}
                                    className="articles__tab__img"
                                />
                            ) : (
                                <div
                                    key={e.id}
                                    className="articles__tab__square"
                                    style={{
                                        backgroundColor:
                                            "#" +
                                            `${Math.floor(
                                                Math.random() * 9999
                                            ).toString(16)}`,
                                    }}
                                ></div>
                            )}
                            <p className="articles__tab__title">{e.title}</p>
                            <p className="articles__tab__subTitle">{e.subTitle}</p>
                        </Link>
                    );
                })}
            </div>
            <div className="articles__pagination">
                <img alt={''} src={paginationLeft} onClick={() => paginate(1)}/>
                <Paginate
                    key={Date.now()}
                    artsPerPage={artsPerPage} 
                    totalItems={DB.articles.length} 
                    paginate={paginate} 
                    currentPage={currentPage}
                    />
                <img alt={''} src={paginationRight} onClick={() => paginate(Math.ceil(DB.articles.length/artsPerPage))}/>
            </div>
            <Link to={ARTICLEPAGE} className="articles__btn" ><span>СМОТРЕТЬ ВСЕ СТАТЬИ</span></Link>
        </div>
        
    );
};

export default Articles;
