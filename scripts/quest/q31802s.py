

sm.setSpeakerID(3001007)
sm.sendNext("唔……不好意思，我正在想事情……这里的指挥官#b#p3001000##k和#b#p3001001##k好像在战线上被困了。")


sm.sendSay("#b#p3001000##k和#b#p3001001##k的实力都非常出众，我相信他们一定能突围……但在本部地区进行最后防守的那些普通士兵的安危很令人担忧……")

sm.sendSay("没时间详细跟你解释。如果你是来帮忙的，我可以马上引导你去战场，麻烦你消灭掉那些幽灵吧？战况迫在眉睫……")

response = sm.sendAskYesNo("非常感谢你！请你尽量保护那些士兵！等你做好出发准备，我立刻为你指路！你消灭所有幽灵后，就去见见#b#m401000001##k的#b#p3001001##k和#b#p3001000##k吧。祝你好运。多保重，冒险岛勇士。\r\n\r\n#b#e(接受后将立即移动到战场地图。如果想重新开始任务，请放弃任务后再重新开始。)#n#k")

if response:
    sm.setPlayerAsSpeaker()
    sm.sendNext("我准备好了。下面就进入反攻总部，扫荡敌人吧。")
elif response == 0:
    #TODO
    sm.dispose()

sm.startQuest(31802)
sm.warpInstanceIn(401070000)
sm.dispose()
