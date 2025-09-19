const cities = [
  {
    "city": "KABUPATEN SIMEULUE",
    "state": "ACEH",
    "latitude": 2.46158,
    "longitude": 96.38105,
    "population": "166938",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "1"
  },
  {
    "city": "KABUPATEN ACEH SINGKIL",
    "state": "ACEH",
    "latitude": 2.28411,
    "longitude": 97.79769,
    "population": "289863",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "2"
  },
  {
    "city": "KABUPATEN ACEH SELATAN",
    "state": "ACEH",
    "latitude": 3.26142,
    "longitude": 97.17933,
    "population": "754231",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "3"
  },
  {
    "city": "KABUPATEN ACEH TENGGARA",
    "state": "ACEH",
    "latitude": 3.48673,
    "longitude": 97.81081,
    "population": "808409",
    "growth_from_2000_to_2013": "2.3%",
    "rank": "4"
  },
  {
    "city": "KABUPATEN ACEH TIMUR",
    "state": "ACEH",
    "latitude": 4.94789,
    "longitude": 97.77651,
    "population": "780643",
    "growth_from_2000_to_2013": "8.9%",
    "rank": "5"
  },
  {
    "city": "KABUPATEN ACEH TENGAH",
    "state": "ACEH",
    "latitude": 4.63464,
    "longitude": 96.84219,
    "population": "637128",
    "growth_from_2000_to_2013": "5.0%",
    "rank": "6"
  },
  {
    "city": "KABUPATEN ACEH BARAT",
    "state": "ACEH",
    "latitude": 4.14499,
    "longitude": 96.13576,
    "population": "800587",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "7"
  },
  {
    "city": "KABUPATEN ACEH BESAR",
    "state": "ACEH",
    "latitude": 5.29718,
    "longitude": 95.61156,
    "population": "888376",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "8"
  },
  {
    "city": "KABUPATEN PIDIE",
    "state": "ACEH",
    "latitude": 5.3855,
    "longitude": 95.96064,
    "population": "848398",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "9"
  },
  {
    "city": "KABUPATEN BIREUEN",
    "state": "ACEH",
    "latitude": 5.22198,
    "longitude": 96.71688,
    "population": "577574",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "10"
  },
  {
    "city": "KABUPATEN ACEH UTARA",
    "state": "ACEH",
    "latitude": 5.05131,
    "longitude": 97.3212,
    "population": "442821",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "11"
  },
  {
    "city": "KABUPATEN ACEH BARAT DAYA",
    "state": "ACEH",
    "latitude": 3.74322,
    "longitude": 96.83422,
    "population": "888275",
    "growth_from_2000_to_2013": "5.0%",
    "rank": "12"
  },
  {
    "city": "KABUPATEN GAYO LUES",
    "state": "ACEH",
    "latitude": 3.99633,
    "longitude": 97.34203,
    "population": "859757",
    "growth_from_2000_to_2013": "2.9%",
    "rank": "13"
  },
  {
    "city": "KABUPATEN ACEH TAMIANG",
    "state": "ACEH",
    "latitude": 4.33767,
    "longitude": 98.06355,
    "population": "743788",
    "growth_from_2000_to_2013": "4.5%",
    "rank": "14"
  },
  {
    "city": "KABUPATEN NAGAN RAYA",
    "state": "ACEH",
    "latitude": 4.16932,
    "longitude": 96.32479,
    "population": "906703",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "15"
  },
  {
    "city": "KABUPATEN ACEH JAYA",
    "state": "ACEH",
    "latitude": 4.63544,
    "longitude": 95.58533,
    "population": "770695",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "16"
  },
  {
    "city": "KABUPATEN BENER MERIAH",
    "state": "ACEH",
    "latitude": 4.72733,
    "longitude": 96.86034,
    "population": "369879",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "17"
  },
  {
    "city": "KABUPATEN PIDIE JAYA",
    "state": "ACEH",
    "latitude": 5.2288,
    "longitude": 96.24542,
    "population": "226642",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "18"
  },
  {
    "city": "KOTA BANDA ACEH",
    "state": "ACEH",
    "latitude": 5.54794,
    "longitude": 95.3208,
    "population": "225528",
    "growth_from_2000_to_2013": "4.1%",
    "rank": "19"
  },
  {
    "city": "KOTA SABANG",
    "state": "ACEH",
    "latitude": 5.89285,
    "longitude": 95.32343,
    "population": "756322",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "20"
  },
  {
    "city": "KOTA LANGSA",
    "state": "ACEH",
    "latitude": 4.47185,
    "longitude": 97.9708,
    "population": "965342",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "21"
  },
  {
    "city": "KOTA LHOKSEUMAWE",
    "state": "ACEH",
    "latitude": 5.18112,
    "longitude": 97.14196,
    "population": "127572",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "22"
  },
  {
    "city": "KOTA SUBULUSSALAM",
    "state": "ACEH",
    "latitude": 2.67207,
    "longitude": 97.99863,
    "population": "536011",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "23"
  },
  {
    "city": "KABUPATEN NIAS",
    "state": "SUMATERA UTARA",
    "latitude": 1.184,
    "longitude": 97.71678,
    "population": "173592",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "24"
  },
  {
    "city": "KABUPATEN MANDAILING NATAL",
    "state": "SUMATERA UTARA",
    "latitude": 0.85762,
    "longitude": 99.55128,
    "population": "141697",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "25"
  },
  {
    "city": "KABUPATEN TAPANULI SELATAN",
    "state": "SUMATERA UTARA",
    "latitude": 1.61383,
    "longitude": 99.2638,
    "population": "591333",
    "growth_from_2000_to_2013": "2.2%",
    "rank": "26"
  },
  {
    "city": "KABUPATEN TAPANULI TENGAH",
    "state": "SUMATERA UTARA",
    "latitude": 1.68477,
    "longitude": 98.82859,
    "population": "271706",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "27"
  },
  {
    "city": "KABUPATEN TAPANULI UTARA",
    "state": "SUMATERA UTARA",
    "latitude": 2.01208,
    "longitude": 98.97541,
    "population": "993105",
    "growth_from_2000_to_2013": "2.7%",
    "rank": "28"
  },
  {
    "city": "KABUPATEN TOBA SAMOSIR",
    "state": "SUMATERA UTARA",
    "latitude": 2.33548,
    "longitude": 99.08092,
    "population": "584193",
    "growth_from_2000_to_2013": "5.5%",
    "rank": "29"
  },
  {
    "city": "KABUPATEN LABUHAN BATU",
    "state": "SUMATERA UTARA",
    "latitude": 2.07022,
    "longitude": 99.85752,
    "population": "238175",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "30"
  },
  {
    "city": "KABUPATEN ASAHAN",
    "state": "SUMATERA UTARA",
    "latitude": 2.99027,
    "longitude": 99.6247,
    "population": "490267",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "31"
  },
  {
    "city": "KABUPATEN SIMALUNGUN",
    "state": "SUMATERA UTARA",
    "latitude": 2.96527,
    "longitude": 98.86223,
    "population": "475756",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "32"
  },
  {
    "city": "KABUPATEN DAIRI",
    "state": "SUMATERA UTARA",
    "latitude": 2.74462,
    "longitude": 98.31267,
    "population": "602073",
    "growth_from_2000_to_2013": "2.7%",
    "rank": "33"
  },
  {
    "city": "KABUPATEN KARO",
    "state": "SUMATERA UTARA",
    "latitude": 3.10541,
    "longitude": 98.49853,
    "population": "323945",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "34"
  },
  {
    "city": "KABUPATEN DELI SERDANG",
    "state": "SUMATERA UTARA",
    "latitude": 3.56642,
    "longitude": 98.87351,
    "population": "401505",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "35"
  },
  {
    "city": "KABUPATEN LANGKAT",
    "state": "SUMATERA UTARA",
    "latitude": 3.75206,
    "longitude": 98.45366,
    "population": "503819",
    "growth_from_2000_to_2013": "0.0%",
    "rank": "36"
  },
  {
    "city": "KABUPATEN NIAS SELATAN",
    "state": "SUMATERA UTARA",
    "latitude": 0.56867,
    "longitude": 97.81237,
    "population": "811948",
    "growth_from_2000_to_2013": "7.3%",
    "rank": "37"
  },
  {
    "city": "KABUPATEN HUMBANG HASUNDUTAN",
    "state": "SUMATERA UTARA",
    "latitude": 2.25305,
    "longitude": 98.75239,
    "population": "792106",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "38"
  },
  {
    "city": "KABUPATEN PAKPAK BHARAT",
    "state": "SUMATERA UTARA",
    "latitude": 2.55477,
    "longitude": 98.32467,
    "population": "417276",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "39"
  },
  {
    "city": "KABUPATEN SAMOSIR",
    "state": "SUMATERA UTARA",
    "latitude": 2.62443,
    "longitude": 98.71453,
    "population": "360562",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "40"
  },
  {
    "city": "KABUPATEN SERDANG BEDAGAI",
    "state": "SUMATERA UTARA",
    "latitude": 3.49339,
    "longitude": 99.12746,
    "population": "252259",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "41"
  },
  {
    "city": "KABUPATEN BATU BARA",
    "state": "SUMATERA UTARA",
    "latitude": 3.1695,
    "longitude": 99.42283,
    "population": "900078",
    "growth_from_2000_to_2013": "2.6%",
    "rank": "42"
  },
  {
    "city": "KABUPATEN PADANG LAWAS UTARA",
    "state": "SUMATERA UTARA",
    "latitude": 1.49467,
    "longitude": 99.62005,
    "population": "951593",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "43"
  },
  {
    "city": "KABUPATEN PADANG LAWAS",
    "state": "SUMATERA UTARA",
    "latitude": 1.05567,
    "longitude": 99.77641,
    "population": "472644",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "44"
  },
  {
    "city": "KABUPATEN LABUHAN BATU SELATAN",
    "state": "SUMATERA UTARA",
    "latitude": 1.89094,
    "longitude": 100.09064,
    "population": "133102",
    "growth_from_2000_to_2013": "6.7%",
    "rank": "45"
  },
  {
    "city": "KABUPATEN LABUHAN BATU UTARA",
    "state": "SUMATERA UTARA",
    "latitude": 2.56308,
    "longitude": 99.65889,
    "population": "692801",
    "growth_from_2000_to_2013": "8.5%",
    "rank": "46"
  },
  {
    "city": "KABUPATEN NIAS UTARA",
    "state": "SUMATERA UTARA",
    "latitude": 1.62781,
    "longitude": 98.05255,
    "population": "411241",
    "growth_from_2000_to_2013": "5.0%",
    "rank": "47"
  },
  {
    "city": "KABUPATEN NIAS BARAT",
    "state": "SUMATERA UTARA",
    "latitude": 0.99957,
    "longitude": 97.50747,
    "population": "363089",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "48"
  },
  {
    "city": "KOTA SIBOLGA",
    "state": "SUMATERA UTARA",
    "latitude": 1.73722,
    "longitude": 98.78456,
    "population": "244443",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "49"
  },
  {
    "city": "KOTA TANJUNG BALAI",
    "state": "SUMATERA UTARA",
    "latitude": 2.96571,
    "longitude": 99.80037,
    "population": "602736",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "50"
  },
  {
    "city": "KOTA PEMATANG SIANTAR",
    "state": "SUMATERA UTARA",
    "latitude": 2.96548,
    "longitude": 99.06529,
    "population": "661170",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "51"
  },
  {
    "city": "KOTA TEBING TINGGI",
    "state": "SUMATERA UTARA",
    "latitude": 3.32635,
    "longitude": 99.15584,
    "population": "135917",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "52"
  },
  {
    "city": "KOTA MEDAN",
    "state": "SUMATERA UTARA",
    "latitude": 3.59567,
    "longitude": 98.67565,
    "population": "783417",
    "growth_from_2000_to_2013": "6.4%",
    "rank": "53"
  },
  {
    "city": "KOTA BINJAI",
    "state": "SUMATERA UTARA",
    "latitude": 3.61307,
    "longitude": 98.50635,
    "population": "768509",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "54"
  },
  {
    "city": "KOTA PADANGSIDIMPUAN",
    "state": "SUMATERA UTARA",
    "latitude": 1.37223,
    "longitude": 99.27423,
    "population": "441199",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "55"
  },
  {
    "city": "KOTA GUNUNGSITOLI",
    "state": "SUMATERA UTARA",
    "latitude": 1.28048,
    "longitude": 97.61443,
    "population": "175265",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "56"
  },
  {
    "city": "KABUPATEN KEPULAUAN MENTAWAI",
    "state": "SUMATERA BARAT",
    "latitude": -2.05399,
    "longitude": 99.58156,
    "population": "988518",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "57"
  },
  {
    "city": "KABUPATEN PESISIR SELATAN",
    "state": "SUMATERA BARAT",
    "latitude": -1.34743,
    "longitude": 100.57733,
    "population": "289319",
    "growth_from_2000_to_2013": "9.7%",
    "rank": "58"
  },
  {
    "city": "KABUPATEN SOLOK",
    "state": "SUMATERA BARAT",
    "latitude": -0.95199,
    "longitude": 100.62313,
    "population": "855993",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "59"
  },
  {
    "city": "KABUPATEN SIJUNJUNG",
    "state": "SUMATERA BARAT",
    "latitude": -0.66569,
    "longitude": 100.94518,
    "population": "408061",
    "growth_from_2000_to_2013": "4.4%",
    "rank": "60"
  },
  {
    "city": "KABUPATEN TANAH DATAR",
    "state": "SUMATERA BARAT",
    "latitude": -0.45633,
    "longitude": 100.59637,
    "population": "244535",
    "growth_from_2000_to_2013": "4.1%",
    "rank": "61"
  },
  {
    "city": "KABUPATEN PADANG PARIAMAN",
    "state": "SUMATERA BARAT",
    "latitude": -0.62037,
    "longitude": 100.30693,
    "population": "873495",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "62"
  },
  {
    "city": "KABUPATEN AGAM",
    "state": "SUMATERA BARAT",
    "latitude": -0.33059,
    "longitude": 100.06728,
    "population": "344744",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "63"
  },
  {
    "city": "KABUPATEN LIMA PULUH KOTA",
    "state": "SUMATERA BARAT",
    "latitude": -0.15246,
    "longitude": 100.66111,
    "population": "392274",
    "growth_from_2000_to_2013": "9.1%",
    "rank": "64"
  },
  {
    "city": "KABUPATEN PASAMAN",
    "state": "SUMATERA BARAT",
    "latitude": 0.14054,
    "longitude": 100.16767,
    "population": "828811",
    "growth_from_2000_to_2013": "9.2%",
    "rank": "65"
  },
  {
    "city": "KABUPATEN SOLOK SELATAN",
    "state": "SUMATERA BARAT",
    "latitude": -1.55631,
    "longitude": 101.24231,
    "population": "138854",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "66"
  },
  {
    "city": "KABUPATEN DHARMASRAYA",
    "state": "SUMATERA BARAT",
    "latitude": -0.95265,
    "longitude": 101.49455,
    "population": "918479",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "67"
  },
  {
    "city": "KABUPATEN PASAMAN BARAT",
    "state": "SUMATERA BARAT",
    "latitude": 0.11029,
    "longitude": 99.83117,
    "population": "472040",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "68"
  },
  {
    "city": "KOTA PADANG",
    "state": "SUMATERA BARAT",
    "latitude": -0.94625,
    "longitude": 100.35829,
    "population": "261487",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "69"
  },
  {
    "city": "KOTA SOLOK",
    "state": "SUMATERA BARAT",
    "latitude": -0.78917,
    "longitude": 100.65486,
    "population": "656805",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "70"
  },
  {
    "city": "KOTA SAWAH LUNTO",
    "state": "SUMATERA BARAT",
    "latitude": -0.59967,
    "longitude": 100.74631,
    "population": "394303",
    "growth_from_2000_to_2013": "6.7%",
    "rank": "71"
  },
  {
    "city": "KOTA PADANG PANJANG",
    "state": "SUMATERA BARAT",
    "latitude": -0.46651,
    "longitude": 100.39621,
    "population": "427177",
    "growth_from_2000_to_2013": "8.8%",
    "rank": "72"
  },
  {
    "city": "KOTA BUKITTINGGI",
    "state": "SUMATERA BARAT",
    "latitude": -0.30396,
    "longitude": 100.38365,
    "population": "402384",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "73"
  },
  {
    "city": "KOTA PAYAKUMBUH",
    "state": "SUMATERA BARAT",
    "latitude": -0.22417,
    "longitude": 100.63241,
    "population": "344727",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "74"
  },
  {
    "city": "KOTA PARIAMAN",
    "state": "SUMATERA BARAT",
    "latitude": -0.62723,
    "longitude": 100.12094,
    "population": "157639",
    "growth_from_2000_to_2013": "4.2%",
    "rank": "75"
  },
  {
    "city": "KABUPATEN KUANTAN SINGINGI",
    "state": "RIAU",
    "latitude": -0.50513,
    "longitude": 101.53884,
    "population": "858114",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "76"
  },
  {
    "city": "KABUPATEN INDRAGIRI HULU",
    "state": "RIAU",
    "latitude": -0.38902,
    "longitude": 102.54892,
    "population": "530554",
    "growth_from_2000_to_2013": "9.2%",
    "rank": "77"
  },
  {
    "city": "KABUPATEN INDRAGIRI HILIR",
    "state": "RIAU",
    "latitude": -0.32194,
    "longitude": 103.15294,
    "population": "998090",
    "growth_from_2000_to_2013": "0.9%",
    "rank": "78"
  },
  {
    "city": "KABUPATEN PELALAWAN",
    "state": "RIAU",
    "latitude": 0.38379,
    "longitude": 101.84244,
    "population": "948748",
    "growth_from_2000_to_2013": "6.5%",
    "rank": "79"
  },
  {
    "city": "KABUPATEN SIAK",
    "state": "RIAU",
    "latitude": 0.80509,
    "longitude": 102.02092,
    "population": "536878",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "80"
  },
  {
    "city": "KABUPATEN KAMPAR",
    "state": "RIAU",
    "latitude": 0.34134,
    "longitude": 101.02889,
    "population": "987832",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "81"
  },
  {
    "city": "KABUPATEN ROKAN HULU",
    "state": "RIAU",
    "latitude": 0.89319,
    "longitude": 100.30318,
    "population": "476584",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "82"
  },
  {
    "city": "KABUPATEN BENGKALIS",
    "state": "RIAU",
    "latitude": 1.49445,
    "longitude": 102.0916,
    "population": "597536",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "83"
  },
  {
    "city": "KABUPATEN ROKAN HILIR",
    "state": "RIAU",
    "latitude": 2.1573,
    "longitude": 100.81573,
    "population": "709119",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "84"
  },
  {
    "city": "KABUPATEN KEPULAUAN MERANTI",
    "state": "RIAU",
    "latitude": 0.98296,
    "longitude": 102.69906,
    "population": "843441",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "85"
  },
  {
    "city": "KOTA PEKANBARU",
    "state": "RIAU",
    "latitude": 0.50486,
    "longitude": 101.44115,
    "population": "527392",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "86"
  },
  {
    "city": "KOTA DUMAI",
    "state": "RIAU",
    "latitude": 1.66449,
    "longitude": 101.40149,
    "population": "417130",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "87"
  },
  {
    "city": "KABUPATEN KERINCI",
    "state": "JAMBI",
    "latitude": -1.93578,
    "longitude": 101.34254,
    "population": "335993",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "88"
  },
  {
    "city": "KABUPATEN MERANGIN",
    "state": "JAMBI",
    "latitude": -2.07291,
    "longitude": 102.27457,
    "population": "798391",
    "growth_from_2000_to_2013": "7.4%",
    "rank": "89"
  },
  {
    "city": "KABUPATEN SAROLANGUN",
    "state": "JAMBI",
    "latitude": -2.31262,
    "longitude": 102.75354,
    "population": "560693",
    "growth_from_2000_to_2013": "4.6%",
    "rank": "90"
  },
  {
    "city": "KABUPATEN BATANG HARI",
    "state": "JAMBI",
    "latitude": -1.6597,
    "longitude": 103.28027,
    "population": "778998",
    "growth_from_2000_to_2013": "4.5%",
    "rank": "91"
  },
  {
    "city": "KABUPATEN MUARO JAMBI",
    "state": "JAMBI",
    "latitude": -1.44812,
    "longitude": 103.51612,
    "population": "343041",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "92"
  },
  {
    "city": "KABUPATEN TANJUNG JABUNG TIMUR",
    "state": "JAMBI",
    "latitude": -1.20569,
    "longitude": 103.79294,
    "population": "503511",
    "growth_from_2000_to_2013": "9.7%",
    "rank": "93"
  },
  {
    "city": "KABUPATEN TANJUNG JABUNG BARAT",
    "state": "JAMBI",
    "latitude": -0.81637,
    "longitude": 103.46271,
    "population": "514052",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "94"
  },
  {
    "city": "KABUPATEN TEBO",
    "state": "JAMBI",
    "latitude": -1.4662,
    "longitude": 102.35888,
    "population": "528123",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "95"
  },
  {
    "city": "KABUPATEN BUNGO",
    "state": "JAMBI",
    "latitude": -1.51616,
    "longitude": 102.11988,
    "population": "688012",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "96"
  },
  {
    "city": "KOTA JAMBI",
    "state": "JAMBI",
    "latitude": -1.61146,
    "longitude": 103.61261,
    "population": "329727",
    "growth_from_2000_to_2013": "2.6%",
    "rank": "97"
  },
  {
    "city": "KOTA SUNGAI PENUH",
    "state": "JAMBI",
    "latitude": -2.06345,
    "longitude": 101.3944,
    "population": "877386",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "98"
  },
  {
    "city": "KABUPATEN OGAN KOMERING ULU",
    "state": "SUMATERA SELATAN",
    "latitude": -4.11223,
    "longitude": 104.17791,
    "population": "811936",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "99"
  },
  {
    "city": "KABUPATEN OGAN KOMERING ILIR",
    "state": "SUMATERA SELATAN",
    "latitude": -3.41139,
    "longitude": 104.82364,
    "population": "343739",
    "growth_from_2000_to_2013": "7.1%",
    "rank": "100"
  },
  {
    "city": "KABUPATEN MUARA ENIM",
    "state": "SUMATERA SELATAN",
    "latitude": -3.66474,
    "longitude": 103.77288,
    "population": "555627",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "101"
  },
  {
    "city": "KABUPATEN LAHAT",
    "state": "SUMATERA SELATAN",
    "latitude": -3.78521,
    "longitude": 103.54079,
    "population": "511208",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "102"
  },
  {
    "city": "KABUPATEN MUSI RAWAS",
    "state": "SUMATERA SELATAN",
    "latitude": -3.24521,
    "longitude": 103.03355,
    "population": "350827",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "103"
  },
  {
    "city": "KABUPATEN MUSI BANYUASIN",
    "state": "SUMATERA SELATAN",
    "latitude": -2.88888,
    "longitude": 103.84034,
    "population": "864406",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "104"
  },
  {
    "city": "KABUPATEN BANYU ASIN",
    "state": "SUMATERA SELATAN",
    "latitude": -2.88766,
    "longitude": 104.39386,
    "population": "615803",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "105"
  },
  {
    "city": "KABUPATEN OGAN KOMERING ULU SELATAN",
    "state": "SUMATERA SELATAN",
    "latitude": -4.53473,
    "longitude": 104.06858,
    "population": "453849",
    "growth_from_2000_to_2013": "0.0%",
    "rank": "106"
  },
  {
    "city": "KABUPATEN OGAN KOMERING ULU TIMUR",
    "state": "SUMATERA SELATAN",
    "latitude": -4.31419,
    "longitude": 104.34543,
    "population": "803612",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "107"
  },
  {
    "city": "KABUPATEN OGAN ILIR",
    "state": "SUMATERA SELATAN",
    "latitude": -3.24141,
    "longitude": 104.66583,
    "population": "895745",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "108"
  },
  {
    "city": "KABUPATEN EMPAT LAWANG",
    "state": "SUMATERA SELATAN",
    "latitude": -3.59113,
    "longitude": 103.08192,
    "population": "711149",
    "growth_from_2000_to_2013": "5.3%",
    "rank": "109"
  },
  {
    "city": "KABUPATEN PENUKAL ABAB LEMATANG ILIR",
    "state": "SUMATERA SELATAN",
    "latitude": -3.30959,
    "longitude": 103.88453,
    "population": "476473",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "110"
  },
  {
    "city": "KABUPATEN MUSI RAWAS UTARA",
    "state": "SUMATERA SELATAN",
    "latitude": -2.73513,
    "longitude": 102.90215,
    "population": "844237",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "111"
  },
  {
    "city": "KOTA PALEMBANG",
    "state": "SUMATERA SELATAN",
    "latitude": -2.97622,
    "longitude": 104.77738,
    "population": "608158",
    "growth_from_2000_to_2013": "8.9%",
    "rank": "112"
  },
  {
    "city": "KOTA PRABUMULIH",
    "state": "SUMATERA SELATAN",
    "latitude": -3.42144,
    "longitude": 104.24406,
    "population": "997928",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "113"
  },
  {
    "city": "KOTA PAGAR ALAM",
    "state": "SUMATERA SELATAN",
    "latitude": -4.04082,
    "longitude": 103.22557,
    "population": "930751",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "114"
  },
  {
    "city": "KOTA LUBUKLINGGAU",
    "state": "SUMATERA SELATAN",
    "latitude": -3.29964,
    "longitude": 102.85806,
    "population": "682658",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "115"
  },
  {
    "city": "KABUPATEN BENGKULU SELATAN",
    "state": "BENGKULU",
    "latitude": -4.34188,
    "longitude": 103.04563,
    "population": "398203",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "116"
  },
  {
    "city": "KABUPATEN REJANG LEBONG",
    "state": "BENGKULU",
    "latitude": -3.46527,
    "longitude": 102.52544,
    "population": "242109",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "117"
  },
  {
    "city": "KABUPATEN BENGKULU UTARA",
    "state": "BENGKULU",
    "latitude": -3.43868,
    "longitude": 102.1947,
    "population": "670437",
    "growth_from_2000_to_2013": "0.6%",
    "rank": "118"
  },
  {
    "city": "KABUPATEN KAUR",
    "state": "BENGKULU",
    "latitude": -4.75886,
    "longitude": 103.34933,
    "population": "862877",
    "growth_from_2000_to_2013": "5.6%",
    "rank": "119"
  },
  {
    "city": "KABUPATEN SELUMA",
    "state": "BENGKULU",
    "latitude": -4.07749,
    "longitude": 102.55662,
    "population": "624585",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "120"
  },
  {
    "city": "KABUPATEN MUKOMUKO",
    "state": "BENGKULU",
    "latitude": -2.57427,
    "longitude": 101.13082,
    "population": "873378",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "121"
  },
  {
    "city": "KABUPATEN LEBONG",
    "state": "BENGKULU",
    "latitude": -3.15737,
    "longitude": 102.18304,
    "population": "788233",
    "growth_from_2000_to_2013": "2.6%",
    "rank": "122"
  },
  {
    "city": "KABUPATEN KEPAHIANG",
    "state": "BENGKULU",
    "latitude": -3.65188,
    "longitude": 102.57711,
    "population": "700821",
    "growth_from_2000_to_2013": "0.8%",
    "rank": "123"
  },
  {
    "city": "KABUPATEN BENGKULU TENGAH",
    "state": "BENGKULU",
    "latitude": -3.77276,
    "longitude": 102.39047,
    "population": "624234",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "124"
  },
  {
    "city": "KOTA BENGKULU",
    "state": "BENGKULU",
    "latitude": -3.79143,
    "longitude": 102.25788,
    "population": "390040",
    "growth_from_2000_to_2013": "6.4%",
    "rank": "125"
  },
  {
    "city": "KABUPATEN LAMPUNG BARAT",
    "state": "LAMPUNG",
    "latitude": -5.01884,
    "longitude": 104.06096,
    "population": "186016",
    "growth_from_2000_to_2013": "1.5%",
    "rank": "126"
  },
  {
    "city": "KABUPATEN TANGGAMUS",
    "state": "LAMPUNG",
    "latitude": -5.49223,
    "longitude": 104.62189,
    "population": "228291",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "127"
  },
  {
    "city": "KABUPATEN LAMPUNG SELATAN",
    "state": "LAMPUNG",
    "latitude": -5.73466,
    "longitude": 105.59582,
    "population": "658866",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "128"
  },
  {
    "city": "KABUPATEN LAMPUNG TIMUR",
    "state": "LAMPUNG",
    "latitude": -5.0684,
    "longitude": 105.54633,
    "population": "268057",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "129"
  },
  {
    "city": "KABUPATEN LAMPUNG TENGAH",
    "state": "LAMPUNG",
    "latitude": -4.98283,
    "longitude": 105.21336,
    "population": "791353",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "130"
  },
  {
    "city": "KABUPATEN LAMPUNG UTARA",
    "state": "LAMPUNG",
    "latitude": -4.82496,
    "longitude": 104.89532,
    "population": "990447",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "131"
  },
  {
    "city": "KABUPATEN WAY KANAN",
    "state": "LAMPUNG",
    "latitude": -4.50596,
    "longitude": 104.51212,
    "population": "989095",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "132"
  },
  {
    "city": "KABUPATEN TULANGBAWANG",
    "state": "LAMPUNG",
    "latitude": -4.48052,
    "longitude": 105.24169,
    "population": "470360",
    "growth_from_2000_to_2013": "6.4%",
    "rank": "133"
  },
  {
    "city": "KABUPATEN PESAWARAN",
    "state": "LAMPUNG",
    "latitude": -5.38307,
    "longitude": 105.09003,
    "population": "777599",
    "growth_from_2000_to_2013": "2.9%",
    "rank": "134"
  },
  {
    "city": "KABUPATEN PRINGSEWU",
    "state": "LAMPUNG",
    "latitude": -5.34407,
    "longitude": 105.00716,
    "population": "600787",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "135"
  },
  {
    "city": "KABUPATEN MESUJI",
    "state": "LAMPUNG",
    "latitude": -3.87201,
    "longitude": 105.43494,
    "population": "554852",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "136"
  },
  {
    "city": "KABUPATEN TULANG BAWANG BARAT",
    "state": "LAMPUNG",
    "latitude": -4.49926,
    "longitude": 105.12029,
    "population": "947987",
    "growth_from_2000_to_2013": "0.6%",
    "rank": "137"
  },
  {
    "city": "KABUPATEN PESISIR BARAT",
    "state": "LAMPUNG",
    "latitude": -5.19005,
    "longitude": 103.93374,
    "population": "278793",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "138"
  },
  {
    "city": "KOTA BANDAR LAMPUNG",
    "state": "LAMPUNG",
    "latitude": -5.39542,
    "longitude": 105.26403,
    "population": "483918",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "139"
  },
  {
    "city": "KOTA METRO",
    "state": "LAMPUNG",
    "latitude": -5.11834,
    "longitude": 105.30689,
    "population": "597705",
    "growth_from_2000_to_2013": "4.6%",
    "rank": "140"
  },
  {
    "city": "KABUPATEN BANGKA",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -1.87663,
    "longitude": 106.11354,
    "population": "333899",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "141"
  },
  {
    "city": "KABUPATEN BELITUNG",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.74015,
    "longitude": 107.65323,
    "population": "307162",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "142"
  },
  {
    "city": "KABUPATEN BANGKA BARAT",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.06457,
    "longitude": 105.16147,
    "population": "227835",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "143"
  },
  {
    "city": "KABUPATEN BANGKA TENGAH",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.48624,
    "longitude": 106.41238,
    "population": "435783",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "144"
  },
  {
    "city": "KABUPATEN BANGKA SELATAN",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.99909,
    "longitude": 106.46538,
    "population": "916903",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "145"
  },
  {
    "city": "KABUPATEN BELITUNG TIMUR",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.87051,
    "longitude": 108.27865,
    "population": "446716",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "146"
  },
  {
    "city": "KOTA PANGKAL PINANG",
    "state": "KEPULAUAN BANGKA BELITUNG",
    "latitude": -2.13212,
    "longitude": 106.11606,
    "population": "464052",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "147"
  },
  {
    "city": "KABUPATEN KARIMUN",
    "state": "KEPULAUAN RIAU",
    "latitude": 1.03317,
    "longitude": 103.37606,
    "population": "522749",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "148"
  },
  {
    "city": "KABUPATEN BINTAN",
    "state": "KEPULAUAN RIAU",
    "latitude": 1.08914,
    "longitude": 104.50337,
    "population": "461470",
    "growth_from_2000_to_2013": "9.9%",
    "rank": "149"
  },
  {
    "city": "KABUPATEN NATUNA",
    "state": "KEPULAUAN RIAU",
    "latitude": 3.94193,
    "longitude": 108.37965,
    "population": "348027",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "150"
  },
  {
    "city": "KABUPATEN LINGGA",
    "state": "KEPULAUAN RIAU",
    "latitude": -0.20982,
    "longitude": 104.60489,
    "population": "398521",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "151"
  },
  {
    "city": "KABUPATEN KEPULAUAN ANAMBAS",
    "state": "KEPULAUAN RIAU",
    "latitude": 3.21495,
    "longitude": 106.24907,
    "population": "130918",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "152"
  },
  {
    "city": "KOTA BATAM",
    "state": "KEPULAUAN RIAU",
    "latitude": 1.1293,
    "longitude": 104.05023,
    "population": "332226",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "153"
  },
  {
    "city": "KOTA TANJUNG PINANG",
    "state": "KEPULAUAN RIAU",
    "latitude": 0.91815,
    "longitude": 104.46596,
    "population": "146575",
    "growth_from_2000_to_2013": "9.2%",
    "rank": "154"
  },
  {
    "city": "KABUPATEN KEPULAUAN SERIBU",
    "state": "DKI JAKARTA",
    "latitude": -5.74657,
    "longitude": 106.61325,
    "population": "902048",
    "growth_from_2000_to_2013": "4.1%",
    "rank": "155"
  },
  {
    "city": "KOTA JAKARTA SELATAN",
    "state": "DKI JAKARTA",
    "latitude": -6.24853,
    "longitude": 106.82941,
    "population": "192732",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "156"
  },
  {
    "city": "KOTA JAKARTA TIMUR",
    "state": "DKI JAKARTA",
    "latitude": -6.16631,
    "longitude": 106.76343,
    "population": "782336",
    "growth_from_2000_to_2013": "8.9%",
    "rank": "157"
  },
  {
    "city": "KOTA JAKARTA PUSAT",
    "state": "DKI JAKARTA",
    "latitude": -6.18043,
    "longitude": 106.83372,
    "population": "315072",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "158"
  },
  {
    "city": "KOTA JAKARTA BARAT",
    "state": "DKI JAKARTA",
    "latitude": -6.16637,
    "longitude": 106.76944,
    "population": "353007",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "159"
  },
  {
    "city": "KOTA JAKARTA UTARA",
    "state": "DKI JAKARTA",
    "latitude": -6.14874,
    "longitude": 106.90261,
    "population": "487767",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "160"
  },
  {
    "city": "KABUPATEN BOGOR",
    "state": "JAWA BARAT",
    "latitude": -6.48723,
    "longitude": 106.84872,
    "population": "776729",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "161"
  },
  {
    "city": "KABUPATEN SUKABUMI",
    "state": "JAWA BARAT",
    "latitude": -7.06086,
    "longitude": 106.71864,
    "population": "764601",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "162"
  },
  {
    "city": "KABUPATEN CIANJUR",
    "state": "JAWA BARAT",
    "latitude": -6.81725,
    "longitude": 107.13073,
    "population": "245747",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "163"
  },
  {
    "city": "KABUPATEN BANDUNG",
    "state": "JAWA BARAT",
    "latitude": -7.02523,
    "longitude": 107.52454,
    "population": "491084",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "164"
  },
  {
    "city": "KABUPATEN GARUT",
    "state": "JAWA BARAT",
    "latitude": -7.22791,
    "longitude": 107.9087,
    "population": "941547",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "165"
  },
  {
    "city": "KABUPATEN TASIKMALAYA",
    "state": "JAWA BARAT",
    "latitude": -7.35015,
    "longitude": 108.12472,
    "population": "769881",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "166"
  },
  {
    "city": "KABUPATEN CIAMIS",
    "state": "JAWA BARAT",
    "latitude": -7.32975,
    "longitude": 108.32957,
    "population": "352795",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "167"
  },
  {
    "city": "KABUPATEN KUNINGAN",
    "state": "JAWA BARAT",
    "latitude": -6.98333,
    "longitude": 108.48333,
    "population": "319736",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "168"
  },
  {
    "city": "KABUPATEN CIREBON",
    "state": "JAWA BARAT",
    "latitude": -6.75906,
    "longitude": 108.48875,
    "population": "462717",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "169"
  },
  {
    "city": "KABUPATEN MAJALENGKA",
    "state": "JAWA BARAT",
    "latitude": -6.8531,
    "longitude": 108.22589,
    "population": "435486",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "170"
  },
  {
    "city": "KABUPATEN SUMEDANG",
    "state": "JAWA BARAT",
    "latitude": 0.60959,
    "longitude": 110.03306,
    "population": "422896",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "171"
  },
  {
    "city": "KABUPATEN INDRAMAYU",
    "state": "JAWA BARAT",
    "latitude": -6.33632,
    "longitude": 108.3251,
    "population": "673129",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "172"
  },
  {
    "city": "KABUPATEN SUBANG",
    "state": "JAWA BARAT",
    "latitude": -6.56936,
    "longitude": 107.7524,
    "population": "608911",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "173"
  },
  {
    "city": "KABUPATEN PURWAKARTA",
    "state": "JAWA BARAT",
    "latitude": -6.53868,
    "longitude": 107.44994,
    "population": "117149",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "174"
  },
  {
    "city": "KABUPATEN KARAWANG",
    "state": "JAWA BARAT",
    "latitude": -6.32273,
    "longitude": 107.33758,
    "population": "278595",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "175"
  },
  {
    "city": "KABUPATEN BEKASI",
    "state": "JAWA BARAT",
    "latitude": -6.36722,
    "longitude": 107.17228,
    "population": "887040",
    "growth_from_2000_to_2013": "0.6%",
    "rank": "176"
  },
  {
    "city": "KABUPATEN BANDUNG BARAT",
    "state": "JAWA BARAT",
    "latitude": -6.89371,
    "longitude": 107.4322,
    "population": "608047",
    "growth_from_2000_to_2013": "5.3%",
    "rank": "177"
  },
  {
    "city": "KABUPATEN PANGANDARAN",
    "state": "JAWA BARAT",
    "latitude": -7.6151,
    "longitude": 108.4988,
    "population": "442543",
    "growth_from_2000_to_2013": "6.7%",
    "rank": "178"
  },
  {
    "city": "KOTA BOGOR",
    "state": "JAWA BARAT",
    "latitude": -6.59748,
    "longitude": 106.80677,
    "population": "177226",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "179"
  },
  {
    "city": "KOTA SUKABUMI",
    "state": "JAWA BARAT",
    "latitude": -6.91776,
    "longitude": 106.93293,
    "population": "576517",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "180"
  },
  {
    "city": "KOTA BANDUNG",
    "state": "JAWA BARAT",
    "latitude": -6.91776,
    "longitude": 107.62529,
    "population": "151006",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "181"
  },
  {
    "city": "KOTA CIREBON",
    "state": "JAWA BARAT",
    "latitude": -6.73331,
    "longitude": 108.55472,
    "population": "896139",
    "growth_from_2000_to_2013": "0.8%",
    "rank": "182"
  },
  {
    "city": "KOTA BEKASI",
    "state": "JAWA BARAT",
    "latitude": -6.23963,
    "longitude": 106.97715,
    "population": "907956",
    "growth_from_2000_to_2013": "3.5%",
    "rank": "183"
  },
  {
    "city": "KOTA DEPOK",
    "state": "JAWA BARAT",
    "latitude": -6.40319,
    "longitude": 106.79135,
    "population": "509294",
    "growth_from_2000_to_2013": "8.8%",
    "rank": "184"
  },
  {
    "city": "KOTA CIMAHI",
    "state": "JAWA BARAT",
    "latitude": -6.88024,
    "longitude": 107.5355,
    "population": "539185",
    "growth_from_2000_to_2013": "0.9%",
    "rank": "185"
  },
  {
    "city": "KOTA TASIKMALAYA",
    "state": "JAWA BARAT",
    "latitude": -7.35152,
    "longitude": 108.21574,
    "population": "417605",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "186"
  },
  {
    "city": "KOTA BANJAR",
    "state": "JAWA BARAT",
    "latitude": -7.37129,
    "longitude": 108.53328,
    "population": "736814",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "187"
  },
  {
    "city": "KABUPATEN CILACAP",
    "state": "JAWA TENGAH",
    "latitude": -7.69817,
    "longitude": 109.02425,
    "population": "778703",
    "growth_from_2000_to_2013": "5.5%",
    "rank": "188"
  },
  {
    "city": "KABUPATEN BANYUMAS",
    "state": "JAWA TENGAH",
    "latitude": -7.48321,
    "longitude": 109.14044,
    "population": "336483",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "189"
  },
  {
    "city": "KABUPATEN PURBALINGGA",
    "state": "JAWA TENGAH",
    "latitude": -7.39075,
    "longitude": 109.3638,
    "population": "676781",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "190"
  },
  {
    "city": "KABUPATEN BANJARNEGARA",
    "state": "JAWA TENGAH",
    "latitude": -7.40271,
    "longitude": 109.6814,
    "population": "781013",
    "growth_from_2000_to_2013": "9.3%",
    "rank": "191"
  },
  {
    "city": "KABUPATEN KEBUMEN",
    "state": "JAWA TENGAH",
    "latitude": -7.67868,
    "longitude": 109.6565,
    "population": "885237",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "192"
  },
  {
    "city": "KABUPATEN PURWOREJO",
    "state": "JAWA TENGAH",
    "latitude": -7.70973,
    "longitude": 110.008,
    "population": "904673",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "193"
  },
  {
    "city": "KABUPATEN WONOSOBO",
    "state": "JAWA TENGAH",
    "latitude": -7.36211,
    "longitude": 109.8994,
    "population": "872073",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "194"
  },
  {
    "city": "KABUPATEN MAGELANG",
    "state": "JAWA TENGAH",
    "latitude": -7.55442,
    "longitude": 110.25446,
    "population": "328229",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "195"
  },
  {
    "city": "KABUPATEN BOYOLALI",
    "state": "JAWA TENGAH",
    "latitude": -7.52382,
    "longitude": 110.5959,
    "population": "468643",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "196"
  },
  {
    "city": "KABUPATEN KLATEN",
    "state": "JAWA TENGAH",
    "latitude": -7.71169,
    "longitude": 110.5955,
    "population": "232230",
    "growth_from_2000_to_2013": "9.5%",
    "rank": "197"
  },
  {
    "city": "KABUPATEN SUKOHARJO",
    "state": "JAWA TENGAH",
    "latitude": -7.68088,
    "longitude": 110.81953,
    "population": "254361",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "198"
  },
  {
    "city": "KABUPATEN WONOGIRI",
    "state": "JAWA TENGAH",
    "latitude": -7.81778,
    "longitude": 110.9206,
    "population": "569834",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "199"
  },
  {
    "city": "KABUPATEN KARANGANYAR",
    "state": "JAWA TENGAH",
    "latitude": -7.59611,
    "longitude": 110.95083,
    "population": "414561",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "200"
  },
  {
    "city": "KABUPATEN SRAGEN",
    "state": "JAWA TENGAH",
    "latitude": -7.43023,
    "longitude": 111.0213,
    "population": "339654",
    "growth_from_2000_to_2013": "3.5%",
    "rank": "201"
  },
  {
    "city": "KABUPATEN GROBOGAN",
    "state": "JAWA TENGAH",
    "latitude": -7.02172,
    "longitude": 110.96259,
    "population": "174420",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "202"
  },
  {
    "city": "KABUPATEN BLORA",
    "state": "JAWA TENGAH",
    "latitude": -6.96932,
    "longitude": 111.41667,
    "population": "685355",
    "growth_from_2000_to_2013": "4.1%",
    "rank": "203"
  },
  {
    "city": "KABUPATEN REMBANG",
    "state": "JAWA TENGAH",
    "latitude": -6.71124,
    "longitude": 111.3453,
    "population": "358598",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "204"
  },
  {
    "city": "KABUPATEN PATI",
    "state": "JAWA TENGAH",
    "latitude": -6.75134,
    "longitude": 111.038,
    "population": "294956",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "205"
  },
  {
    "city": "KABUPATEN KUDUS",
    "state": "JAWA TENGAH",
    "latitude": -6.80409,
    "longitude": 110.8382,
    "population": "974256",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "206"
  },
  {
    "city": "KABUPATEN JEPARA",
    "state": "JAWA TENGAH",
    "latitude": -6.55961,
    "longitude": 110.6717,
    "population": "297045",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "207"
  },
  {
    "city": "KABUPATEN DEMAK",
    "state": "JAWA TENGAH",
    "latitude": -6.88811,
    "longitude": 110.6393,
    "population": "387989",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "208"
  },
  {
    "city": "KABUPATEN SEMARANG",
    "state": "JAWA TENGAH",
    "latitude": -7.13652,
    "longitude": 110.4086,
    "population": "208327",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "209"
  },
  {
    "city": "KABUPATEN TEMANGGUNG",
    "state": "JAWA TENGAH",
    "latitude": -7.31667,
    "longitude": 110.1748,
    "population": "473747",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "210"
  },
  {
    "city": "KABUPATEN KENDAL",
    "state": "JAWA TENGAH",
    "latitude": -6.91969,
    "longitude": 110.2056,
    "population": "268921",
    "growth_from_2000_to_2013": "4.4%",
    "rank": "211"
  },
  {
    "city": "KABUPATEN BATANG",
    "state": "JAWA TENGAH",
    "latitude": -6.906159,
    "longitude": 109.72984,
    "population": "758141",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "212"
  },
  {
    "city": "KABUPATEN PEKALONGAN",
    "state": "JAWA TENGAH",
    "latitude": -7.02676,
    "longitude": 109.5805,
    "population": "687080",
    "growth_from_2000_to_2013": "3.6%",
    "rank": "213"
  },
  {
    "city": "KABUPATEN PEMALANG",
    "state": "JAWA TENGAH",
    "latitude": -6.88423,
    "longitude": 109.378,
    "population": "240024",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "214"
  },
  {
    "city": "KABUPATEN TEGAL",
    "state": "JAWA TENGAH",
    "latitude": -6.98277,
    "longitude": 109.135513,
    "population": "870505",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "215"
  },
  {
    "city": "KABUPATEN BREBES",
    "state": "JAWA TENGAH",
    "latitude": -6.88333,
    "longitude": 109.03947,
    "population": "276699",
    "growth_from_2000_to_2013": "9.7%",
    "rank": "216"
  },
  {
    "city": "KOTA MAGELANG",
    "state": "JAWA TENGAH",
    "latitude": -7.47884,
    "longitude": 110.21993,
    "population": "581448",
    "growth_from_2000_to_2013": "2.2%",
    "rank": "217"
  },
  {
    "city": "KOTA SURAKARTA",
    "state": "JAWA TENGAH",
    "latitude": -7.56667,
    "longitude": 110.81667,
    "population": "996308",
    "growth_from_2000_to_2013": "5.5%",
    "rank": "218"
  },
  {
    "city": "KOTA SALATIGA",
    "state": "JAWA TENGAH",
    "latitude": -7.30233,
    "longitude": 110.4729,
    "population": "420980",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "219"
  },
  {
    "city": "KOTA SEMARANG",
    "state": "JAWA TENGAH",
    "latitude": -6.98439,
    "longitude": 110.41286,
    "population": "747305",
    "growth_from_2000_to_2013": "3.6%",
    "rank": "220"
  },
  {
    "city": "KOTA PEKALONGAN",
    "state": "JAWA TENGAH",
    "latitude": -6.88981,
    "longitude": 109.67141,
    "population": "576366",
    "growth_from_2000_to_2013": "2.2%",
    "rank": "221"
  },
  {
    "city": "KOTA TEGAL",
    "state": "JAWA TENGAH",
    "latitude": -6.8796,
    "longitude": 109.12685,
    "population": "577411",
    "growth_from_2000_to_2013": "7.5%",
    "rank": "222"
  },
  {
    "city": "KABUPATEN KULON PROGO",
    "state": "DI YOGYAKARTA",
    "latitude": -7.82668,
    "longitude": 110.16408,
    "population": "630280",
    "growth_from_2000_to_2013": "5.6%",
    "rank": "223"
  },
  {
    "city": "KABUPATEN BANTUL",
    "state": "DI YOGYAKARTA",
    "latitude": -7.88461,
    "longitude": 110.33411,
    "population": "188119",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "224"
  },
  {
    "city": "KABUPATEN GUNUNG KIDUL",
    "state": "DI YOGYAKARTA",
    "latitude": -8.03051,
    "longitude": 110.61689,
    "population": "532145",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "225"
  },
  {
    "city": "KABUPATEN SLEMAN",
    "state": "DI YOGYAKARTA",
    "latitude": -7.71616,
    "longitude": 110.3354,
    "population": "986026",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "226"
  },
  {
    "city": "KOTA YOGYAKARTA",
    "state": "DI YOGYAKARTA",
    "latitude": -7.79722,
    "longitude": 110.3688,
    "population": "948399",
    "growth_from_2000_to_2013": "7.4%",
    "rank": "227"
  },
  {
    "city": "KABUPATEN PACITAN",
    "state": "JAWA TIMUR",
    "latitude": -8.20461,
    "longitude": 111.08769,
    "population": "357985",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "228"
  },
  {
    "city": "KABUPATEN PONOROGO",
    "state": "JAWA TIMUR",
    "latitude": -7.86783,
    "longitude": 111.466,
    "population": "634815",
    "growth_from_2000_to_2013": "4.6%",
    "rank": "229"
  },
  {
    "city": "KABUPATEN TRENGGALEK",
    "state": "JAWA TIMUR",
    "latitude": -8.07705,
    "longitude": 111.71667,
    "population": "403125",
    "growth_from_2000_to_2013": "0.5%",
    "rank": "230"
  },
  {
    "city": "KABUPATEN TULUNGAGUNG",
    "state": "JAWA TIMUR",
    "latitude": -8.06667,
    "longitude": 111.96328,
    "population": "723505",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "231"
  },
  {
    "city": "KABUPATEN BLITAR",
    "state": "JAWA TIMUR",
    "latitude": -8.11921,
    "longitude": 112.20187,
    "population": "691510",
    "growth_from_2000_to_2013": "4.2%",
    "rank": "232"
  },
  {
    "city": "KABUPATEN KEDIRI",
    "state": "JAWA TIMUR",
    "latitude": -7.77407,
    "longitude": 112.10822,
    "population": "878653",
    "growth_from_2000_to_2013": "5.6%",
    "rank": "233"
  },
  {
    "city": "KABUPATEN MALANG",
    "state": "JAWA TIMUR",
    "latitude": -8.13084,
    "longitude": 112.56496,
    "population": "126924",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "234"
  },
  {
    "city": "KABUPATEN LUMAJANG",
    "state": "JAWA TIMUR",
    "latitude": -8.13702,
    "longitude": 113.2266,
    "population": "489628",
    "growth_from_2000_to_2013": "9.7%",
    "rank": "235"
  },
  {
    "city": "KABUPATEN JEMBER",
    "state": "JAWA TIMUR",
    "latitude": -8.17236,
    "longitude": 113.7003,
    "population": "133278",
    "growth_from_2000_to_2013": "7.6%",
    "rank": "236"
  },
  {
    "city": "KABUPATEN BANYUWANGI",
    "state": "JAWA TIMUR",
    "latitude": -8.21861,
    "longitude": 114.36694,
    "population": "538671",
    "growth_from_2000_to_2013": "4.8%",
    "rank": "237"
  },
  {
    "city": "KABUPATEN BONDOWOSO",
    "state": "JAWA TIMUR",
    "latitude": -7.9177,
    "longitude": 113.81348,
    "population": "601147",
    "growth_from_2000_to_2013": "4.4%",
    "rank": "238"
  },
  {
    "city": "KABUPATEN SITUBONDO",
    "state": "JAWA TIMUR",
    "latitude": -7.70253,
    "longitude": 113.95561,
    "population": "684293",
    "growth_from_2000_to_2013": "2.8%",
    "rank": "239"
  },
  {
    "city": "KABUPATEN PROBOLINGGO",
    "state": "JAWA TIMUR",
    "latitude": -7.76208,
    "longitude": 113.41848,
    "population": "497118",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "240"
  },
  {
    "city": "KABUPATEN PASURUAN",
    "state": "JAWA TIMUR",
    "latitude": -7.60411,
    "longitude": 112.77633,
    "population": "902712",
    "growth_from_2000_to_2013": "6.4%",
    "rank": "241"
  },
  {
    "city": "KABUPATEN SIDOARJO",
    "state": "JAWA TIMUR",
    "latitude": -7.45303,
    "longitude": 112.71734,
    "population": "579520",
    "growth_from_2000_to_2013": "3.3%",
    "rank": "242"
  },
  {
    "city": "KABUPATEN MOJOKERTO",
    "state": "JAWA TIMUR",
    "latitude": -7.50421,
    "longitude": 112.5432,
    "population": "783405",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "243"
  },
  {
    "city": "KABUPATEN JOMBANG",
    "state": "JAWA TIMUR",
    "latitude": -7.54684,
    "longitude": 112.22648,
    "population": "107099",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "244"
  },
  {
    "city": "KABUPATEN NGANJUK",
    "state": "JAWA TIMUR",
    "latitude": -7.60293,
    "longitude": 111.90181,
    "population": "242576",
    "growth_from_2000_to_2013": "7.6%",
    "rank": "245"
  },
  {
    "city": "KABUPATEN MADIUN",
    "state": "JAWA TIMUR",
    "latitude": -7.62775,
    "longitude": 111.50548,
    "population": "908382",
    "growth_from_2000_to_2013": "8.3%",
    "rank": "246"
  },
  {
    "city": "KABUPATEN MAGETAN",
    "state": "JAWA TIMUR",
    "latitude": -7.64934,
    "longitude": 111.33816,
    "population": "190181",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "247"
  },
  {
    "city": "KABUPATEN NGAWI",
    "state": "JAWA TIMUR",
    "latitude": -7.38993,
    "longitude": 111.46193,
    "population": "143985",
    "growth_from_2000_to_2013": "2.3%",
    "rank": "248"
  },
  {
    "city": "KABUPATEN BOJONEGORO",
    "state": "JAWA TIMUR",
    "latitude": -7.15353,
    "longitude": 111.88523,
    "population": "416005",
    "growth_from_2000_to_2013": "4.4%",
    "rank": "249"
  },
  {
    "city": "KABUPATEN TUBAN",
    "state": "JAWA TIMUR",
    "latitude": -6.89481,
    "longitude": 112.04184,
    "population": "264171",
    "growth_from_2000_to_2013": "3.3%",
    "rank": "250"
  },
  {
    "city": "KABUPATEN LAMONGAN",
    "state": "JAWA TIMUR",
    "latitude": -7.11826,
    "longitude": 112.41307,
    "population": "815766",
    "growth_from_2000_to_2013": "8.3%",
    "rank": "251"
  },
  {
    "city": "KABUPATEN GRESIK",
    "state": "JAWA TIMUR",
    "latitude": -7.15665,
    "longitude": 112.6555,
    "population": "117944",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "252"
  },
  {
    "city": "KABUPATEN BANGKALAN",
    "state": "JAWA TIMUR",
    "latitude": -7.03069,
    "longitude": 112.74501,
    "population": "733379",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "253"
  },
  {
    "city": "KABUPATEN SAMPANG",
    "state": "JAWA TIMUR",
    "latitude": -7.19119,
    "longitude": 113.24707,
    "population": "819100",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "254"
  },
  {
    "city": "KABUPATEN PAMEKASAN",
    "state": "JAWA TIMUR",
    "latitude": -7.16667,
    "longitude": 113.46667,
    "population": "264373",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "255"
  },
  {
    "city": "KABUPATEN SUMENEP",
    "state": "JAWA TIMUR",
    "latitude": -6.9254,
    "longitude": 113.90606,
    "population": "616968",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "256"
  },
  {
    "city": "KOTA KEDIRI",
    "state": "JAWA TIMUR",
    "latitude": -7.84829,
    "longitude": 112.01875,
    "population": "936891",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "257"
  },
  {
    "city": "KOTA BLITAR",
    "state": "JAWA TIMUR",
    "latitude": -8.0955,
    "longitude": 112.15942,
    "population": "564360",
    "growth_from_2000_to_2013": "9.1%",
    "rank": "258"
  },
  {
    "city": "KOTA MALANG",
    "state": "JAWA TIMUR",
    "latitude": -7.96674,
    "longitude": 112.63178,
    "population": "491761",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "259"
  },
  {
    "city": "KOTA PROBOLINGGO",
    "state": "JAWA TIMUR",
    "latitude": -7.77707,
    "longitude": 113.19804,
    "population": "917327",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "260"
  },
  {
    "city": "KOTA PASURUAN",
    "state": "JAWA TIMUR",
    "latitude": -7.64752,
    "longitude": 112.89839,
    "population": "329787",
    "growth_from_2000_to_2013": "7.1%",
    "rank": "261"
  },
  {
    "city": "KOTA MOJOKERTO",
    "state": "JAWA TIMUR",
    "latitude": -7.47108,
    "longitude": 112.43992,
    "population": "895458",
    "growth_from_2000_to_2013": "4.3%",
    "rank": "262"
  },
  {
    "city": "KOTA MADIUN",
    "state": "JAWA TIMUR",
    "latitude": -7.63023,
    "longitude": 111.52805,
    "population": "162902",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "263"
  },
  {
    "city": "KOTA SURABAYA",
    "state": "JAWA TIMUR",
    "latitude": -7.28917,
    "longitude": 112.7344,
    "population": "798564",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "264"
  },
  {
    "city": "KOTA BATU",
    "state": "JAWA TIMUR",
    "latitude": -7.8671,
    "longitude": 112.5239,
    "population": "351315",
    "growth_from_2000_to_2013": "6.7%",
    "rank": "265"
  },
  {
    "city": "KABUPATEN PANDEGLANG",
    "state": "BANTEN",
    "latitude": -6.31483,
    "longitude": 106.1039,
    "population": "500643",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "266"
  },
  {
    "city": "KABUPATEN LEBAK",
    "state": "BANTEN",
    "latitude": -6.5644,
    "longitude": 106.25221,
    "population": "270812",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "267"
  },
  {
    "city": "KABUPATEN TANGERANG",
    "state": "BANTEN",
    "latitude": -6.16727,
    "longitude": 106.53228,
    "population": "997667",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "268"
  },
  {
    "city": "KABUPATEN SERANG",
    "state": "BANTEN",
    "latitude": -6.04308,
    "longitude": 106.11578,
    "population": "305548",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "269"
  },
  {
    "city": "KOTA TANGERANG",
    "state": "BANTEN",
    "latitude": -6.17634,
    "longitude": 106.63012,
    "population": "736409",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "270"
  },
  {
    "city": "KOTA CILEGON",
    "state": "BANTEN",
    "latitude": -6.01698,
    "longitude": 106.04051,
    "population": "184025",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "271"
  },
  {
    "city": "KOTA SERANG",
    "state": "BANTEN",
    "latitude": -6.11731,
    "longitude": 106.15438,
    "population": "657255",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "272"
  },
  {
    "city": "KOTA TANGERANG SELATAN",
    "state": "BANTEN",
    "latitude": -6.28621,
    "longitude": 106.71105,
    "population": "630524",
    "growth_from_2000_to_2013": "1.2%",
    "rank": "273"
  },
  {
    "city": "KABUPATEN JEMBRANA",
    "state": "BALI",
    "latitude": -8.36185,
    "longitude": 114.6418,
    "population": "767607",
    "growth_from_2000_to_2013": "8.6%",
    "rank": "274"
  },
  {
    "city": "KABUPATEN TABANAN",
    "state": "BALI",
    "latitude": -8.54452,
    "longitude": 115.12418,
    "population": "897413",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "275"
  },
  {
    "city": "KABUPATEN BADUNG",
    "state": "BALI",
    "latitude": -8.58193,
    "longitude": 115.17706,
    "population": "337721",
    "growth_from_2000_to_2013": "0.0%",
    "rank": "276"
  },
  {
    "city": "KABUPATEN GIANYAR",
    "state": "BALI",
    "latitude": -8.53724,
    "longitude": 115.32932,
    "population": "148376",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "277"
  },
  {
    "city": "KABUPATEN KLUNGKUNG",
    "state": "BALI",
    "latitude": -8.53892,
    "longitude": 115.40451,
    "population": "153535",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "278"
  },
  {
    "city": "KABUPATEN BANGLI",
    "state": "BALI",
    "latitude": -8.4543,
    "longitude": 115.3549,
    "population": "783895",
    "growth_from_2000_to_2013": "0.4%",
    "rank": "279"
  },
  {
    "city": "KABUPATEN KARANG ASEM",
    "state": "BALI",
    "latitude": -6.39961,
    "longitude": 108.0503,
    "population": "643079",
    "growth_from_2000_to_2013": "7.1%",
    "rank": "280"
  },
  {
    "city": "KABUPATEN BULELENG",
    "state": "BALI",
    "latitude": -8.11383,
    "longitude": 115.127,
    "population": "686379",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "281"
  },
  {
    "city": "KOTA DENPASAR",
    "state": "BALI",
    "latitude": -8.65629,
    "longitude": 115.2221,
    "population": "241870",
    "growth_from_2000_to_2013": "4.3%",
    "rank": "282"
  },
  {
    "city": "KABUPATEN LOMBOK BARAT",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.64646,
    "longitude": 116.11231,
    "population": "330977",
    "growth_from_2000_to_2013": "7.7%",
    "rank": "283"
  },
  {
    "city": "KABUPATEN LOMBOK TENGAH",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.69462,
    "longitude": 116.27771,
    "population": "488943",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "284"
  },
  {
    "city": "KABUPATEN LOMBOK TIMUR",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.51345,
    "longitude": 116.56099,
    "population": "317421",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "285"
  },
  {
    "city": "KABUPATEN SUMBAWA",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.65293,
    "longitude": 117.36165,
    "population": "552295",
    "growth_from_2000_to_2013": "5.3%",
    "rank": "286"
  },
  {
    "city": "KABUPATEN DOMPU",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.49663,
    "longitude": 118.47472,
    "population": "602131",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "287"
  },
  {
    "city": "KABUPATEN BIMA",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.45506,
    "longitude": 118.53643,
    "population": "907689",
    "growth_from_2000_to_2013": "9.5%",
    "rank": "288"
  },
  {
    "city": "KABUPATEN SUMBAWA BARAT",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.92929,
    "longitude": 116.89103,
    "population": "709107",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "289"
  },
  {
    "city": "KABUPATEN LOMBOK UTARA",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.37391,
    "longitude": 116.27771,
    "population": "140134",
    "growth_from_2000_to_2013": "8.5%",
    "rank": "290"
  },
  {
    "city": "KOTA MATARAM",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.58333,
    "longitude": 116.11667,
    "population": "299137",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "291"
  },
  {
    "city": "KOTA BIMA",
    "state": "NUSA TENGGARA BARAT",
    "latitude": -8.46347,
    "longitude": 118.74303,
    "population": "889569",
    "growth_from_2000_to_2013": "6.5%",
    "rank": "292"
  },
  {
    "city": "KABUPATEN SUMBA BARAT",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.65483,
    "longitude": 119.39471,
    "population": "582198",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "293"
  },
  {
    "city": "KABUPATEN SUMBA TIMUR",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.98021,
    "longitude": 120.34355,
    "population": "403646",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "294"
  },
  {
    "city": "KABUPATEN KUPANG",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -10.07183,
    "longitude": 123.86499,
    "population": "446366",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "295"
  },
  {
    "city": "KABUPATEN TIMOR TENGAH SELATAN",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.77628,
    "longitude": 124.41982,
    "population": "492800",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "296"
  },
  {
    "city": "KABUPATEN TIMOR TENGAH UTARA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.45226,
    "longitude": 124.59713,
    "population": "957992",
    "growth_from_2000_to_2013": "8.0%",
    "rank": "297"
  },
  {
    "city": "KABUPATEN BELU",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.41258,
    "longitude": 124.95066,
    "population": "736559",
    "growth_from_2000_to_2013": "9.7%",
    "rank": "298"
  },
  {
    "city": "KABUPATEN ALOR",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.2754,
    "longitude": 124.72988,
    "population": "898200",
    "growth_from_2000_to_2013": "3.4%",
    "rank": "299"
  },
  {
    "city": "KABUPATEN LEMBATA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.47191,
    "longitude": 123.48319,
    "population": "552004",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "300"
  },
  {
    "city": "KABUPATEN FLORES TIMUR",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.31309,
    "longitude": 122.9663,
    "population": "667657",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "301"
  },
  {
    "city": "KABUPATEN SIKKA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.67662,
    "longitude": 122.12918,
    "population": "819711",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "302"
  },
  {
    "city": "KABUPATEN ENDE",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.85405,
    "longitude": 121.6542,
    "population": "260914",
    "growth_from_2000_to_2013": "0.5%",
    "rank": "303"
  },
  {
    "city": "KABUPATEN NGADA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.74304,
    "longitude": 120.98763,
    "population": "691601",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "304"
  },
  {
    "city": "KABUPATEN MANGGARAI",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.6797,
    "longitude": 120.38967,
    "population": "720291",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "305"
  },
  {
    "city": "KABUPATEN ROTE NDAO",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -10.73864,
    "longitude": 123.1239,
    "population": "407110",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "306"
  },
  {
    "city": "KABUPATEN MANGGARAI BARAT",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.66881,
    "longitude": 120.06652,
    "population": "724936",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "307"
  },
  {
    "city": "KABUPATEN SUMBA TENGAH",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.48792,
    "longitude": 119.69627,
    "population": "525656",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "308"
  },
  {
    "city": "KABUPATEN SUMBA BARAT DAYA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.53914,
    "longitude": 119.13906,
    "population": "654771",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "309"
  },
  {
    "city": "KABUPATEN NAGEKEO",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.67535,
    "longitude": 121.30841,
    "population": "169331",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "310"
  },
  {
    "city": "KABUPATEN MANGGARAI TIMUR",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -8.62067,
    "longitude": 120.61999,
    "population": "633298",
    "growth_from_2000_to_2013": "7.7%",
    "rank": "311"
  },
  {
    "city": "KABUPATEN SABU RAIJUA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -10.55411,
    "longitude": 121.83349,
    "population": "864952",
    "growth_from_2000_to_2013": "4.6%",
    "rank": "312"
  },
  {
    "city": "KABUPATEN MALAKA",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -9.5309,
    "longitude": 124.9066,
    "population": "917689",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "313"
  },
  {
    "city": "KOTA KUPANG",
    "state": "NUSA TENGGARA TIMUR",
    "latitude": -10.17414,
    "longitude": 123.61184,
    "population": "227368",
    "growth_from_2000_to_2013": "7.2%",
    "rank": "314"
  },
  {
    "city": "KABUPATEN SAMBAS",
    "state": "KALIMANTAN BARAT",
    "latitude": 1.36133,
    "longitude": 109.30036,
    "population": "736672",
    "growth_from_2000_to_2013": "2.1%",
    "rank": "315"
  },
  {
    "city": "KABUPATEN BENGKAYANG",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.82097,
    "longitude": 109.4777,
    "population": "809131",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "316"
  },
  {
    "city": "KABUPATEN LANDAK",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.42373,
    "longitude": 109.75917,
    "population": "999728",
    "growth_from_2000_to_2013": "2.7%",
    "rank": "317"
  },
  {
    "city": "KABUPATEN MEMPAWAH",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.3897,
    "longitude": 109.1404,
    "population": "999667",
    "growth_from_2000_to_2013": "5.6%",
    "rank": "318"
  },
  {
    "city": "KABUPATEN SANGGAU",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.11928,
    "longitude": 110.5973,
    "population": "784206",
    "growth_from_2000_to_2013": "3.6%",
    "rank": "319"
  },
  {
    "city": "KABUPATEN KETAPANG",
    "state": "KALIMANTAN BARAT",
    "latitude": -1.8591,
    "longitude": 109.9719,
    "population": "888785",
    "growth_from_2000_to_2013": "9.1%",
    "rank": "320"
  },
  {
    "city": "KABUPATEN SINTANG",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.08024,
    "longitude": 111.4955,
    "population": "711581",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "321"
  },
  {
    "city": "KABUPATEN KAPUAS HULU",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.85192,
    "longitude": 112.93131,
    "population": "658716",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "322"
  },
  {
    "city": "KABUPATEN SEKADAU",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.01564,
    "longitude": 110.8886,
    "population": "672154",
    "growth_from_2000_to_2013": "4.2%",
    "rank": "323"
  },
  {
    "city": "KABUPATEN MELAWI",
    "state": "KALIMANTAN BARAT",
    "latitude": -0.70007,
    "longitude": 111.66607,
    "population": "140759",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "324"
  },
  {
    "city": "KABUPATEN KAYONG UTARA",
    "state": "KALIMANTAN BARAT",
    "latitude": -0.92259,
    "longitude": 110.04497,
    "population": "981465",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "325"
  },
  {
    "city": "KABUPATEN KUBU RAYA",
    "state": "KALIMANTAN BARAT",
    "latitude": -0.35339,
    "longitude": 109.47351,
    "population": "599972",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "326"
  },
  {
    "city": "KOTA PONTIANAK",
    "state": "KALIMANTAN BARAT",
    "latitude": -0.02252,
    "longitude": 109.33031,
    "population": "257754",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "327"
  },
  {
    "city": "KOTA SINGKAWANG",
    "state": "KALIMANTAN BARAT",
    "latitude": 0.9088,
    "longitude": 108.9846,
    "population": "306019",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "328"
  },
  {
    "city": "KABUPATEN KOTAWARINGIN BARAT",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.6767,
    "longitude": 111.62622,
    "population": "314344",
    "growth_from_2000_to_2013": "0.8%",
    "rank": "329"
  },
  {
    "city": "KABUPATEN KOTAWARINGIN TIMUR",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.53939,
    "longitude": 112.95932,
    "population": "442884",
    "growth_from_2000_to_2013": "8.3%",
    "rank": "330"
  },
  {
    "city": "KABUPATEN KAPUAS",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.87169,
    "longitude": 114.38179,
    "population": "324490",
    "growth_from_2000_to_2013": "3.4%",
    "rank": "331"
  },
  {
    "city": "KABUPATEN BARITO SELATAN",
    "state": "KALIMANTAN TENGAH",
    "latitude": -1.87594,
    "longitude": 114.80927,
    "population": "102304",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "332"
  },
  {
    "city": "KABUPATEN BARITO UTARA",
    "state": "KALIMANTAN TENGAH",
    "latitude": -0.95871,
    "longitude": 115.09405,
    "population": "210052",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "333"
  },
  {
    "city": "KABUPATEN SUKAMARA",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.62675,
    "longitude": 111.23681,
    "population": "467376",
    "growth_from_2000_to_2013": "5.5%",
    "rank": "334"
  },
  {
    "city": "KABUPATEN LAMANDAU",
    "state": "KALIMANTAN TENGAH",
    "latitude": -1.92692,
    "longitude": 111.18912,
    "population": "857430",
    "growth_from_2000_to_2013": "8.1%",
    "rank": "335"
  },
  {
    "city": "KABUPATEN SERUYAN",
    "state": "KALIMANTAN TENGAH",
    "latitude": -3.01235,
    "longitude": 112.42915,
    "population": "529801",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "336"
  },
  {
    "city": "KABUPATEN KATINGAN",
    "state": "KALIMANTAN TENGAH",
    "latitude": -1.87189,
    "longitude": 113.41167,
    "population": "996546",
    "growth_from_2000_to_2013": "7.4%",
    "rank": "337"
  },
  {
    "city": "KABUPATEN PULANG PISAU",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.68496,
    "longitude": 113.95365,
    "population": "480612",
    "growth_from_2000_to_2013": "7.7%",
    "rank": "338"
  },
  {
    "city": "KABUPATEN GUNUNG MAS",
    "state": "KALIMANTAN TENGAH",
    "latitude": -6.70528,
    "longitude": 106.99139,
    "population": "194507",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "339"
  },
  {
    "city": "KABUPATEN BARITO TIMUR",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.0124,
    "longitude": 115.18892,
    "population": "123296",
    "growth_from_2000_to_2013": "0.4%",
    "rank": "340"
  },
  {
    "city": "KABUPATEN MURUNG RAYA",
    "state": "KALIMANTAN TENGAH",
    "latitude": -0.13622,
    "longitude": 114.33414,
    "population": "518508",
    "growth_from_2000_to_2013": "3.5%",
    "rank": "341"
  },
  {
    "city": "KOTA PALANGKA RAYA",
    "state": "KALIMANTAN TENGAH",
    "latitude": -2.21605,
    "longitude": 113.91059,
    "population": "696491",
    "growth_from_2000_to_2013": "2.8%",
    "rank": "342"
  },
  {
    "city": "KABUPATEN TANAH LAUT",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.7694,
    "longitude": 114.80927,
    "population": "327826",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "343"
  },
  {
    "city": "KABUPATEN KOTA BARU",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.65099,
    "longitude": 116.18746,
    "population": "760882",
    "growth_from_2000_to_2013": "0.5%",
    "rank": "344"
  },
  {
    "city": "KABUPATEN BANJAR",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.41101,
    "longitude": 114.84438,
    "population": "353777",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "345"
  },
  {
    "city": "KABUPATEN BARITO KUALA",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.07147,
    "longitude": 114.66679,
    "population": "285540",
    "growth_from_2000_to_2013": "3.3%",
    "rank": "346"
  },
  {
    "city": "KABUPATEN TAPIN",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.91607,
    "longitude": 115.0466,
    "population": "554867",
    "growth_from_2000_to_2013": "7.8%",
    "rank": "347"
  },
  {
    "city": "KABUPATEN HULU SUNGAI SELATAN",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.76627,
    "longitude": 115.23634,
    "population": "628737",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "348"
  },
  {
    "city": "KABUPATEN HULU SUNGAI TENGAH",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.61532,
    "longitude": 115.52074,
    "population": "831906",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "349"
  },
  {
    "city": "KABUPATEN HULU SUNGAI UTARA",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.44212,
    "longitude": 115.18892,
    "population": "598114",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "350"
  },
  {
    "city": "KABUPATEN TABALONG",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.16405,
    "longitude": 115.38353,
    "population": "249830",
    "growth_from_2000_to_2013": "0.6%",
    "rank": "351"
  },
  {
    "city": "KABUPATEN TANAH BUMBU",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.45122,
    "longitude": 115.94716,
    "population": "712632",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "352"
  },
  {
    "city": "KABUPATEN BALANGAN",
    "state": "KALIMANTAN SELATAN",
    "latitude": -2.32604,
    "longitude": 115.61547,
    "population": "449381",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "353"
  },
  {
    "city": "KOTA BANJARMASIN",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.3285,
    "longitude": 114.5892,
    "population": "489192",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "354"
  },
  {
    "city": "KOTA BANJAR BARU",
    "state": "KALIMANTAN SELATAN",
    "latitude": -3.43978,
    "longitude": 114.82562,
    "population": "847569",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "355"
  },
  {
    "city": "KABUPATEN PASER",
    "state": "KALIMANTAN TIMUR",
    "latitude": -1.71753,
    "longitude": 115.9468,
    "population": "245360",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "356"
  },
  {
    "city": "KABUPATEN KUTAI BARAT",
    "state": "KALIMANTAN TIMUR",
    "latitude": 0.13539,
    "longitude": 115.09405,
    "population": "564171",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "357"
  },
  {
    "city": "KABUPATEN KUTAI KARTANEGARA",
    "state": "KALIMANTAN TIMUR",
    "latitude": -0.13367,
    "longitude": 116.60817,
    "population": "144429",
    "growth_from_2000_to_2013": "7.6%",
    "rank": "358"
  },
  {
    "city": "KABUPATEN KUTAI TIMUR",
    "state": "KALIMANTAN TIMUR",
    "latitude": 0.94338,
    "longitude": 116.98524,
    "population": "561490",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "359"
  },
  {
    "city": "KABUPATEN BERAU",
    "state": "KALIMANTAN TIMUR",
    "latitude": 2.04509,
    "longitude": 117.36165,
    "population": "211132",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "360"
  },
  {
    "city": "KABUPATEN PENAJAM PASER UTARA",
    "state": "KALIMANTAN TIMUR",
    "latitude": -1.29171,
    "longitude": 116.5138,
    "population": "194172",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "361"
  },
  {
    "city": "KABUPATEN MAHAKAM HULU",
    "state": "KALIMANTAN TIMUR",
    "latitude": 0.51412,
    "longitude": 115.27025,
    "population": "300055",
    "growth_from_2000_to_2013": "0.6%",
    "rank": "362"
  },
  {
    "city": "KOTA BALIKPAPAN",
    "state": "KALIMANTAN TIMUR",
    "latitude": -1.26354,
    "longitude": 116.82788,
    "population": "260098",
    "growth_from_2000_to_2013": "8.8%",
    "rank": "363"
  },
  {
    "city": "KOTA SAMARINDA",
    "state": "KALIMANTAN TIMUR",
    "latitude": -0.50218,
    "longitude": 117.1538,
    "population": "418874",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "364"
  },
  {
    "city": "KOTA BONTANG",
    "state": "KALIMANTAN TIMUR",
    "latitude": 0.11993,
    "longitude": 117.47938,
    "population": "199782",
    "growth_from_2000_to_2013": "9.2%",
    "rank": "365"
  },
  {
    "city": "KABUPATEN MALINAU",
    "state": "KALIMANTAN UTARA",
    "latitude": 3.58422,
    "longitude": 116.6478,
    "population": "154255",
    "growth_from_2000_to_2013": "6.5%",
    "rank": "366"
  },
  {
    "city": "KABUPATEN BULUNGAN",
    "state": "KALIMANTAN UTARA",
    "latitude": 2.90425,
    "longitude": 116.98524,
    "population": "173364",
    "growth_from_2000_to_2013": "0.8%",
    "rank": "367"
  },
  {
    "city": "KABUPATEN TANA TIDUNG",
    "state": "KALIMANTAN UTARA",
    "latitude": 3.55187,
    "longitude": 117.07941,
    "population": "933803",
    "growth_from_2000_to_2013": "5.0%",
    "rank": "368"
  },
  {
    "city": "KABUPATEN NUNUKAN",
    "state": "KALIMANTAN UTARA",
    "latitude": 4.06092,
    "longitude": 117.66695,
    "population": "834560",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "369"
  },
  {
    "city": "KOTA TARAKAN",
    "state": "KALIMANTAN UTARA",
    "latitude": 3.32602,
    "longitude": 117.5777,
    "population": "593222",
    "growth_from_2000_to_2013": "7.3%",
    "rank": "370"
  },
  {
    "city": "KABUPATEN BOLAANG MONGONDOW",
    "state": "SULAWESI UTARA",
    "latitude": 0.6871,
    "longitude": 124.06414,
    "population": "203926",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "371"
  },
  {
    "city": "KABUPATEN MINAHASA",
    "state": "SULAWESI UTARA",
    "latitude": 1.30195,
    "longitude": 124.91329,
    "population": "575768",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "372"
  },
  {
    "city": "KABUPATEN KEPULAUAN SANGIHE",
    "state": "SULAWESI UTARA",
    "latitude": 3.53032,
    "longitude": 125.5439,
    "population": "143909",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "373"
  },
  {
    "city": "KABUPATEN KEPULAUAN TALAUD",
    "state": "SULAWESI UTARA",
    "latitude": 4.092,
    "longitude": 126.768,
    "population": "316905",
    "growth_from_2000_to_2013": "7.2%",
    "rank": "374"
  },
  {
    "city": "KABUPATEN MINAHASA SELATAN",
    "state": "SULAWESI UTARA",
    "latitude": 1.09468,
    "longitude": 124.46418,
    "population": "235987",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "375"
  },
  {
    "city": "KABUPATEN MINAHASA UTARA",
    "state": "SULAWESI UTARA",
    "latitude": 1.5328,
    "longitude": 124.99475,
    "population": "283478",
    "growth_from_2000_to_2013": "2.6%",
    "rank": "376"
  },
  {
    "city": "KABUPATEN BOLAANG MONGONDOW UTARA",
    "state": "SULAWESI UTARA",
    "latitude": 0.81869,
    "longitude": 123.52801,
    "population": "677001",
    "growth_from_2000_to_2013": "0.9%",
    "rank": "377"
  },
  {
    "city": "KABUPATEN SIAU TAGULANDANG BIARO",
    "state": "SULAWESI UTARA",
    "latitude": 2.34596,
    "longitude": 125.41244,
    "population": "622383",
    "growth_from_2000_to_2013": "6.0%",
    "rank": "378"
  },
  {
    "city": "KABUPATEN MINAHASA TENGGARA",
    "state": "SULAWESI UTARA",
    "latitude": 1.02786,
    "longitude": 124.72988,
    "population": "639557",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "379"
  },
  {
    "city": "KABUPATEN BOLAANG MONGONDOW SELATAN",
    "state": "SULAWESI UTARA",
    "latitude": 0.4053,
    "longitude": 123.8411,
    "population": "399746",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "380"
  },
  {
    "city": "KABUPATEN BOLAANG MONGONDOW TIMUR",
    "state": "SULAWESI UTARA",
    "latitude": 0.7153,
    "longitude": 124.4642,
    "population": "702651",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "381"
  },
  {
    "city": "KOTA MANADO",
    "state": "SULAWESI UTARA",
    "latitude": 1.4917,
    "longitude": 124.84284,
    "population": "104051",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "382"
  },
  {
    "city": "KOTA BITUNG",
    "state": "SULAWESI UTARA",
    "latitude": 1.45535,
    "longitude": 125.2047,
    "population": "784090",
    "growth_from_2000_to_2013": "8.7%",
    "rank": "383"
  },
  {
    "city": "KOTA TOMOHON",
    "state": "SULAWESI UTARA",
    "latitude": 1.32341,
    "longitude": 124.83845,
    "population": "122733",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "384"
  },
  {
    "city": "KOTA KOTAMOBAGU",
    "state": "SULAWESI UTARA",
    "latitude": 0.73333,
    "longitude": 124.31667,
    "population": "250705",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "385"
  },
  {
    "city": "KABUPATEN BANGGAI KEPULAUAN",
    "state": "SULAWESI TENGAH",
    "latitude": -1.36872,
    "longitude": 123.16867,
    "population": "463612",
    "growth_from_2000_to_2013": "1.7%",
    "rank": "386"
  },
  {
    "city": "KABUPATEN BANGGAI",
    "state": "SULAWESI TENGAH",
    "latitude": -0.93818,
    "longitude": 122.79184,
    "population": "260838",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "387"
  },
  {
    "city": "KABUPATEN MOROWALI",
    "state": "SULAWESI TENGAH",
    "latitude": -2.30031,
    "longitude": 121.93497,
    "population": "686900",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "388"
  },
  {
    "city": "KABUPATEN POSO",
    "state": "SULAWESI TENGAH",
    "latitude": -1.39192,
    "longitude": 120.767,
    "population": "634612",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "389"
  },
  {
    "city": "KABUPATEN DONGGALA",
    "state": "SULAWESI TENGAH",
    "latitude": -0.42332,
    "longitude": 119.83523,
    "population": "295001",
    "growth_from_2000_to_2013": "8.8%",
    "rank": "390"
  },
  {
    "city": "KABUPATEN TOLI-TOLI",
    "state": "SULAWESI TENGAH",
    "latitude": 0.87682,
    "longitude": 120.75798,
    "population": "852700",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "391"
  },
  {
    "city": "KABUPATEN BUOL",
    "state": "SULAWESI TENGAH",
    "latitude": 0.96955,
    "longitude": 121.35416,
    "population": "535214",
    "growth_from_2000_to_2013": "4.1%",
    "rank": "392"
  },
  {
    "city": "KABUPATEN PARIGI MOUTONG",
    "state": "SULAWESI TENGAH",
    "latitude": 0.58176,
    "longitude": 120.80395,
    "population": "760011",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "393"
  },
  {
    "city": "KABUPATEN TOJO UNA-UNA",
    "state": "SULAWESI TENGAH",
    "latitude": -0.86865,
    "longitude": 121.58473,
    "population": "373251",
    "growth_from_2000_to_2013": "1.1%",
    "rank": "394"
  },
  {
    "city": "KABUPATEN SIGI",
    "state": "SULAWESI TENGAH",
    "latitude": -1.38341,
    "longitude": 120.06652,
    "population": "802627",
    "growth_from_2000_to_2013": "8.3%",
    "rank": "395"
  },
  {
    "city": "KABUPATEN BANGGAI LAUT",
    "state": "SULAWESI TENGAH",
    "latitude": -1.6735,
    "longitude": 123.5504,
    "population": "710088",
    "growth_from_2000_to_2013": "9.9%",
    "rank": "396"
  },
  {
    "city": "KABUPATEN MOROWALI UTARA",
    "state": "SULAWESI TENGAH",
    "latitude": -1.6312,
    "longitude": 121.3542,
    "population": "561652",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "397"
  },
  {
    "city": "KOTA PALU",
    "state": "SULAWESI TENGAH",
    "latitude": -0.89858,
    "longitude": 119.8506,
    "population": "978723",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "398"
  },
  {
    "city": "KABUPATEN KEPULAUAN SELAYAR",
    "state": "SULAWESI SELATAN",
    "latitude": -6.287,
    "longitude": 120.5049,
    "population": "798700",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "399"
  },
  {
    "city": "KABUPATEN BULUKUMBA",
    "state": "SULAWESI SELATAN",
    "latitude": -5.43294,
    "longitude": 120.20511,
    "population": "531354",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "400"
  },
  {
    "city": "KABUPATEN BANTAENG",
    "state": "SULAWESI SELATAN",
    "latitude": -5.51693,
    "longitude": 120.0203,
    "population": "874695",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "401"
  },
  {
    "city": "KABUPATEN JENEPONTO",
    "state": "SULAWESI SELATAN",
    "latitude": -5.55458,
    "longitude": 119.67309,
    "population": "693541",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "402"
  },
  {
    "city": "KABUPATEN TAKALAR",
    "state": "SULAWESI SELATAN",
    "latitude": -5.41625,
    "longitude": 119.48757,
    "population": "179117",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "403"
  },
  {
    "city": "KABUPATEN GOWA",
    "state": "SULAWESI SELATAN",
    "latitude": -5.31029,
    "longitude": 119.7426,
    "population": "953564",
    "growth_from_2000_to_2013": "0.4%",
    "rank": "404"
  },
  {
    "city": "KABUPATEN SINJAI",
    "state": "SULAWESI SELATAN",
    "latitude": -5.2172,
    "longitude": 120.11274,
    "population": "856996",
    "growth_from_2000_to_2013": "5.2%",
    "rank": "405"
  },
  {
    "city": "KABUPATEN MAROS",
    "state": "SULAWESI SELATAN",
    "latitude": -4.94695,
    "longitude": 119.5789,
    "population": "204733",
    "growth_from_2000_to_2013": "4.2%",
    "rank": "406"
  },
  {
    "city": "KABUPATEN PANGKAJENE DAN KEPULAUAN",
    "state": "SULAWESI SELATAN",
    "latitude": -4.80504,
    "longitude": 119.55717,
    "population": "731614",
    "growth_from_2000_to_2013": "0.3%",
    "rank": "407"
  },
  {
    "city": "KABUPATEN BARRU",
    "state": "SULAWESI SELATAN",
    "latitude": -4.41727,
    "longitude": 119.67309,
    "population": "684285",
    "growth_from_2000_to_2013": "9.6%",
    "rank": "408"
  },
  {
    "city": "KABUPATEN BONE",
    "state": "SULAWESI SELATAN",
    "latitude": -2.08333,
    "longitude": 120.21667,
    "population": "280709",
    "growth_from_2000_to_2013": "2.9%",
    "rank": "409"
  },
  {
    "city": "KABUPATEN SOPPENG",
    "state": "SULAWESI SELATAN",
    "latitude": -4.35185,
    "longitude": 119.92779,
    "population": "765923",
    "growth_from_2000_to_2013": "8.6%",
    "rank": "410"
  },
  {
    "city": "KABUPATEN WAJO",
    "state": "SULAWESI SELATAN",
    "latitude": -4.02223,
    "longitude": 120.06652,
    "population": "982583",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "411"
  },
  {
    "city": "KABUPATEN SIDENRENG RAPPANG",
    "state": "SULAWESI SELATAN",
    "latitude": -3.7739,
    "longitude": 120.0203,
    "population": "351789",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "412"
  },
  {
    "city": "KABUPATEN PINRANG",
    "state": "SULAWESI SELATAN",
    "latitude": -3.79307,
    "longitude": 119.6408,
    "population": "713843",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "413"
  },
  {
    "city": "KABUPATEN ENREKANG",
    "state": "SULAWESI SELATAN",
    "latitude": -3.56313,
    "longitude": 119.7612,
    "population": "630098",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "414"
  },
  {
    "city": "KABUPATEN LUWU",
    "state": "SULAWESI SELATAN",
    "latitude": -3.30522,
    "longitude": 120.25127,
    "population": "505937",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "415"
  },
  {
    "city": "KABUPATEN TANA TORAJA",
    "state": "SULAWESI SELATAN",
    "latitude": -3.0753,
    "longitude": 119.7426,
    "population": "496760",
    "growth_from_2000_to_2013": "2.2%",
    "rank": "416"
  },
  {
    "city": "KABUPATEN LUWU UTARA",
    "state": "SULAWESI SELATAN",
    "latitude": -2.26904,
    "longitude": 119.97405,
    "population": "823198",
    "growth_from_2000_to_2013": "0.0%",
    "rank": "417"
  },
  {
    "city": "KABUPATEN LUWU TIMUR",
    "state": "SULAWESI SELATAN",
    "latitude": -2.58255,
    "longitude": 121.17104,
    "population": "714628",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "418"
  },
  {
    "city": "KABUPATEN TORAJA UTARA",
    "state": "SULAWESI SELATAN",
    "latitude": -2.86219,
    "longitude": 119.83523,
    "population": "476330",
    "growth_from_2000_to_2013": "5.7%",
    "rank": "419"
  },
  {
    "city": "KOTA MAKASSAR",
    "state": "SULAWESI SELATAN",
    "latitude": -5.13333,
    "longitude": 119.41667,
    "population": "748202",
    "growth_from_2000_to_2013": "4.6%",
    "rank": "420"
  },
  {
    "city": "KOTA PAREPARE",
    "state": "SULAWESI SELATAN",
    "latitude": -4.0096,
    "longitude": 119.6291,
    "population": "993791",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "421"
  },
  {
    "city": "KOTA PALOPO",
    "state": "SULAWESI SELATAN",
    "latitude": -3.00212,
    "longitude": 120.19809,
    "population": "306422",
    "growth_from_2000_to_2013": "7.0%",
    "rank": "422"
  },
  {
    "city": "KABUPATEN BUTON",
    "state": "SULAWESI TENGGARA",
    "latitude": -5.30964,
    "longitude": 122.98883,
    "population": "343454",
    "growth_from_2000_to_2013": "6.6%",
    "rank": "423"
  },
  {
    "city": "KABUPATEN MUNA",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.83225,
    "longitude": 122.72062,
    "population": "951466",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "424"
  },
  {
    "city": "KABUPATEN KONAWE",
    "state": "SULAWESI TENGGARA",
    "latitude": -3.85473,
    "longitude": 122.04333,
    "population": "318611",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "425"
  },
  {
    "city": "KABUPATEN KOLAKA",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.04967,
    "longitude": 121.5938,
    "population": "195488",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "426"
  },
  {
    "city": "KABUPATEN KONAWE SELATAN",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.20279,
    "longitude": 122.44672,
    "population": "588771",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "427"
  },
  {
    "city": "KABUPATEN BOMBANA",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.65435,
    "longitude": 121.9018,
    "population": "864926",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "428"
  },
  {
    "city": "KABUPATEN WAKATOBI",
    "state": "SULAWESI TENGGARA",
    "latitude": -5.32644,
    "longitude": 123.59519,
    "population": "668315",
    "growth_from_2000_to_2013": "3.6%",
    "rank": "429"
  },
  {
    "city": "KABUPATEN KOLAKA UTARA",
    "state": "SULAWESI TENGGARA",
    "latitude": -3.13472,
    "longitude": 121.17104,
    "population": "708134",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "430"
  },
  {
    "city": "KABUPATEN BUTON UTARA",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.70234,
    "longitude": 123.03388,
    "population": "926593",
    "growth_from_2000_to_2013": "2.2%",
    "rank": "431"
  },
  {
    "city": "KABUPATEN KONAWE UTARA",
    "state": "SULAWESI TENGGARA",
    "latitude": -3.51208,
    "longitude": 122.11101,
    "population": "493588",
    "growth_from_2000_to_2013": "1.2%",
    "rank": "432"
  },
  {
    "city": "KABUPATEN KOLAKA TIMUR",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.2279,
    "longitude": 121.9018,
    "population": "208473",
    "growth_from_2000_to_2013": "3.8%",
    "rank": "433"
  },
  {
    "city": "KABUPATEN KONAWE KEPULAUAN",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.1361,
    "longitude": 123.1239,
    "population": "609769",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "434"
  },
  {
    "city": "KABUPATEN MUNA BARAT",
    "state": "SULAWESI TENGGARA",
    "latitude": -4.78957,
    "longitude": 122.49816,
    "population": "680450",
    "growth_from_2000_to_2013": "0.4%",
    "rank": "435"
  },
  {
    "city": "KABUPATEN BUTON TENGAH",
    "state": "SULAWESI TENGGARA",
    "latitude": -5.3891,
    "longitude": 122.5599,
    "population": "481726",
    "growth_from_2000_to_2013": "0.3%",
    "rank": "436"
  },
  {
    "city": "KABUPATEN BUTON SELATAN",
    "state": "SULAWESI TENGGARA",
    "latitude": -5.60681,
    "longitude": 122.6179,
    "population": "892076",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "437"
  },
  {
    "city": "KOTA KENDARI",
    "state": "SULAWESI TENGGARA",
    "latitude": -3.9722,
    "longitude": 122.5149,
    "population": "347125",
    "growth_from_2000_to_2013": "9.2%",
    "rank": "438"
  },
  {
    "city": "KOTA BAUBAU",
    "state": "SULAWESI TENGGARA",
    "latitude": -5.50588,
    "longitude": 122.60136,
    "population": "539898",
    "growth_from_2000_to_2013": "7.1%",
    "rank": "439"
  },
  {
    "city": "KABUPATEN BOALEMO",
    "state": "GORONTALO",
    "latitude": 0.70134,
    "longitude": 122.26539,
    "population": "633776",
    "growth_from_2000_to_2013": "5.8%",
    "rank": "440"
  },
  {
    "city": "KABUPATEN GORONTALO",
    "state": "GORONTALO",
    "latitude": 0.66354,
    "longitude": 122.96392,
    "population": "211397",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "441"
  },
  {
    "city": "KABUPATEN POHUWATO",
    "state": "GORONTALO",
    "latitude": 0.70553,
    "longitude": 121.71955,
    "population": "706720",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "442"
  },
  {
    "city": "KABUPATEN BONE BOLANGO",
    "state": "GORONTALO",
    "latitude": 0.56579,
    "longitude": 123.34861,
    "population": "195012",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "443"
  },
  {
    "city": "KABUPATEN GORONTALO UTARA",
    "state": "GORONTALO",
    "latitude": 0.92526,
    "longitude": 122.49201,
    "population": "327591",
    "growth_from_2000_to_2013": "4.0%",
    "rank": "444"
  },
  {
    "city": "KOTA GORONTALO",
    "state": "GORONTALO",
    "latitude": 0.53333,
    "longitude": 123.06667,
    "population": "767916",
    "growth_from_2000_to_2013": "2.0%",
    "rank": "445"
  },
  {
    "city": "KABUPATEN MAJENE",
    "state": "SULAWESI BARAT",
    "latitude": -3.02973,
    "longitude": 118.90628,
    "population": "885492",
    "growth_from_2000_to_2013": "5.9%",
    "rank": "446"
  },
  {
    "city": "KABUPATEN POLEWALI MANDAR",
    "state": "SULAWESI BARAT",
    "latitude": -3.34193,
    "longitude": 119.13906,
    "population": "256203",
    "growth_from_2000_to_2013": "7.2%",
    "rank": "447"
  },
  {
    "city": "KABUPATEN MAMASA",
    "state": "SULAWESI BARAT",
    "latitude": -2.96013,
    "longitude": 119.3682,
    "population": "917004",
    "growth_from_2000_to_2013": "3.6%",
    "rank": "448"
  },
  {
    "city": "KABUPATEN MAMUJU",
    "state": "SULAWESI BARAT",
    "latitude": -2.72934,
    "longitude": 118.92957,
    "population": "608905",
    "growth_from_2000_to_2013": "3.2%",
    "rank": "449"
  },
  {
    "city": "KABUPATEN MAMUJU UTARA",
    "state": "SULAWESI BARAT",
    "latitude": -1.52645,
    "longitude": 119.51077,
    "population": "746942",
    "growth_from_2000_to_2013": "2.7%",
    "rank": "450"
  },
  {
    "city": "KABUPATEN MAMUJU TENGAH",
    "state": "SULAWESI BARAT",
    "latitude": -1.9354,
    "longitude": 119.5108,
    "population": "653133",
    "growth_from_2000_to_2013": "0.2%",
    "rank": "451"
  },
  {
    "city": "KABUPATEN MALUKU TENGGARA BARAT",
    "state": "MALUKU",
    "latitude": -7.98349,
    "longitude": 131.3023,
    "population": "402287",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "452"
  },
  {
    "city": "KABUPATEN MALUKU TENGGARA",
    "state": "MALUKU",
    "latitude": -5.6631,
    "longitude": 132.73781,
    "population": "357747",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "453"
  },
  {
    "city": "KABUPATEN MALUKU TENGAH",
    "state": "MALUKU",
    "latitude": -3.01665,
    "longitude": 129.48644,
    "population": "705050",
    "growth_from_2000_to_2013": "2.5%",
    "rank": "454"
  },
  {
    "city": "KABUPATEN BURU",
    "state": "MALUKU",
    "latitude": -3.23143,
    "longitude": 127.09036,
    "population": "456051",
    "growth_from_2000_to_2013": "3.0%",
    "rank": "455"
  },
  {
    "city": "KABUPATEN KEPULAUAN ARU",
    "state": "MALUKU",
    "latitude": -6.19465,
    "longitude": 134.55019,
    "population": "522289",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "456"
  },
  {
    "city": "KABUPATEN SERAM BAGIAN BARAT",
    "state": "MALUKU",
    "latitude": -3.12716,
    "longitude": 128.40084,
    "population": "458982",
    "growth_from_2000_to_2013": "1.4%",
    "rank": "457"
  },
  {
    "city": "KABUPATEN SERAM BAGIAN TIMUR",
    "state": "MALUKU",
    "latitude": -3.41508,
    "longitude": 130.39049,
    "population": "824124",
    "growth_from_2000_to_2013": "8.5%",
    "rank": "458"
  },
  {
    "city": "KABUPATEN MALUKU BARAT DAYA",
    "state": "MALUKU",
    "latitude": -7.78516,
    "longitude": 126.34981,
    "population": "769904",
    "growth_from_2000_to_2013": "9.5%",
    "rank": "459"
  },
  {
    "city": "KABUPATEN BURU SELATAN",
    "state": "MALUKU",
    "latitude": -3.83757,
    "longitude": 126.734305,
    "population": "786538",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "460"
  },
  {
    "city": "KOTA AMBON",
    "state": "MALUKU",
    "latitude": -3.65607,
    "longitude": 128.16642,
    "population": "545576",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "461"
  },
  {
    "city": "KOTA TUAL",
    "state": "MALUKU",
    "latitude": -5.64085,
    "longitude": 132.74751,
    "population": "896296",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "462"
  },
  {
    "city": "KABUPATEN HALMAHERA BARAT",
    "state": "MALUKU UTARA",
    "latitude": 1.07478,
    "longitude": 127.47239,
    "population": "819016",
    "growth_from_2000_to_2013": "0.1%",
    "rank": "463"
  },
  {
    "city": "KABUPATEN HALMAHERA TENGAH",
    "state": "MALUKU UTARA",
    "latitude": 0.3385,
    "longitude": 127.87139,
    "population": "439791",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "464"
  },
  {
    "city": "KABUPATEN KEPULAUAN SULA",
    "state": "MALUKU UTARA",
    "latitude": -1.86667,
    "longitude": 125.36667,
    "population": "654833",
    "growth_from_2000_to_2013": "8.2%",
    "rank": "465"
  },
  {
    "city": "KABUPATEN HALMAHERA SELATAN",
    "state": "MALUKU UTARA",
    "latitude": -0.62584,
    "longitude": 127.4831,
    "population": "467419",
    "growth_from_2000_to_2013": "9.1%",
    "rank": "466"
  },
  {
    "city": "KABUPATEN HALMAHERA UTARA",
    "state": "MALUKU UTARA",
    "latitude": 1.7251,
    "longitude": 128.00373,
    "population": "157848",
    "growth_from_2000_to_2013": "0.3%",
    "rank": "467"
  },
  {
    "city": "KABUPATEN HALMAHERA TIMUR",
    "state": "MALUKU UTARA",
    "latitude": 0.69114,
    "longitude": 128.28043,
    "population": "186259",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "468"
  },
  {
    "city": "KABUPATEN PULAU MOROTAI",
    "state": "MALUKU UTARA",
    "latitude": 2.3657,
    "longitude": 128.4008,
    "population": "357389",
    "growth_from_2000_to_2013": "7.7%",
    "rank": "469"
  },
  {
    "city": "KABUPATEN PULAU TALIABU",
    "state": "MALUKU UTARA",
    "latitude": -1.8268,
    "longitude": 124.7741,
    "population": "394843",
    "growth_from_2000_to_2013": "1.0%",
    "rank": "470"
  },
  {
    "city": "KOTA TERNATE",
    "state": "MALUKU UTARA",
    "latitude": 0.78333,
    "longitude": 127.36667,
    "population": "554706",
    "growth_from_2000_to_2013": "2.9%",
    "rank": "471"
  },
  {
    "city": "KOTA TIDORE KEPULAUAN",
    "state": "MALUKU UTARA",
    "latitude": 0.68333,
    "longitude": 127.44725,
    "population": "224131",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "472"
  },
  {
    "city": "KABUPATEN FAKFAK",
    "state": "PAPUA BARAT",
    "latitude": -2.88524,
    "longitude": 132.26583,
    "population": "566552",
    "growth_from_2000_to_2013": "3.9%",
    "rank": "473"
  },
  {
    "city": "KABUPATEN KAIMANA",
    "state": "PAPUA BARAT",
    "latitude": -3.66093,
    "longitude": 133.77451,
    "population": "781819",
    "growth_from_2000_to_2013": "2.4%",
    "rank": "474"
  },
  {
    "city": "KABUPATEN TELUK WONDAMA",
    "state": "PAPUA BARAT",
    "latitude": -2.85517,
    "longitude": 134.32366,
    "population": "738573",
    "growth_from_2000_to_2013": "7.9%",
    "rank": "475"
  },
  {
    "city": "KABUPATEN TELUK BINTUNI",
    "state": "PAPUA BARAT",
    "latitude": -1.90568,
    "longitude": 133.32947,
    "population": "529633",
    "growth_from_2000_to_2013": "0.7%",
    "rank": "476"
  },
  {
    "city": "KABUPATEN MANOKWARI",
    "state": "PAPUA BARAT",
    "latitude": -0.86145,
    "longitude": 134.06204,
    "population": "318297",
    "growth_from_2000_to_2013": "2.8%",
    "rank": "477"
  },
  {
    "city": "KABUPATEN SORONG SELATAN",
    "state": "PAPUA BARAT",
    "latitude": -1.44375,
    "longitude": 132.0187,
    "population": "287914",
    "growth_from_2000_to_2013": "0.9%",
    "rank": "478"
  },
  {
    "city": "KABUPATEN SORONG",
    "state": "PAPUA BARAT",
    "latitude": -0.956132,
    "longitude": 131.33747,
    "population": "799306",
    "growth_from_2000_to_2013": "2.6%",
    "rank": "479"
  },
  {
    "city": "KABUPATEN RAJA AMPAT",
    "state": "PAPUA BARAT",
    "latitude": -1.09152,
    "longitude": 130.87786,
    "population": "465740",
    "growth_from_2000_to_2013": "8.4%",
    "rank": "480"
  },
  {
    "city": "KABUPATEN TAMBRAUW",
    "state": "PAPUA BARAT",
    "latitude": -0.78186,
    "longitude": 132.39384,
    "population": "478662",
    "growth_from_2000_to_2013": "6.1%",
    "rank": "481"
  },
  {
    "city": "KABUPATEN MAYBRAT",
    "state": "PAPUA BARAT",
    "latitude": -1.2971,
    "longitude": 132.3151,
    "population": "964505",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "482"
  },
  {
    "city": "KABUPATEN MANOKWARI SELATAN",
    "state": "PAPUA BARAT",
    "latitude": -1.51673,
    "longitude": 134.17932,
    "population": "460586",
    "growth_from_2000_to_2013": "1.2%",
    "rank": "483"
  },
  {
    "city": "KABUPATEN PEGUNUNGAN ARFAK",
    "state": "PAPUA BARAT",
    "latitude": -1.1555,
    "longitude": 133.7142,
    "population": "587895",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "484"
  },
  {
    "city": "KOTA SORONG",
    "state": "PAPUA BARAT",
    "latitude": -0.87883,
    "longitude": 131.2589,
    "population": "278206",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "485"
  },
  {
    "city": "KABUPATEN MERAUKE",
    "state": "PAPUA",
    "latitude": -8.49604,
    "longitude": 140.39455,
    "population": "280408",
    "growth_from_2000_to_2013": "9.0%",
    "rank": "486"
  },
  {
    "city": "KABUPATEN JAYAWIJAYA",
    "state": "PAPUA",
    "latitude": -4.00045,
    "longitude": 138.79951,
    "population": "953986",
    "growth_from_2000_to_2013": "2.8%",
    "rank": "487"
  },
  {
    "city": "KABUPATEN JAYAPURA",
    "state": "PAPUA",
    "latitude": -2.54958,
    "longitude": 140.47759,
    "population": "131585",
    "growth_from_2000_to_2013": "3.1%",
    "rank": "488"
  },
  {
    "city": "KABUPATEN NABIRE",
    "state": "PAPUA",
    "latitude": -3.50955,
    "longitude": 135.7521,
    "population": "898448",
    "growth_from_2000_to_2013": "9.4%",
    "rank": "489"
  },
  {
    "city": "KABUPATEN KEPULAUAN YAPEN",
    "state": "PAPUA",
    "latitude": -1.74694,
    "longitude": 136.1709,
    "population": "558280",
    "growth_from_2000_to_2013": "4.7%",
    "rank": "490"
  },
  {
    "city": "KABUPATEN BIAK NUMFOR",
    "state": "PAPUA",
    "latitude": -1.0381,
    "longitude": 135.98008,
    "population": "258256",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "491"
  },
  {
    "city": "KABUPATEN PANIAI",
    "state": "PAPUA",
    "latitude": -3.78764,
    "longitude": 136.36247,
    "population": "517029",
    "growth_from_2000_to_2013": "5.0%",
    "rank": "492"
  },
  {
    "city": "KABUPATEN PUNCAK JAYA",
    "state": "PAPUA",
    "latitude": -3.72805,
    "longitude": 137.98589,
    "population": "968157",
    "growth_from_2000_to_2013": "3.4%",
    "rank": "493"
  },
  {
    "city": "KABUPATEN MIMIKA",
    "state": "PAPUA",
    "latitude": -4.45532,
    "longitude": 137.13621,
    "population": "727598",
    "growth_from_2000_to_2013": "9.3%",
    "rank": "494"
  },
  {
    "city": "KABUPATEN BOVEN DIGOEL",
    "state": "PAPUA",
    "latitude": -6.09967,
    "longitude": 140.34818,
    "population": "393750",
    "growth_from_2000_to_2013": "7.3%",
    "rank": "495"
  },
  {
    "city": "KABUPATEN MAPPI",
    "state": "PAPUA",
    "latitude": -7.10223,
    "longitude": 139.39639,
    "population": "841242",
    "growth_from_2000_to_2013": "1.9%",
    "rank": "496"
  },
  {
    "city": "KABUPATEN ASMAT",
    "state": "PAPUA",
    "latitude": -5.0574,
    "longitude": 138.39882,
    "population": "375929",
    "growth_from_2000_to_2013": "6.9%",
    "rank": "497"
  },
  {
    "city": "KABUPATEN YAHUKIMO",
    "state": "PAPUA",
    "latitude": -4.88689,
    "longitude": 139.52088,
    "population": "123170",
    "growth_from_2000_to_2013": "5.1%",
    "rank": "498"
  },
  {
    "city": "KABUPATEN PEGUNUNGAN BINTANG",
    "state": "PAPUA",
    "latitude": -4.55899,
    "longitude": 140.51356,
    "population": "988161",
    "growth_from_2000_to_2013": "1.8%",
    "rank": "499"
  },
  {
    "city": "KABUPATEN TOLIKARA",
    "state": "PAPUA",
    "latitude": -3.48113,
    "longitude": 138.47873,
    "population": "622805",
    "growth_from_2000_to_2013": "1.6%",
    "rank": "500"
  },
  {
    "city": "KABUPATEN SARMI",
    "state": "PAPUA",
    "latitude": -1.86873,
    "longitude": 138.74361,
    "population": "196185",
    "growth_from_2000_to_2013": "6.2%",
    "rank": "501"
  },
  {
    "city": "KABUPATEN KEEROM",
    "state": "PAPUA",
    "latitude": -3.34495,
    "longitude": 140.76245,
    "population": "123232",
    "growth_from_2000_to_2013": "7.6%",
    "rank": "502"
  },
  {
    "city": "KABUPATEN WAROPEN",
    "state": "PAPUA",
    "latitude": -2.84357,
    "longitude": 136.67053,
    "population": "919914",
    "growth_from_2000_to_2013": "5.5%",
    "rank": "503"
  },
  {
    "city": "KABUPATEN SUPIORI",
    "state": "PAPUA",
    "latitude": -0.72951,
    "longitude": 135.63851,
    "population": "854095",
    "growth_from_2000_to_2013": "0.8%",
    "rank": "504"
  },
  {
    "city": "KABUPATEN MAMBERAMO RAYA",
    "state": "PAPUA",
    "latitude": -2.53313,
    "longitude": 137.76376,
    "population": "672190",
    "growth_from_2000_to_2013": "4.9%",
    "rank": "505"
  },
  {
    "city": "KABUPATEN NDUGA",
    "state": "PAPUA",
    "latitude": -4.40695,
    "longitude": 138.23935,
    "population": "121129",
    "growth_from_2000_to_2013": "9.8%",
    "rank": "506"
  },
  {
    "city": "KABUPATEN LANNY JAYA",
    "state": "PAPUA",
    "latitude": -3.97103,
    "longitude": 138.31903,
    "population": "943938",
    "growth_from_2000_to_2013": "3.7%",
    "rank": "507"
  },
  {
    "city": "KABUPATEN MAMBERAMO TENGAH",
    "state": "PAPUA",
    "latitude": -3.67108,
    "longitude": 139.0626,
    "population": "978862",
    "growth_from_2000_to_2013": "0.3%",
    "rank": "508"
  },
  {
    "city": "KABUPATEN YALIMO",
    "state": "PAPUA",
    "latitude": -3.78528,
    "longitude": 139.4466,
    "population": "217977",
    "growth_from_2000_to_2013": "6.3%",
    "rank": "509"
  },
  {
    "city": "KABUPATEN PUNCAK",
    "state": "PAPUA",
    "latitude": -3.97143,
    "longitude": 137.64241,
    "population": "997067",
    "growth_from_2000_to_2013": "5.4%",
    "rank": "510"
  },
  {
    "city": "KABUPATEN DOGIYAI",
    "state": "PAPUA",
    "latitude": -4.01939,
    "longitude": 135.96104,
    "population": "334191",
    "growth_from_2000_to_2013": "8.8%",
    "rank": "511"
  },
  {
    "city": "KABUPATEN INTAN JAYA",
    "state": "PAPUA",
    "latitude": -3.50764,
    "longitude": 136.74785,
    "population": "676448",
    "growth_from_2000_to_2013": "6.8%",
    "rank": "512"
  },
  {
    "city": "KABUPATEN DEIYAI",
    "state": "PAPUA",
    "latitude": -4.09749,
    "longitude": 136.43931,
    "population": "157069",
    "growth_from_2000_to_2013": "2.8%",
    "rank": "513"
  },
  {
    "city": "KOTA JAYAPURA",
    "state": "PAPUA",
    "latitude": -2.59048,
    "longitude": 140.6754,
    "population": "857999",
    "growth_from_2000_to_2013": "1.5%",
    "rank": "514"
  }
];

module.exports = cities;