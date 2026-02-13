# 140000000
LILIN = 1201000

sm.setSpeakerID(LILIN)
if sm.sendAskAccept("还没做好准备吗？那么准备好后再来跟我说一声。"):
    sm.startQuest(parentID)

    sm.removeEscapeButton()
    sm.sendNext("开始基础体力锻炼吧？准备好了？再确认一下剑是否装备好了？技能和药水是否已经托到了快捷栏中？")
else:
    sm.sendNext("很好。下面要去打猎的#r#o0100132#s#k，是比#o0100131#s更厉害一些的怪兽。去#b#m140020100##k抓#r15只#k，这将有助于你的体力提高。体力就是冒险动力的来源！快出去吧！")
    sm.dispose()