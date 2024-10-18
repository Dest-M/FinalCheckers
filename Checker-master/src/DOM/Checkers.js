import EnemyInfo from "./Checkers/EnemyInfo";
import PlayerInfo from "./Checkers/PlayerInfo";
import Game from "./Checkers/Game";
import "./Checkers.css";
import GameModel from "../GameModel/GameModel";

function Checkers({GameModel}) {
 return      <div className="Checkers">
      <EnemyInfo/>,
      <Game GameModel={GameModel}/>,
      <PlayerInfo/>

     </div>

;
}
export default Checkers;