import  mongoose  from "mongoose";

const ImageSchema = new mogoose({
    images: [
        {
            location: { type: String, required:true },
        },
    ],
}, 
{
    timestamps: true,
}
);

export const ImageModel = mongoose.model("Images", ImagesSchema);