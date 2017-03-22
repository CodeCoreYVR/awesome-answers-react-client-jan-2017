import React from 'react';

function QuestionNew ({question, onSubmit = () => {}}) {
  const handleSubmit = event => {
    event.preventDefault();
    // the FormData constructor can be used to created
    // form data object from a form node
    // the object will hold the values from all its input
    // fields under their name attribute
    // loop over each with .forEach
    // get individual values with .get('title')
    // set values with .set('title', 'Rob')
    const fData = new FormData(event.currentTarget);
    onSubmit({
      title: fData.get('title'),
      body: fData.get('body')
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* for is a reserved word in javascript, use htmlFor
          in labels html attributes instead */}
        <label htmlFor="questionTitle">Title: </label>
        <input id="questionTitle" name="title"/>
      </div>
      <div>
        <textarea id="questionBody" name="body">
        </textarea>
      </div>
      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  )
}

export default QuestionNew;
