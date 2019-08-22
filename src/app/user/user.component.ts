import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getUserInfo();
  }

  onSubmit(form: NgForm) {
      this.updateRecord(form)
  }

  updateRecord(form: NgForm) {
    this.service.putUser().subscribe(
      res => {
        this.showNotification('top', 'right', 'Dane zaktualizowane pomyślnie');
      },
      err => {
        console.log(err);
      }
    )
  }

  /*updateForm(form?: NgForm){
    if (form != null) {
      form.form.reset();
      }
      this.service.formUserData = {
          id: 0,
      }
  }*/

  showNotification(from, align, message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 2;
    $.notify({
        icon: 'pe-7s-gift',
        message: message
      }, {
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
      });
  }

}
