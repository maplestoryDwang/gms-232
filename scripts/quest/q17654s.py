# id 17654 ([Commerci Republic] Screaming in the Night), field 865000002
sm.setSpeakerType(3)
sm.setParam(16)
res = sm.sendAskYesNo("现在也不是马上谈论女皇大人的和平条约的时候……应该没有要做的事情。该借此机会逛逛桑凯梅尔兹。")
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9390207) # Zion
sm.sendNext("呃啊啊啊！！")
sm.setParam(35)
sm.sendSay("嗯？那是什么？？怎么会有惨叫声……好像是东边发出来的声音……")
sm.sendSay("到村子东边#b#m865020000##k去看看。")
sm.startQuest(parentID)
sm.warp(865020071)
