#   [Job Adv] (Lv.30)   Cannonneer of the Seven Seas

darkMarble = 4031013
job = "Cannonneer"
monster = "OctoPirate"
KYRIN = 10204
sm.setSpeakerID(KYRIN)

sm.sendNext("I'm sure you're getting used to the massive power of your Hand Cannon. Of course, you can access even more power once you advance to a full Cannonneer. Shall I show you how to do some real damage?")

sm.sendNext("You'll always want to start with the basics, of course. #bCannon Mastery#k, #bCannon Booster#k, and #bCritical Fire#k are all necessary for you to fire your cannon quickly and accurately.")

response = sm.sendAskYesNo("Once you enter the map, you #rcannot#k return without the #b#t"+ str(darkMarble) +"#s#k, if you die you will lose your experience.\r\n"
                           "Are you ready?")

if response:
    sm.warp(912040000, 0) # Pirate Test Site
    sm.startQuestNoCheck(parentID)
else:
    sm.sendSayOkay("You cannot be a Magician forever. You #bwill#k have to face up to the test.\r\n"
                   "Talk to me when you are ready.")
sm.dispose()
