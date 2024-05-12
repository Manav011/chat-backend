import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB\n", error.message);
		// if ssl alert or failure is there then it might be that your ip is not whitelisted in mongodb atlas
	}
};

export default connectToMongoDB;