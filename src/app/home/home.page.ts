import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  public onSubmit() {
    const form = this.loginForm.value;
    console.log(form);
  }

  constructor() {}
}
