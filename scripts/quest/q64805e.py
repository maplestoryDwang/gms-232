# [NLC] Explosives Strictly Prohibited
# 64805
# Lita Lawless (9201054)

lita = 9201054

nlcCoin = 4310277

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
response = sm.sendAskYesNo("Ah, you're back. Did you manage to get rid of all the Boomers?")
if response:
    if sm.canHold(nlcCoin):
        sm.sendNext("Pretty good, for a rookie.")
        sm.sendNext("You just might be good enough to appoint as a deputy. "
        "I know I can trust you with the cases that might take you out into the Jungle.")
        sm.sendNext("As for compensation, I'll pay you in NLC Coins. "
        "If you go see Spindle, he'll exchange them for some good stuff.")

        sm.giveExp(5457600)
        sm.giveItem(nlcCoin)
        sm.completeQuest(parentID)
    else:
        sm.sendSayOkay("Great. But can you make some room in your Etc. inventory? "
        "There's something I'd like to give you for proving yourself.")