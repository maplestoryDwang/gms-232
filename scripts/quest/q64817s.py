# [NLC] Naricain's Blood
# 64817
# Elpam Gorlab (9201055)

elpam = 9201055

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#But getting down to business, in analyzing the samples you brought me last time, "
"I discovered something you may find rather interesting.")
sm.sendNext("#face0#The key takeaway is that Masteria, which sank beneath the ocean in the wake of its calamity, "
"shares no common ecological features or characteristics with the surrounding seabed.")
sm.sendNext("#face0#This means that despite Masteria's landmass being completely submerged, the continent was never actually flooded.")
sm.sendNext("#face0#From that, I think we can safely say that a mysterious force was protecting--or perhaps sealing--Masteria during that time.")
sm.sendNext("#face0#My second finding is that the flora in this area shows similar features to plants of the genus Helianthus.")
sm.sendNext("#face0#Not only are they edible, they're also quite nutritious and loaded with vitamins. "
"They could even be processed for a myriad of medicinal uses, if one were so inclined.")
sm.sendNext("#face0#They also have a curious property whereby they cleanse the soil in which they grow. "
"The problem with that is, since they've leached a toxic substance from the land--the so-called #rNaricain's Blood#k--"
"the specimens growing in this region have become rather dangerous.")

sm.setParam(57)
sm.sendNext("Naricain's Blood... That sure doesn't sound pleasant.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Your presumption is more correct than you realize, "
"because 'Naricain's Blood' is the very substance that corrupted this jungle and mutated the ancient Krakians.")
sm.sendNext("#face0#Corine and I first came to know of it through a record in a Krakian ruin, likely engraved there during the age of the great war. "
"It said, #rNaricain's Blood inundated the land, ending the age of the Krakians#k...")

sm.setParam(57)
sm.sendNext("...Dr. Jang.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#I heard about her in New Leaf City. "
"That she used to be the head of Maple World's Masteria research team, but that she went missing.")
sm.sendNext("#face0#Thus far, I still require more varied samples of Naricain's Blood for study. "
"Everything I have is promising, but still only a hypothesis. For now, I'd like to continue my research.")
response = sm.sendAskYesNo("#face0#Could you venture deeper into the jungle so that we can keep our field investigation going?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("#face0#Thank you! The most useful thing you could do right now is defeat 300 Agressive Gryphons "
    "around Where the Cliff Splits and collect ecological samples from them.")