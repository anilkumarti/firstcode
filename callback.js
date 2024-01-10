const posts=[{tittle:"Post1",body:"This is post one", createdAt: new Date().getTime()},
 {tittle:"Post2",body:"This is post two", createdAt: new Date().getTime()},
{tittle:"Post3",body:"This is post three", createdAt: new Date().getTime()}];

function getPosts()
{
    setTimeout(function(){
        let output='';
        posts.forEach((post)=>
        {
            output+=`<li> ${post.tittle} other details will be =${post.body} main item ${post.createdAt} </li>`
        })
        document.body.innerHTML=output;
    }, 1000)
   
} 
function createPost(post)
{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error)
        {
            resolve()
        }
        {
            reject("Error is found")
        }
       },2000)

});
}
function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=> {
      posts.createdAt=new Date().getTime();
      resolve();
    })
}


createPost({tittle:"Post4",body:"This is post four", createdAt: new Date().getTime()} )
.then(getPosts).then(()=> updateLastUserActivityTime())
.then((updateLast)=> console.log("Last user update this atb" + updateLast))
.catch((err)=>console.log(err))