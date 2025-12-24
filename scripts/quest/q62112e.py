# Just a Little Test 1 (62112)

from net.swordie.ms.enums import InvType

huangZhen = 9310536
zhenLong = 9310532

redBeanPorridge = 4034643
garlic = 4034656

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huangZhen)
sm.sendNext("Hello, stranger. I'd welcome you to Yu Garden, except I'm not sure just yet if you're actually welcome.")
sm.sendNext("If you stay, you'll be eating at my restaurant. I'm the only cook in town. Everyone eats here. "
"If you DON'T eat here, that means you don't eat, and that's trouble. Not for you, though. Someone will probably just kill you.")
sm.sendNext(sm.join(["All right. Now for the hard part. Hold out your hands... Good, good. "
"Take this ", sm.formatInlineItem(redBeanPorridge), " and the ", sm.formatInlineItem(garlic), "... Yes, yes..."]))

if sm.getEmptyInventorySlots(InvType.ETC) >= 2:

    sm.completeQuest(parentID)
    sm.giveExp(170598)
    sm.giveItem(redBeanPorridge)
    sm.giveItem(garlic)
    sm.startQuest(62113)

    sm.setParam(57)
    sm.sendNext("This town is officially weirding me out. You guys are all freaks.")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huangZhen)
    sm.sendNext(sm.join(["Wonderful! You pass! #p", repr(zhenLong), "# can explain everything, "
    "but let me be the first to welcome you to Yu Garden, my fellow human!"]))

    sm.setParam(57)
    sm.sendNext("What in the heck?! That was the dumbest-- You guys are the most-- Ugh! "
    "I can't even talk right now!")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huangZhen)
    sm.sendNext(sm.join(["It'll all make sense when #p", repr(zhenLong), "# explains it to you."]))
else:
    sm.sendNext("Hey, I'm taking those back. Talk to me again after you free up 2 slots in your Etc. inventory.")