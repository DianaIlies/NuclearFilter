import Context from './context';
import { default as welcome } from './modules/welcome';
import { default as auth } from './modules/auth';

const context = new Context({
  debug: process.env.NODE_ENV === 'development'
});

// Create application context using defined modules
context.create({
  auth,
  welcome
});

export default context;
