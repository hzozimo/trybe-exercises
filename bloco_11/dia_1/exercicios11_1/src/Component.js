import React from 'react'

const tasks = ['Estudar', 'com', 'Arlen', 'é', 'Magnifico']
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class Component extends React.Component {
  render() {
    return (tasks.map((el) => task(el)))
  }
}

export default Component;