const stripe = require('../../config/stripe')
const userModel = require('../../models/userModel')
const paymentController = async(req,res) => {
    try {
        const { cartItems } = req.body
        console.log("cartItem",cartItems)
        const user = await userModel.findOne({ _id : req.userId })
        const params ={
              submit_type : 'pay',
              mode: "payment",
              payment_method_types: ['card'],
              billing_address_collection: 'auto',
              shipping_options : [
                {
                    shipping_rate : 'shr_1Q7tgQIM2Rrk9VseatsBB9IY'
                }
              ],
              customer_email : user.email,
              line_items: cartItems.map((item,index)=>{
                return{
                    price_data : {
                        currency : 'inr',
                        product_data : {
                            name : item.productId.productName,
                            images : item.productId.productImage,
                            matadata : {
                                productId : item.productId._id
                            }
                        },
                        unit_amount : item.productId.sellingPrice
                    },
                    adjustable_quantity : {
                        enabled : true,
                        mininum : 1
                    },
                    quantity : item.quantity
                }
              }),
              success_url : `${process.env.CLIENT_URL}/success`,
              cancel_url : `${process.env.CLIENT_URL}/cancel`
        }
        const session = await stripe.checkout.sessions.create(params)

        res.status(303).json(session)
    } catch (error) {
        res.json({
            message : error?.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = paymentController