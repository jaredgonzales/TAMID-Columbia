const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { snapshotConstructor } = require("firebase-functions/v1/firestore");
admin.initializeApp();
const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getAlumni = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Request for alumni database received");
    const snapshot = await db.collection('alumni').get();
    var obj = [];

    snapshot.forEach(doc => {
        var data = doc.data();
        var curr_name = data.name;
        if(!curr_name){
            return;
        }
        var curr_year = data.year;
        if(!curr_year){
            curr_year = "N/A";
        }
        var curr_current_employer = data.current_employer;
        console.log(data);
        if(!curr_current_employer) {
            curr_current_employer = "N/A";
        }
        var curr_can_contact = data.can_contact;
        if(!curr_can_contact){
            curr_can_contact = "No"
        }
        const curr = {name: curr_name, year: curr_year, current_employer: curr_current_employer, can_contact: curr_can_contact};
        obj.push(curr);
    });
    const myJSON = {"documents": obj};
    response.send(myJSON);
});