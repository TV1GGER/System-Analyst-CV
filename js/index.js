
const downloadCv = document.getElementById('download-cv');

// функция для запуска скачивания .pdf CV файла
function triggerDownload() {
  let element = document.createElement('a');
  element.setAttribute('href', './assets/pdf/SA_Perahudau_Dzianis_CV.pdf');
  element.setAttribute('download', 'SA_Perahudau_Dzianis_CV.pdf');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

downloadCv.addEventListener("click", triggerDownload);