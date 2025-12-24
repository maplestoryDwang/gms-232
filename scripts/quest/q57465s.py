# Lost Memories Found [Kanna]
# 57465
# Mouri Motonari (9130008)

recoveredMemory = 7081

mouriMotonari = 9130008

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(mouriMotonari)
sm.sendNext("#face0#Kanna, your strength returns. I am nothing short of amazed at your fervor. "
"Both Sokoku and Maple World shall remember your name.")
sm.sendNext("#face0#Kanna, I'm thankful for your dedication. Your loyalty was... unexpected.")
sm.sendNext("#face0#I'm glad you're on my side, Kanna.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)