import { organization } from './organization';
import { Roles } from './Roles';

export class FacultyObj {
	id: Number;

	employee_id: Number;

	org: organization;

	first_name: String;

	last_name: String;

	dob: Date;

	email: String;

	mobile_no: Number;

	roles: Roles;

	createdon:any;

	modifiedon:any;
}