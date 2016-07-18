import $ from 'jquery';
import Backbone from 'backbone';

function menuPost(data) {
    let $menuItem = $(`
    <div class="itemTitle">
      ${food.item}
    </div>
    <div class="itemPrice">
      ${food.price}
    </div>
    <div class="itemDescribe">
      ${food.description}
    </div>
  `);
    let $foodCategory = $(`
    <div class="foodCategory">
      <h1>${key}</h1>
    </div>
  `);
    _.mapObject(data, function(foodArray, category) {
        $('#menuDisplay').append($foodCategory).attr('class', category);
        _.map(data.category, function(food) {
            $('.' + category).append($menuItem);
        });
    });
}

export default menuPost;
