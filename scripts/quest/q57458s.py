# Hayato/Kanna 2nd job adv | 57162
if chr.getJob() == 4100:
    sm.setPlayerAsSpeaker()
    sm.sendNext("This battle is not over, yet I feel a sense of peace. This world is not so different from my own.")
    sm.sendNext("I feel like my old self, yet stronger. I believe this world holds many new challenges for me.")
    sm.sendNext("I have not yet regained all of my Battoujutsu skills, but one day they will return. One day, the falcon will take flight once again.")
    if sm.canHold(1142491):
        sm.giveItem(1142491)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
        sm.jobAdvance(4110)
    else:
        sm.sendNext("Please make space in your Equip inventory.")
elif chr.getJob() == 4200:
    sm.setPlayerAsSpeaker()
    sm.sendNext("This battle is not over, yet I feel a sense of peace. This world is not so different from my own.")
    sm.sendNext("I feel like my old self, yet stronger. I believe this world holds many new challenges for me.")
    sm.sendNext("I have not yet regained all of my Shikigami skills, but one day they will return. One day, the falcon will take flight once again.")
    if sm.canHold(1142507):
        sm.giveItem(1142507)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
        sm.jobAdvance(4210)
    else:
        sm.sendNext("Please make space in your Equip inventory.")