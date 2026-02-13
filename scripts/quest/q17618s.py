# id 17618 ([Commerci Republic] The Lady in Robes), field 865000001
sm.setSpeakerType(3)
sm.setParam(16)
res = sm.sendAskYesNo("#b(交易品的量很多，自己一个人运的话，应该还没走远。现在追上去，应该还能抓住他。)#k")
sm.setParam(17)
sm.sendNext("他说是贝里村的反方向。那我只要往我来时的相反方向走就行了。")
sm.startQuest(parentID)
sm.warp(865020001)
