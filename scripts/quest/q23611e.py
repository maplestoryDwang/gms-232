# 23611 - Xenon 2nd job advancement
VERITAS_MAP = 230050000
PROF = 2300001
MEDAL = 1142576

sm.setSpeakerID(PROF)
if chr.getJob() == 3600 and chr.getLevel() >= 30:
    sm.sendNext("Welcome. You must be the one Claudine mentioned. I am Professor Dreamboat. Sorry, the nickname's sort of hard to escape."
                " I am the head of Resistance Research Command, otherwise known as #m" + str(VERITAS_MAP) +"#.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("#m" + str(VERITAS_MAP) + "#?")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("I doubt #bClaudine#k gave you the details over an insecure channel. "
                "We are a research group, dedicated to tracking and addressing strange phenomena across the Maple World that "
                "may be related to the Black Mage. We have gathered scholars of all areas of expertise to investigate these "
                "happenings.")
    sm.sendNext("Unfortunately, we are sorely lacking in people. That's why we're so glad to have a field agent from the Resistance amongs us now.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("But, I... I'm not free to go where I please right now.")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("Ah, yes, someone is tracking you, right? Well, have no worries. I'm sure somebody here can figure that part "
                "out. This base is completely undetectable to any scanners, so you're safe enough inside.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("Interesting. Would it be possible to create a wearable version of your scrambling systems? Perhaps that would...")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("Slow down there, buddy. You're not a building. We can't just load you down with three-foot-thick lead... Or can we?")

    sm.setPlayerAsSpeaker()
    sm.sendNext("I can carry a great deal of weight with my current booster alignment.")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("You'd be the size of a two story building. It's not a good plan.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("Unfortunate. I suppose that means this is the only place I can feel safe.")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("Well, there might be another way. Maybe we can create a #bPulse Disruptor#k.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("#bPulse Disruptor#k?")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("If you're giving off a signal, I'm sure we can create SOME sort of couner-system to block it out. "
                "It would require multiple devices though, probably scattered all over...")
    sm.sendNext("This is actually very similar to something #bClaudine#k requested. I bet I can dig up that research somewhere...")

    sm.setPlayerAsSpeaker()
    sm.sendNext("Is there anything I can do?")

    sm.resetParam()
    sm.setSpeakerID(PROF)
    sm.sendNext("Well, it's probably a long shot, but would you like to become Veritas' special agent?")
    if sm.sendAskYesNo("If you're willing to take the job, I'm ready to hire you as the one-and-only #bVeritas#k special agent. "
                       "Do you accept?\r\n\r\n#b#e<Accept 2nd Job Advancement>"):
        if sm.canHold(MEDAL):
            sm.giveItem(MEDAL)
            sm.setJob(3610)
            sm.addAP(5)
            sm.addSP(5)
            sm.addMaxHP(150)
            sm.addMaxMP(150)
            sm.completeQuest(parentID)
            sm.sendNext("Congratulations, special agent #h #")
            sm.sendNext("You probably saw it when you were walking in, but one of our engineers created the world's gaudiest "
                        "transport device. You can use it to go out on missions, or get back to the lab any time.")
            sm.sendNext("He named it the #bPromessa#k. You can use the #bPromessa Escape#k skill to call it wherever you are.")
            sm.sendSayOkay("I know it's pretty rediculous looking, but the design is solid as can be.")
        else:
            sm.sendNext("Please make some space in your EQUIP tab for your medal.")
else:
    sm.sendNext("You don't seem familiar...")
