window.addEventListener('load', () => {
    registerSw();
  })

  const registerSw = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        console.log(e.message);
      }
    }
  };