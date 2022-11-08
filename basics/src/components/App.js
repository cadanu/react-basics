import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Card from './Card';
import Button from './Button';
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
        bio: 'Copywriter working in New York.',
        friends: 258,
        yearJoined: 2014,
        status: 'Online',
        imageUrl: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
    },
    {
        firstName: 'Efe',
        lastName: '',
        relation: 'Friend',
        bio: 'Film editor at Blade Runner Studios.',
        friends: 758,
        yearJoined: 2020,
        status: 'Not Online',
        imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        firstName: 'Jaime',
        lastName: '',
        relation: 'Family Member',
        bio: 'Entreupreneur from Brooklyn, New York.',
        friends: 323,
        yearJoined: 2017,
        status: 'Online',
        imageUrl: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        firstName: 'Lauryn',
        lastName: '',
        relation: 'Coworker',
        bio: 'Lawyer living in New Jersey.',
        friends: 151,
        yearJoined: 2021,
        status: 'Online',
        imageUrl: 'https://images.pexels.com/photos/2278093/pexels-photo-2278093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

let testData = {
    field: 'TestinG'
}

const App = () => {

    const printCard = () => {
        return cardData.map((cards, index) => {
            return <Card userData={cards} key={index}/>
        })
    }

    return (
        <>
            <Header background = "linear-gradient(180deg, rgba(30,20,25,1) 35%, rgba(70,49,49,1) 68%, rgba(95,78,78,1) 100%)">

                <Logo firstName={user.firstName}></Logo>

                <nav style={{position: 'relative', paddingLeft: '10%'}}>
                    <a href='#'>Home</a>
                    <a href='#'>Contacts</a>
                    <a href='#'>Account</a>
                </nav>

            </Header>

            <Button>+</Button>

            <main style={{ margin: "20px auto", width: "100%", maxWidth: "960px"}}>

                <div className="ui link cards">
                    {printCard()}{/*Card*/}
                </div>

            </main>

        </>
    );
}

export default App;











































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
