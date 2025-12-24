# Elluel
# 101050000
# Warp from Elluel to Dark Cave Path. Also completes Awakening for Mercedes.

from net.swordie.ms.constants import JobConstants

awakening = 24040
barrierDown = 24093

# Only play cutscene for Mercedes with Awakening active but before tripping QRValue add
if JobConstants.isMercedes(chr.getJob()) and sm.hasQuest(awakening) and not sm.hasQuest(barrierDown):
    sm.lockInGameUI(True)
    sm.startQuest(barrierDown)
    sm.setQRValue(barrierDown, "1", False)

    # The barrier's...gone?
    sm.showBalloonMsg("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 2000)
    sm.sendDelay(2000)

    # It should have lasted hundreds of years...
    sm.showBalloonMsg("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 2000)
    sm.sendDelay(2000)

    sm.removeEscapeButton()
    sm.flipDialoguePlayerAsSpeaker()
    sm.sendNext("Wait... Something doesn't feel right...about...my level?")
    sm.sendSay("Level...10?!")

    sm.lockInGameUI(False)

else:
    sm.warp(101050100, 2)