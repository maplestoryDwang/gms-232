# Harp String <C>
# 2012027
# Eliza's Garden (920020000)
# Plays the 'do' note. Used for Eliza's Eternal Sleep.

sm.playSound("orbis/do", 100)

eternalSleep = 3114
songMaster = "CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC"
songStatus = sm.getQRValue(eternalSleep)

if sm.hasQuest(eternalSleep) and songStatus != "42":
    # Is this the first note?
    songProgress = ""
    if songStatus:
        songProgress = songStatus
    
    songProgress += "C"
    songCount = len(songProgress)

    if not songProgress == songMaster[:songCount]:
        # Uh oh, you screwed up
        songProgress = ""
        sm.chat("The performance was a failure. Eliza seems very displeased.")
    
    # Is this the final note?
    if songProgress == songMaster:
        songProgress = "42"
        sm.chat("The performance was a success. Eliza breathed a sigh of relief.")
    
    sm.setQRValue(eternalSleep, songProgress, False)
