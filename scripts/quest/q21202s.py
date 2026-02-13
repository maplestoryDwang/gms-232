# 21202 - [Job Adv] (Lv.30)   Aran
sm.setSpeakerID(1203000)
sm.sendNext("呵呵……年轻人来这么偏僻的地方干嘛？")
sm.setPlayerAsSpeaker()
sm.sendNext("我想要最厉害的长矛！")
sm.setSpeakerID(1203000)
sm.sendNext("最厉害的长矛？那种东西在小村子里怎么有卖的……")
sm.setPlayerAsSpeaker()
sm.sendNext("我知道你就是冒险岛世界里最厉害的铁匠！我想要你做的武器！")
sm.setSpeakerID(1203000)
if sm.sendAskYesNo("我这个老头子太老了，哪还能做什么优秀的武器啊。倒是有一支很久以前做的长矛……不过却不能给你。那个家伙太锋利，弄不好连主人都会被伤到。这种武器你还想要吗？"):
    sm.startQuest(parentID)
    sm.sendSayOkay("呵呵……既然你这么说，我这个老头子就试一试你。你去旁边的#b修炼场#k，打败那些#r#o9001012##k，取回#b#t4032311##k#b30个#k给我。我就把#p1201001#交给你。")
    sm.dispose()
else:
    sm.dispose()