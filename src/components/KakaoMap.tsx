"use client";

import { useEffect, useRef, useState } from "react";

/* ── Kakao Map 타입 선언 ── */
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (container: HTMLElement, options: Record<string, unknown>) => {
          setCenter: (latlng: unknown) => void;
          setLevel: (level: number) => void;
        };
        Marker: new (options: Record<string, unknown>) => unknown;
        InfoWindow: new (options: Record<string, unknown>) => {
          open: (map: unknown, marker: unknown) => void;
        };
        CustomOverlay: new (options: Record<string, unknown>) => unknown;
        ZoomControl: new () => unknown;
      };
    };
  }
}

interface KakaoMapProps {
  lat?: number;
  lng?: number;
  level?: number;
  placeName?: string;
  address?: string;
}

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY || "";

/* 강남역 근처 기본 좌표 */
const DEFAULT_LAT = 37.4979;
const DEFAULT_LNG = 127.0276;

export default function KakaoMap({
  lat = DEFAULT_LAT,
  lng = DEFAULT_LNG,
  level = 3,
  placeName = "수한의원",
  address = "서울특별시 강남구 테헤란로 123 수한빌딩 2층",
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!KAKAO_APP_KEY) {
      setError(true);
      return;
    }

    /* 이미 SDK가 로드되어 있으면 바로 초기화 */
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => setLoaded(true));
      return;
    }

    /* SDK 스크립트 로드 */
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => setLoaded(true));
    };
    script.onerror = () => setError(true);
    document.head.appendChild(script);

    return () => {
      /* cleanup: 중복 방지 */
    };
  }, []);

  useEffect(() => {
    if (!loaded || !mapRef.current) return;

    const { kakao } = window;
    const position = new kakao.maps.LatLng(lat, lng);

    const map = new kakao.maps.Map(mapRef.current, {
      center: position,
      level,
    });

    /* 마커 */
    const marker = new kakao.maps.Marker({
      map,
      position,
    });

    /* 커스텀 오버레이 (말풍선) */
    const overlayContent = `
      <div style="
        padding: 10px 16px;
        background: #2D5A27;
        color: white;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateY(-8px);
        white-space: nowrap;
      ">
        ${placeName}
        <div style="
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #2D5A27;
        "></div>
      </div>
    `;

    new kakao.maps.CustomOverlay({
      map,
      position,
      content: overlayContent,
      yAnchor: 2.8,
    });
  }, [loaded, lat, lng, level, placeName]);

  /* API 키 없을 때 폴백 UI */
  if (error || !KAKAO_APP_KEY) {
    return (
      <div className="w-full h-full bg-sand flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        {/* 배경 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2D5A27 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* 지도 아이콘 */}
        <div className="relative w-20 h-20 rounded-2xl bg-forest/10 flex items-center justify-center mb-5">
          <svg
            className="w-10 h-10 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-forest rounded-full flex items-center justify-center">
            <span className="text-white text-[10px]">✓</span>
          </div>
        </div>

        <p className="relative text-lg font-serif font-semibold text-ink mb-1">
          {placeName}
        </p>
        <p className="relative text-sm text-ink-muted mb-5">{address}</p>

        <div className="relative flex flex-wrap gap-3 justify-center">
          <a
            href={`https://map.kakao.com/link/map/${placeName},${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#FEE500] text-[#3C1E1E] rounded-full text-sm font-medium hover:brightness-95 transition-all"
          >
            카카오맵에서 보기
          </a>
          <a
            href={`https://map.naver.com/v5/search/${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#03C75A] text-white rounded-full text-sm font-medium hover:brightness-95 transition-all"
          >
            네이버 지도에서 보기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full" />

      {/* 지도 위 하단 오버레이 - 주소 + 길찾기 */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 lg:p-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-white font-semibold text-sm lg:text-base">
              {placeName}
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-0.5">
              {address}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={`https://map.kakao.com/link/to/${placeName},${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/90 text-ink rounded-lg text-xs font-medium hover:bg-white transition-colors"
            >
              길찾기
            </a>
            <a
              href={`https://map.kakao.com/link/map/${placeName},${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-forest text-white rounded-lg text-xs font-medium hover:bg-forest-dark transition-colors"
            >
              크게 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
