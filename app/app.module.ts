import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing} from "./app.routes";
import {SessionService} from "./session/session.service";
import {LoggedInGuard} from "./session/logged-in.guard";
import {EntityMapperService} from "./model/entity-mapper.service";
import {databaseServiceProvider, DatabaseManagerService} from "./database/database-manager.service";
import {PouchDatabaseManagerService} from "./database/pouch-database-manager.service";
import {NavigationItemsService} from "./navigation/navigation-items.service";
import {ConfigService} from "./config/config.service";
import {FormsModule} from "@angular/forms";
import {SyncStatusComponent} from "./sync-status/sync-status.component";
import {LoginComponent} from "./session/login.component";
import {FooterComponent} from "./footer.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {AlertsModule} from "./alerts/alerts.module";
import {NG2BootstrapModule} from "./ng2-bootstrap.module";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavigationComponent,
        LoginComponent,
        SyncStatusComponent
    ],
    imports: [BrowserModule, routing, FormsModule, AlertsModule, NG2BootstrapModule],
    bootstrap: [AppComponent],
    providers: [
        SessionService,
        LoggedInGuard,
        NavigationItemsService,
        ConfigService,
        {provide: DatabaseManagerService, useClass: PouchDatabaseManagerService},
        databaseServiceProvider,
        EntityMapperService
    ]
})
export class AppModule {
}
