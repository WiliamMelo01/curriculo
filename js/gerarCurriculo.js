const buttonGerarPDF = document.querySelector("#gerar_pdf");

buttonGerarPDF.addEventListener("click", () => {
  const content = document.querySelector(".curriculo-container");

  content.style.maxWidth = "100%";

  const options = {
    margin: [10, 10, 10, 10],
    filename: "arquivo.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(content).save();

  setTimeout(() => {
    content.style.maxWidth = "50%";
  }, 1);
});
