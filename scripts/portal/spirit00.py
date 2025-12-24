# Knight District 2
# 271030200
# Warp to the selected spirit's Hallowed Ground map.

dawn = 271030201

informant = 2143003

# 271030201 - 271030205
hallowed = []
for spirit in range(5):
    hallowed.append(dawn + spirit)

sm.setSpeakerID(informant)
choice = sm.sendNext("You're planning to go to the Hallowed Ground? Good idea. You'll be able to weaken them by defeating the spirits there. #b\r\n"
"#L0#Hallowed Ground of Dawn#l\r\n"
"#L1#Hallowed Ground of Blaze#l\r\n"
"#L2#Hallowed Ground of Wind#l\r\n"
"#L3#Hallowed Ground of Night#l\r\n"
"#L4#Hallowed Ground of Thunder#l")

sm.warp(hallowed[choice])