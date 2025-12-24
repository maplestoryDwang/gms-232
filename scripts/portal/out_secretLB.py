# Portal out of Secret Library
if not sm.hasQuest(20883) and sm.hasQuestCompleted(20882):
    sm.sendNext("Please accept the quest from Hawkeye before leaving.")
else:
    sm.warpInstanceOut(222020000, 0)
    sm.dispose()