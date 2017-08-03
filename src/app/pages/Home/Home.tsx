import * as React from 'react';
import {Component} from 'react';
import {RouteComponentProps, Link} from 'react-router-dom';
import {Image} from "../../components/Image";

interface State {
}

interface Props {
}

export class Home extends React.Component<RouteComponentProps<any>, State> {
    render() {
        return (
            <div>
                <h1>Home Screen</h1>
                <Link to='/about'>
                    <Image name="penguin" />
                </Link>
            </div>
        );
    }
}
