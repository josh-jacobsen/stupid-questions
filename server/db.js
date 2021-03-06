import knex from 'knex'
import config from '../../knexfile'

function getConnection () {
  return knex(config.development)
}

export function getQuestions () {
  const connection = getConnection()
  const questions = connection('questions')
    .select()
    .catch(handleError)
  connection.destroy()
  return questions
}

export function getQuestionById (id) {
  const connection = getConnection()
  const question = connection('questions')
    .where('id', '=', id)
    .catch(handleError)
  connection.destroy()
  return question
}

export function getAnswersByQuestionId (id) {
  const connection = getConnection()
  const answers = connection('answers')
    .where('question_id', '=', id)
    .catch(handleError)
  connection.destroy()
  return answers
}

export function addQuestion (question) {
  const connection = getConnection()
  const newQuestion = connection('questions')
    .insert({content: question})
    .catch(handleError)
  connection.destroy()
  return newQuestion
}

export function addAnswer (id, answer) {
  id = parseInt(id)
  const connection = getConnection()
  const newAnswer = connection('answers')
    .insert({question_id: id, content: answer})
    .catch(handleError)
  connection.destroy()
  return newAnswer
}


function handleError (err) {
  console.error(err);
  return Promise.reject(new Error('There was a database error!'))
}
