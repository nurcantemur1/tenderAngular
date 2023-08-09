import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    /*  this.router.navigate(["panel"]);
    this.toastrService.info("Giriş başarılı!")*/
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(
        (response) => {
          if(response.success){
               this.toastrService.info(response.message);
          localStorage.setItem("token", response.data.token);
          this.router.navigate(["dashboard"]);
          this.toastrService.info("Giriş başarılı!");
          }
          else{
            console.log("giremiyom");
          }
       
        },
        (responseError) => {
          //console.log(responseError)
          this.toastrService.error(responseError.error);
        }
      );
    }
  }
}
