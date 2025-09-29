'use client';

const Square = ({ handleClicked, value }) => {
    return (
        <button
            onClick={handleClicked}
            className={`
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                text-4xl font-bold rounded-lg
                transition-all duration-200 ease-in-out
                ${value === 'X' ? 'text-blue-600' : 'text-red-600'}
                ${!value ? 'hover:bg-gray-100 active:bg-gray-200' : 'cursor-default'}
                border-2 border-gray-300 shadow-md
                flex items-center justify-center
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
            disabled={!!value}
            aria-label={value ? `${value} is placed` : 'Empty square'}
        >
            {value}
        </button>
    );
};

export default Square;