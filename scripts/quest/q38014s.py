COMPASS = 3002006

# In GMS, the correct answer and any after it seems to be in blue while any before it are grey, changed to just the correct answer being blue because why not


sm.setSpeakerID(COMPASS)

if not sm.sendAskAccept("是吗？你正在参加狐狸的考试？了不起，真了不起。你那不畏艰险、勇攀高峰的精神，一定会成为后辈们的榜样。好吧，考试现在开始。如果你能答对我所有的问题，我就认可你，给你盖上脚印图章。好了，你想现在开始吗？"):
    sm.sendSayOkay("那我来问第一个问题。以下哪个是我们尖耳狐狸最喜欢的食物？\r\n#L0# 虫干#l\r\n#L1# 斑点翅膀#l\r\n#L2# 麻雀蛋#l\r\n#L3# 老鼠尾巴#l\r\n#b#e#L4# 生肝#l")
    sm.dispose()

answer = sm.sendSay("是吗？你正在参加狐狸的考试？了不起，真了不起。你那不畏艰险、勇攀高峰的精神，一定会成为后辈们的榜样。好吧，考试现在开始。如果你能答对我所有的问题，我就认可你，给你盖上脚印图章。好了，你想现在开始吗？")

if not answer == 4:
    sm.sendNext("那我来问第一个问题。以下哪个是我们尖耳狐狸最喜欢的食物？\r\n#L0# 虫干#l\r\n#L1# 斑点翅膀#l\r\n#L2# 麻雀蛋#l\r\n#L3# 老鼠尾巴#l\r\n#b#e#L4# 生肝#l")
    sm.dispose()

answer = sm.sendSay("答对了。我们尖耳狐狸最喜欢的食物是生肝。接下来是第二个问题。以下哪个是我们尖耳狐狸信奉的守护神？\r\n#L0# 虎神#l\r\n#b#e#L1# 狐神#k#n#l\r\n#L2# 狼神#l\r\n#L3# 山神#l\r\n#L4# 瘟神#l")
if not answer == 1:
    sm.sendNext("没错。我们尖耳狐狸信奉狐神。下面是最后一个问题。我们尖耳狐狸拥有一种特别的能力。你知道是什么吗？\r\n#b#e#L0# 操控精灵的能力#k#n#l\r\n#L1# 操控时间的能力#l\r\n#L2# 操控动物的能力#l\r\n#L3# 不听话的能力#l\r\n#L4# 可爱得让人受不了的能力#l")
    sm.dispose()

answer = sm.sendSay("回答正确。我们尖耳狐狸拥有操控精灵的能力。你也得到狐神的护佑了吧？希望你能珍惜那种能力。如果滥用的话，可能会招致狐神的愤怒。")
if not answer == 0:
    sm.sendNext("好的，我的考试全部结束了。我来给你盖一个脚印。你去找#r#p3002009##k吧。他会告诉你下一项考试的内容。\r\n#fUI/DialogImage.img/quest/0")
    sm.dispose()

sm.sendNext("That's right, we have the power to handle spirits. I heard you got one too, from the fox god. Use it wisely, or the fox god will not be pleased.")
sm.sendSay("This is it. My test is done. Here is my paw stamp, so now go talk to #r#p3002009##k. She will give you the next test.\r\n                                                                               #fUI/DialogImage.img/quest/0")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.giveExp(2800)
