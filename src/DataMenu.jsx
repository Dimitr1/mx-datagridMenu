import { Component, createElement, createRef, useRef } from "react";
import { hot } from "react-hot-loader/root";

import { ContextButton } from "./components/ContextButton";
import "./ui/DataMenu.css";

class DataMenu extends Component {
    constructor(){
        super()
        this.state = {
            visible:"hidden",
            left:0,
            top:0
        }
        this.setVisible = this.setVisible.bind(this);
        this.setHidden = this.setHidden.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    setHidden(e){
        this.setState(() => { 
            return {
                visible: "hidden",
            }
         }) 
    }

    setVisible(e){
        e.preventDefault()
        this.setState(() => { 
            return {
                visible: "visible",
                left:e.x,
                top:e.y
            }
         }) 
    }
      
    handleOutsideClick(e){
       this.setHidden(e)
    }
    componentDidMount(){
        document.addEventListener("click", this.handleOutsideClick);
    } 
    componentWillUnmount(){
        document.removeEventListener("click", this.handleOutsideClick);
    };
    
    render() {
        let style = {
            visibility: this.state.visible,
            top:this.state.top,
            left:this.state.left
        }

        let datagrid = document.getElementsByClassName(`mx-name-${this.props.gridname}`)[0]
        
        let content = datagrid.getElementsByClassName("mx-grid-content")[0]
        content.addEventListener('contextmenu', this.setVisible)  

        let buttonsbar = datagrid.getElementsByClassName("mx-grid-toolbar")[0]
        const buttons = Array.from(buttonsbar.getElementsByClassName("mx-button"))
        const buttonFilter = buttons.filter(button => !button.classList.contains("hideInMenu"))
        const ContextButtons = buttonFilter.map((button)=> <ContextButton className={"mx-contextMenu-buttons"} updateVisibility={this.setHidden} key={button.id} nameButton={button.innerText} idButton={button.id} />)

    return <div className={"mx-contextMenu"} style={style}>
            {ContextButtons}
        </div>;
    }
}

export default hot(DataMenu);
