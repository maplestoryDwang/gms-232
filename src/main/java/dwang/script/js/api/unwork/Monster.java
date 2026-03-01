package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.world.field.Field;

public interface Monster extends DwangScriptBaseApi {

    default void setInAttack(int inAttack) { }

    default void hasAttackOffCooldown(int attackID) { }

    default void changeLevel(int newLevel) { }

    default void setHighestDamageChar(int highestDamageChar) { }

    default void getLastAttackTime() { }

    default void setLastAttackTime(int lastAttackTime) { }

    default void getAllBuffs() { }

    default void isDropsDisabled() { }

    default void setEliteTier(int eliteTier) { }

    default void cancelSingleStatus(Object stat) { }

    default void killBy(Character killer, int lastSkill) { }

    default void registerKill(int next) { }

    default void getHighestDamageChar() { }

    default void applyMonsterBuff(Object effect, int duration, Object skill, Object reflection) { }

    default void putAttackOnCooldown(int skillID, int delayForNextAttack) { }

    default void setLinkCID(int linkCID) { }

    default void getEffectiveness(Object e) { }

    default void getEliteDropBonus() { }

    default void getSkillCooldowns() { }

    default void getBuffToGive() { }

    default void setHp(int hp) { }

    default void getName() { }

    default void getMobMaxMp() { }

    default void getMobLevel() { }

    default void damage(Character from, int damage, int updateAttackTime, int lastSkill) { }

    default void getLinkCID() { }

    default void getSkillSize() { }

    default void damage(Character from, int damage, int updateAttackTime, int lastSkill, int drop) { }

    default void heal() { }

    default void getController() { }

    default void hasSkillDelayExpired() { }

    default void getMp() { }

    default void setDamageSpongeMob(Monster mob) { }

    default void setLinkOid(int linkOid) { }

    default void hasSkill(int skillId, int level) { }

    default void setOverrideStats(Object ostats) { }


    default void hasSkillOffCooldown(int skillID, int slv) { }


    default void setFake(int fake) { }

    default void getStati() { }

    default void sendStatus(Object client) { }

    default void setControllerKnowsAboutAggro(int controllerKnowsAboutAggro) { }

    default void getLastNode() { }

    default void setLastDropTime(int lastDropTime) { }

    default void setDropsDisabled(int dropsDisabled) { }

    default void getAttackers() { }

    default void getMobExp() { }

    default void getEventInstance() { }

    default void sendSpawnData(Object client) { }

    default void getBelongsTo() { }

    default void setMap(Field map) { }

    default void getNodePacket() { }

    default void setEventInstance(EventManager eventInstance) { }

    default void setStolen(int stolen) { }

    default void getHPPercent() { }

    default void killedMob(Field map, int baseExp, int mostDamage, int lastSkill) { }

    default void getStatusSourceID(Object status) { }

    default void getMobMaxHp() { }

    default void setController(Character controller) { }

    default void shouldDrop(int now) { }

    default void setOverrideStats() { }

    default void setRectangles(Object rectangles) { }

    default void handleDeadBound(int type) { }

    default void getElitePrefixs() { }

    default void setTempEffectiveness(Object e, int milli) { }

    default void damage(Character from, int damage, int updateAttackTime) { }

    default void getBuff(Object status) { }

    default void getNextKill() { }

    default void addEmpty() { }

    default void getRectangles() { }

    default void addDamage(Character from, int damage, int updateAttackTime) { }

    default void isInAttack() { }

    default void isControllerHasAggro() { }

    default void setTriangulation(int triangulation) { }

    default void dispelSkill(Object skillId) { }

    default void doPoison(Object status, Object weakChr) { }

    default void getEliteTier() { }

    default void contains(Character chr) { }

    default void getMap() { }

    default void addRandomElitePrefix() { }

    default void doDropItem(int now) { }

    default void getChangeTime() { }

    default void isFake() { }

    default void setCarnivalTeam(int carnivalTeam) { }


    default void changeLevel(int newLevel, int pqMob) { }

    default void getSize() { }

    default void setElitePrefixs(Object elitePrefixs) { }

    default void getCanBelong() { }

    default void putSkillCooldown(int skillID, int slv, int nextUseableTime) { }

    default void switchController(Character newController, int immediateAggro) { }

    default void getStats() { }

    default void setControllerHasAggro(int controllerHasAggro) { }

    default void spawnRevives(Field map) { }

    default void setChangeTime(int changeTime) { }

    default void getLastDropTime() { }

    default void getSkillDelays() { }

    default void heal(int hp, int mp, int broadcast) { }

    default void setNextKill(int nextKill) { }

    default void killGainExp(Character killer, int lastSkill) { }

    default void sendDestroyData(Object client) { }

    default void getLinkOid() { }

    default void getCarnivalTeam() { }

    default void getStolen() { }

    default void isElite() { }

    default void shouldKill(int now) { }

    default void isFirstAttack() { }

    default void getSkills() { }

    default void setSkillDelay(int delay) { }

    default void setSkinMobId(int skinMobId) { }

    default void killed() { }

    default void setMp(int mp) { }

    default void setListener(Object listener) { }

    default void isControllerKnowsAboutAggro() { }

    default void setSize(int size) { }

    default void setEliteEnterType(int eliteEnterType) { }

    default void getEliteEnterType() { }

    default void setElite(int isElite) { }

    default void getTriangulation() { }

    default void isBoss() { }

    default void setLastNode(int lastNode) { }

    default void isAlive() { }

    default void getStatiSize() { }

    default void getSkinMobId() { }

    default void getAttacker() { }

    default void getHp() { }

    default void applyStatus(Character from, Object status, int poison, int duration, int checkboss, Object eff) { }

    default void getNextPossibleSkillTime() { }

    default void setNextPossibleSkillTime(int nextPossibleSkillTime) { }

    default void getChangedStats() { }

    default void isBuffed(Object status) { }

    default void getAttackById(int attackID) { }

    default void getDamage() { }

    default void handleSteal(Character chr) { }

    default void setNodePacket(Object nodePacket) { }

    default void getType() { }

}
