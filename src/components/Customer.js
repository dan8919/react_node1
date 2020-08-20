import React from 'react';

class Customer extends React.Component{
    render(){
        return(
        <div>
            <h1>데이터</h1>
           <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p> 
        </div>
        );
    }

}

export default Customer;