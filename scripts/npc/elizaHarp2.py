# Harp String <D>
# 2012028
# Eliza's Garden (920020000)
# Plays the 're' note. Used for Eliza's Eternal Sleep.

sm.playSound("orbis/re", 100)

eternalSleep = 3114
songMaster = "CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC"
songStatus = sm.getQRValue(eternalSleep)

if sm.hasQuest(eternalSleep) and songStatus != "42":
    # Is this the first note?
    songProgress = ""
    if songStatus:
        songProgress = songStatus
    
    songProgress += "D"
    songCount = len(songProgress)

    if not songProgress == songMaster[:songCount]:
        # Uh oh, you screwed up
        songProgress = ""
        sm.chat("The performance was a failure. Eliza seems very displeased.")
    
    sm.setQRValue(eternalSleep, songProgress, False)
