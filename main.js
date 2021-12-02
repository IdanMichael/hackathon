
let likes = 0;
let dislikes = 0;



const youtubeKey = "AIzaSyApjzcm86yI6joRyWIDy4QhKAxV9ghJJKQ" 
const videoID = window.location.href.split("v=")[1]
const link = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + videoID + '&key=' + youtubeKey
 fetch(link)
    .then((data) => data.json())
    .then((data) => {

      likes = data.items[0].statistics.likeCount
      dislikes = data.items[0].statistics.dislikeCount
      
      console.log(likes)
      console.log(dislikes)
    });
console.log("hello world")
setTimeout(() => {
  console.log(likes)
}, 1000)