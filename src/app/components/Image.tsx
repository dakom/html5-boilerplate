import * as React from 'react';
import {Component} from 'react';
import {MediaType, Path} from "../lib/path/Path";

interface State {
    path:string;
}

interface Props {
    name:string;
}

export class Image extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        
        this.state = {
            path: Path.Image(props.name) + ".png"
        }
    }

    render() {
        return (
            <img src={this.state.path} />
        );
    }
}