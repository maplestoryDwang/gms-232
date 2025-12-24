# [Required] Hero's Succession
# 22300
# Mir (1013000)

echo = 20011005
heroSuccessor = 1142158

mir = 1013000

sm.setSpeakerID(mir)
sm.sendNext("Master, master, look at this. There's something wrong with one of my scales!")

sm.setPlayerAsSpeaker()
sm.sendSay("That's...?! \r\n\r\n"
"Mir, one of your scales is showing the #bOnyx Dragon's Mark#k!")

sm.setSpeakerID(mir)
sm.sendSay("Really? That's weird... \r\n\r\n"
"Oh, I know! Then that means it's time.")

sm.setPlayerAsSpeaker()
sm.sendSay("It's time?")

sm.setSpeakerID(mir)
sm.sendSay("It's time for us to inherit Freud and Afrien's powers. "
"We've gotten very strong lately. And master's spirit is growing too...")

sm.setPlayerAsSpeaker()
sm.sendSay("Huh? Really?")

sm.setSpeakerID(mir)
sm.sendSay("You didn't know that? An Onyx Dragon responds to a strong spirit, "
"so I've been feeling that every day. It's not particularly strong unlike with the previous Dragon Masters, "
"but we'll be able to match them someday. \r\n\r\n"
"Ah, the scale fell off.")

sm.setPlayerAsSpeaker()
sm.sendSay("But the scale is still shining.")

sm.setSpeakerID(mir)
response = sm.sendAskAccept("Master, take this scale. It feels like I've shed something to take another step forward.")
if response:
    if sm.canHold(heroSuccessor):
        sm.giveSkill(echo)
        sm.giveItem(heroSuccessor)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)

        sm.setPlayerAsSpeaker()
        sm.sendNext(sm.join(["(You received #p", repr(mir), "#'s dragon scale. "
        "As you place your hand on the scale, it magically transforms into #i", repr(heroSuccessor), "#.)"]))
        sm.sendSay("(You have learned #b#q" + repr(echo) + "##k.)")
        sm.sendSay("Yay, a new skill! Now I really look like Freud's true successor!")

        sm.setSpeakerID(mir)
        sm.sendPrev("Hehe. Congratulations, master. Let's keep on growing to surpass our predecessors!")
    else:
        sm.sendSayOkay("Master, make some space in your Equip inventory first.")