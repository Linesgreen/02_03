// noinspection UnnecessaryLocalVariableJS

import nodemailer from "nodemailer";
import {
    BodyContentType,
    BodyPart,
    Configuration,
    EmailMessageData,
    EmailsApi
} from "@elasticemail/elasticemail-client-ts-axios";
import {contentValidation} from "../middlewares/post/postsValidator";
export const emailAdapter = {
    /*
    async sendEmail1(email: string, subject: string, message: string) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: "linesgreenTest@gmail.com",
                pass: "knlc evir ufry fcbr",
            },
        });

        const info = await transporter.sendMail({
            from: 'Vlad_Nyah <linesgreenTest@gmail.com>',
            to: email,
            subject: subject,
            html: message
        });
        return info
      },
     */

    async sendEmail(email: string, subject: string, message: string) {
        const config: Configuration = new Configuration({
            apiKey: "1C0DFCCC4F5F94535C54F109E5FD57E6718E0E2DAA60FE02F52D72CFACF9F09ECC2661E271C8485FC61D73A0B7513D06",
        });
        const emailsApi = new EmailsApi(config);
        const emailMessageData: EmailMessageData = {
            Recipients: [
                {
                    Email: email,
                    Fields: {
                        name: "Name"
                    }
                }
            ],
            Content: {
                Body: [
                    {
                        ContentType: BodyContentType.Html,
                        Charset: "utf-8",
                        Content: message
                    } as BodyPart
                ],
                From: 'Vlad_Nyah <linesgreen@gmail.com>',
                Subject: subject
            },
            Options: {
                'TrackOpens': false,
                'TrackClicks': false
            }
        };

        emailsApi.emailsPost(emailMessageData).then((response) => {
        }).catch((error) => {
            console.error(error, "***********************************************");
            return false
        });

        return true
    },


};