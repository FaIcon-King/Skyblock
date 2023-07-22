onEvent('recipes', event => {
	event.remove({output: 'exnihilothermal:basalz_doll'})
	event.shaped('1x exnihilothermal:basalz_doll', [
		'SUS',
		'TAT',
		'SLS'
	], {
		S: '#forge:dusts/obsidian',
        U: 'minecraft:redstone',
        T: 'minecraft:glowstone_dust',
        A: 'exnihilosequentia:crafting_doll',
        L: 'minecraft:nether_wart'
	})
})