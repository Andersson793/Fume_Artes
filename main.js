const shareData = {
    text: "Fumê Artes - aplicação de película fumê para carros e caminhões, adesivos, canecas personalizadas e mais.",
    title: 'Fumê Artes - aplicação de película fumê e adesivos',
    url: 'https://fume-artes.netlify.app/'
}

const buttonShare = document.getElementById('share')

buttonShare.addEventListener('click', () => {
  if(navigator.canShare(shareData)){
    navigator.share(shareData) 
  }else{
    alert('O seu navegador não suporta esta ação')
  }
});