import React from 'react';

class Title extends React.Component{
    texte = 'Hello react !';
    render(){
        return (
            <h1>
                {this.texte}
                <span>test</span> 
                et ... {this.props.a + this.props.b}
            </h1>
        );
    };
}

export default Title;


