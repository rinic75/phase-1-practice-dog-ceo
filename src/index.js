console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',() => {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ul = document.querySelector('#dog-breeds');
    let breeds =[];

    // fetch
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            renderImg(data.message)
        })

    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            breeds = Object.keys(data.message)
            renderBreed(breeds)
        })

    //dropdown function
    
    document.querySelector('#breed-dropdown').addEventListener('change', (e)=> {
        breedSort(e.target.value)
    })   
    

    // callback function
    function renderImg(arr) {
        arr.forEach(imgs => { 
           const container = document.querySelector('#dog-image-container');
           const img = document.createElement('img');
           img.src = imgs;
           container.appendChild(img);
        })
    }

    function renderBreed(arr) {
        arr.forEach(list => {
            const li = document.createElement('li');
            li.textContent = list;
            li.addEventListener('click', ()=> {
                li.style.color = 'Red'
            })
            ul.appendChild(li)            
        })
    }

    function breedSort(value) {
        let newBreeds = breeds.filter(breed => breed.startsWith(value));
        ul.innerHTML ='';
        renderBreed(newBreeds);
    }

})