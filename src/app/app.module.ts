import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { AccueilComponent } from './accueil/accueil.component';
import {AppRoutingModule} from "./app-routing.module";
import { LanguageComponent } from './language/language.component';
import { ContactComponent } from './contact/contact.component';
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LorraineComponent } from './lorraine/lorraine.component';
import { AlsaceComponent } from './alsace/alsace.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatTabsModule} from "@angular/material/tabs";
import { LieuxComponentLorraine } from './lorraine/lieux/lieux.component';
import { StatsComponentLorraine } from './lorraine/stats/stats.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {LieuxComponentAlsace} from "./alsace/lieux/lieux.component";
import {StatsComponentAlsace} from "./alsace/stats/stats.component";

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    AccueilComponent,
    LanguageComponent,
    ContactComponent,
    LorraineComponent,
    AlsaceComponent,
    LieuxComponentLorraine,
    StatsComponentLorraine,
    LieuxComponentAlsace,
    StatsComponentAlsace
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
        MatListModule,
        MatMenuModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatSidenavModule,
        MatCardModule,
        MatGridListModule,
        MdbCarouselModule,
        MatTabsModule,
        NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
