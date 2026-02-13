# [Commerci Republic] Eye for an Eye

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("好了，不要有负担，你就告诉我吧。我能帮你些什么？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("嗯…… 那我就跟你直说吧。我想见见吉尔伯特·达尼尔拉。")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("………… 我没有听错吧…… 你说什么？")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("我想见#b吉。尔。伯。特。达。尼。尔。拉#k。")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("额…… 那个，我……。")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("怎么了？很难办？")

sm.setSpeakerID(9390225) # Tepes
sm.sendNext("不…… 不是说很难办……")

sm.setPlayerAsSpeaker() # Has to be Player Avatar
sm.sendNext("海上男子汉…… 刚刚好像跟我说了些什么……")

sm.setSpeakerID(9390225) # Tepes
response = sm.sendAskYesNo("……………… 唉，不管了。好的。从这里往东边一直~ 走，经过喷泉之后，就能看到一个有金色点缀的白色建筑物。那就是达尼尔拉商团的办公室。吉尔伯特应该在那里面。")

if response:
    sm.setSpeakerID(9390225) # Tepes
    sm.sendNext("我会跟商团提前打好招呼的，你应该能进得去。见到吉尔伯特的话，你一定要礼貌点。他在整个凯梅尔兹共和国都有着影响力。")
    sm.startQuest(parentID)
sm.dispose()
