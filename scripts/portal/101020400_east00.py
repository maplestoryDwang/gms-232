# 101020400

sm.warp(101020401, 10)
sm.dispose()


if sm.sendAskYesNo("Would you like to enter?"):
    sm.warpInstance(floor1Id, True, 0, True)
    sm.setInstanceTimer(totalOzTime, ozEntranceFieldId)