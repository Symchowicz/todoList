import React from 'react';

class Title extends React.Component{
    texte = 'Ajouter des choses a la liste';
    render(){
        return (
            <h1>
                {this.texte} 
            </h1>
        );
    };
}

export default Title;


