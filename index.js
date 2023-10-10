let visitCount = localStorage.getItem("visited");
let apiUrl='https://mhriq0m9i0.execute-api.ca-central-1.amazonaws.com/visitorCountApiGatewaystage/count'

// Check if visited entry is present
if (!visitCount) {
localStorage.setItem("visited", 1);
// The count value for the backend
const data = {
    'count': 1,  
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Indicates if the count data was inserted successfully
    })
    .catch(error => {
        console.error(error);
    });
} 
