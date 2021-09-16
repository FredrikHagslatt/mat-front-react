import DinnerMenu from "./dinnermenu.js";
import MoreRecipes from "./morerecipes.js";
import Admin from "./admin.js";

function SectionManager(props){

    if(props.active === 'Dinner Menu'){
        return<DinnerMenu />;
    }else if(props.active === 'More Recipes'){
        return<MoreRecipes />;
    }else{
        return<Admin />;
    }

}export default SectionManager;