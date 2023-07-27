onEvent('recipes', event => {
    event.smithing('ae2:calculation_processor_press', 'minecraft:iron_block', 'ae2:certus_quartz_crystal')
    event.smithing('ae2:engineering_processor_press', 'minecraft:iron_block', 'minecraft:diamond')
    event.smithing('ae2:logic_processor_press', 'minecraft:iron_block', 'minecraft:gold_ingot')
    event.smithing('ae2:silicon_press', 'minecraft:iron_block', '#forge:silicon')
})