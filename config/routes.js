/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  'GET /signup': { action: 'entrance/view-signup' },
  'GET /login': { action: 'entrance/view-login' },

  'GET /account': { action: 'account/view-account-overview' },
  'GET /account/password': { action: 'account/view-edit-password' },
  'GET /account/profile': { action: 'account/view-edit-profile' },

  'GET /logout': { action: 'account/logout' },
  'POST  /login': { action: 'entrance/login' },
  'POST  /signup': { action: 'entrance/signup' },
  'POST  /signup': { action: 'entrance/signup' },
  'POST  /updateProfile': { action: 'account/update-profile' },
  'POST  /updatePassword': { action: 'account/update-password' },
  'POST  /signup': { action: 'entrance/signup' },


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/aboutus': { view: 'pages/about' },
  '/impressum': { view: 'pages/impressum' },
  '/privacypolicy': { view: 'pages/privacypolicy' },
  '/terms' : { view: 'pages/terms' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /category/new': { view: 'pages/category/new' },
  'POST /category': { controller: 'CategoryController', action: 'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
  'GET /category': { controller: 'CategoryController', action: 'find' },

  'GET /item/new': { controller: 'ItemController', action: 'new' },
  'POST /item': { controller: 'ItemController', action: 'create' },
  'GET /item': { controller: 'ItemController', action: 'indexAction' },
  'GET /item/show': { controller: 'ItemController', action: 'findOne' },
  'GET /item/overview': { controller: 'ItemController', action: 'overviewAction' },

  'GET /search': { controller: 'SearchController', action: 'searchItems' },

  'GET /item/:id/edit': { controller: 'ItemController', action: 'editOne' },
  'POST /item/:id/update': { controller: 'ItemController', action: 'updateOne' },
  'GET /item/:id/destroy': { controller: 'ItemController', action: 'destroyOne' },

  'GET /item/:id/uploadImageForm': { controller: 'ImageController', action: 'uploadImageForm' },
  'POST /item/:id/uploadImage': { controller: 'ImageController', action: 'uploadImage' },

  'GET /order/new': { controller: 'OrderController', action: 'commit' },
  'GET /api/order': { controller: 'OrderController', action: 'indexAction' },
  'GET /api/order/all': { controller: 'OrderController', action: 'listAll' },
  'POST /api/deleteorder': { controller: 'OrderController', action: 'deleteOrder' },
  'GET /orders/all': { action: 'orders/view-orders' },

  /***************************************************************************
  *                                                                          *
  *       Shopping Basked API                                                *
  *                                                                          *
  ***************************************************************************/
 
  'GET /order': { action: 'view-menu-shopping' },
  'GET /basket': { action: 'view-basket' },
  
  'GET /api/items': { action: 'api/items/index'},
  'POST /api/search': { controller: 'SearchController', action: 'vueSearchItems' },

  'GET /api/basket': {  action:'api/basket/get' },
  'POST /api/basket': {  action:'api/basket/add' },
  'DELETE /api/basket/delete': {  action:'api/basket/delete' },
  
  'POST /api/address': {  action:'api/basket/post-address' },
  'POST /api/itemquantity': {  action:'api/basket/post-quantity' },



};
