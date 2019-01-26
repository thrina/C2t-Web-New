import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { animate, style, AUTO_STYLE, state, transition, trigger } from '@angular/animations';
import '../../../../assets/charts/echart/echarts-all.js';
import { FileUploader } from 'ng2-file-upload';
import { ProfileService } from './profile.service';
import { CustomNotifyService } from '../../../components/shared/custom-notify.service';
import { UrlHandlingStrategy } from '@angular/router';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ]),
  ]
})
export class ProfileComponent implements OnInit {
  portifolioTitle :any;
  selectedFiles: FileList;
  selectedTeamImg: FileList;
  selectedbuzManazFiles: FileList;
  businessImg: FileList;
  userImg: FileList;
  profileImg: any;
  profileImgUrl: string;
  hasBaseDropZoneOver = FileList;
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  isBussinessActive: boolean = true;
  selectedBussiness: any = {};
  isTeamActive = false;
  isPortfolioActive = false;
  selectedTeam: any = {};
  portfolioList: any = [];
  teamList: any = [];
  bussinessProfiles: any = [];
  keyword: string;
  keywordGroup: any;
  portfolio: any = {};
  editProfile = true;
  editManager = true;
  editBussinessManager = true;
  editProfileIcon = 'icofont-edit';
  editMngrProfileIcon = 'icofont-edit';
  editAbout = true;
  editAboutIcon = 'icofont-edit';
  currentUser: any = {};
  firstName: string;
  pnotify: any;
  id:any;
  public editor;
  public editorContent = '';
  public editorConfig = {
    placeholder: 'About Your Bussiness'
  };
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  managerUser: any = {};
  bussinessProfile: any = {};
  constructor(public http: Http, private profileService: ProfileService, private notify: CustomNotifyService) {
  let currtUser = JSON.parse(localStorage.getItem('currentUser'));
  this.currentUser = currtUser;
  }

  ngOnInit() {
    if (this.currentUser['role'] == 'MANAGER') {
      this.getTeamUsers();
      this.isTeamActive = true;
    }
    if (this.currentUser['role'] == 'BUSSINESS MANAGER') {
      this.getBussinessProfiles();
    }
    this.pnotify = this.notify.getPNotify();
    if (this.currentUser['role'] == "ARTIST") {
      this.getPortfolios();
    }
    this.profileImg=this.currentUser['imgUrl'];
    this.profileImgUrl="http://localhost:3000/"+this.profileImg.replace('public','');
    console.log("ererererererererererererererererererrere",this.editBussinessManager);
    
  }

  getPortfolios() {
    let query = {};
    if (this.currentUser['role'] == 'ARTIST') {
      query['userID'] = this.currentUser['_id'];
    }
    if (this.currentUser['role'] == 'MANAGER') {
      query['userID'] = this.selectedTeam['_id'];
    }
    if (this.currentUser['role'] == 'BUSSINESS MANAGER') {
      query['userID'] = this.selectedTeam['_id'];
    }
    this.profileService.getPortfolios(query).subscribe(data => {
      if (data.status == "success") {
        this.portfolioList = data.rows;
      }
    })
  }

  getTeamUsers() {
    let query = {};
    if (this.currentUser['role'] != 'BUSSINESS MANAGER') {
      query['userID'] = this.currentUser['_id'];

    }
    if (this.currentUser['role'] == 'BUSSINESS MANAGER') {
      query['userID'] = this.currentUser['_id'];
      query['bussinessID'] = this.currentUser['bussinessID'];

    }

    this.profileService.getTeamList(query).subscribe(data => {
      if (data.status == "success") {
        this.teamList = data.rows;
      }

    })
  }

  getBussinessProfiles() {
    let query = {};
    query['userID'] = this.currentUser['_id'];
    this.profileService.getBussiness(query).subscribe(data => {
      if (data.status == "success") {
        this.bussinessProfiles = data.rows;
      }
    })
  }


  fileOverBase(event: any): void {
    this.hasBaseDropZoneOver = event.target.files;
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
    
  }

  toggleManagerProfile() {
    this.editMngrProfileIcon = (this.editMngrProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editManager = !this.editManager;
  }

  toggleBussinessManagerProfile() {
    // this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editBussinessManager = !this.editBussinessManager;
    console.log("fyfyfyfyfyfyfyfyfyfyfyfyfyfyfyfyfyfyfy",this.editBussinessManager);
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

  onEditorBlured(quill) {
  }

  onEditorFocused(quill) {
  }

  onEditorCreated(quill) {
    this.editor = quill;
  }

  onContentChanged({ quill, html, text }) {
  }

  updateUserForm() {
    this.profileService.updateUser(this.currentUser).subscribe(data => {
      if (data.status == "success") {
        this.currentUser = { ...this.currentUser };
        this.getLatestInfo();
        if (!this.editProfile) {
          this.pnotify.success({ title: "Profile updated successfully", delay: 2000 });
          this.toggleEditProfile();
        }
        if (!this.editAbout)
          this.toggleEditAbout();
        if (!this.editBussinessManager)
          this.toggleBussinessManagerProfile();
        if (!this.editManager)
          this.toggleManagerProfile()
      }
    })
  }

  getLatestInfo() {
    this.profileService.getUpdatedInfo(this.currentUser).subscribe(data => {
    })
  }
  createManagerTeam() {
    if (this.currentUser && this.currentUser['teamMenbers']) {
      this.currentUser['teamMenbers'].push(this.managerUser);
    } else {
      this.currentUser['teamMenbers'] = [];
      this.currentUser['teamMenbers'].push(this.managerUser);
    }
    this.updateUserForm();

  }

  createTeam() {
    let test = this.managerUser;    
    let formData: FormData = new FormData();
    if (this.currentUser['role'] == "MANAGER")
      this.managerUser['userID'] = this.currentUser['_id'];
    if (this.currentUser['role'] == "BUSSINESS MANAGER")
      this.managerUser['userID'] = this.selectedBussiness['_id'];
    if (this.selectedbuzManazFiles !== null) {
      Object.keys(test).forEach(function (key) {
        formData.append(key, test[key]);
      });
      formData.append("photo", this.selectedbuzManazFiles.item(0));
    }
    if (formData != null) {
      this.profileService.createTeamMember(formData).subscribe(data => {
        console.log("createTeamMember");
        if (data.status == 'success') {
          this.pnotify.success({ title: "Team member added successfully", delay: 1000 });
          if (!this.editProfile) {
            this.toggleEditProfile();
          }
          if (!this.editAbout)
            this.toggleEditAbout();
          if (!this.editBussinessManager)
            this.toggleBussinessManagerProfile();
          if (!this.editManager)
            this.toggleManagerProfile()
          let query = {}
          if (this.currentUser['role'] == "MANAGER") {
            query = { "userID": this.currentUser['_id'] };
          }
          if (this.currentUser['role'] == "BUSSINESS MANAGER") {
            query = { "userID": this.selectedBussiness['_id'] };
          }
          this.getTeams(query);
        } else {
          this.pnotify.error({ title: data.status, delay: 1000 });
        }
      })
    }
    else{
      this.profileService.createTeamMember(this.managerUser).subscribe(data => {
        if (data.status == "success") {
          if (!this.editProfile) {
            this.toggleEditProfile();
          }
          if (!this.editAbout)
            this.toggleEditAbout();
          if (!this.editBussinessManager)
            this.toggleBussinessManagerProfile();
          if (!this.editManager)
            this.toggleManagerProfile()
          let query = {}
          if (this.currentUser['role'] == "MANAGER") {
            query = { "userID": this.currentUser['_id'] };
          }
          if (this.currentUser['role'] == "BUSSINESS MANAGER") {
            query = { "userID": this.selectedBussiness['_id'] };
          }
          this.getTeams(query);
          this.pnotify.success({ title: "Team member added successfully", delay: 1000 });
        } else {
          this.pnotify.console.error({ title: data.status, delay: 1000 });
        }
      })
    }
  }
  // createTeam() {
  //   if (this.currentUser['role'] == "MANAGER")
  //     this.managerUser['userID'] = this.currentUser['_id'];
  //   if (this.currentUser['role'] == "BUSSINESS MANAGER")
  //     this.managerUser['userID'] = this.selectedBussiness['_id'];

  //   this.profileService.createTeamMember(this.managerUser).subscribe(data => {
  //     if (data.status == "success") {
  //       if (!this.editProfile) {
  //         this.toggleEditProfile();
  //       }
  //       if (!this.editAbout)
  //         this.toggleEditAbout();
  //       if (!this.editBussinessManager)
  //         this.toggleBussinessManagerProfile();
  //       if (!this.editManager)
  //         this.toggleManagerProfile()
  //       let query = {}
  //       if (this.currentUser['role'] == "MANAGER") {
  //         query = { "userID": this.currentUser['_id'] };
  //       }
  //       if (this.currentUser['role'] == "BUSSINESS MANAGER") {
  //         query = { "userID": this.selectedBussiness['_id'] };
  //       }
  //       this.getTeams(query);
  //       this.pnotify.success({ title: "Team member added successfully", delay: 1000 });
  //     } else {
  //       this.pnotify.console.error({ title: data.status, delay: 1000 });
  //     }
  //   })

  // }
  addBussinessProfile() {
    let test = this.bussinessProfile;
    let formData: FormData = new FormData();

    this.bussinessProfile['userID'] = this.currentUser['_id'];

    if (this.businessImg !== null) {
      Object.keys(test).forEach(function (key) {
        formData.append(key, test[key]);
      });
      formData.append("bussImage", this.businessImg.item(0));
    }
    console.log("businessData",formData);
    
    if (formData != null) {
      this.profileService.createBussiness(formData).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Bisinesss added successfully", delay: 1000 });
          this.getBussinessProfiles();
          if (!this.editAbout)
            this.toggleEditAbout();
          if (!this.editBussinessManager)
            this.toggleBussinessManagerProfile();
          if (!this.editManager)
            this.toggleManagerProfile()
          } else {
            this.pnotify.console.error({ title: data.status, delay: 1000 });
          }
      })
    }else
    {
       this.profileService.createBussiness(this.bussinessProfile).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Bisinesss added successfully", delay: 1000 });
          this.getBussinessProfiles();
          if (!this.editAbout)
            this.toggleEditAbout();
          if (!this.editBussinessManager)
            this.toggleBussinessManagerProfile();
          if (!this.editManager)
            this.toggleManagerProfile()
          } else {
            this.pnotify.console.error({ title: data.status, delay: 1000 });
          }
      })
    }
  }

  changeProfileImg() {
    var fileupload = document.getElementById("imgFileUpload");
    fileupload.click();
  }

  changeImg(event) {
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append("myImg", file, file.name);
  }

  changeUserImg(event) {
    this.userImg = event.target.files;
    let latestImg: string;
    let test = this.currentUser;
    let formData: FormData = new FormData();
    if (this.userImg !== null) {
      Object.keys(test).forEach(function (key) {
        formData.append(key, test[key]);
      });
      formData.append("userImage", this.userImg.item(0));
    }
    if (formData != null) {
      this.profileService.updateUser(formData).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Profile Image updated successfully", delay: 1000 });
          latestImg=this.userImg.item(0).name;
          this.profileImgUrl="http://localhost:3000/assets/"+latestImg;
        } else {
          this.pnotify.error({ title: data.status, delay: 1000 });
        }
      })
    } else {
      this.profileService.updateUser(this.currentUser).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Profile Image updated successfully", delay: 1000 });
        } else {
          this.pnotify.error({ title: data.status, delay: 1000 });
        }
      })
    }
  }
  onTabChange(event) {
    this.editProfile = true;
    this.editManager = true;
    this.editBussinessManager = true;
    this.editProfileIcon = "icofont-edit";
    this.editMngrProfileIcon = 'icofont-edit';
    this.editAbout = true;
    this.editAboutIcon = 'icofont-edit';
  }

  addKeyWord() {
    if (this.portfolio.keywordGroup == undefined) {
      this.portfolio.keywordGroup = this.portfolio.talent;
    }
    this.portfolio.keywordGroup = this.portfolio.keywordGroup + ", " + this.keyword;
    this.keyword = '';
  }

  addPortfolio() {
    let test = this.portfolio;
    let formData: FormData = new FormData();
    if (this.currentUser['role'] == "ARTIST") {
      this.portfolio['userID'] = this.currentUser['_id'];
    }
    if (this.currentUser['role'] == "MANAGER") {
      this.portfolio['userID'] = this.selectedTeam['_id'];
    }
    if (this.currentUser['role'] == "BUSSINESS MANAGER") {
      this.portfolio['userID'] = this.selectedTeam['_id'];
    }
    if (this.selectedFiles !== null) {
      Object.keys(test).forEach(function (key) {
        formData.append(key, test[key]);
      });
      formData.append("portfolioImage", this.selectedFiles.item(0));
    }
    if (formData != null) {
      this.profileService.createPortfolio(formData).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Portfolio added successfully", delay: 1000 });
          this.togglePortfolio();
          this.getPortfolios();
        } else {
          this.pnotify.error({ title: data.status, delay: 1000 });
        }
      })
    } else {
      this.profileService.createPortfolio(this.portfolio).subscribe(data => {
        if (data.status == 'success') {
          this.pnotify.success({ title: "Portfolio added successfully", delay: 1000 });
          this.togglePortfolio();
          this.getPortfolios();
        } else {
          this.pnotify.error({ title: data.status, delay: 1000 });
        }
      })
    }
  }

  togglePortfolio() {
    this.editProfile = true;
  }

  onBussinessSelect(selectedBussiness) {
    console.log("selectedBusiness",selectedBussiness);
    
    this.isBussinessActive = false;
    this.isTeamActive = true;
    this.isPortfolioActive = false;
    this.selectedBussiness = { ...selectedBussiness };
    this.getBussinessTeamMember();
  }

  backToBusiness() {
    this.isBussinessActive = true;
    this.isTeamActive = false;
    this.isPortfolioActive = false;
    this.selectedBussiness = {};
    this.selectedTeam = {};
  }

  onSelectedTeam(selectedTeam) {
    this.isTeamActive = false;
    this.isBussinessActive = false;
    this.isPortfolioActive = true;
    this.selectedTeam = { ...selectedTeam };
    this.getTeamUserPortfolio();
  }

  backToTeams() {
    this.isBussinessActive = false;
    this.isTeamActive = true;
    this.isPortfolioActive = false;
    this.selectedTeam = {};
  }

  getTeamUserPortfolio() {
    let query = { "userID": this.selectedTeam['_id'] };
    this.profileService.getPortfolios(query).subscribe(data => {
      if (data.status == "success") {
        this.portfolioList = data.rows;
      }
    })
  }

  getTeams(query) {
    // let query = { "userID": this.currentUser['_id'] };
    this.profileService.getTeamList(query).subscribe(data => {
      if (data.status == "success") {
        this.teamList = data.rows;
      }
    })
  }

  getBussinessTeamMember() {
    let query = { "userID": this.selectedBussiness['_id'] };
    this.getTeams(query);
    // this.profileService.getTeamList(query).subscribe(data => {
    //   if (data.status == "success") {
    //     this.teamList = data.rows;
    //   }
    // })
  }

  uploadFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  buzManazFile(event: any) {
    this.selectedbuzManazFiles = event.target.files;
  }
  teamImgUpload(event: any){
    this.selectedTeamImg = event.target.files;
  }
  uploadbussImage(event:any){
    this.businessImg = event.target.files;
  }
  
  deletePortfilo(query: any){ 
    this.profileService.deletePortfolio(query).subscribe(data => {
    if (data.status == "success") {
      console.log("deleted");
      this.portifolioTitle=JSON.parse(JSON.stringify(query));
      if (this.currentUser['role'] == "ARTIST"){
        this.getPortfolios();          
      }
      this.pnotify.success({ title:query.title+ ": delete successfully", delay: 2000 });
    }
    })
  } 

  deleteBuss(query: any){ 
    this.profileService.deleteBuss(query).subscribe(data => {
    if (data.status == "success") {
      this.portifolioTitle=JSON.parse(JSON.stringify(query));
      if (this.currentUser['role'] == "BUSSINESS MANAGER"){
        console.log("deleted in deleteBusiness");
        this.backToBusiness();
        // this.getBussinessProfiles();        
      }
      this.pnotify.success({ title:query.name + ": Business delete successfully", delay: 2000 });
     }
    })
  }
  deleteBussteam(query: any){ 
    this.profileService.deleteBussteam(query).subscribe(data => {
    if (data.status == "success") {
      this.portifolioTitle=JSON.parse(JSON.stringify(query));
      if (this.currentUser['role'] == "BUSSINESS MANAGER"){
        console.log("deleted in team");
        this.onBussinessSelect(this.selectedBussiness);
      }
      this.pnotify.success({ title:query.name + ": Teammember delete successfully", delay: 2000 });
     }
    })
  }
  deleteBussPort(query: any){ 
    this.profileService.deleteBusPort(query).subscribe(data => {
    if (data.status == "success") {
      this.portifolioTitle=JSON.parse(JSON.stringify(query));
      if (this.currentUser['role'] == "BUSSINESS MANAGER"){
        console.log("deleted in portfolio");
        this.onSelectedTeam(this.selectedTeam);
      }
      this.pnotify.success({ title:query.name + ": portfolio delete successfully", delay: 2000 });
     }
    })
  }
} 
