// import * as functions from "firebase-functions";
// import * as nodemailer from "nodemailer";

// // Configure the email transporter
// const transporter: nodemailer.Transporter = nodemailer.createTransport({
//   host: "your-smtp-host",
//   port: 587,
//   secure: false, // Use TLS
//   auth: {
//     user: "your-email@example.com",
//     pass: "your-email-password",
//   },
// });

// interface WelcomeEmailData {
//   email: string;
// }

// export const sendWelcomeEmail = functions.https.onCall(
//   async (data: WelcomeEmailData, context: functions.https.CallableContext) => {
//     const userEmail: string | undefined = data.email;

//     if (!userEmail) {
//       throw new functions.https.HttpsError(
//         "invalid-argument",
//         "Email is required"
//       );
//     }

//     const mailOptions: nodemailer.SendMailOptions = {
//       from: "Your App <your-email@example.com>",
//       to: userEmail,
//       subject: "Welcome to Your App!",
//       text: `Thank you for registering with Your App. We're excited to have you on board!`,
//       html: `<h1>Welcome to Your App!</h1><p>Thank you for registering with Your App. We're excited to have you on board!</p>`,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       return { success: true, message: "Welcome email sent successfully" };
//     } catch (error) {
//       console.error("Error sending email:", error);
//       throw new functions.https.HttpsError(
//         "internal",
//         "Error sending welcome email"
//       );
//     }
//   }
// );
