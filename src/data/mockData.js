import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "다온 한의원",
    address: "서울특별시 금천구 가산동 660",
    distance: "0.4km",
    time: "10:00 ~ 17:00 / 토 휴무",
    phone: "0507-1407-0070",
  },
  {
    id: 2,
    name: "베스트 연내과의원",
    address: "가산동 219-5",
    distance: "1.4km",
    time: "9:00 ~ 18:30 / 일 휴무",
    phone: "0507-1376-5581",
  },
  {
    id: 3,
    name: "굿본재할의학과 의원",
    address: "서울특별시 금천구 가산동 670-2 대륭테크노타운 18차 2층",
    distance: "0.5km",
    time: "10:00 ~ 19:00 / 일 휴무",
    phone: "02-2101-0096",
  },
  {
    id: 4,
    name: "뉴욕탑치과의원",
    address: "서울특별시 금천구 가산동 670-2",
    distance: "0.5km",
    time: "9:30 ~ 18:00",
    phone: "02-2029-7528",
  },
  {
    id: 5,
    name: "테라경희한의원",
    address: "서울 금천구 디지털로10길 78 가산테라타워 2층 223호",
    distance: "1.4km",
    time: "10:00 ~ 20:00 / 일 휴무",
    phone: "02-6230-5525",
  },
  {
    id: 6,
    name: "더라인치과의원",
    address: "서울특별시 금천구 가산디지털1로 128 에스티엑스브이타워",
    distance: "0.5km",
    time: "10:00 ~ 18:30 / 일 휴무",
    phone: "02-811-3535",
  },
  {
    id: 7,
    name: "연세우리내과의원",
    address: "서울특별시 금천구 가산디지털1로 131 가산동 BYC하이시티 a동225호",
    distance: "0.6km",
    time: "8:30 ~ 19:00",
    phone: "0507-1366-7010",
  },
  {
    id: 8,
    name: "고려대학교병원",
    address: "서울특별시 구로구 구로동로 148",
    distance: "2.6km",
    time: "9:00 ~ 17:30",
    phone: "02-2626-1114",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    hos_name: "다온 한의원",
    phone: "0507-1407-0070",
    date: "23/04/16",
    access: "예약 진행 중",
  },
  {
    id: 2,
    hos_name: "베스트 연내과의원",
    phone: "0507-1376-5581",
    date: "23/03/14",
    access: "예약 취소",
  },
  {
    id: 3,
    hos_name: "고려대학교",
    phone: "02-2626-1114",
    date: "23/02/24",
    access: "예약 완료",
  },
  {
    id: 4,
    hos_name: "순천향대학교 부속 부천병원",
    phone: "1899-5700",
    date: "23/01/21",
    access: "예약 완료",
  },
  {
    id: 5,
    hos_name: "한길안과병원",
    phone: "032-503-3322",
    date: "22/11/15",
    access: "예약 취소",
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    doc_name: "이승규 박사",
    team: "서울 아산병원",
    dep: "간 이식",
    phone: "1688-7575",
  },
  {
    id: 2,
    doc_name: "노성훈 교수",
    team: "연세 세브란스병원",
    dep: "위암",
    phone: "1599-6114",
  },
  {
    id: 3,
    doc_name: "박재갑 교수",
    team: "서울대 병원",
    dep: "대장암",
    phone: "1588-5700",
  },
  {
    id: 4,
    doc_name: "석세일 교수",
    team: "서상계 백병원",
    dep: "척추변형",
    phone: "1661-3100",
  },
  {
    id: 5,
    doc_name: "이홍규 교수",
    team: "서울대 병원",
    dep: "당뇨",
    phone: "1588-5700",
  },
  {
    id: 6,
    doc_name: "이영탁 교수",
    team: "삼성서울 병원",
    dep: "심장병",
    phone: "010-5570-6369",
  },
  {
    id: 7,
    doc_name: "노동영 교수",
    team: "서울대 병원",
    dep: "유방암",
    phone: "1577-4488",
  },
  {
    id: 8,
    doc_name: "한대석 교수",
    team: "세브란스 병원",
    dep: "신징질환",
    phone: "1599-1004",
  },
];

export const mockTransactions = [
  {
    txId: "1",
    hosp: "한길 안과",
    date: "23-04-01",
    cost: "68000",
  },
  {
    txId: "2",
    hosp: "연세 내과",
    date: "23-04-17",
    cost: "43000",
  },
];

export const mockBarData = [
  {
    day: "월요일",
    steps: 5670,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "화요일",
    steps: 7890,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "수요일",
    steps: 8901,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "목요일",
    steps: 9012,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "금요일",
    steps: 10234,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "토요일",
    steps: 9082,
    stepsColor: "hsl(205, 70%, 50%)",
  },
  {
    day: "일요일",
    steps: 8765,
    stepsColor: "hsl(205, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "일어나기",
    label: "일어나기",
    value: 18,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "걷기",
    label: "걷기",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "뛰기",
    label: "뛰기",
    value: 23,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "스트레칭",
    label: "스트레칭",
    value: 37,
    color: "hsl(229, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "1일",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "1~3",
        y: 60,
      },
      {
        x: "3~6",
        y: 61,
      },
      {
        x: "6~9",
        y: 64,
      },
      {
        x: "9~12",
        y: 69,
      },
      {
        x: "12~14",
        y: 66,
      },
      {
        x: "14~16",
        y: 68,
      },
      {
        x: "18~20",
        y: 104,
      },
      {
        x: "20~22",
        y: 64,
      },
      {
        x: "22~24",
        y: 63,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 37358092,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 38382386,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 39903419,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 24448729,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 44827226,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 25737170,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 33584934,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 22771126,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 106474936,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 31009261,
  },
];
