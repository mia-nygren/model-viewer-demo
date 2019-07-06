import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
// declare global {
//     interface Window {
//       WebComponents: {
//         ready: boolean;
//       };
//     }
//   }

// function bootstrapModule() {
//     platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.log(err));
//   }

//   if (window.WebComponents.ready) {
//     // Web Components are ready
//     bootstrapModule();
//   } else {
//     // Wait for polyfills to load
//     window.addEventListener('WebComponentsReady', bootstrapModule);
//   }