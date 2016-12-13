import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'select', component: HeroSelectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeroSelectionComponent,
    CardComponent,
    HeroCardComponent,
    HeroSearchComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
