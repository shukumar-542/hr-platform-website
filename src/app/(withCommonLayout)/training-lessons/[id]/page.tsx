"use client"
import { BackButton } from '@/components/BackButton/BackButton'
import SearchBar from '@/components/SearchBar/SearchBar'
import React, { useState } from 'react'

const LesionDetailsPage = () => {
    const [searchValue, setSearchValue] = useState("");
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
      };
  return (
    <div className='bg-white p-4 min-h-[87vh]'>
          <div className="flex justify-between items-center mb-4">
        <BackButton title="Lessons" />
        <SearchBar handleSearch={handleSearch} value={searchValue} />
      </div>
    </div>
  )
}

export default LesionDetailsPage