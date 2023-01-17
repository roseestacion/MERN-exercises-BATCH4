const App = () => {
    

    const handleRemoveStory = (item) => {
      dispatchStories({
        type: 'REMOVE_STORY',
        payload: item,
     });
    };   
};