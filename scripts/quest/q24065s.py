# The Elven Court
# 24065
# Phillius (1033100)

phillius = 1033100

sm.setSpeakerID(phillius)
sm.sendNext("Your Majesty, if I might suggest... "
"With all three elders awakened, we might attempt the #bRite of Snow#k...")

sm.setPlayerAsSpeaker()
sm.sendSay("The Rite of Snow? Are you strong enough yet?")

sm.setSpeakerID(phillius)
sm.sendSay("We will be fine. "
"I believe that this purification spell may be our best chance of freeing the Elves from the curse.")

sm.setPlayerAsSpeaker()
sm.sendSay("I'm worried about you. The aftermath of the curse left you too weak to try such powerful magic...")

sm.setSpeakerID(phillius)
sm.sendSay("The Rite of Snow doesn't rely on its casters' power. "
"It isn't easy, but it won't use up any of our strength. "
"All we need to do is call upon the hearts and spirits of the Elven people. We can do it right now, in fact.")

sm.setPlayerAsSpeaker()
sm.sendSay("Very well. If you believe it could lift the curse, please, try the Rite of Snow.")

sm.startQuest(parentID)
sm.showEffect("Effect/Direction5.img/effect/mercedesQuest/elfElder/0")
sm.showEffect("Effect/Direction5.img/effect/mercedesQuest/frame/0")