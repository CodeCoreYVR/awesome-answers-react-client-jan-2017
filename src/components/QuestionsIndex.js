import React from 'react';


// onQuestionClick is a callback received as a prop
// it will be called by our QuestionsIndex component when an individual
// question is clicked passing it the id of question as its only argument
function QuestionsIndex ({questions, onQuestionClick = () => {}} /* props.questions */) {

  const handleClick = event => {
    const questionId = event.target.getAttribute('data-id');
    // 👇 calling the onQuestionClick callback
    onQuestionClick(questionId);
  }

  return (
    <ul className="QuestionsIndex">
    {
      questions.map(
        // there are several ways to hold data in a component,
        // here we use a custom html attribute to hold the id of the question
        // that way we can know which one was clicked
        q => (
          <li
            data-id={q.id}
            onClick={handleClick}
            key={q.id}>
            {q.title}
          </li>
        )
      )
    }
    </ul>
  )
};

export default QuestionsIndex;
