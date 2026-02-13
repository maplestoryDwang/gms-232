# id 58921 ([Hieizan Temple] Jars at Rest 1), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("我把#h0#装满的坛子都包好了。")
sm.sendSay("这个包裹皮很漂亮吧？这是我妈妈亲自做的。")
sm.setParam(16)
sm.sendSay("(这个包裹皮的花纹也太土了，真不好看。不过还是别说了。)")
sm.setParam(4)
res = sm.sendAskYesNo("让我们在 #m811000018:#见吧。把这些坛子放在那里应该就行。")
sm.startQuest(parentID)
sm.sendSayOkay("#m811000018:#过了#m811000017:#就到了。我们在那里见吧。")
