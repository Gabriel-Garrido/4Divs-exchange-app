import emailjs from "@emailjs/browser";

export const sendEmail = (params) => {
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const key = process.env.KEY;

  const templateParams = {
    from_name: "4divs App",
    to_email: params.to_email,
    to_name: params.to_name,
    to_message: params.to_message,
    to_link: params.to_link
  };
  emailjs.send("service_wqkqw3i", "template_kw3stmr", templateParams, "OfWs6mlKKF_lVT75u").then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};