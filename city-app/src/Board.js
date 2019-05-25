import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            playerOne: true,
        };
    }

    // Function to re-render each square
    renderSquare(i) {
        return <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
               />;
    }

    // Function to handle user click for each square
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.playerOne ? 'X' : 'O';
        this.setState({
            squares: squares,
            playerOne: !this.state.playerOne,
        });
    }

    // Function to determine the winner
    winnerWinnerChickenDinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    render() {
        const winner = this.winnerWinnerChickenDinner(this.state.squares);
        let status;
        if (winner === 'X') {
            status = 'Winner: Player One';
        } else if (winner === 'O') {
            status = 'Winner: Player Two';
        } else {
            status = 'Current player: ' + (this.state.playerOne ? 'Player 1' : 'Player 2');
        }


        return (
           <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
           </div>
        )
    }
}

export default Board;
