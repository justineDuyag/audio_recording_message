import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  [x: string]: any;
  form: FormGroup;
  submitted = false;


   constructor(private alertCtrl: AlertController, private  router:  Router, private fb: FormBuilder) {
      this.form = this.fb.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        dob: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required]],
      });
    }

    saveDetails() {
      this.submitted = true;
      this.passwordShown = false;

      // stop here if form is invalid
      if (this.form.invalid) {
        return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    }

    onReset() {
      this.submitted = false;
      this.form.reset();
    }
  }
