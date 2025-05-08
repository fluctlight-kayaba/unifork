# Unifork, experimental sharing code cross-platform, using Amotic design 👋

See `app/index.tsx` as the entry point.

## Ejected mode

As Unistyles require Native Module that is not officially supported by Expo (same for Reanimated) - we'll need to run without Expo Go.

- run `npx expo prebuild --clean` to generate `ios` and `android` project
- `npm run ios` for iOS
- `npm run ios` for Android
- `npm run web` for Browser
