'use strict';

/**
 * order controller
 */

 const { createCoreController } = require('@strapi/strapi').factories;

 module.exports = createCoreController('api::order.order');

// const stripe = require('stripe') ('sk_test_51MJaD7DSDNEmWJ9Q5HvjRKjC2Sr7VUJZxmY2xnMg2Q0jBVjvWJVnb7mWbV6cH1NZpbtb1wq0KSyabpsXBr9SSk2F00KSM3FRuX')

// module.exports = {
// 	create: async ctx => {
// 	const {name,total, items, stripeTokenId}=ctx.request.body
// 	const {id} = ctx.state.user

// 	const charge = await stripe.charges.create({
// 	amount: Math.round(total*100),
// 	currency:"taka",
// 	source:stripeTokenId,
// 	description: `Order ${new Date()} by ${ctx.state.user.username}`
// }) 
// const order = await strapi.services.order.create({
// name, total, items, user:id
// })
// return order;
// }
// }