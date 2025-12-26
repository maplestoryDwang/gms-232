package net.swordie.ms;

import net.swordie.ms.client.AuthInfo;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.dailies.DailiesManager;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.rankings.RankingModule;
import net.swordie.ms.connection.api.ApiAcceptor;
import net.swordie.ms.connection.crypto.MapleCrypto;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.netty.ChannelAcceptor;
import net.swordie.ms.connection.netty.ChannelHandler;
import net.swordie.ms.connection.netty.LoginAcceptor;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.loaders.*;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Loader;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.TransferInfo;
import net.swordie.ms.world.World;
import net.swordie.ms.world.WorldConfig;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import net.swordie.ms.world.shop.cashshop.CashShop;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.orm.migration.MigrationManager;
import net.swordie.webapi.WebApi;
import net.swordie.webapi.routes.TradeLogRoute;
import org.apache.logging.log4j.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.*;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 2/18/2017.
 */
public class Server extends Properties {
	private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

	private static final Logger log = LogManager.getRootLogger();
	private static final Server server = new Server();

	public static final boolean SHOW_EXCEPTIONS = true;
	public static boolean DEBUG = true;
	public static boolean DEBUG_MOVEMENT = false;
	public static boolean DEBUG_PACKETTIMES = true;
	public static boolean OPCODE_ENCRYPTION = true; // false = either removed or client hook for double opcodes

	// Shutdown fields
	private boolean isInShutdown = false;
	private int minutesRemaining;
	private int shutdownScheduledMinutes;

	private List<World> worldList = new ArrayList<>();
	private static Map<String, AuthInfo> authTokens = new ConcurrentHashMap<>();
	private Map<Integer, User> users = new HashMap<>();
	private CashShop cashShop;
	private Set<ScheduledFuture> shutdownFutures = new HashSet<>();
	private boolean opcodeEnc = false;
	private WebApi webApi;
	private ScheduledFuture itemExpiryFuture;
	private ScheduledFuture clearCacheFuture;
	private ScheduledFuture burningFieldsFuture;
	private ScheduledFuture fieldUpdateFuture;
	private ScheduledFuture fieldGenerateMobFuture;
	private ScheduledFuture fieldSpawnHarvestFuture;
	private ScheduledFuture charUpdateFuture;
	private ScheduledFuture serverNewDayFuture;
	private ScheduledFuture rankingRefreshFuture;
	private ScheduledFuture surpriseMissionFuture;
	private LocalDateTime startedTime;
	private DailiesManager dailiesManager = new DailiesManager();


	public static Server getInstance() {
		return server;
	}

	public List<World> getWorlds() {
		return worldList;
	}

	public World getWorldById(int id) {
		return Util.findWithPred(getWorlds(), w -> w.getWorldId().getVal() == id);
	}

	private void init(String[] args) {
		log.info(String.format("Starting server. Version: %s.%s", ServerConstants.VERSION, ServerConstants.MINOR_VERSION));
		long startNow = System.currentTimeMillis();
		DatabaseManager.init();

		initIdAssigners();

		log.info("Initialized database in " + (System.currentTimeMillis() - startNow) + "ms.");

		// Migration
		if (!MigrationManager.start()) {
			log.error("Stopped Server start due to Migration Failure.");
			return;
		}
		//

		try {
			checkAndCreateDat();
			loadWzData();
		} catch (IllegalAccessException | InvocationTargetException e) {
			e.printStackTrace();
		}
		StringData.load();
        EventListData.load();
		FieldData.loadWorldMap();
		ChannelHandler.initHandlers(false);


		MapleCrypto.initialize(ServerConstants.VERSION);
		new Thread(new ApiAcceptor()).start();
		new Thread(new LoginAcceptor()).start();
		loadAndAddWorlds();
        long start = System.currentTimeMillis();
        VCoreData.loadVCoreData();
        log.info("Loaded VCore data in " + (System.currentTimeMillis() - start) + "ms");

        long startCashShop = System.currentTimeMillis();
		initCashShop();
		log.info("Loaded Cash Shop in " + (System.currentTimeMillis() - startCashShop) + "ms");

		long startFamData = System.currentTimeMillis();
		FamiliarData.loadFamiliarDataInfo();
		log.info("Loaded Familiar Data in " + (System.currentTimeMillis() - startFamData) + "ms");

		for (World world : getWorlds()) {
			for (Channel channel : world.getChannels()) {
				ChannelAcceptor ca = new ChannelAcceptor();
				ca.channel = channel;
				new Thread(ca, channel.getName()).start();
			}
		}
		webApi = new WebApi();
		webApi.init();
		initTimers();
		new Thread(() -> {
			// inits the script engine
			log.info(String.format("Starting %s script engine.", ScriptManagerImpl.SCRIPT_ENGINE_NAME));
		}).start();

		dailiesManager.initialize();
		log.info("Initialized Dailies Manager");
		log.info(String.format("Finished loading server in %dms. Version: %s.%s", System.currentTimeMillis() - startNow, ServerConstants.VERSION, ServerConstants.MINOR_VERSION));

		setStartedTime(LocalDateTime.now());

		// must be after webApi finished
		notifySworDiscord();
	}

	private void loadAndAddWorlds() {
		var worldResourcesDir = ServerConstants.RESOURCES_DIR + "/world";
		for (var file : Objects.requireNonNull(new File(worldResourcesDir).listFiles())) {
			var cfg = WorldConfig.byConfigFile(file);
			if (cfg != null) {
				var world = cfg.toWorld();
				worldList.add(world);
			}
		}
	}

	private void notifySworDiscord() {
		try {
			URL url = new URL("http://127.0.0.1:5000/restart");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			var response = new BufferedReader(new InputStreamReader(con.getInputStream())).readLine();
			if (response.equalsIgnoreCase("Ack")) {
				log.info("SworDiscord Acknowledged The Server Restart");
			} else {
				log.info("SworDiscord Could Not Acknowledge The Server Restart");
			}
			con.disconnect();
		} catch (IOException e) {
			log.info("SworDiscord Could Not Acknowledge The Server Restart");
		}
	}

	private void initTimers() {
		// server
		clearCacheFuture = EventManager.addFixedRateEvent(this::clearCache, ServerConstants.CLEAR_CACHE_RATE, ServerConstants.CLEAR_CACHE_RATE, TimeUnit.HOURS);

		// fields
		burningFieldsFuture = EventManager.addFixedRateEvent(this::updateBurningFieldLevel, GameConstants.BURNING_FIELD_TIMER, GameConstants.BURNING_FIELD_TIMER, TimeUnit.MINUTES);
		fieldUpdateFuture = EventManager.addFixedRateEvent(this::updateFields, GameConstants.FIELD_UPDATE_FREQ, GameConstants.FIELD_UPDATE_FREQ, TimeUnit.MILLISECONDS);
		fieldGenerateMobFuture = EventManager.addFixedRateEvent(this::generateMobs, GameConstants.BASE_MOB_RESPAWN_RATE, GameConstants.BASE_MOB_RESPAWN_RATE, TimeUnit.MILLISECONDS);
		fieldSpawnHarvestFuture = EventManager.addFixedRateEvent(this::generateHarvests, GameConstants.HARVEST_TIMER, GameConstants.HARVEST_TIMER, TimeUnit.MINUTES);

		// char
		charUpdateFuture = EventManager.addFixedRateEvent(this::updateChars, GameConstants.CHAR_UPDATE_FREQ, GameConstants.CHAR_UPDATE_FREQ, TimeUnit.MILLISECONDS);
		serverNewDayFuture = EventManager.addFixedRateEvent(this::onNewDay, getSecondsTillNextDayStart(), GameConstants.DAILY_RESET_FREQ, TimeUnit.SECONDS);
		itemExpiryFuture = EventManager.addFixedRateEvent(this::checkForItemExpiries, GameConstants.EXPIRY_TIME_CHECK, GameConstants.EXPIRY_TIME_CHECK, TimeUnit.MINUTES);

		// rankings
		rankingRefreshFuture = EventManager.addFixedRateEvent(RankingModule::refresh, 0, GameConstants.RANKING_REFRESH_FREQ, TimeUnit.HOURS);

		// surprise missions
		surpriseMissionFuture = EventManager.addFixedRateEvent(this::giveSurpriseMissions, GameConstants.SURPRISE_MISSION_TRY_FREQUENCY, GameConstants.SURPRISE_MISSION_TRY_FREQUENCY, TimeUnit.MINUTES);
	}

	private long getSecondsTillNextDayStart() {
		return Util.getSecondsTill(Util.getStartNextDayAsOffsetDateTime());
	}

	/**
	 * Invoked on the start of each new day (server Time)
	 */
	private void onNewDay() {
		dailiesManager.onNewDayGlobal();
		for (var world : getWorlds()) {
			world.onNewDay();
		}
	}

	private void updateChars() {
		getWorlds().forEach(World::updateChars);
	}

	private void updateFields() {
		getWorlds().forEach(World::updateFields);
	}

	private void generateMobs() {
		getWorlds().forEach(World::generateMobs);
	}

	private void generateHarvests() {
		getWorlds().forEach(World::generateHarvests);
	}

	private void checkForItemExpiries() {
		for (var world : getWorlds()) {
			world.checkForItemExpiry();
		}
	}

	private void updateBurningFieldLevel() {
		for (var world : getWorlds()) {
			world.updateBurningFieldLevel();
		}
	}

	private void giveSurpriseMissions() {
		for (var world : getWorlds()) {
			world.giveSurpriseMissions();
		}
	}

	private void initIdAssigners() {
		Item.setIdAssigner(new IdAssigner<>(Item.class));
		CashItemInfo.setIdAssigner(new IdAssigner<>(CashItemInfo.class));
		MatrixRecord.setIdAssigner(new IdAssigner<>(MatrixRecord.class));
		AuctionItem.setIdAssigner(new IdAssigner<>(AuctionItem.class));
		Familiar.setIdAssigner(new IdAssigner<>(Familiar.class));
	}

	private void checkAndCreateDat() {
		File file = new File(ItemData.EQUIPS_FILE);
		boolean exists = file.exists();
		if (!exists) {
			log.info("Dat files cannot be found (at least not the equip dats). All dats will now be generated. This may take a long while.");
			Util.makeDirIfAbsent(ServerConstants.DAT_DIR);
			for (Class c : DataClasses.datCreators) {
				try {
					Method m = c.getMethod("generateDatFiles");
					m.invoke(null);
				} catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public void loadWzData() throws IllegalAccessException, InvocationTargetException {
		String datFolder = ServerConstants.DAT_DIR;
		for (Class c : DataClasses.dataClasses) {
			for (Method method : c.getMethods()) {
				String name;
				Loader annotation = method.getAnnotation(Loader.class);
				if (annotation != null) {
					name = annotation.varName();
					File file = new File(datFolder, name + ".dat");
					boolean exists = file.exists();
					long start = System.currentTimeMillis();
					method.invoke(c, file, exists);
					long total = System.currentTimeMillis() - start;
					if (exists) {
						log.info(String.format("Took %dms to load from %s", total, file.getName()));
					} else {
						log.info(String.format("Took %dms to load using %s", total, method.getName()));
					}
				}
			}
		}
	}

	public TransferInfo getTransferInfo(int charId, int worldId) {
		for (Channel c : getWorldById(worldId).getChannels()) {
			if (c.getTransfers().containsKey(charId)) {
				return c.getTransfers().get(charId);
			}
		}
		return null;
	}

	public void clearCache() {
		try {
			DropData.clear();
			FieldData.clear();
			ItemData.clear();
			MobData.clear();
			NpcData.clear();
			QuestData.clear();
			SkillData.clear();
			ReactorData.clear();
			EtcData.clear();
			ScriptManagerImpl.clear();
			for (World world : getWorlds()) {
				world.clearCache();
			}
			purgeExpiredTokens();
			ChannelHandler.initHandlers(true);
			TradeLogRoute.usernames.clear();
		} catch (Exception e) {
			ErrorLogger.logAsClientError(e);
		}
	}

	private void purgeExpiredTokens() {
		var tokens = new HashMap<>(getAuthTokens());
		var toRemove = new HashSet<String>();
		for (var entry : tokens.entrySet()) {
			var key = entry.getKey();
			var info = entry.getValue();
			if (info == null || info.isExpired()) {
				toRemove.add(key);
			}
		}
		toRemove.forEach(this::removeUserFromAuthToken);
	}

	public void initCashShop() {
		cashShop = new CashShop();
	}

	public CashShop getCashShop() {
		return this.cashShop;
	}

	public void addUser(User user) {
		users.put(user.getId(), user);
	}

	public void removeUser(User user) {
		if (user == null) {
			return;
		}
		// Remove from transfer
		for (var world : getWorlds()) {
			world.removeUserFromTransfer(user);
		}

		users.remove(user.getId());
		removeCharsByUser(user);
	}

	public boolean isUserLoggedIn(User user) {
		return users.containsKey(user.getId()) || isInTransfer(user);
	}

	public boolean isInShutdown() {
		return isInShutdown;
	}

	public void setInShutdown(boolean inShutdown) {
		isInShutdown = inShutdown;
	}

	public int getMinutesRemaining() {
		return minutesRemaining;
	}

	public void setMinutesRemaining(int minutesRemaining) {
		this.minutesRemaining = minutesRemaining;
	}

	public int getShutdownScheduledMinutes() {
		return shutdownScheduledMinutes;
	}

	public void setShutdownScheduledMinutes(int shutdownScheduledMinutes) {
		this.shutdownScheduledMinutes = shutdownScheduledMinutes;
	}

	public LocalDateTime getStartedTime() {
		return startedTime;
	}

	public void setStartedTime(LocalDateTime startedTime) {
		this.startedTime = startedTime;
	}

	private Map<String, AuthInfo> getAuthTokens() {
		return authTokens;
	}

	public AuthInfo getAuthInfo(String key) {
		return getAuthTokens().get(key);
	}

	public void addAuthToken(byte[] token, int userID, boolean isPlayer) {
		String tokenStr = new String(token);
		FileTime expiryDate = FileTime.fromDate(LocalDateTime.now().plusMinutes(ServerConstants.TOKEN_EXPIRY_TIME));
		AuthInfo entry = new AuthInfo(userID, expiryDate, false, isPlayer);
		getAuthTokens().put(tokenStr, entry);
	}

	public int getUserIdFromAuthToken(String token, boolean needsWzVerified) {
		if (token == null) {
			return 0;
		}

		AuthInfo authInfo = getAuthTokens().getOrDefault(token, null);

		if (authInfo == null || authInfo.getExpiryTime() == null) {
			return 0;
		}

		if (authInfo.getExpiryTime().isExpired()) {
			removeUserFromAuthToken(token);
			return 0;
		}

		int userId = 0;
		if (!needsWzVerified || authInfo.isWzVerified() || !authInfo.isNeedsWzVerified()) {
			userId = authInfo.getUserId();
		}

		return userId;
	}

	public User getUserFromAuthToken(String token) {
		var userId = getUserIdFromAuthToken(token, false);

		User user = null;
		if (userId > 0) {
			user = getUserById(userId);
			if (user == null) {
				user = userDao.getById(userId);
			}
		}

		return user;
	}

	public void removeUserFromAuthToken(String token) {
		getAuthTokens().remove(token);
	}

	public void shutdown(int minutes) {
		setShutdownScheduledMinutes(minutes);
		setInShutdown(true);
		saveTimeInfo();
		if (minutes != 0) {
			for (World world : getWorlds()) {
				for (int i = 0; i < minutes; i++) {
					int minsLeft = minutes - i;
					String msg = "[Notice] Server is shutting down in " + minsLeft + " minutes. " +
							"Please log off safely before the server shuts down.";
					shutdownFutures.add(
							EventManager.addEvent(() -> {
										setMinutesRemaining(minsLeft);
										world.broadcastPacket(UserLocal.chatMsg(ChatType.Notice2, msg));
										log.warn(msg);
									}
									, i, TimeUnit.MINUTES));
				}
			}
			shutdownFutures.add(EventManager.addEvent(() -> {
				log.warn("Starting shutdown.");
				var start = System.currentTimeMillis();
				for (World world : getWorlds()) {
					world.shutdown();
				}
				log.warn(String.format("Shutdown complete, took %dms", System.currentTimeMillis() - start));
				System.exit(0);
			}, minutes, TimeUnit.MINUTES));
		} else {
			log.warn("Starting shutdown.");
			var start = System.currentTimeMillis();
			for (World world : getWorlds()) {
				world.shutdown();
			}
			log.warn(String.format("Shutdown complete, took %dms", System.currentTimeMillis() - start));
			System.exit(0);
		}
	}

	private void saveTimeInfo() {
		log.info("Writing time info");
		try (var writer = new FileWriter(ServerConstants.LOG_DIR + "/timeinfo.csv", true)){
			writer.write("header;count;avgMs\r\n");
			for (var info : ChannelHandler.timeInfo.values()) {
				writer.write(String.format("%s", info.toString()));
				writer.write("\r\n");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		log.info("Wrote time info");
	}

	public void cancelShutdown() {
		setInShutdown(false);
		if (shutdownFutures.size() > 0) {
			for (ScheduledFuture sf : shutdownFutures) {
				sf.cancel(false);
			}
			for (World world : getWorlds()) {
				world.broadcastPacket(UserLocal.chatMsg(ChatType.Notice2, "[Notice] Cancelled shutdown."));
			}
		}
	}

	public static void main(String[] args) {
		getInstance().init(args);
	}

	public void removeCharsByUser(User user) {
		if (user != null) {
			for (World world : getWorlds()) {
				world.removeCharsOfUser(user);
			}
		}
	}

	public User getUserById(int userId) {
		return users.get(userId);
	}

	public int getPlayerCount() {
		int total = 0;
		for (var world : getWorlds()) {
			total += world.getPlayerCount();
		}
		return total;
	}

	public Set<AuctionItem> getAuctionsByAccountID(int accountId) {
		var items = new HashSet<AuctionItem>();
		for (var world : getWorlds()) {
			items.addAll(world.getAuctionsByAccountID(accountId));
		}
		return items;
	}

	public User getActiveUserByIdOrDb(int userId) {
		var user = getUserById(userId);
		if (user == null) {
			user = userDao.getById(userId);
		}
		return user;
	}

	public boolean isInTransfer(User user) {
		return getUserFromTransfer(user.getId()) != null;
	}

	public User getUserFromTransfer(int userId) {
		for (var w : getWorlds()) {
			var user = w.getUserFromTransfer(userId);
			if (user != null) {
				return user;
			}
		}

		return null;
	}

	public DailiesManager getDailiesManager() {
		return dailiesManager;
	}

	public Set<Char> getAllOnlineCharacters() {
		var chars = new HashSet<Char>();
		for (var world : getWorlds()) {
			chars.addAll(world.getChars());
		}
		return chars;
	}
}
