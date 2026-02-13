LADY_SYL = 1056000

sm.setSpeakerID(LADY_SYL)
sm.sendNext("……#h0#？有什么事吗？脸色那么难看…什么？红雅给你投毒…？…这家伙，又在搞恶作剧了…我们暗影双刀怎么可能会给自己的同伴投毒呢，这只是红雅的恶作剧，你不用在意。我们很信任你的。")
sm.sendSay("当然，如果你用背叛来报答我们对你的信任，那就另说了。你不想永远与暗影双刀为敌，就不要试着背叛我们。")

if sm.sendAskYesNo("话说回来，既然都搞起恶作剧，看来你的教育已经结束了吧。我能感觉到，无论是姿势还是眼神…你都已经准备好作为间谍潜入敌人内部了。你要#b转职为飞侠#k吗？也就是为了正式的任务而进入准备阶段。"):
    if chr.getLevel() >= 10 and chr.getJob() == 0:
        if sm.canHold(1332063):
            sm.giveItem(1332063)
            sm.startQuest(parentID)
            sm.completeQuest(parentID)
            sm.startQuest(29900)
            sm.completeQuest(29900)
            chr.getAvatarData().getCharacterStat().setSubJob(1)
            sm.jobAdvance(400)
            # sm.addSP(5, True)
            sm.setSTR(4)
            sm.setINT(4)
            sm.setDEX(4)
            sm.setLUK(4)
            sm.setAP(4 + chr.getLevel() * 5)
            sm.startQuest(17903)
            sm.completeQuest(17903)
            sm.avatarOriented("Effect/OnUserEff.img/RecordClear_BT/clear")
            sm.sendNext("冒险之书任务已完成。")
            sm.sendSay("现在你就是飞侠了，虽然还没学到双刀技术…也正因为如此，你现在才能作为飞花院的间谍，靠近达克鲁。")
            sm.sendSay("即使是双刀，他的属性与普通飞侠没什么区别。飞侠是以运气（LUK）为核心属性，敏捷（DEX）为辅助属性的。如果你不知道该怎么分配属性，点击#b自动分配#k就可以了。")
            sm.sendSay("哦，还有…想要当间谍，肯定还需要很多东西对吧？我增加了你的装备、其他物品保管盒的数量。背包越大，行动起来就越方便。")
        else:
            sm.sendSayOkay("你用的新武器也发放给你了。比之前的武器应该好用得多。")
    else:
        sm.sendSay("那么，我能教你的只有这些了。现在开始，红雅会给你重新安排任务的，那么，我就等你的好消息了。")
else:
    sm.sendNext("I can see you're not yet prepared...")