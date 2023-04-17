import React from "react";
import * as DB from "../../DB";
import "../../SCSS/Components/main/articles.scss";
import { Link } from "react-router-dom";
import { ARTICLEPAGE, MAIN } from "../../consts";

let a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"A","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

let transliterate = word => word.toLowerCase().replace(/[\s\/\']/gi, '-').split('').map(e => a[e] || e).join("").replace(/[\']/gi,'')
console.log(transliterate('бббю'));
let articles = () => {
    return (
        <div className="articles">
            <div className="articles__tabs">
                {DB.articles.map((e) => {
                    return (
                        <Link to={`${ARTICLEPAGE}/${transliterate(e.title)}`} className="articles__tab">
                            {e.img ? (
                                <img
                                    src={e.img}
                                    alt={e.title}
                                    className="articles__tab__img"
                                />
                            ) : (
                                <div
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
                            <p className="articles__tab__subTitle">
                                {e.subTitle}
                            </p>
                        </Link>
                    );
                })}
            </div>
            <Link to={ARTICLEPAGE} className="articles__btn" ><span>СМОТРЕТЬ ВСЕ СТАТЬИ</span></Link>
        </div>
    );
};

export default articles;
