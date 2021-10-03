// import sky from "../images/sky.png"
// import landscape from "../images/landscape"
import "./Task.css"

var sky = require('../images/sky.png')
var landscape = require('../images/landscape.png')

const Task1 = () => {
    return (
        <>
            <img className="sky" src={sky.default} />
            <img className="landscape" src={landscape.default} />
        </>
    )
}

export default Task1
