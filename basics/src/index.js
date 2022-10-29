import { buildQueries } from '@testing-library/react';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from'react';
import ReactDOM from 'react-dom';

// variables
let name = "User";
let age = 18;
let loggedIn = true;
let height = 200;
let width = 100;
// objects
let styles={
    h1: {
        color: "blue",
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: `{height}px`,
        width: `{width}%`,
        padding: "5px",
        background: "red",
    }
}



const App = () => {
    const printAlert = (props) => {
        alert(props);
    }

    return (
        <>
            <Header background='black'>
                <Logo>My Restaurant</Logo>
                <nav>
                    <a href='#'>Link</a>
                    <a href='#'></a>
                    <a href='#'></a>
                </nav>
            </Header>

            <div className="ui link cards">
                <div className="card">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div className="content">
                    <div className="header">Matt Giampietro</div>
                    <div className="meta">
                    <a>Friends</a>
                    </div>
                    <div className="description">
                    Matthew is an interior designer living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    Joined in 2013
                    </span>
                    <span>
                    <i className="user icon" />
                    75 Friends
                    </span>
                </div>
                </div>
                <div className="card">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                </div>
                <div className="content">
                    <div className="header">Molly</div>
                    <div className="meta">
                    <span className="date">Coworker</span>
                    </div>
                    <div className="description">
                    Molly is a personal assistant living in Paris.
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    Joined in 2011
                    </span>
                    <span>
                    <i className="user icon" />
                    35 Friends
                    </span>
                </div>
                </div>
                <div className="card">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" />
                </div>
                <div className="content">
                    <div className="header">Elyse</div>
                    <div className="meta">
                    <a>Coworker</a>
                    </div>
                    <div className="description">
                    Elyse is a copywriter working in New York.
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    Joined in 2014
                    </span>
                    <span>
                    <i className="user icon" />
                    151 Friends
                    </span>
                </div>
                </div>
            </div>
        </>
    );
}

const Header = (props) => {
    return(
        <header style={{
            background: props.background,
            padding: "15px 20px",
            color: "white"
        }}>
            {props.children}
        </header>
    )
}

const Logo = (props) => {
    return(
        <div>
            {props.children == undefined ? "Place Logo Here" : props.children}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
