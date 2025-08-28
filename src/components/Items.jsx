'use client';

export default function Items({ data, setAvailableCondidateList, selectedItemsList, setSelectedItemsList }) {

    const handleRemove = (item) => {
        const filteredRecord = data.filter((d) => d.id !== item.id);
        setAvailableCondidateList(filteredRecord);
    }

    const handleItemSelect = (selectedItem) => {
        if (selectedItemsList?.includes(selectedItem.id)) { 
            setSelectedItemsList(prev => [selectedItemsList.filter(id => id !== selectedItem.id), ...prev]);
        } else {
            setSelectedItemsList(prev => [selectedItem.id, ...prev]);
        }
    }
    console.log(selectedItemsList);

    return (
        <ul className="space-y-2">
            {data?.map((item) => {
                return (
                    <li
                        key={item.id} // Use item.id for the key to avoid duplicate warnings
                        className={`
                            ${selectedItemsList?.includes(item.id) ? 'bg-emerald-400' : 'bg-emerald-100 hover:bg-emerald-200'} 
                            text-black px-4 py-2 rounded cursor-pointer transition duration-200 
                            flex justify-between items-center
                        `}
                        onClick={() => handleItemSelect(item)}
                    >
                        <span className="capitalize">{item.text}</span>

                        <span
                            className="text-red-500 hover:text-red-700 font-bold text-lg ml-4 cursor-pointer"
                            title="Remove"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(item)
                            }}
                        >
                            ×
                        </span>
                    </li>
                )
            })}
        </ul>
    );
}
