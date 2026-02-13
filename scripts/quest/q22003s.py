# 22003 |   Delivering the Lunch Box (Evan intro)
sm.setSpeakerID(1013100)
if sm.sendAskYesNo("去农场干活的时候，#b爸爸#k忘了把便当带过去了。你能去#b#m100030300##k给爸爸#b送便当#k吗？"):
    if sm.canHold(4032448):
        sm.sendNext("呵呵，小不点果然是个好孩子～#b从家里出去之后，往左边走#k。爸爸一定饿极了，你最好快点给他送过去。")
        sm.sendNext("如果不小心把便当弄丢了，就马上回来。我再给你包一份。")
        sm.startQuest(parentID)
        sm.dispose()
    else:
        sm.sendNext("Please make room in your Etc Inventory.")
        sm.dispose()
else:
    sm.dispose()

