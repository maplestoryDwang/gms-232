#   [Job Adv] (5th job)   5th Job : Blessings of the Goddess

sm.setSpeakerID(2140001)
sm.sendNext("做好接受新力量的准备了吗？那么现在该去见见女神了。")
#todo show image
if sm.sendAskYesNo("据说，在太初的黑暗时期，女神们借助艾尔达创造了现在的世界。\r\n\r\n而且，听说无论是人类，还是精灵、魔族和龙族，其中都有极少数人获得了女神所传授的#b控制艾尔达的能力#k。"):
    sm.startQuest(parentID)
    sm.sendSayOkay("#b女神#k们也许知道方法。从古至今，是女神们将艾尔达和人类连接在了一起。\r\n\r\n你最好到我告诉你的地方去，见见女神们。")
sm.dispose()