const App = () => {
    
    // A
    const handleFetchStories = React.useCallback(() => { // B
      if (!searchTerm) return;
    
      dispatchStories({ type: 'STORIES_FETCH_INIT' });
      fetch(`${API_ENDPOINT}${searchTerm}`)
     .then((response) => response.json())
     .then((result) => {
       dispatchStories({
         type: 'STORIES_FETCH_SUCCESS',
         payload: result.hits,
    });
    })
    .catch(() =>
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
     );
 }, [searchTerm]); // E
 
 React.useEffect(() => {
    handleFetchStories(); // C
 }, [handleFetchStories]); // D
};