import * as React from 'react';
import {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import "./NotFound.css";

interface State {
}

interface Props {
}

export class NotFound extends React.Component<RouteComponentProps<any>, State> {
    render() {
        return (
           <h1 className="notfound-text">Page not found!</h1>
        );
    }
}
