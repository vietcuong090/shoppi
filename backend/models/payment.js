import mongoose from 'mongoose';

const paymentSchema = new Schema(
  {
    order_id: { type: String, required: true },
    packageId: {
      type: Schema.Types.ObjectId,
      ref: 'ShopPackage',
      required: true,
    },
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    status: { type: String, default: 'pending' },
    order_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const paymentModel = mongoose.models.payment || mongoose.model('payment', paymentSchema);
export default paymentModel;
