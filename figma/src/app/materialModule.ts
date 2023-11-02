import{NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    exports:[
        MatInputModule,
        MatCardModule,
        MatButtonModule,
    ]

})
export class MaterialModule{

}