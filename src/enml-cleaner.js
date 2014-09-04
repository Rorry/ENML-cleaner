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
    };


  var _defaultElement = function (node) {
      var n = node.attributes.length,
        attr, i;

      if (node.hasAttributes()) {
        for (i = n - 1; i >= 0; i--) {

          attr = node.attributes[i].name;

          if (!_attrs.hasOwnProperty(attr)) {
            node.removeAttribute(attr);
          }
        }
      }
    },
    _AnyContent = {
      'a': _defaultElement,
      'abbr': _defaultElement,
      'acronym': _defaultElement,
      'address': _defaultElement,
      'area': _defaultElement,
      'b': _defaultElement,
      'bdo': _defaultElement,
      'big': _defaultElement,
      'blockquote': _defaultElement,
      'br': _defaultElement,
      'caption': _defaultElement,
      'center': _defaultElement,
      'cite': _defaultElement,
      'code': _defaultElement,
      'col': _defaultElement,
      'colgroup': _defaultElement,
      'dd': _defaultElement,
      'del': _defaultElement,
      'dfn': _defaultElement,
      'div': _defaultElement,
      'dl': _defaultElement,
      'dt': _defaultElement,
      'em': _defaultElement,
      'en-crypt': _defaultElement,
      'en-media': _defaultElement,
      'en-todo': _defaultElement,
      'font': _defaultElement,
      'h1': _defaultElement,
      'h2': _defaultElement,
      'h3': _defaultElement,
      'h4': _defaultElement,
      'h5': _defaultElement,
      'h6': _defaultElement,
      'hr': _defaultElement,
      'i': _defaultElement,
      'img': _defaultElement,
      'ins': _defaultElement,
      'kbd': _defaultElement,
      'li': _defaultElement,
      'map': _defaultElement,
      'ol': _defaultElement,
      'p': _defaultElement,
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
      'table': _defaultElement,
      'tbody': _defaultElement,
      'td': _defaultElement,
      'tfoot': _defaultElement,
      'th': _defaultElement,
      'thead': _defaultElement,
      'tr': _defaultElement,
      'tt': _defaultElement,
      'u': _defaultElement,
      'ul': _defaultElement,
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