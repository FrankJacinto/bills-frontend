import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './../../../componentescomunes/login/login.component';

@Component({
  selector: 'app-welcome-componente',
  templateUrl: './welcome-componente.component.html',
  styleUrls: ['./welcome-componente.component.css']
})
export class WelcomeComponenteComponent implements OnInit {

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  abrirLogin():void{
    const modalRef = this.modalService.open(LoginComponent, {size: 'sm', keyboard: false});
    modalRef.result.then((result) => {
    }, (reason) => {
    });
  }

}
