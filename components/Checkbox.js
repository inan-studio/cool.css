import React, {Component} from "react";
import '../cool.css';

class Checkbox extends Component {
    render() {
        const {name} = this.props;

        return(
            <label className="checkbox">
                <input type="checkbox" name={name}></input>
                    <span className="checkbox">
                        <span></span>
                    </span>
            </label>
        )
    }
}

export default Checkbox;