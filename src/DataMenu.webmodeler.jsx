import { Component, createElement } from "react";
import { ContextButton } from "./components/ContextButton";

export class preview extends Component {
    render() {
        return <div></div>;
    }
}

export function getPreviewCss() {
    return require("./ui/DataMenu.css");
}
