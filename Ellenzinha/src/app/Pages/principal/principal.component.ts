import { Component, inject } from '@angular/core';
import { LetterComponent } from '../../Components/letter/letter.component';
import { AskComponent } from '../../Components/ask/ask.component';
import { MaterialComponent } from '../../Components/material/material.component';
import { MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss',
    imports: [LetterComponent, AskComponent, MatDialogModule]
})
export class PrincipalComponent {

}
