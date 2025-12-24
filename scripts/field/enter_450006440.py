if sm.hasQuest(34267):
    sm.completeQuest(34267)
    sm.createQuestWithQRValue(34271, "35=h0;35=h2")
if sm.hasQuestCompleted(34268) and not sm.hasQuest(34269) and not sm.hasQuestCompleted(34269):
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(3003404) # Arkarium
    sm.sendSay("#face0#It's useless to struggle.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#Ah... arghhh!")
    sm.sendSay("#face0#Jean...?")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
    sm.sendSay("#face0#It's okay, Tana. I'm here.")
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#It can't be... arghhh!")
    sm.sendSay("#face0#You were...")
    sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
    sm.sendSay("#face0#It's me!")
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#But... how?")
    sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
    sm.sendSay("#face0#I told you I'd always be at your side.")
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#Jean...")
    sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
    sm.sendSay("#face0#Everything will be okay..")
    sm.setInnerOverrideSpeakerTemplateID(3003404) # Arkarium
    sm.sendSay("#face0#Why is it stopping?!")
    sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
    sm.sendSay("#face0#Arkarium...")
    sm.sendSay("#face0#I can... control the Erda. I can stop you!")
    sm.setInnerOverrideSpeakerTemplateID(3003404) # Arkarium
    sm.sendSay("#face0#You can try to stop me all you want, but your pitiful understanding of the Erda is nothing compared to my power!")
    sm.sendSay("#face0#What? N-no! NO! Aaaahhhhh")
    sm.setQRValue(34271, "34=h0;34=h1")