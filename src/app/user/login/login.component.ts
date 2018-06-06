import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(
    public appServiceObject: AppService,
    public router: Router,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  // Defining goToSignUpp() function
  public goToSignUp() {
    this.router.navigate(['/signup']);
  }// end of goToSignUp()


  // Defining the signinFunction method
  public signinFunction() {
    if (!this.email) {
      this.toastr.warning('entrer email');

    } else if (!this.password) {
        this.toastr.warning('enter password');

    } else {
      const data = {
        email: this.email,
        password: this.password
      };

    // calling signin Function from AppService
    this.appServiceObject.signinFunction(data).subscribe((apiResponse) => {
      if (apiResponse['status'] === 200) {

        console.log(apiResponse);

        Cookie.set('authToken', apiResponse['data'].authToken);

        Cookie.set('recieverId', apiResponse['data'].userDetails.userId);

        Cookie.set('firstName', apiResponse['data'].userDetails.firstName);
        // userInfo variable was set in setUserInfoInLocalStorage( data ) method in app.service.ts class
        this.appServiceObject.setUserInfoInLocalStorage(apiResponse['data'].userInfo);

        this.router.navigate(
          [
            '/chat-box'
          ]
        );
      } // if block ends
    }


    );


    }
  }

}
