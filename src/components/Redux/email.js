import { strapi } from "strapi-sdk-javascript";

module.exports = {
    sendEmail: async (to, subject, text) => {
      try {
        await strapi.plugins["email"].services.email.send({
          to,
          subject,
          text,
        });
      } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Error sending email");
      }
    },
  };
  