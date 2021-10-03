import { Link } from 'react-router-dom'
import "./Task.css"

const Home = () => {

    return <div className="container">
        <Link
            to="/task1"
            className="item"
        >
            Task 1
        </Link>
        <Link
            to="/task2"
            className="item"
        >
            Task 2
        </Link>
    </div>
}

export default Home
