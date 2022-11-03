import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';
// import Person from './Person';

let user =
    {
        firstName: 'Elizabeth'
    }

let cardData = [
    {
        firstName: 'Elyse',
        lastName: '',
        relation: 'Coworker',
        bio: ' is a ' + 'copywriter working in New York.',
        friends: 151,
        yearJoined: 2014,
        status: 'Online',
        imageUrl: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
    },
    {
        firstName: 'Efe',
        lastName: '',
        relation: 'Friend',
        bio: ' is a ' + 'film editor at Blade Runner Studios.',
        friends: 758,
        yearJoined: 2020,
        status: 'Not Online',
        imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        firstName: 'James',
        lastName: '',
        relation: 'Family',
        bio: ' is a ' + 'entreupreneur from Brooklyn, New York.',
        friends: 151,
        yearJoined: 2017,
        status: 'Online',
        imageUrl: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
    },
    {
        firstName: 'Lauryn',
        lastName: '',
        relation: 'Coworker',
        bio: ' is a ' + 'lawyer living in New Jersey.',
        friends: 151,
        yearJoined: 2021,
        status: 'Online',
        imageUrl: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
    }
]

let testData = {
    field: 'TestinG'
}

export default function (props) {
    // const printAlert = (props) => {
    //     alert(props);
    // }
    let vowels = '';

    const printCard = () => {
        return cardData.map((cards) => {

            // vowels = cards.bio;
            // if (vowels.charAt[0] == 'e' ) {
            //     console.log(vowels);
            // }

            return <Card userData={cards} />

        })

    }

    return (
        <>
            <Header background='black'>
                <Logo>
                    <h1 style={{whiteSpace: 'nowrap'}}>{user.firstName}s Page</h1>
                </Logo>
                <nav>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                </nav>
            </Header>

            <main>
                <div className="ui link cards">
                    {printCard()}
                </div>
            </main>

        </>
    );
}











































// const printCard = () => {
        // let cards=[];
        // for (let i=0; i<data.length; i++) {
        //     cards.push(<Card userData={data[i]} />);
        // }
        // return cards;
    // }

    // const printUserName = () => {
    //     // return user.map((names) => {
    //     //     return (
    //     //     <>
    //     //         {names.firstName}s Page
    //     //     </>
    //     //     )
    //     // })
    //     return <>
    //     user.firstName;
    //     </>
    // }
