const urls = ['./common.js', './object.js', './class.js'];

urls.forEach(url => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
});
