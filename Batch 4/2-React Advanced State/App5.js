const storiesReducer = (state, action) => {
    if (action.type === 'SET_STORIES') {
      return action.payload;
    } else if (action.type === 'REMOVE_STORY') {
      return state.filter(
       (story) => action.payload.objectID !== story.objectID
      );
    } else {
      throw new Error();
    }
};
    