import "./NotFound.sass"
import { Link } from "react-router-dom"
import { React } from 'react';

const NotFound = () => {
    return (
        <main className="not-found">
            <h2 className="pink-text h2-tag">Welcome , This is Rohith Reddy Portfolio</h2>
            <p className="gray-text ">Lets Deep Dive in it</p>
            <Link className="pink-text" to="/">Homepage</Link>
        </main>
    )
}
export default NotFound;