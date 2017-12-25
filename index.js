module.exports = {
	type: function (node) { var type = node.type; if (type == 'tag') type = 'element'; return type; },
	name: function (node) { return node.name; },
	data: function (node) { return node.data; },
	attribute: function (node) { return node.attribs || {}; },
	child: function (node) { return node.children || []; }
};
