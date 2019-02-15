module.exports = {
  apps : [{
    name: 'essay',
    script: 'server/index.js',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '202.182.113.102',
      ref  : 'origin/master',
      repo : 'git@github.com:zenghongcong/essay.git',
      path : '/var/www/essay',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
