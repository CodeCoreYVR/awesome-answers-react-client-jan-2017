import React from 'react';

function QuestionShow ({question} /* props.question */) {
  // when destructing we can define defaults for each property if
  // they don't exist
  const {
    id = '', title = '', body = '', created_on = ''
  } = question;

  return (
    <div className="QuestionShow">
      <h1>{title}</h1>
      <p>{body}</p>
      <p><strong>Created:</strong> {created_on}</p>
    </div>
  )
}

export default QuestionShow;
