import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {auth};

//  import firebase from 'firebase/app';
//  import 'firebase/database';

//  const firebaseConfig = {
//    apiKey: 'YOUR_API_KEY',
//    authDomain: 'YOUR_AUTH_DOMAIN',
//    databaseURL: 'YOUR_DATABASE_URL',
//    projectId: 'YOUR_PROJECT_ID',
//    storageBucket: 'YOUR_STORAGE_BUCKET',
//    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//    appId: 'YOUR_APP_ID',
//  };

//  if (!firebase.apps.length) {
//    firebase.initializeApp(firebaseConfig);
//  }

//  export default firebase;

// {
//    "orders": {
//      "orderId1": {
//        "status": "On the way",
//        "estimatedDeliveryTime": "30 mins",
//        "location": {
//          "lat": 37.78825,
//          "lng": -122.4324
//        }
//      }
//    }
//  }


  // {
  //    "orders": {
  //      "orderId1": {
  //        "status": "On the way",
  //        "estimatedDeliveryTime": "30 mins",
  //        "location": {
  //          "lat": 37.78825,
  //          "lng": -122.4324
  //        },
  //        "messages": {
  //          "messageId1": {
  //            "_id": 1,
  //            "text": "Your order is on the way!",
  //            "createdAt": "timestamp",
  //            "user": {
  //              "_id": 2,
  //              "name": "Rider"
  //            }
  //          }
  //        }
  //      }
  //    }
  //  }

  //   {
  //    "orders": {
  //      "orderId1": {
  //        "userId": "userId1",
  //        "status": "Delivered",
  //        "total": 29.99,
  //        "items": [
  //          {
  //            "name": "Burger",
  //            "price": 9.99
  //          },
  //          {
  //            "name": "Fries",
  //            "price": 4.99
  //          },
  //          {
  //            "name": "Coke",
  //            "price": 2.99
  //          }
  //        ],
  //        "createdAt": "timestamp"
  //      },
  //      "orderId2": {
  //        // ...
  //      }
  //    }
  //  }