import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LOo8DSBvP5CbxzkyiIlXsdJ5keHVgiqYlVWWIjUIadquQf98eRjDrlG5jBAmTHUurQo0Y2F3pJ8TK951YNdUSPv00Z6Dw6pi5');
  }

  return stripePromise;
}

export default getStripe;