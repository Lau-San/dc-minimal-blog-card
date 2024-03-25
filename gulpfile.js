const gulp = require('gulp')
const browserSync = require('browser-sync').create()

function bs() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        watch: true,
    })
}

exports.default = bs
