import DinnerMenu from "./dinnermenu.js";
import MoreRecipes from "./morerecipes.js";
import Admin from "./admin.js";
import React, {Component} from 'react';

class SectionManager extends Component {

    GetSection(){
        if(this.props.active === 'Dinner Menu'){
            return<DinnerMenu widthSwitch={this.props.widthSwitch} />;
        }else if(this.props.active === 'More Recipes'){
            return<MoreRecipes widthSwitch={this.props.widthSwitch} />;
        }else{
            return<Admin />;
        }
    }

    render(){
        return <div className="content-wrapper flexbox">{this.GetSection()}</div>;
    }

}export default SectionManager;