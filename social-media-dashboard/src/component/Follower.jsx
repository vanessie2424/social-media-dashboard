import React from "react";

function Follower(props){
    const followBackground ={
        background: props.mode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)"
    }
    const h5Follow ={
        color: props.mode ? " hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"
    }
    const h1Follow ={
        color: props.mode ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"
    }
    
    return(
        <div className="follow_card" style={followBackground}>
            <div className="follow_title" >
                <img src= {props.followData.img} />
                <h5 style={h5Follow}> {props.followData.email}</h5>
            </div>
            <h1 style={h1Follow}> {props.followData.number}</h1>
            <h3>{props.followData.title}</h3>
            <div className="today_contain">
                <img src= {props.followData.arrow} />
                <p>{props.followData.today} Today </p>
            </div>
            
        </div>
    )
}

export default Follower