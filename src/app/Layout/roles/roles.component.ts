import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/Services/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RoleService]
})
export class RolesComponent implements OnInit {
  role: Roles[];
  flag = false;
  constructor(private roleService: RoleService) { }
  name: String;
  role1: Roles;
  ngOnInit(): void {

    this.load();
  }

  load() {
    this.roleService.getRoles().subscribe((data: any) => { this.role = data, this.role == null ? this.flag = false : this.flag = true });

    console.log();
  }
  addrole = new FormGroup({
    name: new FormControl
  });
  add() {
    this.role1 = this.addrole.value;
    console.log(this.role1);
    this.roleService.addRole(this.role1).subscribe((data: any) => { this.load() });
  }
}
