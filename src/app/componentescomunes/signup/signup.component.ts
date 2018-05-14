import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { Empresa } from '../../entidades/entidad.empresa';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiRequestService } from '../../servicioscomunes/api-request.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../servicioscomunes/auth.service';
import { Persona } from '../../entidades/entidad.persona';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //variables steps
  items: MenuItem[];
  activeIndex: number = 0;
  //variables de registro de empresa
  public cargando: boolean = false;
  public listado: boolean = false;
  public empresa: Empresa;
  //variabales para guardar datos personales
  public persona:Persona;
  //variables api sunat
  public mostrarCampos=false; //mostrar campos de formulario empresa
  public Ruc:String;
  public RazonSocial: String;
  public Direccion: String;
  public Ubigeo: String;
  public Result:boolean=false;
 
  constructor(private activeModal: NgbActiveModal,
    private modal: NgbModal,
    public api: ApiRequestService,
    public apiRequest: ApiRequestService,
    public toastr: ToastrService,
    public auth: AuthService) {
    this.empresa = new Empresa();
    this.persona=new Persona();
  }
  ngOnInit() {

    this.items = [{
      label: 'Datos Empresa',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Datos Personales',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Datos de Usuario',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Confirmation',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    }
    ];
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
  }

  //guardar datos emmpresa
  guardarDatosEmpresa() {
    this.cargando = true;
    this.api.post("empresa/crear", this.empresa).then(respuesta => {
      if (respuesta && respuesta.extraInfo) {
        this.empresa = respuesta.extraInfo;
        this.toastr.success("Registro guardado exitosamente", 'Exito');
        this.cargando = false;
      } else {
        this.cargando = false;
        this.toastr.error(respuesta.operacionMensaje, 'Errror');
      }
    })
      .catch(err => this.handleError(err));
  };
  //metodo registrar datos persona
  guardarDatosPersona(){
    this.cargando=true;
    this.api.post("persona/crear", this.persona).then(respuesta => {
      if (respuesta && respuesta.extraInfo) {
        this.persona = respuesta.extraInfo;
        this.toastr.success("Registro guardado exitosamente", 'Exito');
        this.cargando = false;
      } else {
        this.cargando = false;
        this.toastr.error(respuesta.operacionMensaje, 'Error');
      }
    })
      .catch(err => this.handleError(err));
  };
  //traer datos API sunat, razon social, direccion, ubigeo
  traerDatosSunat(){
    this.mostrarCampos=true;
  }

  //metoddo private handle error
  private handleError(error: any): void {
    this.toastr.error("Error Interno", 'Error');
    this.cargando = false;
  };

}
