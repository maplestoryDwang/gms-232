# 410000002
MOONBEAM = 3002100
CATERPILLAR = 9300877

sm.spawnMob(CATERPILLAR, -245, -410, False)
sm.spawnMob(CATERPILLAR, -245, -410, False)
sm.removeEscapeButton()
sm.setSpeakerID(MOONBEAM)
sm.sendNext("你看到那~树上的幼虫了吗？继续放任不管的话，就连狐狸树的根都要被啃光了。怎么样才能抓住它呢？")
sm.sendSay("你该不会是想爬上去吧？我不是说使用#b[缩地]#k技能的话，一下子就能接近怪物的吗？好了，去消灭幼虫吧！快！")
sm.chatScript("请使用[缩地]技能接近树上的幼虫后, 将它消灭吧。")
sm.startQuest(parentID)


