# 140090400
PUTZKI = 1202005

sm.setSpeakerID(PUTZKI)
sm.sendNext("材料都拿来了吗？请稍等。这么混合一样…… \r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i3010062# #t3010062# 1个 \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 95 exp")
sm.giveItem(3010062)
sm.giveExp(95)
sm.completeQuest(parentID)

sm.removeEscapeButton()
sm.sendNext("好了，椅子做好了！嘿嘿！就算是英雄肯定也会有需要歇歇的时候，所以我一直想送你一把椅子。")
sm.sendSay("我想就算是英雄也不能永远活力充沛，肯定也有疲劳、困倦的时候。但真正的英雄是能够克服万难取得最后胜利的。")
sm.tutorAutomatedMsg(19)