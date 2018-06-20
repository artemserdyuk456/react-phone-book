import React from 'react';
import Contacts from './Contacts';
import map from 'lodash/map';


const SectionAbout = ({characters}) => (
    <section>
        {
            map(characters,(char, key)=>(
                <Contacts key={key}{...char}/>
            ))
        }
    </section>
);

export default SectionAbout;