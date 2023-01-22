/** @format */

import * as functions from "firebase-functions";

exports.test = functions.https.onCall((data, context) => {
    return new Promise((resolve, reject) => {
        try {
            resolve({
                successResponse: "Sample success message!!!!",
            });
        } catch (error) {
            return reject(
                new functions.https.HttpsError("permission-denied", "test error message")
            );
        }
    });
});
