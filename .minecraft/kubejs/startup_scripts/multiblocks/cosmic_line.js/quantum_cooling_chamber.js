GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('quantum_cooling_chamber')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('quantum_cooling_chamber', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('quantum_cooling_chamber')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('gtceu:frostproof_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('###CCC###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###CCC###')
        .aisle('#CCCCCCC#', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '#CCCCCCC#')
        .aisle('#CCCCCCC#', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '#CCCCCCC#')
        .aisle('CCCCCCCCC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', '#DB#A#BD#', '#DB#A#BD#', '#DB#A#BD#', '#DB#A#BD#', '#DB#A#BD#', '#DB#A#BD#', '#DB#A#BD#', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CEB###BEC', 'CCCCCCCCC')
        .aisle('#CCCCCCC#', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '##BBBBB##', '#CCCCCCC#')
        .aisle('#CCCCCCC#', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '###EDE###', '#CCCCCCC#')
        .aisle('###CKC###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###C#C###', '###CCC###')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks('antiblocksrechiseled:bright_white'))
            .where("E", Predicates.blocks('kubejs:conductive_glass'))
            .where("D", Predicates.blocks('gtceu:heat_vent'))
            .where("B", Predicates.blocks('kubejs:quantum_casing'))
            .where("C", Predicates.blocks('gtceu:frostproof_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_frost_proof", 'gtceu:block/multiblock/generator/large_plasma_turbine')
})