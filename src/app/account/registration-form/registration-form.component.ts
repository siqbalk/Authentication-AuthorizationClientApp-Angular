import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { Userregisteration } from 'src/app/shared/models/userregisteration.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  // tslint:disable-next-line:no-inferrable-types
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: Userregisteration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
        this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                  .pipe(finalize(() => this.isRequesting = false))
                  .subscribe(
                    result  => {if (result) {
                        this.router.navigate(['/login'], { queryParams: {brandNew: true, email: value.email}});
                    }},
                    errors =>  this.errors = errors);
    }
 }


}
