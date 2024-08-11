import mongoose from 'mongoose'


let isConnected = false

export const connectToDB = async() => {
    mongoose.set('strickQuery', true)

    if(isConnected){
        console.log('mongodb is already connected')
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'media_app_2',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true

        console.log('MongoDB is connected')

    }catch(error){
        console.log(error)
    }
}