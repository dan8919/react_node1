import React from 'react';

class Customer extends React.Component{
    render(){
        return(
        <div>
            <Customerprofile id={this.props.id} name={this.props.name} image={this.props.image}/>
            <CustomerInfo  birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
        );
    }

}

class Customerprofile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.id} {this.props.name}</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p> 
            </div>

        );
    }
}

export default Customer;