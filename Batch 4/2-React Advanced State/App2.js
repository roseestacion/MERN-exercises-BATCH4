const App = () => {
    ...

    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
     []
    );
  ...
};
    