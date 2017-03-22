import React from 'react';


// the onBackClick prop should be a callback that is triggered when the
// the <<< anchor is clicked
function QuestionShow ({question, onBackClick = () => {}} /* props.question */) {
  // when destructing we can define defaults for each property if
  // they don't exist
  const {
    id = '', title = '', body = '', created_on = ''
  } = question;

  return (
    <div className="QuestionShow">
      <a
        onClick={onBackClick}
        href="#">{'<<<'}</a>
      <h1>{title}</h1>
      <p>{body}</p>
      <p><strong>Created:</strong> {created_on}</p>
    </div>
  )
}

export default QuestionShow;
