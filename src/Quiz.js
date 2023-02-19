import React from "react";
import {nanoid} from "nanoid";

export default function Quiz(props) {

	const [answers, setAnswers] = React.useState(questionAnswers())

	function questionAnswers() {
		const newAnswers = [...props.incorrect_answers];
		newAnswers.splice(Math.floor(Math.random() * (newAnswers.length + 1)), 0, props.correct_answer)

		for (let i = 0; i < newAnswers.length;i++){
			if (newAnswers[i] === props.correct_answer){
				newAnswers[i] = {value: newAnswers[i], isClicked: false, id: nanoid(), isCorrect: true}
			} else {
				newAnswers[i] = {value: newAnswers[i], isClicked: false, id: nanoid(), isCorrect: false}
			}
		}
		return newAnswers
	}

	React.useEffect(() => {
		if (!props.showAnswers){
			props.resetCount()
		} else {
			answers.map(ans => {
				if (ans.isClicked && ans.isCorrect){
					props.setCounter()
				}
			})
		}
	}, [props.showAnswers])

	React.useEffect(() => {
		setAnswers(questionAnswers())
	}, [props.question])

	function handleClick(id) {
		if (!props.showAnswers) {
			setAnswers(prevAnswers => prevAnswers.map(ans => {
				return ans.id === id ? {...ans, isClicked: true} : {...ans, isClicked: false}
			}))
		} 
		
	}


	const allAnswers = answers.map((ans) => {
		return <span className={`quiz-answer ${props.showAnswers ? ans.isCorrect ? "correct" : ans.isClicked ? "incorrect" : "neither" : ans.isClicked ? "held answer-color" : "answer-color"}`} onClick={() => handleClick(ans.id)}>{ans.value}</span>
	})

    return (
        <div className="quiz-div">
            <h3 className="quiz-question">{props.question}</h3>
            <div className="answers">
	            {allAnswers}
            </div>
            <hr />
        </div>
    )
}