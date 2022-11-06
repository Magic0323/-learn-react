import React from "react";

class DayTwo extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }

        setInterval(()=>{
            console.log(this.state.count);
            this.setState({
                count: this.state.count++
            })
        },1000)
    }

    render() {
        return <h1 className='h1'>类组件{this.state.count}</h1>
    }
}

export default DayTwo