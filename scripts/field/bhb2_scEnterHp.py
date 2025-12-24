# Black Heaven Inside: Core (350060180) & (350060200)  |  Stage 2 & 3 Lotus Boss  |  Used to show Lotus HP as well as warp party into the next map upon Lotus' death

LOTUS = 8240104 # Stage 2
LOTUS_2 = 8240105 # Stage 3

if sm.getFieldID() == 350060180:
    sm.showHP(LOTUS)
elif sm.getFieldID() == 350060200:
    sm.showHP(LOTUS_2)
