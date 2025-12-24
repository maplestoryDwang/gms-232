# [NLC] Deep Into the Jungle
# 64807
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(57)
sm.sendNext("Then you're a descendant of the last Krakians that remained in Masteria, right?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Yep. The Taru tribe got along pretty well with the Versalians that came to Masteria in ancient times.")
sm.sendNext("I was also a member of the #bShadow Knights#k. See, I spent quite a bit of time with a Grandmaster named #bLireni#k, "
"so eventually I just sorta became one of the team.")
sm.sendNext("Thanks to the training I got, I was able to survive the great war. "
"But making it through that was only the start of my troubles. "
"Let's just say, escaping the sinking Masteria and surviving adrift on the sea wasn't one of the bright spots in my life.")

sm.setParam(57)
sm.sendNext("Amazing... You're someone who actually live through the history I've only read about.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Haha... You say that, but I actually don't know much about my ancestors. "
"After the great war and the sinking of Masteria, there weren't many Krakian survivors. "
"Up until recent years, we'd been living under a rock, figuratively speaking. We never had much contact with outsiders.")
sm.sendNext("And now, I'm probably the only one remaining to carry on the Taru lineage.")
sm.sendNext("That's why I came to Masteria: to follow in the footsteps of my ancestors and keep their traditions alive. "
"In fact, since you seem to know your way around here, there's something I'd like to ask your help with.")

sm.setParam(57)
sm.sendNext("What did you have in mind?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("As you may have read, my ancestors built up a giant city deep in the Krakian Jungle. "
"I'm certain there must be some remnant of the Taru tribe there.")
sm.sendNext("But getting there is a challenge all on its own. "
"To start things off, can you take out the Jungle Bugs in the area? "
"That should help clear the way to my tribe's ancestral lands.")

sm.setParam(57)
sm.sendNext("Can you tell me a bit about these Jungle Bugs?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Sure. They're rather primitive insects, but they can be plenty aggressive. "
"They also scratch up the stonework as they climb all over, which causes damage to these ancient sites over time.")
sm.sendNext("If we just leave those bugs to do their thing, over time, "
"Masteria may literally see its history ground into dust.")
response = sm.sendAskYesNo("That's why I want you to eliminate 100 of the Jungle Bugs you'll find flying around the jungle.")
if response:
    sm.startQuest(parentID)

    sm.sendNext("O'hana taru'teha. May the Spirits of the Jungle guide your path. Thank you, my friend.")