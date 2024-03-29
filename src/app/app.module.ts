import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Make sure this import is present
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    // ... other components ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Ensure this is in the imports array
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
