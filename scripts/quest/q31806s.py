#Securing the Front Lines | Magnus Prequest

sm.setSpeakerID(3001000)
sm.sendNext("见到你很高兴，格兰蒂斯大陆和反攻总部的环境你还适应吧？我叫你来，是为了扩大战线的事，还需要你帮帮忙。")
sm.setPlayerAsSpeaker()
sm.sendNext("事实上，我觉得补给路线被截断的原因不仅仅是由于那些战斗犬。")
sm.setSpeakerID(3001000)
sm.sendNext("对，为了能顺利运输补给，需要对#b#m401010010##k，的#r#o2400109##k占领的地方发动攻击。你能帮我们消灭#r#o2400109##k吗？")
if sm.sendAskYesNo("由于他们手持盾牌堵着通往森林的分岔路，令人十分恼火。那些盾牌兵的体力和防御力虽高，但攻击力较低。你去消灭那些盾牌兵吧？\r\n\r\n#b#e(接受后将立即移动到战场地图。如果想重新开始任务，请放弃任务后再重新开始。)#n#k"):
    sm.sendNext("我觉得这个任务不是太难，你会做得很好的。")
    sm.startQuest(31806)
    sm.warpInstanceIn(401070100)
    sm.dispose()
else:
    sm.dispose()
