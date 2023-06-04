import nodemailer from 'nodemailer';
let transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'juku@juurikas.ee',
        pass: 'kala'
    }
});



function sendLog(content: string){
    let mailOptions={
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content
    };
    transporter.sendMail(mailOptions);
}


function fakeInit(){
    console.log("Käivitus kell "+new Date());
}

export function initApp(freeMemory: number,  mailFn: any): boolean{
    if(freeMemory<100000){mailFn("Vaba mälu ainult "+freeMemory); return false;}
    mailFn("Rakendus käivitus");
    return true;
}

initApp(1500000,  console.log);