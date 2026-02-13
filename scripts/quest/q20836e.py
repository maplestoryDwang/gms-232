sm.removeEscapeButton()

sm.setSpeakerID(1102102)
sm.sendNext("刚才教你的东西，应该还没忘记吧？用Ctrl键攻击怪物的方法，是普通攻击。看你好像还没忘记的样子，我来继续教你下面的内容。\r\n准备好了吗？")
sm.sendSay("这次是技能攻击。可以用比普通攻击更强的力量攻击敌人。你先按快捷键K，打开技能窗。\r\n通过修炼让自己变得更强，就能使用更多的技能，因此勤奋修炼非常重要。")

sm.completeQuest(parentID)
sm.playSound("Aran/balloon", 100)
sm.avatarOriented("UI/tutorial.img/7")