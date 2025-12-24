# [Temple of Time] Seeking Lost Memories [Kinesis]
# 3563
# No NPC

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    kinesis = 1531000
else:
    # Female Kinesis
    kinesis = 1531052
jay = 1531001

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(kinesis)
sm.sendNext("Jay, can you hear me?")

sm.setInnerOverrideSpeakerTemplateID(jay)
sm.sendNext("#face9#I can hear you. What's up?")

sm.setInnerOverrideSpeakerTemplateID(kinesis)
sm.sendNext("Do you have any good memories of the two of us?")

sm.setInnerOverrideSpeakerTemplateID(jay)
sm.sendNext("#face10#What? Who are you? \r\n"
"What did you do to Kinesis?")
sm.sendNext("#face10#Kinesis never asks such embarassing questions!")

sm.setInnerOverrideSpeakerTemplateID(kinesis)
sm.sendNext("#face2#......")

sm.setInnerOverrideSpeakerTemplateID(jay)
sm.sendNext("#face11#Hey, I'm just kidding! \r\n"
"Hmm...Our memories... \r\n"
"I only remember that you exploited me.")

sm.setInnerOverrideSpeakerTemplateID(kinesis)
sm.sendNext("#face2#That's it? \r\n"
"Come on! Think further back.")

sm.setInnerOverrideSpeakerTemplateID(jay)
sm.sendNext("#face11#Well, there's things like how you used to tease me, "
"and threw dirty stuff at me when were kids because you knew I really hated that...")
sm.sendNext("#face12#Oh, how about this? Remember how you stole the girl who confessed her love to me? "
"You told me you would make sure what she said was true and made her fall in love with you.")

sm.setInnerOverrideSpeakerTemplateID(kinesis)
sm.sendNext("#face2#Okay, I'll stop now. The talk is over. \r\n"
"#b(It was good to talk to an old friend after all these years.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)