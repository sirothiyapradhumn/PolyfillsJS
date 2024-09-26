// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json));

const fetchDetails = async(url) => {
    try {
        const response  = await fetch(url);
        const json = await response.json();
        console.log(json);

    } catch (e) {
        console.log(e);
    }
}
    
fetchDetails('https://jsonplaceholder.typicode.com/users');