# Stage 3 ludibrium pq boxes
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants

instance = chr.getInstance()
if instance is not None:
    #Get Order
    puzzle_order = instance.getProperty(OzConstants.F9_ORDER)
    
    #Level 1
    if parentID == 44:
        if puzzle_order[0] == 1:
            sm.showObjectFieldEffect("ans1_1")
            sm.teleportToPortal(48)
        else:
            sm.teleportToPortal(1)
    elif parentID == 45:
        if puzzle_order[0] == 2:
            sm.showObjectFieldEffect("ans1_2")
            sm.teleportToPortal(48)
        else:
            sm.teleportToPortal(1)
    elif parentID == 46:
        if puzzle_order[0] == 3:
            sm.showObjectFieldEffect("ans1_3")
            sm.teleportToPortal(48)
        else:
            sm.teleportToPortal(1)
    
    #Level 2
    if parentID == 48:
        if puzzle_order[1] == 1:
            sm.showObjectFieldEffect("ans2_1")
            sm.teleportToPortal(52)
        else:
            sm.teleportToPortal(1)
    elif parentID == 49:
        if puzzle_order[1] == 2:
            sm.showObjectFieldEffect("ans2_2")
            sm.teleportToPortal(52)
        else:
            sm.teleportToPortal(1)
    elif parentID == 50:
        if puzzle_order[1] == 3:
            sm.showObjectFieldEffect("ans2_3")
            sm.teleportToPortal(52)
        else:
            sm.teleportToPortal(1)
    
    #Level 3
    if parentID == 52:
        if puzzle_order[2] == 1:
            sm.showObjectFieldEffect("ans3_1")
            sm.teleportToPortal(56)
        else:
            sm.teleportToPortal(1)
    elif parentID == 53:
        if puzzle_order[2] == 2:
            sm.showObjectFieldEffect("ans3_2")
            sm.teleportToPortal(56)
        else:
            sm.teleportToPortal(1)
    elif parentID == 54:
        if puzzle_order[2] == 3:
            sm.showObjectFieldEffect("ans3_3")
            sm.teleportToPortal(56)
        else:
            sm.teleportToPortal(1)
    
    #Level 4
    if parentID == 56:
        if puzzle_order[3] == 1:
            sm.showObjectFieldEffect("ans4_1")
            sm.teleportToPortal(29)
        else:
            sm.teleportToPortal(1)
    elif parentID == 57:
        if puzzle_order[3] == 2:
            sm.showObjectFieldEffect("ans4_2")
            sm.teleportToPortal(29)
        else:
            sm.teleportToPortal(1)
    elif parentID == 37:
        if puzzle_order[3] == 3:
            sm.showObjectFieldEffect("ans4_3")
            sm.teleportToPortal(29)
        else:
            sm.teleportToPortal(1)
    
    #Level 5
    if parentID == 29:
        if puzzle_order[4] == 1:
            sm.showObjectFieldEffect("ans5_1")
            sm.teleportToPortal(13)
        else:
            sm.teleportToPortal(1)
    elif parentID == 25:
        if puzzle_order[4] == 2:
            sm.showObjectFieldEffect("ans5_2")
            sm.teleportToPortal(13)
        else:
            sm.teleportToPortal(1)
    elif parentID == 21:
        if puzzle_order[4] == 3:
            sm.showObjectFieldEffect("ans5_3")
            sm.teleportToPortal(13)
        else:
            sm.teleportToPortal(1)
    
    #Level 6
    if parentID == 13:
        if puzzle_order[5] == 1:
            sm.showObjectFieldEffect("ans6_1")
            sm.teleportToPortal(41)
        else:
            sm.teleportToPortal(1)
    elif parentID == 9:
        if puzzle_order[5] == 2:
            sm.showObjectFieldEffect("ans6_2")
            sm.teleportToPortal(41)
        else:
            sm.teleportToPortal(1)
    elif parentID == 5:
        if puzzle_order[5] == 3:
            sm.showObjectFieldEffect("ans6_3")
            sm.teleportToPortal(41)
        else:
            sm.teleportToPortal(1)
    
    #Level 7
    if parentID == 41:
        if puzzle_order[6] == 1:
            sm.showObjectFieldEffect("ans7_1")
            sm.teleportToPortal(55)
        else:
            sm.teleportToPortal(1)
    elif parentID == 17:
        if puzzle_order[6] == 2:
            sm.showObjectFieldEffect("ans7_2")
            sm.teleportToPortal(55)
        else:
            sm.teleportToPortal(1)
    elif parentID == 33:
        if puzzle_order[6] == 3:
            sm.showObjectFieldEffect("ans7_3")
            sm.teleportToPortal(55)
        else:
            sm.teleportToPortal(1)
    
    #Level 8
    if parentID == 55:
        if puzzle_order[7] == 1:
            sm.showObjectFieldEffect("ans8_1")
            OzTowerModule.clearStage(instance, chr)
            sm.teleportToPortal(43)
        else:
            sm.teleportToPortal(1)
    elif parentID == 51:
        if puzzle_order[7] == 2:
            sm.showObjectFieldEffect("ans8_2")
            OzTowerModule.clearStage(instance, chr)
            sm.teleportToPortal(43)
        else:
            sm.teleportToPortal(1)
    elif parentID == 47:
        if puzzle_order[7] == 3:
            sm.showObjectFieldEffect("ans8_3")
            OzTowerModule.clearStage(instance, chr)
            sm.teleportToPortal(43)
        else:
            sm.teleportToPortal(1)
