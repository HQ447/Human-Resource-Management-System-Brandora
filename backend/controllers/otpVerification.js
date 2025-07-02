import User from "../models/User.js";
export const otpVerification = async (req, res) => {
  const { otp } = req.body;
  const user = await User.findOne({
    otp,
    otpExpire: { $gt: Date.now() },
  });
  if (!user) return res.status(400).json({ message: "Invalid or expired OTP" });

  res.json({ message: "OTP verified" });
};
