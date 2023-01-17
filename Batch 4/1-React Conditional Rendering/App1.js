const App = () => {
    
    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    
    React.useEffect(() => {
     setIsLoading(true);
    
      getAsyncStories().then((result) => {
       setStories(result.data.stories);
       setIsLoading(false);
    });
    }, []);
   
    
 };