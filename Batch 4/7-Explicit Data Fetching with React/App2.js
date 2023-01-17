const App = () => {
    const [searchTerm, setSearchTerm] = useSemiPersistentState(
     'search',
     'React'
    );
    
    const [url, setUrl] = React.useState(
     `${API_ENDPOINT}${searchTerm}`
    );

    const handleSearchInput = (event) => {
     setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
     setUrl(`${API_ENDPOINT}${searchTerm}`);
  };
};