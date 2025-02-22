import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema({
    buyer: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Types.Currency,
        currency: "INR", // Changed from USD to INR
        get: (v) => v / 100, // Convert value to INR, modify logic as required
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }, ],
}, { timestamps: true, toJSON: { getters: true } });

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;