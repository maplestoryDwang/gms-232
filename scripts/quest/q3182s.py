#Alcaster's crystal | Lionheart Castle Questline
sm.setSpeakerID(2020005)
if sm.sendAskYesNo("I've delivered #b#p2160000##k's letter to his family. Now, could you do me a favor?"):
    sm.sendNext("The reason #p2160000#'s soul is suffering is because of the curse the Lion King put on #p2160000#. To lift the curse, you must break the link between the Lion King and #p2160000#.")
    sm.sendNext("Take this Crystal. This Crystal contains my magic. Use it where #p2160000# is at to lift Lion King's curse from #p2160000#.")
    if sm.canHold(2430159):
        sm.startQuest(parentID)
        sm.giveItem(2430159)
        sm.warp(211060000)
    else:
        sm.sendSayOkay("I don't think you have enough room in your inventory. please check your inventory again.")