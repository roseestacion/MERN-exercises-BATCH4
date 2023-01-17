const App = () => {
    
    return (
      <div>
        <h1>My Hacker Stories</h1>
    
    
        <InputWithLabel
         id="search"
         value={searchTerm}
         isFocused
         onInputChange={handleSearchInput}
    >
     <strong>Search:</strong>
    </InputWithLabel>
    
    <button
      type="button"
      disabled={!searchTerm}
      onClick={handleSearchSubmit}
    >
     Submit
    </button>
    </div>
  );
};