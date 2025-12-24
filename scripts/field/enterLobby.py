# Undersea Tower of Oz : Lobby
# 992000000
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule

sm.lockInGameUI(True, False)
sm.lockInGameUI(False, False)

OzTowerModule.updateOzTimer(chr, True)
OzTowerModule.giveOzRewards(chr)