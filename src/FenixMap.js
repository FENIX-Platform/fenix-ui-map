/*
 * The FM namespace contains all Fenix Map JS classes and functions.
 * This code allows you to handle any possible namespace conflicts.
 */

var FM, originalFM;
if (!window.console) {var console = {};}
if (!console.log) {console.log = function() {};}
if (!console.warn) {console.warn = function() {};}
if (!console.error) {console.error = function() {};}
if (!console.info) {console.info = function() {};}

if (typeof exports !== undefined + '') {
    FM = exports;
} else {
    originalL = window.FM;
    FM = {};

    FM.noConflict = function () {
        window.FM = originalFM;
        return this;
    };
    window.FM = FM;
}

FM.authors = [
	{name: 'Stefano Cudini', email: 'stefano.cudini@fao.org'},
	{name: 'Simone Murzilli', email: 'simone.murzilli@gmail.com; simone.murzilli@fao.org'}
];