import React, { Component } from "react";
import '../cool.css';

class Radio extends Component {
    render() {
        const {name} = this.props;

        return (
            <label className="radio">
                <input type="radio" name={name}></input>
                <span className="radio"></span>
            </label>
        )
    }
}

export default Radio;