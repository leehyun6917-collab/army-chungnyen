// 네이버 GFA 공통 스크립트 (wcslog.js 로드 후 실행)
(function () {
  if (!window.wcs_add) window.wcs_add = {};
  window.wcs_add["wa"] = "s_44600ffde7ee";
  if (window.wcs) {
    wcs.inflow("yedi.kr");
    wcs_do();
  }

  // 카카오 채널 상담 클릭 전환 (custom001) - 클릭 1회당 1회 전송
  window.naverKakaoConversion = function () {
    try {
      if (window.wcs && typeof window.wcs.trans === "function") {
        window.wcs.trans({ type: "custom001" });
      }
    } catch (e) {}
  };
})();
