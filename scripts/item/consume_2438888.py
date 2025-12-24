# Russellon's Pill
# 2438888
# Used for clearing [Magatia's Secret] Life Alchemy, and the Missing Alchemist.

lifeAlchemyMissing = 3314

sm.setPlayerAsSpeaker()
if sm.hasQuest(lifeAlchemyMissing):    
    response = sm.sendAskYesNo("It looks like an ordinary potion. Russellon told you to take one before coming... \r\n"
    "Should you take a sip?")
    if response:
        sm.consumeItem()
        sm.setQRValue(lifeAlchemyMissing, "a=1")
        sm.sendSayOkay("This potion makes you feel a little queasy. \r\n"
        "You should get back to #bRussellon#k.")
elif sm.hasQuestCompleted(lifeAlchemyMissing):
    sm.sendSayOkay("I'm not taking that pill again!")
else:
    sm.sendSayOkay("This pill looks suspicious... Best not to take it if you don't know what it does.")