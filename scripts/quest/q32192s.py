# [Riena Strait] A Warrior's Pride

PUTAN = 1510000

sm.setSpeakerID(PUTAN)
response = sm.sendAskYesNo("看来咱们得到魔女芭芭拉的家去一趟。嗯……希望勇士你也可以一起去。\r\n\r\n#b#e(接受时，将自动移动。)#n#k")

if response:
    sm.warpInstanceIn(141040003, 0)
    sm.createQuestWithQRValue(parentID, "1")