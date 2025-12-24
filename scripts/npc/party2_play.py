# Red Balloon(2040036)/ Lime Balloon(2040039) | Ludibrium dimension pq stage npc

DIMENSIONAL_PASS_COUNT = "DimensionalPassCount"
STAGE_2_CLEARED = "Stage2Cleared"
STAGE_3_ORDER = "Stage3Order"
stage3OrderArray = [0, 0, 0, 0, 0, 0]
STAGE_5_CLEARED = "Stage5Cleared"
stage5Array = [0,0,0,0,0,0]

#Stage 1
if sm.getFieldID() == 922010100:
    sm.setSpeakerID(2040036)
    if field.hasProperty(DIMENSIONAL_PASS_COUNT):
        if field.getProperty(DIMENSIONAL_PASS_COUNT) >= 20:
            sm.sendNext("You have collected all the passes. Please proceed to the next stage through the portal.")
        else:
            sm.sendNext("Please talk to me again after collecting all #r20#k Dimensional passes from the monsters in this stage.")
    else:
        sm.sendNext("Welcome! Please start by defeating the monsters in this stage and collecting the Dimensional passes they hold.")

#Stage 2
elif sm.getFieldID() == 922010400:
    sm.setSpeakerID(2040039)
    if field.hasProperty(STAGE_2_CLEARED):
        if field.getProperty(STAGE_2_CLEARED):
            sm.sendNext("You have defeated all the monsters lurking in the darkness. Please proceed to the next stage through the portal.")
        else:
            sm.sendNext("Please speak to me again after defeating all the Dark Eyes and Shadow Eyes hiding in the darkness.")
    else:
        sm.sendNext("Please speak to me again after defeating all the Dark Eyes and Shadow Eyes hiding in the darkness.")

#Stage 3
elif sm.getFieldID() == 922010600:
    sm.sendNext("The boxes contain hidden portals, try to get to the top!")
#Stage 5
elif sm.getFieldID() == 922010800:
    if field.hasProperty(STAGE_5_CLEARED):
        #for each party member set their corresponding value in the array based on their position.
        i = 0
        while i < len(sm.getParty().getMembers()):
            pos = sm.getParty().getMembers().get(i).getChr().getPosition()
            pos.getX
            #Floor 3
            if pos.getY() <= -550:
                #Box 1
                if pos.getX() >= -20 and pos.getX() <= 30:
                    stage5Array[i] = 1
                #Box 2
                elif pos.getX() >= 75 and pos.getX() <= 125:
                    stage5Array[i] = 2
            #Floor 2
            elif pos.getY() <= -300:
                #Box 3
                if pos.getX() >= -120 and pos.getX() <= -70:
                    stage5Array[i] = 3
                #Box 4
                elif pos.getX() >= -35 and pos.getX() <= 20:
                    stage5Array[i] = 4
                #Box 5
                elif pos.getX() >= 55 and pos.getX() <= 110:
                    stage5Array[i] = 5
            #Floor 1
            elif pos.getY() <= -140:
                #Box 6
                if pos.getX() >= -240 and pos.getX() <= -190:
                    stage5Array[i] = 6
                #Box 7
                elif pos.getX() >= -160 and pos.getX() <= -110:
                    stage5Array[i] = 7
                #Box 8
                elif pos.getX() >= -80 and pos.getX() <= -35:
                    stage5Array[i] = 8
                #Box 9
                elif pos.getX() >= 5 and pos.getX() <= 55:
                    stage5Array[i] = 9
            i+=1
        if 1 in stage5Array and 3 in stage5Array and 8 in stage5Array:
            sm.invokeForParty("showFieldEffect", "quest/party/clear", 10000)
            field.setProperty(STAGE_5_CLEARED, True)
            sm.invokeForParty("showObjectFieldEffect","gate")
        else:
            sm.sendNext("The #r3 numbers corresponding to the answer of my question are the key to opening the portal to the next stage: 9*9+100-43=?#k \r\n Please find the correct answer.")
    else:
        sm.sendNext("In the fifth stage, you will find a number of platforms. Of these platforms, #b3 are connected to the portal that leads to the next stage. 3 members of your party must stand in the center of these 3 platforms.#k Remember, exactly 3 members must be on a platform. No more, no less. While they are on the platform, the party leader must #bdouble-click on me to check whether the members have chosen the right platform#k. Good luck!")
        field.setProperty(STAGE_5_CLEARED, False)
elif sm.getFieldID() == 922010900:
    if not sm.hasMobsInField():
        if sm.sendAskYesNo("You have successfully cleared the Ludibrium PQ, would you like to return to the party quest entrance?"):
            sm.warpInstanceOut(221023300)

