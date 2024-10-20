// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();

// exports.sendPromotion = functions.firestore
//   .document('promotions/{promotionId}')
//   .onCreate(async (snap, context) => {
//     const promotion = snap.data();

//     const payload = {
//       notification: {
//         title: promotion.title,
//         body: promotion.body,
//       },
//     };

//     const tokens = await admin
//       .firestore()
//       .collection('users')
//       .get()
//       .then(snapshot => {
//         let tokens = [];
//         snapshot.forEach(doc => {
//           if (doc.data().fcmToken) {
//             tokens.push(doc.data().fcmToken);
//           }
//         });
//         return tokens;
//       });

//     if (tokens.length > 0) {
//       admin
//         .messaging()
//         .sendToDevice(tokens, payload)
//         .then(response => {
//           console.log('Successfully sent message:', response);
//         })
//         .catch(error => {
//           console.log('Error sending message:', error);
//         });
//     }
//   });
