import React from 'react';


const Contacts = ({
    name,
    lastName,
    company,
    phoneNumber,
    email,
    }) => {
    <article>
       <h3>{name}</h3>
       <h3>{lastName}</h3>
       <h3>{company}</h3>
       <h3>{phoneNumber}</h3>
       <h3>{email}</h3>
    </article>

};

export default Contacts;

