const path = require('path');


module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'main.js'
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                        // при каждом запуске
                    },
                },
            },
        ]

    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};
