const App = () => {
    
    return (
     <div>
    
      {stories.isLoading ? (
        <p>Loading ...</p>
    ) : (
      <List list={stories.data} onRemoveItem={handleRemoveStory} />
     )}
   </div>
  );
}; 