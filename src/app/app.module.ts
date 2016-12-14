import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HomeComponent } from './home/home.component';

import { HeroDataService } from './shared/services/hero-data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select', component: HeroSelectionComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroSelectionComponent,
    CardComponent,
    HeroCardComponent,
    HeroSearchComponent,
    HeroListComponent,
    HomeComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [HeroDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
