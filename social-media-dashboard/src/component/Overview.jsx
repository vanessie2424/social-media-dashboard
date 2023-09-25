import React from "react";

function Overview(props){
    const overviewBackground ={
        background: props.mode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)"
    }
    const h5Overview  ={
        color: props.mode ? " hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"
    }
    const h2Overview ={
        color: props.mode ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"
    }
    return(
        
    
        <div className="overview_card" style={overviewBackground}>
            <div className="update_contain">
                <h5 style={h5Overview}>{props.overviewData.update}</h5>
                <img src= {props.overviewData.img} alt="" />
            </div>
            <div className="rate_contain">
                <h2 style={h2Overview}> {props.overviewData.number}</h2>
                <div className="rate">
                    <img src={props.overviewData.arrow} alt="" />
                    <p>{props.overviewData.rate}</p>
                </div>
            </div>
        </div>
    )
}

export default Overview