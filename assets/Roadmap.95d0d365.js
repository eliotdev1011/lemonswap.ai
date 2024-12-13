import {
  s as q,
  m as x,
  r as m,
  am as y,
  $ as p,
  x as _,
  G as a,
  D as e,
  Z as k,
  a8 as b,
  Q as f,
  a0 as u,
  H as l,
  F as v,
} from "./index.d1971cae.js";
var g = "/assets/icon-star-black.4e7ccfab.svg",
  w = "/assets/icon-star.4b7c9ca7.svg",
  I = "";
const M = {
    setup() {
      const { t } = x(),
        n = m(0),
        i = m(5),
        o = [
          { title: "", title_second: "", content: "", key: 1 },
          {
            title: t("routes.home.road_map.q2_2022.title"),
            title_second: t("routes.home.road_map.q2_2022.title_second"),
            content: t("routes.home.road_map.q2_2022.content"),
            key: 2,
          },
          {
            title: t("routes.home.road_map.q4_2022.title"),
            title_second: t("routes.home.road_map.q4_2022.title_second"),
            content: t("routes.home.road_map.q4_2022.content"),
            key: 3,
          },
          {
            title: t("routes.home.road_map.q1_2023.title"),
            title_second: t("routes.home.road_map.q1_2023.title_second"),
            content: t("routes.home.road_map.q1_2023.content"),
            key: 4,
          },
          {
            title: t("routes.home.road_map.q3_2023.title"),
            title_second: t("routes.home.road_map.q3_2023.title_second"),
            content: t("routes.home.road_map.q3_2023.content"),
            key: 5,
          },
          {
            title: t("routes.home.road_map.q1_2024.title"),
            title_second: t("routes.home.road_map.q1_2024.title_second"),
            content: t("routes.home.road_map.q1_2024.content"),
            key: 6,
          },
          {
            title: t("routes.home.road_map.q3_2024.title"),
            title_second: t("routes.home.road_map.q3_2024.title_second"),
            content: t("routes.home.road_map.q3_2024.content"),
            key: 7,
          },
        ],
        d = [
          { title: "", title_second: "", content: "", key: 1 },
          {
            title: t("routes.home.road_map.q3_2022.title"),
            title_second: t("routes.home.road_map.q3_2022.title_second"),
            content: t("routes.home.road_map.q3_2022.content"),
            key: 2,
          },
          {
            title: t("routes.home.road_map.q2_2023.title"),
            title_second: t("routes.home.road_map.q2_2023.title_second"),
            content: t("routes.home.road_map.q2_2023.content"),
            key: 3,
          },
          {
            title: t("routes.home.road_map.q4_2023.title"),
            title_second: t("routes.home.road_map.q4_2023.title_second"),
            content: t("routes.home.road_map.q4_2023.content"),
            key: 4,
          },
          {
            title: t("routes.home.road_map.q2_2024.title"),
            title_second: t("routes.home.road_map.q2_2024.title_second"),
            content: t("routes.home.road_map.q2_2024.content"),
            key: 5,
          },
          {
            title: t("routes.home.road_map.q4_2024.title"),
            title_second: t("routes.home.road_map.q4_2024.title_second"),
            content: t("routes.home.road_map.q4_2024.content"),
            key: 6,
          },
          { title: "", title_second: "", content: "", key: 7 },
        ],
        c = [
          {
            title: t("routes.home.road_map.q2_2022.title"),
            title_second: t("routes.home.road_map.q2_2022.title_second"),
            content: t("routes.home.road_map.q2_2022.content"),
            key: 1,
          },
          {
            title: t("routes.home.road_map.q3_2022.title"),
            title_second: t("routes.home.road_map.q3_2022.title_second"),
            content: t("routes.home.road_map.q3_2022.content"),
            key: 2,
          },
          {
            title: t("routes.home.road_map.q4_2022.title"),
            title_second: t("routes.home.road_map.q4_2022.title_second"),
            content: t("routes.home.road_map.q4_2022.content"),
            key: 3,
          },
          {
            title: t("routes.home.road_map.q1_2023.title"),
            title_second: t("routes.home.road_map.q1_2023.title_second"),
            content: t("routes.home.road_map.q1_2023.content"),
            key: 4,
          },
          {
            title: t("routes.home.road_map.q2_2023.title"),
            title_second: t("routes.home.road_map.q2_2023.title_second"),
            content: t("routes.home.road_map.q2_2023.content"),
            key: 5,
          },
          {
            title: t("routes.home.road_map.q3_2023.title"),
            title_second: t("routes.home.road_map.q3_2023.title_second"),
            content: t("routes.home.road_map.q3_2023.content"),
            key: 6,
          },
          {
            title: t("routes.home.road_map.q4_2023.title"),
            title_second: t("routes.home.road_map.q4_2023.title_second"),
            content: t("routes.home.road_map.q4_2023.content"),
            key: 7,
          },
          {
            title: t("routes.home.road_map.q1_2024.title"),
            title_second: t("routes.home.road_map.q1_2024.title_second"),
            content: t("routes.home.road_map.q1_2024.content"),
            key: 8,
          },
          {
            title: t("routes.home.road_map.q2_2024.title"),
            title_second: t("routes.home.road_map.q2_2024.title_second"),
            content: t("routes.home.road_map.q2_2024.content"),
            key: 9,
          },
          {
            title: t("routes.home.road_map.q3_2024.title"),
            title_second: t("routes.home.road_map.q3_2024.title_second"),
            content: t("routes.home.road_map.q3_2024.content"),
            key: 10,
          },
          {
            title: t("routes.home.road_map.q4_2024.title"),
            title_second: t("routes.home.road_map.q4_2024.title_second"),
            content: t("routes.home.road_map.q4_2024.content"),
            key: 11,
          },
        ];
      return (
        y(() => {
          var r;
          (n.value =
            ((r = document.getElementById("1item-roadmap")) == null
              ? void 0
              : r.offsetWidth) /
              2 +
            "px"),
            console.log(n.value);
        }),
        {
          t,
          LIST_ROAD_MAP_TOP: o,
          LIST_ROAD_MAP_BOTTOM: d,
          LIST_ROADMAP_MOBILE: c,
          withItem: n,
          timeCount: i,
          StarBlack: g,
          IconStar: w,
          Roadmap: I,
        }
      );
    },
  },
  T = { class: "w-full box flex justify-center items-center flex-col" },
  L = e(
    "h2",
    {
      id: "roadmap",
      class:
        "title-main-section text-center tablet:text-3xl mobile:text-2xl mb-[115px]",
    },
    null,
    -1
  ),
  O = {
    class: "mobile:hidden tablet:hidden w-full flex justify-center",
    style: { "z-index": "10" },
  },
  R = ["src"],
  A = {
    class:
      "grid-cols-1 pb-[200px] relative border-l border-yellow-1 tablet:max-w-[500px] hidden tablet:grid mobile:grid",
  },
  B = ["id"],
  D = { class: "flex flex-col gap-[6px]" },
  S = { class: "text-yellow-1 font-semibold text-xl" },
  P = { class: "text-white font-semibold text-sm" },
  E = ["innerHTML"],
  j = ["src"],
  H = { class: "half-circle-mobile" },
  z = { class: "h-full flex items-end justify-end relative" },
  C = {
    class:
      "text-yellow-1 text-base absolute w-[150px] bottom-[80px] left-[20px]",
  };
function F(t, n, i, o, d, c) {
  const r = p("motion-title-session"),
    h = p("motion-continue-roadmap");
  return (
    _(),
    a("div", T, [
      L,
      e("div", O, [e("img", { src: o.Roadmap }, null, 8, R)]),
      e("div", A, [
        (_(!0),
        a(
          k,
          null,
          b(
            o.LIST_ROADMAP_MOBILE,
            (s) => (
              _(),
              a(
                "div",
                {
                  id: s.key + "item-roadmap-mobile",
                  class: f([" w-full relative px-[20px] pb-[20px]"]),
                  key: s.key + "roadmap-mobile",
                },
                [
                  e("div", null, [
                    u(
                      (_(),
                      a("div", D, [
                        e("p", S, l(s.title), 1),
                        e("p", P, l(s.title_second), 1),
                        e(
                          "p",
                          {
                            class: "text-sm text-neuture-500",
                            innerHTML: s.content,
                          },
                          null,
                          8,
                          E
                        ),
                      ])),
                      [[r]]
                    ),
                    e(
                      "img",
                      {
                        style: "scale: 0.65",
                        class: "absolute top-0 -left-[19px]",
                        src: o.IconStar,
                      },
                      null,
                      8,
                      j
                    ),
                  ]),
                ],
                8,
                B
              )
            )
          ),
          128
        )),
        e("div", H, [
          e("div", z, [
            u(
              (_(),
              a("p", C, [v(l(o.t("routes.home.road_map.to_continue")), 1)])),
              [[h]]
            ),
          ]),
        ]),
      ]),
    ])
  );
}
var V = q(M, [["render", F]]);
export { V as default };
