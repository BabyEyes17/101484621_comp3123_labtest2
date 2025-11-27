function Search({ city, setCity, fetchWeather }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        
        <form onSubmit={handleSubmit} className="search-bar">
        
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city"
        />

        <button type="submit">Search</button>
        
        </form>
    );
}

export default Search;
