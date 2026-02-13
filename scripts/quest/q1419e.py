#   [Job Adv] (Lv.30)   Way of the Hunter

darkMarble = 4031013
job = "Hunter"
ATHENA_PIERCE = 10200
sm.setSpeakerID(ATHENA_PIERCE)

sm.setSpeakerID(1012100)
if sm.hasItem(darkMarble, 30):
    sm.sendNext("#t4031013#全部搜集到了啊。我确认了你的能力。从现在开始，我来把你引上猎人之路……准备好了吗？")
else:
    sm.sendSayOkay("冒险之书任务已完成。")
    sm.dispose()


sm.consumeItem(darkMarble, 30)
sm.jobAdvance(310) # Hunter
sm.completeQuestNoRewards(parentID)
sm.sendNext("好的。从现在起，你就是#b猎人#k了。猎人是凭借锐利的眼睛，将箭射入敌人胸膛的贤明之人……希望你继续努力修炼。")
