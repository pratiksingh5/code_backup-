// Bad Example:
// The App component depends directly on the data-fetching implementation, making it harder to change.

function App() {
    const fetchData = () => {
        // Fetch data from API
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
        </div>
    );
}

<App />;


// Good Example:
// The App component depends on an abstraction (prop), making it easier to switch the data-fetching implementation.

function App({ dataFetcher }) {
    return (
        <div>
            <button onClick={dataFetcher}>Fetch Data</button>
        </div>
    );
}

const fetchDataFromAPI = () => {
    // Fetch data from API
    console.log("Data fetched from API");
};

// Usage
<App dataFetcher={fetchDataFromAPI} />;
