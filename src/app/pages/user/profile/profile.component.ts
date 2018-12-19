import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { animate, style, AUTO_STYLE, state, transition, trigger } from '@angular/animations';
import '../../../../assets/charts/echart/echarts-all.js';
import { FileUploader } from 'ng2-file-upload';
import { ProfileService } from './profile.service';
import { CustomNotifyService } from '../../../components/shared/custom-notify.service';

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

  hasBaseDropZoneOver = false;
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
  currentUser: Object = {};
  firstName: string;
  pnotify: any;

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
    let currtUser = JSON.parse(JSON.stringify(localStorage.getItem('currentUser')));
    this.currentUser = JSON.parse(currtUser);
  }

  ngOnInit() {
    if (this.currentUser['role'] == 'Manager') {
      this.getTeamUsers()
      this.isTeamActive = true;
    }
    if (this.currentUser['role'] == 'Bussiness Manager') {
      this.getBussinessProfiles();
    }
    this.pnotify = this.notify.getPNotify();
    if (this.currentUser['role'] == "Artist") {
      this.getPortfolios();
    }
    this.http.get(`assets/data/data.json`)
      .subscribe((data) => {
        this.data = data.json();
      });
    setTimeout(() => {
      this.profitChartOption = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const date = new Date(params.value[0]);
            let data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ';
            data += date.getHours() + ':' + date.getMinutes();
            return data + '<br/>' + params.value[1] + ', ' + params.value[2];
          },
          responsive: true
        },
        dataZoom: {
          show: true,
          start: 70
        },
        legend: {
          data: ['Profit']
        },
        grid: {
          y2: 80
        },
        xAxis: [{
          type: 'time',
          splitNumber: 10
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Profit',
          type: 'line',
          showAllSymbol: true,
          symbolSize: function (value) {
            return Math.round(value[2] / 10) + 2;
          },
          data: (function () {
            const d: any = [];
            let len = 0;
            const now = new Date();
            while (len++ < 200) {
              const random1: any = (Math.random() * 30).toFixed(2);
              const random2: any = (Math.random() * 100).toFixed(2);
              d.push([new Date(2014, 9, 1, 0, len * 10000), random1 - 0, random2 - 0]);
            }
            return d;
          })()
        }]
      };
    }, 1);
  }

  getPortfolios() {
    let query = {};
    if (this.currentUser['role'] == 'Artist') {
      query['userID'] = this.currentUser['_id'];
    }
    if (this.currentUser['role'] == 'Manager') {
      query['userID'] = this.selectedTeam['_id'];
    }
    if (this.currentUser['role'] == 'Bussiness Manager') {
      query['userID'] = this.selectedTeam['_id'];
      // query['bussinessID'] = this.currentUser['bussinessID'];
    }

    this.profileService.getPortfolios(query).subscribe(data => {
      if (data.status == "success") {
        this.portfolioList = data.rows;
      }

    })
  }

  getTeamUsers() {
    let query = {};
    if (this.currentUser['role'] != 'Bussiness Manager') {
      query['userID'] = this.currentUser['_id'];

    }
    if (this.currentUser['role'] == 'Bussiness Manager') {
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


  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
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
      if (data.messsage == "success") {
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
    if (this.currentUser['role'] == "Manager")
      this.managerUser['userID'] = this.currentUser['_id'];
    if (this.currentUser['role'] == "Bussiness Manager")
      this.managerUser['userID'] = this.selectedBussiness['_id'];

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
        if (this.currentUser['role'] == "Manager") {
          query = { "userID": this.currentUser['_id'] };
        }
        if (this.currentUser['role'] == "Bussiness Manager") {
          query = { "userID": this.selectedBussiness['_id'] };
        }
        this.getTeams(query);
        this.pnotify.success({ title: "Team member added successfully", delay: 1000 });
      } else {
        this.pnotify.console.error({ title: data.status, delay: 1000 });
      }
    })

  }

  addBussinessProfile() {
    this.bussinessProfile['userID'] = this.currentUser['_id'];
    this.profileService.createBussiness(this.bussinessProfile).subscribe(data => {
      if (data.status == "success") {
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
    // this.updateUserForm();
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
    if (this.currentUser['role'] == "Artist") {
      this.portfolio['userID'] = this.currentUser['_id'];
    }
    if (this.currentUser['role'] == "Manager") {
      this.portfolio['userID'] = this.selectedTeam['_id'];
    }
    if (this.currentUser['role'] == "Bussiness Manager") {
      this.portfolio['userID'] = this.selectedTeam['_id'];
    }
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

  togglePortfolio() {
    this.editProfile = true;
  }

  onBussinessSelect(selectedBussiness) {
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

}
