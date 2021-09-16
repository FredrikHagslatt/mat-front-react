import '../css/sections.css';
import React, {Component} from 'react';
import Navbar from './navbar';
import SectionManager from './sectionmanager';

class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            sections: [
                'Dinner Menu',
                'More Recipes', 
                'Admin',
            ],
            activeSection: 'Dinner Menu',
            showImages: false,
        }
    }

    NavbarClick = (name) => {
        this.setState({activeSection: name})
    }
    
    render(){
        return(            
            <div className= "window-size background-image">
                <div className= "fit-parent overlay flexbox">
                    <div className="fit-parent main-container">
                        <div className="grid-navbar">
                            <Navbar
                                elements={this.state.sections} 
                                active={this.state.activeSection} 
                                onClick={this.NavbarClick}/>
                        </div>
                        <div className="grid-content">
                            <SectionManager 
                                active={this.state.activeSection}
                                showImages={this.state.showImages} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
} export default MainContainer;



/*


        return(            
            <div className= "window-size background-image">
                <div className="fit-parent overlay main-container">
                    <div className="grid-navbar">
                        <Navbar
                            elements={this.state.sections} 
                            active={this.state.activeSection} 
                            onClick={this.NavbarClick}/>
                    </div>
                    <div className="grid-content">
                        <SectionManager 
                            active={this.state.activeSection}
                            showImages={this.state.showImages} />
                    </div>
                </div>
            </div>
        );





*/