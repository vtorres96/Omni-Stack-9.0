const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    date: String,
    approved: Boolean,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    spot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Spot"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
