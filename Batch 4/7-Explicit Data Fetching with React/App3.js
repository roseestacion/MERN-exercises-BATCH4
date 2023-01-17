const App = () => {

    const handleFetchStories = React.useCallback(() => {
      dispatchStories({ type: 'STORIES_FETCH_INIT' });
    
      fetch(url)
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
    }, [url]);
    React.useEffect(() => {
     handleFetchStories();
    }, [handleFetchStories]);
};   