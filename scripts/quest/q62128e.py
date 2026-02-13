# Rare Collection [Tang Dynasty Horseback Riding Doll] (62128)

import time

from net.swordie.ms.loaders import ItemData
from net.swordie.ms.util import FileTime

huiKoonKit = 9310537

horsebackDoll = 4001857
horsebackTotem = 1202173
yuGardenCoin = 4310177

def generateTotem():
    timedTotem = ItemData.getItemDeepCopy(horsebackTotem)
    # Expires in 30 days from now
    timedTotem.setDateExpire(FileTime.fromEpochMillis(int(time.time()*1000) + 86400000*30))

    chr.addItemToInventory(timedTotem)

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("嗯？你看什么？想买什么啊？")

sm.setParam(57)
sm.sendNext("我在狩猎过程中捡到了#e唐代骑马像#n陶器！")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
sm.sendNext("要是真如你所说，那可就要赚大发了！让我先瞧瞧！")
if sm.canHold(horsebackTotem):
    sm.consumeItem(horsebackDoll)
    sm.deleteQuest(parentID)
    sm.sendNext("啊……这是……")

    sm.setParam(57)
    sm.sendNext("这个？是#e唐代骑马像#n吧？！")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendNext("这个骑马像应该是上海博物馆里出售的纪念品。\r\n嗯……你别太失望。既然你这么有诚意，那我就帮你制成有用的东西吧。")
    sm.sendNext(''.join(["Here you go. It's a ", sm.formatInlineItem(horsebackTotem), "! \r\n"
    "I'll even give it to you at a discount. Just 5x ", sm.formatInlineItem(yuGardenCoin), "s!"]))

    generateTotem()

    sm.setParam(57)
    sm.sendNext("来！接着！这是你要的#i1202173:##t1202173#！\r\n 制作费很亲民哦，你只要给我5个#i4310177:##t4310177#就可以了！")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(huiKoonKit)
    sm.sendSayOkay("吓尿了？玩笑而已啦。好啦，免费送你啦。下次再找到稀有的东西再来找我。")
else:
    sm.sendNext("Hm...Can you make some space in your Equip inventory first, just in case?")