// const puzzleInput: string[] = [
//   "XXXXXXX",
//   "XMXMXMX",
//   "XXAAAXX",
//   "XMASAMX",
//   "XXAAAXX",
//   "XMXMXMX",
//   "XXXXXXX",
// ];

const puzzleInput: string[] = [
  "SMMMXMASMSSSMSMMSAMXSSMMSXMMAMXMXXXSMMSXXAMAASMSSMSSSMSASMMMXSXSMMSSSMSMXSXMAMAAXAXMMAMXMMMMSXSASMXMASAAMAMXMXAMAXMAXAXSAMSMXMMMAMAASASXMAMX",
  "SAMSAMXSAAAAXMASXXMAXAAAXMSMMMSSMMMXAAMMSMASMMMAMAAAAASASAXSAMXSXMAAMAAMAMASAMXSMMMSMAMASAMXAAAAMXAMXMAMSAMAMMAMXMXMASMAXMXAAMASAMMSMASAMSSM",
  "SAMMMMAMMMSMMMSMMMMMSSMMXXSAAMAAAMMXMMSAMMAMAAMASMXSMMMAMAXMASAXAMMSMXAMMMAMAMAAAAAMAASMSXSMMSMSMSSMMXAMSASXSAAMXSSXMXAMXSMSMSASAXSAMXMAMAAX",
  "MXMAXMXSAXAMXMMAMAAMXMASMASMMMSSMMSASAMASMASXMMAXAMXMXMAMXMAAMMSSMAXMMSASMSMAMXSSMSSSMSXSXXXAAXAMAAAXSAXSAMASMSXSMMXSMSXASAMXMMSMMSASASAMSSM",
  "SAXMMXAMMSMSAMXAMMASASAMMAMAXAAMMMSASASXMMMSASMXSASXXXXASASMXSASAMXSXXMAXAXSMSXMAMAAAAXXMASMSSSMMXSMMSMMMAMXMXMMAAAASAXMXSXMAMMXMAXAMXMAXXAA",
  "SMSSSMMSXAXMASXSMSASXSSXMSMXMMMMAAMMMAMMAMXSAMAXMASXMSSMSASAAMMSXMSXMXMSMSMAMSXSAMMMMMMAMXSXXAMXAAMAMSASMSAMXASMSMMXSAMMXMMSXSMSSSMSMASMMSSM",
  "XAAMASAAMMSSMMAAAMAMAXAXMAMXMSMSMSSXMAMMMXMMMMMMMAMAMAAXMAMXMXMXAXMAXSAMAAXSMSASMSSSXSXMAAXMMAMSMMMAMSAMAMXXMXXAMMMXMMMXAMAMXAAAAAAAMXMAAAXM",
  "MMMSAMXSAMAAAMMMMMSMMMMSMASAAAAAXAAXMSSSMAAAXAMAMAXAXXAXMXMXXAMSAMSAMXAMSMMXAMAMXMXAASMMMSSMMMMSASXSMMAMXMAMSSMMMASAMMSSMSAMSMMMSMSMXSSMMMSS",
  "XSAMXSAAMMSSMMXMAAAAAXXXMAMMSMSSSMMXAAAASASMSXSSSXSMSSMMMSMMSXMAMXASASMMXXAMXMXMAXMMMMAAAXAMASMSAMAAAXAXMMMMAAXMSASAXSAAAMAXAMXMAMXMAXAXMSAX",
  "AMAMSMMMMMMAXSAMMSSSMMMMMMSAAXAAAXXSMMSMSMAMMXXMMMAMAXMASAAMAMAASMAMXMAAXMSSXMXSXSMMXSSMMSAMXSXMAMSSMMXAXAAMMSMXMAMAMMMMSXSMSAMSMSAMMSAMXMMS",
  "MXSSMAAXSSSSMMSSMXMAXAAAAAMMMMXSAMASAXXXXXMAMMMAXSAMSASMSSSMMSMMMMAMASMMMAXMAMASAAAAXXAMAXMMMMXSXMAXAMXSXXXSAXXXMSMSMSXAMAMAXAXMXSASASXXAMXS",
  "MAMAMXMXAMAMAMXXMASAMSSMMSMXXMAMAXASMMMSMMSAAXSAXXXMXASAXAMXMAXSXSMSMSAMMMASXMASMSMMMSAMSSMSAAAAAMASXMAXSASMMXASMXAAASMSMAMASMMAASXMASXMAMXM",
  "MAMAMXSAMMMMSMXAXAMAMMXMAAMSASMSMMMXMAAAAASMSAMXSXMXMAMAMMMSAMXMASAAXXMXASMMXMASMMAAAMAMXAASMSMSMMASAMASMMSAMSAMAMSMMMAAMMMXXMAMXXAMMMMASMSM",
  "SMSXSASAXXXMAMSSMSSXMXAMXSMSAXMAMAMMMSSMSMMMXXMASAMSMXMXMAAMAXMSAMMMMSMSMSAMXMASASMMSSSMSMMMMAMXAMXSXXMAXXXAMSAMXMXSAMXMSXMSMSMSSMMMSAAXXAAS",
  "AAAAMASXMXMMAMXXAAAXSXMSXMAMXMSASAXMAMXXXXMASASASAMXMAXAMXMSSMAMASXXXAAAASAMXMAMAMAMXMXMASAAMMXSAMXMAMXMXMMSMSMMMSAMXXMAMXXAAAAAXAAASMSXMSMS",
  "SMMSMMMMMMSXMASASMMMSAAMMSAXXXSASASMASMMSAMXSAMASMMXXSSMXXMAXAMSAMMSSMSMXSAMXMXSSXXMXMASMMXMSMASAMXSMSAMMSXXAXAAAMASASAAXMSXMMSMSMMXSAMXAAAM",
  "XAXMAXAAAAMAXAMXXAXASMMMAXMMSAMXMXAXXSAASAMAMXMAMAMAMMAMSSMMSSXMMXSAAXXMAXAMXMMMMAMSXSASXSSXAMASAMXAXSASAMMMMMSMMSAMASXMAMMSMAXXAXSMMAMMMMSM",
  "SMMSXXSSSXSMMSSMSXMAXASMXMAAMASASMXMXMMMSAMXXXMAXAMAXXAMXXAAAMXMAMMSSMMXSMSSSSXAMMMAAMASAAAMAMASAMXMASAMXMAAAMAMAXMMAMAXXAAAMXMMMXSASXXAAAAM",
  "MXXMXAMAMMAXAAAAXMMMSMMASXMMSAMASAASXMSASMASXXSSSMSSXSAMMMMMXSAXMAXXMAXAAMXAAXSAMXMMXMXMMMSMMMXMAXAXMMXMASMSMSASXXMMASMSSMSMXSXXSAXMMMMXMSSM",
  "MMSSMMMAMSAMXSMMMMAAAMMMMASAMXSMMXMSAAXAXMASMAMXAAAAXSAMXAAAXSAXMXMASAMSSMMMMMMSAXXSXXSASAMAXXXSMSSSXXXXASXMMXAXXAMSXSXAMAXAASMMMXSXMASMMAAX",
  "SAXMAXMMMMXMMXXAAMMMXMAXXAMASAAMXXSMMMMAMMMSMAMASMMSMMAMSSMSAMXMSSSMMAXAAASAMXMAXSMSAASAMAMSMSMSAAAMMMSMXXAMASMXSAMXMMMMMAMMMMAXAXSASASMMSSM",
  "MXXMXMMMSMSMSASXSMSXSSSSMASAMMXSAMMAMAMMMSAMXMMAXXXXMXSMMAXAAXXAXAAMSXMMMMXAMAAMXSAMMMMAMSMMMAAXMMMXMASMSSSMAXSAMXSAAXMXMASXSSMMXXSAMMSAMMAM",
  "SMSMMASAAMXAMAMAMASAAAAMXAMAASAXMAXAMAMSAMAXASMASXXMSAMAXMMSMMMMMSMMMMMSSSMSSSSXSMMMAAXXAAXXAMSMXASAMXSAAAAMASMMMAMXXMMSAMXAMAMXXMMMMASAMSAM",
  "AMAASAMXSXMSMAMSMAMMMMMMMMSXMMXSXSSXSASMMMSMAXXAMMASMASXMMXXSXAAMAXAAMMAMAAAAXMXXAASMSMXSXASXMMASASASAMMMSMMMXAXMASMSMASAMMSMMMXXSSMMXMMMMSM",
  "MMSXMASAXXAMSXSXMSSSXMXSAMXMSAMXAMAAMXXAXAMMMMMAAMSXSXMMAMXMASMMSASXMSMAMMMMSMSAXSMSAMXAXXXXAXXXMASAMMSMAMAMMSMMMXAAAXAMAXSAAASMMMAMSSMSAAAX",
  "XXMAXAMAMMSMMMXAXAAMXMAXMXAAMXSMMMSMMXSSMMSAAAXSAMAAXXXSAMMAMXXAMMMXAXXSXSAMXAMAXMAMAMMMMMSSMMXXMXMASAXMASASMAAAXMMSMMASXXSXSMXAAXAMSMASMXMS",
  "MMSSMMMSMMXAMASMMMSMAMAMASXSMAXASAXXSAXMAMSXMXXAMXMMMSMSASASXXAXXSAMXMXMXMASMMMXAMAMAXAAAMAAAXMMSXMAMAXSASASXSSMMAXXXXAMMMMXXMSSMSSSXMXMMSMM",
  "MAAXAXAMMXMAMAXSAXMXAXSAMMXAMXSXMASAMMSSXMXAMXMAMSMXAAAMASAMXMASXMASMXAMASXMAXSMMSASXSMMMMSSMMAAAAMXSXMAASAMXMAMMSMMMMMMAAMSMMMAAAXMASXSAAAX",
  "MMSSSMMSASAAMXSXSAMXMAMAXSSSMAAMMAMXMXAAMSSMMASAMXAXSMSMAMAMSAAMAXSAXMASAMASMMSAASASMMMSSMXAAXMASXMMMMSMMMXMXXXMXXAAAAASMSMAAASMMMSXAAAMXSMM",
  "XXAXAAAMASMMMXMAMXMAXAXAMXAAMXSSMXSAMMMSMAAASMSMSMMMAAAMAMXMMMSSSMMAMMAMAMAMMAMMMSSMAAAAAASXMMSXMASXMAAAAXMMMMSMMMSSSMXAAAXXSMSXSXXMXMXMAMAM",
  "SMMMMSMMMMXAXXMAMASXSSMSAMSMMMXXMASXXAAAMMSMMASXAAASMSMSSSXAXAXAMXSASMSXSMSSMSSSXSASXMMSSMMMAXMASAAAMSSXMXXSAMAAAXMAXXSMSAMXAMXMXMASMXMMASAM",
  "MAASXMXSMMSSSSMXMXMXAXAXSMMXXAXMMASMSSSXSXAMAMXMXXXXAMAMASMSMXSAMXMASXMAAMAAMMAMXSMMMSAXMAXXMXMASMSXMAXAMSMSASMSMSMMXMXAXASAMXXXMAMAAASMASAM",
  "MSMSASAXAMAAAMMXSMMMSMXMMSXMAMMXSAMXAAAASMSMSXAMMMSSSMMXAXSXAXMXMAMXMAMSMMSSMMAMMMXMAMMSMSSSXAMXXAAMMASXMAAXAMAXMSAASAMXMAXXXMXMXSMMSMSXMMXM",
  "MAXXMMMSSMMMMMMAAAXSXSXMAAMMSMAXMASMMXMXMAMAXMXSAAAAXAXMSSSMMMMSMSSXMXMAMAMAXSMMAAAMAXMAMXAMSSMSMXMXSASMSXSMAMAMMSXMMXXMMMMSMMAXAAAAMMXAMSMS",
  "SSSMAAXMASXXMAMSSMMMAMMMAMSAAMSSSMMAXSXMMAMMMMAMMMMMMMXXMAMXXAXAAXXMMAMASAAMMAMXXXXSASXMMMMMAMMXAAXMMMSAMAAXXMXSXMMMXMXMAMAAASAMSSMMSMSMMAAS",
  "SAAMSMSMMMMMMAXMAMAMAMAAMSMMMSAMXASXMASAMASAAXAMXXXXSSMSMAMMSSSMSMAMXMXASASXSMMXSAMSAMXXAAAMMSMSAMSXSAMAMSMSSMASAAAXASMMAMSMXMSMMAAAXAAMMMMM",
  "MXAMXXMAAAAAXMMMAMXSMSSSMAMXXMASXXMAMAASAMXXASXSSMXSAAASMXSMAAMXXXMMASMMSAMAAXAAMAMXAMASMSSSXAAXXAXAMASXXXASAXAMXMMMXMAXSMMXSAXSSSMMSSXSSSSS",
  "MSXMAMXMSMSXSSSSMMXXXAXMMAMXMSXMMSAMXSAMXMASXSXMXAXAMMSMMMSMXXSAMAMSASAAMAMSMMMMSAMXSMAXXAXXMMMMASMXMMMMMMMMMMMSASXMSMSMXASAMXMAXAMMXMAAXXAA",
  "AAASMMMAMAAAXAMMASMSMMSSSXMMASAMXASXMXASAMXSXMASMSMMXXAAAAXXMMMASAMMASMMSAMAXASXSASAXMASMXMMXSXAMAAXMASXAMAAXAXSAXAXAAMASAMXMAMMSMMXAMMMMMMM",
  "MMXMAAXAXMMSMAMSAMAXAAAMXMASAMAXMAMSMSASXSAMMXXMAMAXSSSSMSSXAXMAMAXMXMAASMSMMXSAXAMASXXXMASXASAMXMSXSASXSSSSXSXMMSSSMMMAMXMASASXSXAMMMMAAMAM",
  "SSMSSMMXSMAXXXMMASMSMMMSAAMMASXMMSMMMAAMAMXSMXSSXSSMMXAXAXAMSSMMSMMSASXMSAAXSSMMMXSXSXSASASMXSASAXXMMASAMAMXAMXAMAAXAXSMMASXSXSXMAMSMASMMSAS",
  "MAAXXXMXXMAXMSSMMMAAXSASASMMMMMXXXAAMMMMXMAAMAAMAMXMXMMMSMMSAAXAAAXSAMXSMMMSXAAXMAMXMASAXSXMAMAMXMMXMAMXMAMMMMAMMMSMXMAASXMASAMMAMSAXXSAMSAM",
  "SMMMMASMMXSSMAMMAMMMXMASAXMAMAMXXMSMSXMXAMMAMMMMSMSXXXSAMXXMMSMSSSMMAMXAMXXSMMMMMASAMXMMMMSMXMSXSSMSSSSSXSAMXASMSSMMMSXXMAMAMXMAAXMAMXMAMMAM",
  "AAAASAAAMAMAMMXSAXAAAMXMXAMMXSSMMMXAMXXSXMXXXAAXMASAMXMASMMMXMAXXMASAMXMSSMMASXXSASXSAMXAAXMAAMMMAAXAAAAXXXXXXXSXAAAASXSMSAMXSSMXSMAMXSAMMAM",
  "XMMMMAMXMXSAMMASMSMXMMASMSASAMAASASASAMXAMSMSSSSMAMMMXMAAAAXAMMMASASAMXXAAAAAMMXMASXXMSSMXSMMSMASMMMMMMMMSMMSSXAMSMMXSAMAAAXAMASAMMAMXMAMSMS",
  "SASXSSMMXXMAMMAMAXMASMMSAXAMXXSMMAMXMMAMXMAAXAMXMXSXMASXSXMMMSMSXMASXMXMSSMMSSXXMMMMSXMXXASAMAMXMMAXXXAAAAASAMMSMXXXMMAMMMSAAXAMMXSMSSSSMSAA",
  "XAMAAXMXASXMMMMSMMSASAAMXMSMSXMXMSMSMSMXMMSMMASXSAMXSMMAMXAAAAAMXMAMASXXAMXXMMMXXAAXMAXXMASASASXSSXSXSXSMSMMAMAAXXXMASAMAAXMXMXSXXMAMMAMAMXM",
  "MSMSMMSAMXAXMXXAXXMMSMMSAMXAASMAMAAMASXAMAMASAMMMAXXAAMSMMXSXMXMAMASXMSMSSMXXAXMSMXSSMMMMASAMXMAASAMASAAAMMSSMSSSSXXAXAMMAMMXMSMMMMAMMMMSMXM",
  "AXAXMAXMXSMMSSSSSSMXSXXMASMXMXMAXMXMAMXMMASXMAXASXMSMMMXAMAMAMMSASAMAAAMMAMSSMMXASXMAMXXSASASXMSMMSMAMMMMMAAAXMAXMMMMSSMMSXXAXXXAASAMSAAXMAM",
  "SMAMMMSXAAASXAAMAMXAMAMSMMMMSASMXSAMXSSMAASXSXSXSSXXAAASXMASAMAAAMASMXMMMAMXASXSASMSAMMMMASXMAMMAXAMXXXXAMMMSSMSMMAMAAMSAAXSXMMMSMSAAXMAMSAX",
  "MMXMAXXMMSMMMAMMXMMMXAAAMAMSMAAAASXSAAXAMXXAXAAMMMMSAMXSAMXMAMXSMSMMXSXSMMMSMMXMMMAMAMSAMAMASAMXXMMXSSMMSSMAAMXMASMSMMSMMSMSAAXAMXMMMXXXMSAS",
  "SAXSMSMSAMAAXSXMXSXMSMXXSASXMSMMXMXMASMMMSMMMSMXXAAXAMXXMASXXMXMMXMAASXSASASASXSSSMSSMXMMMSMSXMXAMXAAAAMAXMMSSSMAMAAXMAXMMASMMMSSSXAMMMAMMSA",
  "MAMAAAAMMSSMSASAMMAMAMSMXXAMXAMXSMXXAXAAAXAXAMXSXMMSAMMXMAXXMSMXXAMMMSASMMASAAAAAAAAXAAXMXSAMASXMSMMSSMMMSXMAAXMAXXMMSASMMAMXXAXMASMXAAAXMXM",
  "MSSMMMSMAAAMSAMXAMAMASAASMSSSMSAAAAMXSSMMSXMXSASAMAMMAMXMMSMAMAXMSSMXMAMXMXMMMMMMMMMSXAXSAMAMAMAAAXAAMXAAMASASXSMSMSAXMSAMXMXMSSMMXXSMMXXSAM",
  "XMAMXMXMMXMMMAMASXXXXXMXMAAXXAMXMXXSMMXXXMASAMASMMASXSSMXMXAAMMMXAAAAMAMXMASMXXXXXXXMXMSMMSAMXSMMMSMXSXMMSAMMMAAAXAASXASMMASXMMAMXAAASMSXSAS",
  "MSAMSXSXSAMSSSMAMMMSSMSAMMMSSSMAXMXMASAXMSMMMMMMASAMXAAXMSMSXSMSMSSMSXSAMXXMMMSMAMSXSAXAAMMAXAXXXXAMMSAAAMMMAMSMSMSMMXAMXMAAAXSAMXSMAAXMASAM",
  "AMAMXAMAMMSAAAMMSAAAAASMXSAMAAXAASMMMAMMMAXAMASXMMXMASMMAAAXXSAAAMAXAAXMASAAAAAAAMAAXMSSSMMASMXMASXMASAMMSXSXXMAXXXAMXXSAMXSAMMAMAXSSMAMXMMM",
  "SMSSMAMAMMMMSMMXSMSSMMMMAMAMSMMSSMASAXMMSAMMSASMXMAMMAMMSMSMAMXMXSMMMSMXSAMXMMSSXSMSMXMXAAMAXAASAMXMXSAMXAMMMMMMMMSAMXXXXMXMASMSMMMMMXXSAMXM",
  "MXMAMMXAMXAXAAMMMAXMXSAMXSXMASXXXXAMSSXAAMSMMMMAXMAXMAXMXMAMMMASMAXAMAMXAMXAMMMMXMAAAAMSXMMSXSMMSSXXXMASMMMAAAAAAXSASXSXSAMXMMAMXMAMAXMAMSAS",
  "SMSAMSSXXSASMSSMMAMMSSXSAMXSASMXMMMSMXMSSMAXASXSMMAXSSMMASASXMASASMXSAMXXSXXMAASAMSMSXXAAMMMAAXAMXASXSMXAASXSXSMSMSAMAAAAMXSSMAMXXMMMAMXMSAS",
  "SAMXSAMSAXASAAMXXAXXAXMMXSXMASAAAAMAMAAAAMXXXSAAXXAMXAMSASXSAMASXXAXSAMSMSAMSSSMMXAAXMASXSAMXMMXMMMMAAAXMMMAMAXXMMMMMMMMMMAMAMXSMXSASAXAMXXS",
  "MMMXMAMMSMAMMMSMSMSMMSAMASMMMMXSMMSAMSXXAMXMSMMMMMSSSMMMASASXMASXMXMMAMMAMAMMMXAXXMSMMMAAXXXMXXAXAMMSMMSMAMAMAMAXXAXAAXXSMXSMMMSAASMSASMSMXS",
  "MSXMMSMAAMXMAXAAASAAXXXMASXXSMAXAASAXXMAXAMXAAXMAXMAXXAMXMXMXMASMAMMMAMMSMMMXASMMXMAAXSMSMAMASXMSMSAMXAAXAMMMMSAMXMSXMMXASAAXAAMMMSXMAMXAMAM",
  "XAASAMMSMSSMXSSSMSSSXMXMASXAXMAXMMMSAMXXXAXSMSMMMMMAMSXSAMXSXMASASAAASXMXAXSMMMXMASAMMXAXMMAXSAAMXSAMMSSSMSXAAMMMSAXXSSMMXMXSMSSSXXMMSMSMMAS",
  "MMSMASMAXAAAAMMAAXXMASAMXSMMMMSXMMXMMSAMSSMAXMMAMSMMMSXXAMASASXSXMSSMMASMSMXAXAXMASASAMAMMXSASMMMASXMAMXMASMMMSAAMXMXXAAXMSAMXXMMMXXXAAAXSAX",
  "MMMMMMAMMXSMMSXMMSAMXSASAXASXAMAMAMMAMAMAAMMMSMAMAAAAMMXSSMMAMAXXXXMXSAMAMXSMMSSMAXAAMMXXXAMAXASMXSXMXSMMAMAAMMMMSAMXSSMMAMASMSASAXXXMSMMMSS",
  "XSXAAXXXMAXMMXASAMAMASAMMSAMMSSXMASMAMMMMSXSAMMMMXMMSXSAAAAMSMMMSSXMXMMMAMAAXAAMMAMSMMSXMMXSASXMXSMAMXAMMAMMXMASMSASAMAMMSSXMASAMSSXAXAXXAAM",
  "XASXMSXAMAXAXSMMASXMAMXMMMAXXAAASAXXAXMAMMAMASASMSSMMAMMSMMMMAAAXMSMSMASASMSMMSSMMMXAAMASAXSAMMSMMSAMXMMSMXSAMXMASAMXSAMXXXMMMMMMAMXXMASMMMS",
  "AMAMXMMMMMSMMSXSAMXMASAMXASMMMSMMASMMSMASMAMAMASAAXAMXMXXAMMSXMMMAAXAMASMSMAASXXXAAMXMSAMSMMXMAAAMMMMSAAXAASXMASMMSMASASMMASAXAAMXSAMMAMAXSX",
  "SMASAXAXAAAAXXMMAXXMAXASAMAAXAXXMXMAAXMXMMXMAMXMMMMMMMSMMMXAAAMSMXMSMMASXXMXSMMXSMSXMMMAMXXXAMSSSMAAAMMMXMMSASXSXAXMXMAAAMASXSSXXAMXXMASMMSM",
  "AMAMAMSMMSSSMSXSXMMMSXMMASXSMSSMMAXMMSAMXMXSSSSMMSAASAAXMAMMSSXAASXSAMXSAMXSAMMXMAXMAASMSMMMAMMAMXSMMSSMSAMXXMAXMASXASXSSMMSXMASMSMSASAMXAMX",
  "MMSSMAMAMAMAXMASXMAAXASXMMMMAMAASMXSAAASASMMMAAAASXSMXMSMXMXAMMMMAASMMXSMAXSAMSXSASMSMSAAAMSSMMAMAMAXAAMSAMXMXXXAMMAMXAMAAASMMAXMASAAMMSMSSX",
  "XXAAAAMAMMXSMMAMXMAXSAMAMXSMSMMMMAAMMSMSASXAMSMMMSXXMMSAMSSMMXXXAMXMXXAMXSXSAMXXMAMMAAMMMSXAAASMMXSAMMXAXAMXMXXSMMMAMMMMSMMXAMASAMXMXMXAXMAM",
  "SMXXMMXSMSAXMSAASMMMXXXXSMMAXAMXMMMMAAMMMMMXMAAAAMASAMSASAAXSASMXSAXAMXMAMXSAMXSMXMSMMMXXXMMSMMSMASXSASMSSMAMSMMASXXSXXAXAMSSMMAMXXXMSMMXMAS",
  "SAAMMMXAAMXSASMXSAMXMASMXAMAMSAMXAXMSXXAXMSMSSSMXSASAMSXMMSMSASAASMMSMSAASASAMXXAXXMMMXAMSMXAMXSMAMXAXXAAXMASAAAAMSAMXMASXMAMAMSAMXSAMASXMAS",
  "XAXSAASMMMAMAMMASAMXAXXSSSMASXXMSXSMMMSMXSAAAAXAMMMMXMXMXAXAMAMMXMAXAAMSAMMSAMXMXMXAXMMSMMMAAMAXMASAMMMMMSSXXXSMAMXMMAXMMAMXSAMXAMASMSAMAMAM",
  "MSMMXXXAAXMAMSMASXMMSMMAXASMXXAXSAMXAXAAMSMMMXMXSASMSMSMMSSSMAMXSSSMMXMMMAXSAMXAAAXMMSAMXAXMXMSSMASAAXAAAMAXMAMMMSASMSMSAAMMSMMSAMASXMASXMAS",
  "AMAXSXSXMMAMXSMMMMSXAAMMSMMMMSMMXMASMSMSMMMMXXSMSAMAAASMMAAXMASMAAMXSAAMASXSXMAXXSMXAMSSMMMSAXAAMAMMXMMSXSASMAXAAMAMAAAASXSXXMASAMAMASAMASXS",
  "SSMMAAASXMASXMASMAXMMXMXMXAAXAAAXMAMMAMXXXAMMMSAMXMXMMMASMMMSASXMXMASXSMAMMSASXSAAMMMSASAAASMMSXMSSMSMMXAMAMMSMMMSAMXMMMXXMXXMAXXMMSAMASAMMX",
  "XAAXMMMAXSAMMSAMASXMSXSAMXMXSMSAMXSMSASMSMSSMASXSMSASASXMAAAMXSAMXMXSAMMMMAMMAAAMMAAXMASMMMMMAXXMAAAAAASAMXMXMAMAMMMMMMXSMSMSMXSAMXMASXMASAX",
  "SSMMXAMXAMASXSASAXXMAAMAMMSMAXXXSMMASASAXXMAMMMAMAMASMAASMMMSASAMMXMMAMAXMSSSMMMXXMSMMXMXSSMXAXMMSSMSMMMAMXMASMMASAMAMXAXAAAAAASXMASAMXSMMMX",
  "XAXXSXSMXMASMSAMXXAMMMMAXAAMMMXAAAMAMAMMSASAMAMAMXMASXSXXMAMMASMMSAMMXMXMMMMMASXMXXMASASXMAAMMSAXAMAMAMSMMMMAXMSMSMSASMXSSMSMSMSASXSAMXXASXM",
  "SAMXXAXXXMAMXMXMMMMMASMMMSXXXMXSMXMXMXMAMMSMSXSASXMASAMAMXXXSAMAAXASMSMSAXMMSAMAMSXSAMAMXMAMMXAMMAXAMAXAMAXMXSMAAXXMAXXXMXMXMAMSAXAMAAAMXASA",
  "MAAAMAMMMMSMSAMXSAAMAMAAXAMXSAAMXXMASXMASMXMXXMASXXAMAMASMSAMASMMSAMXAASAMXXMMSSMAXMAMSMSXSSXXSMMMMASXSMSSSMASMSSSMSMSMMMAAAXXAMXMMSSMSXSASM",
  "SMSXSAAAAAAAXXMAMXSMMMSMMAXAAMMMMMSASASXMMAMMSMSMXMASXSXSAMXSMMMMAAAMMMMMMXSAAAXMMSSMMMAXAXMAMMAXAAMAMXXAMMMASAMXAXAAAAAXXSSXSMMMAXAAXAAMAMM",
  "MAMMMXXMMSSXSAMXSMMMSAMMSSMMMXMAAMMMSMMMMSMSAAMAMAMXMAMAMXMXXXAXXMXMASXAXMAXMMSMXXXAXSMXMXMSAMSSMMSXAMSMSSMSMMXMMMMMSMSMSAXAASAMMSMSSMMMMMMA",
  "MAMAMMSSMMAASXXAAXAAMMSMAXXXXMMMMSAMSMMSAAMMXXSMSMSSMMMAMAMXAMMMMXMMMMSXSMSMSXMASASMMMMMMXXSAXXXAXMMMMSMAAMSASMSMSAMXAAAMAMMMMAMXXAMXMASAMXX",
  "SASXSAXAAMMMMXMSMMMXXAAMMSMMMSXXXSMSMAAMMXSASMSXSXAAAXSXSASXMASASASAAXAMSAXAMXXXXAXXAXAAAAASMMASMMSXSASMMXMSAMAAXMSXMMMMMSXMASAMXMMMASXSASXS",
  "SMSAMXSSMMSMAXXAXAXSSSMSXAXAAMMMAXMXMMMSMMMASASAMMSMMMSASASMMSSMMAMSXMMXSAMXMMMMMMMSSSSMXXAXAMMMMAMAMASXAAMMXMMMSMMXMXSAMXXSMSXMASASMSASXMAS",
  "SXMXSAXAXSAMXXMASMMXAAASMMSMMXAXXMMAMMMMMXMAMMMMMAAAXXMAMMMXMAXMMSMMMMSAMXMAAAAAAAXXMAXMSXMXMMMAMAMXMAMMSXMAMXAXAAMXAASMSMXXXMAXMAXSASAMSMAM",
  "SAMSAXASMMSSMMSAXXAMMMMMAASXSMXSAAMMXAAAMXMASAAAMSSMMMMAMXSAMASMAMAXXMAMMASXSSSSSXXAMXMXAASASASXSMSMXSSXXXXSASMSMSMMMXSXAMAMMSXMMSMMMMAMAMAS",
  "SAMXMSMMSXAXXAMXSAMMAAMMMMSASAASXMMXSMSSSXSAMXSXXAXMAXMAXXSAXAAXAMXSASXMSMSXMAMXAASXMSSMMMSAMASMSAAMSMMMSMMXAXAXXMAXSXMMMSMAMAMXAAMAMXSMMSAS",
  "SSMAXXAAMMMSMMSAMMSSSSSSXXMAMMMMSXSASAAAAAAAMXXMXMASMSSSSMSAMXMSXSMAAAAASXMMMMMMMMMAAXMAXAMMMAMAMMMMAAAAAAAMMMMMSSSMMAMAMAXXAXSMSSSMSAXAXMAS",
  "SASXMMMMMAAMAAXAAXMAAXMASAMMMXAAXXMAMMMMMMMXMSAMMSAMXAAXXAXXXAXMAMAMSMMMMAMSMAAMASMMSMSMMMAMMXMMMMXSSSMMXXMXSAMAMAMMSAMXSASXMXXAMAAAMAMMMMAM",
  "SAMXSAXSSMMSMMSAMXMMMMSMAMMAXSMMSAMAMASAXAXMASAMASAMMMMMMSMMSAMMAMSXXASXSAMAMSXSAMMAMXXXAXSAMAXAASMMAAAMSSSMSXSAMAMXXMSMMASMXMASXSMMMXMSMMMS",
  "MAMAMMMXASAAXASXSMXMMAMXASMSMSAAMXMASXSMXMXAXSAMXSAASASAXMAMXMASASXMXXMASASXXXMMXMMAMAASMMXAXMMSXSAMSMMMAAXAXMXXSMSAXSAMMAMAXMAMMMAXSAMAAAAX",
  "SMMSSMXSAMSSMXSASXAXMASXMAAXAMMMSASXSAMAASXSXSMMXMMMSASASMMXAMMSMSAMSAMXMAMMAMXASXSASMMAMASXMMAMXSAMAXMMMMMMMSMAAAMMMSASMAMMXMASASXMMMSXMMMS",
  "SXAXAAAMAMAXMMMAMSAMSMSXMMMMXMMXMASXMXMMMSAMAMXMAAAXMXMMXAMSXMASMSAMXXMAMXXAMAMXMASAXXSAMMMXXMAXASXMMMMAMAAXAAMXMSMMASAMXMASMSXSXSAMXAAMXSMM",
  "XMAMMMMSSMXSMAMAMASXAXSXSASMSSMASMMMXMMXMMMMAMASXSMSMMXMSAMXMMMSXMMMSSSMSSMAMSSSMAMAMXSXSAMXXMMSXMMSXASAXSSMSSMSAAXMAMMMAAMAAMMMXSMMMMMXAAAM",
  "SMSMXXMAMXMAXASASMASMXXASASMAASAMAAXMAXASAMSXSASAMASAAAMSASXMAAMMXMMAXAXAXMAMXAAMMMMSASMSAMMASAMXAXXMMMXMXAMXAAMSMSSXSASXSXSXMAMXMXAAXASXSMM",
  "AAAMXXMASXSAMXSAMXMXXAMMMMMMSXMXSMMSAMSMMAMMAMXSMMAMMSXXSXMASMXSAASMMMSMMSMAXMSMMXAXMAXASAASAMASXXMMSSMMXMAMMMMMMXXAAMAMAAXAASXSASXSMSASXAXM",
  "MSMMAXMAXMMSAMXMXAXAMMXSAAXXMMXAXXAMAMSXSSMMXSMMXMMMXXMASASAMAAMXMXAMAAAXAXASXXMXSXSMSMAMXMMASAMXMXMAAAMASMXSASAMMMMMMAMXMMMMMAMAMAAAMAMMMMM",
  "MAMSMMMMSAAMSSMMMSXMXSASAMXAAMMAMMXSASXAXMASAXMAMMMAXXMAMMMMMMMMMSMSMSMSMMMSXXAMMMMXAAMXMAMXMMASXAAMMSMMAAXAXASASAAXASMXXXMXSMMMSMMMSMMMAAAX",
  "XAMAAMAASMMXAXAMXMAAAMXMASMXAMMSMAXSMSXMASXMASMSXSAMSMMASXMSAXASASAMXMXAAMSXXSSMAAMMMMXAMMSAXSXMASXSAXAMXSMMXXSAMXSSMMSMMAMAMASAXXSMMAXSXMMM",
  "SSSSSMSASMXMMSSMASMMMSASAMMXSMAAMSMXXSAMAXAXXXAXMAXSAAMAXAAMAMMMAMAMASXSMMAMXMASMSSMSSSSSMSXXXMXMAAMMMAAMMAMSMMAMAMAAAAMXAMAXMMAXXMAMXMAASMS",
  "AAXAXAMMMMSAMAAMMMXMAMMMAXMAMMSMSXMSMSMSXSMMSMMMMSMSMSMSSMMMSMSXXMAMSMAXSMMMASMMSMAAAAXMAMXXSMMSSMMAXSSMMMAMAASXMMSSMMSMSASASMMSMSMAMAMXAXAA",
  "MSMMMXMAAMSAMSSMSAAMSSXXMAMXSAMXMAAXAMASAMXASASAAAASAXAXXAMAAAXMASXSMMSMMXXXXSXXASMMMXMSAMXXAAAAAAXMAXMASMSSXXMSMXXAXXAASXMAXMAMAMMAMXMSMMSM",
  "MXAXAMSMSMSXMXMAXSMXAAXMXMXXMAMMSMMSSMAMAMMASAMMSMSMAMXMSMMSMSAMXAXAMAAAMXSAASXSMSXMXSMXMSSXSMMSXMMMXXMAMSAMXMMXSASMMMMXMAMMSMAMAMXSAMXMXAMS",
  "MSXMMMXAMAMSMMMMMAMXMSXSASMMMMMAXAAAMMSMMMSAMXXAXMXMAMMMAXAXXMASMSSMMSMSMAAMAMASXMASAXXAMAXAXAMXMMMMMSMXSMSMSSMASMMAAXSASAMAAXASXSAXMSXXMASA",
  "XXSAXMMMMAMAXAXXXAXXXMASASAAAAMSMMMSXAXSAMXXMXMMMAMSASASXSMMXSAMXAAXAMXXMMMXAMAMASAMASXSMASXSASXSAAAAXMMXAMMMAMXXXSMMMXASMSXMSMSAMASXMAAMSMM",
  "AASXMXAXSSSMSMSAMXSXAMXMXMMSXSXXMSXMMMSAMXSXAXMAMAMSXSMXAAASAMMSMSMMMSXMASASXXSSXMASMMMMXXSXMAMASMSMSXMAMSMASASMSMAASMMXMMSXXAAMAMAMAXMAXAAX",
  "MMMAXSSMXMAXSASMAAMMSMMMXMAMXMASXSXMAMAAASXSMMMASAXXAMAMSMMMASAXXXXXMAMSAMXMXSAMMSAMASMMSMMMMAMXMAMXMMMSAASXSASAAAMMSAXXAAXSXMSMXMASXSMSSSSM",
  "XAMSMMAAXSMMMAXXSXAAAAAMXMASAMAMAMAMSXXSMSAXSASASMMMSMAAXAXSXMMSMMAXXAAMASXSXAAMAMASAMAXXAAASXSXMXMMMAMXSXSMMAMMMXXXSAMSMMXXXSAMXSXMXXAAAXXX",
  "SXMAAMAMMSXXMAMXMMMMSMMXMMASAMASXSAMASMAMMMMAXMXMAXAAMMMSSMXAAAAAAXMMMSSMMMAXSSMXSXMASMMMSMXMASXMASAMAMAMXXAMXMASXMAXAAXAMXSXSASASASXMSMSMSA",
  "XMSMSMASAXMXMAXAAASXMMSAXMASXMMSXMAXAMXAMAASMSSMSSMSXXXAAXASMMSSSMSAXAAAASAMAMAMASASAAAXAAMAMAMAXAMMXXSMXASMMMSASAMAXSXSMMMMASXMASAMAAAAAAAM",
  "SAAAAXMMMSAASMSMSMSXMAMASMMSAAMXASAMSSMSSSXSXMAXAAXAMSMMSMXAMXMAAAXXMMXXMMSXMSAMASAMMSAMXSMAMASMMSSMSXAXMAMAAAMSSXMMMMAAMXAMAMASXMAMXSMSMSMX",
  "ASMSMSXMXMXAXAAAXAMAMAMSXXAXMASXMMXMAAMXAAXMASXMSSMMSMAAXMASMSMMMMMMSXMSSMXSASAMMMAXXMXMSAMMSMSAMXAASMSMSSSSMMXAMXMMAMXMMSMSXSAMXSXMAXAMMMMM",
  "MXMMASMSXMXSMMMMMAMXMSSXAMMXXMAXXASMMSMMAMASXMMAMXMXAMMMMMMMXMASXAXMXAMAAMAXMSAMXXMASMAMXMAMAXXXMMMMXAMXAAXXAXSSSSSMMSAXASASMMASXMAAAMAMAAAX",
  "XAMMAMAAAMAXASXSSXMXXXMAXMXAXXMXSASXAXXXAMXSMMMSMMMSMSXMAXAMSXMMSMSASMMSSMXSXMAMXMMAMMASAXMSXXMAAXXMMMMSMMSSSMAAAXXAASMMSMAMXSSMXSMMMAASXSSS",
  "SXSMAMSSXMAMXMAXXMMSMMSSMMXMXASAMXMMXSXXMMXMASXMAXAXXAXSSSMXAXSXMMSAMSAMXMAMMSMMMXMAXSXSMSXSAMSAMMMSAAAMXXAAAMMMMMMMMMXMMMMMXSXAAXAAXSXSAXAX",
  "MXMXMMAMAXSXMMMMMAXAAMAAAXASXAMXSMSSSMMSSMASXMAAMMSXMMMAXAMMSSMAXAMAMMMSMMMXAAAAAASMXXASAXXMAMXAXASASMMMMMMSMSXXAAXMXMAMSAXSXMMMMSSMXXMMXMAM",
  "SSMMSMASMMMAAAAASMSSSMSSMMASMMMXXAXSAAAAASASXSSXMAXAMXSMMXMAXAMMMMSMMXMAXAAXSSSMSASXSMAMMMXMSMSSMSSMMMSAMXXXXMASMMSAAXMMSXMSAXSMXMAXMAMAMMMM",
  "AAAAXXAMAAXMSSSMSAMAAAXAMXAMASAMMSMMXMMSMMMSAXMAMASAMMAMXSMMSAMXAXAMMSSMSXXMXAAAXAMAXMXMXXXMXAAAXAXXAASASXSMSXXMSASMMMSMMSASAMXMSSSMSAMASASA",
  "SSMMSMMSMMSXMMAMXAMSMMSXXMXSAMASAXXMASXXASAMXMMAMXSMMSAMAXAAMAMMXXASAAAMMMMAMXMSMMMSMMMXXMAMAMMSMSAMAMMAMAXAXMXSMMSAXAAAASMMMMAXXAMASXXXSASX",
  "XAASAMMAMSMXSSMMSAMXXMAMXMAMMSXMXSASXSASAMXSMASXSMSMMSAMASMMSXMASXMMMSSMAAXSXMXAXAAAAXASXMMASXMXXAAXAXXAMXMSMMMXAASXMMSMMSXMAMXSMAMAMMMMMMMM",
  "SMMMASMMMAAAMAMAMASAMMAMXMASMSMSXSXMAMMMMMMAXXAASASAAMAMXMAAXAMXSASAMAXMMSXMASXMASMSXMMSAAMAMAMAMSMMMSSMMXMMAMAMSMSASAAAMXASXSSXXXMAMMASAMAM",
  "AXAMAMAASMSMSAMXSAMAMXSXMXXMXMASAMAMSMAAAMSMSAMXMASMMSMMAMSMSSMAMAMAMXXSAMXSAMAXXMMMMSXSMMMASAMXAAXAAMMSSXMSAMSMXASAMSSMMSMMAXAMAXMMMSMSAXMS",
  "XSXMMSXMMAAXSXSAMXSAMMXAMSMSMMAMAMAMAMSSXMAMMMMXMAMXMAMSXXMAAMMSSMXAMXMMASASXSXMASAAXAAMAMMXMAMMMASMXSAAMXMMASXAXAMAMAMAASAMXMMAXMASASXSXMXM",
  "XMASXMMMMSMMXXMASXMASAMAMAAAXMAMSMSXSXMAMSMXAAXXMXSMSAMAMAMMMSAMAXMAXXMSMMASMSMSMSMMMMMMMXSASMMSXMXMMMMMSMXMMSMMMXMXMASMMSMMAMXSXMXAASAMMSAA",
  "XSSMMMAAMAMMMMMAAASXMMMAMMMMXMAMMAMAMMMAMSXSXSSMMMMASMSAMXSMAMAMAMMMMMMAXMAMXSASXSAMXAAMXMXAAMAMAXAMAAAMAAXMAXAMXSXXMXSMASMXXSMMAXAMMMAMAMAS",
  "XSAMASXSSMMAAAMMMMMAAXSSSSMXMMSAMAMMMSSSMSASAAXMAAMXMASXMAAMASMMSSSXAASASMXXMMAMAXAMSMMXXMMMMMMSMMMSSSSSSSMMXSXMASMMSAMXMMMSAAAXMXXXAMSMMSAX",
  "XMAMXMXMXXSSSSMXAAMXMMMXAXAMXAAMMAMAAMMMAMAMMMMSSMMAMAMAMMMSASAMXAAMSXSXXMMMMMAMMMSMMAAAAMAMXMAAAAXMAAAAAXAXAMAMAXAAMASMSAAAASMAMMSXMMMAMMAM",
  "SSMMASASAMMMAXASMXSAAAXMSMMXMASMSXSMXXAMXMXMAXMAMXSSXXSXMXXMASMMMMMAXMMMAXAAMMSXXXMAXMMMASASAMSXXMMMMMMMMSMMSSMMSSMMSAMXSMSSMAXXXAAMSAMAMMXM",
  "MASXXSASAXAMXMMXAASMSMMAMAMAMAXAXASXXMAMXXXXXMMAXMMXAXSXSAXMASAMSSXMMAAASMSXSAMSAMSSMSSMXXASXMMMSSMXSXXAXAASAMXAAAAXMMSAXXAAMAMSMXSASASASMSM",
  "SAMXMMXMASXSMSXMSMXXXMXXXAMAMMXSMMMAMSSMMSSXSXSMSAAMXMMASMMMMSMMAAAXSMMXXXAAMAMAXMAMMAAMMMMMXMAAAAMAXMXMSSSMXSMMSSSMMMMMSMSSMMXSAAMMSAMASAXS",
  "MXMAASXMXMXAASMMMSSMMAASXSXMSAAXASMXMAAAAXXASAMAXMXMAAMAMMAAMMXMMMXMMSXMXMXSSMMMXMASMSXMAAAXASMMSSMSXSAMXXMAXSXMXAMAAXMAXAAMAMAMXMMAMAMAMAMX",
  "SSSSMMAMXMMMMMASAAMAXMMSAMXAMMXSAMXXMXSMMSMMMMMSMMMSSSMAXSSXSAAMXXAMXAXXMMXXMAAXASXMXXXSXSXMXSXAAAXMASXSMSMXMXAXMAMSSSSSMMMMAMASMXXSSMMSSXMM",
  "XMAMASXMMAAXXSAMMSSSMSXMAMMXMXMMMMXMSAMXAMXMAXXAAAAXMXXMMMAAAMMSSSMSMMXSASASMSMSMSAMXMASAMMSMXMMSSMMAMAMAAAASMMMSMMAAAAMMASXXSAXAMXAAAAAXASX",
  "XMASMSAMXSSSXMASAAMAASAMSMAAAXAAAAAAMASMMSASASXSSMSSXAXMASMMMASXAMSAAAASXMASAAXAMXXMAMSMAMAAAAMMXMAMASAMSMSMSAMAAAMMMMMMSASXAMXMSAMSSMMSSXMM",
  "MMXSXSXMAMAMXSSMMSSMMMXMAMSAMXSSSSXSAMXMSSXSXSAAXAXAMMMSASXXASAMXMXSSMXSSMXMMMSMSXASXSXMXMSMSASASXSSXSXMXAMMSXMSSSMSAMXXMASMSMXAXSAAAAXMMXMS",
];

const maxX = puzzleInput[0].length - 1;
const maxY = puzzleInput.length - 1;
const maxDepth = 4;
const directions = 8;

enum Direction {
  UP = 1,
  DOWN,
  LEFT,
  RIGHT,
  UPRIGHT,
  UPLEFT,
  DOWNRIGHT,
  DOWNLEFT,
}

class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  copy(): Coordinate {
    return new Coordinate(this.x, this.y);
  }

  getLetter(): string {
    return puzzleInput[this.y][this.x];
  }
}

function getExpectedValue(depth: number): string | null {
  // Takes in a current depth and returns the character we are expecting to get at that point
  switch (depth) {
    case 0: {
      return "X";
    }
    case 1: {
      return "M";
    }
    case 2: {
      return "A";
    }
    case 3: {
      return "S";
    }
    default: {
      return null;
    }
  }
}

function getNextCoordinate(
  coord: Coordinate,
  direction: Direction,
): Coordinate | Error {
  let newCoord = coord.copy();

  switch (direction) {
    case Direction.UP: {
      newCoord.y -= 1;
      break;
    }
    case Direction.DOWN: {
      newCoord.y += 1;
      break;
    }
    case Direction.LEFT: {
      newCoord.x -= 1;
      break;
    }
    case Direction.RIGHT: {
      newCoord.x += 1;
      break;
    }
    case Direction.UPRIGHT: {
      newCoord.x += 1;
      newCoord.y -= 1;
      break;
    }
    case Direction.DOWNRIGHT: {
      newCoord.x += 1;
      newCoord.y += 1;
      break;
    }
    case Direction.UPLEFT: {
      newCoord.x -= 1;
      newCoord.y -= 1;
      break;
    }
    case Direction.DOWNLEFT: {
      newCoord.x -= 1;
      newCoord.y += 1;
      break;
    }
    default: {
      return new Error(`Unknown direction ${direction}.`);
    }
  }

  console.log(`Getting next coord: (${newCoord.x}, ${newCoord.y})`);

  if (newCoord.x < 0 || newCoord.x > maxX) {
    return new Error("X coordinate invalid");
  } else if (newCoord.y < 0 || newCoord.y > maxY) {
    return new Error("Y coordinate invalid");
  } else {
    return newCoord;
  }
}

// Naive approach: going through every character on every line and DFS-ing them to find a match
function searchForX(coord: Coordinate): number {
  const topLeftCoord = getNextCoordinate(coord, Direction.UPLEFT);
  const topRightCoord = getNextCoordinate(coord, Direction.UPRIGHT);
  const bottomLeftCoord = getNextCoordinate(coord, Direction.DOWNLEFT);
  const bottomRightCoord = getNextCoordinate(coord, Direction.DOWNRIGHT);

  if (
    topLeftCoord instanceof Error ||
    topRightCoord instanceof Error ||
    bottomLeftCoord instanceof Error ||
    bottomRightCoord instanceof Error
  ) {
    return 0;
  }

  // Check for an X
  if (
    ((topLeftCoord.getLetter() == "M" && bottomRightCoord.getLetter() == "S") ||
      (topLeftCoord.getLetter() == "S" &&
        bottomRightCoord.getLetter() == "M")) &&
    ((topRightCoord.getLetter() == "M" && bottomLeftCoord.getLetter() == "S") ||
      (topRightCoord.getLetter() == "S" && bottomLeftCoord.getLetter() == "M"))
  ) {
    return 1;
  }
  return 0;
}

function solve() {
  let matches = 0;
  for (var y = 0; y <= maxY; y++) {
    for (var x = 0; x <= maxX; x++) {
      const coord = new Coordinate(x, y);

      // Shortcut: If the coordinate isn't "A" it cannot be the center of the X-MAS so skip over it
      if (coord.getLetter() != "A") {
        continue;
      }

      console.log(`Starting new search at (${coord.x}, ${coord.y}).`);
      matches += searchForX(coord);
    }
  }
  return matches;
}

console.log(solve());