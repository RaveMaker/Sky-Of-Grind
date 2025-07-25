GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hgim')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('gravitational_implosion_machine', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('hgim')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:quantum_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#################', '#################', '#################', '#################', '#################', '#################', '#######CCC#######', '######CCCCC######', '######CCCCC######', '######CCCCC######', '#######CCC#######', '#################', '#################', '#################', '#################', '#################', '#################')
            .aisle('#################', '########E########', '########E########', '########E########', '########E########', '########E########', '#######AAA#######', '######AABAA######', '#EEEEEABDBAEEEEE#', '######AABAA######', '#######AAA#######', '########E########', '########E########', '########E########', '########E########', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#######CCC#######', '######CCYCC######', '#E####CYDYC####E#', '######CCYCC######', '#######CCC#######', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#######CCC#######', '#######AAA#######', '#######CCC#######', '#################', '#################', '#################', '#######CCC#######', 'CAC###CCYCC###CAC', 'CAC###CYDYC###CAC', 'CAC###CCYCC###CAC', '#######CCC#######', '#################', '#################', '#################', '#######CCC#######', '#######AAA#######', '#######CCC#######')
            .aisle('######CCCCC######', '######AABAA######', '######CCYCC######', '########Y########', '########Y########', '########Y########', 'CAC###CAYAC###CAC', 'CAC###CWWWC###CAC', 'CBYYYYYWBWYYYYYBC', 'CAC###CWWWC###CAC', 'CAC###CAYAC###CAC', '########Y########', '########Y########', '########Y########', '######CCYCC######', '######AABAA######', '######CCCCC######')
            .aisle('######CCCCC######', '#EEEEEABDBAEEEEE#', '#E####CYDYC####E#', '#E#####YDY#####E#', '#E#####YDY#####E#', '#E#####YDY#####E#', 'CAC###CYDYC###CAC', 'CBYYYYYWBWYYYYYBC', 'CDDDDDDBDBDDDDDDC', 'CBYYYYYWBWYYYYYBC', 'CAC###CYDYC###CAC', '#E#####YDY#####E#', '#E#####YDY#####E#', '#E#####YDY#####E#', '#E####CYDYC####E#', '#EEEEEABDBAEEEEE#', '######CCCCC######')
            .aisle('######CCCCC######', '######AABAA######', '######CCYCC######', '########Y########', '########Y########', '########Y########', 'CAC###CAYAC###CAC', 'CAC###CWWWC###CAC', 'CBYYYYYWBWYYYYYBC', 'CAC###CWWWC###CAC', 'CAC###CAYAC###CAC', '########Y########', '########Y########', '########Y########', '######CCYCC######', '######AABAA######', '######CCCCC######')
            .aisle('#######CCC#######', '#######AAA#######', '#######CCC#######', '#################', '#################', '#################', '#######CCC#######', 'CAC###CCYCC###CAC', 'CAC###CYDYC###CAC', 'CAC###CCYCC###CAC', '#######CCC#######', '#################', '#################', '#################', '#######CCC#######', '#######AAA#######', '#######CCC#######')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#################', '########Y########', '#E#####YDY#####E#', '########Y########', '#################', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '#################', '#################', '#################', '#################', '#######CCC#######', '######CCYCC######', '#E####CYDYC####E#', '######CCYCC######', '#######CCC#######', '#################', '#################', '#################', '#################', '########E########', '#################')
            .aisle('#################', '########E########', '########E########', '########E########', '########E########', '########E########', '#######AAA#######', '######AABAA######', '#EEEEEABDBAEEEEE#', '######AABAA######', '#######AAA#######', '########E########', '########E########', '########E########', '########E########', '########E########', '#################')
            .aisle('#################', '#################', '#################', '#################', '#################', '#################', '#######CCC#######', '######CCCCC######', '######CCKCC######', '######CCCCC######', '#######CCC#######', '#################', '#################', '#################', '#################', '#################', '#################')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.blocks('kubejs:fusion_glass_mk2'))
            .where('W', Predicates.blocks('kubejs:large_precision_casing'))
            .where('D', Predicates.blocks('advanced_ae:quantum_alloy_block'))
            .where('E', Predicates.blocks('gtceu:cosmic_tungsten_frame'))
            .where('B', Predicates.blocks('kubejs:fusion_coil_mk2'))
            .where('A', Predicates.blocks('gtceu:electrolytic_cell'))
            .where("C", Predicates.blocks('kubejs:quantum_casing').setMinGlobalLimited(265)
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.EXPORT_FLUIDS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS, PartAbility.INPUT_LASER))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/quantum_casing", 'gtceu:block/multiblock/fusion_reactor')
})