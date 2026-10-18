(function () {
  var L = window.LATEST, R = window.RELEASES || [];
  var $ = function (id) { return document.getElementById(id); };
  var TYPE = { single: "Single", ep: "EP", album: "Album" };

  if (L) {
    $("hero-title").textContent = L.title;
    $("hero-label").textContent = L.label;
    $("hero-cover").src = L.cover;
    $("hero-cover").alt = L.title + " cover art";
    $("hero-bg").style.backgroundImage = "url('" + L.cover + "')";
    $("hero-listen").href = L.spotify;
    if (L.embed) $("hero-embed").src = L.embed; else $("hero-embed").parentNode.remove();
  }

  var grid = $("grid");
  grid.innerHTML = R.map(function (r) {
    var kind = r.type === "single" ? "single" : "album";
    var meta = TYPE[r.type] + " · " + r.year + (r.tracks > 1 ? " · " + r.tracks + " tracks" : "");
    return '<li class="card" data-kind="' + kind + '">' +
      '<a href="' + r.spotify + '" target="_blank" rel="noopener">' +
      '<img src="' + r.cover + '" alt="' + r.title.replace(/"/g, "&quot;") + ' cover" loading="lazy" width="300" height="300">' +
      '<span class="card-title">' + r.title + '</span>' +
      '<span class="card-meta">' + meta + '</span></a></li>';
  }).join("");
  $("count-releases").textContent = R.length;
  $("yr").textContent = new Date().getFullYear();

  document.querySelectorAll(".chip").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-on"); });
      b.classList.add("is-on");
      var f = b.dataset.f;
      grid.querySelectorAll(".card").forEach(function (c) {
        c.hidden = !(f === "all" || c.dataset.kind === f);
      });
    });
  });
})();
