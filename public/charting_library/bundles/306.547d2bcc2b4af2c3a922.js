/* eslint-disable */
'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [306],
  {
    49775: (e, t, n) => {
      n.d(t, { Icon: () => i });
      var o = n(67294);
      const i = o.forwardRef((e, t) => {
        const { icon: n = '', ...i } = e;
        return o.createElement('span', {
          ...i,
          ref: t,
          dangerouslySetInnerHTML: { __html: n },
        });
      });
    },
    75761: (e, t, n) => {
      n.d(t, { setFixedBodyState: () => a });
      const o = (() => {
        let e;
        return () => {
          var t;
          if (void 0 === e) {
            const n = document.createElement('div'),
              o = n.style;
            (o.visibility = 'hidden'),
              (o.width = '100px'),
              (o.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(n);
            const i = n.offsetWidth;
            n.style.overflow = 'scroll';
            const s = document.createElement('div');
            (s.style.width = '100%'), n.appendChild(s);
            const r = s.offsetWidth;
            null === (t = n.parentNode) || void 0 === t || t.removeChild(n),
              (e = i - r);
          }
          return e;
        };
      })();
      function i(e, t, n) {
        null !== e && e.style.setProperty(t, n);
      }
      function s(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
      }
      function r(e, t) {
        return parseInt(s(e, t));
      }
      let d = 0,
        l = !1;
      function a(e) {
        const { body: t } = document,
          n = t.querySelector('.widgetbar-wrap');
        if (e && 1 == ++d) {
          const e = s(t, 'overflow'),
            d = r(t, 'padding-right');
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (i(n, 'right', o() + 'px'),
            (t.style.paddingRight = d + o() + 'px'),
            (l = !0)),
            t.classList.add('i-no-scroll');
        } else if (
          !e &&
          d > 0 &&
          0 == --d &&
          (t.classList.remove('i-no-scroll'), l)
        ) {
          i(n, 'right', '0px');
          let e = 0;
          0,
            t.scrollHeight <= t.clientHeight && (e -= o()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'),
            (l = !1);
        }
      }
    },
    47165: (e, t, n) => {
      n.d(t, { useOutsideEvent: () => s });
      var o = n(67294),
        i = n(59726);
      function s(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: s,
            touchStart: r,
            handler: d,
            reference: l,
            ownerDocument: a = document,
          } = e,
          c = (0, o.useRef)(null),
          h = (0, o.useRef)(new CustomEvent('timestamp').timeStamp);
        return (
          (0, o.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: s, touchStart: r },
              o = l ? l.current : c.current;
            return (0, i.addOutsideEventListener)(h.current, o, d, a, e);
          }, [t, n, s, r, d]),
          l || c
        );
      }
    },
    90071: (e, t, n) => {
      n.d(t, { OverlapManager: () => s, getRootOverlapManager: () => d });
      var o = n(16282);
      class i {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class s {
        constructor(e = document) {
          (this._storage = new i()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            n = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, n),
            (this._container = n);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const n = this._windows.get(e);
          if (void 0 !== n) return n;
          this.registerWindow(e);
          const o = this._document.createElement('div');
          if (
            ((o.style.position = t.position),
            (o.style.zIndex = this._index.toString()),
            (o.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(o);
            else if (t.index <= 0)
              this._container.insertBefore(o, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(o, e);
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(o, this._container.firstChild)
              : this._container.appendChild(o);
          return this._windows.set(e, o), ++this._index, o;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || '0');
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const r = new WeakMap();
      function d(e = document) {
        const t = e.getElementById('overlap-manager-root');
        if (null !== t) return (0, o.ensureDefined)(r.get(t));
        {
          const t = new s(e),
            n = (function (e) {
              const t = e.createElement('div');
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              );
            })(e);
          return r.set(n, t), t.setContainer(n), e.body.appendChild(n), t;
        }
      }
    },
    4735: (e, t, n) => {
      n.d(t, { Portal: () => l, PortalContext: () => a });
      var o = n(67294),
        i = n(73935),
        s = n(45259),
        r = n(90071),
        d = n(78106);
      class l extends o.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, s.guid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions,
          );
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            i.createPortal(
              o.createElement(a.Provider, { value: this }, this.props.children),
              e,
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, r.getRootOverlapManager)()
            : this.context;
        }
      }
      l.contextType = d.SlotContext;
      const a = o.createContext(null);
    },
    78106: (e, t, n) => {
      n.d(t, { Slot: () => i, SlotContext: () => s });
      var o = n(67294);
      class i extends o.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return o.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const s = o.createContext(null);
    },
  },
]);
