# 🛠 CI/CD Build Pipeline

The Ruby Android app now utilizes **GitHub Actions** for fully automated cloud builds.

## 🚀 How it Works
Every time code is pushed to the `main` branch, a GitHub Action is triggered that:
1. Sets up a Linux environment with JDK 17 and Node.js.
2. Installs project dependencies.
3. Runs the Gradle build process to generate the APK.
4. Uploads the final `.apk` as a GitHub Artifact.

## 📦 Downloading the APK
1. Navigate to the **"Actions"** tab in the GitHub repository.
2. Select the most recent successful **"Android APK Build"** run.
3. Scroll down to the **"Artifacts"** section.
4. Download `ruby-ai-debug-apk`.

## 🔐 Signing & Security

### Debug Build (Current)
The current workflow produces a **Debug APK**. This is signed with a default Android debug key, meaning it can be installed on any device with "Install from Unknown Sources" enabled, but cannot be uploaded to the Google Play Store.

### Release Build (Production)
To generate a signed production APK, the following steps are required:
1. **Generate a Keystore:** Create a `.jks` file using `keytool`.
2. **Add GitHub Secrets:** Add the following as secrets in the repo settings:
   - `ANDROID_KEYSTORE_BASE64`: The base64 encoded content of the `.jks` file.
   - `ANDROID_KEYSTORE_PASSWORD`: Password for the keystore.
   - `ANDROID_KEY_ALIAS`: The alias of the key.
   - `ANDROID_KEY_PASSWORD`: Password for the key.
3. **Update Workflow:** The `.yml` file would be updated to decode these secrets and inject them into the Gradle build process.
