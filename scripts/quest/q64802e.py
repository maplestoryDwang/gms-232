# [NLC] Public Safety Problems
# 64802
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("You there! You're not causing any trouble, are you?")

sm.setParam(57)
sm.sendNext("Hey there! The Mayor mentioned you could use some help there.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("What? I thought he said he'd send me someone rock-solid to help spread the workload around. "
"You look like some fresh-faced rookie from the 'burbs.")

sm.setParam(57)
sm.sendNext("Um...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("...Sorry. I guess that was probably kind of insensitive. "
"I've just been so busy lately that my patience is bottomed out "
"and that side of my personality pops out from between the cracks.")

sm.setParam(57)
sm.sendNext("You sure don't seem to mince words.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("That's my style. I worked for quite a while under the Dark Lord in Kerning City, "
"though I left right after #bgraduation#k...")

sm.setParam(57)
sm.sendNext("The Dark Lord? How'd you end up going from that gig to working here in NLC?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("It's kind of a long story, but to keep it short and sweet, Icebyrd Slimm and I used to explore together. "
"Back when I felt lost and kinda rudderless, he helped set me on the right path.")
sm.sendNext("Anyway, I'm up to my ears in work here. Can you talk to me again if you're actually here to help? "
"I'm starting to wonder if I should just send you back.")

sm.giveExp(5457600)
sm.completeQuest(parentID)