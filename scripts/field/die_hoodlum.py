# 2400315
HOODLUMS_KILLED_KEY = "hoodlumKilled"
max = 30

if not field.hasProperty(HOODLUMS_KILLED_KEY):
    killed = 0
else:
    killed = field.getProperty(HOODLUMS_KILLED_KEY)

field.setProperty(HOODLUMS_KILLED_KEY, killed + 1)
sm.progressMessageFont(1, 20, 4, 0, "Hoodlums taught a lesson: {}/{}".format(killed, max))

sm.chatMessage("killed = {}".format(killed))
if killed >= max and sm.getFieldID() != 402000002:
    sm.completeQuest(34601)
    sm.removeSkill(60021278)
    sm.warp(402000002)
    field.setProperty(HOODLUMS_KILLED_KEY, 0)
