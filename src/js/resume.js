import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
window.html2canvas = html2canvas;

let generate = function () {
  var pdf = new jsPDF('p', 'mm', 'a4');
  var margins = {
    top: 0,
    bottom: 0,
    left: 0,
    width: 0
  };
  pdf.addHTML(document.body, margins.top, margins.left, {}, function () {
    pdf.save(`Nawazish's CV`);
  });
};

let download = document.getElementById('download');

download.onclick = () => {
  generate();
};