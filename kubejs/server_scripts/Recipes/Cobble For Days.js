onEvent('recipes', event => {
	event.remove({output: 'cobblefordays:tier_2'})
	event.shaped('1x cobblefordays:tier_2', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: '#forge:cobblestone',
        U: 'minecraft:water_bucket',
        T: 'minecraft:lava_bucket',
        A: 'cobblefordays:tier_1'
	})

    event.remove({output: 'cobblefordays:tier_3'})
	event.shaped('1x cobblefordays:tier_3', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:iron_ingot',
        U: 'minecraft:water_bucket',
        T: 'minecraft:lava_bucket',
        A: 'cobblefordays:tier_2'
	})

    event.remove({output: 'cobblefordays:tier_4'})
	event.shaped('1x cobblefordays:tier_4', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:gold_ingot',
        U: 'minecraft:water_bucket',
        T: 'minecraft:lava_bucket',
        A: 'cobblefordays:tier_3'
	})

    event.remove({output: 'cobblefordays:tier_5'})
	event.shaped('1x cobblefordays:tier_5', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:diamond',
        U: 'minecraft:water_bucket',
        T: 'minecraft:lava_bucket',
        A: 'cobblefordays:tier_4'
	})
})