# 2400370
SPECTERS_KILLED_KEY = "specterKilled"
max = 40

if not field.hasProperty(SPECTERS_KILLED_KEY):
    killed = 0
else:
    killed = field.getProperty(SPECTERS_KILLED_KEY)

field.setProperty(SPECTERS_KILLED_KEY, killed + 1)
sm.progressMessageFont(1, 20, 4, 0, "Specters destroyed: {}/{}".format(killed, max))

if killed >= max and sm.getFieldID() != 402090003:
    sm.completeQuestNoCheck(34915)
    sm.warp(402090003)
    field.setProperty(SPECTERS_KILLED_KEY, 0)