! function(a) {
    "use strict";

    function b() {
        var a, b = document.createElement("fakeelement"),
            c = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
        for (a in c)
            if (void 0 !== b.style[a]) return c[a]
    }

    function c(b) {
        var c = 0,
            d = 0;
        if (!b) var b = a.event;
        return b.pageX || b.pageY ? (c = b.pageX, d = b.pageY) : (b.clientX || b.clientY) && (c = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, d = b.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
            x: c,
            y: d
        }
    }

    function d(b) {
        var c = b.getBoundingClientRect(),
            d = document.body,
            e = document.documentElement,
            f = a.pageYOffset || e.scrollTop || d.scrollTop,
            g = a.pageXOffset || e.scrollLeft || d.scrollLeft,
            h = e.clientTop || d.clientTop || 0,
            i = e.clientLeft || d.clientLeft || 0,
            j = c.top + f - h,
            k = c.left + g - i;
        return {
            x: Math.round(k),
            y: Math.round(j)
        }
    }

    function e() {
        this.body = document.body, this.wrapper = document.querySelector("#wrapper"), this.toggle = document.querySelector("#mm-menu-toggle"), this.menu = document.querySelector("#mm-menu"), this.menuItems = this.menu.querySelectorAll("li"), this.menuItemLinks = this.menu.querySelectorAll("a"), this.menuPosition = "off", this.mask = document.createElement("div"), this.mask.className = "mm-menu-mask", document.body.appendChild(this.mask), this._init()
    }
    var f = b();
    e.prototype._init = function() {
        this._initToggleEvents(), this._initItemTransitions(), this._initTouchEffect(), this._initMaskEvents()
    }, e.prototype._initToggleEvents = function() {
        var a = this;
        this.toggle.addEventListener("click", function() {
            "off" == a.menuPosition ? a._toggleMenuOn() : a._toggleMenuOff()
        })
    }, e.prototype._toggleMenuOn = function() {
        var a = this;
        this.body.classList.add("mm-menu-open"), this.wrapper.classList.add("mm-menu-open"), this.toggle.classList.add("active"), this.menu.classList.add("active");
        for (var b = 0; b < a.menuItems.length; b++) {
            var c = a.menuItems[b];
            ! function(a) {
                a.classList.add("in-view")
            }(c)
        }
        this.mask.classList.add("active"), this.menuPosition = "on"
    }, e.prototype._toggleMenuOff = function() {
        var a = this;
        this.body.classList.remove("mm-menu-open"), this.wrapper.classList.remove("mm-menu-open"), this.toggle.classList.remove("active"), this.menu.classList.remove("active");
        for (var b = 0; b < a.menuItems.length; b++) {
            var c = a.menuItems[b];
            ! function(a) {
                a.classList.remove("in-view")
            }(c)
        }
        this.mask.classList.remove("active"), this.menuPosition = "off"
    }, e.prototype._initItemTransitions = function() {
        for (var a = this.menuItems.length, b = 0; a > b; b++) {
            var c = b + 1,
                d = this.menuItems[b];
            this._itemTransitionHandler(d, c)
        }
    }, e.prototype._itemTransitionHandler = function(a, b) {
        a.classList.add("item-" + b)
    }, e.prototype._initTouchEffect = function() {
        for (var a = this.menuItemLinks.length, b = 0; a > b; b++) {
            var c = this.menuItemLinks[b];
            this._touchEffectHandler(c)
        }
    }, e.prototype._touchEffectHandler = function(a) {
        var b = a.offsetWidth,
            e = a.offsetHeight,
            g = 2 * Math.max(b, e),
            h = document.createElement("span");
        h.className = "mm-menu__link--touch-effect", h.style.width = g + "px", h.style.height = g + "px", a.insertBefore(h, a.firstChild), a.addEventListener("click", function(a) {
            var b = c(a).x - d(this).x,
                e = c(a).y - d(this).y;
            h.style.top = e + "px", h.style.left = b + "px", h.style.marginTop = -(g / 2) + "px", h.style.marginLeft = -(g / 2) + "px", h.classList.add("animating")
        }), h.addEventListener(f, function() {
            this.classList.remove("animating")
        })
    }, e.prototype._initMaskEvents = function() {
        var a = this;
        this.mask.addEventListener("click", function(b) {
            b.preventDefault(), "on" == a.menuPosition ? a._toggleMenuOff() : !1
        })
    }, a.Menu = e
}(window);
var menu = new Menu;