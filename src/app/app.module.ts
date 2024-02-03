import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-component/update-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { CorsInterceptor } from './cors.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { CreateVignetteComponent } from './create-vignette/create-vignette.component';
import { VignetteListComponent } from './vignette-list/vignette-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LogoutComponent } from './logout/logout.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    CreateVignetteComponent,
    VignetteListComponent,
    LogoutComponent,
    PasswordResetComponent,
    PasswordUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
