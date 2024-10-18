/**
 *
 * @param GameModel {GameModel}
 * @constructor
 */
import Checker from "../../../../GameModel/Checker";
import BlackChecker from "./BlackChecker";

function GameModelCheckerGenerator({GameModel}) {
    let result = []
    let checkers = GameModel._board.checkers

    /**
     * @var ch
     */
    for (/**@var {Checker} checker */const checker of checkers) {
        const row = checker._row;
        const column = checker._column;

        result.push(<BlackChecker key={`checker_${column}_${row}`} x={column} y={row}/>)
    }

    return result;
}

export default GameModelCheckerGenerator;