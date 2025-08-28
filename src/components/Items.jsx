'use client';

import {useState } from "react";

export default function Items({ data, setAvailableCondidateList, settempItems }) {
    const [selectedIndex, setSelectedIndex] = useState([]);

    const handleRemove = (value) => {
        const filteredRecord = data.filter((items) => items !== value);
        setAvailableCondidateList(filteredRecord);
    }

    const handleItemSelect = (val,index) => {
        if(selectedIndex.includes(index)) {
            setSelectedIndex(selectedIndex.filter(i => i !== index));
        }
        else {
            setSelectedIndex(prev => [index, ...prev]);
            settempItems(preval => [val, ...preval]);
        }
    }

    return (
        <ul className="space-y-2">
            {
                data?.map((value, index) => {
                    return (
                        <li
                            key={crypto.randomUUID()}
                            className={`
                                ${selectedIndex.includes(index) ? 'bg-emerald-400' : 'bg-emerald-100 hover:bg-emerald-200'}
                                text-black px-4 py-2 rounded cursor-pointer transition duration-200 
                                flex justify-between items-center
                            `}
                            onClick={() => handleItemSelect(value, index)}
                        >
                            
                            <span className="capitalize">{value}</span>

                            <span
                                className="text-red-500 hover:text-red-700 font-bold text-lg ml-4 cursor-pointer"
                                title="Remove"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove(value)
                                }}
                            >
                                ×
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    );
}
