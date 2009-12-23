var CONST = {
	"CT_MASK1": 0,
	"DLG_SETTINGS_00": 1,
	"DLG_SETTINGS_03": 2,
	"DLG_SETTINGS_04": 3,
	"DLG_SETTINGS_1_GENERAL_02": 4,
	"DLG_SETTINGS_1_GENERAL_10": 5,
	"DLG_SETTINGS_1_GENERAL_11": 6,
	"DLG_SETTINGS_1_GENERAL_12": 7,
	"DLG_SETTINGS_1_GENERAL_13": 8,
	"DLG_SETTINGS_1_GENERAL_17": 9,
	"DLG_SETTINGS_1_GENERAL_18": 10,
	"DLG_SETTINGS_1_GENERAL_19": 11,
	"DLG_SETTINGS_1_GENERAL_20": 12,
	"DLG_SETTINGS_2_UI_02": 13,
	"DLG_SETTINGS_2_UI_05": 14,
	"DLG_SETTINGS_2_UI_06": 15,
	"DLG_SETTINGS_2_UI_15": 16,
	"DLG_SETTINGS_2_UI_16": 17,
	"DLG_SETTINGS_3_PATHS_01": 18,
	"DLG_SETTINGS_3_PATHS_02": 19,
	"DLG_SETTINGS_3_PATHS_06": 20,
	"DLG_SETTINGS_3_PATHS_07": 21,
	"DLG_SETTINGS_3_PATHS_10": 22,
	"DLG_SETTINGS_3_PATHS_11": 23,
	"DLG_SETTINGS_3_PATHS_12": 24,
	"DLG_SETTINGS_3_PATHS_15": 25,
	"DLG_SETTINGS_3_PATHS_18": 26,
	"DLG_SETTINGS_3_PATHS_19": 27,
	"DLG_SETTINGS_4_CONN_01": 28,
	"DLG_SETTINGS_4_CONN_02": 29,
	"DLG_SETTINGS_4_CONN_04": 30,
	"DLG_SETTINGS_4_CONN_05": 31,
	"DLG_SETTINGS_4_CONN_06": 32,
	"DLG_SETTINGS_4_CONN_07": 33,
	"DLG_SETTINGS_4_CONN_08": 34,
	"DLG_SETTINGS_4_CONN_09": 35,
	"DLG_SETTINGS_4_CONN_11": 36,
	"DLG_SETTINGS_4_CONN_13": 37,
	"DLG_SETTINGS_4_CONN_15": 38,
	"DLG_SETTINGS_4_CONN_16": 39,
	"DLG_SETTINGS_4_CONN_18": 40,
	"DLG_SETTINGS_4_CONN_20": 41,
	"DLG_SETTINGS_4_CONN_21": 42,
	"DLG_SETTINGS_5_BANDWIDTH_01": 43,
	"DLG_SETTINGS_5_BANDWIDTH_02": 44,
	"DLG_SETTINGS_5_BANDWIDTH_03": 45,
	"DLG_SETTINGS_5_BANDWIDTH_05": 46,
	"DLG_SETTINGS_5_BANDWIDTH_07": 47,
	"DLG_SETTINGS_5_BANDWIDTH_08": 48,
	"DLG_SETTINGS_5_BANDWIDTH_10": 49,
	"DLG_SETTINGS_5_BANDWIDTH_11": 50,
	"DLG_SETTINGS_5_BANDWIDTH_14": 51,
	"DLG_SETTINGS_5_BANDWIDTH_15": 52,
	"DLG_SETTINGS_5_BANDWIDTH_17": 53,
	"DLG_SETTINGS_6_BITTORRENT_01": 54,
	"DLG_SETTINGS_6_BITTORRENT_02": 55,
	"DLG_SETTINGS_6_BITTORRENT_03": 56,
	"DLG_SETTINGS_6_BITTORRENT_04": 57,
	"DLG_SETTINGS_6_BITTORRENT_05": 58,
	"DLG_SETTINGS_6_BITTORRENT_06": 59,
	"DLG_SETTINGS_6_BITTORRENT_07": 60,
	"DLG_SETTINGS_6_BITTORRENT_08": 61,
	"DLG_SETTINGS_6_BITTORRENT_10": 62,
	"DLG_SETTINGS_6_BITTORRENT_11": 63,
	"DLG_SETTINGS_6_BITTORRENT_13": 64,
	"DLG_SETTINGS_7_QUEUEING_01": 65,
	"DLG_SETTINGS_7_QUEUEING_02": 66,
	"DLG_SETTINGS_7_QUEUEING_04": 67,
	"DLG_SETTINGS_7_QUEUEING_06": 68,
	"DLG_SETTINGS_7_QUEUEING_07": 69,
	"DLG_SETTINGS_7_QUEUEING_09": 70,
	"DLG_SETTINGS_7_QUEUEING_11": 71,
	"DLG_SETTINGS_7_QUEUEING_12": 72,
	"DLG_SETTINGS_7_QUEUEING_13": 73,
	"DLG_SETTINGS_8_SCHEDULER_01": 74,
	"DLG_SETTINGS_8_SCHEDULER_04": 75,
	"DLG_SETTINGS_8_SCHEDULER_05": 76,
	"DLG_SETTINGS_8_SCHEDULER_07": 77,
	"DLG_SETTINGS_8_SCHEDULER_09": 78,
	"DLG_SETTINGS_9_WEBUI_01": 79,
	"DLG_SETTINGS_9_WEBUI_02": 80,
	"DLG_SETTINGS_9_WEBUI_03": 81,
	"DLG_SETTINGS_9_WEBUI_05": 82,
	"DLG_SETTINGS_9_WEBUI_07": 83,
	"DLG_SETTINGS_9_WEBUI_09": 84,
	"DLG_SETTINGS_9_WEBUI_10": 85,
	"DLG_SETTINGS_9_WEBUI_12": 86,
	"DLG_SETTINGS_A_ADVANCED_01": 87,
	"DLG_SETTINGS_B_ADV_UI_07": 88,
	"DLG_SETTINGS_C_ADV_CACHE_01": 89,
	"DLG_SETTINGS_C_ADV_CACHE_02": 90,
	"DLG_SETTINGS_C_ADV_CACHE_03": 91,
	"DLG_SETTINGS_C_ADV_CACHE_05": 92,
	"DLG_SETTINGS_C_ADV_CACHE_06": 93,
	"DLG_SETTINGS_C_ADV_CACHE_07": 94,
	"DLG_SETTINGS_C_ADV_CACHE_08": 95,
	"DLG_SETTINGS_C_ADV_CACHE_09": 96,
	"DLG_SETTINGS_C_ADV_CACHE_10": 97,
	"DLG_SETTINGS_C_ADV_CACHE_11": 98,
	"DLG_SETTINGS_C_ADV_CACHE_12": 99,
	"DLG_SETTINGS_C_ADV_CACHE_13": 100,
	"DLG_SETTINGS_C_ADV_CACHE_14": 101,
	"DLG_SETTINGS_C_ADV_CACHE_15": 102,
	"DLG_TORRENTPROP_00": 103,
	"DLG_TORRENTPROP_01": 104,
	"DLG_TORRENTPROP_02": 105,
	"DLG_TORRENTPROP_1_GEN_01": 106,
	"DLG_TORRENTPROP_1_GEN_03": 107,
	"DLG_TORRENTPROP_1_GEN_04": 108,
	"DLG_TORRENTPROP_1_GEN_06": 109,
	"DLG_TORRENTPROP_1_GEN_08": 110,
	"DLG_TORRENTPROP_1_GEN_10": 111,
	"DLG_TORRENTPROP_1_GEN_11": 112,
	"DLG_TORRENTPROP_1_GEN_12": 113,
	"DLG_TORRENTPROP_1_GEN_14": 114,
	"DLG_TORRENTPROP_1_GEN_16": 115,
	"DLG_TORRENTPROP_1_GEN_17": 116,
	"DLG_TORRENTPROP_1_GEN_18": 117,
	"DLG_TORRENTPROP_1_GEN_19": 118,
	"FI_COL_DONE": 119,
	"FI_COL_NAME": 120,
	"FI_COL_PCT": 121,
	"FI_COL_PRIO": 122,
	"FI_COL_SIZE": 123,
	"FI_PRI0": 124,
	"FI_PRI1": 125,
	"FI_PRI2": 126,
	"FI_PRI3": 127,
	"GN_TP_01": 128,
	"GN_TP_02": 129,
	"GN_TP_03": 130,
	"GN_TP_04": 131,
	"GN_TP_05": 132,
	"GN_TP_06": 133,
	"GN_TP_07": 134,
	"GN_TP_08": 135,
	"GN_TP_09": 136,
	"GN_TRANSFER": 137,
	"GN_XCONN": 138,
	"MAIN_TITLEBAR_SPEED": 139,
	"MENU_SHOW_CATEGORY": 140,
	"MENU_SHOW_DETAIL": 141,
	"MF_DONT": 142,
	"MF_HIGH": 143,
	"MF_LOW": 144,
	"MF_NORMAL": 145,
	"ML_DELETE_DATA": 146,
	"ML_FORCE_RECHECK": 147,
	"ML_FORCE_START": 148,
	"ML_LABEL": 149,
	"ML_PAUSE": 150,
	"ML_PROPERTIES": 151,
	"ML_REMOVE": 152,
	"ML_REMOVE_AND": 153,
	"ML_START": 154,
	"ML_STOP": 155,
	"OV_CAT_ACTIVE": 156,
	"OV_CAT_ALL": 157,
	"OV_CAT_COMPL": 158,
	"OV_CAT_DL": 159,
	"OV_CAT_INACTIVE": 160,
	"OV_CAT_NOLABEL": 161,
	"OV_COL_AVAIL": 162,
	"OV_COL_DONE": 163,
	"OV_COL_DOWNLOADED": 164,
	"OV_COL_DOWNSPD": 165,
	"OV_COL_ETA": 166,
	"OV_COL_LABEL": 167,
	"OV_COL_NAME": 168,
	"OV_COL_ORDER": 169,
	"OV_COL_PEERS": 170,
	"OV_COL_REMAINING": 171,
	"OV_COL_SEEDS": 172,
	"OV_COL_SEEEDS_PEERS": 173,
	"OV_COL_SHARED": 174,
	"OV_COL_SIZE": 175,
	"OV_COL_STATUS": 176,
	"OV_COL_UPPED": 177,
	"OV_COL_UPSPD": 178,
	"OV_CONFIRM_DELETEDATA_MULTIPLE": 179,
	"OV_CONFIRM_DELETEDATA_ONE": 180,
	"OV_CONFIRM_DELETE_MULTIPLE": 181,
	"OV_CONFIRM_DELETE_ONE": 182,
	"OV_FL_CHECKED": 183,
	"OV_FL_DOWNLOADING": 184,
	"OV_FL_ERROR": 185,
	"OV_FL_FINISHED": 186,
	"OV_FL_PAUSED": 187,
	"OV_FL_QUEUED": 188,
	"OV_FL_SEEDING": 189,
	"OV_FL_STOPPED": 190,
	"OV_NEWLABEL_CAPTION": 191,
	"OV_NEWLABEL_TEXT": 192,
	"OV_NEW_LABEL": 193,
	"OV_REMOVE_LABEL": 194,
	"OV_TABS": 195,
	"OV_TB_ADDTORR": 196,
	"OV_TB_PAUSE": 197,
	"OV_TB_PREF": 198,
	"OV_TB_REMOVE": 199,
	"OV_TB_START": 200,
	"OV_TB_STOP": 201,
	"SIZE_GB": 202,
	"SIZE_KB": 203,
	"SIZE_MB": 204,
	"ST_CAPT_ADVANCED": 205,
	"ST_CAPT_BANDWIDTH": 206,
	"ST_CAPT_CONNECTION": 207,
	"ST_CAPT_DISK_CACHE": 208,
	"ST_CAPT_FOLDER": 209,
	"ST_CAPT_GENERAL": 210,
	"ST_CAPT_SCHEDULER": 211,
	"ST_CAPT_SEEDING": 212,
	"ST_CAPT_TRANSFER": 213,
	"ST_CAPT_WEBUI": 214,
	"ST_CBO_ENCRYPTIONS": 215,
	"ST_CBO_PROXY": 216,
	"ST_COL_NAME": 217,
	"ST_COL_VALUE": 218,
	"ST_SEEDTIMES_HOURS": 219,
	"ST_SEEDTIMES_IGNORE": 220,
	"ST_SEEDTIMES_MINUTES": 221,
	"TIME_DAYS_HOURS": 222,
	"TIME_HOURS_MINS": 223,
	"TIME_MINS_SECS": 224,
	"TIME_SECS": 225,
	"TIME_WEEKS_DAYS": 226,
	"TIME_YEARS_WEEKS": 227,
	"TORRENT_HASH": 0,
	"TORRENT_STATUS": 1,
	"TORRENT_NAME": 2,
	"TORRENT_SIZE": 3,
	"TORRENT_PROGRESS": 4,
	"TORRENT_DOWNLOADED": 5,
	"TORRENT_UPLOADED": 6,
	"TORRENT_RATIO": 7,
	"TORRENT_UPSPEED": 8,
	"TORRENT_DOWNSPEED": 9,
	"TORRENT_ETA": 10,
	"TORRENT_LABEL": 11,
	"TORRENT_PEERS_CONNECTED": 12,
	"TORRENT_PEERS_SWARM": 13,
	"TORRENT_SEEDS_CONNECTED": 14,
	"TORRENT_SEEDS_SWARM": 15,
	"TORRENT_AVAILABILITY": 16,
	"TORRENT_QUEUE_POSITION": 17,
	"TORRENT_REMAINING": 18,
	"FILEPRIORITY_SKIP": 0,
	"FILEPRIORITY_LOW": 1,
	"FILEPRIORITY_NORMAL": 2,
	"FILEPRIORITY_HIGH": 3,
	"STATE_STARTED": 1,
	"STATE_CHECKING": 2,
	"STATE_ERROR": 16,
	"STATE_PAUSED": 32,
	"STATE_QUEUED": 64
};

if (!console) {
	var console = {};
}

(function() {

	console.log = console.log || function(str) {
		if (window.opera) {
			opera.postError(str);
		} else {
			log(str);
		}
	};

	var timers = {};
	console.time = console.time || function(name) {
		if (name == "") return;
		timers[name] = $time();
	};

	console.timeEnd = console.timeEnd || function(name) {
		if (name == "" || !timers.hasOwnProperty(name)) return;
		console.log(name + ": " + ($time() - timers[name]) + "ms");
		delete timers[name];
	};

	console.assert = console.assert || function() {
		var args = $A(arguments), expr = args.shift();
		if (!expr) {
			throw new Error(false);
		}
	};

})();