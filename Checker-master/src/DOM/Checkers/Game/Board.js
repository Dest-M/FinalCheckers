import "./Board.css";
import BgCellGenerator from "./Board/BgCellGenerator";
import BlackChecker from "./Board/BlackChecker";
import WhiteChecker from "./Board/WhiteChecker";
import GameModelCheckerGenerator from "./Board/GameModelCheckerGenerator";

function Board({GameModel}){
    return <div className={"Board"}>
        <BgCellGenerator/>
        <GameModelCheckerGenerator GameModel={GameModel}/>
        <BlackChecker x={1} y={1}/>
        <WhiteChecker x={3} y={6}/>
        <div style={{gridColumn: 4, gridRow: 4}}></div>
        <div style={{gridColumn: 2, gridRow: 2}}></div>
        <div style={{gridColumn: 6, gridRow: 4}}></div>
    </div>
}
export default Board;