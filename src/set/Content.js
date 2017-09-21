import React, { Component } from 'react';
class Content extends Component
{
    render()
    {
        return (
            <div>
                <h1>Content</h1>
                <p>{this.props.title}</p>
                <p>{this.props.name}</p>
            </div>


        );
    }
}
export default Content
