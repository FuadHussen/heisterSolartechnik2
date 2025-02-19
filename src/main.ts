import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

AOS.init();