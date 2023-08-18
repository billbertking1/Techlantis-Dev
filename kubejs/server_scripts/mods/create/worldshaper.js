ServerEvents.recipes(e => {
  e.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
    'CPU',
    'RIP',
    'ORC'
  ], {
    C: 'create:andesite_alloy',
    P: 'minecraft:prismarine_crystals',
    R: 'mekanism:pellet_antimatter',
    I: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
    O: 'create:extendo_grip',
    U: 'kubejs:refined_astral_radiance'
  })
})