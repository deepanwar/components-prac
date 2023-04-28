import React, { useEffect } from 'react';
import Heading from '../../components/Heading';
import { quizQuestions2 } from '../../data/quizQuestions';
import { useState } from 'react';

const bulletMap = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [stepCount, setStepCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [lockOptions, setLockOptions] = useState(false);

  useEffect(() => {
    setAllQuestions(shuffleArray(quizQuestions2));
  }, []);

  useEffect(() => {
    if (allQuestions?.length > 0) setCurrentQuestion(allQuestions[stepCount]);
  }, [allQuestions, stepCount]);

  // const handleSelectAnswer = (selectedOption) => {
  //   if (currentQuestion?.answer?.includes(selectedOption)) {
  //     console.log('correct');
  //   } else {
  //     console.log('wrong');
  //   }
  // };

  const handleNextButton = () => {
    if (stepCount < 2) {
      setStepCount((prev) => prev + 1);
    } else {
      console.log('finish');
    }
  };

  return (
    <div className="transition-all duration-500">
      <Heading>Quiz with Multiple Answers</Heading>
      <div className="flex justify-between items-center my-4 text-lg">
        <div>
          Question: {stepCount + 1}/{allQuestions?.length}
        </div>
        <div>1:04</div>
        <div className="">Score: 10</div>
      </div>
      {/* question card */}
      <div className="p-4 border rounded-lg border-slate-700">
        <h2 className="text-xl">{currentQuestion?.question}</h2>
        <ul className={`space-y-2 mt-4 ${lockOptions && 'pointer-event-none'}`}>
          {currentQuestion?.options?.map((option, index) => (
            <li
              className={`py-2 px-4 bg-slate-800 border border-transparent rounded hover:bg-slate-700/80 cursor-pointer ${
                option === selectedAnswer && '!border-rose-500'
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {bulletMap[index]}: &nbsp; {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleNextButton}
          className="px-8 py-1.5 bg-rose-500 text-white rounded"
        >
          {stepCount < 2 ? 'Next' : 'Done'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
