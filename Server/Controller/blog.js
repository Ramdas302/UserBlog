const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');


router.get('', (req, res, next) => {
    Blog.find().then(todos => {
        res.status(200).json({
            message: 'Successfully retreived todos',
            todos
        });
    });
});

router.get('/:id', (req, res, next) => {
    Blog.findOne({ _id: req.params.id }).then(todo => {
        res.status(200).json({
            message: 'Successfully retreived todo',
            todo:todo
        });
    });
});

router.post('', checkAuth, (req, res, next) => {
    console.log(req.body)
    const blog = new Blog({
        blog_title:req.body.blog_title,
        description: req.body.description,
        image_url:req.body.image_url,
        user: req.userId
    });

    blog.save().then(createdBlog => {
        res.status(201).json({
            message: 'Blog added successfully',
            createdBlog:createdBlog
        });
    });
});


router.put('/:id',(req,res)=>{
    console.log(req.body);
    var blog={
        _id: req.body.id,
        blog_title:req.body.blog_title,
        image_url:req.body.image_url,
        description: req.body.description,
        completed: req.body.completed
       
    }
    Blog.findByIdAndUpdate(req.params.id,{$set:blog},(err,blog)=>{
        if(err){
            console.error(err)
            return res.status(400).json({
              message:'bad request'
            });
          }else{
            res.json({
              status:200,
              data:blog
            });
          }

        });
    });

    router.delete('/:id',(req,res)=>{
        console.log(req.body);
        Blog.findByIdAndRemove(req.params.id,function(err,blog){
            if(err){
                res.json({
                    status : 400
                })
            }else{
                res.json({
                    status : 200
                })
            }
        })
    });

    
    
module.exports = router;
