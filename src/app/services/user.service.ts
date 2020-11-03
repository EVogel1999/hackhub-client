import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { User } from '../types/user';

export const COOKIE = 'hackhub';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: { id: string, name: string, email: string, profileURL: string } = null;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  async getUser(id: string): Promise<User> {
    return await this.http.get<User>(`${environment.BASE_API_URL}/users/${id}`).toPromise();
  }

  async getUsers(): Promise<User[]> {
    return await this.http.get<User[]>(`${environment.BASE_API_URL}/users`).toPromise();
  }

  async updateUser(id: string, updates: Partial<User>) {
    await this.http.patch(`${environment.BASE_API_URL}/users/${id}`, updates).toPromise()
  }

  async deleteUser(id: string) {
    await this.http.delete(`${environment.BASE_API_URL}/users/${id}`).toPromise();
  }

  async user() {
    if (!this._user) {
      this._user = await this.http.get<any>(`${environment.BASE_API_URL}/users/token`, { withCredentials: true }).toPromise();
    }
    return this._user;
  }

  getCookie() {
    if (this.cookieService.check(COOKIE)) {
      return this.cookieService.get(COOKIE);
    } else {
      throw new Error('User is not logged in!');
    }
  }
}
