import React, { Component } from 'react';
import './App.css';

// Step 1: Test that your API backend working correctly with
//         some fetch requests
//         fetch(
//           'http://localhost:3000/api/v1/questions?api_key=5b57085ae04f8078d2f47230c5442344'
//         )
//         .then(r => r.text()).then(console.info)
// Step 2: Write a method, getQuestions, to fetch all questions from the Awesome
//         Answers API. It should save the questions that it gets back in the
//         state with this.setState after it's complete

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = '5b57085ae04f8078d2f47230c5442344';

class App extends Component {
  constructor (props) {
    // Don't forget to use super(props) before changing this
    // in any class-based React Component when using the constructor
    super(props);

    this.state = {
      questions: []
    }
  }

  getQuestions () {
    fetch(`${BASE_URL}/questions?api_key=${API_KEY}`)
    .then(r => r.json())
    // once the questions json is parsed from the rail's api
    // we extract it and save it in the state
    .then(({questions}) => this.setState({questions}))
  }

  // componentDidMount is a lifecycle callback that is executed when
  // this component is finally rendered the user's browser
  componentDidMount () {
    this.getQuestions();
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        <ul>
          {
            this.state.questions.map(
              question => <li key={question.id}>{question.title}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
