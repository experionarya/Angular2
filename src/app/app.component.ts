import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
   // `
  // 				<h1>Hello {{name}}</h1>
  // 				<p><strong>Email:</strong>{{email}}</p>
  // 				<p><strong>Address:</strong>{{address.city}} {{address.state}}
		// 	`,

		`
		<ul>
			<li><a routerLink="/">Home</a></li>
			<li><a routerLink="/about">About</a></li>
		</ul>
		<router-outlet></router-outlet>`
})
export class AppComponent  { 
	// name = 'Arya';
	// email = 'arya.vijayan@experionglobal.com';
	// address = {
	// 			city:'Trivandrum',
	// 			state:'Kerala'
	// 		  }
 }
