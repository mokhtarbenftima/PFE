import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home.component'; // adjust the path as needed
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(HomeComponent, config);

export default bootstrap;
