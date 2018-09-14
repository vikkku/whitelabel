import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
// Import your library
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeServicComponent } from './home/home-servic/home-servic.component';
import { HomePerComponent } from './home/home-per/home-per.component';
import { HomeFaqComponent } from './home/home-faq/home-faq.component';
import { HomeWelComponent } from './home/home-wel/home-wel.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { HomeWorkingComponent } from './home/home-working/home-working.component';
import { HomePortfoComponent } from './home/home-portfo/home-portfo.component';
import { HomePriTblComponent } from './home/home-pri-tbl/home-pri-tbl.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { HomeNewsComponent } from './home/home-news/home-news.component';
import { HomeContComponent } from './home/home-cont/home-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    HomeSliderComponent,
    HomeAboutComponent,
    HomeServicComponent,
    HomePerComponent,
    HomeFaqComponent,
    HomeWelComponent,
    HomeTeamComponent,
    HomeWorkingComponent,
    HomePortfoComponent,
    HomePriTblComponent,
    HomeTestimonialComponent,
    HomeNewsComponent,
    HomeContComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'team', component: TeamComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'contact', component: ContactComponent}
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
