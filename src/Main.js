import React from "react";
import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div className="center-div">
            <div className="center">
                <h2 className="title">Quizzical</h2>
                <h4 className="description">Press the button to start</h4>
                <Link to="/quiz">
                    <button className="quizBtn">Start quiz</button>
                </Link>
            </div>
        </div>

    )
}