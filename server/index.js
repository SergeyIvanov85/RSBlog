import express from 'express';
import mongoose from 'mongoose';




const app = express();

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://test:test123@cluster0.wddqga7.mongodb.net/rss-blog?retryWrites=true&w=majority'
        )
        app.listen(3002, () => console.log(`Server started on port: ${3002}`))
    } catch (error) {
        console.log(error)
    }
}
start()
