import React, { useState, useEffect } from "react";
import Riddles from "../assets/riddles.js";
import Answers from "../assets/answers.js";
import Hints from "../assets/hints.js";

const RiddleGame = () => {
    const [riddles, setRiddles] = useState({});
    const [answers, setAnswers] = useState({});
    const [hints, setHints] = useState({});
    const [currentRiddleId, setCurrentRiddleId] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        setRiddles(Riddles);
        setAnswers(Answers);
        setHints(Hints);

        const riddleIds = Object.keys(Riddles);
        if (riddleIds.length > 0) {
            setCurrentRiddleId(
                riddleIds[Math.floor(Math.random() * riddleIds.length)]
            );
        }
    }, []);

    const checkAnswer = (userAnswer, correctAnswer) => {
        const regex = new RegExp(`^${correctAnswer}$`, "i");
        return regex.test(userAnswer);
    };

    const handleNextRiddle = () => {
        const riddleIds = Object.keys(riddles);
        if (riddleIds.length > 0) {
            setCurrentRiddleId(
                riddleIds[Math.floor(Math.random() * riddleIds.length)]
            );
            setUserAnswer("");
            setShowHint(false);
            setFeedback("");
            setShowNextButton(false);
        }
    };

    const handleSubmit = () => {
        if (
            currentRiddleId &&
            checkAnswer(userAnswer, answers[currentRiddleId])
        ) {
            setScore(score + 1);
            setFeedback("Correct!");
        } else {
            setFeedback(
                `Incorrect. The correct answer is: ${answers[currentRiddleId]}`
            );
        }
        setAnswered(answered + 1);
        setShowNextButton(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <img
                src="/flix-riddle.png"
                alt="Flix Riddles"
                className="w-[150px] h-[150px]"
            />
            <h1 className="text-4xl font-bold mb-6 dark:text-white">
                Flix Riddles
            </h1>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md">
                {currentRiddleId && (
                    <>
                        <p className="text-lg mb-4 dark:text-gray-300">
                            {riddles[currentRiddleId]}
                        </p>
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                            className="border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded p-2 w-full mb-4"
                            placeholder="Your answer"
                            disabled={showNextButton} // Disable input after submission
                        />
                        <button
                            onClick={() => setShowHint(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Hint
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            disabled={showNextButton} // Disable submit button after submission
                        >
                            Submit
                        </button>
                        {showHint && (
                            <p className="mt-4 text-yellow-600">
                                {hints[currentRiddleId]}
                            </p>
                        )}
                        {feedback && (
                            <p
                                className={`mt-4 ${
                                    feedback.includes("Correct")
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}
                            >
                                {feedback}
                            </p>
                        )}
                        {showNextButton && (
                            <button
                                onClick={handleNextRiddle}
                                className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                            >
                                Next
                            </button>
                        )}
                    </>
                )}
            </div>
            <p className="mt-6 dark:text-white">
                Score: {score}/{answered}
            </p>
        </div>
    );
};

export default RiddleGame;
