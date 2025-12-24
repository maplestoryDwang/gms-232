from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.enums import DailyEntry
import random
# id 39035 ([Daily Quest] Peace in Arcana), field 45005000

quests =[39038, 39039, 39040, 39041, 39042, 39043, 39044, 39045, 39046, 39047, 39048]
selectedQuests = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

def proposeQuests():
    random.shuffle(selectedQuests)
    text = "These tasks will help bring balance to the forest.\r\n\r\n"

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
for i in range(QuestConstants.ARCANA_WEEKLY_AMOUNT):
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


    text = "All right. To replace the missions you don't want, I've found new missions. Here are your " + str(QuestConstants.ARCANA_WEEKLY_AMOUNT) + "for the week.\r\n\r\n"
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

sm.setSpeakerID(3003309) # Tree Spirits
sm.setParam(256)

#Do this to initialize the daily Entry
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.Arcana)
proposeQuests()
