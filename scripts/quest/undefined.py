if startQuest:
    sm.chat("Starting quest " + str(parentID) + " without checking requirements, as there was no script found.")
    sm.startQuestNoCheck(parentID)
else:
    sm.chat("Completing quest " + str(parentID) + " without rewards, as there was no script found.")
    sm.completeQuestNoRewards(parentID)
