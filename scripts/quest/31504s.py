# id 31504 (Road to Treglow), field 401040000
sm.setSpeakerID(3001100) # Edea
sm.sendNext("You're here for your mission, correct?")
sm.sendSay("I believe #rTreglow#k's laboratory should be our next target. I don't think there's much difference between #rVictor#k and #rTreglow#k in terms of power. However, #rTreglow#k has access to much more information.")
sm.sendSay("I ask that you enter through #b#m401050000##k and head on over to #b#m401052000##k. According to the patrol report from #b#p3001107##k, the path to #bTreglow#k is guarded by chemically-enhanced creatures.")
res = sm.sendAskAccept("For the time being, think of this as an investigation. As for #rTreglow#k's creations, please eliminate 100 #r#o2400118##k monsters. #b#p3001107##k cited them as the biggest threat. Also, bring me 50 #b#t4000737##k items, so that we might learn more about these things.\r\n\r\n#r#e(If you accept, you will automatically move to the relevant field.)")
sm.startQuest(parentID)
sm.setParam(1)
sm.sendNext("Bring me the flasks, of course, but any other communication can be done through the #bD-02 Receiver#k. Let me give you one.")
sm.warp(401052000)
