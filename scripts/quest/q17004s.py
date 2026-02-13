# id 17004 ([Commerci] Making a Buck), field 865000001

from net.swordie.ms.constants import ItemConstants

sm.setSpeakerID(9390220) # Maestra Fiametta
sm.sendNext("只剩下一张合同了。你的运气真好。好了，现在我告诉你一些关系贸易的事情。")
sm.sendSay("嗯？你说你没钱？那是当然的啊…… #h0# 你有很多钱的话，还会来到这个地方吗？所以！！我们这次会为签订合同的人提供小货船和本钱。")
if not sm.canHold(ItemConstants.COMMERCI_DENARO, 20):
    sm.sendSayOkay("贸易时，一定会用到金币，所以请不要把本钱全部用完。不过，如果你根本不打算进行贸易的话，钱用完也没关系。")
    sm.dispose()
sm.giveItem(ItemConstants.COMMERCI_DENARO, 20)
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(17005)  # Bon Voyage 1
sm.completeQuestNoCheck(17006)  # Bon Voyage 2
sm.completeQuestNoCheck(17007)  # Bon Voyage 3
sm.setParam(1)
sm.sendSay("关于船的情况，可以通过点击角色栏右下端的图标进行查看。现在的船还很小，但是通过几次贸易之后，就可以换成更好的船了。")
sm.sendSay("那我们开始进行贸易吧？和我搭话之后，进行第一次出航吧。")
sm.sendPrev("Talk to me again when you're ready to start your very first voyage.")
