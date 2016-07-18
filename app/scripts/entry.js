import $ from 'jquery';
import Backbone from 'backbone';
import menuPost from './views/menuPost';

$.ajax({
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
}).then(rendMenu);





function rendMenu(data) {
  menuPost(data);
}
