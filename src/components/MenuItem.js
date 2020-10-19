import React from "react";
import { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite : false
    };
  }
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  render() {
    return (
      <div className="itemContainer">
        <div className="leftContainer">
          <div className="imgContainer">
            <img src={this.props.foodImage} alt="" />
          </div>
          <div className="itemDescription">
            
            <h3>{this.props.itemName}</h3>
            
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="rightContainer">
          
          <div>{this.props.price} EUR</div>

          {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
          <div id="favorite"
          onClick = {event => {
            const handleClickFavorite = !this.state.isFavorite;
            this.setState({isFavorite : handleClickFavorite})
          }}
        >{this.state.isFavorite ? "isFavorite" : "noteFavorite"}</div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
