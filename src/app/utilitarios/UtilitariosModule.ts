import { NgModule } from "@angular/core";
import { PruebaPipePipe } from "./componentes/pipes/pruebaPipe.pipe";
import { CalificacionComponent } from './componentes/calificacion/CalificacionComponent';
import { CommonModule } from "@angular/common";

@NgModule ({

    declarations: [PruebaPipePipe, CalificacionComponent],
    imports: [CommonModule],
    exports: [PruebaPipePipe, CalificacionComponent],

})

export class UtilitariosModule{

}