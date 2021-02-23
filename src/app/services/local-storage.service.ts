import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string) {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key))
    }
    return null
  }

  remove(key: string) {
    if (this.storage) {
      this.storage.removeItem(key);
      return true
    }
    return false
  }
  
}
