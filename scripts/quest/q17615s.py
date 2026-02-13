# [Commerci Republic] The Trade Kingdom

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("打扰了。")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("你是？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("你好。我想去达尼尔拉商团，该怎么走呢？")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("你是谁？我就是达尼尔拉商团的人，我好像之前没见过你。你找我们商团，是有什么事吗？？如果你想去那工作的话，就跟我说吧。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("我是来找#e#b吉尔伯特·达尼尔拉#k#n的。我有话要对他说。")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("你说什么？你以为我们统帅是你的朋友吗？他不是每个人想见就能见的。你还是走吧。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("#b(该死…… 想要见到地位高的人果然不容易。怎么办呢。)#k")
sm.completeQuestNoRewards(parentID)
sm.dispose()