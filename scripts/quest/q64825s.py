# [NLC] Refined Living
# 64825
# The Glimmer Man (9201083)

glimmerMan = 9201083

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("I have something of a personal request for you, my friend.")
sm.sendNext("On the academic side, I dabble in collecting minerals from many worlds I visit as I travel the universe.")
sm.sendNext("And as our alien invaders have proven, Masteria just so happens to have a very appealing mineral "
"that's worth crossing a hundred star systems in pursuit of.")
sm.sendNext("Conveniently for me, they've also brought with them the workers and facilities to gather and refine that mineral.")
response = sm.sendAskYesNo("Basically, do you think you could collect some #b#eRefined Lianium#k#n from me from the aliens' excavation site?")
if response:
    sm.startQuest(parentID)

    sm.sendNext("Not only are you kind, you're also extremely accommodating, my friend. "
    "Now, it's very important that I get ahold of the Lianium before anyone else.")
    sm.sendNext("If you bring them to me without delay, there's a big reward in it for you.")