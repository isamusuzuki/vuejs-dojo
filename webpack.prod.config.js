const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: {
        avocado: './src/avocado.ts',
        banana: './src/banana.ts',
        coconut: './src/coconut.ts',
        daikon: './src/daikon.ts',
        edamame: './src/edamame.ts',
        fennel: './src/fennel.ts',
        garlic: './src/garlic.ts',
        hakusai: './src/hakusai.ts',
        ingen: './src/ingen.ts',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
    },
    plugins: [new VueLoaderPlugin()],
}
