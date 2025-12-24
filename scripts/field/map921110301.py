sm.setPlayerAsSpeaker()
if sm.hasQuestCompleted(38074) and not sm.hasQuestCompleted(38075):
    sm.removeEscapeButton()
    sm.startQuest(38075)
    sm.completeQuest(38075)

sm.sendNext("I think I'm at the right place, but why are there so many boxes? I suppose I need to break them one at a time.")
sm.chatScript("You've found the item required in the boxes. You can continue your job advancement.")
