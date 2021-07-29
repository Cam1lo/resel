import { Injectable }     from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                         from '@angular/router';
import { Observable, of } from 'rxjs';
import { TableService }   from '../api/table.service';

@Injectable()
export class AllTablesResolver implements Resolve<boolean> {
  constructor(private tableService: TableService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.tableService.getAllTables();
  }
}
