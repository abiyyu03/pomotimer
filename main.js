if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').then(function(reg){
    console.log('Successfully registered service worker', reg);
  }).catch(function(err){
    console.warn('Error whilst registering service worker', err);
  });
}

window.addEventListener('online',function(e){
  console.log("You are Online");
  page.hideOfflineWarning();
  Pomotimer.loadData();
},false);

window.addEventListener('offline',function(e){
    console.log("You are Offline");
    page.showOfflineWarning();
},false);

if(navigator.online){
  Pomotimer.loadData();
} else {
  Page.showOfflineWarning();
}

ko.applyBindings(Page.vm);
