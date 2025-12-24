# Lost Memories Found [Hayato]
# 57172
# Mouri Motonari (9130008)

recoveredMemory = 7081

mouriMotonari = 9130008

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(mouriMotonari)
sm.sendNext("#face0#I've been watching you fight for Maple World, Hayato. "
"Your dedication is impressive.")
sm.sendNext("#face0#I, Mouri Motonari, hope that you will call me an ally. "
"The two of us have a great future together.")
sm.sendNext("#face0#Continue your quest, and I shall ensure we go down in history.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)