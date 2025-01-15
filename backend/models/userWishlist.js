
import mongoose from 'mongoose'

const WishlistSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true
    },
    routes: [
        {
            route: {type: String, required: true},
            exerciseName: {type: String, required: true},
        }
    ]
})

const WishlistModel = mongoose.model('Wishlists', WishlistSchema);

export default WishlistModel;
