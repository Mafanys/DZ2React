import React from "react";

/* const User = (props) => {
    return(
        <div>
            <h3>Меня зовут {props.name}</h3>
            <h3>Мне {props.age} лет</h3>
            <h3>Живу в  {props.sity}</h3>            
        </div>
    );
} */
class User extends React.Component{
    render(){
        return(
            <div>
            <h3>Меня зовут {this.props.name}</h3>
            <h3>Мне {this.props.age} лет</h3>
            <h3>Живу в  {this.props.sity}</h3>            
        </div>
        );
    }
}

export default User;