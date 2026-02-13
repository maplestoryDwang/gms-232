#   [Job Adv] (5th job)   5th Job : Arcane stone of Grandis
from net.swordie.ms.constants import BossConstants

sm.setSpeakerID(1540943)
if not sm.hasQuestCompleted(parentID):
    sm.sendNext("你来啦，陌生人。\r\n\r\n虽然你并不属于我们世界，但如果你愿意守护我们的世界，我肯定会尽全力帮助你的。")
    sm.sendNext("如果你想得到我的帮助，就向我证明你的力量和勇气。你能打败#r麦格纳斯#k吗？")
    sm.startQuest(parentID)
else:
    sm.sendNext("相信你一定可以做到。\r\n\r\n#b（消灭任意难度的麦格纳斯1次，然后回来吧。）#k")
    sm.sendSayOkay("I don't think I have any business with you.")
