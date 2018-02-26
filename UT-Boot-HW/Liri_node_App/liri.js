var request=require("request");
var Twitter = require('twitter');
var mainInfo=require("./keys.js");
var Spotify = require('node-spotify-api');
var userArr=process.argv;
var joinedArr=[];
var mainSearchSting;
var fs= require("fs");

var spotify = new Spotify({
 id: mainInfo.spotifyKeys.id,
 secret: mainInfo.spotifyKeys.secret
});

var cliant = new Twitter({
    consumer_key: mainInfo.twitterKeys.consumer_key,
    consumer_secret: mainInfo.twitterKeys.consumer_secret,
    access_token_key: mainInfo.twitterKeys.access_token_key,
    access_token_secret: mainInfo.twitterKeys.access_token_secret
  });
var movieName=process.argv[3];
var queryUrl;

function userInput(){
for(var i=3; i<userArr.length; i++){
joinedArr.push(userArr[i]);
}
}


if(process.argv[2]==="my-tweets"){
    console.log('ok tweets');
    cliant.get('statuses/user_timeline',{count:'10'}, function(error, tweets, response) {
        var myTweets=JSON.parse(response.body);
       for (var i=0; i<myTweets.length; i++){
        console.log("-----------------------------------------");
        console.log(" ");
        console.log("Date Created : "+myTweets[i].created_at);
        console.log(" ");
        console.log("Tweet : "+myTweets[i].text);
        console.log("-----------------------------------------");
    }
     });
     //console.log(cliant);
}
else if(process.argv[2]==="spotify-this-song"){
    userInput();
    mainSearchSting=joinedArr.join(' ');
    
    spotify.search({ type: 'track', query: mainSearchSting, limit: 1 }, function(err, data) {
        var musicData=data.tracks.items;
        var musicArtistData=data.tracks.items[0].album.artists[0].name;
        var externalURL=data.tracks.items[0].album.external_urls.spotify;
        var musicAlbumData=data.tracks.items[0].album.name;
      console.log(" ");
      console.log("------------------------------");
      console.log(" ");
      console.log("Artist : "+musicArtistData);
      console.log(" ");
      console.log("Search Song : "+mainSearchSting);
      console.log(" ");
      console.log("Album : "+musicAlbumData);
      console.log(" ");
      console.log("External Link : "+externalURL);
      console.log(" ");
      console.log("-------------------------------");
      });
}
else if(process.argv[2]==="movie-this"){
    userInput();
    mainSearchSting=joinedArr.join(' ');
    queryUrl = "http://www.omdbapi.com/?t=" + mainSearchSting + "&y=&plot=short&apikey=40e9cece";
    
    request(queryUrl,function(error,response, body){
        var movieData =JSON.parse(body);
        console.log(" ");
       
        console.log("----------------------------------");
        console.log(" ");
        console.log("Title of the movie : "+movieData.Title);
        console.log(" ");
        console.log("Year the movie came out : "+movieData.Year);
        console.log(" ");
        console.log("IMDB Rating of the movie : "+movieData.Rated);
        console.log(" ");
        console.log("Rotten Tomatoes Rating of the movie : "+movieData.Ratings[1].Value);
        console.log(" ");
        console.log("Country where the movie was produced : "+movieData.Country);
        console.log(" ");
        console.log("Language of the movie : "+movieData.Language);
        console.log(" ");
        console.log("Plot of the movie : "+movieData.Plot);
        console.log(" ");
        console.log("Actors in the movie : "+movieData.Actors);
        console.log(" ");
        console.log("-----------------------------------");
       
        console.log(" ");
        });
}
else if (process.argv[2] === "do-what-it-says"){
    fs.readFile('random.txt', 'utf8', function(err, data) {
        var newArray=data.split(',');

        if(newArray[0]==="my-tweets"){
            cliant.get('statuses/user_timeline',{count:'10'}, function(error, tweets, response) {
                var myTweets=JSON.parse(response.body);
               
                for (var i=0; i<myTweets.length; i++){
                console.log("-----------------------------------------");
                console.log(" ");
                console.log("Date Created : "+myTweets[i].created_at);
                console.log(" ");
                console.log("Tweet : "+myTweets[i].text);
                console.log("-----------------------------------------");
            }
             });
        }
        else if(newArray[0]==="spotify-this-song"){
            spotify.search({ type: 'track', query: newArray[1], limit: 1 }, function(err, data) {
                var musicData=data.tracks.items;
                var musicArtistData=data.tracks.items[0].album.artists[0].name;
                var externalURL=data.tracks.items[0].album.external_urls.spotify;
                var musicAlbumData=data.tracks.items[0].album.name;
              console.log(" ");
              console.log("------------------------------");
              console.log(" ");
              console.log("Artist : "+musicArtistData);
              console.log(" ");
              console.log("Search Song : "+newArray[1]);
              console.log(" ");
              console.log("Album : "+musicAlbumData);
              console.log(" ");
              console.log("External Link : "+externalURL);
              console.log(" ");
              console.log("-------------------------------");
              });

        }
        else if(newArray[0]==="movie-this"){
            queryUrl = "http://www.omdbapi.com/?t=" + newArray[1] + "&y=&plot=short&apikey=40e9cece";
            
            request(queryUrl,function(error,response, body){
                var movieData =JSON.parse(body);
                console.log(" ");
               
                console.log("----------------------------------");
                console.log(" ");
                console.log("Title of the movie : "+movieData.Title);
                console.log(" ");
                console.log("Year the movie came out : "+movieData.Year);
                console.log(" ");
                console.log("IMDB Rating of the movie : "+movieData.Rated);
                console.log(" ");
                console.log("Rotten Tomatoes Rating of the movie : "+movieData.Ratings[1].Value);
                console.log(" ");
                console.log("Country where the movie was produced : "+movieData.Country);
                console.log(" ");
                console.log("Language of the movie : "+movieData.Language);
                console.log(" ");
                console.log("Plot of the movie : "+movieData.Plot);
                console.log(" ");
                console.log("Actors in the movie : "+movieData.Actors);
                console.log(" ");
                console.log("-----------------------------------");
               
                console.log(" ");
                });
        }
      });
      
}