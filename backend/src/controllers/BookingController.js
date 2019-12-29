const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user_id,
      spot_id,
      date
    });

    await booking.populate('spot_id').populate('user_id').execPopulate();

    return res.json(booking);
  }
};
