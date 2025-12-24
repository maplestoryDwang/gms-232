# Simia Quiet Village Path : Chu Chu Island |  Hungry Muto entry pq
sm.setSpeakerID(3003160)
choice = sm.sendNext("#b<Hungry Muto> \r\n\r\n "
            "#L0#Enter <Hungry Muto>.#l\r\n"
            "#L1#Listen to Simia's Explanation.#l \r\n"
            "#L2#Check remaining attempts available today.#l")

if choice == 0:
    choice2 = sm.sendNext("#b<Hungry Muto> \r\n"
                "Please select your difficulty\r\n"
                "#L0#Normal#l\r\n"
                "#L1#Hard#l\r\n")
    if choice2 == 0:
        sm.warpInstanceIn(921170050, 0, True)

elif choice == 1:
    sm.sendNext("You have to select which blablabla TODO")
elif choice == 2:
    sm.sendNext("TODO")