import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
      
        if ((location.row + 1 < 8 && location.row + 1 >= 0) && (location.col + 1 < 8 && location.col + 1 >= 0)){
                availableMoves.push(Square.at(location.row + 1, location.col + 1));
            }
            if ((location.row + 1 < 8 && location.row + 1 >= 0) && (location.col < 8 && location.col >= 0)){
                availableMoves.push(Square.at(location.row + 1, location.col));
            }
            if ((location.row + 1 < 8 && location.row + 1 >= 0) && (location.col - 1 < 8 && location.col - 1 >= 0)){
                availableMoves.push(Square.at(location.row + 1, location.col - 1));
            }
            if ((location.row - 1 < 8 && location.row - 1 >= 0) && (location.col + 1 < 8 && location.col + 1 >= 0)){
                availableMoves.push(Square.at(location.row - 1, location.col + 1));
            }
            if ((location.row - 1 < 8 && location.row - 1 >= 0) && (location.col < 8 && location.col >= 0)){
                availableMoves.push(Square.at(location.row - 1, location.col));
            }
            if ((location.row - 1 < 8 && location.row - 1 >= 0) && (location.col - 1 < 8 && location.col - 1 >= 0)){
                availableMoves.push(Square.at(location.row - 1, location.col - 1));
            }
            if ((location.row < 8 && location.row >= 0) && (location.col + 1 < 8 && location.col + 1 >= 0)){
                availableMoves.push(Square.at(location.row, location.col + 1));
            }
            if ((location.row < 8 && location.row >= 0) && (location.col - 1 < 8 && location.col - 1>= 0)){
                availableMoves.push(Square.at(location.row, location.col - 1));
            }
            return availableMoves;
    }
}
