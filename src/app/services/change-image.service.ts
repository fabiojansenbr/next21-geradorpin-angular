import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeImageService {

  private _imageUrlSource = new Subject<string>();
  imageUrl$ = this._imageUrlSource.asObservable();

  private _nameSource = new Subject<string>();
  name$ = this._nameSource.asObservable();


  constructor() { }

  changeUrl(url: string) {
    this._imageUrlSource.next(url);
  }

  changeName(name: string) {
    this._nameSource.next(name);
  }

}
