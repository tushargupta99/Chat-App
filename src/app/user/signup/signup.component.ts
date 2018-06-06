import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AppService]
})
export class SignupComponent implements OnInit {
  // Variables to collect the data from Signup Form and then pass it to data and then AppService Mathod
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    public toastr: ToastsManager,
    public router: Router,
    public appServiceObject: AppService,
    vcr: ViewContainerRef ) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {}

    // Define the goToSignin() method
    public goToSignIn(): any {
      this.router.navigate(['/signin']);
    }// end goTOignin

    public signupFunction() {

      if (!this.firstName) {
        this.toastr.warning('enter first name');

      } else if (!this.lastName) {
        this.toastr.warning('enter last name');

      } else if (!this.mobile) {
        this.toastr.warning('enter mobile number');

      } else if (!this.email) {
        this.toastr.warning('enter email');

      } else if (!this.password) {
        this.toastr.warning('enter password');

      } else if (!this.apiKey) {
        this.toastr.warning('enter api key');

      } else {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          mobile: this.mobile,
          email: this.email,
          password: this.password,
          apiKey: this.apiKey
        };

        console.log(data); // print the details(data) filled in form in console

         // calling signin Function from AppService
        this.appServiceObject.signupFunction(data).subscribe((apiResponse) => {

          console.log(apiResponse);
          if (apiResponse['status'] === 200) {
            this.toastr.success('Sign up Successful');
            setTimeout(() => {
              this.goToSignIn();
            }, 1000);

          } else {
            // this.toastr.error(apiResponse.message);
          }

        }, (err) => {
          this.toastr.error('Some Error Occured');
        }
      ); // end of subscribe method


      }// else block finished
    }// end of signupFunction method
}// end of main class
