# [Root Abyss] The Mysterious Girl

MYSTERIOUS_GIRL = 1064001 # npc Id

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我想从这里出去。")

sm.setPlayerAsSpeaker()
sm.sendNext("你到底在说什么啊？这是什么地方？你是谁？")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("这里？这里是鲁塔比斯。我想离开这里。请你帮帮我。")

sm.setPlayerAsSpeaker()
sm.sendNext("(唉……一直在自言自语。真费劲。)")

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("(看来她好像是迷路了，要帮帮她吗？)")

sm.setPlayerAsSpeaker()
sm.sendNext("知道了。我来看看有没有办法离开这里。")

response = sm.sendAskYesNo("你真的愿意帮我吗？不许骗我哦！")

if response:
    sm.sendNext("嗯，肯定在某处有出去的路……")
    sm.startQuest(parentID)
else:
    sm.dispose()

sm.setSpeakerID(MYSTERIOUS_GIRL)
sm.sendNext("我想离开这里。")
sm.dispose()
