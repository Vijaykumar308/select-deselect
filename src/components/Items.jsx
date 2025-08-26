'use client';

export default function Items({ data, setAvailableCondidateList }) {

    const handleRemove = (value) => {
        const filteredRecord = data.filter((items) => items !== value);
        setAvailableCondidateList(filteredRecord);
    }

    return (
        <ul className="space-y-2">
            {

                data?.map((value) => {
                    return <li
                        key={crypto.randomUUID()}
                        className="bg-emerald-100 hover:bg-emerald-200 text-black px-4 py-2 rounded cursor-pointer transition duration-200 flex justify-between items-center"
                    >
                        <span className="capitalize">{value}</span>

                        <span
                            className="text-red-500 hover:text-red-700 font-bold text-lg ml-4 cursor-pointer"
                            title="Remove"
                            onClick={() => handleRemove(value)}
                        >
                            ×
                        </span>
                    </li>

                })
            }
        </ul>
    );
}
