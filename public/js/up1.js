$('#app').html(`

<div class="loader">Loading...</div>
`);
setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=gotham"
}).done(function(res){
	console.log(res);
	let html = `
	   <center>
		
			<h1 style="font-size:2800%; font-family:Impact;">${res.Title}</h1>
			<h3 style="text-align:center;">${res.Plot}</h3>
			<center><img src="${res.Poster}"></center>
			<h3 style="text-align:center;">${res.Genre}</h3>
			<h3 style="text-align:center;">${res.Writer}</h3>
			
		</center>
		
		
	`;
	$('#app').html(html);


});
}
