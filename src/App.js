import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }

  }

  handleClickAge = () => {
    this.setState({
      sortBy: 'age'
    })
  }

  handleClickName = () => {
    this.setState({
      sortBy: 'name'
    })
  }

  handleClickPoints = () => {
    this.setState({
      sortBy: 'points'
    })
  }

  handleClickRank = () => {
    this.setState({
      sortBy: 'rank'
    })
  }

  render() {
    const {sortBy} = this.state
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age click={this.handleClickAge}></Age>
          <Name click={this.handleClickName}></Name>
          <Points click={this.handleClickPoints}></Points>
          <Rank click={this.handleClickRank}></Rank>
          <Table sortBy={sortBy}></Table>
        </div>
      </div>
    );
  }
}

