medal = 1142352

if sm.canHold(medal):
    sm.chatScript("罗拉已经跟我说过了。听说你出色地完成了任务？#h0#，现在你好像已经足够强大，可以授予#b<正式十字猎人>#k称号了。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)