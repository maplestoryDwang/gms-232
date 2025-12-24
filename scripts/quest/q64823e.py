# [NLC] Glimmer Man: Private Investigator
# 64823
# The Glimmer Man (9201083)

from net.swordie.ms.constants import JobConstants

glimmerMan = 9201083

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Ah, you're back. Did you get your hands on anything interesting?")

sm.setParam(57)
sm.sendNext("Well, being teleported on such short notice kinda left me a bit confused, "
"but I brought back the aliens' research data.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Excellent. Let's have a look.")
sm.sendNext("Hmm... Interesting. They're looking for an ore called #b#eLianium#k#n. "
"More specifically, they're hoping to refine whatever ore they do find.")
sm.sendNext("Extracting other people's resources without even asking permission? Tsk tsk. "
"Have they no sense of propriety?")
sm.sendNext("Let's see...")
sm.sendNext("It appears they're from the planet #bCerberus#k.")

# Jett-specific dialogue
if JobConstants.isJett(chr.getJob()):
    sm.setParam(57)
    sm.sendNext("Say what?")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
    sm.sendNext("Hmm... Do you hail from Cerberus as well, my friend? How ironic!")
    sm.sendNext("Eliminating people from your own world on a far-flung foreign planet... \r\n"
    "Gotta hand it to you, you're one heartless hitman!")

    sm.setParam(57)
    sm.sendNext("...Forget about it. It's none of your business.")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
    sm.sendNext("Hahaha, all right.")

sm.giveExp(5457600)
sm.completeQuest(parentID)