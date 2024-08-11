import User from "@lib/models/User"
import { connectToDB } from "@lib/mongodb/mongoose"


export const createOrUpdateUser = async (id, first_name, last_name, image_url , email_addresses, username) => {
    try{
        await connectToDB()

        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePhoto: image_url,
                    email: email_addresses,
                    username: username,
                }
            },
            {upsert: true, new: true} // if user doesnt exist create new one

        )

        await user.save()
        return user
    }catch(error){
        console.log(error)
    }
}

export const deleteUser = async() => {
    try{
        await connectToDB()
        await User.findOneAndDelete({clerkId: id})
    } catch(error){
        console.log(error)
    }
}