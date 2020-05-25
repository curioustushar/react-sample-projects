import React, { useState } from 'react';

const questions = [
  {
    title: 'do you accept all major credit cards?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  },
  {
    title: 'do you suppport local farmers?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  },
  {
    title: 'ddo you use organic ingredients?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  }
];
function App() {
  const [selectQuestion, setSelectQuestion] = useState('');
  const toggleQuestion = (idx) => {
    const currentIdx = selectQuestion === idx ? '' : idx;
    setSelectQuestion(currentIdx);
  };
  return (
    <div className="App">
      <section className="questions">
        <div className="title">
          <h2>general questions</h2>
        </div>
        <div className="section-center">
          {questions.map((question, index) => (
            <article
              className={
                selectQuestion === index ? 'question show-text' : 'question'
              }
              key={index}
            >
              <div className="question-title">
                <p>{question.title}</p>
                <button
                  type="button"
                  className="question-btn"
                  onClick={(e) => toggleQuestion(index)}
                >
                  <span className="plus-icon">&#43;</span>
                  <span className="minus-icon">&#45;</span>
                </button>
              </div>
              <div className="question-text">
                <p>{question.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
