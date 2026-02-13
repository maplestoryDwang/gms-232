# Danika's Call
# 24063
# Danika (1033101)

danika = 1033101

sm.setSpeakerID(danika)
sm.sendNext("双弩精灵！双弩精灵！我想见你！呜呜～虽然我装得很坦然，但我一直害怕我们再也不能见面了！")

sm.setPlayerAsSpeaker()
sm.sendSay("你身体没事吧，#p1033101#？")

sm.setSpeakerID(danika)
sm.sendSay("是的！没事！就身体而言，我自信比任何精灵都要强壮！虽然没有自信能像以前那样使用技能，但是没有不舒服的地方！")

sm.setPlayerAsSpeaker()
sm.sendSay("太好了……")

sm.setSpeakerID(danika)
response = sm.sendAskAccept("当然啦！很棒吧！独自生活在已经历经数百年时间的世界！那是多么苦闷的事情啊！呜哇！~ 从现在开始，就让#p1033101#我来陪伴你吧！	\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp")
if response:
    sm.giveExp(1000)
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.sendNext("I wish I could go with you, but I'm still too weak from the curse. "
    "I'd only get in your way, Your Majesty. Phillius would eliminate me if I tripped you up...")
    sm.sendPrev("I'll be here, training, for now. "
    "Your Majesty, please promise you'll #btrain really hard and free our people from the ice#k! Okay?")