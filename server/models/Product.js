import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        currency: "INR", // Changed from USD to INR
        get: (v) => v / 100, // Convert value to INR, modify logic as required
    },
    expense: {
        type: mongoose.Types.Currency,
        currency: "INR", // Changed from USD to INR
        get: (v) => v / 100, // Convert value to INR, modify logic as required
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
    }, ],
}, { timestamps: true, toJSON: { getters: true } });

const Product = mongoose.model("Product", ProductSchema);

export default Product;