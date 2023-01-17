const App = () => {
    
    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      { data: [], isLoading: false, isError: false }
    );
    
};
    