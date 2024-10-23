import prisma from "../DB/db.config.js";

export const CreatePost = async (req,res)=>{
    const {user_id,title,description} = req.body

    
        const newPost = await prisma.post.create({
            data:{
                user_id:Number(user_id),
                title,
                description
            }
        })
        return res.status(200).json({message:"New post created"})
}

export const updatePost = async (req,res)=>{
    const postId = req.params.id;
    const {title,description}= req.body;

    await prisma.user.update({
        where:{
            id:Number(postId)
        },
    data:{
        title,
        description
    }
})

     return res.status(200).json({
        message:"User updated successfully"
     })    

}

export const getPost= async (req,res)=>{
    const posts = await prisma.post.findMany({});
    
    return res.status(200).json({
        Data:posts
    })
}

export const deletePost = async (req,res)=>{
    const postId = req.params.id;
    await prisma.post.delete(
        {
            where:
            {
                id:Number(postId)
            }
        }
    )
    return res.status(200).json({
        message:"Post deleted successfully"
    })
}