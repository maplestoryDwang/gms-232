# Harp String <B>
# 2012033
# Eliza's Garden (920020000)
# Plays the 'si' note. Since this is never used in Eliza's Eternal Sleep's song, this note will always reset the song's progress.

sm.playSound("orbis/si", 100)

eternalSleep = 3114
songStatus = sm.getQRValue(eternalSleep)

if sm.hasQuest(eternalSleep) and songStatus != "42":
    # B is never used in the song, so...
    # Uh oh, you screwed up
    songProgress = ""
    sm.chat("The performance was a failure. Eliza seems very displeased.")
    sm.setQRValue(eternalSleep, songProgress, False)
