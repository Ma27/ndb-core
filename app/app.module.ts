import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from "./app.routes";
import {SessionService} from "./user/session.service";
import {LoggedInGuard} from "./user/logged-in.guard";
import {EntityMapperService} from "./model/entity-mapper.service";
import {databaseServiceProvider, DatabaseManagerService} from "./database/database-manager.service";
import {PouchDatabaseManagerService} from "./database/pouch-database-manager.service";
import {AlertService} from "./alerts/alert.service";
import {NavigationItemsService} from "./navigation/navigation-items.service";
import {ConfigService} from "./config/config.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SyncStatusComponent} from "./sync-status/sync-status.component";
import {LoginComponent} from "./user/login.component";
import {FooterComponent} from "./footer.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {AlertsComponent} from "./alerts/alerts.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, routing, FormsModule],
    bootstrap: [AppComponent],
    providers: [
        SessionService,
        LoggedInGuard,
        NavigationItemsService,
        ConfigService,
        AlertService,
        {provide: DatabaseManagerService, useClass: PouchDatabaseManagerService},
        databaseServiceProvider,
        EntityMapperService
    ],
    declarations: [
        FooterComponent,
        NavigationComponent,
        AlertsComponent,
        LoginComponent,
        SyncStatusComponent
    ]
})
export class AppModule {
}
