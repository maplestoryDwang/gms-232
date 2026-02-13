# 34478 - The Harmony of the Forest
sm.setSpeakerID(3003301)
sm.sendNext("谢谢，多亏了你，森林终于恢复了原貌，作为谢礼，我要送你#b#i1712004:# #t1712004:##k！")
if sm.canHold(1712004):
    sm.giveItem(1712004)
    sm.completeQuest(parentID)
    sm.sendNext("不过等那些变得邪恶的精灵重新恢复原状，可能会稍微花点时间。")
else:
    sm.sendNext("光之漩涡很快就会消失，你也很快就会离开这里了吧？穿越这片森林，去往更为艰险的地方……")
