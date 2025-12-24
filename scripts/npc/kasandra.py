# Cassandra





def JumpQuestReward():
    response = "You still need to finish the following jumpquests: \r\n"
    canReceiveReward = True
    if not "zak=1" in sm.getQRValue(9998):
        response += "- Zakum Jumpquest \r\n"
        canReceiveReward = False
    if not "sub1=1" in sm.getQRValue(9998):
        response += "- Subway part 1 Jumpquest \r\n"
        canReceiveReward = False
    if not "sub2=1" in sm.getQRValue(9998):
        response += "- Subway part 2 Jumpquest \r\n"
        canReceiveReward = False
    if not "sub3=1" in sm.getQRValue(9998):
        response += "- Subway part 3 Jumpquest \r\n"
        canReceiveReward = False
    if not "ellinia=1" in sm.getQRValue(9998):
        response += "- Ellinia Jumpquest \r\n"
        canReceiveReward = False
    if not "sleepy=1" in sm.getQRValue(9998):
        response += "- Sleepywood Jumpquest \r\n"
        canReceiveReward = False
    if "receivedRewards" in sm.getQRValue(9998):
        canReceiveReward = False
        sm.sendNext("You have already received the rewards. You can only receive the rewards once.")
        return
    if canReceiveReward:
        sm.sendNext("You have finished all jump quests, congratulations! Here is your one-time reward.")
        if sm.canHold(1142957) and sm.canHold(2435184) and sm.canHold(5204029) and sm.canHold(1702800):
            sm.giveItem(1142957)
            sm.giveItem(2435184)
            sm.giveItem(1702800)
            sm.giveItem(5204029)
            sm.setQRValue(9998, "receivedRewards", "1")
        else:
            sm.sendNext("Please make space in your equip inventory")
    else:
        sm.sendNext(response)




#------------------------------------------------------------------------
selection = sm.sendNext("Hello, #h # \r\nI hope you're enjoying swordie! \r\n#L0#I would like to receive my jump quest reward #l")
if selection == 0:
    JumpQuestReward()
