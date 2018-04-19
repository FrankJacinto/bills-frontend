import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './../../../componentescomunes/login/login.component';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-welcome-componente',
  templateUrl: './welcome-componente.component.html',
  styleUrls: ['./welcome-componente.component.css']
})
export class WelcomeComponenteComponent implements OnInit {
  images: Array<string> = new Array(3);
  constructor(
    public modalService: NgbModal
  ) {
    this.images[0] = '../../../../assets/img/template-homepage.png';
    this.images[1] = '../../../../assets/img/template-mac.png';
    this.images[2] = '../../../../assets/img/template-easy-customize.png';
  }

  ngOnInit() {

  }

  abrirLogin(): void {
    const modalRef = this.modalService.open(LoginComponent, {size: 'sm', keyboard: false});
    modalRef.result.then((result) => {
    }, (reason) => {
    });
  }

}
