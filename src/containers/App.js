import React from 'react';
import {Header} from 'components';


class App extends React.Component {
    render(){

        let re = /(login|register)/;
        //let pathname = new URLSearchParams(location.pathname);
        let isAuth = re.test(this.props.pathname);// pathname
        return (
            <div>
                {isAuth ? undefined : <Header/>}
                {this.props.children}
            </div>
        );
    }
}

export default App;
