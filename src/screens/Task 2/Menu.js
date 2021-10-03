import "../Task.css"
import { useState, useRef } from "react";
import arrow from '../../images/down.svg'



const Menu = ({ data, week }) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [turn, setTurn] = useState("menu-icon");

    const content = useRef(null);

    function handleToggle() {

        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "0px" : `${200}px`
        );
        setTurn(
            active === "active" ? "menu-icon" : "menu-icon rotate"
        );

    }
    return (
        <div className="menu-section">
            <button className={`menu ${active}`} onClick={handleToggle}>
                <p className="menu-title">WEEK  {week}</p>
                <img src={arrow} className={`${turn}`} width="15" height="15" />
            </button>
            <center
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="menu-content"
            >
                {data.map((item) => (
                    <div className="menu-text" >
                        {active ? item : ""}
                    </div>
                ))}
            </center>
        </div>
    )
}

export default Menu
