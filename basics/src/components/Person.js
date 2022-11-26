import React from 'react';

let name;
let lName;
// let fullName;
let age;
let email;
let password;
let bio;
let data;


export default function(props) {

}

const setPerson = (props) => {
    name = props.name;
    lName = props.lName;
    age = props.age;
    email = props.email;
    password = props.password;
    bio = props.bio;
    data = props.data;
}

const getPerson = (props) => {
    props.name = name;
    props.lName = lName;
    props.Age = age;
    props.email = email;
    props.password = password;
    props.bio = bio;
    props.data = data;

}
