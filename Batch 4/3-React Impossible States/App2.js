const App = () => {
    
    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
    []
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    
};  