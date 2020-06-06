import React, {Component} from 'react'
import { connect } from 'react-redux'
import {pause, resume, restart} from '../actions'

class ScoreBoard extends Component {
  render() {
    const {score, isRunning, gameOver, resume, restart, pause} = this.props

    return (
      <div className='score-board'>
        <div>Score: {score}</div>
        <div>Level: 1</div>
        <button className='score-board-button' onClick={(e)=>{
          if(gameOver) {return} // do nothing and return
          isRunning ? pause() : resume() //call either based of isRunning

        }}>{isRunning ? 'Pause' : 'Play'}</button>
        <button className='score-board-button' onClick={(e)=>{
          restart()
        }}>Restart</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score : state.game.score,
    isRunning : state.game.isRunning,
    gameOver : state.game.gameOver
  }
}

const mapDispatchToProps = () => {
  return {
    pause,
    resume,
    restart
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(ScoreBoard);