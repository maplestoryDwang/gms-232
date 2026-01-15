package net.swordie.ms.world.field;

import io.netty.util.internal.ConcurrentSet;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.PowerCrystal;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.TownPortal;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.enums.customscripts.CustomFUEFieldScripts;
import net.swordie.ms.enums.customscripts.CustomFieldScripts;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.*;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.*;
import net.swordie.ms.loaders.containerclasses.FieldInfo;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.field.fieldevents.FieldEvent;
import net.swordie.ms.world.field.fieldownership.FieldOwnershipManager;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleInRowInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;
import net.swordie.orm.dao.AccountDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.time;

/**
 * Created on 12/14/2017.
 */
public class Field {
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final Logger log = LogManager.getLogger();

    private int id;
    private final Map<Integer, Life> lifes;
    private final Map<Class, Set<Life>> lifeTypeMap;
    private final List<Char> chars;
    private final Map<Life, Char> lifeToControllers;
    private final Map<Life, ScheduledFuture> lifeSchedules;
    private volatile int objectIDCounter = 1000000;
    private boolean userFirstEnter = false;
    private ScriptManagerImpl scriptManager;
    private RuneStone runeStone;
    private long nextRuneStoneSpawn;
    private int burningFieldLevel = GameConstants.BURNING_FIELD_LEVEL_ON_START;
    private long nextEliteSpawnTime = System.currentTimeMillis();
    private int killedElites;
    private EliteState eliteState;
    private List<TownPortal> townPortalList = new ArrayList<>();
    private boolean isChannelField;
    private Clock clock;
    private int channel;
    private Channel channelInstance;
    private boolean changeToChannelOnLeave;
    private Map<String, Object> properties;
    private long lastFieldBossSpawnTime;
    private FieldEvent fieldEvent;
    private Instance instance;
    private FieldOwnershipManager fieldOwnershipManager;

    public Field(int fieldID) {
        this.id = fieldID;
        this.lifes = new ConcurrentHashMap<>();
        this.lifeTypeMap = new ConcurrentHashMap<>();
        this.chars = new CopyOnWriteArrayList<>();
        this.lifeToControllers = new ConcurrentHashMap<>();
        this.lifeSchedules = new ConcurrentHashMap<>();
        this.properties = new HashMap<>();
    }

    public void startFieldScript() {
        startScript(getInfo().getFieldScript());
    }

    public void startScript(String script) {
        if (FieldConstants.isDoNotRunFieldScriptNames(script)) {
            return;
        }
        startScript(script, null);
    }

    public void startScript(String script, Mob mob) {
        // mob is filled if starting an onDeath mob script
        Map<String, Object> props = new HashMap<>();
        if (mob != null) {
            props.put("mob", mob);
        }
        if (script != null && !"".equalsIgnoreCase(script)) {
            log.debug(String.format("Starting field script %s.", script));
            getScriptManager().startScript(getId(), script, ScriptType.Field, props);
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RuneStone getRuneStone() {
        return runeStone;
    }

    public void setRuneStone(RuneStone runeStone) {
        this.runeStone = runeStone;
    }

    public Map<Integer, Life> getLifes() {
        return lifes;
    }

    private Map<Class, Set<Life>> getLifeTypeMap() {
        return lifeTypeMap;
    }

    public synchronized void addLife(Life life) {
        if (life.getObjectId() < 0) {
            life.setObjectId(getNewObjectID());
        }
        if (!getLifes().containsKey(life.getObjectId())) {
            getLifes().put(life.getObjectId(), life);
            addLifeType(life);
            life.setField(this);
            life.onFieldEnter();
        }
    }

    private void addLifeType(Life life) {
        var clazz = life.getClass();
        var map = getLifeTypeMap();
        if (!map.containsKey(clazz)) {
            map.put(clazz, new ConcurrentSet<>());
        }
        map.get(clazz).add(life);
    }

    public void removeLife(int id) {
        Life life = getLifeByObjectID(id);
        if (life == null) {
            return;
        }

        removeLifeType(life);
        getLifes().remove(life.getObjectId());
        getLifeToControllers().remove(life);

        var future = getLifeSchedules().remove(life);
        EventManager.stopTimer(future);
        getLifeSchedules().remove(life);
    }

    private void removeLifeType(Life life) {
        var clazz = life.getClass();
        var map = getLifeTypeMap();
        map.get(clazz).remove(life);
    }

    public void spawnSummonAndRemoveOld(Summon summon) {
        if (!SkillConstants.isStackingSummon(summon.getSkillID())) {
            Summon oldSummon = (Summon) getLifes().values().stream()
                    .filter(s -> s instanceof Summon &&
                            ((Summon) s).getChr() == summon.getChr() &&
                            ((Summon) s).getSkillID() == summon.getSkillID())
                    .findFirst().orElse(null);
            if (oldSummon != null) {
                removeLife(oldSummon.getObjectId(), false);
            }
        }
        spawnSummon(summon);
    }

    public void spawnSummon(Summon summon) {
        if (summon.getSummonTerm() > 0) {
            int addedTerm = SkillConstants.isExplodeOnDeathSummon(summon.getSkillID()) ? 2000 : 0;
            ScheduledFuture sf = EventManager.addEvent(() -> removeSummon(summon), summon.getSummonTerm() + addedTerm);
            addLifeSchedule(summon, sf);
        }
        spawnLife(summon, null);
    }

    public void removeSummon(Summon summon) {
        if (summon.getSkillID() == AngelicBuster.MIGHTY_MASCOT && summon.isJaguarActive()) {
            summon.setState(1); // Do not immediately remove, however, flag as "to be removed".
            return;
        }
        removeLife(summon.getObjectId(), true);
    }

    public void removeSummon(int skillID, int chrID) {
        Summon summon = (Summon) getLifes().values().stream()
                .filter(s -> s instanceof Summon &&
                        ((Summon) s).getChr().getId() == chrID &&
                        ((Summon) s).getSkillID() == skillID)
                .findFirst().orElse(null);
        if (summon != null) {
            removeLife(summon.getObjectId(), false);
        }
    }

    public void spawnWreckage(Char chr, Wreckage wreckage) {
        addLife(wreckage);
        broadcastPacket(FieldPacket.addWreckage(wreckage, getWreckageByChrId(chr.getId()).size()));
        addLifeSchedule(wreckage, EventManager.addEvent(() -> removeWreckage(chr, wreckage), wreckage.getDuration(), TimeUnit.MILLISECONDS));
    }

    public void removeWreckage(Char chr, Wreckage wreckage) {
        removeWreckage(chr, Arrays.asList(wreckage));
    }

    public void removeWreckage(Char chr, List<Wreckage> wreckageList) {
        broadcastPacket(FieldPacket.delWreckage(chr, wreckageList));
        for (Wreckage wreckage : wreckageList) {
            removeLife(wreckage);
        }
    }

    public void spawnFamiliar(Familiar familiar, Char onlyChar) {
        spawnFamiliar(familiar, onlyChar, EnterType.Animation);
    }

    public void spawnFamiliar(Familiar familiar, Char onlyChar, EnterType enterType) {
        spawnLife(familiar, onlyChar, enterType);
    }

    public void removeFamiliar(Familiar familiar) {
        familiar.deactivateOptions();
        var life = getLifeByObjectID(familiar.getObjectId());
        if (life instanceof Familiar) {
            removeLife(life);
        }
    }

    public void spawnImmovableObj(ImmovableObj immovableObj) {
        addLife(immovableObj);
        int duration = immovableObj.getDuration();
        if (duration > 0) {
            ScheduledFuture sf = EventManager.addEvent(() -> removeLife(immovableObj.getObjectId(), true), duration);
            addLifeSchedule(immovableObj, sf);
        }

        immovableObj.broadcastSpawnPacket(null, null); // onlyChar & enterType aren't used in ImmovableObj broadcastSpawnPacket
    }

    public void removeImmovableObj(ImmovableObj immovableObj) {
        removeLife(immovableObj);
    }

    public void spawnLife(Life life, Char onlyChar) {
        spawnLife(life, onlyChar, EnterType.Animation);
    }

    public void spawnLife(Life life, Char onlyChar, EnterType enterType) {
        addLife(life);
        if (getChars().size() > 0) {
            determineNewLifeControllerIfAbsent(life);
            life.broadcastSpawnPacket(onlyChar, enterType);
        }

        if (life instanceof Mob) {
            var mob = (Mob) life;
            Events.onMobSpawn(this, mob);
        }
    }

    private void determineNewLifeControllerIfAbsent(Life life) {
        Char controller = null;
        if (getLifeToControllers().containsKey(life)) {
            controller = getLifeToControllers().get(life);
        }
        if (controller == null) {
            setRandomController(life);
        }
    }

    private void setRandomController(Life life) {
        // No chars -> set controller to null, so a controller will be assigned next time someone enters this field
        Char controller = null;
        if (getChars().size() > 0) {
            var possibleControllers = new HashSet<>(getChars());
            possibleControllers.removeIf(Char::isHidden);
            controller = Util.getRandomFromCollection(possibleControllers);
            life.notifyControllerChange(controller);
            if (life instanceof Mob && CustomConstants.AUTO_AGGRO && FieldConstants.isAggroField(this.getId())) {
                broadcastPacket(MobPool.forceChase(life.getObjectId(), false));
            }
        }
        putLifeController(life, controller);
    }

    public void removeLife(Life life) {
        removeLife(life.getObjectId(), false);
        life.resetObjectId();
    }

    public List<Char> getChars() {
        return chars;
    }

    public Collection<Char> getCharsReadOnly() {
        return getChars(); // was: return new HashSet<>(getChars())
    }

    public Char getCharByID(int id) {
        return getChars().stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }

    public void addChar(Char chr) {
        if (!getChars().contains(chr)) {
            initTimers();

            getChars().add(chr);
            if (!isUserFirstEnter()) {
                String script = null;
                if (hasUserFirstEnterScript()) {
                    script = getInfo().getOnFirstUserEnter();
                } else if (CustomFUEFieldScripts.getByVal(getId()) != null) {
                    script = CustomFUEFieldScripts.getByVal(getId()).toString();
                }
                if (script != null) {
                    getScriptManager().startScript(getId(), getId(), script, ScriptType.FirstEnterField, "chr", chr);
                    setUserFirstEnter(true);
                }
            }
            execUserEnterScript(chr);
        }
        broadcastPacket(UserPool.userEnterField(chr), chr);
    }

    private void initTimers() {

    }

    private boolean hasUserFirstEnterScript() {
        return getInfo().getOnFirstUserEnter() != null && !getInfo().getOnFirstUserEnter().equalsIgnoreCase("");
    }

    public void removeChar(Char chr) {
        if (chr.getField() != null) {
            chr.removeLifesFromCurrentField();
        }

        getChars().remove(chr);
        broadcastPacket(UserPool.userLeaveField(chr), chr);

        chr.getUp();

        if (getChars().size() == 0) {
            // remove all damagedones + controllers if field is now empty
            getLifeToControllers().clear();
            getMobs().forEach(Mob::clearCharInfo);
        } else {
            // change controllers for which the chr was the controller of
            for (Map.Entry<Life, Char> entry : getLifeToControllers().entrySet()) {
                if (entry.getValue() != null && entry.getValue().equals(chr)) {
                    setRandomController(entry.getKey());
                }
            }
        }

        if (JobConstants.isHoYoung(chr.getJob())) {
            for (Mob mob : getMobs()) {
                MobTemporaryStat mts = mob.getTemporaryStat();
                if (mts.hasCurrentMobStat(MobStat.Suction) && mts.getCurrentOptionsByMobStat(MobStat.Suction).xOption == chr.getId()) {
                    mts.removeMobStat(MobStat.Suction);
                }
            }
        }
        if (chr.getSecondAtoms().size() > 0) {
            broadcastPacket(SecondAtomPool.removeSecondAtom(chr, new ArrayList<>(chr.getSecondAtoms().keySet())));
        }
    }

    private void removeFromChannel() {
        var channel = getChannelInstance();
        channel.removeField(this);
    }

    public Map<Life, Char> getLifeToControllers() {
        return lifeToControllers;
    }

    public void putLifeController(Life life, Char chr) {
        if (life == null) {
            return;
        }
        if (chr == null) {
            getLifeToControllers().remove(life);
        } else {
            getLifeToControllers().put(life, chr);
        }
    }

    public Life getLifeByObjectID(int objectId) {
        return getLifes().getOrDefault(objectId, null);
    }

    public <T extends Life> T getLifeByObjectID(Class<T> clazz, int objectId) {
        Life life = getLifeByObjectID(objectId);
        if (life == null) {
            return null;
        }
        return life.castTo(clazz);
    }

    public Life getLifeByTemplateId(int templateId) {
        return getLifes().values().stream().filter(l -> l.getTemplateId() == templateId).findFirst().orElse(null);
    }

    public Life getLifeByTemplateIds(int... templateIds) {
        var set = Util.makeSet(templateIds);
        return getLifes().values().stream().filter(l -> set.contains(l.getTemplateId())).findFirst().orElse(null);
    }

    public void spawnLifesForChar(Char chr) {
        for (Char c : getCharsReadOnly()) {
            if (!c.equals(chr)) {
                c.spawnCharForOther(chr);
            }
        }

        // Life
        for (Life life : new HashSet<>(getLifes().values())) {
            determineNewLifeControllerIfAbsent(life);
            life.broadcastSpawnPacket(chr, EnterType.NoAnimation);
        }

        // Runestone
        if (getRuneStone() != null) {
            chr.write(FieldPacket.runeStoneAppear(getRuneStone()));

            if (getRuneStone().getCurseLevel() > 0) {
                getRuneStone().showRuneCurseMessageToChr(chr);
            }
        }

        // TownPortals
        if (getTownPortalList() != null && getTownPortalList().size() > 0) {
            for (TownPortal townPortal : getTownPortalList()) {
                townPortal.showTownPortal(this);
            }
        }

        // Show Burning Level
        if (canBeBurningField()) {
            showBurningLevel(chr);
        }

        // Field Clock
        if (getClock() != null) {
            getClock().showClock(chr);
        }
    }

    @Override
    public String toString() {
        return "" + getId();
    }

    public void respawn(Mob mob) {
        mob.setHp(mob.getMaxHp());
        mob.setMp(mob.getMaxMp());
        mob.setPosition(mob.getHomePosition().deepCopy());
        spawnLife(mob, null);
    }

    /**
     * broadcast {@param outPacket} to all characters in field. However.
     * Filter out characters that have {@param byChr} blacklisted.
     *
     * @param byChr
     * @param outPacket
     */
    public void broadcastPacketByChr(Char byChr, OutPacket outPacket) {
        getCharsReadOnly().stream().filter(c -> c.equals(byChr) || !c.hasChrBlacklisted(byChr.getId())).forEach(c -> c.write(outPacket));
    }

    public void broadcastPacket(OutPacket outPacket) {
        getCharsReadOnly().forEach(c -> c.write(outPacket));
    }

    public void broadcastPacket(OutPacket outPacket, Char exceptChr) {
        var outheader = OutHeader.getOutHeaderByOp(outPacket.getHeader());
        if (CustomConstants.isHiddenBlockedOutPacket(outheader)
                && exceptChr != null
                && exceptChr.isHidden()) {
            // don't send a hidden exceptChr's remote packet
            return;
        }

        getCharsReadOnly().stream().filter(chr -> !chr.equals(exceptChr)).forEach(
                chr -> chr.write(outPacket)
        );
    }

    private void broadcastPacket(OutPacket outPacket, Predicate<? super Char> predicate) {
        getChars().stream().filter(predicate).forEach(chr -> chr.write(outPacket));
    }

    public void spawnAffectedArea(AffectedArea aa) {
        addLife(aa);
        SkillInfo si = SkillData.getSkillInfoById(aa.getSkillID());
        int duration = aa.getDuration();
        if (si != null && duration == 0) {
            duration = si.getValue(time, aa.getSlv()) * 1000;
        }
        if (duration > 0) {
            ScheduledFuture sf = EventManager.addEvent(() -> removeLife(aa.getObjectId(), true), duration);
            addLifeSchedule(aa, sf);
        }
        broadcastPacket(FieldPacket.affectedAreaCreated(aa));
        getChars().forEach(chr -> aa.getField().checkCharInAffectedAreas(chr));
        getMobs().forEach(mob -> aa.getField().checkMobInAffectedAreas(mob));

        if (aa.getDuration() == 0 && aa.isMobOwnedAA()) {
            // duration 0 = delete on cast
            removeLife(aa);
        }
    }

    public void spawnAffectedAreaAndRemoveOld(AffectedArea aa) {
        AffectedArea oldAA = (AffectedArea) getLifes().values().stream()
                .filter(l -> l instanceof AffectedArea &&
                        ((AffectedArea) l).getCharID() == aa.getCharID() &&
                        ((AffectedArea) l).getSkillID() == aa.getSkillID())
                .findFirst().orElse(null);
        if (oldAA != null) {
            removeLife(oldAA.getObjectId(), true);
        }
        spawnAffectedArea(aa);
    }

    public void removeAffectedAreas(int skillId, int charId) {
        getAffectedAreas().stream()
                .filter(l -> l != null &&
                        l.getCharID() == charId &&
                        l.getSkillID() == skillId)
                .forEach(aa -> removeLife(aa.getObjectId(), false));
    }

    public Set<Mob> getMobs() {
        return (Set<Mob>) (Set<?>)lifeTypeMap.getOrDefault(Mob.class, Util.EMPTY_SET);
    }

    public Set<Summon> getSummons() {
        return (Set<Summon>) (Set<?>) lifeTypeMap.getOrDefault(Summon.class, Util.EMPTY_SET);
    }

    public Set<Drop> getDrops() {
        return (Set<Drop>) (Set<?>) lifeTypeMap.getOrDefault(Drop.class, Util.EMPTY_SET);
    }

    public Set<MobGen> getMobGens() {
        return (Set<MobGen>) (Set<?>) lifeTypeMap.getOrDefault(MobGen.class, Util.EMPTY_SET);
    }

    public Set<AffectedArea> getAffectedAreas() {
        return (Set<AffectedArea>) (Set<?>) lifeTypeMap.getOrDefault(AffectedArea.class, Util.EMPTY_SET);
    }

    public Set<Reactor> getReactors() {
        return (Set<Reactor>) (Set<?>) lifeTypeMap.getOrDefault(Reactor.class, Util.EMPTY_SET);
    }

    public Set<Npc> getNpcs() {
        return (Set<Npc>) (Set<?>) lifeTypeMap.getOrDefault(Npc.class, Util.EMPTY_SET);
    }

    public Set<FieldAttackObj> getFieldAttackObjects() {
        return (Set<FieldAttackObj>) (Set<?>) lifeTypeMap.getOrDefault(FieldAttackObj.class, Util.EMPTY_SET);
    }

    public Set<OpenGate> getOpenGates() {
        return (Set<OpenGate>) (Set<?>) lifeTypeMap.getOrDefault(OpenGate.class, Util.EMPTY_SET);
    }

    public Set<Wreckage> getWreckages() {
        return (Set<Wreckage>) (Set<?>) lifeTypeMap.getOrDefault(Wreckage.class, Util.EMPTY_SET);
    }

    public Set<AppearingFoothold> getAppearingFootholds() {
        return (Set<AppearingFoothold>) (Set<?>) lifeTypeMap.getOrDefault(AppearingFoothold.class, Util.EMPTY_SET);
    }

    public Set<Familiar> getFamiliars() {
        return (Set<Familiar>) (Set<?>) lifeTypeMap.getOrDefault(Familiar.class, Util.EMPTY_SET);
    }

    public Set<ImmovableObj> getImmovableObjs() {
        return (Set<ImmovableObj>) (Set<?>) lifeTypeMap.getOrDefault(ImmovableObj.class, Util.EMPTY_SET);
    }

    public List<Wreckage> getWreckageByChrId(int chrId) {
        return getWreckages().stream().filter(w -> w.getOwnerId() == chrId).collect(Collectors.toList());
    }

    public Set<Familiar> getFamiliarsByChrId(int chrId) {
        return getFamiliars().stream().filter(f -> f.getChr().getId() == chrId).collect(Collectors.toSet());
    }

    public void setObjectIDCounter(int idCounter) {
        objectIDCounter = idCounter;
    }

    public synchronized int getNewObjectID() {
        return objectIDCounter++;
    }

    public List<Life> getLifesInRect(Rect rect) {
        List<Life> lifes = new ArrayList<>();
        for (Life life : new HashSet<>(getLifes().values())) {
            Position position = life.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                lifes.add(life);
            }
        }
        return lifes;
    }

    public Npc getNpcByTemplateIdAndInRect(int templateId, Rect rect) {
        return getNpcs().stream()
                .filter(npc -> npc.getTemplateId() == templateId && rect.hasPositionInside(npc.getPosition()))
                .findFirst()
                .orElse(null);
    }

    public List<Char> getCharsInRect(Rect rect) {
        List<Char> chars = new ArrayList<>();
        for (Char chr : getCharsReadOnly()) {
            Position position = chr.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                chars.add(chr);
            }
        }
        return chars;
    }

    public List<PartyMember> getPartyMembersInRect(Char chr, Rect rect) {
        Party party = chr.getParty();
        List<PartyMember> partyMembers = new ArrayList<>();
        for (PartyMember partyMember : party.getOnlineMembers()) {
            Position position = partyMember.getChr().getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                partyMembers.add(partyMember);
            }
        }
        return partyMembers;
    }

    public List<Mob> getMobsInRect(Rect rect) {
        return getMobsInRect(rect, 0);
    }

    public List<Mob> getMobsInRect(Rect rect, int templateId) {
        List<Mob> mobs = new ArrayList<>();
        for (Mob mob : getMobs()) {
            Position position = mob.getPosition();
            if (position != null) {
                int x = position.getX();
                int y = position.getY();
                if (x >= rect.getLeft() && y >= rect.getTop()
                        && x <= rect.getRight() && y <= rect.getBottom()) {
                    if (templateId == 0 || templateId == mob.getTemplateId()) {
                        mobs.add(mob);
                    }
                }
            }
        }
        return mobs;
    }

    public List<Mob> getBossMobsInRect(Rect rect) {
        List<Mob> mobs = new ArrayList<>();
        for (Mob mob : getMobs()) {
            if (mob.isBoss()) {
                Position position = mob.getPosition();
                int x = position.getX();
                int y = position.getY();
                if (x >= rect.getLeft() && y >= rect.getTop()
                        && x <= rect.getRight() && y <= rect.getBottom()) {
                    mobs.add(mob);
                }
            }
        }
        return mobs;
    }

    public List<Drop> getDropsInRect(Rect rect) {
        List<Drop> drops = new ArrayList<>();
        for (Drop drop : getDrops()) {
            Position position = drop.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                drops.add(drop);
            }
        }
        return drops;
    }

    public List<Summon> getSummonsInRect(Rect rect) {
        List<Summon> summons = new ArrayList<>();
        for (Summon summon : getSummons()) {
            Position position = summon.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                summons.add(summon);
            }
        }
        return summons;
    }

    public List<AffectedArea> getAffectAreasInRect(Rect rect) {
        List<AffectedArea> aas = new ArrayList<>();
        for (AffectedArea aa : getAffectedAreas()) {
            Position position = aa.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                aas.add(aa);
            }
        }
        return aas;
    }

    public List<Reactor> getReactorsInRect(Rect rect) {
        List<Reactor> reactors = new ArrayList<>();
        for (Reactor r : getReactors()) {
            Position position = r.getPosition();
            if (rect.hasPositionInside(position)) {
                reactors.add(r);
            }
        }
        return reactors;
    }

    public List<Wreckage> getWreckageByChrIdInRect(int chrId, Rect rect) {
        List<Wreckage> wreckageList = new ArrayList<>();
        for (Wreckage wreckage : getWreckageByChrId(chrId)) {
            Position position = wreckage.getPosition();
            int x = position.getX();
            int y = position.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                wreckageList.add(wreckage);
            }
        }
        return wreckageList;
    }

    public Summon getSummonByChrAndSkillId(Char chr, int skillId) {
        return getSummons().stream().filter(s -> s.getSkillID() == skillId && s.getChr() == chr).findFirst().orElse(null);
    }

    public Summon getSummonByChrAndSkillIdInRect(Char chr, int skillId, Rect rect) {
        return getSummonsInRect(rect).stream().filter(s -> s.getSkillID() == skillId && s.getChr() == chr).findFirst().orElse(null);
    }

    public synchronized void removeAffectedAreaByMistEruption(int id, boolean fromSchedule) {
        Life life = getLifeByObjectID(id);
        if (!(life instanceof AffectedArea)) {
            return;
        }
        ((AffectedArea) life).byMistEruption = true;

        removeLife(id);
        removeSchedule(life, fromSchedule);
        life.broadcastLeavePacket();
    }

    public synchronized void removeLife(int id, boolean fromSchedule) {
        Life life = getLifeByObjectID(id);
        if (life == null || life instanceof MobGen) {
            return;
        }
        removeLife(id);
        removeSchedule(life, fromSchedule);
        life.broadcastLeavePacket();
    }

    public synchronized void removeDrop(int dropID, int pickupUserID, boolean fromSchedule, int petID) {
        Life life = getLifeByObjectID(dropID);
        if (life instanceof Drop) {
            if (petID >= 0) {
                broadcastPacket(DropPool.dropLeaveField(DropLeaveType.PetPickup, pickupUserID, life.getObjectId(),
                        (short) 0, petID, 0));
            } else if (pickupUserID != 0) {
                broadcastPacket(DropPool.dropLeaveField(dropID, pickupUserID));
            } else {
                broadcastPacket(DropPool.dropLeaveField(DropLeaveType.Fade, pickupUserID, life.getObjectId(),
                        (short) 0, 0, 0));
            }
            removeLife(dropID, fromSchedule);
        }
    }

    public Map<Life, ScheduledFuture> getLifeSchedules() {
        return lifeSchedules;
    }

    public void addLifeSchedule(Life life, ScheduledFuture scheduledFuture) {
        getLifeSchedules().put(life, scheduledFuture);
    }

    public void removeSchedule(Life life, boolean fromSchedule) {
        if (!getLifeSchedules().containsKey(life)) {
            return;
        }
        if (!fromSchedule && getLifeSchedules().containsKey(life)) {
            getLifeSchedules().get(life).cancel(false);
        }
        getLifeSchedules().remove(life);
    }

    public void checkCharsInMobZone() {
        for (Mob mob : getMobs()) {
            checkCharsInMobZone(mob);
        }
    }

    public void checkCharsInMobZone(Mob mob) {
        checkCharsInMobZone(mob, mob.getPosition());
    }

    public void checkCharsInMobZone(Mob mob, Position mobPos) {
        var mobInfo = MobData.getMobInfoById(mob.getTemplateId());
        if (mobInfo.getMobZones().size() <= 0) {
            return;
        }

        var mobZoneId = mob.getCurZoneDataType();

        if (mobZoneId == 0) {
            return;
        }

        var mobZone = mobPos.getRectAround(mobInfo.getMobZones().get(mobZoneId));

        for (Char chr : getChars()) {
            checkCharInMobZone(chr, mobZone, mob.getObjectId());
        }
    }

    private void checkCharInMobZone(Char chr, Rect mobZone, int mobObjId) {
        var tsm = chr.getTemporaryStatManager();
        var pos = chr.getPosition();

        // Chr is inside MobZone
        if (mobZone.hasPositionInside(pos)) {
            if (!tsm.hasStat(CharacterTemporaryStat.MobZoneState)) {
                tsm.putCharacterStatValue(CharacterTemporaryStat.MobZoneState, new Option(1, 0, 0));
                tsm.addMobZoneState(mobObjId);
                tsm.sendSetStatPacket();
            }

        // Chr is outside MobZone
        } else if (tsm.hasStat(CharacterTemporaryStat.MobZoneState)) {
            tsm.removeMobZoneState(mobObjId);
            tsm.removeStat(CharacterTemporaryStat.MobZoneState);
            tsm.sendResetStatPacket();
        }
    }

    public void checkMobInAffectedAreas(Mob mob) {
        for (AffectedArea aa : getAffectedAreas()) {
            if (aa.getRect().hasPositionInside(mob.getPosition())) {
                aa.handleMobInside(mob);
            }
        }
    }

    public void checkCharInAffectedAreas(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        for (AffectedArea aa : getAffectedAreas()) {
            boolean isInsideAA = aa.getRect().hasPositionInside(chr.getPosition());

            if (isInsideAA && ((aa.isMobOwnedAA() || (!aa.isMobOwnedAA() && aa.getOwner().isInAPartyWith(chr))))) {
                aa.handleCharInside(chr);
            } else if (!aa.isMobOwnedAA() && tsm.hasAffectedArea(aa) && (!isInsideAA || !aa.getOwner().isInAPartyWith(chr))) {
                tsm.removeAffectedArea(aa);
            }
        }
    }

    public void checkAllCharsInAffectedArea(AffectedArea aa) {
        for (var chr : getCharsReadOnly()) {
            var tsm = chr.getTemporaryStatManager();
            boolean isInsideAA = aa.getRect().hasPositionInside(chr.getPosition());

            if (isInsideAA && ((aa.isMobOwnedAA() || (!aa.isMobOwnedAA() && aa.getOwner().isInAPartyWith(chr))))) {
                aa.handleCharInside(chr);
            } else if (!aa.isMobOwnedAA() && tsm.hasAffectedArea(aa) && (!isInsideAA || !aa.getOwner().isInAPartyWith(chr))) {
                tsm.removeAffectedArea(aa);
            }
        }
    }

    public void drop(Drop drop, Position posFrom, Position posTo) {
        drop(drop, posFrom, posTo, false);
    }

    /**
     * Drops an item to this map, given a {@link Drop}, a starting Position and an ending Position.
     * Immediately broadcasts the drop packet.
     *
     * @param drop              The Drop to drop.
     * @param posFrom           The Position that the drop starts off from.
     * @param posTo             The Position where the drop lands.
     * @param ignoreTradability if the drop should ignore tradability (i.e., untradable items won't disappear)
     */
    public void drop(Drop drop, Position posFrom, Position posTo, boolean ignoreTradability) {
        boolean isTradable = true;
        Item item = drop.getItem();

        if (item != null) {
            ItemInfo itemInfo = ItemData.getItemInfoByID(item.getItemId());
            // must be tradable, and if not an equip, not a quest item
            isTradable = ignoreTradability ||
                    (item.isTradable() && (ItemConstants.isEquip(item.getItemId()) || itemInfo != null
                            && !itemInfo.isQuest()));
            item.setBagItemIndex(-1);
        }

        drop.setPosition(posTo);
        if (isTradable) {
            addLife(drop);
            drop.setExpireTime(FileTime.fromDate(LocalDateTime.now().plusSeconds(GameConstants.DROP_REMOVE_OWNERSHIP_TIME)));
            drop.setRemoveTime(FileTime.fromDate(LocalDateTime.now().plusSeconds(GameConstants.DROP_REMAIN_ON_GROUND_TIME)));
        } else {
            drop.setObjectId(getNewObjectID()); // just so the client sees the drop
        }

        if (!isTradable) {
            broadcastPacket(DropPool.dropEnterField(drop, posFrom, 0, DropEnterType.FadeAway));
        } else if (drop.getItem() != null && ItemConstants.isCollisionLootItem(drop.getItem().getItemId())) {
            // Check for collision items such as exp orbs from combo kills
            if (drop.isInstanced()) {
                var chrForInstance = getCharByID(drop.getOwnerID());
                if (chrForInstance != null) {
                    chrForInstance.write(DropPool.dropEnterFieldCollisionPickUp(drop, posFrom, 0));
                }
            } else {
                broadcastPacket(DropPool.dropEnterFieldCollisionPickUp(drop, posFrom, 0));
            }
        } else {
            if (drop.isInstanced()) {
                var chrForInstance = getCharByID(drop.getOwnerID());
                if (chrForInstance != null && drop.canBePickedUpBy(chrForInstance)) {
                    chrForInstance.write(DropPool.dropEnterFieldCollisionPickUp(drop, posFrom, 0));
                }
            } else {
                for (Char chr : getCharsReadOnly()) {
                    if (!chr.getClient().getWorld().getWorldType().isDropRestricted() || drop.canBePickedUpBy(chr)) {
                        broadcastPacket(DropPool.dropEnterField(drop, posFrom, posTo, 0, drop.canBePickedUpBy(chr)));
                    }
                }
            }
        }

    }

    /**
     * Drops a {@link Drop} according to a given {@link DropInfo DropInfo}'s specification.
     *
     * @param dropInfo The
     * @param posFrom  The Position that hte drop starts off from.
     * @param posTo    The Position where the drop lands.
     * @param ownerId  The owner's character ID. Will not be able to be picked up by Chars that are not the owner.
     */
    public void drop(DropInfo dropInfo, Position posFrom, Position posTo, int ownerId, boolean explosive, Mob mob) {
        int itemID = dropInfo.getItemID();
        Item item;
        Drop drop = new Drop(-1);
        drop.setPosition(posTo);
        drop.setOwnerID(ownerId);
        drop.setExplosiveDrop(explosive);
        Set<Integer> quests = new HashSet<>();
        if (itemID != 0) {
            item = ItemData.getItemDeepCopy(itemID, true);
            if (item != null) {
                item.setQuantity(dropInfo.getQuantity());
                if (item.getItemId() == ItemConstants.INTENSE_POWER_CRYSTAL) {
                    item.setDateExpire(FileTime.fromDate(FileTime.currentTime().toLocalDateTime().plusDays(7)));
                    var powerCrystalTemplate = BossLootConstants.getPowerCrystalTemplateIdOverrideForUI(mob.getTemplateId());
                    item.setPowerCrystalInfo(new PowerCrystal(powerCrystalTemplate == null ? mob.getTemplateId() : powerCrystalTemplate.getLeft(), mob.getDamageDone().size(), BossLootConstants.getPowerCrystalMesoByTemplateId(mob.getTemplateId()) / mob.getDamageDone().size(), FileTime.currentTime()));
                }

                drop.setItem(item);
                ItemInfo ii = ItemData.getItemInfoByID(itemID);
                if (ii != null && ii.isQuest()) {
                    quests = ii.getQuestIDs();
                }
            } else {
                log.error("Was not able to find the item to drop! id = " + itemID);
                return;
            }
        } else {
            drop.setMoney(dropInfo.getMoney());
        }
        addLife(drop);
        drop.setExpireTime(FileTime.fromDate(LocalDateTime.now().plusSeconds(GameConstants.DROP_REMOVE_OWNERSHIP_TIME)));
        drop.setRemoveTime(FileTime.fromDate(LocalDateTime.now().plusSeconds(GameConstants.DROP_REMAIN_ON_GROUND_TIME)));
        for (Char chr : getCharsReadOnly()) {
            if (chr.hasAnyQuestsInProgress(quests)) {
                chr.write(DropPool.dropEnterField(drop, posFrom, posTo, ownerId, drop.canBePickedUpBy(chr)));
            }
        }
        Events.onItemDroppedByMob(this, dropInfo.getQuantity(), drop.getPosition(), drop);
    }

    public Foothold findFootHoldBelow(Position position) {
        return getInfo().findFootHoldBelow(position);
    }

    /**
     * Drops a Set of {@link DropInfo}s from a base Position.
     *
     * @param dropInfos The Set of DropInfos.
     * @param position  The Position the initial Drop comes from.
     * @param ownerID   The owner's character ID.
     */
    public void drop(Set<DropInfo> dropInfos, Position position, int ownerID) {
        drop(dropInfos, findFootHoldBelow(position), position, ownerID, 0, 100, false, null);
    }

    public void drop(Drop drop, Position position) {
        drop(drop, position, false);
    }

    /**
     * Drops a {@link Drop} at a given Position. Calculates the Position that the Drop should land at.
     *
     * @param drop        The Drop that should be dropped.
     * @param position    The Position it is dropped from.
     * @param fromReactor if it quest item the item will disapear
     */
    public void drop(Drop drop, Position position, boolean fromReactor) {
        int x = position.getX();
        var fh = findFootHoldBelow(position);

        if (fh == null) {
            log.warn(String.format("Could not find foothold below %s. FieldID = %d", position.toString(), getId()));
            return;
        }

        Position posTo = new Position(x, fh.getYFromX(x));
        drop(drop, position, posTo, fromReactor);
    }

    /**
     * Drops a Set of {@link DropInfo}s, locked to a specific {@link Foothold}.
     * Not all drops are guaranteed to be dropped, as this method calculates whether or not a Drop should drop, according
     * to the DropInfo's prop chance.
     *
     * @param dropInfos The Set of DropInfos that should be dropped.
     * @param fh        The Foothold this Set of DropInfos is bound to.
     * @param position  The Position the Drops originate from.
     * @param ownerId   The id of the owner of all drops.
     * @param mesoRate  The added meso rate of the character.
     * @param dropRate  The added drop rate of the character.
     */
    public void drop(Set<DropInfo> dropInfos, Foothold fh, Position position, int ownerId, int mesoRate, int dropRate,
                     boolean explosive, Mob mob) {

        //
        // Grab Initial Position from where to 'bloom' out
        //
        var x = position.getX();
        var y = position.getY();
        var minX = getInfo().getVrLeft() + GameConstants.DROP_DIFF_FROM_FIELD_BORDER;
        var maxX = getInfo().getVrRight() - GameConstants.DROP_DIFF_FROM_FIELD_BORDER;

        int diff = 0;
        //
        // For each dropInfo, calculate the position where it would land
        //
        for (var dropInfo : dropInfos) {
            //
            // if the drop will drop, given the drop chances
            //
            if (dropInfo.willDrop(dropRate)) {
                var dropX = x;
                var dropY = y;

                //
                // Calculate the next X position, for fanning out the drops
                //
                dropX = (dropX + diff) > maxX ? maxX - GameConstants.DROP_DIFF_FROM_FIELD_BORDER :
                        (dropX + diff) < minX ? minX + GameConstants.DROP_DIFF_FROM_FIELD_BORDER :
                                dropX + diff;

                //
                // Grab the foothold below the position
                //
                var dropFh = findFootHoldBelow(new Position(dropX, dropY));

                //
                // If foothold exists under or above that position.
                //
                if (dropFh != null) {
                    // Grab the Y position based on the foothold below or above
                    dropY = dropFh.getYFromX(dropX);
                } else {
                    // Grab the original position to ensure that no drop is lost
                    dropX = x;
                    dropY = y;
                }

                // Copy the drop info for money, as we chance the amount that's in there.
                // Not copying -> original dropinfo will keep increasing in mesos
                DropInfo moneyDrop = null;
                if (dropInfo.isMoney()) {
                    if (mob != null) {
                        moneyDrop = mob.generateMesoDrop();
                    } else {
                        moneyDrop = dropInfo.deepCopy();
                    }
                    moneyDrop.setMoney((int) (dropInfo.getMoney() * (mesoRate / 100D)));
                }

                drop(moneyDrop != null ? moneyDrop : dropInfo, position, new Position(dropX, dropY), ownerId, explosive, mob);
                diff = diff < 0 ? Math.abs(diff - GameConstants.DROP_DIFF) : -(diff + GameConstants.DROP_DIFF);
                dropInfo.generateNextDrop();
            }
        }
    }

    public List<Portal> getClosestPortal(Rect rect) {
        List<Portal> portals = new ArrayList<>();
        for (Portal portals2 : getInfo().getPortals()) {
            int x = portals2.getX();
            int y = portals2.getY();
            if (x >= rect.getLeft() && y >= rect.getTop()
                    && x <= rect.getRight() && y <= rect.getBottom()) {
                portals.add(portals2);
            }
        }
        return portals;
    }

    public Char getCharByName(String name) {
        return getChars().stream().filter(chr -> chr.getName().equalsIgnoreCase(name)).findFirst().orElse(null);
    }

    public void execUserEnterScript(Char chr) {
        chr.clearCurrentDirectionNode();
        if (getInfo().getOnUserEnter() == null) {
            return;
        }
        String script = null;
        if (!getInfo().getOnUserEnter().equalsIgnoreCase("")) {
            script = getInfo().getOnUserEnter();
        } else if (CustomFieldScripts.getByVal(getId()) != null) {
            script = CustomFieldScripts.getByVal(getId()).toString();
        }
        if (script != null) {
            chr.getScriptManager().startScript(getId(), script, ScriptType.Field);
        }
    }

    public boolean isUserFirstEnter() {
        return userFirstEnter;
    }

    public void setUserFirstEnter(boolean userFirstEnter) {
        this.userFirstEnter = userFirstEnter;
    }

    public int getAliveMobCount() {
        // not using getMobs() to only have to iterate `lifes' once
        return getLifes().values().stream()
                .filter(life -> life instanceof Mob && ((Mob) life).isAlive())
                .collect(Collectors.toList())
                .size();
    }

    public int getAliveMobCount(int mobID) {
        // not using getMobs() to only have to iterate `lifes' once
        return getLifes().values().stream()
                .filter(life -> life instanceof Mob && life.getTemplateId() == mobID && ((Mob) life).isAlive())
                .collect(Collectors.toList())
                .size();
    }

    public Mob spawnMobWithAppearType(int id, int x, int y, int appearType, int option) {
        Mob mob = MobData.getMobDeepCopyById(id);
        Position pos = new Position(x, y);
        mob.setPosition(pos.deepCopy());
        mob.setPrevPos(pos.deepCopy());
        mob.setPosition(pos.deepCopy());
        mob.setNotRespawnable(true);
        mob.setAppearType((byte) appearType);
        mob.setOption(option);
        if (mob.getField() == null) {
            mob.setField(this);
        }
        spawnLife(mob, null);
        return mob;
    }

    public Mob spawnMob(int id, Position pos) {
        return spawnMob(id, pos, false, 0);
    }

    public Mob spawnMob(int id, Position pos, boolean respawnable, long hp) {
        return spawnMob(id, pos.getX(), pos.getY(), respawnable, hp);
    }

    public Mob spawnMob(int id, int x, int y, boolean respawnable, long hp) {
        Mob mob = MobData.getMobDeepCopyById(id);
        Position pos = new Position(x, y);
        mob.setPosition(pos.deepCopy());
        mob.setPrevPos(pos.deepCopy());
        mob.setPosition(pos.deepCopy());
        mob.setNotRespawnable(!respawnable);
        if (hp > 0) {
            mob.setHp(hp);
            mob.setMaxHp(hp);
        }
        if (mob.getField() == null) {
            mob.setField(this);
        }
        Foothold fh = findFootHoldBelow(pos);
        mob.setCurFoodhold(fh);
        mob.setHomeFoothold(fh);
        spawnLife(mob, null);
        return mob;
    }

    public int getBurningFieldLevel() {
        return burningFieldLevel;
    }

    public void setBurningFieldLevel(int burningFieldLevel) {
        var oldBurningFieldLevel = getBurningFieldLevel();
        this.burningFieldLevel = Math.max(0, Math.min(burningFieldLevel, GameConstants.BURNING_FIELD_MAX_LEVEL));
        if (oldBurningFieldLevel != getBurningFieldLevel()) {
            showBurningLevel(null); // null -> broadcast to Field
        }
    }

    public int getBonusExpByBurningFieldLevel() {
        return getBurningFieldLevel() * GameConstants.BURNING_FIELD_BONUS_EXP_MULTIPLIER_PER_LEVEL; //Burning Field Level * The GameConstant
    }

    private void showBurningLevel(Char toChr) { // null to broadcast to field
        String string = "#fn ExtraBold##fs26#          Burning Field has been destroyed.          ";
        if (getBurningFieldLevel() > 0) {
            string = "#fn ExtraBold##fs26#          Burning Stage " + getBurningFieldLevel() + ": " + getBonusExpByBurningFieldLevel() + "% Bonus EXP!          ";
        }
        Effect effect = Effect.createFieldTextEffect(string, 50, 2000, 4,
                new Position(0, -200), 1, 4, TextEffectType.BurningField, 0, 0);

        if (toChr != null) {
            toChr.write(UserPacket.effect(effect));
        } else {
            broadcastPacket(UserPacket.effect(effect));
        }
    }

    private void increaseBurningLevel() {
        setBurningFieldLevel(getBurningFieldLevel() + 1);
    }

    private void decreaseBurningLevel() {
        setBurningFieldLevel(getBurningFieldLevel() - 1);
    }

    private boolean canBeBurningField() {
        return isChannelField() && getMobGens().size() > 0;
    }

    public void updateBurningFieldLevel() {
        if (!canBeBurningField()) {
            return;
        }
        if (getChars().size() > 0) {
            decreaseBurningLevel();
        } else {
            increaseBurningLevel();
        }
    }

    public void setNextEliteSpawnTime(long nextEliteSpawnTime) {
        this.nextEliteSpawnTime = nextEliteSpawnTime;
    }

    public long getNextEliteSpawnTime() {
        return nextEliteSpawnTime;
    }

    public boolean canSpawnElite() {
        return isChannelField()
                && getInfo().getAverageMobLevel() > GameConstants.MIN_LEVEL_FOR_RANDOM_FIELD_OCCURRENCES
                && (getEliteState() == null || getEliteState() == EliteState.None)
                && getNextEliteSpawnTime() < System.currentTimeMillis();
    }

    public int getKilledElites() {
        return killedElites;
    }

    public void setKilledElites(int killedElites) {
        this.killedElites = killedElites;
    }

    public void incrementEliteKillCount() {
        setKilledElites(getKilledElites() + 1);
    }

    public void setEliteState(EliteState eliteState) {
        this.eliteState = eliteState;
    }

    public EliteState getEliteState() {
        return eliteState;
    }

    public List<Foothold> getNonWallFootholds() {
        return getInfo().getFootholds().values().stream().filter(fh -> !fh.isWall() && !fh.cantGo()).collect(Collectors.toList());
    }

    public Foothold getRandomWalkableFoothold() {
        var fhs = getNonWallFootholds();
        return Util.getRandomFromCollection(fhs);
    }

    public List<Foothold> getNonWallFootholdsWithinRect(Rect rect) {
        List<Foothold> ret = new ArrayList<>();

        for (var fh : getNonWallFootholds()) {
            var midX = (fh.getX1() + fh.getX2()) / 2; // grab middle of foothold
            var midY = (fh.getY1() + fh.getY2()) / 2; // grab middle of foothold

            var midPos = new Position(midX, midY);

            if (rect.hasPositionInside(midPos)) {
                ret.add(fh);
            }
        }

        return ret;
    }

    public Position getRandomPosOnWalkableFoothold(int edgeDistance, boolean canSpawnOnPortal) {
        boolean found = false;
        Position pos = null;
        int iterations = 0;
        int maxAttempts = 500;
        while (!found && iterations < maxAttempts) {
            iterations++;
            Foothold fh = getRandomWalkableFoothold();
            Position tempPos = fh.getRandomPositionFromEdges(edgeDistance);

            if (canSpawnOnPortal) {
                found = true;
                pos = tempPos;
            } else {
                Rect rect = new Rect(
                        new Position(
                                tempPos.getX() - 75,
                                tempPos.getY() - 75),
                        new Position(
                                tempPos.getX() + 75,
                                tempPos.getY() + 75)
                );
                List<Portal> portals = getClosestPortal(rect);
                if (portals.isEmpty()) {
                    found = true;
                    pos = tempPos;
                }
            }
        }
        return pos;
    }

    public Position getRandomPosOnWalkableFoothold(int edgeDistance, boolean canSpawnOnLife, boolean canSpawnOnPortals) {
        boolean found = false;
        Position pos = null;
        int iterations = 0;
        int maxAttempts = 500;
        while (!found && iterations < maxAttempts) {
            iterations++;
            Foothold fh = getRandomWalkableFoothold();
            Position tempPos = fh.getRandomPositionFromEdges(edgeDistance);
            if (canSpawnOnLife) {
                found = true;
                pos = tempPos;
            } else {
                Rect rect = new Rect(
                        new Position(
                                tempPos.getX() - 75,
                                tempPos.getY() - 75),
                        new Position(
                                tempPos.getX() + 75,
                                tempPos.getY() + 75)
                );
                List<Life> lifes = getLifesInRect(rect);
                boolean hasBlockingLife = false;
                for (Life life : lifes) {
                    if ((life instanceof Reactor)) {
                        hasBlockingLife = true;
                        break;
                    }
                }
                if (!hasBlockingLife) {
                    found = true;
                    pos = tempPos;
                }
                if (!canSpawnOnPortals) {
                    List<Portal> portals = getClosestPortal(rect);
                    if (portals.isEmpty()) {
                        found = true;
                        pos = tempPos;
                    } else {
                        found = false;
                        pos = null;
                    }
                }
            }
        }
        return pos;
    }

    private ScriptManagerImpl getScriptManager() {
        if (scriptManager == null) {
            setScriptManager(new ScriptManagerImpl(this));
        }
        return scriptManager;
    }

    public void setScriptManager(ScriptManagerImpl scriptManager) {
        this.scriptManager = scriptManager;
    }

    /**
     * Goes through all MobGens, and spawns a Mob from it if allowed to do so. Only generates when there are Chars
     * on this Field, or if the field is being initialized.
     *
     * @param init if this is the first time that this method is called.
     */
    public void generateMobs(boolean init) {
        if (init || getChars().size() > 0) {
            boolean buffed = isChannelField()
                    && getChannel() > GameConstants.CHANNELS_PER_WORLD - GameConstants.BUFFED_CHANNELS;
            int currentMobs = getMobs().size();
            List<MobGen> shuffledMobs = new ArrayList<>(getMobGens());
            // shuffle so the mobs spawn on random positions, instead of a fixed order
            Collections.shuffle(shuffledMobs);
            for (MobGen mg : shuffledMobs) {
                if (mg.canSpawnOnField(this)) {
                    mg.spawnMob(buffed);
                    currentMobs++;
                    if ((getInfo().getFieldLimit() & FieldOption.NoMobCapacityLimit.getVal()) == 0
                            && currentMobs > getInfo().getFixedMobCapacity()) {
                        break;
                    }
                }
            }
        }

        if (hasFieldBoss() &&
                (getLastFieldBossSpawnTime() == 0 || Util.getCurrentTimeLong() - getLastFieldBossSpawnTime() > FieldConstants.FIELD_BOSS_SPAWN_INTERVAL) &&
                !init) {
            var fieldBossInfo = getBossTemplateByFieldId();
            var bossId = (int) fieldBossInfo[0];
            if (getLifeByTemplateId(bossId) == null) {
                var xPos = (int) fieldBossInfo[1];
                var yPos = (int) fieldBossInfo[2];
                var hp = fieldBossInfo[3];
                spawnMob(bossId, xPos, yPos, false, hp);
                setLastFieldBossSpawnTime(Util.getCurrentTimeLong());
            }
        }
    }

    public boolean isChannelField() {
        return isChannelField;
    }

    public void setChannelField(boolean channelField) {
        this.isChannelField = channelField;
    }

    public List<TownPortal> getTownPortalList() {
        return townPortalList;
    }

    public void setTownPortalList(List<TownPortal> townPortalList) {
        this.townPortalList = townPortalList;
    }

    public void addTownPortal(TownPortal townPortal) {
        getTownPortalList().add(townPortal);
    }

    public void removeTownPortal(TownPortal townPortal) {
        getTownPortalList().remove(townPortal);
    }

    public TownPortal getTownPortalByChrId(int chrId) {
        return getTownPortalList().stream().filter(tp -> tp.getChr().getId() == chrId).findAny().orElse(null);
    }

    public void increaseReactorState(Char chr, int templateId, int stateLength) {
        Life life = getLifeByTemplateId(templateId);
        if (life instanceof Reactor) {
            Reactor reactor = (Reactor) life;
            reactor.increaseState();
            chr.write(ReactorPool.reactorChangeState(reactor, (short) 0, (byte) stateLength));
        }
    }

    public Clock getClock() {
        return clock;
    }

    public void setClock(Clock clock) {
        this.clock = clock;
    }

    public int getChannel() {
        return channel;
    }

    public void setChannel(int channel) {
        this.channel = channel;
    }

    public Channel getChannelInstance() {
        return channelInstance;
    }

    public void setChannelInstance(Channel channelInstance) {
        this.channelInstance = channelInstance;
        setChannel(channelInstance.getChannelId());
    }

    public boolean isChangeToChannelOnLeave() {
        return changeToChannelOnLeave;
    }

    public void setChangeToChannelOnLeave(boolean changeToChannelOnLeave) {
        this.changeToChannelOnLeave = changeToChannelOnLeave;
    }

    public Map<String, Object> getProperties() {
        return properties;
    }

    public void removeProperty(String key) {
        getProperties().remove(key);
    }

    public boolean hasProperty(String key) {
        return getProperties().containsKey(key);
    }

    public Object getProperty(String key) {
        return getProperties().get(key);
    }

    public void setProperty(String key, Object value) {
        getProperties().put(key, value);
    }

    public void setProperties(Map<String, Object> properties) {
        this.properties = properties;
    }

    public void spawnLifeForTime(Life life, int timeMillis) {
        spawnLife(life, null);
        ScheduledFuture sf = EventManager.addEvent(() -> removeLife(life.getObjectId(), true), timeMillis, TimeUnit.MILLISECONDS);
        addLifeSchedule(life, sf);
    }

    public void addLifeForTime(Life life, int timeMillis) {
        addLife(life);
        ScheduledFuture sf = EventManager.addEvent(() -> removeLife(life.getObjectId(), true), timeMillis, TimeUnit.MILLISECONDS);
        addLifeSchedule(life, sf);
    }

    public void spawnRandomHarvest() {
        var count = 0;
        for (var reactor : getReactors()) {
            if (reactor.isHarvestable()) {
                count++;
            }
        }

        if (!isChannelField() || getMobGens().size() == 0 || count >= GameConstants.MAX_HARVESTABLE_REACTORS) {
            return;
        }

        var foothold = getRandomWalkableFoothold();
        var position = foothold.getRandomPosition();

        var isHerb = Util.succeedProp(50); // else a vein
        var possibleReactors = GameConstants.getRandomHarvestReactorsByLevel(getInfo().getAverageMobLevel(), isHerb);

        var randomReactor = Util.getRandomFromCollection(possibleReactors);

        var reactor = ReactorData.getReactorByID(randomReactor);
        reactor.setFh(foothold.getId());
        reactor.setPosition(position);
        spawnLife(reactor, null);
    }

    public void clear() {
        stopTimers();
        setFieldOwnershipManager(null);

        new HashSet<>(getMobs()).forEach(m -> {
            m.clear();
            removeLife(m);
        });
    }

    public void stopTimers() {
        if (scriptManager != null) {
            scriptManager.stopEvents();
        }
    }

    public long getLastFieldBossSpawnTime() {
        return lastFieldBossSpawnTime;
    }

    public void setLastFieldBossSpawnTime(long lastFieldBossSpawnTime) {
        this.lastFieldBossSpawnTime = lastFieldBossSpawnTime;
    }

    public long[] getBossTemplateByFieldId() {
        return FieldConstants.FIELD_BOSSES.getOrDefault(getId(), new long[4]);
    }

    public boolean hasFieldBoss() {
        return FieldConstants.FIELD_BOSSES.containsKey(getId());
    }

    public void onMobDeath(Mob mob) {
        startScript(mob.getMobInfo().getDeathScript(), mob);
        var onClearScript = getInfo().getFieldClearScript();
        if (onClearScript != null && getMobs().size() == 0) {
            startScript(onClearScript);
        }
        if (FieldConstants.isMonsterParkField(getId())) {
            startScript("die_monsterparkmob", mob);
        }

        Events.onMobDeath(this, mob);

        applyBossCooldown(mob);
    }

    private void applyBossCooldown(Mob mob) {
        var bossCooldown = mob.getMobInfo().getBossCooldown();
        if (bossCooldown == null) {
            return;
        }

        var cdChars = new HashSet<>(mob.getDamageDone().keySet());
        var instances = new HashSet<Instance>();
        for (var chr : cdChars) {
            if (chr.getInstance() != null) {
                instances.add(chr.getInstance());
            }
        }
        for (var instance : instances) {
            cdChars.addAll(instance.getChars());
        }

        Set<Integer> doneIds = new HashSet<>();

        for (var chr : cdChars) {
            var offline = false;
            var account = chr.getAccount();
            if (account == null) {
                // chr is offline
                account = accountDao.getByCharId(chr.getId());
                offline = true;
            }

            account.setBossCooldown(bossCooldown, true);
            if (offline) {
                accountDao.saveBossCooldown(account);
            }

            doneIds.add(chr.getId());
        }

        for (var instance : instances) {
            for (var chrId : instance.getCharIds()) {
                if (!doneIds.contains(chrId)) {
                    // left party before cooldown applied
                    var account = accountDao.getByCharId(chrId);
                    if (account != null) {
                        account.setBossCooldown(bossCooldown, true);
                        accountDao.saveBossCooldown(account);
                    }
                }
            }
        }
    }

    public void update() {
        removeExpiredDrops();
        removeOwnerOfExpiredDrops();
        getMobs().forEach(Mob::update);
    }

    private void removeExpiredDrops() {
        var dropsToRemove = new HashSet<Drop>();
        for (var drop : new HashSet<>(getDrops())) {
            if (drop.getRemoveTime() != null && drop.getRemoveTime().isExpired()) {
                dropsToRemove.add(drop);
            }
        }
        dropsToRemove.forEach(d -> removeDrop(d.getObjectId(), 0, true, 0));
    }

    private void removeOwnerOfExpiredDrops() {
        for (var drop : new HashSet<>(getDrops())) {
            if (drop.getExpireTime().isExpired()) {
                drop.setOwnerID(0);
            }
        }
    }

    public FieldInfo getInfo() {
        return FieldData.getFieldInfoById(getId());
    }

    public void addEvent(ScheduledFuture event) {
        getScriptManager().addEvent(event, true);
    }

    public void changeFoothold(String footholdName, boolean show) {
        changeFoothold(footholdName, show, 0, 0);
    }

    public void changeFoothold(String footholdName, boolean show, int x, int y) {
        broadcastPacket(FieldPacket.footholdAppear(footholdName, show, new Position(x, y)));
    }

    public Instance getInstance() {
        return instance;
    }

    public void setInstance(Instance instance) {
        this.instance = instance;
    }

    public FieldEvent getFieldEvent() {
        return fieldEvent;
    }

    public void setFieldEvent(FieldEvent fieldEvent) {
        this.fieldEvent = fieldEvent;
    }

    public long getNextRuneStoneSpawn() {
        return nextRuneStoneSpawn;
    }

    public void setNextRuneStoneSpawn(long nextRuneStoneSpawn) {
        this.nextRuneStoneSpawn = nextRuneStoneSpawn;
    }

    public FieldOwnershipManager getFieldOwnershipManager() {
        return fieldOwnershipManager;
    }

    public void setFieldOwnershipManager(FieldOwnershipManager fieldOwnershipManager) {
        this.fieldOwnershipManager = fieldOwnershipManager;
    }

    public void createObstacleAtom(ObstacleAtomEnum oae, int key, int damage, int velocity, int angle, int amount, int proc) {
        var fieldInfo = getInfo();
        int xLeft = fieldInfo.getVrLeft();
        int yTop = fieldInfo.getVrTop();

        ObstacleInRowInfo obstacleInRowInfo = new ObstacleInRowInfo(4, false, 5000, 0, 0, 0);
        ObstacleRadianInfo obstacleRadianInfo = new ObstacleRadianInfo(4, 0, 0, 0, 0);
        Set<ObstacleAtomInfo> obstacleAtomInfosSet = new HashSet<>();

        for (int i = 0; i < amount; i++) {
            if (Util.succeedProp(proc)) {
                int randomX = new Random().nextInt(fieldInfo.getWidth()) + xLeft;
                Position position = new Position(randomX, yTop);
                Foothold foothold = findFootHoldBelow(position);
                if (foothold != null) {
                    int footholdY = foothold.getYFromX(position.getX());
                    int height = position.getY() - footholdY;
                    height = height < 0 ? -height : height;

                    obstacleAtomInfosSet.add(new ObstacleAtomInfo(oae.getType(), key, position, new Position(), oae.getHitBox(),
                            damage, 0, 0, height, 0, velocity, height, angle));
                }
            }
        }

        broadcastPacket(FieldPacket.createObstacle(ObstacleAtomCreateType.NORMAL, obstacleInRowInfo, obstacleRadianInfo, obstacleAtomInfosSet));
    }
}
