# [NLC] Public Safety Problems
# 64802
# Icebyrd Slimm (9201050)

icebyrd = 9201050

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("I knew that when I confided in you about those safety issues, "
"I could count on you to help out. You're a real lifesaver, #h #.")

sm.setParam(57)
sm.sendNext("What kind of safety issues are we talking about, exactly? What's going on in NLC?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("Well, to be frank, we've got a whole sampler platter of problems we've been dealing with.")
sm.sendNext("First thing is, we've had a real uptick in explorers and visitors coming to the city!")
sm.sendNext("Now, in general this is probably a good thing, "
"but you know how everything tends to get more hectic the more people you pack into a place.")
sm.sendNext("Sheriff Lita is trying her best to keep order in the city--and doing a pretty good job of it, "
"as you'd expect from the lady who saved my butt multiple times back in the Kerning City days. "
"But to be honest, it's too much work for just one person.")
sm.sendNext("Just recently, we've had Explorers headed out west come high-tailing it back here, shaken with fear. "
"Then, there's some armed group calling themselves 'Raven Ninja' that's been hindering adventurers, "
"so we've been fielding lots of complaints about that, too.")
sm.sendNext("Beyond that, our scientists recently detected a strange seismic wave that seems to have spread out from the jungle. "
"That wave may have been what riled up the monsters, "
"which in turn led to more residents and travelers having unfortunate run-ins with the local wildlife.")

sm.setParam(57)
sm.sendNext("Wow. It really DOES sound like you could use some help.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(icebyrd)
sm.sendNext("You've got that right.")
response = sm.sendAskYesNo("Anyway, if you're up for it, would you mind giving my old friend Lita a hand?")
if response:
    sm.startQuest(parentID)