import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  public ans;
  
  public navigation = [
                        {"id":"0","name":"Home",icon:"fa fa-home",
                              sub:[{"id":"0","name":"Dashboard","link":"/home/dashboard"},
                                    {"id":"1","name":"Logout","link":"/home/logout"}
                                  ]
                        },
                        {"id":"1","name":"Exam SetUp",icon:"fa fa-book",
                              sub:[{"id":"0","name":"ExamSetUp","link":"/exam/examSetUp"},
                                    {"id":"1","name":"Section SetUp","link":"/exam/SectionSetUp"},
                                    {"id":"2","name":"examSignIn","link":"/exam/examSignIn"}
                                  ]},
                        {"id":"2","name":"Mail",icon:"fa fa-envelope",
                          sub:[
                                {"id":"0","name":"SMS Student","link":"/mail/smsStudent"},
                                {"id":"1","name":"SMS Staff","link":"/mail/smsStaff"},
                                {"id":"2","name":"Manage Webmail Account","link":"/mail/webmailMaage"},
                                {"id":"3","name":"Webmail SignIn","link":"/mail/webmailSignIn"},
                                {"id":"4","name":"SMS usage Report","link":"/mail/smsReport"}
                              ]},
                        {"id":"3","name":"Student",icon:"fa fa-user", 
                              sub:[{"id":"0", "name":"Student Default", "link":"studentDefault"},
                                    {"id":"1", "name":"New Student","link":"studentNew"},
                                    {"id":"2", "name":"Student List","link":"student/studentList"},
                                    {"id":"3", "name":"Archive List","link":"/student/archiveList"},
                                    {"id":"4", "name":"Alumni List","link":"/student/alumniList"},
                                    {"id":"5", "name":"course List","link":"/student/courseList"}
                                  ]},
                        {"id":"4","name":"Staff Detail",icon:"fa fa-user",
                          sub:[
                                {"id":"0","name":"Staff Default","link":"staffDefault"},
                                {"id":"1", "name":"New Staff","link":"/staff/staffNew"},
                                {"id":"2", "name":"Staff List","link":"/staff/staffList"},
                                {"id":"3", "name":"Archive List","link":"/staff/archiveList"},
                                {"id":"4", "name":"Personal POrtal","link":"/staff/personalPortal"},
                                {"id":"5", "name":"Attend a meeting","link":"/staff/meeting"},
                                {"id":"6", "name":"Call Meeting","link":"/staff/callMeeting"},
                                {"id":"7", "name":"Discss with a colleague","link":"/staff/discuss"},
                                {"id":"8", "name":"Payroll","link":"/staff/payroll"},
                                {"id":"9", "name":"Reminder","link":"/staff/reminder"},
                                {"id":"9", "name":"Logs","link":"/staff/logs"},
                                {"id":"110", "name":"Staff Attendance","link":"/staff/attendance"},
                                {"id":"11", "name":"Course Allocation","link":"/staff/courseAllocation"},
                                // {"id":"12", "name":"Senate Room","link":"/staff/senate"},
                                // {"id":"13", "name":"Security","link":"/staff/security"},
                              ]},
                        {"id":"5",name:"Inventory",icon:"fa fa-briefcase",
                            sub:[
                                    {"id":"0","name":"Inventory Default","link":"/inventory/default"},
                                      {"id":"1","name":"New Inventory Item","link":"/inventory/new"},  
                                      {"id":"2","name":"View & Edit","link":"/inventory/view"},
                                      {"id":"0","name":"Purchase Order","link":"/inventory/order"},
                                      {"id":"0","name":"Recieve Inventory","link":"/inventory/recieve"},
                                    ]},
                        {"id":"6","name":"Suppliers",icon:"fa fa-truck",
                                          sub:[{"id":"0","name":"New Suppliers","link":"/suppliers/new"},
                                            {"id":"0","name":"View & Edit","link":"/suppliers/viewEdit"},   
                                     ]},
                        {"id":"7","name":"Hostels",icon:"fa fa-home", 
                                  sub:[{"id":"0", "name":"Hostel Setup","link":"/hostel/setup"},
                                        {"id":"1","name":"Apartment","link":"/hostel/apartment"},
                                        {"id":"2","name":"Add Hostel","link":"/hostel/add"},
                                      ]
                        },
                        {"id":"8","name":"Report",icon:"fas fa-forward", 
                            sub:[{"id":"0", "name":"General Ledger","link":"/report/generalLedger"},
                                  {"id":"1", "name":"Financial Statement","link":"/report/financialStatement"},
                                  {"id":"2", "name":"Account Recievables","link":"/report/recieveables"},
                                  {"id":"3", "name":"Account Balance","link":"/report/payable"},
                                  {"id":"4", "name":"Payroll","link":"/report/payroll"},
                                  {"id":"11", "name":"Inventory Report","link":"/report/inventory"},
                                  {"id":"12", "name":"Job Report","link":"/report/job"},
                                  {"id":"13", "name":"Account Reconcilation","link":"/report/accountrec"},
                                  {"id":"14",  "name":"Time/Expence Report","link":"/report/time"},
                                  {"id":"15",  "name":"Company Report","link":"/report/company"}
                                ]},
                        {"id":"9","name":"Accounting",icon:"fa fa-btc",
                              sub:[{"id":"0", "name":"Default","link":"/account/default"},
                                    {"id":"1", "name":"Account Chart","link":"/account/chart"},
                                    {"id":"0", "name":"Task","link":"/account/task"},
                                    {"id":"3", "name":"Fee Setup","link":"/account/fee"},
                                    {"id":"4", "name":"Confirm Payment","link":"/account/paymentConfirm"},
                                    {"id":"5", "name":"Add Charges","link":"/account/addCharges"},
                                    {"id":"6", "name":"Program Charges","link":"/account/programCharges"},
                                    {"id":"7", "name":"Debtors","link":"/account/debtors"},
                                  ]
                                },
                        {"id":"11","name":"Timetable",icon:"fa fa-table", 
                              sub:[{"id":"0", "name":"Timetable Setup","link":"/timeTable/setup"},
                                      {"id":"1", "name":"My Timetable","link":"/timeTable/user"},
                                      
                                    ]
                                  },
                        {"id":"11","name":"Edit Pages",icon:"fa fa-edit", 
                                sub:[{"id":"0", "name":"Download","link":"/edit/download"},
                                    {"id":"1", "name":"Upcoming Events","link":"/edit/events"},
                                    {"id":"2", "name":"News Letter","link":"/editPage/newsLetter"},
                                    {"id":"3", "name":"Homepage Images","link":"/editPage/homeImages"}
                                    
                                  ]
                        },
                        {"id":"12","name":"Settings",icon:"fa fa-cog",
                              sub:[{"id":"0", "name":"Global Option","link":"/settings/global"},
                                  {"id":"1", "name":"Custom Option","link":"/sttings/custom"},
                                  {"id":"0", "name":"School SetUp","link":"/settings/schoolSetUp"},
                                  {"id":"1", "name":"Backup School Data","link":"/sttings/backup"},
                                  
                                ]},
                        ];
   public ext      =  [
                        {
                          "name":"Home",
                         "id":"0", sub:[{"id":"0","name":"Dashboard","link":"/home/dashboard"},
                                    {"id":"1","name":"Logout","link":"/home/logout"}]
                        },
                        {
                          "name":"Exam Setup",
                          "id":"1", sub:[{"id":"0","name":"ExamSetUp","link":"/exam/examSetUp"},
                                    {"id":"1","name":"Section SetUp","link":"/exam/SectionSetUp"},
                                    {"id":"2","name":"examSignIn","link":"/exam/examSignIn"}]
                        },
                        {
                          "name":"Mail",
                          "id":"2", sub:[{"id":"0","name":"SMS Student","link":"/mail/smsStudent"},
                                    {"id":"1","name":"SMS Staff","link":"/mail/smsStaff"},
                                    {"id":"2","name":"Manage Webmail Account","link":"/mail/webmailMaage"},
                                    {"id":"3","name":"Webmail SignIn","link":"/mail/webmailSignIn"},
                                    {"id":"4","name":"SMS usage Report","link":"/mail/smsReport"}]
                        },
                        {
                          "name":"Student",
                          "id":"3", sub:[{"id":"0","name":"Student Default","link":"studentDefault"},
                                    {"id":"1", "name":"New Student","link":"studentNew"},
                                    {"id":"2", "name":"Student List","link":"student/studentList"},
                                    {"id":"3", "name":"Archive List","link":"/student/archiveList"},
                                    {"id":"4", "name":"Alumni List","link":"/student/alumniList"},
                                    {"id":"5", "name":"course List","link":"/student/courseList"}]
                        },
                        {
                          "name":"Staff Detail",
                          "id":"4", sub:[{"id":"0","name":"Staff Default","link":"staffDefault"},
                                    {"id":"1", "name":"New Staff","link":"/staff/staffNew"},
                                    {"id":"2", "name":"Staff List","link":"/staff/staffList"},
                                    {"id":"3", "name":"Archive List","link":"/staff/archiveList"},
                                    {"id":"4", "name":"Personal POrtal","link":"/staff/personalPortal"},
                                    {"id":"5", "name":"Attend a meeting","link":"/staff/meeting"},
                                    {"id":"6", "name":"Call Meeting","link":"/staff/callMeeting"},
                                    {"id":"7", "name":"Discss with a colleague","link":"/staff/discuss"},
                                    {"id":"8", "name":"Payroll","link":"/staff/payroll"},
                                    {"id":"9", "name":"Reminder","link":"/staff/reminder"},
                                    {"id":"9", "name":"Logs","link":"/staff/logs"},
                                    {"id":"11", "name":"Staff Attendance","link":"/staff/attendance"},
                                    // {"id":"1""1", "name":"Course Allocation","link":"/staff/courseAllocation"},
                                    // {"id":"12", "name":"Senate Room","link":"/staff/senate"},
                                    // {"id":"13", "name":"Security","link":"/staff/security"},
                                    ]
                        },
                        {
                          "name":"Inventory",
                          "id":"5", sub:[{"id":"0","name":"Inventory Default","link":"/inventory/default"},
                                      {"id":"1","name":"New Inventory Item","link":"/inventory/new"},  
                                      {"id":"2","name":"View & Edit","link":"/inventory/view"},
                                      {"id":"0","name":"Purchase Order","link":"/inventory/order"},
                                      {"id":"0","name":"Recieve Inventory","link":"/inventory/recieve"},
                                    ]
                        },
                        {
                          "name":"Suppliers",
                          "id":"6", sub:[{"id":"0","name":"New Suppliers","link":"/suppliers/new"},
                                      {"id":"0","name":"View & Edit","link":"/suppliers/viewEdit"},   
                                     ]
                        },
                        
                         {
                           "name":"Hostel",
                           "id":"7", sub:[{"id":"0", "name":"Hostel Setup","link":"/hostel/setup"},
                                     {"id":"1","name":"Apartment","link":"/hostel/apartment"},
                                     {"id":"2","name":"Add Hostel","link":"/hostel/add"},
                                    ]
                         },
                         {
                           "name":"Report",
                           "id":"8", sub:[{"id":"0", "name":"General Ledger","link":"/report/generalLedger"},
                                      {"id":"1", "name":"Financial Statement","link":"/report/financialStatement"},
                                      {"id":"2", "name":"Account Recievables","link":"/report/recieveables"},
                                      {"id":"3", "name":"Account Balance","link":"/report/payable"},
                                      {"id":"4", "name":"Payroll","link":"/report/payroll"},
                                      {"id":"11", "name":"Inventory Report","link":"/report/inventory"},
                                      {"id":"12", "name":"Job Report","link":"/report/job"},
                                      {"id":"13", "name":"Account Reconcilation","link":"/report/accountrec"},
                                      {"id":"14",  "name":"Time/Expence Report","link":"/report/time"},
                                      {"id":"15",  "name":"Company Report","link":"/report/company"}
                                    ]
                         },
                         {
                           "name":"Accounting",
                          "id":"9", sub:[{"id":"0", "name":"Default","link":"/account/default"},
                                     {"id":"1", "name":"Account Chart","link":"/account/chart"},
                                     {"id":"0", "name":"Task","link":"/account/task"},
                                     {"id":"3", "name":"Fee Setup","link":"/account/fee"},
                                     {"id":"4", "name":"Confirm Payment","link":"/account/paymentConfirm"},
                                     {"id":"5", "name":"Add Charges","link":"/account/addCharges"},
                                     {"id":"6", "name":"Program Charges","link":"/account/programCharges"},
                                     {"id":"7", "name":"Debtors","link":"/account/debtors"},
                                   ]
                        },
                        {
                          "name":"Timetable",
                          "id":"11", sub:[{"id":"0", "name":"Timetable Setup","link":"/timeTable/setup"},
                                     {"id":"1", "name":"My Timetable","link":"/timeTable/user"},
                                     
                                   ]
                        },
                        {
                          "name":"Edit Pages",
                          "id":"11", sub:[{"id":"0", "name":"Download","link":"/edit/download"},
                                     {"id":"1", "name":"Upcoming Events","link":"/edit/events"},
                                     {"id":"2", "name":"News Letter","link":"/editPage/newsLetter"},
                                     {"id":"3", "name":"Homepage Images","link":"/editPage/homeImages"}
                                     
                                   ]
                        },
                        {
                          "name":"Settings",
                          "id":"12", sub:[{"id":"0", "name":"Global Option","link":"/settings/global"},
                                     {"id":"1", "name":"Custom Option","link":"/sttings/custom"},
                                     {"id":"0", "name":"School SetUp","link":"/settings/schoolSetUp"},
                                     {"id":"1", "name":"Backup School Data","link":"/sttings/backup"},
                                     
                                   ]
                        }
                      ];
  set(x)
  {
    this.ans = (this.ext[x].sub);
  }
}
