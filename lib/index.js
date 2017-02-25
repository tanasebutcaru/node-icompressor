'use strict';
const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

const input = 'uploads_dir';
const output = `${input}/compressed`;

const imageCompressorRun = (input, output, plugins) => {
    return imagemin(input, output, { plugins });
}

const imageCompressorPNG = () => {
    const pngPlugins = [
        pngquant({ speed: 3, quality: '90' })
    ];

    return imageCompressorRun([`${input}/*.png`], output, pngPlugins);
}

const imageCompressorJPG = () => {
    const jpgPlugins = [
        mozjpeg()
    ];

    return imageCompressorRun([`${input}/*.{jpg,jpeg}`], output, jpgPlugins);
}

imageCompressorPNG().then(() => console.info('PNG compression success!'));
imageCompressorJPG().then(() => console.info('JPG compression success!'));