JOB_QUEST = 25112
if sm.hasQuest(JOB_QUEST) or not sm.hasQuestCompleted(JOB_QUEST) and chr.getJob() != 2412:
    sm.setPlayerAsSpeaker()
    sm.removeEscapeButton()
    sm.lockInGameUI(True)
    sm.sendNext("Aria's portrait... I was wondering if I'd run into you.")
    sm.sendNext("You always wore that silly little smile to make your advisors think everything was alright."
                "You always were too concerned about everybody else... And now you give me the skill book I was looking for. What a dear.")

    sm.lockInGameUI(False)
    sm.jobAdvance(2412)
    sm.giveSkill(20031210)  # Judgment Draw (2)
    sm.completeQuest(JOB_QUEST)
