
let posts=[
    {id:1,title:'post-one'},
    {id:2,title:'post-two'},
    {id:3,title:'post-three'}
    ]




export const getPosts = (req,res,next) =>{
    const limit=parseInt(req.query.limit)

    if(!isNaN(limit)&& limit>0){
        return res.status(200).json(posts.slice(0, limit));
    }else{
    res.status(200).json(posts);}
}

export const getPost =(req,res,next)=>{
    const id= parseInt(req.params.id);
    const post = posts.find((post) =>post.id === id);

    if(!post){
        const error =new Error(`A post with id of ${id} was not found`)
        error.status=404;
        return next (error);
    }
    res.status(200).json(post)
}

export const createPost= (req,res,next)=>{
    const newPost ={
        id:posts.length+1,
        title:req.body.title,
    };
    
    if (!newPost.title){
        const error =new Error(`Please include a title`);
        error.status=404;
        return next (error);
    }else{

    posts.push(newPost);
    res.status(201).json(posts);}
}

export const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id)
    const post=posts.find((post)=>post.id === id);

    if (!post){
        const error =new Error(`Please include a title`);
        error.status=404;
        return next (error)
    }
    post.title=req.body.title;
    res.status(200).json(posts);
}

export const deletePost= (req,res,next)=>{
    const id=parseInt(req.params.id)
    const post=posts.find((post)=>post.id === id);

    if (!post){
        const error =new Error(`Please include a title`);
        error.status=404;
        return next (error)
      
    }
    posts = posts.filter((post)=>post.id !== id);
    res.status(200).json(posts);
}