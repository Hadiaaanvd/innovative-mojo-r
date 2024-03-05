const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const nodemailer = require("nodemailer");

const sendEmailToCustomer = async (mailContent) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contact@innovativemojo.com",
      pass: "dsoaobzdmylwivvp",
    },
  });

  await transporter.sendMail(mailContent, function (error, info) {
    if (error) {
      console.log("Error inside email send function", error);
    } else {
      console.log("Email sent");
    }
  });
};

exports.sendFormDataInEmail = functions.https.onCall(async (data, context) => {
  try {
    const { formData, heading, type } = data;
    if (data) {
      console.log("data", JSON.stringify(data));

      var mailOptions = {
        from: "euqalhanaahol@gmail.com",
        to: ["contact@innovativemojo.com", "projectlead@innovativemojo.com"],
        subject: "User submission",
        html: `<!DOCTYPE html>
            <html>
            <head>
                <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.5;
                    background-color: #f7f7f7;
                    padding: 20px;
                }
            
                .container {
                    max-width: 80%;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 10px;
                    padding: 30px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
            
                h1 {
                    color: #333333;
                    text-align: center;
                }
            
                table {
                  font-size:14px;
                    width: 100%;
                }
            
                th,
                td {
                    padding: 10px;
                    border-bottom: 1px solid #dddddd;
                }
            
                th {
                  
                    text-align: left;
                    background-color: #f2f2f2;
                }
                </style>
            </head>
            <body>
                <div class="container">
                <h1>${heading}</h1>
                <table>
    
                    ${
                      formData.name
                        ? `<tr>
                                <th>Full Name</th>
                                <td>${formData.name}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.email
                        ? `<tr>
                                <th>Email Address</th>
                                <td>${formData.email}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.applicationName
                        ? `<tr>
                                <th>${
                                  type === "app" ? "Application" : "Website"
                                } Name</th>
                                <td>${formData.applicationName}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.applicationUrl
                        ? `<tr>
                            <th>${
                              type === "app" ? "Application" : "Website"
                            } URL</th>
                                <td>${formData.applicationUrl}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.contactNumber
                        ? `<tr>
                                <th>Contact Number</th>
                                <td>${formData.contactNumber}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.bestTime
                        ? `<tr>
                                <th>Best Time to Reach</th>
                                <td>${formData.bestTime}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.projectGoal
                        ? `<tr>
                                <th>What is your goal for this project?</th>
                                <td>${formData.projectGoal}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.timeFrame
                        ? `<tr>
                                <th>What is your time-frame for this project</th>
                                <td>${formData.timeFrame}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.budget
                        ? `<tr>
                                <th>What is your budget?</th>
                                <td>${formData.budget}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.applicationUI
                        ? `<tr>
                                <th>Do you have an application UI?</th>
                                <td>${formData.applicationUI}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.pages
                        ? `<tr>
                            <th>How many pages do you need?</th>
                            <td>${formData.pages}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.monthlyMaintenance
                        ? `<tr>
                                <th>Do you need monthly maintenance?</th>
                                <td>${formData.monthlyMaintenance}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.eCommerce
                        ? `<tr>
                            <th>Do you need E-commerce?</th>
                            <td>${formData.eCommerce}</td>
                        </tr>`
                        : ""
                    }
                    ${
                      formData.hasContent
                        ? `<tr>
                                <th>Do you have content for the project?</th>
                                <td>${formData.hasContent}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.inspirations
                        ? `<tr>
                                <th>Give examples of applications you like (Paste URL)</th>
                                <td>${formData.inspirations}</td>
                            </tr>`
                        : ""
                    }
                    ${
                      formData.additional
                        ? `<tr>
                            <th>Anything else you would like us to know</th>
                            <td>${formData.additional}</td>
                        </tr>`
                        : ""
                    }
                </table>
                </div>
            </body>
            </html>
            `,
      };
      sendEmailToCustomer(mailOptions);

      return {
        success: true,
      };
    } else {
      const errorObject = { status: 500, message: "No Data" };
      throw errorObject;
    }
  } catch (err) {
    console.log(err.message);
    return { success: false, message: err.message };
  }
});
