module.exports = {
    "development": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/blog',
        secretToken: process.env.SECRET_TOKEN || 'secretToken',
        env: 'development',
        facebookAuth: {
            clientID: process.env.FACEBOOK_ID || '1', // your App ID
            clientSecret: process.env.FACEBOOK_SECRET || '1', // your App Secret
            callbackURL: process.env.FACEBOOK_CALLBACK
        }
    },
    "production": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/blog',
        secretToken: process.env.SECRET_TOKEN || 'secretToken',
        env: 'production',
        facebookAuth: {
            clientID: process.env.FACEBOOK_ID, // your App ID
            clientSecret: process.env.FACEBOOK_SECRET, // your App Secret
            callbackURL: process.env.FACEBOOK_CALLBACK
        }
    }
}
