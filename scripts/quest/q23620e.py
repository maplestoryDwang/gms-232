# [Skill] A Warm(er) Welcome (23620)
# 23620
# Claudine (2151003)

echo = 30021005
lastOneHome = 1142579

claudine = 2151003
belle = 2151002
brighton = 2151001
elex = 2151000
checky = 2151004

if sm.canHold(lastOneHome):
    sm.setPlayerAsSpeaker()
    sm.sendNext("What is it, Claudine?")

    sm.setSpeakerID(claudine)
    sm.sendSay("It's nothing urgent, but...")

    sm.setSpeakerID(belle)
    sm.sendSay("When you arrived in Edelstein, there was no time for pleasantries. "
    "Now that things have settled down a little, I thought we should welcome you "
    "like we would welcome any other member of our family.")

    sm.setSpeakerID(brighton)
    sm.sendSay("It's just a little welcome...")

    sm.setSpeakerID(elex)
    sm.sendSay("Don't get too excited. "
    "I just want to make sure you were introduced to everybody.")

    sm.setSpeakerID(checky)
    sm.sendSay("I always feel so weird doing this kind of stuff...")

    sm.setSpeakerID(belle)
    sm.sendSay("Checky! What are you talking about? We're part of the same team!")

    sm.setSpeakerID(checky)
    sm.sendSay("I'm not technically an original member of this group and...")

    sm.setSpeakerID(brighton)
    sm.sendSay("Hey. We're here to welcome #h #. So get over it.")

    sm.setPlayerAsSpeaker()
    sm.sendSay("Hahaha... Thank you all.")
    sm.sendSay("(Wait, something feels strange.)")
    sm.sendSay("(For some reason, I feel like #rthis has happened before#k...)")

    sm.setSpeakerID(claudine)
    sm.sendSay("Something wrong, #h #? You wandered off there.")

    sm.setPlayerAsSpeaker()
    sm.sendSay("Oh, it's nothing.")

    sm.setSpeakerID(claudine)
    sm.sendSay(sm.join(["All right. Well, we got you a little gift. I mean, sort of. "
    "It'll teach you a new skill. I hope you'll use this as your new source of power when things get dark. \r\n\r\n"
    "#fUI/UIWindow2.img/QuestIcon/4/0# \r\n\r\n"
    "#s", repr(echo), "# #q", repr(echo), "#\r\n",
    sm.formatInlineItem(lastOneHome)]))

    if sm.hasQuest(parentID):
        sm.completeQuest(parentID)
        sm.giveSkill(echo)
        sm.giveItem(lastOneHome)
    
    sm.sendPrev("Thank you for helping Edelstein. Everyone here is glad you're back.")
else:
    sm.setSpeakerID(claudine)
    sm.sendSayOkay("Please make room in your Equip inventory.")