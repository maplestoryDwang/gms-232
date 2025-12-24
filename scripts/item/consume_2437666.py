# Kritias Research Journal  |  (2437666)
if sm.hasQuest(34259):
    sm.setSpeakerID(3003400)
    sm.sendNext("Please help me....")
    sm.setQRValue(34259, "paper=4", True)
    sm.consumeItem(parentID)
else:
    sm.chat("You aren't on the proper quest to open this.")
