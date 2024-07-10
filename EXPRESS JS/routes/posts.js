import express from 'express'
import {getPosts,getPost,createPost,updatePost,deletePost} from '../controllers/postController.js'
import logger from '../middleware/logger.js';
const router =express.Router();
   
    
    router.get('/', logger, getPosts)
    
    router.get('/:id', logger,getPost );

    router.post('/',logger,createPost );
 

    router.put('/:id',logger,updatePost );


    router.delete('/:id',logger,deletePost);







export default router;