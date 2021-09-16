import '../css/sections.css';
import React, {Component} from 'react';
import Navbar from './navbar.js';
import SectionManager from './sectionmanager.js';

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
                <div className="fit-parent overlay main-container">
                    <Navbar
                        elements={this.state.sections} 
                        active={this.state.activeSection} 
                        onClick={this.NavbarClick}/>

                    <SectionManager 
                        active={this.state.activeSection}
                        showImages={this.state.showImages} />
                
                </div>
            </div>
        );
    };
} export default MainContainer;
