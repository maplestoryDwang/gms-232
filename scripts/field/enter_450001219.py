# id 450001219 (Cave of Repose : Split Road of Destiny), field 450001219
if chr.getInstance() is not None:
    sm.warpInstanceOut(chr.getFieldID())
elif sm.hasQuest(34119):
    sm.progressMessageFont(3, 20, 8, 0, "Go through the portal below to defeat Arma and rescue Kao.")

if not sm.hasQuest(34119) and not sm.hasQuestCompleted(34119) and sm.hasQuestCompleted(34118):
    sm.startQuestNoCheck(34119)