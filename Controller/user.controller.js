import prisma from "../DB/db.config.js";

export const CreateUser = async (req,res)=>{
    const {name,email,password} = req.body
    const FindUser  = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(FindUser){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    else{
        const newUser = await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        })
        return res.status(200).json({message:"New user created"})
    }
}

export const updateUser = async (req,res)=>{
    const userId = req.params.id;
    const {name,email,password}= req.body;

    await prisma.user.update({
        where:{
            id:Number(userId)
        },
    data:{
        name:name,
        email:email,
        password:password
    }
})

     return res.status(200).json({
        message:"User updated successfully"
     })    

}


export const getUsers = async (req,res)=>{
    const users = await prisma.user.findMany({
        include:{
            post:{
                select:{
                    title:true,
                    comment_count:true,
                    description:true
                }
            }
        }
    });

    if(users.length==0){
        return res.status(200).json({
            message:'No user found'
        })
    }
    
    return res.status(200).json({
        Data:users
    })
}

export const deleteUser = async (req,res)=>{
    const userId = req.params.id
    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })

    return res.status(200).json({
        message:'User deleted succenfully'
    })

}