package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.ScrollStat;
import net.swordie.ms.enums.SpecStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.container.Tuple;

import java.util.*;

/**
 * Created on 1/9/2018.
 */
public class ItemInfo {
    private int itemId;
    private InvType invType;
    private boolean cash;
    private int price;
    private int slotMax = 200;
    private boolean tradeBlock;
    private boolean notSale;
    private String path = "";
    private boolean noCursed;
    private Map<ScrollStat, Integer> scrollStats = new HashMap<>();
    private Map<SpecStat, Integer> specStats = new HashMap<>();
    private Map<BaseStat, Double> optionStats = new HashMap<>();
    private List<Tuple<Integer, Integer>> familiarCons = new ArrayList<>();
    private String nebString = "";
    private int bagType;
    private int charmEXP;
    private boolean quest;
    private int reqQuestOnProgress;
    private int senseEXP;
    private Set<Integer> questIDs = new HashSet<>();
    private int mobID;
    private int npcID;
    private int linkedID;
    private boolean monsterBook;
    private boolean notConsume;
    private String script = "";
    private int scriptNPC;
    private int life;
    private int masterLv;
    private int reqSkillLv;
    private Set<Integer> skills = new HashSet<>();
    private Set<Integer> reqs = new HashSet<>();
    private int moveTo;
    private Set<ItemRewardInfo> itemRewardInfos = new HashSet<>();
    private int skillId;
    private int grade;
    private int android;
    private boolean accountSharable;
    private int delta;
    private GroupChairInfo groupChairInfo;
    private CustomChairInfo customChairInfo;
    private int familiarId;

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setInvType(InvType invType) {
        this.invType = invType;
    }

    public InvType getInvType() {
        return invType;
    }

    public void setCash(boolean cash) {
        this.cash = cash;
    }

    public boolean isCash() {
        return cash;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setSlotMax(int slotMax) {
        this.slotMax = slotMax;
    }

    public int getSlotMax() {
        return slotMax;
    }

    public void setTradeBlock(boolean tradeBlock) {
        this.tradeBlock = tradeBlock;
    }

    public boolean isTradeBlock() {
        return tradeBlock;
    }

    public void setNotSale(boolean notSale) {
        this.notSale = notSale;
    }

    public boolean isNotSale() {
        return notSale;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getPath() {
        return path;
    }

    public void setNoCursed(boolean noCursed) {
        this.noCursed = noCursed;
    }

    public boolean isNoCursed() {
        return noCursed;
    }

    public Map<ScrollStat, Integer> getScrollStats() {
        return scrollStats;
    }

    public void setScrollStats(Map<ScrollStat, Integer> scrollStats) {
        this.scrollStats = scrollStats;
    }

    public void putScrollStat(ScrollStat scrollStat, int val) {
        getScrollStats().put(scrollStat, val);
    }

    public Map<BaseStat, Double> getOptionStats() {
        return optionStats;
    }

    public void setOptionStats(Map<BaseStat, Double> optionStats) {
        this.optionStats = optionStats;
    }

    public void addOptionStat(BaseStat baseStat, double value) {
        getOptionStats().put(baseStat, value);
    }

    public String getNebString() {
        return nebString;
    }

    public void setNebString(String nebString) {
        this.nebString = nebString;
    }

    public void setBagType(int bagType) {
        this.bagType = bagType;
    }

    public int getBagType() {
        return bagType;
    }

    public void setCharmEXP(int charmEXP) {
        this.charmEXP = charmEXP;
    }

    public int getCharmEXP() {
        return charmEXP;
    }

    public void setQuest(boolean quest) {
        this.quest = quest;
    }

    public boolean isQuest() {
        return quest;
    }

    public void setReqQuestOnProgress(int reqQuestOnProgress) {
        this.reqQuestOnProgress = reqQuestOnProgress;
    }

    public int getReqQuestOnProgress() {
        return reqQuestOnProgress;
    }

    public void setSenseEXP(int senseEXP) {
        this.senseEXP = senseEXP;
    }

    public int getSenseEXP() {
        return senseEXP;
    }

    public void addQuest(int questID) {
        getQuestIDs().add(questID);
    }

    public Set<Integer> getQuestIDs() {
        return questIDs;
    }

    public void setMobID(int mobID) {
        this.mobID = mobID;
    }

    public int getMobID() {
        return mobID;
    }

    public void setNpcID(int npcID) {
        this.npcID = npcID;
    }

    public int getNpcID() {
        return npcID;
    }

    public void setLinkedID(int linkedID) {
        this.linkedID = linkedID;
    }

    public int getLinkedID() {
        return linkedID;
    }

    public void setMonsterBook(boolean monsterBook) {
        this.monsterBook = monsterBook;
    }

    public boolean isMonsterBook() {
        return monsterBook;
    }

    public void setNotConsume(boolean notConsume) {
        this.notConsume = notConsume;
    }

    public boolean isNotConsume() {
        return notConsume;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public String getScript() {
        return script;
    }

    public void putSpecStat(SpecStat ss, int i) {
        getSpecStats().put(ss, i);
    }

    public Map<SpecStat, Integer> getSpecStats() {
        return specStats;
    }

    public void setSpecStats(Map<SpecStat, Integer> specStats) {
        this.specStats = specStats;
    }

    public List<Tuple<Integer, Integer>> getFamiliarCons() {
        return familiarCons;
    }

    public void setFamiliarCons(List<Tuple<Integer, Integer>> familiarCons) {
        this.familiarCons = familiarCons;
    }

    public void addFamiliarCon(int sMap, int eMap) {
        Tuple<Integer, Integer> t = new Tuple<>(sMap, eMap);
        getFamiliarCons().add(t);
    }

    public void setScriptNPC(int scriptNPC) {
        this.scriptNPC = scriptNPC;
    }

    public int getScriptNPC() {
        return scriptNPC;
    }

    public void setLife(int life) {
        this.life = life;
    }

    public int getLife() {
        return life;
    }

    public int getMasterLv() {
        return masterLv;
    }

    public void setMasterLv(int masterLv) {
        this.masterLv = masterLv;
    }

    public int getReqSkillLv() {
        return reqSkillLv;
    }

    public void setReqSkillLv(int reqSkillLv) {
        this.reqSkillLv = reqSkillLv;
    }

    public Set<Integer> getSkills() {
        return skills;
    }

    public void setSkills(Set<Integer> skills) {
        this.skills = skills;
    }

    public void addSkill(int skill) {skills.add(skill); }

    public int getMoveTo() {
        return moveTo;
    }

    public void setMoveTo(int moveTo) {
        this.moveTo = moveTo;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public void addItemReward(ItemRewardInfo iri) {
        getItemRewardInfos().add(iri);
    }

    public Set<ItemRewardInfo> getItemRewardInfos() {
        return itemRewardInfos;
    }

    public Item getRandomReward() {
        List<ItemRewardInfo> iris = new ArrayList<>(getItemRewardInfos());
        iris.sort(Comparator.comparingDouble(ItemRewardInfo::getProb));
        Collections.reverse(iris);
        double rand = new Random().nextDouble() * 100 + 1;
        for (ItemRewardInfo iri : iris) {
            if (rand <= iri.getProb()) {
                Item item = ItemData.getItemDeepCopy(iri.getItemID());
                item.setQuantity(iri.getCount());
                return item;
            }
            rand -= iri.getProb();
        }
        return null;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public int getGrade() {
        return grade;
    }

    public void setAndroid(int android) {
        this.android = android;
    }

    public int getAndroid() {
        return android;
    }

    public boolean isAccountSharable() {
        return accountSharable;
    }

    public void setAccountSharable(boolean accountSharable) {
        this.accountSharable = accountSharable;
    }

    public int getDelta() {
        return delta;
    }

    public void setDelta(int delta) {
        this.delta = delta;
    }

    public GroupChairInfo getGroupChairInfo() {
        return groupChairInfo;
    }

    public void setGroupChairInfo(GroupChairInfo groupChairInfo) {
        this.groupChairInfo = groupChairInfo;
    }

    public void addReq(int req) {
        getReqs().add(req);
    }

    public Set<Integer> getReqs() {
        return reqs;
    }

    public boolean canBeUsedOnItem(Item item) {
        return canBeUsedOnItem(item.getItemId());
    }

    public boolean canBeUsedOnItem(int itemId) {
        return getReqs().size() == 0 || getReqs().contains(itemId);
    }

    public void setFamiliarId(int familiarId) {
        this.familiarId = familiarId;
    }

    public int getFamiliarId() {
        return familiarId;
    }

    public CustomChairInfo getCustomChairInfo() {
        return customChairInfo;
    }

    public void setCustomChairInfo(CustomChairInfo customChairInfo) {
        this.customChairInfo = customChairInfo;
    }
}
