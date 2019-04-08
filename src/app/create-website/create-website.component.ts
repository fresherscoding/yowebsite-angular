import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
  styleUrls: ['./create-website.component.scss']
})
export class CreateWebsiteComponent implements OnInit {

  title: String = 'Create website';
  isSubmitting: Boolean = false;
  websiteForm: FormGroup;
  websiteName: string = '';
  websiteCreated: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private  httpClient:  HttpClient,
    private mainRoute: Router
  ) {
    this.websiteForm = this.fb.group({
      'websiteName': ['', Validators.required],
      'adminPassword': ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  submitForm() {
    const endpoint = 'site';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const details = this.websiteForm.value;
    this.httpClient.post<string>(endpoint, {
      websiteName: details.websiteName,
      adminPassword: details.adminPassword
    }).subscribe((response) => {
      if (response === 'success') {
        this.websiteCreated = true;
        this.websiteName = details.websiteName;
      }
    });
  }

}
