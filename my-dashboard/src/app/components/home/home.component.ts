import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  title = 'Applications';
  username = 'Charlie';
  showConfig: boolean // = true
  showDecipher: boolean //= true
  showClaimEntry: boolean //= true

  ngOnInit() {
    this.showConfig = false;
    this.showDecipher = true;
    this.showClaimEntry = true;
  }

  goToast(){
    this.router.navigateByUrl('/toast');
  }
}
