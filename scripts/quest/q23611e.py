# 23611 - Xenon 2nd job advancement
VERITAS_MAP = 230050000
PROF = 2300001
MEDAL = 1142576

sm.setSpeakerID(PROF)
if chr.getJob() == 3600 and chr.getLevel() >= 30:
    sm.sendNext("欢迎你。是反抗者总部派来的人啊。你叫我文博士就行。我是反抗者的秘密研究机构#b#m230050000##k的总负责人。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("是的，#p2151003#好像没告诉你。这里是对发生在冒险岛世界各地的异常现象进行研究的机构。我想最近发生在冒险岛世界中的异常现象应该和黑魔法师以及他的复活有关。为了对此进行研究，我们从大陆各个地方召集了很多博学之士，成立了这个机构。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("不过你也看到了，现在设备和人手都非常缺乏。据我所知，你应该是反抗者派来帮助我们的特殊工作员。")
    sm.sendNext("但是我由于一些情况……没办法自由活动。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("那件事我大致听说了。\r\n听说你正在被人追踪？在这里你可以尽管放心。这个基地周围的几道防御壁会吸收掉所有的信号。不仅可以屏蔽外部的信号，内部发出的信号也可以完全屏蔽。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("原来如此。啊，如果能用建造防御壁的材料做成衣服穿在身上，是不是就可以避开#p2154009#的追踪了呢？")

    sm.setPlayerAsSpeaker()
    sm.sendNext("那是不可能的。防御壁的重量非常重，厚度也相当惊人。穿在身上，差不多相当于3层建筑那么大。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("我有推进器，重量之类的问题总能想办法克服……。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("体型像3层建筑那么大的话，会非常显眼，所以不行。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("原来如此。我还觉得是个不错的想法呢……\r\n看来只有待在基地里面才能放心活动了。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("有一个办法。只要使用#b脉冲扰乱装置#k就行。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("是的，只要对你的脉冲信号进行分析，在冒险岛世界各地设置释放相同频率信号的装置，就能将你的信号和其他信号混在一起，骗过敌人。但是必须在很多地方设置扰乱装置，才有意义。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("事实上，在你们到达这里之前，我就接到了#p2151003#的请求。现在我们正在全力开发那种装置。不过目前遇到了一些问题，研究进展不是很快……。")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("我能帮上什么忙吗？")
    sm.sendNext("如果是那样，那就太好了。如果你能帮助我和其他人，研究就能更快地取得进展。所以我们才把你们召集到了这里。")

    sm.setPlayerAsSpeaker()
    sm.sendNext("准备好了的话，我就任命你为#b#m230050000##k的特殊工作员。你愿意接受吗？\r\n\r\n#b#e<接受后进行2转。>#n#k")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("祝贺你成为了特殊工作员。我再次对你表示欢迎。")
    if sm.sendAskYesNo("对了，之前进来的时候，不知道你有没有在入口附近见到……那里有一台我们的工程师制作的机器。今后到这里来或出去的时候可以使用那个机器。"):
        if sm.canHold(MEDAL):
            sm.giveItem(MEDAL)
            sm.setJob(3610)
            sm.addAP(5)
            sm.addSP(5)
            sm.addMaxHP(150)
            sm.addMaxMP(150)
            sm.completeQuest(parentID)
            sm.sendNext("那台机器的名字叫#b机械战车#k。使用#b机械战车袭击#k技能，机器就会出来接你。")
            sm.sendNext("嗯……不知道你会不会喜欢那台机器。制作者是个口味有点特别的人。")
            sm.sendNext("#b扰乱装置#k？")
            sm.sendSayOkay("I know it's pretty rediculous looking, but the design is solid as can be.")
        else:
            sm.sendNext("Please make some space in your EQUIP tab for your medal.")
else:
    sm.sendNext("You don't seem familiar...")
