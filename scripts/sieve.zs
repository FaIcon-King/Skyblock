import mods.exnihilosequentia.ZenSieveRecipe;

<recipetype:exnihilosequentia:sieve>
    .create("prosperity")
    .setInput(<item:minecraft:sand>)
    .addDrop(<item:mysticalagriculture:prosperity_shard>)
    .addRoll("iron", 0.05)
    .addRoll("diamond", 0.1)
    .addRoll("netherite", 0.15);