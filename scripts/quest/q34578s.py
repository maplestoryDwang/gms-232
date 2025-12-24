#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
sm.sendSay("#face0#You cannot pass. You must defeat the keepers and weaken the forces of Mirror World.")
if sm.sendAskYesNo("#face0#200 #bKeepers of Darkness#k. End them."):
    sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
    sm.sendSay("#face0#Won't Commander WIll be able to use his power if Tana's power is weakened?")
    sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
    sm.sendSay("#face0#Do not concern yourself.")
    sm.sendSay("#face0#The keepers are a portion of that power. The Executors possess the substance.")
    sm.startQuest(parentID)