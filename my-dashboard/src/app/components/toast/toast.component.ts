import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

import { Router } from '@angular/router';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {

  title = 'Toast Page';

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
  }

  showSuccess() {
    //this.showDecipher = !this.showDecipher;
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
