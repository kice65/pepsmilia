export default async function handler(req, res) {
  const { country, visaType, age, education } = req.body;
  const eligible = age >= 18 && education !== "";
  res.status(200).json({ eligible, message: eligible ? "You meet the basic criteria" : "You may not be eligible" });
}
