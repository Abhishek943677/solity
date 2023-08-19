// import nodemailer from "nodemailer"

// module.exports = async (req, res) => {
//     if (req.method === "POST") {
//         try {
//             const senderName = req.body.senderName
//             const senderEmail = req.body.senderEmail
//             const msg = req.body.msg;
//             const lastmsg=`msg from ${senderName} who's email : ${senderEmail} and message is : \n ` + msg

//             const transporter = nodemailer.createTransport({
//                 host: 'smtp.elasticemail.com',
//                 port: 2525,
//                 auth: {
//                     user: 'ak4838960@gmail.com',
//                     pass: 'D6D8984067AA3D1FD06445AAEA2335EAE762'
//                 }
//             });
//             // const transporter = nodemailer.createTransport({
//             //     host: 'smtp.mailgun.org',
//             //     port: 587,
                
//             //     auth: {
//             //         user: 'solity@sandboxda5338fcf20c47a0b0e139f1f6f61a65.mailgun.org',
//             //         pass: '87090009223'
//             //     }
//             // });

//             const info = await transporter.sendMail({
//                 from: `"solity.fun website" <ak4838960@gmail.com>`, // sender address
//                 // from: `"${senderName}" <ak4838960@gmail.com>`, // sender address
//                 to: "solity.fun@gmail.com", // list of receivers
//                 subject: "Message From solity.fun", // Subject line
//                 text: lastmsg, // plain text body
//             });

//             console.log(info)

//             transporter.sendMail(info, function (error, info) {
//                 if (error) {
//                     res.json({ error: "sorry , error occured while sending message" });
//                     return res.end();
//                 }

//                 res.json({ ok: "message sent , Thanks for contacting us" });
//                 return res.end();
//             });

//         } catch (error) {
//             console.log(error)
//             res.json({ error: "sorry , some error occured at server, please try after some time" });
//             return res.end();
//         }
//     }
// }