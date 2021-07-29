import { Injectable }     from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                         from '@angular/router';
import { Observable, of } from 'rxjs';
import { TableService }   from '../api/table.service';

@Injectable()
export class TableResolver implements Resolve<boolean> {
  constructor(private tableService: TableService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const tableId: string | null = route.paramMap.get('tableId');

    if (tableId !== null) {
      return this.tableService.getTableById(tableId);
    }

    return of();
  }
}
