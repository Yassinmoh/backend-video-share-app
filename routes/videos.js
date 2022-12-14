import express from 'express';
import {addVideo,updateVideo,deleteVideo,getVideo,addView,random,trend,sub,GetByTag,search} from '../controllers/video.js';
import {verifyToken} from '../VerifyToken.js'

const routes=express.Router();

routes.post('/',verifyToken,addVideo)
routes.put('/:id',verifyToken,updateVideo)
routes.delete('/:id',verifyToken,deleteVideo)
routes.get('/find/:id',getVideo)
routes.put('/view/:id',addView)
routes.get('/trend',trend)
routes.get('/random',random)
routes.get('/sub',verifyToken,sub)
routes.get('/tags',GetByTag)
routes.get('/search',search)

export default routes