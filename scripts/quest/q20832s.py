
sm.setSpeakerID(1102102)

sm.removeEscapeButton()
sm.sendNext("基本攻击你好像确实已经学会了。这次让我来教你更深奥的攻击方法吧。")

sm.setSpeakerID(1102100)
sm.sendSay("#h0#，训练还行吧？继续努力。奇姆、奇赞。你去和他们谈谈……")

sm.setSpeakerID(1102102)
sm.sendSay("#h0#，你先休息一下吧。")

sm.setSpeakerID(1102100)
sm.sendSay("#h0#，你在这里稍等一下。我很快就会回来。不要一个人到处乱逛！")

sm.setSpeakerID(1102102)
sm.sendSay("(嘀咕嘀咕嘀咕)")

sm.setSpeakerID(1102101)
sm.sendSay("...")

sm.setSpeakerID(1102102)
sm.sendSay("#h0#! Do not move from that spot! I will return shortly.")

sm.startQuest(parentID)
sm.completeQuest(parentID)
