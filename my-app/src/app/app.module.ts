import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContentComponent } from './componentes/content/content.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { HardSoftComponent } from './componentes/hard-soft/hard-soft.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import{HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    ExperienceComponent,
    HardSoftComponent,
    ProjectsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
