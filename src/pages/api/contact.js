// import { NextApiRequest } from "next"
// import { NextApiResponse } from "next"

import { log } from "console";
import { mailOptions, transporter } from "../../../config/nodemailer";

const handler = async (req, res) => {
    // const body = req.body
    console.log(req.body)
    if (req.method === "POST"){
        const data = req.body;
        console.log(!data.name || !data.email || !data.message);
        if (!data.name || !data.email || !data.message){
            console.log("OKKKKK!");
            return res.status(400).json({message: "Bad Request"})
        }
    }
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "lmao",
            text: "This is a test string",
            html:"<h1>Test title</h1><p>Some body text</p>",
        })
        return res.status(200).json({success: true})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message})
    }
}

export default handler