import { Component } from '@angular/core';
import { LetterComponent } from '../../Components/letter/letter.component';

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss',
    imports: [LetterComponent]
})
export class PrincipalComponent {

}
