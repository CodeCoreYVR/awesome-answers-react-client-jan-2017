import React, { Component } from 'react';
import QuestionsIndex from './components/QuestionsIndex';
import QuestionShow from './components/QuestionShow';
import './App.css';

// Step 1: Test that your API backend working correctly with
//         some fetch requests
//         fetch(
//           'http://localhost:3000/api/v1/questions?api_key=5b57085ae04f8078d2f47230c5442344'
//         )
//         .then(r => r.text()).then(console.info)
// Step 2: Write a method, getQuestions, to fetch all questions from the Awesome
//         Answers API. It should save the questions that it gets back in the
//         state with this.setState after it's complete.
// Step 3: Write a QuestionsIndex component to render all the questions saved in
//         in the state from the previous step. Best practice to keep in its own
//         file and import it.
// Step 4: Write a getQuestion function to fetch the data for one quesiton, then
//         write a QuestionShow component to display that question

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = '5b57085ae04f8078d2f47230c5442344';

class App extends Component {
  constructor (props) {
    // Don't forget to use super(props) before changing this
    // in any class-based React Component when using the constructor
    super(props);

    this.state = {
      question: null,
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

  getQuestion (id) {
    // to add get parameters
    // at the end of a url add a question mark, `?`
    // then, everything that follows will be parameters
    // they're written as such `api_key=78daSDASD7dsa`
    // the above would make a param availabe in the params object of a rails
    // action (e.g. params[:api_key])
    // to have multiple get parameters, seperate each one with a `&`
    // (e.g. `api_key=78daSDASD7dsa&page=3&name=Jane`)
    fetch(`${BASE_URL}/questions/${id}?api_key=${API_KEY}`)
    .then(r => r.json())
    // once the questions json is parsed from the rail's api
    // we extract it and save it in the state
    .then(question => this.setState({ question }))
  }

  // componentDidMount is a lifecycle callback that is executed when
  // this component is finally rendered the user's browser
  componentDidMount () {
    this.getQuestions();
    this.getQuestion(78);
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        {/* <ul>
          {
            this.state.questions.map(
              question => <li key={question.id}>{question.title}</li>
            )
          }
        </ul> */}
        <QuestionShow question={this.state.question || {}} />
        <QuestionsIndex questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
