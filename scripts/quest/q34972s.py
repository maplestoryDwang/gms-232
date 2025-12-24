# [Temple of Time] A Quick Look Back [Ark]
# 34972
# No NPC
# TO DO: Figure out how effects are shown/superimposed during boxchat cutscenes (ref: https://youtu.be/qTei_KreCbA?t=5706)

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    ark = 3001500
else:
    # Female Ark
    ark = 3001501

sm.lockInGameUI(True, False)
sm.blind(1, 200, 0, 1000)
sm.sendDelay(2000)
# Base background effect: "Effect/Direction17.img/effect/ark/illust/14/0"

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(ark)
sm.sendNext("#face0#Memories...  We'd shout 'Fools and idiots forever!' while bumping fists.")
sm.sendNext("#face0#I always failed at the Academy, but I never gave up. "
"He joined the Academy despite having a successful future waiting for him.")
sm.sendNext("#face0#We couldn't be more different, but we shared the same dream. "
"Now we're on opposite sides.")

# Superimpose following effects at center of base effect:
# Memento (stacked effect 1): "Effect/Direction17.img/effect/ark/illust/14/1"
# Sprites (stacked effect 2): "Effect/Direction17.img/effect/ark/illust/14/2"

sm.sendNext("#face5#I still remember our promise from back then. "
"Albaire... I hope you remember it too.")

# Disengage effects alongside cutscene locks
sm.blind(0, 0, 0, 1000)
sm.sendDelay(2000)
sm.lockInGameUI(False)

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)