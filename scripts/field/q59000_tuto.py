# Arboren : Stump Town

if not sm.hasQuest(59000): # The Town Prankster
    if not sm.hasQuestCompleted(59000): # The Town Prankster
        sm.removeEscapeButton()
        if sm.sendAskYesNo("Would you like to skip the tutorial cutscenes?"):
            #todo add after skipping tutorial
            sm.warp(866000000)
            sm.addLevel(10 - sm.getChr().getLevel())
            sm.giveSkill(110001510, 1, 1)  # Critter Select
            sm.giveSkill(110001501, 1, 1)  # Bear
            sm.giveSkill(110001502, 1, 1)  # Leopard
            sm.giveSkill(110001503, 1, 1)  # Hawk
            sm.giveSkill(110001504, 1, 1)  # Cat
            sm.giveSkill(110001514, 1, 1)  # Homeward Bound
            sm.giveSkill(110001511, 30, 30)  # Maple Guardian
            sm.giveSkill(110001506, 1, 1)  # Guardian Leap
            sm.setSTR(4)
            sm.setINT(4)
            sm.setDEX(4)
            sm.setLUK(4)
            sm.setAP(4 + chr.getLevel() * 5)
            sm.dispose()
        else:
            sm.setPlayerAsSpeaker()
            sm.sendNext("Dun, dun, dun. Hero theme song! I'm #h #, I'm from a town hidden deeep within Arboren Forest!")
            sm.sendNext("I've got the coolest ears and tail, dun dun dun. They're super heroic, dun dun dun.")
            sm.sendNext("And I'm gonna be a hero somedaaaaay. A hero somedaaaaay! Drumroll!")
            sm.sendNext("For reals. Granny Rosanna tells me bedtime stories every night...")
            sm.sendNext("Stories about the #bfive brave heroes#k, who sealed away the terrifying #bBlack Mage#k! \r\n Pew, pew, kaboom! I'm gonna be a hero just like 'em someday soon!")
            sm.setSpeakerID(9390305)
            #todo effects
            sm.sendNext("Who'd dig a hole here!?")
            sm.setPlayerAsSpeaker()
            sm.sendNext("Uh oh, what's this? I smell... the need for a Hero!")
            sm.startQuest(59000)
            sm.dispose()