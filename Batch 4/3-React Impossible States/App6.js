const App = () => {
    
    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      { data: [], isLoading: false, isError: false }
    );
    
    const searchedStories = stories.data.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        ...
    
    {stories.isError && <p>Something went wrong ...</p>}
    
    {stories.isLoading ? (
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