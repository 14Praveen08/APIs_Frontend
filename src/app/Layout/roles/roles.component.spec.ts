import { RolesComponent } from './roles.component';
import { Roles } from 'src/app/model/Roles';
import {from } from 'rxjs';
import { RoleService } from 'src/app/Services/role.service';

describe('RolesComponent', () => {
  let component: RolesComponent;
  let service: RoleService;

  beforeEach(()=>{
    service = new RoleService(null);
    component = new RolesComponent(service);
  })

  it('Display List of Roles', ()=>{
    const roles: Roles[] = [
      {
        id:1,
        name:"HOD"
      }
    ];

    spyOn(service, 'getRoles').and.callFake(()=>{
      return from([roles] )
    });

    component.ngOnInit();
    
    expect(component.role).toEqual(roles); 
  });

  it('Insert Roles', () => {
    
  })
});
