# [Temple of Time] A Quick Look Back [Lara]
# 36254
# No NPC

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 1:
    lara = 3005100
else:
    # Male Lara
    lara = 3005101

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lara)
sm.sendNext("#face1#So many memories...")
sm.sendNext("#face0#Come to think of it, a LOT'S happened lately, hasn't it?")
sm.sendNext("#face0#Mountain Kids, do you remember when I first touched the bell?")
sm.sendNext("#face6#I trusted you then, and I trust you now. I knew you'd never steer me wrong.")
sm.sendNext("#face0#I promised my granny I'd find the answers to my questions and remember my calling.")
sm.sendNext("#face0#And I've learned so much since then.")
sm.sendNext("#face0#I've made friends with Gri and everyone else, and I've found out a lot about the bell...")
sm.sendNext("#face0#...but even more than that, I've learned how big the world really is, "
"and how many different kinds of people live in it.")
sm.sendNext("#face0#It's been a whole big ride, it really has. I'm so glad I started this journey.")
sm.sendNext("#face6#And someday, I'll make the bell ring again. I just know I will.")
sm.sendNext("#face0#(As I look back on all my experiences, I feel my heart grow with a gentle warmth.)")

sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.startQuest(recoveredMemory)
sm.setQRValue(recoveredMemory, "1", False)