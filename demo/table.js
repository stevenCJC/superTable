require(['jquery','$.handsontable','$.jstree'],function($){
	
	
	var data = [
		{id: 1, name: "Ted", isActive: true, color: "orange", date: "2008-01-01"},
		{id: 2, name: "John", isActive: false, color: "black", date: null},
		{id: 3, name: "Al", isActive: true, color: "red", date: null},
		{id: 4, name: "Ben", isActive: false, color: "blue", date: null},
		{id: 1, name: "Ted", isActive: true, color: "orange", date: "2008-01-01"},
		{id: 2, name: "John", isActive: false, color: "black", date: null},
		{id: 3, name: "Al", isActive: true, color: "red", date: null},
		{id: 4, name: "Ben", isActive: false, color: "blue", date: null},
		{id: 1, name: "Ted", isActive: true, color: "orange", date: "2008-01-01"},
		{id: 2, name: "John", isActive: false, color: "black", date: null},
		{id: 3, name: "Al", isActive: true, color: "red", date: null},
		{id: 4, name: "Ben", isActive: false, color: "blue", date: null},
		{id: 1, name: "Ted", isActive: true, color: "orange", date: "2008-01-01"},
		{id: 2, name: "John", isActive: false, color: "black", date: null},
		{id: 3, name: "Al", isActive: true, color: "red", date: null},
		{id: 4, name: "Ben", isActive: false, color: "blue", date: null}
	];
	
	$('.superTable-table').handsontable({
		data: data,
		minSpareRows: 1,
		//colWidths: [200, 100, 100, 60, 100, 60],
		colHeaders: false,
		contextMenu: true,
		columns: [
			{data: "id", type: 'text'},
			//'text' is default, you don't actually have to declare it
			{data: "name", renderer: yellowRenderer},
			//use default 'text' cell type but overwrite its renderer with yellowRenderer
			{data: "isActive", type: 'text'},
			{data: "date", type: 'date'},
			{data: "color",
				type: 'autocomplete',
				source: ["yellow", "red", "orange", "green", "blue", "gray", "black", "white"]
			}
		],
		cell: [
			{row: 1, col: 0, renderer: greenRenderer}
		],
		cells: function (row, col, prop) {
			if (row === 0 && col === 0) {
				this.renderer = greenRenderer;
			}
		}
	});
	
	
	function yellowRenderer(instance, td, row, col, prop, value, cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		$(td).css({
			//background: 'yellow'
		});
	};
	
	function greenRenderer(instance, td, row, col, prop, value, cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		$(td).css({
			//background: 'green'
		});
	};
	
	
});

