# [Root Abyss] Defeat the Third Seal Guardian

ALICIA = 1064002 # npc Id
sm.setSpeakerID(ALICIA)
sm.sendNext("我在画着王冠的门外感觉到了很强的气息。绝对不能放松警惕！")

response = sm.sendAskYesNo("Please take care of the seal guardian behind the crown door?")

if response:
    sm.sendNext("The door with the crown is radiating evil! Better not let your guard down")
    sm.startQuest(parentID)
sm.dispose()
