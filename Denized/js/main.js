var template = $("#template").html();
var title = new RegExp('{{title}}', 'g');
var collections = $("[data-collection]");
collections.on('click', displayCollestions);
var mainRow = $("#mainRow");

display();

$(".back-to-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

function display() {
   mainRow.html("");
   $.ajax({
      url : "https://api.myjson.com/bins/g7874",
      method : "get",
      dataType : "json"
   })
   .done(function (res) {
      var text = "";
      res.forEach(function (e) {
         text = template.replace("{{imgSrc}}", e.imgSrc)
                        .replace(title, e.productTitle)
                        .replace("{{model}}", e.model)
                        .replace("{{price}}", e.price);
         mainRow.append(text)
      })
   })
}

function displayCollestions(e) {
   mainRow.html("");
   e.preventDefault();
   var col = $(this).data('collection')
   $.ajax({
      url : "https://api.myjson.com/bins/g7874",
      method : "get",
      dataType : "json"
   })
   .done(function (res) {
      if(col === 'male' || col === 'female') {
         var colFilter = res.filter(function (el) {
            return el.colection === col;
         })
         var text = "";
         colFilter.forEach(function (e) {
            text = template.replace("{{imgSrc}}", e.imgSrc)
                           .replace(title, e.productTitle)
                           .replace("{{model}}", e.model)
                           .replace("{{price}}", e.price);
            mainRow.append(text)
         })
      } else if(col === 'newCol' || col === 'popular' || col === 'action') {
         var colFilter = res.filter(function (el) {
            return el[col];
         })
         var text = "";
         colFilter.forEach(function (e) {
            text = template.replace("{{imgSrc}}", e.imgSrc)
                           .replace(title, e.productTitle)
                           .replace("{{model}}", e.model)
                           .replace("{{price}}", e.price);
            mainRow.append(text)
         })
      }
   })
}
