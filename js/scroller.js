!function n(i,o,u){function f(t,r){if(!o[t]){if(!i[t]){var e="function"==typeof require&&require;if(!r&&e)return e(t,!0);if(a)return a(t,!0);throw new Error("Cannot find module '"+t+"'")}r=o[t]={exports:{}};i[t][0].call(r.exports,function(r){var e=i[t][1][r];return f(e||r)},r,r.exports,n,i,o,u)}return o[t].exports}for(var a="function"==typeof require&&require,r=0;r<u.length;r++)f(u[r]);return f}({1:[function(r,e,t){var n,i,o,u;$((n=window.jQuery,o=n(".submenu a, .content__text li a"),u=n("html, body"),void(o&&o.click(function(){var r=n(".header"),e=n(this),t=e.attr("href").slice(1),e=e.is("[id]")||e.is("[name]")?e:n("[id="+t+"], [name="+t+"]"),t="fixed"===r.css("position")?r.outerHeight()+10:0;return i={scrollTop:e.offset().top-t},u.animate(i,500),!1}))))},{}]},{},[1]);