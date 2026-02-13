sm.removeEscapeButton()

sm.setSpeakerID(1102102)
sm.sendNext("用元素斩击消灭掉怪物了吗？非常好。嗯，好的，现在你好像可以成为修炼骑士了。")
sm.sendSay("现在基本训练全部结束了。只要通过简单的测试，你就能成为修炼骑士了。我马上把你送到考场去。一定要好好考哦～不及格就得重新接受教育！")

sm.completeQuest(parentID)
sm.warp(130030106, 0)