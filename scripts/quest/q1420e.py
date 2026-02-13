#   [Job Adv] (Lv.30)   Way of the Crossbowman

darkMarble = 4031013
job = "Crossbowman"
ATHENA_PIERCE = 10200
sm.setSpeakerID(ATHENA_PIERCE)

sm.setSpeakerID(1012100)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部集齐了。我充分确认了你的能力。我现在就指引你前往弓箭手的道路……你准备好了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(320) # Crossbowman
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的。从现在起，你就是#b弩弓手#k了。弩弓手是凭借锐利的眼睛，将箭射入敌人胸膛的贤明之人……希望你继续努力修炼。")