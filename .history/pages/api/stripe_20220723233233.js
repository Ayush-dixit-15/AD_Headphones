const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItems)
    try {
        const params= {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options:[
                { shipping_rate: 'shr_1LOmLxSJzYbHrn3AGqVWRtyV' },
                { shipping_rate: 'shr_1LOmNcSJzYbHrn3AfKwo3jOQ' },
            ],

            line_items: req.body.cartItems.map((item)=>{
                const img= item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/cz04jmcp/production/').replace('-webp', '.webp');
            }),
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}