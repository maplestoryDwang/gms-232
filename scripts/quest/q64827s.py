# [NLC] The Collapsed World (Elpam)
# 64827
# Elpam Gorlab (9201055)

from net.swordie.ms.enums import Stat

elpam = 9201055

# Grab current fame for quest fame reward later
fame = chr.getStat(Stat.pop)

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(57)
sm.sendNext("Elpam, there's something I wanted to ask you about. What happened to Versal?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Hmm? Versal?")
sm.sendNext("#face0#As I told you before, Versal is a #bcollapsed world#k.")

sm.setParam(57)
sm.sendNext("Yeah, but... What does that mean?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Hmm... Well, explaining will require a bit of a refresher course in ancient history, so pay attention. "
"A-ahem. It is said that in ancient Versal, there was one source of order.")
sm.sendNext("#face0#That source was the Antellion.")
sm.sendNext("#face0#There are many varying tales about how the Antellion came into being, "
"but all are in agreement that the Antellion's role was to maintain order in Versal.")
sm.sendNext("#face0#As the world grew and ages passed, the Antellion's power waxed stronger. "
"Records show that the people of Versal appointed guardians to keep Antellion safe, "
"in order to ensure the structure and stability of their society.")
sm.sendNext("#face0#However, the might of the Antellion enkindled for power in many hearts, and seeing how things stood, "
"the guardians decided to remove the Antellion from Versal.")
sm.sendNext("#face0#From our vantage point in the present day, "
"it is clear that removing the Antellion's power from Versal was a ruinous decision.")
sm.sendNext("#face0#The world of Versal, having lost the source of its sustaining light and stability, "
"was quickly headed for collapse.")
sm.sendNext("#face0#Pitch-black nights lingered without end. The land became barren, unable to beget life.")
sm.sendNext("#face0#Most scholars believe that the guardians could not have truly understood what consequences their actions would have. "
"Indeed, before the full collapse of Versal, the last of the Grandmasters, Numenal, "
"returned and attempted to rally the citizens of the world to create a substitute for the Antellion.")
sm.sendNext("#face0#However, despite the guardians' best efforts, the world descended into chaos--"
"a state of disorder shepherded in by a band of anarchists calling themselves the followers of Naricain.")
sm.sendNext("#face0#Most Versalians, including myself, decided to leave our ruined husk of a world. "
"Now, the people of Versal are an itinerant race, drifting through dimensions like nomads, our home lost perhaps for all time.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
chr.setStatAndSendPacket(Stat.pop, fame+20)