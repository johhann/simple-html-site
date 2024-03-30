// Event listener for keyup event on the search input field
document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Get the value entered by the user
    const inputValue = e.target.value;

    // If the input value is empty or contains only whitespace characters, clear the search results and exit
    if (!inputValue.trim()) {
        document.getElementById('results').innerHTML = '';
        return;
    }

    try {
        // Fetch data from the PHP endpoint
        const res = await fetch('http://localhost:8000/');
        const data = await res.json();

        // Filter the data based on the input value and convert it to html list items
        const filteredResults = data.filter(comment => comment.name.includes(inputValue));
        const result = filteredResults.map(comment => `<li>${comment.name}</li>`).join('');

        // Append results to the ui
        document.getElementById('results').innerHTML = result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
