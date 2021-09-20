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
            dinnerMenu: 'Benny',
        }
    }

    RenderItem(){
        
    }

    componentDidMount() {

        Promise.resolve(this.state.db.GetDinnerMenu())
        .then((value) => {
            console.log('Setting state to Bill');
            console.log(value);
            this.setState({dinnerMenu: value});
        })

        //        this.setState(dinnerMenu, dinnerMenu);

        /*
        this.state.db.GetDinnerMenu()
        .then((dinnerMenu) => {
            console.log('ÅÄÖÅÄÖ');
            console.log(dinnerMenu);
        });
*/


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
                <div>{this.state.dinnerMenu}</div>
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        );
    }

}export default DinnerMenu;