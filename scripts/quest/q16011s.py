#
# @author bakery fakery
# @npc Dame Appropiation - Legion Manager
# @quest [Legion] Whip The Whelps
#
from net.swordie.ms.enums import DailyEntry

sm.setSpeakerID(9010106)
sm.sendNext("你好，勇士！\r\n你有好好管理自己的#b冒险岛联盟#k吗？\r\n看到勇士和#b冒险岛联盟#k一同成长的样子，就不禁让我觉得选择开始这份事业，果然是做对了。")
if sm.sendAskYesNo("为了帮助勇士的发展，我准备了一个#r任务#k。\r\n\r\n在#r龙之战场#k，有好多只护卫着#r巨龙#k的#b迷你龙#k。如果你能击败#b100只#k迷你龙，我就送你10个#i4310229##b#z4310229##k作为奖励。\r\n你愿意执行这个任务吗？\r\n\r\n※该任务每个世界只能执行一次"):

    sm.sendSayOkay("你果然懂得享受挑战啊！\r\n#r迷你龙#k可以在#r龙之战场#k中通过#b联盟突袭#k狩猎。\r\n还有,如果你想要完成每日任务,一定要直接来村庄里找我。\r\n那就祝你好运了！")
    sm.reduceDailyEntry(DailyEntry.WhipTheWhelps)
    sm.startQuest(16011)
else:
    sm.sendSayOkay("Come visit me whenever you're ready for a #bmission#k")
