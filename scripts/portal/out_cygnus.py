EASY_CYGNUS_MAP = 271041100
NORMAL_CYGNUS_MAP = 271040100
CYGNUS_ENTRANCE = 271040000

if sm.getFieldID() == EASY_CYGNUS_MAP or sm.getFieldID() == NORMAL_CYGNUS_MAP:
    if sm.sendAskYesNo("Would you like to leave the fight?"):
        sm.warpInstanceOut(CYGNUS_ENTRANCE, 0)