// const apiKey = '8934b164-2a7d-4802-a986-478588a2709c'; // Replace 'YOUR_API_KEY' with your actual API key
const apiKey='4ea8227a-72ff-4cf3-b457-ee34f277c8d1'
const searchBtn = document.getElementById('search');
const wordInput = document.getElementById('word');
const definitionsDiv = document.getElementById('definitions');
const showData=document.getElementById('show');
searchBtn.addEventListener('click', () => {
    const word = wordInput.value.trim();
    if (word !== '') {
        // fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`)
        // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        // fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${word}?key=${apiKey}`)
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}
        `)
            .then(response => response.json())
            .then(data => {
                displayDefinitions(data);
                // console.log(data[0].shortdef[0])
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                definitionsDiv.innerHTML = 'An error occurred. Please try again later.';
            });
    } else {
        definitionsDiv.innerHTML = 'Please enter a word to search.';
    }
});

function displayDefinitions(data) {
    // if (data.length === 0) {
    //     definitionsDiv.innerHTML = 'No definitions found.';
    //     return;
    // }
    
    let definitionsHTML = '<h2>Definitions</h2>';
    // showData.innerHTML=data.shortdef[0]
    data.map((val,ind)=>{
        definitionsHTML+=`<p>Defintion ${ind+1} : ${val.shortdef}</p>`
    })
    // data.forEach(entry => {
    //     if (entry.hasOwnProperty('shortdef')) {
    //         definitionsHTML += `<p> ${entry[0].shortdef}</p>`;
    //     }
    // });
    definitionsDiv.innerHTML = definitionsHTML;
}
