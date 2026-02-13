# [Silent Crusade] A Cry for Help
from net.swordie.ms.constants import QuestConstants

JAKE = 1052006
SUBWAY_TRANSTICKET = 2030028

sm.setSpeakerID(JAKE)
response = sm.sendAskYesNo("大事不好了！请你帮帮忙！")

if response:
    sm.sendNext("有个女人追着一群奇怪的家伙进了地铁！那些人看起来非常危险……请你去确认一下那个女人的平安吧！他们应该是往#b修理中的地铁#k去了。")

    sm.sendNext("这是能一次性将你送到我所在的地铁售票口的车票，请赶紧过来。")

    if not sm.canHold(SUBWAY_TRANSTICKET):
        sm.sendSayOkay("Please make some room in your 'use' inventory.")
        sm.dispose()

    sm.giveItem(SUBWAY_TRANSTICKET)
    sm.startQuest(parentID)
    sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/start1")
    sm.createQuestWithQRValue(QuestConstants.SILENT_CRUSADE_WANTED_TAB_1, "")
    sm.createQuestWithQRValue(QuestConstants.SILENT_CRUSADE_WANTED_TAB_2, "")
    sm.createQuestWithQRValue(QuestConstants.SILENT_CRUSADE_WANTED_TAB_3, "")
    sm.createQuestWithQRValue(QuestConstants.SILENT_CRUSADE_WANTED_TAB_4, "")

else:
    sm.sendSayOkay("Really Nigga?")