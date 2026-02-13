sm.setPlayerAsSpeaker()
sm.sendNext("我从别人的记忆中消失的事已经确凿。可是, 如果只是不记得我的话, 那记忆中一定会留下空白的。至少会有‘是谁’之类的疑问。")
if sm.sendAskYesNo("那么也可以换个角度想, 不是吗? 如果说删除存在不是单纯抹去记忆的话......不管怎样, 我一定要确认一下。那么现在就去吧? \r\n#r(接受任务后将马上移动到相关地图。)"):
    sm.warp(211060000)
    sm.startQuest(parentID)