#Lotus boss out portal
BLACK_HEAVEN_CORE_ENTRANCE = 350060300
BLACK_HEAVEN_CORE_LAST_NORMAL = 350060900

sm.flipSpeaker()
sm.flipDialoguePlayerAsSpeaker()
sm.setBoxChat()

dialog = str()

if not sm.hasMobsInField() and sm.getFieldID() == BLACK_HEAVEN_CORE_LAST_NORMAL:
    dialog = "You have defeated Lotus. Do you want to leave?"

else:
    dialog = "Are you sure you want to leave the battlefield and abandon your party members?"

if sm.sendAskYesNo(dialog):
    sm.warpInstanceOut(BLACK_HEAVEN_CORE_ENTRANCE)