import { Component, OnInit } from '@angular/core';
import { StafflistComponent } from '../stafflist/stafflist.component'
import { StaffService } from '../staff.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private data: StaffService) { 
    this.pic="assets/avatar.png";  
  }

    message:string = "Hello World";
    ngOnInit() {
        this.data.currentMessage.subscribe(message=> this.message = message);
    }
    public name;
    public email;
    public gender;
    public mobile;
    public class;
    public ref;
    public status;
    public pic;
    public matric_no;
  setProfile(x)
  {
    alert(x);
      this.name= this.details[x.id].name;
      this.email = this.details[x.id].email;
      this.pic = this.details[x.id].pic;
      this.mobile = this.details[x.id].mobile;
      this.matric_no = this.details[x.id].matric_no;
      this.class = this.details[x.id].class;
      this.status = this.details[x.id].status;
      this.gender=this.details[x.id].gender;
      this.ref = this.details[x.id].ref;
  }
  public details = [
    {
      "id":"0",
      "name":"Bello Samuel",
      "matric_no":"144320",
      "email":"bellosamule64@gmail.com",
      "mobile":"08141158954",
      "pic":"assets/a.JPG",
      "class":"400l",
      "status":"active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"1",
      "name":"sabelo",
      "matric_no":"141320",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/b.jpg",
      "class":"400l",
      "status":"Not active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"2",
      "name":"Bello Oladele",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/c.jpg",
      "class":"200l",
      "status":"Not active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"3",
      "name":"TFK",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/d.jpg",
      "class":"300l",
      "status":"Active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"4",
      "name":"Sawzeeyy",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/e.jpg",
      "class":"100l",
      "status":"Not active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"5",
      "name":"Tezee Amali",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/f.jpg",
      "class":"100l",
      "status":"active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"6",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/a.JPG",
      "class":"400l",
      "status":"active",
      "gender":"Male",
      "ref":"0902930920"
    },
    {
      "id":"7",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/b.jpg",
      "class":"200l",
      "status":"Not active",
      "gender":"Male",
      "ref":"0902224920"
    },
    {
      "id":"8",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/e.jpg",
      "class":"400l",
      "status":"active",
      "gender":"Male",
      "ref":"38480380843"
    },
    {
      "id":"9",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/d.jpg",
      "class":"100l",
      "status":"active",
      "gender":"Male",
      "ref":"38480380843"
    },
    {
      "id":"10",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/a.JPG",
      "class":"200l",
      "status":"Not active",
      "gender":"Male",
      "ref":"38480380843"
    },
    {
      "id":"11",
      "name":"Adedapo Adetola",
      "matric_no":"143049",
      "email":"bellopeter23@gmail.com",
      "mobile":"081411238",
      "pic":"assets/b.jpg",
      "class":"300l",
      "status":"active",
      "gender":"Male",
      "ref":"38480380843"
    }

]

}
