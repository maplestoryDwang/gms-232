# [Shaolin Temple] For Shaolin Temple

ZHEUNG_GUAN = 9310046
WISE_CHIEF_PRIEST = 9310053
ELDER_JUNG = 9310049
HAIFENG_FASHI = 9310051

sm.removeEscapeButton()
sm.setSpeakerID(ELDER_JUNG)
sm.setBoxChat()
sm.sendNext("我的老朋友#p9310053#居然变成了妖怪……他为何什么都不告诉我。他肯定非常痛苦。")

sm.flipBoxChat()
sm.flipBoxChatPlayerAsSpeaker()
sm.sendNext("#p9310053#肯定也没想到会变成这样。他肯定没料到微小的野心和恶行在不断堆积后竟把自己变成了妖怪。")

sm.removeEscapeButton()
sm.setSpeakerID(ELDER_JUNG)
sm.setBoxChat()
sm.sendNext("妖怪现在依然侵扰着藏经阁内部。虽然方丈大师的肉身消失了，但妖怪依旧以鬼魂的形态在此徘徊。\n以后，你可以通过守卫在藏经阁入口处的#p9310051#，进入<首领怪：方丈大师>。当然了，如果你挑战时足够努力，就可以获得与之相对应的奖励。")

sm.sendNext("我会暂时待在这里，并努力帮助少林寺变回从前的样子。你可以随时来这里找我。")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.completeQuestNoRewards(62044)
sm.giveExp(2525566)
sm.giveItem(1142912) # Shaolin Savior (Medal)