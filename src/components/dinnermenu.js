import '../css/sections.css';
import React, {Component} from 'react';
import Recipe from './recipe';

class DinnerMenu extends Component {

    RenderItem(){
        
    }


    render(){
        return(
            <div className="dinnermenu">
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        );
    }

}export default DinnerMenu;