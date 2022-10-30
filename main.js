const buttonShare = document.getElementById('button-share');

const shareData = {
    text: "Fumê Artes - aplicação de película fumê para carros e caminhões, adesivos, canecas personalizadas e mais.",
    title: 'Fumê Artes - aplicação de película fumê e adesivos',
    url: 'https://fume-artes.netlify.app/'
}

buttonShare.addEventListener('click', async () => {
  if(navigator.canShare(shareData)){
    await navigator.share(shareData);
  }else{
    alert('O seu navegador não suporta esta ação');
  }
})