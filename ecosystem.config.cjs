module.exports = {
    apps: [
        {
            name: 'clapsit-web-app',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
