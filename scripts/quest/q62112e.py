# Just a Little Test 1 (62112)

from net.swordie.ms.enums import InvType

huangZhen = 9310536
zhenLong = 9310532

redBeanPorridge = 4034643
garlic = 4034656

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huangZhen)
sm.sendNext("我从来没见过你啊，你是第一次来豫园吧。")
sm.sendNext("啊啊-你问我为何会知道？呵呵，我可是豫园唯一的厨师啊。住在豫园的人，没有一个没在我的餐厅吃过饭！所以说，你要么是僵尸，不吃饭就能存活。要么就是头一次来豫园，我分析得没错吗？")
sm.sendNext(sm.join(["All right. Now for the hard part. Hold out your hands... Good, good. "
"Take this ", sm.formatInlineItem(redBeanPorridge), " and the ", sm.formatInlineItem(garlic), "... Yes, yes..."]))

if sm.getEmptyInventorySlots(InvType.ETC) >= 2:

    sm.completeQuest(parentID)
    sm.giveExp(170598)
    sm.giveItem(redBeanPorridge)
    sm.giveItem(garlic)
    sm.startQuest(62113)

    sm.setParam(57)
    sm.sendNext("好了！这是#i4034643:##t4034643#和#i4034656:##t4034656#，请拿好！")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huangZhen)
    sm.sendNext(sm.join(["Wonderful! You pass! #p", repr(zhenLong), "# can explain everything, "
    "but let me be the first to welcome you to Yu Garden, my fellow human!"]))

    sm.setParam(57)
    sm.sendNext("我都还没说呢，你怎么就已经猜到了？")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huangZhen)
    sm.sendNext(sm.join(["It'll all make sense when #p", repr(zhenLong), "# explains it to you."]))
else:
    sm.sendNext("不用猜都知道！这肯定是#p9310532#给你这个头一回来豫园的异邦人准备的测试吧。#p9310532#真是太刻板了！你一看就是个正常的人类啊，居然还给你做这种测试。")