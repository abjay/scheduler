package com.abhi.scheduler.email;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class SchedulerSendEmail {
	
	public static void sendEmail(String emailAddress) {
        final String fromEmail = "sender@example.com"; //requires valid gmail id
        final String password = "password"; // correct password for gmail id
        final String toEmail = emailAddress; // can be any email id

        System.out.println("TLSEmail Start");
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
        props.put("mail.smtp.port", "587"); //TLS Port
        props.put("mail.smtp.auth", "true"); //enable authentication
        props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS

        //create Authenticator object to pass in Session.getInstance argument
        Authenticator auth = new Authenticator() {
            //override the getPasswordAuthentication method
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromEmail, password);
            }
        };
        Session session = Session.getInstance(props, auth);
        //String directory = "";
        SchedulerSendEmail.sendEmailNew(session, toEmail,"Meeting request: Select time slot link",
        		"Hello Client2,\n\n      This is a scheduling email for a meeting. Please click on the link below in order to visit the scheduler and select your best available time slot.\n        <insert link to client 2 here> \n\n Thank you,\n Scheduler Team");

    }
    public static void sendEmailNew(Session session, String toEmail, String subject, String body){
        try
        {
            MimeMessage msg = new MimeMessage(session);
            //set message headers
            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
            msg.addHeader("format", "flowed");
            msg.addHeader("Content-Transfer-Encoding", "8bit");

            msg.setFrom(new InternetAddress("sender@example.com"));

            msg.setReplyTo(InternetAddress.parse("sender@example.com", true));

            msg.setSubject(subject, "UTF-8");

            msg.setText(body, "UTF-8");


            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));
            System.out.println("Message is ready");
            Transport.send(msg);

            System.out.println("EMail Sent Successfully!!");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

}
