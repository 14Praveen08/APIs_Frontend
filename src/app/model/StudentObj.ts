import { organization } from './organization'
import { Department } from './Department'

export class StudentObj{
    id: Number
    org:organization
    redgno: Number
    fname: String
    lname: String
    dob: Date
    email: String
    mobileno: Number
    year: Number
    department: Department
    createdon: any
    modifiedon: any
}