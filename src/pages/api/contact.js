import { mailOptions, transporter } from "../../../config/nodemailer";

// const generateEmailContent=(data)=>{
//     return{
//         text,
//         html
//     }
// }

const handler = async (req, res) => {
    const data = req.body;
    console.log(req.body);
    if (req.method === "POST"){
        // const data = req.body;
        if (!data.name || !data.email || !data.message){
            return res.status(400).json({message: "Bad Request"})
        }
    }
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "TESTING MAIL SENDING",
            text: "test",
            html:`<h1>Your name is: ${data.name}</h1><p>${data.message}</p>`,
        })
        return res.status(200).json({success: true})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message})
    }
}

export default handler