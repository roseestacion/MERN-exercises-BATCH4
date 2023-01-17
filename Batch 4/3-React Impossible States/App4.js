const App = () => {
    
    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      { data: [], isLoading: false, isError: false }
    );

    React.useEffect(() => {
      dispatchStories({ type: 'STORIES_FETCH_INIT' });
    
      getAsyncStories()
        .then((result) => {
          dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: result.data.stories,
    });
    })
    .catch(() =>
       dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    );
  }, []);
};  