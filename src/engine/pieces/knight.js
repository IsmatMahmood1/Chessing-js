import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
      
            if (location.row + 2 < 8 && location.row + 1 >= 0){
                availableMoves.push(Square.at(location.row + 2, location.col + 1));
            }
            if (location.row + 2 >= 0 && location.row - 1 < 8 ){
                availableMoves.push(Square.at(location.row + 2, location.col - 1));
            }
            if (location.col - 2  < 8 && location.col + 1 >= 0){
                availableMoves.push(Square.at(location.row - 2, location.col + 1));
            }
            if (location.col - 2 >= 0 && location.col - 1 < 8){
                availableMoves.push(Square.at(location.row - 2, location.col - 1));
            }
            if (location.row + 1 < 8 && location.row + 2 >= 0){
                availableMoves.push(Square.at(location.row + 1, location.col + 2));
            }
            if (location.row + 1 >= 0 && location.row - 2 < 8 ){
                availableMoves.push(Square.at(location.row + 1, location.col - 2));
            }
            if (location.col - 1  < 8 && location.col + 2 >= 0){
                availableMoves.push(Square.at(location.row - 1, location.col + 2));
            }
            if (location.col - 1 >= 0 && location.col - 2 < 8){
                availableMoves.push(Square.at(location.row - 1, location.col - 2));
            }
        
        return availableMoves;
    }
}
