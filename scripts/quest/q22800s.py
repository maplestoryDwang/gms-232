# Kinesis 3rd job adv
sm.setSpeakerID(1531001)
sm.sendNext("What's up, K? Enjoying your little jaunt?")
sm.sendNext("Hey, send me a pic of a monster or something. My fifth monitor needs a new background.")
sm.sendNext("Did you wreck them already? Geez, man...")
if sm.sendAskYesNo("Whatever, I think we can agree that you're ready for the next upgrade. Any objections?"):
    if sm.canHold(1142865) and sm.canHold(1353202):
        sm.giveItem(1142865)
        sm.giveItem(1353202)
        sm.jobAdvance(14211)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("Please have 2 or more free spaces in your EQUIP Inventory.")