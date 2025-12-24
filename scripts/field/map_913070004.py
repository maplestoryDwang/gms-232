# Manual Labor
if not sm.hasQuest(20034) or not sm.hasQuestCompleted(20034):
    #sm.lockInGameUI(True)
    sm.chatScript("Mr. Limbert's General Store")
    sm.chatScript("Month 3, Day 11")
    sm.startQuestNoCheck(20034)
    sm.chatScript("Someone suspicious is in the back yard...")