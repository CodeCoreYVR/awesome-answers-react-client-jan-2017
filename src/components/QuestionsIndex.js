import React from 'react';

function QuestionsIndex ({questions} /* props.questions */) {
  return (
    <ul className="QuestionsIndex">
    {
      questions.map(
        q => <li key={q.id}>{q.title}</li>
      )
    }
    </ul>
  )
};

export default QuestionsIndex;
