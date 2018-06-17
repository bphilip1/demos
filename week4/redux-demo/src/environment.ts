const dev = {
  context: 'http://localhost:3001/'
}

const prod = {
  context: 'http://http://ec2-18-191-247-40.us-east-2.compute.amazonaws.com:3001/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
