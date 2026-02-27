import mongoose, { Schema } from "mongoose"; 

export interface IMessage extends Document {
    chat: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
    text: string;
    createdAt: Date;
    updatedAt: Date;
} 
const MessageSchema = new Schema<IMessage> ({
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
}, 
sender: {
    type: Schema.Types.ObjectId,
    ref: "chat",
    required: true,
},
text: {
    type: String,
    required: true, 
}

})

MessageSchema.index({

})

MessageSchema.index({
    chat: 1,
    createdAt: 1 
})  // oldest one first

// 1 -asc 
// -1 -> desc
MessageSchema.index({ chat: 1, createdAt: -1})


export const Message = mongoose.model("Message" , MessageSchema);