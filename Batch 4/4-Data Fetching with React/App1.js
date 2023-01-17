const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {

  React.useEffect(() => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    fetch(`${API_ENDPOINT}react`) // B
     .then((response) => response.json()) // C
     .then((result) => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.hits, // D
     });
})
.catch(() =>
   dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
  );
 }, []);
};
