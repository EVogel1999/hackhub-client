import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id: '5f581d4a83a089abe222f685', name: 'Emily Vogel', email: 'evogel4@students.towson.edu', profileURL: 'https://avatars3.githubusercontent.com/u/32078831?s=400&u=97c5771f9758c2704b7c7f840c4df14a05c543ab&v=4'}
  ];

  constructor() { }

  async getUser(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}
