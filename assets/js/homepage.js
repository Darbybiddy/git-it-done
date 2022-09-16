var getUserRepos = function(){
    // console.log("function was called")
    fetch("https://api.github.com/users/octocat/repos").then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
        
    });
    //the outside log will console log first, before the response function called asynchronous behavior
    // this is incase the code runs slow, it wont halt the rest of the code. 
console.log("outside");
var response = fetch ("https://api.github.com/users/octocat/repos");
console.log(response)
};
getUserRepos();