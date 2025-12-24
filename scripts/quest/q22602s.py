# After Shedding 1
# 22602
# Mir (1013000)

dragonMaster = 1142156
scale = 4032502

mir = 1013000

sm.setSpeakerID(mir)
sm.sendNext("Master! Look, I've grown some more.")

sm.setPlayerAsSpeaker()
sm.sendSay("#bOh my! You really grew! Whoa, your voice is even different!")

sm.setSpeakerID(mir)
sm.sendSay("Ahem... Really? Do I sound cool?")

sm.setPlayerAsSpeaker()
sm.sendSay("#bDefinitely! Dragons really do grow in leaps and bounds!")

sm.setSpeakerID(mir)
sm.sendSay("Yep! I shed my old scales and grew new ones. "
"I guess in human terms, it would be something like..."
"buying new clothes as your body grows?")

sm.setPlayerAsSpeaker()
sm.sendSay("#bYour new scales are so shiny and nice.")

sm.setSpeakerID(mir)
sm.sendSay("Yuuup. They are, aren't they?")

sm.setPlayerAsSpeaker()
sm.sendSay("#b(His body's grown but he still talks the same.)")

sm.setSpeakerID(mir)
sm.sendSay("Anyway, master, could you take a look at this?\r\n"
"#i" + repr(scale) + "#\r\n"
"This is one of the scales I shed. For some reason, this one's still shiny. "
"All the others sort of fell apart. I feel like this scale still carries my strength in it. "
"Do you think we could use it for something?")

sm.setPlayerAsSpeaker()
sm.sendSay("#bHmm, maybe.")

sm.setSpeakerID(mir)
sm.sendSay("Yippee! Humans don't have horns, scales, or claws like Dragons do, "
"but they do have the ability to make useful things! "
"That scale is extremely sturdy and carries my strength with it, "
"so it will make you that much more powerful, master!")

sm.setPlayerAsSpeaker()
sm.sendSay("#bMir, you are awesome. When did you start thinking like that?")

sm.setSpeakerID(mir)
sm.sendSay("Ahem. It's not like I was born yesterday. "
"I know a whole lot about humans now.")

response = sm.sendAskYesNo("Here you go, master. Take my scale. I know you'll be able to make something really great with it!")
if response:
    if sm.canHold(dragonMaster):
        sm.giveItem(dragonMaster)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
        
        sm.setPlayerAsSpeaker()
        sm.sendSayOkay("#b(You received #p" + repr(mir) + "#'s dragon scale. "
        "As you place your hand on the dragon scale, it magically transforms into #i" + repr(dragonMaster) + "#.)")
    else:
        sm.sendSayOkay("Master, wait! Make some room in your Equip inventory first!")