import React from 'react';


// onQuestionClick is a callback received as a prop
// it will be called by our QuestionsIndex component when an individual
// question is clicked passing it the id of question as its only argument
function QuestionsIndex ({questions, onQuestionClick = () => {}} /* props.questions */) {

  // this function takes in an id and returns a function that is
  // meant to be used as a callback to handle clicks on questions
  // we construct it this way to take advantage of closure to store
  // the id of the question
  const handleClick = id => event => {
    onQuestionClick(id);
  };

  return (
    <ul className="QuestionsIndex">
    {
      questions.map(
        // there are several ways to hold data in a component,
        // here we use a custom html attribute to hold the id of the question
        // that way we can know which one was clicked
        q => (
          // <li
          //   onClick={() => {
          //     const fn = handleClick(q.id);
          //     console.dir(fn);
          //     fn();
          //   }}
          //   key={q.id}>
          //   {q.title}
          // </li>
          // For every question iterated over by map,
          // a function is created by handleClick with the id
          // of the question saved in the closure
          <li
            onClick={handleClick(q.id)}
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
