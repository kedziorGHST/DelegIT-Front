import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
        this.router.navigateByUrl('/home');
  }

}
