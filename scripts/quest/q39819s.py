from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.enums import DailyEntry
import random
# id 39819 ([Daily Quest] Cernium Research), field 410000500

quests =[39820, 39821, 39822, 39823, 39824, 39825, 39923, 39924, 39925, 39926, 39927, 39928]
selectedQuests = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

def proposeQuests():
    random.shuffle(selectedQuests)
    text = "Please select the missions you want to do.\r\n\r\n"

    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            text += "#b#e#y" + str(quests[i]) + "##k#n\r\n"

    if sm.sendAskYesNo(text):
        ensureExchange()
    else:
        acceptQuests()


def acceptQuests():
    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            sm.startQuest(quests[i])

    sm.startQuest(parentID)
    sm.sendSayOkay("Come to me when you've finished your missions. Remember, you have to turn them in before the end of the week. Well then, see you later.")


#prep selected quests for randomization
for i in range(QuestConstants.CHU_CHU_WEEKLY_AMOUNT):
    selectedQuests[i] = 1


def ensureExchange():
    sm.setParam(0)
    if sm.sendAskYesNo("Is there a mission on the list you aren't up for? Why not Exchange it for another one? \r\n\r\n#b(You can swap out the missions of your choice, but it is possible to receive the same mission as the one being exchanged.)#k"):
        selectReplaceMissions()
    else:
        acceptQuests()

def selectReplaceMissions():
    text = "Select the mission you would like to replace. (All greyed out missions will be replaced.)\r\n\r\n"
    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            text += "#L"+ str(i) +"##b#e#y" + str(quests[i]) + "##k#n#l\r\n"
        elif selectedQuests[i] == 2:
            text += "#L"+ str(i) +"##e#y" + str(quests[i]) + "##k#n#l\r\n"


    text += "\r\n#L" + str(len(selectedQuests) + 1) + "##e#rThose are all the quests I want to swap out.#l"
    response = sm.sendNext(text)
    if response == len(selectedQuests) + 1:
        replaceMissions()
    else:
        if selectedQuests[response] == 1:
            selectedQuests[response] = 2
        elif selectedQuests[response] == 2:
            selectedQuests[response] = 1
        selectReplaceMissions()

def replaceMissions():
    #Get All unselected missions and missions we want to replace and reset them in the original list
    unselectedmissions = []
    for i in range(len(selectedQuests)):
        selectedQuest = selectedQuests[i]
        if selectedQuest == 0 or selectedQuest == 2:
            unselectedmissions.append(selectedQuest)
            selectedQuests[i] = 0

    #Shuffle all unselected and replace missions
    random.shuffle(unselectedmissions)


    text = "All right. To replace the missions you don't want, I've found new missions. Here are your " + str(QuestConstants.CHU_CHU_WEEKLY_AMOUNT) + "for the week.\r\n\r\n"
    #Reinsert them into the list
    index = 0
    for i in range(len(selectedQuests)):
        if selectedQuests[i] is 0:
            if unselectedmissions[index] == 2:
                text += "#b#e#y" + str(quests[i]) + "##k #r[NEW]#k\r\n"
                selectedQuests[i] = 1
            index += 1
        else:
            text += "#b#e#y" + str(quests[i]) + "##k\r\n"

    showNewQuests(text)

def showNewQuests(text):
    sm.sendNext(text)
    acceptQuests()

sm.setSpeakerID(3004419) # Flame Priest
sm.setParam(256)
#Do this to initialize the daily Entry for cernium
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Cernium)
sm.sendNext("Greetings. I am a Priest of Flame in service to Spisa, god of flames.")
sm.sendNext("But beyond my service to Spisa, I also investigate and research the many areas of Cernium.")
sm.sendNext("#b#h ##k, I've heard rumours of your exceptional ability. Would you have any interest in assisting me with my research?")
if sm.sendAskYesNo("Of course, I'll reward you for your efforts."):
    sm.sendNext("Wonderful. Your task is simple. #bSelect one of the monster hunting missions in the Cernium region#k and return once you've completed them.")
    sm.sendNext("However, keep in mind that the mission will expire if you fail to complete it before #bmidnight on friday#k.")
    proposeQuests()
