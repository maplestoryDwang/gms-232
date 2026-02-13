# Start of The Path of Bravery
KIKU = 1102000
sm.setSpeakerID(KIKU)

response = sm.sendAskYesNo("你也知道，我们冒险骑士团是冒险岛世界的女皇希纳斯为了对抗黑魔法师而建立的。我们忠于女皇，正在为了阻止即将醒来的黑魔法师而积蓄力量。\r\n我看你好像需要大量的修炼才行……不过别担心，我们这些教官会把你打造成一个合格的骑士。\r\n\r\n准备好了吗？")

if not response:
	sm.sendSayOkay("奇姆负责骑士团的各种训练。你再去见见奇姆。\r\n啊，按#e#b快捷键Q#k#n，可以通过#e#r任务信息窗#k#n再次确认任务内容。希望你能记住。有什么不清楚的地方，一定要确认一下，这样才不会出问题。")
	sm.dispose()

sm.removeEscapeButton()

sm.sendSay("Your first stop is Kimu. If you get lost, hit the #bQ key#k and check your #rQuest Info#k. "
"That's tip number one: always check your quest info before you go running your mouth!")

sm.startQuestNoCheck(parentID)
