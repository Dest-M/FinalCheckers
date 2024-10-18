import "../Board.css";

function BgCellGenerator() {

let backgroundCells =[];

for(let x=1; x<=8; x++){
    for(let i=1; i<=8; i++){

        if(x %2 === 1){
            backgroundCells.push(<div className={"Cell FirstRow"} style={{gridRow: x, gridColumn:i}}
                key={`boardCell_${x}_${i}`}></div>)

        }
        else {
            backgroundCells.push(<div className={"Cell SecondRow"} style={{gridRow: x, gridColumn:i}}
                                      key={`boardCell_${x}_${i}`}></div>);
        }

    }
}

    return backgroundCells;
}

export default BgCellGenerator;