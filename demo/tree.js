require(['jquery','../demo/treedata','$.handsontable','$.jstree'],function($,treedata){
	
	
	$('#jstree').jstree({
				'types':{
						'default':{"valid_children":["default","file"],'icon':''},
						'file' : { 'valid_children':[],'icon':'fa fa-file'}
					},
				"contextmenu":{
					'items' : function(node) {
						var tmp = $.jstree.defaults.contextmenu.items();
						delete tmp.create.action;
						delete tmp.ccp;
						tmp.create.label = "New";
						tmp.create.submenu = {
							"create_folder" : {
								"separator_after": true,
								"label":"Folder",
								"action":function (data) {
									var inst = $.jstree.reference(data.reference),
										obj = inst.get_node(data.reference);
									inst.create_node(obj, { type : "default" }, "last", function (new_node) {
										setTimeout(function () { inst.edit(new_node); },0);
									});
								}
							}
						};
						if(this.get_type(node) === "file") {
							delete tmp.create;
						}
						return tmp;
					}
			},
			'plugins':['state','dnd','types','contextmenu','unique','wholerow',"search"],
			'core': {
				'animation':0,
				"check_callback":true,
				"themes":{
					'responsive' : false
				},
				 'data' : treedata,
			},
		})
	
});

