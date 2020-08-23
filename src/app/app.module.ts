import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { NewRecipeBtnComponent } from './navbar/new-recipe-btn/new-recipe-btn.component';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';
import { RecipeDetailComponent } from './recipe-card/recipe-detail/recipe-detail.component';
import { SorterComponent } from './navbar/sorter/sorter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RecipeCardComponent,
    NewRecipeBtnComponent,
    SearchBarComponent,
    RecipeDetailComponent,
    SorterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
