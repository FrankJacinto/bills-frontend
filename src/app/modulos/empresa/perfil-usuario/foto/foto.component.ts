import { AuthService } from './../../../../servicioscomunes/auth.service';
import { UploadService } from './../../../../servicioscomunes/upload.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  
  @Input() idtipoexpediente;
  @Input() userid;
  @Input() titulo;
  uploadedFiles: any[] = [];
  public cargando:boolean =false;
  public foto:File;

  constructor(
    public toastr:ToastrService,
    public apiReport:UploadService,
    public auth: AuthService

  ) { }

  ngOnInit() {
  }


  myUploader(){
    this.cargando = true;
    let formData= new FormData();
    formData.append('files',this.foto);
    formData.append('userid',this.auth.getUserName());
    this.apiReport.post("perfil/subir",formData)
      .then(data=>{
       if(data && data.extraInfo){
          this.toastr.success(data.operacionMensaje, 'Exito');
        } else{
          this.toastr.success(data.operacionMensaje, 'Erro al subir imagen-Vuelve al codigo');
        }
        this.cargando = false;
      })
      .catch(err => this.handleError(err));
  }

  handleError(error: any): void {
    this.toastr.error("Error Interno", 'Error');
    this.cargando =false;
  }
};
