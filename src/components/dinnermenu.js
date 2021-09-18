import '../css/myStyle.css';
import React, {Component} from 'react';
import Recipe from './recipe';

class DinnerMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            isMobile: window.innerWidth < props.widthSwitch,
        }
    }

    RenderItem(){
        
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < this.props.widthSwitch
            });
        }, false);
    }

    render(){
        const classes = this.state.isMobile ? 'flexbox dinner-menu mobile' : 'flexbox dinner-menu';
        return(
            <div className={classes}>
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        );
    }

}export default DinnerMenu;