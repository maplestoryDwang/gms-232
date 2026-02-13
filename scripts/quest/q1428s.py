#   [Job Adv] (Lv.30)   Cannonneer of the Seven Seas

darkMarble = 4031013
job = "Cannonneer"
monster = "OctoPirate"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.sendNext("通过之前使用火炮的经历，就可以知道火炮手是什么样的职业。火炮手是使用强力的手炮，在远距离对敌人加以猛烈打击的职业。每一次攻击都很强力，可以攻击多个敌人，因此使用起来很方便，也很华丽。真的需要我告诉你火炮手的技能吗？")

sm.sendNext("最重要的当然是基本技能。#b精准炮#k、#b大炮加速#k、#b致命炮火#k是其中的基础。可以使火炮更强、更快、更准确。")

response = sm.sendAskYesNo("但是真正的乐趣在于攻击技能。向前方发射多发小型炮弹的#b强击炮#k，可以一次攻击多个敌人，因此非常有用。")

if response:
    sm.warp(912040000, 0) # Pirate Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("同时还有为和猴子在一起的你专门开发的技能。将装满了炸药的橡木桶滚向敌人的#b猴子炸药桶#k和使用猴子的魔法获得增益效果的#b猴子魔法#k，都是你特有的技能。")
sm.dispose()
