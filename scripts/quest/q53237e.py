# Jett 2nd job adv
sm.setSpeakerID(9270091)
sm.sendSayOkay("You have returned with the Blue Ore and more than a few stab wounds. Well done.")
sm.sendSayOkay("Give met the core and I will apply this experimental barrier. If I explode during the application, please tell the world how skilled I was.")

sm.sendNext("The #bBlue Ore#k is almost done breaking down, assuming it does not blow up and eradicate this sector. Please be patient... and pray for a long life.")
if sm.sendAskYesNo("I knew my numerations were correct. Give me the core fragment. It's time for a new outer shell."):
    item = chr.getEquippedInventory().getItemBySlot(11) # Primary
    if item is not None:
        chr.consumeItem(item)
        sm.giveAndEquip(1492140)
        sm.completeQuest(parentID)
        sm.startQuest(53238)
        sm.completeQuest(53238)
        sm.jobAdvance(570)
        sm.consumeItem(4033251, 30)