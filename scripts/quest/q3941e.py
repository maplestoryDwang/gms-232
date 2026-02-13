# Stealing Queen's Order of Silk
# 3941
# Karcasa (2101013)

from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

karcasa = 2101013
tigun = 2101004
silk = 4031571
isTigun = sm.getnOptionByCTS(CharacterTemporaryStat.Morph) == 6

sm.setSpeakerID(karcasa)
if isTigun:
    sm.sendNext("还真不像是平时的#p2101004#大人…据我所知，#p2101004#大人可不是这么沉默寡言的人，难道发生什么事情了吗？噗！看你脸变得愈来愈红，是不是生气啦？真的很抱歉…我马上去拿丝绸过来，请稍等一下~")
    if sm.canHold(silk):
        sm.giveItem(silk)
        sm.completeQuest(parentID)
    else:
        sm.sendSayOkay("来~在这里，请您小心拿回去吧！这丝绸…可不是随随便便就能到手的东西喔！若稍有破损，恐怕王妃会把#p2101004#大人关进天牢了呢！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4031571# #t4031571# 1个\r\n\r\n")
    
else:
    sm.sendSayOkay("Okay, here it is. Please handle this with... huh? #p" + repr(tigun) + "#, where did you go?")