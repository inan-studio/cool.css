import React, { Component } from "react";
import '../cool.css';

export default class Selectbox extends Component {
    render() {
        const {name} = this.props;

        return (
            <select className="select" name={name}>
                {this.props.children}
            </select>
        )
    }
}
