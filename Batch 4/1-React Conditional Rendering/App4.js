const App = () => {
    ...

    return (
     <div>
      ...

      <hr />

    {isError && <p>Something went wrong ...</p>}
    
    {isLoading ? (
      <p>Loading ...</p>
    ) : (
      ...
     )}
    </div>
  );
};