'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import Items from "@/components/Items";
import { useState } from "react";
      import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [candidateName, setCandidateName] = useState('');
  const [availableCondidateList, setAvailableCondidateList] = useState([]);
  const [selectedItemsList, setSelectedItemsList] = useState([]);

  const [selectedCandidateList, setSelectedCandidateList] = useState([]);

  const handleChangeInput = (e) => {
    const name = e.target.value ?? '';
    setCandidateName(name);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && candidateName.trim() !== '') {
      handleSaveInput();
    }
  }

  const handleSaveInput = () => {
    const obj = {
      id: crypto.randomUUID(),
      text:'',
      inAvailBox: true
    }
    obj.text = candidateName;

    setAvailableCondidateList(prev => [obj, ...prev]);
    setCandidateName('');
  }

  // console.log(availableCondidateList);

 // Move items from the left list to the right list
const moveToSelectedBox = () => {
    // Get items that are selected (from available list)
    const selectedItems = availableCondidateList.filter(item => selectedItemsList.includes(item.id));
    
    // Remove selected items from the available list
    const nonSelectedItems = availableCondidateList.filter(item => !selectedItemsList.includes(item.id));

    // Update availableCondidateList
    setAvailableCondidateList(nonSelectedItems);
    
    // Add selected items to the selectedCandidateList
    setSelectedCandidateList(prev => [...selectedItems, ...prev]);
    setSelectedItemsList([]);
}

 
// Move items back from the right list to the left list
const moveToAvailableBox = () => {
    // Get items that are selected (from the selected list)
    const selectedItems = selectedCandidateList.filter(item => selectedItemsList.includes(item.id));
    
    // Remove selected items from the selected list
    const nonSelectedItems = selectedCandidateList.filter(item => !selectedItemsList.includes(item.id));

    // Update selectedCandidateList
    setSelectedCandidateList(nonSelectedItems);
    
    // Add selected items back to the availableCondidateList
    setAvailableCondidateList(prev => [...selectedItems, ...prev]);

     setSelectedItemsList([]);
}

  return (
    <div className="app min-h-screen bg-gradient-to-br from-cyan-700 to-emerald-700 p-10 text-white font-sans">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Candidate Selector</h1>
        <p className="text-lg mt-2 text-emerald-100">Move candidates between lists</p>
      </div>

      {/* Input section */}
      <div className="Input-container flex items-center justify-center mb-10">
  <div className="flex w-full max-w-md space-x-2">
    <Input
      type="text"
      placeholder="Add Candidate"
      className="flex-grow px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      func={handleChangeInput}
      value={candidateName}
      onKeyDwonfunc={handleKeyPress}
    />
    <Button
      value="+"
      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded text-white font-bold text-xl"
      onClick={handleSaveInput}
    />
  </div>
</div>

      {/* Main content */}
      <main className="flex justify-center items-center space-x-10">
        {/* Left List */}
       <div className="w-1/3 min-h-[400px] flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-5 text-white">

          <h2 className="text-center font-semibold text-lg mb-4">Available Candidates</h2>
          <Items 
            data={availableCondidateList} 
            setAvailableCondidateList={setAvailableCondidateList} 
            selectedItemsList={selectedItemsList} 
            setSelectedItemsList={setSelectedItemsList} 
          />
        </div>

        {/* Action buttons */}


<div className="flex flex-col justify-center items-center space-y-4">
  <button 
    onClick={moveToSelectedBox}
    className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg"
    title="Move to Selected"
  >
    <ChevronRightIcon className="w-6 h-6" />
  </button>

  <button 
    onClick={moveToAvailableBox}
    className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg"
    title="Move to Available"
  >
    <ChevronLeftIcon className="w-6 h-6" />
  </button>
</div>


        {/* Right List */}
        <div className="w-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-5 text-white">

          <h2 className="text-center font-semibold text-lg mb-4">Selected Candidates</h2>
          <Items  data={selectedCandidateList}
            setSelectedCandidateList={setSelectedCandidateList} 
            selectedItemsList={selectedItemsList} 
            setSelectedItemsList={setSelectedItemsList} 
          />
        </div>
      </main>
    </div>
  );
}
