
const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("SUBMITTED!")
    const searchTerm = form.elements.query.value;
    form.elements.query.value = '';
    const img_div = document.querySelector('div')
    img_div.remove();

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const showArray = res.data;
    console.log(showArray);
    const newDiv = document.createElement('DIV');
    for (let result of showArray) {

        console.log(result.show.name);
        // const newH2 = document.createElement('H2');
        // newH2.textContent = result.show.name;
        // document.body.append(newH2);
        if (result.show.image) {
            const newImg = document.createElement('IMG');
            const url = result.show.image.medium;
            newImg.src = url;
            newDiv.append(newImg);
            document.body.append(newDiv);
        }
    }




})



