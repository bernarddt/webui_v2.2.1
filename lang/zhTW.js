/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Torrent檔案||*.torrent||所有檔案 (*.*)||*.*||",
   "DLG_BTN_OK":"確定",
   "DLG_BTN_CANCEL":"取消",
   "DLG_BTN_APPLY":"套用(A)",
   "DLG_BTN_YES":"確定",
   "DLG_BTN_NO":"取消",
   "DLG_BTN_CLOSE":"關閉(C)",
   "DLG_SETTINGS_00":"選項",
   "DLG_SETTINGS_1_GENERAL_01":"語言",
   "DLG_SETTINGS_1_GENERAL_02":"語言(L):",
   "DLG_SETTINGS_1_GENERAL_10":"私隱",
   "DLG_SETTINGS_1_GENERAL_11":"自動檢查更新(C)",
   "DLG_SETTINGS_1_GENERAL_12":"更新到測試版本",
   "DLG_SETTINGS_1_GENERAL_13":"更新時傳送匿名資訊",
   "DLG_SETTINGS_1_GENERAL_17":"下載時",
   "DLG_SETTINGS_1_GENERAL_18":"附加 .!ut 到未完成的檔案(A)",
   "DLG_SETTINGS_1_GENERAL_19":"預先分配所有檔案的空間(R)",
   "DLG_SETTINGS_1_GENERAL_20":"如有活躍的Torrent便防止待命(E)",
   "DLG_SETTINGS_2_UI_01":"顯示選項",
   "DLG_SETTINGS_2_UI_02":"刪除Torrent時確認(O)",
   "DLG_SETTINGS_2_UI_03":"刪除Tracker時確認",
   "DLG_SETTINGS_2_UI_04":"離開時確認(H)",
   "DLG_SETTINGS_2_UI_05":"交替的列表背景顏色(L)",
   "DLG_SETTINGS_2_UI_06":"在標題列上顯示目前的速度(T)",
   "DLG_SETTINGS_2_UI_07":"在標題列上顯示速度限制(H)",
   "DLG_SETTINGS_2_UI_15":"加入Torrents時",
   "DLG_SETTINGS_2_UI_16":"不要自動開始下載(D)",
   "DLG_SETTINGS_2_UI_17":"顯示程式視窗(C)",
   "DLG_SETTINGS_2_UI_18":"顯示一個列出Torrent內的檔案的視窗(H)",
   "DLG_SETTINGS_2_UI_19":"滑鼠雙擊動作",
   "DLG_SETTINGS_2_UI_20":"對於做種的Torrents:",
   "DLG_SETTINGS_2_UI_22":"對於下載的Torrents:",
   "DLG_SETTINGS_3_PATHS_01":"下載檔案位置",
   "DLG_SETTINGS_3_PATHS_02":"將新的下載放在(P):",
   "DLG_SETTINGS_3_PATHS_03":"手動增加時永遠顯示對話視窗(W)",
   "DLG_SETTINGS_3_PATHS_06":"將完成的下載移至(M):",
   "DLG_SETTINGS_3_PATHS_07":"附加Torrent的標籤(A)",
   "DLG_SETTINGS_3_PATHS_10":"只移動預設下載位置的檔案(O)",
   "DLG_SETTINGS_3_PATHS_11":"Torrent檔案的位置",
   "DLG_SETTINGS_3_PATHS_12":"儲存Torrent檔案於",
   "DLG_SETTINGS_3_PATHS_15":"下載完成後將Torrent檔案移至:",
   "DLG_SETTINGS_3_PATHS_18":"從以下資料夾自動載入Torrent檔案(A):",
   "DLG_SETTINGS_3_PATHS_19":"刪除已載入的Torrent檔案(D)",
   "DLG_SETTINGS_4_CONN_01":"監聽連接埠",
   "DLG_SETTINGS_4_CONN_02":"本機連接埠:",
   "DLG_SETTINGS_4_CONN_04":"隨機連接埠",
   "DLG_SETTINGS_4_CONN_05":"啟動時使用隨機連接埠(R)",
   "DLG_SETTINGS_4_CONN_06":"啟用UPnP連接埠映射",
   "DLG_SETTINGS_4_CONN_07":"啟用NAT-PMP連接埠映射",
   "DLG_SETTINGS_4_CONN_08":"代理伺服器",
   "DLG_SETTINGS_4_CONN_09":"類型(Y):",
   "DLG_SETTINGS_4_CONN_11":"代理(P):",
   "DLG_SETTINGS_4_CONN_13":"連接埠(O):",
   "DLG_SETTINGS_4_CONN_15":"驗證",
   "DLG_SETTINGS_4_CONN_16":"名稱:",
   "DLG_SETTINGS_4_CONN_18":"密碼:",
   "DLG_SETTINGS_4_CONN_19":"透過代理伺服器解析主機名稱",
   "DLG_SETTINGS_4_CONN_20":"點對點連接時使用代理伺服器",
   "DLG_SETTINGS_4_CONN_21":"加到Windows防火牆的例外(F)",
   "DLG_SETTINGS_4_CONN_22":"代理伺服器私隱",
   "DLG_SETTINGS_4_CONN_23":"停用所有本地DNS查詢",
   "DLG_SETTINGS_4_CONN_24":"停用泄漏可識別的資訊的功能",
   "DLG_SETTINGS_4_CONN_25":"停用代理不支援的連線",
   "DLG_SETTINGS_5_BANDWIDTH_01":"整體上傳速度限制",
   "DLG_SETTINGS_5_BANDWIDTH_02":"最大上傳速度 (kB/s): [0: 不限]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"自動",
   "DLG_SETTINGS_5_BANDWIDTH_05":"非下載時上傳速度改為 (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"整體下載速度限制",
   "DLG_SETTINGS_5_BANDWIDTH_08":"最大下載速度 (kB/s): [0: 不限]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"連接數量",
   "DLG_SETTINGS_5_BANDWIDTH_11":"整體最大連接數量:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"每個Torrent的使用者連接數量:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"每個Torrent的上傳連接數量:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"如果上傳速度 < 90% 便增加上傳連接數量",
   "DLG_SETTINGS_5_BANDWIDTH_18":"全局比率限制选项",
   "DLG_SETTINGS_5_BANDWIDTH_19":"將速度限制套用到傳輸消耗",
   "DLG_SETTINGS_5_BANDWIDTH_20":"將速度限制套用到uTP連接",
   "DLG_SETTINGS_6_BITTORRENT_01":"基本BitTorrent功能",
   "DLG_SETTINGS_6_BITTORRENT_02":"啟用DHT網絡(E)",
   "DLG_SETTINGS_6_BITTORRENT_03":"向Tracker查詢使用者資訊(A)",
   "DLG_SETTINGS_6_BITTORRENT_04":"為新的Torrent啟用DHT(E)",
   "DLG_SETTINGS_6_BITTORRENT_05":"啟用使用者資訊交換(P)",
   "DLG_SETTINGS_6_BITTORRENT_06":"啟用本地使用者偵測(L)",
   "DLG_SETTINGS_6_BITTORRENT_07":"限制本地使用者流量(L)",
   "DLG_SETTINGS_6_BITTORRENT_08":"報告給Tracker的IP/主機名稱:",
   "DLG_SETTINGS_6_BITTORRENT_10":"協定加密",
   "DLG_SETTINGS_6_BITTORRENT_11":"連出的:",
   "DLG_SETTINGS_6_BITTORRENT_13":"允許連入的非加密的連接",
   "DLG_SETTINGS_6_BITTORRENT_14":"啟用頻寬管理 [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"啟用UDP Tracker支援",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"啟用傳輸限制",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"傳輸限制設定",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"限制類型:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"流量限制",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"時期 (以天為單位):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"所選時期的用量紀錄:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"已上傳:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"已下載:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"已上傳 + 已下載:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"時期:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"過去的%d天",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"重設紀錄",
   "DLG_SETTINGS_8_QUEUEING_01":"隊列設定",
   "DLG_SETTINGS_8_QUEUEING_02":"最大活躍的Torrent數量 (上傳和下載):",
   "DLG_SETTINGS_8_QUEUEING_04":"最大活躍下載的Torrent數量:",
   "DLG_SETTINGS_8_QUEUEING_06":"做種滿足 [預設值]",
   "DLG_SETTINGS_8_QUEUEING_07":"最少比率 (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"最少做種時間 (以分鐘為單位):",
   "DLG_SETTINGS_8_QUEUEING_11":"做種任務比下載任務有較高優先順序(S)",
   "DLG_SETTINGS_8_QUEUEING_12":"當µTorrent達到上傳目標時",
   "DLG_SETTINGS_8_QUEUEING_13":"上傳限速為 (kB/s): [0: 停止]",
   "DLG_SETTINGS_9_SCHEDULER_01":"啟用排程器(E)",
   "DLG_SETTINGS_9_SCHEDULER_02":"排程器表",
   "DLG_SETTINGS_9_SCHEDULER_04":"排程器設定",
   "DLG_SETTINGS_9_SCHEDULER_05":"上傳限速 (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"下載限速 (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"關閉時停用DHT(D)",
   "DLG_SETTINGS_9_WEBUI_01":"啟用網頁界面(W)",
   "DLG_SETTINGS_9_WEBUI_02":"驗證",
   "DLG_SETTINGS_9_WEBUI_03":"使用者名稱(U):",
   "DLG_SETTINGS_9_WEBUI_05":"密碼(P):",
   "DLG_SETTINGS_9_WEBUI_07":"啟用有以下使用者名稱的訪客帳戶(G):",
   "DLG_SETTINGS_9_WEBUI_09":"連接性",
   "DLG_SETTINGS_9_WEBUI_10":"監聽連接埠 (預設是連線的連接埠)(L):",
   "DLG_SETTINGS_9_WEBUI_12":"僅允許從以下IP 地址進行訪問(每個地址條目之間用逗號隔開):",
   "DLG_SETTINGS_A_ADVANCED_01":"進階選項 [警告: 請勿修改!]",
   "DLG_SETTINGS_A_ADVANCED_02":"值(V):",
   "DLG_SETTINGS_A_ADVANCED_03":"True",
   "DLG_SETTINGS_A_ADVANCED_04":"False",
   "DLG_SETTINGS_A_ADVANCED_05":"設定(S)",
   "DLG_SETTINGS_B_ADV_UI_01":"速度列表 [用逗號分開數個數值]",
   "DLG_SETTINGS_B_ADV_UI_02":"忽視自動的速度列表(O)",
   "DLG_SETTINGS_B_ADV_UI_03":"上傳速度列表:",
   "DLG_SETTINGS_B_ADV_UI_05":"下載速度列表:",
   "DLG_SETTINGS_B_ADV_UI_07":"持久標籤 [使用 | 符號分開數個標籤]",
   "DLG_SETTINGS_B_ADV_UI_08":"搜尋器 [格式: 名稱|網址]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"基本快取設定",
   "DLG_SETTINGS_C_ADV_CACHE_02":"硬碟快取是用來將頻繁地存取的資料保留在記憶體裏以減少讀出和寫入硬諜的次數. 通常µTorrent會自動地管理快取, 但你也可以透過更改這些設定來改變它的行為.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"忽視自動的快取大小並手動指定它的大小(O) (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"不需要快取時減少記憶體使用量(R)",
   "DLG_SETTINGS_C_ADV_CACHE_06":"進階快取設定",
   "DLG_SETTINGS_C_ADV_CACHE_07":"啟用硬碟寫入快取(W)",
   "DLG_SETTINGS_C_ADV_CACHE_08":"每兩分鐘寫出沒有碰到的分塊(I)",
   "DLG_SETTINGS_C_ADV_CACHE_09":"立即寫出已完成的分塊(T)",
   "DLG_SETTINGS_C_ADV_CACHE_10":"啟用硬碟讀出快取(R)",
   "DLG_SETTINGS_C_ADV_CACHE_11":"如果上傳速度慢便關閉硬碟讀出快取",
   "DLG_SETTINGS_C_ADV_CACHE_12":"從快取移除舊的分塊",
   "DLG_SETTINGS_C_ADV_CACHE_13":"快取忙碌時增加自動的快取大小",
   "DLG_SETTINGS_C_ADV_CACHE_14":"停用Windows硬碟寫入快取",
   "DLG_SETTINGS_C_ADV_CACHE_15":"停用Windows硬碟讀出快取",
   "DLG_SETTINGS_C_ADV_RUN_01":"執行程式",
   "DLG_SETTINGS_C_ADV_RUN_02":"下載完成時執行這個程式",
   "DLG_SETTINGS_C_ADV_RUN_04":"Torrent改變狀態時執行這個程式",
   "DLG_SETTINGS_C_ADV_RUN_06":"您可以使用這些指令:\r\n%F - 已下載檔案的名稱 (單一檔案Torrent適用)\r\n%D - 儲存檔案的資料夾\r\n%N - Torrent的標題\r\n%S - Torrent狀態\r\n%L - 標籤\r\n%T - Tracker\r\n%M - 狀態訊息 (與狀態欄一樣)\r\n%I - 十六進制資訊特徵碼\r\n狀態是以下的組合: 已開始 = 1, 檢查中 = 2, 檢查後開始 = 4,\r\n已檢查 = 8, 錯誤 = 16, 已暫停 = 32, 自動 = 64, 已載入 = 128",
   "DLG_TORRENTPROP_00":"Torrent屬性",
   "DLG_TORRENTPROP_1_GEN_01":"Trackers (每排用一空行分隔)",
   "DLG_TORRENTPROP_1_GEN_03":"流量設定",
   "DLG_TORRENTPROP_1_GEN_04":"最大上傳速度 (kB/s): [0: 預設]",
   "DLG_TORRENTPROP_1_GEN_06":"最大下載速度 (kB/s): [0: 預設]",
   "DLG_TORRENTPROP_1_GEN_08":"上傳連接數量: [0: 預設]",
   "DLG_TORRENTPROP_1_GEN_10":"做種滿足",
   "DLG_TORRENTPROP_1_GEN_11":"忽視預設設定(O)",
   "DLG_TORRENTPROP_1_GEN_12":"最少比率 (%):",
   "DLG_TORRENTPROP_1_GEN_14":"最少做種時間 (分鐘):",
   "DLG_TORRENTPROP_1_GEN_16":"其它設定",
   "DLG_TORRENTPROP_1_GEN_17":"超級種子(I)",
   "DLG_TORRENTPROP_1_GEN_18":"啟用DHT(E)",
   "DLG_TORRENTPROP_1_GEN_19":"使用者資訊交換(P)",
   "DLG_ADDEDITRSSFEED_03":"Feed",
   "DLG_ADDEDITRSSFEED_04":"Feed網址:",
   "DLG_ADDEDITRSSFEED_05":"自訂別名(C):",
   "DLG_ADDEDITRSSFEED_06":"訂閱",
   "DLG_ADDEDITRSSFEED_07":"不要自動下載所有項目(N)",
   "DLG_ADDEDITRSSFEED_08":"自動下載Feed裏的所有項目(A)",
   "DLG_ADDEDITRSSFEED_09":"使用智能劇集濾器(S)",
   "DLG_RSSDOWNLOADER_02":"Feeds||最愛||紀錄||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"濾器設定",
   "DLG_RSSDOWNLOADER_05":"名稱:",
   "DLG_RSSDOWNLOADER_06":"濾除:",
   "DLG_RSSDOWNLOADER_07":"不是:",
   "DLG_RSSDOWNLOADER_08":"儲存於:",
   "DLG_RSSDOWNLOADER_09":"Feed:",
   "DLG_RSSDOWNLOADER_10":"質素:",
   "DLG_RSSDOWNLOADER_11":"劇集號碼(E): [例如 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"濾器和原本的名稱配對(預設和解碼的名稱配對)(F)",
   "DLG_RSSDOWNLOADER_13":"不要自動開始下載",
   "DLG_RSSDOWNLOADER_14":"智能劇集濾器",
   "DLG_RSSDOWNLOADER_15":"給予下載最高優先順序(G)",
   "DLG_RSSDOWNLOADER_16":"最少的間隔(M):",
   "DLG_RSSDOWNLOADER_17":"新的Torrent的標籤:",
   "DLG_RSSDOWNLOADER_18":"增加RSS Feed...",
   "DLG_RSSDOWNLOADER_19":"編輯Feed(E)...",
   "DLG_RSSDOWNLOADER_20":"停用Feed(A)",
   "DLG_RSSDOWNLOADER_21":"啟用Feed(A)",
   "DLG_RSSDOWNLOADER_22":"更新Feed(U)",
   "DLG_RSSDOWNLOADER_23":"刪除Feed(D)",
   "DLG_RSSDOWNLOADER_24":"下載(D)",
   "DLG_RSSDOWNLOADER_25":"在瀏覽器中開啟網址(B)",
   "DLG_RSSDOWNLOADER_26":"新增到最愛(A)",
   "DLG_RSSDOWNLOADER_27":"增加(A)",
   "DLG_RSSDOWNLOADER_28":"刪除(D)",
   "DLG_RSSDOWNLOADER_29":"全部",
   "DLG_RSSDOWNLOADER_30":"(全部)",
   "DLG_RSSDOWNLOADER_31":"(永遠配對)||(只配對一次)||十二小時||一天||兩天||三天||四天||一星期||兩星期||三星期||一個月||",
   "DLG_RSSDOWNLOADER_32":"增加RSS Feed",
   "DLG_RSSDOWNLOADER_33":"編輯RSS Feed",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"您確定要刪除RSS Feed \"%s\" 嗎?",
   "FEED_COL_FULLNAME":"全名",
   "FEED_COL_NAME":"名稱",
   "FEED_COL_EPISODE":"劇集",
   "FEED_COL_FORMAT":"格式",
   "FEED_COL_CODEC":"編解碼器",
   "FEED_COL_DATE":"日期",
   "FEED_COL_FEED":"Feed",
   "FEED_COL_URL":"原始網址",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"連接埠",
   "PRS_COL_CLIENT":"客戶端",
   "PRS_COL_FLAGS":"標記",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"關聯",
   "PRS_COL_DOWNSPEED":"下載速度",
   "PRS_COL_UPSPEED":"上傳速度",
   "PRS_COL_REQS":"請求",
   "PRS_COL_WAITED":"等候",
   "PRS_COL_UPLOADED":"已上傳",
   "PRS_COL_DOWNLOADED":"已下載",
   "PRS_COL_HASHERR":"特徵碼錯誤",
   "PRS_COL_PEERDL":"使用者速度",
   "PRS_COL_MAXUP":"最大上傳",
   "PRS_COL_MAXDOWN":"最大下載",
   "PRS_COL_QUEUED":"隊列",
   "PRS_COL_INACTIVE":"不活躍",
   "FI_COL_DONE":"已完成",
   "FI_COL_FIRSTPC":"第一分塊",
   "FI_COL_NAME":"名稱",
   "FI_COL_NUMPCS":"總分塊數#",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"優先順序",
   "FI_COL_SIZE":"大小",
   "FI_PRI0":"忽略",
   "FI_PRI1":"低",
   "FI_PRI2":"標準",
   "FI_PRI3":"高",
   "GN_TP_01":"已經下載:",
   "GN_TP_02":"已經上傳:",
   "GN_TP_03":"種子數量:",
   "GN_TP_04":"剩餘時間:",
   "GN_TP_05":"下載速度:",
   "GN_TP_06":"上傳速度:",
   "GN_TP_07":"使用者數量:",
   "GN_TP_08":"分享比率:",
   "GN_TP_09":"儲存位置:",
   "GN_TP_10":"特徵碼:",
   "GN_GENERAL":"一般",
   "GN_TRANSFER":"傳輸",
   "GN_XCONN":"%d/%d 已連接 (整個網絡: %d)",
   "MAIN_TITLEBAR_SPEED":"下載:%s 上傳:%s -%s",
   "MENU_COPY":"複製(C)",
   "MENU_RESET":"重設(R)",
   "MENU_UNLIMITED":"不限",
   "MP_RESOLVE_IPS":"解析IP(R)",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"不要下載(D)",
   "MF_HIGH":"高優先順序(H)",
   "MF_LOW":"低優先順序(L)",
   "MF_NORMAL":"標準優先順序(N)",
   "ML_COPY_MAGNETURI":"複製Magnet URI(M)",
   "ML_DELETE_DATA":"刪除資料(L)",
   "ML_DELETE_TORRENT":"刪除Torrent檔案(D)",
   "ML_DELETE_DATATORRENT":"刪除Torrent檔案 + 資料(E)",
   "ML_FORCE_RECHECK":"強制重新檢查(H)",
   "ML_FORCE_START":"強制開始(F)",
   "ML_LABEL":"標籤(L)",
   "ML_PAUSE":"暫停(P)",
   "ML_PROPERTIES":"屬性(E)",
   "ML_QUEUEDOWN":"在隊列下移(D)",
   "ML_QUEUEUP":"在隊列上移(U)",
   "ML_REMOVE":"移除(R)",
   "ML_REMOVE_AND":"移除並(N)",
   "ML_START":"開始(S)",
   "ML_STOP":"停止(S)",
   "OV_CAT_ACTIVE":"活躍的",
   "OV_CAT_ALL":"全部",
   "OV_CAT_COMPL":"已完成",
   "OV_CAT_DL":"下載中",
   "OV_CAT_INACTIVE":"不活躍的",
   "OV_CAT_NOLABEL":"沒有標籤",
   "OV_COL_AVAIL":"||可用性||可用性",
   "OV_COL_DATE_ADDED":"增加日期",
   "OV_COL_DATE_COMPLETED":"完成日期",
   "OV_COL_DONE":"%",
   "OV_COL_DOWNLOADED":"已下載",
   "OV_COL_DOWNSPD":"下載速度",
   "OV_COL_ETA":"估計剩時",
   "OV_COL_LABEL":"標籤",
   "OV_COL_NAME":"名稱",
   "OV_COL_ORDER":"#",
   "OV_COL_PEERS":"使用者",
   "OV_COL_REMAINING":"剩餘的",
   "OV_COL_SEEDS":"種子",
   "OV_COL_SEEDS_PEERS":"種子/使用者",
   "OV_COL_SHARED":"分享率",
   "OV_COL_SIZE":"大小",
   "OV_COL_SOURCE_URL":"原始網址",
   "OV_COL_STATUS":"狀態",
   "OV_COL_UPPED":"已上傳",
   "OV_COL_UPSPD":"上傳速度",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"您想要移除%d個已選擇的Torrents及所有相關的資料?",
   "OV_CONFIRM_DELETEDATA_ONE":"您想要移除已選擇的Torrent及所有相關的資料?",
   "OV_CONFIRM_DELETE_MULTIPLE":"您想要移除%d個已選擇的Torrents?",
   "OV_CONFIRM_DELETE_ONE":"您想要移除已選擇的Torrent?",
   "OV_CONFIRM_DELETE_RSSFILTER":"您確定要刪除RSS濾器 \"%s\" 嗎?",
   "OV_FL_CHECKED":"已檢查 %:.1d%",
   "OV_FL_DOWNLOADING":"下載中",
   "OV_FL_ERROR":"錯誤: %s",
   "OV_FL_FINISHED":"已完成",
   "OV_FL_PAUSED":"暫停",
   "OV_FL_QUEUED":"隊列",
   "OV_FL_QUEUED_SEED":"做種隊列",
   "OV_FL_SEEDING":"做種中",
   "OV_FL_STOPPED":"停止",
   "OV_NEWLABEL_CAPTION":"輸入標籤",
   "OV_NEWLABEL_TEXT":"為所選擇的Torrent輸入標籤:",
   "OV_NEW_LABEL":"新標籤...",
   "OV_REMOVE_LABEL":"移除標籤",
   "OV_TABS":"一般||Trackers||使用者||分塊||檔案||速度||紀錄||",
   "OV_TB_ADDTORR":"開啟Torrent檔案",
   "OV_TB_ADDURL":"從網址開啟Torrent檔案",
   "OV_TB_PAUSE":"暫停",
   "OV_TB_PREF":"選項",
   "OV_TB_QUEUEDOWN":"在隊列下移",
   "OV_TB_QUEUEUP":"在隊列上移",
   "OV_TB_REMOVE":"移除",
   "OV_TB_RSSDOWNLDR":"RSS下載器",
   "OV_TB_START":"開始",
   "OV_TB_STOP":"停止",
   "MM_FILE":"檔案(F)",
   "MM_FILE_ADD_TORRENT":"開啟Torrent檔案(A)...",
   "MM_FILE_ADD_URL":"從網址開啟Torrent檔案(U)...",
   "MM_OPTIONS":"選項(O)",
   "MM_OPTIONS_PREFERENCES":"選項(P)",
   "MM_OPTIONS_SHOW_CATEGORY":"顯示種類列表(C)",
   "MM_OPTIONS_SHOW_DETAIL":"顯示詳細資料(D)",
   "MM_OPTIONS_SHOW_STATUS":"顯示狀態欄(S)",
   "MM_OPTIONS_SHOW_TOOLBAR":"顯示工具欄(T)",
   "MM_OPTIONS_TAB_ICONS":"索引標籤上顯示圖案(I)",
   "MM_HELP":"說明(H)",
   "MM_HELP_UT_WEBPAGE":"µTorrent網頁(W)",
   "MM_HELP_UT_FORUMS":"µTorrent論壇(F)",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrents",
   "STM_TORRENTS_PAUSEALL":"暫停所有Torrent(P)",
   "STM_TORRENTS_RESUMEALL":"繼續所有Torrent(R)",
   "SB_DOWNLOAD":"D: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"U: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"進階",
   "ST_CAPT_BANDWIDTH":"流量",
   "ST_CAPT_CONNECTION":"連線",
   "ST_CAPT_DISK_CACHE":"硬碟快取",
   "ST_CAPT_FOLDER":"資料夾",
   "ST_CAPT_GENERAL":"一般",
   "ST_CAPT_SCHEDULER":"排程器",
   "ST_CAPT_QUEUEING":"隊列",
   "ST_CAPT_UI_EXTRAS":"界面其它",
   "ST_CAPT_UI_SETTINGS":"界面設定",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"網頁界面",
   "ST_CAPT_TRANSFER_CAP":"傳輸限制",
   "ST_CAPT_RUN_PROGRAM":"執行程式",
   "ST_CBO_UI_DBLCLK_TOR":"顯示屬性||開始/停止||開啟資料夾||顯示下載資訊列||",
   "ST_CBO_ENCRYPTIONS":"停用||啟用||強制||",
   "ST_CBO_PROXY":"(沒有)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"上傳||下載||上傳 + 下載||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"名稱",
   "ST_COL_VALUE":"值",
   "ST_SCH_DAYCODES":"一||二||三||四||五||六||日||",
   "ST_SCH_DAYNAMES":"星期一||星期二||星期三||星期四||星期五||星期六||星期日||",
   "ST_SCH_LGND_FULL":"全速",
   "ST_SCH_LGND_FULLEX":"全速 - 使用正常的整體流量限制",
   "ST_SCH_LGND_LIMITED":"限速",
   "ST_SCH_LGND_LIMITEDEX":"限速 - 使用排程器所設定的流量限制",
   "ST_SCH_LGND_SEEDING":"只做種",
   "ST_SCH_LGND_SEEDINGEX":"只做種 - 只上傳資料(包括未完成的)",
   "ST_SCH_LGND_OFF":"關閉下載",
   "ST_SCH_LGND_OFFEX":"關閉 - 停止所有非強制的Torrents",
   "ST_SEEDTIMES_HOURS":"<= %d 小時",
   "ST_SEEDTIMES_IGNORE":"(忽略)",
   "ST_SEEDTIMES_MINUTES":"<= %d 分鐘",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dw %dd",
   "TIME_YEARS_WEEKS":"%dy %dw",
   "ML_MORE_ACTIONS":"More Action",
   "Torrents":"Torrent",
   "Feeds":"订阅",
   "App":"程序",
   "country":"国家/地区",
   "ETA":"剩余时间",
   "of":"/",
   "/s":"/s",
   "Paste a torrent or feed URL":"粘贴 Torrent 或订阅 URL",
   "Home":"主页",
   "Logout":"注销",
   "Seeding":"正在做种",
   "All Feeds":"所有订阅",
   "bitrate":"比特率",
   "resolution":"分辨率",
   "length":"长度",
   "streamable":"可点播",
   "type":"类型",
   "remote":"远程",
   "about":"关于",
   "sessions":"会话",
   "share":"共享",
   "Share this torrent":"共享此 Torrent",
   "Share link":"共享链接",
   "add":"添加",
   "logout":"注销",
   "log in":"登录",
   "anywhere access":"随处访问",
   "stay signed in":"保持登录",
   "download":"下载",
   "Your client is currently not available. Verify that it is connected to the internet.":"您的客户端当前无法使用。请确认其已经连接到互联网。",
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":"无法与您的 &micro;Torrent 客户端进行通信。重新建立连接后，此消息会自动消失。",
   "Open file":"打开文件",
   "Download to your computer":"下载到您的计算机",
   "Open with VLC Media Player":"使用 VLC 媒体播放器打开",
   "Actions":"操作",
   "season":"集",
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":null,
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_D_REMOTE_01":"远程控制",
   "DLG_SETTINGS_D_REMOTE_02":"µTorrent 远程控制提供简单和安全的方法用浏览器来访问您的客户端。",
   "DLG_SETTINGS_D_REMOTE_03":"启用下面的连接，选择计算机名和密码并保持该计算机开机。",
   "DLG_SETTINGS_D_REMOTE_04":"进一步了解",
   "DLG_SETTINGS_D_REMOTE_05":"启用µTorrent远程控制",
   "DLG_SETTINGS_D_REMOTE_06":"验证",
   "DLG_SETTINGS_D_REMOTE_07":"電腦名稱:",
   "DLG_SETTINGS_D_REMOTE_08":"密码:",
   "DLG_SETTINGS_D_REMOTE_09":"提交",
   "ST_CAPT_REMOTE":"远程控制"
}