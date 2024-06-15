import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = "./src/index.js";
export const output = {
    filename: 'main.js',
    path: resolve(__dirname, 'dist')
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: '.src/template.html'
    })
];
