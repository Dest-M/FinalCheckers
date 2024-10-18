import image from "../../../../img/white_checker.svg"

function WhiteChecker({x, y}) {


    return <div style={{gridColumn:x, gridRow:y}}>
        <img src={image} alt={"W"}/>
    </div>
}

export default WhiteChecker;