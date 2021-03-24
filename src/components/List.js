import React, { Component } from "react";

class List extends Component {

render(){
  if(this.props.query !== ""){
  return(
    <div>
        <ul>
          {
          this.props.results.map(place =>
            <li key={place}>
              {place}
            </li>
          )}
        </ul>
    </div>
  )}else{
    return(<div>
    </div>)
  }
}

}
export default List;