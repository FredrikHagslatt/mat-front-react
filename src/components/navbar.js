import '../css/navbar.css';
import React, {Component} from 'react';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:'Main',
        }
    }

    HandleClick(name){
        let active = name;
        this.setState({active: active});
    }

    RenderNavbarElement(name){
        if(name === this.state.active){
            return <li className="active" onClick={ () => this.HandleClick(name)} >
                {name}
            </li>;       

        }else{
            return <li onClick={ () => this.HandleClick(name)} >
                {name}
            </li>;       
        }
    }

    render(){
        return(
            <div>
                <ul>
                    {this.RenderNavbarElement("Main")}
                    {this.RenderNavbarElement("More")}
                    {this.RenderNavbarElement("Admin")}
                </ul>
            </div>
        );
    }

}export default Navbar;

