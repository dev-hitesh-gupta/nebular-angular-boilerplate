import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

const time = 1000;

@Component({
  selector: 'spl-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: [],
})
export class TextSearchComponent implements OnInit {
  constructor() {}

  txtQueryChanged: Subject<string> = new Subject<string>();

  @Input('searchPlaceholder')
  placeholder: string;

  @Output('onTextChange')
  textChanged: EventEmitter<string> = new EventEmitter();

  model: string;

  onFieldChange(query: string) {
    this.txtQueryChanged.next(query);
  }

  ngOnInit() {
    this.txtQueryChanged
      .pipe(debounceTime(time)) // wait 1 sec after the last event before emitting last event
      .pipe(distinctUntilChanged()) // only emit if value is different from previous value
      .subscribe(model => {
        this.model = model;

        this.textChanged.emit(this.model);
      });
  }
}
