# id 37173 ([Elodin] Singing Necessities 1), field 101084400
sm.setSpeakerID(1501004) # Shimmer Songbird
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1501015) # Shimmer Songbird
sm.sendNext("要想唱好歌，首先要充分放松声带。")
sm.sendSay("喝下这附近的#b#o3501108##k和#b#o3501109##k拥有的#i4036505# #r#t4036505##k，不仅能解渴，对于放松声带也非常有效。")
res = sm.sendAskYesNo("我会像刚才一样给你一个小水瓶，请你用它灌满水交给我吧。")
sm.startQuest(parentID)
sm.startQuest(parentID)
sm.sendNext("I'll need #r15 droplets of Pure Water#k this time.")
sm.warp(101084100)
