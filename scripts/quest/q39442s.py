# [Temple of Time] Seeking Lost Memories [Kain]
# 39442
# No NPC

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    kain = 3004901
else:
    # Female Kain
    kain = 3004902
royce = 3004915
romina = 3004914
amos = 3004916
cadena = 3005122
gen = 3001250
fenelle = 3000001
athena = 1540453

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(kain)
sm.sendNext("#face0#My lost memories...")
response = sm.sendAskYesNo("#face0#Do I even have any place to return to now?")
if response:
    sm.removeEscapeButton()
    sm.lockInGameUI(True, False)
    sm.blind(1, 200, 0, 1000)
    sm.sendDelay(2000)

    sm.sayMonologue("...Please, spare us! We'll do anything!", False)
    sm.sendNext("#face0#Hmm?")

    sm.sayMonologue("#rBring them to me.", False)
    sm.sendNext("#face1#*gasp*")

    sm.sayMonologue("We... I'll do anything. Just don't hurt Kain, please...", False)
    sm.sendNext("#face1#It's that same memory! But...")

    sm.sayMonologue("#rYour memories belong to us now.", False)
    sm.sendNext("#face3#Stop!")

    sm.sayMonologue("#rYou will be Drakas from this day on.", False)
    sm.sendNext("#face2#Stop it! #fs18#STOP IT, PLEASE!")
    
    sm.sayMonologue("", True)
    sm.sendNext("#face0#...")

    sm.sayMonologue("Duuum...", True)
    sm.sendNext("#face0#Hmm?")

    sm.sayMonologue("...plings.", True)
    sm.setInnerOverrideSpeakerTemplateID(royce)
    sm.sendNext("#face0#DUMPLINGS!")

    sm.setInnerOverrideSpeakerTemplateID(kain)
    sm.sendNext("#face1#Ahh!")

    sm.setInnerOverrideSpeakerTemplateID(romina)
    sm.sendNext("#face0#We're gonna live here with Granny.")

    sm.setInnerOverrideSpeakerTemplateID(amos)
    sm.sendNext("It would be nice to see you again sometime.")

    sm.setInnerOverrideSpeakerTemplateID(kain)
    sm.sendNext("#face0#Amos. Royce and Romina...")

    sm.setInnerOverrideSpeakerTemplateID(romina)
    sm.sendNext("#face0#Kain!")

    sm.setInnerOverrideSpeakerTemplateID(royce)
    sm.sendNext("#face0#Kaiin!")

    sm.setInnerOverrideSpeakerTemplateID(cadena)
    sm.sendNext("#face0#I don't like the look of them...")

    sm.setInnerOverrideSpeakerTemplateID(gen)
    sm.sendNext("#face0#Good luck out there, #h #.")

    sm.setInnerOverrideSpeakerTemplateID(fenelle)
    sm.sendNext("I hope your path ahead is full of happy memories.")

    sm.setInnerOverrideSpeakerTemplateID(athena)
    sm.sendNext("You'll make great memories.")

    sm.blind(0, 0, 0, 1000)
    sm.sendDelay(2000)
    sm.setInnerOverrideSpeakerTemplateID(kain)
    sm.sendNext("#face0#Wait, these memories are from after I left Toolen City...")
    sm.sendNext("#face0#I have memories now that don't break my heart...!")

    sm.lockInGameUI(False)

    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.startQuest(recoveredMemory)
    sm.setQRValue(recoveredMemory, "1", False)