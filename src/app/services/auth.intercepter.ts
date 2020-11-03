import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                'Authorization': `Bearer ${this.userService.getCookie()}`,
            },
        });

        return next.handle(req);
    }
}