import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.css'
})
export class MenulateralComponent  implements OnInit{
 userName!:string;

 constructor(private router:Router){
   
  }
  redirigirANuevo() {
    this.router.navigate(['/dashboard']);
  }
  redirigirAMaestro() {
    this.router.navigate(['/maestro']);
  }
  redirigirAMatricula() {
    this.router.navigate(['/matricula']);
  }
  redirigirAHorario() {
    this.router.navigate(['/horario']);
  }
  ngOnInit() {
     const subMenuLinks = document.querySelectorAll("#leftside-navigation .sub-menu > a");
     subMenuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const subMenu = link.nextElementSibling as HTMLElement;
         const isSubMenuVisible = subMenu.style.display === "block";
  
        document.querySelectorAll("#leftside-navigation ul ul").forEach(subMenu => {
           (subMenu as HTMLElement).style.display = "none";
         });
  
         if (!isSubMenuVisible) {
          subMenu.style.display = "block";
         }
  
         e.stopPropagation();
       });
     });
     // para usar el userName en el html 
     this.userName = localStorage.getItem('userName') || '';
  }


}
