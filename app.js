//First, we need to get the form data from the button
//(select element with jQuery)
//Create an event listener to run our functions
//getGiffyAPI:
    // get value of search term
    // Use this to request info from Gify API
        // eg.:
            // let response = await response from axios.get('giffyAPIURL', {searchValue});
    // console.log the response data

console.log("Let's get this party started!");
console.log($('#searchTerm').html());


async function getGif(evt){
    evt.preventDefault();
    let $searchTerm = $('#searchTerm').val();
    console.log($searchTerm);
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${$searchTerm}&api_key=r3OVinr80Qlphab877hyZg3MBHZmYCiZ&limit=1`);
    
    // console.log('Response from Giphy API', response.data.data[0].images.original.url); 
    let originalGif =  response.data.data[0].images.original.url; 

    placeGif(originalGif);
}

function placeGif(url) {
    // given url of image
    // create new element that use url are src for img
    // appead that img to gifContainer
    let $newGif = $("<img>").attr("src", url)
    // console.log("$newGif: ", $newGif, $("<img>").attr("src", url).get(0))
    $("#gifContainer")
        .prepend($newGif)    

}


$('form').on('submit', getGif);
$('#removeImage').on('click', function(){
    $("#gifContainer").empty()
})

