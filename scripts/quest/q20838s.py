sm.removeEscapeButton()

sm.setSpeakerID(1102104)
sm.sendNext("#b(怦怦……)#k")
sm.sendSay("……啊！吓死我了！我快要忙死了，没发现有人过来。你就是#p1102006#所说的那个初心者？很高兴见到你！我叫#p1102007#。你想现在开始考试吗？并不难，只要好好记住之前学过的就行。")
sm.sendSay("考试很简单。看到那边的箱子了吗？破坏掉箱子之后，就会有怪物出现。消灭掉怪物之后，可以获得考试的证物。")
sm.sendSay("嗯？你问打破箱子的办法？啊，箱子仅对普通攻击起反应。\r\n所以你用#b普通攻击打碎箱子#k，对#b怪物还是用技能攻击#k更方便些！你去收集3个考试的证物吧。")
sm.startQuest(parentID)
sm.avatarOriented("UI/tutorial.img/9")