import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() affectations: any[];
  @Output() affectationsUpdated = new EventEmitter<any[]>();

  localAffectations: any[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes['affectations'] ", changes['affectations']);
    if (changes['affectations']) {
      console.log('MODIF ENFANT');
    }
  }

  ngOnInit() {
    this.localAffectations = [...this.affectations]; // copie locale de la liste d'affectations
  }

  updateAffectations() {
    // Modifier la copie locale de la liste d'affectations
    this.localAffectations.push({ id: 3, name: 'Affectations 3' });

    // Renvoyer la liste modifiée au parent via l'événement @Output
    this.affectationsUpdated.emit(this.localAffectations);
  }
}
