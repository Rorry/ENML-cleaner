QUnit.test("simple test", function ( assert ) {
  var node = document.createElement('div'),
    child = document.createElement('pre');

  node.setAttribute('id', 'div1');
  node.setAttribute('class', 'class1');

  child.setAttribute('class', 'class2');

  node.appendChild(child);

  ENML_Cleaner.clean(node);

  assert.ok(node.attributes.length === 0, 'div attributes must be empty');
  assert.ok(child.attributes.length === 0, 'pre attributes must be empty');
});
