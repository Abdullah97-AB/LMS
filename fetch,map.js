// Fetch data using Fetch API and promises
function fetchDataUsingFetch() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched using Fetch API:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching data with Fetch:', error);
        });
}

// Fetch data using Axios
function fetchDataUsingAxios() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log('Data fetched using Axios:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching data with Axios:', error);
        });
}

// Function to display data
function displayData(data, containerId) {
    const container = document.getElementById(containerId);

    data.map(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
        container.appendChild(div);
    });
}

// Using Fetch API
fetchDataUsingFetch().then(data => {
    displayData(data, 'data-container');
});

// Using Axios
fetchDataUsingAxios().then(data => {
    displayData(data, 'data-container');
});
