import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-gerencial-component',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {


  constructor(
    private apiService: ApiService
  ) {
  }
  ngOnInit(): void {
  }


  downloadPDF() {
    var areaDownload = document.getElementById('area-download');
    if(areaDownload){
      areaDownload.style.visibility = "hidden";
    }
    

    var element = document.getElementById('toprint');
    var opt = {
      margin: 0.4,
      filename: 'relatorio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        dpi:300,
        letterRendering:true,
        useCORS: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:{
        mode:['css','legacy'],
        // mode: ['avoid-all', 'css', 'legacy']
      }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();

    setTimeout(()=>{
      if(areaDownload){
        areaDownload.style.visibility = "initial";
      }
    },3000)
    
    
  }



}
