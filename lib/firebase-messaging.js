// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('LOCAL NOTIFICATION ==>', notification);
//   },
// });

// export const requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// };

// export const notificationListener = async () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });

//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });

//   messaging().onMessage(async remoteMessage => {
//     PushNotification.localNotification({
//       channelId: 'channel-id',
//       title: remoteMessage.notification.title,
//       message: remoteMessage.notification.body,
//     });
//   });
// };
