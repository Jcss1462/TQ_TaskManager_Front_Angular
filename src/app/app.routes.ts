import { Routes } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { LoginComponent } from './domains/user/login/login.component';
import { ForgotPasswordComponent } from './domains/user/forgot-password/forgot-password.component';
import { RegisterComponent } from './domains/user/register/register.component';

export const routes: Routes = [

    {
        path: "",
        component: HeaderComponent,
        children: [
            {
                path: "signin",
                component: RegisterComponent
            }
            ,{
                path: "login",
                component: LoginComponent
            }
            ,{
                path: "forgotPassword",
                component: ForgotPasswordComponent
            }
       
        ]
    }


];
