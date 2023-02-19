import React from "react"
import Quiz from "./Quiz"

export default function Quizes() {

    const [quizes, setQuizes] = React.useState([]);
    const [oldQuizes, setOldQuizes] = React.useState([]);
    const [showAnswers, setShowAnswers] = React.useState(false);
    const [reset, setReset] = React.useState(true);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple')
        .then((response) => response.json())
        .then(data => setQuizes(data.results))
    }, [])

    React.useEffect(() => {
        if (reset === false){
            setOldQuizes(quizes)
            fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple')
            .then((response) => response.json())
            .then(data => setQuizes(data.results))
        }
    }, [reset])

    function checkAnswers(){
        setShowAnswers(prevShowAnswers => !prevShowAnswers);
        if (showAnswers){
            setReset(false)
        } else {
            setReset(true)
        }
    }

    function count(){
        setCounter(prevCount => prevCount+1)
    }

    function resetCount() {
        setCounter(0)
    }



    const allQuizes = quizes.map((quiz) => {
        return <Quiz question={quiz.question} resetCount={resetCount} setCounter={count} reset={reset} showAnswers={showAnswers} incorrect_answers={quiz.incorrect_answers} correct_answer={quiz.correct_answer} />
    })

    return (
        <div className="quizes">
            <div className="answer-btn">
                <div>
                    {(oldQuizes !== quizes) && allQuizes}
                </div>
                <div className="container">
                    {showAnswers && <p className="counter">You scored {counter}/5 correct answers</p>}
                    <div className="loading">
                        <button className="check-answers" onClick={checkAnswers}>{showAnswers ? "Play again" : "Check answers"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}