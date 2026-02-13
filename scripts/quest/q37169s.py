# id 37169 ([Elodin] Thirst Quenching), field 101084400
sm.setSpeakerID(1501004) # Shimmer Songbird
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendNext("啊……抱歉。最近事情太多，我嗓子有些不舒服。")
sm.sendSay("有什么我能帮忙的吗……？")
sm.setParam(2)
sm.sendSay("啊……那能麻烦你帮我收集#i4036505# #r#t4036505##k吗？")
sm.setParam(4)
sm.sendSay("附近的#b#o3501108##k和#b#o3501109##k身上就有。\r\n请灌满我给你的小水瓶就行了。")
res = sm.sendAskYesNo("咳咳咳……")
sm.startQuest(parentID)
sm.startQuest(parentID)
sm.sendNext("Thank you! I think #r9 droplets of Pure Water#k should be enough. \r\n#rDouble-click to open the #i4220196:# #b#t4220196:##k, then drag the #i4036503:# #b#t4036503:##k over to fill it.#k")
sm.warp(101084000)
