const App = () => {
    

    return (
      <div>
      ...

      <hr />

    {isLoading ? (
      <p>Loading ...</p>
    ) : (
      <List
         list={searchedStories}
         onRemoveItem={handleRemoveStory}
    />
    )}
  </div>
 );
};
    