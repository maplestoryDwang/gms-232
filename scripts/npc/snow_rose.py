# Humanoid A
# 2111003
# Magatia (261000000)
# Warps to Where Snow Rose Grows for A Rose from the Snowfield.

snowfieldRose = 3335
snowRoseGrows = 926120300
mayMist = 4000361

if sm.hasQuest(snowfieldRose):
    response = sm.sendAskYesNo("Are you ready to grow the Snow Rose?")
    if response:
        sm.warpInstanceIn(snowRoseGrows, False)
    else:
        sm.sendSayOkay("Remember to bring #bMay Mist#k with you so the Snow Rose can bloom.")
else:
    sm.sendSayOkay("I want to become human. I want to be a human with a warm heart so I can hold her hand. But now...")