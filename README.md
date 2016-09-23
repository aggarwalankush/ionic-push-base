Ionic 2 Push Base
=================

This can be used as base template for Ionic 2 Push apps. It's working for both iOS and Android Push Notifications.
  
## Tutorial
* [Push Notifications in Ionic 2](https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59)
* [FCM Setup for Android Notifications](https://medium.com/@ankushaggarwal/gcm-setup-for-android-push-notifications-656cfdd8adbd)
* [APNS Setup for IOS Notifications](https://medium.com/@ankushaggarwal/generate-apns-certificate-for-ios-push-notifications-85e4a917d522)

## Getting Started

* Clone this repository.

* Install Ionic and cordova

    ```bash
    $ npm install -g ionic
    $ sudo npm install -g cordova
    ```

* For Android, generate SENDER_ID using this [tutorial](https://medium.com/@ankushaggarwal/gcm-setup-for-android-push-notifications-656cfdd8adbd) :+1:

* Replace YOUR_SENDER_ID in package.json and app.ts with above SENDER_ID
* Install node_modules and push plugin

    ```bash
    $ npm install
    $ ionic plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID=”YOUR_SENDER_ID”
    ```

### Android

    $ ionic platform add android
    $ ionic build android
    $ ionic run android


### iOS
    $ ionic platform add ios
    $ ionic build ios
    
    Run using XCode


####Use device token printed in console for push notifications using below server code

## Push Notifications Preview in lock screen and while using App

* Android
  
  <img src="screenshots/android_push.png" alt="Notification on Lock Screen" width="250"/>
  <img src="screenshots/android_alert.png" alt="Notification While Using App" width="250"/>

* iOS

  <img src="screenshots/ios_push.png" alt="Notification on Lock Screen" width="250"/>
  <img src="screenshots/ios_alert.png" alt="Notification While Using App" width="250"/>
    
 
Server Code
=================
[Push Notifications Server code](https://github.com/aggarwalankush/push-notification-server) :tada::+1:
It has server code used to send Push Notification to iOS and Android device.


## File Structure of App

```
ionic2-push-base/
├── app/                               * Working directory
    ├── pages/                         * Contains all of our pages
    │   ├── details/                   * Push Details tab page
    │   │    ├── detail.html           * DetailsPage template
    │   │    └── detail.ts             * DetailsPage code
    │   │
    │   ├── home/                      * Home page
    │   │    ├── home.html             * HomePage template
    │   │    └── home.ts               * HomePage code
    │   │
    │   │── tabs/                      * Tabs page
    │        ├── tabs.html             * TabsPage template
    │        └── tabs.ts               * TabsPage code
    │    
    ├── app.html                       * Application template
    └── app.ts                         * Main Application configuration with Push Notification
```
