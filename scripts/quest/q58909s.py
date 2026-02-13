# Tears of Princess Sakuno (Sengoku Questline) | Momiji Hills : Master Room (811000008)
# Author: Tiger

SAKUNO = 9130124
sm.setSpeakerID(SAKUNO)

sm.flipSpeaker()
sm.sendNext("谢谢你做了药。多亏了你，我才能看到菖蒲平安无事的样子，真是太好了。")

sm.flipSpeaker()
sm.sendSay("让你看到我这么失态的样子，吓到你了吧。其实我一直很担心菖蒲。")

response = sm.sendAskYesNo("你要听听我说的话吗？")

if response:
    sm.startQuest(58909) # Tears of Princess Sakuno
    sm.warpInstanceIn(811000009) # Master Room
