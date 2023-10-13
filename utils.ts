const questions = require('./questions.json')
const { Random } = require('random-js');

 const getRandomQuestion = (topic: string) => {
  const random = new Random()
  let questionTopic = topic.toLowerCase();
  if(questionTopic === 'случайный вопрос') {
    questionTopic = Object.keys(questions)[random.integer(0, Object.keys(questions).length - 1)]
  }
  const randomQuestionIndex =  random.integer(0, questions[questionTopic].length - 1)

  return {
    question: questions[questionTopic][randomQuestionIndex],
    questionTopic,
  }
}

const getCorrectAnswer = (topic: string, id: string) => {
  const question = questions[topic].find((question) => question.id === id)

  if (!question.hasOptions) {
    return question.answer
  }

  return question.options.find((option) => option.isCorrect).text
}

export {getRandomQuestion, getCorrectAnswer}