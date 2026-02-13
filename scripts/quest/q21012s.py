# 140090300
PURUN = 1202004

sm.setSpeakerID(PURUN)
sm.sendNext("英雄！你好！啊？你难道不知道自己是英雄吗？前面3个人都喊那么大声了，我还能听不见吗？整个岛都知道英雄苏醒的事情了。")
sm.sendSay("咦，你怎么好像不开心的样子？有什么问题吗？啊？不知道自己到底是不是英雄？你失忆了吗？怎么会……看样子是被封冻在冰里数百年来的后遗症。")

if sm.sendAskAccept("嗯，既然你是英雄，挥挥剑也许就会想起什么来呢？试着去#b打猎怪兽#k，怎么样？"):
    sm.removeEscapeButton()
    sm.startQuest(parentID)
    sm.sendNext("对了，这附近有许多#r#o9300383##k，请击退 #r3只#k试试，说不定你就能想起什么了。")
    sm.sendSay("哦，你应该还没有忘记使用技能的方法吧？#b将技能拖到快捷栏上，以方便使用#k。除了技能以外，消费道具也可以拖到这里来方便使用。")
    sm.tutorAutomatedMsg(17)
else:
    sm.sendNext("Hm... You don't think that would help? Think about it. It could help, you know...")
    sm.dispose()