import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LOz0WSIEyEVlmGizNdX4t1ku00WrB7sZCGcrVIx4W4bkmathgDYvFKdJ2u2YdRz2E7tKhN9JzGnatP79oDqHnFI00baL56KIX');
  }

  return stripePromise;
}

export default getStripe;