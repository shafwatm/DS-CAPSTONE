// Function to fetch crime data from an API or local data source
async function fetchCrimeData(year) {
    try {
      const response = await fetch(`/crime-data/${year}.json`);
      const crimeData = await response.json();
      return crimeData;
    } catch (error) {
      console.error('Error fetching crime data:', error);
    }
  }
  
  // Function to generate a heatmap visualization
  function generateHeatmap(crimeData) {
    // Code to generate a heatmap visualization using a library like Leaflet or Google Maps
    // You can use the crimeData to plot the heatmap based on crime locations
  }
  
  // Function to display crime predictions
  function displayPredictions(predictions) {
    const predictionsContainer = document.getElementById('predictions');
    predictionsContainer.innerHTML = '';
  
    predictions.forEach((prediction) => {
      const predictionElement = document.createElement('div');
      predictionElement.textContent = `${prediction.neighborhood}: ${prediction.crimeRate}`;
      predictionsContainer.appendChild(predictionElement);
    });
  }
  
  // Event listener for the year selection
  const yearSelect = document.getElementById('year-select');
  yearSelect.addEventListener('change', async () => {
    const selectedYear = yearSelect.value;
    const crimeData = await fetchCrimeData(selectedYear);
  
    // Generate heatmap
    generateHeatmap(crimeData);
  
    // Fetch and display crime predictions
    const predictions = await fetchPredictions(selectedYear);
    displayPredictions(predictions);
  });
  
  // Initial load with the default year (e.g., 2020)
  fetchCrimeData(2020)
    .then((crimeData) => {
      generateHeatmap(crimeData);
      fetchPredictions(2020)
        .then(displayPredictions);
    })
    .catch(console.error);