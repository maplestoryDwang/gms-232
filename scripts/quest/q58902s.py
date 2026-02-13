# Regards, Takeda Shingen (Sengoku Era) Questline | Near Momiji Hills 1 (811000001)
# Author: Tiger

TAKEDA = 9000427

if "1" in sm.getQRValue(58901): # Regards, Takeda Shingen
    sm.setSpeakerID(TAKEDA)

    sm.flipSpeaker()
    sm.sendNext("嗯……我想不起来放哪儿了。那上面写着解除咒术的方法……反正不是什么重要的信。")

    sm.flipSpeaker()
    sm.sendSay("哈哈哈哈，真正的男人丢了#fn12#小#fn10#东西的时候就不应该斤斤计较！")

    sm.flipSpeaker()
    sm.sendSay("我记得，信上写着最近织田军中连普通士兵都学习了咒术，因此武将即使把伤养好也醒不过来。")

    sm.setQRValue(58901, "2") # Regards, Takeda Shingen

elif "2" in sm.getQRValue(58901): # Regards, Takeda Shingen
    sm.setSpeakerID(TAKEDA)

    sm.flipSpeaker()
    sm.sendNext("为了解除那个咒术，需要做几件事。你能帮我吗？")

    sm.flipSpeaker()
    sm.sendSay("哈哈，我就知道你会帮我的。")

    sm.flipSpeaker()
    sm.sendSay("我们得先搜集有关咒术的情报。从这里的 #o9450024:#应该能获得一些线索吧？")

    response = sm.sendAskYesNo("不用很多，只要30个就够分析了。那就拜托你啦！")

    if response:
        sm.flipSpeaker()
        sm.sendNext("Ha, I knew you would do it.")

        sm.flipSpeaker()
        sm.sendSay("First we need to know more about the spells. Eliminate some Oda Warrior Trainee monsters to find clues.")

        sm.flipSpeaker()
        sm.sendSay("I don't need that many just 30 of them. That should be enough to mash into reason. Now, get to it!")

        sm.setQRValue(58901, "3") # Regards, Takeda Shingen
        sm.startQuest(parentID)
