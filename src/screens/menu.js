import "./Task.css"
import { useState, useRef } from "react";
import arrow from '../images/down.svg'



const Menu = ({ data, week }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("menu__icon");

    const content = useRef(null);

    function togglemenu() {

        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight + 80}px`
        );
        setRotateState(
            setActive === "active" ? "menu__icon" : "menu__icon rotate"
        );

    }
    return (
        <div className="menu__section">
            <button className={`menu ${setActive}`} onClick={togglemenu}>
                <p className="menu__title">WEEK  {week}</p>
                <img src={arrow} className={`${setRotate}`} width="15" height="15" />
            </button>
            <center
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="menu__content"
            >
                {/* <div
                    className="menu__text"
                    dangerouslySetInnerHTML={{ __html: item }}
                /> */}

                {data.map((item) => (
                    <div className="menu__text" >
                        {setActive ? item : ""}
                    </div>
                ))}
            </center>
        </div>
    )
}

export default Menu
