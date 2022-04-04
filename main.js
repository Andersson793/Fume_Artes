const shareData = {
    text: "Fumê Artes - aplicação de película fumê para carros e caminhões, adesivos, canecas personalizadas e mais.",
    title: 'Fumê Artes - aplicação de película fumê e adesivos',
    url: 'https://developer.mozilla.org'
}

const buttonShare = document.getElementById('share')



buttonShare.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
    }catch(err) {
        alert(navigator.share)
    }
  });