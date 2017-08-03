import * as React from 'react';
import {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import "./About.css";

interface State {
    message:string;
}

interface Props {
}

export class About extends React.Component<RouteComponentProps<any>, State> {
    constructor(props:RouteComponentProps<any>) {
        super(props);
        this.state = {
            message: props.match.params.message
        }
    }

    render() {
        return (
            <div>
                <h1 className="about-text">About Screen</h1>
                <div>{this.state.message}</div>
            </div>
        );
    }
}
