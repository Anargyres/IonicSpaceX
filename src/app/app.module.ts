import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpaceXApiProvider } from '../providers/space-x-api/space-x-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailPage } from '../pages/launch-detail/launch-detail';
import { RocketDetailPage } from '../pages/rocket-detail/rocket-detail';
import { CapsuleDetailPage } from '../pages/capsule-detail/capsule-detail';
import { EquipmentTabsPage } from '../pages/equipment-tabs/equipment-tabs';
import { CoreDetailsPage } from '../pages/core-details/core-details';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';
import { LaunchesPage } from '../pages/launches/launches';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { MissionsPage} from '../pages/missions/missions';
@NgModule({
  declarations: [
    MyApp,
    LaunchesPage,
    SearchPage,
    EquipmentTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    LaunchpadDetailPage,
    CoreDetailsPage,
    MissionsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchesPage,
    SearchPage,
    EquipmentTabsPage,
    LaunchDetailPage,
    RocketDetailPage,
    CapsuleDetailPage,
    CoreDetailsPage,
    LaunchpadDetailPage,
    MissionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXApiProvider,
    InAppBrowser,
  ]
})
export class AppModule {}
