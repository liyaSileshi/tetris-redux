import React, { Component } from 'react'
import { connect } from 'react-redux'

// displays a message
class MessagePopup extends Component {
  render() {
    const {isRunning, gameOver} = this.props
    let message = ''
    let isHidden = 'hidden'

    // if game is running and  not game over
    if(isRunning && !gameOver){
      message = '?'
    }
    // if game is not running (paused)
    else if(!isRunning){
      message = 'Paused'
      isHidden = ''
    }
    // if game is not running (paused)
    else if(gameOver){
     message = 'Game Over'
     isHidden = ''
    }

    return(
      <div className={`message-popup ${isHidden}`}>
        <h1> {message}</h1>
        <p></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.game.isRunning,
    gameOver : state.game.gameOver
  }
}

const mapDispatchToProps = () => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps())(MessagePopup);