import '../css/myStyle.css';
import React, {Component} from 'react';
import Recipe from './recipe';
import DBFetcher from './dbfetcher';

class DinnerMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            isMobile: window.innerWidth < props.widthSwitch,
            db: new DBFetcher(),

            mockRecipe: {
                'name': 'mock-recipe',
                'image': 'gulasch.jpg',
                'url': 'https://9gag.com',
            },
            dinnerMenu: [{
                'name': 'mock-recipe',
                'image': 'gulasch.jpg',
                'url': 'https://9gag.com',
            }],

        }
    }

    RenderItem(recipe){
        if(typeof recipe === 'object'){
            return <Recipe day='today' recipe={recipe}/>
        }else{
            return <Recipe day='today' recipe={this.state.mockRecipe}/>
        }
    }

    componentDidMount() {
        Promise.resolve(this.state.db.GetDinnerMenu())
        .then((value) => {
            console.log('Setting state to Bill');
            var parsedMenu = JSON.parse(value);
            console.log(parsedMenu);

            this.setState({
                dinnerMenu: parsedMenu
            })

        })

        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < this.props.widthSwitch,
            });
        }, false);
    }

    render(){
        const classes = this.state.isMobile ? 'flexbox dinner-menu mobile' : 'flexbox dinner-menu';
        return(
            <div className={classes}>
                {this.RenderItem(this.state.dinnerMenu[0])}
                {this.RenderItem(this.state.dinnerMenu[1])}
                {this.RenderItem(this.state.dinnerMenu[2])}

            </div>
        );
    }

}export default DinnerMenu;