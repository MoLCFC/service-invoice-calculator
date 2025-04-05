function calculateTotal() {

    let unit_price = {
      webdesign: 150,
      seo: 100,
      content: 50,
      digital: 80
    };
  

    let item_price = {};
  
    item_price.webdesign = $("#qty_webdesign").val() * unit_price.webdesign;
    $("#price_webdesign").val(item_price.webdesign);
  
    item_price.seo = $("#qty_seo").val() * unit_price.seo;
    $("#price_seo").val(item_price.seo);
  
    item_price.content = $("#qty_content").val() * unit_price.content;
    $("#price_content").val(item_price.content);
  
    item_price.digital = $("#qty_digital").val() * unit_price.digital;
    $("#price_digital").val(item_price.digital);
  

    let total = item_price.webdesign + item_price.seo + item_price.content + item_price.digital;
    $("#total_value").text(total);
  }
  

  $(function() {
    $(".qty").on("change keyup", calculateTotal);
  });
  