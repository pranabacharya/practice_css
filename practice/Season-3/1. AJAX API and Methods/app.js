const http = new easyHTTP();

//GET

// http.get('https://jsonplaceholder.typicode.com/posts/100',function(err,post){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });


// const data = {
//     title : "Custom post",
//     body : "This is a custom post"
// };

//POST

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

//PUT

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// })

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/5',function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
})
