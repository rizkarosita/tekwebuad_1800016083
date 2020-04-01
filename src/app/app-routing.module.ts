import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Praktikum1Component } from './pages/praktikum1/praktikum1.component';
import { Praktikum2Component } from './pages/praktikum2/praktikum2.component';
import { Praktikum3Component } from './pages/praktikum3/praktikum3.component';


const routes: Routes = [
	{ 
		path:'Praktikum1',
		component:Praktikum1Component
	},

	{
		path:'Praktikum2',
		component:Praktikum2Component
	},

	{
		path:'Praktikum3',
		component:Praktikum3Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
