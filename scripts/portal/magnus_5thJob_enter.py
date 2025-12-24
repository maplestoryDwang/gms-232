# Grandis Goddess' Test Heliseum Heights Entry
# 940100100
# This is a portal that should lets you go into the magnus 5th job fight.

sm.setSpeakerID(3001032)
if sm.hasQuest(1463):
    if sm.sendAskYesNo("Are you ready to move to the Tyrant's Throne and challenge Magnus?"):
        sm.warpInstanceIn(940100200, False)
        sm.setInstanceTime(30*60) # 30 Minute fight
        sm.setDeathCount(5)
else:
    sm.chat("You should go see the Grandis Goddess.")
