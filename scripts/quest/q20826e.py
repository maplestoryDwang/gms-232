# End of Lesson 1 - Ereve History
scriptInfo = sm.getNpcScriptInfo()

KINU = 1102006
HAWKEYE = 1101007

sm.removeEscapeButton()

sm.setSpeakerID(HAWKEYE)
sm.sendNext("我是闪电骑士团长，我叫胡克。听说过我的名字吗？我的名气很大，当然应该知道吧？")

sm.setPlayerAsSpeaker()
sm.sendSay("别害羞。见到平时崇拜的人，紧张也是难免的。你对闪电骑士——奇袭者感兴趣吗？对了，你叫什么来着？")

sm.setSpeakerID(HAWKEYE)
sm.sendSay("胡克，这位新骑士团候补生的名字叫#h0#。现在招呼打完了，请你快走吧。")

sm.setInnerOverrideSpeakerTemplateID(KINU)
sm.sendSay("我还有很多话要说呢。我的传奇经历……！")

sm.setInnerOverrideSpeakerTemplateID(HAWKEYE)
sm.sendSay("好了，我要继续往下讲了。再见。")

sm.setInnerOverrideSpeakerTemplateID(KINU)
sm.sendSay("刚才说到哪儿了？新骑士团员训练结束后，就能被任命为修炼骑士，决定自己的道路。光之骑士、火之骑士、风之骑士、黑暗骑士、闪电骑士……必须选择属于自己的道路。")
sm.sendSay("骑士团的任务是保护女皇，击败黑魔法师，保护冒险岛世界的和平。此外，我们还需要对付黑魔法师的追随者黑色之翼，执行搜集情报的任务等。")
sm.sendSay("今天的课程就到这里。下一项训练……请你去问问奇姆。")
sm.sendSay("嗯？我好像没……")

sm.completeQuest(parentID)