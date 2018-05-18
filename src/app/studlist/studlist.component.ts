import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {
  public student;
  constructor(private data:StudentService, private router:Router) { }
  message;

  ngOnInit() {
      this.data.currentMessage.subscribe(message =>this.message = message);
  }
  setProfile(x)
  {
    this.data.changeMessage([{name:x.name,email:x.email,matric_no:x.matric_no,gender:x.gender,status:x.status,pic:x.pic,mobile:x.mobile}])
  }
  studrec(x)
  {
    this.router.navigate(['/student',x.id]);
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
