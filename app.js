const DATASETS = {
  "2026-07-31": {
    "key": "2026-07-31",
    "label": "7月31日",
    "sourceFile": "仓库人员工作统计_2026-07-31 00~2026-07-31 23_20260801091007_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-31 00:00 - 2026-07-31 23:00",
    "generatedAt": "2026-08-01 09:10:07",
    "totals": {
      "pickPieces": 13019,
      "pickTimes": 13018,
      "pickSkus": 7378,
      "pickOrders": 10631,
      "seedOrders": 929,
      "seedPieces": 2238,
      "checkTimes": 10988,
      "checkPieces": 12796,
      "weighTimes": 8986,
      "weighPieces": 10397,
      "shipTimes": 11082,
      "shipPieces": 13243,
      "inboundPieces": 6671,
      "purchaseReturnPieces": 119,
      "moveTimes": 1603,
      "movePieces": 3468,
      "returnTimes": 132,
      "returnPieces": 132,
      "shelfPieces": 14732,
      "shelfTimes": 11204,
      "packPieces": 444,
      "qcOrders": 0,
      "qcPieces": 0,
      "unpackParcels": 5518,
      "unpackPieces": 8013,
      "unpackOrders": 7123,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 433191,
      "auditConfirmOrders": 46669,
      "forceAuditOrders": 509,
      "smartAuditOrders": 386013,
      "expressPrints": 11181,
      "barcodePrints": 3,
      "barcodePrintTimes": 2,
      "tagPrints": 994,
      "tagPrintTimes": 156,
      "activeWorkers": 45,
      "totalWorkload": 73968,
      "roles": 12,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13019,
        "secondary": 13018,
        "unit": "件",
        "subUnit": "次",
        "progress": 88,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2238,
        "secondary": 929,
        "unit": "件",
        "subUnit": "单",
        "progress": 15,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 12796,
        "secondary": 10988,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 8986,
        "secondary": 10397,
        "unit": "次",
        "subUnit": "件",
        "progress": 61,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 13243,
        "secondary": 11082,
        "unit": "件",
        "subUnit": "次",
        "progress": 90,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 6671,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 45,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14732,
        "secondary": 11204,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8013,
        "secondary": 5518,
        "unit": "件",
        "subUnit": "包",
        "progress": 54,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12178,
        "secondary": 11181,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 83,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 13,
        "workload": 28648,
        "pickPieces": 2838,
        "shipPieces": 12581,
        "checkPieces": 12494,
        "unpackPieces": 0,
        "shelfPieces": 23
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 17026,
        "pickPieces": 1,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 13919
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 7066,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 5626,
        "pickPieces": 4943,
        "shipPieces": 177,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5612,
        "pickPieces": 1587,
        "shipPieces": 57,
        "checkPieces": 0,
        "unpackPieces": 3864,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3242,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3242,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2916,
        "pickPieces": 1459,
        "shipPieces": 9,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 783
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2653,
        "pickPieces": 2111,
        "shipPieces": 115,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1051,
        "pickPieces": 0,
        "shipPieces": 302,
        "checkPieces": 302,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 106,
        "pickPieces": 80,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 22,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 7066,
        "actions": 10,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 6647,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 21
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4620,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2310,
        "shipPieces": 2310,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2252
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4614,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2307,
        "shipPieces": 2307,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2144
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3636,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2736,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3392,
        "actions": 13,
        "pickPieces": 30,
        "pickOrders": 15,
        "pickTimes": 30,
        "seedPieces": 30,
        "checkPieces": 1666,
        "shipPieces": 1666,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1336
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3248,
        "actions": 11,
        "pickPieces": 41,
        "pickOrders": 14,
        "pickTimes": 41,
        "seedPieces": 41,
        "checkPieces": 1583,
        "shipPieces": 1583,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1394
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3160,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2194,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3035,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2750,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2943,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2163,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2878,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1439,
        "shipPieces": 1439,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1270
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2839,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2697,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2818,
        "actions": 13,
        "pickPieces": 32,
        "pickOrders": 15,
        "pickTimes": 32,
        "seedPieces": 32,
        "checkPieces": 1377,
        "shipPieces": 1377,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1066
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2134,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1067,
        "shipPieces": 1067,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 938
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1924,
        "actions": 12,
        "pickPieces": 1768,
        "pickOrders": 1566,
        "pickTimes": 1768,
        "seedPieces": 118,
        "checkPieces": 0,
        "shipPieces": 29,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1855,
        "actions": 10,
        "pickPieces": 1591,
        "pickOrders": 1367,
        "pickTimes": 1591,
        "seedPieces": 182,
        "checkPieces": 0,
        "shipPieces": 80,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1847,
        "actions": 10,
        "pickPieces": 1584,
        "pickOrders": 1366,
        "pickTimes": 1584,
        "seedPieces": 188,
        "checkPieces": 0,
        "shipPieces": 68,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1761,
        "actions": 12,
        "pickPieces": 1339,
        "pickOrders": 983,
        "pickTimes": 1339,
        "seedPieces": 344,
        "checkPieces": 0,
        "shipPieces": 75,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1748,
        "actions": 10,
        "pickPieces": 1587,
        "pickOrders": 1420,
        "pickTimes": 1587,
        "seedPieces": 103,
        "checkPieces": 0,
        "shipPieces": 57,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1641,
        "actions": 12,
        "pickPieces": 1404,
        "pickOrders": 1122,
        "pickTimes": 1404,
        "seedPieces": 85,
        "checkPieces": 0,
        "shipPieces": 61,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1628,
        "actions": 13,
        "pickPieces": 76,
        "pickOrders": 31,
        "pickTimes": 76,
        "seedPieces": 63,
        "checkPieces": 744,
        "shipPieces": 744,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 475
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1130,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1130,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1106,
        "actions": 10,
        "pickPieces": 394,
        "pickOrders": 241,
        "pickTimes": 393,
        "seedPieces": 196,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 515,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1051,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 302,
        "shipPieces": 302,
        "inboundPieces": 2,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 254
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1013,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1013,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 950,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 950,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 910,
        "actions": 12,
        "pickPieces": 419,
        "pickOrders": 249,
        "pickTimes": 419,
        "seedPieces": 202,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 268,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 900,
        "actions": 8,
        "pickPieces": 646,
        "pickOrders": 486,
        "pickTimes": 646,
        "seedPieces": 253,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 899,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 899,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 892,
        "actions": 10,
        "pickPieces": 772,
        "pickOrders": 685,
        "pickTimes": 772,
        "seedPieces": 62,
        "checkPieces": 0,
        "shipPieces": 40,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 854,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 854,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 850,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 850,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 844,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 831,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 840,
        "actions": 8,
        "pickPieces": 716,
        "pickOrders": 586,
        "pickTimes": 716,
        "seedPieces": 123,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 764,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 764,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 602,
        "actions": 10,
        "pickPieces": 432,
        "pickOrders": 311,
        "pickTimes": 432,
        "seedPieces": 143,
        "checkPieces": 0,
        "shipPieces": 25,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 540,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 533,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 525,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 525,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 155,
        "actions": 18,
        "pickPieces": 107,
        "pickOrders": 101,
        "pickTimes": 107,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 16,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 121,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 121,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 106,
        "actions": 16,
        "pickPieces": 80,
        "pickOrders": 72,
        "pickTimes": 80,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 78,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 73,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 21,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 21,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 14,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 8,
        "pickPieces": 1,
        "pickOrders": 1,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 1,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 13,243 件，与拣货 13,019 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,013 件，包裹 5,518 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 7,066 件/次，覆盖 10 类动作。"
      },
      {
        "level": "info",
        "title": "邹丽玉 产出领先",
        "desc": "发货，累计 4,620 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,614 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-30": {
    "key": "2026-07-30",
    "label": "7月30日",
    "sourceFile": "仓库人员工作统计_2026-07-30 00~2026-07-30 23_20260731091044_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-30 00:00 - 2026-07-30 23:00",
    "generatedAt": "2026-07-31 09:10:44",
    "totals": {
      "pickPieces": 15235,
      "pickTimes": 15216,
      "pickSkus": 7902,
      "pickOrders": 10857,
      "seedOrders": 1095,
      "seedPieces": 2567,
      "checkTimes": 11246,
      "checkPieces": 13410,
      "weighTimes": 10207,
      "weighPieces": 11996,
      "shipTimes": 11341,
      "shipPieces": 13805,
      "inboundPieces": 5498,
      "purchaseReturnPieces": 148,
      "moveTimes": 1189,
      "movePieces": 3088,
      "returnTimes": 75,
      "returnPieces": 75,
      "shelfPieces": 13295,
      "shelfTimes": 10365,
      "packPieces": 389,
      "qcOrders": 30,
      "qcPieces": 80,
      "unpackParcels": 5356,
      "unpackPieces": 7884,
      "unpackOrders": 7018,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 282356,
      "auditConfirmOrders": 35270,
      "forceAuditOrders": 578,
      "smartAuditOrders": 246508,
      "expressPrints": 11377,
      "barcodePrints": 400,
      "barcodePrintTimes": 2,
      "tagPrints": 870,
      "tagPrintTimes": 85,
      "activeWorkers": 54,
      "totalWorkload": 75474,
      "roles": 19,
      "warehouses": 2
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 15235,
        "secondary": 15216,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2567,
        "secondary": 1095,
        "unit": "件",
        "subUnit": "单",
        "progress": 17,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 13410,
        "secondary": 11246,
        "unit": "件",
        "subUnit": "次",
        "progress": 88,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 10207,
        "secondary": 11996,
        "unit": "次",
        "subUnit": "件",
        "progress": 67,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 13805,
        "secondary": 11341,
        "unit": "件",
        "subUnit": "次",
        "progress": 91,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5498,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 36,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13295,
        "secondary": 10365,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7884,
        "secondary": 5356,
        "unit": "件",
        "subUnit": "包",
        "progress": 52,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12647,
        "secondary": 11377,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 83,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 32295,
        "pickPieces": 5061,
        "shipPieces": 13020,
        "checkPieces": 12902,
        "unpackPieces": 0,
        "shelfPieces": 12
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 14228,
        "pickPieces": 6,
        "shipPieces": 174,
        "checkPieces": 171,
        "unpackPieces": 0,
        "shelfPieces": 11336
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 6069,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 619
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5416,
        "pickPieces": 1505,
        "shipPieces": 86,
        "checkPieces": 0,
        "unpackPieces": 3723,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 4232,
        "pickPieces": 2480,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1129
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 4158,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 4158,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 2,
        "workload": 3780,
        "pickPieces": 3274,
        "shipPieces": 102,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3521,
        "pickPieces": 2801,
        "shipPieces": 83,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1206,
        "pickPieces": 3,
        "shipPieces": 337,
        "checkPieces": 337,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 132,
        "pickPieces": 105,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 7
      },
      {
        "role": "品控",
        "workers": 1,
        "workload": 96,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 93,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 87
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 93,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 56
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 80,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 45,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 43
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 27,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "主账号",
        "workers": 1,
        "workload": 3,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "陈陈项目",
        "workers": 1,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 6069,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5233,
        "shelfPieces": 619,
        "unpackPieces": 0,
        "expressPrints": 22
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5645,
        "actions": 13,
        "pickPieces": 211,
        "pickOrders": 141,
        "pickTimes": 211,
        "seedPieces": 110,
        "checkPieces": 2662,
        "shipPieces": 2662,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2301
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5300,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2650,
        "shipPieces": 2650,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2314
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3891,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2648,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3560,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1780,
        "shipPieces": 1780,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1404
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3070,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1535,
        "shipPieces": 1535,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1157
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2606,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1303,
        "shipPieces": 1303,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1134
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2582,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1291,
        "shipPieces": 1291,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1223
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2287,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2283,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2122,
        "actions": 14,
        "pickPieces": 243,
        "pickOrders": 103,
        "pickTimes": 243,
        "seedPieces": 203,
        "checkPieces": 838,
        "shipPieces": 838,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 712
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2080,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1596,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2030,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1288,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1964,
        "actions": 8,
        "pickPieces": 1693,
        "pickOrders": 1470,
        "pickTimes": 1693,
        "seedPieces": 225,
        "checkPieces": 0,
        "shipPieces": 46,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1954,
        "actions": 10,
        "pickPieces": 1407,
        "pickOrders": 1050,
        "pickTimes": 1403,
        "seedPieces": 503,
        "checkPieces": 0,
        "shipPieces": 43,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1816,
        "actions": 14,
        "pickPieces": 1581,
        "pickOrders": 1416,
        "pickTimes": 1581,
        "seedPieces": 106,
        "checkPieces": 0,
        "shipPieces": 56,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1745,
        "actions": 10,
        "pickPieces": 1572,
        "pickOrders": 1431,
        "pickTimes": 1560,
        "seedPieces": 113,
        "checkPieces": 0,
        "shipPieces": 56,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1693,
        "actions": 8,
        "pickPieces": 1505,
        "pickOrders": 1250,
        "pickTimes": 1505,
        "seedPieces": 102,
        "checkPieces": 0,
        "shipPieces": 86,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1653,
        "actions": 8,
        "pickPieces": 1321,
        "pickOrders": 1064,
        "pickTimes": 1321,
        "seedPieces": 296,
        "checkPieces": 0,
        "shipPieces": 36,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1619,
        "actions": 10,
        "pickPieces": 1055,
        "pickOrders": 159,
        "pickTimes": 1055,
        "seedPieces": 79,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 483,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1590,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 795,
        "shipPieces": 795,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 695
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1567,
        "actions": 10,
        "pickPieces": 1394,
        "pickOrders": 1237,
        "pickTimes": 1394,
        "seedPieces": 132,
        "checkPieces": 0,
        "shipPieces": 40,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1323,
        "actions": 10,
        "pickPieces": 607,
        "pickOrders": 126,
        "pickTimes": 607,
        "seedPieces": 74,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 257,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1290,
        "actions": 8,
        "pickPieces": 818,
        "pickOrders": 88,
        "pickTimes": 818,
        "seedPieces": 83,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 389,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1265,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1217,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1251,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1249,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1206,
        "actions": 18,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 337,
        "shipPieces": 337,
        "inboundPieces": 105,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 287
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1154,
        "actions": 8,
        "pickPieces": 878,
        "pickOrders": 649,
        "pickTimes": 875,
        "seedPieces": 258,
        "checkPieces": 0,
        "shipPieces": 18,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1004,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 997,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 971,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 971,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 952,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 952,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 923,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 923,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 883,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 883,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 844,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 844,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 837,
        "actions": 10,
        "pickPieces": 577,
        "pickOrders": 345,
        "pickTimes": 577,
        "seedPieces": 254,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 837,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 837,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 784,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 784,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 590,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 590,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 583,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 583,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 514,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 514,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 361,
        "actions": 13,
        "pickPieces": 6,
        "pickOrders": 5,
        "pickTimes": 6,
        "seedPieces": 0,
        "checkPieces": 171,
        "shipPieces": 174,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 37
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 198,
        "actions": 12,
        "pickPieces": 164,
        "pickOrders": 131,
        "pickTimes": 164,
        "seedPieces": 29,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 139,
        "actions": 18,
        "pickPieces": 95,
        "pickOrders": 89,
        "pickTimes": 95,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "张拼",
        "role": "品控",
        "warehouse": "临平仓",
        "workload": 96,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 96,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 94,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 47,
        "shipPieces": 47,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 47
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 93,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 87,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 90,
        "actions": 16,
        "pickPieces": 68,
        "pickOrders": 67,
        "pickTimes": 68,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 83,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 27,
        "shelfPieces": 56,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 59,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 58,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 45,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 43,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 42,
        "actions": 12,
        "pickPieces": 37,
        "pickOrders": 36,
        "pickTimes": 37,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 27,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 27,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 10,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "马晓芳",
        "role": "主账号",
        "warehouse": "",
        "workload": 3,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 3,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "客户服务麦敏敏",
        "role": "陈陈项目",
        "warehouse": "样衣仓",
        "workload": 0,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 23
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 13,805 件，与拣货 15,235 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,884 件，包裹 5,356 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 6,069 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "庞海春 产出领先",
        "desc": "发货，累计 5,645 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "魏子晴 产出领先",
        "desc": "发货，累计 5,300 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-29": {
    "key": "2026-07-29",
    "label": "7月29日",
    "sourceFile": "仓库人员工作统计_2026-07-29 00~2026-07-29 23_20260730045415_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-29 00:00 - 2026-07-29 23:00",
    "generatedAt": "2026-07-30 04:54:15",
    "totals": {
      "pickPieces": 14435,
      "pickTimes": 14351,
      "pickSkus": 8239,
      "pickOrders": 0,
      "seedOrders": 1080,
      "seedPieces": 2815,
      "checkTimes": 11237,
      "checkPieces": 11378,
      "weighTimes": 10804,
      "weighPieces": 10804,
      "shipTimes": 11334,
      "shipPieces": 11334,
      "inboundPieces": 6144,
      "purchaseReturnPieces": 128,
      "moveTimes": 5666,
      "movePieces": 8997,
      "returnTimes": 92,
      "returnPieces": 92,
      "shelfPieces": 13553,
      "shelfTimes": 10097,
      "packPieces": 547,
      "qcOrders": 13,
      "qcPieces": 82,
      "unpackParcels": 5295,
      "unpackPieces": 7486,
      "unpackOrders": 7027,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 183615,
      "auditConfirmOrders": 24589,
      "forceAuditOrders": 601,
      "smartAuditOrders": 158425,
      "expressPrints": 11356,
      "barcodePrints": 12,
      "barcodePrintTimes": 7,
      "tagPrints": 1434,
      "tagPrintTimes": 170,
      "activeWorkers": 53,
      "totalWorkload": 75863,
      "roles": 17,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 14435,
        "secondary": 14351,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2815,
        "secondary": 1080,
        "unit": "件",
        "subUnit": "单",
        "progress": 20,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 11378,
        "secondary": 11237,
        "unit": "件",
        "subUnit": "次",
        "progress": 79,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 10804,
        "secondary": 10804,
        "unit": "次",
        "subUnit": "件",
        "progress": 75,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 11334,
        "secondary": 11334,
        "unit": "件",
        "subUnit": "次",
        "progress": 79,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 6144,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 43,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13553,
        "secondary": 10097,
        "unit": "件",
        "subUnit": "次",
        "progress": 94,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7486,
        "secondary": 5295,
        "unit": "件",
        "subUnit": "包",
        "progress": 52,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12802,
        "secondary": 11356,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 89,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 16,
        "workload": 30933,
        "pickPieces": 4482,
        "shipPieces": 10995,
        "checkPieces": 11107,
        "unpackPieces": 0,
        "shelfPieces": 13
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 13262,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 12155
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 6829,
        "pickPieces": 5684,
        "shipPieces": 18,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 10
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5976,
        "pickPieces": 0,
        "shipPieces": 17,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 5961,
        "pickPieces": 951,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 521
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5242,
        "pickPieces": 1650,
        "shipPieces": 7,
        "checkPieces": 0,
        "unpackPieces": 3355,
        "shelfPieces": 1
      },
      {
        "role": "售后拆包",
        "workers": 3,
        "workload": 3001,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3001,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1868,
        "pickPieces": 1559,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1225,
        "pickPieces": 0,
        "shipPieces": 272,
        "checkPieces": 271,
        "unpackPieces": 0,
        "shelfPieces": 118
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 842,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 724
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 400,
        "pickPieces": 0,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 135,
        "pickPieces": 109,
        "shipPieces": 14,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 7
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 90,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 82,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 13,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "主账号",
        "workers": 1,
        "workload": 2,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 2,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5976,
        "actions": 11,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 17,
        "inboundPieces": 5830,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 21
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4729,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2365,
        "shipPieces": 2364,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2364
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4698,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2352,
        "shipPieces": 2346,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2392
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3568,
        "actions": 9,
        "pickPieces": 280,
        "pickOrders": 0,
        "pickTimes": 280,
        "seedPieces": 56,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 3244,
        "actions": 9,
        "pickPieces": 468,
        "pickOrders": 0,
        "pickTimes": 468,
        "seedPieces": 68,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 366,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3189,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2816,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 2717,
        "actions": 9,
        "pickPieces": 483,
        "pickOrders": 0,
        "pickTimes": 483,
        "seedPieces": 145,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 155,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2559,
        "actions": 11,
        "pickPieces": 2083,
        "pickOrders": 0,
        "pickTimes": 2055,
        "seedPieces": 381,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2462,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1248,
        "shipPieces": 1214,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1214
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2428,
        "actions": 12,
        "pickPieces": 47,
        "pickOrders": 0,
        "pickTimes": 43,
        "seedPieces": 40,
        "checkPieces": 1178,
        "shipPieces": 1163,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1167
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2374,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2326,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2225,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2220,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2143,
        "actions": 11,
        "pickPieces": 1922,
        "pickOrders": 0,
        "pickTimes": 1921,
        "seedPieces": 208,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2135,
        "actions": 8,
        "pickPieces": 39,
        "pickOrders": 0,
        "pickTimes": 39,
        "seedPieces": 0,
        "checkPieces": 1049,
        "shipPieces": 1047,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1051
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2127,
        "actions": 9,
        "pickPieces": 1679,
        "pickOrders": 0,
        "pickTimes": 1672,
        "seedPieces": 433,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 9,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2043,
        "actions": 7,
        "pickPieces": 1712,
        "pickOrders": 0,
        "pickTimes": 1691,
        "seedPieces": 325,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1975,
        "actions": 10,
        "pickPieces": 172,
        "pickOrders": 0,
        "pickTimes": 172,
        "seedPieces": 150,
        "checkPieces": 856,
        "shipPieces": 797,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 798
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1949,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1668,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1885,
        "actions": 9,
        "pickPieces": 1650,
        "pickOrders": 0,
        "pickTimes": 1650,
        "seedPieces": 227,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1868,
        "actions": 11,
        "pickPieces": 1559,
        "pickOrders": 0,
        "pickTimes": 1559,
        "seedPieces": 299,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1785,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1470,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1754,
        "actions": 10,
        "pickPieces": 31,
        "pickOrders": 0,
        "pickTimes": 31,
        "seedPieces": 0,
        "checkPieces": 866,
        "shipPieces": 856,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 859
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1580,
        "actions": 11,
        "pickPieces": 1308,
        "pickOrders": 0,
        "pickTimes": 1287,
        "seedPieces": 263,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1313,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 656,
        "shipPieces": 657,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 662
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1225,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 271,
        "shipPieces": 272,
        "inboundPieces": 14,
        "shelfPieces": 118,
        "unpackPieces": 0,
        "expressPrints": 273
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1150,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1150,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1027,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1022,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1003,
        "actions": 7,
        "pickPieces": 782,
        "pickOrders": 0,
        "pickTimes": 782,
        "seedPieces": 220,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 986,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 986,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 972,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 493,
        "shipPieces": 479,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 479
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 923,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 923,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 865,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 865,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 850,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 850,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 842,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 724,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 711,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 711,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 656,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 625,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 511,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 511,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 397,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 197,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 362,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 360,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 244,
        "actions": 17,
        "pickPieces": 100,
        "pickOrders": 0,
        "pickTimes": 98,
        "seedPieces": 0,
        "checkPieces": 44,
        "shipPieces": 55,
        "inboundPieces": 0,
        "shelfPieces": 8,
        "unpackPieces": 0,
        "expressPrints": 55
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 98,
        "actions": 13,
        "pickPieces": 79,
        "pickOrders": 0,
        "pickTimes": 79,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 82,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 74,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 74,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 57,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 8,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 37,
        "actions": 10,
        "pickPieces": 30,
        "pickOrders": 0,
        "pickTimes": 30,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 9,
        "pickPieces": 11,
        "pickOrders": 0,
        "pickTimes": 11,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 16,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 13,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "马晓芳",
        "role": "主账号",
        "warehouse": "",
        "workload": 2,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 1,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 1,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 11,334 件，拣货 14,435 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,486 件，包裹 5,295 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,976 件/次，覆盖 11 类动作。"
      },
      {
        "level": "info",
        "title": "魏子晴 产出领先",
        "desc": "发货，累计 4,729 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,698 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-28": {
    "key": "2026-07-28",
    "label": "7月28日",
    "sourceFile": "仓库人员工作统计_2026-07-28 00~2026-07-28 23_20260728230357_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-28 00:00 - 2026-07-28 23:00",
    "generatedAt": "2026-07-28 23:03:57",
    "totals": {
      "pickPieces": 14709,
      "pickTimes": 14645,
      "pickSkus": 8664,
      "pickOrders": 0,
      "seedOrders": 1138,
      "seedPieces": 2786,
      "checkTimes": 12517,
      "checkPieces": 12666,
      "weighTimes": 11382,
      "weighPieces": 11382,
      "shipTimes": 12624,
      "shipPieces": 12624,
      "inboundPieces": 5748,
      "purchaseReturnPieces": 597,
      "moveTimes": 2096,
      "movePieces": 3886,
      "returnTimes": 141,
      "returnPieces": 141,
      "shelfPieces": 11720,
      "shelfTimes": 8919,
      "packPieces": 509,
      "qcOrders": 0,
      "qcPieces": 0,
      "unpackParcels": 5192,
      "unpackPieces": 7810,
      "unpackOrders": 7001,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 257389,
      "auditConfirmOrders": 37906,
      "forceAuditOrders": 1622,
      "smartAuditOrders": 217861,
      "expressPrints": 12690,
      "barcodePrints": 7,
      "barcodePrintTimes": 5,
      "tagPrints": 2183,
      "tagPrintTimes": 173,
      "activeWorkers": 55,
      "totalWorkload": 71875,
      "roles": 17,
      "warehouses": 2
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 14709,
        "secondary": 14645,
        "unit": "件",
        "subUnit": "次",
        "progress": 99,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2786,
        "secondary": 1138,
        "unit": "件",
        "subUnit": "单",
        "progress": 19,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 12666,
        "secondary": 12517,
        "unit": "件",
        "subUnit": "次",
        "progress": 85,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11382,
        "secondary": 11382,
        "unit": "次",
        "subUnit": "件",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 12624,
        "secondary": 12624,
        "unit": "件",
        "subUnit": "次",
        "progress": 85,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5748,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 39,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 11720,
        "secondary": 8919,
        "unit": "件",
        "subUnit": "次",
        "progress": 79,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7810,
        "secondary": 5192,
        "unit": "件",
        "subUnit": "包",
        "progress": 52,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 14880,
        "secondary": 12690,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 30786,
        "pickPieces": 4673,
        "shipPieces": 12123,
        "checkPieces": 12248,
        "unpackPieces": 0,
        "shelfPieces": 15
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 14579,
        "pickPieces": 15,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11479
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 6212,
        "pickPieces": 0,
        "shipPieces": 14,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 5414,
        "pickPieces": 4800,
        "shipPieces": 14,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5079,
        "pickPieces": 1824,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 2852,
        "shelfPieces": 2
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3633,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3633,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2595,
        "pickPieces": 1815,
        "shipPieces": 4,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1679,
        "pickPieces": 1476,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1372,
        "pickPieces": 0,
        "shipPieces": 421,
        "checkPieces": 418,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 168,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 165
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 128,
        "pickPieces": 106,
        "shipPieces": 7,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 92,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 38
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 57,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 43,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 26,
        "pickPieces": 0,
        "shipPieces": 26,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "设计助理",
        "workers": 1,
        "workload": 8,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "主账号",
        "workers": 1,
        "workload": 4,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 4,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 6212,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 14,
        "inboundPieces": 5600,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 14
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5539,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2770,
        "shipPieces": 2769,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2868
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4677,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2398,
        "shipPieces": 2279,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2281
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4319,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2159,
        "shipPieces": 2160,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2161
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4000,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2000,
        "shipPieces": 2000,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2002
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3432,
        "actions": 12,
        "pickPieces": 96,
        "pickOrders": 0,
        "pickTimes": 81,
        "seedPieces": 36,
        "checkPieces": 1652,
        "shipPieces": 1648,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1650
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3390,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 1,
        "shelfPieces": 2255,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2983,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2074,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2363,
        "actions": 11,
        "pickPieces": 2043,
        "pickOrders": 0,
        "pickTimes": 2043,
        "seedPieces": 304,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2353,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2351,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2225,
        "actions": 9,
        "pickPieces": 1824,
        "pickOrders": 0,
        "pickTimes": 1824,
        "seedPieces": 277,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2023,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1709,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2021,
        "actions": 11,
        "pickPieces": 1854,
        "pickOrders": 0,
        "pickTimes": 1854,
        "seedPieces": 161,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1936,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 977,
        "shipPieces": 959,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 964
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1934,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1404,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1679,
        "actions": 11,
        "pickPieces": 1476,
        "pickOrders": 0,
        "pickTimes": 1476,
        "seedPieces": 190,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1519,
        "actions": 7,
        "pickPieces": 1103,
        "pickOrders": 0,
        "pickTimes": 1102,
        "seedPieces": 411,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1473,
        "actions": 11,
        "pickPieces": 1255,
        "pickOrders": 0,
        "pickTimes": 1246,
        "seedPieces": 203,
        "checkPieces": 1,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1372,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 418,
        "shipPieces": 421,
        "inboundPieces": 17,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 425
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1340,
        "actions": 9,
        "pickPieces": 997,
        "pickOrders": 0,
        "pickTimes": 997,
        "seedPieces": 336,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1069,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1069,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1030,
        "actions": 7,
        "pickPieces": 903,
        "pickOrders": 0,
        "pickTimes": 865,
        "seedPieces": 124,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1030,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1030,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1025,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1025,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1022,
        "actions": 9,
        "pickPieces": 761,
        "pickOrders": 0,
        "pickTimes": 761,
        "seedPieces": 257,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 982,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 982,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 956,
        "actions": 7,
        "pickPieces": 417,
        "pickOrders": 0,
        "pickTimes": 417,
        "seedPieces": 107,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 906,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 906,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 899,
        "actions": 11,
        "pickPieces": 638,
        "pickOrders": 0,
        "pickTimes": 638,
        "seedPieces": 61,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 826,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 826,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 816,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 815,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 814,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 809,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 734,
        "actions": 14,
        "pickPieces": 211,
        "pickOrders": 0,
        "pickTimes": 211,
        "seedPieces": 48,
        "checkPieces": 237,
        "shipPieces": 237,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 238
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 674,
        "actions": 7,
        "pickPieces": 416,
        "pickOrders": 0,
        "pickTimes": 416,
        "seedPieces": 158,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 596,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 596,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 372,
        "actions": 10,
        "pickPieces": 245,
        "pickOrders": 0,
        "pickTimes": 245,
        "seedPieces": 18,
        "checkPieces": 54,
        "shipPieces": 55,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 54
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 344,
        "actions": 13,
        "pickPieces": 242,
        "pickOrders": 0,
        "pickTimes": 242,
        "seedPieces": 95,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 245,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 62,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 165,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 165,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 133,
        "actions": 15,
        "pickPieces": 107,
        "pickOrders": 0,
        "pickTimes": 107,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 92,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 22,
        "shelfPieces": 38,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 76,
        "actions": 13,
        "pickPieces": 64,
        "pickOrders": 0,
        "pickTimes": 64,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 57,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 57,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 52,
        "actions": 10,
        "pickPieces": 42,
        "pickOrders": 0,
        "pickTimes": 41,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 51,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 51,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 25,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 25,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 21,
        "actions": 9,
        "pickPieces": 15,
        "pickOrders": 0,
        "pickTimes": 15,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 19,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 19,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 19
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 18,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 18,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 12,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "顾喜乐",
        "role": "设计助理",
        "warehouse": "周淼",
        "workload": 8,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 8,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "马晓芳",
        "role": "主账号",
        "warehouse": "",
        "workload": 4,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 4,
        "expressPrints": 0
      },
      {
        "name": "张鹏鑫",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 12,624 件，与拣货 14,709 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,810 件，包裹 5,192 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 6,212 件/次，覆盖 9 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 5,539 件/次，覆盖 8 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 4,677 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-27": {
    "key": "2026-07-27",
    "label": "7月27日",
    "sourceFile": "仓库人员工作统计_2026-07-27 00~2026-07-27 23_20260728090409_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-27 00:00 - 2026-07-27 23:00",
    "generatedAt": "2026-07-28 09:04:09",
    "totals": {
      "pickPieces": 13641,
      "pickTimes": 13611,
      "pickSkus": 8408,
      "pickOrders": 11223,
      "seedOrders": 967,
      "seedPieces": 2323,
      "checkTimes": 12324,
      "checkPieces": 14068,
      "weighTimes": 11601,
      "weighPieces": 13192,
      "shipTimes": 12420,
      "shipPieces": 14490,
      "inboundPieces": 4769,
      "purchaseReturnPieces": 346,
      "moveTimes": 5003,
      "movePieces": 6505,
      "returnTimes": 251,
      "returnPieces": 251,
      "shelfPieces": 12149,
      "shelfTimes": 9840,
      "packPieces": 434,
      "qcOrders": 9,
      "qcPieces": 82,
      "unpackParcels": 5140,
      "unpackPieces": 7704,
      "unpackOrders": 6782,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 199131,
      "auditConfirmOrders": 10121,
      "forceAuditOrders": 7296,
      "smartAuditOrders": 181714,
      "expressPrints": 12417,
      "barcodePrints": 24,
      "barcodePrintTimes": 19,
      "tagPrints": 1259,
      "tagPrintTimes": 174,
      "activeWorkers": 51,
      "totalWorkload": 75843,
      "roles": 17,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13641,
        "secondary": 13611,
        "unit": "件",
        "subUnit": "次",
        "progress": 94,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2323,
        "secondary": 967,
        "unit": "件",
        "subUnit": "单",
        "progress": 16,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 14068,
        "secondary": 12324,
        "unit": "件",
        "subUnit": "次",
        "progress": 97,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11601,
        "secondary": 13192,
        "unit": "次",
        "subUnit": "件",
        "progress": 80,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 14490,
        "secondary": 12420,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4769,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 33,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 12149,
        "secondary": 9840,
        "unit": "件",
        "subUnit": "次",
        "progress": 84,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7704,
        "secondary": 5140,
        "unit": "件",
        "subUnit": "包",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 13700,
        "secondary": 12417,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 95,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 32711,
        "pickPieces": 3124,
        "shipPieces": 13772,
        "checkPieces": 13650,
        "unpackPieces": 0,
        "shelfPieces": 20
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 15204,
        "pickPieces": 0,
        "shipPieces": 50,
        "checkPieces": 50,
        "unpackPieces": 0,
        "shelfPieces": 11859
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 8991,
        "pickPieces": 7410,
        "shipPieces": 198,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5175,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 49
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 4036,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3894,
        "shelfPieces": 0
      },
      {
        "role": "拆包",
        "workers": 4,
        "workload": 2887,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2887,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2879,
        "pickPieces": 2344,
        "shipPieces": 102,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 1994,
        "pickPieces": 673,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1205,
        "pickPieces": 0,
        "shipPieces": 368,
        "checkPieces": 368,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 356,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 158
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 171,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 50
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 99,
        "pickPieces": 90,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 82,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 33,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 16,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "主账号",
        "workers": 1,
        "workload": 4,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 4,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5175,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 4670,
        "shelfPieces": 49,
        "unpackPieces": 0,
        "expressPrints": 20
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4764,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2382,
        "shipPieces": 2382,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2033
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4606,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2303,
        "shipPieces": 2303,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1896
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4022,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2011,
        "shipPieces": 2011,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1884
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3520,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1760,
        "shipPieces": 1760,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1607
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 3238,
        "actions": 10,
        "pickPieces": 2979,
        "pickOrders": 2635,
        "pickTimes": 2961,
        "seedPieces": 208,
        "checkPieces": 0,
        "shipPieces": 49,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2950,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2900,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2840,
        "actions": 11,
        "pickPieces": 92,
        "pickOrders": 66,
        "pickTimes": 92,
        "seedPieces": 0,
        "checkPieces": 1374,
        "shipPieces": 1374,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1285
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2789,
        "actions": 11,
        "pickPieces": 99,
        "pickOrders": 94,
        "pickTimes": 99,
        "seedPieces": 0,
        "checkPieces": 1343,
        "shipPieces": 1347,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1182
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2786,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1429,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2766,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1383,
        "shipPieces": 1383,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1198
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2440,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1725,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2381,
        "actions": 12,
        "pickPieces": 1824,
        "pickOrders": 1430,
        "pickTimes": 1815,
        "seedPieces": 422,
        "checkPieces": 0,
        "shipPieces": 83,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2332,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2032,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2188,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1094,
        "shipPieces": 1094,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 903
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2150,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1687,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2129,
        "actions": 12,
        "pickPieces": 1774,
        "pickOrders": 1535,
        "pickTimes": 1774,
        "seedPieces": 267,
        "checkPieces": 0,
        "shipPieces": 31,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2046,
        "actions": 8,
        "pickPieces": 1625,
        "pickOrders": 1298,
        "pickTimes": 1625,
        "seedPieces": 338,
        "checkPieces": 0,
        "shipPieces": 83,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1650,
        "actions": 14,
        "pickPieces": 1386,
        "pickOrders": 1235,
        "pickTimes": 1386,
        "seedPieces": 141,
        "checkPieces": 0,
        "shipPieces": 33,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1546,
        "actions": 8,
        "pickPieces": 254,
        "pickOrders": 198,
        "pickTimes": 254,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1444,
        "actions": 10,
        "pickPieces": 919,
        "pickOrders": 617,
        "pickTimes": 916,
        "seedPieces": 419,
        "checkPieces": 0,
        "shipPieces": 35,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1243,
        "actions": 12,
        "pickPieces": 833,
        "pickOrders": 609,
        "pickTimes": 833,
        "seedPieces": 326,
        "checkPieces": 0,
        "shipPieces": 35,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1229,
        "actions": 8,
        "pickPieces": 958,
        "pickOrders": 735,
        "pickTimes": 958,
        "seedPieces": 202,
        "checkPieces": 0,
        "shipPieces": 69,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1205,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 368,
        "shipPieces": 368,
        "inboundPieces": 31,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 335
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1153,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1127,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1042,
        "actions": 8,
        "pickPieces": 323,
        "pickOrders": 273,
        "pickTimes": 323,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1016,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1016,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1012,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 929,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 952,
        "actions": 8,
        "pickPieces": 350,
        "pickOrders": 285,
        "pickTimes": 350,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 904,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 904,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 872,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 872,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 814,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 814,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 703,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 703,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 682,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 682,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 659,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 517,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 643,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 643,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 630,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 630,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 355,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 157,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 277,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 30,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 166,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 33,
        "shelfPieces": 48,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 164,
        "actions": 13,
        "pickPieces": 133,
        "pickOrders": 130,
        "pickTimes": 133,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 19,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 104,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 50,
        "shipPieces": 50,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 50
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 99,
        "actions": 12,
        "pickPieces": 90,
        "pickOrders": 82,
        "pickTimes": 90,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 82,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 33,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 33,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 2,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "马晓芳",
        "role": "主账号",
        "warehouse": "",
        "workload": 4,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 4,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 6,
        "pickPieces": 2,
        "pickOrders": 1,
        "pickTimes": 2,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 1,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 15
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 14,490 件，与拣货 13,641 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,704 件，包裹 5,140 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,175 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 4,764 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,606 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-26": {
    "key": "2026-07-26",
    "label": "7月26日",
    "sourceFile": "仓库人员工作统计_2026-07-26 00~2026-07-26 23_20260727100014_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-26 00:00 - 2026-07-26 23:00",
    "generatedAt": "2026-07-27 10:00:14",
    "totals": {
      "pickPieces": 11579,
      "pickTimes": 11231,
      "pickSkus": 5875,
      "pickOrders": 9409,
      "seedOrders": 718,
      "seedPieces": 1728,
      "checkTimes": 9524,
      "checkPieces": 11012,
      "weighTimes": 9328,
      "weighPieces": 10647,
      "shipTimes": 9624,
      "shipPieces": 11522,
      "inboundPieces": 3602,
      "purchaseReturnPieces": 254,
      "moveTimes": 1784,
      "movePieces": 2890,
      "returnTimes": 133,
      "returnPieces": 133,
      "shelfPieces": 9474,
      "shelfTimes": 7123,
      "packPieces": 505,
      "qcOrders": 7,
      "qcPieces": 80,
      "unpackParcels": 4816,
      "unpackPieces": 7541,
      "unpackOrders": 6418,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 342266,
      "auditConfirmOrders": 16498,
      "forceAuditOrders": 3005,
      "smartAuditOrders": 322763,
      "expressPrints": 9614,
      "barcodePrints": 34,
      "barcodePrintTimes": 4,
      "tagPrints": 120,
      "tagPrintTimes": 105,
      "activeWorkers": 48,
      "totalWorkload": 59217,
      "roles": 13,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 11579,
        "secondary": 11231,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1728,
        "secondary": 718,
        "unit": "件",
        "subUnit": "单",
        "progress": 15,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 11012,
        "secondary": 9524,
        "unit": "件",
        "subUnit": "次",
        "progress": 95,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9328,
        "secondary": 10647,
        "unit": "次",
        "subUnit": "件",
        "progress": 81,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 11522,
        "secondary": 9624,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 3602,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 31,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 9474,
        "secondary": 7123,
        "unit": "件",
        "subUnit": "次",
        "progress": 82,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7541,
        "secondary": 4816,
        "unit": "件",
        "subUnit": "包",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 9768,
        "secondary": 9614,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 84,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 13,
        "workload": 24625,
        "pickPieces": 2744,
        "shipPieces": 10747,
        "checkPieces": 10606,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 11907,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 9431
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4768,
        "pickPieces": 4289,
        "shipPieces": 170,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 4633,
        "pickPieces": 1317,
        "shipPieces": 64,
        "checkPieces": 0,
        "unpackPieces": 2980,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 3615,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3458,
        "pickPieces": 2594,
        "shipPieces": 130,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 3458,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3458,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1400,
        "pickPieces": 0,
        "shipPieces": 406,
        "checkPieces": 406,
        "unpackPieces": 0,
        "shelfPieces": 28
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 779,
        "pickPieces": 428,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 250,
        "pickPieces": 207,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "统计",
        "workers": 3,
        "workload": 244,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 80,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 1,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4010,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2005,
        "shipPieces": 2005,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1940
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3912,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1956,
        "shipPieces": 1956,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1765
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 3615,
        "actions": 10,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 3465,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 22
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3540,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1770,
        "shipPieces": 1770,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1664
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3478,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1739,
        "shipPieces": 1739,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1623
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3088,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1889,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3022,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1511,
        "shipPieces": 1511,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1259
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2274,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1137,
        "shipPieces": 1137,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 584
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2028,
        "actions": 10,
        "pickPieces": 1840,
        "pickOrders": 1515,
        "pickTimes": 1838,
        "seedPieces": 90,
        "checkPieces": 0,
        "shipPieces": 97,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2002,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1417,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1911,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1911,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1790,
        "actions": 14,
        "pickPieces": 1243,
        "pickOrders": 927,
        "pickTimes": 1230,
        "seedPieces": 361,
        "checkPieces": 0,
        "shipPieces": 59,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1773,
        "actions": 10,
        "pickPieces": 1634,
        "pickOrders": 1413,
        "pickTimes": 1634,
        "seedPieces": 69,
        "checkPieces": 0,
        "shipPieces": 60,
        "inboundPieces": 0,
        "shelfPieces": 10,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1669,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1150,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1668,
        "actions": 10,
        "pickPieces": 1351,
        "pickOrders": 1111,
        "pickTimes": 1351,
        "seedPieces": 242,
        "checkPieces": 0,
        "shipPieces": 71,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1653,
        "actions": 8,
        "pickPieces": 1317,
        "pickOrders": 1007,
        "pickTimes": 984,
        "seedPieces": 272,
        "checkPieces": 0,
        "shipPieces": 64,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1554,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1464,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1532,
        "actions": 6,
        "pickPieces": 1449,
        "pickOrders": 1302,
        "pickTimes": 1449,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 83,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1400,
        "actions": 16,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 406,
        "shipPieces": 406,
        "inboundPieces": 0,
        "shelfPieces": 28,
        "unpackPieces": 0,
        "expressPrints": 336
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1109,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1109,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 967,
        "actions": 8,
        "pickPieces": 815,
        "pickOrders": 674,
        "pickTimes": 815,
        "seedPieces": 139,
        "checkPieces": 0,
        "shipPieces": 13,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 938,
        "actions": 8,
        "pickPieces": 712,
        "pickOrders": 550,
        "pickTimes": 712,
        "seedPieces": 170,
        "checkPieces": 0,
        "shipPieces": 56,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 905,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 905,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 775,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 775,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 751,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 751,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 750,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 750,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 733,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 733,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 701,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 693,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 650,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 650,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 626,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 313,
        "shipPieces": 313,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 288
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 598,
        "actions": 11,
        "pickPieces": 218,
        "pickOrders": 166,
        "pickTimes": 218,
        "seedPieces": 30,
        "checkPieces": 175,
        "shipPieces": 175,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 112
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 576,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 576,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 549,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 549,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 544,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 544,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 443,
        "actions": 10,
        "pickPieces": 232,
        "pickOrders": 169,
        "pickTimes": 232,
        "seedPieces": 103,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 344,
        "actions": 8,
        "pickPieces": 161,
        "pickOrders": 91,
        "pickTimes": 161,
        "seedPieces": 121,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 341,
        "actions": 12,
        "pickPieces": 204,
        "pickOrders": 145,
        "pickTimes": 204,
        "seedPieces": 33,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 336,
        "actions": 8,
        "pickPieces": 196,
        "pickOrders": 137,
        "pickTimes": 196,
        "seedPieces": 98,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 145,
        "actions": 13,
        "pickPieces": 129,
        "pickOrders": 124,
        "pickTimes": 129,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 12
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 128,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 128,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 112,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 105,
        "actions": 14,
        "pickPieces": 78,
        "pickOrders": 78,
        "pickTimes": 78,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 72,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 4,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 4,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 11,522 件，与拣货 11,579 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,541 件，包裹 4,816 个。"
      },
      {
        "level": "info",
        "title": "邹丽玉 产出领先",
        "desc": "发货，累计 4,010 件/次，覆盖 5 类动作。"
      },
      {
        "level": "info",
        "title": "赵银 产出领先",
        "desc": "发货，累计 3,912 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 3,615 件/次，覆盖 10 类动作。"
      }
    ]
  },
  "2026-07-25": {
    "key": "2026-07-25",
    "label": "7月25日",
    "sourceFile": "仓库人员工作统计_2026-07-25 00~2026-07-25 23_20260726101547_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-25 00:00 - 2026-07-25 23:00",
    "generatedAt": "2026-07-26 10:15:47",
    "totals": {
      "pickPieces": 11087,
      "pickTimes": 11047,
      "pickSkus": 5689,
      "pickOrders": 9455,
      "seedOrders": 590,
      "seedPieces": 1381,
      "checkTimes": 10456,
      "checkPieces": 11529,
      "weighTimes": 9573,
      "weighPieces": 10505,
      "shipTimes": 10553,
      "shipPieces": 11984,
      "inboundPieces": 6650,
      "purchaseReturnPieces": 286,
      "moveTimes": 3385,
      "movePieces": 5268,
      "returnTimes": 69,
      "returnPieces": 69,
      "shelfPieces": 13214,
      "shelfTimes": 10250,
      "packPieces": 453,
      "qcOrders": 13,
      "qcPieces": 82,
      "unpackParcels": 5370,
      "unpackPieces": 7469,
      "unpackOrders": 7084,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 358354,
      "auditConfirmOrders": 40748,
      "forceAuditOrders": 1065,
      "smartAuditOrders": 316541,
      "expressPrints": 10564,
      "barcodePrints": 582,
      "barcodePrintTimes": 27,
      "tagPrints": 2020,
      "tagPrintTimes": 254,
      "activeWorkers": 46,
      "totalWorkload": 69472,
      "roles": 14,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 11087,
        "secondary": 11047,
        "unit": "件",
        "subUnit": "次",
        "progress": 84,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1381,
        "secondary": 590,
        "unit": "件",
        "subUnit": "单",
        "progress": 10,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 11529,
        "secondary": 10456,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9573,
        "secondary": 10505,
        "unit": "次",
        "subUnit": "件",
        "progress": 72,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 11984,
        "secondary": 10553,
        "unit": "件",
        "subUnit": "次",
        "progress": 91,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 6650,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 50,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13214,
        "secondary": 10250,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7469,
        "secondary": 5370,
        "unit": "件",
        "subUnit": "包",
        "progress": 57,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 13166,
        "secondary": 10564,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 12,
        "workload": 26248,
        "pickPieces": 2581,
        "shipPieces": 11214,
        "checkPieces": 11134,
        "unpackPieces": 0,
        "shelfPieces": 183
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 15993,
        "pickPieces": 3,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 13005
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 6962,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 17
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 6089,
        "pickPieces": 1353,
        "shipPieces": 68,
        "checkPieces": 0,
        "unpackPieces": 4384,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4806,
        "pickPieces": 3971,
        "shipPieces": 175,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3357,
        "pickPieces": 2593,
        "shipPieces": 129,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3327,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3085,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1245,
        "pickPieces": 2,
        "shipPieces": 395,
        "checkPieces": 395,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 1052,
        "pickPieces": 404,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 214,
        "pickPieces": 180,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 82,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 71,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 26,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 6962,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 6560,
        "shelfPieces": 17,
        "unpackPieces": 0,
        "expressPrints": 21
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5913,
        "actions": 11,
        "pickPieces": 221,
        "pickOrders": 221,
        "pickTimes": 221,
        "seedPieces": 0,
        "checkPieces": 2846,
        "shipPieces": 2846,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2571
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3519,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2795,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3477,
        "actions": 11,
        "pickPieces": 133,
        "pickOrders": 133,
        "pickTimes": 133,
        "seedPieces": 0,
        "checkPieces": 1672,
        "shipPieces": 1672,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1580
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3106,
        "actions": 13,
        "pickPieces": 94,
        "pickOrders": 94,
        "pickTimes": 94,
        "seedPieces": 0,
        "checkPieces": 1399,
        "shipPieces": 1399,
        "inboundPieces": 0,
        "shelfPieces": 182,
        "unpackPieces": 0,
        "expressPrints": 1325
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3000,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1443,
        "shipPieces": 1443,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1321
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2982,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1944,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2831,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1360,
        "shipPieces": 1360,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1226
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2570,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2496,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2565,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1677,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2424,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1212,
        "shipPieces": 1212,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1080
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2304,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1152,
        "shipPieces": 1152,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1040
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2048,
        "actions": 12,
        "pickPieces": 1699,
        "pickOrders": 1508,
        "pickTimes": 1699,
        "seedPieces": 137,
        "checkPieces": 0,
        "shipPieces": 57,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2002,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1823,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1723,
        "actions": 14,
        "pickPieces": 1365,
        "pickOrders": 1172,
        "pickTimes": 1365,
        "seedPieces": 162,
        "checkPieces": 0,
        "shipPieces": 66,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1705,
        "actions": 10,
        "pickPieces": 1353,
        "pickOrders": 1202,
        "pickTimes": 1353,
        "seedPieces": 98,
        "checkPieces": 0,
        "shipPieces": 68,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1634,
        "actions": 12,
        "pickPieces": 1228,
        "pickOrders": 1040,
        "pickTimes": 1188,
        "seedPieces": 193,
        "checkPieces": 0,
        "shipPieces": 63,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1518,
        "actions": 14,
        "pickPieces": 1348,
        "pickOrders": 1263,
        "pickTimes": 1348,
        "seedPieces": 29,
        "checkPieces": 0,
        "shipPieces": 71,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1352,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1352,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1245,
        "actions": 14,
        "pickPieces": 2,
        "pickOrders": 1,
        "pickTimes": 2,
        "seedPieces": 0,
        "checkPieces": 395,
        "shipPieces": 395,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 317
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1240,
        "actions": 12,
        "pickPieces": 924,
        "pickOrders": 742,
        "pickTimes": 924,
        "seedPieces": 165,
        "checkPieces": 0,
        "shipPieces": 47,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1199,
        "actions": 12,
        "pickPieces": 1008,
        "pickOrders": 825,
        "pickTimes": 1008,
        "seedPieces": 142,
        "checkPieces": 0,
        "shipPieces": 47,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1169,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1161,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1142,
        "actions": 10,
        "pickPieces": 887,
        "pickOrders": 712,
        "pickTimes": 887,
        "seedPieces": 114,
        "checkPieces": 0,
        "shipPieces": 32,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1113,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1108,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1099,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1099,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1034,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1034,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1018,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1018,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1004,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1004,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 795,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 795,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 666,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 666,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 596,
        "actions": 8,
        "pickPieces": 210,
        "pickOrders": 116,
        "pickTimes": 210,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 559,
        "actions": 8,
        "pickPieces": 240,
        "pickOrders": 136,
        "pickTimes": 240,
        "seedPieces": 121,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 528,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 286,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 493,
        "actions": 10,
        "pickPieces": 164,
        "pickOrders": 87,
        "pickTimes": 164,
        "seedPieces": 120,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 215,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 215,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 142,
        "actions": 11,
        "pickPieces": 28,
        "pickOrders": 28,
        "pickTimes": 28,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 122,
        "actions": 12,
        "pickPieces": 109,
        "pickOrders": 102,
        "pickTimes": 109,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 9
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 114,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 50,
        "shipPieces": 50,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 50
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 92,
        "actions": 16,
        "pickPieces": 71,
        "pickOrders": 70,
        "pickTimes": 71,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 82,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 71,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 64,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 63,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 14,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 14,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 12,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 12,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 10,
        "pickPieces": 3,
        "pickOrders": 3,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 16
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 11,984 件，与拣货 11,087 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,469 件，包裹 5,370 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 6,962 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 5,913 件/次，覆盖 11 类动作。"
      },
      {
        "level": "info",
        "title": "曹达禄 产出领先",
        "desc": "上架，累计 3,519 件/次，覆盖 4 类动作。"
      }
    ]
  },
  "2026-07-24": {
    "key": "2026-07-24",
    "label": "7月24日",
    "sourceFile": "仓库人员工作统计_2026-07-24 00~2026-07-24 23_20260726100239_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-24 00:00 - 2026-07-24 23:00",
    "generatedAt": "2026-07-26 10:02:39",
    "totals": {
      "pickPieces": 14233,
      "pickTimes": 14158,
      "pickSkus": 6605,
      "pickOrders": 11525,
      "seedOrders": 962,
      "seedPieces": 2442,
      "checkTimes": 12294,
      "checkPieces": 14352,
      "weighTimes": 11160,
      "weighPieces": 12834,
      "shipTimes": 12390,
      "shipPieces": 14817,
      "inboundPieces": 7351,
      "purchaseReturnPieces": 227,
      "moveTimes": 1446,
      "movePieces": 4682,
      "returnTimes": 231,
      "returnPieces": 231,
      "shelfPieces": 14526,
      "shelfTimes": 10237,
      "packPieces": 458,
      "qcOrders": 12,
      "qcPieces": 118,
      "unpackParcels": 5246,
      "unpackPieces": 7831,
      "unpackOrders": 7271,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 303773,
      "auditConfirmOrders": 30598,
      "forceAuditOrders": 1134,
      "smartAuditOrders": 272041,
      "expressPrints": 12492,
      "barcodePrints": 0,
      "barcodePrintTimes": 0,
      "tagPrints": 317,
      "tagPrintTimes": 88,
      "activeWorkers": 53,
      "totalWorkload": 80388,
      "roles": 17,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 14233,
        "secondary": 14158,
        "unit": "件",
        "subUnit": "次",
        "progress": 96,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2442,
        "secondary": 962,
        "unit": "件",
        "subUnit": "单",
        "progress": 16,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 14352,
        "secondary": 12294,
        "unit": "件",
        "subUnit": "次",
        "progress": 97,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11160,
        "secondary": 12834,
        "unit": "次",
        "subUnit": "件",
        "progress": 75,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 14817,
        "secondary": 12390,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 7351,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 50,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14526,
        "secondary": 10237,
        "unit": "件",
        "subUnit": "次",
        "progress": 98,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7831,
        "secondary": 5246,
        "unit": "件",
        "subUnit": "包",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12809,
        "secondary": 12492,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 86,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 31799,
        "pickPieces": 3078,
        "shipPieces": 13896,
        "checkPieces": 13782,
        "unpackPieces": 0,
        "shelfPieces": 480
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 18782,
        "pickPieces": 4,
        "shipPieces": 103,
        "checkPieces": 101,
        "unpackPieces": 0,
        "shelfPieces": 13984
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 7480,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5808,
        "pickPieces": 1765,
        "shipPieces": 72,
        "checkPieces": 0,
        "unpackPieces": 3836,
        "shelfPieces": 2
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 5292,
        "pickPieces": 4591,
        "shipPieces": 166,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3568,
        "pickPieces": 3055,
        "shipPieces": 104,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3340,
        "pickPieces": 167,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3115,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2466,
        "pickPieces": 1441,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1405,
        "pickPieces": 1,
        "shipPieces": 469,
        "checkPieces": 469,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 156,
        "pickPieces": 131,
        "shipPieces": 7,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 7
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 118,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 73,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 37
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 37,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 34,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "品控",
        "workers": 1,
        "workload": 23,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 7,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 7
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 7480,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 7253,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 20
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 6070,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3764,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5867,
        "actions": 11,
        "pickPieces": 63,
        "pickOrders": 29,
        "pickTimes": 63,
        "seedPieces": 0,
        "checkPieces": 2902,
        "shipPieces": 2902,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2529
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4340,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2170,
        "shipPieces": 2170,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2017
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3992,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1996,
        "shipPieces": 1996,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1643
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3700,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1850,
        "shipPieces": 1850,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1661
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3549,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2285,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3492,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1746,
        "shipPieces": 1746,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1658
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2574,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2572,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2396,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1198,
        "shipPieces": 1198,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 790
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2344,
        "actions": 14,
        "pickPieces": 89,
        "pickOrders": 25,
        "pickTimes": 89,
        "seedPieces": 89,
        "checkPieces": 1083,
        "shipPieces": 1083,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1012
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2156,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1624,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2110,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1816,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2036,
        "actions": 12,
        "pickPieces": 1782,
        "pickOrders": 1558,
        "pickTimes": 1779,
        "seedPieces": 156,
        "checkPieces": 0,
        "shipPieces": 59,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2014,
        "actions": 8,
        "pickPieces": 1855,
        "pickOrders": 1600,
        "pickTimes": 1827,
        "seedPieces": 119,
        "checkPieces": 0,
        "shipPieces": 40,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1972,
        "actions": 10,
        "pickPieces": 1765,
        "pickOrders": 1549,
        "pickTimes": 1765,
        "seedPieces": 133,
        "checkPieces": 0,
        "shipPieces": 72,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1888,
        "actions": 12,
        "pickPieces": 1596,
        "pickOrders": 1430,
        "pickTimes": 1596,
        "seedPieces": 113,
        "checkPieces": 0,
        "shipPieces": 71,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1871,
        "actions": 10,
        "pickPieces": 1562,
        "pickOrders": 1259,
        "pickTimes": 1518,
        "seedPieces": 262,
        "checkPieces": 0,
        "shipPieces": 46,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1697,
        "actions": 12,
        "pickPieces": 1493,
        "pickOrders": 1341,
        "pickTimes": 1493,
        "seedPieces": 61,
        "checkPieces": 0,
        "shipPieces": 58,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1672,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 836,
        "shipPieces": 836,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 677
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1405,
        "actions": 19,
        "pickPieces": 1,
        "pickOrders": 1,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 469,
        "shipPieces": 469,
        "inboundPieces": 4,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 390
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1390,
        "actions": 8,
        "pickPieces": 1140,
        "pickOrders": 963,
        "pickTimes": 1140,
        "seedPieces": 195,
        "checkPieces": 0,
        "shipPieces": 55,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1243,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1243,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1207,
        "actions": 8,
        "pickPieces": 708,
        "pickOrders": 307,
        "pickTimes": 708,
        "seedPieces": 498,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1171,
        "actions": 8,
        "pickPieces": 919,
        "pickOrders": 694,
        "pickTimes": 919,
        "seedPieces": 233,
        "checkPieces": 0,
        "shipPieces": 19,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1027,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1025,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 990,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 990,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 924,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 924,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 923,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 923,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 860,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 860,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 807,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 807,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 782,
        "actions": 9,
        "pickPieces": 167,
        "pickOrders": 120,
        "pickTimes": 167,
        "seedPieces": 58,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 557,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 708,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 704,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 689,
        "actions": 8,
        "pickPieces": 391,
        "pickOrders": 183,
        "pickTimes": 391,
        "seedPieces": 297,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 645,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 645,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 570,
        "actions": 6,
        "pickPieces": 342,
        "pickOrders": 161,
        "pickTimes": 342,
        "seedPieces": 228,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 499,
        "actions": 8,
        "pickPieces": 8,
        "pickOrders": 8,
        "pickTimes": 8,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 462,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 377,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 193,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 211,
        "actions": 17,
        "pickPieces": 4,
        "pickOrders": 4,
        "pickTimes": 4,
        "seedPieces": 0,
        "checkPieces": 101,
        "shipPieces": 103,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 68
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 160,
        "actions": 18,
        "pickPieces": 130,
        "pickOrders": 125,
        "pickTimes": 130,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 16,
        "unpackPieces": 0,
        "expressPrints": 10
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 124,
        "actions": 11,
        "pickPieces": 87,
        "pickOrders": 43,
        "pickTimes": 87,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 36,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 99,
        "actions": 14,
        "pickPieces": 79,
        "pickOrders": 78,
        "pickTimes": 79,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 8
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 78,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 73,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 37,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 57,
        "actions": 10,
        "pickPieces": 52,
        "pickOrders": 47,
        "pickTimes": 52,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 40,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 37,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 37,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张拼",
        "role": "品控",
        "warehouse": "临平仓",
        "workload": 23,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 23,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 21,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 21,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 13,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 14,817 件，与拣货 14,233 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,831 件，包裹 5,246 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 7,480 件/次，覆盖 6 类动作。"
      },
      {
        "level": "info",
        "title": "郭宝亮 产出领先",
        "desc": "上架，累计 6,070 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "魏子晴 产出领先",
        "desc": "发货，累计 5,867 件/次，覆盖 11 类动作。"
      }
    ]
  },
  "2026-07-23": {
    "key": "2026-07-23",
    "label": "7月23日",
    "sourceFile": "仓库人员工作统计_2026-07-23 00~2026-07-23 23_20260723220513_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-23 00:00 - 2026-07-23 23:00",
    "generatedAt": "2026-07-23 22:05:13",
    "totals": {
      "pickPieces": 13788,
      "pickTimes": 13467,
      "pickSkus": 9073,
      "pickOrders": 0,
      "seedOrders": 1237,
      "seedPieces": 3312,
      "checkTimes": 11272,
      "checkPieces": 11459,
      "weighTimes": 10662,
      "weighPieces": 10662,
      "shipTimes": 11447,
      "shipPieces": 11447,
      "inboundPieces": 5276,
      "purchaseReturnPieces": 115,
      "moveTimes": 1018,
      "movePieces": 1840,
      "returnTimes": 107,
      "returnPieces": 107,
      "shelfPieces": 12182,
      "shelfTimes": 10149,
      "packPieces": 503,
      "qcOrders": 7,
      "qcPieces": 80,
      "unpackParcels": 5722,
      "unpackPieces": 9304,
      "unpackOrders": 7764,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 234210,
      "auditConfirmOrders": 27827,
      "forceAuditOrders": 1128,
      "smartAuditOrders": 205255,
      "expressPrints": 11557,
      "barcodePrints": 1014,
      "barcodePrintTimes": 14,
      "tagPrints": 3980,
      "tagPrintTimes": 199,
      "activeWorkers": 53,
      "totalWorkload": 67991,
      "roles": 16,
      "warehouses": 2
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13788,
        "secondary": 13467,
        "unit": "件",
        "subUnit": "次",
        "progress": 83,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 3312,
        "secondary": 1237,
        "unit": "件",
        "subUnit": "单",
        "progress": 20,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 11459,
        "secondary": 11272,
        "unit": "件",
        "subUnit": "次",
        "progress": 69,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 10662,
        "secondary": 10662,
        "unit": "次",
        "subUnit": "件",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 11447,
        "secondary": 11447,
        "unit": "件",
        "subUnit": "次",
        "progress": 69,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5276,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 32,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 12182,
        "secondary": 10149,
        "unit": "件",
        "subUnit": "次",
        "progress": 74,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 9304,
        "secondary": 5722,
        "unit": "件",
        "subUnit": "包",
        "progress": 56,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 16551,
        "secondary": 11557,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 26876,
        "pickPieces": 3614,
        "shipPieces": 10967,
        "checkPieces": 11080,
        "unpackPieces": 0,
        "shelfPieces": 294
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 12778,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11151
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5575,
        "pickPieces": 1323,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 3996,
        "shelfPieces": 1
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 5327,
        "pickPieces": 4442,
        "shipPieces": 14,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 4853,
        "pickPieces": 0,
        "shipPieces": 28,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 525
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3886,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3886,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3006,
        "pickPieces": 2575,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2774,
        "pickPieces": 1686,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1472,
        "pickPieces": 0,
        "shipPieces": 381,
        "checkPieces": 379,
        "unpackPieces": 0,
        "shelfPieces": 202
      },
      {
        "role": "买手",
        "workers": 1,
        "workload": 1060,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 183,
        "pickPieces": 148,
        "shipPieces": 12,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 90,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 80,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 29,
        "pickPieces": 0,
        "shipPieces": 29,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 2,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "王碧莹",
        "workers": 1,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 4853,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 28,
        "inboundPieces": 4123,
        "shelfPieces": 525,
        "unpackPieces": 0,
        "expressPrints": 28
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3879,
        "actions": 14,
        "pickPieces": 207,
        "pickOrders": 0,
        "pickTimes": 207,
        "seedPieces": 147,
        "checkPieces": 1780,
        "shipPieces": 1744,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1748
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3238,
        "actions": 14,
        "pickPieces": 39,
        "pickOrders": 0,
        "pickTimes": 39,
        "seedPieces": 28,
        "checkPieces": 1588,
        "shipPieces": 1582,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1582
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3002,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1502,
        "shipPieces": 1500,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1507
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2821,
        "actions": 12,
        "pickPieces": 67,
        "pickOrders": 0,
        "pickTimes": 67,
        "seedPieces": 67,
        "checkPieces": 1346,
        "shipPieces": 1341,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1342
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2682,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1376,
        "shipPieces": 1306,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1309
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2462,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1717,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2264,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2000,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2258,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2249,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2252,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1921,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2123,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1072,
        "shipPieces": 1051,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1167
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1935,
        "actions": 7,
        "pickPieces": 1607,
        "pickOrders": 0,
        "pickTimes": 1607,
        "seedPieces": 321,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1934,
        "actions": 12,
        "pickPieces": 84,
        "pickOrders": 0,
        "pickTimes": 84,
        "seedPieces": 55,
        "checkPieces": 903,
        "shipPieces": 892,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 892
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1849,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 926,
        "shipPieces": 923,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 927
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1813,
        "actions": 9,
        "pickPieces": 1560,
        "pickOrders": 0,
        "pickTimes": 1560,
        "seedPieces": 232,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1700,
        "actions": 9,
        "pickPieces": 1587,
        "pickOrders": 0,
        "pickTimes": 1587,
        "seedPieces": 94,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1611,
        "actions": 11,
        "pickPieces": 1338,
        "pickOrders": 0,
        "pickTimes": 1338,
        "seedPieces": 263,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1579,
        "actions": 9,
        "pickPieces": 1323,
        "pickOrders": 0,
        "pickTimes": 1002,
        "seedPieces": 249,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1579,
        "actions": 11,
        "pickPieces": 1275,
        "pickOrders": 0,
        "pickTimes": 1275,
        "seedPieces": 230,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1472,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 379,
        "shipPieces": 381,
        "inboundPieces": 3,
        "shelfPieces": 202,
        "unpackPieces": 0,
        "expressPrints": 384
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1426,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1333,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1408,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1408,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1395,
        "actions": 11,
        "pickPieces": 1237,
        "pickOrders": 0,
        "pickTimes": 1237,
        "seedPieces": 143,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1276,
        "actions": 9,
        "pickPieces": 929,
        "pickOrders": 0,
        "pickTimes": 929,
        "seedPieces": 339,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1205,
        "actions": 5,
        "pickPieces": 667,
        "pickOrders": 0,
        "pickTimes": 667,
        "seedPieces": 538,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1131,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 566,
        "shipPieces": 565,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 565
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1085,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1085,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1061,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1061,
        "expressPrints": 0
      },
      {
        "name": "李怡霄",
        "role": "买手",
        "warehouse": "陈什么陈",
        "workload": 1060,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 1060,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1047,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1032,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 964,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 964,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 954,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 954,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 896,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 892,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 883,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 883,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 829,
        "actions": 7,
        "pickPieces": 517,
        "pickOrders": 0,
        "pickTimes": 517,
        "seedPieces": 311,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 758,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 758,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 740,
        "actions": 7,
        "pickPieces": 502,
        "pickOrders": 0,
        "pickTimes": 502,
        "seedPieces": 237,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 739,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 739,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 629,
        "actions": 5,
        "pickPieces": 571,
        "pickOrders": 0,
        "pickTimes": 571,
        "seedPieces": 58,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 438,
        "actions": 12,
        "pickPieces": 25,
        "pickOrders": 0,
        "pickTimes": 25,
        "seedPieces": 0,
        "checkPieces": 21,
        "shipPieces": 13,
        "inboundPieces": 0,
        "shelfPieces": 283,
        "unpackPieces": 0,
        "expressPrints": 13
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 166,
        "actions": 15,
        "pickPieces": 97,
        "pickOrders": 0,
        "pickTimes": 97,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 37,
        "inboundPieces": 0,
        "shelfPieces": 9,
        "unpackPieces": 0,
        "expressPrints": 37
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 152,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 108,
        "actions": 11,
        "pickPieces": 98,
        "pickOrders": 0,
        "pickTimes": 98,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 75,
        "actions": 10,
        "pickPieces": 50,
        "pickOrders": 0,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 11,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 13
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 54,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 54,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 36,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 36,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 30,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 30,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 24,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 24,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 24
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 21,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 8,
        "actions": 5,
        "pickPieces": 8,
        "pickOrders": 0,
        "pickTimes": 8,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "私域",
        "role": "王碧莹",
        "warehouse": "",
        "workload": 0,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 13
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 11,447 件，拣货 13,788 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 9,304 件，包裹 5,722 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 4,853 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 3,879 件/次，覆盖 14 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 3,238 件/次，覆盖 14 类动作。"
      }
    ]
  },
  "2026-07-22": {
    "key": "2026-07-22",
    "label": "7月22日",
    "sourceFile": "仓库人员工作统计_2026-07-22 00~2026-07-22 23_20260723014452_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-22 00:00 - 2026-07-22 23:00",
    "generatedAt": "2026-07-23 01:44:52",
    "totals": {
      "pickPieces": 12280,
      "pickTimes": 12149,
      "pickSkus": 6985,
      "pickOrders": 0,
      "seedOrders": 948,
      "seedPieces": 2325,
      "checkTimes": 10082,
      "checkPieces": 10273,
      "weighTimes": 9568,
      "weighPieces": 9568,
      "shipTimes": 10184,
      "shipPieces": 10184,
      "inboundPieces": 7003,
      "purchaseReturnPieces": 621,
      "moveTimes": 2938,
      "movePieces": 6446,
      "returnTimes": 197,
      "returnPieces": 197,
      "shelfPieces": 16036,
      "shelfTimes": 10078,
      "packPieces": 534,
      "qcOrders": 7,
      "qcPieces": 80,
      "unpackParcels": 5135,
      "unpackPieces": 7219,
      "unpackOrders": 6766,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 400400,
      "auditConfirmOrders": 35013,
      "forceAuditOrders": 1234,
      "smartAuditOrders": 364153,
      "expressPrints": 10224,
      "barcodePrints": 1074,
      "barcodePrintTimes": 73,
      "tagPrints": 1266,
      "tagPrintTimes": 194,
      "activeWorkers": 56,
      "totalWorkload": 71935,
      "roles": 16,
      "warehouses": 2
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 12280,
        "secondary": 12149,
        "unit": "件",
        "subUnit": "次",
        "progress": 77,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2325,
        "secondary": 948,
        "unit": "件",
        "subUnit": "单",
        "progress": 14,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 10273,
        "secondary": 10082,
        "unit": "件",
        "subUnit": "次",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9568,
        "secondary": 9568,
        "unit": "次",
        "subUnit": "件",
        "progress": 60,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 10184,
        "secondary": 10184,
        "unit": "件",
        "subUnit": "次",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 7003,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 44,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 16036,
        "secondary": 10078,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7219,
        "secondary": 5135,
        "unit": "件",
        "subUnit": "包",
        "progress": 45,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12564,
        "secondary": 10224,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 78,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 16,
        "workload": 23919,
        "pickPieces": 3662,
        "shipPieces": 9779,
        "checkPieces": 9936,
        "unpackPieces": 0,
        "shelfPieces": 8
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 18760,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 13757
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 8030,
        "pickPieces": 0,
        "shipPieces": 22,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 80
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 5380,
        "pickPieces": 4571,
        "shipPieces": 18,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 7
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 4448,
        "pickPieces": 1548,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 2466,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 6,
        "workload": 4311,
        "pickPieces": 451,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3490,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 3275,
        "pickPieces": 4,
        "shipPieces": 342,
        "checkPieces": 337,
        "unpackPieces": 0,
        "shelfPieces": 2053
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 1984,
        "pickPieces": 884,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1307,
        "pickPieces": 1063,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 244,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 122
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 113,
        "pickPieces": 97,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 80,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 3,
        "workload": 62,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 3,
        "workload": 12,
        "pickPieces": 0,
        "shipPieces": 12,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 10,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "陈陈项目",
        "workers": 1,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 8030,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 22,
        "inboundPieces": 6820,
        "shelfPieces": 80,
        "unpackPieces": 0,
        "expressPrints": 22
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 6181,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3374,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3635,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1819,
        "shipPieces": 1816,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1818
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 3275,
        "actions": 17,
        "pickPieces": 4,
        "pickOrders": 0,
        "pickTimes": 4,
        "seedPieces": 0,
        "checkPieces": 337,
        "shipPieces": 342,
        "inboundPieces": 0,
        "shelfPieces": 2053,
        "unpackPieces": 0,
        "expressPrints": 357
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3128,
        "actions": 13,
        "pickPieces": 160,
        "pickOrders": 0,
        "pickTimes": 160,
        "seedPieces": 64,
        "checkPieces": 1453,
        "shipPieces": 1451,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1451
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2952,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1915,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2669,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1995,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2653,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1324,
        "shipPieces": 1329,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1362
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2534,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1315,
        "shipPieces": 1219,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1219
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2411,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1209,
        "shipPieces": 1202,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1203
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2347,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2340,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2346,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2001,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2158,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1103,
        "shipPieces": 1055,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1074
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1745,
        "actions": 11,
        "pickPieces": 1475,
        "pickOrders": 0,
        "pickTimes": 1458,
        "seedPieces": 251,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1723,
        "actions": 12,
        "pickPieces": 70,
        "pickOrders": 0,
        "pickTimes": 70,
        "seedPieces": 35,
        "checkPieces": 809,
        "shipPieces": 809,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 811
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1488,
        "actions": 5,
        "pickPieces": 1480,
        "pickOrders": 0,
        "pickTimes": 1376,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1431,
        "actions": 13,
        "pickPieces": 1233,
        "pickOrders": 0,
        "pickTimes": 1233,
        "seedPieces": 58,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1311,
        "actions": 11,
        "pickPieces": 1144,
        "pickOrders": 0,
        "pickTimes": 1144,
        "seedPieces": 34,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1307,
        "actions": 11,
        "pickPieces": 1063,
        "pickOrders": 0,
        "pickTimes": 1055,
        "seedPieces": 236,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1172,
        "actions": 7,
        "pickPieces": 1066,
        "pickOrders": 0,
        "pickTimes": 1066,
        "seedPieces": 103,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1163,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 593,
        "shipPieces": 570,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 571
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1119,
        "actions": 11,
        "pickPieces": 921,
        "pickOrders": 0,
        "pickTimes": 919,
        "seedPieces": 131,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1058,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1058,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1053,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1053,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1007,
        "actions": 8,
        "pickPieces": 482,
        "pickOrders": 0,
        "pickTimes": 482,
        "seedPieces": 328,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 197,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 992,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 987,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "韩鹏",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 896,
        "actions": 8,
        "pickPieces": 451,
        "pickOrders": 0,
        "pickTimes": 451,
        "seedPieces": 365,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 80,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 893,
        "actions": 5,
        "pickPieces": 719,
        "pickOrders": 0,
        "pickTimes": 719,
        "seedPieces": 174,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 871,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 871,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 868,
        "actions": 12,
        "pickPieces": 256,
        "pickOrders": 0,
        "pickTimes": 256,
        "seedPieces": 99,
        "checkPieces": 258,
        "shipPieces": 254,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 254
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 817,
        "actions": 7,
        "pickPieces": 486,
        "pickOrders": 0,
        "pickTimes": 486,
        "seedPieces": 177,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 813,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 813,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 796,
        "actions": 11,
        "pickPieces": 671,
        "pickOrders": 0,
        "pickTimes": 671,
        "seedPieces": 117,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 690,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 690,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 685,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 664,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 660,
        "actions": 5,
        "pickPieces": 179,
        "pickOrders": 0,
        "pickTimes": 179,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吕志善",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 609,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 609,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 588,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 481,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 507,
        "actions": 7,
        "pickPieces": 219,
        "pickOrders": 0,
        "pickTimes": 219,
        "seedPieces": 153,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 449,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 449,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 244,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 122,
        "shelfPieces": 122,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 136,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 136,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 130,
        "actions": 15,
        "pickPieces": 101,
        "pickOrders": 0,
        "pickTimes": 101,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 113,
        "actions": 13,
        "pickPieces": 97,
        "pickOrders": 0,
        "pickTimes": 97,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 75,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 39,
        "shipPieces": 36,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 36
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 45,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 45,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 33,
        "actions": 11,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 14,
        "shipPieces": 14,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 19
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 16,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 8,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 8
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 7,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "谷春艳",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "客户服务麦敏敏",
        "role": "陈陈项目",
        "warehouse": "样衣仓",
        "workload": 0,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 10,184 件，拣货 12,280 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,219 件，包裹 5,135 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 8,030 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "魏浩杰 产出领先",
        "desc": "上架，累计 6,181 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 3,635 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-21": {
    "key": "2026-07-21",
    "label": "7月21日",
    "sourceFile": "仓库人员工作统计_2026-07-21 00~2026-07-21 23_20260721220504_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-21 00:00 - 2026-07-21 23:00",
    "generatedAt": "2026-07-21 22:05:04",
    "totals": {
      "pickPieces": 15694,
      "pickTimes": 10695,
      "pickSkus": 7629,
      "pickOrders": 0,
      "seedOrders": 737,
      "seedPieces": 1721,
      "checkTimes": 9381,
      "checkPieces": 9581,
      "weighTimes": 8768,
      "weighPieces": 8768,
      "shipTimes": 9493,
      "shipPieces": 9493,
      "inboundPieces": 4346,
      "purchaseReturnPieces": 118,
      "moveTimes": 3032,
      "movePieces": 4936,
      "returnTimes": 102,
      "returnPieces": 102,
      "shelfPieces": 13561,
      "shelfTimes": 11514,
      "packPieces": 560,
      "qcOrders": 36,
      "qcPieces": 127,
      "unpackParcels": 4773,
      "unpackPieces": 7089,
      "unpackOrders": 6390,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 316192,
      "auditConfirmOrders": 15049,
      "forceAuditOrders": 2200,
      "smartAuditOrders": 298943,
      "expressPrints": 9486,
      "barcodePrints": 295,
      "barcodePrintTimes": 86,
      "tagPrints": 8140,
      "tagPrintTimes": 194,
      "activeWorkers": 54,
      "totalWorkload": 66216,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 15694,
        "secondary": 10695,
        "unit": "件",
        "subUnit": "次",
        "progress": 88,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1721,
        "secondary": 737,
        "unit": "件",
        "subUnit": "单",
        "progress": 10,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 9581,
        "secondary": 9381,
        "unit": "件",
        "subUnit": "次",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 8768,
        "secondary": 8768,
        "unit": "次",
        "subUnit": "件",
        "progress": 49,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 9493,
        "secondary": 9493,
        "unit": "件",
        "subUnit": "次",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4346,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 24,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13561,
        "secondary": 11514,
        "unit": "件",
        "subUnit": "次",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7089,
        "secondary": 4773,
        "unit": "件",
        "subUnit": "包",
        "progress": 40,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 17921,
        "secondary": 9486,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 27764,
        "pickPieces": 8167,
        "shipPieces": 8941,
        "checkPieces": 9053,
        "unpackPieces": 0,
        "shelfPieces": 471
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 13810,
        "pickPieces": 8,
        "shipPieces": 95,
        "checkPieces": 93,
        "unpackPieces": 0,
        "shelfPieces": 10726
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 4659,
        "pickPieces": 0,
        "shipPieces": 29,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 210
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4614,
        "pickPieces": 3961,
        "shipPieces": 15,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 4310,
        "pickPieces": 1377,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 2437,
        "shelfPieces": 2
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 3946,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3539,
        "shelfPieces": 407
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2595,
        "pickPieces": 2040,
        "shipPieces": 14,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2582,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1578
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1373,
        "pickPieces": 0,
        "shipPieces": 368,
        "checkPieces": 435,
        "unpackPieces": 1,
        "shelfPieces": 1
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 248,
        "pickPieces": 39,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 153
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 127,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 114,
        "pickPieces": 102,
        "shipPieces": 9,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 30,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 25,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 9
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 19,
        "pickPieces": 0,
        "shipPieces": 19,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5134,
        "actions": 15,
        "pickPieces": 5088,
        "pickOrders": 0,
        "pickTimes": 89,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 26,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 4659,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 29,
        "inboundPieces": 4300,
        "shelfPieces": 210,
        "unpackPieces": 0,
        "expressPrints": 29
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3915,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1964,
        "shipPieces": 1951,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1952
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3611,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3606,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3610,
        "actions": 12,
        "pickPieces": 157,
        "pickOrders": 0,
        "pickTimes": 157,
        "seedPieces": 67,
        "checkPieces": 1694,
        "shipPieces": 1692,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1693
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3301,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1931,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2758,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1418,
        "shipPieces": 1340,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1344
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2448,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1226,
        "shipPieces": 1222,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1236
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2251,
        "actions": 12,
        "pickPieces": 268,
        "pickOrders": 0,
        "pickTimes": 268,
        "seedPieces": 123,
        "checkPieces": 930,
        "shipPieces": 930,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 933
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2206,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1271,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2042,
        "actions": 8,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 1035,
        "shipPieces": 1004,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1005
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1873,
        "actions": 13,
        "pickPieces": 1377,
        "pickOrders": 0,
        "pickTimes": 1377,
        "seedPieces": 218,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1865,
        "actions": 9,
        "pickPieces": 1738,
        "pickOrders": 0,
        "pickTimes": 1738,
        "seedPieces": 91,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1855,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1778,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1733,
        "actions": 11,
        "pickPieces": 1444,
        "pickOrders": 0,
        "pickTimes": 1444,
        "seedPieces": 253,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1667,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1547,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1511,
        "actions": 11,
        "pickPieces": 1341,
        "pickOrders": 0,
        "pickTimes": 1341,
        "seedPieces": 106,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1373,
        "actions": 16,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 435,
        "shipPieces": 368,
        "inboundPieces": 8,
        "shelfPieces": 1,
        "unpackPieces": 1,
        "expressPrints": 376
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1301,
        "actions": 9,
        "pickPieces": 1071,
        "pickOrders": 0,
        "pickTimes": 1071,
        "seedPieces": 169,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1294,
        "actions": 13,
        "pickPieces": 969,
        "pickOrders": 0,
        "pickTimes": 969,
        "seedPieces": 252,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1227,
        "actions": 14,
        "pickPieces": 38,
        "pickOrders": 0,
        "pickTimes": 38,
        "seedPieces": 37,
        "checkPieces": 535,
        "shipPieces": 535,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 535
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1134,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 514,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1016,
        "actions": 9,
        "pickPieces": 779,
        "pickOrders": 0,
        "pickTimes": 779,
        "seedPieces": 234,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 970,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 970,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 967,
        "actions": 10,
        "pickPieces": 391,
        "pickOrders": 0,
        "pickTimes": 391,
        "seedPieces": 0,
        "checkPieces": 251,
        "shipPieces": 253,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 254
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 935,
        "actions": 9,
        "pickPieces": 784,
        "pickOrders": 0,
        "pickTimes": 784,
        "seedPieces": 143,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 933,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 407,
        "unpackPieces": 526,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 887,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 887,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 865,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 536,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 829,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 433,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 761,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 761,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 756,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 756,
        "expressPrints": 0
      },
      {
        "name": "吕志善",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 735,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 735,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 706,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 706,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 635,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 635,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 583,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 528,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 483,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 480,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 403,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 40,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 203,
        "actions": 14,
        "pickPieces": 8,
        "pickOrders": 0,
        "pickTimes": 8,
        "seedPieces": 0,
        "checkPieces": 93,
        "shipPieces": 95,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 93
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 136,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 136,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 112,
        "actions": 9,
        "pickPieces": 39,
        "pickOrders": 0,
        "pickTimes": 39,
        "seedPieces": 28,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 17,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 83,
        "actions": 13,
        "pickPieces": 59,
        "pickOrders": 0,
        "pickTimes": 59,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 81,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 72,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 65,
        "actions": 11,
        "pickPieces": 61,
        "pickOrders": 0,
        "pickTimes": 61,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 49,
        "actions": 10,
        "pickPieces": 41,
        "pickOrders": 0,
        "pickTimes": 41,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 47,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 43,
        "actions": 5,
        "pickPieces": 38,
        "pickOrders": 0,
        "pickTimes": 38,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 25,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 9,
        "shelfPieces": 9,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 16,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 14,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 13,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 12,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 12,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 12
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 11,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 9,493 件，拣货 15,694 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,089 件，包裹 4,773 个。"
      },
      {
        "level": "info",
        "title": "宿仙梅 产出领先",
        "desc": "发货，累计 5,134 件/次，覆盖 15 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 4,659 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 3,915 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-20": {
    "key": "2026-07-20",
    "label": "7月20日",
    "sourceFile": "仓库人员工作统计_2026-07-20 00~2026-07-20 23_20260721091216_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-20 00:00 - 2026-07-20 23:00",
    "generatedAt": "2026-07-21 09:12:16",
    "totals": {
      "pickPieces": 13665,
      "pickTimes": 13541,
      "pickSkus": 8316,
      "pickOrders": 9948,
      "seedOrders": 949,
      "seedPieces": 2306,
      "checkTimes": 10527,
      "checkPieces": 12418,
      "weighTimes": 9887,
      "weighPieces": 11621,
      "shipTimes": 10618,
      "shipPieces": 12969,
      "inboundPieces": 5834,
      "purchaseReturnPieces": 106,
      "moveTimes": 2713,
      "movePieces": 6112,
      "returnTimes": 151,
      "returnPieces": 151,
      "shelfPieces": 14477,
      "shelfTimes": 12017,
      "packPieces": 534,
      "qcOrders": 11,
      "qcPieces": 79,
      "unpackParcels": 4802,
      "unpackPieces": 7639,
      "unpackOrders": 6166,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 403640,
      "auditConfirmOrders": 5423,
      "forceAuditOrders": 757,
      "smartAuditOrders": 397460,
      "expressPrints": 10599,
      "barcodePrints": 55,
      "barcodePrintTimes": 25,
      "tagPrints": 279,
      "tagPrintTimes": 44,
      "activeWorkers": 55,
      "totalWorkload": 75106,
      "roles": 17,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13665,
        "secondary": 13541,
        "unit": "件",
        "subUnit": "次",
        "progress": 94,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2306,
        "secondary": 949,
        "unit": "件",
        "subUnit": "单",
        "progress": 16,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 12418,
        "secondary": 10527,
        "unit": "件",
        "subUnit": "次",
        "progress": 86,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9887,
        "secondary": 11621,
        "unit": "次",
        "subUnit": "件",
        "progress": 68,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 12969,
        "secondary": 10618,
        "unit": "件",
        "subUnit": "次",
        "progress": 90,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5834,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 40,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14477,
        "secondary": 12017,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7639,
        "secondary": 4802,
        "unit": "件",
        "subUnit": "包",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 10933,
        "secondary": 10599,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 76,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 27556,
        "pickPieces": 2912,
        "shipPieces": 11828,
        "checkPieces": 11683,
        "unpackPieces": 0,
        "shelfPieces": 9
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 20189,
        "pickPieces": 7,
        "shipPieces": 293,
        "checkPieces": 288,
        "unpackPieces": 0,
        "shelfPieces": 14412
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 6797,
        "pickPieces": 5921,
        "shipPieces": 242,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 28
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5869,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 3900,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3839,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3096,
        "pickPieces": 2480,
        "shipPieces": 142,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 3038,
        "pickPieces": 771,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2042,
        "shelfPieces": 1
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2366,
        "pickPieces": 1490,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1434,
        "pickPieces": 0,
        "shipPieces": 447,
        "checkPieces": 447,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "（临平仓）",
        "workers": 1,
        "workload": 574,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 574,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 121,
        "pickPieces": 84,
        "shipPieces": 17,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 79,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 57,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "品控",
        "workers": 1,
        "workload": 16,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 12,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 12
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 2,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 6228,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3025,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5869,
        "actions": 10,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5761,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 16
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5538,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2769,
        "shipPieces": 2769,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2359
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4212,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2106,
        "shipPieces": 2106,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1937
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4116,
        "actions": 13,
        "pickPieces": 108,
        "pickOrders": 60,
        "pickTimes": 108,
        "seedPieces": 60,
        "checkPieces": 1974,
        "shipPieces": 1974,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1707
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4100,
        "actions": 19,
        "pickPieces": 59,
        "pickOrders": 14,
        "pickTimes": 59,
        "seedPieces": 59,
        "checkPieces": 1963,
        "shipPieces": 1963,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1698
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3477,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3434,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3059,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1975,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2779,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2096,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2343,
        "actions": 12,
        "pickPieces": 2144,
        "pickOrders": 1755,
        "pickTimes": 2111,
        "seedPieces": 35,
        "checkPieces": 0,
        "shipPieces": 81,
        "inboundPieces": 0,
        "shelfPieces": 16,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2042,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1021,
        "shipPieces": 1021,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 823
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1955,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 953,
        "shipPieces": 953,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 821
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1895,
        "actions": 10,
        "pickPieces": 1606,
        "pickOrders": 1155,
        "pickTimes": 1606,
        "seedPieces": 116,
        "checkPieces": 0,
        "shipPieces": 66,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1728,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1682,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1617,
        "actions": 12,
        "pickPieces": 1330,
        "pickOrders": 1064,
        "pickTimes": 1330,
        "seedPieces": 197,
        "checkPieces": 0,
        "shipPieces": 57,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1558,
        "actions": 10,
        "pickPieces": 1214,
        "pickOrders": 936,
        "pickTimes": 1214,
        "seedPieces": 255,
        "checkPieces": 0,
        "shipPieces": 65,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1513,
        "actions": 10,
        "pickPieces": 1402,
        "pickOrders": 1086,
        "pickTimes": 1402,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 51,
        "inboundPieces": 0,
        "shelfPieces": 10,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1479,
        "actions": 12,
        "pickPieces": 1150,
        "pickOrders": 771,
        "pickTimes": 1104,
        "seedPieces": 169,
        "checkPieces": 0,
        "shipPieces": 85,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1434,
        "actions": 14,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 447,
        "shipPieces": 447,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 368
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1334,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 667,
        "shipPieces": 667,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 521
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1139,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1131,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1120,
        "actions": 12,
        "pickPieces": 884,
        "pickOrders": 692,
        "pickTimes": 884,
        "seedPieces": 133,
        "checkPieces": 0,
        "shipPieces": 41,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1063,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1062,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1046,
        "actions": 12,
        "pickPieces": 769,
        "pickOrders": 594,
        "pickTimes": 769,
        "seedPieces": 178,
        "checkPieces": 0,
        "shipPieces": 44,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1027,
        "actions": 8,
        "pickPieces": 665,
        "pickOrders": 357,
        "pickTimes": 665,
        "seedPieces": 307,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 952,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 952,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 937,
        "actions": 10,
        "pickPieces": 771,
        "pickOrders": 527,
        "pickTimes": 771,
        "seedPieces": 142,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 919,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 858,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 892,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 833,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 879,
        "actions": 8,
        "pickPieces": 601,
        "pickOrders": 398,
        "pickTimes": 601,
        "seedPieces": 239,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 878,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 878,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 709,
        "actions": 20,
        "pickPieces": 7,
        "pickOrders": 3,
        "pickTimes": 7,
        "seedPieces": 0,
        "checkPieces": 288,
        "shipPieces": 293,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 167
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 695,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 695,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 594,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 594,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 574,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 574,
        "expressPrints": 0
      },
      {
        "name": "吕志善",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 557,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 557,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 534,
        "actions": 10,
        "pickPieces": 275,
        "pickOrders": 168,
        "pickTimes": 275,
        "seedPieces": 132,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 503,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 503,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 460,
        "actions": 8,
        "pickPieces": 224,
        "pickOrders": 106,
        "pickTimes": 224,
        "seedPieces": 170,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 434,
        "actions": 13,
        "pickPieces": 84,
        "pickOrders": 30,
        "pickTimes": 39,
        "seedPieces": 36,
        "checkPieces": 157,
        "shipPieces": 157,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 101
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 390,
        "actions": 11,
        "pickPieces": 166,
        "pickOrders": 74,
        "pickTimes": 166,
        "seedPieces": 78,
        "checkPieces": 73,
        "shipPieces": 73,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 51
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 122,
        "actions": 13,
        "pickPieces": 69,
        "pickOrders": 69,
        "pickTimes": 69,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 94,
        "actions": 12,
        "pickPieces": 53,
        "pickOrders": 9,
        "pickTimes": 53,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 39,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 93,
        "actions": 16,
        "pickPieces": 60,
        "pickOrders": 56,
        "pickTimes": 60,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 16,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 14
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 79,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 42,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 42,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 28,
        "actions": 13,
        "pickPieces": 24,
        "pickOrders": 24,
        "pickTimes": 24,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "张拼",
        "role": "品控",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 16,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 15,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 15,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 11,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 11,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 8,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 8,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 4,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 12,969 件，与拣货 13,665 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,639 件，包裹 4,802 个。"
      },
      {
        "level": "info",
        "title": "裴永俊 产出领先",
        "desc": "上架，累计 6,228 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,869 件/次，覆盖 10 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 5,538 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-19": {
    "key": "2026-07-19",
    "label": "7月19日",
    "sourceFile": "仓库人员工作统计_2026-07-19 00~2026-07-19 23_20260719220323_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-19 00:00 - 2026-07-19 23:00",
    "generatedAt": "2026-07-19 22:03:23",
    "totals": {
      "pickPieces": 11304,
      "pickTimes": 11245,
      "pickSkus": 7582,
      "pickOrders": 0,
      "seedOrders": 952,
      "seedPieces": 2288,
      "checkTimes": 10146,
      "checkPieces": 10264,
      "weighTimes": 9479,
      "weighPieces": 9479,
      "shipTimes": 10255,
      "shipPieces": 10255,
      "inboundPieces": 5407,
      "purchaseReturnPieces": 236,
      "moveTimes": 1012,
      "movePieces": 2635,
      "returnTimes": 86,
      "returnPieces": 86,
      "shelfPieces": 13471,
      "shelfTimes": 11191,
      "packPieces": 489,
      "qcOrders": 27,
      "qcPieces": 130,
      "unpackParcels": 4857,
      "unpackPieces": 6684,
      "unpackOrders": 6282,
      "stocktakeTimes": 6,
      "stocktakePieces": 8,
      "auditOrders": 254692,
      "auditConfirmOrders": 10336,
      "forceAuditOrders": 1315,
      "smartAuditOrders": 243041,
      "expressPrints": 10270,
      "barcodePrints": 10,
      "barcodePrintTimes": 3,
      "tagPrints": 270,
      "tagPrintTimes": 119,
      "activeWorkers": 53,
      "totalWorkload": 62285,
      "roles": 16,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 11304,
        "secondary": 11245,
        "unit": "件",
        "subUnit": "次",
        "progress": 84,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2288,
        "secondary": 952,
        "unit": "件",
        "subUnit": "单",
        "progress": 17,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 10264,
        "secondary": 10146,
        "unit": "件",
        "subUnit": "次",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9479,
        "secondary": 9479,
        "unit": "次",
        "subUnit": "件",
        "progress": 70,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 10255,
        "secondary": 10255,
        "unit": "件",
        "subUnit": "次",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5407,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 40,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13471,
        "secondary": 11191,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 6684,
        "secondary": 4857,
        "unit": "件",
        "subUnit": "包",
        "progress": 50,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 10550,
        "secondary": 10270,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 78,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 24032,
        "pickPieces": 2477,
        "shipPieces": 9863,
        "checkPieces": 9958,
        "unpackPieces": 0,
        "shelfPieces": 1113
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 14000,
        "pickPieces": 7,
        "shipPieces": 19,
        "checkPieces": 16,
        "unpackPieces": 0,
        "shelfPieces": 11317
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 6167,
        "pickPieces": 5374,
        "shipPieces": 26,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 22
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5508,
        "pickPieces": 0,
        "shipPieces": 15,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 2919,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2919,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2889,
        "pickPieces": 2221,
        "shipPieces": 13,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "拆包",
        "workers": 4,
        "workload": 2470,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2164,
        "shelfPieces": 306
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2152,
        "pickPieces": 1152,
        "shipPieces": 4,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 606
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1032,
        "pickPieces": 0,
        "shipPieces": 288,
        "checkPieces": 290,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "（临平仓）",
        "workers": 1,
        "workload": 629,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 629,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 147,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 130,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 101,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 97
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 100,
        "pickPieces": 73,
        "shipPieces": 21,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 6,
        "pickPieces": 0,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 3,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5508,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 15,
        "inboundPieces": 5257,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 16
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4206,
        "actions": 11,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1971,
        "shipPieces": 1971,
        "inboundPieces": 0,
        "shelfPieces": 263,
        "unpackPieces": 0,
        "expressPrints": 2020
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3181,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1591,
        "shipPieces": 1590,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1591
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2975,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1513,
        "shipPieces": 1462,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1462
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2929,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1758,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2747,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2442,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2581,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2460,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2402,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1703,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2207,
        "actions": 11,
        "pickPieces": 2094,
        "pickOrders": 0,
        "pickTimes": 2035,
        "seedPieces": 99,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2024,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1016,
        "shipPieces": 1008,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1011
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1979,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 990,
        "shipPieces": 989,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 989
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1927,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1650,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1885,
        "actions": 11,
        "pickPieces": 1322,
        "pickOrders": 0,
        "pickTimes": 1322,
        "seedPieces": 312,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 245,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1682,
        "actions": 8,
        "pickPieces": 56,
        "pickOrders": 0,
        "pickTimes": 56,
        "seedPieces": 0,
        "checkPieces": 829,
        "shipPieces": 797,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 802
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1613,
        "actions": 7,
        "pickPieces": 1492,
        "pickOrders": 0,
        "pickTimes": 1492,
        "seedPieces": 115,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1565,
        "actions": 11,
        "pickPieces": 1169,
        "pickOrders": 0,
        "pickTimes": 1169,
        "seedPieces": 315,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1536,
        "actions": 9,
        "pickPieces": 1242,
        "pickOrders": 0,
        "pickTimes": 1242,
        "seedPieces": 268,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 19,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1422,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 715,
        "shipPieces": 707,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 707
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1416,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 708,
        "shipPieces": 708,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 708
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1338,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 306,
        "unpackPieces": 1032,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1324,
        "actions": 11,
        "pickPieces": 1052,
        "pickOrders": 0,
        "pickTimes": 1052,
        "seedPieces": 259,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1286,
        "actions": 8,
        "pickPieces": 104,
        "pickOrders": 0,
        "pickTimes": 104,
        "seedPieces": 0,
        "checkPieces": 597,
        "shipPieces": 585,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 587
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1113,
        "actions": 11,
        "pickPieces": 853,
        "pickOrders": 0,
        "pickTimes": 853,
        "seedPieces": 236,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1032,
        "actions": 17,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 290,
        "shipPieces": 288,
        "inboundPieces": 1,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 300
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 926,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 915,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 852,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 852,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 849,
        "actions": 5,
        "pickPieces": 618,
        "pickOrders": 0,
        "pickTimes": 618,
        "seedPieces": 231,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 811,
        "actions": 9,
        "pickPieces": 546,
        "pickOrders": 0,
        "pickTimes": 546,
        "seedPieces": 260,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 803,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 803,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 705,
        "actions": 11,
        "pickPieces": 62,
        "pickOrders": 0,
        "pickTimes": 62,
        "seedPieces": 38,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 601,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 670,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 670,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 668,
        "actions": 7,
        "pickPieces": 58,
        "pickOrders": 0,
        "pickTimes": 58,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 606,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 635,
        "actions": 7,
        "pickPieces": 476,
        "pickOrders": 0,
        "pickTimes": 476,
        "seedPieces": 155,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 629,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 629,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 594,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 594,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 586,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 586,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 545,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 545,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 286,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 286,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 116,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 116,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 102,
        "actions": 16,
        "pickPieces": 7,
        "pickOrders": 0,
        "pickTimes": 7,
        "seedPieces": 0,
        "checkPieces": 16,
        "shipPieces": 19,
        "inboundPieces": 1,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 16
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 101,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 97,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 100,
        "actions": 10,
        "pickPieces": 73,
        "pickOrders": 0,
        "pickTimes": 73,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 21,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 21
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 100,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 99,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 98,
        "actions": 13,
        "pickPieces": 80,
        "pickOrders": 0,
        "pickTimes": 80,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 78,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 56,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 28,
        "shipPieces": 28,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 28
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 52,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 31,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 31,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 3,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 1,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1,
        "expressPrints": 0
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 10,255 件，与拣货 11,304 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 6,684 件，包裹 4,857 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,508 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "魏子晴 产出领先",
        "desc": "发货，累计 4,206 件/次，覆盖 11 类动作。"
      },
      {
        "level": "info",
        "title": "赵银 产出领先",
        "desc": "发货，累计 3,181 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-18": {
    "key": "2026-07-18",
    "label": "7月18日",
    "sourceFile": "仓库人员工作统计_2026-07-18 00~2026-07-18 23_20260719152104_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-18 00:00 - 2026-07-18 23:00",
    "generatedAt": "2026-07-19 15:21:04",
    "totals": {
      "pickPieces": 24338,
      "pickTimes": 24253,
      "pickSkus": 11152,
      "pickOrders": 18530,
      "seedOrders": 1730,
      "seedPieces": 5822,
      "checkTimes": 18574,
      "checkPieces": 23851,
      "weighTimes": 17315,
      "weighPieces": 22351,
      "shipTimes": 18779,
      "shipPieces": 24439,
      "inboundPieces": 8825,
      "purchaseReturnPieces": 219,
      "moveTimes": 1565,
      "movePieces": 3076,
      "returnTimes": 109,
      "returnPieces": 109,
      "shelfPieces": 16234,
      "shelfTimes": 10836,
      "packPieces": 450,
      "qcOrders": 18,
      "qcPieces": 152,
      "unpackParcels": 5092,
      "unpackPieces": 7932,
      "unpackOrders": 6548,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 230922,
      "auditConfirmOrders": 17460,
      "forceAuditOrders": 467,
      "smartAuditOrders": 212995,
      "expressPrints": 18902,
      "barcodePrints": 422,
      "barcodePrintTimes": 4,
      "tagPrints": 1505,
      "tagPrintTimes": 119,
      "activeWorkers": 55,
      "totalWorkload": 113967,
      "roles": 18,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 24338,
        "secondary": 24253,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 5822,
        "secondary": 1730,
        "unit": "件",
        "subUnit": "单",
        "progress": 24,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 23851,
        "secondary": 18574,
        "unit": "件",
        "subUnit": "次",
        "progress": 98,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 17315,
        "secondary": 22351,
        "unit": "次",
        "subUnit": "件",
        "progress": 71,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 24439,
        "secondary": 18779,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 8825,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 36,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 16234,
        "secondary": 10836,
        "unit": "件",
        "subUnit": "次",
        "progress": 66,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 7932,
        "secondary": 5092,
        "unit": "件",
        "subUnit": "包",
        "progress": 32,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 20829,
        "secondary": 18902,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 85,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 16,
        "workload": 54048,
        "pickPieces": 6949,
        "shipPieces": 22726,
        "checkPieces": 22401,
        "unpackPieces": 0,
        "shelfPieces": 17
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 19704,
        "pickPieces": 31,
        "shipPieces": 257,
        "checkPieces": 226,
        "unpackPieces": 0,
        "shelfPieces": 16120
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 9032,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 76
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 7985,
        "pickPieces": 6956,
        "shipPieces": 106,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 9
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 5747,
        "pickPieces": 2491,
        "shipPieces": 41,
        "checkPieces": 0,
        "unpackPieces": 2663,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 5545,
        "pickPieces": 4492,
        "shipPieces": 73,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "售后拆包",
        "workers": 5,
        "workload": 4606,
        "pickPieces": 152,
        "shipPieces": 506,
        "checkPieces": 506,
        "unpackPieces": 3388,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 3230,
        "pickPieces": 2154,
        "shipPieces": 11,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1885,
        "pickPieces": 0,
        "shipPieces": 715,
        "checkPieces": 715,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1722,
        "pickPieces": 761,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 745,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 152,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 118,
        "pickPieces": 92,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 83,
        "pickPieces": 30,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "品控",
        "workers": 1,
        "workload": 56,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 36,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 12,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "仓库主管",
        "workers": 1,
        "workload": 6,
        "pickPieces": 0,
        "shipPieces": 3,
        "checkPieces": 3,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 9032,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 8724,
        "shelfPieces": 76,
        "unpackPieces": 0,
        "expressPrints": 17
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 8488,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 4244,
        "shipPieces": 4244,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3306
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 7772,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 3886,
        "shipPieces": 3886,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3340
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5718,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2859,
        "shipPieces": 2859,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1978
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 5213,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 4842,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4850,
        "actions": 11,
        "pickPieces": 154,
        "pickOrders": 110,
        "pickTimes": 154,
        "seedPieces": 39,
        "checkPieces": 2328,
        "shipPieces": 2329,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1927
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4646,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2323,
        "shipPieces": 2323,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1825
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4185,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3510,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4138,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2834,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4067,
        "actions": 13,
        "pickPieces": 141,
        "pickOrders": 39,
        "pickTimes": 141,
        "seedPieces": 118,
        "checkPieces": 1904,
        "shipPieces": 1904,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1685
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3298,
        "actions": 11,
        "pickPieces": 49,
        "pickOrders": 48,
        "pickTimes": 49,
        "seedPieces": 0,
        "checkPieces": 1624,
        "shipPieces": 1624,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1438
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 3001,
        "actions": 12,
        "pickPieces": 2463,
        "pickOrders": 1949,
        "pickTimes": 2463,
        "seedPieces": 453,
        "checkPieces": 0,
        "shipPieces": 46,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2988,
        "actions": 10,
        "pickPieces": 2848,
        "pickOrders": 2413,
        "pickTimes": 2838,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 37,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 2976,
        "actions": 12,
        "pickPieces": 2343,
        "pickOrders": 1738,
        "pickTimes": 2343,
        "seedPieces": 599,
        "checkPieces": 0,
        "shipPieces": 32,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2966,
        "actions": 12,
        "pickPieces": 2365,
        "pickOrders": 1811,
        "pickTimes": 2365,
        "seedPieces": 512,
        "checkPieces": 0,
        "shipPieces": 47,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2870,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1435,
        "shipPieces": 1435,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1129
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2772,
        "actions": 10,
        "pickPieces": 2304,
        "pickOrders": 1902,
        "pickTimes": 2304,
        "seedPieces": 416,
        "checkPieces": 0,
        "shipPieces": 41,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2645,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2089,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 2569,
        "actions": 10,
        "pickPieces": 2149,
        "pickOrders": 1736,
        "pickTimes": 2149,
        "seedPieces": 374,
        "checkPieces": 0,
        "shipPieces": 41,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2356,
        "actions": 9,
        "pickPieces": 50,
        "pickOrders": 50,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 1153,
        "shipPieces": 1153,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 844
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2242,
        "actions": 10,
        "pickPieces": 1864,
        "pickOrders": 1563,
        "pickTimes": 1864,
        "seedPieces": 337,
        "checkPieces": 0,
        "shipPieces": 39,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1996,
        "actions": 10,
        "pickPieces": 1645,
        "pickOrders": 1370,
        "pickTimes": 1645,
        "seedPieces": 327,
        "checkPieces": 0,
        "shipPieces": 23,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1949,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 506,
        "shipPieces": 506,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 937,
        "expressPrints": 196
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1909,
        "actions": 10,
        "pickPieces": 1148,
        "pickOrders": 584,
        "pickTimes": 1148,
        "seedPieces": 730,
        "checkPieces": 0,
        "shipPieces": 11,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1885,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 715,
        "shipPieces": 715,
        "inboundPieces": 4,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 432
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1521,
        "actions": 8,
        "pickPieces": 1114,
        "pickOrders": 742,
        "pickTimes": 1114,
        "seedPieces": 361,
        "checkPieces": 0,
        "shipPieces": 46,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1476,
        "actions": 9,
        "pickPieces": 187,
        "pickOrders": 92,
        "pickTimes": 187,
        "seedPieces": 125,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1164,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1422,
        "actions": 13,
        "pickPieces": 793,
        "pickOrders": 364,
        "pickTimes": 793,
        "seedPieces": 471,
        "checkPieces": 50,
        "shipPieces": 106,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 50
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1321,
        "actions": 6,
        "pickPieces": 1006,
        "pickOrders": 797,
        "pickTimes": 1006,
        "seedPieces": 315,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工6",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 977,
        "actions": 8,
        "pickPieces": 761,
        "pickOrders": 609,
        "pickTimes": 761,
        "seedPieces": 214,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 926,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 457,
        "shipPieces": 457,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 315
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 889,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 887,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 862,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 862,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 839,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 830,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 829,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 829,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 761,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 761,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 745,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 745,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 736,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 736,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 715,
        "actions": 9,
        "pickPieces": 152,
        "pickOrders": 45,
        "pickTimes": 152,
        "seedPieces": 54,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 509,
        "expressPrints": 0
      },
      {
        "name": "吕志善",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 688,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 688,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 619,
        "actions": 15,
        "pickPieces": 31,
        "pickOrders": 7,
        "pickTimes": 31,
        "seedPieces": 103,
        "checkPieces": 226,
        "shipPieces": 257,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 139
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 617,
        "actions": 13,
        "pickPieces": 311,
        "pickOrders": 218,
        "pickTimes": 236,
        "seedPieces": 30,
        "checkPieces": 137,
        "shipPieces": 137,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 137
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 392,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 392,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 347,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 297,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 289,
        "actions": 16,
        "pickPieces": 108,
        "pickOrders": 106,
        "pickTimes": 108,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 137,
        "inboundPieces": 0,
        "shelfPieces": 10,
        "unpackPieces": 0,
        "expressPrints": 121
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 87,
        "actions": 16,
        "pickPieces": 64,
        "pickOrders": 51,
        "pickTimes": 64,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 83,
        "actions": 8,
        "pickPieces": 30,
        "pickOrders": 15,
        "pickTimes": 30,
        "seedPieces": 30,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 72,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张拼",
        "role": "品控",
        "warehouse": "临平仓",
        "workload": 56,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 56,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "安佳佳",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 36,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 36,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 31,
        "actions": 10,
        "pickPieces": 28,
        "pickOrders": 27,
        "pickTimes": 28,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 12,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡庆",
        "role": "仓库主管",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 3,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 3
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 24,439 件，与拣货 24,338 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 7,932 件，包裹 5,092 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 9,032 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 8,488 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 7,772 件/次，覆盖 5 类动作。"
      }
    ]
  },
  "2026-07-17": {
    "key": "2026-07-17",
    "label": "7月17日",
    "sourceFile": "仓库人员工作统计_2026-07-17 00~2026-07-17 23_20260717225609_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-17 00:00 - 2026-07-17 23:00",
    "generatedAt": "2026-07-17 22:56:09",
    "totals": {
      "pickPieces": 9194,
      "pickTimes": 9056,
      "pickSkus": 6074,
      "pickOrders": 0,
      "seedOrders": 592,
      "seedPieces": 1417,
      "checkTimes": 7822,
      "checkPieces": 7961,
      "weighTimes": 7037,
      "weighPieces": 7037,
      "shipTimes": 7912,
      "shipPieces": 7912,
      "inboundPieces": 6678,
      "purchaseReturnPieces": 136,
      "moveTimes": 1288,
      "movePieces": 5038,
      "returnTimes": 95,
      "returnPieces": 95,
      "shelfPieces": 14098,
      "shelfTimes": 10485,
      "packPieces": 470,
      "qcOrders": 43,
      "qcPieces": 158,
      "unpackParcels": 5365,
      "unpackPieces": 8590,
      "unpackOrders": 7105,
      "stocktakeTimes": 44,
      "stocktakePieces": 46,
      "auditOrders": 119387,
      "auditConfirmOrders": 3930,
      "forceAuditOrders": 910,
      "smartAuditOrders": 114547,
      "expressPrints": 7895,
      "barcodePrints": 213,
      "barcodePrintTimes": 4,
      "tagPrints": 1772,
      "tagPrintTimes": 136,
      "activeWorkers": 50,
      "totalWorkload": 61793,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 9194,
        "secondary": 9056,
        "unit": "件",
        "subUnit": "次",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1417,
        "secondary": 592,
        "unit": "件",
        "subUnit": "单",
        "progress": 10,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 7961,
        "secondary": 7822,
        "unit": "件",
        "subUnit": "次",
        "progress": 56,
        "status": "关注"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 7037,
        "secondary": 7037,
        "unit": "次",
        "subUnit": "件",
        "progress": 50,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 7912,
        "secondary": 7912,
        "unit": "件",
        "subUnit": "次",
        "progress": 56,
        "status": "关注"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 6678,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 47,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14098,
        "secondary": 10485,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8590,
        "secondary": 5365,
        "unit": "件",
        "subUnit": "包",
        "progress": 61,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 9880,
        "secondary": 7895,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 70,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "上架",
        "workers": 9,
        "workload": 18867,
        "pickPieces": 0,
        "shipPieces": 25,
        "checkPieces": 25,
        "unpackPieces": 0,
        "shelfPieces": 13850
      },
      {
        "role": "发货",
        "workers": 13,
        "workload": 17529,
        "pickPieces": 2078,
        "shipPieces": 7470,
        "checkPieces": 7573,
        "unpackPieces": 0,
        "shelfPieces": 11
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 6646,
        "pickPieces": 0,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 5697,
        "pickPieces": 4962,
        "shipPieces": 22,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5167,
        "pickPieces": 912,
        "shipPieces": 4,
        "checkPieces": 0,
        "unpackPieces": 4019,
        "shelfPieces": 1
      },
      {
        "role": "售后拆包",
        "workers": 3,
        "workload": 2861,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2861,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1710,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1710,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1336,
        "pickPieces": 1123,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1299,
        "pickPieces": 0,
        "shipPieces": 354,
        "checkPieces": 363,
        "unpackPieces": 0,
        "shelfPieces": 55
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 160,
        "pickPieces": 119,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 158,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 2,
        "workload": 122,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 118,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 116
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 107,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 56
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 16,
        "pickPieces": 0,
        "shipPieces": 16,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 6659,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3950,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 6646,
        "actions": 11,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 6499,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 10
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4916,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2479,
        "shipPieces": 2437,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2440
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4193,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2993,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3781,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1890,
        "shipPieces": 1891,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1891
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3355,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2737,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2550,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1309,
        "shipPieces": 1241,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1244
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2098,
        "actions": 12,
        "pickPieces": 74,
        "pickOrders": 0,
        "pickTimes": 74,
        "seedPieces": 73,
        "checkPieces": 977,
        "shipPieces": 974,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 974
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1803,
        "actions": 9,
        "pickPieces": 1609,
        "pickOrders": 0,
        "pickTimes": 1471,
        "seedPieces": 187,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1605,
        "actions": 9,
        "pickPieces": 1410,
        "pickOrders": 0,
        "pickTimes": 1410,
        "seedPieces": 187,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1384,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1384,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1378,
        "actions": 11,
        "pickPieces": 1188,
        "pickOrders": 0,
        "pickTimes": 1188,
        "seedPieces": 128,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1336,
        "actions": 11,
        "pickPieces": 1123,
        "pickOrders": 0,
        "pickTimes": 1123,
        "seedPieces": 180,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1299,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 363,
        "shipPieces": 354,
        "inboundPieces": 57,
        "shelfPieces": 55,
        "unpackPieces": 0,
        "expressPrints": 361
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1234,
        "actions": 11,
        "pickPieces": 1187,
        "pickOrders": 0,
        "pickTimes": 1187,
        "seedPieces": 37,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1184,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 596,
        "shipPieces": 588,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 597
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1174,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1130,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1148,
        "actions": 9,
        "pickPieces": 912,
        "pickOrders": 0,
        "pickTimes": 912,
        "seedPieces": 231,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1077,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 708,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1071,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1067,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1055,
        "actions": 9,
        "pickPieces": 756,
        "pickOrders": 0,
        "pickTimes": 756,
        "seedPieces": 294,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1025,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1025,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 977,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 977,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 937,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 937,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 899,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 899,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 885,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 885,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 860,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 851,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 853,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 853,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 825,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 825,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 803,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 803,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 643,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 322,
        "shipPieces": 319,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 319
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 579,
        "actions": 11,
        "pickPieces": 474,
        "pickOrders": 0,
        "pickTimes": 474,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 418,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 413,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 223,
        "actions": 7,
        "pickPieces": 221,
        "pickOrders": 0,
        "pickTimes": 221,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 141,
        "actions": 15,
        "pickPieces": 113,
        "pickOrders": 0,
        "pickTimes": 113,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 118,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 116,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 113,
        "actions": 15,
        "pickPieces": 81,
        "pickOrders": 0,
        "pickTimes": 81,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 112,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 112,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 107,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 56,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 88,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 70,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 60,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 25,
        "shipPieces": 25,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 27
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 47,
        "actions": 9,
        "pickPieces": 38,
        "pickOrders": 0,
        "pickTimes": 38,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 32,
        "actions": 9,
        "pickPieces": 8,
        "pickOrders": 0,
        "pickTimes": 8,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 12,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 12,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 13
      },
      {
        "name": "裴子龙",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 10,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 4,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 3
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 7,912 件，与拣货 9,194 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,590 件，包裹 5,365 个。"
      },
      {
        "level": "info",
        "title": "郭宝亮 产出领先",
        "desc": "上架，累计 6,659 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 6,646 件/次，覆盖 11 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 4,916 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-16": {
    "key": "2026-07-16",
    "label": "7月16日",
    "sourceFile": "仓库人员工作统计_2026-07-16 00~2026-07-16 23_20260717091850_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-16 00:00 - 2026-07-16 23:00",
    "generatedAt": "2026-07-17 09:18:50",
    "totals": {
      "pickPieces": 10144,
      "pickTimes": 10144,
      "pickSkus": 5539,
      "pickOrders": 6479,
      "seedOrders": 635,
      "seedPieces": 1453,
      "checkTimes": 7229,
      "checkPieces": 8283,
      "weighTimes": 6341,
      "weighPieces": 7171,
      "shipTimes": 7348,
      "shipPieces": 8833,
      "inboundPieces": 4019,
      "purchaseReturnPieces": 227,
      "moveTimes": 2351,
      "movePieces": 4059,
      "returnTimes": 129,
      "returnPieces": 129,
      "shelfPieces": 14135,
      "shelfTimes": 10245,
      "packPieces": 547,
      "qcOrders": 14,
      "qcPieces": 145,
      "unpackParcels": 5808,
      "unpackPieces": 8713,
      "unpackOrders": 7690,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 150818,
      "auditConfirmOrders": 4784,
      "forceAuditOrders": 909,
      "smartAuditOrders": 145125,
      "expressPrints": 7308,
      "barcodePrints": 8,
      "barcodePrintTimes": 5,
      "tagPrints": 5262,
      "tagPrintTimes": 229,
      "activeWorkers": 55,
      "totalWorkload": 60687,
      "roles": 17,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 10144,
        "secondary": 10144,
        "unit": "件",
        "subUnit": "次",
        "progress": 72,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1453,
        "secondary": 635,
        "unit": "件",
        "subUnit": "单",
        "progress": 10,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 8283,
        "secondary": 7229,
        "unit": "件",
        "subUnit": "次",
        "progress": 59,
        "status": "关注"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 6341,
        "secondary": 7171,
        "unit": "次",
        "subUnit": "件",
        "progress": 45,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 8833,
        "secondary": 7348,
        "unit": "件",
        "subUnit": "次",
        "progress": 62,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4019,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 28,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14135,
        "secondary": 10245,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8713,
        "secondary": 5808,
        "unit": "件",
        "subUnit": "包",
        "progress": 62,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12578,
        "secondary": 7308,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 89,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 16,
        "workload": 21663,
        "pickPieces": 3585,
        "shipPieces": 8143,
        "checkPieces": 7981,
        "unpackPieces": 381,
        "shelfPieces": 536
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 14561,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11590
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5396,
        "pickPieces": 953,
        "shipPieces": 116,
        "checkPieces": 0,
        "unpackPieces": 4186,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 4356,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 3423,
        "pickPieces": 1335,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1829
      },
      {
        "role": "拣货",
        "workers": 2,
        "workload": 2667,
        "pickPieces": 2111,
        "shipPieces": 173,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2386,
        "pickPieces": 2039,
        "shipPieces": 96,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "售后拆包",
        "workers": 3,
        "workload": 2261,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2261,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 3,
        "workload": 1885,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1885,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1158,
        "pickPieces": 0,
        "shipPieces": 302,
        "checkPieces": 302,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 553,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 145
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 147,
        "pickPieces": 121,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 145,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 48,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11
      },
      {
        "role": "自营返修专员",
        "workers": 1,
        "workload": 36,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 1,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 1,
        "pickPieces": 0,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 4356,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 3940,
        "shelfPieces": 11,
        "unpackPieces": 0,
        "expressPrints": 22
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4098,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2756,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4084,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3621,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3664,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2780,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3534,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1767,
        "shipPieces": 1767,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1513
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3388,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1694,
        "shipPieces": 1694,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1580
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1936,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 968,
        "shipPieces": 968,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 722
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1899,
        "actions": 14,
        "pickPieces": 126,
        "pickOrders": 86,
        "pickTimes": 126,
        "seedPieces": 65,
        "checkPieces": 854,
        "shipPieces": 854,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 682
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1752,
        "actions": 14,
        "pickPieces": 229,
        "pickOrders": 139,
        "pickTimes": 229,
        "seedPieces": 109,
        "checkPieces": 707,
        "shipPieces": 707,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 658
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1505,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 752,
        "shipPieces": 752,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 705
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1496,
        "actions": 12,
        "pickPieces": 1142,
        "pickOrders": 860,
        "pickTimes": 1142,
        "seedPieces": 186,
        "checkPieces": 0,
        "shipPieces": 93,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1380,
        "actions": 9,
        "pickPieces": 28,
        "pickOrders": 27,
        "pickTimes": 28,
        "seedPieces": 0,
        "checkPieces": 676,
        "shipPieces": 676,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 650
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1292,
        "actions": 7,
        "pickPieces": 517,
        "pickOrders": 0,
        "pickTimes": 517,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 517,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1274,
        "actions": 10,
        "pickPieces": 1120,
        "pickOrders": 920,
        "pickTimes": 1120,
        "seedPieces": 96,
        "checkPieces": 0,
        "shipPieces": 32,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1216,
        "actions": 7,
        "pickPieces": 486,
        "pickOrders": 0,
        "pickTimes": 486,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 514,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1210,
        "actions": 12,
        "pickPieces": 953,
        "pickOrders": 725,
        "pickTimes": 953,
        "seedPieces": 139,
        "checkPieces": 0,
        "shipPieces": 116,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1187,
        "actions": 10,
        "pickPieces": 1078,
        "pickOrders": 969,
        "pickTimes": 1078,
        "seedPieces": 32,
        "checkPieces": 0,
        "shipPieces": 76,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1178,
        "actions": 11,
        "pickPieces": 652,
        "pickOrders": 437,
        "pickTimes": 652,
        "seedPieces": 229,
        "checkPieces": 110,
        "shipPieces": 187,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 76
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1171,
        "actions": 8,
        "pickPieces": 969,
        "pickOrders": 814,
        "pickTimes": 969,
        "seedPieces": 122,
        "checkPieces": 0,
        "shipPieces": 80,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1158,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 302,
        "shipPieces": 302,
        "inboundPieces": 6,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 252
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1139,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1139,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1133,
        "actions": 5,
        "pickPieces": 566,
        "pickOrders": 0,
        "pickTimes": 566,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 567,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1112,
        "actions": 12,
        "pickPieces": 919,
        "pickOrders": 733,
        "pickTimes": 919,
        "seedPieces": 121,
        "checkPieces": 0,
        "shipPieces": 64,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 998,
        "actions": 7,
        "pickPieces": 252,
        "pickOrders": 0,
        "pickTimes": 252,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 745,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 924,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 924,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 913,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 893,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 906,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 453,
        "shipPieces": 453,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 428
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 882,
        "actions": 10,
        "pickPieces": 688,
        "pickOrders": 471,
        "pickTimes": 688,
        "seedPieces": 181,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 865,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 865,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 833,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 833,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 811,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 811,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 801,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 801,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 791,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 788,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 768,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 738,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 748,
        "actions": 9,
        "pickPieces": 194,
        "pickOrders": 91,
        "pickTimes": 194,
        "seedPieces": 173,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 381,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 725,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 725,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 721,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 721,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 591,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 591,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 563,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 563,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 496,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 104,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工8",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 359,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 359,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 242,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 13,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 120,
        "actions": 15,
        "pickPieces": 96,
        "pickOrders": 88,
        "pickTimes": 96,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 9,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 98,
        "actions": 16,
        "pickPieces": 81,
        "pickOrders": 78,
        "pickTimes": 81,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 78,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 67,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 57,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 41,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 49,
        "actions": 14,
        "pickPieces": 40,
        "pickOrders": 33,
        "pickTimes": 40,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 48,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 37,
        "shelfPieces": 11,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尹嫦娥",
        "role": "自营返修专员",
        "warehouse": "临平仓",
        "workload": 36,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 36,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 12,
        "pickPieces": 8,
        "pickOrders": 8,
        "pickTimes": 8,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 8
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 8,833 件，与拣货 10,144 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,713 件，包裹 5,808 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 4,356 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "吴家兴 产出领先",
        "desc": "上架，累计 4,098 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "魏浩杰 产出领先",
        "desc": "上架，累计 4,084 件/次，覆盖 4 类动作。"
      }
    ]
  },
  "2026-07-15": {
    "key": "2026-07-15",
    "label": "7月15日",
    "sourceFile": "仓库人员工作统计_2026-07-15 00~2026-07-15 23_20260717092506_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-15 00:00 - 2026-07-15 23:00",
    "generatedAt": "2026-07-17 09:25:06",
    "totals": {
      "pickPieces": 14073,
      "pickTimes": 14072,
      "pickSkus": 7139,
      "pickOrders": 8050,
      "seedOrders": 945,
      "seedPieces": 2258,
      "checkTimes": 8705,
      "checkPieces": 10375,
      "weighTimes": 8117,
      "weighPieces": 9606,
      "shipTimes": 8807,
      "shipPieces": 10909,
      "inboundPieces": 3114,
      "purchaseReturnPieces": 117,
      "moveTimes": 1180,
      "movePieces": 3988,
      "returnTimes": 138,
      "returnPieces": 138,
      "shelfPieces": 13618,
      "shelfTimes": 9184,
      "packPieces": 532,
      "qcOrders": 38,
      "qcPieces": 80,
      "unpackParcels": 6256,
      "unpackPieces": 9560,
      "unpackOrders": 8516,
      "stocktakeTimes": 48,
      "stocktakePieces": 53,
      "auditOrders": 182340,
      "auditConfirmOrders": 5920,
      "forceAuditOrders": 740,
      "smartAuditOrders": 175680,
      "expressPrints": 8819,
      "barcodePrints": 0,
      "barcodePrintTimes": 0,
      "tagPrints": 3396,
      "tagPrintTimes": 309,
      "activeWorkers": 46,
      "totalWorkload": 67544,
      "roles": 14,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 14073,
        "secondary": 14072,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2258,
        "secondary": 945,
        "unit": "件",
        "subUnit": "单",
        "progress": 16,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 10375,
        "secondary": 8705,
        "unit": "件",
        "subUnit": "次",
        "progress": 74,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 8117,
        "secondary": 9606,
        "unit": "次",
        "subUnit": "件",
        "progress": 58,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 10909,
        "secondary": 8807,
        "unit": "件",
        "subUnit": "次",
        "progress": 78,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 3114,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 22,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13618,
        "secondary": 9184,
        "unit": "件",
        "subUnit": "次",
        "progress": 97,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 9560,
        "secondary": 6256,
        "unit": "件",
        "subUnit": "包",
        "progress": 68,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12215,
        "secondary": 8819,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 87,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 13,
        "workload": 25674,
        "pickPieces": 3261,
        "shipPieces": 10009,
        "checkPieces": 9873,
        "unpackPieces": 0,
        "shelfPieces": 502
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 13494,
        "pickPieces": 0,
        "shipPieces": 32,
        "checkPieces": 32,
        "unpackPieces": 0,
        "shelfPieces": 10798
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 6768,
        "pickPieces": 5305,
        "shipPieces": 276,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 10
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 6600,
        "pickPieces": 1122,
        "shipPieces": 55,
        "checkPieces": 0,
        "unpackPieces": 5092,
        "shelfPieces": 1
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 5217,
        "pickPieces": 2952,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2255
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 3222,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 41
      },
      {
        "role": "售后拆包",
        "workers": 2,
        "workload": 1634,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1634,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1563,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1563,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1524,
        "pickPieces": 0,
        "shipPieces": 470,
        "checkPieces": 470,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1514,
        "pickPieces": 1219,
        "shipPieces": 65,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 247,
        "pickPieces": 214,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 80,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 7,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4582,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2291,
        "shipPieces": 2291,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1902
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3803,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2766,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3408,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2623,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 3222,
        "actions": 10,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 3062,
        "shelfPieces": 41,
        "unpackPieces": 0,
        "expressPrints": 14
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3182,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1591,
        "shipPieces": 1591,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1376
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2752,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2341,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2651,
        "actions": 9,
        "pickPieces": 51,
        "pickOrders": 51,
        "pickTimes": 51,
        "seedPieces": 0,
        "checkPieces": 1300,
        "shipPieces": 1300,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1204
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2494,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1247,
        "shipPieces": 1247,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 896
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2366,
        "actions": 9,
        "pickPieces": 50,
        "pickOrders": 50,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 1158,
        "shipPieces": 1158,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 943
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2346,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1173,
        "shipPieces": 1173,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1032
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2226,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1113,
        "shipPieces": 1113,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1017
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2059,
        "actions": 14,
        "pickPieces": 1515,
        "pickOrders": 1046,
        "pickTimes": 1515,
        "seedPieces": 371,
        "checkPieces": 0,
        "shipPieces": 70,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1942,
        "actions": 12,
        "pickPieces": 565,
        "pickOrders": 411,
        "pickTimes": 564,
        "seedPieces": 71,
        "checkPieces": 0,
        "shipPieces": 68,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1888,
        "actions": 10,
        "pickPieces": 1615,
        "pickOrders": 1314,
        "pickTimes": 1615,
        "seedPieces": 187,
        "checkPieces": 0,
        "shipPieces": 79,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1815,
        "actions": 5,
        "pickPieces": 1024,
        "pickOrders": 0,
        "pickTimes": 1024,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 791,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1766,
        "actions": 5,
        "pickPieces": 1014,
        "pickOrders": 0,
        "pickTimes": 1014,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 752,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1699,
        "actions": 8,
        "pickPieces": 1319,
        "pickOrders": 945,
        "pickTimes": 1319,
        "seedPieces": 289,
        "checkPieces": 0,
        "shipPieces": 91,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1636,
        "actions": 7,
        "pickPieces": 914,
        "pickOrders": 0,
        "pickTimes": 914,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 712,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1524,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 470,
        "shipPieces": 470,
        "inboundPieces": 45,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 377
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1514,
        "actions": 10,
        "pickPieces": 1219,
        "pickOrders": 977,
        "pickTimes": 1219,
        "seedPieces": 226,
        "checkPieces": 0,
        "shipPieces": 65,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1508,
        "actions": 12,
        "pickPieces": 1122,
        "pickOrders": 859,
        "pickTimes": 1122,
        "seedPieces": 310,
        "checkPieces": 0,
        "shipPieces": 55,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1416,
        "actions": 10,
        "pickPieces": 1042,
        "pickOrders": 728,
        "pickTimes": 1042,
        "seedPieces": 307,
        "checkPieces": 0,
        "shipPieces": 52,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1391,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1099,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1357,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1357,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1218,
        "actions": 10,
        "pickPieces": 935,
        "pickOrders": 684,
        "pickTimes": 935,
        "seedPieces": 269,
        "checkPieces": 0,
        "shipPieces": 12,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1122,
        "actions": 10,
        "pickPieces": 856,
        "pickOrders": 658,
        "pickTimes": 856,
        "seedPieces": 228,
        "checkPieces": 0,
        "shipPieces": 36,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1105,
        "actions": 7,
        "pickPieces": 501,
        "pickOrders": 0,
        "pickTimes": 501,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 483,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1043,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1043,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1003,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1003,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 976,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 976,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 898,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 889,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 866,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 866,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 823,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 823,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 821,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 821,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 742,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 742,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 658,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 658,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 606,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 605,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 323,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 322,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 211,
        "actions": 8,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 121,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 137,
        "actions": 12,
        "pickPieces": 117,
        "pickOrders": 116,
        "pickTimes": 117,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 14,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 135,
        "actions": 12,
        "pickPieces": 122,
        "pickOrders": 119,
        "pickTimes": 122,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 9
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 112,
        "actions": 14,
        "pickPieces": 92,
        "pickOrders": 92,
        "pickTimes": 92,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 102,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 32,
        "shipPieces": 32,
        "inboundPieces": 0,
        "shelfPieces": 32,
        "unpackPieces": 0,
        "expressPrints": 33
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 9,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 7,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 10,909 件，拣货 14,073 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 9,560 件，包裹 6,256 个。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,582 件/次，覆盖 8 类动作。"
      },
      {
        "level": "info",
        "title": "吴家兴 产出领先",
        "desc": "上架，累计 3,803 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "裴永俊 产出领先",
        "desc": "上架，累计 3,408 件/次，覆盖 4 类动作。"
      }
    ]
  },
  "2026-07-14": {
    "key": "2026-07-14",
    "label": "7月14日",
    "sourceFile": "仓库人员工作统计_2026-07-14 00~2026-07-14 23_20260714220416_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-14 00:00 - 2026-07-14 23:00",
    "generatedAt": "2026-07-14 22:04:16",
    "totals": {
      "pickPieces": 13405,
      "pickTimes": 12988,
      "pickSkus": 8796,
      "pickOrders": 0,
      "seedOrders": 805,
      "seedPieces": 1836,
      "checkTimes": 12157,
      "checkPieces": 12243,
      "weighTimes": 11428,
      "weighPieces": 11428,
      "shipTimes": 12419,
      "shipPieces": 12419,
      "inboundPieces": 4117,
      "purchaseReturnPieces": 48,
      "moveTimes": 8185,
      "movePieces": 10839,
      "returnTimes": 93,
      "returnPieces": 93,
      "shelfPieces": 13866,
      "shelfTimes": 11376,
      "packPieces": 409,
      "qcOrders": 10,
      "qcPieces": 85,
      "unpackParcels": 6668,
      "unpackPieces": 9511,
      "unpackOrders": 8928,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 151936,
      "auditConfirmOrders": 10689,
      "forceAuditOrders": 1387,
      "smartAuditOrders": 139859,
      "expressPrints": 12950,
      "barcodePrints": 149,
      "barcodePrintTimes": 4,
      "tagPrints": 1135,
      "tagPrintTimes": 143,
      "activeWorkers": 53,
      "totalWorkload": 77446,
      "roles": 16,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13405,
        "secondary": 12988,
        "unit": "件",
        "subUnit": "次",
        "progress": 94,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1836,
        "secondary": 805,
        "unit": "件",
        "subUnit": "单",
        "progress": 13,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 12243,
        "secondary": 12157,
        "unit": "件",
        "subUnit": "次",
        "progress": 86,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11428,
        "secondary": 11428,
        "unit": "次",
        "subUnit": "件",
        "progress": 80,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 12419,
        "secondary": 12419,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4117,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 29,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 13866,
        "secondary": 11376,
        "unit": "件",
        "subUnit": "次",
        "progress": 97,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 9511,
        "secondary": 6668,
        "unit": "件",
        "subUnit": "包",
        "progress": 67,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 14234,
        "secondary": 12950,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 16,
        "workload": 31102,
        "pickPieces": 4667,
        "shipPieces": 12193,
        "checkPieces": 12060,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 15775,
        "pickPieces": 1,
        "shipPieces": 1,
        "checkPieces": 2,
        "unpackPieces": 0,
        "shelfPieces": 12247
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 7017,
        "pickPieces": 2018,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 4599,
        "shelfPieces": 0
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4625,
        "pickPieces": 3804,
        "shipPieces": 15,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 4411,
        "pickPieces": 0,
        "shipPieces": 15,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 26
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2922,
        "pickPieces": 605,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 3,
        "workload": 2749,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2749,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 2735,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2694,
        "pickPieces": 2170,
        "shipPieces": 9,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 2101,
        "pickPieces": 0,
        "shipPieces": 155,
        "checkPieces": 181,
        "unpackPieces": 0,
        "shelfPieces": 1317
      },
      {
        "role": "（临平仓）",
        "workers": 1,
        "workload": 738,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 738,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 262,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 226
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 183,
        "pickPieces": 140,
        "shipPieces": 19,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 85,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 38,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 36
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 9,
        "pickPieces": 0,
        "shipPieces": 9,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4518,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2533,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 4411,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 15,
        "inboundPieces": 4042,
        "shelfPieces": 26,
        "unpackPieces": 0,
        "expressPrints": 17
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4346,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2173,
        "shipPieces": 2173,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2179
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3996,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3294,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3845,
        "actions": 13,
        "pickPieces": 126,
        "pickOrders": 0,
        "pickTimes": 126,
        "seedPieces": 0,
        "checkPieces": 1855,
        "shipPieces": 1856,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1857
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3706,
        "actions": 13,
        "pickPieces": 93,
        "pickOrders": 0,
        "pickTimes": 93,
        "seedPieces": 0,
        "checkPieces": 1808,
        "shipPieces": 1803,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1807
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3276,
        "actions": 10,
        "pickPieces": 22,
        "pickOrders": 0,
        "pickTimes": 22,
        "seedPieces": 0,
        "checkPieces": 1629,
        "shipPieces": 1625,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1626
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 2735,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2710,
        "actions": 10,
        "pickPieces": 14,
        "pickOrders": 0,
        "pickTimes": 14,
        "seedPieces": 0,
        "checkPieces": 1348,
        "shipPieces": 1348,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1349
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2418,
        "actions": 11,
        "pickPieces": 2018,
        "pickOrders": 0,
        "pickTimes": 1602,
        "seedPieces": 88,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2302,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1161,
        "shipPieces": 1141,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1277
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2259,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1719,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 2101,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 181,
        "shipPieces": 155,
        "inboundPieces": 39,
        "shelfPieces": 1317,
        "unpackPieces": 0,
        "expressPrints": 163
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2048,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1034,
        "shipPieces": 1014,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1025
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1772,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1607,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1678,
        "actions": 10,
        "pickPieces": 533,
        "pickOrders": 0,
        "pickTimes": 533,
        "seedPieces": 0,
        "checkPieces": 433,
        "shipPieces": 433,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 440
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1625,
        "actions": 11,
        "pickPieces": 1168,
        "pickOrders": 0,
        "pickTimes": 1168,
        "seedPieces": 341,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1543,
        "actions": 10,
        "pickPieces": 134,
        "pickOrders": 0,
        "pickTimes": 134,
        "seedPieces": 0,
        "checkPieces": 619,
        "shipPieces": 619,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 619
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1501,
        "actions": 11,
        "pickPieces": 1323,
        "pickOrders": 0,
        "pickTimes": 1323,
        "seedPieces": 121,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1499,
        "actions": 11,
        "pickPieces": 1313,
        "pickOrders": 0,
        "pickTimes": 1313,
        "seedPieces": 161,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1348,
        "actions": 7,
        "pickPieces": 1154,
        "pickOrders": 0,
        "pickTimes": 1153,
        "seedPieces": 190,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1346,
        "actions": 9,
        "pickPieces": 1016,
        "pickOrders": 0,
        "pickTimes": 1016,
        "seedPieces": 267,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1331,
        "actions": 9,
        "pickPieces": 1052,
        "pickOrders": 0,
        "pickTimes": 1052,
        "seedPieces": 198,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1256,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1256,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1225,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1195,
        "actions": 7,
        "pickPieces": 1123,
        "pickOrders": 0,
        "pickTimes": 1123,
        "seedPieces": 67,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1115,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1115,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1082,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1077,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1073,
        "actions": 9,
        "pickPieces": 856,
        "pickOrders": 0,
        "pickTimes": 856,
        "seedPieces": 168,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1061,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1061,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1056,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1056,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 995,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 995,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 984,
        "actions": 5,
        "pickPieces": 537,
        "pickOrders": 0,
        "pickTimes": 537,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 979,
        "actions": 5,
        "pickPieces": 161,
        "pickOrders": 0,
        "pickTimes": 161,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 932,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 926,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 837,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 834,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 791,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 791,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 738,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 738,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 713,
        "actions": 5,
        "pickPieces": 68,
        "pickOrders": 0,
        "pickTimes": 68,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 693,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 693,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 625,
        "actions": 5,
        "pickPieces": 390,
        "pickOrders": 0,
        "pickTimes": 390,
        "seedPieces": 235,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 381,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 381,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 363,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 256,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 284,
        "actions": 14,
        "pickPieces": 41,
        "pickOrders": 0,
        "pickTimes": 41,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 148,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 534
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 262,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 36,
        "shelfPieces": 226,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 161,
        "actions": 13,
        "pickPieces": 122,
        "pickOrders": 0,
        "pickTimes": 122,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 21,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 21
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 140,
        "actions": 15,
        "pickPieces": 110,
        "pickOrders": 0,
        "pickTimes": 110,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 11,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 9
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 85,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 43,
        "actions": 12,
        "pickPieces": 30,
        "pickOrders": 0,
        "pickTimes": 30,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 11
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 38,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 36,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 16,
        "actions": 14,
        "pickPieces": 1,
        "pickOrders": 0,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 2,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "谷春艳",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 8,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 8
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 12,419 件，与拣货 13,405 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 9,511 件，包裹 6,668 个。"
      },
      {
        "level": "info",
        "title": "裴永俊 产出领先",
        "desc": "上架，累计 4,518 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 4,411 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,346 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-13": {
    "key": "2026-07-13",
    "label": "7月13日",
    "sourceFile": "仓库人员工作统计_2026-07-13 00~2026-07-13 23_20260713221045_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-13 00:00 - 2026-07-13 23:00",
    "generatedAt": "2026-07-13 22:10:45",
    "totals": {
      "pickPieces": 9845,
      "pickTimes": 9822,
      "pickSkus": 5971,
      "pickOrders": 0,
      "seedOrders": 577,
      "seedPieces": 1358,
      "checkTimes": 6669,
      "checkPieces": 6769,
      "weighTimes": 4349,
      "weighPieces": 4349,
      "shipTimes": 6761,
      "shipPieces": 6761,
      "inboundPieces": 3514,
      "purchaseReturnPieces": 43,
      "moveTimes": 2982,
      "movePieces": 5030,
      "returnTimes": 108,
      "returnPieces": 108,
      "shelfPieces": 10812,
      "shelfTimes": 8266,
      "packPieces": 539,
      "qcOrders": 39,
      "qcPieces": 138,
      "unpackParcels": 5852,
      "unpackPieces": 8334,
      "unpackOrders": 7875,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 132311,
      "auditConfirmOrders": 4798,
      "forceAuditOrders": 627,
      "smartAuditOrders": 126886,
      "expressPrints": 7133,
      "barcodePrints": 12,
      "barcodePrintTimes": 3,
      "tagPrints": 5751,
      "tagPrintTimes": 194,
      "activeWorkers": 51,
      "totalWorkload": 52077,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 9845,
        "secondary": 9822,
        "unit": "件",
        "subUnit": "次",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1358,
        "secondary": 577,
        "unit": "件",
        "subUnit": "单",
        "progress": 11,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 6769,
        "secondary": 6669,
        "unit": "件",
        "subUnit": "次",
        "progress": 52,
        "status": "关注"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 4349,
        "secondary": 4349,
        "unit": "次",
        "subUnit": "件",
        "progress": 34,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 6761,
        "secondary": 6761,
        "unit": "件",
        "subUnit": "次",
        "progress": 52,
        "status": "关注"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 3514,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 27,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 10812,
        "secondary": 8266,
        "unit": "件",
        "subUnit": "次",
        "progress": 84,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8334,
        "secondary": 5852,
        "unit": "件",
        "subUnit": "包",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 12896,
        "secondary": 7133,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 16396,
        "pickPieces": 2908,
        "shipPieces": 6063,
        "checkPieces": 6144,
        "unpackPieces": 0,
        "shelfPieces": 15
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 13755,
        "pickPieces": 3,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 10700
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 5204,
        "pickPieces": 666,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 4152,
        "shelfPieces": 1
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4208,
        "pickPieces": 3326,
        "shipPieces": 20,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 3522,
        "pickPieces": 0,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 73
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2205,
        "pickPieces": 1744,
        "shipPieces": 11,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "售后拆包",
        "workers": 2,
        "workload": 1535,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1535,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1533,
        "pickPieces": 0,
        "shipPieces": 445,
        "checkPieces": 432,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1473,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1473,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 1465,
        "pickPieces": 1085,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 500,
        "pickPieces": 0,
        "shipPieces": 193,
        "checkPieces": 193,
        "unpackPieces": 0,
        "shelfPieces": 15
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 138,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 132,
        "pickPieces": 112,
        "shipPieces": 7,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 10,
        "pickPieces": 0,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 1,
        "pickPieces": 1,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3572,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3199,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 3522,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 3398,
        "shelfPieces": 73,
        "unpackPieces": 0,
        "expressPrints": 9
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3392,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3302,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3330,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1653,
        "shipPieces": 1652,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1985
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2488,
        "actions": 12,
        "pickPieces": 95,
        "pickOrders": 0,
        "pickTimes": 95,
        "seedPieces": 0,
        "checkPieces": 1164,
        "shipPieces": 1160,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1185
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2259,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 206,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2250,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1117,
        "shipPieces": 1094,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1106
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2147,
        "actions": 12,
        "pickPieces": 50,
        "pickOrders": 0,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 1031,
        "shipPieces": 1027,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 1030
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2033,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1771,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1590,
        "actions": 9,
        "pickPieces": 1376,
        "pickOrders": 0,
        "pickTimes": 1376,
        "seedPieces": 126,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1533,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 432,
        "shipPieces": 445,
        "inboundPieces": 116,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 466
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1521,
        "actions": 9,
        "pickPieces": 1236,
        "pickOrders": 0,
        "pickTimes": 1236,
        "seedPieces": 167,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1341,
        "actions": 16,
        "pickPieces": 180,
        "pickOrders": 0,
        "pickTimes": 180,
        "seedPieces": 42,
        "checkPieces": 567,
        "shipPieces": 525,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 527
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1296,
        "actions": 10,
        "pickPieces": 49,
        "pickOrders": 0,
        "pickTimes": 49,
        "seedPieces": 0,
        "checkPieces": 611,
        "shipPieces": 593,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 598
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1282,
        "actions": 9,
        "pickPieces": 1182,
        "pickOrders": 0,
        "pickTimes": 1182,
        "seedPieces": 61,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1236,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1236,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1167,
        "actions": 11,
        "pickPieces": 867,
        "pickOrders": 0,
        "pickTimes": 867,
        "seedPieces": 220,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1097,
        "actions": 9,
        "pickPieces": 714,
        "pickOrders": 0,
        "pickTimes": 714,
        "seedPieces": 301,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1052,
        "actions": 13,
        "pickPieces": 666,
        "pickOrders": 0,
        "pickTimes": 666,
        "seedPieces": 162,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1047,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 993,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1038,
        "actions": 9,
        "pickPieces": 877,
        "pickOrders": 0,
        "pickTimes": 877,
        "seedPieces": 153,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 956,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 956,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 931,
        "actions": 7,
        "pickPieces": 663,
        "pickOrders": 0,
        "pickTimes": 663,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 895,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 895,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 886,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 886,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 862,
        "actions": 9,
        "pickPieces": 554,
        "pickOrders": 0,
        "pickTimes": 554,
        "seedPieces": 126,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 781,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 781,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 775,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 775,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 694,
        "actions": 5,
        "pickPieces": 526,
        "pickOrders": 0,
        "pickTimes": 526,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 692,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 692,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 670,
        "actions": 5,
        "pickPieces": 559,
        "pickOrders": 0,
        "pickTimes": 559,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 640,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 640,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 637,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 595,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 557,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 433,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 386,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 193,
        "shipPieces": 193,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 200
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 299,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 299,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 213,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 200,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 163,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 153,
        "actions": 13,
        "pickPieces": 131,
        "pickOrders": 0,
        "pickTimes": 108,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 10,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 132,
        "actions": 15,
        "pickPieces": 112,
        "pickOrders": 0,
        "pickTimes": 112,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 7,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 10
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 114,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 15,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 101,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 93,
        "actions": 10,
        "pickPieces": 1,
        "pickOrders": 0,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 72,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 66,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 56,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 45,
        "actions": 11,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "谷春艳",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4,
        "actions": 7,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 4,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 1,
        "actions": 3,
        "pickPieces": 1,
        "pickOrders": 0,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 6,761 件，拣货 9,845 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,334 件，包裹 5,852 个。"
      },
      {
        "level": "info",
        "title": "王宁 产出领先",
        "desc": "上架，累计 3,572 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 3,522 件/次，覆盖 13 类动作。"
      },
      {
        "level": "info",
        "title": "曹达禄 产出领先",
        "desc": "上架，累计 3,392 件/次，覆盖 4 类动作。"
      }
    ]
  },
  "2026-07-12": {
    "key": "2026-07-12",
    "label": "7月12日",
    "sourceFile": "仓库人员工作统计_2026-07-12 00~2026-07-12 23_20260712225618_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-12 00:00 - 2026-07-12 23:00",
    "generatedAt": "2026-07-12 22:56:18",
    "totals": {
      "pickPieces": 9163,
      "pickTimes": 9163,
      "pickSkus": 5935,
      "pickOrders": 0,
      "seedOrders": 681,
      "seedPieces": 1576,
      "checkTimes": 8452,
      "checkPieces": 8492,
      "weighTimes": 7696,
      "weighPieces": 7696,
      "shipTimes": 8543,
      "shipPieces": 8543,
      "inboundPieces": 4023,
      "purchaseReturnPieces": 38,
      "moveTimes": 1899,
      "movePieces": 3081,
      "returnTimes": 75,
      "returnPieces": 75,
      "shelfPieces": 9589,
      "shelfTimes": 7094,
      "packPieces": 386,
      "qcOrders": 42,
      "qcPieces": 89,
      "unpackParcels": 5169,
      "unpackPieces": 8711,
      "unpackOrders": 6793,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 195250,
      "auditConfirmOrders": 5088,
      "forceAuditOrders": 1269,
      "smartAuditOrders": 188892,
      "expressPrints": 8686,
      "barcodePrints": 318,
      "barcodePrintTimes": 6,
      "tagPrints": 2159,
      "tagPrintTimes": 131,
      "activeWorkers": 50,
      "totalWorkload": 52698,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 9163,
        "secondary": 9163,
        "unit": "件",
        "subUnit": "次",
        "progress": 82,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1576,
        "secondary": 681,
        "unit": "件",
        "subUnit": "单",
        "progress": 14,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 8492,
        "secondary": 8452,
        "unit": "件",
        "subUnit": "次",
        "progress": 76,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 7696,
        "secondary": 7696,
        "unit": "次",
        "subUnit": "件",
        "progress": 69,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 8543,
        "secondary": 8543,
        "unit": "件",
        "subUnit": "次",
        "progress": 77,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4023,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 36,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 9589,
        "secondary": 7094,
        "unit": "件",
        "subUnit": "次",
        "progress": 86,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8711,
        "secondary": 5169,
        "unit": "件",
        "subUnit": "包",
        "progress": 78,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 11163,
        "secondary": 8686,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 17,
        "workload": 19725,
        "pickPieces": 2552,
        "shipPieces": 8141,
        "checkPieces": 8160,
        "unpackPieces": 0,
        "shelfPieces": 35
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 12130,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 9535
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 5148,
        "pickPieces": 4401,
        "shipPieces": 23,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 6
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 3972,
        "pickPieces": 0,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 3440,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3440,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 2953,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2953,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2044,
        "pickPieces": 1769,
        "shipPieces": 19,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1250,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1250,
        "shelfPieces": 0
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1149,
        "pickPieces": 0,
        "shipPieces": 339,
        "checkPieces": 332,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 433,
        "pickPieces": 228,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "库维员",
        "workers": 1,
        "workload": 234,
        "pickPieces": 124,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "异常件处理",
        "workers": 1,
        "workload": 118,
        "pickPieces": 89,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 10
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 89,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 7,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 6,
        "pickPieces": 0,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 3972,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 3924,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 10
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3324,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2827,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2919,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2002,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2510,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1258,
        "shipPieces": 1252,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1318
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2389,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2024,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2231,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1417,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2129,
        "actions": 8,
        "pickPieces": 50,
        "pickOrders": 0,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 1042,
        "shipPieces": 1037,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1043
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2062,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1031,
        "shipPieces": 1031,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1031
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2051,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1024,
        "shipPieces": 1027,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1126
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2015,
        "actions": 10,
        "pickPieces": 11,
        "pickOrders": 0,
        "pickTimes": 11,
        "seedPieces": 0,
        "checkPieces": 1007,
        "shipPieces": 997,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 997
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1840,
        "actions": 11,
        "pickPieces": 1397,
        "pickOrders": 0,
        "pickTimes": 1397,
        "seedPieces": 258,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1630,
        "actions": 8,
        "pickPieces": 50,
        "pickOrders": 0,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 791,
        "shipPieces": 789,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 809
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1397,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 700,
        "shipPieces": 697,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 697
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1391,
        "actions": 8,
        "pickPieces": 93,
        "pickOrders": 0,
        "pickTimes": 93,
        "seedPieces": 0,
        "checkPieces": 655,
        "shipPieces": 643,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 647
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1382,
        "actions": 13,
        "pickPieces": 1323,
        "pickOrders": 0,
        "pickTimes": 1323,
        "seedPieces": 39,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1304,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 652,
        "shipPieces": 652,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 653
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1201,
        "actions": 7,
        "pickPieces": 1079,
        "pickOrders": 0,
        "pickTimes": 1079,
        "seedPieces": 116,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1181,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1181,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1149,
        "actions": 11,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 332,
        "shipPieces": 339,
        "inboundPieces": 92,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 336
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1107,
        "actions": 9,
        "pickPieces": 875,
        "pickOrders": 0,
        "pickTimes": 875,
        "seedPieces": 175,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1102,
        "actions": 7,
        "pickPieces": 1028,
        "pickOrders": 0,
        "pickTimes": 1028,
        "seedPieces": 68,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 937,
        "actions": 7,
        "pickPieces": 894,
        "pickOrders": 0,
        "pickTimes": 894,
        "seedPieces": 30,
        "checkPieces": 0,
        "shipPieces": 13,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 876,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 876,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 841,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 841,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 834,
        "actions": 11,
        "pickPieces": 692,
        "pickOrders": 0,
        "pickTimes": 692,
        "seedPieces": 134,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 830,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 830,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 796,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 796,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 727,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 727,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 725,
        "actions": 9,
        "pickPieces": 602,
        "pickOrders": 0,
        "pickTimes": 602,
        "seedPieces": 118,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 690,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 690,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 654,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 654,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 607,
        "actions": 9,
        "pickPieces": 214,
        "pickOrders": 0,
        "pickTimes": 214,
        "seedPieces": 137,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 560,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 560,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 526,
        "actions": 7,
        "pickPieces": 322,
        "pickOrders": 0,
        "pickTimes": 322,
        "seedPieces": 202,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 519,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 518,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 486,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 486,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 433,
        "actions": 7,
        "pickPieces": 228,
        "pickOrders": 0,
        "pickTimes": 228,
        "seedPieces": 203,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 364,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 363,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 325,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 325,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 234,
        "actions": 9,
        "pickPieces": 124,
        "pickOrders": 0,
        "pickTimes": 124,
        "seedPieces": 96,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 142,
        "actions": 15,
        "pickPieces": 89,
        "pickOrders": 0,
        "pickTimes": 89,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 23,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 118,
        "actions": 14,
        "pickPieces": 89,
        "pickOrders": 0,
        "pickTimes": 89,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 10,
        "unpackPieces": 0,
        "expressPrints": 5
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 89,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 59,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 59,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 9,
        "actions": 9,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 3,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 7,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 8
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 2
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 8,543 件，与拣货 9,163 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,711 件，包裹 5,169 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 3,972 件/次，覆盖 9 类动作。"
      },
      {
        "level": "info",
        "title": "王宁 产出领先",
        "desc": "上架，累计 3,324 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "郭宝亮 产出领先",
        "desc": "上架，累计 2,919 件/次，覆盖 4 类动作。"
      }
    ]
  },
  "2026-07-11": {
    "key": "2026-07-11",
    "label": "7月11日",
    "sourceFile": "仓库人员工作统计_2026-07-11 00~2026-07-11 23_20260711221102_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-11 00:00 - 2026-07-11 23:00",
    "generatedAt": "2026-07-11 22:11:02",
    "totals": {
      "pickPieces": 12392,
      "pickTimes": 12347,
      "pickSkus": 7453,
      "pickOrders": 0,
      "seedOrders": 700,
      "seedPieces": 1755,
      "checkTimes": 10676,
      "checkPieces": 10789,
      "weighTimes": 9728,
      "weighPieces": 9728,
      "shipTimes": 10763,
      "shipPieces": 10763,
      "inboundPieces": 3695,
      "purchaseReturnPieces": 36,
      "moveTimes": 1270,
      "movePieces": 3378,
      "returnTimes": 132,
      "returnPieces": 132,
      "shelfPieces": 11740,
      "shelfTimes": 9811,
      "packPieces": 403,
      "qcOrders": 70,
      "qcPieces": 151,
      "unpackParcels": 6204,
      "unpackPieces": 9246,
      "unpackOrders": 8365,
      "stocktakeTimes": 131,
      "stocktakePieces": 150,
      "auditOrders": 159233,
      "auditConfirmOrders": 5606,
      "forceAuditOrders": 596,
      "smartAuditOrders": 153031,
      "expressPrints": 10787,
      "barcodePrints": 106,
      "barcodePrintTimes": 5,
      "tagPrints": 5695,
      "tagPrintTimes": 151,
      "activeWorkers": 52,
      "totalWorkload": 63288,
      "roles": 16,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 12392,
        "secondary": 12347,
        "unit": "件",
        "subUnit": "次",
        "progress": 75,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1755,
        "secondary": 700,
        "unit": "件",
        "subUnit": "单",
        "progress": 11,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 10789,
        "secondary": 10676,
        "unit": "件",
        "subUnit": "次",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 9728,
        "secondary": 9728,
        "unit": "次",
        "subUnit": "件",
        "progress": 59,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 10763,
        "secondary": 10763,
        "unit": "件",
        "subUnit": "次",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 3695,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 22,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 11740,
        "secondary": 9811,
        "unit": "件",
        "subUnit": "次",
        "progress": 71,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 9246,
        "secondary": 6204,
        "unit": "件",
        "subUnit": "包",
        "progress": 56,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 16588,
        "secondary": 10787,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 25333,
        "pickPieces": 3617,
        "shipPieces": 10334,
        "checkPieces": 10380,
        "unpackPieces": 0,
        "shelfPieces": 28
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 14254,
        "pickPieces": 1,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11282
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 4968,
        "pickPieces": 4490,
        "shipPieces": 20,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 4916,
        "pickPieces": 1276,
        "shipPieces": 6,
        "checkPieces": 0,
        "unpackPieces": 3593,
        "shelfPieces": 1
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 3539,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 3539,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 3284,
        "pickPieces": 0,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 30
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 2846,
        "pickPieces": 2470,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1336,
        "pickPieces": 0,
        "shipPieces": 355,
        "checkPieces": 409,
        "unpackPieces": 0,
        "shelfPieces": 86
      },
      {
        "role": "（临平仓）",
        "workers": 1,
        "workload": 772,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 772,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 596,
        "pickPieces": 0,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "副总助理",
        "workers": 2,
        "workload": 483,
        "pickPieces": 401,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 310,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 160
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 235,
        "pickPieces": 51,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 147
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 151,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 142,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 123,
        "pickPieces": 86,
        "shipPieces": 17,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      }
    ],
    "workers": [
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4225,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2593,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3795,
        "actions": 14,
        "pickPieces": 79,
        "pickOrders": 0,
        "pickTimes": 79,
        "seedPieces": 79,
        "checkPieces": 1804,
        "shipPieces": 1803,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1843
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3640,
        "actions": 10,
        "pickPieces": 83,
        "pickOrders": 0,
        "pickTimes": 83,
        "seedPieces": 83,
        "checkPieces": 1749,
        "shipPieces": 1725,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1726
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3462,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2926,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 3284,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 3177,
        "shelfPieces": 30,
        "unpackPieces": 0,
        "expressPrints": 11
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2861,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2127,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2378,
        "actions": 10,
        "pickPieces": 84,
        "pickOrders": 0,
        "pickTimes": 84,
        "seedPieces": 84,
        "checkPieces": 1109,
        "shipPieces": 1101,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1102
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2276,
        "actions": 12,
        "pickPieces": 75,
        "pickOrders": 0,
        "pickTimes": 75,
        "seedPieces": 75,
        "checkPieces": 1063,
        "shipPieces": 1063,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1065
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2179,
        "actions": 10,
        "pickPieces": 75,
        "pickOrders": 0,
        "pickTimes": 75,
        "seedPieces": 75,
        "checkPieces": 1015,
        "shipPieces": 1014,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1017
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2141,
        "actions": 11,
        "pickPieces": 2107,
        "pickOrders": 0,
        "pickTimes": 2068,
        "seedPieces": 26,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2026,
        "actions": 8,
        "pickPieces": 52,
        "pickOrders": 0,
        "pickTimes": 52,
        "seedPieces": 0,
        "checkPieces": 990,
        "shipPieces": 984,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 996
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1917,
        "actions": 8,
        "pickPieces": 50,
        "pickOrders": 0,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 938,
        "shipPieces": 929,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 930
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1850,
        "actions": 11,
        "pickPieces": 1634,
        "pickOrders": 0,
        "pickTimes": 1634,
        "seedPieces": 130,
        "checkPieces": 0,
        "shipPieces": 8,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1794,
        "actions": 9,
        "pickPieces": 1698,
        "pickOrders": 0,
        "pickTimes": 1698,
        "seedPieces": 89,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1522,
        "actions": 8,
        "pickPieces": 54,
        "pickOrders": 0,
        "pickTimes": 54,
        "seedPieces": 0,
        "checkPieces": 737,
        "shipPieces": 731,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 734
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1436,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1385,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1432,
        "actions": 11,
        "pickPieces": 1303,
        "pickOrders": 0,
        "pickTimes": 1303,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1414,
        "actions": 9,
        "pickPieces": 1167,
        "pickOrders": 0,
        "pickTimes": 1167,
        "seedPieces": 213,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1338,
        "actions": 8,
        "pickPieces": 207,
        "pickOrders": 0,
        "pickTimes": 207,
        "seedPieces": 0,
        "checkPieces": 567,
        "shipPieces": 564,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 564
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1336,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 409,
        "shipPieces": 355,
        "inboundPieces": 83,
        "shelfPieces": 86,
        "unpackPieces": 0,
        "expressPrints": 360
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1323,
        "actions": 9,
        "pickPieces": 1276,
        "pickOrders": 0,
        "pickTimes": 1276,
        "seedPieces": 40,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1303,
        "actions": 11,
        "pickPieces": 865,
        "pickOrders": 0,
        "pickTimes": 859,
        "seedPieces": 421,
        "checkPieces": 0,
        "shipPieces": 4,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1141,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1141,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1128,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1128,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1038,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1027,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1036,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1036,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1006,
        "actions": 8,
        "pickPieces": 190,
        "pickOrders": 0,
        "pickTimes": 190,
        "seedPieces": 0,
        "checkPieces": 408,
        "shipPieces": 408,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 409
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 998,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 998,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 977,
        "actions": 7,
        "pickPieces": 749,
        "pickOrders": 0,
        "pickTimes": 749,
        "seedPieces": 222,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 940,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 940,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 865,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 865,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 772,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 772,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 753,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 753,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 736,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 736,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 639,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 639,
        "expressPrints": 0
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 586,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 293,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 344,
        "actions": 5,
        "pickPieces": 313,
        "pickOrders": 0,
        "pickTimes": 313,
        "seedPieces": 31,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 310,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 160,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 154,
        "actions": 15,
        "pickPieces": 104,
        "pickOrders": 0,
        "pickTimes": 104,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 25,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 147,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 146,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杜婷",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 142,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 142,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 139,
        "actions": 5,
        "pickPieces": 88,
        "pickOrders": 0,
        "pickTimes": 88,
        "seedPieces": 51,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 88,
        "actions": 7,
        "pickPieces": 51,
        "pickOrders": 0,
        "pickTimes": 51,
        "seedPieces": 36,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 83,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 83,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 80,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 74,
        "actions": 13,
        "pickPieces": 60,
        "pickOrders": 0,
        "pickTimes": 60,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 71,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 49,
        "actions": 10,
        "pickPieces": 26,
        "pickOrders": 0,
        "pickTimes": 26,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 14,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 15
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 37,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 37,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 10,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 12
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 8,
        "actions": 7,
        "pickPieces": 1,
        "pickOrders": 0,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 9,
        "pickPieces": 1,
        "pickOrders": 0,
        "pickTimes": 1,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 10,763 件，与拣货 12,392 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 9,246 件，包裹 6,204 个。"
      },
      {
        "level": "info",
        "title": "郭宝亮 产出领先",
        "desc": "上架，累计 4,225 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 3,795 件/次，覆盖 14 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 3,640 件/次，覆盖 10 类动作。"
      }
    ]
  },
  "2026-07-10": {
    "key": "2026-07-10",
    "label": "7月10日",
    "sourceFile": "仓库人员工作统计_2026-07-10 00~2026-07-10 23_20260711102456_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-10 00:00 - 2026-07-10 23:00",
    "generatedAt": "2026-07-11 10:24:56",
    "totals": {
      "pickPieces": 13490,
      "pickTimes": 13440,
      "pickSkus": 7390,
      "pickOrders": 10114,
      "seedOrders": 1012,
      "seedPieces": 2402,
      "checkTimes": 10891,
      "checkPieces": 13491,
      "weighTimes": 10241,
      "weighPieces": 12173,
      "shipTimes": 10993,
      "shipPieces": 13944,
      "inboundPieces": 5243,
      "purchaseReturnPieces": 234,
      "moveTimes": 1154,
      "movePieces": 2307,
      "returnTimes": 119,
      "returnPieces": 119,
      "shelfPieces": 14043,
      "shelfTimes": 11013,
      "packPieces": 436,
      "qcOrders": 17,
      "qcPieces": 168,
      "unpackParcels": 5915,
      "unpackPieces": 8180,
      "unpackOrders": 7911,
      "stocktakeTimes": 196,
      "stocktakePieces": 211,
      "auditOrders": 144019,
      "auditConfirmOrders": 7185,
      "forceAuditOrders": 1064,
      "smartAuditOrders": 135770,
      "expressPrints": 11201,
      "barcodePrints": 254,
      "barcodePrintTimes": 13,
      "tagPrints": 8809,
      "tagPrintTimes": 367,
      "activeWorkers": 49,
      "totalWorkload": 73200,
      "roles": 16,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 13490,
        "secondary": 13440,
        "unit": "件",
        "subUnit": "次",
        "progress": 67,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2402,
        "secondary": 1012,
        "unit": "件",
        "subUnit": "单",
        "progress": 12,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 13491,
        "secondary": 10891,
        "unit": "件",
        "subUnit": "次",
        "progress": 67,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 10241,
        "secondary": 12173,
        "unit": "次",
        "subUnit": "件",
        "progress": 51,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 13944,
        "secondary": 10993,
        "unit": "件",
        "subUnit": "次",
        "progress": 69,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5243,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 26,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14043,
        "secondary": 11013,
        "unit": "件",
        "subUnit": "次",
        "progress": 69,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8180,
        "secondary": 5915,
        "unit": "件",
        "subUnit": "包",
        "progress": 40,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 20264,
        "secondary": 11201,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 100,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 13,
        "workload": 31937,
        "pickPieces": 3838,
        "shipPieces": 13565,
        "checkPieces": 13426,
        "unpackPieces": 0,
        "shelfPieces": 11
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 14846,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 12798
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 5817,
        "pickPieces": 4854,
        "shipPieces": 147,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5736,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 376
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 3962,
        "pickPieces": 1038,
        "shipPieces": 52,
        "checkPieces": 0,
        "unpackPieces": 2707,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3321,
        "pickPieces": 2784,
        "shipPieces": 115,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 2821,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 2821,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 1584,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1584,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 1381,
        "pickPieces": 690,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 691
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 726,
        "pickPieces": 0,
        "shipPieces": 65,
        "checkPieces": 65,
        "unpackPieces": 0,
        "shelfPieces": 28
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 443,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 133
      },
      {
        "role": "副总助理",
        "workers": 1,
        "workload": 368,
        "pickPieces": 218,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "质检组长",
        "workers": 2,
        "workload": 168,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 87,
        "pickPieces": 68,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 3,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5736,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5110,
        "shelfPieces": 376,
        "unpackPieces": 0,
        "expressPrints": 17
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 5312,
        "actions": 11,
        "pickPieces": 4,
        "pickOrders": 2,
        "pickTimes": 4,
        "seedPieces": 0,
        "checkPieces": 2654,
        "shipPieces": 2654,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2373
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4570,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2285,
        "shipPieces": 2285,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1836
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4017,
        "actions": 9,
        "pickPieces": 53,
        "pickOrders": 53,
        "pickTimes": 53,
        "seedPieces": 0,
        "checkPieces": 1982,
        "shipPieces": 1982,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1664
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3925,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3512,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3333,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2868,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3109,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2092,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3048,
        "actions": 9,
        "pickPieces": 6,
        "pickOrders": 6,
        "pickTimes": 6,
        "seedPieces": 0,
        "checkPieces": 1521,
        "shipPieces": 1521,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1203
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2954,
        "actions": 13,
        "pickPieces": 252,
        "pickOrders": 135,
        "pickTimes": 252,
        "seedPieces": 172,
        "checkPieces": 1265,
        "shipPieces": 1265,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 913
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2485,
        "actions": 15,
        "pickPieces": 120,
        "pickOrders": 68,
        "pickTimes": 120,
        "seedPieces": 63,
        "checkPieces": 1150,
        "shipPieces": 1150,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 976
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2376,
        "actions": 10,
        "pickPieces": 2093,
        "pickOrders": 1642,
        "pickTimes": 2091,
        "seedPieces": 217,
        "checkPieces": 0,
        "shipPieces": 59,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2340,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2329,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2267,
        "actions": 13,
        "pickPieces": 236,
        "pickOrders": 138,
        "pickTimes": 236,
        "seedPieces": 133,
        "checkPieces": 949,
        "shipPieces": 949,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 713
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2162,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1081,
        "shipPieces": 1081,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 991
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2062,
        "actions": 10,
        "pickPieces": 1715,
        "pickOrders": 1436,
        "pickTimes": 1715,
        "seedPieces": 282,
        "checkPieces": 0,
        "shipPieces": 62,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1919,
        "actions": 10,
        "pickPieces": 1647,
        "pickOrders": 1357,
        "pickTimes": 1647,
        "seedPieces": 207,
        "checkPieces": 0,
        "shipPieces": 47,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1706,
        "actions": 10,
        "pickPieces": 1428,
        "pickOrders": 1172,
        "pickTimes": 1414,
        "seedPieces": 216,
        "checkPieces": 0,
        "shipPieces": 49,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1615,
        "actions": 12,
        "pickPieces": 1356,
        "pickOrders": 1154,
        "pickTimes": 1356,
        "seedPieces": 154,
        "checkPieces": 0,
        "shipPieces": 66,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1541,
        "actions": 11,
        "pickPieces": 268,
        "pickOrders": 141,
        "pickTimes": 268,
        "seedPieces": 199,
        "checkPieces": 537,
        "shipPieces": 537,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 414
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1379,
        "actions": 14,
        "pickPieces": 1046,
        "pickOrders": 810,
        "pickTimes": 1024,
        "seedPieces": 290,
        "checkPieces": 0,
        "shipPieces": 26,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1299,
        "actions": 12,
        "pickPieces": 1047,
        "pickOrders": 825,
        "pickTimes": 1047,
        "seedPieces": 154,
        "checkPieces": 0,
        "shipPieces": 69,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1255,
        "actions": 8,
        "pickPieces": 1038,
        "pickOrders": 814,
        "pickTimes": 1033,
        "seedPieces": 165,
        "checkPieces": 0,
        "shipPieces": 52,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1084,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1084,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1029,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1020,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 967,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 967,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 905,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 905,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 819,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 819,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 765,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 765,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 758,
        "actions": 5,
        "pickPieces": 379,
        "pickOrders": 0,
        "pickTimes": 379,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 379,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 737,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 716,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 726,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 65,
        "shipPieces": 65,
        "inboundPieces": 130,
        "shelfPieces": 28,
        "unpackPieces": 0,
        "expressPrints": 54
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 702,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 702,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 646,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 646,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 623,
        "actions": 5,
        "pickPieces": 311,
        "pickOrders": 0,
        "pickTimes": 311,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 312,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 587,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 587,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 565,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 565,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 443,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 133,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 368,
        "actions": 6,
        "pickPieces": 218,
        "pickOrders": 124,
        "pickTimes": 218,
        "seedPieces": 150,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 259,
        "actions": 10,
        "pickPieces": 131,
        "pickOrders": 103,
        "pickTimes": 124,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 212,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 210,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 148,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 51,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 104,
        "actions": 16,
        "pickPieces": 74,
        "pickOrders": 68,
        "pickTimes": 74,
        "seedPieces": 0,
        "checkPieces": 2,
        "shipPieces": 19,
        "inboundPieces": 0,
        "shelfPieces": 6,
        "unpackPieces": 0,
        "expressPrints": 26
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 86,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 82,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 72,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 72,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 52,
        "actions": 11,
        "pickPieces": 38,
        "pickOrders": 37,
        "pickTimes": 38,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 35,
        "actions": 10,
        "pickPieces": 30,
        "pickOrders": 29,
        "pickTimes": 30,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 3,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 16
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 13,944 件，与拣货 13,490 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,180 件，包裹 5,915 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,736 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 5,312 件/次，覆盖 11 类动作。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 4,570 件/次，覆盖 5 类动作。"
      }
    ]
  },
  "2026-07-09": {
    "key": "2026-07-09",
    "label": "7月9日",
    "sourceFile": "仓库人员工作统计_2026-07-09 00_2026-07-09 23_20260709154112_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-09 00:00 - 2026-07-09 23:00",
    "generatedAt": "2026-07-09 15:41:12",
    "totals": {
      "pickPieces": 8610,
      "pickTimes": 8581,
      "pickSkus": 4801,
      "pickOrders": 0,
      "seedOrders": 525,
      "seedPieces": 1280,
      "checkTimes": 6052,
      "checkPieces": 6093,
      "weighTimes": 4810,
      "weighPieces": 4810,
      "shipTimes": 6118,
      "shipPieces": 6118,
      "inboundPieces": 2442,
      "purchaseReturnPieces": 44,
      "moveTimes": 788,
      "movePieces": 2243,
      "returnTimes": 0,
      "returnPieces": 0,
      "shelfPieces": 6958,
      "shelfTimes": 4342,
      "packPieces": 222,
      "qcOrders": 0,
      "qcPieces": 0,
      "unpackParcels": 3712,
      "unpackPieces": 5487,
      "unpackOrders": 4950,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 78753,
      "auditConfirmOrders": 2861,
      "forceAuditOrders": 557,
      "smartAuditOrders": 75335,
      "expressPrints": 6185,
      "barcodePrints": 512,
      "barcodePrintTimes": 4,
      "tagPrints": 1796,
      "tagPrintTimes": 84,
      "activeWorkers": 54,
      "totalWorkload": 38799,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 8610,
        "secondary": 8581,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 1280,
        "secondary": 525,
        "unit": "件",
        "subUnit": "单",
        "progress": 15,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 6093,
        "secondary": 6052,
        "unit": "件",
        "subUnit": "次",
        "progress": 71,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 4810,
        "secondary": 4810,
        "unit": "次",
        "subUnit": "件",
        "progress": 56,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 6118,
        "secondary": 6118,
        "unit": "件",
        "subUnit": "次",
        "progress": 71,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 2442,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 28,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 6958,
        "secondary": 4342,
        "unit": "件",
        "subUnit": "次",
        "progress": 81,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 5487,
        "secondary": 3712,
        "unit": "件",
        "subUnit": "包",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 8493,
        "secondary": 6185,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 99,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 13,
        "workload": 14857,
        "pickPieces": 2062,
        "shipPieces": 6064,
        "checkPieces": 6065,
        "unpackPieces": 0,
        "shelfPieces": 20
      },
      {
        "role": "上架",
        "workers": 9,
        "workload": 7407,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5394
      },
      {
        "role": "拣货",
        "workers": 4,
        "workload": 3673,
        "pickPieces": 3400,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 3
      },
      {
        "role": "拆包",
        "workers": 6,
        "workload": 3136,
        "pickPieces": 932,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 2014,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 2382,
        "pickPieces": 0,
        "shipPieces": 9,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 149
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 2161,
        "pickPieces": 1074,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1077
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 1861,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1861,
        "shelfPieces": 0
      },
      {
        "role": "（临平仓）",
        "workers": 3,
        "workload": 993,
        "pickPieces": 46,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 912,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 903,
        "pickPieces": 866,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 5
      },
      {
        "role": "副总助理",
        "workers": 3,
        "workload": 481,
        "pickPieces": 129,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 59
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 392,
        "pickPieces": 0,
        "shipPieces": 13,
        "checkPieces": 17,
        "unpackPieces": 0,
        "shelfPieces": 8
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 242,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 242
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 158,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 145,
        "pickPieces": 101,
        "shipPieces": 13,
        "checkPieces": 11,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 8,
        "pickPieces": 0,
        "shipPieces": 8,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3078,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1543,
        "shipPieces": 1535,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1545
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 2615,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1590,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 2382,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 9,
        "inboundPieces": 2156,
        "shelfPieces": 149,
        "unpackPieces": 0,
        "expressPrints": 9
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1860,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 930,
        "shipPieces": 930,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 939
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1585,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 791,
        "shipPieces": 794,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 793
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1551,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 777,
        "shipPieces": 774,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 782
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1526,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1164,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1314,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1006,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1190,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 600,
        "shipPieces": 590,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 594
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1144,
        "actions": 12,
        "pickPieces": 148,
        "pickOrders": 0,
        "pickTimes": 148,
        "seedPieces": 144,
        "checkPieces": 426,
        "shipPieces": 426,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 428
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1122,
        "actions": 7,
        "pickPieces": 932,
        "pickOrders": 0,
        "pickTimes": 932,
        "seedPieces": 188,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1051,
        "actions": 9,
        "pickPieces": 983,
        "pickOrders": 0,
        "pickTimes": 982,
        "seedPieces": 66,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1051,
        "actions": 8,
        "pickPieces": 35,
        "pickOrders": 0,
        "pickTimes": 35,
        "seedPieces": 0,
        "checkPieces": 510,
        "shipPieces": 506,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 509
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1048,
        "actions": 9,
        "pickPieces": 876,
        "pickOrders": 0,
        "pickTimes": 876,
        "seedPieces": 170,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1047,
        "actions": 9,
        "pickPieces": 1012,
        "pickOrders": 0,
        "pickTimes": 984,
        "seedPieces": 31,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 982,
        "actions": 10,
        "pickPieces": 47,
        "pickOrders": 0,
        "pickTimes": 47,
        "seedPieces": 0,
        "checkPieces": 470,
        "shipPieces": 464,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 466
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 945,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 645,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 903,
        "actions": 9,
        "pickPieces": 866,
        "pickOrders": 0,
        "pickTimes": 866,
        "seedPieces": 30,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 5,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 883,
        "actions": 7,
        "pickPieces": 814,
        "pickOrders": 0,
        "pickTimes": 814,
        "seedPieces": 67,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 796,
        "actions": 7,
        "pickPieces": 393,
        "pickOrders": 0,
        "pickTimes": 393,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 393,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 718,
        "actions": 9,
        "pickPieces": 581,
        "pickOrders": 0,
        "pickTimes": 581,
        "seedPieces": 133,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 708,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 708,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 703,
        "actions": 5,
        "pickPieces": 351,
        "pickOrders": 0,
        "pickTimes": 351,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 352,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张佳明",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 692,
        "actions": 5,
        "pickPieces": 591,
        "pickOrders": 0,
        "pickTimes": 591,
        "seedPieces": 101,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 662,
        "actions": 5,
        "pickPieces": 330,
        "pickOrders": 0,
        "pickTimes": 330,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 332,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 533,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 533,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 523,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 523,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 510,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 510,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 498,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 498,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 493,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 493,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 440,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 438,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 419,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 419,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 410,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 410,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 392,
        "actions": 15,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 17,
        "shipPieces": 13,
        "inboundPieces": 130,
        "shelfPieces": 8,
        "unpackPieces": 0,
        "expressPrints": 14
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 387,
        "actions": 5,
        "pickPieces": 199,
        "pickOrders": 0,
        "pickTimes": 199,
        "seedPieces": 188,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 384,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 384,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 307,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 307,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 286,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 286,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 258,
        "actions": 5,
        "pickPieces": 129,
        "pickOrders": 0,
        "pickTimes": 129,
        "seedPieces": 129,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 249,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 248,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 242,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 242,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 212,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 48,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 158,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 158,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 141,
        "actions": 10,
        "pickPieces": 104,
        "pickOrders": 0,
        "pickTimes": 104,
        "seedPieces": 0,
        "checkPieces": 18,
        "shipPieces": 18,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 30
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 122,
        "actions": 13,
        "pickPieces": 72,
        "pickOrders": 0,
        "pickTimes": 72,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 23,
        "inboundPieces": 0,
        "shelfPieces": 17,
        "unpackPieces": 0,
        "expressPrints": 24
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 84,
        "actions": 10,
        "pickPieces": 60,
        "pickOrders": 0,
        "pickTimes": 60,
        "seedPieces": 0,
        "checkPieces": 11,
        "shipPieces": 13,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 36
      },
      {
        "name": "临时工6",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 81,
        "actions": 7,
        "pickPieces": 46,
        "pickOrders": 0,
        "pickTimes": 46,
        "seedPieces": 33,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 61,
        "actions": 10,
        "pickPieces": 41,
        "pickOrders": 0,
        "pickTimes": 41,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 19,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 14,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 13,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 11,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 11,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 5,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 5,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 3,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 2,
        "expressPrints": 4
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 6,118 件，拣货 8,610 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 5,487 件，包裹 3,712 个。"
      },
      {
        "level": "info",
        "title": "梁雪丽 产出领先",
        "desc": "发货，累计 3,078 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "吴家兴 产出领先",
        "desc": "上架，累计 2,615 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 2,382 件/次，覆盖 15 类动作。"
      }
    ]
  },
  "2026-07-08": {
    "key": "2026-07-08",
    "label": "7月8日",
    "sourceFile": "仓库人员工作统计_2026-07-08 00_2026-07-08 23_20260708141346_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-08 00:00 - 2026-07-08 23:00",
    "generatedAt": "2026-07-08 14:13:46",
    "totals": {
      "pickPieces": 7220,
      "pickTimes": 7140,
      "pickSkus": 4528,
      "pickOrders": 0,
      "seedOrders": 401,
      "seedPieces": 976,
      "checkTimes": 4622,
      "checkPieces": 4710,
      "weighTimes": 3858,
      "weighPieces": 3858,
      "shipTimes": 4642,
      "shipPieces": 4642,
      "inboundPieces": 420,
      "purchaseReturnPieces": 3,
      "moveTimes": 544,
      "movePieces": 895,
      "returnTimes": 0,
      "returnPieces": 0,
      "shelfPieces": 2628,
      "shelfTimes": 2583,
      "packPieces": 199,
      "qcOrders": 0,
      "qcPieces": 0,
      "unpackParcels": 1797,
      "unpackPieces": 3134,
      "unpackOrders": 2359,
      "stocktakeTimes": 0,
      "stocktakePieces": 0,
      "auditOrders": 48831,
      "auditConfirmOrders": 1128,
      "forceAuditOrders": 399,
      "smartAuditOrders": 47304,
      "expressPrints": 4571,
      "barcodePrints": 85,
      "barcodePrintTimes": 1,
      "tagPrints": 427,
      "tagPrintTimes": 44,
      "activeWorkers": 49,
      "totalWorkload": 24376,
      "roles": 13,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 7220,
        "secondary": 7140,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 976,
        "secondary": 401,
        "unit": "件",
        "subUnit": "单",
        "progress": 14,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 4710,
        "secondary": 4622,
        "unit": "件",
        "subUnit": "次",
        "progress": 65,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 3858,
        "secondary": 3858,
        "unit": "次",
        "subUnit": "件",
        "progress": 53,
        "status": "关注"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 4642,
        "secondary": 4642,
        "unit": "件",
        "subUnit": "次",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 420,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 8,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 2628,
        "secondary": 2583,
        "unit": "件",
        "subUnit": "次",
        "progress": 36,
        "status": "关注"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 3134,
        "secondary": 1797,
        "unit": "件",
        "subUnit": "包",
        "progress": 43,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 5083,
        "secondary": 4571,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 70,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 11093,
        "pickPieces": 1653,
        "shipPieces": 4583,
        "checkPieces": 4668,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 2996,
        "pickPieces": 2798,
        "shipPieces": 5,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 14
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 2950,
        "pickPieces": 3,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2324
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 1570,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1570,
        "shelfPieces": 0
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 1452,
        "pickPieces": 1292,
        "shipPieces": 4,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "（临平仓）",
        "workers": 3,
        "workload": 1230,
        "pickPieces": 334,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 521,
        "shelfPieces": 72
      },
      {
        "role": "副总助理",
        "workers": 4,
        "workload": 867,
        "pickPieces": 506,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 188
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 814,
        "pickPieces": 564,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "售后拆包",
        "workers": 2,
        "workload": 592,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 592,
        "shelfPieces": 0
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 450,
        "pickPieces": 0,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 25
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 283,
        "pickPieces": 0,
        "shipPieces": 42,
        "checkPieces": 42,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 77,
        "pickPieces": 70,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 1,
        "workload": 2,
        "pickPieces": 0,
        "shipPieces": 2,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1402,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 731,
        "shipPieces": 670,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 667
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1201,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 603,
        "shipPieces": 598,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 586
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 1182,
        "actions": 5,
        "pickPieces": 1181,
        "pickOrders": 0,
        "pickTimes": 1102,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1153,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 956,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1074,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 540,
        "shipPieces": 534,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 522
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1072,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 538,
        "shipPieces": 534,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 526
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1032,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 516,
        "shipPieces": 516,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 508
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 987,
        "actions": 9,
        "pickPieces": 865,
        "pickOrders": 0,
        "pickTimes": 865,
        "seedPieces": 106,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 14,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 962,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 485,
        "shipPieces": 477,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 471
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 870,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 526,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 828,
        "actions": 7,
        "pickPieces": 726,
        "pickOrders": 0,
        "pickTimes": 726,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 827,
        "actions": 9,
        "pickPieces": 752,
        "pickOrders": 0,
        "pickTimes": 752,
        "seedPieces": 49,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 766,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 385,
        "shipPieces": 381,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 377
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 762,
        "actions": 9,
        "pickPieces": 691,
        "pickOrders": 0,
        "pickTimes": 691,
        "seedPieces": 68,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 750,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 375,
        "shipPieces": 375,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 369
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 694,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 347,
        "shipPieces": 347,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 346
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 649,
        "actions": 7,
        "pickPieces": 545,
        "pickOrders": 0,
        "pickTimes": 545,
        "seedPieces": 103,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 624,
        "actions": 9,
        "pickPieces": 566,
        "pickOrders": 0,
        "pickTimes": 566,
        "seedPieces": 55,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 568,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 71,
        "unpackPieces": 269,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 508,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 508,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 450,
        "actions": 13,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 420,
        "shelfPieces": 25,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "临时工6",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 410,
        "actions": 9,
        "pickPieces": 334,
        "pickOrders": 0,
        "pickTimes": 334,
        "seedPieces": 73,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 409,
        "actions": 5,
        "pickPieces": 326,
        "pickOrders": 0,
        "pickTimes": 326,
        "seedPieces": 83,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 399,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 399,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 381,
        "actions": 3,
        "pickPieces": 381,
        "pickOrders": 0,
        "pickTimes": 381,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 313,
        "actions": 5,
        "pickPieces": 213,
        "pickOrders": 0,
        "pickTimes": 213,
        "seedPieces": 100,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 313,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 313,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 296,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 148,
        "shipPieces": 148,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 148
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 283,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 283,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 283,
        "actions": 10,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 42,
        "shipPieces": 42,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 45
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 281,
        "actions": 5,
        "pickPieces": 222,
        "pickOrders": 0,
        "pickTimes": 222,
        "seedPieces": 59,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 279,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 279,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 279,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 279,
        "expressPrints": 0
      },
      {
        "name": "张鹏鑫",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 269,
        "actions": 5,
        "pickPieces": 180,
        "pickOrders": 0,
        "pickTimes": 180,
        "seedPieces": 89,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 252,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 252,
        "expressPrints": 0
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 223,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 219,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 220,
        "actions": 5,
        "pickPieces": 129,
        "pickOrders": 0,
        "pickTimes": 129,
        "seedPieces": 91,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "曹达禄",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 215,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 143,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 201,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 201,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 190,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 190,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李存杰",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 186,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 185,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 183,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 183,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 52,
        "actions": 10,
        "pickPieces": 36,
        "pickOrders": 0,
        "pickTimes": 36,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 48,
        "actions": 11,
        "pickPieces": 43,
        "pickOrders": 0,
        "pickTimes": 43,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 29,
        "actions": 8,
        "pickPieces": 27,
        "pickOrders": 0,
        "pickTimes": 27,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 9,
        "actions": 5,
        "pickPieces": 3,
        "pickOrders": 0,
        "pickTimes": 2,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 7,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 7,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 3,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 2,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 2,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 2
      }
    ],
    "alerts": [
      {
        "level": "medium",
        "title": "发货节拍低于拣货",
        "desc": "发货 4,642 件，拣货 7,220 件，建议关注尾段处理。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 3,134 件，包裹 1,797 个。"
      },
      {
        "level": "info",
        "title": "李雯雅 产出领先",
        "desc": "发货，累计 1,402 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "赵银 产出领先",
        "desc": "发货，累计 1,201 件/次，覆盖 7 类动作。"
      },
      {
        "level": "info",
        "title": "曹志龙 产出领先",
        "desc": "拣货，累计 1,182 件/次，覆盖 5 类动作。"
      }
    ]
  },
  "2026-07-07": {
    "key": "2026-07-07",
    "label": "7月7日",
    "sourceFile": "仓库人员工作统计_2026-07-07 00~2026-07-07 23_20260711111311_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-07 00:00 - 2026-07-07 23:00",
    "generatedAt": "2026-07-11 11:13:11",
    "totals": {
      "pickPieces": 15036,
      "pickTimes": 15012,
      "pickSkus": 9612,
      "pickOrders": 10849,
      "seedOrders": 1390,
      "seedPieces": 4037,
      "checkTimes": 12793,
      "checkPieces": 16316,
      "weighTimes": 11895,
      "weighPieces": 14795,
      "shipTimes": 12907,
      "shipPieces": 16799,
      "inboundPieces": 4371,
      "purchaseReturnPieces": 233,
      "moveTimes": 4460,
      "movePieces": 6607,
      "returnTimes": 171,
      "returnPieces": 171,
      "shelfPieces": 14393,
      "shelfTimes": 12037,
      "packPieces": 476,
      "qcOrders": 4,
      "qcPieces": 77,
      "unpackParcels": 6113,
      "unpackPieces": 8650,
      "unpackOrders": 8230,
      "stocktakeTimes": 1603,
      "stocktakePieces": 1271,
      "auditOrders": 219536,
      "auditConfirmOrders": 11104,
      "forceAuditOrders": 1582,
      "smartAuditOrders": 206850,
      "expressPrints": 12920,
      "barcodePrints": 127,
      "barcodePrintTimes": 3,
      "tagPrints": 678,
      "tagPrintTimes": 137,
      "activeWorkers": 51,
      "totalWorkload": 87209,
      "roles": 16,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 15036,
        "secondary": 15012,
        "unit": "件",
        "subUnit": "次",
        "progress": 90,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 4037,
        "secondary": 1390,
        "unit": "件",
        "subUnit": "单",
        "progress": 24,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 16316,
        "secondary": 12793,
        "unit": "件",
        "subUnit": "次",
        "progress": 97,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11895,
        "secondary": 14795,
        "unit": "次",
        "subUnit": "件",
        "progress": 71,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 16799,
        "secondary": 12907,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 4371,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 26,
        "status": "积压"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 14393,
        "secondary": 12037,
        "unit": "件",
        "subUnit": "次",
        "progress": 86,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 8650,
        "secondary": 6113,
        "unit": "件",
        "subUnit": "包",
        "progress": 51,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 13725,
        "secondary": 12920,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 82,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 14,
        "workload": 34476,
        "pickPieces": 4077,
        "shipPieces": 14710,
        "checkPieces": 14550,
        "unpackPieces": 0,
        "shelfPieces": 24
      },
      {
        "role": "上架",
        "workers": 8,
        "workload": 15738,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 11533
      },
      {
        "role": "拆包",
        "workers": 7,
        "workload": 7066,
        "pickPieces": 1506,
        "shipPieces": 26,
        "checkPieces": 0,
        "unpackPieces": 5027,
        "shelfPieces": 20
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 6682,
        "pickPieces": 5312,
        "shipPieces": 200,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "（临平仓）",
        "workers": 3,
        "workload": 4607,
        "pickPieces": 789,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 1609,
        "shelfPieces": 1027
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 4469,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 19
      },
      {
        "role": "售后拆包",
        "workers": 3,
        "workload": 4244,
        "pickPieces": 0,
        "shipPieces": 1115,
        "checkPieces": 1115,
        "unpackPieces": 2014,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 3311,
        "pickPieces": 11,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1057
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 2460,
        "pickPieces": 0,
        "shipPieces": 438,
        "checkPieces": 442,
        "unpackPieces": 0,
        "shelfPieces": 612
      },
      {
        "role": "配货员",
        "workers": 1,
        "workload": 1933,
        "pickPieces": 1510,
        "shipPieces": 57,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 1
      },
      {
        "role": "副总助理",
        "workers": 3,
        "workload": 1194,
        "pickPieces": 397,
        "shipPieces": 209,
        "checkPieces": 209,
        "unpackPieces": 0,
        "shelfPieces": 91
      },
      {
        "role": "库维员",
        "workers": 2,
        "workload": 544,
        "pickPieces": 301,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 236,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 172,
        "pickPieces": 138,
        "shipPieces": 3,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 77,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "裴永俊",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 4763,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 3154,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 4469,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 4103,
        "shelfPieces": 19,
        "unpackPieces": 0,
        "expressPrints": 22
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4350,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2175,
        "shipPieces": 2175,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1637
      },
      {
        "name": "梁雪丽",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4280,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2140,
        "shipPieces": 2140,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1801
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3914,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2549,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3742,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2825,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3730,
        "actions": 11,
        "pickPieces": 48,
        "pickOrders": 27,
        "pickTimes": 48,
        "seedPieces": 0,
        "checkPieces": 1841,
        "shipPieces": 1841,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1615
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3714,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1857,
        "shipPieces": 1857,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1637
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 3311,
        "actions": 10,
        "pickPieces": 11,
        "pickOrders": 1,
        "pickTimes": 11,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1057,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3254,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1627,
        "shipPieces": 1627,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1042
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3178,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1589,
        "shipPieces": 1589,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1119
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 2636,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1027,
        "unpackPieces": 830,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 2460,
        "actions": 17,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 442,
        "shipPieces": 438,
        "inboundPieces": 32,
        "shelfPieces": 612,
        "unpackPieces": 0,
        "expressPrints": 360
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2370,
        "actions": 14,
        "pickPieces": 1954,
        "pickOrders": 1567,
        "pickTimes": 1946,
        "seedPieces": 291,
        "checkPieces": 0,
        "shipPieces": 65,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2294,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1147,
        "shipPieces": 1147,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 796
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 2230,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1115,
        "shipPieces": 1115,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 859
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2210,
        "actions": 8,
        "pickPieces": 1696,
        "pickOrders": 1095,
        "pickTimes": 1696,
        "seedPieces": 448,
        "checkPieces": 0,
        "shipPieces": 66,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2208,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1104,
        "shipPieces": 1104,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1016
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2155,
        "actions": 11,
        "pickPieces": 17,
        "pickOrders": 7,
        "pickTimes": 17,
        "seedPieces": 0,
        "checkPieces": 1069,
        "shipPieces": 1069,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 836
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2102,
        "actions": 10,
        "pickPieces": 1662,
        "pickOrders": 1239,
        "pickTimes": 1662,
        "seedPieces": 368,
        "checkPieces": 0,
        "shipPieces": 69,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "俞建伟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2100,
        "actions": 10,
        "pickPieces": 1671,
        "pickOrders": 1257,
        "pickTimes": 1671,
        "seedPieces": 369,
        "checkPieces": 0,
        "shipPieces": 58,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 2039,
        "actions": 10,
        "pickPieces": 1506,
        "pickOrders": 1058,
        "pickTimes": 1506,
        "seedPieces": 487,
        "checkPieces": 0,
        "shipPieces": 26,
        "inboundPieces": 0,
        "shelfPieces": 20,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1933,
        "actions": 12,
        "pickPieces": 1510,
        "pickOrders": 1182,
        "pickTimes": 1499,
        "seedPieces": 350,
        "checkPieces": 0,
        "shipPieces": 57,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1671,
        "actions": 12,
        "pickPieces": 1119,
        "pickOrders": 767,
        "pickTimes": 1119,
        "seedPieces": 455,
        "checkPieces": 0,
        "shipPieces": 24,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1319,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1319,
        "expressPrints": 0
      },
      {
        "name": "临时工6",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 1192,
        "actions": 6,
        "pickPieces": 789,
        "pickOrders": 561,
        "pickTimes": 789,
        "seedPieces": 403,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1061,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1061,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1050,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1050,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1049,
        "actions": 10,
        "pickPieces": 874,
        "pickOrders": 627,
        "pickTimes": 874,
        "seedPieces": 145,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 953,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 953,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 937,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 932,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 933,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 926,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 893,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 893,
        "expressPrints": 0
      },
      {
        "name": "李娟",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 884,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 884,
        "expressPrints": 0
      },
      {
        "name": "盛瑶",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 875,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 875,
        "expressPrints": 0
      },
      {
        "name": "临时工7",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 779,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 779,
        "expressPrints": 2
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 751,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 750,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "刘志文",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 681,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 397,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡骏",
        "role": "副总助理",
        "warehouse": "",
        "workload": 598,
        "actions": 13,
        "pickPieces": 111,
        "pickOrders": 54,
        "pickTimes": 111,
        "seedPieces": 69,
        "checkPieces": 209,
        "shipPieces": 209,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 135
      },
      {
        "name": "张鹏鑫",
        "role": "副总助理",
        "warehouse": "临平仓",
        "workload": 506,
        "actions": 8,
        "pickPieces": 286,
        "pickOrders": 134,
        "pickTimes": 286,
        "seedPieces": 219,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 306,
        "actions": 6,
        "pickPieces": 171,
        "pickOrders": 92,
        "pickTimes": 171,
        "seedPieces": 135,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 304,
        "actions": 12,
        "pickPieces": 227,
        "pickOrders": 124,
        "pickTimes": 227,
        "seedPieces": 14,
        "checkPieces": 0,
        "shipPieces": 55,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 238,
        "actions": 10,
        "pickPieces": 130,
        "pickOrders": 76,
        "pickTimes": 130,
        "seedPieces": 93,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 236,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 236,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 189,
        "actions": 18,
        "pickPieces": 121,
        "pickOrders": 108,
        "pickTimes": 121,
        "seedPieces": 0,
        "checkPieces": 1,
        "shipPieces": 24,
        "inboundPieces": 0,
        "shelfPieces": 18,
        "unpackPieces": 0,
        "expressPrints": 28
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 137,
        "actions": 14,
        "pickPieces": 110,
        "pickOrders": 102,
        "pickTimes": 110,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 3,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 2
      },
      {
        "name": "王子民",
        "role": "副总助理",
        "warehouse": "",
        "workload": 90,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 90,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "欧阳",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 77,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 35,
        "actions": 12,
        "pickPieces": 28,
        "pickOrders": 27,
        "pickTimes": 28,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "冯建豪",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 17,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 6,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 6,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 5
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 16,799 件，与拣货 15,036 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 8,650 件，包裹 6,113 个。"
      },
      {
        "level": "info",
        "title": "裴永俊 产出领先",
        "desc": "上架，累计 4,763 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 4,469 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "张妹花 产出领先",
        "desc": "发货，累计 4,350 件/次，覆盖 7 类动作。"
      }
    ]
  },
  "2026-07-06": {
    "key": "2026-07-06",
    "label": "7月6日",
    "sourceFile": "仓库人员工作统计_2026-07-06 00~2026-07-06 23_20260711111237_22955421.xlsx",
    "sourceType": "single-day",
    "sourceNote": "单日报表，排名按当天数据计算",
    "rangeLabel": "2026-07-06 00:00 - 2026-07-06 23:00",
    "generatedAt": "2026-07-11 11:12:37",
    "totals": {
      "pickPieces": 15584,
      "pickTimes": 15527,
      "pickSkus": 8110,
      "pickOrders": 11768,
      "seedOrders": 1074,
      "seedPieces": 2676,
      "checkTimes": 12574,
      "checkPieces": 14983,
      "weighTimes": 11534,
      "weighPieces": 13383,
      "shipTimes": 12666,
      "shipPieces": 15508,
      "inboundPieces": 5286,
      "purchaseReturnPieces": 167,
      "moveTimes": 2306,
      "movePieces": 3646,
      "returnTimes": 168,
      "returnPieces": 168,
      "shelfPieces": 17893,
      "shelfTimes": 12257,
      "packPieces": 523,
      "qcOrders": 7,
      "qcPieces": 81,
      "unpackParcels": 6129,
      "unpackPieces": 9189,
      "unpackOrders": 8385,
      "stocktakeTimes": 2,
      "stocktakePieces": 2,
      "auditOrders": 227384,
      "auditConfirmOrders": 8272,
      "forceAuditOrders": 1301,
      "smartAuditOrders": 217811,
      "expressPrints": 12886,
      "barcodePrints": 257,
      "barcodePrintTimes": 7,
      "tagPrints": 1220,
      "tagPrintTimes": 141,
      "activeWorkers": 47,
      "totalWorkload": 82860,
      "roles": 15,
      "warehouses": 1
    },
    "processes": [
      {
        "key": "pick",
        "name": "拣货",
        "primary": 15584,
        "secondary": 15527,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "seed",
        "name": "播种",
        "primary": 2676,
        "secondary": 1074,
        "unit": "件",
        "subUnit": "单",
        "progress": 15,
        "status": "积压"
      },
      {
        "key": "check",
        "name": "验货",
        "primary": 14983,
        "secondary": 12574,
        "unit": "件",
        "subUnit": "次",
        "progress": 84,
        "status": "顺畅"
      },
      {
        "key": "weigh",
        "name": "称重",
        "primary": 11534,
        "secondary": 13383,
        "unit": "次",
        "subUnit": "件",
        "progress": 64,
        "status": "顺畅"
      },
      {
        "key": "ship",
        "name": "发货",
        "primary": 15508,
        "secondary": 12666,
        "unit": "件",
        "subUnit": "次",
        "progress": 87,
        "status": "顺畅"
      },
      {
        "key": "inbound",
        "name": "入库",
        "primary": 5286,
        "secondary": 0,
        "unit": "件",
        "subUnit": "",
        "progress": 30,
        "status": "关注"
      },
      {
        "key": "shelf",
        "name": "上下架",
        "primary": 17893,
        "secondary": 12257,
        "unit": "件",
        "subUnit": "次",
        "progress": 100,
        "status": "顺畅"
      },
      {
        "key": "unpack",
        "name": "售后拆包",
        "primary": 9189,
        "secondary": 6129,
        "unit": "件",
        "subUnit": "包",
        "progress": 51,
        "status": "关注"
      },
      {
        "key": "print",
        "name": "单据打印",
        "primary": 14363,
        "secondary": 12886,
        "unit": "张",
        "subUnit": "快递单",
        "progress": 80,
        "status": "顺畅"
      }
    ],
    "roles": [
      {
        "role": "发货",
        "workers": 15,
        "workload": 31720,
        "pickPieces": 2624,
        "shipPieces": 13556,
        "checkPieces": 13381,
        "unpackPieces": 0,
        "shelfPieces": 828
      },
      {
        "role": "上架",
        "workers": 6,
        "workload": 16415,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 14436
      },
      {
        "role": "拣货",
        "workers": 3,
        "workload": 6850,
        "pickPieces": 5762,
        "shipPieces": 133,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 62
      },
      {
        "role": "拆包",
        "workers": 5,
        "workload": 5529,
        "pickPieces": 1491,
        "shipPieces": 78,
        "checkPieces": 0,
        "unpackPieces": 3765,
        "shelfPieces": 3
      },
      {
        "role": "统计组长",
        "workers": 1,
        "workload": 5431,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 41
      },
      {
        "role": "售后拆包",
        "workers": 4,
        "workload": 5277,
        "pickPieces": 0,
        "shipPieces": 1140,
        "checkPieces": 1140,
        "unpackPieces": 2997,
        "shelfPieces": 0
      },
      {
        "role": "库维员",
        "workers": 3,
        "workload": 4312,
        "pickPieces": 773,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2393
      },
      {
        "role": "配货员",
        "workers": 2,
        "workload": 3462,
        "pickPieces": 2769,
        "shipPieces": 83,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 78
      },
      {
        "role": "（临平仓）",
        "workers": 2,
        "workload": 2076,
        "pickPieces": 909,
        "shipPieces": 10,
        "checkPieces": 0,
        "unpackPieces": 892,
        "shelfPieces": 16
      },
      {
        "role": "审单员",
        "workers": 1,
        "workload": 1465,
        "pickPieces": 0,
        "shipPieces": 462,
        "checkPieces": 462,
        "unpackPieces": 0,
        "shelfPieces": 4
      },
      {
        "role": "异常件处理",
        "workers": 2,
        "workload": 161,
        "pickPieces": 131,
        "shipPieces": 1,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 2
      },
      {
        "role": "质检组长",
        "workers": 1,
        "workload": 81,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "统计",
        "workers": 1,
        "workload": 63,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      },
      {
        "role": "仓库副主管",
        "workers": 1,
        "workload": 18,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 14
      },
      {
        "role": "面辅料管理",
        "workers": 2,
        "workload": 0,
        "pickPieces": 0,
        "shipPieces": 0,
        "checkPieces": 0,
        "unpackPieces": 0,
        "shelfPieces": 0
      }
    ],
    "workers": [
      {
        "name": "尤佳辉",
        "role": "统计组长",
        "warehouse": "临平仓",
        "workload": 5431,
        "actions": 12,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 5211,
        "shelfPieces": 41,
        "unpackPieces": 0,
        "expressPrints": 11
      },
      {
        "name": "王宁",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 5138,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 4608,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵银",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 4236,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 2118,
        "shipPieces": 2118,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1895
      },
      {
        "name": "魏浩杰",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3806,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2852,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈强",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3696,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1848,
        "shipPieces": 1848,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1633
      },
      {
        "name": "蒋丽娟",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3378,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1689,
        "shipPieces": 1689,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1493
      },
      {
        "name": "蒋周鹏",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 3266,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 2918,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "庞海春",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3262,
        "actions": 5,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1631,
        "shipPieces": 1631,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1373
      },
      {
        "name": "李雯雅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 3220,
        "actions": 9,
        "pickPieces": 22,
        "pickOrders": 15,
        "pickTimes": 22,
        "seedPieces": 0,
        "checkPieces": 1599,
        "shipPieces": 1599,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1528
      },
      {
        "name": "张妹花",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2759,
        "actions": 12,
        "pickPieces": 69,
        "pickOrders": 66,
        "pickTimes": 69,
        "seedPieces": 0,
        "checkPieces": 1345,
        "shipPieces": 1345,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 1212
      },
      {
        "name": "曹志龙",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2668,
        "actions": 10,
        "pickPieces": 2214,
        "pickOrders": 1829,
        "pickTimes": 2201,
        "seedPieces": 364,
        "checkPieces": 0,
        "shipPieces": 74,
        "inboundPieces": 0,
        "shelfPieces": 16,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "苏娟",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 2280,
        "actions": 7,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 1140,
        "shipPieces": 1140,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 756
      },
      {
        "name": "黄琴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2268,
        "actions": 9,
        "pickPieces": 50,
        "pickOrders": 50,
        "pickTimes": 50,
        "seedPieces": 0,
        "checkPieces": 1109,
        "shipPieces": 1109,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 955
      },
      {
        "name": "易奎",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2112,
        "actions": 12,
        "pickPieces": 1763,
        "pickOrders": 1372,
        "pickTimes": 1752,
        "seedPieces": 264,
        "checkPieces": 0,
        "shipPieces": 53,
        "inboundPieces": 0,
        "shelfPieces": 28,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "张川",
        "role": "拣货",
        "warehouse": "临平仓",
        "workload": 2070,
        "actions": 10,
        "pickPieces": 1785,
        "pickOrders": 1518,
        "pickTimes": 1776,
        "seedPieces": 261,
        "checkPieces": 0,
        "shipPieces": 6,
        "inboundPieces": 0,
        "shelfPieces": 18,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "魏文敬",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 2013,
        "actions": 15,
        "pickPieces": 98,
        "pickOrders": 79,
        "pickTimes": 98,
        "seedPieces": 24,
        "checkPieces": 945,
        "shipPieces": 945,
        "inboundPieces": 0,
        "shelfPieces": 1,
        "unpackPieces": 0,
        "expressPrints": 766
      },
      {
        "name": "魏子晴",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1854,
        "actions": 11,
        "pickPieces": 36,
        "pickOrders": 1,
        "pickTimes": 36,
        "seedPieces": 0,
        "checkPieces": 891,
        "shipPieces": 927,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 662
      },
      {
        "name": "王成",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1848,
        "actions": 7,
        "pickPieces": 230,
        "pickOrders": 0,
        "pickTimes": 230,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1247,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "胡猛",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1817,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1675,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "赵名扬",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1803,
        "actions": 10,
        "pickPieces": 1482,
        "pickOrders": 1266,
        "pickTimes": 1482,
        "seedPieces": 232,
        "checkPieces": 0,
        "shipPieces": 29,
        "inboundPieces": 0,
        "shelfPieces": 60,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "董树安",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1764,
        "actions": 12,
        "pickPieces": 1491,
        "pickOrders": 1227,
        "pickTimes": 1473,
        "seedPieces": 190,
        "checkPieces": 0,
        "shipPieces": 78,
        "inboundPieces": 0,
        "shelfPieces": 3,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田立立",
        "role": "配货员",
        "warehouse": "临平仓",
        "workload": 1659,
        "actions": 10,
        "pickPieces": 1287,
        "pickOrders": 961,
        "pickTimes": 1287,
        "seedPieces": 300,
        "checkPieces": 0,
        "shipPieces": 54,
        "inboundPieces": 0,
        "shelfPieces": 18,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "郭宝亮",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 1572,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 1569,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "王凤龙",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1570,
        "actions": 12,
        "pickPieces": 1136,
        "pickOrders": 794,
        "pickTimes": 1130,
        "seedPieces": 255,
        "checkPieces": 0,
        "shipPieces": 61,
        "inboundPieces": 0,
        "shelfPieces": 17,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陈艳琳",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1533,
        "actions": 8,
        "pickPieces": 1086,
        "pickOrders": 771,
        "pickTimes": 1086,
        "seedPieces": 412,
        "checkPieces": 0,
        "shipPieces": 35,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "黎白",
        "role": "审单员",
        "warehouse": "临平仓",
        "workload": 1465,
        "actions": 17,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 462,
        "shipPieces": 462,
        "inboundPieces": 12,
        "shelfPieces": 4,
        "unpackPieces": 0,
        "expressPrints": 375
      },
      {
        "name": "李元",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1335,
        "actions": 7,
        "pickPieces": 180,
        "pickOrders": 0,
        "pickTimes": 180,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 731,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李文静",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1231,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1231,
        "expressPrints": 0
      },
      {
        "name": "余俊文",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 1229,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 766,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "临时工6",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 1184,
        "actions": 10,
        "pickPieces": 909,
        "pickOrders": 654,
        "pickTimes": 909,
        "seedPieces": 249,
        "checkPieces": 0,
        "shipPieces": 10,
        "inboundPieces": 0,
        "shelfPieces": 16,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "田世汪",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1174,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1174,
        "expressPrints": 0
      },
      {
        "name": "魏晏黎",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1160,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1160,
        "expressPrints": 0
      },
      {
        "name": "蒋周斌",
        "role": "库维员",
        "warehouse": "临平仓",
        "workload": 1129,
        "actions": 7,
        "pickPieces": 363,
        "pickOrders": 0,
        "pickTimes": 363,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 415,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "李睛丽",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 1036,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1036,
        "expressPrints": 0
      },
      {
        "name": "王碧飞",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 1009,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 1009,
        "expressPrints": 0
      },
      {
        "name": "临时工3",
        "role": "（临平仓）",
        "warehouse": "",
        "workload": 892,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 892,
        "expressPrints": 0
      },
      {
        "name": "吴家兴",
        "role": "上架",
        "warehouse": "临平仓",
        "workload": 816,
        "actions": 4,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 814,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "秦雨婷",
        "role": "售后拆包",
        "warehouse": "临平仓",
        "workload": 787,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 787,
        "expressPrints": 0
      },
      {
        "name": "邹丽玉",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 420,
        "actions": 9,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 206,
        "shipPieces": 206,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 206
      },
      {
        "name": "杨金玲",
        "role": "拆包",
        "warehouse": "临平仓",
        "workload": 365,
        "actions": 3,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 365,
        "expressPrints": 0
      },
      {
        "name": "宿仙梅",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 157,
        "actions": 16,
        "pickPieces": 102,
        "pickOrders": 90,
        "pickTimes": 102,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 40,
        "unpackPieces": 0,
        "expressPrints": 7
      },
      {
        "name": "肖林",
        "role": "发货",
        "warehouse": "临平仓",
        "workload": 125,
        "actions": 14,
        "pickPieces": 25,
        "pickOrders": 9,
        "pickTimes": 25,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 42,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "周吉雨",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 92,
        "actions": 14,
        "pickPieces": 67,
        "pickOrders": 66,
        "pickTimes": 67,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 1,
        "inboundPieces": 0,
        "shelfPieces": 2,
        "unpackPieces": 0,
        "expressPrints": 1
      },
      {
        "name": "王来宝",
        "role": "质检组长",
        "warehouse": "临平仓",
        "workload": 81,
        "actions": 2,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "关晶晶",
        "role": "异常件处理",
        "warehouse": "临平仓",
        "workload": 69,
        "actions": 12,
        "pickPieces": 64,
        "pickOrders": 62,
        "pickTimes": 64,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 3
      },
      {
        "name": "梁正志",
        "role": "统计",
        "warehouse": "临平仓",
        "workload": 63,
        "actions": 1,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 63,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "陶峰",
        "role": "仓库副主管",
        "warehouse": "临平仓",
        "workload": 18,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 14,
        "unpackPieces": 0,
        "expressPrints": 0
      },
      {
        "name": "余海女",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 6
      },
      {
        "name": "何建珍",
        "role": "面辅料管理",
        "warehouse": "临平仓",
        "workload": 0,
        "actions": 6,
        "pickPieces": 0,
        "pickOrders": 0,
        "pickTimes": 0,
        "seedPieces": 0,
        "checkPieces": 0,
        "shipPieces": 0,
        "inboundPieces": 0,
        "shelfPieces": 0,
        "unpackPieces": 0,
        "expressPrints": 4
      }
    ],
    "alerts": [
      {
        "level": "info",
        "title": "发货节拍匹配",
        "desc": "发货 15,508 件，与拣货 15,584 件保持联动。"
      },
      {
        "level": "info",
        "title": "售后拆包持续作业",
        "desc": "拆包 9,189 件，包裹 6,129 个。"
      },
      {
        "level": "info",
        "title": "尤佳辉 产出领先",
        "desc": "统计组长，累计 5,431 件/次，覆盖 12 类动作。"
      },
      {
        "level": "info",
        "title": "王宁 产出领先",
        "desc": "上架，累计 5,138 件/次，覆盖 4 类动作。"
      },
      {
        "level": "info",
        "title": "赵银 产出领先",
        "desc": "发货，累计 4,236 件/次，覆盖 7 类动作。"
      }
    ]
  }
};
const DATASET_DATE_KEYS = Object.keys(DATASETS).sort();
const LATEST_DATE_KEY = DATASET_DATE_KEYS.at(-1);
const TODAY_DATE_KEY = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai' }).format(new Date());
const DEFAULT_DATE_KEY = DATASETS[TODAY_DATE_KEY] ? TODAY_DATE_KEY : LATEST_DATE_KEY;
let DATA = DATASETS[DEFAULT_DATE_KEY];
const AUXILIARY_WORKLOAD_THRESHOLD = 25;

const formatter = new Intl.NumberFormat("zh-CN");
const state = {
  role: "全部",
  query: "",
  workType: "pickPieces",
  dateKey: DEFAULT_DATE_KEY,
  dateMenuOpen: "",
  page: "qc",
  qualityQuery: "",
  qualityCategory: "all",
  qualityType: "all",
  qualityStatus: "all",
  qualitySort: "priority",
  workspaceTabs: [],
};

const WORK_TYPES = [
  { key: "pickPieces", label: "\u62e3\u8d27", unit: "\u4ef6" },
  { key: "shipPieces", label: "\u53d1\u8d27", unit: "\u4ef6" },
  { key: "shelfPieces", label: "\u4e0a\u4e0b\u67b6", unit: "\u4ef6" },
  { key: "unpackPieces", label: "\u62c6\u5305", unit: "\u4ef6" },
  { key: "inboundPieces", label: "\u5165\u5e93", unit: "\u4ef6" },
];

const PAGE_TITLES = {
  home: "仓库作业驾驶舱",
  "warehouse-people": "仓库人员看板",
  qc: "品控驾驶舱",
  alerts: "异常处理中心",
  "quality-list": "\u8d28\u91cf\u6570\u636e\u8868\u7b5b\u9009"
};

const $ = (selector) => document.querySelector(selector);

const REALTIME_FILES = {
  overview: "./data/warehouse-overview.json",
  exceptions: "./data/warehouse-exceptions.json",
  inbound: "./data/warehouse-inbound.json",
};

const realtimeState = {
  overview: null,
  exceptions: null,
  inbound: null,
};

function number(value) {
  return formatter.format(Math.max(0, Math.round(value)));
}

function liveValue(base, spread = 0.008) {
  const wave = Math.sin(Date.now() / 2800) * spread;
  return base * (1 + wave);
}

function statusClass(status) {
  if (status === "顺畅") return "ok";
  if (status === "关注") return "watch";
  return "risk";
}

function setClock() {
  const now = new Date();
  document.querySelectorAll("[data-live-clock]").forEach((clock) => { clock.textContent = now.toLocaleString("zh-CN", {
    hour12: false,
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  });
}

function activeWorkType() {
  return WORK_TYPES.find((type) => type.key === state.workType) || WORK_TYPES[0];
}

function valueFor(worker, key) {
  return Number(worker[key] || 0);
}

function topWorkersFor(type, limit = 5) {
  const grouped = new Map();
  DATA.workers.forEach((worker) => {
    const workload = valueFor(worker, type.key);
    if (workload <= 0) return;
    const key = `${worker.name}::${worker.warehouse}`;
    if (!grouped.has(key)) grouped.set(key, { name: worker.name, warehouse: worker.warehouse, [type.key]: 0 });
    grouped.get(key)[type.key] += workload;
  });
  return [...grouped.values()]
    .sort((left, right) => valueFor(right, type.key) - valueFor(left, type.key))
    .slice(0, limit);
}

function workTypeHits(worker) {
  return WORK_TYPES.filter((type) => valueFor(worker, type.key) > 0);
}

function multiRoleWorkers() {
  const byName = new Map();
  DATA.workers.forEach((worker) => {
    if (!byName.has(worker.name)) byName.set(worker.name, []);
    byName.get(worker.name).push(worker);
  });

  const rows = [];
  byName.forEach((records, name) => {
    const roleCount = new Set(records.map((worker) => worker.role)).size;
    const typeCount = new Set(records.flatMap((worker) => workTypeHits(worker).map((type) => type.key))).size;
    if (roleCount > 1 || typeCount > 1) {
      rows.push({
        name,
        records,
        roleCount,
        typeCount,
        total: records.reduce((sum, worker) => sum + worker.workload, 0),
      });
    }
  });

  return rows.sort((left, right) => right.total - left.total).slice(0, 8);
}


async function fetchJson(path, { retries = 2, retryDelay = 400 } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(`${path}?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${path} ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await new Promise((resolve) => setTimeout(resolve, retryDelay * (attempt + 1)));
    }
  }
  throw lastError;
}

function percent(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function buildRealtimeFallback() {
  const t = DATA.totals;
  const pick = t.pickPieces || 0;
  const ship = t.shipPieces || 0;
  const inbound = t.inboundPieces || 0;
  const shelf = t.shelfPieces || 0;
  const unpack = t.unpackPieces || 0;
  const shipGap = Math.max(0, pick - ship);
  const inboundGap = Math.max(0, inbound - shelf);
  return {
    overview: {
      label: DATA.label,
      updatedAt: DATA.generatedAt,
      headline: {
        title: "仓库实时总览",
        mainMetric: { label: "总处理量", value: t.totalWorkload || 0, unit: "件/次" },
        progress: { label: "发货/拣货进度", value: Math.min(100, percent(ship, pick)), unit: "%" },
      },
      cards: [
        { label: "今日拣货", value: pick, unit: "件", sub: `${number(t.pickTimes || 0)} 次` },
        { label: "今日发货", value: ship, unit: "件", sub: `${number(t.shipTimes || 0)} 次` },
        { label: "今日入库", value: inbound, unit: "件", sub: `${t.warehouses || 0} 个仓` },
        { label: "上下架", value: shelf, unit: "件", sub: `${number(t.shelfTimes || 0)} 次` },
        { label: "售后拆包", value: unpack, unit: "件", sub: `${number(t.unpackParcels || 0)} 包` },
        { label: "在线作业", value: t.activeWorkers || 0, unit: "人", sub: `${t.roles || 0} 个岗位` },
      ],
    },
    exceptions: {
      updatedAt: DATA.generatedAt,
      items: [
        { type: "发货节拍", title: "拣货与发货差额", count: shipGap, unit: "件", level: shipGap > 1500 ? "high" : shipGap > 500 ? "medium" : "low", desc: "观察拣货后是否在发货端形成积压。" },
        { type: "入库衔接", title: "入库与上架差额", count: inboundGap, unit: "件", level: inboundGap > 1000 ? "high" : inboundGap > 300 ? "medium" : "low", desc: "观察入库后是否及时进入上架。" },
        { type: "售后压力", title: "拆包处理量", count: unpack, unit: "件", level: unpack > 3000 ? "high" : unpack > 1200 ? "medium" : "low", desc: "观察退件拆包压力。" },
      ],
    },
    inbound: {
      updatedAt: DATA.generatedAt,
      sections: [
        { name: "采购入库", metrics: [{ label: "已入库件数", value: inbound, unit: "件" }, { label: "待上架参考", value: Math.max(0, inbound - shelf), unit: "件" }, { label: "上下架参考", value: shelf, unit: "件" }] },
        { name: "销退入库", metrics: [{ label: "拆包件数", value: unpack, unit: "件" }, { label: "采购退货", value: t.purchaseReturnPieces || 0, unit: "件" }, { label: "售后包裹", value: t.unpackParcels || 0, unit: "包" }] },
        { name: "入库人员效率", metrics: [{ label: "入库作业件数", value: inbound, unit: "件" }, { label: "上下架件数", value: shelf, unit: "件" }, { label: "上下架次数", value: t.shelfTimes || 0, unit: "次" }] },
      ],
    },
  };
}

async function loadRealtimeModules() {
  try {
    const [overview, exceptions, inbound] = await Promise.all([
      fetchJson(REALTIME_FILES.overview),
      fetchJson(REALTIME_FILES.exceptions),
      fetchJson(REALTIME_FILES.inbound),
    ]);
    realtimeState.overview = overview;
    realtimeState.exceptions = exceptions;
    realtimeState.inbound = inbound;
  } catch (error) {
    const fallback = buildRealtimeFallback();
    realtimeState.overview = fallback.overview;
    realtimeState.exceptions = fallback.exceptions;
    realtimeState.inbound = fallback.inbound;
  }
  renderRealtimeModules();
}

function severityText(level) {
  if (level === "high") return "高风险";
  if (level === "medium") return "关注";
  return "正常";
}

function renderWarehouseOverview(overview, exceptions) {
  if (!overview || !exceptions || !$("#warehouseOverviewHero")) return;
  const headline = overview.headline;
  const exceptionItems = exceptions.items || [];
  const highRisk = exceptionItems.filter((item) => item.level === "high").length;
  const mediumRisk = exceptionItems.filter((item) => item.level === "medium").length;
  const exceptionTotal = exceptionItems.reduce((sum, item) => sum + Number(item.count || 0), 0);
  const metricFor = (label) => overview.cards.find((card) => card.label === label) || { label, value: 0, unit: "件", sub: "暂无数据" };
  const pick = metricFor("今日拣货");
  const ship = metricFor("今日发货");

  $("#overviewUpdatedAt").textContent = overview.updatedAt ? `更新 ${overview.updatedAt}` : "";
  $("#warehouseOverviewHero").innerHTML = `
    <article class="overview-total-card">
      <span>${headline.mainMetric.label}</span>
      <strong>${number(headline.mainMetric.value)}<small>${headline.mainMetric.unit}</small></strong>
      <em>${overview.label || DATA.label} · ${overview.updatedAt || DATA.generatedAt}</em>
    </article>
    <article class="overview-metric-card">
      <span>${pick.label}</span>
      <strong>${number(pick.value)}<small>${pick.unit}</small></strong>
      <em>${pick.sub || ""}</em>
    </article>
    <article class="overview-metric-card">
      <span>${ship.label}</span>
      <strong>${number(ship.value)}<small>${ship.unit}</small></strong>
      <em>${ship.sub || ""}</em>
    </article>
    <article class="overview-metric-card anomaly ${highRisk ? "high" : mediumRisk ? "medium" : "low"}">
      <span>异常件</span>
      <strong>${number(exceptionTotal)}<small>件</small></strong>
      <em>${highRisk ? `${highRisk} 个高风险` : mediumRisk ? `${mediumRisk} 个需关注` : "当前平稳"}</em>
    </article>
  `;

  const priorityItems = exceptionItems.filter((item) => item.level !== "low").slice(0, 3);
  $("#overviewAnomalySummary").innerHTML = `
    <div class="overview-anomaly-title"><span>异常概览</span><strong>${priorityItems.length ? `${priorityItems.length} 项需关注` : "当前平稳"}</strong></div>
    <div class="overview-anomaly-list">
      ${priorityItems.length
        ? priorityItems
            .map(
              (item) => `
                <article class="overview-anomaly-item ${item.level}">
                  <div class="overview-anomaly-item-head"><span>${item.type}</span><b>${number(item.count)}<small>${item.unit}</small></b></div>
                  <strong>${item.title}</strong>
                </article>
              `,
            )
            .join("")
        : '<p class="overview-empty">暂无需关注的异常数据</p>'}
    </div>
  `;

  $("#warehouseOverviewCards").innerHTML = overview.cards
    .map(
      (card) => `
        <article class="realtime-card">
          <span>${card.label}</span>
          <strong>${number(card.value)}<small>${card.unit}</small></strong>
          <em>${card.sub || ""}</em>
        </article>
      `,
    )
    .join("");
}

function renderRealtimeModules() {
  if (!$("#warehouseOverviewHero")) return;
  if (!realtimeState.overview || !realtimeState.exceptions || !realtimeState.inbound) {
    const fallback = buildRealtimeFallback();
    realtimeState.overview ||= fallback.overview;
    realtimeState.exceptions ||= fallback.exceptions;
    realtimeState.inbound ||= fallback.inbound;
  }

  const realtime = realtimeState.overview?.dateKey === DATA.key ? realtimeState : buildRealtimeFallback();
  const overview = realtime.overview;
  renderWarehouseOverview(overview, realtime.exceptions);

const exceptions = realtime.exceptions;
  $("#exceptionUpdatedAt").textContent = exceptions.updatedAt ? `更新 ${exceptions.updatedAt}` : "";
  $("#exceptionList").innerHTML = exceptions.items
    .map(
      (item) => `
        <article class="exception-item ${item.level}">
          <div>
            <span>${item.type}</span>
            <strong>${item.title}</strong>
            <p>${item.desc}</p>
          </div>
          <b>${number(item.count)}<small>${item.unit}</small></b>
          <em>${severityText(item.level)}</em>
        </article>
      `,
    )
    .join("");

  const inbound = realtime.inbound;
  $("#inboundUpdatedAt").textContent = inbound.updatedAt ? `更新 ${inbound.updatedAt}` : "";
  $("#inboundList").innerHTML = inbound.sections
    .map(
      (section) => `
        <article class="inbound-section">
          <strong>${section.name}</strong>
          <div>
            ${section.metrics
              .map(
                (metric) => `
                  <span>
                    <em>${metric.label}</em>
                    <b>${number(metric.value)}<small>${metric.unit}</small></b>
                  </span>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderEfficiency() {
  const active = DATA.workers.filter((worker) => worker.workload > 0);
  const avg = DATA.totals.totalWorkload / Math.max(1, DATA.totals.activeWorkers);
  const highPerformers = active.filter((worker) => worker.workload >= avg).length;
  const multiTypeCount = multiRoleWorkers().length;
  const bestRole = DATA.roles[0] || { role: "暂无", workload: 0, workers: 0 };
  const cards = [
    { label: "\u4eba\u5747\u5904\u7406", value: number(avg), unit: "\u4ef6/\u4eba", foot: `${number(DATA.totals.totalWorkload)} \u603b\u5904\u7406\u91cf` },
    { label: "\u9ad8\u6548\u4eba\u5458", value: number(highPerformers), unit: "\u4eba", foot: `\u8d85\u8fc7\u4eba\u5747 ${number(avg)} \u4ef6` },
    { label: "\u8986\u76d6\u5de5\u79cd", value: number(WORK_TYPES.length), unit: "\u7c7b", foot: `${DATA.totals.roles} \u4e2a\u5c97\u4f4d\u89d2\u8272` },
    { label: "\u8de8\u5c97/\u591a\u5de5\u79cd", value: number(multiTypeCount), unit: "\u4eba", foot: "\u540c\u4eba\u591a\u5c97\u4e0d\u5408\u5e76" },
    { label: "\u6700\u9ad8\u8d1f\u8f7d\u5c97", value: bestRole.role, unit: "", foot: `${number(bestRole.workload)} \u4ef6/\u6b21 · ${bestRole.workers}\u4eba` },
    { label: "发货匹配率", value: `${DATA.totals.pickPieces ? Math.round((DATA.totals.shipPieces / DATA.totals.pickPieces) * 100) : 0}%`, unit: "", foot: "发货 / 拣货" },
  ];

  $("#efficiencyGrid").innerHTML = cards
    .map(
      (card) => `
        <article class="efficiency-card">
          <span>${card.label}</span>
          <strong>${card.value}<small>${card.unit}</small></strong>
          <em>${card.foot}</em>
        </article>
      `,
    )
    .join("");
}

function renderWorkTypeTabs() {
  $("#worktypeTabs").innerHTML = WORK_TYPES.map(
    (type) => `<button type="button" class="${type.key === state.workType ? "active" : ""}" data-worktype="${type.key}">${type.label}</button>`,
  ).join("");
}

function renderFocusedWorkType() {
  const type = activeWorkType();
  const rows = topWorkersFor(type, 8);
  const max = Math.max(1, ...rows.map((worker) => valueFor(worker, type.key)));
  $("#worktypeList").innerHTML = rows.length
    ? rows
        .map(
          (worker, index) => `
            <article class="worktype-row">
              <div class="rank-index">${index + 1}</div>
              <div>
                <strong>${worker.name}</strong>
                <span>${type.label} · ${worker.warehouse}</span>
                <div class="track"><div class="fill" style="width:${Math.max(8, (valueFor(worker, type.key) / max) * 100)}%"></div></div>
              </div>
              <b>${number(valueFor(worker, type.key))}${type.unit}</b>
            </article>
          `,
        )
        .join("")
    : `<p class="empty-note">\u6682\u65e0${type.label}\u6570\u636e</p>`;
}

function renderRankCards() {
  $("#rankCardGrid").innerHTML = WORK_TYPES.map((type) => {
    const rows = topWorkersFor(type, 3);
    return `
      <article class="mini-rank-card">
        <div class="mini-rank-title">
          <strong>${type.label}</strong>
          <span>${rows.length ? `TOP ${rows.length}` : "\u6682\u65e0"}</span>
        </div>
        ${rows
          .map(
            (worker, index) => `
              <div class="mini-rank-row">
                <span>${index + 1}. ${worker.name}</span>
                <em>${type.label}</em>
                <b>${number(valueFor(worker, type.key))}</b>
              </div>
            `,
          )
          .join("")}
      </article>
    `;
  }).join("");
}

function renderMultiRoleWorkers() {
  const rows = multiRoleWorkers();
  $("#multiRoleList").innerHTML = rows.length
    ? rows
        .map((row) => {
          const tags = row.records
            .flatMap((worker) => workTypeHits(worker).map((type) => `${worker.role}-${type.label}`))
            .filter((value, index, all) => all.indexOf(value) === index)
            .slice(0, 5);
          return `
            <article class="multi-role-row">
              <div>
                <strong>${row.name}</strong>
                <span>${row.roleCount}\u4e2a\u5c97\u4f4d · ${row.typeCount}\u7c7b\u5de5\u79cd · ${number(row.total)}\u4ef6/\u6b21</span>
              </div>
              <div class="tag-list">${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
            </article>
          `;
        })
        .join("")
    : `<p class="empty-note">\u6682\u672a\u68c0\u6d4b\u5230\u540c\u540d\u591a\u5c97\u6216\u591a\u5de5\u79cd\u8bb0\u5f55</p>`;
}

function pageFromHash() {
  return "qc";
}

let qcState;

const WORKSPACE_PINNED_TABS = [{ page:'qc', view:'overview', label:'品控驾驶舱' }];
const QC_WORKSPACE_LABELS={overview:'品控驾驶舱',realtime:'实时作业',people:'人员分析',brands:'品牌分析',comparisonDetail:'对比明细',quality:'返修分析',complaint:'客诉分析',alerts:'异常中心'};
function workspaceKey(page,view=''){return page==='qc'?'qc:'+(view||'overview'):page} function currentWorkspaceView(){return state.page==='qc'&&qcState&&qcState.view?qcState.view:'overview'} function workspaceLabel(page,view=''){return page==='qc'?(QC_WORKSPACE_LABELS[view||'overview']||'\u54c1\u63a7\u7edf\u8ba1'):(PAGE_TITLES[page]||'\u65b0\u9875\u9762')}
function openWorkspaceTab(page,view=''){const normalized=page==='qc'?(view||'overview'):'';const key=workspaceKey(page,normalized);if(!WORKSPACE_PINNED_TABS.some(tab=>workspaceKey(tab.page,tab.view)===key)&&!state.workspaceTabs.some(tab=>workspaceKey(tab.page,tab.view)===key))state.workspaceTabs.push({page,view:normalized})}
function setSidebarExpanded(expanded){const shell=document.querySelector('.app-shell'),toggle=document.querySelector('#sidebarToggle');if(!shell||!toggle)return;shell.classList.toggle('sidebar-expanded',expanded);toggle.setAttribute('aria-expanded',String(expanded));try{localStorage.setItem('warehouse-sidebar-expanded',expanded?'1':'0')}catch(_){}}
function renderWorkspaceTabs() {
  const root = document.querySelector('#workspaceTabs');
  if (!root) return;
  const active = (tab) => tab.page === state.page && (tab.page !== 'qc' || tab.view === currentWorkspaceView());
  const render = (tab, pinned) => '<button type="button" class="workspace-tab' + (active(tab) ? ' active' : '') + '" data-workspace-page="' + tab.page + '" data-workspace-view="' + (tab.view || '') + '" aria-current="' + (active(tab) ? 'page' : 'false') + '"><span>' + workspaceLabel(tab.page, tab.view) + '</span>' + (pinned ? '<em>\u5e38\u7528</em>' : '<i data-workspace-close="' + workspaceKey(tab.page, tab.view) + '" aria-label="\u5173\u95ed">\u00d7</i>') + '</button>';
  const opened = state.workspaceTabs.filter((tab) => !WORKSPACE_PINNED_TABS.some((pinned) => workspaceKey(pinned.page, pinned.view) === workspaceKey(tab.page, tab.view)));
  root.innerHTML = '<div class="workspace-tabs-scroll"><div class="workspace-tabs-pinned">' + WORKSPACE_PINNED_TABS.map((tab) => render(tab, true)).join('') + '</div>' + (opened.length ? '<span class="workspace-tabs-divider"></span><div class="workspace-tabs-opened">' + opened.map((tab) => render(tab, false)).join('') + '</div>' : '') + '</div>';
}

function setPage(page, options = {}) {
  state.page = "qc";
  openWorkspaceTab(state.page, state.page === "qc" ? currentWorkspaceView() : "");
  if (options.updateHash !== false) {
    const target = "#qc";
    if (window.location.hash !== target) history.pushState(null, "", target);
  }
  renderPageChrome();
  if (state.page === "quality-list") renderQualityDataPage();
  if (options.scrollTop !== false) window.scrollTo({ top: 0, behavior: "auto" });
}

function renderPageChrome() {
  document.querySelectorAll("[data-page]").forEach((view) => {
    view.classList.toggle("active", view.dataset.page === state.page);
  });
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === state.page);
  });
  document.body.classList.toggle("home-mode", state.page === "home");
  document.body.classList.toggle("qc-mode", state.page === "qc");
  const title = $("#pageTitle");
  if (title) title.textContent = PAGE_TITLES[state.page] || PAGE_TITLES.home;
  if (state.page !== "qc") setQcSideMenu(false);
  renderWorkspaceTabs();
}

function setQcSideMenu(open) {
  const menu = document.querySelector('#qcSideSubnav');
  const toggle = document.querySelector('#qcSideToggle');
  if (!menu || !toggle) return;
  menu.hidden = !open;
  menu.classList.toggle('is-open', open);
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
}
function renderHomeWorkspace() {
  const alerts = DATA.alerts || [];
  const hasAlerts = alerts.length > 0;
  const status = hasAlerts ? '\u9700\u5173\u6ce8' : '\u8fd0\u884c\u6b63\u5e38';
  const badge = $('#homeStatusBadge');
  const statusText = $('#homeStatusText');
  const stateTitle = $('#homeStateTitle');
  const stateDetail = $('#homeStateDetail');
  const range = $('#homeDataRange');
  if (badge) { badge.textContent = status; badge.dataset.tone = hasAlerts ? 'warning' : 'good'; }
  if (statusText) statusText.textContent = hasAlerts ? '\u4eca\u65e5\u4ed3\u50a8\u5b58\u5728 ' + alerts.length + ' \u9879\u5f85\u5173\u6ce8\u4e8b\u9879\uff0c\u8bf7\u4f18\u5148\u5904\u7406\u5f02\u5e38\u3002' : '\u4eca\u65e5\u4ed3\u50a8\u4f5c\u4e1a\u6b63\u5e38\uff0c\u53ef\u8fdb\u5165\u4e1a\u52a1\u6a21\u5757\u7ee7\u7eed\u8ddf\u8fdb\u3002';
  if (stateTitle) stateTitle.textContent = status;
  if (stateDetail) stateDetail.textContent = hasAlerts ? alerts[0].title + '\uff1a' + alerts[0].desc : '\u5f53\u524d\u65e0\u9700\u7acb\u5373\u5904\u7406\u7684\u9ad8\u4f18\u5148\u7ea7\u5f02\u5e38\u3002';
  if (range) range.textContent = DATA.label || DATA.key || '\u2014';
}
function renderHome() {
  renderHomeWorkspace();
  renderEfficiency();
  renderWorkTypeTabs();
  renderFocusedWorkType();
  renderRankCards();
  renderMultiRoleWorkers();
}
function dateParts(key) {
  const [year, month, day] = key.split("-").map(Number);
  return { year, month, day };
}

function calendarCells(activeKey, datasets) {
  const active = dateParts(activeKey);
  const first = new Date(active.year, active.month - 1, 1);
  const daysInMonth = new Date(active.year, active.month, 0).getDate();
  const prefix = first.getDay();
  const byDay = new Map(datasets.map((dataset) => [dateParts(dataset.key).day, dataset]));
  const cells = [];

  for (let i = 0; i < prefix; i += 1) cells.push({ empty: true });
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ day, dataset: byDay.get(day) });
  }
  return cells;
}

function renderDateSwitch() {
  const roots = [...document.querySelectorAll("[data-date-switch]")];
  if (!roots.length) return;
  const datasets = Object.values(DATASETS).filter((dataset) => /^\d{4}-\d{2}-\d{2}$/.test(dataset.key));
  const active = DATASETS[state.dateKey] || datasets[0];
  const activeParts = dateParts(active.key);
  const monthLabel = `${activeParts.year}年${activeParts.month}月`;
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  const cells = calendarCells(active.key, datasets);

  roots.forEach((root, index) => {
    const switchId = root.dataset.dateSwitchId || `date-switch-${index}`;
    root.dataset.dateSwitchId = switchId;
    const isOpen = state.dateMenuOpen === switchId;
    root.innerHTML = `
      <button type="button" class="date-current" data-date-toggle="true" aria-expanded="${isOpen}">
        <span>筛选日期</span>
        <strong>${active.label}</strong>
        <em aria-hidden="true"></em>
      </button>
      <div class="calendar-menu ${isOpen ? "open" : ""}" role="dialog" aria-label="日期日历">
        <div class="calendar-head">
          <strong>${monthLabel}</strong>
          <span>按天查看</span>
        </div>
        <div class="calendar-weekdays">
          ${weekdays.map((day) => `<span>${day}</span>`).join("")}
        </div>
        <div class="calendar-grid">
          ${cells
            .map((cell) => {
              if (cell.empty) return `<span class="calendar-day blank"></span>`;
              if (!cell.dataset) return `<span class="calendar-day disabled">${cell.day}</span>`;
              return `<button type="button" class="calendar-day ${cell.dataset.key === state.dateKey ? "active" : ""}" data-date-key="${cell.dataset.key}" aria-label="${cell.dataset.label}">${cell.day}</button>`;
            })
            .join("")}
        </div>
      </div>
    `;
    root.querySelector("[data-date-toggle]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      state.dateMenuOpen = isOpen ? "" : switchId;
      renderDateSwitch();
    });
    root.querySelectorAll("[data-date-key]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        setActiveDataset(button.dataset.dateKey);
        renderAll();
      });
    });
  });
}
function setActiveDataset(key) {
  state.dateKey = key;
  DATA = DATASETS[key] || DATASETS[DEFAULT_DATE_KEY];
  state.role = "\u5168\u90e8";
  state.query = "";
  state.dateMenuOpen = "";
  const search = $("#searchInput");
  if (search) search.value = "";
}

function sidebarDateLabel(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? String(Number(match[2])) + '\u6708' + String(Number(match[3])) + '\u65e5' : String(value || '');
}
function qcSidebarSource() {
  if (state.page !== 'qc' || !qcState) return null;
  if (qcState.view === 'complaint' && qcState.complaints) {
    const available = qcState.complaints.availableRange || {};
    const start = qcState.complaintStart || available.start || '';
    const end = qcState.complaintEnd || available.end || '';
    return { label: sidebarDateLabel(end), note: '\u5ba2\u8bc9\u5468\u4f1a \u00b7 ' + start + ' \u81f3 ' + end };
  }
  if (!qcState.data) return null;
  const available = qcState.data.availableRange || {};
  const scope = ['people', 'brands', 'quality'].includes(qcState.view) ? qcState.view : '';
  const selected = scope ? qcState.moduleRanges?.[scope] : null;
  const start = selected?.start || qcState.start || available.start || '';
  const end = selected?.end || qcState.end || available.end || '';
  return { label: sidebarDateLabel(end), note: '\u54c1\u63a7\u90e8\u6570\u636e\u6c47\u603b \u00b7 ' + start + ' \u81f3 ' + end };
}
function renderHeader() {
  const sourceName = $('#sourceName');
  const sourceRange = $('#sourceRange');
  const stamp = $('#dataStamp');
  const scoped = qcSidebarSource();
  if (sourceName) sourceName.textContent = scoped?.label || DATA.label;
  if (sourceRange) sourceRange.textContent = scoped?.note || DATA.sourceNote || DATA.rangeLabel;
  if (stamp) stamp.textContent = scoped?.note || (DATA.rangeLabel + ' \u00b7 \u751f\u6210 ' + DATA.generatedAt);
}
function renderKpis() {
  const t = DATA.totals;
  const kpis = [
    ['\u603b\u5904\u7406\u91cf', liveValue(t.totalWorkload), '\u4ef6/\u6b21', t.activeWorkers + ' \u4eba\u5728\u7ebf\u4f5c\u4e1a'],
    ['\u53d1\u8d27\u4ef6\u6570', liveValue(t.shipPieces), '\u4ef6', number(t.shipTimes) + ' \u6b21\u53d1\u8d27'],
    ['\u5165\u5e93\u4ef6\u6570', liveValue(t.inboundPieces), '\u4ef6', t.warehouses + ' \u4e2a\u4ed3\u53c2\u4e0e'],
    ['\u552e\u540e\u62c6\u5305', liveValue(t.unpackPieces), '\u4ef6', number(t.unpackParcels) + ' \u4e2a\u5305\u88f9'],
  ];
  const root = $('#kpiGrid');
  if (!root) return;
  root.innerHTML = kpis.map(([label, value, unit, foot]) => '<article class="metric-card"><span class="metric-label">' + label + '</span><strong class="metric-value">' + number(value) + '<small>' + unit + '</small></strong><div class="metric-foot"><span>' + foot + '</span></div></article>').join('');
}
function renderProcesses() {
  const root = $('#processTrend');
  if (root) renderProcessTrend(DATA.processes);
  renderAuxiliaryWorkers();
}
function auxiliaryWorkers() {
  const grouped = new Map();
  DATA.workers.forEach((worker) => {
    const workload = Number(worker.workload || 0);
    if (workload <= 0) return;
    const key = `${worker.name}::${worker.role}`;
    if (!grouped.has(key)) {
      grouped.set(key, { name: worker.name, role: worker.role, warehouses: new Set(), workload: 0 });
    }
    const row = grouped.get(key);
    row.workload += workload;
    if (worker.warehouse) row.warehouses.add(worker.warehouse);
  });
  return [...grouped.values()]
    .filter((worker) => worker.workload < AUXILIARY_WORKLOAD_THRESHOLD)
    .sort((left, right) => left.workload - right.workload || left.name.localeCompare(right.name, "zh-CN"));
}

function renderAuxiliaryWorkers() {
  const root = $("#auxiliaryWorkerList");
  const count = $("#auxiliaryWorkerCount");
  if (!root || !count) return;
  const workers = auxiliaryWorkers();
  count.textContent = `${workers.length} 人`;
  root.innerHTML = workers.length
    ? workers
        .map(
          (worker) => `
            <article class="auxiliary-worker-item">
              <div>
                <strong>${worker.name}</strong>
                <span>${worker.role} · ${[...worker.warehouses].join(" / ") || "未标注仓库"}</span>
              </div>
              <b>${number(worker.workload)}<small>件/次</small></b>
            </article>
          `,
        )
        .join("")
    : `<p class="empty-note">当前日期没有低于 ${AUXILIARY_WORKLOAD_THRESHOLD} 件/次的辅助人员</p>`;
}
function renderProcessTrend(items) {
  const root = $("#processTrend");
  if (!root) return;
  const max = Math.max(1, ...items.map((item) => item.primary || 0));
  const secondaryLabel = (item) => {
    if (item.key === "seed") return "订单数";
    if (item.key === "weigh") return "称重件数";
    if (item.key === "unpack") return "包裹数";
    if (item.key === "print") return "其中快递单";
    if (item.subUnit === "次") return "操作次数";
    return item.subUnit ? `辅助${item.subUnit}数` : "辅助指标";
  };
  root.innerHTML = `
    <div class="process-chart-head">
      <span>今日工种处理量</span>
      <strong>柱长按主指标计算 · 最高 ${number(max)}</strong>
    </div>
    <div class="process-chart-scale" aria-hidden="true">
      <span>0</span>
      <span>50%</span>
      <span>${number(max)}</span>
    </div>
    <div class="process-bar-chart">
      ${items
        .map((item, index) => {
          const value = Number(item.primary || 0);
          const ratio = value / max;
          const width = Math.max(8, ratio * 100);
          const meta = item.secondary ? `${number(item.secondary)} ${item.subUnit}` : "等待采集";
          const comparison = ratio >= 0.995 ? "最高" : `占最高 ${Math.round(ratio * 100)}%`;
          return `
            <button type="button" class="process-bar-row" aria-label="${item.name}，处理量 ${number(value)} ${item.unit}，${secondaryLabel(item)} ${meta}，${comparison}">
              <span class="bar-rank">${index + 1}</span>
              <span class="bar-name">${item.name}<small>${comparison}</small></span>
              <span class="bar-track"><i style="width:${width}%"></i></span>
              <span class="bar-metrics">
                <strong class="bar-value"><small>处理量</small><b>${number(value)}</b><i>${item.unit}</i></strong>
                <em class="bar-secondary"><small>${secondaryLabel(item)}</small><b>${meta}</b></em>
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderLeaderboard() {
  const max = DATA.workers[0]?.workload || 1;
  const html = DATA.workers
    .slice(0, 10)
    .map(
      (worker, index) => `
        <div class="worker-row">
          <div class="worker-top">
            <div>
              <span class="worker-name">${index + 1}. ${worker.name}</span>
              <span class="worker-role"> ${worker.role} · ${worker.warehouse}</span>
            </div>
            <span class="worker-score">${number(worker.workload)}</span>
          </div>
          <div class="track"><div class="fill" style="width:${Math.max(8, (worker.workload / max) * 100)}%"></div></div>
        </div>
      `,
    )
    .join("");
  document.querySelectorAll("[data-leaderboard]").forEach((root) => {
    root.innerHTML = html;
  });
}

const DISPLAY_ROLE_EXCLUDED = new Set([
  '\u8d28\u68c0\u7ec4\u957f',
  '\u9762\u8f85\u6599\u7ba1\u7406',
  '\u4ed3\u5e93\u526f\u4e3b\u7ba1',
  '\u5de5\u7a0b\u90e8',
  '\u738b\u78a7\u83b9',
]);
const DISPLAY_ROLE_UNPACK = new Set(['\u62c6\u5305', '\u552e\u540e\u62c6\u5305']);
const DISPLAY_ROLE_STATISTICS = new Set(['\u7edf\u8ba1\u7ec4\u957f', '\u7edf\u8ba1']);
function displayRoles() {
  const merged = new Map();
  DATA.roles.forEach((role) => {
    if (DISPLAY_ROLE_EXCLUDED.has(role.role)) return;
    const name = DISPLAY_ROLE_UNPACK.has(role.role)
      ? '\u62c6\u5305'
      : DISPLAY_ROLE_STATISTICS.has(role.role)
        ? '\u7edf\u8ba1'
        : role.role;
    const current = merged.get(name) || { role: name, workload: 0, workers: 0 };
    current.workload += Number(role.workload) || 0;
    current.workers += Number(role.workers) || 0;
    merged.set(name, current);
  });
  return [...merged.values()].sort((a, b) => b.workload - a.workload || a.role.localeCompare(b.role, 'zh-CN'));
}

function renderRoles() {
  const roles = displayRoles();
  const max = Math.max(1, ...roles.map((role) => role.workload));
  const html = roles
    .map(
      (role) => `
        <div class="role-row">
          <div class="role-meta">
            <strong>${role.role}</strong>
            <span>${number(role.workload)} · ${role.workers}\u4eba</span>
          </div>
          <div class="track"><div class="fill" style="width:${Math.max(5, (role.workload / max) * 100)}%"></div></div>
        </div>
      `,
    )
    .join('');
  document.querySelectorAll('[data-role-bars]').forEach((root) => {
    root.innerHTML = html;
  });
}
function renderAlerts() {
  $("#alertCount").textContent = `${DATA.alerts.length} 条`;
  $("#alertsList").innerHTML = DATA.alerts
    .map(
      (alert) => `
        <article class="alert-item ${alert.level}">
          <strong>${alert.title}</strong>
          <p>${alert.desc}</p>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  const roles = ["全部", "拣货", "发货", "上架", "拆包", "售后拆包", "配货员"];
  $("#roleFilters").innerHTML = roles
    .map((role) => `<button type="button" class="${role === state.role ? "active" : ""}" data-role="${role}">${role}</button>`)
    .join("");
}

function filteredWorkers() {
  return DATA.workers.filter((worker) => {
    const query = state.query.trim().toLowerCase();
    const hitQuery = !query || `${worker.name}${worker.role}${worker.warehouse}`.toLowerCase().includes(query);
    const hitRole = state.role === "全部" || worker.role === state.role;
    return hitQuery && hitRole;
  });
}

function renderTable() {
  const rows = filteredWorkers();
  $("#tableCount").textContent = `${rows.length} 人`;
  $("#peopleRows").innerHTML = rows
    .map(
      (worker) => `
        <tr>
          <td>
            <span class="person-cell">
              <strong>${worker.name}</strong>
              <small>${worker.warehouse}</small>
            </span>
          </td>
          <td>${worker.role}</td>
          <td><strong>${number(worker.workload)}</strong></td>
          <td>${number(worker.pickPieces)}</td>
          <td>${number(worker.checkPieces)}</td>
          <td>${number(worker.shipPieces)}</td>
          <td>${number(worker.shelfPieces)}</td>
          <td>${number(worker.unpackPieces)}</td>
        </tr>
      `,
    )
    .join("");
}

function buildFeedItem() {
  const worker = DATA.workers[state.feedIndex % Math.max(1, DATA.workers.length)] || {
    name: "系统",
    role: "等待采集",
    workload: 0,
  };
  const process = DATA.processes[state.feedIndex % Math.max(1, DATA.processes.length)] || {
    name: "作业",
    primary: 0,
    unit: "件",
  };
  const minuteOffset = (state.feedIndex * 3) % 50;
  const time = new Date(Date.now() - minuteOffset * 60000).toLocaleTimeString("zh-CN", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  state.feedIndex += 1;
  return {
    time,
    title: `${worker.name} · ${worker.role}`,
    text: `${process.name}环节刷新，当前累计 ${number(process.primary)}${process.unit}；个人总处理 ${number(worker.workload)} 件/次。`,
  };
}
function renderFeed(reset = false) {
  const feed = $("#activityFeed");
  if (!feed) return;
  const items = reset ? Array.from({ length: 5 }, buildFeedItem) : [buildFeedItem()];
  if (reset) feed.innerHTML = "";
  items.forEach((item) => {
    const node = document.createElement("article");
    node.className = "feed-item";
    node.innerHTML = `
      <span class="feed-time">${item.time}</span>
      <div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    `;
    feed.prepend(node);
  });
  [...feed.children].slice(6).forEach((node) => node.remove());
}

const QUALITY_TABLES = [
  { id: "qc-capacity", name: "2026\u5e74\u54c1\u63a7\u4ea7\u80fd", category: "\u73b0\u573a\u4f5c\u4e1a", type: "\u4ea7\u80fd\u8868", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 489, priority: 1, desc: "\u8d28\u68c0\u3001\u5305\u88c5\u3001\u8fd4\u4fee\u3001\u5927\u70eb\u7684\u65e5\u5ea6\u4ea7\u51fa\u548c\u5728\u5c97\u5de5\u65f6\u3002", tags: ["\u8d28\u68c0", "\u5305\u88c5", "\u8fd4\u4fee", "\u5927\u70eb", "\u5de5\u65f6"] },
  { id: "large-qc", name: "2026\u5927\u8d27\u8d28\u68c0\u660e\u7ec6", category: "\u8d28\u91cf\u5206\u6790", type: "\u660e\u7ec6\u8868", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 1802, priority: 2, desc: "\u5927\u8d27\u62bd\u68c0\u3001\u6b21\u54c1\u3001\u95ee\u9898\u7387\u548c\u8d23\u4efb\u65b9\u53e3\u5f84\u3002", tags: ["\u5927\u8d27\u8d28\u68c0", "\u6b21\u54c1", "\u62bd\u68c0", "\u95ee\u9898\u7387"] },
  { id: "issue-summary", name: "2025-26\u5927\u8d27\u95ee\u9898\u6c47\u603b", category: "\u8d28\u91cf\u5206\u6790", type: "\u6c47\u603b\u8868", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 1460, priority: 3, desc: "\u95ee\u9898\u7c7b\u578b\u3001\u8d23\u4efb\u65b9\u5206\u5e03\u548c Top 10 \u9ad8\u9891\u95ee\u9898\u3002", tags: ["\u95ee\u9898\u5206\u5e03", "\u8d23\u4efb\u65b9", "Top10"] },
  { id: "repair-detail", name: "2025-26\u8fd4\u4fee\u6570\u636e\u660e\u7ec6", category: "\u8fd4\u4fee\u95ed\u73af", type: "\u660e\u7ec6\u8868", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 6158, priority: 4, desc: "\u8fd4\u4fee\u4eba\u5904\u7406\u3001\u8d28\u68c0\u590d\u68c0\u3001\u73b0\u573a\u5904\u7406\u548c\u9000\u8fd4\u4fee\u4ed3\u3002", tags: ["\u8fd4\u4fee", "\u8d28\u68c0\u4eba", "\u73b0\u573a\u5904\u7406", "\u4e8c\u6b21\u8fd4\u4fee"] },
  { id: "b-defect", name: "B\u54c1\u5fae\u7455\u4e09\u6807\u9519\u8bef\u767b\u8bb0", category: "\u8d28\u91cf\u5206\u6790", type: "\u767b\u8bb0\u8868", status: "\u4eba\u5de5\u767b\u8bb0", updated: "2026-07-21 16:20", records: 238, priority: 8, desc: "\u8bb0\u5f55\u5fae\u7455\u3001\u6807\u7b7e\u9519\u8bef\u548c\u540e\u7eed\u5904\u7406\u7ed3\u679c\u3002", tags: ["B\u54c1", "\u5fae\u7455", "\u4e09\u6807", "\u9519\u8bef"] },
  { id: "qc-weekly", name: "\u8d28\u68c0\u5468\u62a5", category: "\u8d28\u91cf\u5206\u6790", type: "\u62a5\u8868", status: "\u5468\u671f\u66f4\u65b0", updated: "2026-07-20 22:00", records: 28, priority: 9, desc: "\u6309\u5468\u6c47\u603b\u8d28\u68c0\u95ee\u9898\u3001\u6b21\u54c1\u548c\u6539\u8fdb\u8ddf\u8fdb\u3002", tags: ["\u5468\u62a5", "\u8d8b\u52bf", "\u590d\u76d8"] },
  { id: "qc-monthly", name: "\u8d28\u68c0\u6708\u62a5", category: "\u8d28\u91cf\u5206\u6790", type: "\u62a5\u8868", status: "\u5468\u671f\u66f4\u65b0", updated: "2026-07-01 22:00", records: 7, priority: 10, desc: "\u6708\u5ea6\u8d28\u91cf\u8d8b\u52bf\u3001\u9ad8\u9891\u95ee\u9898\u548c\u8d23\u4efb\u5f52\u56e0\u3002", tags: ["\u6708\u62a5", "\u8d28\u91cf\u590d\u76d8"] },
  { id: "brand-zhoumiao", name: "\u5468\u6dfc\u4e2a\u4eba\u4ea7\u91cf\u660e\u7ec6", category: "\u54c1\u724c\u62c6\u5206", type: "\u4e2a\u4eba\u660e\u7ec6", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 962, priority: 5, desc: "\u5468\u6dfc\u54c1\u724c\u4e0b\u4eba\u5458\u3001\u5de5\u79cd\u548c\u65e5\u5ea6\u4ea7\u91cf\u3002", tags: ["\u5468\u6dfc", "\u54c1\u724c", "\u4e2a\u4eba\u4ea7\u91cf"] },
  { id: "brand-chenchen", name: "\u9648\u9648\u4e2a\u4eba\u4ea7\u91cf\u660e\u7ec6", category: "\u54c1\u724c\u62c6\u5206", type: "\u4e2a\u4eba\u660e\u7ec6", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 824, priority: 6, desc: "\u9648\u9648\u54c1\u724c\u4e0b\u4eba\u5458\u3001\u5de5\u79cd\u548c\u65e5\u5ea6\u4ea7\u91cf\u3002", tags: ["\u9648\u9648", "\u54c1\u724c", "\u4e2a\u4eba\u4ea7\u91cf"] },
  { id: "brand-luqing", name: "\u9e6d\u9752\u4e00\u4e2a\u4eba\u4ea7\u91cf\u660e\u7ec6", category: "\u54c1\u724c\u62c6\u5206", type: "\u4e2a\u4eba\u660e\u7ec6", status: "\u6bcf\u65e5\u66f4\u65b0", updated: "2026-07-21 17:55", records: 1034, priority: 7, desc: "\u9e6d\u9752\u4e00\u54c1\u724c\u4e0b\u4eba\u5458\u3001\u5de5\u79cd\u548c\u65e5\u5ea6\u4ea7\u91cf\u3002", tags: ["\u9e6d\u9752\u4e00", "\u54c1\u724c", "\u4e2a\u4eba\u4ea7\u91cf"] },
  { id: "repair-dashboard", name: "\u8fd4\u4fee\u95ed\u73af\u5206\u6790", category: "\u8fd4\u4fee\u95ed\u73af", type: "\u4eea\u8868\u76d8\u6a21\u5757", status: "\u5df2\u63a5\u5165\u7f51\u7ad9", updated: "2026-07-21 17:55", records: 4, priority: 11, desc: "\u7528\u4e8e\u770b\u8fd4\u4fee\u4eba\u5904\u7406\u3001\u8d28\u68c0\u590d\u68c0\u548c\u4e8c\u6b21\u8fd4\u4fee\u6bd4\u4f8b\u3002", tags: ["\u8fd4\u4fee\u95ed\u73af", "\u6b21\u54c1\u7387", "\u590d\u68c0"] },
  { id: "efficiency-dashboard", name: "\u4eba\u5458\u4eba\u6548\u4e0e\u591a\u5468\u671f\u5bf9\u6bd4", category: "\u4eba\u6548\u5206\u6790", type: "\u4eea\u8868\u76d8\u6a21\u5757", status: "\u5df2\u63a5\u5165\u7f51\u7ad9", updated: "2026-07-21 17:55", records: 85, priority: 12, desc: "\u652f\u6301\u5355\u4eba\u3001\u591a\u54c1\u724c\u548c\u603b\u4eba\u6548\u7684\u5bf9\u6bd4\u67e5\u770b\u3002", tags: ["\u4eba\u6548", "\u5de5\u65f6", "\u5bf9\u6bd4"] }
];
function qualityUnique(field) { return [...new Set(QUALITY_TABLES.map((item) => item[field]).filter(Boolean))]; }
function qualityMatches(item) { const query = state.qualityQuery.trim().toLowerCase(); const haystack = [item.name, item.category, item.type, item.status, item.desc, ...(item.tags || [])].join(" ").toLowerCase(); return (!query || haystack.includes(query)) && (state.qualityCategory === "all" || item.category === state.qualityCategory) && (state.qualityType === "all" || item.type === state.qualityType) && (state.qualityStatus === "all" || item.status === state.qualityStatus); }
function filteredQualityTables() { const rows = QUALITY_TABLES.filter(qualityMatches); const sorters = { priority: (a, b) => a.priority - b.priority, updated: (a, b) => String(b.updated).localeCompare(String(a.updated)), records: (a, b) => b.records - a.records }; return rows.sort(sorters[state.qualitySort] || sorters.priority); }
function fillQualitySelect(selector, values, current, allLabel) { const select = document.querySelector(selector); if (!select) return; select.innerHTML = ["all", ...values].map((value) => '<option value="' + (value === "all" ? "all" : qcEscape(value)) + '"' + (value === current ? ' selected' : '') + '>' + (value === "all" ? allLabel : qcEscape(value)) + '</option>').join(""); }
function renderQualityFilters() { const categoryRoot = document.querySelector("#qualityCategoryFilters"); if (!categoryRoot) return; const categories = qualityUnique("category"); categoryRoot.innerHTML = ["all", ...categories].map((category) => { const label = category === "all" ? "\u5168\u90e8\u5206\u7c7b" : category; const count = category === "all" ? QUALITY_TABLES.length : QUALITY_TABLES.filter((item) => item.category === category).length; return '<button type="button" class="' + (state.qualityCategory === category ? "active" : "") + '" data-quality-category="' + qcEscape(category) + '"><span>' + qcEscape(label) + '</span><b>' + count + '</b></button>'; }).join(""); fillQualitySelect("#qualityTypeFilter", qualityUnique("type"), state.qualityType, "\u5168\u90e8\u7c7b\u578b"); fillQualitySelect("#qualityStatusFilter", qualityUnique("status"), state.qualityStatus, "\u5168\u90e8\u72b6\u6001"); const sort = document.querySelector("#qualitySortFilter"); if (sort) sort.value = state.qualitySort; const search = document.querySelector("#qualitySearchInput"); if (search && search.value !== state.qualityQuery) search.value = state.qualityQuery; }
function renderQualityList() { const root = document.querySelector("#qualityDataList"); if (!root) return; const rows = filteredQualityTables(); const totalRecords = rows.reduce((sum, item) => sum + Number(item.records || 0), 0); document.querySelector("#qualityListCount").textContent = rows.length + " \u4e2a\u6570\u636e\u8868"; document.querySelector("#qualityListHint").textContent = state.qualityCategory === "all" ? "\u5168\u90e8\u5206\u7c7b" : state.qualityCategory; document.querySelector("#qualitySummaryTotal").textContent = number(totalRecords); root.innerHTML = rows.length ? rows.map((item, index) => '<article class="quality-data-row"><div class="quality-row-index">' + String(index + 1).padStart(2, "0") + '</div><div class="quality-row-body"><div class="quality-row-head"><div><strong>' + qcEscape(item.name) + '</strong><span>' + qcEscape(item.category) + ' · ' + qcEscape(item.type) + '</span></div><em>' + qcEscape(item.status) + '</em></div><p>' + qcEscape(item.desc) + '</p><div class="quality-row-tags">' + (item.tags || []).map((tag) => '<span>' + qcEscape(tag) + '</span>').join("") + '</div></div><div class="quality-row-meta"><strong>' + number(item.records) + '</strong><span>\u6761\u8bb0\u5f55</span><small>' + qcEscape(item.updated) + '</small></div></article>').join("") : '<p class="quality-empty">\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u6570\u636e\u8868\uff0c\u8bf7\u653e\u5bbd\u641c\u7d22\u6216\u7b5b\u9009\u6761\u4ef6\u3002</p>'; const categorySummary = qualityUnique("category").map((category) => { const subset = rows.filter((item) => item.category === category); return { category, count: subset.length, records: subset.reduce((sum, item) => sum + item.records, 0) }; }).filter((item) => item.count > 0); document.querySelector("#qualitySummaryCards").innerHTML = categorySummary.length ? categorySummary.map((item) => '<article><span>' + qcEscape(item.category) + '</span><strong>' + item.count + '</strong><em>' + number(item.records) + ' \u6761</em></article>').join("") : '<p class="quality-empty">\u6682\u65e0\u6458\u8981</p>'; }
function renderQualityDataPage() { renderQualityFilters(); renderQualityList(); }

function renderAlertCenter() {
  const root = $('#alertCenterList');
  const stats = $('#alertCenterStats');
  const count = $('#alertCenterCount');
  if (!root || !stats || !count) return;
  const alerts = Array.isArray(DATA.alerts) ? DATA.alerts : [];
  const levelMeta = {
    high: { label: '高优先级', action: '立即核查并反馈' },
    medium: { label: '中优先级', action: '今日跟进' },
    info: { label: '观察项', action: '持续观察' },
  };
  const totals = { high: 0, medium: 0, info: 0 };
  alerts.forEach((alert) => { if (Object.prototype.hasOwnProperty.call(totals, alert.level)) totals[alert.level] += 1; });
  stats.innerHTML = [
    ['high', '高优先级'],
    ['medium', '中优先级'],
    ['info', '观察项'],
  ].map(([key, label]) => `<article class="${key}"><span>${label}</span><strong>${totals[key]}</strong><em>项</em></article>`).join('');
  count.textContent = `${alerts.length} 项`;
  root.innerHTML = alerts.length ? alerts.map((alert, index) => {
    const meta = levelMeta[alert.level] || levelMeta.info;
    return `<article class="alert-center-item ${alert.level || 'info'}"><span class="alert-center-index">${index + 1}</span><div><div class="alert-center-item-head"><strong>${qcEscape(alert.title || '待处理事项')}</strong><em>${meta.label}</em></div><p>${qcEscape(alert.desc || '请结合现场情况处理。')}</p></div><b>${meta.action}</b></article>`;
  }).join('') : '<p class="quality-empty">当前没有待处理提醒。</p>';
}
function bindEvents() {

  const sidebarToggle = document.querySelector('#sidebarToggle');
  try { setSidebarExpanded(localStorage.getItem('warehouse-sidebar-expanded') === '1'); } catch (_) { setSidebarExpanded(false); }
  if (sidebarToggle) sidebarToggle.addEventListener('click', () => { const shell = document.querySelector('.app-shell'); setSidebarExpanded(!shell?.classList.contains('sidebar-expanded')); });
  const workspaceTabs = document.querySelector('#workspaceTabs');
  if (workspaceTabs) workspaceTabs.addEventListener('click', (event) => { const close = event.target.closest('[data-workspace-close]'); if (close) { event.stopPropagation(); const key = close.dataset.workspaceClose; state.workspaceTabs = state.workspaceTabs.filter((tab) => workspaceKey(tab.page, tab.view) !== key); renderWorkspaceTabs(); return; } const tab = event.target.closest('[data-workspace-page]'); if (!tab) return; const page = tab.dataset.workspacePage; const view = tab.dataset.workspaceView; setPage(page, { scrollTop: false }); if (page === 'qc') qcSetBusinessView(view || 'overview'); });

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setPage(link.dataset.pageLink || "home");
    });
  });

  const qcPlatformNav = document.querySelector('.qc-platform-nav');
  if (qcPlatformNav) qcPlatformNav.addEventListener('click', (event) => {
    const sectionToggle = event.target.closest('[data-qc-side-section-toggle]');
    if (sectionToggle) {
      const section = sectionToggle.closest('.qc-side-section');
      const list = section?.querySelector('.qc-side-subnav');
      if (!section || !list) return;
      const expanded = !list.classList.contains('is-open');
      list.classList.toggle('is-open', expanded);
      section.classList.toggle('is-collapsed', !expanded);
      sectionToggle.setAttribute('aria-expanded', String(expanded));
      return;
    }
    const button = event.target.closest('[data-qc-side-view]');
    if (!button) return;
    setPage('qc', { scrollTop: false });
    qcSetBusinessView(button.dataset.qcSideView);
  });  const qcBusinessNav = document.querySelector('#qcBusinessNav');
  if (qcBusinessNav) qcBusinessNav.addEventListener('click', (event) => {
    const button = event.target.closest('[data-qc-view]');
    if (!button) return;
    qcSetBusinessView(button.dataset.qcView);
  });
  const qcSectionPicker = document.querySelector('#qcSectionPicker');
  if (qcSectionPicker) qcSectionPicker.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-qc-panel-toggle]');
    if (toggle) { qcTogglePanel(toggle.dataset.qcPanelToggle); return; }
    const complaintJump = event.target.closest('[data-qc-complaint-jump]');
    if (complaintJump) { qcSetBusinessView('complaint'); return; }
    const jump = event.target.closest('[data-qc-panel-jump]');
    if (jump) qcJumpPanel(jump.dataset.qcPanelJump);
  });
  document.querySelectorAll('[data-qc-home-view]').forEach((button) => {
    button.addEventListener('click', () => { setPage('qc', { scrollTop: false }); qcSetBusinessView(button.dataset.qcHomeView); });
  });
  document.querySelectorAll('.qc-overview-actions [data-qc-view]').forEach((button) => {
    button.addEventListener('click', () => qcSetBusinessView(button.dataset.qcView));
  });
  document.querySelectorAll("[data-open-page]").forEach((button) => {
    button.addEventListener("click", () => setPage(button.dataset.openPage || "home"));
  });

  window.addEventListener("hashchange", () => {
    state.page = "qc";
    if (window.location.hash !== "#qc") history.replaceState(null, "", "#qc");
    renderPageChrome();
  });
  document.addEventListener("click", (event) => {
    if (!state.dateMenuOpen || event.target.closest("[data-date-switch]")) return;
    state.dateMenuOpen = "";
    renderDateSwitch();
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTable();
  });

  $("#worktypeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-worktype]");
    if (!button) return;
    state.workType = button.dataset.worktype;
    renderWorkTypeTabs();
    renderFocusedWorkType();
  });

  $("#roleFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-role]");
    if (!button) return;
    state.role = button.dataset.role;
    renderFilters();
    renderTable();
  });
  const qualitySearch = document.querySelector("#qualitySearchInput");
  if (qualitySearch) qualitySearch.addEventListener("input", (event) => { state.qualityQuery = event.target.value; renderQualityList(); });
  const qualityCategories = document.querySelector("#qualityCategoryFilters");
  if (qualityCategories) qualityCategories.addEventListener("click", (event) => { const button = event.target.closest("button[data-quality-category]"); if (!button) return; state.qualityCategory = button.dataset.qualityCategory; renderQualityFilters(); renderQualityList(); });
  [["#qualityTypeFilter", "qualityType"], ["#qualityStatusFilter", "qualityStatus"], ["#qualitySortFilter", "qualitySort"]].forEach(([selector, key]) => { const select = document.querySelector(selector); if (!select) return; select.addEventListener("change", (event) => { state[key] = event.target.value; renderQualityList(); }); });
}

function renderAll() {
  setClock();
  renderPageChrome();
  renderDateSwitch();
  renderHeader();
  renderRealtimeModules();
  renderHome();
  renderKpis();
  renderProcesses();
  renderLeaderboard();
  renderRoles();
  renderAlerts();
  renderAlertCenter();
  renderFilters();
  renderTable();
  renderFeed(true);
  renderQualityDataPage();
}

state.page = pageFromHash();
if (window.location.hash !== "#qc") history.replaceState(null, "", "#qc");renderAll();
bindEvents();
setInterval(setClock, 1000);
setInterval(renderKpis, 3200);
setInterval(renderProcesses, 4200);
setInterval(() => renderFeed(false), 3600);
loadRealtimeModules();






const QC_DASHBOARD_FILE = './data/qc-dashboard.json';
const QC_COMPLAINT_FILE = './data/qc-complaints.json';
const QC_MAIN_BRANDS = ['鹭青一', '周淼', '陈陈'];
const QC_WORK_MODES = [
  { key: 'qc', label: '质检合计', field: 'q' },
  { key: 'packing', label: '包装', field: 'pk' },
  { key: 'repair', label: '进返修间', field: 'rrp' },
  { key: 'repairQc', label: '返修质检', field: 'rqc' },
  { key: 'ironing', label: '大烫', field: 'ir' },
  { key: 'vipQc', label: '唯品会质检', field: 'vp' },
  { key: 'abnormalQc', label: '异常件质检', field: 'ab' },
  { key: 'offShelfQc', label: '下架质检', field: 'os' },
];
const QC_QC_SUBMODES = [
  { key: 'all', label: '全部质检' },
  { key: 'return', label: '销退质检', field: 'rq' },
  { key: 'bulk', label: '大货质检', rolePattern: /大货/ },
];
const QC_EFFICIENCY_MODES = [
  { key: 'primary', label: '\u7EFC\u5408', field: null },
  { key: 'qc', label: '质检合计', field: 'q' },
  ...QC_WORK_MODES.filter((item) => item.key !== 'qc'),
];
qcState = {
  data: null,
  complaints: null,
  start: '',
  end: '',
  compareMode: 'previousPeriod',
  compareStart: '',
  compareEnd: '',
  brands: [],
  person: 'all',
  repairPerson: 'all',
  repairBrand: '鹭青一',
  complaintGranularity: 'week',
  complaintStart: '2026-01-01',
  complaintEnd: '',
  complaintBrand: 'all',
  complaintRangePreset: 'all',
  complaintCompareBrands: null,
  rankMode: 'qc',
  qcSubMode: 'all',
  efficiencyQcSubMode: 'all',
  efficiencyMode: 'primary',
  moduleRanges: {},
  brandModes: {},
  brandQcSubModes: {},
  brandOpen: {},
  activePanels: ['people', 'brands', 'quality'],
  view: 'overview',
  filtersBound: false,
};

let qcPersonSearchQuery = '';

function qcApplyPanelSelection() {
  const validPanels = ['people', 'brands', 'quality'];
  const selected = [...new Set((qcState.activePanels || []).filter((panel) => validPanels.includes(panel)))];
  qcState.activePanels = selected.length ? selected : validPanels;
  document.querySelectorAll('[data-qc-panel]').forEach((panel) => {
    panel.hidden = !qcState.activePanels.includes(panel.dataset.qcPanel);
  });
  document.querySelectorAll('[data-qc-panel-card]').forEach((card) => {
    const visible = qcState.activePanels.includes(card.dataset.qcPanelCard);
    card.classList.toggle('active', visible);
  });
  document.querySelectorAll('[data-qc-panel-toggle]').forEach((button) => {
    const visible = qcState.activePanels.includes(button.dataset.qcPanelToggle);
    button.setAttribute('aria-pressed', String(visible));
    button.textContent = visible ? '已显示' : '已隐藏';
  });
}

function qcApplyBusinessView() {
  const validViews = ['overview', 'realtime', 'people', 'brands', 'comparisonDetail', 'quality', 'complaint', 'alerts'];
  if (!validViews.includes(qcState.view)) qcState.view = 'overview';
  document.querySelectorAll('[data-qc-view-section]').forEach((section) => {
    const views = String(section.dataset.qcViewSection || '').split(/\s+/);
    section.hidden = !views.includes(qcState.view);
  });
  const navigationView = qcState.view;
  document.querySelectorAll('[data-qc-view]').forEach((button) => {
    const active = button.dataset.qcView === navigationView;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  document.querySelectorAll('[data-qc-side-view]').forEach((button) => {
    const active = button.dataset.qcSideView === navigationView;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  const activeSideButton = document.querySelector('[data-qc-side-view].active');
  const activeSection = activeSideButton?.closest('.qc-side-section');
  if (activeSection) {
    activeSection.classList.remove('is-collapsed');
    activeSection.querySelector('.qc-side-subnav')?.classList.add('is-open');
    activeSection.querySelector('[data-qc-side-section-toggle]')?.setAttribute('aria-expanded', 'true');
  }
}

function qcSetBusinessView(view, options = {}) {
  const validViews = ['overview', 'realtime', 'people', 'brands', 'comparisonDetail', 'quality', 'complaint', 'alerts'];
  if (!validViews.includes(view)) return;
  qcState.view = view;
  openWorkspaceTab('qc', view);
  qcApplyBusinessView();
  renderHeader();
  renderWorkspaceTabs();
  if (options.scrollToView !== false) {
    const viewTargets = { overview: '#qc', realtime: '#qcRealtimeTitle', people: '#qcEfficiencyTitle', brands: '#qcBrandTitle', comparisonDetail: '#qcComparisonDetailTitle', quality: '#qcQualityTitle', complaint: '#qcComplaintTitle', alerts: '#qcAlertCenterTitle' };
    const target = document.querySelector(viewTargets[view]);
    if (target) window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - 76), behavior: 'auto' });
  }
}
function qcTogglePanel(panel) {
  const validPanels = ['people', 'brands', 'quality'];
  if (!validPanels.includes(panel)) return;
  const selected = new Set(qcState.activePanels || validPanels);
  if (selected.has(panel) && selected.size > 1) selected.delete(panel);
  else selected.add(panel);
  qcState.activePanels = validPanels.filter((item) => selected.has(item));
  qcApplyPanelSelection();
}

function qcJumpPanel(panel) {
  if (!['people', 'brands', 'quality'].includes(panel)) return;
  if (!qcState.activePanels.includes(panel)) qcState.activePanels = [...qcState.activePanels, panel];
  qcState.view = panel;
  qcApplyPanelSelection();
  qcApplyBusinessView();
  document.querySelector(`[data-qc-panel="${panel}"]`)?.scrollIntoView({ behavior: 'auto', block: 'start' });
}
function qcNumber(value, fallback = '—') {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? formatter.format(Math.round(numeric)) : fallback;
}

function qcDecimal(value, digits = 1) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return '—';
  return new Intl.NumberFormat('zh-CN', { maximumFractionDigits: digits }).format(numeric);
}

function qcPercent(value, fallback = '—') {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? String(Math.round(numeric * 100)) : fallback;
}

function qcEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[character]));
}

function qcBrandLabel() {
  if (!qcState.brands.length) return '全部品牌';
  if (qcState.brands.length === QC_MAIN_BRANDS.length && QC_MAIN_BRANDS.every((brand) => qcState.brands.includes(brand))) return '三品牌合计';
  if (qcState.brands.length === 1) return qcState.brands[0];
  return `${qcState.brands.length} 个品牌`;
}

function qcBrandMatches(brand) {
  return !qcState.brands.length || qcState.brands.includes(brand);
}

function qcDate(value) {
  const [year, month, day] = String(value).split('-').map(Number);
  return new Date(year, month - 1, day);
}

function qcDateKey(value) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function qcShiftDays(value, days) {
  const date = qcDate(value);
  date.setDate(date.getDate() + days);
  return qcDateKey(date);
}

function qcShiftMonths(value, months) {
  const date = qcDate(value);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return qcDateKey(date);
}

function qcCompleteWeekRange(latest) {
  const end = qcDate(latest);
  const daysSinceFriday = (end.getDay() + 2) % 7;
  end.setDate(end.getDate() - daysSinceFriday);
  const start = new Date(end);
  start.setDate(start.getDate() - 6);
  return { start: qcDateKey(start), end: qcDateKey(end) };
}

function qcCurrentWeekRange(latest) {
  const end = qcDate(latest);
  const daysSinceSaturday = (end.getDay() + 1) % 7;
  const start = new Date(end);
  start.setDate(start.getDate() - daysSinceSaturday);
  return { start: qcDateKey(start), end: latest };
}

function qcPreviousMonthRange(latest) {
  const current = qcDate(latest);
  const start = new Date(current.getFullYear(), current.getMonth() - 1, 1);
  const end = new Date(current.getFullYear(), current.getMonth(), 0);
  return { start: qcDateKey(start), end: qcDateKey(end) };
}

function qcQuickRange(key) {
  const data = qcState.data;
  if (!data) return null;
  const latest = data.availableRange.end;
  const ranges = {
    latestDay: { start: latest, end: latest },
    previousDay: { start: qcShiftDays(latest, -1), end: qcShiftDays(latest, -1) },
    currentWeek: qcCurrentWeekRange(latest),
    previousWeek: qcCompleteWeekRange(latest),
    currentMonth: { start: `${latest.slice(0, 7)}-01`, end: latest },
    previousMonth: qcPreviousMonthRange(latest),
    past7: { start: qcShiftDays(latest, -6), end: latest },
    all: { start: data.availableRange.start, end: latest },
  };
  const range = ranges[key];
  if (!range) return null;
  return {
    start: range.start < data.availableRange.start ? data.availableRange.start : range.start,
    end: range.end > latest ? latest : range.end,
  };
}

const QC_MODULE_SCOPES = ['people', 'brands', 'quality'];
const QC_QUICK_RANGE_OPTIONS = [
  ['custom', '自选日期'], ['latestDay', '最新一天'], ['previousDay', '前一天'], ['currentWeek', '本周'],
  ['previousWeek', '上一周'], ['currentMonth', '本月'], ['previousMonth', '上一月'], ['past7', '最近 7 天'], ['all', '2026 全部'],
];

function qcQuickRangeKey(targetRange = { start: qcState.start, end: qcState.end }) {
  const keys = QC_QUICK_RANGE_OPTIONS.map(([key]) => key).filter((key) => key !== 'custom');
  return keys.find((key) => {
    const range = qcQuickRange(key);
    return range && range.start === targetRange.start && range.end === targetRange.end;
  }) || 'custom';
}

function qcModuleRange(scope) {
  return qcState.moduleRanges[scope] || { start: qcState.start, end: qcState.end };
}

function qcSyncModuleRanges() {
  QC_MODULE_SCOPES.forEach((scope) => { qcState.moduleRanges[scope] = { start: qcState.start, end: qcState.end }; });
}

function qcRangeDays(start, end) {
  return Math.max(1, Math.round((qcDate(end) - qcDate(start)) / 86400000) + 1);
}

function qcRangeLabel(range) {
  return range.start === range.end ? range.start : `${range.start} ～ ${range.end}`;
}

function qcComparisonRange(baseRange = { start: qcState.start, end: qcState.end }) {
  if (qcState.compareMode === 'none') return null;
  if (qcState.compareMode === 'custom') {
    if (!qcState.compareStart || !qcState.compareEnd) return null;
    const range = { start: qcState.compareStart, end: qcState.compareEnd };
    return { ...range, label: `自选 ${qcRangeLabel(range)}` };
  }
  if (qcState.compareMode === 'previousDay') {
    return { start: qcShiftDays(baseRange.start, -1), end: qcShiftDays(baseRange.end, -1), label: '前一天' };
  }
  if (qcState.compareMode === 'previousMonth') {
    return { start: qcShiftMonths(baseRange.start, -1), end: qcShiftMonths(baseRange.end, -1), label: '上一个月' };
  }
  const days = qcRangeDays(baseRange.start, baseRange.end);
  return {
    start: qcShiftDays(baseRange.start, -days),
    end: qcShiftDays(baseRange.end, -days),
    label: '上一周期',
  };
}

function qcFilterRows(rows, range, options = {}) {
  const filterPerson = options.person !== false;
  return (rows || []).filter((row) => {
    if (row.d < range.start || row.d > range.end) return false;
    if (options.brand !== false && !qcBrandMatches(row.b)) return false;
    if (filterPerson && qcState.person !== 'all' && row.n !== qcState.person && row.rn !== qcState.person && row.qn !== qcState.person) return false;
    return true;
  });
}

function qcSum(rows, field) {
  return rows.reduce((total, row) => total + (Number(row[field]) || 0), 0);
}

function qcIssueAttributeMatches(row, expected) {
  return String(row?.attr || '')
    .split(/\s*(?:\/|、|,|，)\s*/)
    .map((value) => value.trim())
    .filter(Boolean)
    .includes(expected);
}

function qcSecondRepairMetrics(rows) {
  const returned = qcSum(rows, 'w');
  const rechecked = qcSum(rows, 'q');
  return {
    returned,
    rechecked,
    rate: rechecked > 0 ? returned / rechecked : null,
  };
}

function qcSecondRepairPercent(value, fallback = '—') {
  if (value === null || value === undefined || value === '') return fallback;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? String(Math.round(numeric * 100)) : fallback;
}
function qcCapacityMetrics(rows) {
  return {
    qc: qcSum(rows, 'q'),
    returnQc: rows.some((row) => Object.prototype.hasOwnProperty.call(row, 'rq')) ? qcSum(rows, 'rq') : (rows.some((row) => Object.prototype.hasOwnProperty.call(row, 'ret')) ? qcSum(rows, 'ret') : qcSum(rows.filter((row) => /销退/.test(String(row.r || ''))), 'q')),
    offShelfQc: qcSum(rows, 'os'),
    vipQc: qcSum(rows, 'vp'),
    abnormalQc: qcSum(rows, 'ab'),
    bigGoods: qcSum(rows, 'bg'),
    largeQc: qcSum(rows, 'lq'),
    largeDefects: qcSum(rows, 'ld'),
    packing: qcSum(rows, 'pk'),
    repair: qcSum(rows, 'rrp'),
    repairQc: qcSum(rows, 'rqc'),
    ironing: qcSum(rows, 'ir'),
    hours: qcSum(rows, 'h'),
    records: rows.length,
    people: new Set(rows.map((row) => row.n).filter(Boolean)).size,
  };
}

function qcComparisonText(current, previous, label) {
  if (!label) return '未启用周期对比';
  const difference = current - previous;
  const sign = difference > 0 ? '+' : '';
  const rate = qcComparisonPercent(current, previous);
  return `${label} ${qcNumber(previous, '0')} · ${sign}${qcNumber(difference, '0')}${rate ? ` ${rate}` : ''}`;
}

function qcComparisonPercent(current, previous) {
  if (!previous) return '';
  const difference = current - previous;
  const sign = difference > 0 ? '+' : '';
  const percentage = Math.round(difference / previous * 1000) / 10;
  return `\uff08${sign}${percentage}%\uff09`;
}

function qcAggregateRanking(rows, field) {
  const people = new Map();
  rows.forEach((row) => {
    const value = Number(row[field]) || 0;
    if (!value) return;
    if (!people.has(row.n)) people.set(row.n, { name: row.n, value: 0, roles: new Set(), reports: new Set() });
    const person = people.get(row.n);
    person.value += value;
    if (row.r) person.roles.add(row.r);
    if (row.p) String(row.p).split('/').map((item) => item.trim()).filter(Boolean).forEach((item) => person.reports.add(item));
  });
  return [...people.values()].map((person) => ({
    name: person.name,
    value: person.value,
    role: [...person.roles].join(' / ') || '\u672a\u767b\u8bb0\u5c97\u4f4d',
    reports: [...person.reports],
  })).sort((a, b) => b.value - a.value);
}

function qcRankingMeta(person) {
  const parts = [];
  if (person.role) parts.push(person.role);
  if (person.reports.length) parts.push(`\u62a5\u6b21\uff1a${person.reports.join(' / ')}`);
  return parts.map(qcEscape).join(' \u00b7 ');
}

function qcBuildTrend(rows, compareRows, field, currentRange, comparison) {
  const totalDays = qcRangeDays(currentRange.start, currentRange.end);
  const step = totalDays <= 31 ? 1 : totalDays <= 120 ? 7 : 30;
  const currentDates = [];
  for (let date = currentRange.start; date <= currentRange.end; date = qcShiftDays(date, 1)) currentDates.push(date);
  const compareDates = [];
  if (comparison) {
    for (let date = comparison.start; date <= comparison.end; date = qcShiftDays(date, 1)) compareDates.push(date);
  }
  const buckets = [];
  for (let index = 0; index < currentDates.length; index += step) {
    const dates = currentDates.slice(index, index + step);
    const comparedDates = compareDates.slice(index, index + step);
    const value = rows.filter((row) => dates.includes(row.d)).reduce((sum, row) => sum + (Number(row[field]) || 0), 0);
    const compareValue = compareRows.filter((row) => comparedDates.includes(row.d)).reduce((sum, row) => sum + (Number(row[field]) || 0), 0);
    const first = dates[0];
    const last = dates[dates.length - 1];
    const label = step === 1 ? first.slice(5).replace('-', '/') : `${first.slice(5).replace('-', '/')}～${last.slice(5).replace('-', '/')}`;
    buckets.push({ label, value, compareValue });
  }
  return { buckets, unit: step === 1 ? '按日' : step === 7 ? '按周' : '按月段' };
}

function qcBars(items, emptyText) {
  const max = Math.max(1, ...items.map((item) => item.value || 0));
  return items.length ? items.map((item) => `
    <article class="qc-bar-row"><span>${qcEscape(item.name)}</span><strong>${qcNumber(item.value)}</strong><div class="qc-bar-track"><i style="width:${Math.max(4, item.value / max * 100)}%"></i></div></article>
  `).join('') : `<p class="qc-empty">${qcEscape(emptyText)}</p>`;
}

function qcApplyPersonSearch() {
  const keyword = qcPersonSearchQuery.trim().toLocaleLowerCase('zh-CN');
  const options = [...document.querySelectorAll('#qcPersonOptions [data-qc-person-value]')];
  let visibleCount = 0;
  options.forEach((button) => {
    const value = button.dataset.qcPersonValue || '';
    const visible = !keyword || (value !== 'all' && value.toLocaleLowerCase('zh-CN').includes(keyword));
    button.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  const empty = $('#qcPersonEmpty');
  if (empty) empty.hidden = visibleCount > 0;
}

function qcRefreshPersonOptions() {
  const rows = (qcState.data?.capacity || []).filter((row) => row.d >= qcState.start && row.d <= qcState.end && qcBrandMatches(row.b));
  const people = new Map();
  rows.forEach((row) => {
    if (!row.n) return;
    if (!people.has(row.n)) people.set(row.n, { output: 0, brands: new Map() });
    const person = people.get(row.n);
    person.output += qcPrimaryOutput(row);
    if (row.b) person.brands.set(row.b, (person.brands.get(row.b) || 0) + qcPrimaryOutput(row));
  });
  const ranked = [...people.entries()].map(([name, item]) => ({
    name,
    output: item.output,
    brands: [...item.brands.entries()].sort((a, b) => b[1] - a[1]).map(([brand]) => brand),
  })).sort((a, b) => b.output - a.output || a.name.localeCompare(b.name, 'zh-CN'));
  if (qcState.person !== 'all' && !people.has(qcState.person)) ranked.push({ name: qcState.person, output: 0, brands: [] });
  $('#qcPersonFilter').innerHTML = '<option value="all">全部人员</option>' + ranked.map((person) => `<option value="${qcEscape(person.name)}">${qcEscape(person.name)}</option>`).join('');
  const personOptions = $('#qcPersonOptions');
  if (personOptions) {
    const allSelected = qcState.person === 'all';
    personOptions.innerHTML = `<button type="button" data-qc-person-value="all" role="option" aria-selected="${allSelected}" class="${allSelected ? 'is-selected' : ''}"><span>全部人员</span><small>${qcNumber(ranked.length, '0')} 人</small></button>` + ranked.map((person) => {
      const selected = qcState.person === person.name;
      return `<button type="button" data-qc-person-value="${qcEscape(person.name)}" role="option" aria-selected="${selected}" class="${selected ? 'is-selected' : ''}"><span>${qcEscape(person.name)}</span><small>${qcNumber(person.output, '0')} 件</small></button>`;
    }).join('');
    $('#qcPersonPickerSummary').textContent = allSelected ? '全部人员' : qcState.person;
    const search = $('#qcPersonSearch');
    if (search && search.value !== qcPersonSearchQuery) search.value = qcPersonSearchQuery;
    qcApplyPersonSearch();
  }
}

function qcRenderFilterState() {
  const comparison = qcComparisonRange();
  qcRefreshPersonOptions();
  $('#qcStartDate').value = qcState.start;
  $('#qcEndDate').value = qcState.end;
  $('#qcCompareMode').value = qcState.compareMode;
  $('#qcPersonFilter').value = qcState.person;
  $('#qcBrandFilterSummary').textContent = qcBrandLabel();
  document.querySelectorAll('[data-qc-brand-value]').forEach((input) => { input.checked = qcState.brands.includes(input.dataset.qcBrandValue); });
  const custom = qcState.compareMode === 'custom';
  $('#qcCompareStartWrap').hidden = !custom;
  $('#qcCompareEndWrap').hidden = !custom;
  $('#qcCompareStartDate').value = qcState.compareStart;
  $('#qcCompareEndDate').value = qcState.compareEnd;
  $('#qcInlineStartDate').value = qcState.start;
  $('#qcInlineEndDate').value = qcState.end;
  $('#qcInlineCompareStartDate').value = comparison?.start || '';
  $('#qcInlineCompareEndDate').value = comparison?.end || '';
  $('#qcCurrentDayCount').textContent = `共 ${qcRangeDays(qcState.start, qcState.end)} 天`;
  $('#qcCompareDayCount').textContent = comparison ? `共 ${qcRangeDays(comparison.start, comparison.end)} 天` : '未对比';
  $('#qcQuickRange').value = qcQuickRangeKey();
  const modulePrefixes = { people: 'People', brands: 'Brands', quality: 'Quality' };
  const quickOptions = QC_QUICK_RANGE_OPTIONS.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
  QC_MODULE_SCOPES.forEach((scope) => {
    const prefix = modulePrefixes[scope];
    const range = qcModuleRange(scope);
    $(`#qc${prefix}StartDate`).value = range.start;
    $(`#qc${prefix}EndDate`).value = range.end;
    $(`#qc${prefix}DayCount`).textContent = `共 ${qcRangeDays(range.start, range.end)} 天`;
    const quick = $(`#qc${prefix}QuickRange`);
    if (!quick.options.length) quick.innerHTML = quickOptions;
    quick.value = qcQuickRangeKey(range);
  });
}

function qcActiveSubMode() {
  return QC_QC_SUBMODES.find((item) => item.key === qcState.qcSubMode) || QC_QC_SUBMODES[0];
}

function qcActiveEfficiencySubMode() {
  return QC_QC_SUBMODES.find((item) => item.key === qcState.efficiencyQcSubMode) || QC_QC_SUBMODES[0];
}
function qcRowsForRoleMode(rows, mode) {
  if (!mode?.rolePattern) return rows;
  return rows.filter((row) => mode.rolePattern.test(String(row.r || '')));
}

function qcRankModeLabel(mode) {
  return mode.key === 'qc' ? qcActiveSubMode().label : mode.label;
}

function qcRenderRanking(rows, range) {
  const mode = QC_WORK_MODES.find((item) => item.key === qcState.rankMode) || QC_WORK_MODES[0];
  const modeLabel = qcRankModeLabel(mode);
  const rankingRoleMode = mode.key === 'qc' ? qcActiveSubMode() : mode;
  const people = qcAggregateRanking(qcRowsForRoleMode(rows, rankingRoleMode), rankingRoleMode.field || mode.field).slice(0, 10);
  const peopleMax = Math.max(1, ...people.map((person) => person.value));
  const rankingRoot = $('#qcPeopleRanking');
  $('#qcRankingTitle').textContent = `${qcRangeLabel(range)} · ${modeLabel}排行 Top 10`;
  rankingRoot.innerHTML = `
    <div class="qc-work-tabs" role="tablist" aria-label="工种产出排行">
      ${QC_WORK_MODES.map((item) => `<button type="button" class="${item.key === mode.key ? 'active' : ''}" data-qc-rank-mode="${item.key}" role="tab" aria-selected="${item.key === mode.key}">${item.label}</button>`).join('')}
    </div>
    ${mode.key === 'qc' ? `<div class="qc-sub-work-tabs" role="tablist" aria-label="质检细分"><span>质检细分</span>${QC_QC_SUBMODES.map((item) => `<button type="button" class="${item.key === qcActiveSubMode().key ? 'active' : ''}" data-qc-sub-mode="${item.key}" role="tab" aria-selected="${item.key === qcActiveSubMode().key}">${item.label}</button>`).join('')}</div>` : ''}
    <div class="qc-ranking-rows">
      ${people.length ? people.map((person, index) => {
        const metaText = qcRankingMeta(person);
        return `<article class="qc-rank-row"><span class="qc-rank-no">${index + 1}</span><div class="qc-rank-main"><div class="qc-rank-meta"><strong>${qcEscape(person.name)}</strong><span>${metaText}</span></div><div class="qc-rank-track"><i style="width:${Math.max(5, person.value / peopleMax * 100)}%"></i></div></div><b class="qc-rank-score">${qcNumber(person.value)}<small>件</small></b></article>`;
      }).join('') : `<p class="qc-empty">当前条件下暂无${modeLabel}产出记录</p>`}
    </div>`;
  rankingRoot.querySelectorAll('[data-qc-rank-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      qcState.rankMode = button.dataset.qcRankMode;
      renderQCDashboard();
    });
  });
  rankingRoot.querySelectorAll('[data-qc-sub-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      qcState.qcSubMode = button.dataset.qcSubMode;
      renderQCDashboard();
    });
  });
}

function qcRenderTrend(rows, compareRows, currentRange, comparison) {
  const mode = QC_WORK_MODES.find((item) => item.key === qcState.rankMode) || QC_WORK_MODES[0];
  const modeLabel = qcRankModeLabel(mode);
  const roleMode = mode.key === 'qc' ? qcActiveSubMode() : mode;
  const subject = qcState.person === 'all' ? '全体人员' : qcState.person;
  const brand = qcBrandLabel();
  const trendField = roleMode.field || mode.field;
  const trend = qcBuildTrend(qcRowsForRoleMode(rows, roleMode), qcRowsForRoleMode(compareRows, roleMode), trendField, currentRange, comparison);
  const max = Math.max(1, ...trend.buckets.flatMap((item) => [item.value, item.compareValue]));
  $('#qcTrendTitle').textContent = `${subject} · ${modeLabel}产出 · ${qcRangeLabel(currentRange)}`;
  $('#qcTrendSubtitle').textContent = `${brand} · ${trend.unit}汇总`;
  $('#qcTrend').innerHTML = `
    <div class="qc-trend-explain">纵向按日期查看产量；同一行上方为当前区间，下方为所选对比区间。</div>
    <div class="qc-trend-legend"><span><i></i>当前 ${qcRangeLabel(currentRange)}</span>${comparison ? `<span class="compare"><i></i>对比 ${qcRangeLabel(comparison)}</span>` : ''}</div>
    ${trend.buckets.length ? trend.buckets.map((item) => `
      <article class="qc-trend-row"><span>${item.label}</span><div class="qc-trend-stack"><div class="qc-trend-track"><i style="width:${Math.max(item.value ? 3 : 0, item.value / max * 100)}%"></i></div>${comparison ? `<div class="qc-trend-track comparison"><i style="width:${Math.max(item.compareValue ? 3 : 0, item.compareValue / max * 100)}%"></i></div>` : ''}</div><strong><b>当前 ${qcNumber(item.value, '0')} ${modeLabel}</b>${comparison ? `<small>对比 ${qcNumber(item.compareValue, '0')} ${modeLabel}</small>` : ''}</strong></article>
    `).join('') : '<p class="qc-empty">当前条件下暂无趋势数据</p>'}`;
}

function qcPrimaryField(row) {
  const role = String(row.r || '');
  if (/销退/.test(role)) return Object.prototype.hasOwnProperty.call(row, 'rq') ? 'rq' : (Object.prototype.hasOwnProperty.call(row, 'ret') ? 'ret' : 'q');
  if (/质检|检验|抽检/.test(role)) return 'q';
  if (/包装/.test(role)) return 'pk';
  if (/烫/.test(role)) return 'ir';
  if (/返修/.test(role)) return 'rrp';
  return 'q';
}
function qcPrimaryOutput(row) {
  return Number(row[qcPrimaryField(row)]) || 0;
}

function qcEffectiveHours(row) {
  const totalHours = Number(row?.wh) || 0;
  const otherHours = Number(row?.other) || 0;
  return Math.max(0, totalHours - otherHours);
}
function qcEfficiencyOutput(row, field = null) {
  if (field) return Number(row[field]) || 0;
  const qualityField = /\u9500\u9000/.test(String(row.r || '')) && Object.prototype.hasOwnProperty.call(row, 'rq') ? 'rq' : (/\u9500\u9000/.test(String(row.r || '')) && Object.prototype.hasOwnProperty.call(row, 'ret') ? 'ret' : 'q');
  return [qualityField, 'pk', 'rrp', 'ir'].reduce((sum, key) => sum + (Number(row[key]) || 0), 0);
}

function qcEfficiencySummary(rows, field, range) {
  const selectedDays = new Map();
  rows.forEach((row) => {
    const key = `${row.n}|${row.d}`;
    if (!selectedDays.has(key)) selectedDays.set(key, { person: row.n, date: row.d, output: 0, hours: 0, roles: new Set() });
    const item = selectedDays.get(key);
    item.output += qcEfficiencyOutput(row, field);
    if (row.r) item.roles.add(row.r);
  });

  const allRows = qcFilterRows(qcState.data.capacity, range, { brand: false });
  const allDays = new Map();
  allRows.forEach((row) => {
    const key = `${row.n}|${row.d}`;
    if (!allDays.has(key)) allDays.set(key, { output: 0, hours: 0 });
    const item = allDays.get(key);
    item.output += qcEfficiencyOutput(row, field);
    item.hours = Math.max(item.hours, qcEffectiveHours(row));
  });

  const groups = [...selectedDays.entries()].map(([key, item]) => {
    const all = allDays.get(key) || { output: item.output, hours: 0 };
    const allocation = qcState.brands.length && all.output > 0 ? item.output / all.output : 1;
    return { ...item, hours: all.hours * allocation };
  });
  const validGroups = groups.filter((item) => item.hours > 0);
  const output = validGroups.reduce((sum, item) => sum + item.output, 0);
  const hours = validGroups.reduce((sum, item) => sum + item.hours, 0);
  return {
    groups,
    validGroups,
    output,
    hours,
    rate: hours ? Math.round(output / hours * 10) / 10 : null,
    coverage: groups.length ? Math.round(validGroups.length / groups.length * 1000) / 10 : 0,
    people: new Set(validGroups.map((item) => item.person)).size,
    personDays: validGroups.length,
  };
}

function qcRenderEfficiency(rows, rangeValue) {
  const mode = QC_EFFICIENCY_MODES.find((item) => item.key === qcState.efficiencyMode) || QC_EFFICIENCY_MODES[0];
  const efficiencySubMode = mode.key === 'qc' ? qcActiveEfficiencySubMode() : mode;
  const efficiencyLabel = mode.key === 'qc' ? efficiencySubMode.label : mode.label;
  const modeRows = qcRowsForRoleMode(rows, efficiencySubMode);
  const overall = qcEfficiencySummary(modeRows, efficiencySubMode.field || mode.field, rangeValue);
  const brandLabel = qcBrandLabel();
  const personLabel = qcState.person === 'all' ? '全部人员' : qcState.person;
  const range = qcRangeLabel(rangeValue);
  $('#qcEfficiencyTabs').innerHTML = `<span>\u4EBA\u6548\u5DE5\u79CD</span><div>${QC_EFFICIENCY_MODES.map((item) => `<button type="button" class="${item.key === mode.key ? 'active' : ''}" data-qc-efficiency-mode="${item.key}">${item.label}</button>`).join('')}</div>${mode.key === 'qc' ? `<div class="qc-sub-work-tabs qc-efficiency-sub-tabs" role="tablist" aria-label="\u8D28\u68C0\u4EBA\u6548\u7EC6\u5206"><span>\u8D28\u68C0\u7EC6\u5206</span>${QC_QC_SUBMODES.map((item) => `<button type="button" class="${item.key === qcActiveEfficiencySubMode().key ? 'active' : ''}" data-qc-efficiency-qc-sub-mode="${item.key}" role="tab" aria-selected="${item.key === qcActiveEfficiencySubMode().key}">${item.label}</button>`).join('')}</div>` : ''}`;
  $('#qcEfficiencyTabs').querySelectorAll('[data-qc-efficiency-mode]').forEach((button) => button.addEventListener('click', () => { qcState.efficiencyMode = button.dataset.qcEfficiencyMode; renderQCDashboard(); }));
  $('#qcEfficiencyTabs').querySelectorAll('[data-qc-efficiency-qc-sub-mode]').forEach((button) => button.addEventListener('click', () => { qcState.efficiencyQcSubMode = button.dataset.qcEfficiencyQcSubMode; renderQCDashboard(); }));
  $('#qcOverallEfficiencyScope').textContent = `${range} · ${brandLabel} · ${personLabel} · ${efficiencyLabel}`;
  $('#qcIndividualEfficiencyScope').textContent = `${range} · ${brandLabel} · ${efficiencyLabel} · ${qcState.person === 'all' ? '按个人排名' : '当前单人'}`;
  const overallCards = [
    ['\u603b\u4f53\u4eba\u6548', overall.rate === null ? '\u6709\u6548\u5de5\u65f6\u4e0d\u8db3' : `${qcDecimal(overall.rate)} \u4ef6/\u4eba\u65f6`],
    ['\u6709\u6548\u4ea7\u51fa', `${qcNumber(overall.output, '0')} \u4ef6`],
    ['\u6709\u6548\u5728\u5c97\u65f6\u957f', `${qcDecimal(overall.hours)} \u5c0f\u65f6`],
    ['\u4eba\u5929\u5de5\u65f6\u8986\u76d6\u7387', `${overall.coverage}%`],
  ];
  $('#qcOverallEfficiency').innerHTML = `<div class="qc-overall-grid">${overallCards.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join('')}</div>`;

  const people = new Map();
  overall.validGroups.forEach((item) => {
    if (!people.has(item.person)) people.set(item.person, { name: item.person, output: 0, hours: 0, roles: new Set(), days: new Set() });
    const person = people.get(item.person);
    person.output += item.output;
    person.hours += item.hours;
    item.roles.forEach((role) => person.roles.add(role));
    person.days.add(item.date);
  });
  const ranking = [...people.values()].map((person) => ({ ...person, rate: person.hours ? Math.round(person.output / person.hours * 10) / 10 : 0 })).sort((a, b) => b.rate - a.rate).slice(0, 20);
  const max = Math.max(1, ...ranking.map((person) => person.rate));
  $('#qcIndividualEfficiency').innerHTML = ranking.length ? `<div class="qc-individual-list">${ranking.map((person, index) => `<article class="qc-efficiency-row"><span class="qc-rank-no">${index + 1}</span><div class="qc-rank-main"><div class="qc-rank-meta"><strong>${qcEscape(person.name)}</strong><span>${qcEscape([...person.roles].join(' / ') || '未登记岗位')} · ${person.days.size} 天 · ${qcDecimal(person.hours)} 小时 · ${qcNumber(person.output, '0')} 件</span></div><div class="qc-rank-track"><i style="width:${Math.max(5, person.rate / max * 100)}%"></i></div></div><b>${qcDecimal(person.rate)}<small>件/人时</small></b></article>`).join('')}</div>` : '<p class="qc-empty">当前日期、品牌、人员和工种条件下，没有可计算人效的记录</p>';
}
function qcRenderInsights(rows, rangeValue) {
  const range = qcRangeLabel(rangeValue);
  $('#qcRoleScope').textContent = `${range} · 人数 / 综合产出`;
  const roles = new Map();
  rows.forEach((row) => {
    const roleName = row.r || '未登记岗位';
    if (!roles.has(roleName)) roles.set(roleName, { name: roleName, people: new Set(), value: 0 });
    const role = roles.get(roleName);
    role.people.add(row.n);
    role.value += qcEfficiencyOutput(row, null);
  });
  const roleItems = [...roles.values()].map((item) => ({ name: `${item.name} · ${item.people.size} 人`, value: item.value })).sort((a, b) => b.value - a.value).slice(0, 12);
  $('#qcRoleDistribution').innerHTML = qcBars(roleItems, `当前区间 ${range} 暂无岗位数据`);

  const activePeople = new Set(rows.map((row) => row.n).filter(Boolean)).size;
  const totalOutput = rows.reduce((sum, row) => sum + qcEfficiencyOutput(row, null), 0);
  const efficiency = qcEfficiencySummary(rows, null, rangeValue);
  const reportRows = rows.filter((row) => row.p).length;
  const cards = [
    ['活跃人数', `${qcNumber(activePeople, '0')} 人`, `${range} · ${qcNumber(rows.length, '0')} 条产能记录`],
    ['人均处理量', `${qcNumber(activePeople ? Math.round(totalOutput / activePeople) : 0)} 件次`, `${range} · 综合产出 / 活跃人数`],
    ['在岗时长登记率', `${efficiency.coverage}%`, `${qcNumber(efficiency.validGroups.length, '0')} / ${qcNumber(efficiency.groups.length, '0')} 人天`],
    ['报次登记率', `${rows.length ? Math.round(reportRows / rows.length * 1000) / 10 : 0}%`, `${qcNumber(reportRows, '0')} / ${qcNumber(rows.length, '0')} 条`],
  ];
  $('#qcCompleteness').innerHTML = cards.map(([label, value, note]) => `<article><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`).join('');
}
function renderQCBrandGroups(data, rows) {
  const root = $('#qcBrandGroups');
  if (!root) return;
  const preferred = QC_MAIN_BRANDS;
  const brandTotals = new Map();
  rows.forEach((row) => brandTotals.set(row.b, (brandTotals.get(row.b) || 0) + row.q + row.pk + row.rrp + row.ir));
  let brands = qcState.brands.length
    ? qcState.brands.filter((brand) => brandTotals.has(brand))
    : preferred.filter((brand) => brandTotals.has(brand));
  if (brands.length < 3 && !qcState.brands.length) {
    [...brandTotals.entries()].sort((a, b) => b[1] - a[1]).forEach(([brand]) => { if (brands.length < 3 && !brands.includes(brand)) brands.push(brand); });
  }
  root.innerHTML = brands.length ? brands.map((brand, index) => {
    const brandRows = rows.filter((row) => row.b === brand);
    const modeKey = qcState.brandModes[brand] || 'qc';
    const mode = QC_WORK_MODES.find((item) => item.key === modeKey) || QC_WORK_MODES[0];
    const subModeKey = qcState.brandQcSubModes[brand] || 'all';
    const subMode = mode.key === 'qc'
      ? QC_QC_SUBMODES.find((item) => item.key === subModeKey) || QC_QC_SUBMODES[0]
      : mode;
    const modeLabel = mode.key === 'qc' ? subMode.label : mode.label;
    const ranking = qcAggregateRanking(qcRowsForRoleMode(brandRows, subMode), mode.field).slice(0, 15);
    const max = Math.max(1, ...ranking.map((row) => row.value));
    const open = Object.prototype.hasOwnProperty.call(qcState.brandOpen, brand) ? qcState.brandOpen[brand] : index === 0;
    const totals = qcCapacityMetrics(brandRows);
    return `<details class="qc-brand-group" ${open ? 'open' : ''}>
      <summary><span class="qc-brand-title"><strong>${qcEscape(brand)}</strong><em>${qcNumber(brandRows.length, '0')} \u6761\u4EA7\u80FD\u8BB0\u5F55</em></span><span class="qc-brand-totals"><b>\u8D28\u68C0 ${qcNumber(totals.qc)} \u4EF6</b><b>\u9500\u9000 ${qcNumber(totals.returnQc)} \u4EF6</b><b>\u552F\u54C1\u4F1A ${qcNumber(totals.vipQc)} \u4EF6</b><b>\u5F02\u5E38\u4EF6 ${qcNumber(totals.abnormalQc)} \u4EF6</b><b>\u4E0B\u67B6 ${qcNumber(totals.offShelfQc)} \u4EF6</b><b>\u8FD4\u4FEE\u8D28\u68C0 ${qcNumber(totals.repairQc)} \u4EF6</b><b>\u5305\u88C5 ${qcNumber(totals.packing)} \u4EF6</b><b>\u8FD4\u4FEE ${qcNumber(totals.repair)} \u4EF6</b><b>\u5927\u70EB ${qcNumber(totals.ironing)} \u4EF6</b></span></summary>
      <div class="qc-brand-body">
        <div class="qc-work-tabs" role="tablist" aria-label="${qcEscape(brand)}\u5DE5\u79CD\u6392\u884C">${QC_WORK_MODES.map((item) => `<button type="button" class="${item.key === mode.key ? 'active' : ''}" data-qc-brand="${qcEscape(brand)}" data-qc-brand-mode="${item.key}">${item.label}</button>`).join('')}</div>
        ${mode.key === 'qc' ? `<div class="qc-sub-work-tabs qc-brand-sub-tabs" role="tablist" aria-label="${qcEscape(brand)}\u8D28\u68C0\u7EC6\u5206"><span>\u8D28\u68C0\u7EC6\u5206</span>${QC_QC_SUBMODES.map((item) => `<button type="button" class="${item.key === subMode.key ? 'active' : ''}" data-qc-brand="${qcEscape(brand)}" data-qc-brand-qc-sub-mode="${item.key}" role="tab" aria-selected="${item.key === subMode.key}">${item.label}</button>`).join('')}</div>` : ''}
        <div class="qc-brand-ranking">${ranking.length ? ranking.map((person, rank) => `<article class="qc-rank-row"><span class="qc-rank-no">${rank + 1}</span><div class="qc-rank-main"><div class="qc-rank-meta"><strong>${qcEscape(person.name)}</strong><span>${qcRankingMeta(person)}</span></div><div class="qc-rank-track"><i style="width:${Math.max(5, person.value / max * 100)}%"></i></div></div><b class="qc-rank-score">${qcNumber(person.value)}<small>\u4EF6</small></b></article>`).join('') : `<p class="qc-empty">\u8BE5\u54C1\u724C\u5F53\u524D\u6CA1\u6709${modeLabel}\u8BB0\u5F55</p>`}</div>
      </div>
    </details>`;
  }).join('') : '<p class="qc-empty">\u5F53\u524D\u6761\u4EF6\u4E0B\u6682\u65E0\u54C1\u724C\u6570\u636E</p>';

  root.querySelectorAll('.qc-brand-group').forEach((group) => {
    group.addEventListener('toggle', () => {
      const brand = group.querySelector('[data-qc-brand]')?.dataset.qcBrand;
      if (brand) qcState.brandOpen[brand] = group.open;
    });
  });
  root.querySelectorAll('[data-qc-brand-mode]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const group = button.closest('.qc-brand-group');
      qcState.brandOpen[button.dataset.qcBrand] = group ? group.open : false;
      qcState.brandModes[button.dataset.qcBrand] = button.dataset.qcBrandMode;
      renderQCBrandGroups(data, rows);
    });
  });
  root.querySelectorAll('[data-qc-brand-qc-sub-mode]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const group = button.closest('.qc-brand-group');
      const brand = button.dataset.qcBrand;
      qcState.brandOpen[brand] = group ? group.open : false;
      qcState.brandQcSubModes[brand] = button.dataset.qcBrandQcSubMode;
      renderQCBrandGroups(data, rows);
    });
  });
}
function qcComplaintPercent(rate) {
  const percentValue = Number(rate) * 100;
  return Number.isFinite(percentValue) ? percentValue.toFixed(2) : '\u2014';
}
function qcComplaintRate(complaints, shipment) {
  const shipmentValue = Number(shipment) || 0;
  return shipmentValue ? (Number(complaints) || 0) / shipmentValue : null;
}

function qcComplaintRateText(complaints, shipment) {
  const rate = qcComplaintRate(complaints, shipment);
  return rate === null ? '\u2014' : `${qcComplaintPercent(rate)}%`;
}

function qcQualityComplaintRate(qualityIssues, shipment) {
  const shipmentValue = Number(shipment) || 0;
  return shipmentValue ? (Number(qualityIssues) || 0) / shipmentValue : null;
}
function qcQualityComplaintRateText(qualityIssues, shipment) {
  const rate = qcQualityComplaintRate(qualityIssues, shipment);
  return rate === null ? '\u2014' : `${qcComplaintPercent(rate)}%`;
}function qcComplaintPeriodLabel(period, granularity) {
  if (!period) return '暂无可用周期';
  if (granularity === 'month') return `${period.start.slice(0, 7)} 月度`;
  return `${period.start.slice(5).replace('-', '/')}–${period.end.slice(5).replace('-', '/')}`;
}
function qcComplaintVisiblePeriods(complaintData, granularity) {
  const key = granularity === 'month' ? 'monthly' : 'weekly';
  const periods = Array.isArray(complaintData?.[key]) ? complaintData[key] : [];
  const start = qcState.complaintStart || complaintData?.availableRange?.start || '2026-01-01';
  const end = qcState.complaintEnd || complaintData?.availableRange?.end || '';
  return periods.filter((period) => granularity === 'month'
    ? (!start || period.end >= start) && (!end || period.start <= end)
    : (!start || period.start >= start) && (!end || period.start <= end));
}
function qcComplaintSelectedValues(period) {
  const allBrands = Array.isArray(period?.brands) ? period.brands : [];
  if (qcState.complaintBrand === 'all') return period || {};
  const brand = allBrands.find((item) => item.name === qcState.complaintBrand);
  return brand || { complaints: 0, shipment: 0, qualityIssues: 0, previousShipment: 0, previousComplaints: 0, previousQualityIssues: 0, start: period?.start, end: period?.end };
}
function qcRenderComplaintBrandOptions(complaintData, periods) {
  const select = $('#qcComplaintBrandFilter');
  if (!select) return;
  const names = [...new Set(periods.flatMap((period) => (period.brands || []).map((item) => item.name)).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const selected = names.includes(qcState.complaintBrand) ? qcState.complaintBrand : 'all';
  qcState.complaintBrand = selected;
  select.innerHTML = '<option value="all">全部品牌</option>' + names.map((name) => `<option value="${qcEscape(name)}">${qcEscape(name)}</option>`).join('');
  select.value = selected;
  const availableStart = complaintData?.availableRange?.start || periods[0]?.start || '2026-01-01';
  const availableEnd = complaintData?.availableRange?.end || periods.at(-1)?.end || '';
  const start = $('#qcComplaintStartDate');
  const end = $('#qcComplaintEndDate');
  if (start) { start.min = availableStart; start.max = availableEnd; start.value = qcState.complaintStart || availableStart; }
  if (end) { end.min = availableStart; end.max = availableEnd; end.value = qcState.complaintEnd || availableEnd; }
  document.querySelectorAll('[data-qc-complaint-range]').forEach((button) => button.classList.toggle('active', button.dataset.qcComplaintRange === qcState.complaintRangePreset));
}
function qcRenderComplaints() {
  const summary = $('#qcComplaintSummary');
  const table = $('#qcComplaintBrandTable');
  const formula = $('#qcComplaintFormula');
  const breakdown = $('#qcComplaintIssueBreakdown');
  const source = $('#qcComplaintSource');
  const alert = $('#qcComplaintAlert');
  if (!summary || !table || !formula || !source) return;
  const complaintData = qcState.complaints;
  const granularity = qcState.complaintGranularity === 'month' ? 'month' : 'week';
  document.querySelectorAll('[data-qc-complaint-granularity]').forEach((button) => button.classList.toggle('active', button.dataset.qcComplaintGranularity === granularity));
  const periods = qcComplaintVisiblePeriods(complaintData, granularity);
  qcRenderComplaintBrandOptions(complaintData, periods.length ? periods : (complaintData?.[granularity === 'month' ? 'monthly' : 'weekly'] || []));
  if (!periods.length) {
    if (alert) alert.hidden = true;
    source.textContent = '当前筛选范围暂无客诉数据';
    summary.innerHTML = '<p class="qc-empty">请扩大日期范围或切换品牌后重试。</p>';
    table.innerHTML = '<p class="qc-empty">当前筛选条件下暂无品牌客诉数据。</p>';
    formula.innerHTML = '<p>\u5ba2\u8bc9\u7387 = \u672c\u671f\u5ba2\u8bc9\u6570 \u00f7 \u672c\u671f\u53d1\u8d27\u6570\uff1b\u8d28\u68c0\u95ee\u9898\u5ba2\u8bc9\u7387\u540c\u53e3\u5f84\u3002</p>';
    return;
  }
  const currentPeriod = periods[periods.length - 1];
  const selected = qcComplaintSelectedValues(currentPeriod);
  const currentShipment = selected.shipment ?? 0;
  const previousComplaints = selected.previousComplaints ?? 0;
  const complaintGrowth = qcComparisonPercent(Number(selected.complaints) || 0, Number(previousComplaints) || 0);
  const rateText = qcComplaintRateText(selected.complaints, currentShipment);
  const actualRate = qcComplaintRate(selected.complaints, currentShipment);
  const qualityRateText = qcQualityComplaintRateText(selected.qualityIssues, currentShipment);  if (alert) {
    const overThreshold = actualRate !== null && actualRate >= 0.02;
    alert.hidden = !overThreshold;
    alert.textContent = overThreshold ? `异常提醒：${qcState.complaintBrand === 'all' ? '当前筛选范围' : qcState.complaintBrand} 客诉率 ${rateText}，已超过 2% 预警阈值，请优先复盘。` : '';
  }
  const periodUnit = granularity === 'month' ? '月' : '周';
  source.textContent = `${qcComplaintPeriodLabel(currentPeriod, granularity)} · ${complaintData.source || '飞书仓储周会'} · ${periods.length} 个${periodUnit}期${granularity === 'month' ? ` · ${complaintData.monthlySource || '按周报汇总推算'}` : ''}`;
summary.innerHTML = `
    <article class="qc-complaint-metric primary"><span>\u5b9e\u9645\u5ba2\u8bc9\u7387</span><strong>${rateText}</strong><p>\u672c\u671f\u5ba2\u8bc9 \u00f7 \u672c\u671f\u53d1\u8d27</p></article>
    <article class="qc-complaint-metric"><span>\u8d28\u68c0\u95ee\u9898\u5ba2\u8bc9\u7387</span><strong>${qualityRateText}</strong><p>\u672c\u671f\u8d28\u68c0\u95ee\u9898 \u00f7 \u672c\u671f\u53d1\u8d27</p></article>
    <article class="qc-complaint-metric"><span>\u672c\u671f\u603b\u5ba2\u8bc9</span><strong>${qcNumber(selected.complaints, '0')}<small>\u4ef6</small></strong><p>\u8f83\u4e0a\u671f ${qcNumber(previousComplaints, '0')} \u4ef6 ${complaintGrowth || ''}</p></article>
    <article class="qc-complaint-metric"><span>\u672c\u671f\u53d1\u8d27</span><strong>${qcNumber(currentShipment, '0')}<small>\u5355</small></strong><p>${qcComplaintPeriodLabel(currentPeriod, granularity)}</p></article>
    <article class="qc-complaint-metric"><span>\u672c\u671f\u8d28\u68c0\u95ee\u9898</span><strong>${qcNumber(selected.qualityIssues, '0')}<small>\u4ef6</small></strong><p>\u7528\u4e8e\u8bc6\u522b\u9700\u4f18\u5148\u590d\u76d8\u7684\u8d28\u91cf\u95ee\u9898</p></article>`;  const totalComplaints = Number(selected.complaints) || 0;
  const categoryValue = (source, field) => { const value = source?.[field]; return Object.prototype.hasOwnProperty.call(source || {}, field) && value !== null && value !== '' && Number.isFinite(Number(value)) ? Number(value) : null; };
  const selectedFabric = categoryValue(selected, 'fabricComplaints');
  const selectedProduction = categoryValue(selected, 'productionComplaints');
  const periodBrands = Array.isArray(currentPeriod.brands) ? currentPeriod.brands : [];
  const coveredBrands = qcState.complaintBrand === 'all' && granularity === 'week'
    ? periodBrands.filter((brand) => categoryValue(brand, 'fabricComplaints') !== null && categoryValue(brand, 'productionComplaints') !== null)
    : [];
  const partialCoverage = (selectedFabric === null || selectedProduction === null) && coveredBrands.length > 0 && coveredBrands.length < periodBrands.length;
  const coveredComplaints = coveredBrands.reduce((sum, brand) => sum + (Number(brand.complaints) || 0), 0);
  const fabricValue = selectedFabric ?? (coveredBrands.length ? coveredBrands.reduce((sum, brand) => sum + categoryValue(brand, 'fabricComplaints'), 0) : null);
  const productionValue = selectedProduction ?? (coveredBrands.length ? coveredBrands.reduce((sum, brand) => sum + categoryValue(brand, 'productionComplaints'), 0) : null);
  const categoryText = (value) => value === null ? '待周报同步' : `${qcNumber(value, '0')} 件`;
  const categoryShare = (value, denominator) => value === null ? '待同步' : (denominator ? `${qcPercent(value / denominator)}%` : '—');
  const detailDenominator = partialCoverage ? coveredComplaints : totalComplaints;
  const categories = [
    { label: '质量问题', value: Number(selected.qualityIssues) || 0, denominator: totalComplaints, tone: 'quality', note: '质量问题客诉占比' },
    { label: '面料问题', value: fabricValue, denominator: detailDenominator, tone: 'fabric', note: partialCoverage ? '占已同步品牌客诉' : '面料问题客诉占比' },
    { label: '生产问题', value: productionValue, denominator: detailDenominator, tone: 'production', note: partialCoverage ? '占已同步品牌客诉' : '生产问题客诉占比' },
  ];
  const categoryBreakdownReady = selectedFabric !== null && selectedProduction !== null;
  const coverageNames = coveredBrands.map((brand) => brand.name).join('、');
  const categoryNote = categoryBreakdownReady
    ? '数据来源：仓储周报客诉表；占比 = 分项客诉 ÷ 总客诉。'
    : partialCoverage
      ? `周报已同步 ${coverageNames}（${coveredBrands.length}/${periodBrands.length} 品牌）：面料、生产占比按已同步品牌客诉 ${qcNumber(coveredComplaints, '0')} 件计算，并非全部品牌汇总。`
      : '当前品牌的面料、生产分项尚未从周报同步；不会用差额推算。';
  if (breakdown) breakdown.innerHTML = `<div class="qc-complaint-issue-total"><span>总客诉</span><strong>${qcNumber(totalComplaints, '0')}<small>件</small></strong></div><div class="qc-complaint-issue-grid">${categories.map((item) => `<article class="${item.tone}"><span>${item.label}</span><strong>${categoryText(item.value)}</strong><b>${categoryShare(item.value, item.denominator)}</b></article>`).join('')}</div>${categoryBreakdownReady ? '' : `<p class="qc-complaint-issue-note ${partialCoverage ? 'partial' : ''}">${categoryNote}</p>`}`;
  const brands = (Array.isArray(currentPeriod.brands) ? currentPeriod.brands : []).filter((brand) => qcState.complaintBrand === 'all' || brand.name === qcState.complaintBrand);
table.innerHTML = brands.length ? `
    <div class="qc-complaint-table-head"><span>\u54c1\u724c</span><span>\u672c\u671f\u5ba2\u8bc9</span><span>\u672c\u671f\u53d1\u8d27</span><span>\u5b9e\u9645\u5ba2\u8bc9\u7387</span><span>\u8d28\u68c0\u95ee\u9898\u5ba2\u8bc9\u7387</span><span>\u5ba2\u8bc9\u6570\u53d8\u5316\uff08\u8f83\u4e0a\u671f\uff09</span></div>
    ${brands.map((brand) => {
      const brandShipment = brand.shipment ?? 0;
      const brandPreviousComplaints = brand.previousComplaints ?? 0;
      const growth = qcComparisonPercent(Number(brand.complaints) || 0, Number(brandPreviousComplaints) || 0);
      return `<div class="qc-complaint-table-row"><strong>${qcEscape(brand.name || '\u672a\u6807\u6ce8\u54c1\u724c')}</strong><span>${qcNumber(brand.complaints, '0')} \u4ef6</span><span>${qcNumber(brandShipment, '0')} \u5355</span><b>${qcComplaintRateText(brand.complaints, brandShipment)}</b><b class="quality-rate">${qcQualityComplaintRateText(brand.qualityIssues, brandShipment)}</b><em class="${Number(brand.complaints) > Number(brandPreviousComplaints) ? 'risk' : 'good'}">${growth || '\u2014'}</em></div>`;
    }).join('')}` : '<p class="qc-empty">\u5f53\u524d\u5468\u671f\u6682\u65e0\u54c1\u724c\u62c6\u5206\u6570\u636e</p>';
  formula.innerHTML = `
    <strong>\u5b9e\u9645\u5ba2\u8bc9\u7387 = \u672c\u671f\u5ba2\u8bc9\u6570 \u00f7 \u672c\u671f\u53d1\u8d27\u6570</strong>
    <strong>\u8d28\u68c0\u95ee\u9898\u5ba2\u8bc9\u7387 = \u672c\u671f\u8d28\u68c0\u95ee\u9898\u6570 \u00f7 \u672c\u671f\u53d1\u8d27\u6570</strong>
    <p>\u4e24\u9879\u5ba2\u8bc9\u7387\u5747\u6309\u5468\u62a5\u540c\u4e00\u884c\u53e3\u5f84\u8ba1\u7b97\uff1b\u5468\u5ea6\u6309\u540c\u5468\u671f\u53d1\u8d27\uff0c\u6708\u5ea6\u6309\u540c\u6708\u53d1\u8d27\u3002</p>
    <dl><div><dt>\u5f53\u524d\u5468\u671f</dt><dd>${qcComplaintPeriodLabel(currentPeriod, granularity)}</dd></div><div><dt>\u672c\u671f\u5ba2\u8bc9</dt><dd>${qcNumber(selected.complaints, '0')} \u4ef6</dd></div><div><dt>\u672c\u671f\u8d28\u68c0\u95ee\u9898</dt><dd>${qcNumber(selected.qualityIssues, '0')} \u4ef6</dd></div><div><dt>\u540c\u884c\u53d1\u8d27</dt><dd>${qcNumber(currentShipment, '0')} \u5355</dd></div><div><dt>\u7b5b\u9009\u54c1\u724c</dt><dd>${qcState.complaintBrand === 'all' ? '\u5168\u90e8\u54c1\u724c' : qcEscape(qcState.complaintBrand)}</dd></div></dl>`;
}function qcWarehouseAggregate(warehouse) {
  if (!warehouse) return null;
  if (warehouse.total) return { ...warehouse.total, name: '合计' };
  const brands = Array.isArray(warehouse.brands) ? warehouse.brands : [];
  if (!brands.length) return null;
  const inbound = brands.reduce((sum, item) => sum + (Number(item.inbound) || 0), 0);
  const outbound = brands.reduce((sum, item) => sum + (Number(item.outbound) || 0), 0);
  const weightedReturns = brands.reduce((sum, item) => sum + (Number(item.inbound) || 0) * (Number(item.inboundReturnRate) || 0), 0);
  return { name: '合计', inbound, outbound, inboundReturnRate: inbound ? weightedReturns / inbound : null };
}
function qcWarehouseComparison(current, previous, isRate = false) {
  const currentValue = Number(current);
  const previousValue = Number(previous);
  if (!Number.isFinite(currentValue) || !Number.isFinite(previousValue)) return '<span class="qc-warehouse-compare neutral">上周暂无</span>';
  const delta = currentValue - previousValue;
  const previousText = isRate ? qcDecimal(previousValue * 100, 2) + '%' : qcNumber(previousValue, '0') + ' 件';
  const deltaText = isRate ? qcDecimal(Math.abs(delta) * 100, 2) + ' 个百分点' : qcNumber(Math.abs(delta), '0') + ' 件';
  const tone = delta > 0 ? 'increase' : (delta < 0 ? 'decrease' : 'neutral');
  const sign = delta > 0 ? '+' : (delta < 0 ? '−' : '');
  return '<span class="qc-warehouse-compare ' + tone + '">上周 ' + previousText + ' · 差异 ' + sign + deltaText + '</span>';
}
function qcWarehouseMetric(label, current, previous, isRate = false) {
  const numeric = Number(current);
  const value = Number.isFinite(numeric) ? (isRate ? qcDecimal(numeric * 100, 2) : qcNumber(numeric, '0')) : '—';
  const unit = Number.isFinite(numeric) ? (isRate ? '%' : '件') : '';
  return '<div><dt>' + label + '</dt><dd>' + value + '<small>' + unit + '</small></dd>' + qcWarehouseComparison(current, previous, isRate) + '</div>';
}
function qcRenderWeeklyWarehouse(rangeValue, repairRows = [], allRepairRows = repairRows) {
  const root = $('#qcWeeklyWarehouse');
  const rangeLabel = $('#qcWeeklyWarehouseRange');
  if (!root || !rangeLabel) return;
  const selectedBrand = qcState.repairBrand || 'all';
  const selectedLabel = selectedBrand === 'all' ? '全部品牌' : selectedBrand;
  const { returned: secondRepairCount, rate: secondRepairRate } = qcSecondRepairMetrics(repairRows);
  const brandMap = new Map();
  allRepairRows.forEach((row) => {
    const brand = String(row.b || '').trim() || '未标记品牌';
    if (!brandMap.has(brand)) brandMap.set(brand, { brand, recheck: 0, returned: 0 });
    const item = brandMap.get(brand);
    item.recheck += Number(row.q) || 0;
    item.returned += Number(row.w) || 0;
  });
  const brandRows = [...brandMap.values()].map((item) => ({ ...item, rate: item.recheck ? item.returned / item.recheck : null })).sort((a, b) => b.returned - a.returned || a.brand.localeCompare(b.brand, 'zh-CN'));
  const brandDetail = brandRows.length ? '<section class="qc-brand-second-repair"><div class="qc-brand-second-repair-title"><strong>品牌二次返修明细</strong><span>'+rangeValue.start+' ～ '+rangeValue.end+' · 返修明细数据</span></div><div class="qc-brand-second-repair-head"><span>品牌</span><span>二次返修数量</span><span>二次返修率</span></div><div class="qc-brand-second-repair-rows">'+brandRows.map((item) => '<article'+(item.brand === selectedBrand ? ' class="selected"' : '')+'><strong>'+qcEscape(item.brand)+'</strong><b>'+qcNumber(item.returned, '0')+'<small>件</small></b><em>'+qcSecondRepairPercent(item.rate)+'<small>%</small></em></article>').join('')+'</div></section>' : '<p class="qc-empty">当前日期范围暂无品牌二次返修明细</p>';
  const secondarySummary = '<section class="qc-weekly-secondary-repair"><div><span>'+qcEscape(selectedLabel)+'·二次返修</span><strong>'+qcNumber(secondRepairCount, '0')+'<small>件</small></strong></div><div><span>二次返修率</span><strong>'+qcSecondRepairPercent(secondRepairRate)+'<small>%</small></strong></div><p>数据源：品控部数据汇总·返修明细数据；口径：退返修仓合计 ÷ 质检复检量合计。</p></section>';
  const weeklyWarehouseSources = [
    ...(qcState.complaints?.weekly || []).filter((item) => item?.warehouse?.brands?.length),
    ...(qcState.complaints?.warehouseWeekly || []).filter((item) => item?.warehouse?.brands?.length),
  ];
  const warehouseReports = [...new Map(weeklyWarehouseSources.map((item) => [item.start + '|' + item.end, item])).values()].sort((a, b) => a.end.localeCompare(b.end));
  const overlapping = warehouseReports.filter((item) => item.start <= rangeValue.end && item.end >= rangeValue.start);
  const report = overlapping.at(-1) || warehouseReports.filter((item) => item.end <= rangeValue.end).at(-1) || warehouseReports.at(-1);
  if (!report) {
    rangeLabel.textContent = '仓储周报暂无数据';
    root.innerHTML = '<p class="qc-empty">当前暂无可用的返修进出仓周报数据</p>' + secondarySummary + brandDetail;
    return;
  }
  const reportIndex = warehouseReports.indexOf(report);
  const previousReport = reportIndex > 0 ? warehouseReports[reportIndex - 1] : null;
  const previousBrands = new Map((previousReport?.warehouse?.brands || []).map((item) => [item.name, item]));
  const currentBrands = (report.warehouse.brands || []).filter((item) => selectedBrand === 'all' || item.name === selectedBrand);
  const displayRows = currentBrands.slice();
  if (selectedBrand === 'all') {
    const total = qcWarehouseAggregate(report.warehouse);
    if (total) displayRows.push(total);
  }
  const previousTotal = qcWarehouseAggregate(previousReport?.warehouse);
  const warehouseHtml = displayRows.length ? '<div class="qc-weekly-warehouse-grid">' + displayRows.map((item) => {
    const previous = item.name === '合计' ? previousTotal : previousBrands.get(item.name);
    const currentDifference = (Number(item.outbound) || 0) - (Number(item.inbound) || 0);
    const previousDifference = previous ? (Number(previous.outbound) || 0) - (Number(previous.inbound) || 0) : null;
    return '<article class="' + (item.name === '合计' ? 'total' : '') + '"><strong>' + qcEscape(item.name) + '</strong><dl>' +
      qcWarehouseMetric('进仓', item.inbound, previous?.inbound) +
      qcWarehouseMetric('进仓销退占比', item.inboundReturnRate, previous?.inboundReturnRate, true) +
      qcWarehouseMetric('出仓', item.outbound, previous?.outbound) +
      qcWarehouseMetric('出仓 − 进仓', currentDifference, previousDifference) +
      '</dl></article>';
  }).join('') + '</div>' : '<p class="qc-empty">当前品牌暂无返修进出仓周报数据</p>';
  const isOverlapping = report.start <= rangeValue.end && report.end >= rangeValue.start;
  rangeLabel.textContent = (isOverlapping ? '仓储周报 ' : '最近可用周报 ') + report.start + ' ～ ' + report.end;
  root.innerHTML = warehouseHtml + '<p class="qc-weekly-warehouse-source">进出仓及进仓销退占比来自仓储周报；每项同时展示上周值和本周差异。二次返修数据仍独立使用返修明细数据计算。</p>' + secondarySummary + brandDetail;
}function qcRenderQuality(issueRows, repairRows, capacityRows, rangeValue) {
  const range = qcRangeLabel(rangeValue);
  $('#qcQualityRange').textContent = `${range} 累计`;
  $('#qcRepairRange').textContent = `${range} 累计`;
  const samples = qcSum(issueRows, 's');
  const defects = qcSum(issueRows, 'x');
  const defectRate = samples ? Math.round(defects / samples * 1000) / 10 : 0;
  const issueMap = new Map();
  issueRows.forEach((row) => Object.entries(row.i || {}).forEach(([name, value]) => issueMap.set(name, (issueMap.get(name) || 0) + value)));
  const issueItems = [...issueMap.entries()].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 10);
  const responsibilityMap = new Map();
  issueRows.forEach((row) => responsibilityMap.set(row.a || '未标注', (responsibilityMap.get(row.a || '未标注') || 0) + (row.x || 0)));
  const responsibilities = [...responsibilityMap.entries()].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  const { returned: warehouse, rechecked: qcTotal, rate: secondRepairRate } = qcSecondRepairMetrics(repairRows);

  const onsite = qcSum(repairRows, 'o');

  const repairCapacityRows = capacityRows.filter((row) => Number(row.rrp) > 0);
  const repairCapacity = qcSum(repairCapacityRows, 'rrp');



  const repairEffectivePeople = new Map();
  repairCapacityRows.forEach((row) => {
    const name = row.n || '未登记人员';
    if (!repairEffectivePeople.has(name)) repairEffectivePeople.set(name, { name, capacity: 0, days: new Set(), repair: 0, recheck: 0, returned: 0 });
    const person = repairEffectivePeople.get(name);
    person.capacity += Number(row.rrp) || 0;
    if (row.d) person.days.add(row.d);
  });
  repairRows.forEach((row) => {
    const name = row.rn || '未登记人员';
    if (!repairEffectivePeople.has(name)) repairEffectivePeople.set(name, { name, capacity: 0, days: new Set(), repair: 0, recheck: 0, returned: 0 });
    const person = repairEffectivePeople.get(name);
    person.repair += Number(row.r) || 0;
    person.recheck += Number(row.q) || 0;
    person.returned += Number(row.w) || 0;
  });
  const repairEffectiveRows = [...repairEffectivePeople.values()]
    .map((person) => {
      const secondRate = person.capacity > 0 && person.recheck > 0 ? person.returned / person.recheck : null;
      // A missing repair-detail record is not proof of a 0% second-repair rate.
      // Keep it out of the effective-capacity result until the two Base tables agree.
      const effective = secondRate === null ? null : person.capacity * Math.pow(1 - secondRate, 2);
      const days = person.days.size;
      return { ...person, secondRate, effective, daily: days ? effective / days : 0, days };
    })
    .filter((person) => person.capacity > 0 || person.repair > 0)
    .sort((a, b) => (b.effective ?? -1) - (a.effective ?? -1) || b.capacity - a.capacity);
  const verifiedRepairRows = repairEffectiveRows.filter((person) => person.capacity > 0 && person.secondRate !== null);
  const pendingRepairRows = repairEffectiveRows.filter((person) => person.capacity > 0 && person.secondRate === null);
  const verifiedRepairCapacity = verifiedRepairRows.reduce((sum, person) => sum + person.capacity, 0);
  const pendingRepairCapacity = pendingRepairRows.reduce((sum, person) => sum + person.capacity, 0);
  const effectiveRepairCapacity = repairCapacity * Math.pow(1 - secondRepairRate, 2);
  const workdays = new Set(repairCapacityRows.map((row) => row.d).filter(Boolean)).size;
  const dailyEffectiveRepairCapacity = workdays ? effectiveRepairCapacity / workdays : 0;
  const renderRepairEffectivePeople = (rows) => rows.length ?
    '<div class="qc-repair-effective-table-head"><span>人员</span><span>进返修间</span><span>二次返修率</span><span>有效产能</span><span>日均有效产能</span><span>工作日</span></div>' +
    rows.map((person) => '<div class="qc-repair-effective-table-row' + (person.secondRate !== null && person.secondRate > 0.15 ? ' warning' : '') + '"><strong>' + qcEscape(person.name) + '</strong><span>' + qcNumber(person.capacity, '0') + ' 件</span><span>' + (person.secondRate === null ? '待核对' : qcSecondRepairPercent(person.secondRate) + '%') + '</span><b>' + (person.effective === null ? '待核对' : qcDecimal(person.effective, 2) + ' 件') + '</b><b>' + (person.effective === null || !person.days ? '—' : qcDecimal(person.daily, 2) + ' 件/天') + '</b><span>' + qcNumber(person.days, '0') + ' 天</span></div>').join('') : '<p class="qc-empty">当前筛选下暂无进返修间有效产能记录</p>';
  $('#qcQualitySummary').innerHTML = `
    <article class="qc-quality-metric"><span>抽检数</span><strong>${qcNumber(samples, '0')}<small>件</small></strong></article>
    <article class="qc-quality-metric"><span>次品数</span><strong>${qcNumber(defects, '0')}<small>件</small></strong></article>
    <article class="qc-quality-metric"><span>问题率</span><strong>${defectRate}<small>%</small></strong></article>
    <article class="qc-quality-metric"><span>问题记录</span><strong>${qcNumber(issueRows.length, '0')}<small>条</small></strong></article>
`;
  const bulkIssueRows = issueRows.filter((row) => qcIssueAttributeMatches(row, '大货抽检'));
  const returnIssueRows = issueRows.filter((row) => qcIssueAttributeMatches(row, '销退抽检'));
  const bulkSampleCount = qcSum(bulkIssueRows, 's');
  const bulkDefectCount = qcSum(bulkIssueRows, 'x');
  const bulkIssueRate = bulkSampleCount ? bulkDefectCount / bulkSampleCount : null;
  const returnSampleCount = qcSum(returnIssueRows, 's');
  const returnDefectCount = qcSum(returnIssueRows, 'x');
  const returnIssueRate = returnSampleCount ? returnDefectCount / returnSampleCount : null;
  const samplingRoot = document.querySelector('#qcSamplingBreakdown');
  if (samplingRoot) {
    samplingRoot.innerHTML = '<div class="qc-sampling-grid">' +
      '<article class="qc-sampling-item bulk"><span>大货抽检</span><strong>' + qcNumber(bulkSampleCount, '0') + '<small>件</small></strong><p>问题 ' + qcNumber(bulkDefectCount, '0') + ' 件 · 问题率 ' + (bulkIssueRate === null ? '—' : qcPercent(bulkIssueRate) + '%') + '</p></article>' +
      '<article class="qc-sampling-item return"><span>销退抽检</span><strong>' + qcNumber(returnSampleCount, '0') + '<small>件</small></strong><p>问题 ' + qcNumber(returnDefectCount, '0') + ' 件 · 问题率 ' + (returnIssueRate === null ? '—' : qcPercent(returnIssueRate) + '%') + '</p></article>' +
      '</div>';
  }  $('#qcIssueRanking').innerHTML = qcBars(issueItems, '当前条件下暂无可计数的质量问题');
  $('#qcResponsibility').innerHTML = qcBars(responsibilities, '当前条件下暂无已标注责任方的问题');
  $('#qcRepairFlow').innerHTML = `
    <div class="qc-repair-legend"><span class="red">\u8FD4\u4FEE\u4EBA\u5458\u4FA7</span><span class="blue">\u8D28\u68C0\u4EBA\u5458\u4FA7</span></div>
    <div class="qc-repair-process">
      <section class="qc-repair-lane red">
        <div class="qc-repair-lane-title"><i aria-hidden="true"></i><strong>\u8FD4\u4FEE\u4EBA\u5458\u4FA7</strong></div>
        <div class="qc-repair-lane-cards">
          <article class="red"><span>\u8FD4\u4FEE\u4ED3\u8FD4\u4FEE\u603B\u6570</span><strong>${qcNumber(repairCapacity, '0')}<small>\u4EF6</small></strong></article>
          <article class="red"><span>\u9000\u8FD4\u4FEE\u4ED3</span><strong>${qcNumber(warehouse, '0')}<small>\u4EF6</small></strong></article>
        </div>
      </section>
      <i class="qc-repair-arrow" aria-hidden="true">\u2192</i>
      <section class="qc-repair-lane blue">
        <div class="qc-repair-lane-title"><i aria-hidden="true"></i><strong>\u8D28\u68C0\u4EBA\u5458\u4FA7</strong></div>
        <div class="qc-repair-lane-cards">
          <article class="blue"><span>\u8D28\u68C0\u590D\u68C0\u91CF</span><strong>${qcNumber(qcTotal, '0')}<small>\u4EF6</small></strong></article>
          <article class="blue"><span>\u73B0\u573A\u5904\u7406</span><strong>${qcNumber(onsite, '0')}<small>\u4EF6</small></strong></article>
        </div>
      </section>
      <div class="qc-repair-outcomes">
        <article class="qc-repair-effective"><span>进返修间有效产能</span><strong>${qcDecimal(effectiveRepairCapacity, 2)}<small>件</small></strong></article>
        <article class="qc-repair-effective"><span>日均有效产能</span><strong>${qcDecimal(dailyEffectiveRepairCapacity, 2)}<small>件/天</small></strong></article>
      </div>
      <article class="qc-repair-rate"><span>二次返修率（返修明细）</span><strong>${qcSecondRepairPercent(secondRepairRate)}<small>%</small></strong></article>
    </div>`;
  $('#qcRepairEffectivePersonal').innerHTML = renderRepairEffectivePeople(repairEffectiveRows);
}
function qcRenderAlertCenter({ range, operationIssueRows, qualityIssueRows, qualityRepairRows, efficiency }) {
  const root = $('#qcAlertSummary');
  if (!root) return;
  const samples = qcSum(qualityIssueRows, 's');
  const defects = qcSum(qualityIssueRows, 'x');
  const defectRate = samples ? defects / samples : 0;
  const { returned: returnedRepair, rechecked: repairRecheckTotal, rate: secondRepair } = qcSecondRepairMetrics(qualityRepairRows);


  const latestComplaint = qcState.complaints?.weekly?.at(-1);
  const complaintRate = latestComplaint ? qcComplaintRate(latestComplaint.complaints, latestComplaint.shipment) : null;
  const issueMap = new Map();
  operationIssueRows.forEach((row) => Object.entries(row.i || {}).forEach(([name, value]) => issueMap.set(name, (issueMap.get(name) || 0) + value)));
  const topIssue = [...issueMap.entries()].sort((a, b) => b[1] - a[1])[0];
  const anomalies = [];
  if (complaintRate !== null && complaintRate >= 0.02) anomalies.push({ level: '高', label: '客诉率超阈值', value: `${qcComplaintPercent(complaintRate)}%`, detail: '超过 2% 预警阈值，需要复盘客诉品牌与问题分类。', target: 'complaint' });
  if (defectRate > 0.02) anomalies.push({ level: '高', label: '质量问题率偏高', value: `${qcPercent(defectRate)}%`, detail: `${qcNumber(defects, '0')} 次问题 / ${qcNumber(samples, '0')} 抽检。`, target: 'quality' });
  if (secondRepair !== null && secondRepair > 0.15) anomalies.push({ level: '中', label: '二次返修率偏高', value: `${qcSecondRepairPercent(secondRepair)}%`, detail: `${qcNumber(returnedRepair, '0')} 件退返修仓 / ${qcNumber(repairRecheckTotal, '0')} 件质检复检（返修明细数据）。`, target: 'quality' });
  if (efficiency.coverage < 100) anomalies.push({ level: '中', label: '在岗时长缺失', value: `${qcDecimal(efficiency.coverage, 1)}%`, detail: `${qcNumber(efficiency.groups.length - efficiency.validGroups.length, '0')} 个人天缺少有效工时，影响人效判断。`, target: 'people' });
  if (topIssue) anomalies.push({ level: '提示', label: '重点问题待复盘', value: `${qcEscape(topIssue[0])} · ${qcNumber(topIssue[1], '0')} 次`, detail: `${qcRangeLabel(range)} 内问题分类 Top 1。`, target: 'quality' });
  root.innerHTML = `
    <div class="qc-alert-summary-head"><div><span>待处理异常</span><strong>${anomalies.length ? `${anomalies.length} 项需要关注` : '当前无超阈值异常'}</strong></div><em>${qcRangeLabel(range)} · 自动规则</em></div>
    <div class="qc-alert-summary-cards">${[
      ['客诉率', complaintRate === null ? '暂无' : `${qcPercent(complaintRate)}%`, complaintRate !== null && complaintRate >= 0.02 ? 'risk' : 'normal'],
      ['质量问题率', `${qcPercent(defectRate)}%`, defectRate > 0.02 ? 'risk' : 'normal'],
      ['二次返修率', `${qcSecondRepairPercent(secondRepair)}%`, secondRepair !== null && secondRepair > 0.15 ? 'warn' : 'normal'],
      ['工时完整性', `${qcDecimal(efficiency.coverage, 1)}%`, efficiency.coverage < 100 ? 'warn' : 'normal'],
    ].map(([label, value, tone]) => `<article class="qc-alert-summary-card ${tone}"><span>${label}</span><strong>${value}</strong><p>点击下方异常查看处理入口</p></article>`).join('')}</div>
    <div class="qc-alert-list">${anomalies.length ? anomalies.map((item) => `<article class="qc-alert-row level-${item.level === '高' ? 'high' : item.level === '中' ? 'medium' : 'info'}"><span class="qc-alert-level">${item.level}</span><div><strong>${item.label}</strong><p>${item.detail}</p></div><b>${item.value}</b><button type="button" data-qc-alert-jump="${item.target}">查看详情</button></article>`).join('') : '<div class="qc-alert-empty"><strong>当前筛选范围没有达到阈值的异常</strong><p>可继续查看质量分析、人员分析和客诉分析的明细。</p></div>'}</div>`;
  root.querySelectorAll('[data-qc-alert-jump]').forEach((button) => button.addEventListener('click', () => qcSetBusinessView(button.dataset.qcAlertJump)));
}function renderQCDashboard() {
  const root = $('#qc');
  const data = qcState.data;
  qcApplyPanelSelection();
  qcApplyBusinessView();
  renderHeader();
  if (!root || !data || !qcState.start || !qcState.end) return;

  const operationRange = { start: qcState.start, end: qcState.end };
  const operationRangeLabel = qcRangeLabel(operationRange);
  const operationComparison = qcComparisonRange(operationRange);
  const operationRows = qcFilterRows(data.capacity, operationRange);
  const operationCompareRows = operationComparison ? qcFilterRows(data.capacity, operationComparison) : [];
  const operationMetrics = qcCapacityMetrics(operationRows);
  const previousMetrics = qcCapacityMetrics(operationCompareRows);
  const operationIssueRows = qcFilterRows(data.issues, operationRange);
  const comparisonLabel = operationComparison?.label || '';

  const peopleRange = qcModuleRange('people');
  const peopleComparison = qcComparisonRange(peopleRange);
  const peopleRows = qcFilterRows(data.capacity, peopleRange);
  const peopleCompareRows = peopleComparison ? qcFilterRows(data.capacity, peopleComparison) : [];
  const brandsRange = qcModuleRange('brands');
  const brandRows = qcFilterRows(data.capacity, brandsRange);
  const qualityRange = qcModuleRange('quality');
  const qualityIssueRows = qcFilterRows(data.issues, qualityRange);
  const qualityRepairRows = qcFilterRows(data.repairs, qualityRange);
  const qualityCapacityRows = qcFilterRows(data.capacity, qualityRange);
  $('#qcDataSource').textContent = `${data.source}：数据已同步，可按当前筛选条件查看。`;
  $('#qcDataStatus').textContent = '数据已同步';
  $('#qcDataStatus').dataset.status = 'success';
  $('#qcDataRange').textContent = `可用日期 ${data.availableRange.start} 至 ${data.availableRange.end}`;
  qcRenderFilterState();

  const kpis = [
    { key: 'qc', icon: '&#10003;', label: '\u54c1\u63a7\u5904\u7406\u603b\u91cf', value: operationMetrics.qc, previous: previousMetrics.qc, unit: '\u4ef6' },
    { key: 'big-goods', icon: '&#9638;', label: '\u5927\u8d27\u8d28\u68c0\u6c47\u603b', value: operationMetrics.bigGoods, previous: previousMetrics.bigGoods, unit: '\u4ef6', note: `\u5927\u8d27\u8d28\u68c0 ${qcNumber(operationMetrics.largeQc, '0')}` },
    { key: 'return-qc', icon: '&#8617;', label: '\u9500\u9000\u8d28\u68c0\u6c47\u603b', value: operationMetrics.returnQc, previous: previousMetrics.returnQc, unit: '\u4ef6', note: '\u54c1\u63a7\u4ea7\u91cf\u53e3\u5f84' },
    { key: 'vip-qc', icon: '&#9670;', label: '\u552f\u54c1\u4f1a\u8d28\u68c0\u6c47\u603b', value: operationMetrics.vipQc, previous: previousMetrics.vipQc, unit: '\u4ef6' },
    { key: 'abnormal-qc', icon: '&#9888;', label: '\u5f02\u5e38\u4ef6\u8d28\u68c0\u6c47\u603b', value: operationMetrics.abnormalQc, previous: previousMetrics.abnormalQc, unit: '\u4ef6' },
    { key: 'off-shelf-qc', icon: '&#8595;', label: '\u4e0b\u67b6\u8d28\u68c0\u6c47\u603b', value: operationMetrics.offShelfQc, previous: previousMetrics.offShelfQc, unit: '\u4ef6' },
    { key: 'packing', icon: '&#9633;', label: '\u5305\u88c5\u5904\u7406\u91cf', value: operationMetrics.packing, previous: previousMetrics.packing, unit: '\u4ef6' },
    { key: 'repair-qc', icon: '&#8635;', label: '\u8fd4\u4fee\u8d28\u68c0\u6c47\u603b', value: operationMetrics.repairQc, previous: previousMetrics.repairQc, unit: '\u4ef6' },
    { key: 'repair', icon: '&#8644;', label: '\u8fd4\u4fee\u5904\u7406\u91cf', value: operationMetrics.repair, previous: previousMetrics.repair, unit: '\u4ef6' },
    { key: 'ironing', icon: '&#9832;', label: '\u5927\u70eb\u5904\u7406\u91cf', value: operationMetrics.ironing, previous: previousMetrics.ironing, unit: '\u4ef6' },
  ];
  $('#qcRealtimeCards').innerHTML = kpis.map((item) => {
    const difference = item.value - item.previous;
    const tone = !operationComparison ? 'none' : difference > 0 ? 'up' : difference < 0 ? 'down' : 'flat';
    const arrow = !operationComparison ? '&#8212;' : difference > 0 ? '&#8599;' : difference < 0 ? '&#8600;' : '&#8594;';
    const sign = difference > 0 ? '+' : '';
    const rateValue = operationComparison && item.previous ? Math.round(difference / item.previous * 1000) / 10 : null;
    const rateText = !operationComparison ? '\u2014' : rateValue === null ? (difference > 0 ? '\u65b0\u589e' : '\u2014') : `${rateValue > 0 ? '+' : ''}${rateValue}%`;
    const differenceText = operationComparison ? `${sign}${qcNumber(difference, '0')}` : '\u2014';
    const periodText = operationComparison ? comparisonLabel : '\u65e0\u5bf9\u6bd4';
    const changeLabel = difference > 0 ? '\u8f83\u5bf9\u6bd4\u671f\u589e\u52a0' : difference < 0 ? '\u8f83\u5bf9\u6bd4\u671f\u51cf\u5c11' : '\u8f83\u5bf9\u6bd4\u671f\u6301\u5e73';
    const comparisonTitle = operationComparison ? `${operationRangeLabel}\uff1b${comparisonLabel} ${qcNumber(item.previous, '0')} ${item.unit}\uff1b${changeLabel} ${qcNumber(Math.abs(difference), '0')} ${item.unit}${rateValue === null ? '' : `\uff08${rateText}\uff09`}` : `${operationRangeLabel}\uff1b\u672a\u542f\u7528\u5468\u671f\u5bf9\u6bd4`;
    return `<article class="qc-kpi-card qc-kpi-card-compact" data-kpi="${item.key}" data-tone="${tone}"><div class="qc-kpi-head"><span class="qc-kpi-icon" aria-hidden="true">${item.icon}</span><span>${item.label}</span></div><strong>${qcNumber(item.value, '0')}<small>${item.unit}</small></strong><div class="qc-kpi-footer" title="${qcEscape(comparisonTitle)}" aria-label="${qcEscape(comparisonTitle)}"><span class="qc-kpi-trend ${tone}"><i aria-hidden="true">${arrow}</i><b>${rateText}</b></span><span class="qc-kpi-delta">${differenceText}<small>${item.unit}</small></span><span class="qc-kpi-period">${periodText}</span></div>${item.note ? `<span class="qc-kpi-note"><i aria-hidden="true">&#9432;</i>${item.note}</span>` : ''}</article>`;
  }).join('');
  $('#qcCompareGrid').innerHTML = '';
  const efficiency = qcEfficiencySummary(operationRows, null, operationRange);

  const qualitySamples = qcSum(operationIssueRows, 's');
  const qualityDefects = qcSum(operationIssueRows, 'x');
  const notes = [
    ['大货次品', `${qcNumber(operationMetrics.largeDefects, '0')} 件`, `${operationRangeLabel} · 大货次品数量`],
    ['综合人效', efficiency.rate === null ? '工时不足' : `${qcDecimal(efficiency.rate)} 件次/人时`, `${operationRangeLabel} · 综合产出 ÷ 在岗工时`],
    ['大货抽检问题率', `${qualitySamples ? Math.round(qualityDefects / qualitySamples * 1000) / 10 : 0}%`, `${operationRangeLabel} · ${qcNumber(qualityDefects, '0')} 次品 / ${qcNumber(qualitySamples, '0')} 抽检`],
    ['平均停留时长', '待补齐', '入仓与完成时间尚未形成可算样本'],
    ['完工 vs 目标', '待配置', 'Base 需要各工种日目标字段'],
    ['产能利用率', '待配置', 'Base 需要岗位标准产能与有效在岗时长'],
  ];
  $('#qcFlowNotes').innerHTML = notes.map(([label, value, note]) => `<article class="qc-note-card"><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`).join('');

  qcRenderRanking(peopleRows, peopleRange);
  qcRenderTrend(peopleRows, peopleCompareRows, peopleRange, peopleComparison);
  qcRenderEfficiency(peopleRows, peopleRange);
  qcRenderInsights(peopleRows, peopleRange);
  renderQCBrandGroups(data, brandRows);
  const repairBaseRows = qcFilterRows(data.repairs, qualityRange, { brand: false, person: false });
  const repairBaseCapacityRows = qcFilterRows(data.capacity, qualityRange, { brand: false, person: false });
  const repairBrands = [...new Set(repairBaseRows.map((row) => String(row.b || '').trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  if (qcState.repairBrand !== 'all' && !repairBrands.includes(qcState.repairBrand)) qcState.repairBrand = 'all';
  const repairBrandSelect = $('#qcRepairBrandFilter');
  if (repairBrandSelect) {
    repairBrandSelect.innerHTML = '<option value="all">\u5168\u90e8\u54c1\u724c</option>' + repairBrands.map((brand) => '<option value="' + qcEscape(brand) + '">' + qcEscape(brand) + '</option>').join('');
    repairBrandSelect.value = qcState.repairBrand;
  }
  const matchesRepairBrand = (row) => qcState.repairBrand === 'all' || row.b === qcState.repairBrand;
  const repairRowsForBrand = repairBaseRows.filter(matchesRepairBrand);
  qcRenderAlertCenter({ range: operationRange, operationIssueRows: operationIssueRows, qualityIssueRows: qualityIssueRows, qualityRepairRows: repairRowsForBrand, efficiency });
  const capacityRowsForBrand = repairBaseCapacityRows.filter(matchesRepairBrand);
  const repairPeople = [...new Set(capacityRowsForBrand.filter((row) => Number(row.rrp) > 0 && row.n).map((row) => row.n))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  if (qcState.repairPerson !== 'all' && !repairPeople.includes(qcState.repairPerson)) qcState.repairPerson = 'all';
  const repairPersonSelect = $('#qcRepairPersonFilter');
  if (repairPersonSelect) {
    repairPersonSelect.innerHTML = '<option value="all">\u5168\u90e8\u8fd4\u4fee\u4eba\u5458</option>' + repairPeople.map((name) => '<option value="' + qcEscape(name) + '">' + qcEscape(name) + '</option>').join('');
    repairPersonSelect.value = qcState.repairPerson;
  }
  const matchesRepairPerson = (row) => qcState.repairPerson === 'all' || [row.n, row.rn, row.qn].includes(qcState.repairPerson);
  const scopedRepairRows = repairRowsForBrand.filter(matchesRepairPerson);
  const scopedCapacityRows = capacityRowsForBrand.filter(matchesRepairPerson);
  qcRenderQuality(qualityIssueRows, scopedRepairRows, scopedCapacityRows, qualityRange);
  qcRenderWeeklyWarehouse(qualityRange, repairRowsForBrand, repairBaseRows);
  qcRenderComplaints();
}

function qcBindFilters() {
  if (qcState.filtersBound) return;
  qcState.filtersBound = true;
  const data = qcState.data;
  const start = $('#qcStartDate');
  const end = $('#qcEndDate');
  const compareStart = $('#qcCompareStartDate');
  const compareEnd = $('#qcCompareEndDate');
  const inlineStart = $('#qcInlineStartDate');
  const inlineEnd = $('#qcInlineEndDate');
  const inlineCompareStart = $('#qcInlineCompareStartDate');
  const inlineCompareEnd = $('#qcInlineCompareEndDate');
  const moduleControls = {
    people: { start: $('#qcPeopleStartDate'), end: $('#qcPeopleEndDate'), quick: $('#qcPeopleQuickRange') },
    brands: { start: $('#qcBrandsStartDate'), end: $('#qcBrandsEndDate'), quick: $('#qcBrandsQuickRange') },
    quality: { start: $('#qcQualityStartDate'), end: $('#qcQualityEndDate'), quick: $('#qcQualityQuickRange') },
  };
  [start, end, compareStart, compareEnd, inlineStart, inlineEnd, inlineCompareStart, inlineCompareEnd, ...Object.values(moduleControls).flatMap((control) => [control.start, control.end])].forEach((input) => {
    input.min = data.availableRange.start;
    input.max = data.availableRange.end;
  });

  const brandTotals = new Map();
  data.capacity.forEach((row) => brandTotals.set(row.b, (brandTotals.get(row.b) || 0) + qcEfficiencyOutput(row, null)));
  const brands = [...brandTotals.keys()].filter(Boolean).sort((a, b) => {
    const aMain = QC_MAIN_BRANDS.indexOf(a);
    const bMain = QC_MAIN_BRANDS.indexOf(b);
    if (aMain >= 0 || bMain >= 0) return (aMain < 0 ? 99 : aMain) - (bMain < 0 ? 99 : bMain);
    return brandTotals.get(b) - brandTotals.get(a) || a.localeCompare(b, 'zh-CN');
  });
  $('#qcBrandOptions').innerHTML = brands.map((brand) => `<label><input type="checkbox" data-qc-brand-value="${qcEscape(brand)}" /><span>${qcEscape(brand)}</span><em>${qcNumber(brandTotals.get(brand), '0')} 件</em></label>`).join('');

  const normalize = (first, last) => first <= last ? [first, last] : [last, first];
  const normalizeChanged = (first, last, changed = 'end') => {
    if (first <= last) return [first, last];
    return changed === 'start' ? [first, first] : [last, last];
  };
  const updateCurrent = (first, last, changed) => {
    [qcState.start, qcState.end] = normalizeChanged(first || qcState.start, last || qcState.end, changed);
    qcSyncModuleRanges();
    renderQCDashboard();
  };
  start.addEventListener('change', () => updateCurrent(start.value, end.value, 'start'));
  end.addEventListener('change', () => updateCurrent(start.value, end.value, 'end'));
  inlineStart.addEventListener('change', () => updateCurrent(inlineStart.value, inlineEnd.value, 'start'));
  inlineEnd.addEventListener('change', () => updateCurrent(inlineStart.value, inlineEnd.value, 'end'));

  $('#qcCompareMode').addEventListener('change', (event) => {
    qcState.compareMode = event.target.value;
    if (qcState.compareMode === 'custom' && (!qcState.compareStart || !qcState.compareEnd)) {
      const days = qcRangeDays(qcState.start, qcState.end);
      qcState.compareEnd = qcShiftDays(qcState.start, -1);
      qcState.compareStart = qcShiftDays(qcState.compareEnd, -(days - 1));
    }
    renderQCDashboard();
  });
  const updateComparison = (first, last, changed) => {
    const current = qcComparisonRange({ start: qcState.start, end: qcState.end });
    [qcState.compareStart, qcState.compareEnd] = normalizeChanged(first || current?.start || qcState.start, last || current?.end || qcState.end, changed);
    qcState.compareMode = 'custom';
    renderQCDashboard();
  };
  compareStart.addEventListener('change', () => updateComparison(compareStart.value, compareEnd.value, 'start'));
  compareEnd.addEventListener('change', () => updateComparison(compareStart.value, compareEnd.value, 'end'));
  inlineCompareStart.addEventListener('change', () => updateComparison(inlineCompareStart.value, inlineCompareEnd.value, 'start'));
  inlineCompareEnd.addEventListener('change', () => updateComparison(inlineCompareStart.value, inlineCompareEnd.value, 'end'));

  Object.entries(moduleControls).forEach(([scope, controls]) => {
    const updateModule = (first, last, changed) => {
      const current = qcModuleRange(scope);
      const [rangeStart, rangeEnd] = normalizeChanged(first || current.start, last || current.end, changed);
      qcState.moduleRanges[scope] = { start: rangeStart, end: rangeEnd };
      renderQCDashboard();
    };
    controls.start.addEventListener('change', () => updateModule(controls.start.value, controls.end.value, 'start'));
    controls.end.addEventListener('change', () => updateModule(controls.start.value, controls.end.value, 'end'));
    controls.quick.addEventListener('change', (event) => {
      const range = qcQuickRange(event.target.value);
      if (!range) return;
      qcState.moduleRanges[scope] = range;
      renderQCDashboard();
    });
  });
  document.querySelectorAll('[data-qc-module-sync]').forEach((button) => {
    button.addEventListener('click', () => {
      qcState.moduleRanges[button.dataset.qcModuleSync] = { start: qcState.start, end: qcState.end };
      renderQCDashboard();
    });
  });

  document.querySelectorAll('[data-qc-brand-action]').forEach((button) => {
    button.addEventListener('click', () => {
      qcState.brands = button.dataset.qcBrandAction === 'main3' ? QC_MAIN_BRANDS.filter((brand) => brands.includes(brand)) : [];
      qcState.person = 'all';
      renderQCDashboard();
    });
  });
  $('#qcBrandOptions').addEventListener('change', () => {
    qcState.brands = [...document.querySelectorAll('[data-qc-brand-value]:checked')].map((input) => input.dataset.qcBrandValue);
    qcState.person = 'all';
    renderQCDashboard();
  });
  $('#qcPersonFilter').addEventListener('change', (event) => { qcState.person = event.target.value; renderQCDashboard(); });
  $('#qcPersonOptions')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-qc-person-value]');
    if (!button) return;
    qcState.person = button.dataset.qcPersonValue || 'all';
    qcPersonSearchQuery = '';
    $('#qcPersonPicker').open = false;
    renderQCDashboard();
  });
  $('#qcPersonSearch')?.addEventListener('input', (event) => {
    qcPersonSearchQuery = event.target.value;
    qcApplyPersonSearch();
  });
  $('#qcPersonSearch')?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      $('#qcPersonPicker').open = false;
      $('#qcPersonPickerSummary').focus();
      return;
    }
    if (event.key !== 'Enter') return;
    const firstMatch = [...document.querySelectorAll('#qcPersonOptions [data-qc-person-value]')].find((button) => !button.hidden);
    if (firstMatch) {
      event.preventDefault();
      firstMatch.click();
    }
  });
  $('#qcPersonPicker')?.addEventListener('toggle', (event) => {
    if (!event.target.open) return;
    requestAnimationFrame(() => $('#qcPersonSearch')?.focus());
  });
  $('#qcRepairPersonFilter').addEventListener('change', (event) => { qcState.repairPerson = event.target.value; renderQCDashboard(); });
  $('#qcRepairBrandFilter').addEventListener('change', (event) => { qcState.repairBrand = event.target.value; qcState.repairPerson = 'all'; renderQCDashboard(); });
  $('#qcComplaintToolbar').addEventListener('click', (event) => {
    const button = event.target.closest('[data-qc-complaint-granularity]');
    if (!button) return;
    qcState.complaintGranularity = button.dataset.qcComplaintGranularity === 'month' ? 'month' : 'week';
    renderQCDashboard();
  });
  const complaintStart = $('#qcComplaintStartDate');
  const complaintEnd = $('#qcComplaintEndDate');
  const complaintBrand = $('#qcComplaintBrandFilter');
  const complaintReset = $('#qcComplaintReset');
  const animateComplaintBrandSwitch = () => {
    const complaintWorkbench = $('#p2Complaint');
    if (!complaintWorkbench || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    complaintWorkbench.classList.remove('is-brand-switching');
    void complaintWorkbench.offsetWidth;
    complaintWorkbench.classList.add('is-brand-switching');
    complaintWorkbench.addEventListener('animationend', () => {
      complaintWorkbench.classList.remove('is-brand-switching');
    }, { once: true });
  };
  const updateComplaintFilter = (customRange = false, brandChanged = false) => {
    qcState.complaintStart = complaintStart?.value || '2026-01-01';
    qcState.complaintEnd = complaintEnd?.value || qcState.complaints?.availableRange?.end || '';
    const nextBrand = complaintBrand?.value || 'all';
    qcState.complaintBrand = nextBrand;
    if (brandChanged) qcState.complaintCompareBrands = nextBrand === 'all' ? null : [nextBrand];
    if (customRange) qcState.complaintRangePreset = 'custom';
    renderQCDashboard();
    if (brandChanged) animateComplaintBrandSwitch();
  };
  complaintStart?.addEventListener('change', () => updateComplaintFilter(true));
  complaintEnd?.addEventListener('change', () => updateComplaintFilter(true));
  complaintBrand?.addEventListener('change', () => updateComplaintFilter(false, true));
  complaintReset?.addEventListener('click', () => {
    qcState.complaintStart = qcState.complaints?.availableRange?.start || '2026-01-01';
    qcState.complaintEnd = qcState.complaints?.availableRange?.end || '';
    qcState.complaintBrand = 'all';
    qcState.complaintRangePreset = 'all';
    qcState.complaintCompareBrands = null;
    renderQCDashboard();
  });
  $('#qcComplaintQuickRanges')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-qc-complaint-range]');
    if (!button) return;
    const data = qcState.complaints || {};
    const end = data.availableRange?.end || '';
    const latestWeek = (data.weekly || []).at(-1);
    const monthStart = (months) => {
      const [year, month] = end.slice(0, 7).split('-').map(Number);
      const date = new Date(year, month - months, 1);
      return String(date.getFullYear()) + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-01';
    };
    const range = button.dataset.qcComplaintRange;
    qcState.complaintStart = range === 'week' ? (latestWeek?.start || end) : range === 'month' ? monthStart(1) : range === 'quarter' ? monthStart(3) : (data.availableRange?.start || '2026-01-01');
    qcState.complaintEnd = range === 'week' ? (latestWeek?.end || end) : end;
    qcState.complaintRangePreset = range;
    renderQCDashboard();
  });  $('#qcQuickRange').addEventListener('change', (event) => {
    const range = qcQuickRange(event.target.value);
    if (!range) return;
    ({ start: qcState.start, end: qcState.end } = range);
    qcSyncModuleRanges();
    renderQCDashboard();
  });
  $('#qcResetFilters').addEventListener('click', () => {
    ({ start: qcState.start, end: qcState.end } = qcCompleteWeekRange(data.availableRange.end));
    qcState.compareMode = 'previousPeriod';
    qcState.compareStart = '';
    qcState.compareEnd = '';
    qcState.brands = [];
    qcState.person = 'all';
    qcState.repairPerson = 'all';
    qcState.complaintGranularity = 'week';
    qcState.complaintStart = qcState.complaints?.availableRange?.start || '2026-01-01';
    qcState.complaintEnd = qcState.complaints?.availableRange?.end || '';
    qcState.complaintBrand = 'all';
    qcState.rankMode = 'qc';
    qcState.qcSubMode = 'all';
    qcState.efficiencyQcSubMode = 'all';
    qcState.efficiencyMode = 'primary';
    qcState.brandQcSubModes = {};
    qcSyncModuleRanges();
    renderQCDashboard();
  });
}
async function loadQCDashboard(retryCount = 0) {
  try {
    const [data, complaints] = await Promise.all([
      fetchJson(QC_DASHBOARD_FILE),
      fetchJson(QC_COMPLAINT_FILE).catch(() => null),
    ]);
    if (data.version !== 2 || !Array.isArray(data.capacity)) throw new Error('品控数据结构需要更新');
    qcState.data = data;
    qcState.complaints = complaints;
    ({ start: qcState.start, end: qcState.end } = qcCompleteWeekRange(data.availableRange.end));
    qcSyncModuleRanges();
    qcBindFilters();
    await new Promise((resolve) => {
      const renderOnNextFrame = () => requestAnimationFrame(resolve);
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderOnNextFrame, { once: true });
      else renderOnNextFrame();
    });
    renderQCDashboard();
    document.documentElement.dataset.qcInitialMetricsReady = 'true';
  } catch (error) {
    const status = $('#qcDataStatus');
    if (status) {
      const willRetry = retryCount < 2;
      status.textContent = willRetry ? `数据加载未完成，正在重试（${retryCount + 1}/2）` : `品控数据加载失败：${error.message}`;
      status.dataset.status = 'error';
    }
    if (retryCount < 2) setTimeout(() => loadQCDashboard(retryCount + 1), 1500 * (retryCount + 1));
  }
}

loadQCDashboard();
