# 32203 The New Explorer, Mai : Maple Road | Snail Park
MAI = 10301
THE_TOWN_CHIEF = 32210
AMHERST = 4000020

sm.setSpeakerID(MAI)
sm.sendNext("你好，我的名字叫麦加。我从来没有见过你哦，看来你是新来的#b冒险家#k吧？")
sm.setPlayerAsSpeaker()
sm.sendNext("#b冒险家？#k")
sm.setSpeakerID(MAI)
sm.sendNext("是的，为了在冒险岛世界展开冒险而从其他世界来的人。我们称这种人为“冒险家”。所有冒险家都是从#b冒险岛#k开始冒险的。")
sm.setPlayerAsSpeaker()
sm.sendNext("#b冒险岛？#k")
sm.setSpeakerID(MAI)
sm.sendNext("嗯，冒险岛！这里本来只是个无名小岛，但不知从何时起有很多冒险家都纷至沓来。为了他们的到来，这里开始陆陆续续有设施搭建起来，现在这里已经变成了一个不错的村庄。并且由我来为像你一样的新手冒险家提供帮助。")
sm.sendNext("你是叫……#h0#吧？既然你是第一次来到冒险岛世界，那就多听一下我做的说明吧？通过我的小测试的话，我就会给你对冒险非常有用的礼物哦！")
sm.sendNext("如果你不想听我的说明，我马上送你去村庄。不过那样一来，你就无法获得礼物。")

selection = sm.sendNext("明白了的话，现在开始选择吧。\n你要怎么做呢？\r\n#b#L0# 听取麦加的说明，并获得新装备作为礼物。 #l\r\n#L1# 不听说明，立即移动至村庄。#l#k")

if selection == 0:
    sm.sendNext("不错的选择！如果你按照我的说明去做，以后在冒险岛世界生活不会有任何问题的。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)

elif selection == 1:
    sm.sendNext("好吧，那么我现在立刻送你去彩虹村。")
    sm.sendSay("我已经把礼物放到你背包里，是恢复用药水。你待会儿打开消耗栏确认一下吧。")
    sm.sendSay("你到了彩虹村的话，别忘了去见见#b路卡斯#k村长!他会给你一些建议，让你能刚好地去适应新世界。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.startQuest(THE_TOWN_CHIEF)
    sm.warp(AMHERST, 0)
