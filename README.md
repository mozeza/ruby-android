# Ruby Android Application

A full-featured Android companion app for the Ruby AI Assistant.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Java Development Kit (JDK 17)
- Android Studio & SDK
- React Native CLI

### Installation
1. Navigate to the project directory:
   ```bash
   cd /root/.openclaw/workspace/ruby-android
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npx react-native run-android
   ```

## ☁️ Cloud Build (Expo EAS)

The project is configured for cloud builds using Expo Application Services (EAS). This allows you to generate a signed APK without needing a local Android Studio setup.

### Prerequisites
1. Install the EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Create an Expo account at [expo.dev](https://expo.dev).

### Triggering the APK Build
1. Login to your Expo account:
   ```bash
   eas login
   ```
2. Initialize the project:
   ```bash
   eas build:configure
   ```
3. Start the preview build (APK):
   ```bash
   eas build -p android --profile preview
   ```
Once the build is complete, EAS will provide a URL to download the `.apk` file.


## 🎨 Branding
- **Primary:** #FF3131
- **Accent:** #FF5E62
- **Dark:** #0B0E14
