# The Elven Court
# 24065
# Phillius (1033100)

phillius = 1033100

sm.setSpeakerID(phillius)
sm.sendNext("现在我们……精灵的三位长老全部聚齐了。虽然其他百姓们还被黑魔法师的诅咒困在冰里……但是有国王在，有我们在，我们就不会害怕任何人。")

sm.setPlayerAsSpeaker()
sm.sendSay("现在精灵的三位长老全部聚齐了……你还记得吗？双弩精灵，我们的国王？三位长老全部聚齐的话，就能使用一个魔法。名叫#b纯白净化#k……")

sm.setSpeakerID(phillius)
sm.sendSay("纯白净化的话，我应该……")

sm.setPlayerAsSpeaker()
sm.sendSay("本来是在国王遇到危急情况，无法使用力量的时候使用的魔法。可以将所有精灵精神深处最纯洁最高贵的力量召唤出来。使用之后，其他陷入诅咒的人一定就会醒来。")

sm.setSpeakerID(phillius)
sm.sendSay("你们也因为诅咒的影响而变弱了……没关系吗？")

sm.setPlayerAsSpeaker()
sm.sendSay("纯白净化可以通过精神共鸣将精灵们连接在一起，增强相互的力量……虽然不是很简单，但只需消耗很少的力量就行。现在马上就可以使用。")

sm.startQuest(parentID)
sm.showEffect("Effect/Direction5.img/effect/mercedesQuest/elfElder/0")
sm.showEffect("Effect/Direction5.img/effect/mercedesQuest/frame/0")