# Hayato/Kanna 3rd job adv | 57162
if chr.getJob() == 4110:
    sm.setPlayerAsSpeaker()
    sm.sendNext("This battle is not over, yet I feel a sense of peace. This world is not so different from my own.")
    sm.sendNext("I feel like my old self, yet stronger. I believe this world holds many new challenges for me.")
    sm.sendNext("I have not yet regained all of my Battoujutsu skills, but one day they will return. One day, the falcon will take flight once again.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.jobAdvance(4111)
elif chr.getJob() == 4210:
    sm.setPlayerAsSpeaker()
    sm.sendNext("This battle is not over, yet I feel a sense of peace. This world is not so different from my own.")
    sm.sendNext("I feel like my old self, yet stronger. I believe this world holds many new challenges for me.")
    sm.sendNext("I have not yet regained all of my Shikigami skills, but one day they will return. One day, the falcon will take flight once again.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.jobAdvance(4211)