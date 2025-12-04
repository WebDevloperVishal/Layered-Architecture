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
            console.log()
        } catch (error) {
            console.log("Failed to connect to MongoDB:", error.message)
            process.exit(1);
        }
    }

     static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('MongoDB disconnected successfully');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
        }
    }
}

model.exports = dbConfig;