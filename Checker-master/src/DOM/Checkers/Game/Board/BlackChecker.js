import image from "../../../../img/black_checker.svg"

function BlackChecker({x,y}) {


    return <div style={{gridColumn:x, gridRow:y}}>
        <img src={image} alt={"B"}/>
    </div>
}

export default BlackChecker;