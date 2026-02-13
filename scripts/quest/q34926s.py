# id 34926 (Equipment Prep), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face0#叽，叽勒……在进行探索的时候，难免会出现和同伴失散的情况。那种时候就需要用到电波装置，叽勒。")
sm.sendSay("#face1#啊，这个会发出独特的电波，因此可以帮助我们找到掉队的同伴。当然，寻找掉队的人，就是你的工作了。")
sm.sendSay("#face0#总之，既然你也一起参加这次调查，那就需要四个电波装置。还有，我的电波装置也需要顺便修理一下……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001402) # Ferret
res = sm.sendAskAccept("#face4#所以需要多搜集一些材料，叽勒。你去帮我从#r#m402000616##k的#o2400354#身上搜集……大概#b20个#k#i4036348# #b#t4036348##k。")
sm.setSpeakerType(3)
sm.sendNext("#face0#嗯，我让你去，不是想偷懒。在此期间，我需要检查一下其他探测装备。哈哈，我说的是真的，叽勒。")
sm.startQuest(parentID)
