/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'item/overview' : true,

  ItemController: {
    'new': 'is-super-admin',
    'create': 'is-super-admin',
    'destroyOne': 'is-super-admin',
    'editOne': 'is-super-admin',
    'updateOne': 'is-super-admin',
    'indexAction': 'is-logged-in',
    'findOne': true,
    'overviewAction': true,
  },
  CategoryController: {
    '*': 'is-super-admin',
  }
};
