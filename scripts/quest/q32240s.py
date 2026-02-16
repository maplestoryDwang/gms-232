# Created by MechAviv
# Quest ID :: 32240
# The Explorer Book and A Maple Leaf

sm.setSpeakerID(1012100)
# sm.flipDialogue()
# sm.setSpeakerType(3)
sm.sendNext("#h0#, 我有东西要交给你。这是一本#b冒险之书#k, 它可以记录你日后在冒险岛世界旅行过程中所经历的事情。在这里可以记录将要发生的只属于你的故事。")


# sm.setSpeakerID(0)
sm.flipDialoguePlayerAsSpeaker()
sm.flipDialogue()
# sm.setSpeakerType(3)
if sm.sendAskAccept("怎么样，要领取#b冒险之书#k吗？"):
    sm.createQuestWithQRValue(32360, "1")
    sm.cancelFlipDialogue()
    sm.setSpeakerID(1012100)
    # sm.flipDialogue()
    # sm.flipSpeaker()
    # sm.setSpeakerType(0)
    sm.sendNext("给你……这本冒险之书正适合你……")


    sm.setSpeakerID(1012100)
    # sm.flipDialogue()
    # sm.setSpeakerType(3)
    sm.sendSay("详细内容你可以慢慢查看。")


    sm.setSpeakerID(1012100)
    # sm.flipDialogue()
    # sm.setSpeakerType(3)
    sm.sendPrev("虽然这条路并不平坦, 但我希望即将启程的你可以尽情享受这次冒险之旅。")
    sm.startQuest(32240)

else:
    sm.cancelFlipDialogue()
    sm.setSpeakerID(1012100)
    # sm.setSpeakerType(3)
    sm.sendNext("你为什么不接受呢？你不必有任何负担的。")
