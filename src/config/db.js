const require = require('mongoose');

class dbConfig{
    static async connect(){
        try {
            const MONGODB_URL = process.env.MONGODB_URL

            if(!MONGODB_URL){
                throw new Error('MongoDB Connection URI is not define')
            }

            const options = {
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            };

            await mongoose.connect(MONGODB_URL, options)
        } catch (error) {
            
        }
    }
}