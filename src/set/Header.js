import React, { Component } from 'react';

class Header extends Component
{
    constructor()
    {
        super();
        this.state={
            data:[],
            message:"Like",
            type:""
        };

          this.changMessage = this.changMessage.bind(this);
           this.insertData= this.insertData.bind(this);
          /* same on  obj */
        //   this.state={name:"Nantipat"};
        //   this.state={count:0};
    }

    changMessage()
    {
        this.setState({message:"UnLike"});
    }
    insertData()
    {
        var item ="React";
        var myarray =  this.state.data;
        myarray.push(item);
        this.setState({data:myarray});
    }
    render(){


        return (
            <div>
                <h1>Wait  2 sec Show mes</h1>
                <h2>{this.state.name }</h2>
                <h1>{this.state.message}</h1>
                <button onClick = {this.changMessage}>{this.state.message}</button><br/>
                <h1>{this.state.data}</h1>
                <button onClick = {this.insertData}>Insert  </button>

            </div>
        );
    }
}
export default Header
