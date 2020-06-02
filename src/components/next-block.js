import React, { Component } from 'react'
import GridSquare from './grid-square'

// draws the next block view showing the next block to drop
class NextBlock extends Component {
  makeGrid() {
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    // map the block to the grid
    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        return <GridSquare key={`${row}${col}`} color={0}/>
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

export default NextBlock;