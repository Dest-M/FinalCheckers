import checkers from "../DOM/Checkers.js"
import Checker from "./Checker";

class Board{
    checkers = []

    constructor(){
        this.checkers.push(new Checker(1,2));
        this.checkers.push(new Checker(2,3));
        this.checkers.push(new Checker(3,4));
        this.checkers.push(new Checker(4,5));
    }

}

export default Board;