# [Commerci Republic] Neinheart's Call

sm.setSpeakerID(1064026) # Neinheart
response = sm.sendAskYesNo("你这段时间过得还好吗？女皇正在找你。你能来圣地吗？\r\n#b(接受时立刻前往圣地。)#k")


if response:
    sm.sendNext("那我就在圣地等着你。")
else:
    sm.sendSayOkay("Let me know once you are ready.")
    sm.dispose()

sm.startQuestNoCheck(parentID)
sm.warp(130000000, 0)
sm.dispose()