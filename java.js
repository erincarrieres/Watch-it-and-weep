

$(function() {

	$('form').on('submit', function(formEvent) {
		formEvent.preventDefault();
		// with those values, filter the length option and genre option
		// var lengthChoice = $('input[name=occupation]:checked').val();
		var genreChoice = $('input[name=sadLevel]:checked').val();
		console.log(genreChoice);

		watch.getMovie(genreChoice);
  	// console.log(finalGenre);

  		var randomMovie = Math.floor(Math.random() *
			genreChoice.length );
		//make variable to hold user's random filtered occupation choice
		var finalMovie = genreChoice[randomMovie];
		console.log(randomChoice);
	});

var apiKey = 'c8b0cda53ad480b3b79620b2c7dd0e55';
var watch = {};

watch.getMovie = function(genreChoice) {
	 $.ajax ({
		url: "https://api.themoviedb.org/3/genre/" + genreChoice + "/movies",
		method: 'GET',
		dataType:'jsonp',
		data: {
			api_key: apiKey  
		}
	})
	.then(function(res){
		console.log(res.results);

		// console.log(data.);
		// var genreId = res.results[0].id;
	
	var randomMovie = Math.floor(Math.random() *
			res.results.length );
		//make variable to hold user's random filtered occupation choice
	var almostMovie = res.results[randomMovie];
		console.log(almostMovie);

	var finalMovie = almostMovie.original_title;
		console.log(finalMovie);

	var imgConcat = 'https://image.tmdb.org/t/p/w500' + almostMovie.poster_path;

	var img = '<img class="moviePoster" src="' + imgConcat +'"/>'
	console.log($(img));

	var resultImg =`<img class="genreDef" src="images/${genreChoice}.png">`

	var resultPar =`<p class="${genreChoice}"></p>`

	var resetButton = '<button class="reset">WEEP MORE</button>'

	$('main').html(`<h2 class="choice">${finalMovie} </h2>`).append(img).append(resultImg).append(` ${resetButton}`);

	$('.reset').on('click',function() {
		     location.reload();
		       });

	})

	// $('main').html(`<h2 class="choice">${nameResult}</h2> ${img} ${resetButton}`);
	// })
}; // form closing

	$('.sadLevel label p').click(function() {
	      $(".sadLevel label p.clicked").removeClass("clicked");
	      $(this).addClass('clicked');
	});




}); // doc ready closing
	// Allow user to select some selections


$(function(){
	watch.getMovie()
});


// ${resultImg} ${resetButton}

//         };
// sadPlaylist.init
//user is asked how long they would like to cry for ('a bit' or 'forever') which will either pick from movie or TV show 
//user is asked how sad they are 
//each sadness level will have a genre associated with it which will correspond to keywords to retrieve from the API's movies 
//app generates a spotify playlist that user can listen to during their cry



