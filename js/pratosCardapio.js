const btnCardapio = document.querySelectorAll('.btnCardapio');
const cardapioTipos = document.querySelectorAll('.prato');

btnCardapio.forEach((btn) => {
  btn.addEventListener('click', trocaCardapio)
})

function trocaCardapio() {
  
  const tab = tabRetorno(this.getAttribute("data-prato"))

  if (this.getAttribute("data-prato") === "carne") {
    trocaTab(tab);
    trocaAtivo(this);
  } 
  
  else if (this.getAttribute("data-prato") === "massa") {
    trocaTab(tab);
    trocaAtivo(this);
  } 
  
  else if (this.getAttribute("data-prato") === "vegano") {
    trocaTab(tab);
    trocaAtivo(this);
  } 
  
  else if (this.getAttribute("data-prato") === "bebidas") {
    trocaTab(tab);
    trocaAtivo(this);
  }
}


function tabRetorno(tipoPrato) {
  let tabElement;
  Array.prototype.some.call(cardapioTipos, (tipo) => {
    if (tipoPrato === tipo.getAttribute("data-prato")) 
    return tipoPrato === tipo.getAttribute("data-prato") ? tabElement = tipo : '';
  })
  return tabElement;
}

function tabAtiva() {
  let tabAtiva;
  Array.prototype.filter.call(cardapioTipos, (tab) =>{
    if(!tab.classList.contains('hidden')) tabAtiva = tab;
  })
  return tabAtiva;
}

function btnComAtivo() {
  let btnAtivo;
  Array.prototype.filter.call(btnCardapio, (btn) =>{
    if(btn.classList.contains('active')) btnAtivo = btn;
  })
  return btnAtivo;
}

function trocaAtivo(btnRecebeAtivo) {
  let btnAtivo = btnComAtivo();
  btnAtivo.classList.remove('active');
  btnRecebeAtivo.classList.add('active');
}

function trocaTab(tabAparece) {
  let activeTab = tabAtiva();
  activeTab.classList.add('hidden');
  tabAparece.classList.remove('hidden');
}