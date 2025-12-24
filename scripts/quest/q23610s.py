# Secret Instructions - Xenon 1st job adv
VERITAS_MAP = 230050000
sm.setSpeakerID(2120000) # Masked Gentleman
if sm.sendAskYesNo("Pssh, I have something to tell you. Meet me in #m" + str(VERITAS_MAP) + "#.\r\n\r\n#b(If you accept, you will be teleported to Veritas)."):
    sm.completeQuestNoCheck(23610)
    sm.warp(VERITAS_MAP)
