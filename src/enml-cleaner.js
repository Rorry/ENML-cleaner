ENML_Cleaner = (function () {

  // attributes
  var _attr_value = {
      REQUIRED: 0,
      IMPLIED: 1,
      FIXED: 2
    },
    _coreattrs = {
      'style': _attr_value.IMPLIED,
      'title': _attr_value.IMPLIED
    },
    _i18n = {
      'lang': _attr_value.IMPLIED,
      'xml:lang': _attr_value.IMPLIED,
      'dir': _attr_value.IMPLIED
    },
    _focus = {
      'accesskey': _attr_value.IMPLIED,
      'tabindex': _attr_value.IMPLIED
    },
    _attrs = {
      // coreattrs
      'style': _attr_value.IMPLIED,
      'title': _attr_value.IMPLIED,
      // i18n
      'lang': _attr_value.IMPLIED,
      'xml:lang': _attr_value.IMPLIED,
      'dir': _attr_value.IMPLIED
    },
    _TextAlign = {
      'align': _attr_value.IMPLIED
    },
    _cellhalign = {
      'align': _attr_value.IMPLIED,
      'char': _attr_value.IMPLIED,
      'charoff': _attr_value.IMPLIED
    },
    _cellvalign = {
      'valign': _attr_value.IMPLIED
    };

  /* Simplified HTML Elements and Attributes */
  var _defaultElement = function (node, filter) {
      var n = node.attributes.length,
        attr, i;

      // default filter function
      if (!(typeof filter === 'function')) {
        filter = function (attr) {
          return !_attrs.hasOwnProperty(attr);
        };
      }

      if (node.hasAttributes()) {
        for (i = n - 1; i >= 0; i--) {

          attr = node.attributes[i].name;
          if (filter(attr)) {
            node.removeAttribute(attr);
          }
        }
      }
    },
    _a = function (node) {
      var otherAttrs = {
        'charset' : _attr_value.IMPLIED,
        'type'    :_attr_value.IMPLIED,
        'name'    :_attr_value.IMPLIED,
        'href'    :_attr_value.IMPLIED,
        'hreflang':_attr_value.IMPLIED,
        'rel'     :_attr_value.IMPLIED,
        'rev'     :_attr_value.IMPLIED,
        'shape'   :_attr_value.IMPLIED,
        'coords'  :_attr_value.IMPLIED,
        'target'  :_attr_value.IMPLIED
        };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_focus.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _area = function (node) {
      var otherAttrs = {
        'shape' : _attr_value.IMPLIED,
        'coords': _attr_value.IMPLIED,
        'href'  : _attr_value.IMPLIED,
        'nohref': _attr_value.IMPLIED,
        'alt'   : _attr_value.IMPLIED,
        'target': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_focus.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _bdo = function (node) {
      var otherAttrs = {
        'lang'    : _attr_value.IMPLIED,
        'xml:lang': _attr_value.IMPLIED,
        'dir'     : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_coreattrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _blockquote = function (node) {
      var otherAttrs = {
        'cite': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _br = function (node) {
      var otherAttrs = {
        'clear': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_coreattrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _caption = function (node) {
      var otherAttrs = {
        'align': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _col = function (node) {
      var otherAttrs = {
        'span' : _attr_value.IMPLIED,
        'width': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr)
          && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _colgroup = function (node) {
      var otherAttrs = {
        'span' : _attr_value.IMPLIED,
        'width': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr)
          && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _del = function (node) {
      var otherAttrs = {
        'cite'    : _attr_value.IMPLIED,
        'datetime': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _div = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_TextAlign.hasOwnProperty(attr);
      });
    },
    _dl = function (node) {
      var otherAttrs = {
        'compact': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _font = function (node) {
      var otherAttrs = {
        'size' : _attr_value.IMPLIED,
        'color': _attr_value.IMPLIED,
        'face' : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_coreattrs.hasOwnProperty(attr) && !_i18n.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _h = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_TextAlign.hasOwnProperty(attr);
      });
    },
    _hr = function (node) {
      var otherAttrs = {
        'align'  : _attr_value.IMPLIED,
        'noshade': _attr_value.IMPLIED,
        'size'   : _attr_value.IMPLIED,
        'width'  : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _img = function (node) {
      var otherAttrs = {
        'src'     : _attr_value.IMPLIED,
        'alt'     : _attr_value.IMPLIED,
        'name'    : _attr_value.IMPLIED,
        'longdesc': _attr_value.IMPLIED,
        'height'  : _attr_value.IMPLIED,
        'width'   : _attr_value.IMPLIED,
        'usemap'  : _attr_value.IMPLIED,
        'ismap'   : _attr_value.IMPLIED,
        'align'   : _attr_value.IMPLIED,
        'border'  : _attr_value.IMPLIED,
        'hspace'  : _attr_value.IMPLIED,
        'vspace'  : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _ins = function (node) {
      var otherAttrs = {
        'cite'    : _attr_value.IMPLIED,
        'datetime': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _li = function (node) {
      var otherAttrs = {
        'type' : _attr_value.IMPLIED,
        'value': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _map = function (node) {
      var otherAttrs = {
        'title': _attr_value.IMPLIED,
        'name' : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_i18n.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _ol = function (node) {
      var otherAttrs = {
        'type' : _attr_value.IMPLIED,
        'compact': _attr_value.IMPLIED,
        'start': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _p = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_TextAlign.hasOwnProperty(attr);
      });
    },
    _pre = function (node) {
      var otherAttrs = {
        'width': _attr_value.IMPLIED
        //xml:space   (preserve)    #FIXED 'preserve'
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _q = function (node) {
      var otherAttrs = {
        'cite': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _table = function (node) {
      var otherAttrs = {
        'summary'    : _attr_value.IMPLIED,
        'width'      : _attr_value.IMPLIED,
        'border'     : _attr_value.IMPLIED,
        'cellspacing': _attr_value.IMPLIED,
        'cellpadding': _attr_value.IMPLIED,
        'align'      : _attr_value.IMPLIED,
        'bgcolor'    : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _tbody = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr);
      });
    },
    _td = function (node) {
      var otherAttrs = {
        'abbr'   : _attr_value.IMPLIED,
        'rowspan': _attr_value.IMPLIED,
        'colspan': _attr_value.IMPLIED,
        'nowrap' : _attr_value.IMPLIED,
        'bgcolor': _attr_value.IMPLIED,
        'width'  : _attr_value.IMPLIED,
        'height' : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr)
          && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _tfoot = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr);
      });
    },
    _th = function (node) {
      var otherAttrs = {
        'abbr'   : _attr_value.IMPLIED,
        'rowspan': _attr_value.IMPLIED,
        'colspan': _attr_value.IMPLIED,
        'nowrap' : _attr_value.IMPLIED,
        'bgcolor': _attr_value.IMPLIED,
        'width'  : _attr_value.IMPLIED,
        'height' : _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr)
          && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _thead = function (node) {
      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr);
      });
    },
    _tr = function (node) {
      var otherAttrs = {
        'bgcolor': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !_cellhalign.hasOwnProperty(attr) && !_cellvalign.hasOwnProperty(attr)
          && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _ul = function (node) {
      var otherAttrs = {
        'type'   : _attr_value.IMPLIED,
        'compact': _attr_value.IMPLIED
      };

      _defaultElement(node, function (attr) {
        return !_attrs.hasOwnProperty(attr) && !otherAttrs.hasOwnProperty(attr);
      });
    },
    _AnyContent = {
      'a': _a,
      'abbr': _defaultElement,
      'acronym': _defaultElement,
      'address': _defaultElement,
      'area': _area,
      'b': _defaultElement,
      'bdo': _bdo,
      'big': _defaultElement,
      'blockquote': _blockquote,
      'br': _br,
      'caption': _caption,
      'center': _defaultElement,
      'cite': _defaultElement,
      'code': _defaultElement,
      'col': _col,
      'colgroup': _colgroup,
      'dd': _defaultElement,
      'del': _del,
      'dfn': _defaultElement,
      'div': _div,
      'dl': _dl,
      'dt': _defaultElement,
      'em': _defaultElement,
      'en-crypt': _defaultElement,
      'en-media': _defaultElement,
      'en-todo': _defaultElement,
      'font': _font,
      'h1': _h,
      'h2': _h,
      'h3': _h,
      'h4': _h,
      'h5': _h,
      'h6': _h,
      'hr': _hr,
      'i': _defaultElement,
      'img': _img,
      'ins': _ins,
      'kbd': _defaultElement,
      'li': _li,
      'map': _map,
      'ol': _ol,
      'p': _p,
      'pre': _defaultElement,
      'q': _defaultElement,
      's': _defaultElement,
      'samp': _defaultElement,
      'small': _defaultElement,
      'span': _defaultElement,
      'strike': _defaultElement,
      'strong': _defaultElement,
      'sub': _defaultElement,
      'sup': _defaultElement,
      'table': _table,
      'tbody': _tbody,
      'td': _td,
      'tfoot': _tfoot,
      'th': _th,
      'thead': _thead,
      'tr': _tr,
      'tt': _defaultElement,
      'u': _defaultElement,
      'ul': _ul,
      'var': _defaultElement
    },
    _replaceNodeByDIV = function (node) {
      var parent = node.parentNode,
        child,
        newNode;

      newNode = document.createElement("div");

      if (node.hasChildNodes()) {
        for (child = node.firstChild; child; child = child.nextSibling) {
          newNode.appendChild(child);
        }
      }

      if (node.hasAttribute('style')) {
        newNode.setAttribute('style', node.getAttribute('style'));
      }

      if (node.hasAttribute('title')) {
        newNode.setAttribute('title', node.getAttribute('title'));
      }

      parent.replaceChild(newNode, node);
    },
    // dfs walking with the node
    _nextElement = function (node) {
      var element = node.nodeName.toLowerCase(),
        child;

      if (_AnyContent.hasOwnProperty(element)) {
        _AnyContent[element](node);
      } else {
        _replaceNodeByDIV(node);
      }

      if (node.hasChildNodes()) {
        child = node.firstChild;
        while(child){
          if (child.nodeType === 1) {
            _nextElement(child);
          }
          child = child.nextSibling;
        }
      }
    },
    _clean = function (node) {
      _nextElement(node);
    };

  return {
    clean: _clean
  };
})();