# Astilda's Call
# 24064
# Astilda (1033102)

astilda = 1033102

sm.setSpeakerID(astilda)
sm.sendNext("抽泣，虽然#p1033101#很想和你一起去，但是我还没有多少力气。跟着你的话，会妨碍到你的。现在我想重新修炼。双弩精灵？要是我在这种情况下妨碍你的话，#p1033100#哥哥一定会骂我的。")

sm.setPlayerAsSpeaker()
sm.sendSay("我会先留在村子里，努力恢复力量。我决心不妨碍你的修炼！不过#b你也必须努力修炼，让其他人快点醒来哦#k！")

sm.setSpeakerID(astilda)
sm.sendSay("双弩精灵……")

sm.setPlayerAsSpeaker()
sm.sendSay("#p1033102#！你的身体没事吧？！")

sm.setSpeakerID(astilda)
sm.sendSay("是的，还好我这个老太婆没什么不舒服的地方，我很健康。虽然力量变弱了，但是没问题。")

sm.setPlayerAsSpeaker()
sm.sendSay("啊……太好了。#p1033100#和#p1033101#全都很结实，但是我很担心#p1033102#你。")

sm.setSpeakerID(astilda)
response = sm.sendAskAccept("多谢国王陛下的担心，我没事。呵呵呵……国王陛下一个人先醒过来，一定经历了不少事情吧？\r\n")
if response:
    sm.giveExp(2000)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.sendSayOkay("嗯，但是没遇到什么困难。")