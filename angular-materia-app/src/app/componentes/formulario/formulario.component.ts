import { Component, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Estado } from 'src/app/modelo/estado';
import { FormularioService } from 'src/app/services/formulario.service';
import { Municipio } from '../../modelo/municipio';
import Swal from 'sweetalert2'
import { Usuario } from 'src/app/modelo/usuario';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false })
  customLoadingTemplate!: TemplateRef<any>;
  @ViewChild('emptyLoadingTemplate', { static: false })
  emptyLoadingTemplate!: TemplateRef<any>;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: '3px',
  };




  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  banderaValidacion = false;
  public loading = false;
  listaEstado: Estado[] = [];
  listaMunicipioOriginal: Municipio[] = [];
  listaMunicipio: Municipio[] = [];

  constructor(public service: FormularioService) { }

  ngOnInit() {
    this.cargaCombos();
  }

  cargaCombos() {

    this.service.cargaEstado().subscribe(respuesta => {
      this.listaEstado = respuesta;
    });

    this.service.cargaMunicipio().subscribe(respuesta => {
      this.listaMunicipioOriginal = respuesta;
    });
  }


  onchangeEstado(changes: number) {
    const cveEnt = changes;
    this.listaMunicipio = this.listaMunicipioOriginal.filter(c => c.clave_ent == cveEnt);
  }


  guardar() {
    this.loading = true;
    this.banderaValidacion = false;
    this.validacionesFormulario();

    if (this.banderaValidacion == false) {
      localStorage.setItem(this.service.usuarioService.usuario, JSON.stringify(this.service.usuarioService));
      this.service.usuarioService = new Usuario();
     
      Swal.fire('Registro Guardado')
      this.loading = false;
    }else{
      this.loading = false;
    }

  }

  cancelar() {

  }


  validacionesFormulario() {
    if (this.service.usuarioService.usuario == "") {
      Swal.fire('Usuario requerido')
      this.banderaValidacion = true;
    }
  }


}
