# 140090100
PUKA = 1202001

sm.setSpeakerID(PUKA)
sm.sendNext("我们一直试图在冰层深处寻找传说中的英雄，不过从没想过真能找到你！预言果然没有错！#p1201000#做出了正确的选择！既然英雄重新回来了，我们就没有必要再惧怕黑魔法师了！")
sm.sendSay("哎呦，我怎么抓着您聊了这么久？实在是太高兴了……其他的企鹅估计也会像我这样的。虽然知道你很忙，不过在回村子的路上，#b还是尽量和其他的企鹅搭搭话吧#k。有大英雄和他们说话，他们肯定会惊讶得要死！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 5个\r\n#i2000023# #t2000023# 5个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 16 exp")
sm.giveItem(2000022, 5)
sm.giveItem(2000023, 5)
sm.giveExp(16)
sm.completeQuest(parentID)

sm.removeEscapeButton()
sm.flipSpeaker()
sm.sendNext("你升级了吗？不知道你有没有得到技能点数？在冒险岛世界，每升1级就能获得技能点数3。按#bK键#k，打开技能栏就可确认。")
sm.sendSay("#b（对我这么亲切，我却什么都想不起来。我真的是英雄吗？还是先查看一下技能吧……怎么查看技能呀？）#k")
sm.tutorAutomatedMsg(15)
