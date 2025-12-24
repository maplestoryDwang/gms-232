# [NLC] The Collapsed World (Glimmer Man)
# 64827
# The Glimmer Man (9201083)

from net.swordie.ms.enums import Stat

glimmerMan = 9201083

# Grab current fame for quest fame reward later
fame = chr.getStat(Stat.pop)

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(57)
sm.sendNext("Glimmer Man, there's something I'm curious about.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Very well, my friend. Since you did me a favor, "
"I'll tell you as much as I can about whatever it is that's piqued your curiosity.")

sm.setParam(57)
sm.sendNext("You wander around between different dimensions, right? Do you know anything about a place called Versal?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("An interesting question. Very interesting.")
sm.sendNext("I do know something of Versal, yes. However, I'm unsure as to why you'd be interested in a destroyed world.")

sm.setParam(57)
sm.sendNext("Versal was...destroyed?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Well, the world is still intact, technically, but make no mistake, it is a dead and barren place. "
"Its night is unending, and those few who still cling to it are like pale, hollow specters.")

sm.setParam(57)
sm.sendNext("But that doesn't make any sense. I'd heard Versal was a marvelous, extravagant world full of life.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Haha, you speak as though you've walked the streets of Versal's cities yourself! "
"But there's no way that could be. It can't be found through standard navigation, and escape is similarly improbable.")
sm.sendNext("The truth is, the only time I'd describe it as 'extravagant' is when a war was unfolding. "
"In that moment when the fighting and destruction blossomed into chaos, there was a brief brilliance that one could describe as beautiful, "
"were it not so terrible.")

sm.setParam(57)
sm.sendNext("...And what happened to Numenal?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Oh-ho. You never cease to surprise me, friend. How did you come to know of Grandmaster Numenal? "
"Have your adventures nudged you toward seeking the history of Versal?")
sm.sendNext("At any rate, as fascinating as this line of inquiry is, that's enough for today. "
"There are many other interesting places in the universe, the tales of which I would be glad to regale you with next time..."
"in exchange for a favor or two, of course.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
chr.setStatAndSendPacket(Stat.pop, fame+20)