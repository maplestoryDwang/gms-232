# id 31824 (Enter Romero), field 401020300
sm.setPlayerAsSpeaker()
if sm.sendAskYesNo("哦，D-03发报机突然响了，快接听吧。"):
    sm.setSpeakerID(3001005) # Romero
    sm.sendNext("啊，啊！麦克风测试！老表，听见我说话吗？！")
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b嗯，听得见。你不是#p3001004#……你是谁？")
    sm.setSpeakerID(3001005) # Romero
    sm.sendNext("啊，我是商团的业绩王，野性商人#p3001005#。我去#m401020300#吧，我们在那里见咯。")
    sm.setPlayerAsSpeaker()
    sm.sendNext("#b(野性商人是什么啊……虽然很无语，可现在也没办法。去见见#p3001005#吧。)")
    sm.startQuest(31824)
    sm.completeQuest(31824)
