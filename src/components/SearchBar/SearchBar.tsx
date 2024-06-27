import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const extractedInputValue = form.search.value.trim()
      if (!extractedInputValue) { return toast.error("Search field must be filled!") }
      
  onSearch(extractedInputValue)
  form.reset()}

    return (
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name='search'
    />
      <button type="submit">Search</button>
      <Toaster />
  </form>
</header>
    )
}

export default SearchBar