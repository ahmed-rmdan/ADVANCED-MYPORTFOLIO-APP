export const runtime = "nodejs";
import { NextRequest,NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function  POST(req:NextRequest  ){
    const data:{name:string,content:string,email:string}=await req.json()
    console.log(data)
if(!data){
        return NextResponse.json({ error: "No data provided" }, { status: 400 });
}
console.log(process.env.BREVO_API_KEY )

      const apiInstance = new brevo.TransactionalEmailsApi();
        apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);
  
  const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.sender={email:'ahmedrmdan251998@gmail.com'}
        sendSmtpEmail.to = [{ email: 'ahmedrmadan251998@gmail.com'}];
        sendSmtpEmail.subject = 'email to me';
        sendSmtpEmail.htmlContent = `<h1>email from my website</h1>
        <h2> from ${data.name} email : ${data.email} </h2>
        <h3>${data.content}</h3>`;
    try {
      const data= await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log(" Email sent sucessed", data);
     return NextResponse.json({ message: "ok" }, { status: 200 });
    } catch (error) {
      console.error(" Error sending email:", error);
      return NextResponse.json({message:"failed to send email"},{status:406});
    }



}