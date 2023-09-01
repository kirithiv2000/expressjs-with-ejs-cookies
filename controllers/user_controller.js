const user = require("../models/user")

module.exports={
    users:(req,res)=>{
        if (req.cookies.user_id){
            user.findById(req.cookies.user_id).then(e=>{
                console.log(e)
                if(e){
                    return res.render("user",{
                        title:"user",
                        user:e,
                    })
                }else{
                    return res.redirect("/users/signin")
                }
            })
        }else{
            return res.redirect("/users/signin")
        }
        
    },
    signin:(req,res)=>{
        if (!req.cookies.user_id){

        return res.render("user_sign_in",{
            title:"user sign in"
        })}else{
            return res.redirect("/users/profile")
        }
    },
    signup:(req,res)=>{
        return res.render("user_sign_up",{
            title:"user sign up"
        })
    },
    create:(req,res)=>{
        const data = req.body
        if (data.password!=data.conform_password){
            return res.redirect("back")
        }
        user.findOne({email:data.email}).then((e)=>{
            if(!e){
                const new_user = new user(data)
                new_user.save().then(e=>{
                    console.log("user created",e)
                    return res.redirect("/users/signin")
                }).catch(e=>{
                    console.log("error while creating ",e)
                    return res.redirect("back")

                })
            }else{
                return res.redirect("back")
            }
        }).catch((e)=>{
            console.log(e)
        })
        
        // return res.redirect("back")
    },
    login:(req,res)=>{
        const data = req.body
        console.log(data,"body")
        user.findOne({email:data.email}).then(e=>{
            console.log(e,"found user")
            if (!e){
                return res.redirect("back")
            }else{
                if (e.password==data.password){

                    res.cookie("user_id",e.id)
                    return res.redirect("/users/profile")
                }else{
                    return res.redirect("back")
                }

            }
        })

    },
    signout:(req,res)=>{
        console.log(req.body)
        res.clearCookie("user_id")
        return res.redirect("back")
    },
}