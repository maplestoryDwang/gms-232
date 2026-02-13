# [Commerci Republic] Come Back Here!

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("幽灵…… 我的交易品…… 幽灵…… 我的交易品…… ")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("幽灵…… 我的交易品…… 幽灵……")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext(" …… 他的魂好像丢了一半……")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("喂。我把丢失的贸易品重新找回来了。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("幽…… 什么！？找回来了！？在哪呢…… 哦！！是真的呢！！这是怎么回事？你在哪找到的？")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("那个，就是…… 我抓到了幽灵。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("是真的吗？我之前还没发现，你真是了不起的冒险家啊！！")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("(你之前是怎么看我的……)")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("十分感谢！！你是我的救命恩人。你有什么愿望就告诉我吧！只要我能做到，我一定会帮你的！")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("是真的吗？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("当然啦！这是海上男子汉的约定。也是以信任为本的达尼尔拉商团的商人的约定！")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("啊，原来你在这里啊。")
sm.completeQuest(parentID)
sm.dispose()
