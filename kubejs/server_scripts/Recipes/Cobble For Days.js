let waterBuckets = Ingredient.matchAny(['minecraft:water_bucket', Item.of('ceramics:cracked_fluid_clay_bucket', '{fluid:"minecraft:water"}')]);
let lavaBuckets = Ingredient.matchAny(['minecraft:lava_bucket', Item.of('ceramics:cracked_fluid_clay_bucket', '{fluid:"minecraft:lava"}')]);

onEvent('recipes', event => {
	event.remove({output: 'cobblefordays:tier_1'})
	event.shaped('1x cobblefordays:tier_1', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: '#minecraft:logs',
        U: waterBuckets,
        T: lavaBuckets,
        A: 'minecraft:glass'
	})

	event.remove({output: 'cobblefordays:tier_2'})
	event.shaped('1x cobblefordays:tier_2', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: '#forge:cobblestone',
        U: waterBuckets,
        T: lavaBuckets,
        A: 'cobblefordays:tier_1'
	})

    event.remove({output: 'cobblefordays:tier_3'})
	event.shaped('1x cobblefordays:tier_3', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:iron_ingot',
        U: waterBuckets,
        T: lavaBuckets,
        A: 'cobblefordays:tier_2'
	})

    event.remove({output: 'cobblefordays:tier_4'})
	event.shaped('1x cobblefordays:tier_4', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:gold_ingot',
        U: waterBuckets,
        T: lavaBuckets,
        A: 'cobblefordays:tier_3'
	})

    event.remove({output: 'cobblefordays:tier_5'})
	event.shaped('1x cobblefordays:tier_5', [
		'SSS',
		'UAT',
		'SSS'
	], {
		S: 'minecraft:diamond',
        U: waterBuckets,
        T: lavaBuckets,
        A: 'cobblefordays:tier_4'
	})
})