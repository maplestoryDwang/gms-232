from net.swordie.ms.connection.packet import WvsContext
from net.swordie.ms.constants import GameConstants
from net.swordie.ms.enums import MatrixUpdateRequest
from net.swordie.ms.enums import UIType
from net.swordie.ms.loaders import VCoreData


def removeLowLevelNodes():
    removeMrs = []
    shards = 0
    for mr in chr.getMatrixRecords():
        if mr.getSlv() == 1 and not mr.isActive() and not mr.isLocked():
            removeMrs.append(mr)
            shards += VCoreData.getNodeInfo(mr).getExtract()

    chr.addNodeShards(shards)
    for mr in removeMrs:
        chr.removeMatrixRecord(mr)
    chr.write(WvsContext.nodeDisassembleResult(shards))
    chr.write(WvsContext.matrixUpdate(chr, True, MatrixUpdateRequest.DisassembleGroup.getVal(), 0))
    return [len(removeMrs), shards]

sm.setSpeakerID(1540945) # Archelle

res = sm.sendNext("Why hello there. How can I help you out today?\r\n\r\n#b"
            "#L0#Manage VMatrix#l\r\n"
            "#L1#Disassemble all level 1 nodes\r\n#l")

if res == 0:
    if GameConstants.PIC_ON_V_MATRIX_OPEN:
        sm.openUI(UIType.V_NODES)
    else:
        chr.write(WvsContext.nodeOpenVmatrix(True))
elif res == 1:
    if sm.sendAskYesNo("Do you really want to disassemble all nodes? This will disassemble #ball level 1#k nodes that are "
                    "#bcurrently not equipped and not locked#k."):
        removeInfo = removeLowLevelNodes()
        removeCount = removeInfo[0]
        shardsGained = removeInfo[1]
        sm.sendNext("Successfully removed #b{}#k nodes.\r\nYou have obtained #b{}#k node shards.".format(removeCount, shardsGained))
