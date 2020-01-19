import { Component, createElement } from "react";

export class ContextButton extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        document.getElementById(this.props.idButton).click();
        this.props.updateVisibility()
    }
    render() {
        console.log(this.props)
        return <div>
                <button className={this.props.className} onClick={this.handleClick} onContextMenu={this.handleRightClick} style={{width:"100%"}}id={this.props.key}>{this.props.nameButton}</button>
            </div>;
    }
}
