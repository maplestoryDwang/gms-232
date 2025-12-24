# will_phase1, fieldId 450008150 (Diffraction Hall)
REAL_WILL = 8880300
BLUE_WILL = 8880303
PURPLE_WILL = 8880304

chr.getBossInfo().addMoonlight(50)
sm.invokeAtFixedRate(0, 1000, 0, "incrementMoonlight")

sm.showHP(REAL_WILL)
sm.showHP(BLUE_WILL)
sm.showHP(PURPLE_WILL)