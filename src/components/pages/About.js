import React from 'react'

function About() {
  return (
    // ghost element. It doesn't appear on the dom but is needed
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React Crash Course.</p>
    </React.Fragment>
  )
}

export default About