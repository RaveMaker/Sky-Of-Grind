GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##COC##', '##GAG##', '##GAG##', '##GAG##', '##GAG##', '##CCC##')
            .aisle('#CFFFC#', '#C###C#', '#G###G#', '#G###G#', '#G###G#', '#CGGGC#')
            .aisle('CFFFFFC', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'CGGGGGC')
            .aisle('CFFZFFC', 'A#####A', 'A#####A', 'A#####A', 'A#####A', 'CGGGGGC')
            .aisle('CFFFFFC', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'CGGGGGC')
            .aisle('#CFFFC#', '#G###G#', '#G###G#', '#G###G#', '#G###G#', '#CGGGC#')
            .aisle('##ANA##', '##AKA##', '##GAG##', '##GAG##', '##GAG##', '##CCC##')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('moss_block')
                .or(Predicates.blocks('dirt'))
                .or(Predicates.blocks('grass_block'))
            )
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('Z', Predicates.blocks('chipped:smooth_glowstone')
            .or((Predicates.blocks('rechiseled:glowstone_smooth')))
            .or((Predicates.blocks('rechiseled:glowstone_smooth_connecting'))))
            .where('C', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))           
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor')
})