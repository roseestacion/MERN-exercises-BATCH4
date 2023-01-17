const App = () => {
    

    React.useEffect(() => {
     setIsLoading(true);
    
     getAsyncStories()
      .then((result) => {
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.data.stories,
        });
        setIsLoading(false);
       })
       .catch(() => setIsError(true));
    }, []);
    
    const handleRemoveStory = (item) => {
      const newStories = stories.filter(
        (story) => item.objectID !== story.objectID
    );
    
    dispatchStories({
      type: 'SET_STORIES',
      payload: newStories,
    });
  };
    
  
};
    