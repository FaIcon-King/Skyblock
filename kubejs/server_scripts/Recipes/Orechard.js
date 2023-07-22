onEvent('recipes', event => {
    // cottonwood
    event.remove({output: 'orechards:cottonwood_sapling'})
    event.smithing('orechards:cottonwood_acorn', 'delightful:acorn', 'exnihilosequentia:silkworm')
    event.shaped('1x orechards:cottonwood_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:cottonwood_acorn',
        A: 'minecraft:oak_sapling'
	})
    
    // dirt
	event.shaped('1x orechards:dirt_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'minecraft:dirt',
        A: 'delightful:acorn'
	})

    // petrified
    event.shaped('1x orechards:petrified_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:stone_pebble',
        A: 'delightful:acorn'
	})

    // iron
    event.shaped('1x orechards:iron_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:iron_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:iron_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:iron_acorn',
        A: 'orechards:clay_sapling'
	})

    // gold 
    event.shaped('1x orechards:gold_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:gold_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:gold_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:gold_acorn',
        A: 'orechards:iron_sapling'
	})

    // tin
    event.shaped('1x orechards:tin_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:tin_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:tin_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:tin_acorn',
        A: 'orechards:iron_sapling'
	})
    event.shaped('1x thermal:tin_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:tin_acorn'
	})

    // lead
    event.shaped('1x orechards:lead_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:lead_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:lead_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:lead_acorn',
        A: 'orechards:iron_sapling'
	})
    event.shaped('1x thermal:lead_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:lead_acorn'
	})
    
    // nickel
    event.shaped('1x orechards:nickel_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:nickel_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:nickel_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:nickel_acorn',
        A: 'orechards:iron_sapling'
	})
    event.shaped('1x thermal:nickel_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:nickel_acorn'
	})

    // silver
    event.shaped('1x orechards:silver_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:silver_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:silver_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:silver_acorn',
        A: 'orechards:iron_sapling'
	})
    event.shaped('1x thermal:silver_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:silver_acorn'
	})

    // osmium
    event.shaped('1x orechards:osmium_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilomekanism:osmium_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:osmium_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:osmium_acorn',
        A: 'orechards:iron_sapling'
	})
    event.shaped('1x mekanism:ingot_osmium', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:osmium_acorn'
	})

    // copper
    event.shaped('1x orechards:copper_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'exnihilosequentia:copper_pieces',
        A: 'delightful:acorn'
	})
    event.shaped('1x orechards:copper_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:copper_acorn',
        A: 'orechards:iron_sapling'
	})

    // coal
    event.smelting('orechards:coal_acorn', 'delightful:acorn')
    event.shaped('1x orechards:coal_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:coal_acorn',
        A: 'minecraft:oak_sapling'
	})
    
    // lapis
    event.shaped('1x orechards:lapis_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'minecraft:blue_dye',
        A: 'orechards:iron_acorn'
	})
    event.shaped('1x orechards:lapis_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:lapis_acorn',
        A: 'orechards:iron_sapling'
	})

    // redstone
    event.remove({output: 'orechards:redstone_sapling'})
    event.shaped('1x orechards:redstone_acorn', [
		' S ',
		'SAS',
		' S '
	], {
		S: 'minecraft:red_dye',
        A: 'orechards:iron_acorn'
	})
    event.shaped('1x orechards:redstone_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:redstone_acorn',
        A: 'orechards:iron_sapling'
	})

    // diamond
    event.remove({output: 'orechards:diamond_sapling'})
    event.shaped('1x orechards:diamond_acorn', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:coal_resin',
        A: 'orechards:lapis_acorn'
    })
    event.shaped('1x orechards:diamond_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:diamond_acorn',
        A: 'orechards:lapis_sapling'
    })

    // netherrack
    event.blasting('orechards:netherrack_acorn', 'orechards:gold_acorn')
    event.shaped('1x orechards:netherrack_sapling', [
		'SSS',
		'SAS',
		'SSS'
	], {
		S: 'orechards:netherrack_acorn',
        A: 'orechards:gold_sapling'
	})

    // moreium
    event.shaped('1x orechards:moreium_acorn', [
        ' T ',
        'SAS',
        ' T '
    ], {
        S: 'orechards:lapis_resin',
        A: 'delightful:acorn',
        T: 'orechards:redstone_resin'
    })
    event.shaped('1x orechards:moreium_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:moreium_acorn',
        A: 'orechards:lapis_sapling'
    })
    event.shaped('1x minecraft:amethyst_shard', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:moreium_acorn'
	})

    // emerald
    event.shaped('1x orechards:emerald_acorn', [
        'STS',
        'TAT',
        'STS'
    ], {
        S: 'orechards:lapis_resin',
        A: 'orechards:diamond_acorn',
        T: 'orechards:gold_resin'
    })
    event.shaped('1x orechards:emerald_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:emerald_acorn',
        A: 'orechards:diamond_sapling'
    })
    event.shaped('1x minecraft:emerald', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:emerald_acorn'
	})

    // netherite
    event.shaped('1x orechards:netherite_acorn', [
        'STS',
        'TAT',
        'STS'
    ], {
        S: 'orechards:netherrack_resin',
        A: 'orechards:diamond_acorn',
        T: 'orechards:gold_resin'
    })
    event.shaped('1x orechards:netherite_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:netherite_acorn',
        A: 'orechards:diamond_sapling'
    })
    event.shaped('1x minecraft:netherite_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:netherite_acorn'
	})

	// cobalt
	event.shaped('1x orechards:cobalt_acorn', [
        'STS',
        'TAT',
        'STS'
    ], {
        S: 'orechards:netherrack_resin',
        A: 'orechards:iron_acorn',
        T: 'orechards:lapis_resin'
    })
    event.shaped('1x orechards:cobalt_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:cobalt_acorn',
        A: 'orechards:iron_sapling'
    })
    event.shaped('1x tconstruct:cobalt_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:cobalt_acorn'
	})

	// quartz
	event.shaped('1x orechards:quartz_acorn', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: 'orechards:netherrack_resin',
        A: 'orechards:moreium_acorn'
    })
    event.shaped('1x orechards:quartz_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:quartz_acorn',
        A: 'orechards:moreium_sapling'
    })
    event.shaped('1x minecraft:quartz', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:quartz_acorn'
	})

	// prosperity
	event.shaped('1x orechards:prosperity_acorn', [
        'TST',
        'SAS',
        'TST'
    ], {
        S: 'orechards:diamond_resin',
        A: 'orechards:emerald_acorn',
        T: 'mysticalagriculture:prosperity_shard'
    })
    event.shaped('1x orechards:prosperity_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:prosperity_acorn',
        A: 'orechards:emerald_sapling'
    })
    event.shaped('1x mysticalagriculture:prosperity_shard', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:prosperity_acorn'
	})

	// manyullyn
	event.shaped('1x orechards:manyullyn_acorn', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: 'orechards:cobalt_resin',
        A: 'orechards:netherite_acorn'
    })
    event.shaped('1x orechards:manyullyn_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:manyullyn_acorn',
        A: 'orechards:netherite_sapling'
    })
    event.shaped('1x tconstruct:manyullyn_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:manyullyn_acorn'
	})

	// glowstone
	event.shaped('1x orechards:glowstone_acorn', [
        'STS',
        'TAT',
        'STS'
    ], {
        S: 'orechards:netherrack_resin',
        A: 'orechards:gold_acorn',
        T: 'orechards:quartz_resin'
    })
    event.shaped('1x orechards:glowstone_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:glowstone_acorn',
        A: 'orechards:gold_sapling'
    })

	// hepatizon
	event.shaped('1x orechards:hepatizon_acorn', [
        'STS',
        'TAT',
        'STS'
    ], {
        S: 'orechards:copper_resin',
        A: 'orechards:cobalt_acorn',
        T: 'orechards:quartz_resin'
    })
    event.shaped('1x orechards:hepatizon_sapling', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'orechards:hepatizon_acorn',
        A: 'orechards:cobalt_sapling'
    })
    event.shaped('1x tconstruct:hepatizon_ingot', [
		'SSS',
		'SSS',
		'SSS'
	], {
		S: 'orechards:hepatizon_acorn'
	})
})