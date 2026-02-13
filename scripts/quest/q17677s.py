# id 17677 ([Commerci Republic] Back to Lith Harbor), field 865000000
sm.setSpeakerID(9390256) # Leon Daniella
res = sm.sendAskYesNo("已经做好了远行的准备了吗。行李都带好了吧？那就出发吧？")
sm.sendNext("出发吧！目的地是明珠港！")
sm.startQuest(parentID)
sm.warp(104000000)
