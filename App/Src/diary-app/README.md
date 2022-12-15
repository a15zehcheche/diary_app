# dairy-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install

environment:
path (
    C:\Users\user\AppData\Local\Android\Sdk\emulator,C:\Users\user\AppData\Local\Android\Sdk\build-tools,C:\Users\user\AppData\Local\Android\Sdk\platform-tools,
    C:\Users\user\AppData\Local\Android\Sdk
)
ANDROID_HOME:C:\Users\user\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT:C:\Users\user\AppData\Local\Android\Sdk
ANDROID_PLATFORM_TOOLS:C:\Users\user\AppData\Local\Android\Sdk\platform-tools
JAVA_HOME:C:\Program Files\Java\jdk-11.0.17  (jdk version 11 important!!!)


```

### Compile and Hot-Reload for Development

```sh
npm run dev
npm run dev -- --host

cordova run android -l -c 
chrome://inspect/#devices  
```

cordova platform add android
cordova plugin add cordova-sqlite-storage

### Compile and Minify for Production

```sh
npm run build
cordova build android 

```


### git 
git tag -a v1.2.0 -m "my version 1.2.0"
git push origin v1.2.0