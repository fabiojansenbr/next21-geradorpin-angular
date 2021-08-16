import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ContentFormComponent } from './components/content-form/content-form.component';
import { ContentImageComponent } from './components/content-image/content-image.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VipComponent } from './components/vip/vip.component';
import { GraduacoesComponent } from './components/graduacoes/graduacoes.component';
import { ContentFormVipComponent } from './components/content-form-vip/content-form-vip.component';
import { ContentImageVipComponent } from './components/content-image-vip/content-image-vip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ContentFormComponent,
    ContentImageComponent,
    VipComponent,
    GraduacoesComponent,
    ContentFormVipComponent,
    ContentImageVipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
