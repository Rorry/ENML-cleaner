QUnit.test("simple test", function (assert) {
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

QUnit.test('test code block', function (assert) {
  var testNode = document.getElementById('test-code1'),
    lc1 = document.getElementById('L1'),
    lc232 = document.getElementById('LC232');

  ENML_Cleaner.clean(testNode);

  assert.ok(testNode.attributes.length === 1, 'testNode attributes must have only style attribute');
  assert.ok(lc1.attributes.length === 0, 'lc1 attributes must be empty');
  assert.ok(lc232.attributes.length === 0, 'lc232 attributes must be empty');
});

