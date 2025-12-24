# Zakum door portal
fields = [
["#bEasy#k", 211042402],
["Normal", 211042400],
["#rChaos#k", 211042401]
]

sm.setSpeakerID(2030008) # Adobis
s = "Which difficulty of Zakum do you wish to fight? \r\n"
i = 0
for entry in fields:
    s += "#L" + str(i) + "#" + entry[0] + "#l\r\n"
    i += 1
answer = sm.sendNext(s)

sm.warp(fields[answer][1])
sm.dispose()
