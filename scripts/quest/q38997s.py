# 410000002
MOONBEAM = 3002100

sm.setSpeakerID(MOONBEAM)
sm.sendNext("好的！我先来说明一下#b[缩地]#k这个技能。你要竖起耳朵听好！哎呀，我忘了隐月没有耳朵了。")
sm.sendSay("总之，#b[缩地]#k是可以快速移动或快速靠近敌人的技能。像隐月这么慢的话，根本连一只猎物都抓不到！")
sm.sendSay("好了，你来使用一些#b[缩地]#k试试。对了，把技能添加到快捷栏中使用，会更加方便。")
sm.startQuest(parentID)

sm.sendNext("请试着使用[缩地]技能。")
sm.sendSay("怎么样？是不是快极了？使用这个技能的话无论是敌人还是猎物，都可以瞬间接近。")
sm.sendSay("而且，在使用其他技能的过程中使用这一技能的话，将#b终止正在使用的技能#k并且#b移动#k！")
sm.sendSay("隐月是个傻瓜，所以这么说的话应该不是很明白吧？")
sm.completeQuest(parentID)
sm.giveExp(700)


