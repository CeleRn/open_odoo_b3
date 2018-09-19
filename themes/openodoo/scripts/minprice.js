hexo.extend.helper.register('minPrice', function (offersList) {
    let minPrice = offersList[0].price;
    for (let index in offersList) { 
      let offer = offersList[index];
      if (offer.price < minPrice) {minPrice = offer.price};
    }
    return minPrice;
 });


