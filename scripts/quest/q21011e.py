# 140090200
PUIR  = 1202003

sm.setSpeakerID(PUIR)
sm.sendNext("和#p1201000#在一起的，难道……难道就是传说中的英雄？#p1201000#！别不耐烦地点头，给我们介绍介绍呀！这位就是传说中的英雄吗？！")
sm.sendSay("……真对不起，太激动了，忍不住嗓门大了些。呜呜～真是令人激动……唉，眼泪都快出来了……#p1201000#这回可开心了。")
sm.sendSay("等等……英雄大人怎么能没有武器呢？我听说每个英雄都有自己的独特武器……啊，估计是和黑魔法师战斗的时候遗失了。")
sm.sendSay("虽然寒碜了点，不过#b先拿这把剑用着吧#k。算是送给英雄的礼物。英雄如果没有武器，岂不是会有些奇怪？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i1302000# #t1302000# 1个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 35 exp")

if sm.sendAskYesNo("#b（看自己这技能水平没一点英雄的样子……这把剑感觉也很陌生。以前的我是用剑的吗？这把剑怎么用呢？）#k"):
    sm.giveItem(1302000)
    sm.giveExp(35)
    sm.completeQuest(parentID)

    sm.removeEscapeButton()
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(Your skills are nowhere close to being hero-like... But a sword? Have you ever even held a sword in your lifetime? You can't remember... How do you even equip it?)#k")
    sm.tutorAutomatedMsg(16)
else:
    sm.sendNext("*sniff sniff* Isn't this sword good enough for you, just for now? I'd be so honored...")