# What happened to Ayame (Sengoku Era) Questline

AYAME = 9130106

sm.setSpeakerID(AYAME)

response = sm.sendAskYesNo("你想知道我来这里的过程？说来话长……啊，真是麻烦……你要听吗？")

if response:
    sm.warp(811000009) # Master Room
