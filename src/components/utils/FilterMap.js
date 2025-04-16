export const filterNameToCodeMap = {
  12: {
    자연관광지: ["A0101"],
    관광자원: ["A0102"],
    역사관광지: ["A0201"],
    휴양관광지: ["A0202"],
    체험관광지: ["A0203"],
    산업관광지: ["A0204"],
    "건축/조형물": ["A0205"],
  },
  14: {
    문화시설: ["A0206"],
    축제: ["A0207"],
    "공연/행사": ["A0208"],
    육상레포츠: ["A0302"],
    수상레포츠: ["A0303"],
    항공레포츠: ["A0304"],
    복합레포츠: ["A0305"],
    쇼핑: ["A0401"],
  },
  32: {
    "관광호텔/콘도미니엄": ["B02010100", "B02010500"],
    "유스호스텔/레지던스": ["B02010600", "B02011300"],
    팬션: ["B02010700"],
    "모텔/민박": ["B02010900", "B02011000"],
    게스트하우스: ["B02011100"],
    홈스테이: ["B02011200"],
    한옥: ["B02011600"],
  },
  39: {
    한식: ["A05020100"],
    서양식: ["A05020200"],
    일식: ["A05020300"],
    중식: ["A05020400"],
    이색음식점: ["A05020700"],
    "카페/전통찻집": ["A05020900"],
    클럽: ["A05021000"],
  },
};

// 한글필터명을 코드로 바꿔주는 함수!
export const convertFiltersToCodes = (placeTypeId, selectedFilters) => {
  const typeMap = filterNameToCodeMap[placeTypeId] || {};
  return selectedFilters.flatMap((filterName) => typeMap[filterName] || []);
};
