# Soaring skill quest

from net.swordie.ms.constants import SkillConstants

sm.setSpeakerID(2085000)
sm.sendNext("我要的#b#t4032531##k拿来了吗？")
sm.sendSay("好的，准备好了吗？准备好了的话，我就马上帮你配制秘药，然后洒在你的身上。那样你就能飞了。")
sm.consumeItem(4032531)
sm.completeQuestNoRewards(parentID)
sm.giveSkill(SkillConstants.getSoaringByJob(chr.getJob()))
sm.chatScript("啊……没拿到#b#t4032531##k吗？你去跟神木村的#b村长塔塔曼#k说一声，他应该会给你的。")
sm.sendPrev("Ok. Looks like you're all set to use the Soaring skill. There's one thing you should keep in mind. You can only use the Soaring skill where there's Dragon energy. The only such place that I know of is the Crimson Sky Dock.")
