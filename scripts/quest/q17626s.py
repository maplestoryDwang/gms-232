# [Commerci Republic] Delfino Deleter 1

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("哦？#h0#，你怎么回来这里？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("我向统帅请求。我说想作为你的朋友帮助你们。")

sm.setSpeakerID(9390256) # Leon Daniella
sm.sendNext("我爸那个老顽固居然听了你的话。你还真了不起。不管怎么样，那就拜托你了！")

response = sm.sendAskYesNo("好，我们来好好玩一场吧！你只要帮我消灭#b30只#o9390808##k#n。剩下的就交给我了。")

if response:
    sm.sendNext("我们来打赌，看谁先结束吧？")
    sm.startQuest(parentID)
else:
    sm.sendSayOkay("What?.. You're not ready yet?")
sm.dispose()
