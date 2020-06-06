import React, { Component } from 'react'
import GridSquare from './grid-square'
import {connect} from 'react-redux'
import { shapes } from '../utils'

// draws the next block view showing the next block to drop
class NextBlock extends Component {
  makeGrid() {
    // deconstruct shape
    const {shape} = this.props
    // get the array for this shape first rotation
    const block = shapes[shape][0]
    // get the empty shape
    const box = shapes[0][0]

    // map the block to the grid
    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        // if there is a 1 color, use the shape index
        // color is the index of the shape
        const color = block[row][col] === 0 ? 0 : shape
        return <GridSquare key={`${row}${col}`} color={color}/>
      })
    })
  }

  render() {
    return(
      <div className='next-block'>
        {this.makeGrid()}
      </div>
    )
  } 
}

// map state to props
const mapStateToProps = (state) => {
  return {
    // return nextShape as shape
    // shape is a random number (1, shapes.length)
    shape: state.game.nextShape
  }
}

export default connect(mapStateToProps)(NextBlock);