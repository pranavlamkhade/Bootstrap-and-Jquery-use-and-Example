import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  FormGroup: FormGroup;
  form: any;
// Reactive Forms
  signupForm: FormGroup;
  FirstName = '';
  LastName = '';
  Email = '';
  Password = '';

  constructor(private frmbuilder: FormBuilder ) {
    this.signupForm = frmbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailid: ['', Validators.required],
      userpassword:  ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.form = new FormGroup({
     ContactNos: new FormArray([
       new FormControl('9970957985'),
       new FormControl('9860310011'),
     ]),
    });
  }
    addContactNo() {
      this.form.get('ContactNos').push(new FormControl());
    }
    onSbmit() {
      console.log(this.form.get('ContactNos').value);
      console.log(this.form.value);
    }
    setPreset() {
      this.form.get('ContactNos').patchValue(['1234567890', '9874563210']);
    }
    postdata(signupForm: any) {
      this.FirstName = this.signupForm.get('fname').value;
      console.log(this.FirstName);
      console.log(this.signupForm.value);
    }
      resetform() {
      this.signupForm.reset();
    }
      filldata() {
      this.signupForm.setValue({
        fname: 'ajeet',
        lname: 'kumbhare',
        emailid: 'abc@gmail.com',
        userpassword: '12345'
      });
    }




    Register(regForm: any) {
    // debugger;
    // var firstname = regForm.control.firstname.value;
    // var lastname = regForm.control.lastname.value;
    // var email = regForm.control.email.value;
     console.log(regForm);
  }
}

