import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: "What is React",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React",
        content: "React is a favourite JS liberary among engineers"
    },
    {
        title: "How do you use React",
        content: "You use React by creating components"
    }
];

const options = [
    {
        label: "The color red",
        value: "red"
    }, 
    {
        label: "The color green",
        value: "green"
    }, 
    {
        label: "The shade of blue",
        value: "blue"
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
            { showDropdown ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected} 
                    options={options} 
                /> : null
            }
        </div>
    );
};