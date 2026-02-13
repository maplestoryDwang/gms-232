# 21303 - [Job Adv] (Lv.60)   Aran
sm.setSpeakerID(1203001)
sm.sendNext("呜呜～#p1203001#很难过。#p1203001#很生气。#p1203001#很想哭……呜呜呜呜～")
sm.setPlayerAsSpeaker()
sm.sendNext("怎、怎么了？")
sm.setSpeakerID(1203001)
sm.sendNext("#p1203001#做好了宝石。#b像苹果一样的红宝石#k。结果#r小偷#k却把宝石给偷走了。#p1203001#宝石没了。#p1203001#好难过……")
sm.setPlayerAsSpeaker()
sm.sendNext("你说小偷偷走了红宝石？")
sm.setSpeakerID(1203001)
if sm.sendAskYesNo("对。必须找回#p1203001#宝石。你要是能帮我找回#p1203001#宝石，我会好好答谢你的。要是帮我抓到小偷，我也会答谢你的。"):
    sm.startQuest(parentID)
    sm.sendNext("小偷往那个方向去了。那个方向是……吃饭的手是右手，不吃饭的手是左手……#b左边#k！往左边去就能抓到小偷。")
    sm.dispose()
else:
    sm.dispose()