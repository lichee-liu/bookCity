import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFullScreen }from '@ionic-native/android-full-screen/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
