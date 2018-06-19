import React from 'react';

const contact = (props) => {
  const contacts = [];

  for (let contactName in props.contacts) {
      contacts.push(
          {
              name: contactName,
              amount: props.contacts[contactName]
          }
      )
  }

  const contactOutput = contacts.map( dat => {
      return <span
      style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
      }}
         key={dat.name}>{dat.name}
      </span>
      });

  return (
      <div>
          <p>Contact: {contactOutput}</p>
          {/*<p>Contact: {contactOutput}</p>*/}
      </div>
  )

};


export default contact;