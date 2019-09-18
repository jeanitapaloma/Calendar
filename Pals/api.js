$(document).ready(function(){
$('#ajax').click(function(){
var proxy = 'https://cors-anywhere.herokuapp.com/';
 var apiLinkDS = 'https://api.darksky.net/forecast/e2c8b7bba44a193f5ef7d56f5cc0ede3/10.3539171,123.9114687';
 $.get({ 
   url: proxy + apiLinkDS,
   success: function( data ) {
     alert("The Temperature today:\xa0\xa0" + data.currently.temperature +"\xa0\xa0Degree Celsius");
   }
 });
});
});
