#
# @author baking legion needs
# @npc Dame Appropiation - Legion Manager
# @quest [Legion] Defeat the Golden Wyvern
#
from net.swordie.ms.enums import DailyEntry

sm.setSpeakerID(9010106)
sm.sendSayOkay("你好，勇士！\r\n你有好好管理自己的#b冒险岛联盟#k吗？\r\n看到勇士和#b冒险岛联盟#k一同成长的样子，就不禁让我觉得选择开始这份事业，果然是做对了。")
if not sm.sendAskYesNo("为了帮助勇士的发展，我准备了一个#r任务#k。\r\n\r\n听说在对付那些护卫#r巨龙#k的#b迷你龙#k的过程中，偶~尔会出现非常稀有的#r黄金飞龙#k。如果你能击败#b20只#k黄金飞龙，我就送你20个#i4310229##b#z4310229##k作为奖励。\r\n你愿意执行这个任务吗？\r\n\r\n※该任务每个世界只能执行一次"):

    sm.sendSayOkay("你果然懂得享受挑战啊！\r\n#r黄金飞龙#k可以在#r龙之战场#k中通过#b联盟突袭#k狩猎。\r\n还有,如果你想要完成每日任务,一定要直接来村庄里找我。\r\n那就祝你好运了！")
else:
    sm.sendSayOkay("Excellent!\r\n#rGolden Wyverns#k spawn in the #rDragon's Domain#k which reached by starting a #bLegion Raid#k. Come visit me when you're ready to turn in your daily quests.\r\nGood luck!");
    sm.startQuest(16012)
    sm.reduceDailyEntry(DailyEntry.DefeatGoldenWyvern)
