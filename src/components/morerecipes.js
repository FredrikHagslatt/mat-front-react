import Recipe from './recipe';
import React, {Component} from 'react';

class MoreRecipes extends Component {
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

        const classes = this.state.isMobile ? 'flexbox more-recipes mobile' : 'flexbox more-recipes';
        return(
            <div className={classes}>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        );
    }
}export default MoreRecipes;