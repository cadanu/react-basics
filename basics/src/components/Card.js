import React from 'react';


const Card = (props) => {

    return (
        <div className="card">
            <div className="image">
                <img src={props.userData.imageUrl} />
            </div>
            <div className="content">
                <div className="header">
                    {props.userData.firstName}</div>
                <div className="meta">
                    <a>
                        {props.userData.relation}
                    </a>
                </div>
                <div className="description">
                    {props.userData.bio}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    Joined in {props.userData.yearJoined}
                </span>
                <span>
                <i className="user icon" />
                {props.userData.friends}
                </span>
            </div>
            {/* <h1> */}
            {/* {props.userTestrandom.field} */}
            {/* </h1> */}
        </div>
    )

}

export default Card;

















{/* <div className="card">
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
            </div> */}
