# Character potential unlock quest. Used to be only for the 3rd line, got changed to be the initial quest.

pm = sm.getChr().getPotentialMan()
pm.addPotential(pm.generateRandomPotential(1))
pm.addPotential(pm.generateRandomPotential(2))
pm.addPotential(pm.generateRandomPotential(3))
sm.completeQuestNoCheck(12396)
sm.sendSayOkay("你好，#b#h0##k。你已经达到50级啦！达到#b30级#k的话，就可以获得特别的力量——#b内在能力#k。现在我就为你解放那种力量。")
