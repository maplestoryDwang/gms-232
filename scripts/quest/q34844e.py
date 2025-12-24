# [Temple of Time] Seeking Lost Memories [Illium]
# 34844
# Morian (3001355)

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    illium = 3001353
else:
    # Female Illium
    illium = 3001354
carnelian = 3001308
morian = 3001310
dean = 3001307

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(carnelian)
sm.sendNext("#face0#Illium? What brings you here?")

sm.setInnerOverrideSpeakerTemplateID(illium)
sm.sendNext("#face0#Do you remember when we first arrived to Maple World?")

sm.setInnerOverrideSpeakerTemplateID(morian)
sm.sendNext("#face0#Of course we do! We were thrilled to find that 'different dimension' we've been looking for!")

sm.setInnerOverrideSpeakerTemplateID(dean)
sm.sendNext("#face0#We even met those people with tails and horns! They were really weird.")

sm.setInnerOverrideSpeakerTemplateID(illium)
sm.sendNext("#face0#That's right. And thankfully, the Novas lent a hand to us.")

sm.setInnerOverrideSpeakerTemplateID(carnelian)
sm.sendNext("#face0#Why are you bringing that up all of a sudden?")

sm.setInnerOverrideSpeakerTemplateID(illium)
sm.sendNext("#face0#Well, you know, I was just thinking about when we first began our journey.")

sm.setInnerOverrideSpeakerTemplateID(dean)
sm.sendNext("#face1#You're being silly.")

sm.setInnerOverrideSpeakerTemplateID(illium)
sm.sendNext("#face0#(Come to think of it, it's been a while since then. Are we still doing the right thing? I continued to delve into my past memories.)")

sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)