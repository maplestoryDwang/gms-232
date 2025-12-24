#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Be careful. The Erda that forms this ocean is the purest form we've ever seen in the Arcane River.")
sm.sendSay("#face0#These creatures were born directly from this pure Erda, so they might be quite different from creatures you've faced before.")
if sm.sendAskYesNo("#face0#Please gather #bdry white firewood#k from #bAtus#k. I think we'll need around 100 pieces"):
    sm.sendSay("#face0#Thanks. I know it's a lot, but I'm not so good at starting fires. Shubert's the resident pyro..")
    sm.startQuest(parentID)