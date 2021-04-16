# UMMNH Mobile App

## Modifying text
To edit the text for an exhibit, open the associated file in assets>exhibits

## Images
Images can be found in assets>images. There, you can find folders for gallery images, "hero" images, and nav images. In those are subfolders for each exhibit.

## Italics

Use the CustomText component (can be found in the components folder) along with asterisks (*) to create italicized text. This is usually used for scientific names in the tour text or image gallery text. Currently only set up for default unstyled fonts.

ex: "The \*homo sapien\* was really cool" becomes:
"The *homo sapien* was really cool"

## Publishing
After you've made necessary changes, build for each platform. This project uses [Expo](https://expo.io/) for development and deployment. If necessary, you can "eject" in the future for standalone React Native deployment. Expo just makes everything simpler.

### Android
expo build:android -t apk

This will create a build that is compatible with U-M's stance on Google Play distribution. Hopefully in the future they will change to allow App Bundles which will allow a larger filesize.

### iOS
expo build:ios -t archive

Ensure that you have: the necessary distribution certificate and password, the provisioning profile, and the APNs AuthKey. Use Team "The University of Michigan - Company/Organization". You will need App Manager status for the UMMNH app.

## Analytics
You should be able to request analytics reports from UMOTT. We have not explored this yet, but umott.mobile@umich.edu should be able to help with this.
