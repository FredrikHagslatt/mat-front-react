import '../css/navbar.css';
import React, {Component} from 'react';


class Navbar extends Component {

    RenderNavbarElements(){
        return this.props.elements.map((name, key) =>
            (name === this.props.active ?
            <li key={key} className="active" onClick={ () => this.props.onClick(name)} >{name}</li>
            :<li key={key} onClick={ () => this.props.onClick(name)} >{name}</li>
            )
        );
    }

    render(){
        return(
            <div>
                <ul>
                    {this.RenderNavbarElements()}                       
                </ul>
            </div>
        );
    }

}export default Navbar;

