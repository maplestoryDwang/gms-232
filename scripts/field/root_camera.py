# Swamp : Silent Swamp (105010000)  |  Used for camera movement for the Root Abyss QuestLine

AN_URGENT_SUMMONS = 30000

if sm.hasQuest(AN_URGENT_SUMMONS) and "done" not in sm.getQRValue(AN_URGENT_SUMMONS):
    sm.setQRValue(AN_URGENT_SUMMONS, "done")
    #sm.lockInGameUI(True)
    #sm.moveCamera(170, 400, -850)

    sm.setPlayerAsSpeaker()
    #sm.removeEscapeButton()
    sm.sendNext("Oh, there's a new area.")

    #sm.moveCameraBack(200)

    sm.lockInGameUI(False)
