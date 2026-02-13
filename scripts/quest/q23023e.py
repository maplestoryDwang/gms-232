# 23023 - 2nd job advancement Battle Mage

sm.setSpeakerID(2151001)
if sm.sendAskYesNo("#t4032737#被取回来啦。干得好！我就知道你一定可以做到。"):
    sm.completeQuest(parentID)
    sm.jobAdvance(3210)
    sm.consumeItem(4032737)
    sm.sendSayOkay("呵呵……这次任务是我故意交给你的。黑色之翼的那个家伙，过去好像曾经让你吃过苦头吧？过去你连他的衣角都碰不到，现在竟然这么轻易就打败了他。不觉得高兴吗？在完成任务的同时，又一雪前耻，感觉很爽吧？")
else:
    sm.sendSayOkay("不过没想到你能完成得这么干净利落。你确实是个了不起的家伙。老实说，我根本没想到你会在这么短的时间内成长到现在这个程度。我还以为你会费一番功夫呢……真了不起。")
