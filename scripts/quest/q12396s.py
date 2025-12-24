# Character potential unlock quest. Used to be only for the 3rd line, got changed to be the initial quest.

pm = sm.getChr().getPotentialMan()
pm.addPotential(pm.generateRandomPotential(1))
pm.addPotential(pm.generateRandomPotential(2))
pm.addPotential(pm.generateRandomPotential(3))
sm.completeQuestNoCheck(12396)
sm.sendSayOkay("Character potential unlocked.")
