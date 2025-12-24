# [NLC] Corruption of the Land
# 64815
# Corine (9201094)

corine = 9201094

nlcCoin = 4310277

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
if sm.canHold(nlcCoin):
    sm.sendNext("It's...almost like a nightmare...")
    sm.sendNext("I'm certain now that the ritual that took place here was performed by the Mutated Krakians.")
    sm.sendNext("I had a pet theory that the Krakians who live here were those who lost their sanity and degenerated into monsters.")
    sm.sendNext("But, based on what I've been able to confirm so far, the inhabitants of this place didn't seem to have taken leave of their senses. "
    "In fact, they continued performing the rituals on their own, carrying on their native tradition and culture.")
    sm.sendNext("From everything I'm seeing, we can't dismiss this as mindlessness or madness--"
    "these gruesome acts were the work of the Krakians themselves.")
    sm.sendNext("I was so into the idea of carrying on the will of my ancestors, but... "
    "What WAS that will? And what does that make me...?")

    sm.setParam(57)
    sm.sendNext("Um...")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(corine)
    sm.sendNext("Just...give me a moment to gather my thoughts, please. "
    "Thank you so much for helping me with my investigation.")

    sm.giveExp(5457600)
    sm.giveItem(nlcCoin)
    sm.completeQuest(parentID)
else:
    sm.sendSayOkay("Can you make some room in your Etc. inventory? There's something I'd like to give for your help with this investigation.")