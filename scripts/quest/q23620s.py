# [Skill] A Warm(er) Welcome (23620)
# 23620
# Claudine (2151003)

claudine = 2151003

sm.setSpeakerID(claudine)
sm.sendNext("你好，#b#h0##k。可以的话，你能到埃德尔斯坦来一趟吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("埃德尔斯坦发生什么事了吗？")

sm.setSpeakerID(claudine)
response = sm.sendAskAccept("不，没发生什么事……但是有件事希望你能来一趟。你能现在过来吗？")
if response:
    sm.startQuest(parentID)
    sm.sendSayOkay("好的，请重新和我说话。")