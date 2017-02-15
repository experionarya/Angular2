import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
 
@Component({
			moduleId:module.id,
 			selector: 'user',
  			templateUrl: 'user.component.html',
  			providers:[PostsService]
})

export class UserComponent  { 
	name:string;
	email:string;
	address:address;
	hobbies:string[];
	showHobbies:boolean;
	posts:Post[];

	constructor(private postsService:PostsService) {
		this.name='Arya S Vijayan';
		this.email='arya.vijayan@experionglobal.com';
		this.address={
						city:'Trivandrum',
						state:'Kerala'
		}
		this.hobbies=['Sports','Music'];
		this.showHobbies=false;
		this.postsService.getPosts().subscribe(posts => {
			this.posts=posts;
		 });
		}
 
	toggleHobbies() {
		if(this.showHobbies==true) {
			this.showHobbies=false;
		}

		else {
			this.showHobbies=true;
		}
	 }

	 addHobby(hobby) {
	 	this.hobbies.push(hobby);
	 }

	 deleteHobby(i) {
	 	this.hobbies.splice(i,1); 
	 }
}

 interface address {
 	city:string;
 	state:string;
 }

interface Post {
	id:number;
	title:string;
	body:string;
}