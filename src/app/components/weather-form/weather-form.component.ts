import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss'],
})
export class WeatherFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  valueChangesSubscription!: Subscription;

  @Output() onChange = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city: this.formBuilder.control(''),
    });

    this.valueChangesSubscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((nextValues) => {
        this.onChange.emit(nextValues.city);
      });
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }
}
