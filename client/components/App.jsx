import React from 'react'

import Questions from './Questions'
import questionList from '../dummy/questions'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Stupid Questions</h1>
        <Questions questions={questionList}/>
      </div>
    )
  }
})
