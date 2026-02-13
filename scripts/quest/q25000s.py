sm.setSpeakerID(1402000)
sm.sendNext("准备好了吗，主人？#m150000000#现在正停泊在#m130000000#的骑士殿堂上方。当然，下面的人应该没有发现。")
sm.sendSay("但是现在#m130000000#的警卫非常森严。情况好像和平常不太一样……骑士殿堂前面有很多警卫骑士正在待命。")
sm.sendSay("光是避开警卫骑士应该并不难。只要按照主人的计划，掌握好幻影魔法的时机就行。")
sm.sendSay("在主人完成行动回来之前，秘密花园会一直在这里待命。我不会关闭引擎，所以不必担心有人追踪。")

response = sm.sendAskAccept("一切都准备好了。现在就看主人的决定了……怎么样？你想现在开始#m130000000#潜入作战吗？")
if response:
    sm.startQuestNoCheck(25000)
    sm.sendSayOkay("祝你好运，主人。")
else:
    sm.sendNext("The window of opportunity will not remain open forever.")
sm.dispose()