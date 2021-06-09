import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeImageService {

  private _imageUrlSource = new Subject<string>();
  imageUrl$ = this._imageUrlSource.asObservable();

  private _avatarUrlsource = new Subject<string>();
  avatarUrl$ = this._avatarUrlsource.asObservable();

  private _nameSource = new Subject<string>();
  name$ = this._nameSource.asObservable();

  private _vPositionSource = new Subject<any>();
  vPosition$ = this._vPositionSource.asObservable();

  private _hPositionSource = new Subject<any>();
  hPosition$ = this._hPositionSource.asObservable();


  constructor() { }

  changeUrl(url: string) {
    this._imageUrlSource.next(url);
  }

  changeAvatarUrl(avatar: any) {
    this._avatarUrlsource.next(avatar);
  }

  changeName(name: string) {
    this._nameSource.next(name);
  }

  changeVPosition(value: any) {
    this._vPositionSource.next(value);
    console.log('andou', value)
  }

  changeHPosition(value: any) {
    this._hPositionSource.next(value);
    console.log('andou', value)
  }

}
