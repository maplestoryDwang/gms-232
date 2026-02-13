# 22000 |   Strange dream (Evan intro)
sm.setSpeakerID(1013100)
sm.sendNext("醒了吗，小不点？")
sm.setPlayerAsSpeaker()
sm.sendNext("#b嗯……妈妈也醒了吗？")
sm.setSpeakerID(1013100)
sm.sendNext("嗯……但是你怎么好像没睡着呢？昨天晚上打了一夜的雷。所以才没睡好吗？")
sm.setPlayerAsSpeaker()
sm.sendNext("#b不，不是因为那个，是因为做了一个奇怪的梦。")
sm.setSpeakerID(1013100)
sm.sendNext("奇怪的梦？梦见了什么呢？")
sm.setPlayerAsSpeaker()
sm.sendNext("#b(说明梦见在迷雾中遇到龙的事情。)")
sm.sendNext("呵呵呵呵，龙？怎么会梦到这个呢？没被吃掉，真是太好了。你做了个有趣的梦，去告诉#p1013101#吧。他一定会很高兴的。")
sm.setSpeakerID(1013100)
if sm.sendAskYesNo("#b#p1013101##k去#b#m100030102##k给猎犬喂饭了。从家里出去就能见到他了。"):
    sm.startQuest(22000)
    sm.sendNext("#bUtah#k wen to the #b Front Yard#k to feed the Bull Dog. You'll see him right outside.")
    sm.dispose()
else:
    sm.dispose()


