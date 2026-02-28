import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Contact Form Data:", req.body);

    // You can save to DB or send email here

    return res.status(200).json({ success: true });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}