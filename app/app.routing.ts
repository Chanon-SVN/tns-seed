import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes = [
  { path: "", redirectTo:"/home", pathMatch:"full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
  LoginComponent, HomeComponent
];
