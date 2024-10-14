import React, { useEffect, useState } from 'react';
import { questions as allQuestions } from '../constants/questions.js';
import { useNavigate, useSearchParams } from 'react-router-dom';
import OptionCard from '../components/OptionCard.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import HeaderCard from '../components/HeaderCard.jsx';
import correctAns from '/correct-ans.mp3';
import wrongAns from '/wrong-ans.mp3';


const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(0); // 0 --> Not selected, -1 --> Wrong answer, 1--> Correct answer 

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const correctAudio = new Audio(correctAns);
  const wrongAudio = new Audio(wrongAns);

  const numQuestions = parseInt(searchParams.get('numQuestions'), 10);
  const category = searchParams.get('category');

  // Handle option selection and evaluate the answer immediately
  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsOptionSelected(true); // Enable the "Next" button

    // Check if the selected option is correct
    if (option === currentQuestion.correctAnswer) {
      correctAudio.play();
      setCurrentScore((prevScore) => prevScore + 1);
      setAnswerStatus(1); // Correct answer
    } else {
      wrongAudio.play();
      setAnswerStatus(-1); // Wrong answer
    }
  };

  useEffect(() => {
    // Filter questions based on the selected category
    const q = allQuestions.filter((ques) => ques.category.toLocaleLowerCase() === category.toLocaleLowerCase());
    setFilteredQuestions(q.slice(0, numQuestions)); // Limit to numQuestions

    // Update current question
    if (q.length > 0) {
      setCurrentQuestion(q[currentQuestionIndex]);
    }

    setAnswerStatus(0);
  }, [currentQuestionIndex, category]); // Include category to ensure questions update if category changes

  const handleSubmit = () => {
    // Navigate to the result page and pass the score using state
    if (filteredQuestions.length > 0) {
      navigate("/result", { state: { score: currentScore, totalQuestions: filteredQuestions.length } });
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(""); // Reset the selected option for the next question
      setIsOptionSelected(false); // Disable "Next" button until a new option is selected
    } else {
      handleSubmit(); // Handle the result
    }
  };

  return (
    <div className={`min-h-[100vh] ${answerStatus === 0 ? 'diagonal-gradient' : answerStatus === -1 ? 'bg-[#FF7A7A]' : 'bg-green-400'} px-[10px] sm:px-[40px] md:px-[120px] lg:px-[200px] pt-[40px] flex flex-col gap-2`}>
      <HeaderCard level={currentQuestion?.level} totalQuestions={filteredQuestions.length} currentQuestionIndex={currentQuestionIndex} />
      <QuestionCard question={currentQuestion?.question} level={currentQuestion?.level} /> 
      <div className='min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[420px] flex flex-col justify-between items-center bg-[#F5F5F5] rounded-md p-2'>
        {currentQuestion?.options?.map((option, index) => (
          <OptionCard 
            key={index}
            option={option}
            isSelected={selectedOption === option}
            isCorrect={option === currentQuestion.correctAnswer}
            onClick={() => handleSelection(option)}
            isDisabled={isOptionSelected}
          />
        ))}
      </div>
      <button 
        onClick={handleNextQuestion} 
        className={`mt-4 p-2 text-white rounded ${isOptionSelected ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
        disabled={!isOptionSelected} // Disable Next button until an option is selected
      >
        {filteredQuestions.length - 1 === currentQuestionIndex ? 'Submit' : 'Next'}
      </button>
      {/* <div className='mt-4'>Current Score: {currentScore}</div> */}
      <p className='fixed bottom-2 left-1/2 -translate-x-1/2 text-xs text-[#858585]'>Made with 💖 by Rupanjan</p>
    </div>
  );
};

export default Question;
