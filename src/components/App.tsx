import * as React from "react";
import {ShowTasks} from '../containers'

export interface AppProps { compiler: string; framework: string; }

// 'AppProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<AppProps, undefined> {
    render() {
        return (<div className="container-fluid">
            {/*<h1>App from {this.props.compiler} and {this.props.framework}!</h1>*/}
            {/*<ShowTasks />*/}

            <div className="row">
                <div className="col-md-2">
                    {/*liste des composants disponibles*/}
                    <div>
                        <h3>Composants</h3>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    {/*rendu du formulaire */}
                    <div>
                        <h3>Formulaire</h3>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>);
    }
}