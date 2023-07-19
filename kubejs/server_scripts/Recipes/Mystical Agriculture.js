onEvent('recipes', event => {
	event.remove({input: 'mysticalagriculture:uranium_essence'})
	event.shaped('4x immersiveengineering:ingot_uranium', [
		'SSS',
		'S S',
		'SSS'
	], {
		S: 'mysticalagriculture:uranium_essence'
	})
})