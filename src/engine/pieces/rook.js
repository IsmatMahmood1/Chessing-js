
import Square from '../square';
import Piece from './piece';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        for (let i = 1; i < 8; i++) {
            if (location.row + i < 8 && location.row + i >= 0){
                availableMoves.push(Square.at(location.row + i, location.col));
            }
            if (location.row - i >= 0 && location.row - i < 8 ){
                availableMoves.push(Square.at(location.row - i, location.col));
            }
            if (location.col + i < 8 && location.col + i >= 0){
                availableMoves.push(Square.at(location.row, location.col + i));
            }
            if (location.col - i >= 0 && location.col - i < 8){
                availableMoves.push(Square.at(location.row, location.col - i));
            }
        }
        return availableMoves;
    }
}
