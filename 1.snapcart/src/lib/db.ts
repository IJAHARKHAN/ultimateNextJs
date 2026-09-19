

const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
    throw new Error("Please provide MONGODB_URL in the environment variables");
}