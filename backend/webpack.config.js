import path from 'path'
module.exports = {
    entry : './src/index.js', 
    output : {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'bundle')

    }

}