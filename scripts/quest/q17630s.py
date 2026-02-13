# [Commerci Republic] Delfino Deleter 5

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("那是…… 什么？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯？这些该死的阿库旁多们！")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("数量真是惊人。那后面又是什么啊。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("就是说，是些见都没见过，听都没听过的家伙。虽然看模样好像很普通。")

sm.setSpeakerID(9390208) # Riverson
sm.sendNext("这些家伙。欺负我们种族的家伙们。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你是谁？欺负这词用得很奇怪！是你们一直在袭击我们商团啊。")

sm.setSpeakerID(9390208) # Riverson
sm.sendNext("我是江河之子。袭击你们是对你们恶行的惩罚。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你说恶行？我们做了什么，为什么你要这么说？")

sm.setSpeakerID(9390208) # Riverson
response = sm.sendAskYesNo("你应该很清楚。我应该不用再跟你浪费口舌了吧。")

if response:
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.completeQuest(17631) # Finish a cutscene quest
    sm.warpInstanceIn(865020061)
else:
    sm.sendSayOkay("... Oh... Okay... Uhh... I will wait for a bit!")
sm.dispose()
