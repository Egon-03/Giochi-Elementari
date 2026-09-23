/*
  Pubblicita' Google AdSense — versione "leggera" e adatta ai bambini.

  Come attivarla:
  1. Quando AdSense approva il sito, sostituisci ADSENSE_CLIENT e ADSENSE_SLOT
     qui sotto con i tuoi codici (li trovi in AdSense > Annunci > Per unita' pubblicitaria).
  2. Metti lo stesso ca-pub anche nel meta "google-adsense-account" di index.html
     e in ads.txt.

  Finche' i codici sono quelli finti, non viene caricato nulla e lo spazio
  pubblicitario resta nascosto.

  Il sito e' rivolto ai bambini, quindi ogni richiesta e' marcata come
  "child-directed" e non personalizzata: Google mostra solo annunci
  contestuali, senza profilazione. Niente annunci automatici, pop-up o banner fissi.
*/
(function(){
  "use strict";

  var ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";
  var ADSENSE_SLOT = "XXXXXXXXXX";

  if (/X{4}/.test(ADSENSE_CLIENT) || /X{4}/.test(ADSENSE_SLOT)) return;

  var slots = document.querySelectorAll('.ad-slot');
  if (!slots.length) return;

  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.tagForChildDirectedTreatment = 1;
  window.adsbygoogle.requestNonPersonalizedAds = 1;

  var script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT;
  document.head.appendChild(script);

  Array.prototype.forEach.call(slots, function(slot){
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', ADSENSE_CLIENT);
    ins.setAttribute('data-ad-slot', ADSENSE_SLOT);
    ins.setAttribute('data-ad-format', 'horizontal');
    ins.setAttribute('data-full-width-responsive', 'true');
    slot.appendChild(ins);
    slot.hidden = false;
    window.adsbygoogle.push({});
  });
})();
