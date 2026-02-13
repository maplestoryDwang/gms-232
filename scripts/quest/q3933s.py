# Ardin's Sand Bandits
# 3933
# Ardin (2101003)

ardin = 2101003

sm.setSpeakerID(ardin)
sm.sendNext("没想到你会这么的强…以你的水平也许可以成为沙子图团的团员也说不定。对沙子图团员来说，最重要的就是力量的强大，而你…看来已经具备了足够的实力！但我还是要再进行一次测试…如何？可以接受吗？")
response = sm.sendAskAccept("若想要实际测试你的力量，应该需要亲自去体验吧？我想和你进行一场对战！别担心，我也不想伤害你…就用我的分身来对付你好了！可以马上进行对战吗？")
if response:
    sm.sendNext("好！充满自信是吗？")
    sm.startQuest(parentID)
    sm.warpInstanceIn(926000000, False)
else:
    sm.sendSayOkay("Remember, you can't become a member of the Sand Bandits without my approval. I'll be waiting.")