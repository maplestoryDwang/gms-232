# id 940204303 (Morass : Abandoned Area 4), field 940204303
if not sm.hasQuestCompleted(34562) and not sm.hasQuest(34562):
    sm.spawnNpc(3003502, 1715, 63) #Shubert
    sm.spawnNpc(3003501, 1250, 63, True) #Melagne
    sm.spawnNpc(3003540, 1400, 63, True) #Ollie
    sm.setMapTaggedObjectVisible("6330_gate", False, 0, 0)
    sm.showNpcSpecialActionByTemplateId(3003502, "summon", 0)
    sm.showNpcSpecialActionByTemplateId(3003501, "summon", 0)
    sm.lockInGameUI(True, False)
    sm.removeAdditionalEffect()
    sm.zoomCamera(0, 2000, 0, 1450, 63)
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
    sm.sendNext("#face3#Yeah... It's not budging.")
    sm.sendDelay(1400)
    sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
    sm.sendNext("#face0#Should we just blow it up? I've got a bunch of explosives!")
    sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
    sm.sendSay("#face1#What? No way! We never got orders like that! \r\nOur priority is to meet #bthat person#k first.")
    sm.setParam(57)
    sm.sendSay("(That person? Wait a minute... a #bCygnus Knight#k uniform!)")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
    sm.sendSay("#face0#Maybe that person already went through this door.")
    sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
    sm.sendSay("#face3#Yeah... maybe.")
    sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
    sm.sendSay("#face0#Well, we've looked everywhere else and there's no sign of this #h0# person. And I haven't blown anything up in days. So, here we go! Three, two... ")
    sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
    sm.sendSay("#face1#Ahh! Wait! Stop! Melange, stop him!")
    sm.setInnerOverrideSpeakerTemplateID(3003501) # Melange
    sm.sendSay("#face1#Zzz...")
    sm.createQuestWithQRValue(34561, "first=fin")
    sm.moveCamera(True, 0, 0, 0)
    sm.sendDelay(300)
    sm.removeOverlapScreen(1000)
    sm.lockInGameUI(False, True)
