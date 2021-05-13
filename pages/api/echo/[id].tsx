import { NextApiRequest, NextApiResponse } from "next";
interface idNextApiRequest extends NextApiRequest {
  query: {
    yourID?: string
  }
}

export default function echo(req:idNextApiRequest, res:NextApiResponse) {
  res.json({ yourID: req.query.yourID});
}
