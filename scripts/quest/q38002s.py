# Shade Into [A New Name]
SILVER = 3002005
MOONBEAM = 3002000
SWIFT_STRIKE = 25001000
VULPES_LEAP = 25001204

sm.setSpeakerID(SILVER)
sm.sendNext("这么说来，你的名字是‘人类’了？呵呵，真是个有趣的名字。嗯？你说不是名字？那你叫什么？")

sm.setPlayerAsSpeaker()
sm.sendSay("我叫…………我叫…………(最早给无名无姓四处流浪的我起名字的是弗里德啊。现在的弗里德…………)")

sm.setSpeakerID(SILVER)
sm.sendSay("嗬，报个姓名怎么还磨磨蹭蹭的？莫非你有什么苦衷？好吧，看你的表情应该就是了。那么，我来给你起个好听的名字吧！你的毛发是黑色的，就叫玄氏吧？ 要么，你的身材高大，叫魁硕也不错。")

sm.setPlayerAsSpeaker()
sm.sendSay("不，我有名字…………")

sm.setSpeakerID(MOONBEAM)
sm.sendSay("唉，什么呀！和人类一点都不相配。既然你是我捡回来的，名字也该由我来起。嗯…………嗯…………你说你来自那个只有一个月亮的地方，对吧？所以…………藏有一个月亮的地方。隐…………月…………嗯，隐月！隐月不错。意思是隐藏的月亮，怎么样？")

sm.setSpeakerID(SILVER)
sm.sendSay("哎呀，那个也太土了吧？黑仔和年糕之类的名字不更好吗……")

sm.setPlayerAsSpeaker()
sm.sendSay("我要叫隐月。")

sm.setSpeakerID(SILVER)
sm.sendSay("嗯？你是认真的？嗬，爱好还挺独特的。反正，既然你喜欢我也没办法…………好吧，那从现在开始你的名字就是隐月了。一开始可能会有些别扭，不过渐渐就会适应的。")

if sm.sendAskAccept("那么隐月，你要不要参观一下你今后生活的房子呢？因为那里已经很久都没有主人了，所以堆积了厚厚的尘埃。如果有什么不便的，不必见外，直接告诉我。"):
    sm.sendNext("你沿着这条路往左径直走，就会看见一个摆着酱缸台的房子。那就是你以后住的地方，你仔细瞧瞧吧。因为房子的主人从不回来，所以比露宿街头强多了吧。所需物品我会为你准备的。")
else:
    sm.sendNext("（好像失去了所有的力量。虽然大不如前，但感觉还在。暂时应该没事了。）")
    sm.dispose()

sm.setJob(2500)
sm.setSTR(4)
sm.setINT(4)
sm.setDEX(4)
sm.setLUK(4)
sm.setAP(4 + chr.getLevel() * 5)
sm.addSP(5, True)
sm.addMaxHP(150)
sm.addMaxMP(50)
sm.giveItem(3010766)
sm.createQuestWithQRValue(parentID, "", True)
sm.startQuest(parentID)
sm.giveSkill(SWIFT_STRIKE)
sm.giveSkill(VULPES_LEAP, 4)