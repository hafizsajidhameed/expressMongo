import user from "../models/user";

export const allUser = async (req, res) =>{
    let users;
    try{
        users = await User.find();
    } catch(err) {
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message: 'No user found'});
    }
    return res.status(200).json({users})

}