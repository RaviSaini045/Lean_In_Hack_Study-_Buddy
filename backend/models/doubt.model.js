import mongoose from "mongoose";

const doubtSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    doubtImg: [{
        type: String,
        required: true,
    }],
    description: {
        type: String,
        required: true,
        min: 50,
    },
    category: [{
        type:String,
        trim: true,
        required:true,
    }],
},{
    timestamps: true,
})

const Doubt = mongoose.model("Doubt", doubtSchema);

export default Doubt;