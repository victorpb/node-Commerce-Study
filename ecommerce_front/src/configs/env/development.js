const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const expressEjsLayouts = require('express-ejs-layouts')

module.exports =  (app) => {
    app.set('port', 9000)
    app.set('views', path.join(__dirname, './../../views'))
    app.set('view engine', 'ejs')
    app.set('layout extractScripts', true)
    app.set('layout extractStyles', true)

    app.use(express.static(path.join(__dirname, './../../../build')))
    app.use(expressEjsLayouts)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(morgan('dev'))
    app.use(methodOverride('_method'))
}