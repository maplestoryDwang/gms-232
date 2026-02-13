# [Commerci Republic] Delfinos? More like dead Fishos
from net.swordie.ms.constants import WzConstants

COMMERCI_SUIT = 1052673
expGiven = 530255
sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("统帅，我不是轻视凯梅尔兹的实力。只是，作为#b莱文的朋友#k，我想出点力而已。请你再考虑下吧。")

sm.setSpeakerID(9390203) # Gilberto Daniella
sm.sendNext("嗯……既然你都这么说了……好吧，那就这样吧。看来是我想得太多了。请你现在就去追上莱文吧。他应该还没跑多远。希望你帮助那孩子一起击退阿库旁多吧。")

sm.sendNext("而且，这个也请你拿着吧。这能帮助你。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1052799# #t1052799#\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n530255 exp")

sm.giveExp(expGiven) # Give Exp
sm.giveItem(COMMERCI_SUIT) # Give Commerci Suit
sm.completeQuest(parentID)
sm.dispose()
