module.exports = () => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "aviaavaiproject@gmail.com",
          pass: "bzyhzzymeyrdcvox",
        },
      },
      settings: {
        defaultFrom: "aviaavaiproject@gmail.com",
        defaultReplyTo: "aviaavaiproject@gmail.com",
      },
    },
  },
});
module.exports = () => ({
  "netlify-deployments": {
    enabled: true,
  },
});
// module.exports = () => ({
//   "netlify-deployments": {
//     enabled: true,
//     config: {
//       accessToken: "-P29ln5GB-i1Qmd3YyM8PRDPNq7gCPXsSjnEL0yN_iQ",
//       sites: [
//         {
//           name: "Site 1",
//           id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
//           buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
//           branch: "master", // optional
//         },
//       ],
//     },
//   },
// });module.exports = ({ env }) => ({
