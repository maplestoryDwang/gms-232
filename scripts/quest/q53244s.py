# Jett 4th job adv
sm.setSpeakerID(2111007)
sm.sendNext("The Matter Disassembler is done... a little early at that! I suppose I have you to thank for the extra business I'll surely receive.")
if sm.sendAskYesNo("Would you be a lamb and see this through to the end? My client likes to be discreet, as you've seen, and I stand out in a crowd. I believe you would be an excellent candidate for delivering the Matter Disassembler you were so instrumental in building."):
    sm.startQuest(parentID)
    sm.sendNext("That's the entrepreneural spirit! If this goes well, I'll give you a generous cut of the profits. Net, not gross, I have a business to run here.")
    sm.sendSayOkay("Just keep your eyes open and do not drop that thing!")