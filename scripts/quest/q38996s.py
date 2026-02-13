# 410000002
MOONBEAM = 3002100

sm.setSpeakerID(MOONBEAM)
sm.sendNext("你已经在狐神的庇护下，得到了精灵的力量，也将因而获得新的技能。查看一下你的技能窗吧。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("缩地…………精灵凝聚…………从没见过这种技能。")

sm.setSpeakerID(MOONBEAM)
sm.sendSay("这样的技能对于行动缓慢外加力量虚弱的隐月来说是非常必要的！好的，我会教你如何使用，准备好的话就再和我说话吧！")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(916)


