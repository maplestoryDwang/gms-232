# Alcaster's crystal
if not sm.getFieldID() == 211060400:
    sm.chat("You are not in the correct map to use this item")
else:
    sm.setSpeakerID(2160000)
    sm.consumeItem()
    sm.removeEscapeButton()
    sm.sendNext("Oh. It's you, did you deliver my letter to Alcaster?")
    sm.sendNext("What? The curse has been broken? Amazing!")
    sm.sendNext("You weren't kidding... I'm not cold anymore. I'm not in pain either! I can move freely! Ha ha ha ha! Thanks a lot!")
    sm.sendNext("I owe Alcaster big! And you, too. As a token of my gratitude I'll give you a #bpiece of equipment#k or a #bweapon#k I found in this castle, if you bring me the #bNoble Lion King Medal#k or #bRoyal Lion King Medal#k.")
    sm.completeQuest(3182)