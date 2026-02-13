#   [Job Adv] (5th job)   5th Job : Record of power

sm.setSpeakerID(2140001)
if sm.sendAskYesNo("三块神秘石会引导你找到新的力量。"):
    sm.startQuest(parentID)
    sm.sendSayOkay("好了，请闭上眼睛。我会在你的力量中唤醒新的潜力。\r\n\r\n#b（点击确认时，完成5转）")
    sm.dispose()

    #todo add quest completion of 1474 1475 and 1476 to arcane stones