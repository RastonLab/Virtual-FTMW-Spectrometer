import * as React from "react";
const SvgInstrumentWindowComponent = ({ molecule, range, frequency, cyclePerStep, pressure, mwBand, onDisplayCLick, onNavigateClick, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    id="svg337"
    viewBox="0 0 475 366"
    {...props}
  >
    <defs id="defs202">
      <linearGradient id="linearGradient343">
        <stop id="stop338" offset={0} stopColor="#4a4a4a" />
        <stop id="stop339" offset={0.201} stopColor="#5b5b5b" />
        <stop id="stop341" offset={0.6} stopColor="#424242" />
        <stop id="stop342" offset={0.802} stopColor="#6b6b6b" />
        <stop id="stop343" offset={1} stopColor="#4a4a4a" />
      </linearGradient>
      <linearGradient
        id="linearGradient215"
        x1={30.45}
        x2={52.339}
        y1={25.877}
        y2={25.877}
        gradientTransform="matrix(6.3749 0 0 6.7676 -134.26 -142.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop210" offset={0} stopColor="#5f5f5f" />
        <stop
          id="stop211"
          offset={0.704}
          stopColor="gray"
          style={{ stopColor: "#6b6b6b", stopOpacity: 1 }}
        />
        <stop
          id="stop215"
          offset={1}
          stopColor="#848484"
          style={{ stopColor: "#8d8d8d", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient
        id="linearGradient208"
        x1={30.45}
        x2={52.339}
        y1={25.877}
        y2={25.877}
        gradientTransform="matrix(6.3749 0 0 6.7676 -134.26 -142.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop203" offset={0.083} stopColor="#5f5f5f" />
        <stop id="stop204" offset={0.283} stopColor="gray" />
        <stop id="stop205" offset={0.4} stopColor="#737373" />
        <stop id="stop206" offset={0.598} stopColor="#787878" />
        <stop id="stop207" offset={0.799} stopColor="#bdbdbd" />
        <stop id="stop208" offset={1} stopColor="#848484" />
      </linearGradient>
      <linearGradient id="linearGradient158">
        <stop id="stop1" offset={0.415} stopColor="#007300" />
        <stop id="stop2" offset={0.822} stopColor="#188518" />
      </linearGradient>
      <linearGradient id="linearGradient34313">
        <stop id="stop3" offset={0} stopColor="#949494" />
        <stop id="stop4" offset={0.198} stopColor="#5b5b5b" />
        <stop id="stop5" offset={0.396} stopColor="#8d8d8d" />
        <stop id="stop6" offset={0.6} stopColor="#848484" />
        <stop id="stop7" offset={0.8} stopColor="#9c9c9c" />
        <stop id="stop8" offset={1} stopColor="#a0a0a0" />
      </linearGradient>
      <linearGradient id="linearGradient28435">
        <stop id="stop9" offset={0} stopColor="#8c8c8c" />
        <stop id="stop10" offset={0.2} stopColor="gray" />
        <stop id="stop11" offset={0.4} stopColor="#5a5a5a" />
        <stop id="stop12" offset={0.6} stopColor="#a7a7a7" />
        <stop id="stop13" offset={0.8} stopColor="#626262" />
        <stop id="stop14" offset={1} stopColor="#cdcdcd" />
      </linearGradient>
      <linearGradient
        id="linearGradient27658"
        x1={29.185}
        x2={53.409}
        y1={38.913}
        y2={38.913}
        gradientTransform="matrix(6.3749 0 0 6.7676 -134.26 -142.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop15" offset={0} stopColor="#676767" />
        <stop id="stop16" offset={0.204} stopColor="#949494" />
        <stop id="stop17" offset={0.403} stopColor="#737373" />
        <stop id="stop18" offset={0.598} stopColor="#a7a7a7" />
        <stop id="stop19" offset={0.796} stopColor="silver" />
        <stop id="stop20" offset={1} stopColor="#c8c8c8" />
      </linearGradient>
      <linearGradient
        id="linearGradient27761"
        x1={30.45}
        x2={52.339}
        y1={25.877}
        y2={25.877}
        gradientTransform="matrix(6.3749 0 0 6.7676 -134.26 -142.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          id="stop21"
          offset={0}
          stopColor="#5f5f5f"
          style={{ stopColor: "#616161", stopOpacity: 1 }}
        />
        <stop
          id="stop22"
          offset={0.204}
          stopColor="gray"
          style={{ stopColor: "#7f7f7f", stopOpacity: 1 }}
        />
        <stop id="stop23" offset={0.4} stopColor="#737373" />
        <stop id="stop24" offset={0.598} stopColor="#787878" />
        <stop id="stop25" offset={0.799} stopColor="#bdbdbd" />
        <stop id="stop26" offset={1} stopColor="#848484" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient28437"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="translate(-134.65 128.68)scale(6.3749)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient34313"
        id="linearGradient34315"
        x1={52.496}
        x2={52.269}
        y1={41.158}
        y2={53.063}
        gradientTransform="translate(-128.68 -134.65)scale(6.3749)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient40247"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="matrix(6.3749 0 0 4.9931 -324.62 467.59)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient34313"
        id="linearGradient41703"
        x1={52.496}
        x2={52.269}
        y1={41.158}
        y2={53.063}
        gradientTransform="matrix(4.2205 0 0 3.4584 -92.453 103.97)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient44613"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="matrix(6.3749 0 0 .69125 -247.41 -191.16)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient44617"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="matrix(6.3749 0 0 .84487 -247.41 -154.62)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient47525"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="matrix(6.3766 0 0 .68625 -610.04 -223.91)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient80317"
        x1={71.771}
        x2={93.541}
        y1={65.648}
        y2={48.301}
        gradientTransform="translate(-293.48 -140.43)scale(6.3749)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop27" offset={0} stopColor="#8d8d8d" />
        <stop id="stop28" offset={0.2} stopColor="#989898" />
        <stop id="stop29" offset={0.4} stopColor="#4a4a4a" />
        <stop id="stop30" offset={0.6} stopColor="#828282" />
        <stop id="stop31" offset={0.8} stopColor="#4b4b4b" />
        <stop id="stop32" offset={1} stopColor="#cacaca" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient28435"
        id="linearGradient82507"
        x1={70.977}
        x2={70.977}
        y1={-30.953}
        y2={-49.775}
        gradientTransform="matrix(6.3749 0 0 2.4206 -286.24 -182.71)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient31314">
        <stop id="stop33" offset={0.077} stopColor="#b3b3b3" />
        <stop id="stop34" offset={0.249} stopColor="#d2d2d2" />
        <stop id="stop35" offset={0.41} stopColor="#9c9c9c" />
        <stop id="stop36" offset={0.618} stopColor="#afafaf" />
        <stop id="stop37" offset={0.779} stopColor="#d0d0d0" />
        <stop id="stop38" offset={0.955} stopColor="#989898" />
      </linearGradient>
      <linearGradient id="linearGradient44730">
        <stop id="stop39" offset={0} stopColor="#4a4a4a" />
        <stop id="stop40" offset={0.201} stopColor="#5b5b5b" />
        <stop id="stop41" offset={0.4} stopColor="#8a8a8a" />
        <stop id="stop42" offset={0.6} stopColor="#424242" />
        <stop id="stop43" offset={0.802} stopColor="#6b6b6b" />
        <stop id="stop44" offset={1} stopColor="#4a4a4a" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient44730"
        id="linearGradient55895-5-1"
        x1={58.135}
        x2={77.913}
        y1={65.447}
        y2={65.566}
        gradientTransform="matrix(5.54 0 0 5.0307 -1082.1 -273.69)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient76316-0-8"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(-.01277 .92162 -.85242 .02159 -460.53 -221.46)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient48503-5-4"
        x1={32.603}
        x2={77.553}
        y1={49.265}
        y2={49.025}
        gradientTransform="matrix(5.54 0 0 5.0307 -797.85 -260.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop45" offset={0} stopColor="#424242" />
        <stop id="stop46" offset={0.2} stopColor="#828282" />
        <stop id="stop47" offset={0.4} stopColor="#929292" />
        <stop id="stop48" offset={0.6} stopColor="#a5a5a5" />
        <stop id="stop49" offset={0.796} stopColor="#878787" />
        <stop id="stop50" offset={1} stopColor="#2d2d2d" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient44730"
        id="linearGradient44732-4-3"
        x1={58.135}
        x2={77.913}
        y1={65.447}
        y2={65.566}
        gradientTransform="matrix(5.54 0 0 5.0307 -797.85 -260.42)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient39"
        x1={-762.93}
        x2={-762.93}
        y1={-43.439}
        y2={65.526}
        gradientTransform="translate(-.365 -.05)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient12628-8"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop51" offset={0.05} stopColor="#989898" />
        <stop id="stop52" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop53" offset={0.38} stopColor="#afafaf" />
        <stop id="stop54" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop55" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop56" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        id="linearGradient75726-1"
        x1={6.357}
        x2={18.098}
        y1={24.031}
        y2={24.152}
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop57" offset={0} stopColor="#2f2f2f" />
        <stop id="stop58" offset={0.249} stopColor="#474747" />
        <stop id="stop59" offset={0.5} stopColor="#787878" />
        <stop id="stop60" offset={0.75} stopColor="#4f4f4f" />
        <stop id="stop61" offset={1} stopColor="#3d3d3d" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient12628-8"
        id="linearGradient40"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.9537 0 0 1 678.12 0)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient215"
        id="linearGradient32"
        x1={86.629}
        x2={484.604}
        y1={211.974}
        y2={211.663}
        gradientTransform="matrix(.83503 0 0 1 82.674 0)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient12628-8"
        id="linearGradient72"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.9537 0 0 1 534.76 0)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient18505"
        id="linearGradient18507"
        x1={1942}
        x2={1942}
        y1={2403.4}
        y2={2360.4}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient18505">
        <stop id="stop62" offset={0.051} stopColor="#989898" />
        <stop id="stop63" offset={0.252} stopColor="#d0d0d0" />
        <stop id="stop64" offset={0.412} stopColor="#afafaf" />
        <stop id="stop65" offset={0.624} stopColor="#9c9c9c" />
        <stop id="stop66" offset={0.78} stopColor="#8c8c8c" />
        <stop id="stop67" offset={0.945} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient18521"
        id="linearGradient18523"
        x1={2074.4}
        x2={2119.4}
        y1={2328.4}
        y2={2328.4}
        gradientTransform="translate(-2.57 81.019)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient18521">
        <stop id="stop68" offset={0.055} stopColor="#989898" />
        <stop id="stop69" offset={0.249} stopColor="#d0d0d0" />
        <stop id="stop70" offset={0.409} stopColor="#afafaf" />
        <stop id="stop71" offset={0.624} stopColor="#9c9c9c" />
        <stop id="stop72" offset={0.783} stopColor="#8c8c8c" />
        <stop id="stop73" offset={0.952} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient17757"
        id="linearGradient17759"
        x1={1763.7}
        x2={1808.7}
        y1={2425.5}
        y2={2425.5}
        gradientTransform="matrix(1 0 0 2.05664 0 -2532.389)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient17757">
        <stop id="stop74" offset={0.051} stopColor="#989898" />
        <stop id="stop75" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop76" offset={0.376} stopColor="#afafaf" />
        <stop id="stop77" offset={0.588} stopColor="#9c9c9c" />
        <stop id="stop78" offset={0.751} stopColor="#8c8c8c" />
        <stop id="stop79" offset={0.949} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient16079"
        id="linearGradient16139"
        x1={2070.9}
        x2={2122.9}
        y1={2381.7}
        y2={2381.7}
        gradientTransform="translate(-310.65)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient16079">
        <stop id="stop80" offset={0.08} stopColor="#b3b3b3" />
        <stop id="stop81" offset={0.25} stopColor="#828282" />
        <stop id="stop82" offset={0.41} stopColor="#9c9c9c" />
        <stop id="stop83" offset={0.62} stopColor="#afafaf" />
        <stop id="stop84" offset={0.78} stopColor="#d0d0d0" />
        <stop id="stop85" offset={0.95} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient16079"
        id="linearGradient16081"
        x1={2070.9}
        x2={2122.9}
        y1={2381.7}
        y2={2381.7}
        gradientTransform="translate(-2.938)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient18521"
        id="linearGradient18523-1"
        x1={2074.4}
        x2={2119.4}
        y1={2328.4}
        y2={2328.4}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient17757"
        id="linearGradient17759-9"
        x1={1763.7}
        x2={1808.7}
        y1={2425.5}
        y2={2425.5}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient16079"
        id="linearGradient16081-6"
        x1={2070.9}
        x2={2122.9}
        y1={2381.7}
        y2={2381.7}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient256">
        <stop id="stop86" offset={0.492} stopColor="#c2c2c2" />
        <stop id="stop87" offset={0.529} stopColor="#7b7b7b" />
      </linearGradient>
      <linearGradient
        id="linearGradient3"
        x1={9.946}
        x2={163.29}
        y1={122.25}
        y2={122.25}
        gradientTransform="translate(52.503 -24.989)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop88" offset={0} stopColor="#dbe1e3" stopOpacity={0.699} />
        <stop
          id="stop89"
          offset={0.422}
          stopColor="#b0b8ba"
          stopOpacity={0.7}
        />
        <stop id="stop90" offset={1} stopColor="#c0cbcd" stopOpacity={0.7} />
      </linearGradient>
      <linearGradient
        id="linearGradient7"
        x1={81.791}
        x2={81.791}
        y1={30.61}
        y2={192.59}
        gradientTransform="translate(40.904 -35.03)scale(1.0771)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop91" offset={0.495} stopColor="#c2c2c2" />
        <stop id="stop92" offset={0.529} stopColor="#7b7b7b" />
      </linearGradient>
      <linearGradient
        id="linearGradient204"
        x1={78.801}
        x2={104.86}
        y1={182.29}
        y2={182.29}
        gradientTransform="translate(32.155 -24.275)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop93" offset={0} />
        <stop id="stop94" offset={0.5} stopColor="#484848" />
        <stop id="stop95" offset={1} stopColor="#919191" />
      </linearGradient>
      <linearGradient
        id="linearGradient243"
        x1={182.26}
        x2={182.26}
        y1={99.342}
        y2={134.94}
        gradientTransform="translate(64.997 -26.251)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop96" offset={0} stopColor="#5f5f5f" />
        <stop id="stop97" offset={0.5} stopColor="#484848" />
        <stop id="stop98" offset={1} stopColor="#919191" />
      </linearGradient>
      <linearGradient
        id="linearGradient250"
        x1={200.23}
        x2={200.17}
        y1={108.34}
        y2={125.81}
        gradientTransform="translate(64.997 -26.251)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop99" offset={0} stopColor="#bebebe" />
        <stop id="stop100" offset={0.5} stopColor="#dedede" />
        <stop id="stop101" offset={1} stopColor="#9c9c9c" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient256"
        id="linearGradient257"
        x1={214.15}
        x2={214.15}
        y1={66.806}
        y2={93.102}
        gradientTransform="translate(-26.159 -9.74)scale(1.1273)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient256"
        id="linearGradient258"
        x1={214.15}
        x2={214.15}
        y1={66.806}
        y2={93.102}
        gradientTransform="translate(-26.565 -22.809)scale(1.1273)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient256"
        id="linearGradient259"
        x1={214.15}
        x2={214.15}
        y1={66.806}
        y2={93.102}
        gradientTransform="translate(-25.862 2.526)scale(1.1273)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient256"
        id="linearGradient260"
        x1={214.15}
        x2={214.15}
        y1={66.806}
        y2={93.102}
        gradientTransform="translate(-25.497 13.899)scale(1.1273)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient29180">
        <stop id="stop102" offset={0.053} stopColor="#b3b3b3" />
        <stop id="stop103" offset={0.25} stopColor="#d2d2d2" />
        <stop id="stop104" offset={0.5} stopColor="#9c9c9c" />
        <stop id="stop105" offset={0.75} stopColor="#afafaf" />
        <stop id="stop106" offset={0.95} stopColor="#d0d0d0" />
      </linearGradient>
      <linearGradient id="linearGradient29166">
        <stop id="stop107" offset={0.05} stopColor="#b3b3b3" />
        <stop id="stop108" offset={0.25} stopColor="#d2d2d2" />
        <stop id="stop109" offset={0.5} stopColor="#9c9c9c" />
        <stop id="stop110" offset={0.75} stopColor="#afafaf" />
        <stop id="stop111" offset={0.95} stopColor="#d0d0d0" />
      </linearGradient>
      <linearGradient
        id="linearGradient2"
        x1={21}
        x2={383}
        y1={121.75}
        y2={121.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop112" offset={0.1} stopColor="#b3b3b3" />
        <stop id="stop113" offset={0.25} stopColor="#d2d2d2" />
        <stop id="stop114" offset={0.4} stopColor="#9c9c9c" />
        <stop id="stop115" offset={0.6} stopColor="#afafaf" />
        <stop id="stop116" offset={0.75} stopColor="#d0d0d0" />
        <stop id="stop117" offset={0.95} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient29180"
        id="linearGradient11"
        x1={47.5}
        x2={67.5}
        y1={115.59}
        y2={115.59}
        gradientTransform="translate(190.38 -29.624)scale(2.2472)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient29166"
        id="linearGradient12"
        x1={45}
        x2={70}
        y1={125.56}
        y2={125.56}
        gradientTransform="translate(190.38 -29.624)scale(2.2472)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient29166"
        id="linearGradient13"
        x1={45}
        x2={70}
        y1={125.56}
        y2={125.56}
        gradientTransform="translate(-39.124 -29.624)scale(2.2472)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient29180"
        id="linearGradient14"
        x1={47.5}
        x2={67.5}
        y1={115.59}
        y2={115.59}
        gradientTransform="translate(-39.124 -29.624)scale(2.2472)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient11659"
        id="linearGradient11661"
        x1={14.062}
        x2={21.062}
        y1={-4.875}
        y2={-4.875}
        gradientTransform="translate(-164.85 174.51)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="linearGradient11659">
        <stop id="stop118" offset={0.05} stopColor="#959595" />
        <stop id="stop119" offset={0.25} stopColor="#b4b4b4" />
        <stop id="stop120" offset={0.5} stopColor="#7e7e7e" />
        <stop id="stop121" offset={0.75} stopColor="#919191" />
        <stop id="stop122" offset={0.95} stopColor="#b2b2b2" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient11659"
        id="linearGradient10403"
        x1={12.562}
        x2={22.562}
        y1={2.375}
        y2={2.375}
        gradientTransform="translate(-164.85 174.51)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient11675"
        x1={21}
        x2={24}
        y1={-4.625}
        y2={-4.625}
        gradientTransform="translate(-164.85 174.51)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop123" offset={0.05} stopColor="#959595" />
        <stop id="stop124" offset={0.25} stopColor="#b4b4b4" />
        <stop id="stop125" offset={0.5} stopColor="#7e7e7e" />
        <stop id="stop126" offset={0.75} stopColor="#919191" />
        <stop id="stop127" offset={0.95} stopColor="#b2b2b2" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient11659"
        id="linearGradient11706"
        x1={15.562}
        x2={19.562}
        y1={-10.125}
        y2={-10.125}
        gradientTransform="translate(-164.85 174.51)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient11659"
        id="linearGradient12498"
        x1={12.562}
        x2={22.562}
        y1={-11.375}
        y2={-11.375}
        gradientTransform="matrix(10.629 0 0 7.5923 -218.18 174.51)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient12519"
        x1={3}
        x2={33}
        y1={40.375}
        y2={40.375}
        gradientTransform="translate(-162.71 178.3)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop128" offset={0.05} stopColor="#644896" />
        <stop id="stop129" offset={0.25} stopColor="#8e68cc" />
        <stop id="stop130" offset={0.5} stopColor="#734f96" />
        <stop id="stop131" offset={0.75} stopColor="#732a96" />
        <stop id="stop132" offset={0.95} stopColor="#731e96" />
      </linearGradient>
      <linearGradient
        id="linearGradient15522"
        x1={5.65}
        x2={30.547}
        y1={48.21}
        y2={48.21}
        gradientTransform="translate(-162.35 178.66)scale(7.5923)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop133" offset={0} stopColor="#8c8c8c" />
        <stop id="stop134" offset={0.203} stopColor="#a0a0a0" />
        <stop id="stop135" offset={0.601} stopColor="#8c8c8c" />
        <stop id="stop136" offset={1} stopColor="#787878" />
      </linearGradient>
      <linearGradient
        id="linearGradient2-3"
        x1={227.39}
        x2={234.53}
        y1={101.92}
        y2={101.92}
        gradientTransform="translate(28.523)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop137" offset={0} stopColor="#878787" />
        <stop id="stop138" offset={0.5} stopColor="#fff" />
        <stop id="stop139" offset={1} stopColor="#afafaf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient76316-0-8-4"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(.00141 -.56458 .09427 -.01322 -639.36 37.864)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient75726-5"
        x1={6.357}
        x2={18.098}
        y1={24.031}
        y2={24.152}
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop140" offset={0} stopColor="#2f2f2f" />
        <stop id="stop141" offset={0.249} stopColor="#474747" />
        <stop id="stop142" offset={0.5} stopColor="#787878" />
        <stop id="stop143" offset={0.75} stopColor="#4f4f4f" />
        <stop id="stop144" offset={1} stopColor="#3d3d3d" />
      </linearGradient>
      <linearGradient
        id="linearGradient36"
        x1={824.85}
        x2={922.59}
        y1={-30.296}
        y2={-30.296}
        gradientTransform="matrix(5.54 0 0 5.0307 -797.85 -260.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop145" offset={0} stopColor="#424242" />
        <stop id="stop146" offset={0.2} stopColor="#828282" />
        <stop id="stop147" offset={0.4} stopColor="#929292" />
        <stop id="stop148" offset={0.6} stopColor="#a5a5a5" />
        <stop id="stop149" offset={0.796} stopColor="#878787" />
        <stop id="stop150" offset={1} stopColor="#2d2d2d" />
      </linearGradient>
      <linearGradient
        id="linearGradient12628-1"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.8502 0 0 1.305 1037.7 -620.68)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop151" offset={0.05} stopColor="#989898" />
        <stop id="stop152" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop153" offset={0.38} stopColor="#afafaf" />
        <stop id="stop154" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop155" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop156" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient75726-5"
        id="linearGradient48"
        x1={526.07}
        x2={563.13}
        y1={-118.26}
        y2={-118.26}
        gradientTransform="matrix(.98089 0 0 .74217 10.761 172.904)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient75726-5"
        id="linearGradient49"
        x1={6.357}
        x2={18.098}
        y1={24.031}
        y2={24.152}
        gradientTransform="matrix(-.50405 0 0 -1.21782 -539.11 -57.171)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient51"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(.00141 -1.2316 .09427 -.02885 -639.36 255.77)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient52"
        x1={32.603}
        x2={77.553}
        y1={49.265}
        y2={49.025}
        gradientTransform="matrix(6.49543 0 0 3.28006 -828.772 -171.028)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop157" offset={0} stopColor="#4a4a4a" />
        <stop id="stop158" offset={0.201} stopColor="#5b5b5b" />
        <stop id="stop159" offset={0.4} stopColor="#8a8a8a" />
        <stop id="stop160" offset={0.6} stopColor="#424242" />
        <stop id="stop161" offset={0.802} stopColor="#6b6b6b" />
        <stop id="stop162" offset={1} stopColor="#4a4a4a" />
      </linearGradient>
      <linearGradient
        id="linearGradient7-0"
        x1={80.513}
        x2={80.514}
        y1={110.91}
        y2={112.39}
        gradientTransform="matrix(31.85553 0 0 56.165 -4234.854 -6293.771)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop163" offset={0.205} stopColor="#848484" />
        <stop id="stop164" offset={0.622} stopColor="#474747" />
      </linearGradient>
      <linearGradient
        id="linearGradient36-0"
        x1={824.85}
        x2={922.59}
        y1={-30.296}
        y2={-30.296}
        gradientTransform="translate(278.25 -247.05)scale(.39601)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop165" offset={0.05} stopColor="#989898" />
        <stop id="stop166" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop167" offset={0.38} stopColor="#afafaf" />
        <stop id="stop168" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop169" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop170" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        id="linearGradient12628-1-0"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(3.0156 0 0 2.0432 1665.9 -602.03)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop171" offset={0.05} stopColor="#989898" />
        <stop id="stop172" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop173" offset={0.38} stopColor="#afafaf" />
        <stop id="stop174" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop175" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop176" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient12628-1-0"
        id="linearGradient53"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(3.0156 0 0 2.0432 1665.9 -712.54)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient55"
        x1={875.19}
        x2={876.11}
        y1={-9.795}
        y2={344.74}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop177" offset={0} stopColor="#8e1010" />
        <stop id="stop178" offset={0.961} stopColor="#c80808" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient82"
        x1={227.39}
        x2={234.53}
        y1={101.92}
        y2={101.92}
        gradientTransform="translate(-134.956)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        id="linearGradient99"
        x1={458.59}
        x2={458.59}
        y1={-22.838}
        y2={70.028}
        gradientTransform="matrix(-9.12433 0 0 -11.687 4149.007 677.29)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop179" offset={0.141} stopColor="#b3b3b3" />
        <stop id="stop180" offset={0.254} stopColor="#d2d2d2" />
        <stop id="stop181" offset={0.511} stopColor="#9c9c9c" />
        <stop id="stop182" offset={0.793} stopColor="#404040" />
        <stop id="stop183" offset={0.844} stopColor="#d0d0d0" />
        <stop id="stop184" offset={0.879} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        id="linearGradient113"
        x1={533.48}
        x2={536.61}
        y1={55.596}
        y2={55.596}
        gradientTransform="matrix(-5.1594 0 0 -11.687 2019.1 675.69)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop185" offset={0.141} stopColor="#b3b3b3" />
        <stop id="stop186" offset={0.254} stopColor="#d2d2d2" />
        <stop id="stop187" offset={0.511} stopColor="#9c9c9c" />
        <stop id="stop188" offset={0.679} stopColor="#afafaf" />
        <stop id="stop189" offset={0.777} stopColor="#d0d0d0" />
        <stop id="stop190" offset={0.879} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient12628-1-0"
        id="linearGradient146"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(3.0156 0 0 2.0432 1665.9 -602.03)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient147"
        x1={227.39}
        x2={234.53}
        y1={101.92}
        y2={101.92}
        gradientTransform="translate(28.523)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        id="linearGradient31"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="scale(-.41903 .41903)rotate(15 -781.53 -4671.293)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop191" offset={0.05} stopColor="#989898" />
        <stop id="stop192" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop193" offset={0.38} stopColor="#afafaf" />
        <stop id="stop194" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop195" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop196" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient148"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="rotate(15 .482 533.799)scale(.41903)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient12628-8"
        id="linearGradient32-6"
        x1={285.48}
        x2={285.48}
        y1={14.382}
        y2={212.37}
        gradientTransform="matrix(.78523 0 0 .82322 104.23 18.574)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient12628-8"
        id="linearGradient152"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.56756 0 0 .80235 945.985 -299.025)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient12628-8"
        id="linearGradient153"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.44696 0 0 .74063 609.432 63.23)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient177"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-.878 -.894)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient158"
        id="linearGradient182"
        x1={10.25}
        x2={1106.1}
        y1={417}
        y2={417}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient183"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-410.23 81.928)scale(1.1628)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient5"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="matrix(-.40475 .13646 .10845 .50928 518.64 -5.802)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient1"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="matrix(.40475 .12435 -.10845 .46408 287.622 4.526)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient4"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-405.638 129.567)scale(1.1628)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient209"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="matrix(-.40475 .12435 .10845 .46408 521.344 4.526)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient210"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-395.995 129.567)scale(1.1628)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient6"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="matrix(12.17407 0 0 27.57612 -5777.362 -685.438)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient9"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="matrix(12.17407 0 0 27.57612 -2367.772 -675.391)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient7-0"
        id="linearGradient213"
        x1={320.455}
        x2={320.455}
        y1={-133.113}
        y2={195.665}
        gradientTransform="matrix(.99027 0 0 1 4.718 .77)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient76316-0-8-0"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(.00141 -1.2316 .09427 -.02885 -639.36 123.06)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient36-5"
        x1={824.85}
        x2={922.59}
        y1={-30.296}
        y2={-30.296}
        gradientTransform="matrix(5.54 0 0 5.0307 -797.85 -260.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop15-7" offset={0} stopColor="#424242" />
        <stop id="stop16-5" offset={0.2} stopColor="#828282" />
        <stop id="stop17-0" offset={0.4} stopColor="#929292" />
        <stop id="stop18-6" offset={0.6} stopColor="#a5a5a5" />
        <stop id="stop19-4" offset={0.796} stopColor="#878787" />
        <stop id="stop20-7" offset={1} stopColor="#2d2d2d" />
      </linearGradient>
      <linearGradient
        id="linearGradient12628-1-8"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(1.8502 0 0 1.305 1037.7 -620.68)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop21-4" offset={0.05} stopColor="#989898" />
        <stop id="stop22-0" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop23-0" offset={0.38} stopColor="#afafaf" />
        <stop id="stop24-6" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop25-2" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop26-4" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient75726-1"
        id="linearGradient48-7"
        x1={526.07}
        x2={563.13}
        y1={-118.26}
        y2={-118.26}
        gradientTransform="matrix(.98089 0 0 1 10.761 0)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient75726-1"
        id="linearGradient49-4"
        x1={6.357}
        x2={18.098}
        y1={24.031}
        y2={24.152}
        gradientTransform="matrix(-.50405 0 0 -1.6409 -539.11 155.94)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient51-1"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(.00141 -1.2316 .09427 -.02885 -639.36 255.77)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient52-8"
        x1={32.603}
        x2={77.553}
        y1={49.265}
        y2={49.025}
        gradientTransform="matrix(5.54 0 0 5.0307 -797.85 -260.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop27-5" offset={0} stopColor="#4a4a4a" />
        <stop id="stop28-8" offset={0.201} stopColor="#5b5b5b" />
        <stop id="stop29-9" offset={0.4} stopColor="#8a8a8a" />
        <stop id="stop30-9" offset={0.6} stopColor="#424242" />
        <stop id="stop31-9" offset={0.802} stopColor="#6b6b6b" />
        <stop id="stop32-3" offset={1} stopColor="#4a4a4a" />
      </linearGradient>
      <linearGradient
        id="linearGradient7-3"
        x1={80.513}
        x2={80.514}
        y1={110.91}
        y2={112.39}
        gradientTransform="matrix(3.3628 0 0 4.8058 -264.41 -480.93)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop33-7" offset={0.205} stopColor="#848484" />
        <stop id="stop34-7" offset={0.622} stopColor="#474747" />
      </linearGradient>
      <linearGradient
        id="linearGradient36-0-3"
        x1={824.85}
        x2={922.59}
        y1={-30.296}
        y2={-30.296}
        gradientTransform="translate(278.25 -247.05)scale(.39601)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop35-2" offset={0.05} stopColor="#989898" />
        <stop id="stop36-5" offset={0.22} stopColor="#d0d0d0" />
        <stop id="stop37-6" offset={0.38} stopColor="#afafaf" />
        <stop id="stop38-3" offset={0.59} stopColor="#9c9c9c" />
        <stop id="stop39-4" offset={0.75} stopColor="#d2d2d2" />
        <stop id="stop40-0" offset={0.92} stopColor="#b3b3b3" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient12628-1-0"
        id="linearGradient53-8"
        x1={-577.1}
        x2={-546.05}
        y1={-105.96}
        y2={-105.96}
        gradientTransform="matrix(3.0156 0 0 2.0432 1665.9 -712.54)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="linearGradient55-5"
        x1={875.19}
        x2={876.11}
        y1={-9.795}
        y2={344.74}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop id="stop47-3" offset={0} stopColor="#8e1010" />
        <stop id="stop48-7" offset={0.961} stopColor="#c80808" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient82-6"
        x1={227.39}
        x2={234.53}
        y1={101.92}
        y2={101.92}
        gradientTransform="translate(-136.04)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        id="linearGradient99-8"
        x1={458.59}
        x2={458.59}
        y1={-22.838}
        y2={70.028}
        gradientTransform="matrix(-5.1677 0 0 -11.687 2024.5 677.29)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop id="stop49-6" offset={0.141} stopColor="#b3b3b3" />
        <stop id="stop50-7" offset={0.254} stopColor="#d2d2d2" />
        <stop id="stop51-1" offset={0.511} stopColor="#9c9c9c" />
        <stop id="stop52-8" offset={0.793} stopColor="#404040" />
        <stop id="stop53-4" offset={0.844} stopColor="#d0d0d0" />
        <stop id="stop54-9" offset={0.879} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        id="linearGradient113-7"
        x1={533.48}
        x2={536.61}
        y1={55.596}
        y2={55.596}
        gradientTransform="matrix(-5.1594 0 0 -11.687 2019.1 675.69)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop55-3" offset={0.141} stopColor="#b3b3b3" />
        <stop id="stop56-1" offset={0.254} stopColor="#d2d2d2" />
        <stop id="stop57-0" offset={0.511} stopColor="#9c9c9c" />
        <stop id="stop58-2" offset={0.679} stopColor="#afafaf" />
        <stop id="stop59-3" offset={0.777} stopColor="#d0d0d0" />
        <stop id="stop60-7" offset={0.879} stopColor="#989898" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient113-7"
        id="linearGradient216"
        x1={533.48}
        x2={536.61}
        y1={55.596}
        y2={55.596}
        gradientTransform="matrix(-10.30519 0 0 -7.76565 4785.47 457.082)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient99-8"
        id="linearGradient217"
        x1={458.59}
        x2={458.59}
        y1={-22.838}
        y2={70.028}
        gradientTransform="matrix(-5.1677 0 0 -7.76565 2024.5 458.145)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient227"
        x1={80.513}
        x2={80.514}
        y1={110.91}
        y2={112.39}
        gradientTransform="matrix(69.86298 0 0 30.4925 -4309.91 -3376.79)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient29166"
        id="linearGradient229"
        x1={45}
        x2={70}
        y1={125.56}
        y2={125.56}
        gradientTransform="matrix(5.30698 0 0 4.0542 -3.442 -606.65)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient29166"
        id="linearGradient232"
        x1={45}
        x2={70}
        y1={125.56}
        y2={125.56}
        gradientTransform="matrix(5.30698 0 0 4.0542 -3.442 -606.65)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient99-8"
        id="linearGradient233"
        x1={458.59}
        x2={458.59}
        y1={-22.838}
        y2={70.028}
        gradientTransform="matrix(-5.1677 0 0 -7.76565 2024.5 458.145)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient343"
        id="linearGradient333"
        x1={323.219}
        x2={-192.528}
        y1={111.049}
        y2={111.049}
        gradientTransform="matrix(.29149 0 0 .29967 218.024 84.679)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      />
      <linearGradient
        xlinkHref="#linearGradient44730"
        id="linearGradient335"
        x1={104.594}
        x2={155.133}
        y1={86.891}
        y2={86.891}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient337"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-405.59 80.872)scale(1.1628)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient338"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-410.65 80.872)scale(1.1628)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient8"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(2.932 -.894)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient10"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-454.822 -189.205)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient2-3"
        id="linearGradient15"
        x1={484.19}
        x2={485.96}
        y1={25.639}
        y2={25.639}
        gradientTransform="translate(-450.922 -189.205)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31314"
        id="linearGradient16"
        x1={134.83}
        x2={171.71}
        y1={185.43}
        y2={185.43}
        gradientTransform="matrix(.00141 -.56458 .09427 -.01322 -639.36 134.912)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient75726-1"
        id="linearGradient17"
        x1={6.357}
        x2={18.098}
        y1={24.031}
        y2={24.152}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient18"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="matrix(.40475 .12435 -.10845 .46408 287.562 4.494)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient
        xlinkHref="#linearGradient31"
        id="linearGradient20"
        x1={128.39}
        x2={207.93}
        y1={36.59}
        y2={339.93}
        gradientTransform="matrix(-.40475 .12435 .10845 .46408 521.049 4.494)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      />
      <linearGradient id="linearGradient5555">
        <stop
          id="stop5553"
          offset={0}
          style={{ stopColor: "#000", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="linearGradient15256-3">
        <stop
          id="stop38889"
          offset={0.05}
          style={{ stopColor: "#a2a08c", stopOpacity: 1 }}
        />
        <stop
          id="stop38887"
          offset={0.245}
          style={{ stopColor: "#bfb575", stopOpacity: 1 }}
        />
        <stop
          id="stop38885"
          offset={0.498}
          style={{ stopColor: "#ff0", stopOpacity: 1 }}
        />
        <stop
          id="stop38883"
          offset={0.75}
          style={{ stopColor: "#bfb575", stopOpacity: 1 }}
        />
        <stop
          id="stop38881"
          offset={0.95}
          style={{ stopColor: "#a2a08c", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="linearGradient894-4">
        <stop
          id="stop890-1"
          offset={0}
          style={{ stopColor: "#00c8ff", stopOpacity: 1 }}
        />
        <stop
          id="stop945-3"
          offset={0.5}
          style={{ stopColor: "#00f", stopOpacity: 1 }}
        />
        <stop
          id="stop892-7"
          offset={1}
          style={{ stopColor: "#00007f", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient894-4"
        id="linearGradient896-8"
        x1={54.221}
        x2={282.78}
        y1={35.206}
        y2={206.206}
        gradientUnits="userSpaceOnUse"
      />
      <clipPath id="clipPath228">
        <path
          id="path95"
          fill="red"
          d="M105.3 101.3H51.732v9.28l.01.002q.039.007.07.018c.022-.007.047-.022.067-.023.072-.003.128.03.153.08l.347.01.142.005c.17.005.205.137.113.196h.064c.136-.29.506-.528 1.111-.528h1.68c1.288 0 1.514 1.073.677 1.45l.009-.001c.22-.011.231.211.011.223a2 2 0 0 1-.222 0 13 13 0 0 1-.367-.028c-.011.02-.03.036-.071.008-.007-.003-.013-.012-.022-.016a2 2 0 0 0-.291-.018.18.18 0 0 1-.125-.04h-1.279c-.806 0-1.195-.42-1.17-.827l-.26.002a.3.3 0 0 1-.023.054q-.024.031-.052.059c-.077.068-.19.067-.285.061-.096-.008-.191-.018-.287-.021v15.297H105.3v-14.056h-.917c-1.562 0-1.562-1.578 0-1.578h.917zm-38.865 9.359c1.562-.02 1.582 1.557.02 1.577h-.06q-.233.004-.465.014c-.224.01-.447.018-.67.036-1.556.128-1.729-1.425-.174-1.568.258-.023.517-.033.776-.044q.255-.011.508-.015zm10.508.188q.064 0 .128.006c.41.036.484.35.264.49 0 .02.006.04 0 .06.221.065.288.233.22.364.17.175.038.46-.362.43l-.423-.035c-.2-.018-.4-.036-.6-.036-.277 0-.415-.14-.413-.28-.274-.14-.194-.499.252-.501h.052v-.016c-.169-.157-.065-.44.325-.455l.071-.003.273-.016q.106-.007.213-.008m10.088.052.05.002c.289.02.579.02.868.02.219.001.347.09.392.195.274.111.242.433-.106.505a.215.215 0 0 1 0 .241c.19.162.08.463-.327.457l-.453-.007c-.264-.006-.528-.008-.79-.03-.404-.035-.478-.34-.273-.483a.21.21 0 0 1 .043-.193c-.13-.133-.078-.346.214-.422-.012-.142.117-.287.382-.285m12.311.214c.502.014.506.538-.029.558l-.116.004c.341.053.395.35.168.483.139.17.011.431-.37.417-.29-.01-.146-.004-.432-.02-.277-.017-.554-.038-.831-.049-.27-.011-.399-.15-.396-.285-.353-.08-.344-.453.03-.528-.477-.049-.458-.55.068-.55l.773-.001a37 37 0 0 0 1.135-.029m-47.239.053c.027.032.02.012.018.002z"
        />
      </clipPath>
      <clipPath id="clipPath238">
        <path
          id="path96"
          fill="red"
          d="M105.12 101.3v25.241h53.154v-13.312c-.13.004-.261.005-.39-.01-.299-.037-.412-.214-.364-.359-.137-.163-.024-.421.352-.424l.402.003V101.3zm3.42 9.933h.023l.05.002q.253.017.505.03c.285.016.411.172.394.315.252.059.325.26.222.399.123.114.096.292-.073.387.027.151-.11.316-.41.316h-.817c-.36 0-.485-.237-.375-.402a.22.22 0 0 1 .006-.21c-.469-.066-.472-.54.01-.548h.05q.03 0 .058.003c-.017-.14.103-.286.356-.292zm11.057.041.183.001c.123 0 .214.031.282.074h.852c1.561 0 1.561 1.578 0 1.578h-1.693c-1.539 0-1.56-1.532-.066-1.577a.53.53 0 0 1 .26-.073q.09-.003.182-.003m11.135.138c.364-.008.488.23.376.397.438.057.416.537-.096.553l-.041.002c.157.165.04.44-.349.437-.363-.002-.18-.001-.547-.006-.355-.007-.71-.019-1.064-.023-.294-.004-.432-.163-.413-.31-.352-.082-.354-.486.115-.538q.18-.02.363-.033c-.153-.155-.07-.412.303-.436.37-.025.74-.028 1.111-.037zm8.775.064c.226 0 .452.022.678.037q.154.005.307.023l.207.004c.314.004.157.003.471.003.322 0 .45.188.397.346a.25.25 0 0 1 .135.163c.354.516-.075 1.226-1.148 1.082l-.077-.01a3 3 0 0 0-.4-.037c-.19-.013-.38-.031-.57-.034-1.561-.022-1.562-1.586 0-1.578zm11.306.09.05.001q.375.02.75.028l.207.004c.333.006.458.21.387.37l.044-.003h.05c.423.008.491.376.185.509.262.136.185.49-.252.505l-.56.02c-.232.005-.465.007-.697.017-.471.02-.54-.382-.208-.516-.122-.106-.11-.281.047-.385-.483-.063-.487-.546-.003-.55"
        />
      </clipPath>
      <clipPath id="clipWmfPath1" clipPathUnits="userSpaceOnUse">
        <path id="path1" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <clipPath id="clipWmfPath1-7" clipPathUnits="userSpaceOnUse">
        <path id="path1-5" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <clipPath id="clipWmfPath1-9" clipPathUnits="userSpaceOnUse">
        <path id="path1-3" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <clipPath id="clipWmfPath1-75" clipPathUnits="userSpaceOnUse">
        <path id="path1-0" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <clipPath id="clipWmfPath1-71" clipPathUnits="userSpaceOnUse">
        <path id="path1-8" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <clipPath id="clipWmfPath1-78" clipPathUnits="userSpaceOnUse">
        <path id="path1-06" d="M184.16 91.36h701.92v565.6H184.16Z" />
      </clipPath>
      <pattern
        xlinkHref="#Strips1_4"
        id="pattern227"
        width={11}
        x={0}
        y={0}
        patternTransform="matrix(1.81368 .51764 -.48597 1.93185 -260.192 .08)"
        preserveAspectRatio="xMidYMid"
      />
      <pattern
        id="Strips1_4"
        width={5}
        height={1}
        patternTransform="scale(2)"
        patternUnits="userSpaceOnUse"
        preserveAspectRatio="xMidYMid"
        style={{ fill: "#000" }}
      >
        <path id="rect158" d="M0-.5h1v2H0z" style={{ stroke: "none" }} />
      </pattern>
      <pattern
        id="WMFhbasepattern"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <pattern
        id="WMFhbasepattern-5"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <pattern
        id="WMFhbasepattern-7"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <pattern
        id="WMFhbasepattern-2"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <pattern
        id="WMFhbasepattern-9"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <pattern
        id="WMFhbasepattern-57"
        width={6}
        height={6}
        x={0}
        y={0}
        patternUnits="userSpaceOnUse"
      />
      <radialGradient
        id="radialGradient158"
        cx={424}
        cy={-12.24}
        r={4.244}
        gradientTransform="matrix(1 0 0 .46199 0 -6.585)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop197" offset={0} stopColor="#fc0" />
        <stop id="stop198" offset={1} stopColor="#b49000" />
      </radialGradient>
      <radialGradient
        xlinkHref="#linearGradient158"
        id="radialGradient160"
        cx={320.49}
        cy={-29.088}
        r={79.218}
        gradientTransform="matrix(2.0026 0 0 .15934 -286.21 -19.744)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#linearGradient158"
        id="radialGradient162"
        cx={568.82}
        cy={83.343}
        r={184.22}
        gradientTransform="matrix(1 0 0 .05901 0 78.425)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="radialGradient163"
        cx={512.52}
        cy={111.15}
        r={11.233}
        gradientTransform="matrix(1.5449 0 0 1.5787 -282.87 -64.136)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop199" offset={0} stopColor="#fff400" />
        <stop id="stop200" offset={1} stopColor="#e1d700" />
      </radialGradient>
      <radialGradient
        id="radialGradient180"
        cx={180.76}
        cy={110.7}
        r={5.667}
        gradientTransform="matrix(1.18345 0 0 1.34774 117.003 -38.373)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop201" offset={0} stopColor="#cd7d00" />
        <stop id="stop202" offset={1} stopColor="#e4a13a" />
      </radialGradient>
      <path id="rect5" d="M628.976 1299.1H671.3v5.878h-42.324z" />
    </defs>
    <g id="instrument-window" transform="translate(-53.349 41.089)">
      <g id="pressure-controller-and-ion-gauge">
        <path
          id="pressure-controller-hose-with-cork"
          fill="url(#radialGradient160)"
          d="M427.66-13.785c1.704 0 6.194.412 8.44-.647 3.674-1.73 7.036-6.277 4.733-10.223-1.154-1.977-1.877-3.15-6.878-4.417s-15.28-.825-23.164-.974c-7.884-.148-16.018-.725-22.48-.678-6.46.047-10.642-.56-17.834-.779-7.192-.22-17.076-.52-31.147-1.32-9.677-.549-26.325-.92-38.338.867-5.258.782-25.884 4.046-26.679 10.921-.306 9.178-5.116 5.47-4.464.28.65-5.19 6.52-7.396 8.497-8.454 4.543-2.43 14.202-4.836 21.788-5.611 10.446-1.067 25.285-1.778 38.173-.878 22.893 1.598 72.416 3.045 83.158 3.093 8.207.036 11.697.669 15.466 1.397 2.185.422 4.94 2.356 6.482 5.218 1.558 2.896 1.172 6.947.182 8.51-2.42 3.822-5.692 6.403-9.932 6.457-4.239.054-5.5.289-6.397.062s-1.31-2.824.394-2.824"
          style={{
            fill: "url(#radialGradient160)",
            paintOrder: "fill markers stroke",
          }}
        />
        <path
          id="pressure-ontroller-to-gauge"
          fill="url(#radialGradient162)"
          d="M384.6 72.472h368.43v21.742H384.6z"
          style={{
            fill: "url(#radialGradient162)",
            paintOrder: "fill markers stroke",
          }}
          transform="translate(239.3 -23.964)scale(.15187)"
        />
        <g id="ion-gauge">
          <g
            id="g216"
            display="none"
            transform="matrix(-.3206 -.00535 -.00535 .3206 425.19 -47.45)"
          >
            <image
              xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QDyRXhpZgAASUkqAIQAAABIAAAAAQAAAEgAAAABAAAAQWRv YmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykAMjAxODowMzoyMSAxMDoyNTowMgAEAACQAgAAAAAA AAAAAAGgAwABAAAAAQAAAAKgAwABAAAAmAgAAAOgAwABAAAAcgYAAAAAAABKAAAACAASAQMAAQAA AAEAAAAaAQUAAQAAAAgAAAAbAQUAAQAAABAAAAAoAQMAAQAAAAIAAAAxAQIAHgAAABgAAAAyAQIA FAAAADYAAAATAgMAAQAAAP//AABphwQAAQAAAEoAAAAAAAAA/+EL5Gh0dHA6Ly9ucy5hZG9iZS5j b20veGFwLzEuMC8APD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHg6eG1w bWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4z LWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPgogICA8cmRmOlJE RiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMi PgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94 YXAvMS4wLyIgcmRmOmFib3V0PSIiPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBo b3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3Jl YXRlRGF0ZT4yMDE4LTAzLTE0VDE3OjE3OjMzLTA0OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAg ICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wMy0yMVQxMDoyNTowMi0wNDowMDwveG1wOk1ldGFk YXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTgtMDMtMjFUMTA6MjU6MDItMDQ6 MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpE ZXNjcmlwdGlvbiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHJk ZjphYm91dD0iIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS90aWZmPC9kYzpmb3JtYXQ+CiAg ICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnhtcE1N PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25z LmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiByZGY6YWJvdXQ9IiI+CiAg ICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MkVCQzcwNUQxMzJERTgxMTgwQzNERDM1 NjY0OTZDNzA8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnht cC5kaWQ6NEU5MDA3RUZDQTI3RTgxMUFERDFGRkRCNUM4RkM4MEM8L3htcE1NOkRvY3VtZW50SUQ+ CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo0RTkwMDdFRkNBMjdF ODExQUREMUZGREI1QzhGQzgwQzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8 eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6 bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0 aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3Rh bmNlSUQ+eG1wLmlpZDo0RTkwMDdFRkNBMjdFODExQUREMUZGREI1QzhGQzgwQzwvc3RFdnQ6aW5z dGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wMy0xNFQxNzoxNzoz My0wNDowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdl bnQ+QWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAg ICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5 cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RF dnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjJE QkM3MDVEMTMyREU4MTE4MEMzREQzNTY2NDk2QzcwPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAg ICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTAzLTIxVDEwOjI1OjAyLTA0OjAwPC9zdEV2dDp3 aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3No b3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAg PHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+ CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAg ICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAg ICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MkVCQzcwNUQxMzJERTgxMTgwQzNERDM1 NjY0OTZDNzA8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVu PjIwMTgtMDMtMjFUMTA6MjU6MDItMDQ6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAg IDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC9zdEV2 dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2 dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2Vx PgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAg ICA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9w aG90b3Nob3AvMS4wLyIgcmRmOmFib3V0PSIiPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9k ZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+ c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9z aG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAg ICAgPHJkZjpsaT54bXAuZGlkOkUxNUZDMzI2OEU1OUU2MTFCMTZFOUI3M0I1OEZBREY0PC9yZGY6 bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRB bmNlc3RvcnM+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBt ZXRhPv/tACxQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAADxwBWgACJUccAVoAAxslRwD/2wBDAAUE BAUEAwUFBAUGBgUGCA4JCAcHCBEMDQoOFBEVFBMRExMWGB8bFhceFxMTGyUcHiAhIyMjFRomKSYi KR8iIyL/2wBDAQYGBggHCBAJCRAiFhMWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi IiIiIiIiIiIiIiIiIiIiIiL/wAARCAJYAyADASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAA AAUBAgMEBgcI/8QAUxAAAgEDAgMEBQYKBwYCCgMAAAECAwQRBSEGEjETQVFhBxQicZEVMkJSgaEW IzNDYnKSscHRJDRTVIKT4RdEY3SDsjZkJSYnN5SiwtLi8AhF8f/EABgBAQEBAQEAAAAAAAAAAAAA AAABAgME/8QAJhEBAQACAgICAwADAAMAAAAAAAECERIhMUETUQMyYSJxgUKh4f/aAAwDAQACEQMR AD8A+ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDVuqFFZq 1qcF+lJIDMCJrcR6XReHdRk/CKya64t0t/nKi98C6qbieBBLizSX/vDXviXLirSX/vS+A1TcTYIb 8KNJ/vUfgy9cSaU3/XKf3jVNxLAi1xDpb/32l8S75e0z++UviNU3EkCOWuabJ7XlL4l61fT30u6X 7Q1V23gafypYv/eqP7RX5Tsv71R/bRNG22DWV/aNZVzRx+ui9Xdu+lel+2gMwMSuaD6Vqf7SK+sU f7Wn+0gMgMfbUv7SH7SK9rT+vH4gXgt7SH14/Erzx+sviBUFMrxRUAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADT 1DUrbTLZ1bqeF3RXWXuOB1bi+6um40Jer0vCL3fvZqY2pcpHdX2s2OnRfrFePN9SO7OWvuOJ5cbK hGC+vUeX8Dga99Kc3huUn5lkaM6ntV5tL6qOkwk8udzqYv8Aim7uJNVrqpLP0KbwvgiLd1d1/mQ5 V41HkujCFNfi4peZXLz1NdM7Wq3rz/KXLXlBYL42FFrE6tWXvkVXNLpkywpT72Bi9QtV3SfvkwrG 0+pL9pmwqeOrHZrvZNjArC1x8yX7bKLT7VvaM/22bPKsbMqqa8RtWt8nWvcp/tseoWzb9qrn9c2e z8yjp+Zd1GD5NobfjKq/xj5Npf21X9oz9n5lPHcboxeoU10r1fiFZLO1xVL5N9zKc7HYs9T71dVd vAK2mul3U28i7nfcUbZexXsauW43k19hV0rjuvXn9Ut5n4DmecjsZFC67rzb3FeW7z/Wl8C1OTjl IOUsogvSvMf1qPwLl69/eI/eWZnjZ7l65+gFyd8vz8fiy5z1BdK0fiy1OfmVzMKuVfUV+djj9dly u9TSXLV+FRmJuXmFKWwGZX+rL85J+6qy75U1ZfTqfZWZg55ZHaSIM61fVo789b/NZd8varH6dx/m GrzyHO09gbba4j1VLepcr/GXLibU1nNe5X2mk6ks7jtGxqfRut5cV6iv94rfaZFxZqGP6zU+CIvn 36Icyf0UNQ3UsuLdS/vM/wBlFy4t1L+8S/Yj/Ih8rOOVFPZ+qhqG6nI8X6invWz/AIEXrjHUF1qL 9hHPez1cVgr7D+ihxhuujXGV/wDWh/loLjS/XWUH5dmc6nDvgHyv6KHGHKul/DW9XVUn/gLvw2u/ q0f2X/M5n2eX5pRqPgOMOVdR+G93/Z0P2X/MquOLpdaVB/Y/5nK+z4FPZ8BxhyrrPw6uE/yFB/Eu /Dqv/dqP7TOR9nwHsvbkHCfRyrr/AMOq391o/tMq+O6qxiypv/qHHex4INQ6cqHDE5V1df0h1KCb lpycV3qp/obNh6RLK7WatvOnFPDcZJ4OCuKcZRaXwZzFenU03VJThWly3CWItZUWhwxYy/Jli+kb O/t7+kqlrUU13rvX2GyeV8O6lJ6ZTrQm1Xp7Ocf/AN3R6Rpt6tQ0+nXSxJ7Sj4NdTjXbDPk3AARs AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACE1/X6Wj0OWGJ3M/mwz082W 8Ra/DRbVKCU7mp82Oei8WeS6hqVW5rSnUm51JvLbZvDHbGWWum5qesV724lVuKrnN9PIiuadxPrh d5ZSpOpPmk8+XgbcUl0R28ORCnGn0S5vEyZ8yijkzULR1J/i45yBjUW35GWNGTzypv3E1a6NlZrP 7CXo2FOnDaCM3KNTFy9OzrSXswZsR0y4l3YOqjSjFdEZFTj4GeS8XKLSK+SvyRWOtVJMr2UScl4u RelV8vljhd2R8lXHgdd2UcYwOyXgORxci9Mr/VKfJlxj5n3nYdlHwHZRz0HI4uN+TblfQZR6dcY/ Js7PsYvuKdkvAvM4uKdjXW/Zst9RrJ/k38DtnSj4FOyj4DknFxTs6q60pfAp6pUX5t/A7Z0Y+Bb6 vHyHM4uK9Wmvzb+AVvL+zfwO0dvHwRT1aHgvgORxcZ2Eu6DX2FOxmvov4Ha+qw+qvgU9Vpv6K+Be RxcX2clvhleWfg/gdi7Sn9VfAepUn9FDkcXIYl4MLmXc/gdf6lS68qKOxpP6KHI4uQfP/wDqKZl4 M7D1Gl4Io7Cl4IcocXI+1npuU9rG513yfT8PuKfJ1Pw+4cocXJLPgV38EdX8m0vBfAp8mUn9H7hy hxcp39CjXedZ8l0fBfAo9Ko+C+A5Q4uT5SvLudX8lUc9F8CnyRR8PuHKHGuUxsOXyOqekUeuF8Cn yPR8C8ocXK8ocUdV8jUe5fcU+RqPgOUOLlseCGDqfkaj4FPkSiOUTjXMJZDidN8iUh8iUvFjlDi5 lpYKcq8DpXolLxZR6HT8WXlDjXNKK8Bjc6T5Ehjqy35DhnaTHKHGuc5d9kWtbnRvQl9ZlktC32mX lDjXMVY7rwNO9oxnbttJ4XXwOmudEqxWYyTwRNxazpJqpF8rWGXcrNxaGmVFb20IwqPCeFv1PReB 9S7StcWkntJc8feup5hDs1OnGMdoTeF4HQ8Hah2Wu06ifsxrKm/c9mZuO4YdV7MADzvQAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARut6xQ0TTZXNw8y6Qgusn4EhOcadOU5tR jFZbfcjxji7XnrGruVNtW1BctNPv8zWM3WcstRoarq9a/u51riXNVqP4eRo0qTlNybzkwUk6s+dm 7T+clhvP3Ho1qOHls04JU3gvURGOFuX7YRFUSyzpdOt1CjHK9rGTnqe9WPvOut01TiljoZyajchh GTm2MMehfnPec21+d9i+KyyyKz0N2nBJdNyCxReC5RMuNyrWxF0x8pbymXDx3Fr92QLHFjkLs+Qc 8PoBTkLMddyrm2UKimxTJSSZbhgXD7UUSYwyi7HUdxbjcYZBcCiyivQB3lceQUty/n8gLeQryZZc m+9DLAt5Bybl+W+gxICxwZRRbexc+nUQXtAWqDZXkZl5V3FeXxCsPLvjA5djLy7FEn3BGPlK8iLl HBTee0E5NAW8mw5S9UqzXzF9sijhVi/apv7HkLpTlWCnIXRak2uj8GXcrCLFBFeTboZFEu5QrByB wMyi8lWgMHZ+A7M2ORjkYGt2Y7M2eR4Q7NjY1uyKOng2+z2MM4gaVSGSKvLaOXlJxfcTM0aV1HNO T8EalSvONTs5WV25JR7N8z27jV4Zrc1pcVYrDdw2seR0XEFJer1ML50W0cxwtGUtPwmkpVJYS952 l6crNV9E0Kqr21KqulSCl8UZCP0Rt6DZJvLjTUW/dt/AkDy16IAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAFlarChQnVqPEIRcm34AcZx1rfYWq063nipUWarT6Lw+08prz55xiu rZMa1fz1DUK9xUee0k8eS7iFgue7fkjvhNPPld1t0aeOhtU44MlC0nJLKwn3lFJKu6WHzrc3sZEt g3hbF+Nt8mCWc+4gzW6brwz4nZUfmo5G2jJzi0u862jL2EjOTWLYSMiiY4vYyJ7HNpmp4i0zZjUW TST3MiZFbnaIrzrxNZSyV5iKz82O8s5l3mOUvZyWc5UbHOkMxbNdyyOYaGxt5NjZrGTX5hzsDYyv ApiOTDzFOYDPyxx1K8sfE13LYrzAZuVY6lGl3MxcxXmAy8q7inJ5mLn2CmBm5PFhR8zDzDmAzY36 t5KdPcYuYczAzJLfcpytvCZj5hzMDPyLlRVRWU0YufbqVjLfcDPhLohjcs5vMu5iKqkMFFLxY5l4 gHDKxnYvWVFKKwkYXUL1P2clGRczS3GZrYtUvZ64KOe+zIL5QVVYnHdGKSdGOZvMfEv5208Mon2r UJ9E98lGSEc4a3TL8PvRWThSSzt5J9DBGuqlVqE88vVEGXDLZOXgHVx4vPcWc8n1ePJAX5k10EeZ 9dizmeN2y5PPcBfhl3Ky3bHQbAVa2MNRbsvbW5r1nt3lGvU7zTryTpzXeZ6ieHiUkzRqxks80so1 ErkeKavZ2+76wkc/wlKD0K3qQbhJttR7upMcZqTsIqkszlmMV4tkNottXsNLt7a5pdlXpbVIfVZ1 nhzr3LherKrw/Rc3mUZSWftJo5vgyfNoVRL6NZ/uR0h58vLtPAACKAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAGOvWp21CdavNQpU1zSlLokBkMVa5oW8c161Omv0pJHk3FHpPl20rfRm4w7 pR+dLz8jjJahr2oT7R0qk1L6Uot/e2dJ+P7Yuf09/lr2mQ+de0fseTheKeLoaknYaY5err8pU6c/ kvI4CnaX9d4uqs4x70pbkpGlG3t2qcctL7WamEjFztRtar85p5x1L9Dh6xKrWknyQl395Eah2s7a jO3zCpWlh+R1mk0XbWUINZklmWF1NeGJO0zbRVS1zJJOXgaN1b8k+drck6EvZeVguqU+2XKZlbQL fcYsZZvXFtKg28ZiaceuxtltUfY5fedJRmnCL7mjmFLG7JXT7p1aSXRReNzNjUTikkuu5kUka0Hh eJlUtjDTYiy7JgUsFykRWdMw1buFKtCnLrP7ijmRtwu3q1HHrTlFIshUy5ZRgrV4UKTnN7dxcp+y s+BG30lW1C1oZ23k0SG0nTqKpSjOPSSyVlLlTbey6mpZZp2/JL6LaLdQqctnJdHJqI12bbNC5hX5 uzfzXh5M2SPoQ7G8korEZQXxNyVTlhJ+CyLBRXMO37LPtmXO5CW6c6ELhfPnUznyJjmz0LZolKla FPlU5Yy8IyENWn61dXMV0pQwveSVvUcram5deXcWG2aUlGLbeEWwqxqR5oPKI/UquPV6efyk8GW1 /F3Fel0jnMUNdG29kshVjPPJJPBrahWdK09h4lJ8qMVGn2F+or5s6az70NG0jksdaEaihKSUn0Rd lEVJdvRuLiO7jP2fsEgli2VWEGueSWemSkJc9OMk+qIyC9brXjluoLlh5MSCXyM5Zr2s+e1ptvLx hmO9rOlThGnLE6kkk0NDOq9ZXOHaVZW661EjLTu7aUp9pOdHl/tIMtpyrU44Vep8Ssp16kHGVaT8 c4Zlrperu2lJKNzT97ZmU6fLmNalL9WW5HOzbx+MePOKNimqlLHK4bf8NC/w6blKCqVVGfQ2/VKL 7vvNKnc3Dzy8jljb2S6VxeKOXST9yJdoyVIRgnGPRGnKtLPsrbzMcr6bq4ksS8CLu7y7Vy1RpPkx 3FktE1Gv3SeR2jzs0c98oXcX7VGWfcVjqdf6VCa+wuquv66ahW5ai51sYa192k/YeZ+XcQfypLvp S+BYrxzz2UeRvrJ9ENJpNSrqcezby31x1ZlpKFJLl+xEHQbpV3JycoYzzMy1dYpxW28pbF0uvpP5 LlFyNTTbiFa2i60vaWzZKR7J9J/cYvSMSprv3Mqp+CL8019NfAqpU/rv4E2aW9mUdPbYypw+s/gV 9jPzn8CbVg7J46GGdDPcbzUPr/cWuMX9NF2aRU6C8GaN1b+xNpPKRPunF9Jx+Jq3FvOVKfKlJcvc zUqactbaPR1S8tnXk1GhNVOXHzsEJrNFLX76XLlyfMdZpsJ0LmPPFxUltkidQ065ubu4r29Nyili TOkvbNnToeB3/wCiLheFXP8A8qOqOL4Mru1sbiFalUbnNSThHmWMJbnVev0V1VVf9OX8jnl5bxnT aBrxvaElnmkvfBr+Bcrug3tUiZVmBidzQXWtTXvkjJGSlFSi04vo13gVAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAADzT0ja5Uqaha8PWra7aDq3Ml3RXRHpZ4dqs5XnGWvag1zdm3QprPgmbwnbG d6QPA3C+Lmd1qnLUuHN8sYv2YrP3s9QVjSgsYZxXBtZ04yhVTTUs+1LODuFc03JxjNN4ybyrGPcQ d9Z00/YjhtkPNYfL3vY6SpBVUpOUVHxzkh5U6NS5mnUccPCbjsJSxztzayndWUYY5e19peR01vRq djmk0nnfJrUbaFWu0k+emm8klTqUrenGE6ntdWkunkW1JF8W2stYfgZqbNZXFu5/lVv5GxGrQS2q r4EaVqU41VyyWckbcWPYpyj81Ek69BP8vEw1KtGcXm4hgSogG3N7972Rv2dXsZY25TWm6DuHy16b eemTC6iTy2b8sumV9SgvamviVepUFvznLdtF7YbRXt8Qxy7GeK7dV8qUcr2i5anRb+cck60uXbBT tpPvZeJyddU1ShTpSnKokoRbbfcRnD+r29/Z1LiFWMo1az3Ryeu3MqPDl/UTaxRZC6Trtvw5wZpt xd83LVniEYdZNyHDo5PYJXlKFSUXNbPBCWuq293xPcRhWhJ0IYwpdCP4h1SzsdXaubqlQ7WEaqhN 7vKzk4HhXUrWF5qt3cXVGnOtVxFSlu1nOSY47m1yy1XtirU40oTUliWe8jNQvaVS7sqHaRzOecZ6 4Od+VbeehQretUuzjXcFU5tt10OUuL2nc8d2Tjc0uytqLfNzbNsTEuT2KFSElOSkvZxk1tQvYW+n 16mVtHC38TnNKuadWF9TVSMm6DmnGWcYON4zuJ3GjWtCnWy69zBPlmSY9nLp6vYuPqtrB+CNiVVQ ct/m5OHp3MqHZKNVfi+X6fgXcTXk7WjqlWlUaUKcpJKXihcezl06DSKvbU7qrLrUmyY5lDC6bJnl fCU7mnwvbTqVKjnWbqe0+5nW3lzU9VsZUqksyp4lv35Lce1lS1eXb6zRhn2aMOd+8kE1mc+9NHle h6pd3nEOuVHVqONGpGlFZ2jg6qzuq8/XFOrPPYqUfen/AKi49Ey7TOqVXO4sqUXvKpl+5EnhTnnv iso8u+Uby5497Pt6ipWdpzOK6OUn1Oo0/Urh38YTm+WcZR39wuOoky7dHd3CpWdapn5sWYNMmlpV NtdVlnnnGWuX1pwrcSo15QqSnGEWuu7JfTr+7o6Tb0qlVymqSy344HC6OTu68o20JuL9hR5kaWmP +gxqbZqtyZymt6xeUeGO2VXFV2ry8d6eMjT9VuqemWsZVE5KlHLx5EmNsW5aruYuMIR7P5rRGXVR VdYtaWfmpyZEx1qtU0qnySSqUqrhPz8DldN16/u+ONUk6sXb2cI04w5e995ZiXJ6p2jaKxqeZx0t frUo81ScIrxlsXLXricVKLg4vo0ThTlHZdoO1OQjrlx3qJetbr9OWI4U5OxoVcVM5xt3G07lqO0v icCuJq0Lt0aVGVSqo8zUE9kZ1xHe4XPZVlF9XymbhV5Om7WFSrKWPaXea9xTqSlzUZxUu9PvOQqc XqOtxtqMOeEk3lrD26kh+EGIJtQTS3Tl0LItuvKQrq/TjKNNSb2fLIzxo3qj7UqWfeQy4mpSko+s Wik/ouukzap6xOo1mMGu5xmnkuqzyiRdK4w+epSijLb28IRaqtSfXyNGld0b2zuu1t3O6t/boU84 cpruIbW+L4aHw1K/r2tSVZVXSlQi8y5uqJq3pd+044Tua8spxjN7LpsZFplFtb9PFHL6TxetZp80 LWcKsIc06TmuaCXX3kpS4ipVM8iUu7aSLqnJ11pQp0aXKt895uwxthYOfttUVSCfK0bsL9eDMWVd pd4KqSI130dngeuRz0ZNG0spIuyiLjex8zJ67DHeTS7SGUUbiR6vYZK+uQfUaNtmaTNW4bjGXI8N LKaKO4g+/Jhr1U3ULoRdC8rTnJV3zPOU/A17m5qqhUUJyjFZzjvLFLFd48TFdtxoyT7zpMYzto8O aJPiOreSjf3FlGi4uKovrnPX4HRfgPqFP8jxNfL3x/1Nf0cpxnqSawvY/wDqPQDGfWTeN6cNHhLi Gl+S4orS8pw/1K/g9xXD5uv0ZfrQZ3AMK4WWjcZQeYanp9XyqRf/ANp1ulWta00ylSupwlX3c3D5 uX4eRugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFxrOn2lzKhc3lClWjhuE6iT395vnO6xwTw/ r987vVdOhXuXFRdRzknhdOjAloapY1Fmnd0ZfqzTLlqFs/m1U/cmzkn6K+Fk807OvT/Uuai/iYn6 KeH026VTUqTffTu5fxA6+tqtlbw5q9xCnH608pHl1ClRp3FxUruLjcVp1MvvTezJe89EWmXVpOhD W9eowksPku0/3xOQ+TKr0+2trPUaj9Xp9hKdTdyw+r8zeG2ctOkq0NJoUlViqccLL9rG5SprOnUN JrRjUoKUoPmSks8veeb3/CGra3dQ5+JKlu6ctoxpc3skTrHoz1ixoVL6lxDO87SDhyyp8nJv026p mrP8f6zj3l/HpOl31jWg4W1enGhFrK5uh1V3Oy+Qq7UqSfI1zZXU8S4V4L1KpXqUKuoKisqXOk2v tO+veC7qHD1xRerVXJrPNy7EW9Xpm0WVWVhOpCdOVSnBqU29t+h0eiO1lo9JVpUp1G25PzOM0fS6 dloFa2jVqynKCUqnj9hJaZwnXoaZS7LVK6ck22kKn+nWuhYyn+TpGSNpZP8AN0/gcpPhrVE12Wt1 Nu6dNMrHQ+IKa9jVLWp5To4/cNf0dRLT7Bt/iYMxy0zT3B5oQwcwtN4lp1Mynp9aK6pSlFsvlpvE U6DcatpSnJ7QlJvlXhkuv6rb1HQtKjp1eUbdRnjKlF4aZys1yyxkz3GkcTupJVK1m6aecqct/uNK EriL5bmlT54vDcJmpdM5ReXJ+Ig02+0hJeHKy99lj2e0z54N72xpRdGPcZIq3wuapUTx9UuXYvrU n+yNmkZqtpUvtFu7SCTqVqbjHPTJ5BxnWuqmh6LZUKb59LU5XUX9BqW33HuijQ/t5fsHmXH/AAzW 1HiS1uNN1Z2UbmkqVeKs6lRVXn6Timls+81jlJezVvhJ8Y2ehcTWOla3rNzdqSsKVGnStqijzyxt 7zQt/Rlp91aULi+ub+ldyh7So1Uorw2x1JbRtD035buNPvZ9stLhDsedPl3XXB2TVKK2q7fqszLx moXvtxU+CrR8LVtA+Ur6NvK5jcRrNp1IvDWFtjBzlD0f0bzUb3TaWs30KdjJSVxypzlJ9z8jutXr q21nSmqn4qtU7Oe3wLuGqFtOOpXkb+nX9au5PmhTksY2xuhMrDW0ZwxwhLhi9vKtTXbm7pXlrO2c a1NLkcltJHI3PBd1p2o6fZ/L9W5q32VCUqOOyx9Lruej8SVVa8O3lenPmdCKnnD8SNoQpajxjp1f 1ul/R9P7TsuV8ycu/wACy3yetOafo712m06PFkZYkniVs98fabnHGjajearX1ihqkKdlKFOnKzUX mcsJdc46noLUE9qil7kzgbi+9eq09MdanGrHU4pxm95RjvsOVt2SekVS4C4st/yPEdp2ePZpyhJc q8Op0mp6NxJecHaHZ2Op2tPVbKdSNxVbahUi91g6+bg23zrHgc/V1ONvxf6pOaUJWzqxb6bLctyt 1/E1r04HT9E4uu1cVdF1C0hyVXTrupOS7Sa6teR1fDdHivSr28fENe1nQr2k6NGVGq5ONRr2W8rp kmeFrb1bQIOc6fPXqSrNxllPL23K8T1nQ4dubinOPNQxPr4MW7mjWrvTz21s+N6upXXqNa2nfUcQ vJOthNdyTxudLor40stdsa+sU6HqFOf4/lrKTx8CS4Qt61Sje6hcOnGV/UU44mnskTl/S57C5gpR 5nTbWJeQuXo17ef8RUuK7m/qWzhRnZVrpuz/ABizPG8c+AqV/SZFPsrSg33e1Bk3pLuNTnw3WUHO nT7WdWeViLWyyddKLh85JCZaSxwfEWq8Rx4F0GNxTpQ1CrOpQ1Ck0vFOGCOjq3pJoxjCeg05RgsL Cj0X2k3rUKlzxdp9nB5Uqsa2Ouy6naSjNNtppCXTV7cRZa3xKuFtRqXOi1Ia1GvCVK0SX42G6bW5 CaBxHrFLWqlxW0G6qWF7cZvK9CCbpNbOK36o7XVrqVlq+n18yUJ81OTSzjbKNbglVKPCVGVfmhUq 1alSUZbNZlsDaK4uvp31S0ejUr+dnzPt7evb4fTZqSJbhK9ld2PY3jtrGMHiMriryp+XQ6FSlJey 2/cak9JtpVXN0OWTeWsbP7DFl9VZZ7hrF9DSqadKtbXUpLKlb1OeK97MOkalQuJOrrN5VVNrMaFv FRb97ZFq2jX1GpB01Gl2mMKOF8CcdlSaSaWF4RwSzKrLJU1S1/QbSm3b21zJfSlO4S+OxSpxfo6j l0ZR5nhc18kvvRFR4atr6M1Um6carzJRXgal76KtFvqCjcuu+XpyvBz43fddJkyS1CjU4hVzSo81 m6XLGs0pvm8Nu7zPFvSBxzqFDXalq9PqUqUm3mGUuXuyexQ0qnpdtT063rz5aU4dk59yT3XnsQ/H eqcL09Qo0L+g6txOGyhSbSi/F/wOmPXTMfPNLjClQr80rLnqfpHV6X6SLahCKq6ZcUJcyy6NWSXL 37PvJi4qcEVLlSXNTa7o0ckvbahwgoL8bVbgtm7fbBqyT21N3/xRK9KFnRvqtWyuNTtub5kpT9qP xJ1ajV4u4OnTudTrO4va6lbVJrEttnKTRn1PivhK5tYxuNKV0otJVXaqOF03aXQ5251qx0rVa1vU dK3oQx6vGmvZgnujMvSWfUX0NJ16m7m5064r3VnarlVxGPLJSXVPy6mnR4qsKUee6ndW808pwljE u9s6zhOGoXWsarb3N040r6EKts09pY64+4s1r0X1bq0rXdCnGrKc5QnQi1GUH3PwaZqWa7TXb0T0 f8TfL+lPtZwVSm8KcpJc67mehQsryUYyp0HOL74yTPnngzhXU9Gtm724lb5WFQWG0/HJ3dKVaLX4 +onjdxk1kxljlvpJcdvUJWt7FLNrV+Bj7C87rWt+yedwv7qLyrmt0/tGXz1K7qLEri4x0/KsnHJr eD0WNvft/wBTq480ZPV77+6VfgeVTk5y5pVblvzryLe/Dq3CT8K0icc/o3h9vVnQvE97Sr8C1xul 1ta37B5cqtSCxC4uksYWK7L4XV4l+Lv7+KX/AJhjjl9G8Pt6Y1XWOa3rL/AzUqXUo160ZqcY5WG4 s4FXmrcyVLV79Z8a7Nijrev0rypSWp159hNJ87UlL4jWX0bx+3T0qjldPfvL79vkwk+vgVo6rcXX LC4oUYp7pwhjD72Z7i+vFBQtuSNOLzNcqfN7zUtTUZeBatO1uL916kYKpGDjzPGcN5O5V/aPpc0X /wBRHnlhb6xq3MtHuaFk6SzUi47Sz07vI3vkXjCn83UNPqL9Kn/+Jyy7rpjJp3Kr0pfNqwfuki9T i+kk/czg3ZcaRX/9bP7F/IKhxhHd2OnSfk4oyrvQcBUpcWVItS0iwbXzW6q2f2M7PS4XENKt43qU bhQ9uKeUn4ZCNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPF8xsq91CrLElVk18T2g8k4ns /UuJLyVSSjRm+0jJ9En/AKm8GM/COtrulWrJUYSbb+f0J2elu+0q4tpzcJTXsTj9FkJYWiUG6cuf L5ubOck/Y3fYR5Kz3Zu+GMf6s03RaOnWEnK4h27ftJvDeOn3GalJXTVCdXlhJ7yz3EVrNaNaUY03 lp5eDTs6yp3FJyeyfeJFuTo6VSnbV6qoRi4SfK01l4L61RW9d0ac8xW6aIOnqUfWJ75zLoi+8uVO +Si/ZwTibSyrPm6y+JlVaXdzEGpvm2k9vM2YVpJLEn8Ro2knXmt/ayY5XVTD3kaNS6nyPE3k1/W6 vLhzeRo22K11VnTniT5l0yctJOVWT8yRuatVz2qPc140o+WTpj0xWms82EXvwezJW2tocsqjXToZ K2lupb9qvnJZfmW00hV1D6knR03tLeU8e1HqXrSJSjF5eWNw0iol/O4pqLaRKfI010ya93ZytbOv Xw5OjTlU5Ut3hZwNw1XHUalKl6Q732oJVbKLb5l1T6e86CNalJ+zVpvyU0eJcIa/RuOL7i91HFRX EpYjJdG/HPQ9Zt6+gw7O4uI21tKLzHnawn70zeUmM7Sd1s8TcPVb3SLSvK+s7B0biM1O6m1t0xhG 7w7w5DTtFhQeqWNSXaSk5Qk8PLIDiOzsb3hi8vba/hUnHFVdlX5uZp56ZJzR6KraDaXKqw5alNT3 aOUu27qRt6zoKvNA1C3jqFknVoSjmdTCXmznOEeHqsLmpd19W0uu3a06EZUK3NtH7DpI2nrNKrCE oNOLT38jm+CbDOhV3SccU60oPbphl/6m5rw675NSefXLT9s4ejwpy+kutcS1PTHDm7aNFVfb6dcY OuhazqS5Yrqu9HLysZUPSFa1HjnuaElv5bF8eyf6dj8nrO93bftHE8ZaG3rul3dHVdPoSlSnQaq1 GnLPhsdZG2qz9mMTnOMrKpCzsK1SOJU7lcu3iEn+nRadp1K20m0o+uUH2dGMcxzh7Gtr1ja1+G9R o1r6MIzoSTmqbeNuuDYhRnGhBqOySRZeWUq1tKlWTjTmsSyKI/hKhYU+ENNVC6nXp9l89UuXmfuJ tRtM4cakk9t8I5TgpyWhVbbDxb15RXufQ6dUail8x9So4XheNj+Fl3GhYVoO1dSnz1Kzl1fgdzKU GtqUV95yeh0OTjPXUoveXNjwOr7KbWeRgcRrF7Oh6StGhGnT7CUeSclDdZ8zt1UcW8PBx/EWnyda nevMZUa8fa8Nzr5U55b5Ws79AOS9Ida5o8M069tWnSlC5ipOL6p7E7pFJ0tDsoTblJUo5ct235kX xrQlW4SuoqL9mUZN+GGTVg3W0u0qQi8SpRf3FPTYTlH5rw/IulXecVKyTls05dTQ1SvWtbNSpQk5 zmo55fmrxIfTHd22vXFxQgq0XHCqSSmk/JMzldLIguH9X1fUtdvIxuasnRvZU3b1ZNwlT8l3P3Hp Tt552pz/AGWcreahe2Gr0r6GqSoXctnGlZw9leLOstuIOJJ0VWWrQnB9FK3j/M5TLKbdrjjkmNAj UV/FVYyxhrp3HXSjyrrhebwcDT4k4krVYxtrmnXqPZQVul9ovrnje6sK9OhTpOrOLUI1kkk/HJm7 t2a0s48r29vc6RTlVh2la7ScM5bSTOD4lupON3Z0+1i4SXLNUuvhiRz1SnxPwxxRa6hxZCjKvRq8 9JKfOksb4JbUOJbnUL26qUaFOdhVadJqTUorvTXQ3d4+1mr5n/ty0bSdxcf0ytObl3KktvuJanYV o2LoUK65O/npRWPuJO1ncVEuxoUozW/tssdrr9/cctvdW9CCfWNJP4tlu7P/AInX+v8ArW0q0VnG 9lq9OVWj2Xs9ttTf82SkPRhYapw5R1CPtunvBNYcn35NmnY0LO0nS1W69bqVFhqb9le5GjSu674a q3Gj3VSa06vKlKnGW3L12Only3pC0FW0XV7enVfLTt6mPDlO/jrtKncWlzUm1ZXcMPvxU6Hz9qHE 1zq/ElOlXdSnQnWXMo9W8nrfGs5aZwJZ39v+X7VNQSwsrBLd3p04XqV00alO5purQqRqQzjMXnfw Kwi02/I4f0f6xSutZubvVr6VvbXaSq0uRcsGumF4+Z6n6vok6j5NUuEn0/ora+ORc5PLHx3ekFh5 KvKeGT3qWj8uPlmp9tpIxuy0ju1ykvKdtNE+XE+LJB+/uGH/AKkytPsJ7UdasH+upR/gZVolJpOO raU8/wDHx/AvyYnxZIL7C+m+u+xNvQJP8nfaXP3XaRT8HbxfNnp8k+nLdxHPE+PJF03+Pj4ZRfBL 5VvXj86iTjw/qUJ5VK3lh/RuY/zLYaHqKva9SpSoQjUqc0ea4h0+I5zflPjy+kracrdPDfN3o3K0 uWM/fgsttPqUJxnOrRk+6MKilk3nZqUJydWljrhy3Rjca1UjwVh+uNdcQT+8684rhmr6grlwpyuY 1XH2qDTUcZ65a8To3qyT3s7v7IJ/xOWXl0xnSSBHx1aDe9tdr30i56pQXzoV1/0pGWtN4Gj8q23/ ABv8mX8jbpVYVqUalN5i+m2Ai8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOa4u0pXun+swg p1KCfNHGeaPedKCy6Szbxm3hG23oLki98Lobcblyf43GPcdfq/CMK8pV9LcaVR7uk/mv3eBzFfSr mzpTleQnTcei5G1L7VsdZlK5WWIis+ecmluumO81sOL9o34VISfTD80YLlLdrvNRlpc3ZTc+bq8p G/OnzQhVXzZb5zuyPjzzTpRwot5bNywXa27VSXzXhMUjcXczIp5S3MCmlT36osVZ56YIu2xJ47zB KWGHNNNtmNtNbF0LKntPdFqis7GRdxfShzVoxXeyokbGg50sTWOXuZJSWYRpx6vr5F3q/sLG+xfC lKPzY4X7zFrbSoU+SFwvGSSRvUYRdRRx0Ra6L9aSx7L3ZtW8M1nsS0kJU0ot4NCrBNbolaiwmjRn D2kvIRa8n484K0OtTtbpWEaNapX5atS3fI5J+Rmq+g/hyr2U6N7qcMrLi6ikse46/iu1jcaPOGN0 udPwaJ3S5KvpNtX5supSi8/Yb52TqsvL63oRs6dvKWk61qEppN06WI7eT3NKy9Dt9X0+jUuNX1O1 uZ5U6Mqfsxx4bnpFK/hLi+pZxbbowzPHcV4Vq14S1K3r1ava29y8RlLOIvdF+TOezjjfTzir6Ib6 1UpQ4ouoOMcpOk9/LqROlej7Wa99fWlDiH1epQafK4P20+89p17W62nSs4Rq+3dVFShFrOWYPlCv T40p2840exuaD5X2SUnKPXcT8mZwxeY/7NOKY1oQpcS0ej3cZIjL/gPiiy9WuZ6xaVJSrKhCfNLM W+/3HumqX9PTrKV1Vp0+WG2672RurVrePDVS6uNOpVoUEqvZ87jv45E/LknDF5a+BOPaFzGENUsZ Sw8NVZL+BG6zwrxvaW9SeoV6FzSpJScVXz8D3ane2lzY2l56s0q8FJYl0yjWq/JWqX17bThXfYQx VcZLG66e/A+XI4YvHPkT0ixsaU6caTozipw5bmL27i64s/SQqUIVbZzUllcteLPZNFlpt3oVFWdS 47CjmnGVWK5tvEvlGxuNRhbwvo9vCOXScd8D5b9Hxx4FZR49s7q/o2mnVFKnUUriKcXiXcTD1P0l UKLnV0WvKKWeZU4s9a+R1T4rrXNO+t+W5t0pUHLE24v53uJK8tLipp/Z28oyk+uJpF+X+Q+N880d W40tdarXEdDuHe3lLeLt880V3pG1U4y9IFC2Uo8OTlCK3crNntdXS72Or6Rcxo1JKEZ06vK88qfR s37pVqNhUjy1EuXfCyPln1Dg+a9R4z4vudIrUL3huUaMpxnKsraS5cPJIr0t8UwTdXhGMo469nUW x71UpzuOHLinJy/GUpPD92xocNal8ocOWb7XtKnIqc35rbcvOfS8Xg+o+lK/v9IuLK44cnQVxBxl PEts+86vgvjuxnwrCF9G6o1bVdmnC3c1NJdcnrjrUrzW6llKFOSp0t8xXeiB4SsbaOjuhVoUZdhc VIJygunMYzvLHU6rWOsb32gK/HdG3uLWej1pXFCvBSl+I5WpfVakbFldx1Km68Xbq5rTlKpb235r w5u7L8jq62h6fyup6lbuC6ZgjXoWFBUa9S0pQoJRblyRxnYdb3EvjTzSha1dW1uqqylyuo00u9I6 +lYUqG0aTj9pGcMRhW1bkVRKcpSw/FneOy7OjN1HzPG2xbZtmRC6dz2132tKnKcop+ynhsn1qlbk Tlb1E+9N5MFKFWF1GNKlBRlHeot17jdcbjk2cPgYum5HnvHEbXVOxhqcZRh3zi8SgjzaXDdOFar8 k6s5UXtDtE4v7T3a9023u71dvSjUhj2oSWzZFXPC2j1arl6nCmlvzQfK0WWw69vF7nhTW5W39Erz uHnfs663+Jj/AAP1+NDMtRhaY+hVuk5P4Ho13YcIUb+pa3F+6NxBJySqNrfzK2mj8FTjVctUhKaX s80/9De77Tp5fPRJW9aFTVtbhWcfo0pOR2+jcT0rOwpaRZ6bGpaYlNOFL25yfe/EltT07hq34eua +mRoVbyPKoOVTON92kbTtLizek1bCg6lWalGrCmll+GBWd96edV+HdPpcTW9/GFWld0qynVhLEoz b67d2Mo7rWNJr69TsbCjCnJyi7jkq7Rkn3GaKtfwohcahY1Hec8cUa6x08Yo622pzqXdW7rRj21S WyS2ivBeCI1baponB1ppeiULdWlBzft1PYTTkT8LKNOEYq2jypYwkSNKtB04Y3eDPCtzJvk6HO5V dI5W9u0vxOPsDtLWXWiv2SRby88hVY74E2qL+S7GfWhD9hFr0XT31oU/2ETKUfqsr7HgTY5+fD+m v8xTXuiYa2hafCnmNKOTop8ngYKsYSp9NvcWUc7U0WxjRzKm8t7YbISGmUnd1VKG0JtRTfcdsqNN UpPrJHNre6uH/wARm4zbW3pdtCFw3BYwjanTinWeN8Mv0SHPcSzvhFtxtKt7mPYxcP8ADlvrsLip cVbij2LUYqjPlTyssmn6PrT6OpahH/qL+Rl4Gy7C+k1hdvhfsr+Z1pyz8umPhxD9HtLPs6vqC/xI o/R8+7XL87gE2rhJej2q44+X77Hg1/qdbpOn/Jel0bTtp13TW9SfWTN4DYAAgAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAtlThLPNCLz4o8/4w0KFli9s48tCcsVIJbRfivJnoRq6jZQ1HTa9 rU6VYtJ+D7maxuqmU3HiElyybT2Zloz7Ncq2U98+Zfc286FxVt6yaqU5OMl5oxU1mnyyW6O7ztuH tP3mSpDEU0a1CT5+V9USCXPAitLmedy6klKpGL7zLOkUox5ayZRsQsnOWYvBmpWnJfway4Zzk27S S5EjejTi+hnbWmxFYRk5dixGWLObSsYZecbmxSpKOZY7ilJZkbmFy7EqtGovaZrumubPebdSK5mY mkUQWsUI1FSpS+bUzF/aQ/B1/Oz02+03VpqFXSajUpy2zTe6Z0GqRzUtv1i+60WxvayrXFHNRxUZ NPHMvB+JrfXbOu0LwxZdtG/1ar8/Uq7nDK+bTW0UYF2mlekqSm/6Jq9uuVvuqQ7jr4UoUqcYUoqM IrCiu5Gtf6bb6lRhC5i/YlzQktnF+KY5drpzt3Yy1T0h2c37VtpNDnku7tZdPuHFsKljX0fVqOeW zuVGt+pPZs6OysKNjCapZcqkuac5PLk/MyXVpSvLSrb3EVKlUjyyTGzTmuMIO/padpNv7dS9uIz2 fSnHdsnL7TYX+n3FnJ4p16bp48NtjHYaHb2FeNaM6lWpCHZwlUeXGPgiTwLfUNOQ4TuXLhOdC/cY 1tJlOjVy+ij0fwK8DWdWPDs7u8TdxqNaVarzeGcRXwJO74Ztbu8r13OpTjc47enB4VTHTJNQpxhC MIpKMUkku4XI05PhTnsdU1nRLjrQuHXovxpz3+4s4XpxvNa1zV1FuFWv2FvLu5I9WvtJm/0FXWpx v7W4nbXTpujUlH6cPBkhYafR02wpWttHlpU1hfxY30acpxf/AOjdV0LWYpuFKv2FfyhLv+Ji4uta t/qeiaJaznCneV3WrVIPDVOG/wB52GoadR1PTq1ndR5qVaOH5eaNPTNEdlcKvc3Dua9OkqNOcl82 C7izLRYh+M61zpXDdG+sKtSHqNxTlNRb3p5w0zY4h1mrbWdlSsLqpC51WrCFvNPPKnu38DoLu0pX tlXtbiKlRrQcJp+DOfseFJUrrT6l/c+sR0xONqsdF3Z8xLPZZXRJTdOMJzz7OG2uvmcxwtezncap Z39ChQubOu9qdLkUoPpLB1jiQGo8P16+uPUrG6VGpUo9hWhKOVKPj7yTXhag+EHc61U1TV3CFp21 Z0qFWnlucYvdtMt0rnpcVa1pca3LKg1XcpfnOZZbx3HZ2FhR03T6NpbR5aVJYS8X3sgNU4Zry4le t6VKl61Og6FWjWbUaixtui8pbU01NL16prWlVKsbzTLbknKEqVeeJRSeMsxVNUt1aXFlb6xo069e nKEcXKym1giZ8F6tRtqseaNDmTxG3lF01nru92RlP0TO4jOdOtS7SfWdX2nnyfcYx5W93Uby4ydM vA2j09J1KhDVNQsJXVkpqKd1Fc2e89NndW0qLSurB8y2XrK3PLLP0P3lnqMLj1zMoyy5wnl/Bnac O8LXlvSuo6/UjXnzrsJKEViP2CY2b72W430n6Wp2lvQjTlc2cai+h2qbKVtet40Zf0qzaXhM1qWl adGTjWoJyXWWCtbR9K7CUaVJJyWBpOkG9d7SrUrOMJKTShyvZrzON4q4o0yV47Kve1YvrOFOOy8U 2dxDQrehVhyPmp90SL1D0f8ADd5exr31pVlcVG3KcajXN5HTG6vbMm/LytapwvC8rSq1a7g8YSpZ z95mt9f4aoVsxjVnGXjSWx3C9FOi1NRio0p9i4PmTq7Q8N/HBjrejjhW3nGPZXLUdpPtuv3F3L4X WMcfqOv6Bc2deFnTrKpJLkzSxuTnCV3Q1C1lZKvVnNfjIwm/mteHkbFxwFoVLT6k6KquUpJU5drl 49xjrcN0NPv6N3oVtcWFPsnCNa6bcZz+kvt7hu+DWHmJy+vI2EqcoQo8nfNtt/FmnT410+2pSoQu oVq8cycm8cz8EZ9JsFe2znXzOjP8XUpP6Pk1/E036KtHr3SlbdvTnF8zSnlIWmMx9u+0XV1e6ZRr NQouUcydR5x8CcpX1t2SzcxefqU2RttpNlb20KVKklCMUvebXq1KKShFJI5a3SVtfKNuntKu/NUl /MvjfUpLMa8F5VabiaihBbcpnhRpyXQaXcbdO8hJbTtpvwVXH7zIq3N+YyvGNSL/AImk7KhJbxXw LPk6jj/Qml6b8uZr+r1M+WDFVhLkw7et+yaM7SEPmya+1lroySzGrLP6zL2nS+fPGlLFvWzj6jIW 20y9nOpOdtUpwlNyc6i5Ul4m3dXNe3pTaqVW4ropshY1619TdWrUqcr+i5Nmptm8XU6RbRt69RKa nlZUl0aNW/pwha3Nwn7NNPmjndGXhxPsqrbbXRZI7WafaUr2KbUpQaE3s6dNwa409EqucqcXOu3t JeCOk7Wn9ePxPOdB0vX56PTnpV7b07ZtpUqkc4a6voSXydxfH8/ps15p/wAjGXlueHadrT+vH4lV Vg+k4/E4l2XFqT5qOl1Pe+v3FFacUx66fpcvdPBNK7jmj4r4lThXS4naxLRbCS8O3X8zsdPhWp6d QhdRpwrKPtRptuMX4LJBsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPO+ONJlQvo 6jSjmlW9mp5S7vicio5imuuT2m+sqWoWFW2rrMKkce7zPIL6xraZfVLa4WJwez7pLuZ2wy3NOOeO rticFlSit11Nyg19jNePc0X0/ZnmPRmmW1KGVsYHFxkmjZpvnXstt9RKCZFUoVXGSfTyJijWjKOU QTi4tNGahcum8MWEroU8mREdSu4yWG8M3YTTXUxY3G5RftGw6nsGnTljcvlPKMqSnlssci1st5ij S1F5qUPKRIRknFNM07qHPGL8DTjdVqTf4t48tzWtxnekzkZ3Ir5Qqf2cvgV9fn3wfwJxq7SmRzEY tRkusH8B8ppP2l9w402lMjJGrVKfeV+U6Od2viONNpLIyR61Kg/pF6v6D+mhqm43uYcxpq+t3+cR cryg+lSJNLuNzmQz5msrmk+lSJXtqb6TiNG2xlFcmv2sPrIuVSP1l8QbZslTDzLx+8u5gMm2Btgx 5GdgMN7jsMZLdP8AyOCy+l7CS6l1nmNNe416T230XJ7mHmKp7mVYqlqp1ZSWN+4xVbRqDeei8Db5 imc5z0Y2IijTlnD9rl7zeuLOndWToVHKMZL50HiS9zMdOUbe4nSm1F1H7DfRm7F1FFJ0ubHfFlpH Pw4anbJqlqdy6f1ZRTfxIupoNtGbVepVqtvdymdnKVV7KhJe80/UHKq51UvHHcXG6L20bbT7WFCn TsqEVKK3aW/xMl5KFpp06epqnG3ck4zqPaMvMk3c0rWKhDDm+kYLLZGXWkfLaxq6krTOVb53bXex sRdzo9KNX16wlKg1JRq047wqe43tPjNXOHGEVLpJdX7yadlbuhGnGHLGKxFJ9DSq6dUj+Rkml4iU qP1K+jo1SCvW406rahPGzfgYFxBYzaxcQe3iU1i1r39mre9hOUYtuDXczhLzhi4hUfZZa8tjcm52 5Z5ZS9R6LQ1a0uG+xqxnjrhkhSuab3UkeZaJoWpUb+1hT9lVJPmy+kV3s7qja1I2VOrhuM90SyNY 5WztNq5h9Yr6xB/SRBpN9GVw+5snFraXnVi+9GN1oJdURbz4ssaf1mOKbZ72tTlCUXKXteBE2/NC nKju1zbbGS4jJpuM8SXRmSjJy5OXllKO/MaRuW93Oz0+/wCyTU40ZSpr9LGxpW9WpX0ug72T7adN c8vMy3c+wnT5t1KKzv4surRj612MVmMWlgkX07fhmnGnw9QUHmPNLD/xMmSM0CChoFql0cW/i2yT ON8uk8AAIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc1xZoT1SyVxbRzdUFs l9OPgdKCy6Szc08Tptxlh9fM2GvpL7TreLeHcuWoWMPOtCK/+ZfxOQpz2WTrLtxs10z0anJLzN2j GNVvuz3kdyLOUZ6FeVCom1mL6lWM9Wi4SxJGtKn5G5UrRqyXJLK8C3lyIaaa5oPY2qV7KGE3gSpb 9DHKmESVPUFjfczq9iQfZNPYujSln5xNRd1NeuQ8QruHiRCpy+s2XqL8WNRdpX1qD2Za69J+BHcs l4leWfVIaG/2tLvwXc1LyI7M11SL45k8YQG9inIr2dN9xrQptvrsbUYzxiMc+8gs7Gm//wDC129N 9cfAz9lW8Ioo4Vl9QbNMDs6T6qPwKepUfqx+BfJXKfzYv3FvNU6OO5Ra7Ci+5FPk2g+9oum63L7C RizVS9vr5DdF/wAnUu6bX2lvyck/ZrSLXKfhL4lvPPPSXxCLnp9RN8td/aPU7ldKyZTtKi+sUdao u9l7F3q15HpOL+0dnerfK+JZ29Vd5R3VZPxAy5v49N/tDub+Kw6ba8UYvXqq6xZValJdU/gBiq3d xLapF580S1lVn2Mede1jcjXqMJP2opl0dShHZRwLCVOqZXnwQi1OPiXLU4eJni1yTPOV5iIWpU89 S5ajT+sOJtJVIU69NwqxUoPuZghQr0GlbXT5F9Gos4+01XqNP6xer+m/pIaptuqteqPKpUseLLJU atX8vcSx4QWDWV7T+si5XtNr5y+I1TbdoUaVvns4pSfWT3bM3MiOV3DxRX1mP1kTVNt/mWCvNsaC uYvvK9ul3jRtv5yt8P3mKdCjN+1Ti2avrCx1K9uu5jVNsrsrfO0MPyCtKeMJvHgYlXXeyqrp947O l/qdJdEPVKZb2y8SvbeY7OmOdnBMxStkk8JGaVVeO5hqVkos1NnSBu6ftTeXsy6lDs7VcnXBjuqj daS7mZJy5tJcot9pSy8G2PbSvq1zO1q1ZRcXTw4rHcmX0b/mpQuH7Tl1wLGpW1PTKzuXmdWEorPu wjS0S2dpptG1vIS5lJxSXXPcQ9PZNKh2ejWcemKMf3G4WwgoU4wXSKSRced3AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ziHhbPNeaXT9rrOhHv84/yOzBZdJZt47F7tNY a2aZeei6rw5aam5VUuxuX+dguvvXecTf6Pe6ZJ+s0ual3VYbxf8AI6zKVzuNjTikmZ4vHXc1Vt0L 1Vw9ystxSQaWOhrKovEv5srZkVnjGLKOMI9xputOm2s7FfWpLrgaNtyMl0wXcxoK69xdGunnLGht uovEwzuEu8xSqJx6ojq7nvjoJC1Jdspywt2+iJa2tlypz6s5izr8lTMsdSbV6+XeQsJU5CFGHekZ lKn47HPRvU3s0/PJfK+cV1RnTW09LOMxSx5mq5Ocmuq+CIl6pNraSSHr9Tukho2mVHlW+MFVy4+i yJjdTljmafvM3rOFmUUNKkJQg1usGrWt9swNaWpRhHdPHkYXrFJPq/cNVNxfnHUujKJEXWo03NuD xkw076beU3g1xrO3QcyDa8ERULyT6mZXSz1Gl23Wk+5FrjHwNdXRX1gaGV04lsoJLbDMcqsWW80f FlFHyZ/J5MbjSfWDRk9nBVOKKjB2VNvbJXsEl0M/NDwRcpJgajpJJsRpJpNG3hPqi6MV4A00nRKO hkkOWI5ENmkd2HgOxfiSPZxYdKI2aRvZPHzn8R2c/rS+JI9jEdihs0juSon85lWqq6Tl8Tf7H3FO xXgDSPzWX5yQ5639pI3/AFfJR25dmml2ldfnJFVXrrpNm26HkPV14DaaaiubhdJMqry4S+cbPq7+ wp2Hsg013dXH1vuLXXrSeJSbM/ZNvCjkz0rHmeak4xj4jZpGyWamX4GO4m/UrmjF4dWDhnOMErcU 7WM1GEstd5y/EF7QtLSVKSm6tWajCMHhvPiJ2mXU23J1PknhxqjL8ZSo4i/0n3kjw9Rldx0aFTmq VlUi6k5buW+W/gRd1QVfTYUZRbcuXKyd5wlpahe1blr2KMVTprza3+7b7TNuouM27MAHB3AAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0pJqSTT6pgAQd7wtYXbcqUXb1 H30unwOcvOE763blQ5biC+q8S+B34NTKxm4yvI61vVt6jhXpzpzXdJYMeZLoz12pSp1octaEZx8J LKIq44a0y4bfYdlJ99KWPu6GpmzwebNt9THKLfT4Hc1uC4P+rXco+VSGfvRH1eD76H5OdCp9rReU ZuNci4zz3lUpromdBU4c1Sm3m0csd8ZJ/wATF8iak2/6FW+1F3E1UKnJdUxnL3JG4sLm2Wbm3q01 4yi0jQliM/mttlGGpRWHLde4tpUpVOnNg26i/FeBWzqRb5dtmBdStJJrrt4GxK1co75NinCfPzc8 ceBt02oOTfK0/Em1RsdMm1lBafPOxL06tOCeZN53wWxnSpybcm29xtdI31edOWHkrOM+VpfvN+q4 100ngwOioraeQIms6kI9JPyIytJtvqmdFVn2aacJPzwQt5cU5ZxFp+41izWjClKo+uTfp0+WK7sG O08XgkFhltSNbLRTtZLo8GxOCb2Za6SxuQYO2l3yYVaWerMjhBPdlrhTX0vvKDryXRsqriePnMpy w+si5Rj3NAO3n9Zlyr1Gtgo5+a0Vj1wmskXasatV9EZYOs+uDE5NLqiir470Dbdi5LqzJGpJEd62 sfOXxCvIr6S+INxKKox2j8CM9fj4r4j16Pc/vByiV5yvORSvl4r4lyvV4jRuJRTHORivl3F3rqC7 iR50Ocj1druKq78gbb/OV50aKuorbBX1tA23OdZHOjT9Zi10HrEcgbnOUc9upq9vFjtY7gXynJdG YKk5OOXNsuc4mKcouL7wLKcZzqxlGLlhdEcvqclqOs2FO3hz/js1JvpBLw8Tejr6pVKlH2qe7jUl JdUu5ebNfQ7aV3rVN2VCvJQxywS7+/7y9ueV31HWuylcVKVvQUu1k1GL8WelabYw07TqNtTfNyL2 pP6T72aGjaIrGcrm5andTWEu6mvBfzJo4W7d8MdAAMtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkoxnFxmlKL6prqed8T6VHTLyNShHFtXzhfVl3o9 FIfiShQr6JUVzKEIxaanJZ5WXG6Zym48sdeU3yQpza75NbIup03Gtvsn3mtWuIWup9jQjKe/z+5m 9bylOus7pd53cUlQoqVJpuT95SriNPlcnHHei1zqcu33FnJLspdtLGe5kaYo3Lpyw55Rd6yuVptt +4wOpGD9hJvxKdrvlqJekbdvWTT7SfTojI68m/ZexpdpCWMrD8jYoJNNxf2MnSr5zk47vqaNxBcq UnH4EhVUlHdI0bl/jYcyXTuEStWnQlnMX1JHTtPvtTvXb2dFuMEuerJ4hH3mpGpPn5MKMG+p6to1 nTsdJoU6ccOUVOT7234kyy0uOO0LacGW8Ip3lxUqS71T9lfzJSnw5pdNL+iRl5zbl+9ksDlyrrMZ Gh8i6bj+oW3+WinyHpj/ANwt/wDLRIAbpqI16Bpb62Fv+wW/g9pX9wofskoBumoivwc0nOfUaWfL JauGdITyrGmn5N/zJcDdNREPhnSJdbOH7Uv5lj4U0dvPqcc/ry/mTQG6cYgJcG6JLrZ/CpL+ZjfB Ohv/AHWX+bL+Z0YHKpxx+nNPgbQ3/u817qsi18CaI/zNVf8AVZ04Lyv2cMfpyr4B0V/QuF7qrKPg DR8bO6X/AFf9DqwOeX2cMfpyX+z/AEjuqXf+av5Fy4C0tPKq3f8AmL+R1YHPL7OGP05T8BdPT2r3 S/xL+Q/Aay7rq5+Mf5HVgcqcY5T8B7Tuu7j7v5FPwHtv75X+COsA504xyX4D0O69qr/Ain4D0u6+ qf5a/mdcBzyOMch+A8O6/n/lL+ZT8CN9tQf+T/qdgBzyOMcc+CHj+v8Axo/6mKfA1RwajqCTff2X +p2wLzyOEcDbeja3jVU7u8dRJ5xGnjP2ts7DT9Js9LpuNnRjBy+dLrKXvZvAlyt8kxk8AAMtAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCcVxb4X u8LOEn95NkdrtPtdAvYLq6TES+HjnIu1jPG+SRoSUKjXmRTuVCHTc36D56ieeqRqZ5ZRxiRjPfOc GrcuTlnL3M3L+NRiuduhYrWSeSuMstzsXLHibRVRfU3KCSjuaafmb1BfikSrF9SbUFuaTzO5edsR Nqvs0kaiy51JfZkkKvtaLr31CiutWoo/FnsSSSSXRHmPDND1jiW129mnmb+xbfeenGcrtvCAAMtg AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjuIdra1YP6UGvuMgA8WdpTnVnGcE+VtGWjBRmuVY SRtXyjQ1y8oJ7xqPb7TAmkz0ODYSfaxFxBdWi5LMoyK1czcVHqFRzhHwwXKmn4GzOnKPzlsW436B GNUo56G/SpqNNI1UbazhY6BWGr89+SMFCCa8u8y1X7EmylJ8tCT78AT3BMe21vUKq+bQpxgve3n+ B3pxPo4p50e/u3u691JJ+UUl/FnbHHP9nTDwAAy0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AADxLi/VKWlekC8oXT5IVOWcZ928UQOt8YUNHoxnThGu5bpqW2CvpplBcbJSg/6vDfxPHtWs7y5t 5ULFTqRb9rE+iPRPEea3/Kx2d16WqyjijGjSXit2Rl36YLuUIxU4LH0orDPLLrS9ZsqjcrCvKHjy cxoK51GnJqvbVIr9KixO2uP9etQ9L9+5JSmpeGYmwvTFd53jS/ZPKaWo1VQnKpQlstswZgo61W5m 3ac6l0TgzWji9mp+mOr9OlRf2EpS9M1PlxUtqT90mjwWpf3lWTVO0a8OWm2W07fV7ip7Fncv3QLx TT6B/wBrllUjFStkk3vyzJq545s/kuLtk5V6q9mH1fNng2m6RdUraU7/AE+r2nMnHnaSOstacqTp qqorKztuNMXL6fW/Adq7XgPSlP59Wl20vfNuX8TpSL4dblwrpLksSdpSyvD2ESh5b5erHwAAigAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8S9PWjOOm2WvUN50per1YeKeXF/v+4+dKOu0IXTj Uqum/Bn1r6YYKfAajJZTuYfuZ81VuHdPvtVsbetbxca0G5tdep3x3xccpLk1aeuR25LlY8pGb5al Jb1Iy97Oir+h7QJLMK13RT7o1DmLj0dULS8nQt9Quml059xLtL+OM3yt49m/sRVapHwpL/CjF+AU 5QcVf1EvHG5s23o+5KHLK+nOWfnTW5f+M8IsWqtfNnBe7Yxy1yME+e5it/rG4/RxGpLfUJpfoxNz TPQrp925VbvU7yUG/mpJYG9emp+OVyWo8R2rpqDrxll74ZP8C0ZcXcXabp1PMaFaolOrjpFbvHnh M2dR9H2h6Lxbo+n0beVandPMp1pZZ3vAthb2HpSs6VrSjTpxqSUYxWMeyy7ujhjH0XTpxpUoU6cV GEEoxS7kuhcAeZ3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHn/pcWeB45/vMP3M+f7f bifTF+g1959AelzfgiP/ADMP3M+fYNR4p0lfo/xO+H6uWX7PUqsFydOhyt1TT1Gq8bnUzlmm09zk 68n8oVV3JmMWqo0sIyUt9luYeqwjYoReNzbLbgtmsE/peVZ+y2mnn3+RAR2z3k7pr/omG8itRxHF VdL0hcPycsKOW/Lc6Dgyt2vpVs2t06st/wDCzlOKfb4102a35Vyr4nUcDr/2naf+vL/tZr0xfMfR QAPM7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADz70uf+CIf8zD9zPntZ/CzSsfV/ifQ vpc24Jh/zMP3M+eqLUuMNMx0jB/vO2P6OV/d6fnMWczdQxqNTrhnROW3vIS6X9Mm31Mxq+GtnHvR noy+ws5U85RmpU9tkbjLPD4k3prxRa2WSHjFJEnp88UJZQrTg+K4uHG+lxysN9x1fBH/ALz7BJ5x OX/azkuMJY410Zx2b3+86ngSXN6TrDHXtJf9rNemL5fRgAPM7AAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAADzv0wPHA8Md91D9zPnm1eOM9Nj4wb+8+h/S/8A+B4f81D9zPnO2n/696Z5Qf7z vh+jjl+71V9NkQ92v6S9upNbcqZD3P8AWGZjdasXyyf7jcp4cMmtJPcz0fZi9tzSRnfzdjesWvV5 GjTbktyQtoqFu895FeecYVJR4x0h5wor+J1vo/lz+kywf6cv+1nHcYRf4YaT4JfxOv8AR22/SVZZ /tJf9rNemb5fSIAPO6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADz30vLPBEP+Zh+5nz fQeOONN/V/ifSHpd/wDBNP8A5qH7mfNlCS/2gaZF9OX+J3w/Rxy/d61TbcSLud7qSJSjjLSI26S9 ZZmeW2FLqbdvFYeVkwYxA27eGYrHU0Mkaa7kZlBuns2XqKjHBfbxy5J9EQeZcX5hxVprqPePReO5 1Po7qOfpRsMN4c5ZX+FnNcbxS4m02bWyeMHS+jn/AN5mnNLaUpf9rNemL5fTAAPO7AAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAFJSjCLlOSjFdW3gCoILUeMNA0n+v6ta039VT5n8Fk5W99MvDNs3G3ld XUv+HSwviyzG1LZHo4PGrn05UnlWWjzfhKrWX7kiJr+mTXK+fV7eyoLyi5P72a+PJnni97B841fS XxPXW+oKC/4dKK/gaj4w1y4k3V1e838KrRr4qnyR6v6XXjgqn/zUP3M+Y4S/9oOnLqsfxOu1/XL6 vaUYV7qvcQlNtxqVG+iznc4Wwu4XHHmm1IPKa6/abk446Z3vLb2uk8PBH3Ms3WGbbzzxa8CNqVOa 9ljuObozyliBuW29NYNObXZNs37HDo9DW0bE3iO3U2LWOYJJbPqzXlu8RWTYs6ihBZaTIPN+PqXL xPpKX0pM6j0fpL0k6bhYfPL/ALWcz6QKq/CjR+/2matvqk7XWITo1ZQqdphTi8NHXGbjnl1X2AD5 mqcU6tSf4vVLuLXhWYp+kDiG2eaerXD8qj5/3nL4q38sfTIPnah6X+IbZ/jatvXS7p0ks/AlrX06 3MGvXdIpVF3ujUcf35J8WSz8mL3MHlun+m/QLlpXtteWkm8fNU18Uddp3HfDeqNK01e2539CpLkf 34M3Gz01MpXSAthOFSClTlGUX0cXlMuMqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB55xj6TbTQa07HS4RvNQjtPf2 KXvfe/Islt1Etk8u9ubu3sreVa7rU6NKPWdSSikeda16YtGsZSpaVRrahVW3NH2Kfxf8jxzWdd1P Xrp1dWu6ld52hnEI+SRFuGVjGEzvj+Ke3HL8v0npf/yKWqa5qFnqWsU+Hra1XsTt7f1iVV53innZ mO79IHAusUO01PjLiG6k+v8AR3FfA4S74I4euq8q09NpwrSeZTpPlbYhwNpEY8qp1eTwdQvx30s/ Lj7bmtcT8B2rhLSeIK1Tnzl3NvycvlnPUx2leF9bxrW8lOjNZjOPRmClwFw9TlGU9PhWknldtLmw TtK0pW9KNK3pxp0orEYRWEvcbks8ueWUt6aPYPG7wyqi4/SfuJHsFjcsnRS6Iuk21oza65M0a/gW um/AxSp465Jo2geOLupT4eTpz5Jc+ObPkc5wbdSqa1o9STy99/tJPj+PLw1t/aHMcD1sX2j5680v 3mMnXDw+lKVdTnBJ78mSO5+a+n5MyWb5q2e/lwaNGpnVK68GcW0tNvsW1uyU055s08btkU96MsEz paSscYa36hW11g99zUjiEo5bWWblSoox6dSPzzwi0+kywrz3jySXEWmbt8rbycRR1mpU192+fZVd PJ1XHdZ/hVYUkuqbb8DzXTJutxdKK/tjvjHPJ6dO5cu8wSqSkuo9W6lyouJdOXTXlS5ns3kt9Wnj Klk3VRf+plVGT7gu0cqU49Srlt7WN/FEj2EsePvLXbJtN4yu5oqbSHDd/r9bUJW/DF1eVLmnHnlS t6jeF4tZ6Hqul6x6ULOClcaXG8prrCvGKl8U0fN9HhTW9L1SvfaLr1WhWrqSnKDdOWH3ZXcVVvx9 bKaocU38s9JO6kc8sbfEdcbjPNfVsPSvaabc0rXjHTbnRLio8RlUxOnL3Pr9x3Om6vp+sW3b6XeU bml3ulNPHv8AA+C77h7jLXZUvl7iN3EKL/F9vJ1XHPXB3GgTveHYUZWF7Vp16SS7Wm3HP2E+Hf8A Fv5JP6+ygeNcK+l+fbU7TienHkeyvKS6P9KPh5o9io1qdxQhVoTjUpTXNGcXlNeKZxyxuPlvHKZe F4AMtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAADgfSXxbLh/RVZ2U3HUL1NRkn+Tj3yPn9dXJttvdt9Wd96aKjpcaWkpvFN2qWft Z58qicNur+89f4sZMXl/JbchyTeCvhhmJ4SWXjyNijpl/df1azuqq8YUm0dLdMSWq7YW6Ll0M09A 1alHNTTL1R8exZoSk6dWUUpwktnGWzRJdrcbPLZfUqsY67GoqklupdS1yk/pl2jbbRa2seJqJzj9 LKDrPvGzTZ25fIPlaXiajrZXUsVWSluNw04/0j3lKGm0bJxaqV25wk1s8d3vOQ4MzS1DRk8/lH19 56HxTY0NU0rsbml2kc5jjrF+KZxGlaNfWNxbVrZ9vCjUwoz2a+05Z+Xb8fjT6CtJpPO3QjrKSqar dLvUiOstVvI0163p9aDx1i1Iu0WVavfXNWNGryyls+VnGNurpJ4wTlvB0rNddyEtXLZShPf9BnQw qRdnlRm0uvssl03NtKcpKLznL72YbBr1eo5PdTMlxV5ab5aNaT8oMhaWo1qVvVi7Stzc3hg1izXn XHVdS46sl3RgzznT72GncRVLm5TxGtjl73l7I7Xif12/4l9ZhRhRlRjjFWX8EQnDOk0HrLvLxqvW jPmipfNi/FI7YsZWaemU4qUE+XGVnDL+yWC1VoNrcq6q6N7nXp5zssLb4FezbHaR72sF6lnGCair HBtd5a6bazncz83mMqXzRqDD2csFXS23Nh7JZWzLW0o7LL7vIs0NZx3LVHfddTYUeZtNopypPOdi otVPG56T6LeK62n6vT0W7qOdjdPFHmf5Kp4Lyf7zzpvC6I3eH6yXF+jwg8y9cpZ8vaRjOSztrG2X p9VgA8L2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAADwP02U1V4goxl/dl9m7PEo6jW0yrirB1KC713Ht3pob/Cehj+7L97PFdQgp 0pYW56sP1jzZftVupa3qL06FXhX1Ovf82cXE0uVLwXeac/SN6U3LlrahqVFL6NvBRivdjuKUtDoX Cp1lHkrJ7TjsdrYaBeQpRbuXJYwpeQur5axtx8ODqekP0mxm5UtX1iUu5KbI+NfjfWL+1nqNRRsa NZ1p9vLFScpdd1uz1W60O7pKMuWNeL7qb3+BHXNnToTw3Upz74zjjBJMZ4XLLK+WnTrvGGn7zLz8 3eWy5I5w1JeKMEqqXRHTblpuKU10ljJZL2nmTNKVeefZL6cqs3jlYNNjEV3oqt1sbFKxqTim0b9L TZbeyBy2tQq+pZi2n3ELodCvUvqEXNtSnlx7meganpk3abQbZo6TpNSF5RnKGGn4Esal9OqhbuNG O3RGPhp1FVuM5S530Jd0JOj07jS4f0+o6lZ06c2nJ9Is5z26WeHX2tScZJ82SdVVu3jh7+4hKGnX EMc1GpjxwyV7OSpqPLLKMVqMNzKbpy3aOSlSclW58v2jq69OSpyy2tjnoUsRqd/tblxK8m13Tv8A 1jq1OVfM6kXo1go13jCeTudVsJT1ipNRbzE09L0mcajcaTW52jjk1ZW7T2LHTa78eB0dTTpPpDBr z02Wd19xWdISOVu1sV55J7bkjUsJw3cTUnbSS6A0xOe3tSaNTUdXjpunVbqW8KUcs2JUZZ3iwrWU nnC9zCMHC/pM4NqaS6muWV7cXTe0KVZQjj7TqJekr0dSpRUtAvlldKdxFyONr8P6XOcpVbShzPq1 FLJpVOHtEp05ThYqTS+g2ZuF+3bH8kk1pL6x6ROB2rmen1b2yr+yre1uY57R9/tdxt0r2FS1p1pO MYyjzbs4hqNGtjTtCpR+rWrwy15rJg9Xu7zUovUK8ppdKcXiKLNxnKS/x2F1rVNpwtZqc8k3wUp1 OLdJnUWP6VT2/wASORtrSEJ+xFI7Xg+PLxRpHndU/wDuRWfD6yAB4nqAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgnpmafFdGP/ AJWP72eOXlNuLXcer+meo4+kC3g3iM7OOP2meaXEPY9pHrxn+MeXL9qx2UMUqax3npFjH+jxWO44 e1pLsqePE7/T4tUY53M5N4tmEMPGDFd6bb3kHG4hzcyxnvwb8UkXcrzsc3Rw13wBb1Jc1leVreT7 pe0iJqcE6xbSbo3NC6iu55iz1DkfeWSptb9CzOxLjK8703hq7q1FC+hG2eereUdXa8BXNZZs7qyr PwVRJklOC5Nmc7cw5bpyi3GXjF4NcrWeMifjwLrVFf1Pn84yTMseG9ToP8ZYVdv0SHttUvqGFSvb iHuqMl6XE+sQS5dQrP3yyN5LrFjutMvIwX9FrLx9gpZWdSFaPaW8vthgkI8Z61CK/pPN+tBM2qfH GqL8oraf61JDlkcYgOMavEFnw1UnwfY07jUV+bnhPHisnldn6RPSfprnS9UvLWC681spb+Wx75Dj i6a9uztJP9TBnjxxVXztOtH9hjv6bmo8FuPSr6RFCmqd7qCnjfFnn+BHrUPSxxFqtK6sLPUa961y qrUj2MEvHw+4+ko8beOm22fcZ48cqWzsKaXhkdzxF3GHR6Gox4ftYa+oT1FU120qe6z/ABLJWsN8 Uu/wNx8bR7rGkYXxpNvayoJe4z/l9J05+60/muJNW7ee9IxW+m1VLa1k3nuizoJ8ZXO/JQto/wCA 158YajJ+zKlH9WBuZZM6jWej3VZezaP9kxPhXVKrfJbvD8jPLijVZ/7zJL9FYNWrrmo1E+a7q/tD eRqLZcBajNZm6dNPrzzwY1wHTi83OoW0Wu6G5pXF5cVU1UuKkvfJm9pyylnLZd5faan0158JaXTb 7W5qVX+jHCI254VtaksUW6cfizrGkljBimsroJlV4xyS4S06kk6kJVWvrM2Vp1tb0fxFvTgv1Sdd NzzhJtLO7NCpJTpZ8e41u1NR55xDTXrKTWNjlaFmq1/UnGS/F74fedtxFQxc0pNp9pHKX8zm7SHZ 39aXPyvlccY6+Rtzqrt4wipxy25HQ8JbcWaX35u6f/ciDqT5nyxXLH6ue8meGFy8V6P4u7pbf40a 9Me31iADwvYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAPnj03U1V4xoJ7NWsWmu7dnk8dXVpWVDV4NUpPELiK2+0919NfD9dytdf t050KcFQuEvob5jL3b4+B4pOjTuabjOKlB9U11PVhf8AGPNlP8rtO21vzUYVKLjUpdVODymjr7Cp zUly4aweZWGi3OmVlW0S/qW0Zv2reouem/s7jtbHUrmkow1jTXD/AMzavmi/NrqiVqOthUy8Gdbv oaNtKNeOba4jUj4PqZ81qW0qWfOLOdjcbSw1uUnHMNmjArqC2mpRf6SMqqQlHEHF+5kVr1IpRaa6 HLXaTuZHWTw033s5m9jH1iWVn3GsUyYaUXjdG1CDa7zFSUVHCbNunF/WNMrVFp9WXxTb6lXFp7NM yRUsLZMKpHmezexe08bSWC5cye8cl/fvACkIuX0kZqcW37ixTUV+T28jPTqZW1NgUec9xRZzvIyP Gc9lv7y3L3/FoC3bxLuXvbZdByS2ii/MtvmkGNQ95bODXRNmxzP6yLZVML53wA0p033rBMaZDEN+ pFVJJ75bJiweILHQUjdcX1a2MPIkuaVSTlJ/NxskZJz236GtOvTj1ks+C3IrHXhGVSEsvEepp3Dg oy5I8q8DYnVqVHilSm15rCNK9hKhbzq3dWlbwW/NORqRHG6xiV3ss47yEhbTq3E5pYiurL9S4ptF eVKOm29XUay2UorEM+8iHPVtRcqd3VVpSl+bobv3NnRzsbVe8oW1Ts6OK1w+5dxN8JKcuLNJlVeZ et0/+5HPWtjRtG1CP2vds7r0d6Jc67xjaerxlG3spxr16uNopPKXvbWPj4GrdRnXb6bAB4XrAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAGG7tKF9Z1rW8pRq29aLhUpzWVJPuPnbjb0W6hw3Vq32iRne6SnzciWalBefil4/E+jwaxyu LOWMyfIlnWhOEH4nXWklGCyen8TeizSNcqTudPb0u/k8upQinTm/0odPtWGcHe8J6/oMZO8sJXNC H+8WX4xNeLj85fA68pXOY2MPq9Gpu4JS8Vsy5W9zTg/Vruaz3VVzI0rbUbe5z2FanKUdnHOJJ+ae 5vqpiOHnJK1FqranSeKtvb3EMdYT5X8GYq2p06P9b0m8iu+dJKSXwNvtU+8yZb3TMqjqOraRcy5a d1XoT741abjj4mrc21GrXboXdOefIlZU1JvmSe3ejn6rlb3bdGXL5YNRmt2nYVU1h05e5m1CzrJf NXxNe21e7pvD7Oa/SpolqWvd1Wzot+WxrsR87Wbl+SZjdvNfQmTnyzZ7dpYb/ozMsNT0ufz7WtB+ UibVAKE490y/2s783wOije6NPqrmJkVbRJLerXj/AIRs05xY8ZGeml3ykdDF6G+txWX+A2KdPQn8 66rfsE5GnL4g93KbKKEc7do/sOrlHQV825rP/AYpVdEjtGdeT9w5GnNqLXSNR/YXKnN/mpv3nQ+t 6PHdU68vItep6bH5lnNv9KQ2aQit5t7Ufiy71etjCpwX2ku9aoRWKdjBe95NeprtTlzTo0Y/YN1O kd8n3E3j2F7kSdtpsoU/xlaXuWxFV9av5vHaxiv0I4Nq2uKtSOalWUn5svatypSt6a9qM6jXdk06 t1cRX9DsKfvqzS/cZpT2MNSp0wIaRlSesVp/j76lQh9S3p5fxZG3mlWlWTq3kZ3VRd9eTkvgTFas kvnEXXr88uzppzqSeFGKy39hqI5m9o06dwo0oRhH6sVhEXOdOFV5eGd9a+jjiTXbmM3QjY2z61Lp 8rx5RW/7j0Xhv0TaHolSNxfp6neLfnrxxTi/KHT45FzkZmFryPhL0favxdWjW5JWWl53uqsfnr9B fS9/Q+idA4f0/hrSadhpVHs6Ud5Se8qku+Un3slUlFJRSSWySBxyzuTrjhMQAGGgAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAQmscJaHr+Xq2mW9eo/z3Ly1F/jWJfecjd+iijHL0XWr208KVzFXEF7s4l97PSQWWxNR41X4E4p sm3Tp2GoQXfRrOnN/wCGSx/8xHVbHWLVuN5omo0sd8aPax+MMo92BeScXzxXvadGLVeUqMl1VWLh +85+reU6tzhTjJfoyyfUlSlTrQcKsIzi/oyWURNzwpoN5zes6Np83Lq3bxT+ODUziXGvnqlUTezN 6nNeJ7LU9HXC9SWVpUKb/wCHUnH9zNaXoz0F55PXKefq3DePjkvOJxrybmTl4F/Mntk9Pl6L9K+h eX6/WnF//SYv9l9qvmalcfbTiy84arzheRljJM79+jCnj2NVqJ+dBP8AiW/7MWumsP8A+GX/ANw5 w41wqqYawZoVZPqkdovRlJPK1d//AA3/AORf/s1l36u//hv/AMhyhquL5njLSX2lqkt8M7j/AGbZ WJatN+6gl/8AUXr0a0cb6pX96ppDlF41wnM1ndlrm+9nodP0cWcX+M1C8mvBcq/gbEPR7pMX7VW8 n5Oql+5E5xONeZ832lkqiS8j1inwLodP51tUqfr1pfzNulwloVLHLplu8fXXN+8c4vGvDqteLeFJ bMmtNo3NaKdG2rz/AFKUn/A9no6ZY239Xs7el+pSiv4G2S5rMXktPh/Wrn8np9VJ99VqH73k36HA Gp18O7u7a3T+onUf8EelgnOnFxtr6OtKptSvatxdy71KXJH4Lf7zpbDSbDTIcun2lGgu9wgk3731 ZugzbauoAAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAP/9k="
              id="image215"
              width={235.27}
              height={176.45}
              x={-9.987}
              y={61.277}
              display="inline"
              opacity={0.481}
              preserveAspectRatio="none"
            />
          </g>
          <path
            id="path216"
            fill="url(#linearGradient204)"
            strokeWidth={0.064}
            d="M114.12 138.24c-1.75 0-3.16.892-3.16 2v.284c0 .828.787 1.535 1.916 1.84-.01.616-.53 32.244-.11 33.091 1.13 2.279 7.743 2.409 11.314 2.32 3.57-.09 9.462.064 11.098-2.395.244-.527-.11-32.218-.119-33.006 1.153-.297 1.96-1.012 1.96-1.85v-.284c0-1.108-1.408-2-3.159-2z"
            style={{
              fill: "url(#linearGradient204)",
              paintOrder: "fill markers stroke",
            }}
            transform="matrix(-.3206 -.00535 -.00535 .3206 435.37 -39.495)"
          />
          <path
            id="path217"
            fill="#fff"
            strokeWidth={0.064}
            d="M109.71 121.81c.939 1.066 1.64 5.048 2.209 10.16.501 4.516.152 6.415 1.262 6.815 1.671.604 19.815 1.64 21.455 0s2.273-6.567 2.524-9.402-.198-4.088 1.514-5.743c1.893-1.83 17.67-1.514 17.67-1.514l42.531.82s8.242.127 9.97-.315c2.714-.695 5.302-4.544 5.807-7.573.504-3.029 1.135-39.44 1.135-39.44s-.582-9.587-.757-10.917c-.315-2.398-1.327-5.272-2.966-6.689-1.186-1.025-5.174-.947-9.78-1.01-9.787-.134-97.06-2.118-102.73-2.145-3.518-.017-10.41 1.88-13.505 4.039-2.83 1.973-6.04 4.894-7.95 7.446-2.4 3.203-4.04 8.582-4.797 9.34-.757.756-3.596 1.08-5.553 1.64-2.209.631-3.784 1.86-4.165 2.65-.878 1.824-.82 4.291-1.01 6.5-.118 1.383-.25 3.868.127 5.111.63 2.083 1.281 4.014 2.902 5.049 2.16 1.379 5.427 1.388 6.058 1.64.631.253 2.753 5.862 3.913 7.32 1.262 1.587 6.258 8.272 8.708 9.592 3.113 1.678 14.107 5.056 16.407 5.427 3.892.628 8.085.133 9.024 1.2z"
            display="none"
            style={{ paintOrder: "fill markers stroke" }}
            transform="matrix(-.3206 -.00535 -.00535 .3206 435.37 -39.495)"
          />
          <path
            id="path218"
            fill="none"
            stroke="#000"
            strokeWidth={0.664}
            d="M104.32 86.109s.343-9.765 1.733-9.718c3.1.103.95 24.565 4.373 24.362 5.773-.342 2.882-24.05 5.979-24.096 3.334-.05 1.308 24.27 4.73 24.274 3.474.006 3.938-24.1 6.113-24.229 2.676-.16 1.607 24.811 4.774 24.765 3.54-.052 3.152-24.433 5.355-24.363 3.443.11 2.3 24.274 5.176 24.274 4.94 0 2.381-24.548 5.8-24.453 3.457.097 1.896 24.453 4.374 24.453 4.162 0 4.997-16.33 4.997-16.33"
            style={{ paintOrder: "fill markers stroke" }}
            transform="matrix(-.3206 -.00535 -.00535 .3206 435.37 -39.495)"
          />
          <path
            id="path219"
            fill="none"
            stroke="#000"
            strokeWidth={0.664}
            d="M157.7 85.226s.217-8.881 1.606-8.835c3.101.104.95 24.566 4.373 24.363 5.774-.342 2.883-24.05 5.98-24.096 3.334-.05 1.308 24.269 4.73 24.274 3.474.006 3.938-24.1 6.113-24.229 2.676-.16 1.606 24.811 4.774 24.765 3.54-.052 3.151-24.433 5.355-24.363 3.443.11 2.3 24.274 5.176 24.274 4.94 0 2.38-24.548 5.8-24.453 3.457.097 1.896 24.453 4.373 24.453 4.163 0 4.71-13.732 4.71-13.732"
            style={{ paintOrder: "fill markers stroke" }}
            transform="matrix(-.3206 -.00535 -.00535 .3206 435.37 -39.495)"
          />
          <rect
            id="rect219"
            width={174.47}
            height={1.442}
            x={41.769}
            y={84.455}
            fill="url(#linearGradient7)"
            strokeWidth={0.045}
            rx={2.155}
            ry={0.449}
            style={{
              fill: "url(#linearGradient7)",
              paintOrder: "fill markers stroke",
            }}
            transform="matrix(-.32064 -.00178 -.00178 .32064 435.37 -39.495)"
          />
          <path
            id="path220"
            fill="none"
            stroke="#000"
            strokeWidth={0.664}
            d="M51.813 111.1s.343-9.765 1.733-9.718c3.1.103.95 24.565 4.373 24.362 5.774-.342 2.882-24.05 5.979-24.096 3.335-.05 1.308 24.27 4.73 24.274 3.474.006 3.938-24.1 6.113-24.229 2.676-.16 1.607 24.811 4.774 24.765 3.54-.052 3.152-24.433 5.355-24.363 3.443.11 2.3 24.274 5.176 24.274 4.94 0 2.381-24.548 5.8-24.453 3.457.097 1.896 24.453 4.374 24.453 4.162 0 4.997-16.33 4.997-16.33"
            clipPath="url(#clipPath228)"
            style={{ paintOrder: "fill markers stroke" }}
            transform="scale(-.32064 .32064)rotate(-.956 -9580.9 78143.94)"
          />
          <path
            id="path221"
            fill="none"
            stroke="#000"
            strokeWidth={0.664}
            d="M105.2 110.21s.217-8.881 1.606-8.835c3.101.104.95 24.566 4.373 24.363 5.774-.342 2.883-24.05 5.98-24.096 3.334-.05 1.308 24.269 4.73 24.274 3.474.006 3.938-24.1 6.113-24.229 2.676-.16 1.606 24.811 4.774 24.765 3.54-.052 3.151-24.433 5.355-24.363 3.443.11 2.3 24.274 5.176 24.274 4.94 0 2.38-24.548 5.8-24.453 3.457.097 1.896 24.453 4.373 24.453 4.163 0 4.71-13.732 4.71-13.732"
            clipPath="url(#clipPath238)"
            style={{ paintOrder: "fill markers stroke" }}
            transform="scale(-.32064 .32064)rotate(-.956 -9580.9 78143.94)"
          />
          <g
            id="g225"
            transform="matrix(-.3206 -.00535 -.00535 .3206 437.71 -38.955)"
          >
            <g id="g224" transform="rotate(1.387 -2.525 95.869)">
              <rect
                id="rect221"
                width={29.643}
                height={1.633}
                x={200.42}
                y={79.572}
                fill="url(#linearGradient257)"
                rx={2.937}
                ry={0.339}
                style={{
                  fill: "url(#linearGradient257)",
                  paintOrder: "fill markers stroke",
                }}
              />
              <rect
                id="rect222"
                width={29.643}
                height={1.633}
                x={200.01}
                y={66.504}
                fill="url(#linearGradient258)"
                rx={2.937}
                ry={0.339}
                style={{
                  fill: "url(#linearGradient258)",
                  paintOrder: "fill markers stroke",
                }}
              />
              <rect
                id="rect223"
                width={29.643}
                height={1.633}
                x={201.08}
                y={103.21}
                fill="url(#linearGradient260)"
                rx={2.937}
                ry={0.339}
                style={{
                  fill: "url(#linearGradient260)",
                  paintOrder: "fill markers stroke",
                }}
              />
              <rect
                id="rect224"
                width={29.643}
                height={1.633}
                x={200.72}
                y={91.839}
                fill="url(#linearGradient259)"
                rx={2.937}
                ry={0.339}
                style={{
                  fill: "url(#linearGradient259)",
                  paintOrder: "fill markers stroke",
                }}
              />
            </g>
            <path
              id="path224"
              fill="url(#linearGradient243)"
              d="M238.37 63.993c-2.175.006-5.341.225-6.305.516-1.285.389-2.588 2.053-2.5 3.124-.004 1.246-.097 22.672-.099 23.133v.248l.1 23.133c-.09 1.071 1.214 2.735 2.499 3.124 1.285.388 6.485.647 8.032.446 1.728-.225 3.42-2.44 3.926-3.391.825-1.55 2.843-6.845 3.57-7.853.951-1.318 7.925-7.211 9.55-7.675 2.623-.75 6.96.535 7.585 0 .608-.522.207-7.535.185-7.908.022-.376.423-7.386-.185-7.907-.625-.536-4.962.75-7.586 0-1.624-.465-8.598-6.358-9.549-7.675-.727-1.008-2.745-6.304-3.57-7.854-.506-.952-2.198-3.166-3.926-3.391-.387-.05-1.002-.072-1.727-.07"
              style={{
                fill: "url(#linearGradient243)",
                paintOrder: "fill markers stroke",
              }}
            />
            <rect
              id="rect225"
              width={2.32}
              height={18.206}
              x={264.01}
              y={81.911}
              fill="url(#linearGradient250)"
              rx={2.501}
              ry={2.417}
              style={{
                fill: "url(#linearGradient250)",
                paintOrder: "fill markers stroke",
              }}
            />
          </g>
          <path
            id="path225"
            fill="url(#linearGradient3)"
            strokeWidth={0.064}
            d="M109.71 121.81c.939 1.066 1.64 5.048 2.209 10.16.501 4.516.152 6.415 1.262 6.815 1.671.604 19.815 1.64 21.455 0s2.273-6.567 2.524-9.402-.198-4.088 1.514-5.743c1.893-1.83 17.67-1.514 17.67-1.514l42.531.82s8.242.127 9.97-.315c2.714-.695 5.302-4.544 5.807-7.573.504-3.029 1.135-39.44 1.135-39.44s-.582-9.587-.757-10.917c-.315-2.398-1.327-5.272-2.966-6.689-1.186-1.025-5.174-.947-9.78-1.01-9.787-.134-97.06-2.118-102.73-2.145-3.518-.017-10.41 1.88-13.505 4.039-2.83 1.973-6.04 4.894-7.95 7.446-2.4 3.203-4.04 8.582-4.797 9.34-.757.756-3.596 1.08-5.553 1.64-2.209.631-3.784 1.86-4.165 2.65-.878 1.824-.82 4.291-1.01 6.5-.118 1.383-.25 3.868.127 5.111.63 2.083 1.281 4.014 2.902 5.049 2.16 1.379 5.427 1.388 6.058 1.64.631.253 2.753 5.862 3.913 7.32 1.262 1.587 6.258 8.272 8.708 9.592 3.113 1.678 14.107 5.056 16.407 5.427 3.892.628 8.085.133 9.024 1.2z"
            style={{
              fill: "url(#linearGradient3)",
              paintOrder: "fill markers stroke",
            }}
            transform="matrix(-.3206 -.00535 -.00535 .3206 435.37 -39.495)"
          />
        </g>
        <path
          id="cork"
          fill="url(#radialGradient158)"
          strokeWidth={0.265}
          d="M419.88-14.195c.552.363 7.933.202 8.204 0 .242-.18.178 4.002 0 3.913-.179-.09-7.647-.559-8.204 0-.141.14-.194-4.04 0-3.913"
          style={{
            fill: "url(#radialGradient158)",
            paintOrder: "fill markers stroke",
          }}
        />
        <path
          id="rect16"
          fill="url(#linearGradient14)"
          d="M67.618 224.5h44.944v11.236H67.618z"
          style={{ display: "inline", fill: "url(#linearGradient14)" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <path
          id="rect17"
          fill="url(#linearGradient13)"
          d="M62 234.7h56.18v35.674H62z"
          style={{ display: "inline", fill: "url(#linearGradient13)" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <path
          id="rect18"
          fill="url(#linearGradient11)"
          d="M297.12 224.5h44.944v11.236H297.12z"
          style={{ display: "inline", fill: "url(#linearGradient11)" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <path
          id="rect209"
          fill="url(#linearGradient153)"
          strokeWidth={1.035}
          d="M-225.607-18.122h44.92v5.748h-44.92z"
          style={{
            display: "inline",
            fill: "url(#linearGradient153)",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(180 121.368 -11.45)scale(.14492)"
        />
        <path
          id="rect206"
          fill="url(#linearGradient152)"
          strokeWidth={1.121}
          d="M41.352-387.162h48.664v6.227H41.352z"
          style={{
            display: "inline",
            fill: "url(#linearGradient152)",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(90 133.469 113.584)scale(.13377)"
        />
        <path
          id="rect19"
          fill="url(#linearGradient12)"
          d="M291.5 234.7h56.18v35.674H291.5z"
          style={{ display: "inline", fill: "url(#linearGradient12)" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <path
          id="rect20"
          fill="url(#linearGradient2)"
          strokeWidth={2.51}
          d="M21 17h362v209.5H21z"
          style={{
            display: "inline",
            fill: "url(#linearGradient2)",
            paintOrder: "fill markers stroke",
          }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <path
          id="rect21"
          fill="#fbe631"
          strokeWidth={2.274}
          d="M35.5 29h331.99v187.5H35.5z"
          style={{ display: "inline", paintOrder: "fill markers stroke" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <rect
          id="rect22"
          width={283.89}
          height={115.12}
          x={58.765}
          y={59.765}
          fill="#8e9b81"
          stroke="#000"
          strokeWidth={4.531}
          ry={0}
          style={{ display: "inline" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        />
        <g
          id="g25"
          fill="#fff"
          stroke="#000"
          strokeWidth={1.124}
          style={{ display: "inline" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        >
          <rect
            id="rect23"
            width={38.202}
            height={22.472}
            x={178.56}
            y={-195.53}
            ry={10.868}
            transform="rotate(180 155.48 5.683)"
          />
          <rect
            id="rect24"
            width={38.202}
            height={22.472}
            x={-223.9}
            y={-206.9}
            ry={10.868}
            transform="scale(-1)"
          />
          <rect
            id="rect25"
            width={38.202}
            height={22.472}
            x={178.56}
            y={-195.53}
            ry={10.868}
            transform="rotate(180 245.98 5.683)"
          />
        </g>
        <text
          xmlSpace="preserve"
          id="text25"
          x={305.308}
          y={53}
          fill="#fbe631"
          strokeWidth={2.51}
          fontSize={21.333}
          style={{ display: "inline", paintOrder: "fill markers stroke" }}
          transform="translate(242.735 -22.9)scale(.14492)"
        >
          <tspan
            id="tspan25"
            x={203.788}
            y={53}
            fill="#1a1a1a"
            fontSize={21.333}
            textAnchor="middle"
          >
            {"Pressure Controller"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          id="pressure-value"
          x={351.843}
          y={125.938}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={9.643}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={27.429}
          style={{
            fontSize: "43.8186px",
            lineHeight: 0,
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
          transform="translate(242.735 -22.9)scale(.14492)"
        >
          <tspan
            id="tspan25-3"
            x={198.786}
            y={116.294}
            strokeWidth={9.643}
            fontSize={27.429}
            style={{ fontSize: "43.8186px" }}
          >
            {pressure}
          </tspan>
        </text>
      </g>
      <g id="bellows-and-gas-hose">
        <g
          id="wire-and-bellows"
          transform="matrix(.99904 0 0 1.00011 .033 -.013)"
        >
          <path
            id="wire-in-back"
            d="M158.935 111.222c1.587 4.994 5.45 6.612 7.42 6.584 1.447-.02 4.245-1.781 5.375-3.242 1.789-2.31 4.071-5.721 6.758-7.753 1.32-.998 2.736-1.663 4.24-1.702 6.502-.169 9.627 11.21 17.15 11.457 2.375.078 4.518-1.085 6.56-2.692 2.575-2.028 4.988-4.764 7.498-6.607 1.803-1.323 3.655-2.186 5.653-1.997 6.987.662 7.157 11.038 13.976 11.301 2.504.097 4.358-1.424 6.107-3.405 2.111-2.392 4.07-5.454 6.833-7.148 1.181-.724 2.51-1.198 4.062-1.262 8.184-.339 12.56 12.496 20.881 12.195 2.098-.076 3.79-.925 5.274-2.15 2.525-2.085 4.215-4.946 6.513-7.246 1.708-1.711 3.857-3.251 6.38-3.194 7.912.18 12.001 11.562 18.7 12.642 3.513.566 7.794-.941 10.702-2.356.52-.252.993-.501 1.418-.738 1.73-.963 2.659-1.723 2.659-1.723"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: 0.505,
              paintOrder: "markers fill stroke",
            }}
          />
          <path
            id="bellows"
            d="M164.136 106.04c-.373 0-1.216 2.76-1.295 3.017h-4.185v3.22h4.151c.023.075.944 3.121 1.329 3.121s2.474-3.046 2.525-3.12h.055c.053.074 2.216 3.12 2.598 3.12s2.455-3.045 2.506-3.12h.055c.053.075 2.199 3.12 2.578 3.12.38 0 2.437-3.046 2.487-3.12h.054c.053.074 2.184 3.12 2.56 3.12.377 0 2.418-3.046 2.468-3.12h.054c.052.075 2.166 3.12 2.54 3.12s2.399-3.045 2.449-3.12h.054c.051.075 2.15 3.12 2.521 3.12.37 0 2.381-3.046 2.43-3.12h.054c.05.074 2.134 3.12 2.502 3.12s2.363-3.045 2.412-3.12h.053c.05.075 2.119 3.12 2.484 3.12s2.344-3.045 2.393-3.12h.053c.05.074 2.103 3.12 2.465 3.12.363 0 2.327-3.046 2.375-3.12h.052c.05.075 2.088 3.12 2.448 3.12s2.308-3.045 2.356-3.12h.052c.05.075 2.072 3.12 2.43 3.12.357 0 2.29-3.046 2.338-3.12h.051c.05.074 2.058 3.12 2.412 3.12s2.273-3.045 2.32-3.12h.051c.05.075 2.042 3.12 2.394 3.12.351 0 2.255-3.045 2.302-3.12h.05c.05.074 2.028 3.12 2.377 3.12s2.239-3.046 2.285-3.12h.05c.048.074 2.012 3.12 2.359 3.12.346 0 2.221-3.045 2.267-3.12h.05c.048.075 1.997 3.12 2.34 3.12.345 0 2.205-3.046 2.25-3.12h.05c.048.074 1.983 3.12 2.324 3.12s2.188-3.046 2.233-3.12h.05c.046.075 1.967 3.12 2.305 3.12.34 0 2.17-3.045 2.216-3.12h.049c.046.074 1.953 3.12 2.289 3.12s2.154-3.046 2.199-3.12h.048c.046.074 1.939 3.12 2.272 3.12.334 0 2.138-3.045 2.182-3.12h.048c.046.075 1.925 3.12 2.256 3.12s2.12-3.045 2.165-3.12h.047c.046.074 1.91 3.12 2.24 3.12.328 0 2.104-3.046 2.148-3.12h.047c.046.074 1.897 3.12 2.223 3.12s2.088-3.045 2.131-3.12h.048c.045.075 1.881 3.12 2.205 3.12s2.073-3.045 2.116-3.12h.047c.044.074 1.868 3.12 2.19 3.12.32 0 2.056-3.046 2.098-3.12h.047c.044.074 1.854 3.12 2.173 3.12.32 0 2.041-3.045 2.083-3.12h.047c.044.075 1.84 3.12 2.157 3.12s2.025-3.046 2.067-3.12h.045c.044.074 1.828 3.12 2.142 3.12s2.01-3.046 2.05-3.12h.046c.043.075 1.814 3.12 2.126 3.12s1.994-3.045 2.035-3.12h.045c.043.075 1.8 3.12 2.11 3.12s1.98-3.046 2.02-3.12h.045c.042.074 1.787 3.12 2.094 3.12s1.963-3.046 2.004-3.12h.044c.043.075 1.774 3.12 2.08 3.12.304 0 1.948-3.045 1.988-3.12h.044c.042.075 1.761 3.12 2.063 3.12s1.934-3.046 1.974-3.12h.043c.042.074 1.748 3.12 2.049 3.12s1.919-3.046 1.958-3.12h.043c.042.075 1.736 3.12 2.034 3.12s.938-3.045.954-3.12h2.08v-3.22h-2.104c-.054-.258-.642-3.019-.93-3.019s-1.83 2.761-1.974 3.018h-.16c-.137-.257-1.611-3.018-1.901-3.018s-1.844 2.761-1.989 3.018h-.16c-.14-.257-1.624-3.018-1.917-3.018s-1.857 2.76-2.002 3.018h-.163c-.14-.257-1.636-3.018-1.931-3.018s-1.871 2.76-2.018 3.018h-.164c-.14-.257-1.649-3.018-1.946-3.018s-1.884 2.76-2.032 3.018h-.165c-.141-.257-1.662-3.018-1.962-3.018-.299 0-1.899 2.761-2.048 3.018h-.165c-.143-.257-1.675-3.018-1.977-3.018-.301 0-1.913 2.76-2.063 3.018h-.168c-.143-.257-1.687-3.018-1.99-3.018-.305 0-1.928 2.76-2.08 3.018h-.168c-.145-.257-1.701-3.018-2.007-3.018s-1.942 2.76-2.094 3.018h-.17c-.146-.257-1.714-3.018-2.022-3.018-.309 0-1.957 2.761-2.11 3.018h-.172c-.147-.257-1.727-3.018-2.037-3.018s-1.97 2.76-2.125 3.018h-.173c-.148-.257-1.741-3.018-2.054-3.018s-1.986 2.76-2.141 3.018h-.174c-.15-.257-1.755-3.018-2.07-3.018s-2 2.761-2.157 3.018h-.175c-.15-.257-1.768-3.018-2.086-3.018s-2.015 2.76-2.173 3.018h-.177c-.152-.257-1.781-3.018-2.102-3.018s-2.03 2.76-2.19 3.018h-.177c-.153-.257-1.796-3.018-2.118-3.018-.323 0-2.046 2.761-2.206 3.018h-.179c-.154-.257-1.81-3.018-2.135-3.018s-2.06 2.76-2.222 3.018h-.18c-.156-.257-1.824-3.018-2.151-3.018-.328 0-2.076 2.76-2.24 3.018h-.18c-.157-.257-1.839-3.018-2.169-3.018s-2.092 2.761-2.256 3.018h-.183c-.158-.257-1.852-3.018-2.184-3.018s-2.107 2.76-2.272 3.018h-.185c-.159-.257-1.866-3.018-2.201-3.018s-2.123 2.76-2.29 3.018h-.185c-.16-.257-1.881-3.018-2.219-3.018s-2.139 2.761-2.306 3.018h-.188c-.161-.257-1.895-3.018-2.235-3.018s-2.154 2.76-2.323 3.018h-.19c-.162-.257-1.91-3.018-2.252-3.018-.343 0-2.171 2.761-2.341 3.018h-.19c-.164-.257-1.925-3.018-2.27-3.018-.346 0-2.187 2.76-2.359 3.018h-.192c-.165-.257-1.94-3.018-2.287-3.018-.348 0-2.204 2.761-2.376 3.018h-.193c-.166-.257-1.955-3.018-2.306-3.018-.35 0-2.219 2.76-2.393 3.018h-.195c-.167-.257-1.97-3.018-2.323-3.018s-2.236 2.76-2.412 3.018h-.196c-.169-.257-1.985-3.018-2.34-3.018-.357 0-2.253 2.76-2.43 3.018h-.198c-.17-.257-2-3.018-2.36-3.018-.358 0-2.269 2.76-2.447 3.018h-.199c-.171-.257-2.016-3.018-2.377-3.018-.362 0-2.287 2.76-2.466 3.018h-.2c-.174-.257-2.032-3.018-2.396-3.018s-2.304 2.76-2.485 3.018h-.202c-.174-.257-2.047-3.018-2.414-3.018s-2.32 2.76-2.503 3.018h-.204c-.175-.257-2.063-3.018-2.433-3.018s-2.338 2.76-2.521 3.018h-.205c-.177-.257-2.08-3.018-2.452-3.018z"
            style={{
              fill: "url(#linearGradient333)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.462531,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "markers fill stroke",
            }}
          />
          <path
            id="wire-in-front"
            d="M319.017 114.647c.52-.252 1.062-.556 1.487-.793 1.73-.963 2.59-1.668 2.59-1.668m-46.372 2.615c2.525-2.085 4.511-5.24 6.81-7.54m-43.367 5.328c2.111-2.392 3.576-4.877 6.34-6.57m-40.068 7.855c2.576-2.028 5.842-5.396 8.353-7.24m-43.176 8.086c1.788-2.311 4.187-5.877 6.874-7.909 1.32-.998 2.736-1.663 4.24-1.702 1.573-.04 2.949.595 4.237 1.585"
            style={{
              display: "inline",
              fill: "none",
              stroke: "#000",
              strokeWidth: 0.505,
              paintOrder: "markers fill stroke",
            }}
          />
        </g>
        <path
          id="gas-hose"
          d="m77.15 23.935 8.604.341c4.925.196 7.195 1.924 8.627 2.46 6.987 2.612 10.537 13.132 11.605 17.582 2.084 8.681.36 22.31.318 25.169-.06 4.224-.052 8.8.224 10.15 3.23 15.8 20.987 30.724 37.11 31.041 3.21.064 11.484.007 11.484.007"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "url(#linearGradient335)",
            strokeWidth: 3.359,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
        />
      </g>
      <g id="hooks-and-wires">
        <g id="hooks" fill="none" stroke="#949494" strokeWidth={0.265}>
          <path
            id="path228"
            d="M172.43 18.099s.494 3.06 1.695 3.213c1.316.167 2.199-1.708 2.677-2.945.01-.028 0-.09 0-.09"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <path
            id="path229"
            d="M288.88 17.657s.494 3.06 1.696 3.213c1.316.167 2.198-1.708 2.677-2.945.01-.028 0-.09 0-.09"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <path
            id="path230"
            d="M409.86 18.015s.494 3.06 1.696 3.213c1.316.167 2.199-1.708 2.677-2.945.01-.028 0-.09 0-.09"
            style={{ paintOrder: "fill markers stroke" }}
          />
        </g>
        <path
          id="wire"
          d="M689.415 140.747s-2.94-73.906-13.062-74.93c-6.959-.703-34.37-5.257-76.222-4.097-22.578.625-48.8 4.31-73.43 4.322-21.027.01-40.79-3.852-47.204-4.558-7.815-.86-29.723 3.52-58.088 4.207-17.43.421-42.239-3.803-58.022-3.74-2.388.01-10.068 2.648-11.141 7.973-.466 2.31.098 5.445-.66 8.09-2.326 8.134-4.522 72.238-4.285 74.937"
          style={{
            fill: "none",
            stroke: "#000",
            strokeWidth: 0.505,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="translate(-188.598 -41.089)"
        />
        <rect
          id="rect227"
          width={1.767}
          height={4.796}
          x={483.312}
          y={22.347}
          fill="url(#linearGradient177)"
          rx={0.126}
          ry={0.883}
          style={{
            fill: "url(#linearGradient177)",
            paintOrder: "fill markers stroke",
          }}
        />
        <rect
          id="rect1"
          width={1.767}
          height={4.796}
          x={487.122}
          y={22.347}
          fill="url(#linearGradient177)"
          rx={0.126}
          ry={0.883}
          style={{
            fill: "url(#linearGradient8)",
            paintOrder: "fill markers stroke",
          }}
        />
        <rect
          id="rect1-5"
          width={1.767}
          height={4.796}
          x={29.368}
          y={-165.964}
          fill="url(#linearGradient177)"
          rx={0.126}
          ry={0.883}
          style={{
            fill: "url(#linearGradient10)",
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(90)"
        />
        <rect
          id="rect10"
          width={1.767}
          height={4.796}
          x={33.268}
          y={-165.964}
          fill="url(#linearGradient177)"
          rx={0.126}
          ry={0.883}
          style={{
            fill: "url(#linearGradient15)",
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(90)"
        />
      </g>
      <g
        id="radiation"
        style={{
          display: "inline",
          strokeWidth: 0.900589,
          strokeDasharray: "none",
        }}
        transform="matrix(.28034 0 0 .17202 459.287 41.139)"
      >
        <path
          id="s-band"
          d="m-229.318 56.387-.386.243-.523.244a.614 1.15 0 0 0-.192.159l-.41.511-.407.512a.614 1.15 0 0 0-.095.143l-.544 1.02a.614 1.15 0 0 0-.059.125l-.408 1.023a.614 1.15 0 0 0-.036.096l-.408 1.279-.403 1.254-.536 1.51a.614 1.15 0 0 0-.053.183l-.41 1.79a.614 1.15 0 0 0-.012.047l-.408 2.046a.614 1.15 0 0 0-.009.04l-.4 2.246-.532 2.249a.614 1.15 0 0 0-.028.137l-.408 2.554-.41 2.554a.614 1.15 0 0 0-.007.028l-.404 2.78-.54 3.037a.614 1.15 0 0 0-.017.106l-.407 3.318-.407 3.293-.54 3.55a.614 1.15 0 0 0-.013.09l-.41 3.833-.409 3.833a.614 1.15 0 0 0-.002.013l-.406 4.06-.543 4.32a.614 1.15 0 0 0-.007.062l-.408 4.344a.614 1.15 0 0 0-.002.01l-.41 4.6-.405 4.576-.543 4.827a.614 1.15 0 0 0-.007.069l-.41 5.108-.408 5.087-.542 5.346a.614 1.15 0 0 0-.005.05l-.41 5.367a.614 1.15 0 0 0 0 .006l-.41 5.62-.406 5.6-.544 5.855a.614 1.15 0 0 0-.003.05l-.41 5.875a.614 1.15 0 0 0 0 .006l-.41 6.131a.614 1.15 0 0 0 0 .006l-.407 6.36-.543 6.106a.614 1.15 0 0 0-.005.06l-.41 6.64-.407 6.364-.543 6.625a.614 1.15 0 0 0-.003.046l-.41 6.899-.41 6.899-.407 6.88-.545 7.135a.614 1.15 0 0 0-.002.04l-.41 7.152-.409 7.154a.614 1.15 0 0 0 0 .006l-.408 7.388-.544 7.389a.614 1.15 0 0 0-.003.04l-.408 7.41a.614 1.15 0 0 0 0 .004l-.41 7.644-.542 7.647a.614 1.15 0 0 0-.003.038l-.41 7.665-.408 7.663-.41 7.65-.544 7.903a.614 1.15 0 0 0-.002.035l-.41 7.921-.407 7.922-.41 7.9-.544 7.902a.614 1.15 0 0 0-.002.037l-.41 7.919a.614 1.15 0 0 0 0 .004l-.408 8.174-.41 7.903-.544 8.158a.614 1.15 0 0 0-.002.032l-.276 5.336-.275-5.333-.41-8.174a.614 1.15 0 0 0 0-.004l-.409-7.919a.614 1.15 0 0 0-.002-.037l-.544-7.9-.408-8.155a.614 1.15 0 0 0 0-.004l-.41-7.922-.408-7.918a.614 1.15 0 0 0-.003-.038l-.544-7.902-.408-7.903a.614 1.15 0 0 0 0-.004l-.41-7.663a.614 1.15 0 0 0-.002-.034l-.544-7.903-.408-7.647-.41-7.666-.41-7.666a.614 1.15 0 0 0-.001-.04l-.545-7.392-.408-7.388-.41-7.41-.409-7.41a.614 1.15 0 0 0-.003-.044l-.542-7.132-.408-7.133-.41-7.154a.614 1.15 0 0 0-.003-.047l-.544-6.877-.408-6.876a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.643-.408-6.643a.614 1.15 0 0 0-.003-.04l-.544-6.625-.408-6.368-.41-6.387a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.132a.614 1.15 0 0 0-.004-.047l-.545-6.112-.408-5.854-.407-5.879a.614 1.15 0 0 0-.005-.056l-.543-5.595-.408-5.595a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.367a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.112a.614 1.15 0 0 0-.004-.053l-.543-5.083-.408-5.084a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-4.856a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.409-4.597a.614 1.15 0 0 0-.007-.062l-.543-4.572-.406-4.32a.614 1.15 0 0 0-.002-.012l-.41-4.089-.407-4.086a.614 1.15 0 0 0-.012-.087l-.538-3.802-.406-3.549-.408-3.577a.614 1.15 0 0 0-.015-.097l-.538-3.284-.405-3.28a.614 1.15 0 0 0-.003-.02l-.407-3.065a.614 1.15 0 0 0-.003-.025l-.41-2.81a.614 1.15 0 0 0-.023-.124l-.535-2.508-.4-2.504a.614 1.15 0 0 0-.01-.034l-.408-2.299a.614 1.15 0 0 0-.009-.04l-.41-2.046a.614 1.15 0 0 0-.024-.11l-.538-2.014-.401-1.756a.614 1.15 0 0 0-.017-.063l-.408-1.53a.614 1.15 0 0 0-.07-.207l-.52-1.216-.387-1.21a.614 1.15 0 0 0-.037-.1l-.408-1.023a.614 1.15 0 0 0-.058-.121l-.408-.768a.614 1.15 0 0 0-.16-.215l-.511-.477-.378-.474a.614 1.15 0 0 0-.146-.134l-.41-.253a.614 1.15 0 0 0-.193-.059h-.956a.614 1.15 0 0 0-.34.193l-.409.509-.378.47-.511.48a.614 1.15 0 0 0-.216.34l-.41 1.02-.408 1.024a.614 1.15 0 0 0-.035.096l-.388 1.213-.52 1.217a.614 1.15 0 0 0-.086.265l-.408 1.79-.41 1.787a.614 1.15 0 0 0-.01.05l-.397 1.986-.531 1.99a.614 1.15 0 0 0-.033.15l-.41 2.301a.614 1.15 0 0 0-.007.032l-.403 2.523-.54 2.782a.614 1.15 0 0 0-.016.09l-.408 2.81a.614 1.15 0 0 0-.003.022l-.41 3.065a.614 1.15 0 0 0-.003.022l-.403 3.281-.539 3.281a.614 1.15 0 0 0-.013.097l-.41 3.577a.614 1.15 0 0 0-.002.016l-.41 3.833-.406 3.805-.542 4.06a.614 1.15 0 0 0-.01.081l-.409 4.342-.408 4.344-.408 4.326-.544 4.834a.614 1.15 0 0 0-.005.059l-.41 4.853-.408 4.837-.542 5.348a.614 1.15 0 0 0-.005.044l-.408 5.108a.614 1.15 0 0 0-.002.01l-.408 5.365a.614 1.15 0 0 0-.002.006l-.406 5.598-.545 5.595a.614 1.15 0 0 0-.005.056l-.408 5.876a.614 1.15 0 0 0-.002.006l-.408 6.128-.408 5.857-.544 6.371a.614 1.15 0 0 0-.003.038l-.41 6.131a.614 1.15 0 0 0 0 .006l-.408 6.369-.544 6.624a.614 1.15 0 0 0-.002.043l-.41 6.643-.41 6.643a.614 1.15 0 0 0 0 .004l-.407 6.877-.544 6.88a.614 1.15 0 0 0-.003.043l-.408 7.151-.41 6.896a.614 1.15 0 0 0 0 .01l-.408 7.388-.544 7.133a.614 1.15 0 0 0-.003.043l-.41 7.407-.408 7.392-.542 7.388a.614 1.15 0 0 0-.003.044l-.41 7.662-.408 7.407a.614 1.15 0 0 0-.003.004l-.408 7.647-.544 7.644a.614 1.15 0 0 0-.002.044l-.41 7.918-.41 7.663a.614 1.15 0 0 0 0 .004l-.407 7.9-.545 7.903a.614 1.15 0 0 0-.002.034l-.41 7.663a.614 1.15 0 0 0 0 .004l-.407 7.902-.545 7.903a.614 1.15 0 0 0-.002.04l-.41 8.172-.409 7.918-.274 5.333-.277-5.333-.41-7.918a.614 1.15 0 0 0-.001-.037l-.545-7.9-.408-7.903-.41-7.921-.409-7.919a.614 1.15 0 0 0-.002-.04l-.544-7.644-.408-7.9a.614 1.15 0 0 0 0-.004l-.41-7.666a.614 1.15 0 0 0-.002-.037l-.544-7.647-.408-7.644-.41-7.666a.614 1.15 0 0 0 0-.004l-.41-7.41a.614 1.15 0 0 0-.001-.034l-.545-7.648-.41-7.138-.407-7.407-.41-7.41a.614 1.15 0 0 0-.003-.044l-.544-7.136-.408-6.876-.408-7.152a.614 1.15 0 0 0-.003-.047l-.544-6.88-.408-6.62-.41-6.896a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.643a.614 1.15 0 0 0-.002-.05l-.543-6.365-.408-6.362-.41-6.387a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.132a.614 1.15 0 0 0-.004-.056l-.543-5.847-.406-6.107a.614 1.15 0 0 0-.002-.013l-.41-5.62a.614 1.15 0 0 0-.003-.04l-.544-5.86-.408-5.349-.408-5.364-.41-5.364a.614 1.15 0 0 0-.007-.062l-.54-5.084-.409-5.083a.614 1.15 0 0 0-.002-.02l-.408-4.593-.41-4.847a.614 1.15 0 0 0-.006-.071l-.543-4.575-.406-4.317a.614 1.15 0 0 0-.002-.012l-.41-4.089a.614 1.15 0 0 0-.009-.065l-.54-4.064-.407-3.805-.41-3.833a.614 1.15 0 0 0-.002-.013l-.41-3.577a.614 1.15 0 0 0-.012-.1l-.54-3.28-.403-3.281a.614 1.15 0 0 0-.003-.019l-.41-3.066a.614 1.15 0 0 0-.002-.025l-.408-2.81a.614 1.15 0 0 0-.017-.09l-.54-2.779-.402-2.523a.614 1.15 0 0 0-.007-.034l-.41-2.299-.408-2.301a.614 1.15 0 0 0-.035-.15l-.538-2.014-.402-1.756a.614 1.15 0 0 0-.016-.063l-.41-1.531a.614 1.15 0 0 0-.037-.125l-.536-1.51-.403-1.253a.614 1.15 0 0 0-.035-.1l-.41-1.02-.408-1.022a.614 1.15 0 0 0-.123-.231l-.546-.767a.614 1.15 0 0 0-.025-.035l-.41-.511a.614 1.15 0 0 0-.146-.134l-.41-.256-.41-.256a.614 1.15 0 0 0-.193-.059h-.546a.614 1.15 0 0 0-.193.06l-.41.255-.409.256a.614 1.15 0 0 0-.08.062l-.546.512a.614 1.15 0 0 0-.16.215l-.404.764a.614 1.15 0 0 0-.058.125l-.408 1.023-.405 1.007-.54 1.263a.614 1.15 0 0 0-.07.203l-.407 1.534-.41 1.531a.614 1.15 0 0 0-.015.063l-.403 1.756-.538 2.014a.614 1.15 0 0 0-.033.15l-.408 2.302-.404 2.267-.538 2.523a.614 1.15 0 0 0-.018.097l-.41 2.554a.614 1.15 0 0 0-.005.028l-.408 2.81a.614 1.15 0 0 0-.003.025l-.406 3.034-.54 3.294a.614 1.15 0 0 0-.011.078l-.41 3.321a.614 1.15 0 0 0-.003.019l-.41 3.577-.405 3.55-.542 3.804a.614 1.15 0 0 0-.01.084l-.41 4.086-.405 4.063-.543 4.317a.614 1.15 0 0 0-.01.074l-.409 4.6-.408 4.598-.408 4.58-.544 5.09a.614 1.15 0 0 0-.003.047l-.41 4.856a.614 1.15 0 0 0-.002.016l-.41 5.361-.405 5.09-.545 5.601a.614 1.15 0 0 0-.003.044l-.41 5.364a.614 1.15 0 0 0-.001.016l-.408 5.873-.408 5.6-.545 6.114a.614 1.15 0 0 0-.003.04l-.407 5.876a.614 1.15 0 0 0-.002.006l-.408 6.112-.543 6.369a.614 1.15 0 0 0-.003.044l-.41 6.387-.41 6.387a.614 1.15 0 0 0 0 .006l-.407 6.621-.545 6.621a.614 1.15 0 0 0-.003.044l-.408 6.643a.614 1.15 0 0 0 0 .004l-.41 6.898-.407 6.877-.544 6.877a.614 1.15 0 0 0-.003.047l-.41 7.154-.408 7.132-.543 7.136a.614 1.15 0 0 0-.003.037l-.41 7.155a.614 1.15 0 0 0 0 .006l-.409 7.407-.408 7.391-.544 7.388a.614 1.15 0 0 0-.002.04l-.41 7.408-.41 7.41a.614 1.15 0 0 0 0 .004l-.407 7.644-.545 7.388a.614 1.15 0 0 0-.002.04l-.41 7.666-.407 7.648-.545 7.644a.614 1.15 0 0 0-.002.037l-.41 7.666-.409 7.662-.408 7.647-.316 4.445-.236-4.426a.614 1.15 0 0 0-.002-.037l-.545-7.647-.408-7.644-.41-7.666a.614 1.15 0 0 0-.002-.04l-.545-7.389-.408-7.644a.614 1.15 0 0 0 0-.004l-.41-7.41-.407-7.41a.614 1.15 0 0 0-.003-.031l-.544-7.65-.408-7.139-.41-7.407-.408-7.407a.614 1.15 0 0 0-.003-.047l-.544-7.132-.408-7.133-.41-7.154a.614 1.15 0 0 0 0-.004l-.41-6.899a.614 1.15 0 0 0-.001-.043l-.545-6.877-.408-6.877-.408-6.899a.614 1.15 0 0 0-.003-.046l-.542-6.621-.408-6.621a.614 1.15 0 0 0-.002-.006l-.408-6.388-.41-6.387a.614 1.15 0 0 0-.003-.043l-.544-6.369-.408-6.112-.408-6.132-.41-6.131a.614 1.15 0 0 0-.004-.053l-.543-5.857-.408-5.598-.41-5.623a.614 1.15 0 0 0-.007-.05l-.542-5.598-.408-5.343-.41-5.367a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.111a.614 1.15 0 0 0-.005-.066l-.542-4.825-.408-4.824-.408-4.856a.614 1.15 0 0 0-.002-.01l-.41-4.6a.614 1.15 0 0 0-.007-.072l-.542-4.313-.407-4.31a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-4.089a.614 1.15 0 0 0-.008-.065l-.541-4.064-.407-3.805a.614 1.15 0 0 0-.002-.016l-.41-3.577-.409-3.577a.614 1.15 0 0 0-.013-.097l-.54-3.28-.404-3.282a.614 1.15 0 0 0-.005-.043l-.408-2.801-.408-3.053a.614 1.15 0 0 0-.025-.147l-.536-2.507-.401-2.508-.408-2.554a.614 1.15 0 0 0-.04-.184l-.531-1.99-.398-1.986-.41-2.046a.614 1.15 0 0 0-.024-.11l-.41-1.53a.614 1.15 0 0 0-.038-.125l-.538-1.51-.401-1.254-.41-1.278a.614 1.15 0 0 0-.035-.1l-.408-1.02a.614 1.15 0 0 0-.123-.23l-.511-.718-.378-.708a.614 1.15 0 0 0-.24-.277l-.331-.21-.341-.424a.614 1.15 0 0 0-.34-.193h-.956a.614 1.15 0 0 0-.193.06l-.41.255a.614 1.15 0 0 0-.08.063l-.545.511a.614 1.15 0 0 0-.067.072l-.408.511a.614 1.15 0 0 0-.095.144l-.407.764-.41.767a.614 1.15 0 0 0-.045.093l-.546 1.276a.614 1.15 0 0 0-.046.13l-.41 1.276-.41 1.28a.614 1.15 0 0 0-.038.133l-.395 1.728-.527 1.734a.614 1.15 0 0 0-.032.115l-.41 1.79a.614 1.15 0 0 0-.018.09l-.4 2.25-.532 2.248a.614 1.15 0 0 0-.022.1l-.41 2.298a.614 1.15 0 0 0-.004.035l-.41 2.554a.614 1.15 0 0 0-.005.028l-.404 2.779-.54 3.037a.614 1.15 0 0 0-.013.085l-.41 3.065-.408 3.066a.614 1.15 0 0 0-.005.037l-.404 3.54-.541 3.54a.614 1.15 0 0 0-.01.075l-.408 3.577a.614 1.15 0 0 0-.003.018l-.406 3.805-.542 4.06a.614 1.15 0 0 0-.009.066l-.41 4.089a.614 1.15 0 0 0 0 .013l-.409 4.344-.406 4.316-.543 4.575a.614 1.15 0 0 0-.007.06l-.41 4.6a.614 1.15 0 0 0 0 .01l-.409 4.856-.408 4.83-.542 5.087a.614 1.15 0 0 0-.005.063l-.41 5.36-.408 5.087-.543 5.605a.614 1.15 0 0 0-.007.044l-.408 5.364a.614 1.15 0 0 0-.002.006l-.408 5.623a.614 1.15 0 0 0-.002.006l-.406 5.85-.544 5.854a.614 1.15 0 0 0-.003.047l-.41 5.876a.614 1.15 0 0 0 0 .006l-.41 6.131-.407 6.11-.543 6.11a.614 1.15 0 0 0-.005.05l-.408 6.386-.41 6.387-.407 6.369-.545 6.624a.614 1.15 0 0 0-.003.044l-.408 6.642-.408 6.621-.544 6.621a.614 1.15 0 0 0-.003.047l-.41 6.899-.41 6.898-.407 6.877-.543 6.877a.614 1.15 0 0 0-.003.047l-.41 7.151-.409 6.895a.614 1.15 0 0 0 0 .004l-.408 7.136-.544 7.133a.614 1.15 0 0 0-.002.04l-.41 7.155-.408 7.132-.544 7.133a.614 1.15 0 0 0-.002.04l-.41 7.154a.614 1.15 0 0 0 0 .004l-.41 7.407-.407 7.133-.545 7.132a.614 1.15 0 0 0-.002.047l-.41 7.407-.409 7.151a.614 1.15 0 0 0 .02.122.614 1.15 0 0 0-.02.122l.41 7.151.41 7.407a.614 1.15 0 0 0 .001.047l.545 7.132.408 7.133.41 7.407a.614 1.15 0 0 0 0 .004l.409 7.154a.614 1.15 0 0 0 .002.037l.544 7.136.408 7.133.41 7.154a.614 1.15 0 0 0 .002.04l.544 7.133.408 7.132a.614 1.15 0 0 0 0 .006l.41 6.896.41 7.151a.614 1.15 0 0 0 .002.047l.543 6.877.408 6.876.41 6.9.409 6.898a.614 1.15 0 0 0 .003.046l.544 6.621.408 6.622.408 6.642a.614 1.15 0 0 0 .003.044l.545 6.624.408 6.369.41 6.387.407 6.387a.614 1.15 0 0 0 .005.05l.543 6.11.408 6.109.41 6.131a.614 1.15 0 0 0 0 .006l.409 5.876a.614 1.15 0 0 0 .003.047l.544 5.853.406 5.851a.614 1.15 0 0 0 .002.006l.408 5.623a.614 1.15 0 0 0 .002.006l.408 5.364a.614 1.15 0 0 0 .007.044l.543 5.604.408 5.087.41 5.361a.614 1.15 0 0 0 .005.062l.542 5.087.408 4.831.41 4.856a.614 1.15 0 0 0 0 .01l.41 4.6a.614 1.15 0 0 0 .006.06l.543 4.574.406 4.317.41 4.344a.614 1.15 0 0 0 0 .013l.41 4.085a.614 1.15 0 0 0 .008.07l.542 4.06.406 3.804a.614 1.15 0 0 0 .003.016l.408 3.578a.614 1.15 0 0 0 .01.075l.54 3.54.405 3.539a.614 1.15 0 0 0 .005.037l.408 3.066.41 3.066a.614 1.15 0 0 0 .013.084l.54 3.037.404 2.78a.614 1.15 0 0 0 .005.027l.41 2.555a.614 1.15 0 0 0 .005.034l.41 2.298a.614 1.15 0 0 0 .02.103l.534 2.249.4 2.248a.614 1.15 0 0 0 .018.088l.41 1.79a.614 1.15 0 0 0 .03.115l.528 1.731.395 1.728a.614 1.15 0 0 0 .038.14l.41 1.279.41 1.276a.614 1.15 0 0 0 .046.127l.546 1.276a.614 1.15 0 0 0 .045.097l.41.767.407.764a.614 1.15 0 0 0 .095.143l.408.512a.614 1.15 0 0 0 .067.071l.546.512a.614 1.15 0 0 0 .08.062l.41.256a.614 1.15 0 0 0 .192.06h.956a.614 1.15 0 0 0 .34-.194l.341-.427.331-.206a.614 1.15 0 0 0 .24-.278l.378-.708.511-.717a.614 1.15 0 0 0 .123-.23l.408-1.024a.614 1.15 0 0 0 .035-.096l.41-1.279.4-1.254.539-1.51a.614 1.15 0 0 0 .038-.124l.41-1.531a.614 1.15 0 0 0 .024-.112l.41-2.043.398-1.987.531-1.99a.614 1.15 0 0 0 .04-.184l.408-2.554.401-2.507.536-2.508a.614 1.15 0 0 0 .025-.146l.408-3.057.408-2.797a.614 1.15 0 0 0 .005-.044l.405-3.28.539-3.281a.614 1.15 0 0 0 .013-.1l.41-3.574.41-3.577a.614 1.15 0 0 0 .001-.016l.407-3.805.54-4.064a.614 1.15 0 0 0 .01-.065l.41-4.089a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.406-4.31.542-4.313a.614 1.15 0 0 0 .007-.072l.41-4.6a.614 1.15 0 0 0 .002-.01l.408-4.856.408-4.825.542-4.824a.614 1.15 0 0 0 .005-.066l.41-5.111a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-5.368.408-5.342.542-5.598a.614 1.15 0 0 0 .007-.053l.41-5.62.408-5.598.543-5.857a.614 1.15 0 0 0 .005-.053l.41-6.131.407-6.132.408-6.113.544-6.368a.614 1.15 0 0 0 .003-.044l.41-6.387.408-6.387a.614 1.15 0 0 0 .002-.006l.408-6.62.542-6.622a.614 1.15 0 0 0 .003-.047l.41-6.898.408-6.877.544-6.88a.614 1.15 0 0 0 .002-.04l.41-6.9a.614 1.15 0 0 0 0-.003l.41-7.154.407-7.133.545-7.136a.614 1.15 0 0 0 .003-.043l.408-7.407.41-7.407.407-7.139.545-7.65a.614 1.15 0 0 0 .003-.031l.408-7.41.41-7.41a.614 1.15 0 0 0 0-.005l.407-7.644.544-7.388a.614 1.15 0 0 0 .003-.04l.41-7.666.408-7.647.544-7.644a.614 1.15 0 0 0 .002-.038l.237-4.425.316 4.444.408 7.644.41 7.666.41 7.666a.614 1.15 0 0 0 .001.037l.545 7.644.407 7.647.41 7.663a.614 1.15 0 0 0 .002.044l.544 7.388.408 7.644a.614 1.15 0 0 0 0 .004l.41 7.41.41 7.407a.614 1.15 0 0 0 .001.04l.545 7.389.408 7.391.41 7.407a.614 1.15 0 0 0 0 .006l.409 7.151a.614 1.15 0 0 0 .003.04l.543 7.136.408 7.133.41 7.154a.614 1.15 0 0 0 .002.047l.545 6.877.408 6.877.41 6.898a.614 1.15 0 0 0 0 .004l.407 6.643a.614 1.15 0 0 0 .003.044l.544 6.62.408 6.622a.614 1.15 0 0 0 0 .006l.41 6.387.41 6.387a.614 1.15 0 0 0 .002.044l.543 6.368.408 6.113a.614 1.15 0 0 0 .002.006l.408 5.875a.614 1.15 0 0 0 .003.041l.544 6.113.408 5.6.408 5.873a.614 1.15 0 0 0 .002.016l.41 5.365a.614 1.15 0 0 0 .003.043l.544 5.602.407 5.09.41 5.36a.614 1.15 0 0 0 .001.02l.41 4.855a.614 1.15 0 0 0 .003.047l.544 5.09.408 4.58.408 4.598.41 4.6a.614 1.15 0 0 0 .008.075l.543 4.316.406 4.064.41 4.085a.614 1.15 0 0 0 .01.085l.541 3.804.406 3.55.41 3.577a.614 1.15 0 0 0 .002.016l.41 3.321a.614 1.15 0 0 0 .013.078l.54 3.293.405 3.035a.614 1.15 0 0 0 .003.025l.408 2.81a.614 1.15 0 0 0 .005.028l.41 2.554a.614 1.15 0 0 0 .018.1l.538 2.523.405 2.267.408 2.302a.614 1.15 0 0 0 .033.146l.537 2.015.403 1.756a.614 1.15 0 0 0 .015.062l.41 1.532.408 1.534a.614 1.15 0 0 0 .07.203l.54 1.263.404 1.007.408 1.023a.614 1.15 0 0 0 .058.125l.408.767a.614 1.15 0 0 0 .16.215l.546.512a.614 1.15 0 0 0 .08.062l.41.256.409.256a.614 1.15 0 0 0 .193.059h.546a.614 1.15 0 0 0 .193-.06l.41-.255.41-.256a.614 1.15 0 0 0 .146-.134l.41-.512a.614 1.15 0 0 0 .026-.037l.546-.764a.614 1.15 0 0 0 .123-.23l.408-1.024.41-1.02a.614 1.15 0 0 0 .035-.1l.403-1.253.536-1.51a.614 1.15 0 0 0 .038-.124l.41-1.531a.614 1.15 0 0 0 .015-.063l.403-1.756.537-2.014a.614 1.15 0 0 0 .034-.15l.408-2.302.41-2.298a.614 1.15 0 0 0 .006-.034l.403-2.523.54-2.78a.614 1.15 0 0 0 .016-.09l.408-2.81a.614 1.15 0 0 0 .003-.024l.41-3.066a.614 1.15 0 0 0 .003-.019l.403-3.28.54-3.285a.614 1.15 0 0 0 .012-.096l.41-3.578a.614 1.15 0 0 0 .002-.018l.41-3.83.406-3.808.54-4.06a.614 1.15 0 0 0 .01-.066l.41-4.089a.614 1.15 0 0 0 .001-.012l.407-4.317.542-4.575a.614 1.15 0 0 0 .007-.072l.41-4.85.408-4.593a.614 1.15 0 0 0 .002-.016l.408-5.084.54-5.083a.614 1.15 0 0 0 .008-.062l.41-5.365.407-5.364.408-5.348.545-5.86a.614 1.15 0 0 0 .003-.041l.41-5.62a.614 1.15 0 0 0 .001-.016l.407-6.103.542-5.848a.614 1.15 0 0 0 .005-.056l.41-6.131a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-6.388.407-6.362.543-6.365a.614 1.15 0 0 0 .003-.05l.41-6.643a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-6.895.407-6.621.545-6.88a.614 1.15 0 0 0 .003-.047l.407-7.151.408-6.877.545-7.135a.614 1.15 0 0 0 .003-.047l.41-7.407.407-7.407.41-7.139.544-7.647a.614 1.15 0 0 0 .002-.034l.41-7.41a.614 1.15 0 0 0 0-.004l.41-7.666.407-7.644.545-7.647a.614 1.15 0 0 0 .003-.038l.41-7.665a.614 1.15 0 0 0 0-.004l.407-7.9.545-7.644a.614 1.15 0 0 0 .002-.04l.41-7.919.409-7.922.408-7.902.544-7.9a.614 1.15 0 0 0 .002-.037l.41-7.919.276-5.333.275 5.333.41 7.915.409 8.175a.614 1.15 0 0 0 .002.04l.544 7.903.408 7.903a.614 1.15 0 0 0 0 .004l.41 7.663a.614 1.15 0 0 0 .002.034l.544 7.9.408 7.902a.614 1.15 0 0 0 0 .004l.41 7.663.41 7.918a.614 1.15 0 0 0 .001.041l.545 7.647.408 7.647a.614 1.15 0 0 0 .002.004l.408 7.407.41 7.663a.614 1.15 0 0 0 .002.043l.543 7.389.408 7.391.41 7.407a.614 1.15 0 0 0 .002.044l.545 7.132.408 7.389a.614 1.15 0 0 0 0 .006l.41 6.898.407 7.151a.614 1.15 0 0 0 .003.044l.545 6.88.407 6.877a.614 1.15 0 0 0 0 .004l.41 6.642.41 6.643a.614 1.15 0 0 0 .002.044l.544 6.624.408 6.368a.614 1.15 0 0 0 0 .004l.41 6.135a.614 1.15 0 0 0 .003.037l.544 6.372.408 5.857.408 6.128a.614 1.15 0 0 0 .002.006l.408 5.876a.614 1.15 0 0 0 .005.056l.544 5.595.406 5.598a.614 1.15 0 0 0 .002.006l.408 5.364a.614 1.15 0 0 0 .002.01l.408 5.109a.614 1.15 0 0 0 .005.044l.543 5.348.408 4.837.41 4.853a.614 1.15 0 0 0 .004.06l.545 4.833.408 4.326.408 4.344.41 4.342a.614 1.15 0 0 0 .008.08l.543 4.061.406 3.805.41 3.833a.614 1.15 0 0 0 .002.019l.41 3.577a.614 1.15 0 0 0 .013.097l.539 3.28.403 3.281a.614 1.15 0 0 0 .003.022l.41 3.066a.614 1.15 0 0 0 .002.022l.408 2.81a.614 1.15 0 0 0 .017.09l.54 2.782.402 2.523a.614 1.15 0 0 0 .007.031l.41 2.302a.614 1.15 0 0 0 .033.15l.531 1.99.398 1.986a.614 1.15 0 0 0 .01.05l.41 1.787.408 1.79a.614 1.15 0 0 0 .085.265l.52 1.216.389 1.21a.614 1.15 0 0 0 .035.1l.408 1.023.41 1.02a.614 1.15 0 0 0 .216.34l.51.477.379.474.41.508a.614 1.15 0 0 0 .339.193h.956a.614 1.15 0 0 0 .193-.059l.41-.256a.614 1.15 0 0 0 .146-.134l.378-.47.51-.478a.614 1.15 0 0 0 .16-.215l.408-.767a.614 1.15 0 0 0 .059-.125l.408-1.023a.614 1.15 0 0 0 .038-.1l.388-1.21.52-1.216a.614 1.15 0 0 0 .068-.206l.407-1.531a.614 1.15 0 0 0 .017-.063l.401-1.755.538-2.015a.614 1.15 0 0 0 .025-.11l.41-2.045a.614 1.15 0 0 0 .01-.04l.408-2.3a.614 1.15 0 0 0 .007-.034l.4-2.504.535-2.507a.614 1.15 0 0 0 .024-.125l.41-2.81a.614 1.15 0 0 0 .002-.025l.408-3.066a.614 1.15 0 0 0 .003-.018l.405-3.281.537-3.284a.614 1.15 0 0 0 .015-.097l.408-3.577.406-3.55.542-3.804a.614 1.15 0 0 0 .011-.084l.408-4.086.41-4.088a.614 1.15 0 0 0 .002-.013l.406-4.32.543-4.571a.614 1.15 0 0 0 .007-.063l.41-4.597a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-4.856a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-5.08.543-5.084a.614 1.15 0 0 0 .005-.053l.41-5.111a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-5.367a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-5.595.542-5.595a.614 1.15 0 0 0 .005-.06l.408-5.875.408-5.854.545-6.113a.614 1.15 0 0 0 .003-.047l.41-6.131a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-6.387.408-6.369.544-6.624a.614 1.15 0 0 0 .003-.04l.408-6.643.41-6.643a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.407-6.877.545-6.877a.614 1.15 0 0 0 .003-.046l.41-7.155.407-7.132.543-7.133a.614 1.15 0 0 0 .003-.047l.41-7.406.41-7.41.407-7.389.545-7.391a.614 1.15 0 0 0 .002-.04l.41-7.667.409-7.665.408-7.647.544-7.903a.614 1.15 0 0 0 .002-.035l.41-7.662a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-7.9.544-7.903a.614 1.15 0 0 0 .003-.037l.408-7.919.41-7.921a.614 1.15 0 0 0 0-.004l.407-8.155.545-7.9a.614 1.15 0 0 0 .002-.037l.41-7.919a.614 1.15 0 0 0 0-.004l.409-8.174.275-5.333.276 5.333a.614 1.15 0 0 0 .002.034l.544 8.159.41 7.903.408 8.174a.614 1.15 0 0 0 0 .004l.41 7.918a.614 1.15 0 0 0 .001.037l.545 7.903.41 7.9.407 7.922.41 7.918a.614 1.15 0 0 0 .002.037l.544 7.903.41 7.65.408 7.663.41 7.666a.614 1.15 0 0 0 .004.037l.543 7.647.41 7.644a.614 1.15 0 0 0 0 .004l.408 7.41a.614 1.15 0 0 0 .003.038l.544 7.39.408 7.39a.614 1.15 0 0 0 0 .005l.41 7.154.41 7.152a.614 1.15 0 0 0 .001.04l.545 7.136.407 6.88.41 6.898.41 6.899a.614 1.15 0 0 0 .003.047l.542 6.624.408 6.365.41 6.64a.614 1.15 0 0 0 .005.06l.543 6.103.407 6.362a.614 1.15 0 0 0 0 .006l.41 6.131a.614 1.15 0 0 0 0 .006l.41 5.876a.614 1.15 0 0 0 .003.05l.544 5.853.406 5.602.41 5.62a.614 1.15 0 0 0 0 .006l.41 5.367a.614 1.15 0 0 0 .004.05l.543 5.345.408 5.087.41 5.108a.614 1.15 0 0 0 .007.066l.542 4.83.407 4.576.41 4.6a.614 1.15 0 0 0 .001.01l.408 4.344a.614 1.15 0 0 0 .007.063l.543 4.32.406 4.06a.614 1.15 0 0 0 .002.013l.41 3.832.41 3.833a.614 1.15 0 0 0 .01.09l.542 3.55.406 3.29.408 3.322a.614 1.15 0 0 0 .017.106l.54 3.034.404 2.782a.614 1.15 0 0 0 .005.028l.41 2.554.407 2.555a.614 1.15 0 0 0 .029.137l.533 2.248.4 2.246a.614 1.15 0 0 0 .008.04l.408 2.043a.614 1.15 0 0 0 .012.05l.41 1.79a.614 1.15 0 0 0 .053.184l.536 1.51.403 1.253.408 1.279a.614 1.15 0 0 0 .036.097l.408 1.022a.614 1.15 0 0 0 .058.125l.545 1.02a.614 1.15 0 0 0 .095.143l.408.512.41.511a.614 1.15 0 0 0 .19.16l.523.243.387.243a.614 1.15 0 0 0 .39 0l.407-.256.41-.256a.614 1.15 0 0 0 .08-.062l.546-.511a.614 1.15 0 0 0 .06-.072l.407-.512a.614 1.15 0 0 0 .152-.265l.41-1.023.382-.957.515-.964a.614 1.15 0 0 0 .115-.3l.41-1.53.4-1.507.537-1.759a.614 1.15 0 0 0 .043-.168l.408-2.043.41-2.043a.614 1.15 0 0 0 .008-.04l.403-2.267.54-2.524a.614 1.15 0 0 0 .021-.124l.41-2.81.408-2.81a.614 1.15 0 0 0 .003-.025l.406-3.035.541-3.293a.614 1.15 0 0 0 .01-.081l.41-3.322a.614 1.15 0 0 0 .002-.016l.406-3.54.54-3.54a.614 1.15 0 0 0 .013-.102l.41-4.088.407-4.09.408-4.06.541-4.32a.614 1.15 0 0 0 .01-.07l.409-4.6a.614 1.15 0 0 0 0-.005.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-4.856.405-4.824.543-4.825a.614 1.15 0 0 0 .007-.065l.41-5.112a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-5.34.542-5.338a.614 1.15 0 0 0 .005-.06l.41-5.62.408-5.623a.614 1.15 0 0 0 .002-.006l.408-5.854.543-6.112a.614 1.15 0 0 0 .003-.047l.41-6.131.409-6.132a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-6.365.544-6.365a.614 1.15 0 0 0 .003-.05l.408-6.643.41-6.64.407-6.624.545-6.88a.614 1.15 0 0 0 .003-.047l.41-7.15.407-6.88.545-7.136a.614 1.15 0 0 0 .002-.044l.41-7.41.409-7.407.408-7.391.544-7.389a.614 1.15 0 0 0 .002-.04l.41-7.407a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-7.663.407-7.647.545-7.644a.614 1.15 0 0 0 .003-.043l.408-7.919.408-7.9.544-7.644a.614 1.15 0 0 0 .003-.04l.408-7.922a.614 1.15 0 0 0 .002-.004l.408-8.174.408-7.9.544-7.902a.614 1.15 0 0 0 .005-.038l.408-8.174.41-7.918a.614 1.15 0 0 0 0-.004l.408-8.156.344-5.008.345 5.008.41 8.156a.614 1.15 0 0 0 0 .004l.407 7.918.41 8.174a.614 1.15 0 0 0 .003.038l.544 7.902.408 7.9.408 8.174a.614 1.15 0 0 0 0 .004l.41 7.922a.614 1.15 0 0 0 .003.04l.544 7.644.408 7.9.408 7.919a.614 1.15 0 0 0 .003.043l.544 7.644.408 7.647.41 7.663a.614 1.15 0 0 0 0 .006l.41 7.407a.614 1.15 0 0 0 .001.04l.545 7.389.408 7.391.41 7.407.409 7.41a.614 1.15 0 0 0 .002.044l.544 7.135.408 6.88.41 7.151a.614 1.15 0 0 0 .003.047l.544 6.88.408 6.624.408 6.64.41 6.643a.614 1.15 0 0 0 .003.05l.544 6.365.408 6.365a.614 1.15 0 0 0 0 .006l.41 6.132.409 6.131a.614 1.15 0 0 0 .003.047l.543 6.112.408 5.854a.614 1.15 0 0 0 .002.006l.408 5.623.41 5.62a.614 1.15 0 0 0 .004.06l.543 5.339.408 5.339a.614 1.15 0 0 0 0 .006l.41 5.112a.614 1.15 0 0 0 .006.065l.543 4.825.406 4.824.41 4.856a.614 1.15 0 0 0 0 .01l.41 4.6a.614 1.15 0 0 0 .009.072l.54 4.32.409 4.06.407 4.089.41 4.088a.614 1.15 0 0 0 .013.103l.54 3.54.404 3.54a.614 1.15 0 0 0 .003.016l.408 3.321a.614 1.15 0 0 0 .012.081l.541 3.293.405 3.035a.614 1.15 0 0 0 .003.025l.41 2.81.409 2.81a.614 1.15 0 0 0 .021.125l.54 2.523.403 2.267a.614 1.15 0 0 0 .009.04l.41 2.043.407 2.043a.614 1.15 0 0 0 .043.169l.537 1.758.4 1.507.41 1.531a.614 1.15 0 0 0 .115.3l.515.963.383.958.41 1.023a.614 1.15 0 0 0 .15.265l.409.511a.614 1.15 0 0 0 .066.072l.546.511a.614 1.15 0 0 0 .08.063l.41.255.408.256a.614 1.15 0 0 0 .39 0l.385-.243.523-.243a.614 1.15 0 0 0 .192-.16l.41-.511.407-.511a.614 1.15 0 0 0 .095-.144l.544-1.02a.614 1.15 0 0 0 .059-.124l.408-1.023a.614 1.15 0 0 0 .034-.097l.41-1.279.401-1.253.538-1.51a.614 1.15 0 0 0 .053-.184l.41-1.79a.614 1.15 0 0 0 .01-.05l.41-2.042a.614 1.15 0 0 0 .01-.041l.4-2.246.532-2.248a.614 1.15 0 0 0 .028-.137l.408-2.555.41-2.554a.614 1.15 0 0 0 .005-.028l.404-2.782.54-3.034a.614 1.15 0 0 0 .016-.106l.408-3.322.407-3.29.54-3.55a.614 1.15 0 0 0 .012-.09l.41-3.832.41-3.833a.614 1.15 0 0 0 .002-.013l.406-4.06.54-4.32a.614 1.15 0 0 0 .01-.062l.408-4.345a.614 1.15 0 0 0 .002-.01l.41-4.6.406-4.575.542-4.831a.614 1.15 0 0 0 .007-.065l.41-5.109.408-5.087.543-5.345a.614 1.15 0 0 0 .005-.05l.407-5.367a.614 1.15 0 0 0 .002-.006l.41-5.62.406-5.601.545-5.854a.614 1.15 0 0 0 .003-.05l.41-5.876a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-6.131a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-6.362.542-6.103a.614 1.15 0 0 0 .005-.06l.41-6.64.408-6.365.543-6.624a.614 1.15 0 0 0 .003-.047l.41-6.898.409-6.899.408-6.88.544-7.135a.614 1.15 0 0 0 .002-.041l.41-7.151.41-7.155a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.407-7.388.545-7.391a.614 1.15 0 0 0 .003-.038l.408-7.41a.614 1.15 0 0 0 0-.004l.41-7.644.542-7.647a.614 1.15 0 0 0 .003-.037l.41-7.666.407-7.662.41-7.65.544-7.904a.614 1.15 0 0 0 .002-.037l.41-7.918.408-7.922.41-7.9.544-7.902a.614 1.15 0 0 0 .002-.038l.41-7.918a.614 1.15 0 0 0 0-.004l.407-8.174.41-7.903.544-8.159a.614 1.15 0 0 0 .002-.034l.277-5.333.274 5.333.41 8.174a.614 1.15 0 0 0 0 .004l.408 7.919a.614 1.15 0 0 0 .003.037l.544 7.9.408 8.155a.614 1.15 0 0 0 0 .004l.41 7.922.408 7.918a.614 1.15 0 0 0 .003.037l.544 7.903.408 7.9a.614 1.15 0 0 0 0 .006l.41 7.663a.614 1.15 0 0 0 .002.034l.544 7.903.408 7.647.41 7.666.409 7.665a.614 1.15 0 0 0 .002.041l.544 7.391.408 7.389.41 7.41.41 7.407a.614 1.15 0 0 0 .002.047l.543 7.132.408 7.133.41 7.154a.614 1.15 0 0 0 .005.047l.544 6.876.408 6.877a.614 1.15 0 0 0 0 .006l.41 6.643.408 6.643a.614 1.15 0 0 0 .003.04l.544 6.625.408 6.368.41 6.387a.614 1.15 0 0 0 0 .004.614 1.15 0 0 0 0 .004l.409 6.132a.614 1.15 0 0 0 .003.046l.544 6.113.407 5.854.41 5.876a.614 1.15 0 0 0 .004.059l.543 5.595.408 5.595a.614 1.15 0 0 0 0 .006l.41 5.367a.614 1.15 0 0 0 0 .006l.41 5.112a.614 1.15 0 0 0 .004.053l.543 5.083.408 5.08a.614 1.15 0 0 0 0 .01l.41 4.857a.614 1.15 0 0 0 0 .01l.409 4.597a.614 1.15 0 0 0 .007.062l.543 4.572.406 4.32a.614 1.15 0 0 0 .002.012l.41 4.089.407 4.085a.614 1.15 0 0 0 .01.084l.543 3.805.406 3.55.408 3.577a.614 1.15 0 0 0 .015.096l.538 3.284.405 3.281a.614 1.15 0 0 0 .003.019l.408 3.065a.614 1.15 0 0 0 .003.025l.41 2.81a.614 1.15 0 0 0 .022.125l.535 2.507.401 2.505a.614 1.15 0 0 0 .007.034l.408 2.299a.614 1.15 0 0 0 .009.04l.41 2.046a.614 1.15 0 0 0 .024.11l.538 2.014.401 1.756a.614 1.15 0 0 0 .017.062l.408 1.531a.614 1.15 0 0 0 .07.206l.52 1.217.387 1.21a.614 1.15 0 0 0 .037.1l.408 1.022a.614 1.15 0 0 0 .058.122l.408.767a.614 1.15 0 0 0 .16.216l.511.477.378.47a.614 1.15 0 0 0 .147.135l.41.255a.614 1.15 0 0 0 .192.06h.956a.614 1.15 0 0 0 .34-.194l.41-.508.377-.474.511-.477a.614 1.15 0 0 0 .217-.34l.408-1.02.41-1.023a.614 1.15 0 0 0 .034-.1l.388-1.21.521-1.216a.614 1.15 0 0 0 .085-.265l.408-1.79.41-1.787a.614 1.15 0 0 0 .01-.05l.397-1.987.532-1.99a.614 1.15 0 0 0 .033-.149l.41-2.302a.614 1.15 0 0 0 .006-.03l.403-2.524.54-2.782a.614 1.15 0 0 0 .016-.09l.408-2.81a.614 1.15 0 0 0 .003-.022l.41-3.066a.614 1.15 0 0 0 .003-.021l.403-3.281.54-3.281a.614 1.15 0 0 0 .012-.097l.41-3.577a.614 1.15 0 0 0 .002-.016l.41-3.833.406-3.805.54-4.06a.614 1.15 0 0 0 .01-.082l.41-4.34.408-4.345.408-4.326.545-4.834a.614 1.15 0 0 0 .005-.06l.41-4.852.407-4.837.543-5.349a.614 1.15 0 0 0 .007-.043l.408-5.109a.614 1.15 0 0 0 .002-.01l.408-5.364a.614 1.15 0 0 0 .002-.006l.406-5.598.544-5.595a.614 1.15 0 0 0 .005-.056l.408-5.876a.614 1.15 0 0 0 .002-.006l.408-6.128.408-5.857.544-6.372a.614 1.15 0 0 0 .003-.037l.408-6.135a.614 1.15 0 0 0 .002-.004l.408-6.368.543-6.624a.614 1.15 0 0 0 .003-.044l.41-6.643.41-6.642a.614 1.15 0 0 0 0-.004l.407-6.877.544-6.88a.614 1.15 0 0 0 .003-.044l.408-7.15.41-6.9a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-7.388.544-7.132a.614 1.15 0 0 0 .003-.044l.408-7.407.41-7.391.542-7.389a.614 1.15 0 0 0 .003-.043l.41-7.663.408-7.407a.614 1.15 0 0 0 .002-.004l.408-7.647.544-7.647a.614 1.15 0 0 0 .002-.04l.41-7.919.41-7.663a.614 1.15 0 0 0 0-.004l.407-7.903.545-7.9a.614 1.15 0 0 0 .002-.034l.41-7.662a.614 1.15 0 0 0 0-.004l.407-7.903.545-7.903a.614 1.15 0 0 0 .002-.04l.41-8.175.409-7.915.274-5.333.277 5.333.41 7.919a.614 1.15 0 0 0 .001.037l.545 7.9.408 7.902.41 7.922.409 7.918a.614 1.15 0 0 0 .002.04l.544 7.645.408 7.9a.614 1.15 0 0 0 0 .004l.41 7.665a.614 1.15 0 0 0 .002.038l.544 7.647.408 7.644.41 7.666a.614 1.15 0 0 0 0 .004l.41 7.41a.614 1.15 0 0 0 .001.034l.545 7.647.41 7.139.407 7.407.41 7.407a.614 1.15 0 0 0 .003.046l.544 7.136.408 6.877.408 7.151a.614 1.15 0 0 0 .003.047l.544 6.88.408 6.62.41 6.896a.614 1.15 0 0 0 0 .006l.41 6.643a.614 1.15 0 0 0 .002.05l.543 6.365.408 6.362.41 6.388a.614 1.15 0 0 0 0 .006l.41 6.13a.614 1.15 0 0 0 .004.057l.543 5.848.406 6.103a.614 1.15 0 0 0 .002.016l.41 5.62a.614 1.15 0 0 0 .003.04l.544 5.86.408 5.35.408 5.363.41 5.364a.614 1.15 0 0 0 .005.063l.542 5.083.408 5.084a.614 1.15 0 0 0 .002.016l.408 4.594.41 4.85a.614 1.15 0 0 0 .009.07l.542 4.576.407 4.316a.614 1.15 0 0 0 .002.013l.41 4.089a.614 1.15 0 0 0 .006.065l.543 4.06.406 3.809.41 3.83a.614 1.15 0 0 0 .002.015l.41 3.578a.614 1.15 0 0 0 .013.096l.539 3.284.403 3.281a.614 1.15 0 0 0 .003.019l.41 3.066a.614 1.15 0 0 0 .003.025l.407 2.81a.614 1.15 0 0 0 .017.09l.54 2.779.402 2.523a.614 1.15 0 0 0 .007.034l.41 2.299.408 2.301a.614 1.15 0 0 0 .033.15l.538 2.014.403 1.756a.614 1.15 0 0 0 .015.063l.408 1.531a.614 1.15 0 0 0 .038.125l.538 1.51.403 1.253a.614 1.15 0 0 0 .034.1l.408 1.02.41 1.022a.614 1.15 0 0 0 .123.231l.546.764a.614 1.15 0 0 0 .027.038l.41.511a.614 1.15 0 0 0 .146.134l.41.256.41.256a.614 1.15 0 0 0 .192.059h.546a.614 1.15 0 0 0 .193-.06l.41-.255.41-.256a.614 1.15 0 0 0 .08-.062l.546-.512a.614 1.15 0 0 0 .16-.215l.407-.767a.614 1.15 0 0 0 .059-.122l.408-1.023.404-1.007.54-1.263a.614 1.15 0 0 0 .07-.203l.407-1.534.41-1.532a.614 1.15 0 0 0 .015-.062l.403-1.756.538-2.014a.614 1.15 0 0 0 .033-.15l.408-2.302.404-2.267.538-2.523a.614 1.15 0 0 0 .018-.097l.41-2.554a.614 1.15 0 0 0 .005-.028l.408-2.81a.614 1.15 0 0 0 .003-.025l.406-3.035.54-3.293a.614 1.15 0 0 0 .011-.078l.41-3.321a.614 1.15 0 0 0 .002-.019l.41-3.577.406-3.55.54-3.804a.614 1.15 0 0 0 .01-.084l.41-4.086.407-4.063.542-4.317a.614 1.15 0 0 0 .01-.075l.409-4.6.408-4.597.408-4.581.544-5.09a.614 1.15 0 0 0 .003-.047l.41-4.855a.614 1.15 0 0 0 .002-.016l.407-5.361.408-5.09.545-5.601a.614 1.15 0 0 0 .003-.044l.41-5.364a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.01l.409-5.873.408-5.601.544-6.113a.614 1.15 0 0 0 .003-.04l.408-5.876a.614 1.15 0 0 0 .002-.006l.408-6.113.543-6.368a.614 1.15 0 0 0 .003-.044l.41-6.387.409-6.387a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-6.621.544-6.621a.614 1.15 0 0 0 .002-.044l.41-6.643a.614 1.15 0 0 0 0-.004l.41-6.898.407-6.877.545-6.877a.614 1.15 0 0 0 .003-.047l.41-7.154.407-7.132.543-7.136a.614 1.15 0 0 0 .003-.04l.41-7.152a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-7.407.407-7.391.544-7.388a.614 1.15 0 0 0 .003-.041l.41-7.407.41-7.41a.614 1.15 0 0 0 0-.004l.408-7.644.544-7.388a.614 1.15 0 0 0 .002-.044l.41-7.663.407-7.647.545-7.644a.614 1.15 0 0 0 .002-.037l.41-7.666.409-7.666.408-7.644.316-4.444.237 4.426a.614 1.15 0 0 0 .002.037l.544 7.644.408 7.647.41 7.666a.614 1.15 0 0 0 .003.04l.544 7.389.408 7.644a.614 1.15 0 0 0 0 .004l.41 7.41.407 7.41a.614 1.15 0 0 0 .003.03l.545 7.651.408 7.139.408 7.407.41 7.407a.614 1.15 0 0 0 .002.044l.545 7.135.408 7.133.41 7.154a.614 1.15 0 0 0 0 .004l.407 6.899a.614 1.15 0 0 0 .003.04l.544 6.88.408 6.877.41 6.899a.614 1.15 0 0 0 .003.046l.543 6.621.408 6.621a.614 1.15 0 0 0 .002.006l.407 6.388.41 6.387a.614 1.15 0 0 0 .003.043l.544 6.369.408 6.112.408 6.132.41 6.131a.614 1.15 0 0 0 .005.053l.543 5.857.407 5.598.41 5.62a.614 1.15 0 0 0 .005.053l.543 5.598.408 5.343.408 5.367a.614 1.15 0 0 0 .002.006l.41 5.111a.614 1.15 0 0 0 .004.066l.543 4.825.406 4.824.41 4.856a.614 1.15 0 0 0 .002.01l.408 4.6a.614 1.15 0 0 0 .008.072l.543 4.313.406 4.31a.614 1.15 0 0 0 0 .013l.41 4.088a.614 1.15 0 0 0 .009.066l.541 4.064.406 3.804a.614 1.15 0 0 0 .002.016l.41 3.578.41 3.574a.614 1.15 0 0 0 .013.1l.54 3.28.404 3.281a.614 1.15 0 0 0 .005.044l.408 2.797.408 3.057a.614 1.15 0 0 0 .024.146l.537 2.508.4 2.507.409 2.554a.614 1.15 0 0 0 .041.184l.531 1.99.398 1.987.408 2.042a.614 1.15 0 0 0 .025.113l.41 1.531a.614 1.15 0 0 0 .038.125l.536 1.51.403 1.253.408 1.279a.614 1.15 0 0 0 .037.096l.408 1.023a.614 1.15 0 0 0 .123.23l.51.718.379.708a.614 1.15 0 0 0 .24.278l.33.206.342.427a.614 1.15 0 0 0 .34.193h.946a.614 1.15 0 0 0 .193-.06l.41-.255a.614 1.15 0 0 0 .079-.062l.546-.512a.614 1.15 0 0 0 .067-.072l.408-.511a.614 1.15 0 0 0 .094-.143l.408-.764.41-.768a.614 1.15 0 0 0 .045-.096l.546-1.276a.614 1.15 0 0 0 .046-.128l.41-1.275.41-1.28a.614 1.15 0 0 0 .038-.14l.394-1.727.528-1.731a.614 1.15 0 0 0 .032-.115l.41-1.79a.614 1.15 0 0 0 .018-.088l.4-2.249.532-2.248a.614 1.15 0 0 0 .022-.103l.41-2.299a.614 1.15 0 0 0 .004-.034l.41-2.554a.614 1.15 0 0 0 .003-.028l.406-2.779.54-3.038a.614 1.15 0 0 0 .013-.084l.41-3.065.407-3.066a.614 1.15 0 0 0 .005-.037l.405-3.54.541-3.54a.614 1.15 0 0 0 .01-.075l.408-3.577a.614 1.15 0 0 0 .002-.016l.408-3.805.54-4.06a.614 1.15 0 0 0 .01-.069l.41-4.085a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-4.345.406-4.316.543-4.575a.614 1.15 0 0 0 .007-.06l.41-4.6a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-4.856.408-4.83.543-5.087a.614 1.15 0 0 0 .005-.062l.41-5.362.407-5.086.543-5.604a.614 1.15 0 0 0 .003-.044l.41-5.364a.614 1.15 0 0 0 .001-.006l.408-5.623a.614 1.15 0 0 0 .002-.006l.407-5.851.544-5.854a.614 1.15 0 0 0 .003-.047l.41-5.875a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-6.132.407-6.11.543-6.109a.614 1.15 0 0 0 .003-.05l.41-6.387.409-6.387.408-6.368.544-6.625a.614 1.15 0 0 0 .003-.043l.408-6.643.408-6.621.545-6.621a.614 1.15 0 0 0 .003-.047l.41-6.899.409-6.898.408-6.877.542-6.877a.614 1.15 0 0 0 .003-.046l.41-7.152.41-6.895a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.407-7.133.543-7.132a.614 1.15 0 0 0 .005-.04l.41-7.155.408-7.133.544-7.135a.614 1.15 0 0 0 .002-.038l.406-7.154a.614 1.15 0 0 0 0-.004l.41-7.407.407-7.132.545-7.133a.614 1.15 0 0 0 .002-.047l.41-7.407.409-7.15a.614 1.15 0 0 0-.007-.122.614 1.15 0 0 0 .007-.122l-.41-7.151-.41-7.407a.614 1.15 0 0 0-.001-.047l-.545-7.133-.408-7.132-.41-7.407a.614 1.15 0 0 0 0-.004l-.409-7.154a.614 1.15 0 0 0-.002-.041l-.544-7.133-.408-7.132-.41-7.154a.614 1.15 0 0 0-.005-.041l-.542-7.132-.408-7.136a.614 1.15 0 0 0 0-.004l-.41-6.896-.41-7.15a.614 1.15 0 0 0-.003-.048l-.542-6.876-.408-6.877-.41-6.899-.41-6.898a.614 1.15 0 0 0-.002-.047l-.545-6.621-.408-6.621-.408-6.643a.614 1.15 0 0 0-.003-.044l-.544-6.624-.408-6.368-.41-6.388-.41-6.387a.614 1.15 0 0 0-.002-.05l-.543-6.109-.408-6.11-.41-6.131a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.409-5.876a.614 1.15 0 0 0-.003-.046l-.544-5.854-.407-5.851a.614 1.15 0 0 0-.002-.006l-.407-5.623a.614 1.15 0 0 0-.002-.006l-.41-5.364a.614 1.15 0 0 0-.003-.044l-.543-5.604-.408-5.087-.41-5.36a.614 1.15 0 0 0-.004-.063l-.543-5.087-.408-4.83-.41-4.857a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-4.6a.614 1.15 0 0 0-.006-.059l-.543-4.575-.406-4.316-.41-4.345a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-4.088a.614 1.15 0 0 0-.008-.066l-.541-4.06-.408-3.805a.614 1.15 0 0 0-.002-.016l-.408-3.577a.614 1.15 0 0 0-.01-.075l-.541-3.54-.405-3.54a.614 1.15 0 0 0-.005-.037l-.407-3.066-.41-3.066a.614 1.15 0 0 0-.013-.084l-.54-3.037-.406-2.78a.614 1.15 0 0 0-.003-.027l-.41-2.554a.614 1.15 0 0 0-.004-.035l-.41-2.298a.614 1.15 0 0 0-.022-.103l-.528-2.197-.4-2.249a.614 1.15 0 0 0-.018-.087l-.41-1.79a.614 1.15 0 0 0-.031-.116l-.528-1.734-.395-1.727a.614 1.15 0 0 0-.038-.138l-.41-1.25-.41-1.275a.614 1.15 0 0 0-.046-.128l-.546-1.276a.614 1.15 0 0 0-.045-.097l-.41-.767-.407-.764a.614 1.15 0 0 0-.095-.143l-.408-.509a.614 1.15 0 0 0-.067-.071l-.546-.512a.614 1.15 0 0 0-.08-.062l-.41-.256a.614 1.15 0 0 0-.192-.06h-.959a.614 1.15 0 0 0-.34.194l-.34.424-.332.209a.614 1.15 0 0 0-.24.278l-.378.708-.51.717a.614 1.15 0 0 0-.124.23l-.408 1.02a.614 1.15 0 0 0-.037.1L5.9 87.545l-.403 1.254-.536 1.509a.614 1.15 0 0 0-.039.125l-.41 1.531a.614 1.15 0 0 0-.026.11l-.408 2.045-.398 1.987-.53 1.99a.614 1.15 0 0 0-.04.184l-.409 2.554-.4 2.507-.537 2.508a.614 1.15 0 0 0-.025.146l-.408 3.053-.408 2.801a.614 1.15 0 0 0-.005.044l-.404 3.28-.54 3.282a.614 1.15 0 0 0-.013.096l-.41 3.577-.41 3.578a.614 1.15 0 0 0-.001.016l-.406 3.804-.542 4.064a.614 1.15 0 0 0-.01.066l-.409 4.088a.614 1.15 0 0 0 0 .013l-.406 4.31-.543 4.313a.614 1.15 0 0 0-.009.072l-.408 4.6a.614 1.15 0 0 0-.002.01l-.41 4.856-.406 4.824-.542 4.825a.614 1.15 0 0 0-.005.065l-.41 5.112a.614 1.15 0 0 0-.002.006l-.408 5.367-.408 5.343-.543 5.598a.614 1.15 0 0 0-.005.05l-.41 5.623-.407 5.598-.543 5.857a.614 1.15 0 0 0-.005.053l-.41 6.131-.407 6.132-.408 6.112-.545 6.369a.614 1.15 0 0 0-.003.043l-.41 6.387-.407 6.388a.614 1.15 0 0 0-.002.006l-.408 6.62-.543 6.622a.614 1.15 0 0 0-.002.046l-.41 6.899-.407 6.877-.545 6.877a.614 1.15 0 0 0-.003.043l-.407 6.899a.614 1.15 0 0 0 0 .004l-.41 7.154-.408 7.133-.544 7.132a.614 1.15 0 0 0-.003.047l-.41 7.407-.408 7.407-.408 7.139-.544 7.65a.614 1.15 0 0 0-.003.031l-.408 7.41-.41 7.41a.614 1.15 0 0 0 0 .004l-.408 7.644-.544 7.388a.614 1.15 0 0 0-.003.041l-.411 7.666-.406 7.644-.545 7.647a.614 1.15 0 0 0-.003.037l-.236 4.426-.317-4.445-.408-7.647-.41-7.662-.409-7.666a.614 1.15 0 0 0-.002-.037l-.544-7.644-.408-7.647-.41-7.666a.614 1.15 0 0 0-.002-.04l-.544-7.39-.408-7.643a.614 1.15 0 0 0 0-.004l-.41-7.41-.409-7.407a.614 1.15 0 0 0-.002-.04l-.544-7.389-.408-7.391-.41-7.407a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-7.155a.614 1.15 0 0 0-.002-.037l-.543-7.135-.408-7.133-.41-7.154a.614 1.15 0 0 0-.003-.047l-.544-6.877-.408-6.877-.41-6.898a.614 1.15 0 0 0 0-.004l-.41-6.643a.614 1.15 0 0 0-.001-.044l-.545-6.62-.408-6.622a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.387-.409-6.387a.614 1.15 0 0 0-.003-.044l-.542-6.368-.408-6.113a.614 1.15 0 0 0-.002-.006l-.408-5.876a.614 1.15 0 0 0-.003-.04l-.545-6.113-.408-5.601-.41-5.873a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.01.614 1.15 0 0 0 0-.004l-.409-5.364a.614 1.15 0 0 0-.003-.044l-.544-5.6-.408-5.09-.408-5.362a.614 1.15 0 0 0-.002-.016l-.41-4.856a.614 1.15 0 0 0-.003-.046l-.544-5.09-.408-4.582-.408-4.596-.41-4.6a.614 1.15 0 0 0-.008-.075l-.543-4.317-.406-4.063-.41-4.086a.614 1.15 0 0 0-.01-.084l-.54-3.805-.407-3.549-.41-3.577a.614 1.15 0 0 0-.002-.019l-.41-3.321a.614 1.15 0 0 0-.01-.078l-.54-3.294-.407-3.034a.614 1.15 0 0 0-.003-.025l-.407-2.81a.614 1.15 0 0 0-.005-.028l-.41-2.554a.614 1.15 0 0 0-.018-.097l-.538-2.523-.405-2.267-.408-2.302a.614 1.15 0 0 0-.033-.15l-.538-2.014-.403-1.756a.614 1.15 0 0 0-.015-.063l-.41-1.53-.407-1.535a.614 1.15 0 0 0-.07-.203l-.54-1.263-.404-1.007-.408-1.023a.614 1.15 0 0 0-.058-.125l-.408-.764a.614 1.15 0 0 0-.16-.215l-.546-.512a.614 1.15 0 0 0-.08-.062l-.41-.256-.409-.256a.614 1.15 0 0 0-.193-.059h-.546a.614 1.15 0 0 0-.193.06l-.41.255-.41.256a.614 1.15 0 0 0-.146.134l-.41.511a.614 1.15 0 0 0-.026.035l-.546.767a.614 1.15 0 0 0-.123.23l-.41 1.024-.408 1.02a.614 1.15 0 0 0-.035.1l-.403 1.253-.536 1.51a.614 1.15 0 0 0-.038.124l-.408 1.531a.614 1.15 0 0 0-.015.063l-.403 1.756-.538 2.014a.614 1.15 0 0 0-.033.15l-.408 2.302-.41 2.298a.614 1.15 0 0 0-.006.034l-.403 2.523-.54 2.78a.614 1.15 0 0 0-.016.09l-.408 2.81a.614 1.15 0 0 0-.003.025l-.41 3.065a.614 1.15 0 0 0-.005.019l-.403 3.28-.54 3.282a.614 1.15 0 0 0-.011.1l-.41 3.577a.614 1.15 0 0 0-.003.012l-.41 3.833-.405 3.805-.543 4.064a.614 1.15 0 0 0-.007.065l-.41 4.089a.614 1.15 0 0 0-.002.013l-.406 4.316-.543 4.575a.614 1.15 0 0 0-.007.072l-.41 4.846-.407 4.594a.614 1.15 0 0 0-.002.019l-.408 5.083-.543 5.084a.614 1.15 0 0 0-.005.062l-.41 5.364-.407 5.365-.408 5.348-.544 5.86a.614 1.15 0 0 0-.003.04l-.41 5.62a.614 1.15 0 0 0-.002.014l-.406 6.106-.543 5.848a.614 1.15 0 0 0-.005.056l-.41 6.131a.614 1.15 0 0 0 0 .006l-.41 6.387-.407 6.363-.543 6.365a.614 1.15 0 0 0-.003.05l-.41 6.643a.614 1.15 0 0 0 0 .006l-.409 6.895-.408 6.621-.544 6.88a.614 1.15 0 0 0-.003.047l-.408 7.151-.408 6.877-.545 7.135a.614 1.15 0 0 0-.003.044l-.41 7.41-.407 7.407-.41 7.139-.544 7.647a.614 1.15 0 0 0-.002.034l-.41 7.41a.614 1.15 0 0 0 0 .004l-.41 7.666-.407 7.644-.545 7.647a.614 1.15 0 0 0-.002.038l-.41 7.665a.614 1.15 0 0 0 0 .004l-.407 7.9-.544 7.644a.614 1.15 0 0 0-.002.04l-.41 7.92-.41 7.92-.407 7.903-.545 7.9a.614 1.15 0 0 0-.002.037l-.41 7.919-.276 5.333-.275-5.333-.41-7.919-.409-8.17a.614 1.15 0 0 0-.002-.041l-.544-7.903-.408-7.903a.614 1.15 0 0 0 0-.004l-.41-7.663a.614 1.15 0 0 0-.002-.034l-.544-7.903-.408-7.9a.614 1.15 0 0 0 0-.003l-.41-7.663-.41-7.918a.614 1.15 0 0 0-.001-.044l-.544-7.644-.408-7.647a.614 1.15 0 0 0-.002-.004l-.408-7.407-.41-7.663a.614 1.15 0 0 0-.003-.044l-.543-7.388-.41-7.391-.407-7.407a.614 1.15 0 0 0-.003-.044l-.545-7.132-.407-7.388a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.896-.408-7.151a.614 1.15 0 0 0-.003-.044l-.544-6.88-.408-6.876a.614 1.15 0 0 0 0-.004l-.41-6.643-.41-6.643a.614 1.15 0 0 0-.002-.044l-.543-6.624-.408-6.368a.614 1.15 0 0 0-.003-.006l-.405-6.132a.614 1.15 0 0 0-.003-.037l-.544-6.372-.408-5.856-.408-6.129a.614 1.15 0 0 0-.002-.006l-.408-5.875a.614 1.15 0 0 0-.005-.057l-.544-5.595-.406-5.598a.614 1.15 0 0 0-.002-.006l-.408-5.364a.614 1.15 0 0 0-.002-.01l-.41-5.109a.614 1.15 0 0 0-.006-.043l-.543-5.349-.408-4.837-.41-4.853a.614 1.15 0 0 0-.005-.059l-.544-4.834-.408-4.326-.408-4.344-.41-4.341a.614 1.15 0 0 0-.01-.081l-.54-4.06-.407-3.806-.41-3.833a.614 1.15 0 0 0-.001-.016l-.41-3.577a.614 1.15 0 0 0-.013-.096l-.54-3.281-.402-3.281a.614 1.15 0 0 0-.003-.022l-.41-3.066a.614 1.15 0 0 0-.003-.022l-.408-2.81a.614 1.15 0 0 0-.016-.09l-.54-2.782-.403-2.523a.614 1.15 0 0 0-.007-.031l-.41-2.302a.614 1.15 0 0 0-.033-.15l-.53-1.989-.399-1.987a.614 1.15 0 0 0-.01-.05l-.41-1.786-.407-1.79a.614 1.15 0 0 0-.085-.266l-.521-1.216-.388-1.213a.614 1.15 0 0 0-.035-.097l-.41-1.023-.408-1.02a.614 1.15 0 0 0-.216-.34l-.511-.48-.378-.47-.41-.51a.614 1.15 0 0 0-.34-.192h-.955a.614 1.15 0 0 0-.193.059l-.41.252a.614 1.15 0 0 0-.146.135l-.378.474-.511.477a.614 1.15 0 0 0-.16.215l-.408.767a.614 1.15 0 0 0-.058.122l-.408 1.023a.614 1.15 0 0 0-.037.1l-.388 1.21-.52 1.216a.614 1.15 0 0 0-.07.206l-.407 1.531a.614 1.15 0 0 0-.017.062l-.401 1.756-.538 2.015a.614 1.15 0 0 0-.025.11l-.41 2.045a.614 1.15 0 0 0-.008.04l-.408 2.3a.614 1.15 0 0 0-.007.033l-.401 2.505-.535 2.507a.614 1.15 0 0 0-.023.125l-.41 2.81a.614 1.15 0 0 0-.003.025l-.407 3.065a.614 1.15 0 0 0-.003.02l-.405 3.28-.538 3.284a.614 1.15 0 0 0-.015.097l-.408 3.577-.406 3.549-.543 3.802a.614 1.15 0 0 0-.01.087l-.408 4.086-.41 4.088a.614 1.15 0 0 0-.001.013l-.407 4.32-.542 4.571a.614 1.15 0 0 0-.007.063l-.41 4.597a.614 1.15 0 0 0 0 .01l-.41 4.856a.614 1.15 0 0 0 0 .006l-.407 5.083-.543 5.084a.614 1.15 0 0 0-.005.053l-.41 5.111a.614 1.15 0 0 0 0 .006l-.41 5.368a.614 1.15 0 0 0 0 .006l-.407 5.595-.543 5.595a.614 1.15 0 0 0-.005.056l-.41 5.878-.406 5.854-.544 6.113a.614 1.15 0 0 0-.003.047l-.41 6.131a.614 1.15 0 0 0 0 .004.614 1.15 0 0 0 0 .004l-.41 6.387-.407 6.369-.545 6.624a.614 1.15 0 0 0-.003.04l-.408 6.643-.41 6.643a.614 1.15 0 0 0 0 .006l-.407 6.877-.544 6.877a.614 1.15 0 0 0-.005.047l-.41 7.154-.408 7.132-.543 7.133a.614 1.15 0 0 0-.003.043l-.41 7.41-.409 7.41-.408 7.389-.544 7.391a.614 1.15 0 0 0-.002.04l-.41 7.667-.41 7.665-.407 7.648-.545 7.902a.614 1.15 0 0 0-.002.035l-.41 7.662a.614 1.15 0 0 0 0 .004l-.407 7.903-.545 7.903a.614 1.15 0 0 0-.003.037l-.407 7.919-.41 7.921a.614 1.15 0 0 0 0 .004l-.408 8.156-.544 7.9a.614 1.15 0 0 0-.003.037l-.408 7.918a.614 1.15 0 0 0 0 .004l-.41 8.174-.275 5.333-.276-5.336a.614 1.15 0 0 0-.002-.031l-.544-8.159-.41-7.902-.408-8.175a.614 1.15 0 0 0 0-.004l-.41-7.918a.614 1.15 0 0 0-.001-.037l-.545-7.903-.41-7.9-.407-7.921-.41-7.922a.614 1.15 0 0 0-.002-.034l-.544-7.903-.41-7.65-.408-7.663-.41-7.666a.614 1.15 0 0 0-.002-.037l-.543-7.647-.41-7.644a.614 1.15 0 0 0 0-.004l-.408-7.41a.614 1.15 0 0 0-.003-.04l-.544-7.389-.408-7.388a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-7.155-.41-7.15a.614 1.15 0 0 0-.001-.041l-.545-7.136-.407-6.88-.41-6.898-.41-6.9a.614 1.15 0 0 0-.003-.046l-.542-6.624-.408-6.365-.41-6.64a.614 1.15 0 0 0-.005-.06l-.543-6.106-.407-6.359a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.131a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.876a.614 1.15 0 0 0-.003-.05l-.544-5.854-.406-5.6-.41-5.62a.614 1.15 0 0 0-.002-.007l-.408-5.367a.614 1.15 0 0 0-.005-.05l-.542-5.345-.408-5.087-.41-5.108a.614 1.15 0 0 0-.007-.07l-.543-4.827-.406-4.575-.41-4.6a.614 1.15 0 0 0-.002-.01l-.407-4.345a.614 1.15 0 0 0-.01-.062l-.54-4.32-.407-4.06a.614 1.15 0 0 0-.002-.013l-.41-3.833-.409-3.832a.614 1.15 0 0 0-.012-.09l-.54-3.55-.407-3.293-.408-3.319a.614 1.15 0 0 0-.017-.106l-.539-3.037-.405-2.78a.614 1.15 0 0 0-.005-.027l-.41-2.554-.407-2.555a.614 1.15 0 0 0-.028-.137l-.533-2.248-.4-2.246a.614 1.15 0 0 0-.01-.04l-.41-2.046a.614 1.15 0 0 0-.01-.047l-.409-1.79a.614 1.15 0 0 0-.053-.184l-.538-1.51-.401-1.253-.41-1.28a.614 1.15 0 0 0-.035-.096l-.408-1.023a.614 1.15 0 0 0-.058-.124l-.544-1.02a.614 1.15 0 0 0-.095-.144l-.408-.511-.41-.512a.614 1.15 0 0 0-.191-.159l-.523-.243-.386-.243a.614 1.15 0 0 0-.39 0l-.408.256-.41.255a.614 1.15 0 0 0-.079.063l-.546.511a.614 1.15 0 0 0-.067.072l-.408.511a.614 1.15 0 0 0-.151.265l-.41 1.023-.383.958-.514.963a.614 1.15 0 0 0-.115.3l-.41 1.531-.4 1.503-.537 1.762a.614 1.15 0 0 0-.043.166l-.408 2.046-.41 2.042a.614 1.15 0 0 0-.009.041l-.402 2.267-.54 2.523a.614 1.15 0 0 0-.022.125l-.41 2.81-.409 2.81a.614 1.15 0 0 0-.003.025l-.404 3.034-.541 3.294a.614 1.15 0 0 0-.012.078l-.408 3.321a.614 1.15 0 0 0-.003.019l-.404 3.54-.54 3.54a.614 1.15 0 0 0-.013.102l-.41 4.089-.408 4.088-.408 4.061-.54 4.316a.614 1.15 0 0 0-.01.075l-.41 4.6a.614 1.15 0 0 0 0 .01l-.409 4.853-.406 4.828-.543 4.825a.614 1.15 0 0 0-.007.065l-.41 5.112a.614 1.15 0 0 0 0 .006l-.407 5.339-.543 5.339a.614 1.15 0 0 0-.005.06l-.41 5.62-.408 5.622a.614 1.15 0 0 0-.002.006l-.407 5.854-.543 6.113a.614 1.15 0 0 0-.003.047l-.41 6.131-.41 6.131a.614 1.15 0 0 0 0 .006l-.407 6.366-.545 6.365a.614 1.15 0 0 0-.003.05l-.41 6.64-.407 6.642-.408 6.625-.545 6.88a.614 1.15 0 0 0-.003.046l-.41 7.151-.407 6.88-.544 7.136a.614 1.15 0 0 0-.002.044l-.41 7.41-.41 7.407-.407 7.391-.545 7.388a.614 1.15 0 0 0-.002.04l-.41 7.408a.614 1.15 0 0 0 0 .004l-.409 7.666-.408 7.647-.544 7.644a.614 1.15 0 0 0-.003.04l-.408 7.922-.408 7.9-.545 7.644a.614 1.15 0 0 0-.003.04l-.41 7.922a.614 1.15 0 0 0 0 .004l-.407 8.174-.408 7.9-.544 7.9a.614 1.15 0 0 0-.003.04l-.41 8.174-.408 7.918a.614 1.15 0 0 0 0 .004l-.41 8.156-.344 5.009-.345-5.01-.408-8.155a.614 1.15 0 0 0 0-.004l-.41-7.918-.407-8.174a.614 1.15 0 0 0-.005-.04l-.545-7.9-.407-7.9-.408-8.174a.614 1.15 0 0 0-.002-.004l-.408-7.922a.614 1.15 0 0 0-.003-.04l-.545-7.644-.408-7.9-.407-7.922a.614 1.15 0 0 0-.003-.04l-.545-7.644-.408-7.647-.41-7.666a.614 1.15 0 0 0 0-.004l-.409-7.407a.614 1.15 0 0 0-.002-.04l-.544-7.389-.408-7.391-.41-7.407-.41-7.41a.614 1.15 0 0 0-.001-.044l-.545-7.136-.408-6.88-.41-7.15a.614 1.15 0 0 0-.002-.048l-.545-6.88-.408-6.624-.41-6.643-.407-6.64a.614 1.15 0 0 0-.003-.049l-.545-6.365-.407-6.366a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.131-.41-6.131a.614 1.15 0 0 0-.003-.047l-.542-6.113-.408-5.854a.614 1.15 0 0 0-.002-.006l-.408-5.623-.41-5.62a.614 1.15 0 0 0-.005-.059l-.542-5.34-.408-5.338a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.112a.614 1.15 0 0 0-.007-.066l-.543-4.824-.406-4.828-.41-4.853a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-4.6a.614 1.15 0 0 0-.008-.075l-.541-4.316-.408-4.06-.408-4.09-.41-4.088a.614 1.15 0 0 0-.013-.103l-.54-3.54-.406-3.54a.614 1.15 0 0 0-.002-.018l-.41-3.321a.614 1.15 0 0 0-.01-.078l-.54-3.294-.406-3.034a.614 1.15 0 0 0-.003-.025l-.408-2.81-.41-2.81a.614 1.15 0 0 0-.022-.125l-.539-2.523-.403-2.267a.614 1.15 0 0 0-.009-.04l-.41-2.043-.407-2.046a.614 1.15 0 0 0-.044-.166l-.536-1.762-.401-1.503-.41-1.531a.614 1.15 0 0 0-.114-.3l-.515-.963-.383-.958-.41-1.023a.614 1.15 0 0 0-.15-.265l-.402-.511a.614 1.15 0 0 0-.067-.072l-.546-.511a.614 1.15 0 0 0-.08-.063l-.41-.255-.407-.256a.614 1.15 0 0 0-.39 0zm.195 2.302.214.137.368.228.473.443.29.361.346.864.41 1.023a.614 1.15 0 0 0 .056.122l.475.892.365 1.366.41 1.531a.614 1.15 0 0 0 .016.056l.52 1.71.392 1.958.405 2.024.406 2.276a.614 1.15 0 0 0 .012.066l.532 2.492.4 2.747.408 2.8.408 3.054a.614 1.15 0 0 0 .009.06l.54 3.28.402 3.272.408 3.568a.614 1.15 0 0 0 .01.075l.538 3.527.404 4.035.41 4.086.408 4.089a.614 1.15 0 0 0 .007.053l.54 4.303.406 4.557.41 4.85.409 4.855a.614 1.15 0 0 0 .005.057l.54 4.821.407 5.074.41 5.361a.614 1.15 0 0 0 .005.053l.542 5.333.407 5.592.41 5.617.407 5.872a.614 1.15 0 0 0 .003.041l.544 6.11.408 6.106.408 6.132.41 6.384a.614 1.15 0 0 0 .003.043l.543 6.362.408 6.618.41 6.643.409 6.643a.614 1.15 0 0 0 .002.037l.544 6.874.408 7.13a.614 1.15 0 0 0 0 .005l.41 6.899a.614 1.15 0 0 0 .002.034l.544 7.133.408 7.385.41 7.41.407 7.41a.614 1.15 0 0 0 .003.037l.545 7.392.408 7.385.408 7.662.41 7.666a.614 1.15 0 0 0 .002.037l.543 7.644.408 7.9.41 7.922a.614 1.15 0 0 0 .002.04l.545 7.644.408 7.897.408 8.174a.614 1.15 0 0 0 0 .004l.41 7.922a.614 1.15 0 0 0 .001.034l.545 7.9.408 8.155a.614 1.15 0 0 0 .002.006l.407 7.918.41 8.171a.614 1.15 0 0 0 .002.041l.544 7.9.403 8.05-.403 8.049-.544 7.9a.614 1.15 0 0 0-.002.04l-.41 8.17-.407 7.92a.614 1.15 0 0 0-.002.003l-.408 8.159-.545 7.9a.614 1.15 0 0 0-.002.034l-.41 7.921a.614 1.15 0 0 0 0 .004l-.407 8.175-.408 7.896-.545 7.644a.614 1.15 0 0 0-.003.04l-.41 7.922-.407 7.9-.543 7.644a.614 1.15 0 0 0-.003.037l-.41 7.663-.407 7.663-.408 7.388-.545 7.391a.614 1.15 0 0 0-.003.038l-.408 7.41-.41 7.41-.407 7.385-.544 7.132a.614 1.15 0 0 0-.002.035l-.41 6.898a.614 1.15 0 0 0 0 .004l-.408 7.133-.544 6.873a.614 1.15 0 0 0-.002.038l-.41 6.642-.41 6.643-.407 6.618-.543 6.362a.614 1.15 0 0 0-.003.044l-.41 6.384-.408 6.128-.408 6.11-.544 6.11a.614 1.15 0 0 0-.003.04l-.408 5.873-.41 5.616-.406 5.592-.542 5.333a.614 1.15 0 0 0-.005.053l-.41 5.361-.406 5.075-.541 4.821a.614 1.15 0 0 0-.005.056l-.41 4.856-.41 4.847-.404 4.556-.541 4.307a.614 1.15 0 0 0-.007.053l-.408 4.086-.41 4.088-.404 4.036-.538 3.524a.614 1.15 0 0 0-.01.075l-.408 3.57-.403 3.272-.54 3.281a.614 1.15 0 0 0-.008.06l-.408 3.053-.408 2.8-.4 2.745-.532 2.495a.614 1.15 0 0 0-.012.062l-.406 2.28-.405 2.024-.391 1.958-.521 1.71a.614 1.15 0 0 0-.017.056l-.41 1.531-.364 1.366-.475.889a.614 1.15 0 0 0-.056.125l-.41 1.023-.346.863-.29.362-.473.443-.368.228-.214.134-.215-.134a.614 1.15 0 0 0-.045-.025l-.443-.206-.321-.4-.358-.448-.471-.883-.365-.91-.393-1.226-.41-1.279a.614 1.15 0 0 0-.015-.047l-.514-1.444-.381-1.665-.401-2-.405-2.28a.614 1.15 0 0 0-.022-.102l-.53-2.233-.397-2.486-.408-2.541-.406-2.795a.614 1.15 0 0 0-.01-.062l-.536-3.013-.403-3.268-.41-3.322a.614 1.15 0 0 0-.009-.06l-.538-3.53-.404-3.786-.408-3.826-.41-4.083a.614 1.15 0 0 0-.005-.05l-.54-4.313-.407-4.303-.41-4.594-.407-4.6a.614 1.15 0 0 0-.007-.047l-.543-4.822-.406-5.077-.41-5.108a.614 1.15 0 0 0-.003-.044l-.543-5.34-.406-5.335-.41-5.617-.41-5.62a.614 1.15 0 0 0-.002-.044l-.543-5.85-.408-5.848-.408-6.128-.41-6.384a.614 1.15 0 0 0-.002-.05l-.545-6.103-.406-6.615a.614 1.15 0 0 0-.002-.006l-.408-6.387a.614 1.15 0 0 0-.003-.038l-.543-6.618-.408-6.873-.41-6.899-.409-6.898a.614 1.15 0 0 0-.002-.035l-.544-7.135-.408-7.133-.41-7.151-.41-7.407a.614 1.15 0 0 0-.001-.04l-.545-7.389-.407-7.388-.41-7.663a.614 1.15 0 0 0-.002-.037l-.544-7.644-.408-7.647-.41-7.666-.41-7.663a.614 1.15 0 0 0-.002-.034l-.544-7.9-.408-7.902-.41-7.922-.407-7.918a.614 1.15 0 0 0-.003-.038l-.545-7.903-.408-7.9-.408-8.173a.614 1.15 0 0 0-.002-.004l-.407-7.919a.614 1.15 0 0 0-.002-.03l-.547-8.163-.407-7.902-.403-8.065.403-8.069.407-7.9.547-8.16a.614 1.15 0 0 0 .002-.032l.407-7.918a.614 1.15 0 0 0 .002-.006l.408-8.171.408-7.903.545-7.9a.614 1.15 0 0 0 .003-.037l.408-7.919.41-7.921.407-7.903.544-7.9a.614 1.15 0 0 0 .002-.034l.41-7.663.41-7.666.408-7.647.544-7.644a.614 1.15 0 0 0 .002-.037l.41-7.663.407-7.388.545-7.391a.614 1.15 0 0 0 .002-.038l.41-7.406.409-7.152.408-7.132.544-7.136a.614 1.15 0 0 0 .002-.034l.41-6.899.41-6.898.407-6.874.543-6.618a.614 1.15 0 0 0 .003-.037l.408-6.387a.614 1.15 0 0 0 .002-.006l.406-6.615.545-6.103a.614 1.15 0 0 0 .003-.05l.41-6.384.407-6.129.408-5.847.543-5.854a.614 1.15 0 0 0 .003-.04l.41-5.62.409-5.617.406-5.336.543-5.34a.614 1.15 0 0 0 .003-.043l.41-5.112.406-5.074.543-4.821a.614 1.15 0 0 0 .007-.047l.407-4.6.41-4.594.406-4.307.541-4.31a.614 1.15 0 0 0 .005-.053l.41-4.08.408-3.826.404-3.786.538-3.53a.614 1.15 0 0 0 .01-.06l.409-3.321.403-3.269.536-3.013a.614 1.15 0 0 0 .01-.062l.406-2.794.408-2.542.398-2.486.53-2.233a.614 1.15 0 0 0 .02-.102l.406-2.28.4-2 .382-1.665.514-1.447a.614 1.15 0 0 0 .016-.043l.41-1.28.392-1.225.365-.91.47-.883.359-.45.321-.398.443-.21a.614 1.15 0 0 0 .045-.021zm59.739 0 .214.137a.614 1.15 0 0 0 .045.022l.443.209.321.4.358.448.471.883.365.91.393 1.226.41 1.279a.614 1.15 0 0 0 .015.043l.514 1.448.381 1.665.401 1.999.405 2.28a.614 1.15 0 0 0 .022.103l.53 2.233.397 2.485.408 2.542.406 2.794a.614 1.15 0 0 0 .01.063l.536 3.012.403 3.269.41 3.321a.614 1.15 0 0 0 .009.06l.538 3.53.404 3.786.408 3.827.41 4.079a.614 1.15 0 0 0 .005.053l.54 4.31.407 4.307.41 4.594.407 4.6a.614 1.15 0 0 0 .005.047l.543 4.821.406 5.074.41 5.112a.614 1.15 0 0 0 .003.044l.543 5.339.406 5.336.41 5.617.41 5.62a.614 1.15 0 0 0 .002.04l.543 5.854.408 5.848.408 6.128.41 6.384a.614 1.15 0 0 0 .002.05l.545 6.103.406 6.615a.614 1.15 0 0 0 0 .006l.41 6.387a.614 1.15 0 0 0 .002.037l.543 6.618.408 6.874.41 6.899.41 6.898a.614 1.15 0 0 0 .001.034l.545 7.136.408 7.133.41 7.15.407 7.408a.614 1.15 0 0 0 .003.037l.545 7.391.407 7.389.41 7.662a.614 1.15 0 0 0 .002.038l.544 7.644.408 7.647.41 7.665.41 7.663a.614 1.15 0 0 0 .001.034l.545 7.9.408 7.903.41 7.922.407 7.918a.614 1.15 0 0 0 .003.037l.545 7.9.408 7.903.408 8.17a.614 1.15 0 0 0 .002.007l.407 7.918a.614 1.15 0 0 0 .002.031l.545 8.162.41 7.9.402 8.068-.403 8.065-.41 7.903-.544 8.161a.614 1.15 0 0 0-.002.032l-.407 7.918a.614 1.15 0 0 0-.002.004l-.408 8.174-.408 7.9-.545 7.903a.614 1.15 0 0 0-.003.037l-.408 7.918-.41 7.922-.407 7.903-.545 7.9a.614 1.15 0 0 0-.002.034l-.41 7.662-.409 7.666-.408 7.647-.544 7.644a.614 1.15 0 0 0-.002.038l-.41 7.662-.407 7.389-.545 7.388a.614 1.15 0 0 0-.003.04l-.408 7.407-.41 7.151-.407 7.133-.545 7.136a.614 1.15 0 0 0-.002.034l-.41 6.899-.409 6.898-.408 6.874-.543 6.618a.614 1.15 0 0 0-.003.037l-.41 6.387a.614 1.15 0 0 0 0 .006l-.405 6.615-.545 6.103a.614 1.15 0 0 0-.003.05l-.41 6.384-.407 6.128-.408 5.848-.543 5.85a.614 1.15 0 0 0-.003.044l-.41 5.62-.41 5.617-.405 5.336-.543 5.34a.614 1.15 0 0 0-.003.043l-.41 5.108-.406 5.078-.543 4.821a.614 1.15 0 0 0-.005.047l-.408 4.6-.41 4.594-.405 4.304-.541 4.313a.614 1.15 0 0 0-.005.05l-.41 4.082-.408 3.827-.404 3.786-.538 3.53a.614 1.15 0 0 0-.01.06l-.409 3.321-.403 3.269-.536 3.012a.614 1.15 0 0 0-.01.063l-.406 2.794-.408 2.542-.398 2.485-.53 2.233a.614 1.15 0 0 0-.02.103l-.406 2.28-.4 2-.382 1.665-.514 1.444a.614 1.15 0 0 0-.015.046l-.41 1.28-.393 1.225-.365.91-.47.883-.359.45-.321.398-.443.206a.614 1.15 0 0 0-.045.025l-.214.134-.215-.134-.368-.228-.473-.442-.29-.362-.346-.864-.41-1.023a.614 1.15 0 0 0-.056-.125l-.475-.889-.364-1.366-.41-1.53a.614 1.15 0 0 0-.017-.057l-.52-1.71-.392-1.958-.405-2.024-.406-2.28a.614 1.15 0 0 0-.012-.062l-.532-2.495-.4-2.744-.408-2.8-.408-3.054a.614 1.15 0 0 0-.009-.06l-.54-3.28-.402-3.272-.408-3.57a.614 1.15 0 0 0-.01-.076l-.538-3.524-.404-4.035-.41-4.09-.408-4.085a.614 1.15 0 0 0-.009-.053l-.54-4.307-.405-4.556-.41-4.846-.41-4.856a.614 1.15 0 0 0-.005-.057l-.54-4.821-.407-5.074-.41-5.361a.614 1.15 0 0 0-.004-.053l-.543-5.333-.406-5.592-.41-5.617-.408-5.873a.614 1.15 0 0 0-.003-.04l-.544-6.11-.408-6.11-.408-6.127-.41-6.385a.614 1.15 0 0 0-.003-.043l-.542-6.362-.408-6.618-.41-6.643-.41-6.643a.614 1.15 0 0 0-.002-.037l-.544-6.874-.408-7.132a.614 1.15 0 0 0 0-.004l-.41-6.899a.614 1.15 0 0 0-.001-.034l-.545-7.133-.408-7.385-.41-7.41-.407-7.41a.614 1.15 0 0 0-.003-.037l-.545-7.392-.408-7.388-.407-7.663-.41-7.662a.614 1.15 0 0 0-.003-.038l-.543-7.644-.408-7.9-.41-7.92a.614 1.15 0 0 0-.002-.041l-.545-7.644-.408-7.897-.408-8.174a.614 1.15 0 0 0 0-.004l-.407-7.922a.614 1.15 0 0 0-.003-.034l-.543-7.9-.41-8.158a.614 1.15 0 0 0 0-.004l-.408-7.919-.41-8.17a.614 1.15 0 0 0-.001-.041l-.545-7.9-.403-8.05.403-8.049.545-7.9a.614 1.15 0 0 0 .002-.04l.41-8.171.407-7.919a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-8.155.543-7.9a.614 1.15 0 0 0 .003-.034l.41-7.922a.614 1.15 0 0 0 0-.004l.407-8.174.408-7.896.544-7.644a.614 1.15 0 0 0 .003-.04l.41-7.922.408-7.9.543-7.644a.614 1.15 0 0 0 .003-.037l.41-7.666.407-7.663.408-7.385.544-7.391a.614 1.15 0 0 0 .003-.038l.408-7.41.41-7.41.408-7.385.544-7.132a.614 1.15 0 0 0 .002-.035l.41-6.898a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-7.13.544-6.873a.614 1.15 0 0 0 .002-.038l.41-6.643.41-6.642.407-6.618.543-6.362a.614 1.15 0 0 0 .003-.044l.41-6.384.407-6.131.408-6.107.545-6.11a.614 1.15 0 0 0 .003-.04l.408-5.873.41-5.616.405-5.592.543-5.333a.614 1.15 0 0 0 .005-.053l.41-5.361.406-5.075.541-4.821a.614 1.15 0 0 0 .005-.056l.41-4.856.41-4.85.404-4.556.54-4.304a.614 1.15 0 0 0 .008-.053l.408-4.089.41-4.085.404-4.036.538-3.527a.614 1.15 0 0 0 .01-.075l.408-3.568.403-3.271.539-3.281a.614 1.15 0 0 0 .009-.06l.408-3.053.408-2.8.4-2.748.532-2.492a.614 1.15 0 0 0 .012-.065l.406-2.277.405-2.024.39-1.959.522-1.709a.614 1.15 0 0 0 .017-.056l.41-1.53.364-1.367.474-.892a.614 1.15 0 0 0 .057-.122l.41-1.022.346-.864.29-.362.472-.443.368-.228zm-119.838 1.983h.67l.236.147.341.427a.614 1.15 0 0 0 .065.072l.458.427.308.577.363.908.393 1.229a.614 1.15 0 0 0 .047.124l.506 1.182.371 1.394.403 1.76a.614 1.15 0 0 0 .015.059l.531 1.99.393 1.967.403 2.264.406 2.539a.614 1.15 0 0 0 .018.097l.533 2.492.398 2.735.406 3.044.408 3.312a.614 1.15 0 0 0 .012.078l.538 3.274.403 3.527.41 3.578a.614 1.15 0 0 0 .006.056l.541 3.79.405 4.044.408 4.082.41 4.339a.614 1.15 0 0 0 .004.05l.541 4.565.407 4.566.408 4.843.41 5.106a.614 1.15 0 0 0 .004.056l.543 5.08.406 5.08.41 5.358.408 5.617a.614 1.15 0 0 0 .005.05l.542 5.592.407 5.848.41 5.875a.614 1.15 0 0 0 .002.04l.543 6.11.408 6.104.41 6.387.409 6.387a.614 1.15 0 0 0 .002.037l.544 6.621.408 6.621.41 6.64.408 6.896a.614 1.15 0 0 0 .003.04l.544 6.877.406 7.13.41 7.154a.614 1.15 0 0 0 .003.04l.544 7.13.408 7.388.408 7.41.41 7.407a.614 1.15 0 0 0 .003.04l.543 7.389.407 7.64.41 7.666.41 7.666a.614 1.15 0 0 0 .002.031l.544 7.903.408 7.647.41 7.919a.614 1.15 0 0 0 .002.037l.544 7.9.408 7.903.41 7.918.409 8.174a.614 1.15 0 0 0 .002.04l.544 7.9.408 7.903.41 8.171a.614 1.15 0 0 0 0 .006l.41 7.919a.614 1.15 0 0 0 .001.03l.537 8.035-.537 8.034a.614 1.15 0 0 0-.002.03l-.41 7.92a.614 1.15 0 0 0 0 .005l-.409 8.171-.408 7.903-.544 7.9a.614 1.15 0 0 0-.002.04l-.41 8.174-.41 7.919-.407 7.903-.544 7.9a.614 1.15 0 0 0-.002.037l-.41 7.918-.408 7.647-.544 7.903a.614 1.15 0 0 0-.002.031l-.41 7.666-.41 7.666-.407 7.64-.543 7.389a.614 1.15 0 0 0-.003.04l-.41 7.407-.408 7.41-.408 7.389-.544 7.129a.614 1.15 0 0 0-.003.04l-.41 7.155-.406 7.13-.544 6.876a.614 1.15 0 0 0-.003.04l-.408 6.896-.41 6.64-.408 6.621-.544 6.621a.614 1.15 0 0 0-.002.037l-.41 6.387-.41 6.384-.407 6.107-.543 6.11a.614 1.15 0 0 0-.003.04l-.41 5.876-.406 5.847-.542 5.592a.614 1.15 0 0 0-.005.05l-.408 5.617-.41 5.358-.406 5.077-.543 5.083a.614 1.15 0 0 0-.005.057l-.41 5.105-.407 4.843-.407 4.563-.54 4.569a.614 1.15 0 0 0-.006.05l-.41 4.338-.407 4.082-.405 4.045-.54 3.79a.614 1.15 0 0 0-.008.056l-.41 3.577-.402 3.527-.538 3.275a.614 1.15 0 0 0-.012.078l-.408 3.312-.406 3.044-.398 2.735-.533 2.492a.614 1.15 0 0 0-.018.096l-.406 2.539-.403 2.264-.393 1.968-.531 1.99a.614 1.15 0 0 0-.015.06l-.403 1.758-.371 1.394-.506 1.182a.614 1.15 0 0 0-.047.125l-.393 1.229-.363.907-.308.577-.458.427a.614 1.15 0 0 0-.065.072l-.341.427-.237.147h-.669l-.255-.318-.41-.512a.614 1.15 0 0 0-.064-.071l-.416-.39-.323-.805-.39-.973-.393-1.225a.614 1.15 0 0 0-.046-.128l-.495-1.157-.376-1.644-.403-1.765-.405-2.018a.614 1.15 0 0 0-.025-.112l-.526-1.968-.393-2.208-.406-2.536a.614 1.15 0 0 0-.012-.062l-.536-2.766-.401-2.754-.406-3.044-.408-3.312a.614 1.15 0 0 0-.012-.078l-.538-3.275-.402-3.518-.408-3.826-.41-3.83a.614 1.15 0 0 0-.007-.056l-.54-4.048-.406-4.304-.408-4.342-.41-4.344a.614 1.15 0 0 0-.004-.037l-.543-4.825-.406-4.825-.41-4.855a.614 1.15 0 0 0-.003-.035l-.542-5.342-.407-5.084-.408-5.357-.41-5.617a.614 1.15 0 0 0-.004-.05l-.543-5.595-.406-5.845-.41-6.128a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.875a.614 1.15 0 0 0-.001-.032l-.545-6.368-.408-6.11-.408-6.384a.614 1.15 0 0 0-.003-.037l-.544-6.621-.408-6.621-.408-6.64-.41-6.898a.614 1.15 0 0 0-.002-.041l-.543-6.874-.408-7.132a.614 1.15 0 0 0 0-.004l-.41-6.896-.41-7.403a.614 1.15 0 0 0-.002-.044l-.545-7.133-.407-7.385-.41-7.41a.614 1.15 0 0 0-.002-.037l-.545-7.388-.407-7.644a.614 1.15 0 0 0 0-.004l-.41-7.407-.41-7.663a.614 1.15 0 0 0-.002-.037l-.544-7.644-.408-7.9a.614 1.15 0 0 0 0-.004l-.41-7.662-.409-7.919a.614 1.15 0 0 0-.002-.037l-.544-7.903-.408-7.647-.41-7.919a.614 1.15 0 0 0-.002-.037l-.543-7.9-.408-8.155a.614 1.15 0 0 0 0-.004l-.41-7.922-.409-7.918a.614 1.15 0 0 0-.002-.037l-.536-7.772.536-7.772a.614 1.15 0 0 0 .002-.037l.41-7.922.41-7.918a.614 1.15 0 0 0 0-.004l.407-8.156.545-7.9a.614 1.15 0 0 0 .002-.037l.41-7.918.407-7.647.545-7.903a.614 1.15 0 0 0 .002-.037l.41-7.919.409-7.662a.614 1.15 0 0 0 0-.004l.408-7.9.544-7.644a.614 1.15 0 0 0 .002-.037l.41-7.663.41-7.407a.614 1.15 0 0 0 0-.004l.407-7.644.545-7.388a.614 1.15 0 0 0 .002-.037l.41-7.41.407-7.386.545-7.132a.614 1.15 0 0 0 .002-.044l.41-7.404.409-6.895a.614 1.15 0 0 0 0-.004l.408-7.133.542-6.873a.614 1.15 0 0 0 .003-.044l.41-6.896.408-6.64.408-6.62.544-6.622a.614 1.15 0 0 0 .003-.037l.408-6.384.408-6.11.544-6.368a.614 1.15 0 0 0 .002-.03l.41-5.877a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-6.128.406-5.844.543-5.595a.614 1.15 0 0 0 .005-.05l.41-5.617.407-5.358.406-5.083.545-5.343a.614 1.15 0 0 0 .003-.034l.41-4.856.405-4.825.543-4.824a.614 1.15 0 0 0 .003-.038l.41-4.344.408-4.341.406-4.304.54-4.051a.614 1.15 0 0 0 .006-.053l.41-3.83.408-3.827.403-3.518.538-3.274a.614 1.15 0 0 0 .011-.078l.408-3.312.406-3.044.402-2.754.536-2.766a.614 1.15 0 0 0 .011-.063l.407-2.538.393-2.205.526-1.971a.614 1.15 0 0 0 .025-.11l.404-2.017.403-1.765.376-1.644.495-1.157a.614 1.15 0 0 0 .046-.128l.393-1.226.39-.973.323-.804.416-.39a.614 1.15 0 0 0 .065-.072l.41-.511zm179.267 0h.669l.255.318.41.512a.614 1.15 0 0 0 .064.072l.416.39.323.804.39.973.393 1.226a.614 1.15 0 0 0 .047.128l.494 1.157.376 1.643.403 1.765.405 2.018a.614 1.15 0 0 0 .025.11l.526 1.97.393 2.205.406 2.539a.614 1.15 0 0 0 .012.062l.536 2.767.401 2.754.406 3.043.408 3.313a.614 1.15 0 0 0 .012.077l.538 3.275.402 3.518.408 3.827.41 3.83a.614 1.15 0 0 0 .007.052l.54 4.052.406 4.304.408 4.34.41 4.345a.614 1.15 0 0 0 .002.037l.543 4.825.406 4.825.41 4.856a.614 1.15 0 0 0 .003.034l.544 5.342.406 5.084.408 5.358.41 5.617a.614 1.15 0 0 0 .005.05l.543 5.594.406 5.845.41 6.128a.614 1.15 0 0 0 0 .006l.409 5.876a.614 1.15 0 0 0 .002.03l.544 6.37.408 6.109.408 6.384a.614 1.15 0 0 0 .003.037l.545 6.621.407 6.621.408 6.64.41 6.895a.614 1.15 0 0 0 .003.044l.543 6.874.408 7.132a.614 1.15 0 0 0 0 .004l.41 6.896.409 7.404a.614 1.15 0 0 0 .002.043l.544 7.133.408 7.385.41 7.41a.614 1.15 0 0 0 .002.037l.544 7.389.408 7.644a.614 1.15 0 0 0 0 .004l.41 7.407.41 7.662a.614 1.15 0 0 0 .001.038l.545 7.644.407 7.9a.614 1.15 0 0 0 0 .003l.41 7.663.41 7.918a.614 1.15 0 0 0 .002.038l.544 7.902.408 7.648.41 7.918a.614 1.15 0 0 0 .002.037l.544 7.9.408 8.155a.614 1.15 0 0 0 0 .004l.41 7.919.409 7.921a.614 1.15 0 0 0 .002.038l.536 7.772-.536 7.771a.614 1.15 0 0 0-.002.038l-.41 7.918-.41 7.922a.614 1.15 0 0 0 0 .004l-.407 8.155-.544 7.9a.614 1.15 0 0 0-.002.037l-.41 7.918-.408 7.648-.544 7.902a.614 1.15 0 0 0-.002.038l-.41 7.918-.41 7.663a.614 1.15 0 0 0 0 .004l-.407 7.9-.545 7.643a.614 1.15 0 0 0-.002.038l-.41 7.662-.409 7.407a.614 1.15 0 0 0 0 .004l-.408 7.644-.544 7.389a.614 1.15 0 0 0-.002.037l-.41 7.41-.408 7.385-.544 7.133a.614 1.15 0 0 0-.002.043l-.41 7.404-.41 6.896a.614 1.15 0 0 0 0 .004l-.407 7.132-.543 6.874a.614 1.15 0 0 0-.003.04l-.41 6.899-.408 6.64-.407 6.62-.545 6.622a.614 1.15 0 0 0-.005.037l-.408 6.384-.408 6.11-.544 6.368a.614 1.15 0 0 0-.002.031l-.41 5.876a.614 1.15 0 0 0 0 .006l-.41 6.128-.405 5.845-.543 5.595a.614 1.15 0 0 0-.005.05l-.41 5.616-.408 5.358-.406 5.084-.544 5.342a.614 1.15 0 0 0-.003.034l-.41 4.856-.406 4.825-.543 4.824a.614 1.15 0 0 0-.003.038l-.41 4.344-.407 4.341-.407 4.304-.54 4.048a.614 1.15 0 0 0-.006.056l-.41 3.83-.408 3.827-.402 3.518-.538 3.274a.614 1.15 0 0 0-.012.078l-.408 3.312-.406 3.044-.401 2.754-.536 2.766a.614 1.15 0 0 0-.012.063l-.406 2.535-.393 2.208-.526 1.968a.614 1.15 0 0 0-.025.113l-.405 2.017-.403 1.766-.376 1.643-.495 1.157a.614 1.15 0 0 0-.046.128l-.393 1.226-.39.973-.323.804-.416.39a.614 1.15 0 0 0-.065.072l-.41.511-.254.318h-.67l-.236-.146-.341-.427a.614 1.15 0 0 0-.065-.072l-.458-.427-.308-.577-.363-.908-.393-1.229a.614 1.15 0 0 0-.047-.124l-.506-1.182-.371-1.394-.403-1.76a.614 1.15 0 0 0-.015-.059l-.531-1.99-.393-1.967-.403-2.265-.406-2.538a.614 1.15 0 0 0-.018-.097l-.533-2.492-.398-2.735-.406-3.044-.408-3.312a.614 1.15 0 0 0-.012-.078l-.538-3.274-.403-3.527-.41-3.578a.614 1.15 0 0 0-.006-.056l-.541-3.79-.405-4.044-.408-4.082-.41-4.339a.614 1.15 0 0 0-.004-.05l-.541-4.568-.407-4.563-.408-4.843-.41-5.106a.614 1.15 0 0 0-.004-.056l-.543-5.083-.406-5.078-.41-5.358-.408-5.616a.614 1.15 0 0 0-.005-.05l-.542-5.592-.407-5.848-.41-5.875a.614 1.15 0 0 0-.002-.04l-.545-6.11-.406-6.104v-.004l-.41-6.384-.409-6.387a.614 1.15 0 0 0-.002-.037l-.544-6.621-.408-6.621-.41-6.64-.408-6.896a.614 1.15 0 0 0-.003-.04l-.544-6.877-.408-7.13-.408-7.154a.614 1.15 0 0 0-.003-.04l-.545-7.13-.407-7.388-.408-7.41-.41-7.407a.614 1.15 0 0 0-.003-.04l-.543-7.389-.408-7.64-.41-7.666-.409-7.666a.614 1.15 0 0 0-.002-.031l-.544-7.903-.408-7.647-.41-7.919a.614 1.15 0 0 0-.003-.037l-.544-7.9-.408-7.903-.41-7.918-.409-8.174a.614 1.15 0 0 0-.002-.04l-.544-7.9-.408-7.903-.41-8.171a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-7.919a.614 1.15 0 0 0-.001-.03l-.537-8.035.537-8.033a.614 1.15 0 0 0 .002-.032l.41-7.918a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.409-8.171.408-7.903.544-7.9a.614 1.15 0 0 0 .002-.04l.41-8.174.41-7.919.407-7.902.544-7.9a.614 1.15 0 0 0 .003-.038l.41-7.918.408-7.647.544-7.903a.614 1.15 0 0 0 .002-.03l.41-7.667.41-7.666.407-7.64.543-7.389a.614 1.15 0 0 0 .003-.04l.41-7.407.408-7.41.407-7.388.545-7.13a.614 1.15 0 0 0 .003-.04l.408-7.155.408-7.13.544-6.876a.614 1.15 0 0 0 .003-.04l.408-6.896.41-6.64.408-6.62.544-6.622a.614 1.15 0 0 0 .002-.037l.41-6.387.41-6.384v-.004l.405-6.104.545-6.11a.614 1.15 0 0 0 .003-.04l.41-5.875.406-5.848.542-5.592a.614 1.15 0 0 0 .005-.05l.408-5.617.41-5.357.406-5.08.543-5.081a.614 1.15 0 0 0 .005-.056l.41-5.106.407-4.843.407-4.566.54-4.566a.614 1.15 0 0 0 .006-.05l.41-4.337.407-4.083.405-4.045.54-3.79a.614 1.15 0 0 0 .008-.055l.41-3.577.402-3.528.538-3.274a.614 1.15 0 0 0 .012-.078l.408-3.312.406-3.044.398-2.735.533-2.492a.614 1.15 0 0 0 .018-.097l.406-2.539.403-2.264.393-1.968.531-1.99a.614 1.15 0 0 0 .015-.059l.403-1.759.371-1.394.506-1.182a.614 1.15 0 0 0 .047-.124l.393-1.23.363-.907.308-.577.458-.427a.614 1.15 0 0 0 .065-.072l.341-.427zm-238.683 8.174h.347l.314.197.332.209.326.405.461.65.358.891.39.973.393 1.229a.614 1.15 0 0 0 .015.047l.524 1.472.385 1.437.401 1.76a.614 1.15 0 0 0 .017.059l.526 1.97.394 2.224.407 2.283.406 2.539a.614 1.15 0 0 0 .012.062l.536 2.763.4 2.754.407 3.044.408 3.312a.614 1.15 0 0 0 .012.078l.537 3.275.403 3.52.408 3.824.41 3.833a.614 1.15 0 0 0 .007.053l.54 4.055.405 4.048.408 4.338a.614 1.15 0 0 0 .005.047l.543 4.565.406 4.819a.614 1.15 0 0 0 0 .01l.408 4.59.41 5.1a.614 1.15 0 0 0 .005.056l.543 5.077.406 5.333.41 5.368.407 5.364a.614 1.15 0 0 0 .003.034l.545 5.854.406 5.595.41 6.125a.614 1.15 0 0 0 .003.053l.542 5.85.408 6.1.41 6.385.408 6.387a.614 1.15 0 0 0 .003.047l.544 6.362.408 6.615.408 6.895a.614 1.15 0 0 0 0 .006l.41 6.64a.614 1.15 0 0 0 .002.037l.543 6.877.408 7.13a.614 1.15 0 0 0 0 .006l.41 6.895a.614 1.15 0 0 0 .003.037l.543 7.13.407 7.388.41 7.41a.614 1.15 0 0 0 0 .004l.41 7.154a.614 1.15 0 0 0 .002.028l.544 7.648.408 7.39.41 7.664.409 7.665a.614 1.15 0 0 0 .002.038l.544 7.644.408 7.644.41 7.918a.614 1.15 0 0 0 .002.04l.544 7.645.408 7.9.41 7.92.41 7.92a.614 1.15 0 0 0 .001.037l.545 7.902.408 7.9.41 7.922.404 7.809-.405 7.81-.41 7.918-.407 7.902-.545 7.903a.614 1.15 0 0 0-.002.038l-.41 7.918-.409 7.922-.408 7.896-.544 7.644a.614 1.15 0 0 0-.002.044l-.41 7.918-.408 7.644-.544 7.644a.614 1.15 0 0 0-.002.037l-.41 7.666-.41 7.663-.407 7.388-.544 7.65a.614 1.15 0 0 0-.002.028l-.41 7.155a.614 1.15 0 0 0 0 .004l-.41 7.41-.407 7.385-.543 7.132a.614 1.15 0 0 0-.003.038l-.41 6.895a.614 1.15 0 0 0 0 .006l-.408 7.13-.543 6.876a.614 1.15 0 0 0-.003.035l-.41 6.643a.614 1.15 0 0 0 0 .006l-.407 6.895-.408 6.615-.544 6.362a.614 1.15 0 0 0-.003.044l-.408 6.387-.41 6.387-.408 6.1-.542 5.848a.614 1.15 0 0 0-.003.056l-.41 6.125-.406 5.592-.545 5.857a.614 1.15 0 0 0-.003.034l-.408 5.364-.41 5.368-.405 5.333-.543 5.077a.614 1.15 0 0 0-.005.056l-.41 5.1-.408 4.59a.614 1.15 0 0 0 0 .01l-.406 4.818-.543 4.566a.614 1.15 0 0 0-.005.047l-.408 4.338-.404 4.048-.541 4.055a.614 1.15 0 0 0-.007.053l-.41 3.832-.408 3.824-.403 3.521-.537 3.275a.614 1.15 0 0 0-.012.078l-.408 3.312-.406 3.044-.401 2.75-.536 2.767a.614 1.15 0 0 0-.012.062l-.406 2.539-.407 2.283-.394 2.223-.526 1.968a.614 1.15 0 0 0-.017.062l-.401 1.76-.385 1.437-.524 1.472a.614 1.15 0 0 0-.015.047l-.393 1.226-.39.976-.358.889-.461.651-.326.406-.332.209-.314.196h-.347l-.314-.196-.368-.231-.418-.39-.308-.577-.383-.957-.408-1.023a.614 1.15 0 0 0-.012-.028l-.506-1.182-.38-1.425-.4-1.5-.402-1.76a.614 1.15 0 0 0-.017-.062l-.526-1.968-.394-2.223-.41-2.299a.614 1.15 0 0 0-.012-.062l-.536-2.508-.398-2.492-.406-2.785-.408-3.056a.614 1.15 0 0 0-.009-.06l-.54-3.28-.402-3.272-.408-3.568-.41-3.577a.614 1.15 0 0 0-.009-.056l-.539-3.79-.406-4.044-.408-4.089a.614 1.15 0 0 0-.007-.05l-.541-4.307-.405-4.562-.41-4.597-.409-4.6a.614 1.15 0 0 0-.003-.038l-.543-5.086-.406-4.822-.41-5.358a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-5.111a.614 1.15 0 0 0-.002-.035l-.543-5.598-.408-5.336-.408-5.87a.614 1.15 0 0 0 0-.003.614 1.15 0 0 0 0-.004l-.41-5.623a.614 1.15 0 0 0-.002-.035l-.543-6.11-.408-5.853-.41-6.128a.614 1.15 0 0 0-.002-.038l-.543-6.365-.408-6.365-.41-6.384-.408-6.64a.614 1.15 0 0 0-.003-.044l-.544-6.62-.408-6.618-.408-6.9-.41-6.895a.614 1.15 0 0 0-.002-.043l-.545-6.874-.406-7.132-.41-7.151a.614 1.15 0 0 0-.003-.041l-.544-7.136-.408-7.13-.408-7.406-.41-7.41a.614 1.15 0 0 0-.002-.037l-.543-7.392-.41-7.388-.408-7.407-.41-7.663a.614 1.15 0 0 0-.002-.043l-.543-7.388-.408-7.644-.41-7.663a.614 1.15 0 0 0-.002-.037l-.543-7.648-.41-7.644-.408-7.665-.41-7.666a.614 1.15 0 0 0-.001-.037l-.545-7.644-.403-7.532.403-7.532.545-7.647a.614 1.15 0 0 0 .002-.037l.41-7.663.407-7.666.41-7.644.543-7.647a.614 1.15 0 0 0 .003-.037l.41-7.666.407-7.64.543-7.389a.614 1.15 0 0 0 .003-.044l.41-7.662.407-7.407.41-7.388.543-7.392a.614 1.15 0 0 0 .003-.037l.41-7.41.407-7.407.408-7.133.544-7.132a.614 1.15 0 0 0 .003-.04l.41-7.155.406-7.13.545-6.873a.614 1.15 0 0 0 .003-.044l.41-6.898.407-6.896.408-6.618.544-6.62a.614 1.15 0 0 0 .003-.045l.408-6.64.41-6.383.408-6.366.543-6.365a.614 1.15 0 0 0 .003-.037l.41-6.129.407-5.853.543-6.113a.614 1.15 0 0 0 .003-.031l.41-5.623a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.407-5.87.408-5.336.543-5.598a.614 1.15 0 0 0 .003-.034l.41-5.112a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.41-5.358.405-4.821.543-5.087a.614 1.15 0 0 0 .003-.037l.41-4.6.41-4.597.404-4.563.54-4.307a.614 1.15 0 0 0 .008-.05l.408-4.088.406-4.045.54-3.79a.614 1.15 0 0 0 .008-.056l.41-3.577.408-3.568.403-3.271.54-3.284a.614 1.15 0 0 0 .008-.06l.408-3.053.406-2.785.398-2.492.536-2.507a.614 1.15 0 0 0 .012-.062l.41-2.299.394-2.224.526-1.97a.614 1.15 0 0 0 .017-.06l.401-1.759.402-1.503.38-1.422.505-1.182a.614 1.15 0 0 0 .012-.028l.408-1.023.383-.958.308-.577.418-.39.368-.23zm298.422 0h.346l.315.197.367.23.418.39.308.578.383.957.408 1.023a.614 1.15 0 0 0 .012.028l.506 1.182.38 1.422.4 1.503.402 1.76a.614 1.15 0 0 0 .017.059l.524 1.97.396 2.224.41 2.299a.614 1.15 0 0 0 .012.062l.536 2.508.398 2.492.406 2.785.408 3.053a.614 1.15 0 0 0 .009.059l.54 3.284.402 3.272.408 3.567.41 3.578a.614 1.15 0 0 0 .007.056l.539 3.789.405 4.045.41 4.089a.614 1.15 0 0 0 .006.05l.541 4.306.405 4.563.41 4.597.409 4.6a.614 1.15 0 0 0 .003.037l.543 5.087.406 4.822.41 5.358a.614 1.15 0 0 0 0 .006l.409 5.111a.614 1.15 0 0 0 .003.034l.543 5.599.408 5.336.408 5.869a.614 1.15 0 0 0 0 .006l.41 5.623a.614 1.15 0 0 0 .002.031l.543 6.113.408 5.854.41 6.128a.614 1.15 0 0 0 .002.037l.543 6.366.408 6.365.41 6.384.407 6.64a.614 1.15 0 0 0 .003.043l.545 6.621.408 6.618.408 6.896.41 6.898a.614 1.15 0 0 0 .002.044l.543 6.874.408 7.13.41 7.154a.614 1.15 0 0 0 .002.04l.545 7.133.408 7.132.408 7.407.41 7.41a.614 1.15 0 0 0 .002.038l.543 7.39.408 7.39.41 7.406.41 7.663a.614 1.15 0 0 0 .001.043l.545 7.389.407 7.64.41 7.666a.614 1.15 0 0 0 .002.038l.544 7.647.41 7.644.408 7.665.41 7.663a.614 1.15 0 0 0 .001.037l.545 7.647.401 7.532-.401 7.532-.545 7.644a.614 1.15 0 0 0-.002.037l-.41 7.666-.407 7.666-.41 7.644-.544 7.647a.614 1.15 0 0 0-.002.037l-.41 7.663-.407 7.644-.545 7.388a.614 1.15 0 0 0-.002.044l-.41 7.662-.409 7.407-.408 7.389-.543 7.39a.614 1.15 0 0 0-.003.038l-.41 7.41-.407 7.407-.408 7.13-.545 7.135a.614 1.15 0 0 0-.003.04l-.41 7.152-.407 7.133-.543 6.873a.614 1.15 0 0 0-.003.044l-.41 6.895-.407 6.899-.408 6.618-.545 6.62a.614 1.15 0 0 0-.003.044l-.407 6.64-.41 6.384-.408 6.365-.543 6.366a.614 1.15 0 0 0-.003.037l-.41 6.128-.407 5.854-.543 6.11a.614 1.15 0 0 0-.003.034l-.41 5.623a.614 1.15 0 0 0 0 .006l-.407 5.87-.408 5.336-.543 5.598a.614 1.15 0 0 0-.003.034l-.41 5.112a.614 1.15 0 0 0 0 .006l-.41 5.358-.405 4.821-.543 5.087a.614 1.15 0 0 0-.003.037l-.41 4.6-.41 4.597-.404 4.563-.541 4.307a.614 1.15 0 0 0-.007.05l-.41 4.088-.404 4.045-.54 3.79a.614 1.15 0 0 0-.006.056l-.41 3.577-.408 3.568-.403 3.271-.54 3.281a.614 1.15 0 0 0-.008.06l-.408 3.056-.406 2.785-.398 2.491-.536 2.508a.614 1.15 0 0 0-.012.062l-.41 2.299-.396 2.223-.524 1.968a.614 1.15 0 0 0-.017.063l-.401 1.759-.401 1.5-.38 1.425-.506 1.182a.614 1.15 0 0 0-.012.028l-.408 1.023-.383.958-.308.576-.418.39-.367.231-.315.197h-.346l-.315-.197-.331-.209-.327-.405-.463-.652-.356-.889-.39-.976-.392-1.226a.614 1.15 0 0 0-.015-.047l-.525-1.472-.384-1.437-.402-1.76a.614 1.15 0 0 0-.016-.062l-.526-1.968-.395-2.223-.406-2.283-.406-2.539a.614 1.15 0 0 0-.012-.062l-.536-2.766-.402-2.751-.406-3.044-.408-3.312a.614 1.15 0 0 0-.011-.078l-.538-3.275-.403-3.52-.408-3.824-.41-3.833a.614 1.15 0 0 0-.006-.053l-.542-4.054-.404-4.049-.408-4.338a.614 1.15 0 0 0-.009-.046l-.541-4.566-.406-4.819a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.408-4.59-.41-5.1a.614 1.15 0 0 0-.005-.056l-.543-5.077-.406-5.333-.41-5.367-.407-5.364a.614 1.15 0 0 0-.003-.035l-.545-5.857-.406-5.592-.41-6.125a.614 1.15 0 0 0-.003-.056l-.544-5.848-.406-6.1-.41-6.387-.408-6.387a.614 1.15 0 0 0-.003-.044l-.544-6.362-.408-6.615-.408-6.895a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.41-6.643a.614 1.15 0 0 0-.002-.034l-.543-6.877-.408-7.13a.614 1.15 0 0 0 0-.003.614 1.15 0 0 0 0-.004l-.41-6.896a.614 1.15 0 0 0-.003-.037l-.542-7.133-.408-7.385-.41-7.41a.614 1.15 0 0 0 0-.004l-.41-7.154a.614 1.15 0 0 0-.002-.028l-.544-7.65-.408-7.389-.41-7.662-.409-7.666a.614 1.15 0 0 0-.002-.038l-.544-7.644-.408-7.644-.41-7.918a.614 1.15 0 0 0-.002-.044l-.544-7.644-.408-7.896-.41-7.922-.41-7.918a.614 1.15 0 0 0-.001-.037l-.545-7.903-.408-7.903-.41-7.918-.404-7.81.405-7.809.41-7.921.407-7.9.545-7.903a.614 1.15 0 0 0 .002-.037l.41-7.919.409-7.921.408-7.9.544-7.644a.614 1.15 0 0 0 .002-.04l.41-7.919.408-7.644.544-7.644a.614 1.15 0 0 0 .002-.037l.41-7.666.41-7.663.407-7.391.544-7.647a.614 1.15 0 0 0 .002-.028l.41-7.155a.614 1.15 0 0 0 0-.004l.41-7.41.408-7.388.542-7.13a.614 1.15 0 0 0 .003-.037l.41-6.895a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-7.13.543-6.876a.614 1.15 0 0 0 .003-.037l.41-6.64a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.407-6.896.408-6.614.544-6.363a.614 1.15 0 0 0 .003-.046l.408-6.388.41-6.384.406-6.1.544-5.85a.614 1.15 0 0 0 .003-.054l.41-6.125.406-5.595.545-5.853a.614 1.15 0 0 0 .003-.035l.408-5.364.41-5.367.405-5.333.543-5.078a.614 1.15 0 0 0 .005-.056l.41-5.099.408-4.59a.614 1.15 0 0 0 0-.005.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.406-4.818.541-4.566a.614 1.15 0 0 0 .009-.047l.408-4.338.404-4.048.542-4.054a.614 1.15 0 0 0 .006-.053l.41-3.833.408-3.824.403-3.52.538-3.275a.614 1.15 0 0 0 .011-.078l.408-3.312.406-3.044.402-2.754.536-2.763a.614 1.15 0 0 0 .012-.063l.406-2.538.406-2.283.395-2.224.526-1.97a.614 1.15 0 0 0 .016-.06l.402-1.76.384-1.437.525-1.472a.614 1.15 0 0 0 .015-.047l.393-1.228.39-.973.355-.892.463-.65.327-.405.33-.208zm-358.16 15.84h.669l.254.319a.614 1.15 0 0 0 .147.134l.271.171.307.574a.614 1.15 0 0 0 .066.106l.475.668.338.845.393 1.225.41 1.279a.614 1.15 0 0 0 .014.044l.525 1.475.378 1.413.398 1.99.41 2.042a.614 1.15 0 0 0 .024.112l.523 1.953.393 2.46.41 2.555a.614 1.15 0 0 0 .018.096l.53 2.483.399 2.99a.614 1.15 0 0 0 .003.026l.406 2.788.406 3.3a.614 1.15 0 0 0 .012.077l.538 3.275.403 3.527.408 3.568.407 3.827a.614 1.15 0 0 0 .007.053l.542 4.054.406 4.048.408 4.335a.614 1.15 0 0 0 .007.065l.54 4.307.407 4.557.408 4.846.41 4.856a.614 1.15 0 0 0 .005.056l.542 4.822.407 5.074.407 5.361.41 5.364a.614 1.15 0 0 0 .003.044l.544 5.595.407 5.595.41 5.623a.614 1.15 0 0 0 .002.04l.543 5.848.408 6.107.41 6.131.407 6.131a.614 1.15 0 0 0 .003.038l.545 6.365.408 6.365.408 6.384.41 6.64a.614 1.15 0 0 0 .002.044l.543 6.618.408 6.877.41 6.895a.614 1.15 0 0 0 .002.044l.543 6.876.408 6.874.41 7.151.41 7.155a.614 1.15 0 0 0 .001.04l.545 7.133.408 7.385.41 7.41a.614 1.15 0 0 0 0 .004l.409 7.154a.614 1.15 0 0 0 .002.028l.544 7.65.408 7.392.41 7.407.407 7.663a.614 1.15 0 0 0 .003.043l.545 7.388.408 7.641.41 7.666a.614 1.15 0 0 0 .001.037l.545 7.644.408 7.647.403 7.55-.403 7.551-.408 7.644-.545 7.647a.614 1.15 0 0 0-.002.038l-.41 7.665-.407 7.641-.545 7.388a.614 1.15 0 0 0-.003.044l-.407 7.663-.41 7.407-.408 7.391-.544 7.647a.614 1.15 0 0 0-.002.031l-.41 7.155a.614 1.15 0 0 0 0 .004l-.41 7.41-.407 7.385-.545 7.132a.614 1.15 0 0 0-.002.041l-.41 7.154-.409 7.152-.408 6.873-.543 6.877a.614 1.15 0 0 0-.003.044l-.41 6.895-.407 6.877-.543 6.618a.614 1.15 0 0 0-.003.043l-.41 6.64-.407 6.384-.408 6.365-.545 6.366a.614 1.15 0 0 0-.003.037l-.408 6.131-.41 6.132-.407 6.106-.543 5.848a.614 1.15 0 0 0-.003.04l-.41 5.624-.406 5.595-.544 5.594a.614 1.15 0 0 0-.003.044l-.41 5.364-.407 5.361-.407 5.075-.542 4.818a.614 1.15 0 0 0-.005.06l-.41 4.852-.408 4.85-.406 4.556-.541 4.307a.614 1.15 0 0 0-.007.065l-.408 4.335-.406 4.049-.542 4.054a.614 1.15 0 0 0-.007.053l-.407 3.827-.408 3.567-.403 3.528-.538 3.274a.614 1.15 0 0 0-.012.078l-.406 3.3-.406 2.788a.614 1.15 0 0 0-.003.025l-.4 2.99-.53 2.483a.614 1.15 0 0 0-.018.097l-.41 2.554-.392 2.46-.523 1.953a.614 1.15 0 0 0-.025.112l-.41 2.043-.397 1.987-.378 1.416-.525 1.475a.614 1.15 0 0 0-.015.043l-.41 1.28-.392 1.225-.338.845-.475.667a.614 1.15 0 0 0-.066.106l-.307.574-.271.172a.614 1.15 0 0 0-.147.134l-.254.318h-.67l-.273-.172-.472-.442-.327-.409-.366-.686-.385-.72-.5-1.167-.387-1.213-.388-1.21-.393-1.715a.614 1.15 0 0 0-.03-.119l-.53-1.73-.384-1.685-.401-2.255a.614 1.15 0 0 0-.022-.102l-.533-2.25-.397-2.229-.403-2.526-.408-2.794a.614 1.15 0 0 0-.01-.063l-.538-3.022-.403-3.025-.408-3.047-.406-3.555a.614 1.15 0 0 0-.01-.075l-.54-3.54-.404-3.534-.408-3.823a.614 1.15 0 0 0-.007-.053l-.541-4.054-.406-4.048-.408-4.339-.41-4.344a.614 1.15 0 0 0-.005-.047l-.54-4.569-.407-4.565-.41-4.85-.41-4.853a.614 1.15 0 0 0-.002-.047l-.543-5.077-.406-5.333a.614 1.15 0 0 0-.003-.01l-.408-5.108a.614 1.15 0 0 0-.003-.038l-.545-5.598-.406-5.34-.41-5.613-.407-5.872a.614 1.15 0 0 0-.005-.05l-.543-5.85-.408-5.852-.408-6.128-.41-6.131a.614 1.15 0 0 0-.002-.047l-.545-6.103-.406-6.363-.41-6.387-.41-6.387a.614 1.15 0 0 0-.001-.037l-.545-6.621-.408-6.621-.41-6.643a.614 1.15 0 0 0-.002-.044l-.543-6.618-.408-6.873-.41-6.899-.409-6.898a.614 1.15 0 0 0-.002-.041l-.544-6.877-.408-7.13a.614 1.15 0 0 0 0-.003.614 1.15 0 0 0 0-.004l-.41-6.896-.408-7.15a.614 1.15 0 0 0-.003-.041l-.544-7.133-.408-7.132-.41-7.155a.614 1.15 0 0 0-.002-.04l-.544-7.133-.408-7.132-.41-7.407a.614 1.15 0 0 0 0-.004l-.41-7.155a.614 1.15 0 0 0-.001-.04l-.545-7.133-.407-7.385a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l-.403-7.03.403-7.032a.614 1.15 0 0 0 0-.004l.407-7.385.545-7.133a.614 1.15 0 0 0 .002-.04l.41-7.155a.614 1.15 0 0 0 0-.004l.409-7.407.408-7.132.544-7.133a.614 1.15 0 0 0 .002-.04l.41-7.155.408-7.132.544-7.133a.614 1.15 0 0 0 .003-.04l.408-7.151.41-6.896a.614 1.15 0 0 0 0-.004.614 1.15 0 0 0 0-.004l.408-7.13.544-6.876a.614 1.15 0 0 0 .002-.04l.41-6.9.41-6.898.407-6.873.543-6.618a.614 1.15 0 0 0 .003-.044l.41-6.643.407-6.621.545-6.621a.614 1.15 0 0 0 .002-.037l.41-6.388.409-6.387.406-6.362.545-6.103a.614 1.15 0 0 0 .003-.047l.41-6.131.407-6.129.408-5.85.543-5.851a.614 1.15 0 0 0 .005-.05l.408-5.872.41-5.614.405-5.34.545-5.597a.614 1.15 0 0 0 .003-.038l.408-5.108a.614 1.15 0 0 0 .003-.01l.406-5.333.543-5.078a.614 1.15 0 0 0 .003-.046l.41-4.856.409-4.847.406-4.565.541-4.57a.614 1.15 0 0 0 .005-.05l.41-4.34.408-4.339.406-4.048.541-4.054a.614 1.15 0 0 0 .007-.053l.408-3.824.404-3.533.54-3.54a.614 1.15 0 0 0 .01-.075l.406-3.555.408-3.047.403-3.025.538-3.022a.614 1.15 0 0 0 .01-.063l.408-2.797.403-2.523.397-2.23.533-2.249a.614 1.15 0 0 0 .022-.103l.401-2.254.385-1.685.53-1.73a.614 1.15 0 0 0 .03-.119l.392-1.715.388-1.21.388-1.214.5-1.166.384-.72.366-.686.327-.409.472-.443zm417.575 0h.67l.273.172.473.443.326.408.366.687.385.72.5 1.166.387 1.214.388 1.21.393 1.715a.614 1.15 0 0 0 .03.118l.53 1.731.384 1.684.401 2.255a.614 1.15 0 0 0 .022.103l.533 2.249.398 2.23.403 2.523.407 2.797a.614 1.15 0 0 0 .01.063l.538 3.022.403 3.025.408 3.047.406 3.555a.614 1.15 0 0 0 .01.075l.54 3.54.404 3.533.408 3.824a.614 1.15 0 0 0 .007.053l.541 4.054.406 4.048.408 4.338.41 4.342a.614 1.15 0 0 0 .005.05l.54 4.568.407 4.566.41 4.847.41 4.855a.614 1.15 0 0 0 .002.047l.543 5.077.406 5.333a.614 1.15 0 0 0 .002.01l.408 5.109a.614 1.15 0 0 0 .003.037l.545 5.598.406 5.34.41 5.613.407 5.873a.614 1.15 0 0 0 .005.05l.543 5.85.408 5.851.408 6.128.41 6.132a.614 1.15 0 0 0 .003.047l.542 6.103.408 6.362.41 6.387.41 6.387a.614 1.15 0 0 0 .001.038l.545 6.62.408 6.622.41 6.643a.614 1.15 0 0 0 .002.043l.543 6.618.408 6.874.41 6.899.41 6.898a.614 1.15 0 0 0 .001.04l.545 6.877.407 7.13a.614 1.15 0 0 0 0 .006l.41 6.895.408 7.152a.614 1.15 0 0 0 .003.04l.544 7.133.408 7.132.41 7.155a.614 1.15 0 0 0 .002.04l.544 7.133.408 7.132.41 7.407a.614 1.15 0 0 0 0 .004l.408 7.154a.614 1.15 0 0 0 .003.041l.544 7.133.408 7.385a.614 1.15 0 0 0 0 .004l.403 7.032-.403 7.03a.614 1.15 0 0 0 0 .006l-.408 7.385-.544 7.133a.614 1.15 0 0 0-.003.04l-.408 7.154a.614 1.15 0 0 0 0 .004l-.41 7.407-.408 7.133-.544 7.132a.614 1.15 0 0 0-.002.041l-.41 7.154-.408 7.133-.544 7.132a.614 1.15 0 0 0-.003.04l-.408 7.152-.41 6.896a.614 1.15 0 0 0 0 .006l-.407 7.129-.545 6.877a.614 1.15 0 0 0-.002.04l-.41 6.899-.409 6.899-.408 6.873-.543 6.618a.614 1.15 0 0 0-.003.044l-.41 6.643-.407 6.62-.545 6.622a.614 1.15 0 0 0-.002.037l-.41 6.387-.409 6.387-.408 6.362-.542 6.104a.614 1.15 0 0 0-.003.047l-.41 6.131-.408 6.128-.408 5.851-.543 5.85a.614 1.15 0 0 0-.005.05l-.408 5.873-.41 5.614-.405 5.339-.545 5.598a.614 1.15 0 0 0-.003.037l-.408 5.109a.614 1.15 0 0 0-.002.01l-.406 5.333-.543 5.077a.614 1.15 0 0 0-.003.047l-.41 4.853-.409 4.85-.406 4.565-.541 4.569a.614 1.15 0 0 0-.005.047l-.41 4.344-.408 4.338-.406 4.048-.541 4.055a.614 1.15 0 0 0-.007.053l-.408 3.823-.404 3.534-.54 3.54a.614 1.15 0 0 0-.01.074l-.406 3.556-.408 3.047-.403 3.025-.538 3.022a.614 1.15 0 0 0-.01.062l-.407 2.795-.403 2.526-.398 2.23-.533 2.248a.614 1.15 0 0 0-.022.103l-.4 2.255-.385 1.684-.53 1.73a.614 1.15 0 0 0-.03.12l-.393 1.715-.388 1.21-.388 1.213-.5 1.166-.384.72-.366.687-.326.408-.473.443-.273.172h-.67l-.254-.32a.614 1.15 0 0 0-.147-.135l-.271-.171-.307-.574a.614 1.15 0 0 0-.066-.106l-.475-.668-.338-.845-.392-1.225-.41-1.28a.614 1.15 0 0 0-.015-.043l-.525-1.475-.377-1.416-.398-1.986-.41-2.043a.614 1.15 0 0 0-.025-.112l-.523-1.953-.393-2.46-.41-2.555a.614 1.15 0 0 0-.018-.096l-.529-2.483-.4-2.99a.614 1.15 0 0 0-.003-.026l-.406-2.788-.406-3.3a.614 1.15 0 0 0-.012-.077l-.537-3.275-.403-3.527-.408-3.568-.41-3.827a.614 1.15 0 0 0-.005-.053l-.54-4.054-.407-4.048-.408-4.335a.614 1.15 0 0 0-.009-.066l-.541-4.307-.406-4.556-.408-4.85-.41-4.852a.614 1.15 0 0 0-.005-.06l-.543-4.818-.406-5.074-.408-5.361-.41-5.364a.614 1.15 0 0 0-.002-.044l-.545-5.595-.406-5.595-.41-5.623a.614 1.15 0 0 0-.002-.04l-.543-5.848-.408-6.107-.41-6.131-.408-6.131a.614 1.15 0 0 0-.003-.038l-.544-6.365-.408-6.365-.408-6.384-.41-6.64a.614 1.15 0 0 0-.002-.044l-.543-6.618-.408-6.876-.41-6.896a.614 1.15 0 0 0-.003-.043l-.542-6.877-.408-6.874-.41-7.151-.41-7.154a.614 1.15 0 0 0-.001-.041l-.545-7.132-.408-7.386-.41-7.41a.614 1.15 0 0 0 0-.004l-.409-7.154a.614 1.15 0 0 0-.002-.031l-.544-7.647-.408-7.392-.41-7.407-.41-7.662a.614 1.15 0 0 0-.001-.044l-.545-7.388-.408-7.641-.41-7.666a.614 1.15 0 0 0-.001-.037l-.545-7.647-.408-7.644-.403-7.55.403-7.551.408-7.647.545-7.644a.614 1.15 0 0 0 .002-.037l.41-7.666.407-7.641.545-7.388a.614 1.15 0 0 0 .002-.044l.41-7.663.409-7.407.408-7.39.544-7.651a.614 1.15 0 0 0 .002-.028l.41-7.155a.614 1.15 0 0 0 0-.004l.41-7.41.407-7.385.545-7.132a.614 1.15 0 0 0 .002-.04l.41-7.155.409-7.151.408-6.874.542-6.877a.614 1.15 0 0 0 .003-.043l.41-6.896.408-6.877.543-6.618a.614 1.15 0 0 0 .003-.043l.41-6.64.407-6.384.408-6.365.544-6.366a.614 1.15 0 0 0 .003-.037l.408-6.131.41-6.132.408-6.106.543-5.848a.614 1.15 0 0 0 .002-.04l.41-5.624.406-5.594.545-5.595a.614 1.15 0 0 0 .003-.044l.41-5.364.407-5.361.406-5.074.543-4.822a.614 1.15 0 0 0 .005-.056l.41-4.856.408-4.847.406-4.556.541-4.307a.614 1.15 0 0 0 .009-.065l.408-4.335.406-4.049.541-4.054a.614 1.15 0 0 0 .005-.053l.41-3.827.408-3.567.403-3.528.537-3.274a.614 1.15 0 0 0 .012-.078l.406-3.3.406-2.788a.614 1.15 0 0 0 .003-.025l.4-2.99.53-2.483a.614 1.15 0 0 0 .018-.097l.41-2.554.392-2.46.523-1.953a.614 1.15 0 0 0 .025-.112l.41-2.043.398-1.99L6 91.525l.524-1.475a.614 1.15 0 0 0 .015-.043l.41-1.279.392-1.226.338-.845.475-.667a.614 1.15 0 0 0 .066-.106l.307-.574.271-.172a.614 1.15 0 0 0 .147-.134z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 1.16668,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          id="c-band"
          d="m-423.25 153.457-.411.002a.615 1.172 0 0 0-.369.232l-.546.782a.615 1.172 0 0 0-.124.236l-.408 1.043a.615 1.172 0 0 0-.059.178l-.41 1.561a.615 1.172 0 0 0-.025.115l-.41 2.083a.615 1.172 0 0 0 0 .013l-.548 2.865a.615 1.172 0 0 0-.018.115l-.41 3.126a.615 1.172 0 0 0-.007.054l-.41 3.908a.615 1.172 0 0 0 0 .016l-.409 4.147-.543 4.672a.615 1.172 0 0 0-.01.08l-.41 5.211a.615 1.172 0 0 0 0 .023l-.41 5.99-.409 5.98-.545 6.757a.615 1.172 0 0 0-.003.051l-.41 7.034a.615 1.172 0 0 0 0 .007l-.409 7.54-.545 8.062a.615 1.172 0 0 0-.003.041l-.408 8.338a.615 1.172 0 0 0-.001.002l-.409 8.596a.615 1.172 0 0 0 0 .007l-.41 9.101-.545 9.366a.615 1.172 0 0 0-.001.035l-.41 9.639a.615 1.172 0 0 0 0 .002l-.41 10.16-.409 10.148-.545 10.408a.615 1.172 0 0 0-.001.032l-.41 10.942-.41 10.927-.546 10.927a.615 1.172 0 0 0 0 .031l-.409 11.461-.41 11.204-.41 11.451-.545 11.71a.615 1.172 0 0 0-.001.025l-.409 11.46a.615 1.172 0 0 0 0 .003l-.41 11.722a.615 1.172 0 0 0 .035.079.615 1.172 0 0 0-.035.076l.41 11.725.409 11.464a.615 1.172 0 0 0 0 .023l.546 11.712.41 11.451.41 11.204.408 11.46a.615 1.172 0 0 0 .001.032l.547 10.927.409 10.927.41 10.943a.615 1.172 0 0 0 0 .031l.546 10.409.409 10.147.41 10.16a.615 1.172 0 0 0 0 .003l.41 9.638a.615 1.172 0 0 0 0 .035l.546 9.366.41 9.101a.615 1.172 0 0 0 0 .007l.409 8.596a.615 1.172 0 0 0 0 .002l.41 8.338a.615 1.172 0 0 0 .002.041l.545 8.059.409 7.543a.615 1.172 0 0 0 0 .007l.41 7.034a.615 1.172 0 0 0 .003.048l.545 6.76.409 5.98.41 5.99a.615 1.172 0 0 0 0 .023l.41 5.212a.615 1.172 0 0 0 .01.08l.543 4.67.409 4.148a.615 1.172 0 0 0 0 .016l.41 3.905a.615 1.172 0 0 0 .007.057l.41 3.126a.615 1.172 0 0 0 .018.115l.547 2.865a.615 1.172 0 0 0 .001.013l.41 2.083a.615 1.172 0 0 0 .025.115l.41 1.561a.615 1.172 0 0 0 .059.178l.41 1.043a.615 1.172 0 0 0 .122.236l.546.782a.615 1.172 0 0 0 .369.232h.41a.615 1.172 0 0 0 .435-.343l.409-.78.547-1.043a.615 1.172 0 0 0 .115-.305l.41-1.561a.615 1.172 0 0 0 .025-.115l.41-2.083a.615 1.172 0 0 0 .016-.105l.407-2.833.54-3.094a.615 1.172 0 0 0 .02-.143l.41-3.906a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01l.41-4.166a.615 1.172 0 0 0 .002-.025l.408-4.675.545-5.457a.615 1.172 0 0 0 .005-.06l.41-5.734a.615 1.172 0 0 0 .003-.013l.409-6.233.543-6.49a.615 1.172 0 0 0 .005-.061l.41-7.295.409-7.295a.615 1.172 0 0 0 .001-.013l.408-8.059.546-8.319a.615 1.172 0 0 0 .003-.041l.408-8.596a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.117a.615 1.172 0 0 0 0-.002l.41-9.365.546-9.887a.615 1.172 0 0 0 0-.032l.41-9.9.41-10.147.544-10.67a.615 1.172 0 0 0 .001-.028l.41-10.682a.615 1.172 0 0 0 0-.002l.41-10.94.41-10.93.546-11.45a.615 1.172 0 0 0 0-.026l.41-11.204.41-11.464.409-11.709.343-7.2.344 7.2.41 11.71.408 11.463.41 11.204a.615 1.172 0 0 0 .001.025l.546 11.191.41 11.187a.615 1.172 0 0 0 0 .002l.408 10.94a.615 1.172 0 0 0 0 .002l.41 10.682a.615 1.172 0 0 0 .001.028l.545 10.409.41 10.147.41 10.16a.615 1.172 0 0 0 0 .003l.41 9.639a.615 1.172 0 0 0 0 .035l.547 9.365.409 8.844a.615 1.172 0 0 0 0 .002l.41 8.595a.615 1.172 0 0 0 0 .042l.546 8.319.41 8.061a.615 1.172 0 0 0 0 .01l.41 7.295a.615 1.172 0 0 0 0 .007l.41 7.032a.615 1.172 0 0 0 .003.05l.545 6.755.409 6.236a.615 1.172 0 0 0 0 .022l.41 5.47.41 5.47a.615 1.172 0 0 0 .008.089l.544 4.671.408 4.15a.615 1.172 0 0 0 .003.029l.41 3.648a.615 1.172 0 0 0 .017.124l.542 3.094.405 2.836a.615 1.172 0 0 0 .017.102l.41 2.083a.615 1.172 0 0 0 .027.115l.408 1.561a.615 1.172 0 0 0 .115.305l.547 1.043a.615 1.172 0 0 0 .092.147l.41.521a.615 1.172 0 0 0 .342.197h.408a.615 1.172 0 0 0 .435-.343l.41-.782.546-1.044a.615 1.172 0 0 0 .115-.305l.41-1.561a.615 1.172 0 0 0 .033-.153l.405-2.312.539-2.572a.615 1.172 0 0 0 .028-.175l.41-3.384a.615 1.172 0 0 0 .001-.019l.41-3.647a.615 1.172 0 0 0 .006-.029l.408-4.156.545-4.936a.615 1.172 0 0 0 .005-.07l.41-5.209a.615 1.172 0 0 0 .001-.019l.41-5.73a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-6.233.545-6.494a.615 1.172 0 0 0 .003-.06l.41-7.296a.615 1.172 0 0 0 0-.002l.41-7.536.544-7.798a.615 1.172 0 0 0 .003-.048l.41-8.335a.615 1.172 0 0 0 0-.002l.41-8.599a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-9.101.545-9.101a.615 1.172 0 0 0 .003-.038l.408-9.9.41-9.9a.615 1.172 0 0 0 0-.002l.41-10.147.546-10.405a.615 1.172 0 0 0 0-.032l.41-10.682.41-10.682a.615 1.172 0 0 0 0-.002l.41-11.187.545-11.188a.615 1.172 0 0 0 0-.028l.41-11.2a.615 1.172 0 0 0 0-.002l.409-11.449.545-11.451a.615 1.172 0 0 0 0-.026l.236-6.576.315 6.59.408 11.447.41 11.465a.615 1.172 0 0 0 0 .002l.41 11.2a.615 1.172 0 0 0 0 .028l.548 11.188.408 10.93a.615 1.172 0 0 0 0 .002l.41 10.678a.615 1.172 0 0 0 .001.03l.545 10.668.41 10.148.409 10.16a.615 1.172 0 0 0 0 .002l.41 9.9a.615 1.172 0 0 0 .001.032l.545 9.626.41 9.108.41 8.86a.615 1.172 0 0 0 0 .001l.409 8.596a.615 1.172 0 0 0 .003.044l.545 8.059.409 7.797a.615 1.172 0 0 0 0 .01l.41 7.295a.615 1.172 0 0 0 .003.048l.545 7.015.408 6.497a.615 1.172 0 0 0 .001.017l.409 5.991a.615 1.172 0 0 0 0 .007l.41 5.734a.615 1.172 0 0 0 .006.07l.546 5.196.408 4.417a.615 1.172 0 0 0 .001.013l.41 4.166a.615 1.172 0 0 0 .001.032l.41 3.647a.615 1.172 0 0 0 .019.124l.543 3.11.407 2.589a.615 1.172 0 0 0 .013.073l.41 2.083a.615 1.172 0 0 0 .064.242l.547 1.561a.615 1.172 0 0 0 .02.054l.408 1.04a.615 1.172 0 0 0 .152.274l.41.521a.615 1.172 0 0 0 .535.137l.408-.26a.615 1.172 0 0 0 .082-.064l.545-.522a.615 1.172 0 0 0 .217-.343l.41-1.043a.615 1.172 0 0 0 .073-.242l.41-1.825a.615 1.172 0 0 0 .01-.048l.41-2.086a.615 1.172 0 0 0 .002-.01l.546-2.866a.615 1.172 0 0 0 .019-.117l.41-3.126a.615 1.172 0 0 0 .005-.038l.408-3.648a.615 1.172 0 0 0 .005-.041l.407-4.405.544-4.662a.615 1.172 0 0 0 .009-.082l.41-5.21a.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.001.615 1.172 0 0 0 0-.007l.408-5.712.545-5.969a.615 1.172 0 0 0 .005-.066l.41-6.774.41-6.774a.615 1.172 0 0 0 0-.013l.409-7.537.545-7.8a.615 1.172 0 0 0 .005-.042l.408-8.074a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.599a.615 1.172 0 0 0 0-.002l.41-8.843.546-9.366a.615 1.172 0 0 0 0-.031l.407-9.375a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-9.884.545-9.884a.615 1.172 0 0 0 .001-.035l.41-10.42.41-10.422.409-10.67.547-10.665a.615 1.172 0 0 0 0-.032l.41-11.2.41-10.943.408-11.19.547-11.188a.615 1.172 0 0 0 0-.028l.275-7.683.275 7.683a.615 1.172 0 0 0 0 .002l.41 11.2a.615 1.172 0 0 0 0 .002l.41 10.94a.615 1.172 0 0 0 0 .025l.545 11.19.41 10.93.41 10.682a.615 1.172 0 0 0 0 .002l.409 10.418a.615 1.172 0 0 0 .003.032l.547 10.405.408 10.148a.615 1.172 0 0 0 0 .002l.41 9.9a.615 1.172 0 0 0 .001.03l.546 9.627.408 9.362a.615 1.172 0 0 0 .001.007l.409 8.857.41 8.86a.615 1.172 0 0 0 0 .04l.548 8.323.408 7.8.41 7.817a.615 1.172 0 0 0 0 .013l.41 7.032a.615 1.172 0 0 0 .003.05l.545 6.755.409 6.494a.615 1.172 0 0 0 0 .016l.41 5.734a.615 1.172 0 0 0 0 .007l.41 5.47a.615 1.172 0 0 0 .007.076l.544 4.926.408 4.665a.615 1.172 0 0 0 .003.038l.41 3.905a.615 1.172 0 0 0 .012.092l.545 3.642.409 2.858a.615 1.172 0 0 0 .005.03l.408 2.604a.615 1.172 0 0 0 .025.124l.409 1.825a.615 1.172 0 0 0 .055.188l.545 1.564a.615 1.172 0 0 0 .02.051l.41 1.043a.615 1.172 0 0 0 .297.41l.41.261a.615 1.172 0 0 0 .195.057h.408a.615 1.172 0 0 0 .275-.12l.547-.522a.615 1.172 0 0 0 .252-.445l.41-1.304a.615 1.172 0 0 0 .022-.08l.41-1.56.547-2.087a.615 1.172 0 0 0 .043-.213l.41-2.868a.615 1.172 0 0 0 .003-.023l.409-3.126a.615 1.172 0 0 0 .005-.038l.408-3.628.544-4.15a.615 1.172 0 0 0 .01-.092l.41-4.688a.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.01l.41-5.212a.615 1.172 0 0 0 .001-.007l.408-5.454.544-5.975a.615 1.172 0 0 0 .005-.06l.41-6.513a.615 1.172 0 0 0 0-.002l.409-6.758.545-7.28a.615 1.172 0 0 0 .003-.044l.41-7.555a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.075a.615 1.172 0 0 0 0-.002l.409-8.322.545-8.58a.615 1.172 0 0 0 .003-.041l.408-9.117.41-9.118a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.626.546-9.883a.615 1.172 0 0 0 0-.032l.41-9.9.409-10.147.545-10.409a.615 1.172 0 0 0 0-.028l.41-10.682.411-10.682a.615 1.172 0 0 0 0-.002l.408-10.924.546-10.666a.615 1.172 0 0 0 0-.031l.41-10.943.278-7.543.271 7.285.41 10.94.41 10.943a.615 1.172 0 0 0 .002.028l.545 10.67.408 10.665a.615 1.172 0 0 0 0 .002l.41 10.418a.615 1.172 0 0 0 .001.032l.546 10.148.41 10.144a.615 1.172 0 0 0 0 .002l.41 9.896a.615 1.172 0 0 0 0 .002l.408 9.64a.615 1.172 0 0 0 .003.037l.545 9.102.409 9.101a.615 1.172 0 0 0 0 .002l.41 8.86a.615 1.172 0 0 0 0 .007l.41 8.335a.615 1.172 0 0 0 .001.041l.545 8.058.409 7.798a.615 1.172 0 0 0 0 .01l.41 7.295a.615 1.172 0 0 0 .002.048l.545 7.015.409 6.755a.615 1.172 0 0 0 0 .016l.411 5.991a.615 1.172 0 0 0 0 .007l.41 5.73a.615 1.172 0 0 0 .007.074l.545 5.187.407 4.925a.615 1.172 0 0 0 .001.023l.41 4.426a.615 1.172 0 0 0 .003.026l.409 3.908a.615 1.172 0 0 0 .016.115l.542 3.37.409 2.847a.615 1.172 0 0 0 .01.063l.408 2.344a.615 1.172 0 0 0 .034.153l.546 2.086a.615 1.172 0 0 0 .024.076l.408 1.304a.615 1.172 0 0 0 .037.102l.409 1.04a.615 1.172 0 0 0 .298.41l.408.26a.615 1.172 0 0 0 .192.061h.547a.615 1.172 0 0 0 .434-.343l.41-.782a.615 1.172 0 0 0 .056-.128l.41-1.04a.615 1.172 0 0 0 .059-.18l.41-1.562.545-2.086a.615 1.172 0 0 0 .04-.185l.41-2.607a.615 1.172 0 0 0 .01-.051l.406-3.107.544-3.629a.615 1.172 0 0 0 .013-.108l.41-4.166a.615 1.172 0 0 0 .001-.013l.409-4.43a.615 1.172 0 0 0 .003-.019l.406-4.932.546-5.454a.615 1.172 0 0 0 .005-.06l.41-5.731a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.002l.41-6.252a.615 1.172 0 0 0 0-.013l.41-6.755.543-7.015a.615 1.172 0 0 0 .003-.05l.41-7.557.41-7.552a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.316.545-8.32a.615 1.172 0 0 0 .001-.04l.41-8.596a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.102.544-9.365a.615 1.172 0 0 0 .001-.032l.41-9.378a.615 1.172 0 0 0 0-.002l.41-9.639a.615 1.172 0 0 0 0-.002l.409-9.883.547-10.148a.615 1.172 0 0 0 0-.031l.41-10.422.41-10.157a.615 1.172 0 0 0 0-.002l.408-10.666.547-10.405a.615 1.172 0 0 0 0-.032l.41-10.681.274-7.159.275 7.159a.615 1.172 0 0 0 0 .002l.41 10.42a.615 1.172 0 0 0 0 .026l.547 10.67.409 10.404a.615 1.172 0 0 0 0 .002l.41 10.16.41 10.161a.615 1.172 0 0 0 .001.032l.545 9.884.409 9.883a.615 1.172 0 0 0 0 .007l.41 9.378a.615 1.172 0 0 0 0 .032l.546 9.365.41 9.102a.615 1.172 0 0 0 0 .002l.409 8.86a.615 1.172 0 0 0 0 .006l.41 8.335a.615 1.172 0 0 0 .002.035l.545 8.323.409 7.8a.615 1.172 0 0 0 0 .007l.41 7.553a.615 1.172 0 0 0 0 .01l.41 7.034a.615 1.172 0 0 0 .003.048l.545 6.758.409 6.236a.615 1.172 0 0 0 0 .01l.41 5.988a.615 1.172 0 0 0 .005.06l.545 5.718.408 4.936a.615 1.172 0 0 0 0 .013l.41 4.687a.615 1.172 0 0 0 .002.014l.41 4.426a.615 1.172 0 0 0 .013.118l.542 3.619.407 3.358a.615 1.172 0 0 0 .005.044l.41 2.866a.615 1.172 0 0 0 .01.063l.41 2.344a.615 1.172 0 0 0 .048.21l.547 1.825a.615 1.172 0 0 0 .007.023l.41 1.3a.615 1.172 0 0 0 .092.226l.41.782a.615 1.172 0 0 0 .093.147l.41.521a.615 1.172 0 0 0 .34.197h.547a.615 1.172 0 0 0 .436-.343l.41-.782a.615 1.172 0 0 0 .056-.124l.41-1.044a.615 1.172 0 0 0 .019-.054l.547-1.561a.615 1.172 0 0 0 .065-.239l.408-2.086a.615 1.172 0 0 0 .014-.073l.41-2.607a.615 1.172 0 0 0 .005-.026l.407-2.85.543-3.367a.615 1.172 0 0 0 .017-.13l.408-4.166.41-4.17a.615 1.172 0 0 0 .003-.03l.409-4.93.543-5.187a.615 1.172 0 0 0 .007-.07l.409-5.73a.615 1.172 0 0 0 0-.007l.41-5.976.543-6.496a.615 1.172 0 0 0 .007-.051l.408-6.774a.615 1.172 0 0 0 .001-.01l.41-7.295.409-7.28.545-8.064a.615 1.172 0 0 0 .001-.038l.41-8.074a.615 1.172 0 0 0 0-.002l.41-8.338a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.84.546-9.105a.615 1.172 0 0 0 0-.032l.41-9.117a.615 1.172 0 0 0 0-.002l.409-9.366.545-9.623a.615 1.172 0 0 0 0-.035l.41-9.9.411-9.899.409-9.887.545-10.144a.615 1.172 0 0 0 0-.032l.41-10.42.411-10.158a.615 1.172 0 0 0 0-.002l.277-7.04.273 6.782a.615 1.172 0 0 0 0 .026l.547 10.408.408 10.148.41 10.157a.615 1.172 0 0 0 0 .002l.41 9.9a.615 1.172 0 0 0 0 .031l.548 9.884.408 9.626a.615 1.172 0 0 0 0 .002l.41 9.378.41 9.378a.615 1.172 0 0 0 .001.035l.546 9.105.408 8.84a.615 1.172 0 0 0 0 .007l.41 8.338.41 8.335a.615 1.172 0 0 0 .001.042l.545 8.061.41 7.54a.615 1.172 0 0 0 0 .002l.41 7.295a.615 1.172 0 0 0 .002.048l.545 7.018.41 6.494a.615 1.172 0 0 0 0 .007l.41 6.252a.615 1.172 0 0 0 0 .013l.41 5.734a.615 1.172 0 0 0 .005.06l.545 5.451.407 4.932a.615 1.172 0 0 0 .001.01l.41 4.691a.615 1.172 0 0 0 .001.022l.41 4.17a.615 1.172 0 0 0 .014.104l.543 3.629.407 3.107a.615 1.172 0 0 0 .003.025l.41 2.866a.615 1.172 0 0 0 .03.168l.545 2.337.409 1.816a.615 1.172 0 0 0 .038.14l.409 1.304a.615 1.172 0 0 0 .037.102l.408 1.04a.615 1.172 0 0 0 .344.435l.545.261a.615 1.172 0 0 0 .15.035h.41a.615 1.172 0 0 0 .34-.197l.41-.522a.615 1.172 0 0 0 .15-.273l.41-1.04a.615 1.172 0 0 0 .02-.054l.547-1.565a.615 1.172 0 0 0 .053-.187l.409-1.823a.615 1.172 0 0 0 .025-.127l.403-2.572.542-2.834a.615 1.172 0 0 0 .02-.137l.41-3.386a.615 1.172 0 0 0 .001-.02l.41-3.644a.615 1.172 0 0 0 .005-.044l.407-4.401.544-4.666a.615 1.172 0 0 0 .007-.07l.41-4.95a.615 1.172 0 0 0 0-.017l.41-5.473a.615 1.172 0 0 0 0-.013l.409-5.973.545-6.23a.615 1.172 0 0 0 .003-.054l.41-6.512a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.408-7.016.546-7.276a.615 1.172 0 0 0 .003-.05l.41-7.814.41-7.817a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.408-8.322.546-8.58a.615 1.172 0 0 0 0-.035l.41-8.599a.615 1.172 0 0 0 0-.002l.41-9.12.41-9.102.545-9.365a.615 1.172 0 0 0 .003-.035l.408-9.639.41-9.638a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.88.545-9.885a.615 1.172 0 0 0 .001-.031l.409-9.9a.615 1.172 0 0 0 0-.002l.41-10.144.315-5.855.235 5.839a.615 1.172 0 0 0 .001.031l.545 9.884.409 10.145a.615 1.172 0 0 0 0 .002l.41 9.9.41 9.638a.615 1.172 0 0 0 .001.032l.545 9.623.409 9.622a.615 1.172 0 0 0 0 .01l.41 9.118a.615 1.172 0 0 0 0 .035l.547 9.101.409 9.101a.615 1.172 0 0 0 0 .007l.41 8.596a.615 1.172 0 0 0 0 .002l.41 8.335a.615 1.172 0 0 0 0 .042l.546 8.058.409 7.8a.615 1.172 0 0 0 0 .003l.41 7.556a.615 1.172 0 0 0 0 .002l.41 7.295a.615 1.172 0 0 0 .003.054l.545 6.754.408 6.49a.615 1.172 0 0 0 0 .008l.41 6.252a.615 1.172 0 0 0 .008.067l.545 5.71.408 5.194a.615 1.172 0 0 0 0 .01l.41 4.948a.615 1.172 0 0 0 0 .01l.41 4.69a.615 1.172 0 0 0 .01.093l.544 4.147.408 3.628a.615 1.172 0 0 0 .005.038l.409 3.126a.615 1.172 0 0 0 .003.026l.41 2.865a.615 1.172 0 0 0 .032.169l.545 2.337.407 1.816a.615 1.172 0 0 0 .038.14l.41 1.303a.615 1.172 0 0 0 .092.226l.547 1.043a.615 1.172 0 0 0 .24.283l.41.261a.615 1.172 0 0 0 .193.06h.41a.615 1.172 0 0 0 .342-.197l.409-.521a.615 1.172 0 0 0 .028-.038l.547-.782a.615 1.172 0 0 0 .18-.414l.41-1.561a.615 1.172 0 0 0 .015-.064l.41-1.822a.615 1.172 0 0 0 .019-.092l.401-2.331.544-2.85a.615 1.172 0 0 0 .021-.137l.409-3.386a.615 1.172 0 0 0 .003-.02l.408-3.647a.615 1.172 0 0 0 .005-.029l.409-4.14.542-4.404a.615 1.172 0 0 0 .01-.086l.408-4.948a.615 1.172 0 0 0 .001-.02l.409-5.447.543-5.708a.615 1.172 0 0 0 .005-.067l.41-6.252a.615 1.172 0 0 0 0-.002l.41-6.513a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-6.758.546-7.279a.615 1.172 0 0 0 0-.044l.41-7.556a.615 1.172 0 0 0 0-.002l.411-7.817a.615 1.172 0 0 0 0-.002l.409-8.058.545-8.322a.615 1.172 0 0 0 .003-.045l.41-8.856.408-8.844.545-9.101a.615 1.172 0 0 0 .001-.035l.41-9.118a.615 1.172 0 0 0 0-.002l.41-9.378a.615 1.172 0 0 0 0-.002l.41-9.623.544-9.886a.615 1.172 0 0 0 .001-.029l.41-9.639a.615 1.172 0 0 0 0-.002l.41-10.16.41-9.88.343-6.243.345 6.242.408 9.88.41 10.161a.615 1.172 0 0 0 0 .002l.41 9.639a.615 1.172 0 0 0 .001.029l.546 9.886.408 9.623a.615 1.172 0 0 0 0 .002l.41 9.378a.615 1.172 0 0 0 0 .002l.41 9.118a.615 1.172 0 0 0 .001.035l.546 9.101.408 8.844.41 8.856a.615 1.172 0 0 0 .003.045l.545 8.322.409 8.058a.615 1.172 0 0 0 0 .002l.41 7.817a.615 1.172 0 0 0 0 .002l.41 7.556a.615 1.172 0 0 0 .001.044l.545 7.28.41 6.757a.615 1.172 0 0 0 0 .007l.41 6.513a.615 1.172 0 0 0 0 .002l.41 6.252a.615 1.172 0 0 0 .006.067l.543 5.708.409 5.447a.615 1.172 0 0 0 0 .02l.41 4.948a.615 1.172 0 0 0 .01.086l.541 4.404.408 4.14a.615 1.172 0 0 0 .001.029l.41 3.648a.615 1.172 0 0 0 .004.019l.408 3.386a.615 1.172 0 0 0 .022.137l.543 2.85.407 2.33a.615 1.172 0 0 0 .018.093l.41 1.822a.615 1.172 0 0 0 .015.064l.41 1.561a.615 1.172 0 0 0 .18.414l.548.782a.615 1.172 0 0 0 .028.038l.408.521a.615 1.172 0 0 0 .342.198h.41a.615 1.172 0 0 0 .194-.06l.41-.262a.615 1.172 0 0 0 .24-.283l.547-1.043a.615 1.172 0 0 0 .092-.226l.41-1.303a.615 1.172 0 0 0 .038-.14l.407-1.816.545-2.337a.615 1.172 0 0 0 .032-.169l.41-2.865a.615 1.172 0 0 0 .003-.026l.408-3.126a.615 1.172 0 0 0 .005-.038l.409-3.628.543-4.147a.615 1.172 0 0 0 .01-.092l.41-4.69a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-4.948a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-5.193.545-5.711a.615 1.172 0 0 0 .005-.067l.41-6.252a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-6.49.545-6.755a.615 1.172 0 0 0 .003-.055l.41-7.295a.615 1.172 0 0 0 0-.002l.41-7.555a.615 1.172 0 0 0 0-.002l.409-7.801.545-8.059a.615 1.172 0 0 0 0-.04l.411-8.336a.615 1.172 0 0 0 0-.002l.41-8.596a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-9.101.546-9.101a.615 1.172 0 0 0 .001-.035l.409-9.118a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.623.545-9.622a.615 1.172 0 0 0 .001-.032l.41-9.639.41-9.9a.615 1.172 0 0 0 0-.002l.409-10.144.545-9.884a.615 1.172 0 0 0 .001-.031l.235-5.84.315 5.855.41 10.145a.615 1.172 0 0 0 0 .002l.409 9.9a.615 1.172 0 0 0 0 .028l.546 9.884.41 9.883a.615 1.172 0 0 0 0 .002l.41 9.64.409 9.638a.615 1.172 0 0 0 0 .035l.548 9.365.408 9.102.41 9.12a.615 1.172 0 0 0 0 .002l.41 8.6a.615 1.172 0 0 0 .001.034l.546 8.58.408 8.322a.615 1.172 0 0 0 0 .007l.41 7.817.41 7.813a.615 1.172 0 0 0 .003.051l.546 7.276.408 7.015a.615 1.172 0 0 0 0 .014l.41 6.512a.615 1.172 0 0 0 .005.051l.545 6.23.409 5.972a.615 1.172 0 0 0 0 .017l.41 5.473a.615 1.172 0 0 0 0 .016l.41 4.951a.615 1.172 0 0 0 .007.07l.544 4.666.407 4.4a.615 1.172 0 0 0 .005.045l.41 3.644a.615 1.172 0 0 0 0 .02l.411 3.386a.615 1.172 0 0 0 .02.137l.542 2.834.403 2.572a.615 1.172 0 0 0 .025.127l.409 1.823a.615 1.172 0 0 0 .053.187l.547 1.565a.615 1.172 0 0 0 .02.054l.41 1.04a.615 1.172 0 0 0 .15.273l.41.522a.615 1.172 0 0 0 .34.197h.41a.615 1.172 0 0 0 .149-.035l.546-.26a.615 1.172 0 0 0 .344-.436l.408-1.04a.615 1.172 0 0 0 .037-.102l.409-1.304a.615 1.172 0 0 0 .038-.14l.409-1.816.545-2.337a.615 1.172 0 0 0 .03-.168l.41-2.866a.615 1.172 0 0 0 .003-.025l.407-3.107.543-3.628a.615 1.172 0 0 0 .013-.106l.41-4.169a.615 1.172 0 0 0 .002-.022l.41-4.69a.615 1.172 0 0 0 0-.01l.408-4.933.545-5.45a.615 1.172 0 0 0 .005-.061l.41-5.734a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-6.252a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-6.493.544-7.019a.615 1.172 0 0 0 .003-.048l.41-7.295a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-7.54.545-8.061a.615 1.172 0 0 0 .001-.041l.41-8.335.41-8.339a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-8.84.545-9.105a.615 1.172 0 0 0 .001-.035l.41-9.378.41-9.378a.615 1.172 0 0 0 0-.002l.409-9.626.547-9.884a.615 1.172 0 0 0 0-.031l.41-9.9a.615 1.172 0 0 0 0-.002l.41-10.157.408-10.148.547-10.408a.615 1.172 0 0 0 0-.025l.274-6.784.276 7.041a.615 1.172 0 0 0 0 .002l.41 10.157.41 10.421a.615 1.172 0 0 0 .002.032l.545 10.144.408 9.887.41 9.9.41 9.9a.615 1.172 0 0 0 .002.035l.545 9.622.408 9.366a.615 1.172 0 0 0 .001.002l.409 9.117a.615 1.172 0 0 0 0 .032l.546 9.104.41 8.84a.615 1.172 0 0 0 0 .008l.41 8.338a.615 1.172 0 0 0 0 .007l.41 8.074a.615 1.172 0 0 0 .001.035l.545 8.065.409 7.28.41 7.294a.615 1.172 0 0 0 .001.013l.409 6.774a.615 1.172 0 0 0 .003.05l.545 6.498.408 5.975a.615 1.172 0 0 0 .001.007l.409 5.73a.615 1.172 0 0 0 .007.07l.543 5.187.409 4.93a.615 1.172 0 0 0 .003.031l.41 4.17.408 4.165a.615 1.172 0 0 0 .017.13l.544 3.368.406 2.85a.615 1.172 0 0 0 .005.025l.41 2.608a.615 1.172 0 0 0 .025.025.615 1.172 0 0 0-.011.048l.408 2.086a.615 1.172 0 0 0 .065.238l.547 1.562a.615 1.172 0 0 0 .018.054l.41 1.043a.615 1.172 0 0 0 .057.124l.41.782a.615 1.172 0 0 0 .435.344h.547a.615 1.172 0 0 0 .34-.197l.41-.522a.615 1.172 0 0 0 .094-.146l.41-.782a.615 1.172 0 0 0 .092-.226l.41-1.3a.615 1.172 0 0 0 .009-.023l.547-1.825a.615 1.172 0 0 0 .048-.21l.41-2.344a.615 1.172 0 0 0 .01-.064l.41-2.865a.615 1.172 0 0 0 .006-.045l.407-3.358.542-3.619a.615 1.172 0 0 0 .013-.117l.41-4.427a.615 1.172 0 0 0 .001-.016l.41-4.688a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-4.935.545-5.718a.615 1.172 0 0 0 .005-.057l.41-5.992a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-6.236.545-6.757a.615 1.172 0 0 0 .003-.048l.41-7.035a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.001.615 1.172 0 0 0 0-.002l.41-7.553a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-7.8.545-8.323a.615 1.172 0 0 0 .003-.035l.408-8.335a.615 1.172 0 0 0 .002-.007l.409-8.86a.615 1.172 0 0 0 0-.002l.41-9.101.545-9.366a.615 1.172 0 0 0 .002-.031l.41-9.378a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-9.884.545-9.884a.615 1.172 0 0 0 .002-.031l.41-10.16.41-10.16a.615 1.172 0 0 0 0-.003l.409-10.405.547-10.67a.615 1.172 0 0 0 0-.025l.41-10.42a.615 1.172 0 0 0 0-.003l.275-7.158.275 7.158.408 10.682a.615 1.172 0 0 0 .002.032l.547 10.405.409 10.666a.615 1.172 0 0 0 0 .002l.41 10.157.408 10.421a.615 1.172 0 0 0 .002.032l.547 10.147.409 9.884a.615 1.172 0 0 0 0 .002l.41 9.639a.615 1.172 0 0 0 0 .002l.41 9.378a.615 1.172 0 0 0 .002.032l.545 9.365.409 9.101a.615 1.172 0 0 0 0 .007l.41 8.596a.615 1.172 0 0 0 .002.041l.545 8.32.41 8.315a.615 1.172 0 0 0 0 .013l.41 7.553.41 7.556a.615 1.172 0 0 0 .003.05l.544 7.016.408 6.755a.615 1.172 0 0 0 .002.013l.41 6.252a.615 1.172 0 0 0 0 .013l.41 5.73a.615 1.172 0 0 0 .006.061l.545 5.454.406 4.932a.615 1.172 0 0 0 .004.02l.408 4.43a.615 1.172 0 0 0 .002.012l.41 4.166a.615 1.172 0 0 0 .014.108l.543 3.629.407 3.107a.615 1.172 0 0 0 .007.05l.41 2.608a.615 1.172 0 0 0 .04.185l.545 2.086.41 1.561a.615 1.172 0 0 0 .059.182l.41 1.04a.615 1.172 0 0 0 .056.127l.41.782a.615 1.172 0 0 0 .434.343h.547a.615 1.172 0 0 0 .195-.06l.408-.26a.615 1.172 0 0 0 .299-.411l.408-1.04a.615 1.172 0 0 0 .037-.102l.408-1.304a.615 1.172 0 0 0 .024-.076l.547-2.086a.615 1.172 0 0 0 .033-.153l.408-2.344a.615 1.172 0 0 0 .01-.063l.409-2.846.542-3.371a.615 1.172 0 0 0 .016-.115l.409-3.908a.615 1.172 0 0 0 .003-.026l.41-4.426a.615 1.172 0 0 0 .002-.022l.407-4.926.545-5.187a.615 1.172 0 0 0 .005-.073l.41-5.73a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002l.41-5.99a.615 1.172 0 0 0 .002-.017l.409-6.755.545-7.015a.615 1.172 0 0 0 .003-.048l.409-7.295a.615 1.172 0 0 0 .002-.01l.408-7.797.545-8.059a.615 1.172 0 0 0 .004-.041l.41-8.335a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.86a.615 1.172 0 0 0 0-.002l.407-9.101.545-9.102a.615 1.172 0 0 0 .005-.038l.408-9.638a.615 1.172 0 0 0 0-.002l.41-9.897a.615 1.172 0 0 0 0-.002l.41-10.144.546-10.148a.615 1.172 0 0 0 .002-.031l.41-10.418a.615 1.172 0 0 0 0-.002l.408-10.666.545-10.67a.615 1.172 0 0 0 .002-.028l.41-10.943.41-10.94.272-7.285.277 7.543.41 10.943a.615 1.172 0 0 0 .002.032l.545 10.666.408 10.923a.615 1.172 0 0 0 0 .002l.41 10.682.41 10.682a.615 1.172 0 0 0 .002.028l.546 10.409.408 10.147a.615 1.172 0 0 0 .002 0l.408 9.9a.615 1.172 0 0 0 .002.032l.545 9.883.41 9.627a.615 1.172 0 0 0 0 .007l.41 9.117.409 9.117a.615 1.172 0 0 0 .003.041l.545 8.58.409 8.322a.615 1.172 0 0 0 0 .002l.41 8.075a.615 1.172 0 0 0 0 .01l.41 7.556a.615 1.172 0 0 0 .004.044l.545 7.28.408 6.757a.615 1.172 0 0 0 0 .002l.41 6.513a.615 1.172 0 0 0 .006.06l.543 5.975.409 5.454a.615 1.172 0 0 0 .001.007l.41 5.212a.615 1.172 0 0 0 0 .02l.41 4.687a.615 1.172 0 0 0 .01.092l.544 4.15.409 3.629a.615 1.172 0 0 0 .005.038l.408 3.126a.615 1.172 0 0 0 .004.022l.41 2.868a.615 1.172 0 0 0 .043.213l.547 2.086.41 1.562a.615 1.172 0 0 0 .022.08l.41 1.303a.615 1.172 0 0 0 .252.445l.547.522a.615 1.172 0 0 0 .275.12h.408a.615 1.172 0 0 0 .195-.057l.41-.26a.615 1.172 0 0 0 .297-.41l.41-1.044a.615 1.172 0 0 0 .02-.05l.545-1.565a.615 1.172 0 0 0 .054-.188l.41-1.825a.615 1.172 0 0 0 .025-.124l.408-2.605a.615 1.172 0 0 0 .005-.028l.409-2.86.545-3.64a.615 1.172 0 0 0 .011-.093l.41-3.905a.615 1.172 0 0 0 .004-.038l.407-4.665.545-4.926a.615 1.172 0 0 0 .007-.076l.41-5.47a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-5.734a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01l.409-6.493.545-6.755a.615 1.172 0 0 0 .003-.05l.41-7.032a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-7.816.409-7.801.547-8.322a.615 1.172 0 0 0 .001-.042l.41-8.86.409-8.856a.615 1.172 0 0 0 .001-.007l.409-9.362.545-9.626a.615 1.172 0 0 0 .001-.032l.41-9.9a.615 1.172 0 0 0 0-.001l.409-10.148.547-10.405a.615 1.172 0 0 0 .001-.032l.409-10.418a.615 1.172 0 0 0 0-.002l.41-10.682.41-10.93.545-11.19a.615 1.172 0 0 0 .001-.026l.409-10.94a.615 1.172 0 0 0 0-.001l.41-11.228a.615 1.172 0 0 0 0-.002l.275-7.683.275 7.683a.615 1.172 0 0 0 0 .028l.547 11.188.409 11.19.41 10.943.41 11.2a.615 1.172 0 0 0 0 .032l.547 10.666.408 10.67.41 10.42.41 10.421a.615 1.172 0 0 0 .002.035l.545 9.884.408 9.884a.615 1.172 0 0 0 0 .007l.41 9.378a.615 1.172 0 0 0 .002.031l.545 9.366.41 8.844a.615 1.172 0 0 0 0 .002l.41 8.599a.615 1.172 0 0 0 0 .007l.409 8.074a.615 1.172 0 0 0 .003.041l.545 7.8.409 7.538a.615 1.172 0 0 0 .003.013l.409 6.773.41 6.774a.615 1.172 0 0 0 .005.067l.545 5.969.408 5.711a.615 1.172 0 0 0 0 .017l.41 5.208a.615 1.172 0 0 0 .009.083l.544 4.662.406 4.405a.615 1.172 0 0 0 .005.04l.409 3.648a.615 1.172 0 0 0 .004.038l.41 3.126a.615 1.172 0 0 0 .019.118l.547 2.865a.615 1.172 0 0 0 .002.01l.41 2.087a.615 1.172 0 0 0 .01.047l.41 1.826a.615 1.172 0 0 0 .074.241l.41 1.043a.615 1.172 0 0 0 .216.344l.546.521a.615 1.172 0 0 0 .081.064l.409.261a.615 1.172 0 0 0 .535-.137l.41-.521a.615 1.172 0 0 0 .152-.274l.408-1.04a.615 1.172 0 0 0 .02-.054l.547-1.561a.615 1.172 0 0 0 .063-.242l.41-2.083a.615 1.172 0 0 0 .014-.073l.407-2.589.543-3.11a.615 1.172 0 0 0 .018-.124l.41-3.647a.615 1.172 0 0 0 .002-.032l.41-4.166a.615 1.172 0 0 0 .002-.013l.408-4.417.545-5.197a.615 1.172 0 0 0 .007-.07l.409-5.733a.615 1.172 0 0 0 .001-.007l.408-5.991a.615 1.172 0 0 0 .002-.014l.408-6.497.545-7.015a.615 1.172 0 0 0 .004-.048l.41-7.295a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.408-7.797.546-8.059a.615 1.172 0 0 0 .003-.044l.409-8.596a.615 1.172 0 0 0 0-.002l.41-8.86.41-9.107.545-9.626a.615 1.172 0 0 0 .001-.032l.41-9.9a.615 1.172 0 0 0 0-.001l.409-10.16.41-10.148.545-10.67a.615 1.172 0 0 0 .002-.028l.41-10.679a.615 1.172 0 0 0 0-.002l.408-10.93.547-11.187a.615 1.172 0 0 0 0-.029l.41-11.2a.615 1.172 0 0 0 0-.002l.41-11.464.409-11.449.315-6.589.235 6.577a.615 1.172 0 0 0 .002.025l.545 11.452.408 11.448a.615 1.172 0 0 0 .002.002l.408 11.2a.615 1.172 0 0 0 .002.029l.545 11.187.41 11.188a.615 1.172 0 0 0 0 .002l.41 10.682.41 10.681a.615 1.172 0 0 0 .001.032l.545 10.405.41 10.148a.615 1.172 0 0 0 0 .002l.41 9.9.41 9.9a.615 1.172 0 0 0 .002.037l.546 9.101.408 9.102a.615 1.172 0 0 0 0 .007l.41 8.599a.615 1.172 0 0 0 0 .002l.41 8.335a.615 1.172 0 0 0 .003.048l.545 7.797.41 7.537a.615 1.172 0 0 0 0 .002l.41 7.295a.615 1.172 0 0 0 .003.06l.546 6.494.408 6.233a.615 1.172 0 0 0 0 .013l.41 5.73a.615 1.172 0 0 0 .002.017l.41 5.21a.615 1.172 0 0 0 .005.07l.545 4.935.409 4.156a.615 1.172 0 0 0 .005.029l.41 3.647a.615 1.172 0 0 0 .001.02l.41 3.383a.615 1.172 0 0 0 .029.175l.538 2.572.405 2.312a.615 1.172 0 0 0 .034.153l.41 1.561a.615 1.172 0 0 0 .115.306l.545 1.043.41.782a.615 1.172 0 0 0 .435.343h.409a.615 1.172 0 0 0 .342-.197l.41-.521a.615 1.172 0 0 0 .093-.147l.547-1.043a.615 1.172 0 0 0 .115-.305l.414-1.561a.615 1.172 0 0 0 .027-.115l.41-2.083a.615 1.172 0 0 0 .017-.101l.405-2.837.542-3.094a.615 1.172 0 0 0 .016-.124l.41-3.648a.615 1.172 0 0 0 .004-.029l.409-4.15.543-4.671a.615 1.172 0 0 0 .009-.09l.41-5.469.408-5.47a.615 1.172 0 0 0 .002-.022l.408-6.236.545-6.755a.615 1.172 0 0 0 .004-.05l.41-7.032a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-7.295a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-8.061.545-8.32a.615 1.172 0 0 0 .002-.04l.41-8.596a.615 1.172 0 0 0 0-.002l.408-8.844.547-9.366a.615 1.172 0 0 0 .002-.035l.409-9.638a.615 1.172 0 0 0 0-.002l.41-10.16.41-10.148.545-10.409a.615 1.172 0 0 0 .002-.028l.41-10.682a.615 1.172 0 0 0 0-.002l.409-10.94a.615 1.172 0 0 0 0-.002l.41-11.187.545-11.19a.615 1.172 0 0 0 .002-.026l.41-11.204.408-11.464.41-11.709.344-7.2.343 7.2.409 11.71.41 11.463.41 11.204a.615 1.172 0 0 0 0 .025l.547 11.452.408 10.93.41 10.939a.615 1.172 0 0 0 0 .002l.41 10.682a.615 1.172 0 0 0 .002.029l.545 10.669.409 10.147.41 9.9a.615 1.172 0 0 0 .001.032l.545 9.886.41 9.366a.615 1.172 0 0 0 0 .002l.41 9.117a.615 1.172 0 0 0 0 .007l.41 8.596a.615 1.172 0 0 0 .002.041l.546 8.32.408 8.058a.615 1.172 0 0 0 0 .013l.41 7.295.41 7.295a.615 1.172 0 0 0 .005.06l.544 6.491.408 6.233a.615 1.172 0 0 0 .002.013l.41 5.734a.615 1.172 0 0 0 .005.06l.545 5.457.408 4.675a.615 1.172 0 0 0 .002.025l.41 4.166a.615 1.172 0 0 0 0 .02l.41 3.905a.615 1.172 0 0 0 .02.143l.54 3.094.407 2.833a.615 1.172 0 0 0 .016.105l.41 2.083a.615 1.172 0 0 0 .026.115l.41 1.561a.615 1.172 0 0 0 .115.305l.547 1.043.408.78a.615 1.172 0 0 0 .435.343h.41a.615 1.172 0 0 0 .369-.232l.547-.782a.615 1.172 0 0 0 .121-.236l.41-1.043a.615 1.172 0 0 0 .059-.178l.41-1.561a.615 1.172 0 0 0 .025-.115l.41-2.083a.615 1.172 0 0 0 .002-.016l.546-2.865a.615 1.172 0 0 0 .019-.115l.41-3.126a.615 1.172 0 0 0 .007-.057l.41-3.905a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.007l.408-4.147.544-4.671a.615 1.172 0 0 0 .008-.08l.41-5.212a.615 1.172 0 0 0 .002-.022l.41-5.992.409-5.978.545-6.761a.615 1.172 0 0 0 .003-.048l.41-7.034a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.409-7.543.545-8.059a.615 1.172 0 0 0 .003-.04l.409-8.339a.615 1.172 0 0 0 .003-.002l.409-8.596a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l.41-9.101.545-9.365a.615 1.172 0 0 0 .001-.035l.41-9.64a.615 1.172 0 0 0 0-.001l.41-10.16.41-10.148.544-10.409a.615 1.172 0 0 0 .002-.031l.41-10.943.408-10.927.547-10.926a.615 1.172 0 0 0 .002-.032l.408-11.461.41-11.204.41-11.451.546-11.712a.615 1.172 0 0 0 0-.023l.41-11.464.41-11.725a.615 1.172 0 0 0-.005-.076.615 1.172 0 0 0 .005-.08l-.41-11.721a.615 1.172 0 0 0 0-.002L40.167 380a.615 1.172 0 0 0 0-.026l-.546-11.709-.41-11.451-.41-11.204-.408-11.46a.615 1.172 0 0 0-.002-.032l-.547-10.927-.408-10.927-.41-10.942a.615 1.172 0 0 0-.002-.032l-.545-10.408-.408-10.148-.41-10.16a.615 1.172 0 0 0 0-.002l-.41-9.64a.615 1.172 0 0 0-.002-.034l-.545-9.366-.41-9.101a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.409-8.596a.615 1.172 0 0 0-.003-.002l-.409-8.338a.615 1.172 0 0 0-.003-.041l-.545-8.062-.409-7.54a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.034a.615 1.172 0 0 0-.003-.05l-.545-6.758-.409-5.979-.41-5.991a.615 1.172 0 0 0-.001-.023l-.41-5.212a.615 1.172 0 0 0-.01-.08l-.543-4.67-.408-4.147a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.002l-.41-3.909a.615 1.172 0 0 0-.007-.054l-.41-3.126a.615 1.172 0 0 0-.019-.114l-.546-2.865a.615 1.172 0 0 0-.002-.014l-.41-2.083a.615 1.172 0 0 0-.025-.114l-.414-1.572a.615 1.172 0 0 0-.059-.178l-.41-1.043a.615 1.172 0 0 0-.121-.235l-.547-.783a.615 1.172 0 0 0-.369-.232h-.41a.615 1.172 0 0 0-.435.344l-.409.779-.546 1.043a.615 1.172 0 0 0-.115.305l-.41 1.562a.615 1.172 0 0 0-.026.114l-.41 2.083a.615 1.172 0 0 0-.016.105l-.407 2.834-.54 3.094a.615 1.172 0 0 0-.02.14l-.409 3.908a.615 1.172 0 0 0-.001.016l-.41 4.166a.615 1.172 0 0 0-.002.026l-.408 4.674-.545 5.457a.615 1.172 0 0 0-.005.06l-.41 5.735a.615 1.172 0 0 0-.002.013l-.408 6.23-.544 6.493a.615 1.172 0 0 0-.004.06l-.41 7.296-.409 7.295a.615 1.172 0 0 0-.001.01l-.409 8.061-.545 8.32a.615 1.172 0 0 0-.003.04l-.409 8.597a.615 1.172 0 0 0 0 .007l-.41 9.117a.615 1.172 0 0 0 0 .002l-.41 9.365-.545 9.887a.615 1.172 0 0 0-.002.032l-.41 9.9-.408 10.147-.546 10.67a.615 1.172 0 0 0-.001.028l-.41 10.682a.615 1.172 0 0 0 0 .002l-.41 10.94-.409 10.929-.547 11.451a.615 1.172 0 0 0 0 .026l-.41 11.203-.41 11.464-.408 11.71-.344 7.2-.343-7.2-.41-11.709-.409-11.464-.41-11.203a.615 1.172 0 0 0-.002-.029l-.497-11.188-.41-11.187a.615 1.172 0 0 0 0-.002l-.409-10.94a.615 1.172 0 0 0-.001-.002L7.16 301.58a.615 1.172 0 0 0-.001-.032l-.545-10.405-.41-10.148-.41-10.16a.615 1.172 0 0 0 0-.002l-.409-9.682a.615 1.172 0 0 0-.001-.035l-.547-9.365-.409-8.844a.615 1.172 0 0 0 0-.002l-.41-8.597a.615 1.172 0 0 0-.001-.038l-.545-8.32-.41-8.06a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.297a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.03a.615 1.172 0 0 0-.004-.051l-.545-6.758-.409-6.233a.615 1.172 0 0 0-.001-.022l-.408-5.47-.41-5.473a.615 1.172 0 0 0-.01-.086l-.544-4.671-.409-4.15a.615 1.172 0 0 0-.003-.029l-.41-3.647a.615 1.172 0 0 0-.017-.125l-.542-3.094-.405-2.836a.615 1.172 0 0 0-.016-.102l-.41-2.086a.615 1.172 0 0 0-.027-.112l-.409-1.561a.615 1.172 0 0 0-.115-.305l-.547-1.043a.615 1.172 0 0 0-.093-.147l-.41-.521a.615 1.172 0 0 0-.342-.197h-.408a.615 1.172 0 0 0-.436.343l-.41.782-.545 1.044a.615 1.172 0 0 0-.117.302l-.408 1.564a.615 1.172 0 0 0-.033.153l-.406 2.312-.538 2.572a.615 1.172 0 0 0-.028.172l-.41 3.387a.615 1.172 0 0 0-.002.019l-.41 3.647a.615 1.172 0 0 0-.003.03l-.409 4.155-.545 4.936a.615 1.172 0 0 0-.007.07l-.408 5.209a.615 1.172 0 0 0-.002.016l-.41 5.73a.615 1.172 0 0 0 0 .014l-.408 6.233-.546 6.494a.615 1.172 0 0 0-.003.06l-.41 7.295a.615 1.172 0 0 0 0 .002l-.41 7.537-.545 7.797a.615 1.172 0 0 0-.002.048l-.41 8.335a.615 1.172 0 0 0 0 .002l-.41 8.6a.615 1.172 0 0 0 0 .001l-.409 9.102-.545 9.1a.615 1.172 0 0 0-.003.042l-.409 9.9-.41 9.9a.615 1.172 0 0 0 0 .001l-.41 10.148-.545 10.405a.615 1.172 0 0 0-.002.032l-.408 10.682-.41 10.678a.615 1.172 0 0 0 0 .007l-.41 11.188-.545 11.187a.615 1.172 0 0 0-.002.029l-.41 11.2a.615 1.172 0 0 0 0 .002l-.409 11.448-.545 11.452a.615 1.172 0 0 0-.001.025l-.235 6.577-.315-6.59-.409-11.45-.41-11.462a.615 1.172 0 0 0 0-.002l-.41-11.2a.615 1.172 0 0 0 0-.029l-.547-11.187-.408-10.93a.615 1.172 0 0 0 0-.002l-.41-10.679a.615 1.172 0 0 0-.002-.028l-.545-10.67-.41-10.147-.409-10.16a.615 1.172 0 0 0 0-.002l-.41-9.9a.615 1.172 0 0 0-.001-.035l-.545-9.623-.41-9.108a.615 1.172 0 0 0 0-.002l-.41-8.856a.615 1.172 0 0 0 0-.002l-.41-8.596a.615 1.172 0 0 0-.003-.045l-.545-8.058-.408-7.8a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002l-.41-7.295a.615 1.172 0 0 0-.004-.047l-.545-7.016-.408-6.497a.615 1.172 0 0 0-.002-.013l-.408-5.991a.615 1.172 0 0 0-.002-.007l-.408-5.734a.615 1.172 0 0 0-.007-.07l-.545-5.196-.409-4.417a.615 1.172 0 0 0-.001-.013l-.41-4.17a.615 1.172 0 0 0-.002-.028l-.41-3.648a.615 1.172 0 0 0-.018-.124l-.544-3.11-.406-2.588a.615 1.172 0 0 0-.014-.073l-.41-2.087a.615 1.172 0 0 0-.063-.238l-.547-1.562a.615 1.172 0 0 0-.02-.054l-.409-1.043a.615 1.172 0 0 0-.151-.27l-.41-.522a.615 1.172 0 0 0-.536-.136l-.408.26a.615 1.172 0 0 0-.082.064l-.545.522a.615 1.172 0 0 0-.217.343l-.41 1.043a.615 1.172 0 0 0-.073.242l-.41 1.825a.615 1.172 0 0 0-.01.048l-.41 2.086a.615 1.172 0 0 0-.002.01l-.547 2.865a.615 1.172 0 0 0-.018.118l-.41 3.126a.615 1.172 0 0 0-.005.038l-.408 3.648a.615 1.172 0 0 0-.005.041l-.407 4.404-.544 4.662a.615 1.172 0 0 0-.008.083l-.41 5.21a.615 1.172 0 0 0 0 .015l-.409 5.709-.545 5.972a.615 1.172 0 0 0-.007.067l-.41 6.773-.408 6.774a.615 1.172 0 0 0-.002.013l-.408 7.537-.545 7.8a.615 1.172 0 0 0-.004.042l-.408 8.074a.615 1.172 0 0 0 0 .007l-.41 8.599a.615 1.172 0 0 0 0 .002l-.41 8.844-.546 9.365a.615 1.172 0 0 0-.001.032l-.41 9.378a.615 1.172 0 0 0 0 .007l-.409 9.884-.545 9.883a.615 1.172 0 0 0-.001.035l-.41 10.421-.41 10.421-.409 10.67-.547 10.666a.615 1.172 0 0 0 0 .031l-.41 11.2-.41 10.943-.409 11.188-.546 11.19a.615 1.172 0 0 0 0 .029l-.276 7.683-.275-7.683a.615 1.172 0 0 0 0-.002l-.41-11.2a.615 1.172 0 0 0 0-.002l-.408-10.943a.615 1.172 0 0 0-.002-.022l-.545-11.19-.41-10.93-.41-10.683a.615 1.172 0 0 0 0-.002l-.41-10.42a.615 1.172 0 0 0 0-.03l-.547-10.405-.409-10.147a.615 1.172 0 0 0 0-.002l-.41-9.9a.615 1.172 0 0 0-.001-.032l-.545-9.626-.409-9.362a.615 1.172 0 0 0-.001-.007l-.409-8.856-.41-8.86a.615 1.172 0 0 0-.001-.041l-.547-8.323-.409-7.8-.41-7.817a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.034a.615 1.172 0 0 0-.003-.048l-.545-6.754-.409-6.494a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.007l-.41-5.73a.615 1.172 0 0 0-.002-.008l-.409-5.47a.615 1.172 0 0 0-.006-.076l-.546-4.926-.406-4.665a.615 1.172 0 0 0-.004-.038l-.41-3.905a.615 1.172 0 0 0-.012-.092l-.545-3.641-.408-2.86a.615 1.172 0 0 0-.005-.028l-.41-2.604a.615 1.172 0 0 0-.024-.128l-.41-1.822a.615 1.172 0 0 0-.053-.187l-.545-1.565a.615 1.172 0 0 0-.02-.054l-.41-1.045a.615 1.172 0 0 0-.297-.41l-.41-.261a.615 1.172 0 0 0-.195-.06h-.408a.615 1.172 0 0 0-.276.123l-.546.522a.615 1.172 0 0 0-.252.445l-.41 1.304a.615 1.172 0 0 0-.022.08l-.41 1.56-.547 2.087a.615 1.172 0 0 0-.043.213l-.41 2.868a.615 1.172 0 0 0-.004.022l-.408 3.126a.615 1.172 0 0 0-.005.038l-.409 3.629-.543 4.15a.615 1.172 0 0 0-.01.092l-.41 4.688a.615 1.172 0 0 0 0 .019l-.41 5.209a.615 1.172 0 0 0-.002.01l-.409 5.453-.543 5.973a.615 1.172 0 0 0-.006.063l-.41 6.513a.615 1.172 0 0 0 0 .002l-.408 6.758-.545 7.279a.615 1.172 0 0 0-.004.044l-.41 7.556a.615 1.172 0 0 0 0 .007l-.41 8.078a.615 1.172 0 0 0 0 .002l-.408 8.322-.546 8.58a.615 1.172 0 0 0-.003.04l-.409 9.118-.41 9.117a.615 1.172 0 0 0 0 .007l-.41 9.627-.545 9.883a.615 1.172 0 0 0-.002.032l-.408 9.9a.615 1.172 0 0 0-.002 0l-.408 10.147-.546 10.408a.615 1.172 0 0 0-.001.03l-.41 10.68-.41 10.683-.409 10.927-.545 10.666a.615 1.172 0 0 0-.002.031l-.41 10.94a.615 1.172 0 0 0 0 .002l-.277 7.543-.272-7.286-.41-10.94-.41-10.942a.615 1.172 0 0 0-.001-.028l-.546-10.67-.408-10.666a.615 1.172 0 0 0 0-.002l-.41-10.417a.615 1.172 0 0 0-.004-.032l-.545-10.148-.41-10.144a.615 1.172 0 0 0 0-.002l-.41-9.9-.407-9.639a.615 1.172 0 0 0-.005-.038l-.545-9.101-.409-9.101a.615 1.172 0 0 0 0-.002l-.41-8.86a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.335a.615 1.172 0 0 0-.002-.041l-.545-8.059-.408-7.8a.615 1.172 0 0 0-.002-.007l-.409-7.296a.615 1.172 0 0 0-.003-.047l-.545-7.016-.409-6.754a.615 1.172 0 0 0-.001-.016l-.41-5.992a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-5.733a.615 1.172 0 0 0-.006-.07l-.545-5.187-.407-4.926a.615 1.172 0 0 0-.002-.022l-.41-4.427a.615 1.172 0 0 0-.003-.029l-.409-3.905a.615 1.172 0 0 0-.016-.114l-.542-3.371-.409-2.846a.615 1.172 0 0 0-.01-.064l-.408-2.344a.615 1.172 0 0 0-.033-.152l-.547-2.086a.615 1.172 0 0 0-.024-.077l-.408-1.303a.615 1.172 0 0 0-.037-.102l-.408-1.04a.615 1.172 0 0 0-.299-.41l-.408-.261a.615 1.172 0 0 0-.195-.06h-.547a.615 1.172 0 0 0-.433.343l-.41.782a.615 1.172 0 0 0-.057.127l-.41 1.04a.615 1.172 0 0 0-.059.181l-.41 1.562-.545 2.083a.615 1.172 0 0 0-.04.187l-.41 2.608a.615 1.172 0 0 0-.007.051l-.407 3.107-.543 3.628a.615 1.172 0 0 0-.014.108l-.41 4.166a.615 1.172 0 0 0-.002.014l-.408 4.43a.615 1.172 0 0 0-.003.018l-.407 4.933-.545 5.454a.615 1.172 0 0 0-.005.06l-.41 5.73a.615 1.172 0 0 0 0 .014l-.41 6.252a.615 1.172 0 0 0-.003.013l-.408 6.754-.544 7.016a.615 1.172 0 0 0-.003.05l-.41 7.553-.41 7.556a.615 1.172 0 0 0 0 .013l-.41 8.316-.545 8.32a.615 1.172 0 0 0-.002.04l-.41 8.596a.615 1.172 0 0 0 0 .007l-.409 9.102-.545 9.365a.615 1.172 0 0 0-.002.032l-.415 9.38a.615 1.172 0 0 0 0 .003l-.41 9.639a.615 1.172 0 0 0 0 .002l-.409 9.883-.547 10.148a.615 1.172 0 0 0-.002.032l-.408 10.418-.41 10.16a.615 1.172 0 0 0 0 .002l-.409 10.666-.547 10.405a.615 1.172 0 0 0-.002.032l-.408 10.682-.275 7.158-.275-7.158a.615 1.172 0 0 0 0-.002l-.41-10.422a.615 1.172 0 0 0 0-.025l-.547-10.67-.409-10.404a.615 1.172 0 0 0 0-.002l-.41-10.16-.41-10.161a.615 1.172 0 0 0-.002-.032l-.545-9.883-.409-9.884a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.413-9.378a.615 1.172 0 0 0-.002-.032l-.545-9.365-.41-9.101a.615 1.172 0 0 0 0-.002l-.41-8.86a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.335a.615 1.172 0 0 0-.002-.038l-.545-8.322-.409-7.801a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.553a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.034a.615 1.172 0 0 0-.003-.048l-.545-6.758-.409-6.236a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-5.99a.615 1.172 0 0 0-.005-.058l-.545-5.718-.408-4.939a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-4.687a.615 1.172 0 0 0-.002-.013l-.41-4.427a.615 1.172 0 0 0-.013-.12l-.542-3.616-.407-3.359a.615 1.172 0 0 0-.005-.044l-.41-2.865a.615 1.172 0 0 0-.01-.064l-.41-2.344a.615 1.172 0 0 0-.048-.21l-.547-1.825a.615 1.172 0 0 0-.007-.022l-.41-1.298a.615 1.172 0 0 0-.092-.225l-.41-.783a.615 1.172 0 0 0-.093-.146l-.41-.521a.615 1.172 0 0 0-.342-.198h-.545a.615 1.172 0 0 0-.436.344l-.41.782a.615 1.172 0 0 0-.056.124l-.41 1.043a.615 1.172 0 0 0-.019.054l-.547 1.562a.615 1.172 0 0 0-.065.238l-.408 2.086a.615 1.172 0 0 0 0 .042.615 1.172 0 0 0-.014.031l-.41 2.605a.615 1.172 0 0 0-.005.029l-.406 2.849-.544 3.368a.615 1.172 0 0 0-.017.13l-.408 4.166-.41 4.169a.615 1.172 0 0 0-.003.032l-.409 4.925-.543 5.187a.615 1.172 0 0 0-.007.073l-.409 5.73a.615 1.172 0 0 0 0 .008l-.41 5.975-.544 6.497a.615 1.172 0 0 0-.003.05l-.409 6.774a.615 1.172 0 0 0 0 .01l-.411 7.296-.408 7.279-.546 8.064a.615 1.172 0 0 0 0 .038l-.41 8.075a.615 1.172 0 0 0 0 .002l-.41 8.338a.615 1.172 0 0 0 0 .007l-.411 8.84-.545 9.105a.615 1.172 0 0 0-.001.032l-.409 9.117a.615 1.172 0 0 0 0 .002l-.41 9.365-.544 9.623a.615 1.172 0 0 0-.001.035l-.41 9.9-.41 9.9-.409 9.883-.545 10.148a.615 1.172 0 0 0-.001.031l-.41 10.421-.41 10.158a.615 1.172 0 0 0 0 .002l-.277 7.04-.274-6.783a.615 1.172 0 0 0 0-.025l-.546-10.409-.409-10.147-.41-10.16-.41-9.9a.615 1.172 0 0 0 0-.032l-.547-9.884-.409-9.626a.615 1.172 0 0 0 0-.002l-.41-9.378-.41-9.378a.615 1.172 0 0 0 0-.035l-.546-9.104-.408-8.841a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.338-.41-8.335a.615 1.172 0 0 0-.002-.041l-.545-8.062-.41-7.54a.615 1.172 0 0 0 0-.002l-.41-7.295a.615 1.172 0 0 0-.001-.048l-.545-7.018-.41-6.497a.615 1.172 0 0 0 0-.002l-.41-6.252a.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-5.73a.615 1.172 0 0 0-.006-.061l-.545-5.454-.407-4.93a.615 1.172 0 0 0 0-.012l-.41-4.69a.615 1.172 0 0 0-.002-.023l-.41-4.17a.615 1.172 0 0 0-.013-.104l-.544-3.629-.407-3.107a.615 1.172 0 0 0-.003-.025l-.41-2.865a.615 1.172 0 0 0-.03-.169l-.545-2.337-.409-1.816a.615 1.172 0 0 0-.038-.14l-.408-1.304a.615 1.172 0 0 0-.037-.102l-.409-1.04a.615 1.172 0 0 0-.343-.435l-.545-.26a.615 1.172 0 0 0-.15-.036h-.41a.615 1.172 0 0 0-.34.197l-.41.522a.615 1.172 0 0 0-.15.273l-.41 1.04a.615 1.172 0 0 0-.02.054l-.548 1.565a.615 1.172 0 0 0-.053.187l-.408 1.822a.615 1.172 0 0 0-.025.128l-.404 2.572-.54 2.834a.615 1.172 0 0 0-.022.136l-.41 3.387a.615 1.172 0 0 0 0 .02l-.41 3.644a.615 1.172 0 0 0-.006.044l-.407 4.401-.543 4.665a.615 1.172 0 0 0-.007.07l-.41 4.952a.615 1.172 0 0 0-.001.019l-.409 5.473a.615 1.172 0 0 0 0 .013l-.41 5.972-.544 6.23a.615 1.172 0 0 0-.005.054l-.41 6.513a.615 1.172 0 0 0 0 .01l-.41 7.015-.544 7.276a.615 1.172 0 0 0-.003.051l-.41 7.814-.41 7.816a.615 1.172 0 0 0 0 .007l-.409 8.322-.545 8.58a.615 1.172 0 0 0-.001.035l-.41 8.596a.615 1.172 0 0 0 0 .007l-.41 9.12-.409 9.102-.545 9.365a.615 1.172 0 0 0-.003.035l-.409 9.639-.41 9.639-.408 9.887-.547 9.883a.615 1.172 0 0 0-.001.029l-.408 9.9a.615 1.172 0 0 0 0 .002l-.41 10.144-.316 5.855-.235-5.84a.615 1.172 0 0 0 0-.03l-.546-9.884-.408-10.145a.615 1.172 0 0 0-.001-.002l-.409-9.9-.41-9.638a.615 1.172 0 0 0-.001-.032l-.545-9.623-.41-9.626a.615 1.172 0 0 0 0-.002l-.409-9.117a.615 1.172 0 0 0 0-.035l-.548-9.102-.408-9.101a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.596a.615 1.172 0 0 0 0-.002l-.41-8.338a.615 1.172 0 0 0-.001-.038l-.546-8.061-.408-7.798a.615 1.172 0 0 0 0-.002l-.41-7.556a.615 1.172 0 0 0 0-.002l-.41-7.295a.615 1.172 0 0 0-.003-.054l-.546-6.755-.408-6.493a.615 1.172 0 0 0 0-.002l-.41-6.252a.615 1.172 0 0 0-.005-.067l-.545-5.711-.409-5.194a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-4.948a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-4.69a.615 1.172 0 0 0-.01-.093l-.544-4.146-.408-3.629a.615 1.172 0 0 0-.005-.038l-.409-3.126a.615 1.172 0 0 0-.003-.025l-.41-2.866a.615 1.172 0 0 0-.031-.168l-.545-2.338-.407-1.815a.615 1.172 0 0 0-.039-.144l-.41-1.3a.615 1.172 0 0 0-.091-.226l-.547-1.043a.615 1.172 0 0 0-.24-.283l-.41-.26a.615 1.172 0 0 0-.194-.061h-.41a.615 1.172 0 0 0-.342.197l-.408.521a.615 1.172 0 0 0-.029.038l-.546.783a.615 1.172 0 0 0-.18.413l-.41 1.562a.615 1.172 0 0 0-.016.063l-.41 1.822a.615 1.172 0 0 0-.018.093l-.407 2.33-.544 2.85a.615 1.172 0 0 0-.021.137l-.41 3.387a.615 1.172 0 0 0-.001.019l-.41 3.647a.615 1.172 0 0 0-.001.029l-.409 4.14-.542 4.405a.615 1.172 0 0 0-.01.085l-.408 4.949a.615 1.172 0 0 0-.001.016l-.409 5.45-.543 5.709a.615 1.172 0 0 0-.007.064l-.409 6.255a.615 1.172 0 0 0 0 .002l-.41 6.513a.615 1.172 0 0 0 0 .007l-.41 6.757-.545 7.28a.615 1.172 0 0 0-.001.044l-.41 7.556a.615 1.172 0 0 0 0 .002l-.41 7.816a.615 1.172 0 0 0 0 .002l-.409 8.059-.545 8.319a.615 1.172 0 0 0-.003.044l-.41 8.857-.409 8.843-.545 9.102a.615 1.172 0 0 0 0 .031l-.41 9.12a.615 1.172 0 0 0 0 .003l-.411 9.378-.409 9.626-.545 9.887a.615 1.172 0 0 0 0 .025l-.41 9.639a.615 1.172 0 0 0 0 .007l-.411 10.16-.408 9.88-.346 6.243-.343-6.242-.408-9.88-.41-10.161a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-9.639a.615 1.172 0 0 0-.002-.025l-.545-9.887-.408-9.626-.41-9.378a.615 1.172 0 0 0 0-.002l-.41-9.12a.615 1.172 0 0 0-.002-.032l-.545-9.102-.408-8.844-.41-8.856a.615 1.172 0 0 0-.003-.044l-.546-8.32-.408-8.058a.615 1.172 0 0 0 0-.002l-.41-7.816a.615 1.172 0 0 0 0-.002l-.41-7.556a.615 1.172 0 0 0-.001-.045l-.546-7.279-.41-6.758a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-6.512a.615 1.172 0 0 0 0-.002l-.41-6.256a.615 1.172 0 0 0-.005-.063l-.545-5.709-.409-5.45a.615 1.172 0 0 0 0-.017l-.41-4.948a.615 1.172 0 0 0-.01-.086l-.54-4.404-.41-4.14a.615 1.172 0 0 0 0-.03l-.41-3.647a.615 1.172 0 0 0-.002-.019l-.41-3.387a.615 1.172 0 0 0-.021-.136l-.544-2.85-.407-2.33a.615 1.172 0 0 0-.018-.093l-.41-1.822a.615 1.172 0 0 0-.015-.064l-.41-1.561a.615 1.172 0 0 0-.18-.414l-.547-.782a.615 1.172 0 0 0-.028-.038l-.409-.521a.615 1.172 0 0 0-.342-.197h-.41a.615 1.172 0 0 0-.193.06l-.41.26a.615 1.172 0 0 0-.24.284l-.547 1.043a.615 1.172 0 0 0-.092.226l-.41 1.3a.615 1.172 0 0 0-.039.143l-.406 1.816-.546 2.338a.615 1.172 0 0 0-.031.168l-.41 2.865a.615 1.172 0 0 0-.003.026l-.409 3.126a.615 1.172 0 0 0-.005.038l-.408 3.628-.544 4.147a.615 1.172 0 0 0-.01.092l-.41 4.691a.615 1.172 0 0 0 0 .01l-.41 4.948a.615 1.172 0 0 0 0 .01l-.408 5.193-.546 5.712a.615 1.172 0 0 0-.005.067l-.41 6.252a.615 1.172 0 0 0 0 .002l-.408 6.493-.545 6.755a.615 1.172 0 0 0-.003.054l-.41 7.295a.615 1.172 0 0 0 0 .002l-.41 7.556a.615 1.172 0 0 0 0 .002l-.41 7.797-.544 8.062a.615 1.172 0 0 0-.001.038l-.41 8.338a.615 1.172 0 0 0 0 .002l-.41 8.596a.615 1.172 0 0 0 0 .007l-.41 9.101-.546 9.102a.615 1.172 0 0 0-.001.035l-.408 9.117a.615 1.172 0 0 0 0 .002l-.41 9.626-.546 9.623a.615 1.172 0 0 0 0 .032l-.41 9.638-.411 9.9a.615 1.172 0 0 0 0 .002l-.408 10.144-.546 9.884a.615 1.172 0 0 0 0 .032l-.236 5.838-.315-5.854-.41-10.145a.615 1.172 0 0 0 0-.002l-.408-9.9a.615 1.172 0 0 0-.001-.028l-.523-9.983-.409-9.887-.41-9.639-.409-9.639a.615 1.172 0 0 0-.003-.035l-.545-9.365-.408-9.101-.41-9.12a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002l-.41-8.596a.615 1.172 0 0 0-.001-.035l-.546-8.58-.408-8.322a.615 1.172 0 0 0-.001-.007l-.409-7.816-.41-7.814a.615 1.172 0 0 0-.003-.05l-.545-7.277-.408-7.015a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-6.513a.615 1.172 0 0 0-.003-.054l-.546-6.23-.408-5.972a.615 1.172 0 0 0-.001-.013l-.409-5.473a.615 1.172 0 0 0 0-.019l-.41-4.951a.615 1.172 0 0 0-.008-.07l-.543-4.666-.407-4.4a.615 1.172 0 0 0-.005-.045l-.41-3.645a.615 1.172 0 0 0-.001-.019l-.41-3.386a.615 1.172 0 0 0-.022-.137l-.54-2.834-.404-2.572a.615 1.172 0 0 0-.025-.127l-.408-1.823a.615 1.172 0 0 0-.053-.187l-.547-1.565a.615 1.172 0 0 0-.02-.054l-.41-1.04a.615 1.172 0 0 0-.15-.273l-.41-.522a.615 1.172 0 0 0-.34-.197h-.41a.615 1.172 0 0 0-.15.035l-.546.26a.615 1.172 0 0 0-.343.437l-.409 1.04a.615 1.172 0 0 0-.037.101l-.408 1.304a.615 1.172 0 0 0-.039.14l-.408 1.816-.545 2.337a.615 1.172 0 0 0-.03.169l-.41 2.865a.615 1.172 0 0 0-.003.025l-.407 3.107-.544 3.629a.615 1.172 0 0 0-.013.105l-.41 4.169a.615 1.172 0 0 0-.001.022l-.41 4.69a.615 1.172 0 0 0-.001.014l-.407 4.93-.545 5.453a.615 1.172 0 0 0-.007.06l-.41 5.73a.615 1.172 0 0 0 0 .017l-.41 6.252a.615 1.172 0 0 0 0 .002l-.41 6.497-.546 7.019a.615 1.172 0 0 0 0 .047l-.41 7.296a.615 1.172 0 0 0 0 .002l-.411 7.54-.545 8.061a.615 1.172 0 0 0-.001.041l-.41 8.335-.41 8.338a.615 1.172 0 0 0 0 .007l-.409 8.841-.545 9.105a.615 1.172 0 0 0-.001.035l-.41 9.378-.41 9.378a.615 1.172 0 0 0 0 .002l-.409 9.626-.547 9.883a.615 1.172 0 0 0 0 .032l-.41 9.9-.41 10.16-.41 10.148-.545 10.408a.615 1.172 0 0 0-.001.025l-.272 6.777-.277-7.034a.615 1.172 0 0 0 0-.002l-.41-10.157-.41-10.421a.615 1.172 0 0 0-.001-.032l-.545-10.148-.409-9.883-.41-9.9-.41-9.9a.615 1.172 0 0 0-.001-.035l-.545-9.622-.409-9.366a.615 1.172 0 0 0 0-.002l-.41-9.117a.615 1.172 0 0 0 0-.032l-.545-9.104-.41-8.84a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002l-.41-8.338a.615 1.172 0 0 0 0-.002l-.41-8.074a.615 1.172 0 0 0-.002-.038l-.545-8.065-.408-7.28-.41-7.294a.615 1.172 0 0 0-.001-.01l-.409-6.774a.615 1.172 0 0 0-.003-.05l-.545-6.498-.409-5.975a.615 1.172 0 0 0 0-.007l-.409-5.73a.615 1.172 0 0 0-.007-.074l-.544-5.186-.408-4.926a.615 1.172 0 0 0-.003-.032l-.41-4.169-.409-4.166a.615 1.172 0 0 0-.016-.13l-.544-3.368-.407-2.85a.615 1.172 0 0 0-.005-.028l-.41-2.604a.615 1.172 0 0 0-.013-.074l-.409-2.086a.615 1.172 0 0 0-.06-.238l-.546-1.562a.615 1.172 0 0 0-.019-.054l-.41-1.043a.615 1.172 0 0 0-.057-.124l-.41-.782a.615 1.172 0 0 0-.435-.344h-.545a.615 1.172 0 0 0-.342.198l-.41.521a.615 1.172 0 0 0-.093.146l-.41.783a.615 1.172 0 0 0-.092.225l-.41 1.301a.615 1.172 0 0 0-.007.022l-.547 1.826a.615 1.172 0 0 0-.048.21l-.41 2.343a.615 1.172 0 0 0-.01.064l-.41 2.865a.615 1.172 0 0 0-.006.045l-.406 3.358-.542 3.616a.615 1.172 0 0 0-.014.12l-.41 4.427a.615 1.172 0 0 0 0 .013l-.41 4.688a.615 1.172 0 0 0 0 .01l-.41 4.938-.545 5.718a.615 1.172 0 0 0-.005.057l-.41 5.992a.615 1.172 0 0 0 0 .007l-.408 6.236-.545 6.757a.615 1.172 0 0 0-.003.048l-.41 7.035a.615 1.172 0 0 0 0 .01l-.41 7.552a.615 1.172 0 0 0 0 .007l-.41 7.801-.544 8.322a.615 1.172 0 0 0-.003.035l-.409 8.335a.615 1.172 0 0 0 0 .007l-.41 8.86a.615 1.172 0 0 0 0 .002l-.41 9.101-.545 9.366a.615 1.172 0 0 0 0 .031l-.41 9.378a.615 1.172 0 0 0 0 .007l-.41 9.884-.544 9.884a.615 1.172 0 0 0-.001.031l-.41 10.16-.41 10.16a.615 1.172 0 0 0 0 .003l-.409 10.405-.547 10.67a.615 1.172 0 0 0 0 .025l-.41 10.42a.615 1.172 0 0 0 0 .003l-.275 7.158-.275-7.158-.41-10.682a.615 1.172 0 0 0 0-.032l-.547-10.405-.409-10.666a.615 1.172 0 0 0 0-.002l-.41-10.16-.41-10.418a.615 1.172 0 0 0 0-.032l-.547-10.148-.408-9.883a.615 1.172 0 0 0 0-.002l-.41-9.64a.615 1.172 0 0 0 0-.001l-.41-9.378a.615 1.172 0 0 0-.002-.032l-.545-9.365-.408-9.101a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.596a.615 1.172 0 0 0-.001-.041l-.545-8.32-.41-8.315a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.556-.41-7.553a.615 1.172 0 0 0-.004-.05l-.543-7.016-.409-6.755a.615 1.172 0 0 0 0-.013l-.411-6.252a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-5.73a.615 1.172 0 0 0-.005-.06l-.545-5.455-.409-4.932a.615 1.172 0 0 0 0-.02l-.41-4.429a.615 1.172 0 0 0 0-.013l-.41-4.166a.615 1.172 0 0 0-.014-.108l-.543-3.629-.407-3.106a.615 1.172 0 0 0-.009-.051l-.408-2.608a.615 1.172 0 0 0-.04-.188l-.546-2.082-.41-1.562a.615 1.172 0 0 0-.058-.181l-.41-1.04a.615 1.172 0 0 0-.057-.127l-.41-.783a.615 1.172 0 0 0-.434-.343h-.547a.615 1.172 0 0 0-.195.06l-.408.261a.615 1.172 0 0 0-.299.41l-.414 1.041a.615 1.172 0 0 0-.037.102l-.408 1.304a.615 1.172 0 0 0-.024.076l-.546 2.087a.615 1.172 0 0 0-.034.152l-.408 2.344a.615 1.172 0 0 0-.01.064l-.409 2.846-.541 3.37a.615 1.172 0 0 0-.017.115l-.409 3.905a.615 1.172 0 0 0-.003.029l-.41 4.426a.615 1.172 0 0 0 0 .023l-.408 4.926-.545 5.186a.615 1.172 0 0 0-.005.07l-.41 5.734a.615 1.172 0 0 0 0 .007l-.41 5.991a.615 1.172 0 0 0-.001.017l-.408 6.754-.546 7.015a.615 1.172 0 0 0-.003.048l-.408 7.295a.615 1.172 0 0 0-.001.007l-.409 7.801-.545 8.058a.615 1.172 0 0 0 0 .042l-.41 8.335a.615 1.172 0 0 0 0 .007l-.411 8.86a.615 1.172 0 0 0 0 .001l-.409 9.102-.545 9.101a.615 1.172 0 0 0-.003.038l-.408 9.639-.41 9.9a.615 1.172 0 0 0 0 .001l-.41 10.145-.546 10.148a.615 1.172 0 0 0 0 .031l-.41 10.418a.615 1.172 0 0 0 0 .002l-.41 10.666-.544 10.67a.615 1.172 0 0 0-.001.028l-.41 10.942-.41 10.94-.272 7.285-.277-7.543a.615 1.172 0 0 0 0-.002l-.41-10.94a.615 1.172 0 0 0-.001-.03l-.546-10.667-.408-10.927-.41-10.681-.41-10.682a.615 1.172 0 0 0-.001-.029l-.545-10.408-.409-10.148-.41-9.9a.615 1.172 0 0 0 0-.031l-.546-9.884-.41-9.626a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-9.117-.408-9.118a.615 1.172 0 0 0-.003-.04l-.545-8.58-.409-8.323a.615 1.172 0 0 0 0-.002l-.41-8.077a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-7.556a.615 1.172 0 0 0-.003-.044l-.545-7.28-.409-6.757a.615 1.172 0 0 0 0-.002l-.41-6.513a.615 1.172 0 0 0-.005-.064l-.544-5.972-.408-5.454a.615 1.172 0 0 0-.001-.01l-.41-5.209a.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.01l-.41-4.687a.615 1.172 0 0 0-.01-.092l-.544-4.15-.408-3.629a.615 1.172 0 0 0-.005-.038l-.409-3.126a.615 1.172 0 0 0-.003-.022l-.41-2.869a.615 1.172 0 0 0-.043-.213l-.547-2.086-.41-1.561a.615 1.172 0 0 0-.022-.08l-.41-1.303a.615 1.172 0 0 0-.252-.446l-.546-.521a.615 1.172 0 0 0-.276-.124h-.408a.615 1.172 0 0 0-.195.06l-.41.261a.615 1.172 0 0 0-.297.41l-.41 1.04a.615 1.172 0 0 0-.02.054l-.545 1.565a.615 1.172 0 0 0-.054.187l-.41 1.823a.615 1.172 0 0 0-.025.127l-.408 2.604a.615 1.172 0 0 0-.005.029l-.409 2.859-.545 3.641a.615 1.172 0 0 0-.011.092l-.41 3.905a.615 1.172 0 0 0-.004.038l-.406 4.666-.546 4.925a.615 1.172 0 0 0-.009.077l-.41 5.47a.615 1.172 0 0 0 0 .007l-.41 5.73a.615 1.172 0 0 0 0 .02l-.408 6.493-.546 6.754a.615 1.172 0 0 0-.003.048l-.41 7.034a.615 1.172 0 0 0 0 .014l-.41 7.816-.408 7.8-.547 8.323a.615 1.172 0 0 0-.001.041l-.41 8.86-.409 8.857a.615 1.172 0 0 0 0 .007l-.41 9.362-.544 9.626a.615 1.172 0 0 0-.001.032l-.41 9.9a.615 1.172 0 0 0 0 .001l-.409 10.148-.547 10.405a.615 1.172 0 0 0 0 .029l-.41 10.42a.615 1.172 0 0 0 0 .003l-.41 10.682-.41 10.93-.545 11.19a.615 1.172 0 0 0 0 .023l-.41 10.942a.615 1.172 0 0 0 0 .002l-.41 11.2a.615 1.172 0 0 0 0 .002l-.274 7.683-.275-7.683a.615 1.172 0 0 0 0-.028l-.547-11.19-.409-11.188-.41-10.943-.41-11.2a.615 1.172 0 0 0 0-.032l-.547-10.666-.408-10.67-.41-10.42-.41-10.421a.615 1.172 0 0 0-.002-.035l-.545-9.884-.408-9.884a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-9.378a.615 1.172 0 0 0-.001-.031l-.546-9.366-.41-8.843a.615 1.172 0 0 0 0-.002l-.41-8.6a.615 1.172 0 0 0 0-.001.615 1.172 0 0 0 0-.002l-.41-8.075a.615 1.172 0 0 0-.001-.04l-.545-7.802-.409-7.536a.615 1.172 0 0 0 0-.014l-.41-6.773-.41-6.774a.615 1.172 0 0 0-.004-.066l-.545-5.973-.409-5.708a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.002l-.41-5.209a.615 1.172 0 0 0-.01-.083l-.543-4.662-.406-4.404a.615 1.172 0 0 0-.005-.041l-.409-3.648a.615 1.172 0 0 0-.005-.038l-.41-3.126a.615 1.172 0 0 0-.018-.118l-.547-2.865a.615 1.172 0 0 0-.001-.01l-.41-2.086a.615 1.172 0 0 0-.01-.048l-.41-1.825a.615 1.172 0 0 0-.074-.242l-.41-1.043a.615 1.172 0 0 0-.217-.343l-.545-.522a.615 1.172 0 0 0-.081-.064l-.409-.26a.615 1.172 0 0 0-.535.136l-.41.522a.615 1.172 0 0 0-.152.27l-.408 1.043a.615 1.172 0 0 0-.02.054l-.547 1.562a.615 1.172 0 0 0-.063.238l-.41 2.087a.615 1.172 0 0 0-.014.073l-.407 2.588-.543 3.11a.615 1.172 0 0 0-.018.124l-.41 3.648a.615 1.172 0 0 0-.002.029l-.41 4.169a.615 1.172 0 0 0 0 .013l-.41 4.417-.544 5.196a.615 1.172 0 0 0-.007.07l-.409 5.734a.615 1.172 0 0 0 0 .007l-.407 5.991a.615 1.172 0 0 0 0 .013l-.409 6.497-.545 7.016a.615 1.172 0 0 0-.003.047l-.41 7.295a.615 1.172 0 0 0 0 .007l-.409 7.801-.545 8.058a.615 1.172 0 0 0-.003.045l-.408 8.596a.615 1.172 0 0 0 0 .002l-.41 8.856a.615 1.172 0 0 0 0 .002l-.41 9.108-.546 9.623a.615 1.172 0 0 0 0 .035l-.411 9.9a.615 1.172 0 0 0 0 .001l-.41 10.16-.409 10.148-.545 10.67a.615 1.172 0 0 0 0 .028l-.41 10.679a.615 1.172 0 0 0 0 .002l-.41 10.93-.546 11.187a.615 1.172 0 0 0 0 .029l-.41 11.2a.615 1.172 0 0 0 0 .002l-.41 11.461-.409 11.452-.315 6.589-.235-6.577a.615 1.172 0 0 0-.001-.025l-.545-11.452-.409-11.448a.615 1.172 0 0 0 0-.002l-.41-11.2a.615 1.172 0 0 0-.002-.029l-.545-11.187-.41-11.188a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-10.678-.41-10.682a.615 1.172 0 0 0 0-.032l-.545-10.405-.41-10.148a.615 1.172 0 0 0 0-.002l-.41-9.9-.41-9.899a.615 1.172 0 0 0-.002-.041l-.545-9.102-.409-9.101a.615 1.172 0 0 0 0-.002l-.41-8.599a.615 1.172 0 0 0 0-.002l-.41-8.335a.615 1.172 0 0 0-.001-.048l-.545-7.797-.41-7.537a.615 1.172 0 0 0 0-.002l-.41-7.295a.615 1.172 0 0 0-.004-.06l-.545-6.494-.408-6.233a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-5.73a.615 1.172 0 0 0-.001-.017l-.409-5.21a.615 1.172 0 0 0-.007-.07l-.545-4.935-.408-4.156a.615 1.172 0 0 0-.003-.029l-.41-3.647a.615 1.172 0 0 0-.002-.02l-.41-3.386a.615 1.172 0 0 0-.028-.172l-.539-2.572-.405-2.312a.615 1.172 0 0 0-.033-.153l-.409-1.564a.615 1.172 0 0 0-.116-.303l-.545-1.043-.41-.782a.615 1.172 0 0 0-.436-.343h-.408a.615 1.172 0 0 0-.342.197l-.407.521a.615 1.172 0 0 0-.093.147l-.547 1.043a.615 1.172 0 0 0-.115.305l-.408 1.561a.615 1.172 0 0 0-.027.112l-.41 2.086a.615 1.172 0 0 0-.017.102l-.405 2.836-.542 3.094a.615 1.172 0 0 0-.017.124l-.41 3.648a.615 1.172 0 0 0-.003.029l-.408 4.15-.544 4.671a.615 1.172 0 0 0-.009.086l-.41 5.473-.408 5.47a.615 1.172 0 0 0-.001.022l-.409 6.233-.545 6.757a.615 1.172 0 0 0-.003.051l-.41 7.032a.615 1.172 0 0 0 0 .007l-.41 7.295a.615 1.172 0 0 0 0 .01l-.41 8.061-.546 8.32a.615 1.172 0 0 0 0 .037l-.41 8.6a.615 1.172 0 0 0 0 .001l-.41 8.844-.546 9.365a.615 1.172 0 0 0-.001.035l-.409 9.64a.615 1.172 0 0 0 0 .001l-.41 10.16-.41 10.148-.545 10.405a.615 1.172 0 0 0-.001.032l-.41 10.682a.615 1.172 0 0 0 0 .002l-.409 10.94a.615 1.172 0 0 0 0 .001l-.41 11.188-.545 11.187a.615 1.172 0 0 0 0 .029l-.411 11.203-.409 11.465-.41 11.709-.343 7.2-.344-7.2-.408-11.71-.41-11.464-.41-11.203a.615 1.172 0 0 0 0-.025l-.547-11.452-.409-10.93-.41-10.94a.615 1.172 0 0 0 0-.001l-.41-10.682a.615 1.172 0 0 0 0-.029l-.546-10.669-.409-10.147-.41-9.9a.615 1.172 0 0 0 0-.032l-.546-9.887-.41-9.365a.615 1.172 0 0 0 0-.002l-.41-9.117a.615 1.172 0 0 0 0-.002.615 1.172 0 0 0 0-.002l-.41-8.596a.615 1.172 0 0 0-.001-.041l-.545-8.32-.409-8.06a.615 1.172 0 0 0 0-.01l-.41-7.296-.41-7.295a.615 1.172 0 0 0-.005-.06l-.543-6.494-.409-6.23a.615 1.172 0 0 0 0-.013l-.41-5.734a.615 1.172 0 0 0-.006-.06l-.545-5.457-.408-4.675a.615 1.172 0 0 0-.001-.025l-.41-4.166a.615 1.172 0 0 0-.001-.02l-.409-3.908a.615 1.172 0 0 0-.02-.14l-.54-3.094-.407-2.833a.615 1.172 0 0 0-.016-.105l-.41-2.083a.615 1.172 0 0 0-.026-.115l-.41-1.561a.615 1.172 0 0 0-.115-.305l-.547-1.043-.408-.78a.615 1.172 0 0 0-.435-.343zm-.234 2.388.208.398.475.906.352 1.339.388 1.975.402 2.814a.615 1.172 0 0 0 .01.06l.534 3.06.402 3.829.408 4.15.409 4.674a.615 1.172 0 0 0 0 .029l.544 5.441.407 5.692.41 6.246a.615 1.172 0 0 0 .003.041l.544 6.481.408 7.267.408 7.285.41 8.071a.615 1.172 0 0 0 .004.032l.545 8.32.408 8.573.41 9.114.409 9.375a.615 1.172 0 0 0 0 .025l.546 9.884.41 9.884.409 10.16a.615 1.172 0 0 0 0 .022l.546 10.67.41 10.662.408 10.943.41 10.94a.615 1.172 0 0 0 .002.025l.545 11.448.408 11.19.41 11.458.41 11.725a.615 1.172 0 0 0 .001.026l.546 11.451.405 11.63-.405 11.63-.546 11.448a.615 1.172 0 0 0 0 .028l-.41 11.722-.41 11.46-.41 11.192-.544 11.448a.615 1.172 0 0 0-.001.022l-.41 10.943-.409 10.94-.41 10.665-.545 10.67a.615 1.172 0 0 0-.001.022l-.409 10.16-.41 9.884-.545 9.883a.615 1.172 0 0 0-.001.026l-.409 9.375-.41 9.114-.408 8.573-.545 8.32a.615 1.172 0 0 0-.003.031l-.41 8.071-.409 7.286-.408 7.266-.544 6.481a.615 1.172 0 0 0-.003.041l-.41 6.246-.407 5.692-.543 5.441a.615 1.172 0 0 0-.001.026l-.409 4.678-.408 4.15-.402 3.829-.534 3.059a.615 1.172 0 0 0-.01.06l-.402 2.815-.388 1.975-.352 1.338-.475.907-.208.397-.284-.404-.323-.823-.372-1.415-.397-2.02-.535-2.805-.398-3.04-.406-3.873-.408-4.16a.615 1.172 0 0 0-.005-.038l-.542-4.649-.405-5.161-.408-5.979-.41-5.991a.615 1.172 0 0 0-.002-.029l-.545-6.748-.408-7.005-.409-7.55a.615 1.172 0 0 0 0-.029l-.546-8.055-.408-8.316-.41-8.592-.41-9.114a.615 1.172 0 0 0-.002-.029l-.545-9.362-.408-9.62-.41-10.157-.409-10.16a.615 1.172 0 0 0 0-.026l-.546-10.405-.41-10.923-.409-10.943a.615 1.172 0 0 0 0-.029l-.546-10.923-.41-11.449-.41-11.203-.409-11.46a.615 1.172 0 0 0 0-.023l-.546-11.712-.41-11.449-.405-11.645.405-11.646.41-11.448.545-11.712a.615 1.172 0 0 0 .001-.022l.409-11.461.41-11.204.41-11.448.545-10.927a.615 1.172 0 0 0 .001-.025l.409-10.943.41-10.923.545-10.406a.615 1.172 0 0 0 .001-.025l.409-10.16.41-10.158.408-9.62.545-9.361a.615 1.172 0 0 0 .001-.029l.41-9.114.41-8.593.41-8.316.544-8.055a.615 1.172 0 0 0 .001-.028l.409-7.55.408-7.006.545-6.748a.615 1.172 0 0 0 .001-.028l.41-5.992.409-5.981.405-5.158.542-4.65a.615 1.172 0 0 0 .003-.038l.41-4.16.405-3.873.399-3.04.535-2.805.397-2.019.37-1.415.325-.824zm448.992 0 .283.404.324.824.371 1.415.397 2.02.535 2.804.399 3.04.405 3.874.408 4.16a.615 1.172 0 0 0 .007.037l.54 4.65.406 5.157.41 5.982.408 5.991a.615 1.172 0 0 0 .004.03l.545 6.747.408 7.006.409 7.55a.615 1.172 0 0 0 .001.028l.545 8.055.409 8.316.41 8.593.41 9.114a.615 1.172 0 0 0 .001.028l.546 9.362.408 9.62.41 10.157.409 10.16a.615 1.172 0 0 0 .001.026l.545 10.405.41 10.924.409 10.942a.615 1.172 0 0 0 .001.026l.545 10.927.41 11.448.41 11.203.41 11.461a.615 1.172 0 0 0 0 .023l.546 11.712.41 11.448.405 11.645-.405 11.646-.41 11.448-.545 11.712a.615 1.172 0 0 0-.002.023l-.408 11.46-.41 11.204-.41 11.448-.546 10.924a.615 1.172 0 0 0-.001.029l-.409 10.942-.41 10.924-.545 10.405a.615 1.172 0 0 0-.001.025l-.409 10.16-.41 10.158-.408 9.62-.546 9.362a.615 1.172 0 0 0 0 .028l-.411 9.114-.41 8.593-.409 8.316-.545 8.055a.615 1.172 0 0 0-.001.029l-.409 7.55-.408 7.005-.545 6.748a.615 1.172 0 0 0-.004.029l-.408 5.99-.41 5.98-.406 5.16-.54 4.65a.615 1.172 0 0 0-.007.038l-.408 4.16-.405 3.873-.399 3.04-.535 2.805-.397 2.02-.371 1.414-.324.824-.283.404-.209-.398-.475-.906-.352-1.339-.388-1.975-.402-2.814a.615 1.172 0 0 0-.01-.06l-.533-3.06-.402-3.829-.409-4.15-.408-4.677a.615 1.172 0 0 0-.002-.026l-.543-5.441-.407-5.692-.41-6.246a.615 1.172 0 0 0-.003-.041l-.544-6.481-.408-7.267-.409-7.285-.41-8.071a.615 1.172 0 0 0-.001-.032l-.546-8.32-.408-8.573-.41-9.114-.409-9.375a.615 1.172 0 0 0-.001-.025l-.545-9.884-.41-9.883-.409-10.16a.615 1.172 0 0 0-.001-.023l-.545-10.67-.41-10.665-.41-10.94-.41-10.942a.615 1.172 0 0 0 0-.022l-.546-11.449-.41-11.19-.408-11.461-.41-11.722a.615 1.172 0 0 0-.002-.029l-.545-11.448-.405-11.63.405-11.63.545-11.45a.615 1.172 0 0 0 .001-.026l.41-11.725.41-11.458.41-11.19.544-11.449a.615 1.172 0 0 0 .002-.025l.41-10.94.408-10.942.41-10.663.546-10.67a.615 1.172 0 0 0 .001-.022l.409-10.16.41-9.884.545-9.883a.615 1.172 0 0 0 .001-.026l.409-9.374.41-9.115.408-8.573.546-8.32a.615 1.172 0 0 0 0-.03l.411-8.072.409-7.285.408-7.267.544-6.48a.615 1.172 0 0 0 .003-.042l.41-6.246.407-5.692.543-5.441a.615 1.172 0 0 0 .002-.029l.408-4.675.409-4.15.402-3.828.533-3.06a.615 1.172 0 0 0 .01-.06l.402-2.814.388-1.975.352-1.34.475-.905zm-419.09 1.285.216.413.477.91.345 1.316.397 2.268a.615 1.172 0 0 0 .011.064l.529 2.521.398 3.289.407 3.625.409 4.153a.615 1.172 0 0 0 .003.025l.542 4.917.406 5.167.409 5.718.408 6.246a.615 1.172 0 0 0 .005.038l.544 6.484.408 7.26.41 7.553a.615 1.172 0 0 0 .001.035l.546 7.794.408 8.31.409 8.592.41 9.118a.615 1.172 0 0 0 0 .031l.546 9.099.408 9.877.41 9.9.41 10.157a.615 1.172 0 0 0 .002.028l.545 10.406.408 10.666.41 10.678.41 11.2a.615 1.172 0 0 0 0 .026l.547 11.187.409 11.188.41 11.464a.615 1.172 0 0 0 0 .025l.547 11.449.408 11.451.407 11.382-.407 11.381-.408 11.452-.547 11.448a.615 1.172 0 0 0 0 .025l-.41 11.464-.409 11.188-.547 11.187a.615 1.172 0 0 0 0 .026l-.41 11.2-.41 10.679-.408 10.666-.545 10.405a.615 1.172 0 0 0-.001.029l-.41 10.157-.41 9.9-.41 9.877-.544 9.098a.615 1.172 0 0 0-.001.032l-.41 9.117-.409 8.59-.408 8.312-.546 7.794a.615 1.172 0 0 0 0 .032l-.41 7.553-.41 7.263-.543 6.484a.615 1.172 0 0 0-.005.035l-.408 6.246-.409 5.718-.406 5.167-.542 4.917a.615 1.172 0 0 0-.003.025l-.409 4.153-.407 3.625-.398 3.289-.529 2.521a.615 1.172 0 0 0-.011.064l-.397 2.268-.345 1.316-.477.91-.217.413-.185-.235-.433-.827-.35-1.339-.389-1.975-.403-2.81a.615 1.172 0 0 0-.01-.065l-.536-3.065-.4-3.568-.409-4.153a.615 1.172 0 0 0-.003-.038l-.542-4.647-.406-5.425-.409-5.46-.41-6.242a.615 1.172 0 0 0-.001-.029l-.543-6.751-.409-7.006-.41-7.286-.409-8.07a.615 1.172 0 0 0 0-.032l-.546-8.316-.41-8.577-.408-8.856a.615 1.172 0 0 0-.001-.026l-.546-9.362-.408-9.62-.41-10.157-.41-10.16a.615 1.172 0 0 0-.001-.025l-.545-10.406-.409-10.666-.41-10.94-.41-11.2a.615 1.172 0 0 0 0-.025l-.547-11.19-.408-11.188-.41-11.461-.41-11.722a.615 1.172 0 0 0 0-.028l-.548-11.449-.405-11.63.407-11.629.545-11.451a.615 1.172 0 0 0 0-.026l.41-11.725.41-11.457.409-11.188.547-11.19a.615 1.172 0 0 0 0-.026l.41-11.203.41-10.94.409-10.663.545-10.405a.615 1.172 0 0 0 0-.025l.41-10.16.411-10.158.408-9.62.546-9.362a.615 1.172 0 0 0 0-.025l.41-8.857.41-8.576.544-8.316a.615 1.172 0 0 0 .001-.032l.409-8.07.41-7.286.409-7.006.543-6.751a.615 1.172 0 0 0 .001-.032l.41-6.242.409-5.46.406-5.426.542-4.646a.615 1.172 0 0 0 .003-.038l.409-4.153.4-3.568.537-3.066a.615 1.172 0 0 0 .01-.063l.402-2.812.388-1.978.35-1.335.434-.827zm389.188 0 .185.235.434.827.35 1.336.388 1.978.402 2.811a.615 1.172 0 0 0 .01.064l.537 3.065.4 3.568.408 4.153a.615 1.172 0 0 0 .004.038l.542 4.647.406 5.425.409 5.46.408 6.242a.615 1.172 0 0 0 .005.032l.544 6.751.408 7.006.41 7.286.409 8.07a.615 1.172 0 0 0 .001.032l.545 8.316.41 8.577.409 8.856a.615 1.172 0 0 0 .001.026l.546 9.362.408 9.62.41 10.157.41 10.16a.615 1.172 0 0 0 .002.026l.545 10.405.408 10.663.41 10.94.41 11.203a.615 1.172 0 0 0 0 .025l.547 11.19.409 11.188.41 11.458.409 11.725a.615 1.172 0 0 0 0 .022l.546 11.452.407 11.63-.407 11.629-.545 11.448a.615 1.172 0 0 0 0 .032l-.41 11.722-.41 11.46-.409 11.188-.547 11.19a.615 1.172 0 0 0 0 .026l-.41 11.2-.41 10.94-.408 10.666-.546 10.402a.615 1.172 0 0 0-.002.025l-.41 10.16-.41 10.158-.408 9.62-.546 9.361a.615 1.172 0 0 0-.002.026l-.408 8.856-.41 8.577-.545 8.316a.615 1.172 0 0 0-.002.031l-.408 8.072-.41 7.285-.409 7.006-.543 6.751a.615 1.172 0 0 0-.002.032l-.41 6.242-.408 5.46-.407 5.426-.542 4.646a.615 1.172 0 0 0-.005.038l-.408 4.153-.4 3.568-.537 3.066a.615 1.172 0 0 0-.01.063l-.402 2.812-.389 1.974-.35 1.34-.433.826-.185.235-.217-.413-.477-.91-.345-1.316-.397-2.268a.615 1.172 0 0 0-.011-.063l-.529-2.522-.398-3.288-.407-3.625-.409-4.154a.615 1.172 0 0 0-.003-.025l-.542-4.916-.407-5.168-.408-5.718-.409-6.246a.615 1.172 0 0 0-.003-.038l-.544-6.484-.408-7.263-.41-7.553a.615 1.172 0 0 0-.002-.031l-.545-7.795-.408-8.312-.409-8.59-.41-9.117a.615 1.172 0 0 0-.001-.032l-.546-9.098-.408-9.877-.41-9.9-.41-10.157a.615 1.172 0 0 0-.002-.029l-.545-10.405-.408-10.666-.41-10.678-.41-11.2a.615 1.172 0 0 0 0-.026l-.547-11.188-.409-11.187-.41-11.464a.615 1.172 0 0 0 0-.01.615 1.172 0 0 0 0-.013l-.547-11.449-.408-11.451-.407-11.382.407-11.381.408-11.452.547-11.448a.615 1.172 0 0 0 0-.025l.41-11.465.409-11.187.546-11.188a.615 1.172 0 0 0 0-.025l.41-11.2.41-10.679.41-10.666.544-10.405a.615 1.172 0 0 0 .002-.029l.41-10.157.41-9.9.408-9.877.546-9.098a.615 1.172 0 0 0 .001-.032l.41-9.117.409-8.592.408-8.31.545-7.794a.615 1.172 0 0 0 .002-.035l.41-7.553.408-7.26.544-6.484a.615 1.172 0 0 0 .003-.038l.409-6.246.408-5.718.407-5.167.542-4.917a.615 1.172 0 0 0 .003-.025l.409-4.153.407-3.626.398-3.288.529-2.522a.615 1.172 0 0 0 .011-.063l.397-2.268.345-1.316.477-.91zm-359.354 3.485.082.051.378.36.279.709.375 1.67.403 2.054.534 2.801.4 3.05.405 3.606.409 4.408a.615 1.172 0 0 0 .005.05l.542 4.65.405 5.161.41 5.724a.615 1.172 0 0 0 .005.042l.543 5.96.407 6.738.41 6.767.409 7.55a.615 1.172 0 0 0 0 .031l.546 7.795.408 8.052.41 8.592.41 8.857a.615 1.172 0 0 0 0 .025l.547 9.362.409 9.36.41 9.899a.615 1.172 0 0 0 0 .028l.547 9.884.408 10.402.41 10.418.409 10.682a.615 1.172 0 0 0 .001.028l.545 10.663.41 11.188.409 10.942.41 11.2a.615 1.172 0 0 0 0 .03l.546 11.187.41 11.445a.615 1.172 0 0 0 0 .002l.405 11.12-.405 11.121-.41 11.448-.545 11.188a.615 1.172 0 0 0-.001.029l-.409 11.2-.41 10.94a.615 1.172 0 0 0 0 .001l-.41 11.188-.545 10.663a.615 1.172 0 0 0-.001.028l-.408 10.682-.41 10.418-.409 10.402-.547 9.884a.615 1.172 0 0 0 0 .028l-.41 9.897-.409 9.362-.546 9.362a.615 1.172 0 0 0 0 .025l-.41 8.857-.41 8.592-.41 8.052-.544 7.795a.615 1.172 0 0 0-.001.031l-.409 7.55-.41 6.767-.407 6.739-.543 5.96a.615 1.172 0 0 0-.005.04l-.41 5.725-.405 5.16-.542 4.65a.615 1.172 0 0 0-.005.051l-.409 4.408-.405 3.606-.4 3.05-.534 2.801-.403 2.054-.375 1.67-.279.71-.378.359-.082.05-.073-.089-.335-.855-.499-1.425-.376-1.92-.406-2.567a.615 1.172 0 0 0-.005-.035l-.535-3.065-.401-3.568-.407-4.147-.41-4.424a.615 1.172 0 0 0-.001-.025l-.544-5.174-.407-5.692-.408-5.982-.41-6.51a.615 1.172 0 0 0-.001-.032l-.546-7.008-.406-7.267-.41-7.81a.615 1.172 0 0 0-.001-.035l-.546-8.055-.408-8.574-.41-8.853-.409-9.117a.615 1.172 0 0 0 0-.026l-.546-9.623-.41-9.88-.409-10.157-.41-10.16a.615 1.172 0 0 0 0-.026l-.546-10.666-.408-10.666-.41-10.94a.615 1.172 0 0 0-.001-.025l-.546-11.187-.41-11.188-.408-11.464-.41-11.461a.615 1.172 0 0 0-.001-.026l-.546-11.451-.406-11.369.406-11.369.546-11.451a.615 1.172 0 0 0 0-.025l.41-11.461.41-11.465.41-11.187.545-11.188a.615 1.172 0 0 0 0-.025l.41-10.94.41-10.665.544-10.666a.615 1.172 0 0 0 .001-.026l.41-10.16.409-10.157.41-9.884.545-9.62a.615 1.172 0 0 0 .001-.025l.409-9.117.41-8.857.408-8.57.546-8.055a.615 1.172 0 0 0 0-.035l.41-7.81.407-7.267.546-7.009a.615 1.172 0 0 0 0-.035l.41-6.506.41-5.982.406-5.692.544-5.174a.615 1.172 0 0 0 0-.026l.41-4.423.408-4.147.401-3.568.535-3.066a.615 1.172 0 0 0 .005-.035l.406-2.566.376-1.92.499-1.426.335-.855zm329.519 0 .073.09.335.855.499 1.425.377 1.92.405 2.567a.615 1.172 0 0 0 .005.035l.535 3.065.402 3.568.406 4.147.41 4.424a.615 1.172 0 0 0 .004.025l.544 5.174.406 5.692.409 5.982.41 6.506a.615 1.172 0 0 0 .001.035l.545 7.01.407 7.266.41 7.81a.615 1.172 0 0 0 .003.035l.545 8.055.408 8.57.41 8.857.409 9.117a.615 1.172 0 0 0 .001.026l.545 9.62.41 9.883.409 10.157.41 10.16a.615 1.172 0 0 0 .002.026l.545 10.666.408 10.666.41 10.94a.615 1.172 0 0 0 .002.025l.545 11.187.41 11.188.408 11.464.41 11.461a.615 1.172 0 0 0 .003.026l.545 11.451.407 11.346-.407 11.392-.545 11.451a.615 1.172 0 0 0-.002.025l-.41 11.461-.409 11.465-.41 11.187-.545 11.188a.615 1.172 0 0 0-.002.025l-.41 10.94-.408 10.665-.545 10.666a.615 1.172 0 0 0-.002.026l-.41 10.16-.408 10.157-.41 9.88-.546 9.624a.615 1.172 0 0 0-.001.022l-.409 9.117-.41 8.854-.408 8.573-.545 8.055a.615 1.172 0 0 0-.003.038l-.41 7.807-.408 7.267-.544 7.012a.615 1.172 0 0 0-.001.029l-.41 6.51-.409 5.98-.406 5.693-.544 5.174a.615 1.172 0 0 0-.003.026l-.41 4.423-.407 4.147-.402 3.568-.535 3.066a.615 1.172 0 0 0-.005.035l-.405 2.566-.377 1.92-.499 1.425-.335.856-.073.089-.082-.048-.378-.36-.279-.708-.375-1.67-.403-2.054-.534-2.802-.4-3.05-.405-3.606-.408-4.407a.615 1.172 0 0 0-.005-.051l-.542-4.65-.405-5.16-.41-5.725a.615 1.172 0 0 0-.004-.041l-.543-5.96-.407-6.738-.41-6.768-.409-7.55a.615 1.172 0 0 0-.003-.03l-.544-7.795-.408-8.052-.41-8.593-.41-8.856a.615 1.172 0 0 0 0-.026l-.547-9.362-.409-9.362-.41-9.896a.615 1.172 0 0 0 0-.029l-.547-9.884-.408-10.402-.41-10.418-.409-10.681a.615 1.172 0 0 0-.001-.03l-.545-10.662-.41-11.187a.615 1.172 0 0 0 0-.002l-.41-10.94-.41-11.2a.615 1.172 0 0 0 0-.029l-.546-11.187-.41-11.448-.405-11.121.405-11.12a.615 1.172 0 0 0 0-.003.615 1.172 0 0 0 0-.002l.41-11.445.546-11.187a.615 1.172 0 0 0 0-.03l.411-11.2.409-10.942.41-11.187.545-10.663a.615 1.172 0 0 0 .001-.029l.409-10.682.41-10.418.408-10.402.547-9.883a.615 1.172 0 0 0 0-.029l.41-9.9.409-9.359.547-9.362a.615 1.172 0 0 0 0-.025l.41-8.857.41-8.592.408-8.052.546-7.794a.615 1.172 0 0 0 .001-.032l.408-7.55.41-6.767.407-6.738.544-5.96a.615 1.172 0 0 0 .003-.041l.41-5.724.406-5.162.541-4.649a.615 1.172 0 0 0 .005-.05l.409-4.408.405-3.607.4-3.05.533-2.8.404-2.055.375-1.67.279-.709.378-.36zm-299.6 5.61h.165l.256.245.306.97.4 1.523.518 1.981.392 2.741.407 3.095.407 3.628a.615 1.172 0 0 0 .007.038l.54 4.122.405 4.633.408 5.2.409 5.466a.615 1.172 0 0 0 .003.035l.543 5.96.409 6.48.408 6.77a.615 1.172 0 0 0 .003.033l.544 7.27.408 7.53.41 8.067.41 8.335a.615 1.172 0 0 0 .002.032l.545 8.577.408 9.098.409 9.114.41 9.639a.615 1.172 0 0 0 0 .025l.546 9.884.409 9.884.41 10.16a.615 1.172 0 0 0 0 .025l.546 10.406.41 10.666.408 10.678.41 10.943a.615 1.172 0 0 0 .002.029l.545 10.666.408 10.926.41 11.2a.615 1.172 0 0 0 0 .003l.407 10.856-.407 10.857a.615 1.172 0 0 0 0 .002l-.41 11.2-.408 10.927-.545 10.666a.615 1.172 0 0 0-.001.029l-.41 10.942-.409 10.68-.41 10.665-.545 10.405a.615 1.172 0 0 0-.001.026l-.41 10.16-.409 9.88-.545 9.887a.615 1.172 0 0 0-.001.026l-.41 9.639-.409 9.114-.41 9.098-.543 8.577a.615 1.172 0 0 0-.001.031l-.41 8.332-.41 8.071-.41 7.53-.543 7.27a.615 1.172 0 0 0-.003.032l-.408 6.77-.409 6.481-.543 5.96a.615 1.172 0 0 0-.003.035l-.409 5.466-.408 5.2-.405 4.633-.54 4.121a.615 1.172 0 0 0-.007.038l-.407 3.629-.407 3.094-.392 2.741-.518 1.982-.4 1.523-.306.97-.256.245h-.165l-.132-.083-.285-.725-.505-1.447-.374-1.663-.398-2.525-.407-2.853a.615 1.172 0 0 0-.003-.016l-.539-3.603-.403-3.842-.408-4.671a.615 1.172 0 0 0-.003-.048l-.544-4.913-.405-5.429-.41-5.717-.409-6.504a.615 1.172 0 0 0-.003-.038l-.543-6.751-.409-7.003-.41-7.807-.408-7.816a.615 1.172 0 0 0-.001-.029l-.545-8.316-.409-8.834-.41-8.857-.41-9.374a.615 1.172 0 0 0-.001-.029l-.545-9.623-.409-9.88-.41-10.16a.615 1.172 0 0 0 0-.026l-.547-10.405-.408-10.406-.41-10.678-.409-10.943a.615 1.172 0 0 0 0-.022l-.546-11.19-.41-10.928-.41-11.2-.409-11.464a.615 1.172 0 0 0 0-.029l-.541-11.092.54-11.092a.615 1.172 0 0 0 .001-.032l.409-11.46.41-11.2.41-10.928.545-11.19a.615 1.172 0 0 0 .001-.026l.409-10.94.41-10.678.408-10.405.547-10.405a.615 1.172 0 0 0 0-.029l.41-10.157.409-9.88.545-9.623a.615 1.172 0 0 0 0-.029l.41-9.375.411-8.856.409-8.835.545-8.315a.615 1.172 0 0 0 0-.03l.41-7.816.41-7.807.408-7.002.543-6.752a.615 1.172 0 0 0 .003-.038l.409-6.503.41-5.718.405-5.428.544-4.913a.615 1.172 0 0 0 .003-.048l.408-4.672.403-3.841.54-3.603a.615 1.172 0 0 0 .002-.013l.406-2.853.399-2.525.373-1.663.506-1.447.285-.725zm269.517 0h.165l.131.083.285.725.506 1.447.373 1.663.399 2.525.406 2.852a.615 1.172 0 0 0 .002.014l.54 3.603.403 3.841.407 4.672a.615 1.172 0 0 0 .007.047l.544 4.914.405 5.428.41 5.718.408 6.503a.615 1.172 0 0 0 .004.038l.543 6.751.409 7.003.408 7.807.41 7.817a.615 1.172 0 0 0 .002.028l.545 8.316.408 8.834.41 8.857.41 9.375a.615 1.172 0 0 0 0 .028l.548 9.623.408 9.88.41 10.158a.615 1.172 0 0 0 0 .029l.547 10.405.408 10.405.41 10.679.41 10.94a.615 1.172 0 0 0 0 .025l.546 11.19.41 10.927.41 11.2.408 11.461a.615 1.172 0 0 0 .002.032l.54 11.092-.54 11.092a.615 1.172 0 0 0-.002.029l-.408 11.464-.41 11.2-.41 10.927-.546 11.19a.615 1.172 0 0 0 0 .023l-.41 10.942-.41 10.68-.408 10.404-.547 10.406a.615 1.172 0 0 0 0 .025l-.41 10.16-.408 9.88-.546 9.624a.615 1.172 0 0 0-.001.028l-.41 9.375-.41 8.857-.409 8.834-.545 8.316a.615 1.172 0 0 0-.001.028l-.41 7.817-.409 7.807-.408 7.003-.544 6.751a.615 1.172 0 0 0-.005.038l-.408 6.503-.409 5.718-.405 5.428-.543 4.914a.615 1.172 0 0 0-.005.047l-.409 4.672-.403 3.841-.54 3.603a.615 1.172 0 0 0-.002.014l-.407 2.852-.399 2.525-.373 1.663-.505 1.447-.285.725-.132.083h-.165l-.257-.245-.305-.97-.4-1.523-.519-1.981-.391-2.742-.407-3.094-.407-3.628a.615 1.172 0 0 0-.005-.038l-.54-4.122-.405-4.633-.409-5.2-.408-5.466a.615 1.172 0 0 0-.003-.035l-.544-5.96-.408-6.48-.409-6.77a.615 1.172 0 0 0-.003-.032l-.544-7.27-.408-7.53-.41-8.072-.41-8.331a.615 1.172 0 0 0-.002-.032l-.545-8.577-.409-9.098-.408-9.114-.41-9.639a.615 1.172 0 0 0-.002-.025l-.545-9.887-.409-9.88-.41-10.16a.615 1.172 0 0 0-.002-.026l-.545-10.405-.41-10.666-.409-10.68-.41-10.942a.615 1.172 0 0 0-.001-.028l-.546-10.666-.408-10.927-.41-11.2a.615 1.172 0 0 0 0-.002l-.407-10.857.407-10.857a.615 1.172 0 0 0 0-.002l.41-11.2.408-10.927.546-10.666a.615 1.172 0 0 0 .001-.028l.41-10.943.409-10.679.41-10.666.545-10.405a.615 1.172 0 0 0 .002-.025l.41-10.16.409-9.884.545-9.884a.615 1.172 0 0 0 .001-.025l.41-9.64.409-9.113.409-9.098.545-8.577a.615 1.172 0 0 0 .001-.032l.41-8.335.41-8.068.41-7.53.543-7.27a.615 1.172 0 0 0 .003-.032l.409-6.77.408-6.48.544-5.96a.615 1.172 0 0 0 .001-.035l.41-5.467.409-5.2.405-4.633.54-4.121a.615 1.172 0 0 0 .005-.038l.407-3.629.407-3.094.391-2.741.519-1.981.4-1.524.305-.97zm-239.606 6.774h.192l.199.378.35.89.385 1.47.523 1.994.39 2.48.407 3.1a.615 1.172 0 0 0 .007.039l.539 3.593.403 4.109.407 4.414.41 4.938a.615 1.172 0 0 0 .003.035l.544 5.441.406 5.696.409 6.24.41 6.766a.615 1.172 0 0 0 .001.038l.545 7.01.409 7.527.408 7.55.41 8.33a.615 1.172 0 0 0 .001.036l.545 8.316.409 8.576.41 9.115a.615 1.172 0 0 0 .001.028l.545 9.362.409 9.362.41 9.636.41 9.9a.615 1.172 0 0 0 0 .025l.547 10.145.408 10.405a.615 1.172 0 0 0 0 .002l.41 10.157.41 10.679a.615 1.172 0 0 0 0 .031l.547 10.405.409 10.663.41 10.682a.615 1.172 0 0 0 0 .029l.542 10.567-.542 10.568a.615 1.172 0 0 0 0 .028l-.41 10.679-.409 10.666-.546 10.405a.615 1.172 0 0 0 0 .032l-.41 10.678-.41 10.157a.615 1.172 0 0 0 0 .002l-.41 10.406-.544 10.144a.615 1.172 0 0 0-.001.026l-.41 9.9-.41 9.635-.41 9.362-.544 9.362a.615 1.172 0 0 0-.001.029l-.41 9.114-.409 8.573-.545 8.32a.615 1.172 0 0 0-.001.034l-.41 8.332-.409 7.55-.408 7.527-.545 7.009a.615 1.172 0 0 0-.001.038l-.41 6.767-.409 6.24-.407 5.695-.543 5.44a.615 1.172 0 0 0-.005.036l-.409 4.939-.408 4.413-.404 4.11-.538 3.593a.615 1.172 0 0 0-.005.038l-.407 3.1-.39 2.48-.524 1.995-.385 1.469-.35.89-.198.379h-.192l-.133-.083-.275-.703-.382-1.211-.515-1.969-.392-2.236-.405-2.833a.615 1.172 0 0 0-.005-.035l-.537-3.333-.404-3.835-.406-4.404-.409-4.94a.615 1.172 0 0 0-.005-.047l-.542-5.174-.407-5.692-.41-5.982-.408-6.764a.615 1.172 0 0 0-.003-.038l-.544-7.009-.408-7.266-.41-7.814a.615 1.172 0 0 0-.001-.031l-.545-8.056-.409-8.312-.41-8.854-.409-9.117a.615 1.172 0 0 0 0-.032l-.546-9.098-.41-9.62-.408-9.896-.41-10.16a.615 1.172 0 0 0-.001-.029l-.546-10.144-.408-10.402-.41-10.682a.615 1.172 0 0 0-.001-.029l-.545-10.666-.409-10.923-.41-10.943-.41-10.943a.615 1.172 0 0 0-.001-.025l-.54-10.831.54-10.832a.615 1.172 0 0 0 0-.025l.411-10.943.41-10.942.409-10.927.545-10.666a.615 1.172 0 0 0 0-.026l.41-10.681.41-10.402.545-10.145a.615 1.172 0 0 0 0-.028l.41-10.16.41-9.897.41-9.62.544-9.098a.615 1.172 0 0 0 .001-.032l.409-9.117.41-8.853.409-8.313.545-8.055a.615 1.172 0 0 0 0-.035l.41-7.81.41-7.267.543-7.009a.615 1.172 0 0 0 .003-.038l.408-6.764.41-5.982.407-5.692.542-5.174a.615 1.172 0 0 0 .005-.048l.409-4.938.406-4.405.404-3.835.537-3.333a.615 1.172 0 0 0 .005-.035l.405-2.833.39-2.236.517-1.968.382-1.212.275-.703zm209.667 0h.192l.133.082.275.703.382 1.212.517 1.968.39 2.236.405 2.833a.615 1.172 0 0 0 .006.035l.538 3.333.402 3.835.408 4.405.407 4.938a.615 1.172 0 0 0 .007.048l.542 5.174.407 5.692.41 5.982.408 6.764a.615 1.172 0 0 0 .004.038l.543 7.009.409 7.266.41 7.81a.615 1.172 0 0 0 .001.036l.546 8.055.408 8.313.41 8.853.409 9.117a.615 1.172 0 0 0 .001.032l.546 9.098.41 9.62.408 9.896.41 10.16a.615 1.172 0 0 0 .002.03l.545 10.144.409 10.402.41 10.681a.615 1.172 0 0 0 .001.026l.546 10.666.408 10.927.41 10.942.41 10.943a.615 1.172 0 0 0 .002.025l.54 10.832-.54 10.83a.615 1.172 0 0 0-.002.026l-.41 10.943-.41 10.943-.408 10.923-.546 10.666a.615 1.172 0 0 0-.001.029l-.41 10.682-.409 10.402-.545 10.144a.615 1.172 0 0 0-.002.03l-.41 10.16-.41 9.896-.408 9.62-.546 9.098a.615 1.172 0 0 0-.001.031l-.409 9.118-.41 8.853-.408 8.313-.546 8.055a.615 1.172 0 0 0-.001.032l-.41 7.813-.409 7.266-.543 7.01a.615 1.172 0 0 0-.004.037l-.408 6.764-.41 5.982-.407 5.692-.542 5.174a.615 1.172 0 0 0-.007.048l-.407 4.939-.408 4.404-.402 3.835-.538 3.333a.615 1.172 0 0 0-.006.035l-.405 2.834-.392 2.235-.515 1.969-.382 1.211-.275.703-.133.083h-.192l-.198-.379-.35-.89-.385-1.47-.524-1.993-.39-2.48-.407-3.101a.615 1.172 0 0 0-.005-.038l-.539-3.594-.403-4.108-.408-4.414-.409-4.939a.615 1.172 0 0 0-.003-.035l-.544-5.441-.407-5.696-.408-6.239-.41-6.767a.615 1.172 0 0 0-.002-.038l-.545-7.009-.409-7.527-.408-7.55-.41-8.332a.615 1.172 0 0 0-.003-.035l-.545-8.319-.408-8.573-.41-9.114a.615 1.172 0 0 0-.002-.029l-.546-9.362-.408-9.362-.41-9.636-.41-9.9a.615 1.172 0 0 0-.002-.025l-.545-10.144-.409-10.405a.615 1.172 0 0 0 0-.002l-.41-10.158-.41-10.678a.615 1.172 0 0 0 0-.032l-.547-10.405-.409-10.666-.41-10.679a.615 1.172 0 0 0-.002-.028l-.54-10.568.542-10.567a.615 1.172 0 0 0 0-.029l.41-10.682.409-10.662.546-10.406a.615 1.172 0 0 0 0-.031l.41-10.679.41-10.157a.615 1.172 0 0 0 0-.002l.41-10.405.546-10.145a.615 1.172 0 0 0 0-.025l.41-9.9.41-9.635.409-9.363.545-9.362a.615 1.172 0 0 0 .002-.028l.41-9.114.409-8.577.545-8.316a.615 1.172 0 0 0 .002-.035l.41-8.332.408-7.55.409-7.527.545-7.008a.615 1.172 0 0 0 .002-.038l.41-6.768.409-6.239.406-5.695.544-5.442a.615 1.172 0 0 0 .003-.035l.409-4.938.408-4.414.404-4.109.538-3.593a.615 1.172 0 0 0 .005-.038l.407-3.101.39-2.48.524-1.994.385-1.47.35-.89zm-179.67 7.03h.105l.2.382.374.948.496 1.425.379 1.92.4 2.554.409 2.85a.615 1.172 0 0 0 .007.037l.536 3.324.402 4.102.41 4.153.407 4.932a.615 1.172 0 0 0 .005.048l.544 5.174.406 5.692.409 5.989a.615 1.172 0 0 0 .003.031l.543 6.488.409 6.744.408 7.29.41 7.294a.615 1.172 0 0 0 .002.026l.545 8.055.408 8.058.41 8.329.41 8.856a.615 1.172 0 0 0 0 .029l.547 9.101.409 9.102.41 9.374a.615 1.172 0 0 0 0 .032l.547 9.62.408 9.884.41 9.9.409 9.899a.615 1.172 0 0 0 0 .025l.546 10.145.41 10.405a.615 1.172 0 0 0 0 .002l.41 10.157.409 10.421a.615 1.172 0 0 0 0 .029l.54 10.303-.54 10.304a.615 1.172 0 0 0 0 .028l-.41 10.421-.409 10.157a.615 1.172 0 0 0 0 .002l-.41 10.406-.545 10.144a.615 1.172 0 0 0-.001.025l-.409 9.9-.41 9.9-.408 9.883-.547 9.62a.615 1.172 0 0 0 0 .029l-.41 9.378-.409 9.101-.547 9.101a.615 1.172 0 0 0 0 .029l-.41 8.853-.41 8.332-.408 8.055-.545 8.059a.615 1.172 0 0 0-.001.025l-.41 7.295-.41 7.289-.408 6.742-.543 6.49a.615 1.172 0 0 0-.003.032l-.409 5.988-.406 5.692-.544 5.174a.615 1.172 0 0 0-.005.048l-.407 4.932-.41 4.153-.402 4.103-.536 3.323a.615 1.172 0 0 0-.007.035l-.409 2.852-.4 2.554-.379 1.92-.496 1.426-.374.947-.2.379h-.105l-.203-.258-.314-.598-.368-1.167-.512-1.714-.385-2.204-.402-2.811-.408-3.364a.615 1.172 0 0 0-.007-.058l-.539-3.59-.403-4.363-.409-4.678-.41-4.945a.615 1.172 0 0 0-.001-.025l-.544-5.706-.406-5.959-.41-6.249a.615 1.172 0 0 0-.003-.032l-.544-6.748-.408-7.005-.409-7.55-.41-7.813a.615 1.172 0 0 0-.001-.029l-.545-8.32-.409-8.312-.41-8.853-.41-9.117a.615 1.172 0 0 0 0-.03l-.547-9.361-.408-9.36-.41-9.899a.615 1.172 0 0 0 0-.028l-.547-9.884-.409-10.145-.41-10.157-.408-10.42a.615 1.172 0 0 0-.001-.026l-.546-10.666-.41-10.409-.41-10.678-.405-10.596.405-10.596.41-10.68.41-10.407.546-10.666a.615 1.172 0 0 0 0-.026l.41-10.421.41-10.157.408-10.145.547-9.883a.615 1.172 0 0 0 0-.032l.41-9.896.408-9.36.547-9.361a.615 1.172 0 0 0 0-.029l.41-9.117.41-8.854.409-8.315.545-8.316a.615 1.172 0 0 0 0-.029l.411-7.813.409-7.55.408-7.006.544-6.748a.615 1.172 0 0 0 .003-.031l.41-6.25.406-5.962.544-5.702a.615 1.172 0 0 0 .001-.025l.41-4.945.409-4.678.403-4.363.539-3.59a.615 1.172 0 0 0 .007-.058l.408-3.364.402-2.811.385-2.204.512-1.714.368-1.167.314-.598zm149.759 0h.106l.204.261.313.598.369 1.167.511 1.715.386 2.203.401 2.811.409 3.365a.615 1.172 0 0 0 .009.057l.538 3.59.404 4.364.408 4.678.41 4.945a.615 1.172 0 0 0 .001.025l.544 5.702.407 5.963.41 6.248a.615 1.172 0 0 0 .003.032l.543 6.748.409 7.006.408 7.55.41 7.813a.615 1.172 0 0 0 .001.028l.546 8.316.408 8.316.41 8.854.41 9.117a.615 1.172 0 0 0 0 .028l.547 9.363.409 9.358.41 9.897a.615 1.172 0 0 0 0 .032l.547 9.883.408 10.145.41 10.157.409 10.421a.615 1.172 0 0 0 .002.025l.545 10.666.41 10.409.41 10.678.405 10.596-.405 10.596-.41 10.68-.41 10.408-.545 10.666a.615 1.172 0 0 0-.002.025l-.409 10.421-.41 10.157-.408 10.145-.547 9.883a.615 1.172 0 0 0 0 .029l-.41 9.9-.409 9.358-.547 9.363a.615 1.172 0 0 0 0 .028l-.41 9.117-.41 8.854-.408 8.313-.546 8.319a.615 1.172 0 0 0 0 .028l-.41 7.814-.41 7.55-.408 7.005-.543 6.748a.615 1.172 0 0 0-.003.032l-.41 6.248-.407 5.96-.544 5.705a.615 1.172 0 0 0 0 .025l-.41 4.945-.41 4.678-.403 4.363-.538 3.59a.615 1.172 0 0 0-.01.058l-.408 3.364-.401 2.812-.386 2.203-.511 1.715-.369 1.167-.313.597-.204.258h-.105l-.2-.378-.373-.948-.497-1.425-.379-1.924-.4-2.55-.408-2.853a.615 1.172 0 0 0-.005-.035l-.537-3.323-.404-4.102-.408-4.153-.407-4.933a.615 1.172 0 0 0-.005-.047l-.543-5.174-.407-5.693-.409-5.988a.615 1.172 0 0 0-.003-.032l-.543-6.49-.409-6.742-.408-7.289-.41-7.295a.615 1.172 0 0 0-.001-.025l-.545-8.058-.409-8.056-.41-8.331-.41-8.854a.615 1.172 0 0 0 0-.028l-.547-9.102-.408-9.101-.41-9.378a.615 1.172 0 0 0 0-.029l-.547-9.62-.409-9.883-.41-9.9-.408-9.9a.615 1.172 0 0 0-.001-.025l-.546-10.144-.41-10.405a.615 1.172 0 0 0 0-.002l-.41-10.157-.408-10.422a.615 1.172 0 0 0-.001-.028l-.54-10.304.54-10.303a.615 1.172 0 0 0 0-.032l.41-10.42.41-10.158a.615 1.172 0 0 0 0-.002l.41-10.405.545-10.145a.615 1.172 0 0 0 0-.025l.409-9.9.41-9.9.409-9.883.546-9.62a.615 1.172 0 0 0 0-.028l.41-9.375.41-9.102.544-9.101a.615 1.172 0 0 0 .001-.032l.41-8.856.41-8.329.409-8.058.545-8.055a.615 1.172 0 0 0 .001-.022l.41-7.296.409-7.288.408-6.745.544-6.488a.615 1.172 0 0 0 .003-.031l.408-5.988.407-5.693.544-5.174a.615 1.172 0 0 0 .003-.047l.408-4.933.408-4.153.404-4.102.537-3.323a.615 1.172 0 0 0 .005-.038l.408-2.85.4-2.55.379-1.924.497-1.425.373-.947zm-119.822 5.995h.148l.167.213.337.856.505 1.443.375 1.664.398 2.544a.615 1.172 0 0 0 .012.063l.534 2.799.4 3.307.406 3.616.407 4.408a.615 1.172 0 0 0 .007.05l.544 4.656.405 4.904.408 5.457.41 5.982a.615 1.172 0 0 0 .004.04l.543 6.227.409 6.481.408 7.028a.615 1.172 0 0 0 .003.038l.543 7.27.409 7.791.41 7.81.409 8.335a.615 1.172 0 0 0 0 .03l.546 8.579.41 8.577.408 9.117.41 9.117a.615 1.172 0 0 0 .001.029l.546 9.362.408 9.62.41 9.638.41 9.897a.615 1.172 0 0 0 .001.032l.546 9.883.408 9.884.41 10.157a.615 1.172 0 0 0 .001.032l.545 10.144.405 10.056-.405 10.055-.545 10.145a.615 1.172 0 0 0 0 .028l-.41 10.16-.41 9.884-.545 9.884a.615 1.172 0 0 0 0 .031l-.41 9.897-.41 9.639-.41 9.62-.545 9.361a.615 1.172 0 0 0 0 .03l-.41 9.116-.41 9.118-.408 8.576-.545 8.577a.615 1.172 0 0 0-.003.032l-.408 8.335-.41 7.81-.409 7.791-.543 7.27a.615 1.172 0 0 0-.003.035l-.409 7.031-.408 6.481-.544 6.227a.615 1.172 0 0 0-.005.038l-.41 5.984-.408 5.458-.406 4.903-.543 4.656a.615 1.172 0 0 0-.005.05l-.407 4.408-.407 3.616-.4 3.307-.533 2.799a.615 1.172 0 0 0-.012.063l-.398 2.541-.376 1.667-.505 1.443-.336.856-.167.213h-.149l-.26-.124-.26-.662-.372-1.18-.393-1.752a.615 1.172 0 0 0-.003-.016l-.527-2.264-.397-2.767-.408-3.116a.615 1.172 0 0 0-.005-.035l-.539-3.597-.403-4.102-.409-4.672-.408-4.945a.615 1.172 0 0 0-.003-.038l-.544-5.441-.406-5.692-.41-6.243-.409-6.51a.615 1.172 0 0 0-.003-.031l-.543-7.012-.409-7.27-.41-7.553a.615 1.172 0 0 0-.001-.028l-.545-8.055-.409-8.316-.408-8.335-.41-8.854a.615 1.172 0 0 0-.001-.028l-.545-9.102-.409-9.359-.41-9.378-.41-9.638a.615 1.172 0 0 0-.001-.026l-.545-9.887-.409-9.88-.41-10.16-.41-10.16a.615 1.172 0 0 0 0-.026l-.547-10.409-.408-10.144-.407-10.332.407-10.332.408-10.145.547-10.408a.615 1.172 0 0 0 0-.025l.41-10.16.41-10.161.409-9.88.545-9.887a.615 1.172 0 0 0 0-.026l.41-9.639.411-9.378.409-9.359.545-9.101a.615 1.172 0 0 0 0-.029l.41-8.856.41-8.332.408-8.316.545-8.055a.615 1.172 0 0 0 0-.029l.411-7.552.409-7.27.543-7.012a.615 1.172 0 0 0 .003-.032l.409-6.51.41-6.242.406-5.695.544-5.438a.615 1.172 0 0 0 .003-.038l.408-4.945.409-4.672.403-4.102.539-3.597a.615 1.172 0 0 0 .005-.035l.408-3.113.397-2.767.527-2.264a.615 1.172 0 0 0 .003-.016l.393-1.753.372-1.18.26-.661zm89.843 0h.149l.26.124.26.662.372 1.18.393 1.752a.615 1.172 0 0 0 .003.013l.527 2.264.397 2.767.408 3.113a.615 1.172 0 0 0 .007.038l.539 3.597.403 4.102.409 4.672.408 4.945a.615 1.172 0 0 0 .003.038l.544 5.438.406 5.695.41 6.243.409 6.51a.615 1.172 0 0 0 .003.03l.543 7.013.409 7.27.41 7.552a.615 1.172 0 0 0 .001.029l.545 8.055.409 8.316.408 8.332.41 8.856a.615 1.172 0 0 0 .001.029l.546 9.101.408 9.36.41 9.377.41 9.639a.615 1.172 0 0 0 .001.025l.545 9.887.409 9.88.41 10.161.41 10.16a.615 1.172 0 0 0 0 .026l.547 10.408.408 10.145.407 10.332-.407 10.332-.408 10.144-.547 10.409a.615 1.172 0 0 0 0 .025l-.41 10.16-.41 10.16-.409 9.881-.545 9.887a.615 1.172 0 0 0 0 .025l-.41 9.64-.411 9.377-.408 9.36-.546 9.1a.615 1.172 0 0 0 0 .03l-.41 8.853-.41 8.335-.408 8.315-.545 8.056a.615 1.172 0 0 0 0 .028l-.411 7.553-.409 7.27-.543 7.012a.615 1.172 0 0 0-.003.031l-.41 6.51-.409 6.242-.406 5.693-.544 5.44a.615 1.172 0 0 0-.003.039l-.408 4.945-.409 4.671-.403 4.103-.539 3.596a.615 1.172 0 0 0-.007.035l-.408 3.117-.397 2.767-.527 2.264a.615 1.172 0 0 0-.003.013l-.393 1.752-.372 1.18-.26.661-.26.124h-.149l-.167-.213-.336-.855-.505-1.444-.376-1.666-.398-2.541a.615 1.172 0 0 0-.012-.064l-.533-2.798-.4-3.308-.407-3.615-.407-4.408a.615 1.172 0 0 0-.005-.05l-.543-4.656-.406-4.904-.408-5.457-.41-5.985a.615 1.172 0 0 0-.003-.038l-.544-6.227-.408-6.48-.409-7.032a.615 1.172 0 0 0-.003-.035l-.543-7.27-.409-7.79-.41-7.81-.408-8.336a.615 1.172 0 0 0-.003-.031l-.545-8.577-.409-8.577-.408-9.117-.41-9.117a.615 1.172 0 0 0-.001-.03l-.546-9.361-.408-9.62-.41-9.639-.41-9.896a.615 1.172 0 0 0-.001-.032l-.546-9.883-.408-9.884-.41-10.16a.615 1.172 0 0 0-.001-.03l-.545-10.144-.406-10.055.406-10.055.545-10.145a.615 1.172 0 0 0 0-.031l.41-10.158.41-9.883.545-9.884a.615 1.172 0 0 0 0-.032l.41-9.896.41-9.639.41-9.62.545-9.362a.615 1.172 0 0 0 0-.028l.41-9.118.41-9.117.408-8.577.546-8.58a.615 1.172 0 0 0 .001-.028l.409-8.335.41-7.81.408-7.791.544-7.27a.615 1.172 0 0 0 .003-.038l.408-7.028.409-6.481.543-6.227a.615 1.172 0 0 0 .003-.041l.41-5.982.409-5.457.405-4.903.544-4.656a.615 1.172 0 0 0 .005-.05l.406-4.409.407-3.615.4-3.308.534-2.798a.615 1.172 0 0 0 .012-.064l.398-2.544.375-1.663.505-1.444.337-.855zm-59.908 3.387h.125l.24.305.417.595.337 1.285.391 1.749.402 2.296a.615 1.172 0 0 0 .007.031l.534 2.799.4 3.307.407 3.622.408 4.153a.615 1.172 0 0 0 .007.054l.542 4.386.405 4.897.408 5.464a.615 1.172 0 0 0 .003.044l.544 5.699.408 6.217.409 6.506.41 6.77a.615 1.172 0 0 0 .001.032l.545 7.273.409 7.53.408 7.81.41 8.075a.615 1.172 0 0 0 .001.031l.545 8.316.409 8.838.41 8.856a.615 1.172 0 0 0 .001.029l.545 9.101.409 9.098.41 9.375.41 9.639a.615 1.172 0 0 0 0 .032l.547 9.883.408 9.623.41 10.157a.615 1.172 0 0 0 0 .002l.41 9.9a.615 1.172 0 0 0 0 .032l.547 9.883.406 10.053-.406 10.052-.546 9.884a.615 1.172 0 0 0 0 .031l-.41 9.9-.41 10.157-.41 9.623-.546 9.887a.615 1.172 0 0 0 0 .028l-.41 9.636-.41 9.378-.409 9.098-.545 9.102a.615 1.172 0 0 0 0 .028l-.411 8.857-.409 8.837-.545 8.313a.615 1.172 0 0 0 0 .038l-.41 8.074-.41 7.81-.408 7.53-.545 7.274a.615 1.172 0 0 0 0 .028l-.411 6.77-.409 6.507-.408 6.217-.544 5.699a.615 1.172 0 0 0-.003.048l-.408 5.463-.407 4.897-.54 4.386a.615 1.172 0 0 0-.007.054l-.408 4.153-.407 3.622-.4 3.307-.534 2.799a.615 1.172 0 0 0-.007.028l-.402 2.3-.391 1.749-.337 1.281-.417.595-.24.305h-.125l-.177-.111-.39-.744-.35-1.11-.394-1.752a.615 1.172 0 0 0-.003-.014l-.526-2.264-.396-2.767-.406-3.094-.407-3.628a.615 1.172 0 0 0-.005-.038l-.54-4.125-.406-4.636-.408-4.942-.41-5.206a.615 1.172 0 0 0-.003-.035l-.544-5.699-.406-6.217-.41-6.51a.615 1.172 0 0 0-.002-.04l-.545-6.746-.408-7.266-.409-7.55-.41-7.813a.615 1.172 0 0 0 0-.035l-.546-8.055-.408-8.313-.41-8.592-.41-9.115a.615 1.172 0 0 0 0-.035l-.545-9.101-.41-9.098-.409-9.636a.615 1.172 0 0 0 0-.031l-.546-9.623-.41-9.623-.41-9.897-.409-10.16a.615 1.172 0 0 0 0-.032l-.546-9.883-.41-10.142-.405-10.07.405-10.072.41-10.141.545-9.884a.615 1.172 0 0 0 .001-.032l.41-10.16.409-9.896.41-9.623.545-9.623a.615 1.172 0 0 0 .001-.032l.409-9.636.41-9.098.545-9.101a.615 1.172 0 0 0 0-.035l.41-9.114.41-8.593.408-8.313.545-8.055a.615 1.172 0 0 0 .001-.035l.41-7.813.409-7.55.408-7.266.545-6.748a.615 1.172 0 0 0 .001-.038l.41-6.51.407-6.217.544-5.699a.615 1.172 0 0 0 .003-.035l.41-5.205.408-4.942.406-4.637.54-4.124a.615 1.172 0 0 0 .005-.038l.407-3.629.406-3.094.396-2.767.526-2.264a.615 1.172 0 0 0 .003-.013l.394-1.752.35-1.11.39-.744zm29.997 0h.125l.176.111.39.744.35 1.11.394 1.752a.615 1.172 0 0 0 .003.014l.527 2.264.395 2.767.407 3.094.407 3.628a.615 1.172 0 0 0 .007.038l.54 4.125.405 4.636.408 4.942.41 5.206a.615 1.172 0 0 0 .004.035l.543 5.699.407 6.217.41 6.51a.615 1.172 0 0 0 .001.037l.545 6.748.409 7.267.408 7.55.41 7.813a.615 1.172 0 0 0 .001.035l.545 8.055.409 8.313.41 8.592.408 9.114a.615 1.172 0 0 0 .001.035l.546 9.102.41 9.098.408 9.636a.615 1.172 0 0 0 .001.031l.545 9.623.41 9.623.409 9.896.41 10.16a.615 1.172 0 0 0 .001.032l.545 9.884.41 10.141.406 10.072-.406 10.07-.41 10.142-.545 9.884a.615 1.172 0 0 0 0 .032l-.411 10.16-.408 9.896-.41 9.623-.546 9.623a.615 1.172 0 0 0 0 .032l-.41 9.635-.41 9.099-.545 9.101a.615 1.172 0 0 0 0 .035l-.409 9.114-.41 8.593-.409 8.312-.545 8.055a.615 1.172 0 0 0 0 .035l-.41 7.814-.41 7.55-.408 7.266-.545 6.745a.615 1.172 0 0 0-.001.041l-.41 6.51-.407 6.217-.543 5.698a.615 1.172 0 0 0-.003.035l-.41 5.206-.41 4.942-.404 4.637-.54 4.124a.615 1.172 0 0 0-.007.038l-.407 3.629-.407 3.094-.395 2.767-.527 2.264a.615 1.172 0 0 0-.003.013l-.393 1.752-.35 1.11-.39.744-.177.112h-.125l-.24-.306-.417-.594-.337-1.285-.392-1.75-.402-2.295a.615 1.172 0 0 0-.005-.032l-.533-2.798-.4-3.308-.409-3.622-.407-4.153a.615 1.172 0 0 0-.007-.054l-.542-4.386-.405-4.897-.408-5.463a.615 1.172 0 0 0-.003-.045l-.544-5.698-.408-6.217-.409-6.507-.41-6.77a.615 1.172 0 0 0 0-.032l-.546-7.273-.408-7.53-.409-7.81-.41-8.075a.615 1.172 0 0 0-.001-.035l-.545-8.312-.409-8.838-.41-8.856a.615 1.172 0 0 0 0-.032l-.546-9.101-.408-9.099-.41-9.378-.41-9.635a.615 1.172 0 0 0 0-.029l-.548-9.887-.408-9.62-.41-10.16-.41-9.9a.615 1.172 0 0 0 0-.031l-.547-9.884-.405-10.052.405-10.052.547-9.884a.615 1.172 0 0 0 0-.031l.41-9.9a.615 1.172 0 0 0 0-.002l.41-10.157.408-9.623.546-9.884a.615 1.172 0 0 0 0-.028l.41-9.64.41-9.374.41-9.098.545-9.102a.615 1.172 0 0 0 0-.031l.41-8.857.41-8.837.544-8.316a.615 1.172 0 0 0 .001-.032l.41-8.074.409-7.81.408-7.53.546-7.274a.615 1.172 0 0 0 0-.031l.41-6.77.41-6.507.408-6.217.543-5.699a.615 1.172 0 0 0 .003-.044l.409-5.464.405-4.897.542-4.385a.615 1.172 0 0 0 .005-.054l.408-4.153.409-3.623.4-3.307.533-2.798a.615 1.172 0 0 0 .005-.032l.402-2.296.392-1.749.337-1.285.416-.594z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 1.17893,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          id="x-band"
          d="M-427.221 185.827a.612 1.462 0 0 0-.534.17l-.407.65a.612 1.462 0 0 0-.17.405l-.543 1.951a.612 1.462 0 0 0-.065.298l-.406 2.598a.612 1.462 0 0 0-.023.159l-.406 3.886-.542 4.863a.612 1.462 0 0 0-.013.15l-.408 6.171a.612 1.462 0 0 0 0 .022l-.409 6.822a.612 1.462 0 0 0-.002.022l-.406 7.78-.542 8.758a.612 1.462 0 0 0-.002.061l-.408 9.423a.612 1.462 0 0 0 0 .018l-.408 10.399a.612 1.462 0 0 0 0 .018l-.408 11.35-.543 11.68a.612 1.462 0 0 0-.002.046l-.408 12.672a.612 1.462 0 0 0 0 .005l-.406 12.98-.544 13.632a.612 1.462 0 0 0-.002.04l-.407 13.971a.612 1.462 0 0 0 0 .005l-.408 14.62a.612 1.462 0 0 0 0 .004l-.408 14.928-.542 14.932a.612 1.462 0 0 0-.002.03l-.407 15.27-.408 15.27a.611 1.462 0 0 0 .035.094.611 1.462 0 0 0-.035.091l.408 15.273.407 15.27a.612 1.462 0 0 0 .002.03l.542 14.932.408 14.928a.612 1.462 0 0 0 0 .005l.408 14.619a.612 1.462 0 0 0 0 .005l.407 13.972a.612 1.462 0 0 0 .002.04l.544 13.631.406 12.98a.612 1.462 0 0 0 0 .006l.408 12.671a.612 1.462 0 0 0 .002.046l.543 11.68.408 11.35a.612 1.462 0 0 0 0 .018l.408 10.4a.612 1.462 0 0 0 0 .017l.408 9.423a.612 1.462 0 0 0 .002.061l.542 8.757.406 7.778a.612 1.462 0 0 0 .002.03l.409 6.822a.612 1.462 0 0 0 0 .022l.408 6.171a.612 1.462 0 0 0 .013.15l.542 4.863.406 3.886a.612 1.462 0 0 0 .023.16l.406 2.597a.612 1.462 0 0 0 .065.297l.543 1.952a.612 1.462 0 0 0 .17.404l.407.651a.612 1.462 0 0 0 .534.17l.406-.325a.612 1.462 0 0 0 .297-.511l.407-1.297a.612 1.462 0 0 0 .058-.227l.544-2.597a.612 1.462 0 0 0 .038-.234l.408-3.249a.612 1.462 0 0 0 .013-.115l.408-4.549a.612 1.462 0 0 0 .007-.054l.407-5.504.542-6.485a.612 1.462 0 0 0 .007-.095l.406-7.472a.612 1.462 0 0 0 .002-.017l.409-8.123a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.005l.408-9.082.542-10.054a.612 1.462 0 0 0 .002-.053l.408-10.72a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-11.355.543-12.005a.612 1.462 0 0 0 .002-.046l.408-12.671a.612 1.462 0 0 0 0-.005l.406-13.322a.612 1.462 0 0 0 .002 0l.406-13.631.543-13.957a.612 1.462 0 0 0 .002-.04l.408-14.293.408-14.297a.612 1.462 0 0 0 0-.005l.406-14.928.16-4.375.524 14.123.406 14.603a.612 1.462 0 0 0 0 .005l.408 14.293a.612 1.462 0 0 0 0 .01l.408 13.643a.612 1.462 0 0 0 .002.04l.543 13.631.408 12.981a.612 1.462 0 0 0 0 .005l.406 12.346a.612 1.462 0 0 0 0 .005l.408 12.021a.612 1.462 0 0 0 .002.046l.544 11.359.407 10.379a.612 1.462 0 0 0 0 .017l.408 9.745a.612 1.462 0 0 0 .002.061l.542 9.078.406 8.107a.612 1.462 0 0 0 .002.022l.408 7.147a.612 1.462 0 0 0 0 .022l.409 6.5a.612 1.462 0 0 0 .013.135l.54 5.176.407 4.525a.612 1.462 0 0 0 .013.115l.408 3.248a.612 1.462 0 0 0 .013.092l.408 2.601a.612 1.462 0 0 0 .139.52l.544 1.3a.612 1.462 0 0 0 .239.354l.408.325a.612 1.462 0 0 0 .532-.17l.407-.65a.612 1.462 0 0 0 .17-.409l.543-1.947a.612 1.462 0 0 0 .065-.298l.408-2.598a.612 1.462 0 0 0 .015-.13l.408-3.574a.612 1.462 0 0 0 .01-.099l.404-4.847.54-5.5a.612 1.462 0 0 0 .01-.12l.408-6.495a.612 1.462 0 0 0 .002-.031l.408-7.472a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.01l.408-8.427.54-9.079a.612 1.462 0 0 0 .003-.061l.408-9.748a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-10.72a.612 1.462 0 0 0 0-.005l.408-11.034.542-12.005a.612 1.462 0 0 0 .002-.046l.408-12.346a.612 1.462 0 0 0 0-.005l.407-12.656.544-13.306a.612 1.462 0 0 0 0-.04l.408-13.646a.612 1.462 0 0 0 0-.005l.408-13.969.406-13.956.473-12.394.075 2.63a.612 1.462 0 0 0 .002.03l.542 14.282.408 13.635.407 13.643a.612 1.462 0 0 0 .002.04l.544 13.302.406 12.98a.612 1.462 0 0 0 0 .006l.408 12.346a.612 1.462 0 0 0 0 .01l.408 11.695a.612 1.462 0 0 0 .002.047l.543 11.358.408 10.383a.612 1.462 0 0 0 0 .005l.406 10.07a.612 1.462 0 0 0 .002.018l.408 9.098a.612 1.462 0 0 0 .002.061l.543 8.432.406 7.456a.612 1.462 0 0 0 .002.03l.408 6.5a.612 1.462 0 0 0 .007.1l.543 5.834.406 4.858a.612 1.462 0 0 0 .007.07l.408 3.898a.612 1.462 0 0 0 .013.106l.408 2.923a.612 1.462 0 0 0 .072.35l.542 1.951a.612 1.462 0 0 0 .076.222l.408.975a.612 1.462 0 0 0 .433.425h.407a.612 1.462 0 0 0 .433-.425l.408-.975a.612 1.462 0 0 0 .098-.31l.544-2.272a.612 1.462 0 0 0 .05-.266l.406-2.923a.612 1.462 0 0 0 .013-.106l.406-3.887.543-4.862a.612 1.462 0 0 0 .013-.123l.408-5.525a.612 1.462 0 0 0 .002-.046l.408-6.821a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-7.135.543-8.436a.612 1.462 0 0 0 .007-.061l.406-9.098a.612 1.462 0 0 0 .002-.018l.406-9.744a.612 1.462 0 0 0 0-.005l.408-10.058.543-11.033a.612 1.462 0 0 0 .002-.046l.408-11.696a.612 1.462 0 0 0 0-.005l.408-12.021a.612 1.462 0 0 0 0-.005l.406-12.33.544-12.981a.612 1.462 0 0 0 .002-.04l.407-12.996a.612 1.462 0 0 0 0-.005l.408-13.631.542-13.628a.612 1.462 0 0 0 .002-.03l.234-7.83.314 7.845.406 13.306.408 13.322.408 12.997a.612 1.462 0 0 0 .002.04l.543 12.655.406 12.005a.612 1.462 0 0 0 0 .005l.408 11.696a.612 1.462 0 0 0 .002.053l.544 11.026.407 10.704a.612 1.462 0 0 0 0 .018l.408 9.744a.612 1.462 0 0 0 0 .01l.408 9.42a.612 1.462 0 0 0 .002.069l.542 8.428.407 7.777a.612 1.462 0 0 0 .002.03l.408 6.822a.612 1.462 0 0 0 .002.022l.406 6.175a.612 1.462 0 0 0 .013.127l.543 5.183.406 4.212a.612 1.462 0 0 0 .009.092l.408 3.248a.612 1.462 0 0 0 .038.234l.544 2.598a.612 1.462 0 0 0 .023.099l.408 1.626a.612 1.462 0 0 0 .186.464l.406.65a.612 1.462 0 0 0 .679 0l.408-.65a.612 1.462 0 0 0 .092-.183l.544-1.3a.612 1.462 0 0 0 .115-.381l.408-1.947a.612 1.462 0 0 0 .038-.235l.408-3.248a.612 1.462 0 0 0 .01-.09l.404-4.2.543-4.851a.612 1.462 0 0 0 .013-.135l.408-5.85a.612 1.462 0 0 0 .002-.022l.406-6.48.542-7.457a.612 1.462 0 0 0 .007-.077l.407-8.122a.612 1.462 0 0 0 .002-.018l.406-8.772a.612 1.462 0 0 0 .002-.018l.407-9.403.542-10.054a.612 1.462 0 0 0 .007-.054l.406-10.72a.612 1.462 0 0 0 .002-.01l.407-11.37a.612 1.462 0 0 0 0-.006l.408-11.68.542-12a.612 1.462 0 0 0 .002-.047l.408-12.346a.612 1.462 0 0 0 0-.005l.408-12.671.407-12.977.542-12.98a.612 1.462 0 0 0 .002-.04l.137-4.308.002.1.408 12.98a.612 1.462 0 0 0 0 .005l.408 12.672.406 12.346a.612 1.462 0 0 0 .002.04l.542 12.326.408 12.005a.612 1.462 0 0 0 0 .01l.409 11.37a.612 1.462 0 0 0 0 .005l.408 11.046a.612 1.462 0 0 0 .002.054l.542 10.379.406 9.728a.612 1.462 0 0 0 .002.018l.407 9.098a.612 1.462 0 0 0 .002.061l.542 8.753.408 7.781a.612 1.462 0 0 0 0 .018l.408 7.15a.612 1.462 0 0 0 .002.031l.408 6.175a.612 1.462 0 0 0 .01.107l.54 5.497.407 4.85a.612 1.462 0 0 0 .009.1l.408 3.573a.612 1.462 0 0 0 .009.077l.408 2.926a.612 1.462 0 0 0 .05.262l.544 2.273a.612 1.462 0 0 0 .097.309l.409.975a.612 1.462 0 0 0 .238.353l.408.325a.612 1.462 0 0 0 .467-.08l.544-.65a.612 1.462 0 0 0 .25-.555l.408-1.626a.612 1.462 0 0 0 .037-.174l.408-2.277a.612 1.462 0 0 0 .022-.155l.408-3.244.543-4.216a.612 1.462 0 0 0 .015-.162l.408-5.2a.612 1.462 0 0 0 .002-.018l.406-5.52a.612 1.462 0 0 0 .002-.046l.407-6.794.54-7.123a.612 1.462 0 0 0 .007-.087l.408-8.122a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-8.428.542-9.408a.612 1.462 0 0 0 .002-.053l.408-9.745a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-10.395a.612 1.462 0 0 0 0-.005l.407-10.704.542-11.355a.612 1.462 0 0 0 .002-.046l.408-11.7.408-11.695a.612 1.462 0 0 0 0-.005l.407-12.327.542-12.33a.612 1.462 0 0 0 .002-.04l.388-11.75.161 3.648.406 12.326a.612 1.462 0 0 0 0 .005l.409 12.021a.612 1.462 0 0 0 .002.046l.542 11.676.406 11.676a.612 1.462 0 0 0 .002.005l.407 11.05a.612 1.462 0 0 0 0 .004l.408 10.72a.612 1.462 0 0 0 .002.047l.542 10.379.407 9.728a.612 1.462 0 0 0 0 .013l.408 9.098a.612 1.462 0 0 0 0 .018l.408 8.448a.612 1.462 0 0 0 .002.06l.542 8.103.407 7.131a.612 1.462 0 0 0 .002.022l.408 6.5a.612 1.462 0 0 0 .009.1l.54 5.834.407 4.858a.612 1.462 0 0 0 .007.04l.406 4.224a.612 1.462 0 0 0 .013.09l.407 3.253a.612 1.462 0 0 0 .04.23l.542 2.602a.612 1.462 0 0 0 .022.099l.408 1.622a.612 1.462 0 0 0 .185.464l.408.65a.612 1.462 0 0 0 .34.246h.406a.612 1.462 0 0 0 .368-.293l.543-.972a.612 1.462 0 0 0 .157-.42l.408-1.623a.612 1.462 0 0 0 .049-.241l.408-2.598a.612 1.462 0 0 0 .002-.017l.544-3.574a.612 1.462 0 0 0 .02-.174l.407-4.224a.612 1.462 0 0 0 .007-.04l.407-4.873a.612 1.462 0 0 0 .002-.046l.406-5.823.542-6.476a.612 1.462 0 0 0 .007-.088l.408-7.15a.612 1.462 0 0 0 .002-.018l.409-7.797a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-8.424.542-8.75a.612 1.462 0 0 0 .002-.068l.408-9.745a.612 1.462 0 0 0 0-.005l.407-10.054.542-10.375a.612 1.462 0 0 0 .002-.046l.407-10.724a.612 1.462 0 0 0 0-.005l.408-11.045a.612 1.462 0 0 0 0-.005l.408-11.355.542-11.676a.612 1.462 0 0 0 .002-.04l.407-11.695.278-7.972.27 7.968a.612 1.462 0 0 0 0 .01l.409 11.37.406 11.371a.612 1.462 0 0 0 .002.04l.544 11.354.406 10.704a.612 1.462 0 0 0 0 .005l.408 10.4a.612 1.462 0 0 0 .002.053l.543 10.05.406 9.724a.612 1.462 0 0 0 .002.018l.407 9.098a.612 1.462 0 0 0 .002.017l.408 8.448a.612 1.462 0 0 0 .002.061l.542 8.103.407 7.13a.612 1.462 0 0 0 0 .018l.408 6.822a.612 1.462 0 0 0 .002.03l.408 5.85a.612 1.462 0 0 0 .009.116l.54 5.175.407 4.522a.612 1.462 0 0 0 .009.078l.406 3.574a.612 1.462 0 0 0 .032.21l.543 2.915.406 2.265a.612 1.462 0 0 0 .072.302l.408 1.3a.612 1.462 0 0 0 .297.508l.406.325a.612 1.462 0 0 0 .342.03l.544-.325a.612 1.462 0 0 0 .283-.384l.409-.976a.612 1.462 0 0 0 .114-.377l.408-1.951a.612 1.462 0 0 0 .033-.19l.402-2.907.54-3.554a.612 1.462 0 0 0 .023-.17l.407-4.224a.612 1.462 0 0 0 .007-.046l.406-4.859.542-5.83a.612 1.462 0 0 0 .007-.09l.408-6.172a.612 1.462 0 0 0 .002-.03l.407-7.147a.612 1.462 0 0 0 .002-.01l.406-7.452.543-8.103a.612 1.462 0 0 0 .002-.069l.408-8.769a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-9.423.406-9.403.543-10.054a.612 1.462 0 0 0 .002-.054l.406-10.395a.612 1.462 0 0 0 .002-.005l.406-10.704.543-11.026a.612 1.462 0 0 0 .002-.046l.408-11.045.408-11.045a.612 1.462 0 0 0 0-.005l.14-3.895.407 11.045.408 11.046a.612 1.462 0 0 0 .002.046l.543 10.7.406 10.7a.612 1.462 0 0 0 .002.01l.406 10.074a.612 1.462 0 0 0 0 .005l.408 9.744a.612 1.462 0 0 0 .002.046l.543 9.733.406 8.757a.612 1.462 0 0 0 0 .005l.408 8.447a.612 1.462 0 0 0 .002.062l.543 8.106.406 7.131a.612 1.462 0 0 0 .002.01l.408 6.826a.612 1.462 0 0 0 0 .022l.408 6.175a.612 1.462 0 0 0 .01.106l.542 5.509.406 4.533a.612 1.462 0 0 0 .002.022l.408 4.224a.612 1.462 0 0 0 .01.091l.407 3.252a.612 1.462 0 0 0 .039.234l.544 2.598a.612 1.462 0 0 0 .022.1l.407 1.621a.612 1.462 0 0 0 .092.282l.408.975a.612 1.462 0 0 0 .284.385l.544.325a.612 1.462 0 0 0 .488-.202l.406-.651a.612 1.462 0 0 0 .151-.337l.407-1.301a.612 1.462 0 0 0 .058-.222l.408-1.951a.612 1.462 0 0 0 .013-.062l.544-2.923a.612 1.462 0 0 0 .032-.21l.406-3.574a.612 1.462 0 0 0 .007-.053l.408-4.224a.612 1.462 0 0 0 .007-.061l.405-5.164.541-5.493a.612 1.462 0 0 0 .009-.106l.408-6.172a.612 1.462 0 0 0 .002-.022l.406-6.797.541-7.452a.612 1.462 0 0 0 .007-.077l.408-8.122a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-8.448a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-8.753.542-9.4a.612 1.462 0 0 0 .002-.053l.408-9.748a.612 1.462 0 0 0 0-.005l.408-10.07.407-10.054.542-10.375a.612 1.462 0 0 0 .002-.046l.408-10.724.407-10.7.007-.084.137 3.637.407 10.72a.612 1.462 0 0 0 .002.053l.542 10.376.406 10.05.408 10.073a.612 1.462 0 0 0 0 .01l.409 9.423a.612 1.462 0 0 0 .002.046l.542 9.404.408 8.753a.612 1.462 0 0 0 0 .01l.408 8.447a.612 1.462 0 0 0 0 .005l.406 8.123a.612 1.462 0 0 0 .007.079l.543 7.448.406 6.801a.612 1.462 0 0 0 .002.022l.408 6.175a.612 1.462 0 0 0 .01.107l.54 5.489.405 5.168a.612 1.462 0 0 0 .007.06l.408 4.225a.612 1.462 0 0 0 .007.053l.408 3.574a.612 1.462 0 0 0 .032.21l.54 2.915.407 2.265a.612 1.462 0 0 0 .073.301l.408 1.301a.612 1.462 0 0 0 .057.155l.408.976a.612 1.462 0 0 0 .433.428h.542a.612 1.462 0 0 0 .433-.428l.408-.976a.612 1.462 0 0 0 .057-.155l.408-1.3a.612 1.462 0 0 0 .041-.151l.544-2.277a.612 1.462 0 0 0 .048-.261l.408-2.927a.612 1.462 0 0 0 .01-.077l.407-3.573a.612 1.462 0 0 0 .007-.08l.405-4.512.54-4.839a.612 1.462 0 0 0 .01-.123l.408-5.52a.612 1.462 0 0 0 .002-.031l.408-6.175a.612 1.462 0 0 0 .002-.022l.406-6.794.541-7.123a.612 1.462 0 0 0 .007-.079l.408-7.797a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-8.42.542-8.42a.612 1.462 0 0 0 .002-.068l.408-9.098a.612 1.462 0 0 0 0-.005l.408-9.424a.612 1.462 0 0 0 0-.005l.406-9.724.543-9.721a.612 1.462 0 0 0 .002-.054l.408-10.07a.612 1.462 0 0 0 0-.005l.408-10.394.274-6.782.275 6.782a.612 1.462 0 0 0 .002.046l.543 10.05.408 10.045a.612 1.462 0 0 0 0 .01l.406 9.745a.612 1.462 0 0 0 .002.005l.407 9.423a.612 1.462 0 0 0 .002.054l.542 9.074.406 9.07a.612 1.462 0 0 0 0 .023l.408 8.122.408 8.122a.612 1.462 0 0 0 .007.077l.541 7.444.407 7.123a.612 1.462 0 0 0 .002.031l.408 6.171a.612 1.462 0 0 0 .002.018l.406 5.85a.612 1.462 0 0 0 .01.095l.542 5.509.406 4.533a.612 1.462 0 0 0 .007.046l.406 3.898a.612 1.462 0 0 0 .026.19l.54 3.233.406 2.586a.612 1.462 0 0 0 .025.139l.408 1.951a.612 1.462 0 0 0 .057.222l.408 1.3a.612 1.462 0 0 0 .342.54l.542.326a.612 1.462 0 0 0 .15.046h.407a.612 1.462 0 0 0 .432-.429l.408-.975a.612 1.462 0 0 0 .091-.282l.408-1.622a.612 1.462 0 0 0 .023-.099l.542-2.598a.612 1.462 0 0 0 .033-.194l.408-2.923a.612 1.462 0 0 0 .01-.079l.406-3.565.542-4.537a.612 1.462 0 0 0 .013-.116l.408-4.874a.612 1.462 0 0 0 .002-.03l.407-5.525a.612 1.462 0 0 0 .002-.03l.404-6.144.541-6.469a.612 1.462 0 0 0 .007-.095l.408-7.472.408-7.476a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-8.098.542-8.424a.612 1.462 0 0 0 .002-.062l.405-8.772a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-9.396.543-9.066a.612 1.462 0 0 0 .002-.061l.408-9.745.406-9.748a.612 1.462 0 0 0 0-.005l.408-10.046.16-2.868.39 9.344a.612 1.462 0 0 0 .001.046l.543 9.725.406 9.72a.612 1.462 0 0 0 0 .006l.408 9.423a.612 1.462 0 0 0 .002.054l.54 9.074.409 8.749a.612 1.462 0 0 0 0 .01l.406 8.447a.612 1.462 0 0 0 .002.01l.407 8.123a.612 1.462 0 0 0 .007.077l.542 7.444.407 7.123a.612 1.462 0 0 0 0 .01l.408 6.825a.612 1.462 0 0 0 .002.03l.408 5.85a.612 1.462 0 0 0 .009.092l.539 5.493.406 5.164a.612 1.462 0 0 0 .007.06l.407 4.225a.612 1.462 0 0 0 .007.054l.408 3.573a.612 1.462 0 0 0 .029.21l.537 2.884.402 2.558a.612 1.462 0 0 0 .048.241l.406 1.622a.612 1.462 0 0 0 .158.42l.544.972a.612 1.462 0 0 0 .174.218l.406.325a.612 1.462 0 0 0 .533-.17l.408-.65a.612 1.462 0 0 0 .093-.183l.408-.976a.612 1.462 0 0 0 .076-.221l.544-1.948a.612 1.462 0 0 0 .053-.238l.408-2.272a.612 1.462 0 0 0 .023-.156l.408-3.252a.612 1.462 0 0 0 .002-.03l.408-3.566.542-4.541a.612 1.462 0 0 0 .013-.115l.407-4.875a.612 1.462 0 0 0 .007-.046l.404-5.806.54-5.81a.612 1.462 0 0 0 .009-.111l.408-6.826a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-7.147a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-7.452.542-8.102a.612 1.462 0 0 0 .007-.062l.407-8.447a.612 1.462 0 0 0 0-.005l.408-8.773a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-9.07.543-9.07a.612 1.462 0 0 0 .002-.054l.408-9.424a.612 1.462 0 0 0 0-.005l.406-9.724.471-8.436.08 1.916a.612 1.462 0 0 0 .002.046l.542 9.724.408 9.4.407 9.423a.612 1.462 0 0 0 0 .005l.408 9.098a.612 1.462 0 0 0 .002.061l.542 8.745.407 8.745a.612 1.462 0 0 0 0 .018l.408 8.122a.612 1.462 0 0 0 .002.07l.542 7.773.406 7.444a.612 1.462 0 0 0 0 .022l.408 6.821a.612 1.462 0 0 0 .002.022l.409 6.175a.612 1.462 0 0 0 .007.088l.54 5.818.405 5.493a.612 1.462 0 0 0 .007.054l.408 4.55a.612 1.462 0 0 0 .002.021l.408 4.224a.612 1.462 0 0 0 .029.214l.536 3.208.403 2.884a.612 1.462 0 0 0 .033.194l.406 1.947a.612 1.462 0 0 0 .023.1l.408 1.625a.612 1.462 0 0 0 .25.555l.544.65a.612 1.462 0 0 0 .08.08l.408.325a.612 1.462 0 0 0 .532-.17l.407-.651a.612 1.462 0 0 0 .094-.183l.543-1.301a.612 1.462 0 0 0 .114-.38l.409-1.948a.612 1.462 0 0 0 .025-.143l.407-2.597a.612 1.462 0 0 0 .013-.096l.404-3.228.541-3.875a.612 1.462 0 0 0 .02-.158l.408-4.545a.612 1.462 0 0 0 .007-.04l.406-5.2a.612 1.462 0 0 0 .002-.017l.407-5.5.54-6.152a.612 1.462 0 0 0 .01-.091l.406-6.825a.612 1.462 0 0 0 .002-.01l.406-7.127.54-7.778a.612 1.462 0 0 0 .008-.061l.408-8.122a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-8.448.406-8.428.543-9.078a.612 1.462 0 0 0 .002-.054l.408-9.423.408-9.42.406-9.403.344-6.17.345 6.17.406 9.404.408 9.419.408 9.423a.612 1.462 0 0 0 .002.054l.543 9.078.406 8.428.408 8.448a.612 1.462 0 0 0 0 .01l.408 8.122a.612 1.462 0 0 0 .007.061l.54 7.778.407 7.127a.612 1.462 0 0 0 .002.01l.407 6.825a.612 1.462 0 0 0 .009.091l.54 6.151.407 5.501a.612 1.462 0 0 0 0 .018l.408 5.2a.612 1.462 0 0 0 .002.039l.408 4.545a.612 1.462 0 0 0 .02.159l.54 3.874.405 3.229a.612 1.462 0 0 0 .013.095l.406 2.597a.612 1.462 0 0 0 .026.143l.408 1.948a.612 1.462 0 0 0 .115.38l.542 1.301a.612 1.462 0 0 0 .093.183l.408.65a.612 1.462 0 0 0 .532.171l.408-.325a.612 1.462 0 0 0 .078-.079l.545-.65a.612 1.462 0 0 0 .25-.556l.408-1.626a.612 1.462 0 0 0 .026-.099l.406-1.947a.612 1.462 0 0 0 .033-.194l.403-2.884.536-3.208a.612 1.462 0 0 0 .029-.214l.408-4.224a.612 1.462 0 0 0 .002-.022l.408-4.549a.612 1.462 0 0 0 .007-.054l.405-5.493.54-5.818a.612 1.462 0 0 0 .008-.087l.408-6.175a.612 1.462 0 0 0 .002-.022l.408-6.822a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-7.444.543-7.773a.612 1.462 0 0 0 .002-.07l.408-8.122a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-8.745.542-8.745a.612 1.462 0 0 0 .002-.061l.408-9.098a.612 1.462 0 0 0 0-.005l.407-9.424.408-9.4.542-9.724a.612 1.462 0 0 0 .002-.046l.08-1.915.471 8.435.406 9.725a.612 1.462 0 0 0 0 .005l.408 9.423a.612 1.462 0 0 0 .002.054l.543 9.07.406 9.07a.612 1.462 0 0 0 0 .01l.407 8.773a.612 1.462 0 0 0 .002.005l.406 8.448a.612 1.462 0 0 0 .007.061l.54 8.103.409 7.452a.612 1.462 0 0 0 0 .01l.408 7.147a.612 1.462 0 0 0 0 .01l.408 6.825a.612 1.462 0 0 0 .01.112l.538 5.81.405 5.806a.612 1.462 0 0 0 .007.046l.406 4.874a.612 1.462 0 0 0 .013.116l.543 4.54.408 3.566a.612 1.462 0 0 0 .002.031l.408 3.252a.612 1.462 0 0 0 .022.155l.408 2.273a.612 1.462 0 0 0 .053.238l.545 1.947a.612 1.462 0 0 0 .074.222l.408.976a.612 1.462 0 0 0 .093.183l.407.65a.612 1.462 0 0 0 .534.17l.406-.325a.612 1.462 0 0 0 .174-.218l.544-.972a.612 1.462 0 0 0 .158-.42l.406-1.622a.612 1.462 0 0 0 .048-.242l.402-2.558.536-2.883a.612 1.462 0 0 0 .032-.21l.408-3.574a.612 1.462 0 0 0 .009-.054l.406-4.223a.612 1.462 0 0 0 .007-.062l.407-5.163.539-5.493a.612 1.462 0 0 0 .009-.091l.408-5.85a.612 1.462 0 0 0 .002-.03l.408-6.826a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-7.123.543-7.444a.612 1.462 0 0 0 .007-.077l.406-8.123a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-8.447a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-8.75.541-9.074a.612 1.462 0 0 0 .002-.053l.408-9.423a.612 1.462 0 0 0 0-.005l.406-9.72.543-9.726a.612 1.462 0 0 0 .002-.046l.391-9.343.16 2.867.406 10.046a.612 1.462 0 0 0 .002.005l.406 9.748.408 9.745a.612 1.462 0 0 0 .002.061l.543 9.066.406 9.396a.612 1.462 0 0 0 0 .017l.408 8.773a.612 1.462 0 0 0 .002.062l.543 8.423.406 8.099a.612 1.462 0 0 0 0 .017l.408 7.476.408 7.472a.612 1.462 0 0 0 .007.096l.54 6.468.406 6.144a.612 1.462 0 0 0 .002.03l.408 5.525a.612 1.462 0 0 0 .002.03l.408 4.875a.612 1.462 0 0 0 .013.115l.542 4.537.407 3.566a.612 1.462 0 0 0 .009.078l.408 2.923a.612 1.462 0 0 0 .033.195l.542 2.597a.612 1.462 0 0 0 .023.1l.408 1.622a.612 1.462 0 0 0 .091.281l.408.976a.612 1.462 0 0 0 .431.428h.408a.612 1.462 0 0 0 .15-.046l.542-.325a.612 1.462 0 0 0 .342-.54l.408-1.3a.612 1.462 0 0 0 .056-.223l.408-1.95a.612 1.462 0 0 0 .026-.14l.405-2.586.54-3.232a.612 1.462 0 0 0 .026-.19l.409-3.899a.612 1.462 0 0 0 .007-.046l.406-4.533.542-5.509a.612 1.462 0 0 0 .01-.095l.406-5.85a.612 1.462 0 0 0 .002-.017l.408-6.172a.612 1.462 0 0 0 .002-.03l.406-7.123.541-7.444a.612 1.462 0 0 0 .007-.077l.408-8.123.408-8.122a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.005l.407-9.07.542-9.074a.612 1.462 0 0 0 .007-.054l.406-9.423a.612 1.462 0 0 0 .002-.005l.407-9.745a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-10.045.542-10.05a.612 1.462 0 0 0 .002-.046l.276-6.782.273 6.782.409 10.395a.612 1.462 0 0 0 0 .005l.406 10.07a.612 1.462 0 0 0 .002.053l.542 9.72.407 9.725a.612 1.462 0 0 0 0 .005l.408 9.424a.612 1.462 0 0 0 0 .005l.408 9.098a.612 1.462 0 0 0 .002.069l.542 8.42.407 8.42a.612 1.462 0 0 0 0 .017l.408 7.797a.612 1.462 0 0 0 .007.08l.54 7.122.407 6.794a.612 1.462 0 0 0 .002.022l.408 6.175a.612 1.462 0 0 0 .002.03l.406 5.522a.612 1.462 0 0 0 .013.122l.541 4.839.405 4.513a.612 1.462 0 0 0 .007.079l.408 3.573a.612 1.462 0 0 0 .009.077l.408 2.927a.612 1.462 0 0 0 .048.262l.544 2.276a.612 1.462 0 0 0 .042.15l.408 1.301a.612 1.462 0 0 0 .056.156l.408.975a.612 1.462 0 0 0 .433.429h.542a.612 1.462 0 0 0 .433-.429l.408-.975a.612 1.462 0 0 0 .057-.156l.408-1.3a.612 1.462 0 0 0 .073-.302l.406-2.265.541-2.915a.612 1.462 0 0 0 .032-.21l.408-3.573a.612 1.462 0 0 0 .007-.054l.408-4.224a.611 1.462 0 0 0 0-.04.611 1.462 0 0 0 .007-.022l.405-5.167.54-5.49a.612 1.462 0 0 0 .01-.106l.408-6.175a.612 1.462 0 0 0 .002-.022l.406-6.801.543-7.449a.612 1.462 0 0 0 .002-.078l.408-8.123a.612 1.462 0 0 0 0-.005l.408-8.447a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-8.753.542-9.404a.612 1.462 0 0 0 .002-.046l.408-9.423a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-10.074.407-10.05.542-10.375a.612 1.462 0 0 0 .002-.053l.407-10.72.137-3.637.007.084.407 10.7.408 10.724a.612 1.462 0 0 0 .002.046l.542 10.375.407 10.054.408 10.07a.612 1.462 0 0 0 0 .005l.408 9.748a.612 1.462 0 0 0 .002.054l.542 9.4.407 8.752a.612 1.462 0 0 0 0 .01l.408 8.448a.612 1.462 0 0 0 0 .01l.408 8.122a.612 1.462 0 0 0 .007.077l.54 7.452.407 6.798a.612 1.462 0 0 0 .002.022l.408 6.171a.612 1.462 0 0 0 .009.106l.54 5.493.405 5.164a.612 1.462 0 0 0 .007.061l.409 4.224a.612 1.462 0 0 0 .007.054l.406 3.573a.612 1.462 0 0 0 .032.21l.544 2.924a.612 1.462 0 0 0 .013.061l.408 1.951a.612 1.462 0 0 0 .057.222l.408 1.301a.612 1.462 0 0 0 .15.337l.407.651a.612 1.462 0 0 0 .488.202l.544-.325a.612 1.462 0 0 0 .284-.385l.408-.975a.612 1.462 0 0 0 .091-.282l.408-1.622a.612 1.462 0 0 0 .023-.1l.544-2.597a.612 1.462 0 0 0 .038-.234l.408-3.252a.612 1.462 0 0 0 .009-.092l.408-4.223a.612 1.462 0 0 0 .002-.022l.406-4.533.543-5.51a.612 1.462 0 0 0 .009-.107l.408-6.175a.612 1.462 0 0 0 0-.017.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-6.826a.612 1.462 0 0 0 .002-.01l.406-7.13.543-8.107a.612 1.462 0 0 0 .002-.061l.408-8.448a.612 1.462 0 0 0 0-.005l.406-8.757.543-9.732a.612 1.462 0 0 0 .002-.047l.406-9.744a.612 1.462 0 0 0 .002-.005l.407-10.074a.612 1.462 0 0 0 .002-.01l.406-10.7.542-10.7a.612 1.462 0 0 0 .002-.046l.408-11.046.408-11.045.14 3.895a.612 1.462 0 0 0 0 .005l.408 11.045.408 11.045a.612 1.462 0 0 0 .002.046l.542 11.026.406 10.704a.612 1.462 0 0 0 .002.005l.406 10.395a.612 1.462 0 0 0 .003.054l.542 10.054.406 9.403.409 9.423a.612 1.462 0 0 0 0 .013l.408 8.77a.612 1.462 0 0 0 .002.068l.542 8.103.407 7.452a.612 1.462 0 0 0 0 .01l.408 7.147a.612 1.462 0 0 0 .001.03l.408 6.171a.612 1.462 0 0 0 .007.091l.542 5.83.407 4.859a.612 1.462 0 0 0 .002.046l.408 4.224a.612 1.462 0 0 0 .022.17l.541 3.554.405 2.907a.612 1.462 0 0 0 .033.19l.408 1.952a.612 1.462 0 0 0 .115.377l.408.975a.612 1.462 0 0 0 .283.385l.544.325a.612 1.462 0 0 0 .342-.03l.407-.326a.612 1.462 0 0 0 .296-.507l.409-1.301a.612 1.462 0 0 0 .07-.302l.407-2.264.543-2.915a.612 1.462 0 0 0 .032-.21l.406-3.574a.612 1.462 0 0 0 .009-.079l.406-4.521.54-5.176a.612 1.462 0 0 0 .01-.115l.408-5.85a.612 1.462 0 0 0 .001-.03l.408-6.822a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-7.131.542-8.103a.612 1.462 0 0 0 .002-.061l.408-8.448a.612 1.462 0 0 0 .002-.017l.406-9.098a.612 1.462 0 0 0 .002-.018l.407-9.725.542-10.05a.612 1.462 0 0 0 .002-.053l.408-10.399a.612 1.462 0 0 0 0-.005l.406-10.704.544-11.355a.612 1.462 0 0 0 .002-.04l.406-11.37.408-11.37a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.27-7.96.278 7.964.408 11.695a.612 1.462 0 0 0 .001.04l.543 11.676.408 11.354a.612 1.462 0 0 0 0 .01l.408 11.046a.612 1.462 0 0 0 0 .005l.406 10.724a.612 1.462 0 0 0 .002.046l.543 10.375.406 10.054a.612 1.462 0 0 0 0 .005l.408 9.744a.612 1.462 0 0 0 .003.07l.542 8.749.406 8.424a.612 1.462 0 0 0 0 .017l.408 7.797a.612 1.462 0 0 0 .002.018l.407 7.15a.612 1.462 0 0 0 .006.088l.542 6.477.407 5.822a.612 1.462 0 0 0 .002.046l.406 4.874a.612 1.462 0 0 0 .007.04l.406 4.223a.612 1.462 0 0 0 .023.174l.544 3.574a.612 1.462 0 0 0 .001.017l.408 2.598a.612 1.462 0 0 0 .049.242l.408 1.622a.612 1.462 0 0 0 .157.42l.543.972a.612 1.462 0 0 0 .368.293h.406a.612 1.462 0 0 0 .34-.245l.408-.651a.612 1.462 0 0 0 .185-.465l.408-1.622a.612 1.462 0 0 0 .022-.099l.543-2.602a.612 1.462 0 0 0 .04-.23l.406-3.252a.612 1.462 0 0 0 .008-.091l.408-4.224a.612 1.462 0 0 0 .007-.04l.406-4.858.541-5.834a.612 1.462 0 0 0 .009-.099l.408-6.5a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.005l.408-7.13.542-8.103a.612 1.462 0 0 0 .002-.062l.408-8.447a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-9.098a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.407-9.729.542-10.379a.612 1.462 0 0 0 .003-.046l.408-10.72a.612 1.462 0 0 0 0-.005l.406-11.05a.612 1.462 0 0 0 .002-.004l.406-11.676.542-11.676a.612 1.462 0 0 0 .002-.046l.408-12.021a.612 1.462 0 0 0 0-.005l.407-12.327.16-3.648.389 11.751a.612 1.462 0 0 0 0 .04l.544 12.33.406 12.326a.612 1.462 0 0 0 0 .005l.408 11.696.408 11.7a.612 1.462 0 0 0 .002.046l.542 11.355.407 10.704a.612 1.462 0 0 0 0 .005l.408 10.395a.612 1.462 0 0 0 0 .017l.408 9.745a.612 1.462 0 0 0 .002.053l.542 9.408.407 8.427a.612 1.462 0 0 0 0 .01l.408 8.123a.612 1.462 0 0 0 .009.087l.54 7.123.407 6.794a.612 1.462 0 0 0 .002.046l.406 5.52a.612 1.462 0 0 0 .002.018l.408 5.2a.612 1.462 0 0 0 .015.162l.543 4.216.408 3.244a.612 1.462 0 0 0 .022.156l.408 2.276a.612 1.462 0 0 0 .037.174l.408 1.626a.612 1.462 0 0 0 .25.556l.544.65a.612 1.462 0 0 0 .466.08l.408-.326a.612 1.462 0 0 0 .24-.353l.407-.975a.612 1.462 0 0 0 .098-.31l.544-2.272a.612 1.462 0 0 0 .05-.262l.406-2.927a.612 1.462 0 0 0 .01-.077l.407-3.573a.612 1.462 0 0 0 .009-.1l.406-4.85.54-5.497a.612 1.462 0 0 0 .01-.106l.408-6.175a.612 1.462 0 0 0 .001-.031l.408-7.15a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-7.781.543-8.753a.612 1.462 0 0 0 .002-.061l.408-9.098a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-9.729.542-10.379a.612 1.462 0 0 0 .002-.054l.408-11.045a.612 1.462 0 0 0 0-.005l.408-11.37a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-12.006.544-12.326a.612 1.462 0 0 0 .002-.04l.407-12.345.408-12.672a.612 1.462 0 0 0 0-.005l.408-12.98.002-.1.136 4.307a.612 1.462 0 0 0 .002.04l.542 12.98.407 12.977.408 12.672a.612 1.462 0 0 0 0 .005l.408 12.346a.612 1.462 0 0 0 .001.046l.543 12.001.408 11.68a.612 1.462 0 0 0 0 .005l.406 11.37a.612 1.462 0 0 0 .002.01l.406 10.72a.612 1.462 0 0 0 .003.055l.542 10.053.406 9.404a.612 1.462 0 0 0 .002.017l.406 8.773a.612 1.462 0 0 0 .002.018l.407 8.122a.612 1.462 0 0 0 .006.077l.542 7.456.407 6.48a.612 1.462 0 0 0 .001.023l.409 5.85a.612 1.462 0 0 0 .013.135l.542 4.85.405 4.2a.612 1.462 0 0 0 .008.091l.408 3.248a.612 1.462 0 0 0 .039.234l.408 1.948a.612 1.462 0 0 0 .114.38l.544 1.3a.612 1.462 0 0 0 .093.184l.408.65a.612 1.462 0 0 0 .678 0l.407-.65a.612 1.462 0 0 0 .186-.465l.408-1.626a.612 1.462 0 0 0 .022-.099l.544-2.597a.612 1.462 0 0 0 .039-.235l.408-3.248a.612 1.462 0 0 0 .008-.09l.407-4.213.542-5.183a.612 1.462 0 0 0 .013-.127l.406-6.175a.612 1.462 0 0 0 .002-.022l.408-6.822a.612 1.462 0 0 0 .002-.03l.406-7.778.543-8.427a.612 1.462 0 0 0 .002-.07l.408-9.419a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-9.744a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-10.704.543-11.026a.612 1.462 0 0 0 .002-.053l.406-11.696a.612 1.462 0 0 0 .002-.005l.406-12.005.543-12.656a.612 1.462 0 0 0 .002-.04l.408-12.996.408-13.322.406-13.306.314-7.86.234 7.845a.612 1.462 0 0 0 .001.03l.543 13.627.408 13.632a.612 1.462 0 0 0 0 .005l.406 12.996a.612 1.462 0 0 0 .002.04l.542 12.98.408 12.33a.612 1.462 0 0 0 0 .006l.409 12.02a.612 1.462 0 0 0 0 .006l.408 11.695a.612 1.462 0 0 0 .001.047l.543 11.033.406 10.058a.612 1.462 0 0 0 .002.005l.406 9.744a.612 1.462 0 0 0 .002.018l.406 9.098a.612 1.462 0 0 0 .007.061l.542 8.436.407 7.135a.612 1.462 0 0 0 0 .017l.408 6.822a.612 1.462 0 0 0 .002.046l.408 5.525a.612 1.462 0 0 0 .013.122l.542 4.863.407 3.886a.612 1.462 0 0 0 .013.107l.406 2.923a.612 1.462 0 0 0 .05.266l.544 2.272a.612 1.462 0 0 0 .098.31l.408.975a.612 1.462 0 0 0 .433.424h.406a.612 1.462 0 0 0 .433-.424l.408-.976a.612 1.462 0 0 0 .077-.221l.542-1.952a.612 1.462 0 0 0 .071-.349l.408-2.923a.612 1.462 0 0 0 .013-.106l.408-3.899a.612 1.462 0 0 0 .007-.069l.406-4.858.543-5.834a.612 1.462 0 0 0 .006-.1l.408-6.5a.612 1.462 0 0 0 .002-.03l.406-7.457.543-8.431a.612 1.462 0 0 0 .002-.062l.408-9.098a.612 1.462 0 0 0 .002-.017l.406-10.07a.612 1.462 0 0 0 0-.005l.408-10.383.543-11.359a.612 1.462 0 0 0 .001-.046l.413-11.696a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-12.346a.612 1.462 0 0 0 0-.005l.403-12.965.545-13.302a.612 1.462 0 0 0 .001-.04l.352-13.605.408-13.635.542-14.282a.612 1.462 0 0 0 .002-.03l.075-2.626.47 12.39.409 13.956.408 13.968a.612 1.462 0 0 0 0 .005l.408 13.647a.612 1.462 0 0 0 0 .04l.544 13.306.406 12.655a.612 1.462 0 0 0 0 .005l.409 12.346a.612 1.462 0 0 0 .001.046l.543 12.006.408 11.033a.612 1.462 0 0 0 0 .005l.408 10.72a.612 1.462 0 0 0 0 .018l.408 9.748a.612 1.462 0 0 0 .002.062l.542 9.078.408 8.428a.612 1.462 0 0 0 0 .022l.408 7.472a.612 1.462 0 0 0 .002.03l.408 6.497a.612 1.462 0 0 0 .008.118l.541 5.501.405 4.847a.612 1.462 0 0 0 .009.099l.408 3.573a.612 1.462 0 0 0 .015.131l.408 2.598a.612 1.462 0 0 0 .065.297l.542 1.947a.612 1.462 0 0 0 .17.409l.407.65a.612 1.462 0 0 0 .533.171l.408-.325a.612 1.462 0 0 0 .239-.353l.544-1.301a.612 1.462 0 0 0 .139-.52l.408-2.601a.612 1.462 0 0 0 .013-.091l.408-3.249a.612 1.462 0 0 0 .013-.115l.406-4.525.541-5.176a.612 1.462 0 0 0 .013-.135l.406-6.5a.612 1.462 0 0 0 .002-.022l.408-7.147a.612 1.462 0 0 0 .002-.022l.406-8.106.543-9.079a.612 1.462 0 0 0 .002-.06l.408-9.745a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.406-10.38.544-11.358a.612 1.462 0 0 0 .002-.046l.408-12.021a.612 1.462 0 0 0 0-.005l.407-12.346a.612 1.462 0 0 0 0-.005l.408-12.981.542-13.631a.612 1.462 0 0 0 .002-.04l.408-13.643a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-14.293a.612 1.462 0 0 0 0-.005l.406-14.603.524-14.123.16 4.375.406 14.928a.612 1.462 0 0 0 0 .005l.408 14.297.408 14.294a.612 1.462 0 0 0 .002.04l.542 13.956.407 13.631a.612 1.462 0 0 0 .001 0l.407 13.322a.612 1.462 0 0 0 0 .005l.408 12.671a.612 1.462 0 0 0 .002.046l.542 12.005.408 11.355a.612 1.462 0 0 0 0 .01l.408 10.72a.612 1.462 0 0 0 .002.054l.542 10.054.408 9.082a.612 1.462 0 0 0 0 .022l.408 8.122a.612 1.462 0 0 0 .002.018l.407 7.472a.612 1.462 0 0 0 .006.095l.542 6.484.407 5.505a.612 1.462 0 0 0 .006.053l.408 4.55a.612 1.462 0 0 0 .013.115l.408 3.248a.612 1.462 0 0 0 .039.234l.544 2.598a.612 1.462 0 0 0 .058.226l.406 1.297a.612 1.462 0 0 0 .297.512l.406.325a.612 1.462 0 0 0 .533-.17l.408-.65a.612 1.462 0 0 0 .17-.405l.543-1.951a.612 1.462 0 0 0 .065-.298l.407-2.598a.612 1.462 0 0 0 .022-.158l.406-3.887.543-4.862a.612 1.462 0 0 0 .013-.15l.408-6.172a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.017l.408-6.822a.612 1.462 0 0 0 .002-.03l.406-7.778.543-8.757a.612 1.462 0 0 0 .006-.061l.408-9.423a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-10.399a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l.408-11.35.543-11.68a.612 1.462 0 0 0 .001-.047l.408-12.671a.612 1.462 0 0 0 0-.005l.407-12.981.544-13.631a.612 1.462 0 0 0 .001-.04l.407-13.972a.612 1.462 0 0 0 0-.005l.408-14.614a.612 1.462 0 0 0 0-.005l.408-14.928.542-14.932a.612 1.462 0 0 0 .002-.03l.407-15.27.408-15.273a.611 1.462 0 0 0-.009-.091.611 1.462 0 0 0 .009-.095l-.408-15.258-.407-15.269a.612 1.462 0 0 0-.001-.03l-.551-14.93-.408-14.928a.612 1.462 0 0 0 0-.005l-.408-14.619a.612 1.462 0 0 0 0-.005l-.407-13.971a.612 1.462 0 0 0-.002-.04l-.544-13.63-.406-12.982a.612 1.462 0 0 0 0-.005l-.408-12.669a.612 1.462 0 0 0-.002-.046l-.542-11.68-.408-11.35a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-10.398a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.424a.612 1.462 0 0 0-.007-.06l-.542-8.758-.407-7.781a.612 1.462 0 0 0-.001-.022l-.408-6.82a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.017L32.347 201a.612 1.462 0 0 0-.013-.15l-.543-4.862-.406-3.887a.612 1.462 0 0 0-.023-.159l-.406-2.597a.612 1.462 0 0 0-.065-.298l-.544-1.951a.612 1.462 0 0 0-.17-.405l-.407-.65a.612 1.462 0 0 0-.533-.17l-.406.325a.612 1.462 0 0 0-.297.512l-.407 1.297a.612 1.462 0 0 0-.058.225l-.544 2.598a.612 1.462 0 0 0-.038.234l-.408 3.248a.612 1.462 0 0 0-.013.116l-.408 4.549a.612 1.462 0 0 0-.006.054l-.407 5.504-.542 6.485a.612 1.462 0 0 0-.007.095l-.406 7.472a.612 1.462 0 0 0-.002.017l-.408 8.123a.612 1.462 0 0 0 0 .022l-.408 9.082-.542 10.054a.612 1.462 0 0 0-.002.053l-.408 10.72a.612 1.462 0 0 0 0 .01l-.408 11.355-.543 12.005a.612 1.462 0 0 0-.001.046l-.408 12.672a.612 1.462 0 0 0 0 .005l-.407 13.322a.612 1.462 0 0 0-.001 0l-.407 13.63-.542 13.957a.612 1.462 0 0 0-.002.04l-.408 14.293-.408 14.298a.612 1.462 0 0 0 0 .005l-.406 14.928-.16 4.374-.524-14.123-.406-14.603a.612 1.462 0 0 0 0-.005l-.43-14.294a.612 1.462 0 0 0 0-.005l-.409-13.644a.612 1.462 0 0 0-.002-.04l-.542-13.628-.408-12.98a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005l-.407-12.34a.612 1.462 0 0 0 0-.006l-.408-12.02a.612 1.462 0 0 0-.001-.047l-.544-11.358-.407-10.383a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.745a.612 1.462 0 0 0-.002-.061l-.542-9.082-.407-8.103a.612 1.462 0 0 0-.002-.022l-.408-7.15a.612 1.462 0 0 0-.001-.017l-.407-6.5a.612 1.462 0 0 0-.013-.14l-.54-5.171-.407-4.526a.612 1.462 0 0 0-.013-.115l-.408-3.248a.612 1.462 0 0 0-.013-.091l-.408-2.602a.612 1.462 0 0 0-.14-.52l-.543-1.3a.612 1.462 0 0 0-.24-.353l-.407-.326a.612 1.462 0 0 0-.533.171l-.406.65a.612 1.462 0 0 0-.17.405l-.543 1.951a.612 1.462 0 0 0-.065.298l-.408 2.597a.612 1.462 0 0 0-.015.131l-.408 3.574a.612 1.462 0 0 0-.009.099l-.405 4.846-.54 5.501a.612 1.462 0 0 0-.01.12l-.407 6.495a.612 1.462 0 0 0-.002.031l-.408 7.472a.612 1.462 0 0 0 0 .022l-.408 8.428-.542 9.074a.612 1.462 0 0 0-.002.061l-.408 9.749a.612 1.462 0 0 0 0 .017l-.408 10.72a.612 1.462 0 0 0 0 .005l-.408 11.034-.543 12.005a.612 1.462 0 0 0-.001.046l-.408 12.346a.612 1.462 0 0 0 0 .005l-.407 12.655-.544 13.306a.612 1.462 0 0 0 0 .04L.806 340.53l-.408 13.972-.408 13.957-.471 12.39-.075-2.626a.612 1.462 0 0 0-.002-.04l-.542-14.28-.408-13.632-.406-13.643a.612 1.462 0 0 0-.002-.04l-.544-13.301-.407-12.981a.612 1.462 0 0 0 0-.005l-.408-12.346a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.476-11.732a.612 1.462 0 0 0-.002-.046l-.542-11.358-.408-10.383a.612 1.462 0 0 0 0-.005l-.407-10.07a.612 1.462 0 0 0-.001-.018l-.408-9.098a.612 1.462 0 0 0-.003-.069l-.542-8.427-.406-7.456a.612 1.462 0 0 0-.002-.03l-.408-6.501a.612 1.462 0 0 0-.007-.1l-.542-5.833-.407-4.859a.612 1.462 0 0 0-.006-.068l-.408-3.9a.612 1.462 0 0 0-.013-.106l-.408-2.922a.612 1.462 0 0 0-.071-.35l-.543-1.951a.612 1.462 0 0 0-.076-.222l-.407-.975a.612 1.462 0 0 0-.433-.428h-.407a.612 1.462 0 0 0-.433.428l-.408.976a.612 1.462 0 0 0-.098.31l-.544 2.272a.612 1.462 0 0 0-.05.265l-.406 2.923a.612 1.462 0 0 0-.013.107l-.406 3.886-.543 4.863a.612 1.462 0 0 0-.013.122l-.408 5.525a.612 1.462 0 0 0-.002.046l-.408 6.822a.612 1.462 0 0 0 0 .017l-.406 7.135-.543 8.432a.612 1.462 0 0 0-.006.069l-.407 9.098a.612 1.462 0 0 0-.001.018l-.407 9.744a.612 1.462 0 0 0-.001.005l-.407 10.058-.542 11.033a.612 1.462 0 0 0-.002.046l-.408 11.696a.612 1.462 0 0 0 0 .005l-.408 12.02a.612 1.462 0 0 0 0 .006l-.408 12.33-.542 12.981a.612 1.462 0 0 0-.002.04l-.407 12.996a.612 1.462 0 0 0 0 .005l-.408 13.627-.542 13.631a.612 1.462 0 0 0-.002.031l-.234 7.845-.313-7.86-.407-13.307-.408-13.321-.408-12.997a.612 1.462 0 0 0-.002-.04l-.542-12.655-.406-12.005a.612 1.462 0 0 0-.002-.005l-.407-11.696a.612 1.462 0 0 0-.002-.054l-.542-11.025-.407-10.705a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.748a.612 1.462 0 0 0 0-.005l-.408-9.42a.612 1.462 0 0 0-.002-.076l-.542-8.424-.407-7.777a.612 1.462 0 0 0-.001-.03l-.408-6.822a.612 1.462 0 0 0-.002-.022l-.406-6.175a.612 1.462 0 0 0-.013-.127l-.543-5.184-.406-4.212a.612 1.462 0 0 0-.009-.09l-.408-3.249a.612 1.462 0 0 0-.038-.234l-.544-2.598a.612 1.462 0 0 0-.023-.099l-.408-1.626a.612 1.462 0 0 0-.186-.464l-.406-.65a.612 1.462 0 0 0-.679 0l-.408.65a.612 1.462 0 0 0-.092.183l-.544 1.3a.612 1.462 0 0 0-.115.38l-.408 1.948a.612 1.462 0 0 0-.038.234l-.408 3.248a.612 1.462 0 0 0-.009.092l-.405 4.2-.542 4.85a.612 1.462 0 0 0-.013.135l-.408 5.85a.612 1.462 0 0 0-.002.022l-.406 6.48-.542 7.457a.612 1.462 0 0 0-.007.076l-.406 8.123a.612 1.462 0 0 0-.002.017l-.413 8.773a.612 1.462 0 0 0-.002.018l-.407 9.403-.542 10.054a.612 1.462 0 0 0-.002.054l-.407 10.72a.612 1.462 0 0 0-.001.01l-.407 11.37a.612 1.462 0 0 0 0 .005l-.408 11.68-.542 12.001a.612 1.462 0 0 0-.002.046l-.408 12.347a.612 1.462 0 0 0 0 .005l-.408 12.667a.612 1.462 0 0 0 0 .005l-.406 12.977-.543 12.98a.612 1.462 0 0 0-.001.04l-.137 4.307-.002-.099-.408-12.98a.612 1.462 0 0 0 0-.006l-.408-12.671-.406-12.346a.612 1.462 0 0 0-.002-.04l-.544-12.33-.407-12.001a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-11.37a.612 1.462 0 0 0 0-.006l-.408-11.045a.612 1.462 0 0 0-.001-.054l-.543-10.375-.408-9.733a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.098a.612 1.462 0 0 0-.002-.061l-.542-8.753-.408-7.782a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-7.15a.612 1.462 0 0 0-.002-.031l-.406-6.175a.612 1.462 0 0 0-.009-.106l-.54-5.497-.407-4.85a.612 1.462 0 0 0-.009-.1l-.408-3.573a.612 1.462 0 0 0-.008-.077l-.407-2.927a.612 1.462 0 0 0-.05-.262l-.544-2.272a.612 1.462 0 0 0-.098-.31l-.408-.975a.612 1.462 0 0 0-.238-.353l-.408-.325a.612 1.462 0 0 0-.467.078l-.544.65a.612 1.462 0 0 0-.25.556l-.408 1.626a.612 1.462 0 0 0-.037.174l-.408 2.273a.612 1.462 0 0 0-.022.158l-.408 3.245-.543 4.215a.612 1.462 0 0 0-.015.163l-.408 5.2a.612 1.462 0 0 0-.002.017l-.406 5.525a.612 1.462 0 0 0-.002.046l-.407 6.793-.54 7.123a.612 1.462 0 0 0-.007.088l-.408 8.122a.612 1.462 0 0 0 0 .005l-.406 8.432-.543 9.408a.612 1.462 0 0 0-.002.053l-.408 9.745a.612 1.462 0 0 0 0 .013l-.408 10.395a.612 1.462 0 0 0 0 .005l-.406 10.704-.543 11.355a.612 1.462 0 0 0-.001.046l-.409 11.696-.408 11.7a.612 1.462 0 0 0 0 .004l-.406 12.327-.544 12.326a.612 1.462 0 0 0 0 .04l-.388 11.751-.161-3.649-.406-12.326a.612 1.462 0 0 0 0-.005l-.409-12.021a.612 1.462 0 0 0-.001-.046l-.543-11.676-.406-11.676a.612 1.462 0 0 0-.002-.01l-.406-11.045a.612 1.462 0 0 0 0-.005l-.408-10.72a.612 1.462 0 0 0-.002-.054l-.543-10.375-.406-9.733a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.098a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.448a.612 1.462 0 0 0-.003-.06l-.542-8.107-.408-7.131a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-6.5a.612 1.462 0 0 0-.009-.1l-.54-5.834-.407-4.858a.612 1.462 0 0 0-.006-.04l-.408-4.223a.612 1.462 0 0 0-.009-.091l-.406-3.253a.612 1.462 0 0 0-.04-.234l-.543-2.597a.612 1.462 0 0 0-.022-.1l-.408-1.622a.612 1.462 0 0 0-.184-.464l-.408-.65a.612 1.462 0 0 0-.34-.246h-.407a.612 1.462 0 0 0-.368.293l-.542.972a.612 1.462 0 0 0-.158.42l-.408 1.622a.612 1.462 0 0 0-.048.238l-.408 2.602a.612 1.462 0 0 0-.002.018l-.544 3.573a.612 1.462 0 0 0-.023.17l-.406 4.224a.612 1.462 0 0 0-.006.046l-.407 4.875a.612 1.462 0 0 0-.006.046l-.407 5.822-.542 6.476a.612 1.462 0 0 0-.006.088l-.407 7.15a.612 1.462 0 0 0-.002.018l-.408 7.797a.612 1.462 0 0 0 0 .018l-.406 8.423-.542 8.75a.612 1.462 0 0 0-.003.068l-.408 9.749a.612 1.462 0 0 0 0 .005l-.406 10.054-.543 10.375a.612 1.462 0 0 0-.002.046l-.406 10.724a.612 1.462 0 0 0 0 .005l-.408 11.045a.612 1.462 0 0 0 0 .005l-.408 11.35-.543 11.68a.612 1.462 0 0 0-.001.04l-.408 11.696-.278 7.964-.27-7.96a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-11.37-.406-11.371a.612 1.462 0 0 0-.002-.04l-.544-11.354-.406-10.708a.612 1.462 0 0 0 0-.005l-.408-10.395a.612 1.462 0 0 0-.002-.054l-.543-10.05-.406-9.724a.612 1.462 0 0 0-.002-.018l-.406-9.098a.612 1.462 0 0 0-.002-.017l-.408-8.448a.612 1.462 0 0 0-.002-.061l-.542-8.103-.407-7.13a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-6.822a.612 1.462 0 0 0-.002-.04l-.408-5.845a.612 1.462 0 0 0-.008-.115l-.541-5.176-.406-4.521a.612 1.462 0 0 0-.009-.08l-.406-3.573a.612 1.462 0 0 0-.033-.21l-.542-2.915-.406-2.265a.612 1.462 0 0 0-.072-.301l-.408-1.3a.612 1.462 0 0 0-.297-.508l-.406-.325a.612 1.462 0 0 0-.342-.031l-.544.325a.612 1.462 0 0 0-.284.385l-.408.971a.612 1.462 0 0 0-.114.38l-.408 1.952a.612 1.462 0 0 0-.034.19l-.404 2.907-.541 3.554a.612 1.462 0 0 0-.023.17l-.408 4.224a.612 1.462 0 0 0-.002.046l-.406 4.859-.543 5.83a.612 1.462 0 0 0-.006.09l-.408 6.172a.612 1.462 0 0 0-.002.03l-.408 7.147a.612 1.462 0 0 0 0 .01l-.406 7.453-.543 8.102a.612 1.462 0 0 0-.002.069l-.408 8.769a.612 1.462 0 0 0 0 .017l-.408 9.424-.406 9.403-.543 10.054a.612 1.462 0 0 0-.002.054l-.407 10.395a.612 1.462 0 0 0-.001.005l-.407 10.704-.542 11.025a.612 1.462 0 0 0-.002.046l-.408 11.046-.408 11.045a.612 1.462 0 0 0 0 .005l-.139 3.895-.408-11.046-.408-11.045a.612 1.462 0 0 0-.002-.046l-.543-10.7-.406-10.7a.612 1.462 0 0 0-.002-.01l-.403-10.074a.612 1.462 0 0 0-.002-.005l-.406-9.745a.612 1.462 0 0 0-.002-.046l-.543-9.732-.406-8.757a.612 1.462 0 0 0 0-.005l-.408-8.448a.612 1.462 0 0 0-.002-.061l-.543-8.107-.406-7.13a.612 1.462 0 0 0-.002-.01l-.408-6.826a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.005l-.408-6.175a.612 1.462 0 0 0-.01-.106l-.542-5.51-.406-4.532a.612 1.462 0 0 0-.002-.022l-.408-4.224a.612 1.462 0 0 0-.01-.091l-.407-3.248a.612 1.462 0 0 0-.038-.235l-.544-2.597a.612 1.462 0 0 0-.023-.1l-.408-1.622a.612 1.462 0 0 0-.091-.281l-.409-.976a.612 1.462 0 0 0-.283-.384l-.544-.326a.612 1.462 0 0 0-.488.202l-.406.65a.612 1.462 0 0 0-.151.337l-.408 1.3a.612 1.462 0 0 0-.057.223l-.408 1.951a.612 1.462 0 0 0-.013.061l-.544 2.923a.612 1.462 0 0 0-.032.21l-.406 3.574a.612 1.462 0 0 0-.007.054l-.408 4.224a.612 1.462 0 0 0-.007.061l-.405 5.164-.54 5.493a.612 1.462 0 0 0-.01.106l-.408 6.171a.612 1.462 0 0 0-.002.022l-.406 6.798-.541 7.452a.612 1.462 0 0 0-.007.077l-.408 8.122a.612 1.462 0 0 0 0 .01l-.408 8.448a.612 1.462 0 0 0 0 .005l-.407 8.753-.542 9.403a.612 1.462 0 0 0-.002.054l-.408 9.749a.612 1.462 0 0 0 0 .005l-.408 10.07-.406 10.053-.543 10.375a.612 1.462 0 0 0-.002.046l-.408 10.724-.406 10.7-.007.084-.138-3.636-.406-10.72a.612 1.462 0 0 0-.002-.054l-.543-10.375-.406-10.05-.408-10.074a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.423a.612 1.462 0 0 0-.002-.054l-.543-9.4-.408-8.752a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.448a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.122a.612 1.462 0 0 0-.002-.077l-.542-7.448-.407-6.802a.612 1.462 0 0 0-.002-.022l-.408-6.17a.612 1.462 0 0 0-.009-.107l-.54-5.49-.405-5.167a.611 1.462 0 0 0-.007-.022.611 1.462 0 0 0 0-.04l-.408-4.223a.612 1.462 0 0 0-.007-.054l-.34-3.61a.612 1.462 0 0 0-.032-.21l-.54-2.916-.407-2.264a.612 1.462 0 0 0-.073-.302l-.408-1.3a.612 1.462 0 0 0-.056-.156l-.408-.976a.612 1.462 0 0 0-.433-.428h-.543a.612 1.462 0 0 0-.433.428l-.408.976a.612 1.462 0 0 0-.056.155l-.408 1.301a.612 1.462 0 0 0-.042.15l-.544 2.277a.612 1.462 0 0 0-.048.262l-.408 2.923a.612 1.462 0 0 0-.009.078l-.408 3.574a.612 1.462 0 0 0-.007.08l-.405 4.513-.54 4.838a.612 1.462 0 0 0-.014.123l-.406 5.52a.612 1.462 0 0 0-.002.031l-.408 6.172a.612 1.462 0 0 0-.002.022l-.406 6.793-.541 7.123a.612 1.462 0 0 0-.007.08l-.408 7.797a.612 1.462 0 0 0 0 .018l-.407 8.42-.542 8.42a.612 1.462 0 0 0-.002.069l-.408 9.098a.612 1.462 0 0 0 0 .005l-.408 9.423a.612 1.462 0 0 0 0 .005l-.407 9.725-.542 9.72a.612 1.462 0 0 0-.002.055l-.406 10.07a.612 1.462 0 0 0 0 .004l-.408 10.395-.274 6.782-.276-6.786a.612 1.462 0 0 0-.002-.046l-.542-10.05-.408-10.05a.612 1.462 0 0 0 0-.005l-.407-9.744a.612 1.462 0 0 0-.002-.01l-.406-9.42a.612 1.462 0 0 0-.002-.053l-.542-9.074-.407-9.07a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.017.612 1.462 0 0 0 0-.005l-.408-8.123-.408-8.122a.612 1.462 0 0 0-.007-.077l-.54-7.448-.407-7.12a.612 1.462 0 0 0-.002-.03l-.408-6.17a.612 1.462 0 0 0-.002-.019l-.407-5.85a.612 1.462 0 0 0-.009-.095l-.542-5.508-.406-4.534a.612 1.462 0 0 0-.007-.046l-.408-3.898a.612 1.462 0 0 0-.026-.19l-.541-3.233-.405-2.586a.612 1.462 0 0 0-.026-.139l-.408-1.95a.612 1.462 0 0 0-.056-.223l-.408-1.3a.612 1.462 0 0 0-.342-.54l-.542-.325a.612 1.462 0 0 0-.15-.046h-.408a.612 1.462 0 0 0-.43.428l-.409.976a.612 1.462 0 0 0-.091.282l-.408 1.622a.612 1.462 0 0 0-.023.099l-.542 2.598a.612 1.462 0 0 0-.033.194l-.408 2.923a.612 1.462 0 0 0-.01.076l-.406 3.566-.542 4.541a.612 1.462 0 0 0-.013.115l-.408 4.875a.612 1.462 0 0 0-.002.03l-.408 5.525a.612 1.462 0 0 0-.002.022l-.405 6.143-.54 6.473a.612 1.462 0 0 0-.01.095l-.408 7.472-.408 7.472a.612 1.462 0 0 0 0 .017l-.406 8.099-.543 8.424a.612 1.462 0 0 0-.002.061l-.408 8.773a.612 1.462 0 0 0 0 .018l-.406 9.395-.543 9.066a.612 1.462 0 0 0-.002.062l-.408 9.744-.406 9.749a.612 1.462 0 0 0-.002.005l-.407 10.046-.159 2.867-.391-9.344a.612 1.462 0 0 0-.002-.046l-.543-9.725-.406-9.72a.612 1.462 0 0 0 0-.005l-.408-9.424a.612 1.462 0 0 0-.002-.053l-.54-9.075-.409-8.753a.612 1.462 0 0 0 0-.005l-.408-8.447a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.406-8.123a.612 1.462 0 0 0-.007-.076l-.543-7.445-.406-7.123a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-6.825a.612 1.462 0 0 0-.002-.03l-.408-5.85a.612 1.462 0 0 0-.01-.092l-.538-5.493-.407-5.163a.612 1.462 0 0 0-.007-.062l-.406-4.224a.612 1.462 0 0 0-.007-.054l-.408-3.573a.612 1.462 0 0 0-.032-.21l-.536-2.884-.402-2.562a.612 1.462 0 0 0-.048-.238l-.406-1.622a.612 1.462 0 0 0-.158-.42l-.544-.972a.612 1.462 0 0 0-.174-.218l-.406-.325a.612 1.462 0 0 0-.534.17l-.407.65a.612 1.462 0 0 0-.093.183l-.408.976a.612 1.462 0 0 0-.076.222l-.544 1.947a.612 1.462 0 0 0-.053.238l-.408 2.272a.612 1.462 0 0 0-.023.156l-.408 3.248a.612 1.462 0 0 0-.002.04l-.408 3.565-.542 4.54a.612 1.462 0 0 0-.013.116l-.407 4.874a.612 1.462 0 0 0-.007.046l-.404 5.807-.54 5.81a.612 1.462 0 0 0-.009.111l-.408 6.822a.612 1.462 0 0 0 0 .017l-.408 7.147a.612 1.462 0 0 0 0 .01l-.408 7.452-.54 8.103a.612 1.462 0 0 0-.008.061l-.406 8.448a.612 1.462 0 0 0-.002.005l-.406 8.773a.612 1.462 0 0 0 0 .005l-.407 9.074-.542 9.07a.612 1.462 0 0 0-.002.054l-.408 9.423a.612 1.462 0 0 0 0 .005l-.407 9.725-.47 8.436-.08-1.916a.612 1.462 0 0 0-.002-.046l-.543-9.725-.408-9.4-.406-9.423a.612 1.462 0 0 0 0-.005l-.408-9.098a.612 1.462 0 0 0-.002-.06l-.543-8.746-.406-8.745a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.122a.612 1.462 0 0 0-.002-.07l-.543-7.773-.406-7.444a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.017.612 1.462 0 0 0 0-.005l-.408-6.822a.612 1.462 0 0 0-.002-.022l-.408-6.175a.612 1.462 0 0 0-.007-.088l-.54-5.818-.406-5.493a.612 1.462 0 0 0-.007-.053l-.408-4.55a.612 1.462 0 0 0-.002-.021l-.408-4.224a.612 1.462 0 0 0-.029-.214l-.536-3.213-.403-2.883a.612 1.462 0 0 0-.033-.19l-.406-1.947a.612 1.462 0 0 0-.023-.1l-.408-1.626a.612 1.462 0 0 0-.25-.554l-.544-.65a.612 1.462 0 0 0-.08-.08l-.408-.326a.612 1.462 0 0 0-.532.17l-.408.652a.612 1.462 0 0 0-.093.182l-.542 1.3a.612 1.462 0 0 0-.115.381l-.408 1.947a.612 1.462 0 0 0-.026.143l-.406 2.598a.612 1.462 0 0 0-.013.095l-.405 3.224-.54 3.88a.612 1.462 0 0 0-.02.158l-.408 4.545a.612 1.462 0 0 0-.002.04l-.408 5.195a.612 1.462 0 0 0 0 .022l-.407 5.497-.54 6.151a.612 1.462 0 0 0-.01.091l-.406 6.826a.612 1.462 0 0 0-.002.017l-.406 7.127-.541 7.778a.612 1.462 0 0 0-.007.061l-.408 8.122a.612 1.462 0 0 0 0 .01l-.408 8.448-.406 8.428-.543 9.078a.612 1.462 0 0 0-.002.054l-.408 9.42-.408 9.422-.406 9.4-.345 6.175-.344-6.175-.406-9.4-.408-9.423-.408-9.42a.612 1.462 0 0 0-.002-.053l-.543-9.078-.406-8.428-.408-8.448a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.122a.612 1.462 0 0 0-.007-.061l-.541-7.778-.406-7.127a.612 1.462 0 0 0-.002-.017l-.407-6.826a.612 1.462 0 0 0-.009-.09l-.54-6.152-.407-5.497a.612 1.462 0 0 0-.002-.022l-.406-5.195a.612 1.462 0 0 0-.002-.04l-.408-4.545a.612 1.462 0 0 0-.02-.159l-.54-3.879-.406-3.224a.612 1.462 0 0 0-.013-.095l-.406-2.598a.612 1.462 0 0 0-.026-.143l-.408-1.947a.612 1.462 0 0 0-.114-.38l-.543-1.301a.612 1.462 0 0 0-.094-.182l-.406-.651a.612 1.462 0 0 0-.533-.17l-.408.325a.612 1.462 0 0 0-.08.08l-.543.65a.612 1.462 0 0 0-.25.554l-.409 1.626a.612 1.462 0 0 0-.022.1l-.407 1.947a.612 1.462 0 0 0-.033.19l-.403 2.883-.536 3.213a.612 1.462 0 0 0-.029.214l-.408 4.224a.612 1.462 0 0 0-.002.022l-.408 4.549a.612 1.462 0 0 0-.007.053l-.405 5.493-.54 5.818a.612 1.462 0 0 0-.007.088l-.408 6.175a.612 1.462 0 0 0-.002.022l-.408 6.822a.612 1.462 0 0 0 0 .022l-.407 7.444-.542 7.773a.612 1.462 0 0 0-.007.07l-.408 8.122a.612 1.462 0 0 0 0 .018l-.407 8.745-.542 8.745a.612 1.462 0 0 0-.002.061l-.408 9.098a.612 1.462 0 0 0 0 .005l-.407 9.423-.408 9.4-.542 9.724a.612 1.462 0 0 0-.002.046l-.08 1.916-.47-8.436-.407-9.724a.612 1.462 0 0 0 0-.005l-.408-9.424a.612 1.462 0 0 0-.002-.053l-.543-9.07-.406-9.075a.612 1.462 0 0 0 0-.005l-.399-8.772a.612 1.462 0 0 0 0-.005l-.406-8.447a.612 1.462 0 0 0-.007-.062l-.542-8.102-.407-7.452a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-7.147a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-6.822a.612 1.462 0 0 0-.009-.111l-.539-5.81-.405-5.807a.612 1.462 0 0 0-.007-.046l-.406-4.874a.612 1.462 0 0 0-.013-.115l-.543-4.541-.408-3.566a.612 1.462 0 0 0-.002-.04l-.408-3.247a.612 1.462 0 0 0-.022-.156l-.408-2.272a.612 1.462 0 0 0-.053-.238l-.544-1.947a.612 1.462 0 0 0-.077-.222l-.408-.976a.612 1.462 0 0 0-.092-.183l-.408-.65a.612 1.462 0 0 0-.533-.17l-.406.325a.612 1.462 0 0 0-.175.218l-.544.972a.612 1.462 0 0 0-.157.42l-.407 1.622a.612 1.462 0 0 0-.048.238l-.401 2.562-.538 2.883a.612 1.462 0 0 0-.029.21l-.408 3.574a.612 1.462 0 0 0-.007.054l-.406 4.224a.612 1.462 0 0 0-.007.061l-.406 5.164-.54 5.493a.612 1.462 0 0 0-.009.091l-.408 5.85a.612 1.462 0 0 0-.002.03l-.408 6.826a.612 1.462 0 0 0 0 .01l-.406 7.123-.543 7.444a.612 1.462 0 0 0-.007.077l-.406 8.122a.612 1.462 0 0 0-.002.01l-.406 8.448a.612 1.462 0 0 0 0 .005l-.408 8.753-.541 9.074a.612 1.462 0 0 0-.002.054l-.408 9.423a.612 1.462 0 0 0 0 .005l-.407 9.72-.542 9.725a.612 1.462 0 0 0-.002.046l-.39 9.344-.159-2.867-.408-10.046a.612 1.462 0 0 0 0-.005l-.406-9.748-.408-9.745a.612 1.462 0 0 0-.002-.061l-.543-9.066-.406-9.396a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.773a.612 1.462 0 0 0-.002-.061l-.543-8.424-.406-8.099a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-7.471-.408-7.472a.612 1.462 0 0 0-.01-.096l-.54-6.472-.405-6.143a.612 1.462 0 0 0-.002-.022l-.406-5.525a.612 1.462 0 0 0-.002-.03l-.408-4.875a.612 1.462 0 0 0-.013-.115l-.543-4.542-.406-3.565a.612 1.462 0 0 0-.009-.077l-.408-2.923a.612 1.462 0 0 0-.033-.194l-.543-2.598a.612 1.462 0 0 0-.022-.099l-.408-1.622a.612 1.462 0 0 0-.092-.282l-.408-.975a.612 1.462 0 0 0-.431-.429h-.408a.612 1.462 0 0 0-.15.046l-.542.326a.612 1.462 0 0 0-.341.54l-.408 1.3a.612 1.462 0 0 0-.057.222l-.408 1.951a.612 1.462 0 0 0-.026.14l-.404 2.585-.541 3.232a.612 1.462 0 0 0-.026.19l-.406 3.9a.612 1.462 0 0 0-.007.045l-.407 4.533-.542 5.51a.612 1.462 0 0 0-.01.094l-.405 5.85a.612 1.462 0 0 0-.002.018l-.409 6.17a.612 1.462 0 0 0-.002.032l-.406 7.119-.54 7.448a.612 1.462 0 0 0-.008.076l-.408 8.123-.408 8.122a.612 1.462 0 0 0 0 .022l-.406 9.07-.543 9.075a.612 1.462 0 0 0-.002.053l-.406 9.42a.612 1.462 0 0 0-.002.01l-.406 9.744a.612 1.462 0 0 0 0 .005l-.408 10.05-.543 10.05a.612 1.462 0 0 0-.002.046l-.275 6.786-.274-6.782-.408-10.395a.612 1.462 0 0 0 0-.005l-.408-10.07a.612 1.462 0 0 0-.002-.053l-.543-9.721-.406-9.725a.612 1.462 0 0 0 0-.005l-.408-9.423a.612 1.462 0 0 0 0-.005l-.408-9.098a.612 1.462 0 0 0-.002-.07l-.543-8.419-.406-8.42a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-7.797a.612 1.462 0 0 0-.007-.08l-.54-7.123-.407-6.793a.612 1.462 0 0 0-.002-.022l-.408-6.171a.612 1.462 0 0 0-.002-.031l-.408-5.52a.612 1.462 0 0 0-.01-.124l-.54-4.838-.405-4.513a.612 1.462 0 0 0-.007-.08l-.408-3.574a.612 1.462 0 0 0-.009-.08l-.408-2.922a.612 1.462 0 0 0-.048-.262l-.544-2.276a.612 1.462 0 0 0-.042-.15l-.408-1.302a.612 1.462 0 0 0-.056-.155l-.408-.976a.612 1.462 0 0 0-.433-.428h-.543a.612 1.462 0 0 0-.432.428l-.409.976a.612 1.462 0 0 0-.056.155l-.408 1.301a.612 1.462 0 0 0-.073.302l-.406 2.264-.541 2.915a.612 1.462 0 0 0-.032.21l-.408 3.574a.612 1.462 0 0 0-.007.054l-.408 4.224a.612 1.462 0 0 0-.007.061l-.405 5.168-.54 5.489a.612 1.462 0 0 0-.01.106l-.408 6.171a.612 1.462 0 0 0-.002.022l-.406 6.802-.543 7.448a.612 1.462 0 0 0-.007.077l-.406 8.123a.612 1.462 0 0 0 0 .01l-.408 8.447a.612 1.462 0 0 0 0 .01l-.408 8.753-.543 9.4a.612 1.462 0 0 0-.002.053l-.408 9.424a.612 1.462 0 0 0 0 .01l-.408 10.073-.406 10.05-.543 10.375a.612 1.462 0 0 0-.002.054l-.406 10.72-.138 3.637-.007-.084-.406-10.7-.408-10.724a.612 1.462 0 0 0-.002-.046l-.542-10.376-.407-10.053-.408-10.07a.612 1.462 0 0 0 0-.005l-.408-9.749a.612 1.462 0 0 0-.002-.053l-.542-9.404-.407-8.753a.612 1.462 0 0 0 0-.005l-.396-8.448a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.122a.612 1.462 0 0 0-.007-.077l-.541-7.452-.407-6.798a.612 1.462 0 0 0-.002-.022l-.408-6.17a.612 1.462 0 0 0-.009-.107l-.54-5.493-.405-5.164a.612 1.462 0 0 0-.007-.061l-.408-4.224a.612 1.462 0 0 0-.007-.054l-.407-3.573a.612 1.462 0 0 0-.032-.21l-.544-2.923a.612 1.462 0 0 0-.013-.062l-.408-1.95a.612 1.462 0 0 0-.058-.223l-.406-1.3a.612 1.462 0 0 0-.151-.337l-.407-.65a.612 1.462 0 0 0-.487-.203l-.544.325a.612 1.462 0 0 0-.284.385l-.408.976a.612 1.462 0 0 0-.093.281l-.406 1.623a.612 1.462 0 0 0-.023.099l-.544 2.597a.612 1.462 0 0 0-.038.235l-.408 3.248a.612 1.462 0 0 0-.009.09l-.408 4.225a.612 1.462 0 0 0-.002.022l-.406 4.533-.543 5.509a.612 1.462 0 0 0-.009.106l-.408 6.175a.612 1.462 0 0 0 0 .022l-.408 6.826a.612 1.462 0 0 0-.002.01l-.406 7.13-.543 8.107a.612 1.462 0 0 0-.002.061l-.408 8.448a.612 1.462 0 0 0 0 .005l-.406 8.757-.543 9.733a.612 1.462 0 0 0-.002.046l-.408 9.744a.612 1.462 0 0 0 0 .005l-.406 10.074a.612 1.462 0 0 0-.002.01l-.406 10.7-.543 10.7a.612 1.462 0 0 0-.002.046l-.408 11.046-.408 11.045-.14-3.895a.612 1.462 0 0 0 0-.005l-.407-11.045-.408-11.045a.612 1.462 0 0 0-.002-.046l-.543-11.026-.406-10.704a.612 1.462 0 0 0-.002-.005l-.407-10.395a.612 1.462 0 0 0-.002-.053l-.542-10.054-.406-9.404-.408-9.423a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-8.769a.612 1.462 0 0 0-.002-.069l-.543-8.103-.406-7.452a.612 1.462 0 0 0-.002-.01l-.407-7.146a.612 1.462 0 0 0-.002-.031l-.408-6.171a.612 1.462 0 0 0-.007-.092l-.542-5.83-.407-4.858a.612 1.462 0 0 0-.007-.046l-.406-4.224a.612 1.462 0 0 0-.022-.17l-.541-3.554-.405-2.907a.612 1.462 0 0 0-.033-.19l-.408-1.951a.612 1.462 0 0 0-.115-.381l-.408-.972a.612 1.462 0 0 0-.284-.384l-.544-.325a.612 1.462 0 0 0-.341.03l-.407.326a.612 1.462 0 0 0-.297.508l-.408 1.3a.612 1.462 0 0 0-.071.302l-.406 2.265-.543 2.915a.612 1.462 0 0 0-.032.21l-.406 3.573a.612 1.462 0 0 0-.01.08l-.406 4.521-.54 5.176a.612 1.462 0 0 0-.01.115l-.408 5.846a.612 1.462 0 0 0-.002.04l-.408 6.821a.612 1.462 0 0 0 0 .018l-.406 7.13-.543 8.103a.612 1.462 0 0 0-.002.062l-.408 8.447a.612 1.462 0 0 0-.002.013l-.406 9.098a.612 1.462 0 0 0-.002.018l-.406 9.725-.543 10.05a.612 1.462 0 0 0-.002.053l-.408 10.395a.612 1.462 0 0 0 0 .005l-.406 10.708-.544 11.355a.612 1.462 0 0 0-.002.04l-.407 11.37-.408 11.37a.612 1.462 0 0 0 0 .01l-.27 7.968-.279-7.972-.406-11.695a.612 1.462 0 0 0-.002-.04l-.543-11.68-.408-11.35a.612 1.462 0 0 0 0-.005l-.408-11.046a.612 1.462 0 0 0 0-.005l-.406-10.724a.612 1.462 0 0 0-.002-.046l-.543-10.375-.406-10.054a.612 1.462 0 0 0 0-.005l-.408-9.748a.612 1.462 0 0 0-.002-.069l-.542-8.749-.407-8.424a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-7.797a.612 1.462 0 0 0-.002-.018l-.408-7.15a.612 1.462 0 0 0-.007-.088l-.542-6.477-.407-5.822a.612 1.462 0 0 0-.002-.046l-.406-4.874a.612 1.462 0 0 0-.007-.046l-.408-4.224a.612 1.462 0 0 0-.02-.17l-.544-3.574a.612 1.462 0 0 0-.002-.017l-.408-2.602a.612 1.462 0 0 0-.048-.238l-.408-1.622a.612 1.462 0 0 0-.158-.42l-.542-.972a.612 1.462 0 0 0-.368-.294h-.407a.612 1.462 0 0 0-.34.246l-.408.65a.612 1.462 0 0 0-.184.464l-.408 1.622a.612 1.462 0 0 0-.023.1l-.542 2.597a.612 1.462 0 0 0-.04.234l-.406 3.253a.612 1.462 0 0 0-.013.09l-.407 4.224a.612 1.462 0 0 0-.007.04l-.406 4.858-.54 5.834a.612 1.462 0 0 0-.01.1l-.408 6.5a.612 1.462 0 0 0-.002.013l-.406 7.13-.543 8.107a.612 1.462 0 0 0-.002.062l-.408 8.447a.612 1.462 0 0 0 0 .018l-.408 9.098a.612 1.462 0 0 0 0 .01l-.406 9.732-.543 10.376a.612 1.462 0 0 0-.002.053l-.408 10.72a.612 1.462 0 0 0 0 .005l-.406 11.045a.612 1.462 0 0 0-.002.01l-.406 11.676-.543 11.676a.612 1.462 0 0 0-.002.046l-.408 12.021a.612 1.462 0 0 0 0 .005l-.406 12.327-.161 3.648-.388-11.75a.612 1.462 0 0 0-.002-.04l-.543-12.327-.406-12.326a.612 1.462 0 0 0 0-.005l-.408-11.7-.408-11.696a.612 1.462 0 0 0-.002-.046l-.543-11.354-.406-10.704a.612 1.462 0 0 0 0-.005l-.408-10.395a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.745a.612 1.462 0 0 0-.002-.053l-.543-9.408-.406-8.432a.612 1.462 0 0 0 0-.005l-.408-8.122a.612 1.462 0 0 0-.007-.088l-.54-7.123-.407-6.793a.612 1.462 0 0 0-.002-.046l-.407-5.525a.612 1.462 0 0 0-.002-.018l-.408-5.199a.612 1.462 0 0 0-.015-.163l-.542-4.216-.408-3.244a.612 1.462 0 0 0-.023-.158l-.408-2.273a.612 1.462 0 0 0-.036-.174l-.408-1.626a.612 1.462 0 0 0-.25-.556l-.545-.65a.612 1.462 0 0 0-.466-.078l-.408.325a.612 1.462 0 0 0-.239.353l-.408.975a.612 1.462 0 0 0-.098.31l-.544 2.272a.612 1.462 0 0 0-.05.262l-.408 2.927a.612 1.462 0 0 0-.009.077l-.408 3.573a.612 1.462 0 0 0-.009.1l-.406 4.85-.54 5.497a.612 1.462 0 0 0-.01.106l-.408 6.175a.612 1.462 0 0 0-.002.031l-.408 7.15a.612 1.462 0 0 0 0 .018l-.408 7.782-.543 8.753a.612 1.462 0 0 0-.002.061l-.406 9.098a.612 1.462 0 0 0-.002.01l-.406 9.733-.543 10.375a.612 1.462 0 0 0-.002.054l-.408 11.045a.612 1.462 0 0 0 0 .005l-.408 11.37a.612 1.462 0 0 0 0 .01l-.408 12.002-.542 12.33a.612 1.462 0 0 0-.002.04l-.407 12.346-.408 12.671a.612 1.462 0 0 0 0 .005l-.408 12.981-.002.1-.136-4.308a.612 1.462 0 0 0-.002-.04l-.543-12.98-.406-12.977a.612 1.462 0 0 0 0-.005l-.408-12.667a.612 1.462 0 0 0 0-.005l-.408-12.347a.612 1.462 0 0 0-.002-.046l-.537-12-.408-11.68a.612 1.462 0 0 0 0-.006l-.407-11.37a.612 1.462 0 0 0-.002-.01l-.406-10.72a.612 1.462 0 0 0-.002-.054l-.543-10.054-.406-9.403a.612 1.462 0 0 0-.002-.018l-.407-8.773a.612 1.462 0 0 0-.002-.017l-.406-8.123a.612 1.462 0 0 0-.007-.076l-.542-7.457-.407-6.48a.612 1.462 0 0 0-.002-.022l-.408-5.85a.612 1.462 0 0 0-.013-.135l-.542-4.85-.405-4.2a.612 1.462 0 0 0-.009-.091l-.408-3.249a.612 1.462 0 0 0-.038-.234l-.408-1.947a.612 1.462 0 0 0-.115-.38l-.544-1.301a.612 1.462 0 0 0-.093-.183l-.408-.65a.612 1.462 0 0 0-.678 0l-.407.65a.612 1.462 0 0 0-.186.464l-.408 1.626a.612 1.462 0 0 0-.022.1l-.544 2.597a.612 1.462 0 0 0-.039.234l-.408 3.248a.612 1.462 0 0 0-.009.092l-.406 4.211-.542 5.184a.612 1.462 0 0 0-.013.127l-.407 6.175a.612 1.462 0 0 0-.002.022l-.408 6.821a.612 1.462 0 0 0-.002.031l-.406 7.777-.543 8.424a.612 1.462 0 0 0-.002.077l-.408 9.42a.612 1.462 0 0 0 0 .004l-.408 9.749a.612 1.462 0 0 0 0 .017l-.406 10.705-.544 11.025a.612 1.462 0 0 0-.002.054l-.408 11.696a.612 1.462 0 0 0 0 .005l-.407 12.005-.542 12.655a.612 1.462 0 0 0-.002.04l-.408 12.996-.408 13.322-.407 13.306-.313 7.845-.234-7.829a.612 1.462 0 0 0-.002-.03l-.543-13.632-.408-13.627a.612 1.462 0 0 0 0-.005l-.406-12.996a.612 1.462 0 0 0-.002-.04l-.544-12.98-.407-12.331a.612 1.462 0 0 0 0-.005l-.408-12.021a.612 1.462 0 0 0 0-.005l-.399-11.696a.612 1.462 0 0 0-.002-.047l-.542-11.033-.408-10.058a.612 1.462 0 0 0 0-.005l-.406-9.744a.612 1.462 0 0 0-.002-.018l-.407-9.098a.612 1.462 0 0 0-.007-.07l-.542-8.431-.407-7.135a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-6.821a.612 1.462 0 0 0-.002-.046l-.408-5.525a.612 1.462 0 0 0-.013-.123l-.542-4.862-.407-3.887a.612 1.462 0 0 0-.013-.106l-.406-2.923a.612 1.462 0 0 0-.05-.266l-.544-2.272a.612 1.462 0 0 0-.098-.31l-.408-.975a.612 1.462 0 0 0-.432-.428h-.407a.612 1.462 0 0 0-.433.428l-.408.975a.612 1.462 0 0 0-.076.222l-.543 1.952a.612 1.462 0 0 0-.071.349l-.408 2.923a.612 1.462 0 0 0-.013.106l-.408 3.899a.612 1.462 0 0 0-.007.069l-.407 4.858-.542 5.834a.612 1.462 0 0 0-.007.1l-.408 6.5a.612 1.462 0 0 0-.002.03l-.406 7.456-.543 8.428a.612 1.462 0 0 0-.002.069l-.408 9.098a.612 1.462 0 0 0-.002.017l-.406 10.07a.612 1.462 0 0 0 0 .005l-.408 10.383-.543 11.359a.612 1.462 0 0 0-.002.046l-.408 11.696a.612 1.462 0 0 0 0 .01l-.408 12.346a.612 1.462 0 0 0 0 .005l-.406 12.98-.544 13.303a.612 1.462 0 0 0-.002.039l-.407 13.643-.408 13.631-.542 14.282a.612 1.462 0 0 0-.002.04l-.075 2.629-.473-12.394-.406-13.956-.408-13.973-.409-13.647a.612 1.462 0 0 0 0-.04l-.544-13.305-.406-12.656a.612 1.462 0 0 0 0-.005l-.408-12.346a.612 1.462 0 0 0-.002-.046l-.542-12.005-.408-11.033a.612 1.462 0 0 0 0-.005l-.409-10.72a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-9.748a.612 1.462 0 0 0-.002-.061l-.54-9.075-.408-8.427a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.018l-.408-7.471a.612 1.462 0 0 0-.002-.031l-.409-6.496a.612 1.462 0 0 0-.009-.12l-.54-5.5-.405-4.847a.612 1.462 0 0 0-.01-.099l-.407-3.573a.612 1.462 0 0 0-.015-.131l-.408-2.598a.612 1.462 0 0 0-.065-.298l-.543-1.95a.612 1.462 0 0 0-.17-.406l-.405-.65a.612 1.462 0 0 0-.533-.17l-.408.325a.612 1.462 0 0 0-.239.353l-.544 1.301a.612 1.462 0 0 0-.139.52l-.408 2.601a.612 1.462 0 0 0-.013.091l-.408 3.249a.612 1.462 0 0 0-.013.115l-.406 4.525-.541 5.172a.612 1.462 0 0 0-.013.139l-.408 6.5a.612 1.462 0 0 0 0 .017l-.408 7.151a.612 1.462 0 0 0-.002.022l-.407 8.103-.542 9.082a.612 1.462 0 0 0-.002.061l-.408 9.745a.612 1.462 0 0 0 0 .01l-.407 10.383-.544 11.358a.612 1.462 0 0 0-.002.046l-.408 12.021a.612 1.462 0 0 0 0 .005l-.406 12.343a.612 1.462 0 0 0 0 .01l-.408 12.98-.543 13.632a.612 1.462 0 0 0-.002.04l-.408 13.642a.612 1.462 0 0 0 0 .005l-.408 14.298a.612 1.462 0 0 0 0 .005l-.406 14.602-.524 14.123-.16-4.374-.406-14.928a.612 1.462 0 0 0 0-.005l-.408-14.298-.408-14.293a.612 1.462 0 0 0-.002-.04l-.542-13.956-.407-13.631a.612 1.462 0 0 0-.002 0l-.406-13.322a.612 1.462 0 0 0 0-.005l-.408-12.671a.612 1.462 0 0 0-.002-.047l-.543-12.005-.408-11.354a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005l-.408-10.72a.612 1.462 0 0 0-.002-.054l-.542-10.054-.408-9.082a.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.005.612 1.462 0 0 0 0-.018l-.408-8.122a.612 1.462 0 0 0-.002-.018l-.407-7.472a.612 1.462 0 0 0-.007-.095l-.542-6.484-.406-5.505a.612 1.462 0 0 0-.007-.054l-.409-4.548a.612 1.462 0 0 0-.013-.116l-.408-3.248a.612 1.462 0 0 0-.038-.234l-.544-2.598a.612 1.462 0 0 0-.058-.226l-.406-1.296a.612 1.462 0 0 0-.297-.512zm-.133 3.046.232.738.495 2.367.386 3.074.4 4.466.405 5.496a.612 1.462 0 0 0 .002.031l.539 6.449.405 7.416.406 8.107.408 9.086a.612 1.462 0 0 0 .002.03l.542 10.047.407 10.688.406 11.367a.612 1.462 0 0 0 .002.039l.543 11.997.406 12.644.408 13.318.408 13.643a.612 1.462 0 0 0 .002.03l.543 13.953.406 14.278.408 14.293.408 14.944a.612 1.462 0 0 0 0 .03l.544 14.933.269 9.633-.269 9.633-.544 14.933a.612 1.462 0 0 0 0 .03l-.408 14.944-.408 14.294-.406 14.277-.543 13.953a.612 1.462 0 0 0-.002.03l-.408 13.647-.408 13.314-.406 12.648-.543 11.997a.612 1.462 0 0 0-.002.04l-.406 11.366-.407 10.689-.542 10.045a.612 1.462 0 0 0-.002.031l-.408 9.086-.406 8.107-.405 7.416-.54 6.449a.612 1.462 0 0 0-.001.03l-.405 5.497-.4 4.466-.386 3.074-.495 2.368-.232.737-.029-.046-.436-1.563-.372-2.363-.398-3.82a.612 1.462 0 0 0-.007-.022l-.536-4.798-.401-6.088-.407-6.798-.406-7.785a.612 1.462 0 0 0-.002-.031l-.542-8.741-.407-9.384-.406-10.383-.408-11.366a.612 1.462 0 0 0-.002-.04l-.543-11.672-.406-12.643-.408-12.997a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.017l-.543-13.628-.408-13.952-.406-14.615-.408-14.944a.612 1.462 0 0 0-.002-.03l-.542-14.928-.408-15.254-.405-15.178.405-15.178.408-15.253.542-14.928a.612 1.462 0 0 0 .002-.03l.408-14.944.406-14.615.408-13.953.543-13.627a.612 1.462 0 0 0 0-.017.612 1.462 0 0 0 0-.018l.408-12.996.406-12.644.543-11.672a.612 1.462 0 0 0 .002-.04l.408-11.366.406-10.383.407-9.384.542-8.741a.612 1.462 0 0 0 .002-.03l.406-7.786.407-6.798.401-6.088.536-4.798a.612 1.462 0 0 0 .007-.022l.398-3.82.372-2.363.436-1.563zm456.729 0 .029.046.436 1.563.372 2.363.398 3.82a.612 1.462 0 0 0 .002.022l.536 4.799.401 6.087.407 6.798.406 7.785a.612 1.462 0 0 0 .002.031l.542 8.741.405 9.384.408 10.383.408 11.366a.612 1.462 0 0 0 0 .04l.542 11.672.408 12.643.407 12.997a.612 1.462 0 0 0 .002.03l.542 13.628.408 13.952.406 14.615.409 14.944a.612 1.462 0 0 0 .001.03l.543 14.929.408 15.253.404 15.178-.404 15.178-.408 15.253-.543 14.928a.612 1.462 0 0 0-.001.03l-.409 14.945-.406 14.614-.408 13.953-.542 13.627a.612 1.462 0 0 0-.002.03l-.407 12.997-.408 12.644-.542 11.672a.612 1.462 0 0 0 0 .04l-.408 11.366-.408 10.383-.405 9.383-.542 8.742a.612 1.462 0 0 0-.002.03l-.406 7.786-.407 6.797-.401 6.088-.536 4.799a.612 1.462 0 0 0-.002.022l-.398 3.82-.372 2.363-.436 1.563-.03.046-.231-.738-.494-2.368-.387-3.073-.4-4.466-.404-5.497a.612 1.462 0 0 0-.007-.03l-.539-6.45-.405-7.416-.406-8.106-.408-9.087a.612 1.462 0 0 0-.002-.03l-.542-10.046-.407-10.689-.406-11.366a.612 1.462 0 0 0-.002-.04l-.542-11.997-.407-12.648-.408-13.313-.408-13.648a.612 1.462 0 0 0-.001-.03l-.543-13.953-.406-14.277-.408-14.294-.408-14.944a.612 1.462 0 0 0 0-.03l-.545-14.932-.268-9.634.268-9.633.545-14.932a.612 1.462 0 0 0 0-.03l.408-14.945.408-14.293.406-14.278.543-13.952a.612 1.462 0 0 0 .001-.031l.408-13.643.408-13.318.407-12.644.542-11.997a.612 1.462 0 0 0 .002-.04l.406-11.366.407-10.688.542-10.046a.612 1.462 0 0 0 .002-.03l.408-9.087.406-8.106.405-7.417.54-6.449a.612 1.462 0 0 0 .005-.03l.405-5.497.4-4.466.386-3.074.495-2.367zm-436.9 7.111.052.084.434 1.566.373 2.376.397 3.462.401 4.823a.612 1.462 0 0 0 .007.046l.538 5.465.403 6.425.406 7.448.408 8.436a.612 1.462 0 0 0 .002.04l.543 9.066.404 9.709.408 10.712.408 11.045a.612 1.462 0 0 0 0 .031l.543 12.001.408 12.322.406 12.672a.612 1.462 0 0 0 .002.03l.543 13.299.408 13.627.406 13.968.408 13.972a.612 1.462 0 0 0 .002.031l.543 14.278.408 14.277.136 4.775-.136 4.775-.408 14.278-.543 14.278a.612 1.462 0 0 0-.002.03l-.408 13.973-.406 13.968-.408 13.623-.543 13.302a.612 1.462 0 0 0-.002.03l-.406 12.668-.408 12.327-.543 11.997a.612 1.462 0 0 0 0 .03l-.408 11.042-.408 10.716-.404 9.709-.543 9.066a.612 1.462 0 0 0-.002.04l-.408 8.435-.406 7.449-.403 6.425-.538 5.465a.612 1.462 0 0 0-.007.046l-.401 4.822-.397 3.463-.373 2.375-.434 1.567-.052.084-.34-.813-.353-2.257-.395-3.145-.403-4.49a.612 1.462 0 0 0-.007-.053l-.536-5.128-.403-6.421-.407-7.123-.406-8.11a.612 1.462 0 0 0-.002-.04l-.54-9.067-.407-9.709-.408-10.394a.612 1.462 0 0 0 0-.022.612 1.462 0 0 0 0-.01l-.543-11.347-.408-11.997-.406-12.342-.408-12.993a.612 1.462 0 0 0-.002-.03l-.542-13.632-.407-13.623-.408-14.294-.408-14.618a.612 1.462 0 0 0 0-.031l-.544-14.603-.406-14.928a.612 1.462 0 0 0 0-.005l-.133-4.775.133-4.775a.612 1.462 0 0 0 0-.005l.406-14.928.544-14.603a.612 1.462 0 0 0 0-.03l.408-14.62.408-14.293.407-13.623.542-13.631a.612 1.462 0 0 0 .002-.03l.408-12.994.406-12.342.408-11.997.543-11.347a.612 1.462 0 0 0 0-.022.612 1.462 0 0 0 0-.01l.408-10.395.406-9.708.541-9.067a.612 1.462 0 0 0 .002-.04l.406-8.11.407-7.127.403-6.417.536-5.128a.612 1.462 0 0 0 .007-.053l.403-4.49.395-3.145.353-2.256zm417.07 0 .341.813.353 2.257.395 3.145.403 4.49a.612 1.462 0 0 0 .007.053l.535 5.128.403 6.417.407 7.127.406 8.11a.612 1.462 0 0 0 .002.04l.541 9.066.407 9.709.408 10.395a.612 1.462 0 0 0 0 .03l.542 11.347.408 11.997.406 12.343.409 12.992a.612 1.462 0 0 0 .001.03l.543 13.632.406 13.623.408 14.294.408 14.618a.612 1.462 0 0 0 0 .031l.544 14.603.407 14.928a.612 1.462 0 0 0 0 .005l.133 4.775-.133 4.775a.612 1.462 0 0 0 0 .005l-.407 14.928-.544 14.603a.612 1.462 0 0 0 0 .03l-.408 14.62-.408 14.293-.406 13.623-.543 13.631a.612 1.462 0 0 0-.001.031l-.409 12.993-.406 12.342-.408 11.997-.542 11.347a.612 1.462 0 0 0 0 .03l-.408 10.395-.407 9.71-.54 9.065a.612 1.462 0 0 0-.003.04l-.406 8.11-.407 7.123-.403 6.421-.535 5.128a.612 1.462 0 0 0-.007.054l-.403 4.49-.395 3.145-.353 2.256-.34.813-.052-.083-.436-1.567-.373-2.376-.395-3.462-.403-4.823a.612 1.462 0 0 0-.006-.046l-.538-5.466-.403-6.425-.406-7.448-.408-8.435a.612 1.462 0 0 0-.002-.04l-.542-9.067-.405-9.709-.408-10.716-.408-11.041a.612 1.462 0 0 0 0-.03l-.543-11.998-.408-12.327-.408-12.667a.612 1.462 0 0 0 0-.03L2.46 476.92l-.408-13.623-.408-13.968-.407-13.973a.612 1.462 0 0 0-.001-.03l-.543-14.278-.408-14.278-.136-4.775.136-4.775.408-14.277.543-14.278a.612 1.462 0 0 0 .001-.03l.407-13.973.408-13.968.408-13.627.542-13.298a.612 1.462 0 0 0 0-.031l.408-12.671.408-12.323.543-12a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.014l.408-11.045.408-10.712.405-9.709.542-9.066a.612 1.462 0 0 0 .002-.04l.408-8.436.406-7.448.403-6.425.538-5.465a.612 1.462 0 0 0 .006-.046l.403-4.822.395-3.463.373-2.375.436-1.567zm-397.214 8.079.122.293.473 1.975.38 2.737.403 3.843a.612 1.462 0 0 0 .002.022l.537 4.81.402 5.438.404 6.794.408 7.143a.612 1.462 0 0 0 .002.03l.541 8.412.407 9.059.408 9.74.406 10.07a.612 1.462 0 0 0 .002.03l.542 11.026.407 11.668.408 12.017.408 12.346a.612 1.462 0 0 0 0 .031l.544 12.98.406 12.974.409 13.643a.612 1.462 0 0 0 .002.04l.542 13.626.406 13.632.405 13.54-.405 13.54-.406 13.63-.542 13.628a.612 1.462 0 0 0-.002.04l-.409 13.643-.406 12.972-.544 12.977a.612 1.462 0 0 0 0 .03l-.408 12.347-.408 12.017-.407 11.668-.542 11.022a.612 1.462 0 0 0-.002.03l-.406 10.07-.408 9.74-.407 9.059-.54 8.412a.612 1.462 0 0 0-.003.03l-.408 7.143-.404 6.794-.402 5.437-.537 4.811a.612 1.462 0 0 0-.002.022l-.403 3.843-.38 2.733-.473 1.979-.122.293-.137-.33-.464-1.665-.373-2.685-.4-3.811-.405-4.839a.612 1.462 0 0 0-.002-.03l-.539-5.799-.403-6.433-.408-7.456a.612 1.462 0 0 0-.002-.04l-.54-8.411-.407-9.058-.407-10.062-.408-10.395a.612 1.462 0 0 0-.002-.03l-.542-11.352-.407-11.668-.408-12.342-.408-12.992a.612 1.462 0 0 0 0-.031l-.542-13.302-.408-13.627-.408-13.647a.612 1.462 0 0 0 0-.018.612 1.462 0 0 0 0-.018l-.544-14.277-.407-14.278-.265-9.324.265-9.324.407-14.278.544-14.277a.612 1.462 0 0 0 0-.013.612 1.462 0 0 0 0-.018l.408-13.647.408-13.627.542-13.302a.612 1.462 0 0 0 0-.03l.408-12.993.408-12.343.407-11.668.542-11.35a.612 1.462 0 0 0 .002-.031l.408-10.395.407-10.062.406-9.058.54-8.412a.612 1.462 0 0 0 .003-.04l.408-7.456.403-6.437.54-5.798a.612 1.462 0 0 0 .001-.03l.405-4.84.4-3.81.373-2.685.464-1.666zm377.358 0 .137.329.465 1.666.373 2.685.398 3.811.407 4.839a.612 1.462 0 0 0 .001.03l.54 5.799.402 6.436.409 7.457a.612 1.462 0 0 0 .001.039l.541 8.412.406 9.058.407 10.062.408 10.395a.612 1.462 0 0 0 .002.03l.542 11.351.406 11.668.408 12.343.409 12.992a.612 1.462 0 0 0 0 .03l.542 13.303.408 13.627.408 13.647a.612 1.462 0 0 0 0 .03l.542 14.278.409 14.278.265 9.324-.265 9.324-.409 14.278-.542 14.277a.612 1.462 0 0 0 0 .031l-.408 13.647-.408 13.627-.542 13.302a.612 1.462 0 0 0 0 .031l-.409 12.993-.408 12.342-.406 11.668-.542 11.35a.612 1.462 0 0 0-.002.031l-.408 10.395-.407 10.062-.406 9.058-.54 8.412a.612 1.462 0 0 0-.002.04l-.409 7.456-.403 6.433-.539 5.798a.612 1.462 0 0 0-.001.03l-.407 4.84-.398 3.81-.373 2.686-.465 1.665-.137.33-.121-.294-.473-1.979-.38-2.732-.403-3.843a.612 1.462 0 0 0-.002-.022l-.538-4.811-.401-5.437-.407-6.794-.406-7.143a.612 1.462 0 0 0-.002-.03l-.54-8.413-.407-9.058-.408-9.74-.406-10.07a.612 1.462 0 0 0-.002-.03l-.542-11.022-.407-11.668-.408-12.017-.408-12.347a.612 1.462 0 0 0-.002-.03l-.542-12.977-.406-12.973-.408-13.643a.612 1.462 0 0 0-.002-.04l-.543-13.627-.406-13.63-.405-13.54.405-13.54.406-13.632.543-13.627a.612 1.462 0 0 0 .002-.04l.408-13.643.406-12.973.542-12.98a.612 1.462 0 0 0 .002-.03l.408-12.347.408-12.017.407-11.668.542-11.026a.612 1.462 0 0 0 .002-.03l.406-10.07.408-9.74.407-9.059.54-8.412a.612 1.462 0 0 0 .002-.03l.406-7.143.407-6.794.401-5.437.538-4.811a.612 1.462 0 0 0 .002-.022l.403-3.843.38-2.737.473-1.975zm-357.566 8.658.428 1.027.34 1.622.387 3.085.403 4.177a.612 1.462 0 0 0 .007.046l.537 4.807.402 5.766.406 6.489a.612 1.462 0 0 0 .002.03l.54 7.437.405 8.074.408 8.761.407 9.42a.612 1.462 0 0 0 .002.04l.542 10.041.407 10.692.408 11.367.406 11.692a.612 1.462 0 0 0 .002.04l.543 12 .408 12.323.406 12.671.408 12.993a.612 1.462 0 0 0 .002.04l.542 12.976.409 12.981.27 8.662-.27 8.662-.409 12.976-.542 12.981a.612 1.462 0 0 0-.002.04l-.408 12.992-.406 12.668-.408 12.326-.543 11.997a.612 1.462 0 0 0-.002.04l-.406 11.695-.408 11.367-.407 10.688-.542 10.046a.612 1.462 0 0 0-.002.04l-.407 9.42-.408 8.756-.404 8.079-.541 7.436a.612 1.462 0 0 0-.002.03l-.406 6.489-.402 5.767-.537 4.806a.612 1.462 0 0 0-.007.047l-.403 4.176-.387 3.081-.34 1.626-.428 1.028-.298-1.19-.51-2.435-.388-3.086-.403-4.176a.612 1.462 0 0 0-.002-.022l-.536-5.136-.403-6.1-.408-6.798-.406-7.785a.612 1.462 0 0 0-.002-.046l-.543-8.412-.404-9.383-.409-9.737-.408-10.716a.612 1.462 0 0 0-.002-.04l-.542-11.021-.406-11.672-.407-12.017a.612 1.462 0 0 0-.002-.03l-.542-12.652-.408-12.977-.407-13.318-.408-13.322a.612 1.462 0 0 0-.002-.03l-.542-13.628-.405-13.524.405-13.524.542-13.627a.612 1.462 0 0 0 .002-.03l.408-13.323.407-13.321.408-12.973.542-12.652a.612 1.462 0 0 0 .002-.03l.407-12.017.406-11.672.542-11.022a.612 1.462 0 0 0 .002-.04l.408-10.712.409-9.74.404-9.38.543-8.412a.612 1.462 0 0 0 .002-.046l.406-7.785.408-6.798.403-6.1.536-5.135a.612 1.462 0 0 0 .002-.022l.403-4.177.388-3.085.51-2.435zm337.775 0 .298 1.19.51 2.434.386 3.086.405 4.176a.612 1.462 0 0 0 .002.022l.537 5.136.403 6.1.406 6.798.407 7.785a.612 1.462 0 0 0 .002.046l.542 8.412.405 9.38.408 9.74.408 10.712a.612 1.462 0 0 0 .002.04l.542 11.021.406 11.672.407 12.017a.612 1.462 0 0 0 .001.031l.543 12.651.408 12.973.406 13.322.408 13.322a.612 1.462 0 0 0 .002.03l.543 13.628.404 13.524-.404 13.524-.543 13.627a.612 1.462 0 0 0-.002.031l-.408 13.322-.406 13.318-.408 12.976-.543 12.652a.612 1.462 0 0 0-.001.03l-.407 12.018-.406 11.672-.542 11.021a.612 1.462 0 0 0-.002.04l-.408 10.716-.408 9.736-.405 9.384-.542 8.412a.612 1.462 0 0 0-.002.046l-.407 7.785-.406 6.798-.403 6.1-.537 5.135a.612 1.462 0 0 0-.002.022l-.405 4.177-.386 3.085-.51 2.435-.298 1.19-.428-1.027-.34-1.626-.387-3.082-.403-4.176a.612 1.462 0 0 0-.006-.046l-.538-4.807-.401-5.766-.406-6.489a.612 1.462 0 0 0-.003-.03l-.54-7.437-.405-8.079-.408-8.757-.407-9.419a.612 1.462 0 0 0-.001-.04l-.543-10.045-.406-10.689-.408-11.366-.407-11.696a.612 1.462 0 0 0-.001-.04l-.543-11.997-.408-12.326-.406-12.667-.408-12.993a.612 1.462 0 0 0-.002-.04l-.542-12.98-.408-12.977-.27-8.662.27-8.662.408-12.98.542-12.977a.612 1.462 0 0 0 .002-.04l.408-12.992.406-12.672.408-12.322.543-12.001a.612 1.462 0 0 0 .001-.04l.407-11.692.408-11.366.406-10.692.543-10.042a.612 1.462 0 0 0 .001-.04l.407-9.42.408-8.76.405-8.075.54-7.436a.612 1.462 0 0 0 .003-.03l.406-6.49.401-5.766.538-4.807a.612 1.462 0 0 0 .006-.046l.403-4.176.387-3.085.34-1.622zm-317.866 8.887.157.187.296 1.174.376 2.11.398 3.169a.612 1.462 0 0 0 .002.01l.533 4.144.401 5.112.405 5.49.406 6.801a.612 1.462 0 0 0 .002.054l.541 7.107.405 8.075.408 8.444a.612 1.462 0 0 0 .002.03l.542 9.396.407 9.712.406 10.391.408 10.72a.612 1.462 0 0 0 .002.04l.542 11.347.407 11.676.408 11.692.408 12.342a.612 1.462 0 0 0 .002.04l.542 12.326.407 12.326.408 12.346.132 4.11-.132 4.108-.408 12.346-.407 12.326-.542 12.327a.612 1.462 0 0 0-.002.04l-.408 12.342-.408 11.691-.407 11.676-.542 11.347a.612 1.462 0 0 0-.002.04l-.408 10.72-.406 10.387-.407 9.716-.542 9.396a.612 1.462 0 0 0-.002.03l-.408 8.444-.405 8.075-.54 7.103a.612 1.462 0 0 0-.003.054l-.406 6.802-.405 5.489-.401 5.112-.533 4.144a.612 1.462 0 0 0-.002.01l-.398 3.17-.376 2.11-.296 1.173-.157.186-.03-.022-.248-.59-.473-1.98-.383-2.748-.398-3.486-.403-4.823a.612 1.462 0 0 0-.007-.054l-.54-5.469-.402-6.103-.407-7.123-.406-7.79a.612 1.462 0 0 0-.002-.04l-.54-8.74-.407-9.063-.408-9.74a.612 1.462 0 0 0-.002-.04l-.543-10.367-.406-11.017-.407-11.367-.408-12.021a.612 1.462 0 0 0-.002-.03l-.542-12.331-.406-12.322-.409-12.668-.408-12.996a.612 1.462 0 0 0-.002-.031l-.542-13.306-.128-4.097.128-4.097.542-13.306a.612 1.462 0 0 0 .002-.03l.408-12.997.409-12.667.406-12.327.542-12.326a.612 1.462 0 0 0 .002-.04l.408-12.017.407-11.366.406-11.018.543-10.371a.612 1.462 0 0 0 .002-.04l.408-9.74.406-9.062.54-8.742a.612 1.462 0 0 0 .003-.04l.406-7.788.407-7.123.403-6.104.539-5.47a.612 1.462 0 0 0 .007-.053l.403-4.822.398-3.486.383-2.749.473-1.979.249-.59zm297.957 0 .03.022.248.591.473 1.98.383 2.748.398 3.486.403 4.823a.612 1.462 0 0 0 .002.053l.54 5.47.402 6.103.407 7.123.406 7.79a.612 1.462 0 0 0 .002.039l.541 8.74.407 9.063.408 9.74a.612 1.462 0 0 0 .001.04l.541 10.371.408 11.018.407 11.367.408 12.017a.612 1.462 0 0 0 .001.04l.543 12.326.406 12.326.408 12.667.408 12.997a.612 1.462 0 0 0 0 .03l.544 13.306.128 4.097-.128 4.097-.544 13.306a.612 1.462 0 0 0 0 .03l-.408 12.997-.408 12.668-.406 12.322-.543 12.33a.612 1.462 0 0 0-.001.031l-.408 12.021-.407 11.367-.408 11.017-.54 10.367a.612 1.462 0 0 0-.002.04l-.408 9.74-.407 9.063-.54 8.74a.612 1.462 0 0 0-.003.04l-.406 7.79-.407 7.123-.403 6.103-.539 5.47a.612 1.462 0 0 0-.002.053l-.403 4.823-.398 3.486-.383 2.748-.473 1.98-.249.59-.029.022-.157-.186-.296-1.174-.376-2.11-.398-3.169a.612 1.462 0 0 0-.002-.01l-.532-4.144-.404-5.113-.403-5.489-.408-6.801a.612 1.462 0 0 0-.002-.054l-.54-7.103-.405-8.075-.408-8.443a.612 1.462 0 0 0-.002-.031l-.543-9.395-.406-9.717-.406-10.387-.408-10.72a.612 1.462 0 0 0-.002-.04l-.543-11.347-.406-11.676-.408-11.691-.408-12.343a.612 1.462 0 0 0-.002-.04l-.542-12.326-.407-12.326-.408-12.346-.132-4.109.132-4.109.408-12.346.407-12.326.542-12.327a.612 1.462 0 0 0 .002-.04l.408-12.341.408-11.692.406-11.676.543-11.347a.612 1.462 0 0 0 .002-.04l.408-10.72.406-10.39.406-9.713.543-9.396a.612 1.462 0 0 0 .002-.03l.408-8.444.404-8.075.541-7.107a.612 1.462 0 0 0 .002-.054l.408-6.801.403-5.49.404-5.111.532-4.145a.612 1.462 0 0 0 .002-.01l.398-3.169.376-2.11.296-1.174zm-278.158 8.98h.02l.283.511.317 1.265.388 2.467.53 3.482.397 4.117.403 4.83.407 5.823a.612 1.462 0 0 0 .002.046l.54 6.453.404 7.095.408 7.781.406 8.444a.612 1.462 0 0 0 .002.046l.54 8.74.407 9.71.408 10.07a.612 1.462 0 0 0 .002.039l.543 10.371.406 10.696.408 11.042.407 11.37a.612 1.462 0 0 0 .002.04l.542 11.676.408 11.676.406 11.696.405 11.902-.405 11.902-.406 11.695-.408 11.676-.542 11.676a.612 1.462 0 0 0-.002.04l-.407 11.37-.408 11.042-.406 10.696-.543 10.371a.612 1.462 0 0 0-.002.04l-.408 10.07-.406 9.708-.541 8.741a.612 1.462 0 0 0-.002.046l-.406 8.444-.408 7.781-.404 7.095-.54 6.453a.612 1.462 0 0 0-.002.046l-.407 5.822-.403 4.83-.398 4.117-.529 3.483-.388 2.466-.317 1.266-.284.511h-.02l-.138-.221-.324-1.297-.51-2.435-.387-3.082-.402-4.156-.404-4.855a.612 1.462 0 0 0-.007-.03l-.54-5.799-.403-6.44-.408-7.135a.612 1.462 0 0 0-.002-.04l-.54-8.09-.407-8.408-.408-9.087-.406-9.744a.612 1.462 0 0 0-.002-.04l-.543-10.37-.406-10.697-.408-11.037-.408-11.696a.612 1.462 0 0 0 0-.04l-.543-11.672-.406-12-.408-12.343a.612 1.462 0 0 0-.002-.04l-.544-12.326-.267-8.313.267-8.317.544-12.322a.612 1.462 0 0 0 .002-.04l.408-12.342.406-12 .543-11.673a.612 1.462 0 0 0 .002-.04l.408-11.695.408-11.041.406-10.693.543-10.375a.612 1.462 0 0 0 .002-.04l.406-9.74.408-9.086.407-8.408.54-8.09a.612 1.462 0 0 0 .002-.04l.408-7.139.404-6.437.539-5.798a.612 1.462 0 0 0 .002-.03l.404-4.855.402-4.157.386-3.081.511-2.44.324-1.292zm258.34 0h.019l.139.221.323 1.293.511 2.44.387 3.08.401 4.157.405 4.855a.612 1.462 0 0 0 .002.03l.54 5.799.402 6.436.408 7.14a.612 1.462 0 0 0 .002.039l.54 8.09.407 8.408.408 9.086.407 9.741a.612 1.462 0 0 0 .001.04l.543 10.375.406 10.692.408 11.041.408 11.696a.612 1.462 0 0 0 .002.04l.542 11.672.407 12 .408 12.343a.612 1.462 0 0 0 .002.04l.542 12.322.267 8.317-.267 8.312-.542 12.327a.612 1.462 0 0 0-.002.04l-.408 12.342-.407 12-.542 11.673a.612 1.462 0 0 0-.002.04l-.408 11.695-.408 11.037-.407 10.697-.542 10.37a.612 1.462 0 0 0-.002.04l-.406 9.745-.408 9.086-.407 8.408-.54 8.09a.612 1.462 0 0 0-.002.04l-.408 7.135-.403 6.44-.54 5.799a.612 1.462 0 0 0-.002.03l-.404 4.855-.402 4.156-.386 3.082-.511 2.435-.324 1.297-.139.222h-.02l-.283-.512-.318-1.265-.387-2.467-.53-3.482-.397-4.117-.403-4.83-.407-5.823a.612 1.462 0 0 0-.002-.046l-.54-6.452-.405-7.096-.407-7.78-.406-8.445a.612 1.462 0 0 0-.002-.046l-.541-8.74-.407-9.71-.408-10.07a.612 1.462 0 0 0-.001-.039l-.543-10.37-.406-10.697-.408-11.042-.407-11.37a.612 1.462 0 0 0-.001-.04l-.543-11.675-.408-11.676-.408-11.696-.403-11.902.403-11.902.408-11.696.408-11.676.543-11.676a.612 1.462 0 0 0 .001-.04l.407-11.37.408-11.041.406-10.697.543-10.37a.612 1.462 0 0 0 .001-.04l.408-10.07.407-9.709.54-8.74a.612 1.462 0 0 0 .003-.047l.406-8.444.407-7.78.404-7.096.541-6.453a.612 1.462 0 0 0 .002-.046l.407-5.822.403-4.83.398-4.117.53-3.482.386-2.467.318-1.265zm-238.524 8.506.205.123.218.52.345 1.646.393 2.824a.612 1.462 0 0 0 .007.04l.53 3.49.399 4.116.406 4.85a.612 1.462 0 0 0 .002.031l.54 5.802.404 6.112.406 7.13.407 7.469a.612 1.462 0 0 0 .002.04l.54 8.09.407 8.73.408 9.418.406 9.42a.612 1.462 0 0 0 .002.04l.543 10.045.406 10.367.408 10.72a.612 1.462 0 0 0 .002.04l.543 11.026.406 11.025.408 11.045.408 11.367a.612 1.462 0 0 0 .002.046l.349 7.305-.349 7.306a.612 1.462 0 0 0-.002.046l-.408 11.366-.408 11.046-.406 11.025-.543 11.026a.612 1.462 0 0 0-.002.04l-.408 10.72-.406 10.367-.543 10.045a.612 1.462 0 0 0-.002.04l-.406 9.42-.408 9.419-.406 8.729-.541 8.086a.612 1.462 0 0 0-.002.046l-.407 7.468-.406 7.127-.405 6.116-.539 5.802a.612 1.462 0 0 0-.002.03l-.406 4.851-.398 4.117-.531 3.49a.612 1.462 0 0 0-.007.04l-.393 2.828-.345 1.642-.218.523-.205.123-.059-.046-.248-.794-.38-2.113a.612 1.462 0 0 0-.007-.018l-.524-2.824-.392-3.426-.403-4.51a.612 1.462 0 0 0-.007-.046l-.537-5.144-.403-5.77-.407-6.802-.406-7.143a.612 1.462 0 0 0-.002-.04l-.541-8.09-.406-8.408-.407-9.086-.408-9.745a.612 1.462 0 0 0-.002-.04l-.542-10.045-.407-10.371-.408-10.72a.612 1.462 0 0 0 0-.031l-.544-11.35-.406-11.352-.408-11.37-.407-12.017a.612 1.462 0 0 0-.002-.046l-.535-11.533.535-11.534a.612 1.462 0 0 0 .002-.046l.407-12.02.408-11.367.406-11.35.544-11.351a.612 1.462 0 0 0 0-.031l.408-10.72.407-10.371.542-10.046a.612 1.462 0 0 0 .002-.04l.408-9.744.407-9.087.406-8.407.54-8.091a.612 1.462 0 0 0 .003-.04l.406-7.142.407-6.802.403-5.77.537-5.145a.612 1.462 0 0 0 .007-.046l.403-4.509.392-3.427.524-2.824a.612 1.462 0 0 0 .007-.017l.38-2.114.248-.793zm218.727 0 .059.046.248.794.38 2.114a.612 1.462 0 0 0 .002.017l.526 2.824.39 3.427.404 4.509a.612 1.462 0 0 0 .007.046l.537 5.144.403 5.77.407 6.802.406 7.143a.612 1.462 0 0 0 .002.04l.54 8.09.407 8.408.407 9.086.408 9.745a.612 1.462 0 0 0 .001.039l.543 10.046.406 10.371.408 10.72a.612 1.462 0 0 0 0 .03l.544 11.352.407 11.35.408 11.367.406 12.02a.612 1.462 0 0 0 .002.047l.536 11.533-.536 11.533a.612 1.462 0 0 0-.002.046l-.406 12.017-.408 11.37-.407 11.352-.544 11.35a.612 1.462 0 0 0 0 .031l-.408 10.72-.406 10.371-.543 10.046a.612 1.462 0 0 0-.001.04l-.408 9.744-.407 9.086-.406 8.408-.54 8.091a.612 1.462 0 0 0-.003.04l-.406 7.142-.407 6.802-.403 5.77-.537 5.144a.612 1.462 0 0 0-.007.047l-.405 4.509-.39 3.427-.525 2.823a.612 1.462 0 0 0-.002.018l-.38 2.114-.248.793-.059.046-.205-.123-.218-.523-.345-1.642-.393-2.828a.612 1.462 0 0 0-.006-.04l-.531-3.49-.398-4.116-.407-4.85a.612 1.462 0 0 0-.001-.031l-.54-5.803-.404-6.115-.407-7.127-.406-7.468a.612 1.462 0 0 0-.002-.046l-.541-8.087-.406-8.729-.408-9.42-.407-9.418a.612 1.462 0 0 0-.002-.04l-.54-10.046-.407-10.367-.408-10.72a.612 1.462 0 0 0-.002-.04l-.54-11.025-.407-11.026-.408-11.045-.408-11.367a.612 1.462 0 0 0-.002-.046l-.349-7.305.349-7.305a.612 1.462 0 0 0 .002-.047l.408-11.366.408-11.045.406-11.026.541-11.026a.612 1.462 0 0 0 .002-.039l.408-10.72.407-10.367.542-10.046a.612 1.462 0 0 0 .002-.04l.406-9.419.408-9.42.407-8.728.54-8.091a.612 1.462 0 0 0 .003-.04l.406-7.468.406-7.13.405-6.112.54-5.803a.612 1.462 0 0 0 .001-.03l.406-4.85.399-4.117.53-3.49a.612 1.462 0 0 0 .007-.04l.393-2.824.345-1.646.217-.52zm-198.756 7.853.096.15.312.996.377 1.8.52 2.793.39 3.438.404 4.165.404 5.171a.612 1.462 0 0 0 .007.062l.54 5.469.403 6.111.408 6.81a.612 1.462 0 0 0 .002.046l.54 7.436.407 8.08.406 8.443.408 8.769a.612 1.462 0 0 0 .002.039l.543 9.396.406 9.716.408 10.07.407 10.074a.612 1.462 0 0 0 .002.04l.542 10.37.406 10.697.407 10.724a.612 1.462 0 0 0 .002.046l.542 10.7.13 3.419-.13 3.418-.542 10.7a.612 1.462 0 0 0-.002.047l-.407 10.72-.406 10.7-.542 10.371a.612 1.462 0 0 0-.002.04l-.407 10.074-.408 10.07-.406 9.716-.543 9.395a.612 1.462 0 0 0-.002.04l-.408 8.769-.406 8.444-.407 8.078-.54 7.437a.612 1.462 0 0 0-.002.046l-.408 6.81-.403 6.11-.54 5.47a.612 1.462 0 0 0-.007.061l-.404 5.172-.403 4.164-.392 3.439-.519 2.792-.377 1.8-.312.996-.096.15-.116-.07-.236-.562-.356-1.42-.51-2.44-.386-3.08-.403-4.165-.407-4.541a.612 1.462 0 0 0-.002-.031l-.54-5.47-.403-6.107-.405-6.81-.41-7.142a.612 1.462 0 0 0-.002-.03l-.54-8.092-.407-8.412-.408-8.768a.612 1.462 0 0 0-.002-.031l-.542-9.725-.407-9.72-.406-10.066-.408-10.716a.612 1.462 0 0 0-.002-.046l-.543-10.7-.406-11.022-.408-11.046-.408-11.045a.612 1.462 0 0 0-.002-.04l-.18-3.732.18-3.732a.612 1.462 0 0 0 .002-.04l.408-11.044.408-11.046.406-11.025.543-10.697a.612 1.462 0 0 0 .002-.046l.408-10.716.406-10.066.407-9.72.542-9.725a.612 1.462 0 0 0 .002-.03l.408-8.77.406-8.411.541-8.09a.612 1.462 0 0 0 .002-.032l.41-7.142.405-6.81.403-6.108.54-5.469a.612 1.462 0 0 0 .002-.03l.407-4.538.403-4.164.386-3.082.51-2.439.356-1.42.236-.563zm178.785 0 .116.07.235.563.357 1.42.51 2.439.386 3.081.401 4.165.408 4.537a.612 1.462 0 0 0 .002.03l.54 5.47.402 6.107.407 6.81.408 7.143a.612 1.462 0 0 0 .002.03l.54 8.091.407 8.412.408 8.769a.612 1.462 0 0 0 .002.03l.543 9.725.406 9.72.406 10.067.408 10.716a.612 1.462 0 0 0 .002.046l.543 10.696.406 11.026.408 11.045.408 11.045a.612 1.462 0 0 0 .002.04l.18 3.732-.18 3.732a.612 1.462 0 0 0-.002.04l-.408 11.045-.408 11.045-.406 11.022-.543 10.7a.612 1.462 0 0 0-.002.046l-.408 10.716-.406 10.066-.406 9.72-.543 9.725a.612 1.462 0 0 0-.002.03l-.408 8.77-.406 8.412-.541 8.09a.612 1.462 0 0 0-.002.031l-.408 7.143-.407 6.81-.403 6.107-.539 5.47a.612 1.462 0 0 0-.002.03l-.408 4.54-.401 4.165-.387 3.082-.509 2.439-.357 1.42-.235.563-.116.07-.097-.151-.311-.996-.377-1.8-.52-2.792-.39-3.439-.404-4.164-.404-5.172a.612 1.462 0 0 0-.007-.061l-.54-5.47-.403-6.11-.408-6.81a.612 1.462 0 0 0-.002-.047l-.54-7.436-.407-8.079-.406-8.443-.408-8.77a.612 1.462 0 0 0-.002-.039l-.543-9.395-.406-9.717-.408-10.07-.408-10.073a.612 1.462 0 0 0-.002-.04l-.543-10.37-.406-10.701-.408-10.72a.612 1.462 0 0 0-.002-.046l-.543-10.7-.129-3.42.13-3.418.542-10.7a.612 1.462 0 0 0 .002-.046l.408-10.724.406-10.697.543-10.37a.612 1.462 0 0 0 .002-.04l.408-10.074.408-10.07.406-9.716.543-9.396a.612 1.462 0 0 0 .002-.04l.408-8.768.406-8.444.407-8.079.54-7.436a.612 1.462 0 0 0 .002-.046l.408-6.81.403-6.111.54-5.47a.612 1.462 0 0 0 .007-.06l.404-5.172.403-4.165.392-3.438.52-2.792.376-1.8.311-.996zm-158.986 6.707h.039l.197.476.358 1.142.495 2.07.383 2.748.4 3.494.403 4.51a.612 1.462 0 0 0 .009.07l.535 4.81.404 5.45.404 6.15.408 6.81a.612 1.462 0 0 0 .002.054l.541 7.107.405 7.753.408 8.44a.612 1.462 0 0 0 .002.054l.54 8.412.407 9.062.406 9.415.409 9.745a.612 1.462 0 0 0 .002.046l.542 9.72.406 10.046.408 10.391a.612 1.462 0 0 0 0 .01l.408 10.07a.612 1.462 0 0 0 .002.04l.535 10.216-.535 10.217a.612 1.462 0 0 0-.002.04l-.408 10.069a.612 1.462 0 0 0 0 .01l-.408 10.39-.406 10.047-.542 9.72a.612 1.462 0 0 0-.002.046l-.409 9.745-.406 9.415-.406 9.062-.541 8.412a.612 1.462 0 0 0-.002.054l-.408 8.44-.405 7.753-.54 7.108a.612 1.462 0 0 0-.003.053l-.408 6.81-.404 6.15-.404 5.446-.535 4.815a.612 1.462 0 0 0-.01.07l-.402 4.509-.4 3.494-.383 2.748-.495 2.07-.358 1.142-.197.472h-.039l-.197-.472-.337-1.074-.38-2.114a.612 1.462 0 0 0-.007-.022l-.524-2.82-.393-3.439-.401-4.168-.405-5.168a.612 1.462 0 0 0-.007-.06l-.538-5.474-.404-6.108-.407-6.81a.612 1.462 0 0 0-.002-.045l-.54-7.437-.405-8.082-.408-8.44-.407-8.769a.612 1.462 0 0 0-.002-.04l-.54-9.395-.407-9.392-.408-10.07-.408-10.069a.612 1.462 0 0 0-.002-.04l-.542-10.375-.407-10.696-.408-10.72-.267-7.016.267-7.016.408-10.72.407-10.696.542-10.375a.612 1.462 0 0 0 .002-.04l.408-10.07.408-10.07.407-9.39.54-9.396a.612 1.462 0 0 0 .002-.04l.407-8.769.408-8.443.405-8.08.54-7.435a.612 1.462 0 0 0 .002-.047l.407-6.81.404-6.107.538-5.473a.612 1.462 0 0 0 .007-.061l.405-5.168.401-4.168.393-3.439.524-2.823a.612 1.462 0 0 0 .007-.018l.38-2.114.337-1.075zm139.148 0h.039l.197.476.337 1.074.38 2.114a.612 1.462 0 0 0 .002.013l.524 2.824.393 3.439.4 4.136.007.062.401 5.14a.612 1.462 0 0 0 .007.06l.537 5.474.404 6.108.408 6.81a.612 1.462 0 0 0 .002.045l.54 7.437.405 8.078.408 8.444.407 8.769a.612 1.462 0 0 0 .002.04l.54 9.395.407 9.391.408 10.07.408 10.07a.612 1.462 0 0 0 .002.04l.542 10.374.407 10.697.408 10.72.267 7.016-.267 7.016-.408 10.72-.407 10.696-.542 10.375a.612 1.462 0 0 0-.002.04l-.408 10.07-.408 10.07-.407 9.39-.54 9.396a.612 1.462 0 0 0-.002.04l-.407 8.768-.408 8.44-.405 8.083-.54 7.436a.612 1.462 0 0 0-.002.046l-.408 6.81-.404 6.108-.537 5.473a.612 1.462 0 0 0-.007.061l-.401 5.14-.007.061-.4 4.137-.393 3.438-.524 2.82a.612 1.462 0 0 0-.002.022l-.38 2.114-.337 1.075-.197.472h-.039l-.197-.472-.358-1.142-.495-2.07-.383-2.75-.4-3.493-.403-4.51a.612 1.462 0 0 0-.009-.068l-.535-4.815-.403-5.445-.405-6.152-.408-6.81a.612 1.462 0 0 0-.002-.053l-.541-7.107-.405-7.754-.408-8.44a.612 1.462 0 0 0-.002-.053l-.54-8.412-.407-9.062-.406-9.416-.409-9.744a.612 1.462 0 0 0-.002-.046l-.54-9.72-.407-10.047-.408-10.39a.612 1.462 0 0 0 0-.006.612 1.462 0 0 0 0-.005l-.408-10.07a.612 1.462 0 0 0-.002-.039l-.534-10.216.534-10.217a.612 1.462 0 0 0 .002-.04l.408-10.07a.612 1.462 0 0 0 0-.004.612 1.462 0 0 0 0-.005l.408-10.391.407-10.046.54-9.72a.612 1.462 0 0 0 .002-.047l.409-9.744.406-9.416.406-9.062.541-8.412a.612 1.462 0 0 0 .002-.054l.408-8.44.405-7.753.54-7.107a.612 1.462 0 0 0 .003-.054l.408-6.81.405-6.15.403-5.45.535-4.81a.612 1.462 0 0 0 .01-.07l.402-4.51.4-3.493.383-2.749.495-2.07.358-1.142zm-119.214 5.524h.078l.176.42.357 1.42.512 2.46.39 2.784.403 3.537a.612 1.462 0 0 0 .002.018l.536 4.49.401 4.798.407 5.497.406 6.16a.612 1.462 0 0 0 .007.06l.54 6.45.404 7.424.408 7.464.406 8.114a.612 1.462 0 0 0 .002.046l.541 8.416.406 8.737.409 9.416a.612 1.462 0 0 0 .002.061l.542 9.066.406 9.717.408 9.744.407 10.07a.612 1.462 0 0 0 .002.054l.542 9.72.269 6.656-.269 6.655-.542 9.72a.612 1.462 0 0 0-.002.054l-.407 10.07-.408 9.744-.406 9.717-.542 9.066a.612 1.462 0 0 0-.002.054l-.409 9.419-.406 8.733-.54 8.42a.612 1.462 0 0 0-.003.046l-.406 8.114-.408 7.464-.405 7.425-.539 6.448a.612 1.462 0 0 0-.007.062l-.406 6.16-.407 5.492-.401 4.803-.536 4.49a.612 1.462 0 0 0-.002.017l-.403 3.538-.39 2.784-.512 2.459-.357 1.42-.176.42h-.078l-.26-.155-.244-.782-.369-1.76-.396-2.527a.612 1.462 0 0 0-.007-.03l-.528-3.157-.394-3.78-.407-4.521a.612 1.462 0 0 0-.002-.031l-.537-5.473-.405-5.794-.406-6.152-.407-7.135a.612 1.462 0 0 0-.002-.053l-.54-7.437-.407-8.082-.406-8.115-.408-9.086a.612 1.462 0 0 0-.002-.053l-.543-9.07-.406-9.392-.408-9.74-.407-10.07a.612 1.462 0 0 0-.002-.046l-.542-10.046-.406-10.05-.402-10.256.402-10.26.406-10.046.542-10.046a.612 1.462 0 0 0 .002-.046l.407-10.07.408-9.74.406-9.392.543-9.07a.612 1.462 0 0 0 .002-.054l.408-9.086.406-8.114.406-8.083.541-7.436a.612 1.462 0 0 0 .002-.054l.407-7.135.406-6.151.405-5.795.537-5.473a.612 1.462 0 0 0 .002-.03l.407-4.522.394-3.78.528-3.156a.612 1.462 0 0 0 .007-.03l.396-2.527.369-1.761.244-.781zm99.24 0h.078l.258.156.246.78.368 1.762.396 2.526a.612 1.462 0 0 0 .007.03l.528 3.158.395 3.78.406 4.52a.612 1.462 0 0 0 .002.031l.538 5.473.404 5.795.407 6.151.406 7.135a.612 1.462 0 0 0 .002.053l.54 7.437.407 8.082.407 8.115.408 9.086a.612 1.462 0 0 0 .002.054l.542 9.07.407 9.392.408 9.74.406 10.07a.612 1.462 0 0 0 .002.046l.542 10.046.407 10.046.401 10.26-.401 10.256-.407 10.05-.542 10.046a.612 1.462 0 0 0-.002.046l-.406 10.07-.408 9.74-.407 9.391-.542 9.07a.612 1.462 0 0 0-.002.054l-.408 9.086-.407 8.115-.406 8.083-.54 7.436a.612 1.462 0 0 0-.003.053l-.406 7.135-.407 6.152-.404 5.794-.538 5.473a.612 1.462 0 0 0-.002.03l-.406 4.522-.395 3.78-.528 3.156a.612 1.462 0 0 0-.007.031l-.396 2.527-.368 1.76-.246.782-.258.155h-.079l-.176-.42-.356-1.42-.513-2.46-.39-2.783-.403-3.538a.612 1.462 0 0 0-.002-.018l-.535-4.49-.402-4.802-.406-5.493-.407-6.16a.612 1.462 0 0 0-.007-.06l-.539-6.45-.405-7.424-.408-7.464-.406-8.114a.612 1.462 0 0 0-.002-.046l-.54-8.42-.407-8.733-.408-9.42a.612 1.462 0 0 0-.002-.053l-.543-9.066-.406-9.717-.408-9.745-.407-10.07a.612 1.462 0 0 0-.002-.053l-.542-9.72-.269-6.655.27-6.655.541-9.721a.612 1.462 0 0 0 .002-.054l.407-10.07.408-9.744.406-9.716.543-9.067a.612 1.462 0 0 0 .002-.061l.408-9.415.406-8.737.541-8.416a.612 1.462 0 0 0 .002-.046l.406-8.115.408-7.464.405-7.424.54-6.449a.612 1.462 0 0 0 .006-.061l.407-6.16.406-5.496.402-4.8.535-4.489a.612 1.462 0 0 0 .002-.017l.403-3.538.39-2.784.513-2.459.356-1.42zm-79.43 3.724.109.175.321.769.48 1.717.371 2.074.395 3.153.406 3.554a.612 1.462 0 0 0 .002.022l.538 4.49.4 4.794.406 5.823a.612 1.462 0 0 0 .007.078l.538 5.79.404 6.767.407 7.139.408 7.468a.612 1.462 0 0 0 .002.04l.54 8.09.407 8.412.406 8.769.408 9.094a.612 1.462 0 0 0 .002.053l.541 9.067.406 9.391.409 9.745a.612 1.462 0 0 0 .002.046l.542 9.724.406 9.721.13 3.105-.13 3.102-.406 9.724-.542 9.725a.612 1.462 0 0 0-.002.046l-.409 9.745-.406 9.391-.54 9.067a.612 1.462 0 0 0-.003.053l-.408 9.094-.406 8.77-.407 8.411-.54 8.09a.612 1.462 0 0 0-.002.04l-.408 7.468-.407 7.14-.404 6.761-.538 5.795a.612 1.462 0 0 0-.007.078l-.406 5.822-.4 4.795-.538 4.49a.612 1.462 0 0 0-.002.017l-.406 3.558-.395 3.153-.371 2.074-.48 1.717-.321.77-.108.174-.03-.022-.368-.662-.318-1.266-.388-2.474a.612 1.462 0 0 0-.013-.08l-.524-2.823-.393-3.439-.402-4.164-.406-5.167a.612 1.462 0 0 0-.007-.07l-.54-5.477-.402-5.782-.407-6.802-.408-7.143a.612 1.462 0 0 0-.002-.053l-.54-7.436-.405-8.08-.408-8.443-.407-8.769a.612 1.462 0 0 0-.002-.046l-.542-9.07-.407-9.392-.406-9.744a.612 1.462 0 0 0-.002-.046l-.543-9.72-.406-9.721-.406-10.07-.127-3.11.127-3.109.406-10.07.406-9.72.543-9.72a.612 1.462 0 0 0 .002-.047l.406-9.744.407-9.392.542-9.07a.612 1.462 0 0 0 .002-.046l.407-8.77.408-8.443.404-8.079.541-7.436a.612 1.462 0 0 0 .002-.053l.408-7.143.407-6.802.403-5.782.539-5.477a.612 1.462 0 0 0 .007-.07l.406-5.167.402-4.165.393-3.438.524-2.824a.612 1.462 0 0 0 .013-.08l.388-2.475.318-1.265.369-.662zm59.698 0 .03.022.367.663.319 1.265.388 2.475a.612 1.462 0 0 0 .013.08l.524 2.823.393 3.439.402 4.164.406 5.168a.612 1.462 0 0 0 .007.07l.54 5.476.402 5.783.407 6.801.408 7.143a.612 1.462 0 0 0 .002.054l.54 7.436.405 8.079.408 8.443.407 8.77a.612 1.462 0 0 0 .002.045l.542 9.07.405 9.392.408 9.745a.612 1.462 0 0 0 .002.046l.54 9.72.409 9.72.406 10.07.126 3.11-.126 3.11-.406 10.069-.408 9.72-.541 9.721a.612 1.462 0 0 0-.002.046l-.408 9.745-.405 9.391-.542 9.07a.612 1.462 0 0 0-.002.047l-.407 8.768-.408 8.444-.404 8.079-.541 7.436a.612 1.462 0 0 0-.002.054l-.408 7.142-.407 6.802-.403 5.783-.539 5.477a.612 1.462 0 0 0-.007.069l-.406 5.168-.402 4.164-.393 3.438-.524 2.824a.612 1.462 0 0 0-.013.08l-.388 2.474-.319 1.265-.368.662-.029.022-.108-.174-.321-.77-.48-1.716-.371-2.075-.395-3.153-.407-3.557a.612 1.462 0 0 0-.002-.018l-.537-4.49-.4-4.794-.406-5.822a.612 1.462 0 0 0-.007-.08l-.538-5.793-.404-6.762-.408-7.14-.407-7.467a.612 1.462 0 0 0-.002-.04l-.54-8.09-.407-8.412-.406-8.77-.408-9.093a.612 1.462 0 0 0-.002-.054l-.541-9.066-.407-9.392-.408-9.744a.612 1.462 0 0 0-.002-.046l-.542-9.725-.406-9.725-.13-3.101.13-3.105.406-9.721.542-9.725a.612 1.462 0 0 0 .002-.046l.408-9.744.407-9.392.54-9.066a.612 1.462 0 0 0 .003-.054l.408-9.094.406-8.769.406-8.412.541-8.09a.612 1.462 0 0 0 .002-.04l.407-7.468.408-7.139.404-6.766.538-5.79a.612 1.462 0 0 0 .007-.079l.406-5.822.4-4.795.537-4.49a.612 1.462 0 0 0 .002-.021l.407-3.554.395-3.153.371-2.074.48-1.717.321-.77zm-39.722 1.952.107.17.432 1.031.348 1.67.39 2.479.401 3.204a.612 1.462 0 0 0 .007.04l.533 3.823.4 4.45.404 5.172.408 5.516a.612 1.462 0 0 0 .002.046l.54 6.128.404 6.77.408 7.143a.612 1.462 0 0 0 .002.046l.543 7.761.404 8.087.408 8.444.409 8.447a.612 1.462 0 0 0 .002.04l.542 9.07.406 9.392.408 9.423.407 9.423a.612 1.462 0 0 0 .002.04l.542 9.724.4 9.578-.4 9.578-.542 9.72a.612 1.462 0 0 0-.002.047l-.407 9.423-.408 9.423-.406 9.392-.542 9.07a.612 1.462 0 0 0-.002.04l-.409 8.447-.408 8.444-.404 8.087-.543 7.761a.612 1.462 0 0 0-.002.046l-.408 7.143-.405 6.77-.539 6.127a.612 1.462 0 0 0-.002.046l-.408 5.517-.404 5.172-.4 4.45-.533 3.823a.612 1.462 0 0 0-.007.04l-.401 3.204-.39 2.479-.348 1.67-.432 1.027-.107.174-.084-.07-.345-.412-.305-1.21-.376-1.808-.395-2.824a.612 1.462 0 0 0-.013-.08l-.526-3.144-.396-4.105-.405-4.51-.405-5.496a.612 1.462 0 0 0-.009-.062l-.54-5.802-.402-6.12-.407-6.801-.408-7.464a.612 1.462 0 0 0-.002-.054l-.54-7.766-.407-8.082-.406-8.765a.612 1.462 0 0 0-.002-.054l-.543-8.74-.404-9.067-.408-9.42-.408-9.419a.612 1.462 0 0 0-.002-.046l-.543-9.724-.406-9.721-.266-6.354.266-6.353.406-9.72.543-9.725a.612 1.462 0 0 0 .002-.046l.408-9.42.408-9.42.404-9.065.543-8.745a.612 1.462 0 0 0 .002-.054l.406-8.765.407-8.083.54-7.765a.612 1.462 0 0 0 .002-.054l.408-7.464.407-6.802.403-6.12.539-5.802a.612 1.462 0 0 0 .009-.06l.405-5.498.405-4.51.396-4.104.526-3.145a.612 1.462 0 0 0 .013-.08l.395-2.828.376-1.804.305-1.21.345-.417zm19.747 0 .083.061.345.417.305 1.21.377 1.804.395 2.828a.612 1.462 0 0 0 .013.079l.526 3.145.396 4.105.405 4.51.405 5.496a.612 1.462 0 0 0 .007.061l.539 5.803.403 6.12.406 6.8.408 7.465a.612 1.462 0 0 0 .002.054l.541 7.765.406 8.083.407 8.765a.612 1.462 0 0 0 .002.053l.54 8.745.407 9.066.408 9.42.408 9.419a.612 1.462 0 0 0 .002.046l.542 9.725.407 9.72.265 6.354-.265 6.353-.407 9.721-.542 9.725a.612 1.462 0 0 0-.002.046l-.408 9.42-.408 9.418-.406 9.067-.541 8.74a.612 1.462 0 0 0-.002.055l-.407 8.764-.406 8.083-.54 7.766a.612 1.462 0 0 0-.003.053l-.408 7.464-.406 6.802-.403 6.12-.54 5.802a.612 1.462 0 0 0-.006.061l-.405 5.497-.405 4.51-.396 4.104-.526 3.146a.612 1.462 0 0 0-.013.078l-.395 2.824-.377 1.809-.305 1.21-.345.412-.083.07-.108-.175-.43-1.027-.35-1.67-.389-2.479-.401-3.204a.612 1.462 0 0 0-.007-.04l-.534-3.823-.399-4.45-.406-5.171-.406-5.517a.612 1.462 0 0 0-.002-.046l-.54-6.128-.404-6.77-.408-7.142a.612 1.462 0 0 0-.002-.046l-.541-7.762-.405-8.087-.408-8.443-.408-8.448a.612 1.462 0 0 0-.002-.04l-.542-9.07-.407-9.391-.408-9.423-.406-9.424a.612 1.462 0 0 0-.002-.046l-.543-9.72-.4-9.578.4-9.578.543-9.725a.612 1.462 0 0 0 .002-.04l.406-9.423.408-9.423.407-9.391.542-9.07a.612 1.462 0 0 0 .002-.04l.408-8.448.408-8.443.405-8.087.54-7.761a.612 1.462 0 0 0 .003-.047l.408-7.142.405-6.77.539-6.128a.612 1.462 0 0 0 .002-.046l.406-5.517.406-5.171.399-4.45.534-3.823a.612 1.462 0 0 0 .007-.04l.401-3.205.39-2.478.348-1.67.431-1.031z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 1.31322,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          id="ku-band"
          d="m-430.651 195.133-.403.488a.61 2.196 0 0 0-.314.864l-.54 2.93a.61 2.196 0 0 0-.082.638l-.406 5.367a.61 2.196 0 0 0-.01.149l-.407 7.32a.61 2.196 0 0 0-.005.09l-.406 9.263-.54 11.699a.61 2.196 0 0 0-.005.13l-.407 13.66a.61 2.196 0 0 0 0 .024l-.406 15.106-.54 17.06a.61 2.196 0 0 0-.003.071l-.406 18.06a.61 2.196 0 0 0 0 .013l-.406 19.52a.61 2.196 0 0 0 0 .006l-.407 20.962-.54 20.955a.61 2.196 0 0 0-.002.06l-.405 21.956a.61 2.196 0 0 0 0 .006l-.406 22.445a.61 2.196 0 0 0 .013.143.61 2.196 0 0 0-.013.143l.406 22.444a.61 2.196 0 0 0 0 .006l.405 21.957a.61 2.196 0 0 0 .002.06l.54 20.955.407 20.955a.61 2.196 0 0 0 0 .013l.406 19.52a.61 2.196 0 0 0 0 .012l.406 18.054a.61 2.196 0 0 0 .002.072l.54 17.066.407 15.106a.61 2.196 0 0 0 0 .024l.407 13.659a.61 2.196 0 0 0 .005.131l.54 11.7.406 9.262a.61 2.196 0 0 0 .005.089l.407 7.32a.61 2.196 0 0 0 .01.144l.406 5.373a.61 2.196 0 0 0 .081.637l.54 2.93a.61 2.196 0 0 0 .315.864l.406.489a.61 2.196 0 0 0 .623-.53l.406-1.466a.61 2.196 0 0 0 .14-.78l.406-3.907a.61 2.196 0 0 0 .013-.125l.54-6.344a.61 2.196 0 0 0 .018-.262l.407-8.298a.61 2.196 0 0 0 .003-.084l.404-10.71.54-12.175a.61 2.196 0 0 0 .006-.12l.406-14.152a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-15.619a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.404-17.054.542-18.525a.61 2.196 0 0 0 .002-.065l.407-19.515a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-20.49.406-20.474.213-8.428.332 17.185a.61 2.196 0 0 0 0 .053l.542 20.474.405 19.496a.61 2.196 0 0 0 0 .018l.406 18.055a.61 2.196 0 0 0 .002.06l.542 17.547.405 15.601a.61 2.196 0 0 0 0 .018l.407 14.153a.61 2.196 0 0 0 .002.025l.404 12.693a.61 2.196 0 0 0 .007.143l.54 10.716.406 8.769a.61 2.196 0 0 0 .009.137l.406 6.337a.61 2.196 0 0 0 .015.203l.406 4.396a.61 2.196 0 0 0 .103.673l.54 2.442a.61 2.196 0 0 0 .476.822h.406a.61 2.196 0 0 0 .522-1.066l.407-2.436a.61 2.196 0 0 0 .021-.149l.542-3.908a.61 2.196 0 0 0 .05-.488l.405-6.338a.61 2.196 0 0 0 .009-.137l.406-8.78a.61 2.196 0 0 0 .002-.054l.405-10.227.54-12.182a.61 2.196 0 0 0 .005-.113l.407-13.664a.61 2.196 0 0 0 0-.019.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.012l.406-15.612a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-16.572.54-18.03a.61 2.196 0 0 0 .002-.066l.407-18.543a.61 2.196 0 0 0 0-.006l.404-19.497.54-19.978a.61 2.196 0 0 0 .003-.06l.03-1.483.515 19.085.406 19.008a.61 2.196 0 0 0 0 .006l.407 18.543a.61 2.196 0 0 0 0 .012l.405 17.078a.61 2.196 0 0 0 .003.078l.54 16.083.405 14.617a.61 2.196 0 0 0 .002.03l.406 13.171a.61 2.196 0 0 0 .003.12l.542 11.692.405 9.745a.61 2.196 0 0 0 .003.078l.406 7.809a.61 2.196 0 0 0 .01.125l.405 5.855a.61 2.196 0 0 0 .063.56l.542 3.414a.61 2.196 0 0 0 .04.232l.404 1.948a.61 2.196 0 0 0 .681.768l.407-.488a.61 2.196 0 0 0 .328-.953l.407-2.443a.61 2.196 0 0 0 .044-.315l.542-4.879a.61 2.196 0 0 0 .028-.321l.407-6.344a.61 2.196 0 0 0 .005-.113l.406-8.292a.61 2.196 0 0 0 .003-.083l.405-10.704.54-11.681a.61 2.196 0 0 0 .005-.126l.407-13.664a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-14.612.542-16.083a.61 2.196 0 0 0 .002-.077l.406-17.573a.61 2.196 0 0 0 0-.006l.407-18.054.404-18.52.468-16.458.078 3.735a.61 2.196 0 0 0 .002.066l.541 18.519.405 18.025a.61 2.196 0 0 0 0 .018l.407 17.078a.61 2.196 0 0 0 .002.071l.54 16.572.406 14.617a.61 2.196 0 0 0 0 .019l.407 13.664a.61 2.196 0 0 0 0 .025l.406 12.199a.61 2.196 0 0 0 .005.131l.542 10.722.405 8.768a.61 2.196 0 0 0 .005.102l.407 6.826a.61 2.196 0 0 0 .009.12l.404 5.366a.61 2.196 0 0 0 .081.643l.542 2.925a.61 2.196 0 0 0 .169.614l.406.97a.61 2.196 0 0 0 .53.257l.407-.489a.61 2.196 0 0 0 .314-.863l.542-2.925a.61 2.196 0 0 0 .076-.59l.406-4.878a.61 2.196 0 0 0 .012-.173l.406-6.832a.61 2.196 0 0 0 .005-.078l.405-8.28.54-10.233a.61 2.196 0 0 0 .007-.137l.405-11.71a.61 2.196 0 0 0 .002-.031l.407-13.176a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-14.13.541-15.588a.61 2.196 0 0 0 .002-.078l.407-16.595a.61 2.196 0 0 0 0-.006l.405-17.054.542-18.03a.61 2.196 0 0 0 .002-.06l.289-12.903.256 8.542.405 17.543a.61 2.196 0 0 0 .002.006l.405 17.077a.61 2.196 0 0 0 0 .013l.406 16.1a.61 2.196 0 0 0 .003.084l.54 15.1.405 14.123a.61 2.196 0 0 0 .002.025l.405 12.687a.61 2.196 0 0 0 .002.036l.406 11.222a.61 2.196 0 0 0 .01.167l.539 9.239.405 8.262a.61 2.196 0 0 0 .009.149l.406 5.855a.61 2.196 0 0 0 .035.357l.54 4.39a.61 2.196 0 0 0 .035.239l.406 2.442a.61 2.196 0 0 0 .184.697l.406.977a.61 2.196 0 0 0 .769-.274l.406-1.465a.61 2.196 0 0 0 .076-.334l.542-2.93a.61 2.196 0 0 0 .076-.584l.406-4.879a.61 2.196 0 0 0 .012-.173l.406-6.832a.61 2.196 0 0 0 .005-.077l.405-8.28.54-10.234a.61 2.196 0 0 0 .007-.125l.405-11.228a.61 2.196 0 0 0 .002-.03l.405-12.665.54-14.129a.61 2.196 0 0 0 .003-.077l.407-14.642a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-16.1.405-16.084.54-17.054a.61 2.196 0 0 0 .003-.06l.187-7.868.359 11.318.406 16.565a.61 2.196 0 0 0 0 .013l.407 15.612a.61 2.196 0 0 0 .002.077l.54 15.1.405 14.124a.61 2.196 0 0 0 .002.018l.406 13.176a.61 2.196 0 0 0 0 .036l.407 11.228a.61 2.196 0 0 0 .007.125l.538 10.222.405 8.756a.61 2.196 0 0 0 .005.072l.405 7.32a.61 2.196 0 0 0 .01.15l.406 5.366a.61 2.196 0 0 0 .043.405l.542 3.902a.61 2.196 0 0 0 .056.334l.407 1.953a.61 2.196 0 0 0 .487.876h.407a.61 2.196 0 0 0 .365-.435l.542-1.465a.61 2.196 0 0 0 .193-.894l.407-3.413a.61 2.196 0 0 0 .023-.232l.406-4.885a.61 2.196 0 0 0 .012-.167l.405-6.814.54-8.274a.61 2.196 0 0 0 .01-.172l.406-9.763a.61 2.196 0 0 0 .002-.042l.407-11.222a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.013l.405-12.17.54-13.14a.61 2.196 0 0 0 .003-.1l.406-14.148a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-15.124a.61 2.196 0 0 0 0-.006l.405-15.588.54-16.072a.61 2.196 0 0 0 .003-.071l.14-5.79.405 16.041a.61 2.196 0 0 0 0 .006l.407 15.619a.61 2.196 0 0 0 0 .012l.406 14.642a.61 2.196 0 0 0 .003.077l.54 14.13.405 12.663a.61 2.196 0 0 0 0 .006l.407 12.2a.61 2.196 0 0 0 .002.035l.406 10.734a.61 2.196 0 0 0 .007.16l.54 9.245.405 7.786a.61 2.196 0 0 0 .007.09l.407 6.343a.61 2.196 0 0 0 .028.322l.54 4.878a.61 2.196 0 0 0 .022.167l.406 2.925a.61 2.196 0 0 0 .114.572l.407 1.465a.61 2.196 0 0 0 .43.643h.4a.61 2.196 0 0 0 .432-.643l.54-1.954a.61 2.196 0 0 0 .13-.685l.405-3.419a.61 2.196 0 0 0 .029-.28l.406-5.367a.61 2.196 0 0 0 .005-.083l.406-6.338.54-8.292a.61 2.196 0 0 0 .01-.16l.407-9.275a.61 2.196 0 0 0 .002-.042l.405-10.704.539-11.68a.61 2.196 0 0 0 .005-.12l.406-13.17a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-13.665a.61 2.196 0 0 0 0-.006l.404-14.117.54-14.606a.61 2.196 0 0 0 .004-.084l.404-15.124a.61 2.196 0 0 0 .002-.006l.038-1.459.103 2.96.406 14.612.405 14.642a.61 2.196 0 0 0 .003.09l.54 13.628.405 13.146a.61 2.196 0 0 0 .002.036l.407 11.71a.61 2.196 0 0 0 0 .013l.406 11.222a.61 2.196 0 0 0 .007.143l.54 9.74.405 8.267a.61 2.196 0 0 0 .002.048l.407 7.32a.61 2.196 0 0 0 .01.15l.406 5.367a.61 2.196 0 0 0 .03.315l.542 4.39a.61 2.196 0 0 0 .035.238l.406 2.443a.61 2.196 0 0 0 .183.697l.407.97a.61 2.196 0 0 0 .53.257l.407-.483a.61 2.196 0 0 0 .238-.53l.542-1.954a.61 2.196 0 0 0 .138-.78l.407-3.908a.61 2.196 0 0 0 .013-.136l.405-4.879a.61 2.196 0 0 0 .003-.036l.54-6.832a.61 2.196 0 0 0 .013-.205l.407-7.809a.61 2.196 0 0 0 .003-.065l.406-9.269a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.012l.405-10.216.54-11.192a.61 2.196 0 0 0 .005-.114l.407-12.199a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-13.176a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-13.623.54-13.623a.61 2.196 0 0 0 .003-.095l.365-13.182.182 6.362.407 14.147a.61 2.196 0 0 0 0 .018l.406 13.176a.61 2.196 0 0 0 .003.09l.54 12.652.405 12.163a.61 2.196 0 0 0 0 .024l.407 11.223a.61 2.196 0 0 0 .002.042l.406 9.757a.61 2.196 0 0 0 .007.13l.54 9.257.405 7.31a.61 2.196 0 0 0 .002.035l.407 6.832a.61 2.196 0 0 0 .03.357l.541 4.879a.61 2.196 0 0 0 .005.048l.407 3.419a.61 2.196 0 0 0 .072.452l.407 1.948a.61 2.196 0 0 0 .149.507l.406.976a.61 2.196 0 0 0 .61.137l.542-.976a.61 2.196 0 0 0 .25-.834l.406-2.443a.61 2.196 0 0 0 .038-.262l.406-3.419a.61 2.196 0 0 0 .025-.286l.405-5.33.538-6.309a.61 2.196 0 0 0 .017-.244l.405-7.81a.61 2.196 0 0 0 .005-.041l.403-8.75.54-9.722a.61 2.196 0 0 0 .007-.148l.406-11.223a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-11.71a.61 2.196 0 0 0 0-.007.61 2.196 0 0 0 0-.006l.405-12.163.54-12.652a.61 2.196 0 0 0 .003-.09l.406-13.176a.61 2.196 0 0 0 0-.006l.276-9.322.273 8.84.405 13.176a.61 2.196 0 0 0 .002.018l.406 12.2a.61 2.196 0 0 0 .003.089l.539 12.163.405 11.193a.61 2.196 0 0 0 .002.042l.406 9.763a.61 2.196 0 0 0 .007.125l.54 9.233.404 8.261a.61 2.196 0 0 0 .005.078l.406 6.832a.61 2.196 0 0 0 .003.072l.407 5.855a.61 2.196 0 0 0 .034.364l.542 4.39a.61 2.196 0 0 0 .012.089l.404 2.93a.61 2.196 0 0 0 .058.334l.407 1.954a.61 2.196 0 0 0 .487.876h.407a.61 2.196 0 0 0 .272-.233l.54-.977a.61 2.196 0 0 0 .252-.834l.404-2.436a.61 2.196 0 0 0 .048-.363l.405-3.878.539-4.86a.61 2.196 0 0 0 .028-.322l.406-6.344a.61 2.196 0 0 0 .003-.06l.407-7.32a.61 2.196 0 0 0 .003-.072l.405-8.744.538-9.727a.61 2.196 0 0 0 .005-.12l.407-10.245a.61 2.196 0 0 0 .002-.03l.406-11.223a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-11.675.54-12.164a.61 2.196 0 0 0 .003-.083l.405-12.2a.61 2.196 0 0 0 .002-.017l.185-5.987.364 11.365a.61 2.196 0 0 0 0 .019l.406 11.71a.61 2.196 0 0 0 .003.09l.54 11.675.405 11.18a.61 2.196 0 0 0 .002.031l.405 10.246a.61 2.196 0 0 0 .002.03l.407 9.275a.61 2.196 0 0 0 .007.13l.54 8.763.405 7.297a.61 2.196 0 0 0 .003.065l.406 6.344a.61 2.196 0 0 0 .023.257l.54 5.367a.61 2.196 0 0 0 .012.113l.406 3.419a.61 2.196 0 0 0 .017.113l.406 2.93a.61 2.196 0 0 0 .207.847l.406.97a.61 2.196 0 0 0 .337.37h.542a.61 2.196 0 0 0 .337-.37l.407-.97a.61 2.196 0 0 0 .206-.846l.407-2.931a.61 2.196 0 0 0 .024-.209l.405-3.883.539-4.855a.61 2.196 0 0 0 .028-.322l.406-6.344a.61 2.196 0 0 0 .003-.065l.407-7.32a.61 2.196 0 0 0 .002-.025l.405-7.786.538-9.244a.61 2.196 0 0 0 .01-.143l.404-10.246.405-10.216.54-11.192a.61 2.196 0 0 0 .005-.101l.405-11.711a.61 2.196 0 0 0 .002-.012l.405-12.194.09-2.62.055 1.637a.61 2.196 0 0 0 0 .013l.407 11.71a.61 2.196 0 0 0 0 .013l.406 11.222a.61 2.196 0 0 0 .003.107l.54 10.698.405 10.204a.61 2.196 0 0 0 0 .018l.407 9.757a.61 2.196 0 0 0 .007.15l.54 8.75.403 7.767a.61 2.196 0 0 0 .003.06l.407 6.832a.61 2.196 0 0 0 .005.071l.406 5.856a.61 2.196 0 0 0 .033.357l.54 4.378.405 3.401a.61 2.196 0 0 0 .073.453l.406 1.954a.61 2.196 0 0 0 .15.512l.406.971a.61 2.196 0 0 0 .337.37h.542a.61 2.196 0 0 0 .43-.644l.406-1.46a.61 2.196 0 0 0 .114-.571l.406-2.93.542-3.902a.61 2.196 0 0 0 .038-.352l.406-4.878a.61 2.196 0 0 0 .01-.137l.407-6.344a.61 2.196 0 0 0 .002-.036l.405-6.796.538-7.768a.61 2.196 0 0 0 .01-.19l.407-9.275.406-9.269a.61 2.196 0 0 0 .002-.035l.403-10.204.54-10.692a.61 2.196 0 0 0 .006-.114l.405-11.222.404-11.175.005-.089.142 3.95a.61 2.196 0 0 0 .002.012l.405 10.733a.61 2.196 0 0 0 .005.096l.539 10.692.405 10.21a.61 2.196 0 0 0 0 .012l.406 9.763a.61 2.196 0 0 0 .002.035l.407 8.78a.61 2.196 0 0 0 .009.144l.538 8.262.403 7.279a.61 2.196 0 0 0 .01.1l.406 5.856a.61 2.196 0 0 0 .003.048l.406 5.367a.61 2.196 0 0 0 .032.315l.54 4.39a.61 2.196 0 0 0 .012.09l.406 2.93a.61 2.196 0 0 0 .058.334l.406 1.954a.61 2.196 0 0 0 .34.81l.541.488a.61 2.196 0 0 0 .34-.047l.407-.489a.61 2.196 0 0 0 .238-.53l.406-1.46a.61 2.196 0 0 0 .114-.571l.405-2.93.542-3.902a.61 2.196 0 0 0 .043-.405l.406-5.367a.61 2.196 0 0 0 .003-.048l.405-5.855a.61 2.196 0 0 0 .005-.072l.405-6.796.539-7.768a.61 2.196 0 0 0 .009-.155l.406-8.291a.61 2.196 0 0 0 .002-.042l.405-9.227.539-9.715a.61 2.196 0 0 0 .005-.12l.406-10.245a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-10.734.322-8.536.231 6.094a.61 2.196 0 0 0 0 .018l.407 10.246a.61 2.196 0 0 0 .005.1l.538 10.205.405 9.715a.61 2.196 0 0 0 .002.036l.405 8.786a.61 2.196 0 0 0 .009.143l.538 8.244.404 7.755a.61 2.196 0 0 0 .003.06l.406 6.832a.61 2.196 0 0 0 .007.113l.406 5.373a.61 2.196 0 0 0 .024.233l.538 4.86.403 3.884a.61 2.196 0 0 0 .048.357l.407 2.437a.61 2.196 0 0 0 .09.423l.407 1.465a.61 2.196 0 0 0 .283.578l.542.488a.61 2.196 0 0 0 .34-.047l.406-.489a.61 2.196 0 0 0 .295-.762l.406-1.954a.61 2.196 0 0 0 .02-.101l.54-2.925a.61 2.196 0 0 0 .065-.447l.406-3.907a.61 2.196 0 0 0 .013-.137l.405-4.879a.61 2.196 0 0 0 .009-.101l.403-5.82.539-6.796a.61 2.196 0 0 0 .013-.197l.406-7.809a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-8.292a.61 2.196 0 0 0 .002-.024l.405-8.75.538-9.722a.61 2.196 0 0 0 .007-.107l.407-9.757a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-10.245.228-5.754.326 8.19a.61 2.196 0 0 0 .007.125l.538 9.703.403 9.71a.61 2.196 0 0 0 0 .018l.407 9.269a.61 2.196 0 0 0 .002.041l.406 8.292a.61 2.196 0 0 0 .01.155l.538 7.756.403 7.267a.61 2.196 0 0 0 .003.065l.407 6.344a.61 2.196 0 0 0 .007.083l.404 5.367a.61 2.196 0 0 0 .044.405l.533 3.842.4 3.36a.61 2.196 0 0 0 .036.262l.407 2.442a.61 2.196 0 0 0 .157.626l.542 1.465a.61 2.196 0 0 0 .365.44h.406a.61 2.196 0 0 0 .337-.369l.407-.976a.61 2.196 0 0 0 .149-.513l.406-1.948a.61 2.196 0 0 0 .02-.1l.542-2.931a.61 2.196 0 0 0 .063-.447l.406-3.902a.61 2.196 0 0 0 .013-.137l.405-4.884a.61 2.196 0 0 0 .009-.095l.403-5.82.539-6.797a.61 2.196 0 0 0 .011-.173l.407-7.32a.61 2.196 0 0 0 .003-.048l.403-8.25.538-8.738a.61 2.196 0 0 0 .007-.132l.407-9.268.406-9.275a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.018.61 2.196 0 0 0 0-.006l.405-10.186.169-3.032.386 9.799a.61 2.196 0 0 0 .01.143l.536 9.215.405 9.22a.61 2.196 0 0 0 0 .02l.407 8.78a.61 2.196 0 0 0 .009.142l.538 8.262.403 7.28a.61 2.196 0 0 0 .002.03l.407 6.832a.61 2.196 0 0 0 .005.071l.406 5.856a.61 2.196 0 0 0 .025.286l.539 4.854.405 3.884a.61 2.196 0 0 0 .01.095l.406 3.413a.61 2.196 0 0 0 .073.453l.404 1.954a.61 2.196 0 0 0 .217.643l.54.977a.61 2.196 0 0 0 .273.233h.406a.61 2.196 0 0 0 .337-.37l.407-.977a.61 2.196 0 0 0 .15-.506l.405-1.954a.61 2.196 0 0 0 .041-.226l.542-3.42a.61 2.196 0 0 0 .041-.315l.407-3.902a.61 2.196 0 0 0 .013-.143l.403-4.848.539-5.82a.61 2.196 0 0 0 .018-.238l.405-6.832a.61 2.196 0 0 0 .002-.03l.406-7.316a.61 2.196 0 0 0 .005-.053l.403-8.233.537-8.238a.61 2.196 0 0 0 .01-.16l.406-9.269.406-9.269a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-9.709.064-1.15.086 2.073a.61 2.196 0 0 0 .005.107l.539 9.716.405 9.227a.61 2.196 0 0 0 0 .018l.406 8.786a.61 2.196 0 0 0 .002.018l.407 8.298a.61 2.196 0 0 0 .009.149l.538 7.755.403 7.268a.61 2.196 0 0 0 .003.065l.407 6.344a.61 2.196 0 0 0 .002.035l.406 5.856a.61 2.196 0 0 0 .035.363l.534 4.33.4 3.843a.61 2.196 0 0 0 .024.214l.407 2.925a.61 2.196 0 0 0 .114.572l.542 1.954a.61 2.196 0 0 0 .238.53l.406.488a.61 2.196 0 0 0 .192.107h.4a.61 2.196 0 0 0 .418-.638l.404-1.465.542-1.954a.61 2.196 0 0 0 .13-.685l.406-3.42a.61 2.196 0 0 0 .018-.166l.406-4.396a.61 2.196 0 0 0 .005-.06l.404-4.848.538-5.826a.61 2.196 0 0 0 .018-.232l.407-6.833a.61 2.196 0 0 0 .002-.03l.403-7.267.537-7.762a.61 2.196 0 0 0 .01-.167l.406-8.786.407-8.78a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-9.227.424-7.648.132 3.199a.61 2.196 0 0 0 .007.125l.539 9.215.403 9.22a.61 2.196 0 0 0 .002.019l.405 8.78a.61 2.196 0 0 0 .003.048l.405 7.803a.61 2.196 0 0 0 .009.13l.538 7.768.405 6.797a.61 2.196 0 0 0 .002.036l.407 6.344a.61 2.196 0 0 0 .021.256l.539 5.337.403 4.366a.61 2.196 0 0 0 .018.173l.405 3.413a.61 2.196 0 0 0 .015.12l.406 2.924a.61 2.196 0 0 0 .18.775l.54 1.465a.61 2.196 0 0 0 .174.327l.407.489a.61 2.196 0 0 0 .385 0l.406-.489a.61 2.196 0 0 0 .145-.256l.405-.977a.61 2.196 0 0 0 .14-.452l.54-2.443a.61 2.196 0 0 0 .084-.506l.406-3.419a.61 2.196 0 0 0 .018-.167l.403-4.366.539-5.337a.61 2.196 0 0 0 .018-.22l.407-5.856a.61 2.196 0 0 0 .005-.072l.406-6.832a.61 2.196 0 0 0 .002-.03l.403-7.285.54-8.256a.61 2.196 0 0 0 .007-.12l.407-8.297a.61 2.196 0 0 0 .002-.042l.405-9.268.405-9.215.347-5.975.348 5.975.405 9.215.405 9.268a.61 2.196 0 0 0 .002.042l.406 8.298a.61 2.196 0 0 0 .007.119l.54 8.256.404 7.285a.61 2.196 0 0 0 .002.03l.406 6.832a.61 2.196 0 0 0 .005.072l.407 5.855a.61 2.196 0 0 0 .018.22l.538 5.338.403 4.366a.61 2.196 0 0 0 .019.167l.406 3.42a.61 2.196 0 0 0 .084.505l.54 2.443a.61 2.196 0 0 0 .14.452l.404.977a.61 2.196 0 0 0 .145.256l.407.489a.61 2.196 0 0 0 .385 0l.406-.489a.61 2.196 0 0 0 .174-.327l.54-1.465a.61 2.196 0 0 0 .18-.775l.405-2.925a.61 2.196 0 0 0 .017-.119l.404-3.413a.61 2.196 0 0 0 .019-.173l.403-4.366.538-5.337a.61 2.196 0 0 0 .022-.256l.406-6.344a.61 2.196 0 0 0 .002-.036l.405-6.797.539-7.767a.61 2.196 0 0 0 .007-.131l.406-7.803a.61 2.196 0 0 0 .003-.048l.405-8.78a.61 2.196 0 0 0 .002-.018l.403-9.221.539-9.215a.61 2.196 0 0 0 .007-.125l.132-3.2.425 7.65.405 9.226a.61 2.196 0 0 0 0 .025l.406 8.78.406 8.786a.61 2.196 0 0 0 .01.167l.538 7.761.403 7.267a.61 2.196 0 0 0 .002.03l.406 6.833a.61 2.196 0 0 0 .018.232l.539 5.826.403 4.849a.61 2.196 0 0 0 .005.06l.407 4.395a.61 2.196 0 0 0 .018.167l.406 3.42a.61 2.196 0 0 0 .129.684l.542 1.954.405 1.465a.61 2.196 0 0 0 .431.638h.406a.61 2.196 0 0 0 .192-.107l.407-.489a.61 2.196 0 0 0 .237-.53l.542-1.954a.61 2.196 0 0 0 .114-.572l.407-2.924a.61 2.196 0 0 0 .025-.215l.4-3.842.533-4.33a.61 2.196 0 0 0 .035-.364l.406-5.855a.61 2.196 0 0 0 .002-.036l.407-6.344a.61 2.196 0 0 0 .003-.065l.403-7.267.539-7.756a.61 2.196 0 0 0 .009-.149l.406-8.297a.61 2.196 0 0 0 .002-.018l.405-8.787a.61 2.196 0 0 0 .002-.018l.405-9.227.538-9.715a.61 2.196 0 0 0 .005-.107l.086-2.073.065 1.15.404 9.709a.61 2.196 0 0 0 0 .018l.407 9.269.406 9.268a.61 2.196 0 0 0 .01.161l.536 8.238.403 8.232a.61 2.196 0 0 0 .003.054l.405 7.315a.61 2.196 0 0 0 .003.03l.405 6.833a.61 2.196 0 0 0 .018.238l.539 5.82.403 4.848a.61 2.196 0 0 0 .013.143l.406 3.902a.61 2.196 0 0 0 .042.316l.542 3.419a.61 2.196 0 0 0 .041.226l.405 1.954a.61 2.196 0 0 0 .15.506l.407.977a.61 2.196 0 0 0 .337.37h.406a.61 2.196 0 0 0 .273-.233l.54-.977a.61 2.196 0 0 0 .215-.643l.406-1.954a.61 2.196 0 0 0 .073-.453l.406-3.413a.61 2.196 0 0 0 .01-.095l.405-3.884.539-4.855a.61 2.196 0 0 0 .025-.285l.406-5.856a.61 2.196 0 0 0 .005-.071l.405-6.833a.61 2.196 0 0 0 .005-.03l.403-7.28.539-8.261a.61 2.196 0 0 0 .009-.143l.406-8.78a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-9.221.537-9.215a.61 2.196 0 0 0 .009-.143l.387-9.793.168 3.026.403 10.186a.61 2.196 0 0 0 .002.03l.407 9.275.406 9.269a.61 2.196 0 0 0 .007.13l.539 8.74.403 8.25a.61 2.196 0 0 0 .003.047l.406 7.32a.61 2.196 0 0 0 .012.173l.539 6.797.403 5.82a.61 2.196 0 0 0 .007.095l.406 4.884a.61 2.196 0 0 0 .013.137l.407 3.902a.61 2.196 0 0 0 .063.447l.541 2.93a.61 2.196 0 0 0 .02.102l.407 1.947a.61 2.196 0 0 0 .149.513l.406.977a.61 2.196 0 0 0 .337.369h.407a.61 2.196 0 0 0 .365-.44l.542-1.466a.61 2.196 0 0 0 .157-.626l.406-2.442a.61 2.196 0 0 0 .036-.262l.4-3.36.534-3.841a.61 2.196 0 0 0 .043-.406l.405-5.367a.61 2.196 0 0 0 .007-.083l.406-6.344a.61 2.196 0 0 0 .003-.065l.403-7.267.539-7.756a.61 2.196 0 0 0 .009-.155l.406-8.291a.61 2.196 0 0 0 .002-.042l.407-9.269a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.403-9.71.539-9.702a.61 2.196 0 0 0 .007-.126l.325-8.19.228 5.754.407 10.246a.61 2.196 0 0 0 0 .018l.406 9.757a.61 2.196 0 0 0 .005.107l.539 9.721.405 8.75a.61 2.196 0 0 0 .002.025l.404 8.292a.61 2.196 0 0 0 .003.024l.407 7.81a.61 2.196 0 0 0 .013.196l.539 6.796.403 5.82a.61 2.196 0 0 0 .009.101l.405 4.879a.61 2.196 0 0 0 .013.137l.406 3.907a.61 2.196 0 0 0 .064.447l.54 2.925a.61 2.196 0 0 0 .02.101l.407 1.954a.61 2.196 0 0 0 .294.762l.407.489a.61 2.196 0 0 0 .34.047l.542-.488a.61 2.196 0 0 0 .283-.578l.406-1.465a.61 2.196 0 0 0 .09-.423l.407-2.437a.61 2.196 0 0 0 .048-.357l.403-3.884.539-4.86a.61 2.196 0 0 0 .023-.233l.405-5.373a.61 2.196 0 0 0 .009-.113l.406-6.832a.61 2.196 0 0 0 .003-.06l.404-7.755.538-8.244a.61 2.196 0 0 0 .01-.143l.404-8.786a.61 2.196 0 0 0 .002-.036l.405-9.715.538-10.204a.61 2.196 0 0 0 .005-.101l.407-10.246a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.231-6.093.322 8.536.405 10.733a.61 2.196 0 0 0 .002.019l.407 10.245a.61 2.196 0 0 0 .005.12l.538 9.715.405 9.227a.61 2.196 0 0 0 .002.041l.407 8.292a.61 2.196 0 0 0 .009.155l.538 7.767.405 6.797a.61 2.196 0 0 0 .003.071l.407 5.856a.61 2.196 0 0 0 .003.047l.406 5.367a.61 2.196 0 0 0 .043.405l.542 3.902.405 2.93a.61 2.196 0 0 0 .114.573l.406 1.459a.61 2.196 0 0 0 .207.31.61 2.196 0 0 0 .031.22l.406.489a.61 2.196 0 0 0 .34.047l.543-.488a.61 2.196 0 0 0 .338-.81l.407-1.954a.61 2.196 0 0 0 .058-.334l.406-2.93a.61 2.196 0 0 0 .012-.09l.54-4.39a.61 2.196 0 0 0 .031-.315l.407-5.367a.61 2.196 0 0 0 .003-.048l.406-5.855a.61 2.196 0 0 0 .005-.102l.405-7.279.539-8.262a.61 2.196 0 0 0 .01-.143l.406-8.78a.61 2.196 0 0 0 .002-.035l.407-9.763a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.404-10.21.539-10.692a.61 2.196 0 0 0 .005-.095l.405-10.734a.61 2.196 0 0 0 .002-.013l.142-3.955.005.095.405 11.175.404 11.222a.61 2.196 0 0 0 .005.114l.54 10.692.404 10.204a.61 2.196 0 0 0 .002.035l.406 9.269.407 9.275a.61 2.196 0 0 0 .01.19l.539 7.768.404 6.796a.61 2.196 0 0 0 .002.036l.407 6.344a.61 2.196 0 0 0 .01.137l.406 4.878a.61 2.196 0 0 0 .038.352l.542 3.901.407 2.931a.61 2.196 0 0 0 .114.572l.405 1.46a.61 2.196 0 0 0 .426.643h.542a.61 2.196 0 0 0 .337-.37l.406-.97a.61 2.196 0 0 0 .149-.513l.406-1.954a.61 2.196 0 0 0 .073-.452l.403-3.402.542-4.378a.61 2.196 0 0 0 .033-.357l.407-5.856a.61 2.196 0 0 0 .005-.071l.406-6.832a.61 2.196 0 0 0 .002-.06l.405-7.767.538-8.75a.61 2.196 0 0 0 .01-.15l.406-9.757a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-10.203.538-10.699a.61 2.196 0 0 0 .005-.107l.407-11.222a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-11.71a.61 2.196 0 0 0 0-.007.61 2.196 0 0 0 0-.006l.055-1.638.09 2.621.405 12.193a.61 2.196 0 0 0 0 .013l.407 11.71a.61 2.196 0 0 0 .005.102l.54 11.192.405 10.216.405 10.245a.61 2.196 0 0 0 .009.143l.538 9.245.405 7.786a.61 2.196 0 0 0 .002.024l.407 7.32a.61 2.196 0 0 0 .003.066l.406 6.344a.61 2.196 0 0 0 .028.322l.539 4.854.403 3.884a.61 2.196 0 0 0 .026.209l.407 2.93a.61 2.196 0 0 0 .206.846l.407.971a.61 2.196 0 0 0 .337.37h.542a.61 2.196 0 0 0 .337-.37l.406-.97a.61 2.196 0 0 0 .207-.847l.406-2.93a.61 2.196 0 0 0 .015-.113l.407-3.42a.61 2.196 0 0 0 .013-.113l.54-5.367a.61 2.196 0 0 0 .022-.256l.406-6.344a.61 2.196 0 0 0 .003-.065l.405-7.297.54-8.762a.61 2.196 0 0 0 .007-.132l.407-9.274a.61 2.196 0 0 0 .001-.03l.405-10.246a.61 2.196 0 0 0 .002-.03l.405-11.181.54-11.675a.61 2.196 0 0 0 .003-.09l.407-11.71a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.363-11.366.185 5.987a.61 2.196 0 0 0 .002.018l.405 12.2a.61 2.196 0 0 0 .003.082l.54 12.164.405 11.675a.61 2.196 0 0 0 0 .012l.407 11.223a.61 2.196 0 0 0 .001.03l.405 10.246a.61 2.196 0 0 0 .009.119l.538 9.727.405 8.744a.61 2.196 0 0 0 .003.072l.407 7.32a.61 2.196 0 0 0 .003.06l.407 6.344a.61 2.196 0 0 0 .028.321l.538 4.861.405 3.878a.61 2.196 0 0 0 .048.363l.405 2.436a.61 2.196 0 0 0 .251.834l.54.977a.61 2.196 0 0 0 .273.233h.405a.61 2.196 0 0 0 .487-.876l.407-1.954a.61 2.196 0 0 0 .056-.333l.406-2.931a.61 2.196 0 0 0 .012-.09l.542-4.39a.61 2.196 0 0 0 .035-.363l.406-5.855a.61 2.196 0 0 0 .003-.071l.407-6.833a.61 2.196 0 0 0 .005-.077l.403-8.262.54-9.233a.61 2.196 0 0 0 .007-.125l.405-9.763a.61 2.196 0 0 0 .002-.042l.406-11.192.539-12.164a.61 2.196 0 0 0 .003-.09l.406-12.198a.61 2.196 0 0 0 .002-.019l.405-13.176.273-8.84.275 9.323a.61 2.196 0 0 0 0 .006l.407 13.176a.61 2.196 0 0 0 .003.09l.54 12.651.405 12.164a.61 2.196 0 0 0 0 .012l.407 11.71a.61 2.196 0 0 0 0 .013l.406 11.222a.61 2.196 0 0 0 .007.149l.54 9.721.403 8.75a.61 2.196 0 0 0 .004.042l.405 7.81a.61 2.196 0 0 0 .016.244l.539 6.308.405 5.331a.61 2.196 0 0 0 .026.286l.406 3.419a.61 2.196 0 0 0 .038.262l.407 2.442a.61 2.196 0 0 0 .25.834l.541.977a.61 2.196 0 0 0 .61-.137l.406-.977a.61 2.196 0 0 0 .15-.512l.406-1.948a.61 2.196 0 0 0 .072-.453l.407-3.419a.61 2.196 0 0 0 .005-.047l.542-4.879a.61 2.196 0 0 0 .03-.357l.406-6.833a.61 2.196 0 0 0 .002-.03l.404-7.309.54-9.257a.61 2.196 0 0 0 .007-.13l.407-9.758a.61 2.196 0 0 0 .002-.041l.406-11.223a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-12.163.54-12.652a.61 2.196 0 0 0 .004-.09l.406-13.176a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-14.147.182-6.332.365 13.153a.61 2.196 0 0 0 .004.095l.54 13.623.405 13.623a.61 2.196 0 0 0 0 .012l.406 13.176a.61 2.196 0 0 0 0 .018l.407 12.2a.61 2.196 0 0 0 .005.113l.538 11.192.405 10.216a.61 2.196 0 0 0 .002.03l.406 9.269a.61 2.196 0 0 0 .004.065l.406 7.81a.61 2.196 0 0 0 .012.196l.542 6.833a.61 2.196 0 0 0 .003.03l.405 4.879a.61 2.196 0 0 0 .013.137l.406 3.907a.61 2.196 0 0 0 .14.78l.541 1.954a.61 2.196 0 0 0 .238.53l.407.483a.61 2.196 0 0 0 .53-.256l.406-.971a.61 2.196 0 0 0 .184-.697l.406-2.442a.61 2.196 0 0 0 .035-.239l.542-4.39a.61 2.196 0 0 0 .03-.315l.406-5.367a.61 2.196 0 0 0 .01-.15l.407-7.32a.61 2.196 0 0 0 .001-.048l.405-8.267.54-9.74a.61 2.196 0 0 0 .007-.143l.407-11.222a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-11.71a.61 2.196 0 0 0 .002-.031l.405-13.147.54-13.629a.61 2.196 0 0 0 .002-.089l.406-14.641.406-14.612.103-2.96.038 1.459a.61 2.196 0 0 0 0 .006l.406 15.124a.61 2.196 0 0 0 .004.083l.54 14.606.405 14.117a.61 2.196 0 0 0 0 .006l.406 13.665a.61 2.196 0 0 0 0 .012l.407 13.17a.61 2.196 0 0 0 .003.12l.54 11.68.405 10.705a.61 2.196 0 0 0 .002.042l.406 9.274a.61 2.196 0 0 0 .009.16l.542 8.293.406 6.337a.61 2.196 0 0 0 .005.084l.407 5.367a.61 2.196 0 0 0 .028.285l.405 3.42a.61 2.196 0 0 0 .13.685l.54 1.953a.61 2.196 0 0 0 .432.644h.406a.61 2.196 0 0 0 .43-.644l.406-1.465a.61 2.196 0 0 0 .114-.572l.407-2.925a.61 2.196 0 0 0 .021-.166l.54-4.879a.61 2.196 0 0 0 .028-.322l.407-6.343a.61 2.196 0 0 0 .005-.09l.405-7.785.54-9.245a.61 2.196 0 0 0 .007-.16l.406-10.734a.61 2.196 0 0 0 .002-.036l.406-12.2a.61 2.196 0 0 0 0-.005l.405-12.664.54-14.13a.61 2.196 0 0 0 .004-.077l.406-14.642a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-15.618a.61 2.196 0 0 0 0-.006l.405-16.041.14 5.79a.61 2.196 0 0 0 .003.071l.54 16.071.405 15.589a.61 2.196 0 0 0 0 .006l.407 15.124a.61 2.196 0 0 0 0 .018l.406 14.147a.61 2.196 0 0 0 .004.101l.54 13.14.405 12.17a.61 2.196 0 0 0 0 .025l.406 11.222a.61 2.196 0 0 0 .004.042l.406 9.763a.61 2.196 0 0 0 .008.172l.54 8.274.404 6.814a.61 2.196 0 0 0 .013.167l.407 4.885a.61 2.196 0 0 0 .023.232l.406 3.413a.61 2.196 0 0 0 .193.894l.542 1.465a.61 2.196 0 0 0 .366.435h.406a.61 2.196 0 0 0 .487-.876l.407-1.953a.61 2.196 0 0 0 .056-.334l.542-3.902a.61 2.196 0 0 0 .043-.405l.406-5.367a.61 2.196 0 0 0 .01-.148l.405-7.321a.61 2.196 0 0 0 .005-.072l.407-8.756.538-10.221a.61 2.196 0 0 0 .007-.126l.407-11.228a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.018.61 2.196 0 0 0 0-.012l.406-13.177a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-14.123.54-15.1a.61 2.196 0 0 0 .002-.077l.407-15.613a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-16.565.359-11.318.187 7.869a.61 2.196 0 0 0 .001.06l.542 17.053.405 16.083.407 16.101a.61 2.196 0 0 0 0 .018l.406 14.642a.61 2.196 0 0 0 .002.077l.542 14.13.404 12.663a.61 2.196 0 0 0 .002.031l.405 11.228a.61 2.196 0 0 0 .007.125l.54 10.234.405 8.28a.61 2.196 0 0 0 .005.077l.406 6.832a.61 2.196 0 0 0 .012.173l.406 4.879a.61 2.196 0 0 0 .076.583l.542 2.931a.61 2.196 0 0 0 .076.334l.407 1.465a.61 2.196 0 0 0 .768.274l.406-.977a.61 2.196 0 0 0 .184-.697l.406-2.442a.61 2.196 0 0 0 .035-.238l.54-4.39a.61 2.196 0 0 0 .035-.358l.406-5.855a.61 2.196 0 0 0 .009-.143l.405-8.262.538-9.239a.61 2.196 0 0 0 .009-.167l.406-11.222a.61 2.196 0 0 0 .002-.036l.405-12.688a.61 2.196 0 0 0 .002-.03l.404-14.123.54-15.1a.61 2.196 0 0 0 .004-.084l.406-16.1a.61 2.196 0 0 0 0-.007.61 2.196 0 0 0 0-.006l.405-17.077a.61 2.196 0 0 0 .002-.006l.405-17.543.256-8.542.289 12.903a.61 2.196 0 0 0 .002.059l.542 18.03.404 17.055a.61 2.196 0 0 0 0 .006l.407 16.595a.61 2.196 0 0 0 .002.078l.54 15.588.406 14.13a.61 2.196 0 0 0 0 .018l.407 13.176a.61 2.196 0 0 0 0 .035l.406 11.711a.61 2.196 0 0 0 .007.137l.54 10.234.405 8.28a.61 2.196 0 0 0 .005.077l.407 6.832a.61 2.196 0 0 0 .011.173l.407 4.878a.61 2.196 0 0 0 .076.59l.542 2.925a.61 2.196 0 0 0 .314.864l.406.488a.61 2.196 0 0 0 .53-.262l.405-.97a.61 2.196 0 0 0 .169-.614l.542-2.925a.61 2.196 0 0 0 .08-.643l.405-5.367a.61 2.196 0 0 0 .009-.12l.406-6.826a.61 2.196 0 0 0 .005-.101l.405-8.768.542-10.722a.61 2.196 0 0 0 .005-.132l.407-12.199a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-13.664a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-14.618.54-16.572a.61 2.196 0 0 0 .002-.071l.406-17.078a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-18.025.542-18.519a.61 2.196 0 0 0 .001-.065l.078-3.735.468 16.458.404 18.52.407 18.054a.61 2.196 0 0 0 0 .006l.393 17.571a.61 2.196 0 0 0 .002.084l.54 16.083.406 14.612a.61 2.196 0 0 0 0 .018l.402 13.664a.61 2.196 0 0 0 .005.125l.54 11.682.405 10.704a.61 2.196 0 0 0 .003.083l.407 8.292a.61 2.196 0 0 0 .005.113l.406 6.344a.61 2.196 0 0 0 .029.321l.541 4.879a.61 2.196 0 0 0 .043.315l.407 2.443a.61 2.196 0 0 0 .329.953l.406.488a.61 2.196 0 0 0 .68-.768l.406-1.948a.61 2.196 0 0 0 .041-.232l.542-3.414a.61 2.196 0 0 0 .063-.56l.404-5.855a.61 2.196 0 0 0 .009-.125l.406-7.81a.61 2.196 0 0 0 .004-.077l.405-9.745.542-11.693a.61 2.196 0 0 0 .003-.119l.406-13.143a.61 2.196 0 0 0 .002-.025l.405-14.618.54-16.083a.61 2.196 0 0 0 .002-.077l.406-17.078a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.407-18.543a.61 2.196 0 0 0 0-.006l.406-19.008.516-19.085.03 1.483a.61 2.196 0 0 0 .001.06l.54 19.978.405 19.497a.61 2.196 0 0 0 0 .006l.407 18.543a.61 2.196 0 0 0 .001.065l.54 18.031.407 16.572a.61 2.196 0 0 0 0 .012l.407 15.612a.61 2.196 0 0 0 0 .03l.406 13.665a.61 2.196 0 0 0 .005.113l.54 12.182.405 10.227a.61 2.196 0 0 0 .002.054l.406 8.78a.61 2.196 0 0 0 .01.137l.405 6.338a.61 2.196 0 0 0 .05.489l.542 3.907a.61 2.196 0 0 0 .021.149l.407 2.436a.61 2.196 0 0 0 .52 1.067h.407a.61 2.196 0 0 0 .475-.823l.54-2.442a.61 2.196 0 0 0 .103-.673l.407-4.396a.61 2.196 0 0 0 .014-.197l.407-6.343a.61 2.196 0 0 0 .008-.137l.405-8.769.54-10.716a.61 2.196 0 0 0 .007-.143l.405-12.687a.61 2.196 0 0 0 .002-.024l.406-14.153a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-15.601.542-17.548a.61 2.196 0 0 0 .002-.06l.406-18.054a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.41-19.497.542-20.473a.61 2.196 0 0 0 0-.053l.332-17.185.213 8.428.407 20.473.405 20.491a.61 2.196 0 0 0 0 .013l.406 19.514a.61 2.196 0 0 0 .002.065l.54 18.525.406 17.054a.61 2.196 0 0 0 0 .019l.407 15.618a.61 2.196 0 0 0 0 .018l.406 14.153a.61 2.196 0 0 0 .005.12l.54 12.175.405 10.71a.61 2.196 0 0 0 .004.084l.406 8.297a.61 2.196 0 0 0 .018.262l.54 6.344a.61 2.196 0 0 0 .012.125l.407 3.908a.61 2.196 0 0 0 .14.78l.405 1.465a.61 2.196 0 0 0 .625.53l.404-.488a.61 2.196 0 0 0 .316-.864l.54-2.93a.61 2.196 0 0 0 .081-.638l.407-5.372a.61 2.196 0 0 0 .01-.144l.406-7.32a.61 2.196 0 0 0 .003-.09l.407-9.262.54-11.7a.61 2.196 0 0 0 .005-.13l.407-13.659a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-15.106.54-17.066a.61 2.196 0 0 0 .002-.071l.407-18.055a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.406-19.52a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-20.956.542-20.955a.61 2.196 0 0 0 .001-.06l.405-21.952a.61 2.196 0 0 0 0-.006l.407-22.445a.61 2.196 0 0 0-.009-.143.61 2.196 0 0 0 .009-.143l-.407-22.445a.61 2.196 0 0 0 0-.006l-.42-21.97a.61 2.196 0 0 0-.002-.059l-.542-20.955-.405-20.962a.61 2.196 0 0 0 0-.006l-.398-19.52a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-18.06a.61 2.196 0 0 0-.002-.071l-.54-17.088-.407-15.106a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-13.658a.61 2.196 0 0 0-.005-.131l-.54-11.7-.407-9.262a.61 2.196 0 0 0-.004-.09l-.406-7.32a.61 2.196 0 0 0-.01-.149l-.407-5.367a.61 2.196 0 0 0-.08-.637l-.54-2.932a.61 2.196 0 0 0-.316-.864l-.405-.488a.61 2.196 0 0 0-.625.53l-.405 1.465a.61 2.196 0 0 0-.14.78l-.406 3.908a.61 2.196 0 0 0-.012.125l-.54 6.344a.61 2.196 0 0 0-.02.262l-.407 8.298a.61 2.196 0 0 0-.003.083l-.405 10.71-.54 12.176a.61 2.196 0 0 0-.005.12l-.407 14.152a.61 2.196 0 0 0 0 .019l-.406 15.618a.61 2.196 0 0 0 0 .012l-.406 17.061-.54 18.525a.61 2.196 0 0 0-.002.066l-.407 19.514a.61 2.196 0 0 0 0 .012l-.405 20.491-.406 20.473-.213 8.429-.332-17.185a.61 2.196 0 0 0 0-.054l-.542-20.473-.405-19.496a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-18.056a.61 2.196 0 0 0-.002-.065l-.542-17.548-.405-15.595a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-14.153a.61 2.196 0 0 0-.002-.024l-.405-12.688a.61 2.196 0 0 0-.007-.143l-.54-10.722-.405-8.762a.61 2.196 0 0 0-.008-.137l-.407-6.344a.61 2.196 0 0 0-.015-.197l-.406-4.396a.61 2.196 0 0 0-.103-.673l-.555-2.438a.61 2.196 0 0 0-.476-.822h-.404a.61 2.196 0 0 0-.522 1.066l-.407 2.437a.61 2.196 0 0 0-.021.149l-.542 3.901a.61 2.196 0 0 0-.05.489l-.405 6.343a.61 2.196 0 0 0-.01.137l-.406 8.78a.61 2.196 0 0 0-.002.054l-.405 10.228-.54 12.181a.61 2.196 0 0 0-.005.113l-.406 13.665a.61 2.196 0 0 0 0 .03l-.407 15.613a.61 2.196 0 0 0 0 .012l-.406 16.572-.54 18.03a.61 2.196 0 0 0-.002.066l-.407 18.543a.61 2.196 0 0 0 0 .006l-.405 19.496-.54 19.979a.61 2.196 0 0 0-.002.06l-.03 1.483-.515-19.086-.406-19.007a.61 2.196 0 0 0 0-.006l-.406-18.543a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-17.077a.61 2.196 0 0 0-.002-.078l-.54-16.085-.405-14.618a.61 2.196 0 0 0-.001-.024l-.407-13.176a.61 2.196 0 0 0-.004-.113l-.541-11.699-.405-9.74a.61 2.196 0 0 0-.004-.077l-.406-7.809a.61 2.196 0 0 0-.009-.125l-.404-5.855a.61 2.196 0 0 0-.063-.56l-.542-3.413a.61 2.196 0 0 0-.041-.233l-.405-1.948a.61 2.196 0 0 0-.68-.768l-.407.488a.61 2.196 0 0 0-.33.953l-.406 2.443a.61 2.196 0 0 0-.043.31l-.541 4.884a.61 2.196 0 0 0-.029.322l-.406 6.343a.61 2.196 0 0 0-.005.108l-.407 8.297a.61 2.196 0 0 0-.003.084l-.405 10.704-.54 11.68a.61 2.196 0 0 0-.005.126l-.407 13.665a.61 2.196 0 0 0 0 .018l-.406 14.612-.54 16.083a.61 2.196 0 0 0-.002.083l-.407 17.566a.61 2.196 0 0 0 0 .006l-.406 18.055-.405 18.519-.467 16.458-.078-3.735a.61 2.196 0 0 0-.002-.065l-.542-18.52-.404-18.03a.61 2.196 0 0 0 0-.007l-.407-17.077a.61 2.196 0 0 0-.002-.072l-.54-16.571-.406-14.624a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-13.664a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.019.61 2.196 0 0 0 0-.006l-.406-12.199a.61 2.196 0 0 0-.005-.131l-.542-10.716-.405-8.768a.61 2.196 0 0 0-.005-.102l-.407-6.832a.61 2.196 0 0 0-.008-.113l-.405-5.367a.61 2.196 0 0 0-.08-.644l-.543-2.924a.61 2.196 0 0 0-.167-.614l-.406-.97a.61 2.196 0 0 0-.53-.257l-.407.482a.61 2.196 0 0 0-.314.87l-.542 2.925a.61 2.196 0 0 0-.076.59l-.406 4.878a.61 2.196 0 0 0-.012.173l-.406 6.832a.61 2.196 0 0 0-.007.077l-.405 8.28-.54 10.234a.61 2.196 0 0 0-.007.137l-.407 11.71a.61 2.196 0 0 0 0 .031l-.406 13.176a.61 2.196 0 0 0 0 .018l-.406 14.124-.54 15.594a.61 2.196 0 0 0-.002.078l-.407 16.595a.61 2.196 0 0 0 0 .006l-.405 17.054-.542 18.03a.61 2.196 0 0 0-.001.055l-.29 12.902-.256-8.542-.404-17.537a.61 2.196 0 0 0-.002-.006l-.405-17.077a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-16.101a.61 2.196 0 0 0-.004-.083l-.54-15.1-.405-14.124a.61 2.196 0 0 0-.001-.03l-.405-12.682a.61 2.196 0 0 0-.002-.036l-.406-11.222a.61 2.196 0 0 0-.009-.167l-.539-9.239-.404-8.262a.61 2.196 0 0 0-.009-.148l-.406-5.856a.61 2.196 0 0 0-.035-.357l-.54-4.396a.61 2.196 0 0 0-.035-.239l-.406-2.436a.61 2.196 0 0 0-.184-.697l-.406-.977a.61 2.196 0 0 0-.769.274l-.406 1.466a.61 2.196 0 0 0-.076.333l-.542 2.93a.61 2.196 0 0 0-.076.585l-.406 4.878a.61 2.196 0 0 0-.012.173l-.406 6.832a.61 2.196 0 0 0-.005.078l-.405 8.28-.54 10.233a.61 2.196 0 0 0-.007.125l-.405 11.228a.61 2.196 0 0 0-.002.03l-.405 12.665-.542 14.123a.61 2.196 0 0 0-.001.083l-.407 14.642a.61 2.196 0 0 0 0 .018l-.406 16.101-.405 16.077-.542 17.054a.61 2.196 0 0 0-.002.066l-.186 7.868-.359-11.317-.406-16.566a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-15.612a.61 2.196 0 0 0-.001-.078l-.54-15.1-.407-14.123a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-13.176a.61 2.196 0 0 0 0-.019.61 2.196 0 0 0 0-.024l-.406-11.222a.61 2.196 0 0 0-.007-.125l-.539-10.222-.406-8.762a.61 2.196 0 0 0-.003-.066l-.405-7.32a.61 2.196 0 0 0-.01-.15l-.407-5.366a.61 2.196 0 0 0-.043-.405l-.542-3.902a.61 2.196 0 0 0-.056-.334l-.406-1.953a.61 2.196 0 0 0-.488-.882h-.406a.61 2.196 0 0 0-.365.44l-.542 1.466a.61 2.196 0 0 0-.194.894l-.406 3.413a.61 2.196 0 0 0-.023.232l-.407 4.885a.61 2.196 0 0 0-.013.167l-.405 6.814-.538 8.274a.61 2.196 0 0 0-.01.172l-.407 9.763a.61 2.196 0 0 0-.001.042l-.407 11.222a.61 2.196 0 0 0 0 .025l-.405 12.17-.54 13.14a.61 2.196 0 0 0-.003.1l-.407 14.148a.61 2.196 0 0 0 0 .018l-.406 15.124a.61 2.196 0 0 0 0 .006l-.405 15.589-.54 16.071a.61 2.196 0 0 0-.004.071l-.14 5.79-.405-16.041a.61 2.196 0 0 0 0-.006l-.406-15.618a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-14.642a.61 2.196 0 0 0-.005-.077l-.54-14.13-.405-12.664a.61 2.196 0 0 0 0-.006l-.406-12.199a.61 2.196 0 0 0-.002-.035l-.406-10.74a.61 2.196 0 0 0-.007-.155l-.54-9.245-.405-7.785a.61 2.196 0 0 0-.005-.09l-.407-6.343a.61 2.196 0 0 0-.028-.322l-.54-4.879a.61 2.196 0 0 0-.022-.166l-.406-2.931a.61 2.196 0 0 0-.114-.566l-.407-1.465a.61 2.196 0 0 0-.425-.643h-.407a.61 2.196 0 0 0-.431.643l-.54 1.954a.61 2.196 0 0 0-.131.685l-.405 3.42a.61 2.196 0 0 0-.028.285l-.406 5.367a.61 2.196 0 0 0-.005.083l-.407 6.338-.542 8.292a.61 2.196 0 0 0-.008.16l-.407 9.27a.61 2.196 0 0 0-.001.047l-.405 10.704-.54 11.681a.61 2.196 0 0 0-.004.12l-.406 13.17a.61 2.196 0 0 0 0 .012l-.407 13.664a.61 2.196 0 0 0 0 .006l-.405 14.118-.54 14.605a.61 2.196 0 0 0-.003.084l-.407 15.124a.61 2.196 0 0 0 0 .006l-.038 1.46-.102-2.961-.407-14.612-.406-14.641a.61 2.196 0 0 0-.002-.09l-.54-13.635-.405-13.14a.61 2.196 0 0 0-.001-.03l-.407-11.711a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.223a.61 2.196 0 0 0-.007-.143l-.54-9.739-.405-8.268a.61 2.196 0 0 0-.002-.047l-.406-7.321a.61 2.196 0 0 0-.01-.149l-.407-5.367a.61 2.196 0 0 0-.03-.315l-.542-4.39a.61 2.196 0 0 0-.034-.239l-.407-2.442a.61 2.196 0 0 0-.183-.697l-.406-.976a.61 2.196 0 0 0-.53-.257l-.407.489a.61 2.196 0 0 0-.238.53l-.538 1.954a.61 2.196 0 0 0-.139.78l-.406 3.908a.61 2.196 0 0 0-.014.137l-.404 4.878a.61 2.196 0 0 0-.005.03l-.542 6.833a.61 2.196 0 0 0-.012.197l-.406 7.809a.61 2.196 0 0 0-.004.06l-.406 9.274a.61 2.196 0 0 0-.002.03l-.405 10.216-.538 11.193a.61 2.196 0 0 0-.005.113l-.407 12.2a.61 2.196 0 0 0 0 .017l-.406 13.177a.61 2.196 0 0 0 0 .006l-.405 13.628-.54 13.623a.61 2.196 0 0 0-.004.096l-.365 13.152-.182-6.332-.406-14.147a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-13.176a.61 2.196 0 0 0-.004-.09l-.54-12.652-.405-12.163a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.222a.61 2.196 0 0 0-.002-.042l-.406-9.763a.61 2.196 0 0 0-.007-.125l-.54-9.257-.405-7.309a.61 2.196 0 0 0-.002-.03l-.407-6.832a.61 2.196 0 0 0-.03-.358l-.541-4.878a.61 2.196 0 0 0-.005-.048l-.407-3.42a.61 2.196 0 0 0-.072-.452l-.407-1.954a.61 2.196 0 0 0-.149-.506l-.406-.977a.61 2.196 0 0 0-.61-.137l-.542.977a.61 2.196 0 0 0-.25.834l-.406 2.442a.61 2.196 0 0 0-.038.262l-.406 3.413a.61 2.196 0 0 0-.026.292l-.405 5.332-.539 6.308a.61 2.196 0 0 0-.016.244l-.405 7.81a.61 2.196 0 0 0-.003.04l-.404 8.751-.54 9.721a.61 2.196 0 0 0-.007.15l-.406 11.222a.61 2.196 0 0 0 0 .012l-.407 11.71a.61 2.196 0 0 0 0 .013l-.404 12.163-.54 12.652a.61 2.196 0 0 0-.004.09l-.406 13.176a.61 2.196 0 0 0 0 .006l-.276 9.322-.273-8.84-.405-13.176a.61 2.196 0 0 0-.001-.018l-.407-12.2a.61 2.196 0 0 0-.003-.089l-.539-12.163-.406-11.193a.61 2.196 0 0 0-.002-.042l-.405-9.763a.61 2.196 0 0 0-.007-.125l-.54-9.238-.403-8.256a.61 2.196 0 0 0-.005-.078l-.407-6.832a.61 2.196 0 0 0-.003-.072l-.406-5.855a.61 2.196 0 0 0-.035-.363l-.542-4.39a.61 2.196 0 0 0-.012-.09l-.406-2.93a.61 2.196 0 0 0-.056-.334l-.407-1.954a.61 2.196 0 0 0-.485-.875h-.407a.61 2.196 0 0 0-.272.232l-.54.977a.61 2.196 0 0 0-.252.834l-.405 2.436a.61 2.196 0 0 0-.048.358l-.404 3.883-.539 4.861a.61 2.196 0 0 0-.028.322l-.407 6.343a.61 2.196 0 0 0-.003.06l-.406 7.32a.61 2.196 0 0 0-.005.072l-.405 8.744-.539 9.728a.61 2.196 0 0 0-.007.119l-.404 10.245a.61 2.196 0 0 0-.002.03l-.407 11.223a.61 2.196 0 0 0 0 .012l-.404 11.675-.54 12.158a.61 2.196 0 0 0-.004.09l-.405 12.199a.61 2.196 0 0 0-.001.018l-.185 5.986-.364-11.365a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.71a.61 2.196 0 0 0-.004-.09l-.54-11.675-.405-11.18a.61 2.196 0 0 0-.002-.031l-.404-10.246a.61 2.196 0 0 0-.002-.035l-.407-9.269a.61 2.196 0 0 0-.006-.131l-.54-8.762-.405-7.297a.61 2.196 0 0 0-.004-.066l-.406-6.344a.61 2.196 0 0 0-.022-.256l-.54-5.367a.61 2.196 0 0 0-.013-.113l-.407-3.42a.61 2.196 0 0 0-.015-.112l-.406-2.931a.61 2.196 0 0 0-.207-.846l-.406-.97a.61 2.196 0 0 0-.337-.37h-.542a.61 2.196 0 0 0-.337.37l-.407.97a.61 2.196 0 0 0-.206.846l-.407 2.93a.61 2.196 0 0 0-.026.21l-.403 3.883-.539 4.855a.61 2.196 0 0 0-.028.321l-.406 6.344a.61 2.196 0 0 0-.003.066l-.407 7.32a.61 2.196 0 0 0-.002.025l-.405 7.785-.538 9.245a.61 2.196 0 0 0-.01.143l-.404 10.246-.405 10.215-.54 11.193a.61 2.196 0 0 0-.005.101l-.407 11.71a.61 2.196 0 0 0 0 .013l-.404 12.193-.091 2.621-.055-1.638a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.71a.61 2.196 0 0 0 0-.007.61 2.196 0 0 0 0-.006l-.407-11.222a.61 2.196 0 0 0-.005-.107l-.538-10.698-.405-10.204a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-9.757a.61 2.196 0 0 0-.009-.149l-.538-8.75-.405-7.774a.61 2.196 0 0 0-.002-.053l-.406-6.833a.61 2.196 0 0 0-.007-.07l-.407-5.856a.61 2.196 0 0 0-.033-.358l-.54-4.378-.405-3.401a.61 2.196 0 0 0-.073-.453l-.406-1.954a.61 2.196 0 0 0-.149-.512l-.4-.978a.61 2.196 0 0 0-.337-.363h-.542a.61 2.196 0 0 0-.43.643l-.406 1.46a.61 2.196 0 0 0-.114.571l-.406 2.931-.542 3.902a.61 2.196 0 0 0-.038.351l-.406 4.879a.61 2.196 0 0 0-.01.137l-.407 6.343a.61 2.196 0 0 0-.002.036l-.405 6.797-.538 7.767a.61 2.196 0 0 0-.01.19l-.407 9.275-.406 9.269a.61 2.196 0 0 0-.002.03l-.403 10.21-.54 10.692a.61 2.196 0 0 0-.008.108l-.405 11.228-.404 11.175-.005.095-.142-3.955a.61 2.196 0 0 0-.002-.012l-.405-10.734a.61 2.196 0 0 0-.005-.095l-.539-10.693-.405-10.21a.61 2.196 0 0 0 0-.005.61 2.196 0 0 0 0-.006l-.406-9.763a.61 2.196 0 0 0-.002-.036l-.407-8.78a.61 2.196 0 0 0-.009-.143l-.538-8.262-.405-7.28a.61 2.196 0 0 0-.005-.107l-.407-5.855a.61 2.196 0 0 0-.003-.042l-.406-5.367a.61 2.196 0 0 0-.031-.315l-.54-4.39a.61 2.196 0 0 0-.012-.09l-.407-2.93a.61 2.196 0 0 0-.057-.334l-.407-1.954a.61 2.196 0 0 0-.339-.81l-.541-.488a.61 2.196 0 0 0-.34.047l-.407.489a.61 2.196 0 0 0-.032.22.61 2.196 0 0 0-.206.31l-.407 1.46a.61 2.196 0 0 0-.114.571l-.404 2.93-.542 3.902a.61 2.196 0 0 0-.043.405l-.407 5.367a.61 2.196 0 0 0-.003.048l-.406 5.855a.61 2.196 0 0 0-.003.072l-.405 6.796-.539 7.768a.61 2.196 0 0 0-.009.155l-.406 8.292a.61 2.196 0 0 0-.002.041l-.405 9.227-.539 9.715a.61 2.196 0 0 0-.005.12l-.406 10.245a.61 2.196 0 0 0-.002.018l-.405 10.734-.322 8.53-.231-6.087a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-10.246a.61 2.196 0 0 0-.005-.101l-.539-10.204-.404-9.715a.61 2.196 0 0 0-.002-.036l-.405-8.786a.61 2.196 0 0 0-.01-.143l-.539-8.244-.403-7.762a.61 2.196 0 0 0-.003-.053l-.406-6.833a.61 2.196 0 0 0-.01-.119l-.404-5.367a.61 2.196 0 0 0-.023-.238l-.539-4.855-.403-3.883a.61 2.196 0 0 0-.048-.358l-.407-2.436a.61 2.196 0 0 0-.087-.423l-.407-1.465a.61 2.196 0 0 0-.282-.578l-.542-.489a.61 2.196 0 0 0-.34.048l-.407.488a.61 2.196 0 0 0-.294.763l-.407 1.954a.61 2.196 0 0 0-.02.101l-.54 2.925a.61 2.196 0 0 0-.064.446l-.407 3.908a.61 2.196 0 0 0-.013.137l-.404 4.878a.61 2.196 0 0 0-.01.102l-.404 5.82-.538 6.796a.61 2.196 0 0 0-.013.197l-.407 7.809a.61 2.196 0 0 0-.002.024l-.405 8.292a.61 2.196 0 0 0-.002.024l-.405 8.75-.538 9.722a.61 2.196 0 0 0-.005.107l-.407 9.757a.61 2.196 0 0 0 0 .019l-.406 10.245-.228 5.754-.326-8.196a.61 2.196 0 0 0-.007-.12l-.538-9.703-.403-9.709a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-9.269a.61 2.196 0 0 0-.002-.041l-.406-8.292a.61 2.196 0 0 0-.01-.155l-.538-7.755-.403-7.268a.61 2.196 0 0 0-.003-.065l-.407-6.344a.61 2.196 0 0 0-.007-.083l-.404-5.367a.61 2.196 0 0 0-.043-.405l-.534-3.842-.4-3.36a.61 2.196 0 0 0-.036-.262l-.407-2.442a.61 2.196 0 0 0-.157-.625l-.542-1.466a.61 2.196 0 0 0-.365-.44h-.406a.61 2.196 0 0 0-.337.369l-.407.977a.61 2.196 0 0 0-.149.512l-.406 1.948a.61 2.196 0 0 0-.02.1l-.542 2.926a.61 2.196 0 0 0-.063.446l-.406 3.908a.61 2.196 0 0 0-.013.137l-.407 4.884a.61 2.196 0 0 0-.007.096l-.403 5.82-.538 6.796a.61 2.196 0 0 0-.012.172l-.406 7.321a.61 2.196 0 0 0-.003.048l-.404 8.25-.538 8.732a.61 2.196 0 0 0-.007.137l-.407 9.269-.406 9.274a.61 2.196 0 0 0-.002.03l-.403 10.187-.169 3.026-.386-9.793a.61 2.196 0 0 0-.01-.143l-.536-9.215-.405-9.221a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-8.78a.61 2.196 0 0 0-.01-.143l-.538-8.262-.403-7.28a.61 2.196 0 0 0-.003-.03l-.405-6.832a.61 2.196 0 0 0-.005-.071l-.407-5.856a.61 2.196 0 0 0-.025-.286l-.538-4.854-.405-3.884a.61 2.196 0 0 0-.01-.095l-.406-3.413a.61 2.196 0 0 0-.073-.453l-.407-1.954a.61 2.196 0 0 0-.214-.643l-.54-.977a.61 2.196 0 0 0-.273-.232h-.407a.61 2.196 0 0 0-.337.369l-.406.977a.61 2.196 0 0 0-.15.506l-.405 1.954a.61 2.196 0 0 0-.042.226l-.542 3.413a.61 2.196 0 0 0-.04.322l-.407 3.902a.61 2.196 0 0 0-.013.143l-.403 4.848-.54 5.82a.61 2.196 0 0 0-.017.238l-.405 6.833a.61 2.196 0 0 0-.003.03l-.405 7.315a.61 2.196 0 0 0-.003.054l-.403 8.232-.537 8.232a.61 2.196 0 0 0-.01.16l-.406 9.275-.406 9.269a.61 2.196 0 0 0 0 .018l-.405 9.71-.064 1.149-.086-2.073a.61 2.196 0 0 0-.005-.107l-.539-9.716-.405-9.227a.61 2.196 0 0 0-.002-.018l-.404-8.786a.61 2.196 0 0 0-.002-.018l-.407-8.298a.61 2.196 0 0 0-.009-.149l-.538-7.755-.404-7.267a.61 2.196 0 0 0-.003-.066l-.406-6.344a.61 2.196 0 0 0-.002-.042l-.406-5.855a.61 2.196 0 0 0-.035-.357l-.534-4.33-.4-3.843a.61 2.196 0 0 0-.024-.214l-.407-2.925a.61 2.196 0 0 0-.114-.572l-.542-1.954a.61 2.196 0 0 0-.238-.53l-.406-.488a.61 2.196 0 0 0-.192-.113h-.406a.61 2.196 0 0 0-.432.643l-.404 1.465-.542 1.954a.61 2.196 0 0 0-.13.685l-.406 3.42a.61 2.196 0 0 0-.018.166l-.406 4.396a.61 2.196 0 0 0-.005.06l-.403 4.848-.54 5.826a.61 2.196 0 0 0-.017.232l-.407 6.833a.61 2.196 0 0 0-.002.03l-.403 7.267-.537 7.756a.61 2.196 0 0 0-.01.172l-.406 8.787-.407 8.78a.61 2.196 0 0 0 0 .024l-.405 9.227-.424 7.648-.132-3.198a.61 2.196 0 0 0-.007-.125l-.54-9.215-.402-9.221a.61 2.196 0 0 0-.002-.019l-.405-8.78a.61 2.196 0 0 0-.003-.047l-.407-7.804a.61 2.196 0 0 0-.009-.13l-.538-7.774-.405-6.79a.61 2.196 0 0 0-.002-.036l-.406-6.344a.61 2.196 0 0 0-.022-.256l-.539-5.338-.403-4.366a.61 2.196 0 0 0-.018-.173l-.405-3.413a.61 2.196 0 0 0-.016-.119l-.405-2.925a.61 2.196 0 0 0-.18-.774l-.54-1.465a.61 2.196 0 0 0-.174-.328l-.406-.488a.61 2.196 0 0 0-.385 0l-.407.488a.61 2.196 0 0 0-.14.256l-.405.977a.61 2.196 0 0 0-.139.453l-.54 2.442a.61 2.196 0 0 0-.084.506l-.407 3.42a.61 2.196 0 0 0-.018.166l-.403 4.367-.539 5.337a.61 2.196 0 0 0-.018.22l-.406 5.856a.61 2.196 0 0 0-.007.071l-.407 6.832a.61 2.196 0 0 0-.002.03l-.403 7.28-.54 8.262a.61 2.196 0 0 0-.007.119l-.407 8.298a.61 2.196 0 0 0-.002.041l-.404 9.269-.405 9.215-.349 5.974-.347-5.974-.405-9.215-.404-9.269a.61 2.196 0 0 0-.002-.041l-.407-8.298a.61 2.196 0 0 0-.007-.12l-.54-8.261-.403-7.28a.61 2.196 0 0 0-.002-.03l-.407-6.832a.61 2.196 0 0 0-.005-.071l-.406-5.856a.61 2.196 0 0 0-.018-.22l-.54-5.337-.402-4.367a.61 2.196 0 0 0-.018-.166l-.407-3.42a.61 2.196 0 0 0-.084-.506l-.54-2.442a.61 2.196 0 0 0-.14-.453l-.404-.977a.61 2.196 0 0 0-.145-.256l-.407-.488a.61 2.196 0 0 0-.385 0l-.406.488a.61 2.196 0 0 0-.174.328l-.54 1.465a.61 2.196 0 0 0-.18.774l-.407 2.925a.61 2.196 0 0 0-.014.12l-.405 3.412a.61 2.196 0 0 0-.018.173l-.403 4.366-.54 5.338a.61 2.196 0 0 0-.02.256l-.407 6.344a.61 2.196 0 0 0-.002.035l-.405 6.79-.539 7.774a.61 2.196 0 0 0-.009.131l-.404 7.804a.61 2.196 0 0 0-.003.047l-.405 8.78a.61 2.196 0 0 0-.002.019l-.403 9.22-.539 9.216a.61 2.196 0 0 0-.007.125l-.132 3.198-.425-7.648-.405-9.227a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-8.78-.406-8.786a.61 2.196 0 0 0-.01-.173l-.537-7.755-.404-7.267a.61 2.196 0 0 0-.002-.03l-.406-6.833a.61 2.196 0 0 0-.018-.233l-.539-5.825-.403-4.849a.61 2.196 0 0 0-.005-.06l-.406-4.395a.61 2.196 0 0 0-.018-.167l-.407-3.42a.61 2.196 0 0 0-.129-.684l-.542-1.954-.405-1.466a.61 2.196 0 0 0-.43-.643h-.406a.61 2.196 0 0 0-.191.113l-.407.489a.61 2.196 0 0 0-.238.53l-.542 1.954a.61 2.196 0 0 0-.114.572l-.406 2.924a.61 2.196 0 0 0-.025.215l-.4 3.842-.533 4.33a.61 2.196 0 0 0-.035.358l-.407 5.855a.61 2.196 0 0 0-.002.042l-.406 6.344a.61 2.196 0 0 0-.005.065l-.403 7.267-.539 7.756a.61 2.196 0 0 0-.009.149l-.406 8.297a.61 2.196 0 0 0-.002.019l-.407 8.786a.61 2.196 0 0 0 0 .018l-.405 9.227-.538 9.715a.61 2.196 0 0 0-.005.108l-.086 2.072-.064-1.15-.405-9.709a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-9.268-.406-9.275a.61 2.196 0 0 0-.01-.16l-.536-8.233-.403-8.232a.61 2.196 0 0 0-.003-.053l-.407-7.315a.61 2.196 0 0 0-.002-.03l-.405-6.833a.61 2.196 0 0 0-.018-.238l-.538-5.82-.403-4.849a.61 2.196 0 0 0-.014-.143l-.406-3.901a.61 2.196 0 0 0-.041-.322l-.542-3.413a.61 2.196 0 0 0-.041-.226l-.405-1.954a.61 2.196 0 0 0-.15-.506l-.407-.977a.61 2.196 0 0 0-.337-.37h-.406a.61 2.196 0 0 0-.273.233l-.54.977a.61 2.196 0 0 0-.217.643l-.405 1.954a.61 2.196 0 0 0-.072.452l-.407 3.414a.61 2.196 0 0 0-.01.095l-.405 3.884-.538 4.854a.61 2.196 0 0 0-.025.286l-.406 5.855a.61 2.196 0 0 0-.005.072l-.407 6.832a.61 2.196 0 0 0-.002.03l-.403 7.28-.539 8.262a.61 2.196 0 0 0-.009.143l-.406 8.78a.61 2.196 0 0 0 0 .018l-.405 9.221-.537 9.215a.61 2.196 0 0 0-.009.143l-.387 9.799-.168-3.032-.405-10.186a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.018l-.406-9.275-.407-9.268a.61 2.196 0 0 0-.007-.137l-.538-8.733-.404-8.25a.61 2.196 0 0 0-.003-.047l-.406-7.321a.61 2.196 0 0 0-.012-.173l-.538-6.796-.403-5.82a.61 2.196 0 0 0-.01-.095l-.405-4.885a.61 2.196 0 0 0-.013-.137l-.407-3.907a.61 2.196 0 0 0-.061-.447l-.542-2.925a.61 2.196 0 0 0-.02-.1l-.406-1.949a.61 2.196 0 0 0-.149-.512l-.406-.966a.61 2.196 0 0 0-.338-.37h-.406a.61 2.196 0 0 0-.365.441l-.542 1.466a.61 2.196 0 0 0-.157.625l-.407 2.442a.61 2.196 0 0 0-.036.262l-.4 3.36-.533 3.842a.61 2.196 0 0 0-.045.405l-.405 5.367a.61 2.196 0 0 0-.007.083l-.406 6.344a.61 2.196 0 0 0-.003.066l-.403 7.267-.54 7.755a.61 2.196 0 0 0-.008.155l-.407 8.292a.61 2.196 0 0 0-.002.042l-.406 9.268a.61 2.196 0 0 0 0 .019l-.403 9.709-.539 9.703a.61 2.196 0 0 0-.007.12l-.325 8.196-.228-5.754-.407-10.246a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-9.757a.61 2.196 0 0 0-.005-.107l-.539-9.721-.405-8.75a.61 2.196 0 0 0-.002-.025l-.406-8.292a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-7.809a.61 2.196 0 0 0-.013-.197l-.538-6.796-.403-5.82a.61 2.196 0 0 0-.01-.101l-.404-4.879a.61 2.196 0 0 0-.013-.137l-.407-3.907a.61 2.196 0 0 0-.064-.447l-.54-2.925a.61 2.196 0 0 0-.02-.1l-.407-1.955a.61 2.196 0 0 0-.294-.762l-.406-.489a.61 2.196 0 0 0-.34-.047l-.543.488a.61 2.196 0 0 0-.282.578l-.407 1.465a.61 2.196 0 0 0-.09.423l-.407 2.437a.61 2.196 0 0 0-.048.357l-.403 3.884-.539 4.854a.61 2.196 0 0 0-.023.239l-.406 5.367a.61 2.196 0 0 0-.007.119l-.407 6.832a.61 2.196 0 0 0-.003.054l-.403 7.761-.539 8.244a.61 2.196 0 0 0-.009.143l-.404 8.786a.61 2.196 0 0 0-.002.036l-.405 9.715-.539 10.204a.61 2.196 0 0 0-.005.101l-.406 10.246a.61 2.196 0 0 0 0 .018l-.232 6.088-.322-8.53-.406-10.734a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-10.245a.61 2.196 0 0 0-.007-.12l-.538-9.715-.405-9.227a.61 2.196 0 0 0-.002-.042l-.407-8.291a.61 2.196 0 0 0-.009-.155l-.538-7.768-.405-6.796a.61 2.196 0 0 0-.005-.072l-.405-5.855a.61 2.196 0 0 0-.003-.048l-.406-5.367a.61 2.196 0 0 0-.043-.405l-.542-3.901-.405-2.931a.61 2.196 0 0 0-.114-.572l-.406-1.46a.61 2.196 0 0 0-.238-.53l-.407-.488a.61 2.196 0 0 0-.34-.047l-.542.488a.61 2.196 0 0 0-.339.81l-.406 1.954a.61 2.196 0 0 0-.058.333l-.407 2.931a.61 2.196 0 0 0-.011.09l-.54 4.39a.61 2.196 0 0 0-.032.315l-.406 5.367a.61 2.196 0 0 0-.003.042l-.407 5.855a.61 2.196 0 0 0-.007.108l-.403 7.279-.538 8.262a.61 2.196 0 0 0-.01.143l-.406 8.78a.61 2.196 0 0 0-.002.035l-.406 9.763a.61 2.196 0 0 0 0 .013l-.405 10.21-.539 10.692a.61 2.196 0 0 0-.005.095l-.405 10.734a.61 2.196 0 0 0-.002.012l-.142 3.95-.005-.09-.404-11.175-.405-11.228a.61 2.196 0 0 0-.005-.108l-.54-10.692-.404-10.21a.61 2.196 0 0 0-.002-.03l-.406-9.269-.407-9.274a.61 2.196 0 0 0-.01-.19l-.538-7.768-.405-6.797a.61 2.196 0 0 0-.002-.035l-.407-6.344a.61 2.196 0 0 0-.01-.137l-.406-4.879a.61 2.196 0 0 0-.038-.351l-.542-3.902-.406-2.93a.61 2.196 0 0 0-.114-.572l-.405-1.46a.61 2.196 0 0 0-.432-.643h-.541a.61 2.196 0 0 0-.333.363l-.406.977a.61 2.196 0 0 0-.149.513l-.406 1.953a.61 2.196 0 0 0-.073.453l-.405 3.401-.54 4.378a.61 2.196 0 0 0-.033.358l-.406 5.855a.61 2.196 0 0 0-.007.072l-.407 6.832a.61 2.196 0 0 0-.003.054l-.403 7.773-.54 8.75a.61 2.196 0 0 0-.007.15l-.407 9.756a.61 2.196 0 0 0 0 .019l-.405 10.203-.54 10.699a.61 2.196 0 0 0-.003.107l-.406 11.222a.61 2.196 0 0 0 0 .012l-.407 11.711a.61 2.196 0 0 0 0 .012l-.054 1.638-.091-2.62-.405-12.194a.61 2.196 0 0 0-.002-.012l-.405-11.711a.61 2.196 0 0 0-.005-.101l-.54-11.193-.405-10.216-.405-10.245a.61 2.196 0 0 0-.009-.143l-.538-9.245-.405-7.785a.61 2.196 0 0 0-.002-.025l-.407-7.32a.61 2.196 0 0 0-.003-.066l-.406-6.344a.61 2.196 0 0 0-.028-.321l-.539-4.855-.405-3.884a.61 2.196 0 0 0-.024-.208l-.407-2.931a.61 2.196 0 0 0-.206-.846l-.407-.97a.61 2.196 0 0 0-.337-.37h-.542a.61 2.196 0 0 0-.337.37l-.406.97a.61 2.196 0 0 0-.207.846l-.406 2.93a.61 2.196 0 0 0-.015.114l-.407 3.419a.61 2.196 0 0 0-.013.113l-.54 5.367a.61 2.196 0 0 0-.022.256l-.406 6.344a.61 2.196 0 0 0-.003.066l-.405 7.297-.54 8.762a.61 2.196 0 0 0-.007.131l-.407 9.269a.61 2.196 0 0 0-.002.035l-.404 10.246a.61 2.196 0 0 0-.002.03l-.405 11.18-.54 11.676a.61 2.196 0 0 0-.004.09l-.406 11.71a.61 2.196 0 0 0 0 .018l-.363 11.366-.186-5.987a.61 2.196 0 0 0-.002-.018l-.404-12.2a.61 2.196 0 0 0-.003-.089l-.54-12.157-.405-11.675a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-11.223a.61 2.196 0 0 0-.002-.03l-.406-10.246a.61 2.196 0 0 0-.005-.119l-.539-9.727-.405-8.744a.61 2.196 0 0 0-.003-.072l-.406-7.32a.61 2.196 0 0 0-.005-.06l-.407-6.344a.61 2.196 0 0 0-.028-.322l-.538-4.86-.405-3.884a.61 2.196 0 0 0-.048-.357l-.403-2.437a.61 2.196 0 0 0-.253-.834l-.54-.977a.61 2.196 0 0 0-.271-.232h-.407a.61 2.196 0 0 0-.487.876l-.407 1.953a.61 2.196 0 0 0-.06.334l-.404 2.93a.61 2.196 0 0 0-.012.09l-.541 4.39a.61 2.196 0 0 0-.035.363l-.407 5.856a.61 2.196 0 0 0-.003.071l-.406 6.833a.61 2.196 0 0 0-.005.077l-.403 8.256-.54 9.239a.61 2.196 0 0 0-.007.125l-.407 9.763a.61 2.196 0 0 0-.002.042l-.405 11.192-.538 12.164a.61 2.196 0 0 0-.003.089l-.407 12.2a.61 2.196 0 0 0-.002.017l-.405 13.177-.272 8.84-.276-9.323a.61 2.196 0 0 0 0-.006l-.407-13.176a.61 2.196 0 0 0-.003-.09l-.54-12.651-.405-12.164a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.71a.61 2.196 0 0 0 0-.007.61 2.196 0 0 0 0-.006l-.407-11.222a.61 2.196 0 0 0-.007-.149l-.54-9.721-.403-8.75a.61 2.196 0 0 0-.003-.042l-.405-7.81a.61 2.196 0 0 0-.016-.244l-.539-6.308-.405-5.33a.61 2.196 0 0 0-.026-.293l-.407-3.413a.61 2.196 0 0 0-.037-.262l-.407-2.442a.61 2.196 0 0 0-.25-.834l-.541-.977a.61 2.196 0 0 0-.61.137l-.403.977a.61 2.196 0 0 0-.149.506l-.406 1.954a.61 2.196 0 0 0-.073.453l-.406 3.419a.61 2.196 0 0 0-.007.047l-.542 4.879a.61 2.196 0 0 0-.03.357l-.407 6.833a.61 2.196 0 0 0-.002.03l-.404 7.309-.54 9.257a.61 2.196 0 0 0-.008.125l-.406 9.763a.61 2.196 0 0 0-.002.041l-.407 11.223a.61 2.196 0 0 0 0 .024l-.404 12.164-.54 12.652a.61 2.196 0 0 0-.004.089l-.406 13.176a.61 2.196 0 0 0 0 .018l-.407 14.147-.181 6.362-.365-13.182a.61 2.196 0 0 0-.003-.095l-.54-13.623-.406-13.629a.61 2.196 0 0 0 0-.006l-.406-13.176a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-12.2a.61 2.196 0 0 0-.005-.112l-.54-11.193-.406-10.216a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.018l-.406-9.275a.61 2.196 0 0 0-.003-.06l-.406-7.808a.61 2.196 0 0 0-.014-.197l-.54-6.832a.61 2.196 0 0 0-.003-.03l-.405-4.88a.61 2.196 0 0 0-.013-.136l-.406-3.908a.61 2.196 0 0 0-.139-.78l-.528-1.953a.61 2.196 0 0 0-.238-.53l-.406-.488a.61 2.196 0 0 0-.53.256l-.407.977a.61 2.196 0 0 0-.183.697l-.407 2.442a.61 2.196 0 0 0-.034.238l-.542 4.39a.61 2.196 0 0 0-.03.316l-.407 5.367a.61 2.196 0 0 0-.01.149l-.406 7.32a.61 2.196 0 0 0-.002.048l-.405 8.268-.54 9.739a.61 2.196 0 0 0-.007.143l-.407 11.222a.61 2.196 0 0 0 0 .013l-.404 11.71a.61 2.196 0 0 0-.003.03l-.405 13.141-.54 13.635a.61 2.196 0 0 0-.004.09l-.404 14.64-.407 14.613-.102 2.96-.038-1.46a.61 2.196 0 0 0-.002-.005l-.405-15.124a.61 2.196 0 0 0-.003-.084l-.54-14.606-.405-14.117a.61 2.196 0 0 0 0-.006l-.406-13.665a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-13.163a.61 2.196 0 0 0-.005-.12l-.539-11.68-.404-10.704a.61 2.196 0 0 0-.002-.048l-.407-9.269a.61 2.196 0 0 0-.01-.16l-.54-8.292-.407-6.338a.61 2.196 0 0 0-.005-.083l-.406-5.367a.61 2.196 0 0 0-.028-.286l-.405-3.419a.61 2.196 0 0 0-.13-.685l-.54-1.954a.61 2.196 0 0 0-.43-.644h-.406a.61 2.196 0 0 0-.43.644l-.406 1.465a.61 2.196 0 0 0-.114.566l-.407 2.93a.61 2.196 0 0 0-.021.167l-.54 4.879a.61 2.196 0 0 0-.029.322l-.406 6.343a.61 2.196 0 0 0-.007.09l-.405 7.785-.54 9.245a.61 2.196 0 0 0-.007.155l-.407 10.74a.61 2.196 0 0 0-.002.035l-.406 12.2a.61 2.196 0 0 0 0 .005l-.405 12.664-.54 14.13a.61 2.196 0 0 0-.003.077l-.407 14.642a.61 2.196 0 0 0 0 .012l-.406 15.618a.61 2.196 0 0 0 0 .006l-.405 16.042-.14-5.79a.61 2.196 0 0 0-.003-.072l-.54-16.07-.406-15.59a.61 2.196 0 0 0 0-.005l-.406-15.124a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-14.148a.61 2.196 0 0 0-.003-.1l-.54-13.141-.406-12.17a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-11.222a.61 2.196 0 0 0-.002-.042l-.406-9.763a.61 2.196 0 0 0-.01-.172l-.54-8.274-.406-6.815a.61 2.196 0 0 0-.011-.166l-.407-4.885a.61 2.196 0 0 0-.023-.232l-.406-3.413a.61 2.196 0 0 0-.194-.894l-.542-1.465a.61 2.196 0 0 0-.365-.441h-.406a.61 2.196 0 0 0-.488.882l-.406 1.953a.61 2.196 0 0 0-.056.334l-.542 3.902a.61 2.196 0 0 0-.043.405l-.407 5.367a.61 2.196 0 0 0-.01.148l-.405 7.321a.61 2.196 0 0 0-.005.066l-.404 8.762-.539 10.222a.61 2.196 0 0 0-.007.125l-.406 11.222a.61 2.196 0 0 0 0 .042l-.405 13.176a.61 2.196 0 0 0-.003.018l-.405 14.123-.54 15.1a.61 2.196 0 0 0-.002.078l-.407 15.612a.61 2.196 0 0 0 0 .013l-.406 16.565-.359 11.318-.186-7.869a.61 2.196 0 0 0-.003-.065l-.54-17.054-.406-16.077-.406-16.101a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-14.642a.61 2.196 0 0 0-.003-.083l-.54-14.124-.406-12.664a.61 2.196 0 0 0-.002-.03l-.404-11.228a.61 2.196 0 0 0-.007-.125l-.54-10.234-.405-8.28a.61 2.196 0 0 0-.005-.077l-.407-6.833a.61 2.196 0 0 0-.011-.172l-.407-4.879a.61 2.196 0 0 0-.076-.583l-.542-2.931a.61 2.196 0 0 0-.076-.334l-.406-1.465a.61 2.196 0 0 0-.769-.274l-.406.977a.61 2.196 0 0 0-.184.697l-.406 2.436a.61 2.196 0 0 0-.035.238l-.54 4.396a.61 2.196 0 0 0-.035.358l-.406 5.855a.61 2.196 0 0 0-.01.149l-.404 8.262-.539 9.239a.61 2.196 0 0 0-.009.167l-.406 11.222a.61 2.196 0 0 0-.002.036l-.405 12.681a.61 2.196 0 0 0-.002.03l-.405 14.124-.54 15.1a.61 2.196 0 0 0-.003.083l-.406 16.101a.61 2.196 0 0 0 0 .013l-.405 17.077a.61 2.196 0 0 0-.002.006l-.405 17.537-.256 8.542-.29-12.903a.61 2.196 0 0 0-.001-.053l-.542-18.031-.405-17.054a.61 2.196 0 0 0 0-.006l-.406-16.595a.61 2.196 0 0 0-.002-.078l-.542-15.594-.405-14.124a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-13.176a.61 2.196 0 0 0-.002-.03l-.403-11.711a.61 2.196 0 0 0-.009-.137l-.54-10.234-.405-8.28a.61 2.196 0 0 0-.005-.077l-.406-6.832a.61 2.196 0 0 0-.012-.173l-.406-4.878a.61 2.196 0 0 0-.076-.59l-.542-2.925a.61 2.196 0 0 0-.314-.87l-.407-.482a.61 2.196 0 0 0-.53.256l-.406.971a.61 2.196 0 0 0-.169.614l-.542 2.924a.61 2.196 0 0 0-.08.644l-.406 5.367a.61 2.196 0 0 0-.009.113l-.406 6.832a.61 2.196 0 0 0-.005.101l-.405 8.769-.542 10.716a.61 2.196 0 0 0-.005.13l-.406 12.2a.61 2.196 0 0 0 0 .03l-.407 13.665a.61 2.196 0 0 0 0 .012l-.406 14.624-.54 16.572a.61 2.196 0 0 0-.003.071l-.406 17.078a.61 2.196 0 0 0 0 .006l-.405 18.03-.542 18.52a.61 2.196 0 0 0-.002.065l-.077 3.735-.468-16.458-.405-18.52-.406-18.054a.61 2.196 0 0 0 0-.006l-.407-17.566a.61 2.196 0 0 0-.002-.083l-.542-16.083-.404-14.612a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-13.665a.61 2.196 0 0 0-.005-.125l-.54-11.68-.405-10.705a.61 2.196 0 0 0-.003-.083l-.407-8.298a.61 2.196 0 0 0-.005-.107l-.406-6.344a.61 2.196 0 0 0-.028-.322l-.542-4.884a.61 2.196 0 0 0-.043-.31l-.406-2.442a.61 2.196 0 0 0-.33-.953l-.406-.489a.61 2.196 0 0 0-.68.769l-.405 1.948a.61 2.196 0 0 0-.041.232l-.542 3.413a.61 2.196 0 0 0-.063.56l-.405 5.856a.61 2.196 0 0 0-.009.125l-.406 7.809a.61 2.196 0 0 0-.003.077l-.405 9.74-.542 11.698a.61 2.196 0 0 0-.003.114l-.407 13.176a.61 2.196 0 0 0-.002.024l-.404 14.618-.54 16.083a.61 2.196 0 0 0-.004.077l-.404 17.078a.61 2.196 0 0 0 0 .012l-.407 18.543a.61 2.196 0 0 0 0 .006l-.406 19.008-.516 19.085-.03-1.483a.61 2.196 0 0 0-.002-.06l-.54-19.978-.405-19.496a.61 2.196 0 0 0 0-.006l-.406-18.543a.61 2.196 0 0 0-.003-.066l-.54-18.03-.407-16.572a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-15.612a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.019l-.407-13.664a.61 2.196 0 0 0-.005-.113l-.54-12.182-.405-10.227a.61 2.196 0 0 0-.002-.054l-.406-8.78a.61 2.196 0 0 0-.01-.137l-.404-6.344a.61 2.196 0 0 0-.05-.489l-.542-3.901a.61 2.196 0 0 0-.021-.149l-.407-2.436a.61 2.196 0 0 0-.522-1.067h-.406a.61 2.196 0 0 0-.476.822l-.54 2.443a.61 2.196 0 0 0-.103.673l-.407 4.396a.61 2.196 0 0 0-.014.197l-.407 6.343a.61 2.196 0 0 0-.009.137l-.405 8.763-.54 10.722a.61 2.196 0 0 0-.007.143l-.405 12.687a.61 2.196 0 0 0-.002.025l-.406 14.153a.61 2.196 0 0 0 0 .018l-.405 15.595-.542 17.548a.61 2.196 0 0 0-.002.065l-.406 18.055a.61 2.196 0 0 0 0 .018l-.405 19.497-.542 20.473a.61 2.196 0 0 0 0 .053l-.332 17.185-.213-8.428-.407-20.473-.405-20.491a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-19.514a.61 2.196 0 0 0-.002-.066l-.542-18.525-.405-17.06a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.406-15.618a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.407-14.153a.61 2.196 0 0 0-.005-.12l-.54-12.175-.405-10.71a.61 2.196 0 0 0-.003-.084l-.406-8.297a.61 2.196 0 0 0-.018-.262l-.54-6.344a.61 2.196 0 0 0-.014-.125l-.405-3.908a.61 2.196 0 0 0-.14-.78l-.407-1.466a.61 2.196 0 0 0-.62-.53zm.092 4.902.339 3.259.525 6.153.397 8.119.405 10.692a.61 2.196 0 0 0 .003.048l.538 12.14.403 14.08.407 15.595.405 17.072a.61 2.196 0 0 0 .002.042l.54 18.507.405 19.485.406 20.49.407 20.492a.61 2.196 0 0 0 0 .047l.542 21.444.31 16.417-.31 16.416-.542 21.444a.61 2.196 0 0 0 0 .042l-.407 20.497-.406 20.49-.405 19.485-.54 18.508a.61 2.196 0 0 0-.002.041l-.405 17.072-.407 15.595-.403 14.081-.538 12.14a.61 2.196 0 0 0-.003.048l-.405 10.692-.397 8.119-.525 6.153-.339 3.258-.282-1.519-.374-4.95-.4-7.201-.404-9.227a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.54-11.651-.404-13.588-.405-15.118a.61 2.196 0 0 0-.002-.035l-.54-17.042-.406-18.013-.407-19.508-.403-20.974a.61 2.196 0 0 0-.003-.053l-.54-20.956-.407-21.927-.401-22.301.401-22.302.407-21.927.54-20.955a.61 2.196 0 0 0 .003-.054l.403-20.973.407-19.508.406-18.013.54-17.042a.61 2.196 0 0 0 .002-.036l.405-15.118.405-13.587.539-11.651a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.404-9.227.4-7.202.374-4.95zm461.492 0 .283 1.52.373 4.95.4 7.2.405 9.228a.61 2.196 0 0 0 0 .018l.538 11.651.405 13.588.405 15.118a.61 2.196 0 0 0 .002.035l.54 17.042.405 18.013.406 19.508.405 20.974a.61 2.196 0 0 0 .002.053l.54 20.956.406 21.926.402 22.302-.402 22.302-.406 21.927-.54 20.955a.61 2.196 0 0 0-.002.054l-.405 20.973-.406 19.508-.405 18.013-.54 17.042a.61 2.196 0 0 0-.002.036l-.405 15.118-.405 13.587-.538 11.651a.61 2.196 0 0 0 0 .019l-.405 9.227-.4 7.201-.373 4.95-.283 1.52-.339-3.26-.525-6.152-.398-8.12-.403-10.692a.61 2.196 0 0 0-.005-.047l-.54-12.14-.402-14.081-.407-15.595-.405-17.072a.61 2.196 0 0 0-.001-.042l-.54-18.507-.405-19.484-.407-20.491-.406-20.497a.61 2.196 0 0 0 0-.018.61 2.196 0 0 0 0-.025l-.542-21.444-.31-16.416.31-16.417.542-21.444a.61 2.196 0 0 0 0-.048l.406-20.49.407-20.491.404-19.485.54-18.507a.61 2.196 0 0 0 .002-.042l.405-17.072.407-15.594.403-14.082.539-12.14a.61 2.196 0 0 0 .005-.047l.403-10.692.398-8.12.525-6.152zm-448.37 9.245.118.703.499 3.598.385 6.022.403 8.69.405 10.222a.61 2.196 0 0 0 .002.036l.538 12.146.403 13.593.407 15.594.405 16.584a.61 2.196 0 0 0 .002.042l.54 18.024.406 18.508.405 19.514a.61 2.196 0 0 0 .002.047l.54 19.98.407 20.466.218 11.068-.218 11.067-.406 20.467-.54 19.98a.61 2.196 0 0 0-.003.047l-.405 19.514-.406 18.507-.54 18.025a.61 2.196 0 0 0-.002.042l-.405 16.583-.407 15.595-.403 13.593-.538 12.145a.61 2.196 0 0 0-.002.036l-.405 10.222-.403 8.69-.385 6.023-.5 3.592-.117.708-.158-.714-.362-3.92-.395-6.177-.403-8.715a.61 2.196 0 0 0-.002-.035l-.539-10.663-.405-12.604-.404-14.13-.407-15.606a.61 2.196 0 0 0 .002-.006.61 2.196 0 0 0 0-.018.61 2.196 0 0 0-.002-.012l-.538-17.53-.409-18.02-.404-19.514a.61 2.196 0 0 0-.002-.041l-.54-20.467-.407-20.956-.405-20.98-.09-4.729.09-4.73.405-20.979.406-20.956.54-20.467a.61 2.196 0 0 0 .003-.041l.404-19.514.409-18.02.54-17.53a.61 2.196 0 0 0 0-.018.61 2.196 0 0 0 0-.025l.406-15.6.405-14.13.403-12.604.539-10.662a.61 2.196 0 0 0 .002-.036l.403-8.714.395-6.177.362-3.92zm435.248 0 .158.715.362 3.92.395 6.176.403 8.715a.61 2.196 0 0 0 .002.036l.539 10.662.403 12.605.405 14.129.406 15.6a.61 2.196 0 0 0 0 .042l.54 17.53.407 18.02.405 19.513a.61 2.196 0 0 0 .001.042l.54 20.467.407 20.956.405 20.98.09 4.729-.09 4.73-.405 20.979-.406 20.955-.54 20.468a.61 2.196 0 0 0-.002.041l-.405 19.514-.407 18.02-.54 17.53a.61 2.196 0 0 0 0 .035l-.406 15.607-.405 14.13-.403 12.603-.539 10.663a.61 2.196 0 0 0-.002.035l-.403 8.715-.395 6.177-.362 3.92-.158.714-.118-.708-.499-3.592-.384-6.022-.404-8.691-.404-10.222a.61 2.196 0 0 0-.004-.035l-.539-12.146-.403-13.593-.406-15.595-.405-16.583a.61 2.196 0 0 0-.002-.042l-.54-18.025-.406-18.507-.405-19.514a.61 2.196 0 0 0-.002-.048l-.54-19.978-.407-20.467-.218-11.068.218-11.067.407-20.468.54-19.978a.61 2.196 0 0 0 .002-.048l.405-19.514.406-18.507.54-18.025a.61 2.196 0 0 0 .002-.042l.405-16.583.406-15.595.403-13.593.54-12.146a.61 2.196 0 0 0 .002-.035l.405-10.222.403-8.69.385-6.023.5-3.598zm-422.02 9.543.143.846.505 4.556.392 6.124.401 8.196.405 10.692a.61 2.196 0 0 0 .002.066l.539 11.645.404 13.593.405 14.636a.61 2.196 0 0 0 .002.042l.54 16.065.405 17.524.407 18.049.406 18.537a.61 2.196 0 0 0 0 .054l.54 19.002.407 19.49.132 6.177-.132 6.177-.406 19.49-.54 19.002a.61 2.196 0 0 0 0 .054l-.407 18.537-.407 18.049-.404 17.524-.54 16.065a.61 2.196 0 0 0-.003.042l-.405 14.636-.404 13.587-.539 11.65a.61 2.196 0 0 0-.002.066l-.405 10.693-.401 8.196-.392 6.124-.505 4.556-.143.846-.02-.095-.48-3.038-.382-5.498-.4-7.702-.405-9.721a.61 2.196 0 0 0-.002-.036l-.538-11.651-.403-13.105-.407-14.623a.61 2.196 0 0 0-.003-.048l-.537-16.065-.406-17.036-.407-18.531-.406-19.026a.61 2.196 0 0 0-.002-.048l-.54-19.978-.405-19.979-.18-9.114.18-9.113.405-19.979.54-19.979a.61 2.196 0 0 0 .002-.047l.406-19.026.407-18.537.406-17.03.537-16.065a.61 2.196 0 0 0 .003-.048l.407-14.624.403-13.104.538-11.651a.61 2.196 0 0 0 .002-.036l.405-9.721.4-7.702.382-5.498.48-3.038zm408.792 0 .02.095.48 3.038.382 5.498.4 7.702.405 9.721a.61 2.196 0 0 0 .001.036l.539 11.651.403 13.105.407 14.623a.61 2.196 0 0 0 .001.048l.539 16.065.406 17.03.405 18.537.407 19.026a.61 2.196 0 0 0 .001.048l.54 19.978.405 19.979.18 9.114-.18 9.113-.404 19.979-.54 19.979a.61 2.196 0 0 0-.002.047l-.407 19.026-.405 18.531-.406 17.036-.539 16.065a.61 2.196 0 0 0-.001.048l-.407 14.624-.403 13.104-.539 11.651a.61 2.196 0 0 0-.001.036l-.405 9.721-.4 7.702-.382 5.498-.48 3.038-.02.096-.142-.846-.506-4.557-.391-6.124-.402-8.196-.405-10.692a.61 2.196 0 0 0-.003-.066l-.539-11.651-.403-13.587-.406-14.636a.61 2.196 0 0 0-.002-.042l-.54-16.065-.405-17.524-.407-18.05-.406-18.536a.61 2.196 0 0 0 0-.054l-.54-19.002-.407-19.49-.132-6.177.132-6.177.407-19.49.54-19.002a.61 2.196 0 0 0 0-.054l.406-18.537.407-18.049.405-17.524.54-16.065a.61 2.196 0 0 0 .002-.042l.406-14.636.403-13.593.539-11.645a.61 2.196 0 0 0 .003-.066l.405-10.692.402-8.196.391-6.124.506-4.557zm-395.6 9.215.34 1.84.372 4.486.4 6.7.403 8.257a.61 2.196 0 0 0 .002.03l.539 10.18.403 11.628.405 13.152.406 14.141a.61 2.196 0 0 0 0 .048l.54 15.576.405 16.548.407 17.078a.61 2.196 0 0 0 .002.047l.54 18.025.405 18.025.406 18.537a.61 2.196 0 0 0 0 .006l.04 1.776-.04 1.775a.61 2.196 0 0 0 0 .006l-.406 18.537-.405 18.025-.54 18.025a.61 2.196 0 0 0-.002.047l-.407 17.078-.404 16.548-.54 15.576a.61 2.196 0 0 0 0 .048l-.407 14.141-.405 13.152-.403 11.628-.539 10.18a.61 2.196 0 0 0-.002.024l-.403 8.256-.4 6.707-.372 4.486-.34 1.84-.016-.041-.42-2.264-.375-4.968-.4-6.725-.405-8.732a.61 2.196 0 0 0-.002-.03l-.537-10.67-.403-12.121-.406-13.64-.405-14.636a.61 2.196 0 0 0-.003-.036l-.54-16.554-.405-17.042-.407-18.048a.61 2.196 0 0 0-.002-.054l-.54-18.508-.405-19.49-.267-12.52.267-12.522.405-19.49.54-18.507a.61 2.196 0 0 0 .002-.054l.407-18.049.405-17.042.54-16.553a.61 2.196 0 0 0 .003-.042l.405-14.63.406-13.64.403-12.122.537-10.669a.61 2.196 0 0 0 .002-.03l.405-8.733.4-6.725.375-4.967.42-2.264zm382.408 0 .017.041.42 2.264.374 4.968.4 6.725.405 8.732a.61 2.196 0 0 0 0 .03l.539 10.67.403 12.121.406 13.64.405 14.63a.61 2.196 0 0 0 .002.042l.54 16.554.405 17.042.406 18.048a.61 2.196 0 0 0 .002.054l.54 18.507.405 19.49.268 12.522-.268 12.52-.405 19.49-.54 18.508a.61 2.196 0 0 0-.002.054l-.406 18.049-.405 17.042-.54 16.553a.61 2.196 0 0 0-.002.036l-.405 14.635-.406 13.641-.403 12.122-.539 10.668a.61 2.196 0 0 0 0 .031l-.405 8.732-.4 6.726-.375 4.967-.42 2.264-.016.042-.34-1.841-.372-4.485-.4-6.708-.403-8.255a.61 2.196 0 0 0-.003-.025l-.54-10.18-.402-11.627-.405-13.153-.406-14.14a.61 2.196 0 0 0 0-.048l-.54-15.577-.406-16.548-.406-17.077a.61 2.196 0 0 0-.002-.048l-.54-18.025-.405-18.025-.406-18.537a.61 2.196 0 0 0 0-.006l-.04-1.775.04-1.775a.61 2.196 0 0 0 0-.006l.406-18.537.405-18.025.54-18.025a.61 2.196 0 0 0 .002-.048l.406-17.078.405-16.547.54-15.577a.61 2.196 0 0 0 0-.047l.407-14.142.405-13.152.403-11.627.539-10.18a.61 2.196 0 0 0 .003-.03l.403-8.257.4-6.701.372-4.485zm-369.231 9.775.428 2.317.373 4.48.398 6.706.404 8.256a.61 2.196 0 0 0 .002.03l.538 10.18.403 11.146.405 12.67a.61 2.196 0 0 0 .002.047l.54 14.112.405 14.587.407 16.095.405 16.101a.61 2.196 0 0 0 .002.054l.54 17.048.406 17.048.356 15.428-.356 15.427-.406 17.048-.54 17.048a.61 2.196 0 0 0-.002.048l-.405 16.107-.407 16.089-.405 14.594-.54 14.105a.61 2.196 0 0 0-.002.054l-.405 12.67-.403 11.145-.538 10.18a.61 2.196 0 0 0-.002.03l-.404 8.256-.398 6.707-.373 4.48-.428 2.317-.233-1.412-.506-4.092-.388-5.594-.401-8.22a.61 2.196 0 0 0-.005-.071l-.537-9.191-.404-11.121-.404-12.658-.405-14.136a.61 2.196 0 0 0-.002-.059l-.54-15.082-.405-16.06-.407-17.071-.406-17.56a.61 2.196 0 0 0 0-.054l-.542-18.025-.357-15.898.357-15.899.542-18.025a.61 2.196 0 0 0 0-.053l.406-17.567.407-17.066.405-16.059.54-15.082a.61 2.196 0 0 0 .002-.06l.405-14.135.404-12.658.404-11.12.537-9.192a.61 2.196 0 0 0 .005-.071l.401-8.22.388-5.594.506-4.098zm356.054 0 .233 1.405.506 4.099.386 5.593.404 8.22a.61 2.196 0 0 0 .003.071l.537 9.192.403 11.12.405 12.659.405 14.135a.61 2.196 0 0 0 .001.06l.54 15.082.405 16.059.407 17.066.406 17.566a.61 2.196 0 0 0 0 .054l.542 18.024.357 15.899-.357 15.898-.542 18.025a.61 2.196 0 0 0 0 .054l-.406 17.56-.407 17.072-.404 16.059-.54 15.082a.61 2.196 0 0 0-.002.06l-.405 14.135-.405 12.658-.403 11.12-.537 9.192a.61 2.196 0 0 0-.003.071l-.404 8.22-.386 5.594-.506 4.092-.233 1.412-.428-2.317-.373-4.48-.398-6.707-.403-8.256a.61 2.196 0 0 0-.004-.03l-.538-10.18-.404-11.145-.404-12.67a.61 2.196 0 0 0-.002-.054l-.54-14.105-.405-14.594-.407-16.089-.404-16.107a.61 2.196 0 0 0-.002-.047l-.54-17.048-.407-17.048-.355-15.428.355-15.428.407-17.048.54-17.048a.61 2.196 0 0 0 .002-.054l.404-16.1.407-16.095.405-14.588.54-14.112a.61 2.196 0 0 0 .002-.047l.404-12.67.404-11.145.538-10.18a.61 2.196 0 0 0 .004-.03l.403-8.256.398-6.708.373-4.48zm-342.89 9.107.185.5.327 2.759.39 4.676.4 6.748a.61 2.196 0 0 0 .002.042l.536 8.208.401 9.65.405 11.187.407 12.193a.61 2.196 0 0 0 .002.06l.54 13.122.403 14.1.406 15.118.407 15.606a.61 2.196 0 0 0 .002.06l.54 16.07.405 16.554a.61 2.196 0 0 0 0 .006l.266 10.538-.266 10.537a.61 2.196 0 0 0 0 .006l-.405 16.554-.54 16.065a.61 2.196 0 0 0-.002.06l-.407 15.612-.406 15.118-.403 14.093-.54 13.129a.61 2.196 0 0 0-.002.06l-.407 12.193-.405 11.186-.401 9.65-.536 8.208a.61 2.196 0 0 0-.003.042l-.4 6.749-.39 4.676-.326 2.758-.186.5-.153-.738-.49-3.533-.384-5.087-.4-7.213-.405-8.745a.61 2.196 0 0 0-.005-.053l-.537-10.18-.403-11.14-.405-13.146-.406-14.147a.61 2.196 0 0 0-.002-.053l-.54-15.089-.405-15.57-.407-16.584a.61 2.196 0 0 0-.002-.06l-.54-17.047-.405-17.042-.041-1.77.041-1.769.405-17.042.54-17.048a.61 2.196 0 0 0 .002-.06l.407-16.583.404-15.57.54-15.089a.61 2.196 0 0 0 .003-.053l.406-14.147.405-13.147.403-11.139.537-10.18a.61 2.196 0 0 0 .005-.053l.405-8.745.4-7.213.385-5.087.489-3.533zm329.727 0 .153.739.49 3.532.384 5.087.4 7.214.405 8.744a.61 2.196 0 0 0 .002.054l.538 10.18.404 11.139.404 13.146.407 14.147a.61 2.196 0 0 0 .002.054l.54 15.088.405 15.571.406 16.583a.61 2.196 0 0 0 .002.06l.54 17.048.405 17.042.041 1.769-.041 1.769-.405 17.042-.54 17.048a.61 2.196 0 0 0-.002.06l-.406 16.583-.405 15.57-.54 15.089a.61 2.196 0 0 0-.002.054l-.407 14.147-.404 13.146-.404 11.139-.538 10.18a.61 2.196 0 0 0-.002.054l-.405 8.744-.4 7.214-.385 5.087-.489 3.532-.153.738-.185-.5-.327-2.758-.39-4.676-.4-6.749a.61 2.196 0 0 0-.005-.041l-.536-8.209-.401-9.65-.405-11.186-.406-12.193a.61 2.196 0 0 0-.002-.06l-.54-13.128-.403-14.094-.407-15.118-.406-15.612a.61 2.196 0 0 0-.002-.06l-.54-16.065-.405-16.553a.61 2.196 0 0 0 0-.006l-.266-10.538.266-10.537a.61 2.196 0 0 0 0-.006l.405-16.554.54-16.07a.61 2.196 0 0 0 .002-.06l.406-15.607.407-15.118.403-14.1.54-13.122a.61 2.196 0 0 0 .002-.06l.406-12.193.405-11.186.401-9.65.536-8.208a.61 2.196 0 0 0 .005-.042l.4-6.749.39-4.676.327-2.758zm-316.528 9.275.232.834.343 2.883.392 5.182.403 6.302a.61 2.196 0 0 0 0 .006l.537 8.22.402 9.168.404 10.71a.61 2.196 0 0 0 .003.065l.54 11.652.402 13.11.407 13.653.404 14.147a.61 2.196 0 0 0 .003.066l.54 14.6.406 15.088.404 15.606a.61 2.196 0 0 0 0 .012l.179 6.618-.179 6.618a.61 2.196 0 0 0 0 .006l-.404 15.612-.405 15.089-.54 14.6a.61 2.196 0 0 0-.004.059l-.404 14.147-.407 13.659-.403 13.11-.539 11.652a.61 2.196 0 0 0-.003.065l-.404 10.71-.402 9.168-.537 8.22a.61 2.196 0 0 0 0 .006l-.403 6.302-.392 5.182-.343 2.883-.232.834-.109-.393-.35-2.526-.514-4.64-.393-6.135-.403-7.762a.61 2.196 0 0 0-.005-.047l-.537-9.191-.402-10.64-.406-12.18-.405-12.682a.61 2.196 0 0 0-.002-.048l-.54-14.111-.405-14.588-.406-15.607-.405-16.1a.61 2.196 0 0 0-.002-.066l-.54-16.071-.131-5.135.13-5.134.54-16.071a.61 2.196 0 0 0 .003-.066l.405-16.1.406-15.607.405-14.588.54-14.112a.61 2.196 0 0 0 .002-.047l.405-12.682.406-12.181.402-10.639.537-9.191a.61 2.196 0 0 0 .005-.048l.403-7.767.393-6.13.514-4.64.35-2.525zm303.328 0 .109.393.35 2.526.514 4.64.393 6.13.403 7.767a.61 2.196 0 0 0 .004.047l.537 9.192.401 10.638.407 12.181.405 12.682a.61 2.196 0 0 0 .001.048l.54 14.111.405 14.588.407 15.607.405 16.1a.61 2.196 0 0 0 .001.066l.54 16.071.131 5.135-.13 5.134-.54 16.071a.61 2.196 0 0 0-.002.066l-.405 16.1-.407 15.607-.404 14.588-.54 14.112a.61 2.196 0 0 0-.002.047l-.405 12.682-.407 12.181-.401 10.639-.537 9.191a.61 2.196 0 0 0-.004.048l-.403 7.761-.393 6.136-.514 4.64-.35 2.525-.11.394-.23-.834-.344-2.883-.392-5.183-.403-6.302a.61 2.196 0 0 0 0-.006l-.537-8.22-.401-9.167-.405-10.71a.61 2.196 0 0 0-.005-.066l-.539-11.651-.403-13.11-.406-13.66-.405-14.147a.61 2.196 0 0 0-.004-.06l-.54-14.599-.405-15.088-.404-15.613a.61 2.196 0 0 0 0-.006l-.179-6.617.179-6.618a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.404-15.607.405-15.088.54-14.6a.61 2.196 0 0 0 .004-.065l.405-14.147.406-13.653.403-13.11.539-11.652a.61 2.196 0 0 0 .005-.065l.405-10.71.401-9.168.537-8.22a.61 2.196 0 0 0 0-.006l.403-6.302.392-5.183.343-2.883zm-290.18 8.846.338 1.22.352 3.39.4 4.795.532 6.72.398 7.677.405 9.221.405 10.234a.61 2.196 0 0 0 .003.065l.538 11.163.405 12.134.405 13.164.406 13.659a.61 2.196 0 0 0 .002.077l.54 13.617.406 14.594a.61 2.196 0 0 0 0 .006l.406 14.147a.61 2.196 0 0 0 .002.066l.116 3.127-.116 3.127a.61 2.196 0 0 0-.002.06l-.406 14.153a.61 2.196 0 0 0 0 .006l-.405 14.594-.54 13.616a.61 2.196 0 0 0-.003.078l-.406 13.659-.405 13.164-.405 12.128-.538 11.168a.61 2.196 0 0 0-.003.066l-.405 10.233-.405 9.221-.398 7.679-.532 6.719-.4 4.795-.352 3.39-.339 1.22-.04-.095-.315-1.9-.509-4.116-.388-5.135-.4-7.22-.405-8.273a.61 2.196 0 0 0-.005-.048l-.537-9.685-.403-11.145-.404-11.687-.407-13.164a.61 2.196 0 0 0-.002-.066l-.54-13.617-.405-14.594-.405-14.641a.61 2.196 0 0 0-.002-.054l-.54-15.583-.217-8.053.217-8.053.54-15.583a.61 2.196 0 0 0 .002-.054l.405-14.641.405-14.594.54-13.617a.61 2.196 0 0 0 .002-.066l.407-13.164.404-11.687.403-11.145.537-9.685a.61 2.196 0 0 0 .005-.048l.405-8.274.4-7.22.388-5.134.51-4.116.315-1.9zm277.033 0 .04.095.315 1.9.507 4.116.39 5.135.4 7.22.405 8.273a.61 2.196 0 0 0 .003.048l.537 9.685.403 11.145.405 11.687.407 13.164a.61 2.196 0 0 0 .001.066l.54 13.617.405 14.594.405 14.641a.61 2.196 0 0 0 .002.054l.54 15.582.217 8.054-.217 8.053-.54 15.583a.61 2.196 0 0 0-.002.054l-.405 14.641-.404 14.594-.54 13.617a.61 2.196 0 0 0-.002.065l-.407 13.165-.405 11.687-.403 11.145-.537 9.685a.61 2.196 0 0 0-.003.048l-.405 8.274-.4 7.219-.39 5.135-.507 4.116-.316 1.9-.04.095-.338-1.221-.352-3.39-.4-4.794-.532-6.72-.4-7.678-.403-9.22-.405-10.234a.61 2.196 0 0 0-.005-.066l-.538-11.168-.405-12.128-.405-13.165-.406-13.658a.61 2.196 0 0 0-.002-.078l-.54-13.617-.405-14.593a.61 2.196 0 0 0 0-.006l-.407-14.154a.61 2.196 0 0 0-.001-.059l-.116-3.127.116-3.127a.61 2.196 0 0 0 .001-.066l.407-14.147a.61 2.196 0 0 0 0-.006l.405-14.594.54-13.617a.61 2.196 0 0 0 .002-.077l.406-13.659.405-13.164.405-12.134.538-11.163a.61 2.196 0 0 0 .005-.065l.405-10.234.403-9.22.4-7.679.532-6.719.4-4.795.352-3.39zm-263.81 8.392.066.12.294 1.763.373 3.139.395 5.224a.61 2.196 0 0 0 .005.066l.532 6.224.398 7.666.405 8.763a.61 2.196 0 0 0 .003.065l.537 9.686.403 11.145.407 11.705.406 12.193a.61 2.196 0 0 0 .002.071l.54 12.64.405 13.123.405 13.659.4 13.432-.4 13.426-.405 13.659-.405 13.128-.54 12.64a.61 2.196 0 0 0-.002.072l-.406 12.193-.407 11.705-.403 11.139-.537 9.692a.61 2.196 0 0 0-.003.065l-.405 8.762-.398 7.667-.532 6.224a.61 2.196 0 0 0-.005.066l-.395 5.224-.373 3.133-.294 1.769-.066.12-.025-.06-.301-1.442-.373-3.15-.52-4.683-.394-6.636-.405-7.302a.61 2.196 0 0 0-.003-.025l-.539-9.209-.401-9.673-.405-11.193-.406-12.187a.61 2.196 0 0 0-.003-.072l-.539-12.64-.405-13.122-.405-14.142-.406-14.153a.61 2.196 0 0 0-.002-.065l-.405-10.93.405-10.931a.61 2.196 0 0 0 .002-.066l.406-14.153.405-14.14.405-13.123.539-12.64a.61 2.196 0 0 0 .003-.072l.406-12.193.405-11.187.401-9.68.54-9.202a.61 2.196 0 0 0 .002-.025l.405-7.303.393-6.635.52-4.682.374-3.151.3-1.442zm250.587 0 .024.06.3 1.441.375 3.151.518 4.682.395 6.636.405 7.303a.61 2.196 0 0 0 .002.024l.538 9.203.402 9.68.405 11.187.406 12.193a.61 2.196 0 0 0 .002.071l.54 12.64.405 13.123.405 14.141.406 14.153a.61 2.196 0 0 0 .002.066l.405 10.93-.405 10.93a.61 2.196 0 0 0-.002.066l-.406 14.153-.405 14.141-.405 13.123-.54 12.64a.61 2.196 0 0 0-.002.071l-.406 12.188-.405 11.192-.402 9.674-.538 9.209a.61 2.196 0 0 0-.002.024l-.405 7.303-.395 6.636-.518 4.682-.375 3.15-.3 1.442-.024.06-.066-.12-.294-1.769-.374-3.133-.395-5.224a.61 2.196 0 0 0-.007-.065l-.532-6.225-.398-7.666-.405-8.762a.61 2.196 0 0 0-.003-.066l-.539-9.691-.403-11.14-.405-11.704-.406-12.194a.61 2.196 0 0 0-.002-.071l-.54-12.64-.405-13.129-.405-13.658-.4-13.427.4-13.432.405-13.659.405-13.122.54-12.64a.61 2.196 0 0 0 .002-.072L-78.34 339l.405-11.705.403-11.145.54-9.685a.61 2.196 0 0 0 .002-.066l.405-8.762.398-7.666.532-6.225a.61 2.196 0 0 0 .007-.065l.395-5.224.374-3.14.294-1.763zM-312 281.445l.225.405.285 1.722.387 3.717a.61 2.196 0 0 0 .005.041l.524 4.724.393 6.147.402 7.256.404 8.744a.61 2.196 0 0 0 .003.071l.54 9.698.402 10.174.405 11.204.406 11.705a.61 2.196 0 0 0 .003.078l.54 12.157.404 12.146.406 13.164a.61 2.196 0 0 0 .003.095l.402 9.424-.402 9.423a.61 2.196 0 0 0-.003.095l-.406 13.165-.405 12.145-.539 12.158a.61 2.196 0 0 0-.003.071l-.406 11.711-.405 11.205-.403 10.168-.539 9.703a.61 2.196 0 0 0-.003.071l-.404 8.745-.402 7.255-.393 6.147-.524 4.724a.61 2.196 0 0 0-.005.042l-.387 3.717-.285 1.721-.225.405-.179-.864-.375-2.704-.513-4.17-.392-5.635-.402-6.76-.403-8.256a.61 2.196 0 0 0-.007-.072l-.537-9.203-.403-9.68-.405-11.198a.61 2.196 0 0 0-.003-.065l-.538-12.158-.405-12.146-.407-13.164-.404-13.176a.61 2.196 0 0 0-.003-.066l-.529-13.354.529-13.355a.61 2.196 0 0 0 .003-.066l.404-13.176.407-13.164.405-12.146.538-12.157a.61 2.196 0 0 0 .003-.066l.405-11.199.403-9.68.537-9.208a.61 2.196 0 0 0 .007-.066l.403-8.256.402-6.76.392-5.635.513-4.17.375-2.704zm224.372 0 .179.864.375 2.704.514 4.17.391 5.635.402 6.76.403 8.257a.61 2.196 0 0 0 .005.065l.537 9.21.403 9.679.405 11.198a.61 2.196 0 0 0 .003.066l.539 12.157.405 12.146.404 13.164.407 13.176a.61 2.196 0 0 0 .003.066l.527 13.355-.527 13.355a.61 2.196 0 0 0-.003.065l-.407 13.176-.404 13.165-.405 12.145-.539 12.158a.61 2.196 0 0 0-.003.065l-.405 11.199-.403 9.68-.537 9.203a.61 2.196 0 0 0-.005.071l-.403 8.256-.402 6.76-.391 5.636-.514 4.17-.375 2.704-.179.863-.224-.405-.286-1.721-.387-3.717a.61 2.196 0 0 0-.007-.042l-.523-4.723-.394-6.148-.403-7.255-.403-8.744a.61 2.196 0 0 0-.003-.072l-.539-9.703-.403-10.168-.405-11.205-.406-11.71a.61 2.196 0 0 0-.004-.072l-.538-12.157-.405-12.146-.407-13.164a.61 2.196 0 0 0-.003-.096l-.402-9.423.402-9.423a.61 2.196 0 0 0 .003-.096l.407-13.164.405-12.146.538-12.157a.61 2.196 0 0 0 .004-.078l.406-11.704.405-11.205.403-10.174.539-9.697a.61 2.196 0 0 0 .003-.072l.403-8.744.403-7.255.394-6.148.523-4.723a.61 2.196 0 0 0 .007-.042l.387-3.717.286-1.722zm-211.215 7.267h.172l.119.286.319 2.3.394 3.794a.61 2.196 0 0 0 .005.047l.524 4.724.393 6.147.404 7.273.406 7.798a.61 2.196 0 0 0 .002.047l.537 9.197.405 10.18.405 10.246a.61 2.196 0 0 0 .003.065l.538 11.169.405 11.657.405 12.194a.61 2.196 0 0 0 .002.012l.405 11.71a.61 2.196 0 0 0 .003.072l.287 6.487-.287 6.487a.61 2.196 0 0 0-.003.07l-.405 11.712a.61 2.196 0 0 0-.002.012l-.405 12.193-.405 11.657-.538 11.17a.61 2.196 0 0 0-.003.065l-.405 10.245-.405 10.18-.537 9.197a.61 2.196 0 0 0-.002.048l-.406 7.797-.404 7.273-.393 6.148-.524 4.723a.61 2.196 0 0 0-.005.048l-.394 3.794-.32 2.3-.118.285h-.172l-.12-.286-.325-2.346-.391-3.3-.524-5.183-.395-6.183-.405-7.285a.61 2.196 0 0 0-.003-.047l-.538-8.715-.402-9.191-.405-10.216-.404-11.21a.61 2.196 0 0 0-.005-.078l-.539-11.669-.405-11.657-.405-12.676-.406-12.688a.61 2.196 0 0 0-.003-.083l-.11-2.591.11-2.597a.61 2.196 0 0 0 .003-.078l.406-12.687.405-12.676.405-11.657.539-11.67a.61 2.196 0 0 0 .005-.077l.404-11.21.405-10.216.402-9.191.538-8.715a.61 2.196 0 0 0 .003-.047l.405-7.285.395-6.183.524-5.183.391-3.3.326-2.347zm197.886 0h.172l.12.286.325 2.347.391 3.3.524 5.182.395 6.183.405 7.285a.61 2.196 0 0 0 .002.048l.538 8.715.402 9.19.404 10.216.407 11.21a.61 2.196 0 0 0 .003.078l.539 11.67.405 11.657.405 12.675.406 12.688a.61 2.196 0 0 0 .003.078l.111 2.597-.11 2.59a.61 2.196 0 0 0-.004.084l-.406 12.688-.405 12.676-.405 11.657-.539 11.669a.61 2.196 0 0 0-.003.078l-.407 11.21-.404 10.216-.402 9.19-.538 8.715a.61 2.196 0 0 0-.002.048l-.405 7.285-.395 6.183-.524 5.182-.391 3.3-.326 2.347-.119.286h-.172l-.118-.286-.32-2.299-.394-3.794a.61 2.196 0 0 0-.007-.048l-.524-4.724-.393-6.147-.403-7.273-.407-7.797a.61 2.196 0 0 0-.002-.048l-.538-9.197-.404-10.18-.404-10.245a.61 2.196 0 0 0-.003-.066l-.54-11.169-.404-11.657-.405-12.193a.61 2.196 0 0 0-.002-.012l-.405-11.711a.61 2.196 0 0 0-.003-.072l-.287-6.486.287-6.487a.61 2.196 0 0 0 .003-.072l.405-11.71a.61 2.196 0 0 0 .002-.013l.405-12.193.405-11.657.539-11.169a.61 2.196 0 0 0 .003-.065l.404-10.246.404-10.18.538-9.197a.61 2.196 0 0 0 .002-.048l.407-7.797.403-7.273.393-6.147.524-4.724a.61 2.196 0 0 0 .007-.047l.395-3.795.319-2.3zm-184.622 6.344h.104l.159.566.362 2.61.517 3.734.385 4.634.401 6.255.405 6.814a.61 2.196 0 0 0 .005.072l.536 7.713.401 9.18.405 9.25.405 10.234a.61 2.196 0 0 0 .005.083l.538 10.68.403 11.17.407 11.222a.61 2.196 0 0 0 .003.095l.54 11.169.124 3.58-.124 3.58-.54 11.168a.61 2.196 0 0 0-.003.095l-.407 11.223-.403 11.169-.538 10.68a.61 2.196 0 0 0-.005.083l-.405 10.234-.405 9.25-.401 9.18-.536 7.714a.61 2.196 0 0 0-.005.07l-.405 6.815-.401 6.255-.385 4.634-.517 3.735-.362 2.609-.159.566h-.104l-.165-.4-.3-1.44-.377-3.17a.61 2.196 0 0 0-.005-.03l-.52-4.217-.39-5.636-.404-6.766-.405-7.78a.61 2.196 0 0 0-.003-.071l-.537-8.709-.403-9.68-.405-10.239a.61 2.196 0 0 0-.003-.077l-.538-10.687-.405-11.162-.405-11.7-.406-12.193a.61 2.196 0 0 0-.003-.083l-.223-5.022.223-5.021a.61 2.196 0 0 0 .003-.084l.406-12.193.405-11.705.405-11.163.538-10.68a.61 2.196 0 0 0 .003-.083l.405-10.24.403-9.673.537-8.709a.61 2.196 0 0 0 .003-.071l.405-7.78.403-6.767.39-5.635.52-4.217a.61 2.196 0 0 0 .006-.03l.376-3.17.301-1.44zm171.426 0h.104l.165.4.3 1.44.378 3.17a.61 2.196 0 0 0 .003.03l.52 4.218.39 5.635.403 6.766.405 7.78a.61 2.196 0 0 0 .003.071l.537 8.709.403 9.673.405 10.24a.61 2.196 0 0 0 .003.083l.539 10.68.404 11.163.405 11.705.407 12.193a.61 2.196 0 0 0 .003.084l.223 5.021-.223 5.022a.61 2.196 0 0 0-.003.084l-.407 12.193-.405 11.699-.404 11.163-.54 10.686a.61 2.196 0 0 0-.002.077l-.405 10.24-.403 9.68-.537 8.708a.61 2.196 0 0 0-.003.072l-.405 7.779-.403 6.767-.39 5.635-.52 4.217a.61 2.196 0 0 0-.003.03l-.377 3.17-.3 1.441-.166.4h-.104l-.159-.567-.362-2.609-.517-3.735-.385-4.634-.401-6.254-.405-6.815a.61 2.196 0 0 0-.007-.071l-.535-7.714-.402-9.18-.405-9.25-.406-10.234a.61 2.196 0 0 0-.003-.083l-.539-10.68-.403-11.169-.406-11.222a.61 2.196 0 0 0-.003-.096l-.54-11.168-.125-3.58.124-3.58.54-11.169a.61 2.196 0 0 0 .004-.095l.406-11.223.403-11.168.539-10.68a.61 2.196 0 0 0 .003-.084l.406-10.233.405-9.251.402-9.18.535-7.713a.61 2.196 0 0 0 .007-.072l.405-6.814.401-6.255.385-4.634.517-3.735.362-2.609zm-158.234 5.456.1.12.235.846.362 2.609.514 3.71.388 5.135.403 5.796.404 6.797a.61 2.196 0 0 0 .005.071l.537 7.732.4 8.202.406 9.25a.61 2.196 0 0 0 .003.09l.539 9.698.403 10.18.406 10.733.407 10.734a.61 2.196 0 0 0 .003.078l.538 11.187.025.637-.025.637-.538 11.187a.61 2.196 0 0 0-.003.077l-.407 10.734-.406 10.728-.403 10.18-.54 9.704a.61 2.196 0 0 0-.002.089l-.407 9.25-.4 8.197-.536 7.738a.61 2.196 0 0 0-.005.071l-.404 6.797-.403 5.796-.388 5.134-.514 3.711-.362 2.61-.234.84-.101.124-.16-.143-.243-1.173-.375-2.705-.517-4.193-.394-5.182-.4-5.784-.403-7.268a.61 2.196 0 0 0-.007-.07l-.537-8.227-.401-8.697-.405-9.733-.406-10.24a.61 2.196 0 0 0-.003-.083l-.54-10.686-.404-10.68-.405-11.21-.26-7.53.26-7.53.405-11.21.405-10.68.539-10.686a.61 2.196 0 0 0 .003-.084l.406-10.24.405-9.732.401-8.697.537-8.226a.61 2.196 0 0 0 .007-.072l.403-7.267.4-5.784.394-5.182.517-4.193.375-2.705.243-1.173zm145.146 0 .16.144.243 1.173.375 2.704.518 4.194.393 5.182.4 5.784.403 7.267a.61 2.196 0 0 0 .005.072l.537 8.226.401 8.697.405 9.733.407 10.24a.61 2.196 0 0 0 .003.082l.538 10.687.405 10.68.405 11.21.26 7.53-.26 7.529-.405 11.21-.405 10.68-.538 10.687a.61 2.196 0 0 0-.003.083l-.407 10.24-.405 9.733-.401 8.697-.537 8.226a.61 2.196 0 0 0-.005.071l-.403 7.267-.4 5.784-.393 5.183-.518 4.193-.375 2.704-.242 1.174-.16.143-.1-.12-.236-.845-.362-2.61-.514-3.71-.388-5.135-.403-5.796-.403-6.796a.61 2.196 0 0 0-.007-.072l-.537-7.737-.4-8.197-.407-9.25a.61 2.196 0 0 0-.003-.09l-.538-9.703-.403-10.18-.407-10.728-.406-10.734a.61 2.196 0 0 0-.003-.078l-.539-11.186-.025-.637.025-.638.539-11.186a.61 2.196 0 0 0 .003-.078l.406-10.734.407-10.734.403-10.18.538-9.697a.61 2.196 0 0 0 .003-.09l.407-9.25.4-8.203.537-7.731a.61 2.196 0 0 0 .007-.072l.403-6.796.403-5.796.388-5.135.514-3.71.362-2.61.236-.846zm-131.882 4.879.057.071.282 1.353.492 2.668.375 3.598.397 4.76.402 5.807a.61 2.196 0 0 0 .007.072l.533 6.73.4 7.697.405 8.274.405 8.774a.61 2.196 0 0 0 .003.065l.538 9.71.405 9.697.405 10.24.406 10.251a.61 2.196 0 0 0 .005.095l.468 8.864-.468 8.857a.61 2.196 0 0 0-.005.101l-.406 10.252-.405 10.24-.405 9.697-.538 9.71a.61 2.196 0 0 0-.003.065l-.405 8.774-.405 8.274-.4 7.696-.533 6.73a.61 2.196 0 0 0-.007.072l-.402 5.808-.397 4.76-.375 3.597-.492 2.669-.282 1.352-.057.071-.206-.184-.233-.846-.339-2.037-.387-3.717a.61 2.196 0 0 0-.007-.042l-.528-4.765-.393-5.188-.4-6.743-.405-7.78a.61 2.196 0 0 0-.007-.101l-.535-8.22-.404-8.697-.404-9.74a.61 2.196 0 0 0-.003-.088l-.54-10.198-.404-10.186-.406-10.728-.357-9.465.357-9.465.406-10.728.403-10.186.54-10.198a.61 2.196 0 0 0 .004-.09l.404-9.739.404-8.696.535-8.22a.61 2.196 0 0 0 .007-.102l.405-7.78.4-6.742.393-5.189.528-4.765a.61 2.196 0 0 0 .007-.042l.387-3.717.339-2.037.233-.846zm118.618 0 .206.185.233.845.34 2.038.386 3.717a.61 2.196 0 0 0 .005.041l.528 4.766.394 5.188.4 6.743.404 7.78a.61 2.196 0 0 0 .007.1l.536 8.22.403 8.697.405 9.74a.61 2.196 0 0 0 .003.089l.54 10.198.403 10.186.407 10.728.356 9.465-.356 9.465-.407 10.728-.403 10.186-.54 10.198a.61 2.196 0 0 0-.003.089l-.405 9.739-.403 8.697-.536 8.22a.61 2.196 0 0 0-.007.101l-.404 7.78-.4 6.743-.394 5.188-.528 4.765a.61 2.196 0 0 0-.005.042l-.387 3.717-.339 2.037-.233.846-.206.184-.058-.071-.28-1.352-.493-2.669-.375-3.598-.397-4.759-.401-5.808a.61 2.196 0 0 0-.01-.071l-.533-6.731-.4-7.696-.405-8.274-.404-8.774a.61 2.196 0 0 0-.005-.066l-.537-9.709-.405-9.697-.405-10.24-.406-10.251a.61 2.196 0 0 0-.005-.102l-.468-8.857.468-8.864a.61 2.196 0 0 0 .005-.095l.406-10.251.405-10.24.405-9.697.537-9.71a.61 2.196 0 0 0 .005-.065l.404-8.774.405-8.274.4-7.696.534-6.731a.61 2.196 0 0 0 .009-.072l.401-5.808.397-4.759.375-3.598.492-2.668.281-1.352zm-105.532 3.818h.018l.166.393.333 1.603.494 2.668.374 3.598.396 4.76.403 5.807a.61 2.196 0 0 0 .005.072l.534 6.743.4 7.207.405 8.274a.61 2.196 0 0 0 .005.095l.538 8.715.404 9.203.404 9.257.405 10.233a.61 2.196 0 0 0 .007.12l.539 9.697.256 6.463-.256 6.463-.539 9.697a.61 2.196 0 0 0-.007.12l-.405 10.233-.404 9.257-.404 9.203-.538 8.714a.61 2.196 0 0 0-.005.096l-.405 8.273-.4 7.208-.534 6.743a.61 2.196 0 0 0-.005.071l-.403 5.808-.396 4.76-.374 3.597-.494 2.669-.333 1.596-.166.4h-.018l-.284-.763-.324-1.948-.388-3.276a.61 2.196 0 0 0-.016-.12l-.514-3.704-.387-5.117-.401-6.273-.405-7.285a.61 2.196 0 0 0-.01-.1l-.535-7.738-.401-8.197-.405-9.245-.406-9.75a.61 2.196 0 0 0-.005-.108l-.537-9.698-.405-10.18-.405-10.727a.61 2.196 0 0 0-.005-.114l-.03-.565.03-.566a.61 2.196 0 0 0 .005-.114l.405-10.728.405-10.18.537-9.703a.61 2.196 0 0 0 .005-.101l.406-9.751.405-9.245.401-8.202.536-7.732a.61 2.196 0 0 0 .009-.101l.405-7.285.401-6.273.387-5.116.514-3.705a.61 2.196 0 0 0 .016-.12l.388-3.282.324-1.942zm92.428 0h.018l.284.763.324 1.942.388 3.282a.61 2.196 0 0 0 .017.119l.513 3.705.387 5.117.402 6.272.404 7.285a.61 2.196 0 0 0 .007.101l.536 7.732.401 8.202.405 9.245.406 9.751a.61 2.196 0 0 0 .005.101l.537 9.704.404 10.18.406 10.728a.61 2.196 0 0 0 .005.113l.03.566-.03.566a.61 2.196 0 0 0-.005.113l-.406 10.728-.404 10.18-.537 9.697a.61 2.196 0 0 0-.005.108l-.406 9.75-.405 9.246-.401 8.196-.536 7.738a.61 2.196 0 0 0-.007.1l-.404 7.286-.402 6.272-.387 5.117-.513 3.705a.61 2.196 0 0 0-.017.12l-.388 3.275-.324 1.948-.284.763h-.018l-.165-.4-.334-1.596-.494-2.668-.374-3.598-.396-4.76-.403-5.807a.61 2.196 0 0 0-.007-.072l-.534-6.743-.4-7.207-.405-8.274a.61 2.196 0 0 0-.007-.095l-.537-8.715-.403-9.203-.405-9.257-.404-10.233a.61 2.196 0 0 0-.007-.12l-.539-9.697-.256-6.463.256-6.463.539-9.697a.61 2.196 0 0 0 .007-.12l.404-10.233.405-9.257.403-9.203.537-8.714a.61 2.196 0 0 0 .007-.096l.405-8.273.4-7.208.534-6.743a.61 2.196 0 0 0 .007-.071l.403-5.808.396-4.76.374-3.597.494-2.669.334-1.602zm-79.223 2.925h.078l.167.399.32 1.543.497 3.145.382 3.67.4 4.806a.61 2.196 0 0 0 .007.06l.53 5.742.399 6.701.403 7.28.405 8.267a.61 2.196 0 0 0 .009.125l.535 8.214.403 9.192.405 9.262.406 9.751a.61 2.196 0 0 0 .005.107l.539 9.704.167 4.015-.167 4.014-.539 9.704a.61 2.196 0 0 0-.005.107l-.406 9.75-.405 9.264-.403 9.19-.535 8.215a.61 2.196 0 0 0-.01.125l-.404 8.268-.403 7.279-.399 6.701-.53 5.736a.61 2.196 0 0 0-.007.066l-.4 4.807-.382 3.67-.497 3.144-.32 1.543-.167.4h-.078l-.284-.513-.276-1.328-.372-3.128-.401-3.854a.61 2.196 0 0 0-.007-.047l-.526-4.742-.393-5.67-.403-6.785-.405-7.303a.61 2.196 0 0 0-.005-.071l-.537-8.226-.401-8.703-.407-9.263a.61 2.196 0 0 0-.005-.107l-.537-9.203-.405-10.174a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.404-9.751-.123-3.097.123-3.098.404-9.751a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.405-10.174.537-9.203a.61 2.196 0 0 0 .005-.107l.407-9.263.401-8.702.537-8.227a.61 2.196 0 0 0 .005-.071l.405-7.303.403-6.784.393-5.671.526-4.742a.61 2.196 0 0 0 .007-.047l.401-3.854.372-3.128.276-1.328zm65.958 0h.078l.284.512.276 1.329.372 3.127.401 3.854a.61 2.196 0 0 0 .005.047l.526 4.742.393 5.67.403 6.785.405 7.303a.61 2.196 0 0 0 .005.072l.537 8.226.402 8.702.406 9.263a.61 2.196 0 0 0 .005.107l.537 9.203.405 10.174a.61 2.196 0 0 0 0 .019l.405 9.75.122 3.098-.122 3.098-.405 9.75a.61 2.196 0 0 0 0 .019l-.405 10.174-.537 9.203a.61 2.196 0 0 0-.005.107l-.406 9.263-.402 8.702-.537 8.226a.61 2.196 0 0 0-.005.072l-.405 7.303-.403 6.784-.393 5.671-.526 4.742a.61 2.196 0 0 0-.005.047l-.401 3.854-.372 3.127-.276 1.329-.284.512h-.078l-.166-.399-.321-1.543-.497-3.145-.382-3.67-.401-4.806a.61 2.196 0 0 0-.007-.066l-.53-5.736-.4-6.701-.402-7.28-.407-8.267a.61 2.196 0 0 0-.007-.125l-.535-8.215-.403-9.19-.405-9.263-.406-9.751a.61 2.196 0 0 0-.005-.107l-.539-9.704-.167-4.015.167-4.014.539-9.704a.61 2.196 0 0 0 .005-.107l.406-9.751.405-9.263.403-9.19.535-8.215a.61 2.196 0 0 0 .007-.125l.407-8.268.403-7.279.398-6.701.53-5.742a.61 2.196 0 0 0 .008-.06l.401-4.807.382-3.67.497-3.144.32-1.543zm-52.738 1.954h.053l.228.822.459 1.65.349 2.942.395 4.277.404 4.843a.61 2.196 0 0 0 .007.066l.53 5.742.399 6.695.405 7.303a.61 2.196 0 0 0 .007.107l.535 7.72.403 8.697.405 8.774.406 9.263a.61 2.196 0 0 0 .003.089l.54 9.703.404 9.71a.61 2.196 0 0 0 0 .018l.07 1.608-.07 1.609a.61 2.196 0 0 0 0 .018l-.405 9.71-.539 9.703a.61 2.196 0 0 0-.003.09l-.406 9.262-.405 8.774-.403 8.697-.535 7.72a.61 2.196 0 0 0-.007.1l-.405 7.31-.398 6.695-.53 5.742a.61 2.196 0 0 0-.008.066l-.404 4.842-.395 4.277-.349 2.943-.46 1.65-.227.822h-.053l-.175-.209-.37-1.334-.349-2.508-.395-3.794a.61 2.196 0 0 0-.013-.12l-.52-4.217-.392-5.653-.403-6.296-.403-7.285a.61 2.196 0 0 0-.01-.101l-.536-7.732-.402-8.208-.405-8.768-.406-9.263a.61 2.196 0 0 0-.003-.084l-.539-9.709-.405-9.71-.21-5.039.21-5.039.405-9.71.539-9.709a.61 2.196 0 0 0 .003-.083l.406-9.263.405-8.768.402-8.208.537-7.732a.61 2.196 0 0 0 .009-.101l.403-7.291.403-6.29.392-5.653.52-4.217a.61 2.196 0 0 0 .013-.12l.395-3.794.349-2.508.37-1.334zm39.542 0h.053l.175.208.37 1.335.348 2.507.395 3.795a.61 2.196 0 0 0 .013.119l.52 4.217.393 5.653.401 6.29.405 7.291a.61 2.196 0 0 0 .009.102l.537 7.731.401 8.209.405 8.768.405 9.263a.61 2.196 0 0 0 .005.083l.539 9.71.403 9.709.21 5.039-.21 5.04-.403 9.709-.54 9.709a.61 2.196 0 0 0-.004.084l-.405 9.262-.405 8.768-.401 8.209-.537 7.731a.61 2.196 0 0 0-.01.102l-.404 7.285-.401 6.296-.394 5.653-.519 4.217a.61 2.196 0 0 0-.013.12l-.395 3.794-.348 2.507-.37 1.335-.175.208h-.053l-.228-.822-.46-1.65-.348-2.942-.397-4.277-.403-4.843a.61 2.196 0 0 0-.007-.065l-.53-5.743-.398-6.695-.405-7.309a.61 2.196 0 0 0-.007-.101l-.536-7.72-.403-8.697-.405-8.774-.406-9.262a.61 2.196 0 0 0-.003-.09l-.539-9.703-.404-9.71a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l-.072-1.608.072-1.608a.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006.61 2.196 0 0 0 0-.006l.404-9.71.539-9.703a.61 2.196 0 0 0 .003-.09l.406-9.262.405-8.774.403-8.697.536-7.72a.61 2.196 0 0 0 .007-.107l.405-7.303.398-6.695.53-5.742a.61 2.196 0 0 0 .007-.066l.403-4.843.397-4.277.348-2.942.46-1.65zm-26.377 1.096.137.16.26.626.43 1.936.363 3.062.398 4.306a.61 2.196 0 0 0 .007.054l.53 5.26.395 5.712.403 6.779.407 7.303a.61 2.196 0 0 0 .003.071l.538 8.238.402 8.214.405 9.251.406 9.275a.61 2.196 0 0 0 .005.107l.539 9.209.39 9.37-.39 9.37-.539 9.208a.61 2.196 0 0 0-.005.107l-.406 9.275-.405 9.25-.402 8.215-.538 8.238a.61 2.196 0 0 0-.003.071l-.407 7.303-.403 6.779-.395 5.713-.53 5.26a.61 2.196 0 0 0-.007.053l-.398 4.307-.364 3.055-.43 1.942-.259.626-.137.16-.119-.143-.347-.935-.334-2.406-.39-3.276-.398-4.301a.61 2.196 0 0 0-.007-.06l-.528-5.242-.397-6.195-.405-6.814a.61 2.196 0 0 0-.005-.071l-.537-7.744-.401-7.726-.405-8.75-.405-9.263a.61 2.196 0 0 0-.007-.107l-.537-9.21-.403-9.697a.61 2.196 0 0 0-.002-.018l-.304-6.975.304-6.976a.61 2.196 0 0 0 .002-.018l.403-9.697.537-9.21a.61 2.196 0 0 0 .007-.106l.405-9.263.405-8.75.401-7.726.537-7.744a.61 2.196 0 0 0 .005-.071l.405-6.815.397-6.195.528-5.241a.61 2.196 0 0 0 .007-.06l.398-4.3.39-3.277.334-2.406.347-.936zm13.266 0 .12.143.346.935.334 2.406.39 3.277.398 4.3a.61 2.196 0 0 0 .005.06l.529 5.242.396 6.195.405 6.814a.61 2.196 0 0 0 .005.071l.537 7.744.401 7.726.405 8.75.405 9.263a.61 2.196 0 0 0 .007.107l.537 9.209.403 9.697a.61 2.196 0 0 0 .002.019l.304 6.975-.304 6.975a.61 2.196 0 0 0-.002.019l-.403 9.697-.537 9.209a.61 2.196 0 0 0-.007.107l-.405 9.263-.405 8.75-.401 7.726-.537 7.744a.61 2.196 0 0 0-.005.071l-.405 6.815-.396 6.195-.53 5.241a.61 2.196 0 0 0-.004.06l-.398 4.3-.39 3.277-.334 2.406-.347.935-.119.144-.137-.161-.26-.626-.43-1.942-.364-3.055-.397-4.307a.61 2.196 0 0 0-.009-.054l-.53-5.26-.395-5.712-.403-6.779-.407-7.302a.61 2.196 0 0 0-.003-.072l-.538-8.238-.402-8.214-.405-9.25-.406-9.275a.61 2.196 0 0 0-.005-.107l-.539-9.21-.39-9.37.39-9.37.539-9.208a.61 2.196 0 0 0 .005-.107l.406-9.275.405-9.25.402-8.215.538-8.238a.61 2.196 0 0 0 .003-.071l.407-7.303.403-6.779.395-5.712.53-5.26a.61 2.196 0 0 0 .01-.054l.396-4.306.363-3.062.432-1.936.259-.625z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 0,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
          }}
        />
        <path
          id="k-band"
          d="M-430.182 208.213a.605 4.004 0 0 0-.765.5l-.536 3.55a.605 4.004 0 0 0-.14 1.423l-.404 7.123a.605 4.004 0 0 0-.023.5l-.402 11.565a.605 4.004 0 0 0-.002.035l-.538 16.018a.605 4.004 0 0 0-.01.325l-.404 19.569a.605 4.004 0 0 0-.002.065l-.402 22.24a.605 4.004 0 0 0-.002.065l-.402 25.747-.536 27.528a.605 4.004 0 0 0-.003.141l-.404 28.463a.605 4.004 0 0 0 0 .02l-.402 30.254a.605 4.003 0 0 0 .044.347.605 4.003 0 0 0-.044.348l.402 30.254a.605 4.004 0 0 0 0 .02l.404 28.462a.605 4.004 0 0 0 .003.141l.536 27.528.402 25.748a.605 4.004 0 0 0 .002.065l.402 22.24a.605 4.004 0 0 0 .002.065l.404 19.568a.605 4.004 0 0 0 .01.326l.538 16.017a.605 4.004 0 0 0 .002.035l.402 11.565a.605 4.004 0 0 0 .023.5l.404 7.113a.605 4.004 0 0 0 .14 1.433l.536 3.551a.605 4.004 0 0 0 .765.5l.402-1.77a.605 4.004 0 0 0 .207-1.543l.402-5.343a.605 4.004 0 0 0 .046-.814l.402-10.653.537-13.314a.605 4.004 0 0 0 .014-.434l.402-17.787a.605 4.004 0 0 0 .003-.098l.403-21.35a.605 4.004 0 0 0 .002-.044l.402-23.087.536-25.747a.605 4.004 0 0 0 .003-.163l.404-27.583.115-7.916.025 1.683a.605 4.004 0 0 0 0 .02l.403 26.692a.605 4.004 0 0 0 0 .01l.404 25.802a.605 4.004 0 0 0 .003.195l.537 23.098.403 19.536a.605 4.004 0 0 0 0 .056l.404 17.787a.605 4.004 0 0 0 .005.195l.404 13.336a.605 4.004 0 0 0 .024.586l.539 9.784a.605 4.004 0 0 0 .026.424l.404 5.343a.605 4.004 0 0 0 .35 1.998l.403.89a.605 4.004 0 0 0 .619-.966l.403-2.66a.605 4.004 0 0 0 .114-1.043l.538-7.124a.605 4.004 0 0 0 .046-.814l.402-10.675a.605 4.004 0 0 0 .01-.271l.402-15.084.537-17.744a.605 4.004 0 0 0 .007-.271l.403-20.459a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.02l.404-23.13a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.404-24.857.42-20.828.125 8.285a.605 4.004 0 0 0 .003.174l.536 24.857.402 23.076a.605 4.004 0 0 0 0 .055l.404 20.46a.605 4.004 0 0 0 .007.27l.537 17.744.402 15.084a.605 4.004 0 0 0 .007.196l.403 11.565a.605 4.004 0 0 0 .023.51l.404 7.113a.605 4.004 0 0 0 .094 1.097l.538 4.452a.605 4.004 0 0 0 .663 1.292l.404-.89a.605 4.004 0 0 0 .326-1.738l.404-4.441a.605 4.004 0 0 0 .056-.793l.402-8.014a.605 4.004 0 0 0 .005-.087l.538-11.565a.605 4.004 0 0 0 .016-.478l.404-15.127a.605 4.004 0 0 0 .003-.097l.402-17.745.537-20.415a.605 4.004 0 0 0 .005-.228l.402-23.13a.605 4.004 0 0 0 .002-.02l.402-24.01a.605 4.004 0 0 0 .002-.02l.208-12.88.337 20.015a.605 4.004 0 0 0 0 .01l.404 23.13a.605 4.004 0 0 0 .003.206l.536 21.306.402 18.634a.605 4.004 0 0 0 .003.13l.404 15.117a.605 4.004 0 0 0 .012.337l.536 13.346a.605 4.004 0 0 0 .01.12l.401 8.893a.605 4.004 0 0 0 .025.424l.402 6.233a.605 4.004 0 0 0 .222 1.748l.402 1.781a.605 4.004 0 0 0 .607.25l.537-1.78a.605 4.004 0 0 0 .27-1.793l.404-5.331a.605 4.004 0 0 0 .038-.641l.404-8.894a.605 4.004 0 0 0 .013-.315l.402-12.412.535-15.084a.605 4.004 0 0 0 .01-.358l.403-18.678a.605 4.004 0 0 0 .002-.02l.403-19.568a.605 4.004 0 0 0 .002-.065l.402-22.175.536-23.065a.605 4.004 0 0 0 .003-.163l.043-2.573.1 4.441.402 22.186a.605 4.004 0 0 0 .002.01l.402 21.35a.605 4.004 0 0 0 .002.075l.404 18.678a.605 4.004 0 0 0 .007.26l.538 16.887.402 13.325a.605 4.004 0 0 0 .007.184l.404 10.675a.605 4.004 0 0 0 .011.293l.404 8.003a.605 4.004 0 0 0 .146 1.564l.539 3.562a.605 4.004 0 0 0 .236.966l.404.89a.605 4.004 0 0 0 .674-1.4l.404-3.551a.605 4.004 0 0 0 .04-.424l.539-6.222a.605 4.004 0 0 0 .058-.934l.403-9.784a.605 4.004 0 0 0 .01-.218l.403-12.455a.605 4.004 0 0 0 .003-.141l.402-15.073.537-17.755a.605 4.004 0 0 0 .007-.24l.403-19.568a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.404-21.35a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.305-16.864.242 13.303a.605 4.004 0 0 0 .005.206l.536 20.405.402 18.623a.605 4.004 0 0 0 .002.056l.402 16.908a.605 4.004 0 0 0 .002.065l.404 15.127a.605 4.004 0 0 0 .018.478l.537 11.554.404 8.883a.605 4.004 0 0 0 .023.423l.403 6.234a.605 4.004 0 0 0 .128 1.248l.404 2.672a.605 4.004 0 0 0 .574 1.053l.537-.89a.605 4.004 0 0 0 .373-1.825l.403-4.452a.605 4.004 0 0 0 .048-.652l.404-7.112a.605 4.004 0 0 0 .007-.141l.538-10.675a.605 4.004 0 0 0 .018-.435l.402-12.444a.605 4.004 0 0 0 .005-.185l.404-16.017a.605 4.004 0 0 0 .002-.035l.402-16.843.535-18.613a.605 4.004 0 0 0 .009-.228l.402-20.47a.605 4.004 0 0 0 .002-.02l.146-7.786.402 19.406a.605 4.004 0 0 0 0 .02l.404 18.678a.605 4.004 0 0 0 0 .035l.403 17.787a.605 4.004 0 0 0 .01.326l.536 15.084.402 12.412a.605 4.004 0 0 0 .01.217l.403 9.784a.605 4.004 0 0 0 .031.576l.537 8.003a.605 4.004 0 0 0 .069.782l.403 3.551a.605 4.004 0 0 0 .148.934l.404 1.781a.605 4.004 0 0 0 .763-.5l.403-2.671a.605 4.004 0 0 0 .045-.336l.538-4.442a.605 4.004 0 0 0 .102-1.238l.404-8.003a.605 4.004 0 0 0 .013-.293l.402-10.675a.605 4.004 0 0 0 .007-.195l.402-13.27.535-15.062a.605 4.004 0 0 0 .009-.293l.403-16.897a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.403-17.733.462-16.843.089 4.278a.605 4.004 0 0 0 .005.207l.537 18.624.402 16.832a.605 4.004 0 0 0 .002.076l.403 15.127a.605 4.004 0 0 0 .002.087l.404 13.346a.605 4.004 0 0 0 .02.477l.535 10.62.4 8.83a.605 4.004 0 0 0 .038.64l.404 5.343a.605 4.004 0 0 0 .113 1.042l.538 3.551a.605 4.004 0 0 0 .619.967l.404-.89a.605 4.004 0 0 0 .236-.967l.404-2.66a.605 4.004 0 0 0 .113-1.043l.402-5.343a.605 4.004 0 0 0 .021-.304l.539-8.894a.605 4.004 0 0 0 .024-.51l.404-10.675a.605 4.004 0 0 0 .007-.184l.402-13.346a.605 4.004 0 0 0 .002-.056l.402-14.182.537-16.865a.605 4.004 0 0 0 .005-.195l.404-16.908a.605 4.004 0 0 0 .002-.056l.249-11.51.3 13.313a.605 4.004 0 0 0 .002.035l.404 16.908a.605 4.004 0 0 0 .009.293l.535 15.03.4 14.138a.605 4.004 0 0 0 .007.163l.404 11.565a.605 4.004 0 0 0 .01.25l.404 8.904a.605 4.004 0 0 0 .038.63l.536 7.124a.605 4.004 0 0 0 .023.271l.404 4.441a.605 4.004 0 0 0 .184 1.271l.402 1.781a.605 4.004 0 0 0 .671 0l.404-1.78a.605 4.004 0 0 0 .092-.5l.538-3.551a.605 4.004 0 0 0 .128-1.26l.404-6.222a.605 4.004 0 0 0 .021-.435l.4-8.828.535-10.62a.605 4.004 0 0 0 .02-.49l.404-13.335a.605 4.004 0 0 0 .002-.055l.402-14.226a.605 4.004 0 0 0 .005-.087l.4-15.909.534-15.898a.605 4.004 0 0 0 .009-.282l.03-1.27.526 15.691.4 15.04a.605 4.004 0 0 0 .002.045l.404 14.236a.605 4.004 0 0 0 .017.435l.531 11.467.4 10.566a.605 4.004 0 0 0 .014.293l.404 8.004a.605 4.004 0 0 0 .032.532l.402 5.332a.605 4.004 0 0 0 .18 1.411l.536 2.672a.605 4.004 0 0 0 .172.597l.404.89a.605 4.004 0 0 0 .527-.467l.399-1.78a.605 4.004 0 0 0 .182-1.271l.403-4.452a.605 4.004 0 0 0 .023-.261l.537-7.124a.605 4.004 0 0 0 .04-.64l.401-8.894a.605 4.004 0 0 0 .01-.174l.402-10.653.536-13.313a.605 4.004 0 0 0 .01-.239l.403-13.346a.605 4.004 0 0 0 .003-.087l.402-15.127a.605 4.004 0 0 0 .002-.045l.345-13.671.21 8.34a.605 4.004 0 0 0 .002.076l.403 14.236a.605 4.004 0 0 0 .007.228l.537 14.171.4 12.391a.605 4.004 0 0 0 .005.13l.404 10.675a.605 4.004 0 0 0 .033.651l.532 7.906.397 7.004a.605 4.004 0 0 0 .047.652l.402 4.452a.605 4.004 0 0 0 .184 1.27l.404 1.77a.605 4.004 0 0 0 .482.554l.537-.89a.605 4.004 0 0 0 .282-1.043l.402-2.67a.605 4.004 0 0 0 .114-1.043l.403-5.343a.605 4.004 0 0 0 .027-.38l.4-7.08.535-8.851a.605 4.004 0 0 0 .026-.521l.402-10.675a.605 4.004 0 0 0 .005-.13l.404-12.456a.605 4.004 0 0 0 .002-.055l.4-13.249.534-14.138a.605 4.004 0 0 0 .01-.271l.184-6.885.372 13.15a.605 4.004 0 0 0 .002.045l.404 13.346a.605 4.004 0 0 0 .002.056l.404 12.455a.605 4.004 0 0 0 .018.424l.535 10.62.4 8.84a.605 4.004 0 0 0 .005.108l.404 8.014a.605 4.004 0 0 0 .033.521l.403 5.343a.605 4.004 0 0 0 .178 1.412l.538 2.66a.605 4.004 0 0 0 .17.598l.404.89a.605 4.004 0 0 0 .383 0l.403-.89a.605 4.004 0 0 0 .237-.967l.538-3.562a.605 4.004 0 0 0 .113-1.031l.404-5.343a.605 4.004 0 0 0 .033-.521l.402-8.003a.605 4.004 0 0 0 .007-.12l.4-8.84.535-10.62a.605 4.004 0 0 0 .015-.358l.404-11.566a.605 4.004 0 0 0 .003-.12l.403-13.345.4-13.249.047-1.216.115 3.79a.605 4.004 0 0 0 .01.25l.535 13.248.4 12.358a.605 4.004 0 0 0 .003.13l.404 10.675a.605 4.004 0 0 0 .003.087l.403 9.784a.605 4.004 0 0 0 .032.575l.535 7.982.402 6.2a.605 4.004 0 0 0 .072.826l.404 3.551a.605 4.004 0 0 0 .055.434l.404 2.672a.605 4.004 0 0 0 .429 1.173h.536a.605 4.004 0 0 0 .335-.674l.402-1.78a.605 4.004 0 0 0 .184-1.271l.395-4.366.53-5.266a.605 4.004 0 0 0 .071-.945l.404-8.014a.605 4.004 0 0 0 .005-.108l.403-8.905a.605 4.004 0 0 0 .01-.173l.398-10.577.534-11.457a.605 4.004 0 0 0 .013-.337l.403-12.456.283-8.73.282 8.73a.605 4.004 0 0 0 .002.065l.404 11.555.402 11.565a.605 4.004 0 0 0 .021.477l.535 9.73.4 7.96a.605 4.004 0 0 0 .01.13l.403 7.124a.605 4.004 0 0 0 .063.815l.538 5.331a.605 4.004 0 0 0 .075.62l.404 2.66a.605 4.004 0 0 0 .092.5l.404 1.78a.605 4.004 0 0 0 .526.467l.402-.89a.605 4.004 0 0 0 .173-.597l.538-2.66a.605 4.004 0 0 0 .156-1.152l.402-4.441a.605 4.004 0 0 0 .038-.489l.404-6.222a.605 4.004 0 0 0 .01-.174l.403-7.112a.605 4.004 0 0 0 .002-.045l.538-9.784a.605 4.004 0 0 0 .015-.315l.404-9.784a.605 4.004 0 0 0 .005-.152l.399-11.424.532-11.424a.605 4.004 0 0 0 .013-.348l.06-1.89.512 11.023.4 10.577a.605 4.004 0 0 0 .004.076l.402 9.795a.605 4.004 0 0 0 .005.087l.404 8.904a.605 4.004 0 0 0 .037.641l.53 7.004.396 6.125a.605 4.004 0 0 0 .072.825l.404 3.551a.605 4.004 0 0 0 .121.804l.539 2.671a.605 4.004 0 0 0 .17.597l.404.89a.605 4.004 0 0 0 .527-.466l.403-1.781a.605 4.004 0 0 0 .092-.5l.404-2.671a.605 4.004 0 0 0 .075-.609l.537-5.342a.605 4.004 0 0 0 .054-.641l.402-6.222a.605 4.004 0 0 0 .012-.174l.402-7.123a.605 4.004 0 0 0 .013-.25l.4-8.84.535-10.62a.605 4.004 0 0 0 .013-.293l.404-10.675.388-10.273.187 4.941.402 10.675a.605 4.004 0 0 0 .013.293l.535 10.62.4 8.83a.605 4.004 0 0 0 .013.26l.404 7.113a.605 4.004 0 0 0 .01.173l.404 6.222a.605 4.004 0 0 0 .052.652l.538 5.332a.605 4.004 0 0 0 .076.608l.404 2.671a.605 4.004 0 0 0 .092.5l.403 1.78a.605 4.004 0 0 0 .335.674h.404a.605 4.004 0 0 0 .27-.424l.539-1.78a.605 4.004 0 0 0 .213-1.174l.402-3.561a.605 4.004 0 0 0 .058-.609l.395-5.245.53-6.124a.605 4.004 0 0 0 .05-.728l.402-8.003.403-8.003a.605 4.004 0 0 0 .01-.218l.4-9.675.532-10.567a.605 4.004 0 0 0 .014-.293l.167-4.452.415 8.242.399 8.796.402 9.73a.605 4.004 0 0 0 .043.739l.523 6.928.392 6.917a.605 4.004 0 0 0 .025.391l.404 5.332a.605 4.004 0 0 0 .021.271l.404 4.453a.605 4.004 0 0 0 .248 1.52l.538 1.78a.605 4.004 0 0 0 .079.218l.403.89a.605 4.004 0 0 0 .383 0l.403-.89a.605 4.004 0 0 0 .145-.467l.404-1.781a.605 4.004 0 0 0 .092-.5l.538-3.561a.605 4.004 0 0 0 .113-1.043l.402-5.332a.605 4.004 0 0 0 .026-.39l.393-6.918.523-6.928a.605 4.004 0 0 0 .038-.64l.404-8.894.403-8.894a.605 4.004 0 0 0 .003-.098l.4-9.686.1-2.031.081 1.933.404 9.784a.605 4.004 0 0 0 .021.434l.532 8.785.397 7.895a.605 4.004 0 0 0 .01.14l.401 7.114a.605 4.004 0 0 0 .043.575l.537 6.233a.605 4.004 0 0 0 .007.076l.403 4.442a.605 4.004 0 0 0 .035.347l.404 3.551a.605 4.004 0 0 0 .147.934l.404 1.781a.605 4.004 0 0 0 .336.674h.537a.605 4.004 0 0 0 .336-.674l.403-1.78a.605 4.004 0 0 0 .093-.5l.402-2.672a.605 4.004 0 0 0 .058-.423l.402-3.562a.605 4.004 0 0 0 .02-.185l.538-5.332a.605 4.004 0 0 0 .062-.814l.404-7.124.403-7.113a.605 4.004 0 0 0 .013-.25l.396-8.73.527-8.731a.605 4.004 0 0 0 .018-.337l.335-7.385.254 5.604.404 8.893.403 8.905a.605 4.004 0 0 0 .038.64l.53 7.005.396 6.125a.605 4.004 0 0 0 .014.206l.404 5.343a.605 4.004 0 0 0 .058.608l.403 3.562a.605 4.004 0 0 0 .12.804l.538 2.66a.605 4.004 0 0 0 .173.597l.402.89a.605 4.004 0 0 0 .192.207h.404a.605 4.004 0 0 0 .27-.424l.537-1.78a.605 4.004 0 0 0 .213-1.173l.404-3.562a.605 4.004 0 0 0 .035-.337l.403-4.453a.605 4.004 0 0 0 .023-.27l.396-5.235.53-6.135a.605 4.004 0 0 0 .046-.717l.403-8.003.404-8.015a.605 4.004 0 0 0 .007-.108l.396-8.73.208-3.443a.605 4.004 0 0 0 .003.056l.53 8.785.399 7.894.402 8.004a.605 4.004 0 0 0 .018.315l.404 6.222a.605 4.004 0 0 0 .03.412l.538 6.223a.605 4.004 0 0 0 .007.076l.403 4.452a.605 4.004 0 0 0 .092.771l.402 2.672a.605 4.004 0 0 0 .094.499l.402 1.77a.605 4.004 0 0 0 .189.554l.538.89a.605 4.004 0 0 0 .338-.087l.404-.89a.605 4.004 0 0 0 .144-.467l.404-1.77a.605 4.004 0 0 0 .092-.5l.536-3.562a.605 4.004 0 0 0 .092-.77l.404-4.453a.605 4.004 0 0 0 .036-.478l.404-6.233.402-6.2.536-7.982a.605 4.004 0 0 0 .02-.359l.404-8.003.403-8.014a.605 4.004 0 0 0 .005-.108l.025-.532.164 3.257.4 8.84a.605 4.004 0 0 0 .014.25l.403 7.123a.605 4.004 0 0 0 .025.38l.53 7.016.397 6.113a.605 4.004 0 0 0 .036.49l.404 4.44a.605 4.004 0 0 0 .046.446l.538 4.452a.605 4.004 0 0 0 .137.826l.403 1.78.404 1.781a.605 4.004 0 0 0 .335.674h.403a.605 4.004 0 0 0 .147-.12l.538-.89a.605 4.004 0 0 0 .28-1.054l.404-2.671a.605 4.004 0 0 0 .056-.434l.404-3.551a.605 4.004 0 0 0 .057-.62l.386-5.114.517-5.125a.605 4.004 0 0 0 .064-.815l.403-7.113.398-7.004.53-7.906a.605 4.004 0 0 0 .021-.358l.23-4.561.379 5.636.394 7.819a.605 4.004 0 0 0 .007.14l.404 7.124a.605 4.004 0 0 0 .011.163l.402 6.234a.605 4.004 0 0 0 .053.64l.53 5.256.395 4.366a.605 4.004 0 0 0 .036.347l.402 3.562a.605 4.004 0 0 0 .214 1.173l.538 1.78a.605 4.004 0 0 0 .079.218l.403.89a.605 4.004 0 0 0 .383 0l.403-.89.404-.89a.605 4.004 0 0 0 .236-.967l.539-3.562a.605 4.004 0 0 0 .056-.423l.403-3.562a.605 4.004 0 0 0 .056-.608l.404-5.343a.605 4.004 0 0 0 .015-.206l.39-6.016.52-6.038a.605 4.004 0 0 0 .041-.576l.404-7.113a.605 4.004 0 0 0 .007-.14l.396-7.83.147-2.205.058 1.13.404 8.014a.605 4.004 0 0 0 .032.52l.53 7.016.396 6.114.404 6.233a.605 4.004 0 0 0 .037.478l.402 4.452a.605 4.004 0 0 0 .048.434l.537 4.453a.605 4.004 0 0 0 .044.325l.404 2.672a.605 4.004 0 0 0 .092.5l.403 1.78a.605 4.004 0 0 0 .337.673h.402a.605 4.004 0 0 0 .147-.12l.537-.89a.605 4.004 0 0 0 .19-.554l.403-1.78a.605 4.004 0 0 0 .149-.923l.397-3.508.532-4.409a.605 4.004 0 0 0 .046-.434l.403-4.453a.605 4.004 0 0 0 .038-.477l.404-6.234a.605 4.004 0 0 0 .01-.163l.392-6.928.524-6.928a.605 4.004 0 0 0 .032-.521l.334-6.602.28 4.18.397 7.005.404 7.123a.605 4.004 0 0 0 .041.576l.528 6.135.396 5.235a.605 4.004 0 0 0 .023.27l.404 4.453a.605 4.004 0 0 0 .034.336l.404 3.562a.605 4.004 0 0 0 .213 1.173l.504 1.672.373 1.64a.605 4.004 0 0 0 .334.673h.404a.605 4.004 0 0 0 .335-.673l.404-1.781a.605 4.004 0 0 0 .027-.13l.537-2.66a.605 4.004 0 0 0 .122-.804l.403-3.562a.605 4.004 0 0 0 .035-.337l.395-4.366.53-5.266a.605 4.004 0 0 0 .053-.641l.404-6.223a.605 4.004 0 0 0 .01-.173l.403-7.113.392-6.928.25-3.29.377 6.657a.605 4.004 0 0 0 .025.38l.53 7.015.396 6.114.403 6.233a.605 4.004 0 0 0 .084.923l.512 4.235.382 4.224a.605 4.004 0 0 0 .092.771l.402 2.661a.605 4.004 0 0 0 .094.5l.402 1.78a.605 4.004 0 0 0 .189.554l.538.89a.605 4.004 0 0 0 .338-.086l.404-.891a.605 4.004 0 0 0 .144-.467l.404-1.781a.605 4.004 0 0 0 .092-.5l.404-2.66.536-3.562a.605 4.004 0 0 0 .113-1.042l.404-5.332.404-5.343a.605 4.004 0 0 0 .015-.217l.395-6.114.53-7.015a.605 4.004 0 0 0 .026-.38l.402-7.124a.605 4.004 0 0 0 .01-.13l.054-1.065.142 2.835a.605 4.004 0 0 0 .007.141l.404 7.124.404 7.113a.605 4.004 0 0 0 .04.575l.53 6.136.396 5.234a.605 4.004 0 0 0 .022.271l.403 4.452a.605 4.004 0 0 0 .035.337l.404 3.562a.605 4.004 0 0 0 .121.803l.537 2.66a.605 4.004 0 0 0 .172.598l.404.89a.605 4.004 0 0 0 .19.207h.404a.605 4.004 0 0 0 .148-.12l.536-.89a.605 4.004 0 0 0 .189-.554l.404-1.78a.605 4.004 0 0 0 .147-.924l.404-3.561.404-3.552a.605 4.004 0 0 0 .02-.184l.536-5.343a.605 4.004 0 0 0 .054-.64l.402-6.223.404-6.233a.605 4.004 0 0 0 .01-.174l.392-6.917.386-5.115.387 5.115.392 6.917a.605 4.004 0 0 0 .01.174l.404 6.233.402 6.222a.605 4.004 0 0 0 .053.64l.538 5.344a.605 4.004 0 0 0 .02.184l.403 3.552.402 3.561a.605 4.004 0 0 0 .15.923l.403 1.781a.605 4.004 0 0 0 .19.554l.536.89a.605 4.004 0 0 0 .147.12h.404a.605 4.004 0 0 0 .19-.206l.404-.89a.605 4.004 0 0 0 .173-.598l.536-2.66a.605 4.004 0 0 0 .122-.804l.403-3.562a.605 4.004 0 0 0 .033-.337l.404-4.452a.605 4.004 0 0 0 .021-.271l.396-5.234.53-6.136a.605 4.004 0 0 0 .04-.575l.405-7.113.403-7.124a.605 4.004 0 0 0 .01-.141l.142-2.835.054 1.065a.605 4.004 0 0 0 .01.13l.401 7.123a.605 4.004 0 0 0 .026.38l.53 7.016.396 6.114a.605 4.004 0 0 0 .015.217l.403 5.343.404 5.332a.605 4.004 0 0 0 .113 1.042l.537 3.562.404 2.66a.605 4.004 0 0 0 .092.5l.403 1.78a.605 4.004 0 0 0 .145.468l.403.89a.605 4.004 0 0 0 .339.087l.536-.89a.605 4.004 0 0 0 .19-.554l.403-1.78a.605 4.004 0 0 0 .093-.5l.402-2.66a.605 4.004 0 0 0 .092-.772l.382-4.224.512-4.235a.605 4.004 0 0 0 .084-.923l.404-6.233.395-6.114.53-7.015a.605 4.004 0 0 0 .025-.38l.378-6.657.25 3.29.391 6.928.404 7.113a.605 4.004 0 0 0 .01.173l.404 6.223a.605 4.004 0 0 0 .052.64l.53 5.267.396 4.366a.605 4.004 0 0 0 .034.337l.404 3.562a.605 4.004 0 0 0 .12.803l.538 2.66a.605 4.004 0 0 0 .028.13l.404 1.782a.605 4.004 0 0 0 .334.673h.404a.605 4.004 0 0 0 .335-.673l.372-1.64.504-1.672a.605 4.004 0 0 0 .214-1.173l.403-3.562a.605 4.004 0 0 0 .035-.336l.404-4.452a.605 4.004 0 0 0 .022-.271l.396-5.235.528-6.135a.605 4.004 0 0 0 .041-.576l.404-7.123.397-7.005.28-4.18.334 6.602a.605 4.004 0 0 0 .033.521l.523 6.928.393 6.928a.605 4.004 0 0 0 .01.163l.403 6.234a.605 4.004 0 0 0 .038.477l.404 4.453a.605 4.004 0 0 0 .046.434l.532 4.409.397 3.508a.605 4.004 0 0 0 .149.923l.402 1.78a.605 4.004 0 0 0 .19.554l.537.89a.605 4.004 0 0 0 .148.12h.402a.605 4.004 0 0 0 .336-.673l.404-1.78a.605 4.004 0 0 0 .092-.5l.404-2.672a.605 4.004 0 0 0 .044-.325l.537-4.453a.605 4.004 0 0 0 .047-.434l.402-4.452a.605 4.004 0 0 0 .038-.478l.404-6.233.395-6.114.53-7.015a.605 4.004 0 0 0 .033-.521l.404-8.014.057-1.13.148 2.205.396 7.83a.605 4.004 0 0 0 .007.14l.403 7.113a.605 4.004 0 0 0 .041.576l.52 6.038.391 6.016a.605 4.004 0 0 0 .015.206l.402 5.343a.605 4.004 0 0 0 .057.608l.404 3.562a.605 4.004 0 0 0 .056.423l.538 3.562a.605 4.004 0 0 0 .237.967l.403.89.404.89a.605 4.004 0 0 0 .382 0l.402-.89a.605 4.004 0 0 0 .08-.217l.537-1.781a.605 4.004 0 0 0 .215-1.173l.402-3.562a.605 4.004 0 0 0 .035-.347l.397-4.366.53-5.256a.605 4.004 0 0 0 .053-.64l.402-6.234a.605 4.004 0 0 0 .011-.163l.402-7.123a.605 4.004 0 0 0 .01-.141l.393-7.819.38-5.636.23 4.56a.605 4.004 0 0 0 .02.36l.53 7.905.398 7.004.403 7.113a.605 4.004 0 0 0 .064.815l.516 5.125.387 5.115a.605 4.004 0 0 0 .058.619l.403 3.55a.605 4.004 0 0 0 .056.435l.404 2.671a.605 4.004 0 0 0 .28 1.054l.537.89a.605 4.004 0 0 0 .148.12h.403a.605 4.004 0 0 0 .335-.674l.404-1.78.404-1.781a.605 4.004 0 0 0 .136-.826l.538-4.452a.605 4.004 0 0 0 .046-.445l.404-4.442a.605 4.004 0 0 0 .036-.489l.397-6.113.53-7.015a.605 4.004 0 0 0 .025-.38l.403-7.124a.605 4.004 0 0 0 .014-.25l.4-8.84.164-3.257.025.532a.605 4.004 0 0 0 .005.108l.403 8.014.404 8.003a.605 4.004 0 0 0 .02.359l.536 7.981.403 6.201.403 6.233a.605 4.004 0 0 0 .036.478l.404 4.452a.605 4.004 0 0 0 .092.771l.537 3.562a.605 4.004 0 0 0 .092.5l.403 1.77a.605 4.004 0 0 0 .145.467l.403.89a.605 4.004 0 0 0 .338.087l.539-.89a.605 4.004 0 0 0 .188-.554l.402-1.77a.605 4.004 0 0 0 .094-.5l.402-2.67a.605 4.004 0 0 0 .092-.772l.404-4.452a.605 4.004 0 0 0 .005-.076l.538-6.223a.605 4.004 0 0 0 .031-.412l.404-6.222a.605 4.004 0 0 0 .018-.315l.402-8.004.399-7.894.53-8.785a.605 4.004 0 0 0 .003-.056l.208 3.442.396 8.731a.605 4.004 0 0 0 .005.108l.404 8.015.403 8.003a.605 4.004 0 0 0 .048.717l.53 6.135.395 5.234a.605 4.004 0 0 0 .023.271l.404 4.453a.605 4.004 0 0 0 .034.337l.404 3.562a.605 4.004 0 0 0 .214 1.172l.536 1.781a.605 4.004 0 0 0 .27.424h.405a.605 4.004 0 0 0 .19-.206l.404-.89a.605 4.004 0 0 0 .172-.598l.538-2.66a.605 4.004 0 0 0 .12-.804l.404-3.562a.605 4.004 0 0 0 .057-.608l.404-5.343a.605 4.004 0 0 0 .015-.206l.395-6.125.53-7.004a.605 4.004 0 0 0 .038-.641l.404-8.905.404-8.893.254-5.604.335 7.385a.605 4.004 0 0 0 .018.337l.527 8.73.395 8.731a.605 4.004 0 0 0 .013.25l.404 7.113.404 7.124a.605 4.004 0 0 0 .062.814l.538 5.332a.605 4.004 0 0 0 .02.185l.402 3.562a.605 4.004 0 0 0 .057.423l.403 2.672a.605 4.004 0 0 0 .091.5l.404 1.78a.605 4.004 0 0 0 .337.674h.536a.605 4.004 0 0 0 .337-.674l.403-1.78a.605 4.004 0 0 0 .148-.935l.404-3.55a.605 4.004 0 0 0 .034-.348l.404-4.442a.605 4.004 0 0 0 .007-.076l.537-6.233a.605 4.004 0 0 0 .042-.575l.402-7.113a.605 4.004 0 0 0 .008-.141l.398-7.895.531-8.785a.605 4.004 0 0 0 .022-.434l.403-9.784.08-1.933.102 2.03.4 9.687a.605 4.004 0 0 0 .002.098l.404 8.894.404 8.893a.605 4.004 0 0 0 .037.641l.524 6.928.392 6.918a.605 4.004 0 0 0 .026.39l.402 5.332a.605 4.004 0 0 0 .114 1.043l.538 3.562a.605 4.004 0 0 0 .092.499l.403 1.781a.605 4.004 0 0 0 .145.467l.404.89a.605 4.004 0 0 0 .382 0l.404-.89a.605 4.004 0 0 0 .078-.217l.539-1.781a.605 4.004 0 0 0 .247-1.52l.404-4.453a.605 4.004 0 0 0 .021-.27l.404-5.333a.605 4.004 0 0 0 .025-.39l.392-6.918.524-6.928a.605 4.004 0 0 0 .042-.739l.402-9.73.4-8.796.414-8.242.168 4.452a.605 4.004 0 0 0 .013.293l.533 10.567.399 9.675a.605 4.004 0 0 0 .01.218l.404 8.003.402 8.003a.605 4.004 0 0 0 .049.728l.53 6.124.396 5.245a.605 4.004 0 0 0 .057.609l.402 3.561a.605 4.004 0 0 0 .213 1.173l.539 1.781a.605 4.004 0 0 0 .27.424h.404a.605 4.004 0 0 0 .335-.674l.404-1.78a.605 4.004 0 0 0 .092-.5l.403-2.671a.605 4.004 0 0 0 .076-.608l.538-5.332a.605 4.004 0 0 0 .053-.652l.402-6.222a.605 4.004 0 0 0 .011-.173l.404-7.113a.605 4.004 0 0 0 .011-.26l.402-8.83.535-10.62a.605 4.004 0 0 0 .012-.293l.404-10.675.187-4.94.387 10.272.404 10.675a.605 4.004 0 0 0 .013.293l.535 10.62.4 8.84a.605 4.004 0 0 0 .013.25l.402 7.123a.605 4.004 0 0 0 .012.174l.402 6.222a.605 4.004 0 0 0 .054.64l.537 5.343a.605 4.004 0 0 0 .075.609l.404 2.67a.605 4.004 0 0 0 .092.5l.404 1.782a.605 4.004 0 0 0 .526.467l.404-.89a.605 4.004 0 0 0 .17-.598l.539-2.671a.605 4.004 0 0 0 .121-.804l.404-3.55a.605 4.004 0 0 0 .072-.826l.396-6.125.53-7.004a.605 4.004 0 0 0 .038-.64l.403-8.905a.605 4.004 0 0 0 .005-.087l.402-9.795a.605 4.004 0 0 0 .004-.076l.4-10.577.512-11.022.061 1.889a.605 4.004 0 0 0 .013.348l.532 11.424.399 11.424a.605 4.004 0 0 0 .005.152l.403 9.784a.605 4.004 0 0 0 .015.315l.538 9.784a.605 4.004 0 0 0 .002.045l.404 7.112a.605 4.004 0 0 0 .01.174l.403 6.222a.605 4.004 0 0 0 .038.489l.402 4.441a.605 4.004 0 0 0 .156 1.151l.538 2.66a.605 4.004 0 0 0 .173.598l.402.89a.605 4.004 0 0 0 .526-.467l.404-1.78a.605 4.004 0 0 0 .092-.5l.404-2.66a.605 4.004 0 0 0 .075-.62l.538-5.331a.605 4.004 0 0 0 .063-.815l.404-7.124a.605 4.004 0 0 0 .008-.13l.4-7.96.535-9.73a.605 4.004 0 0 0 .022-.477l.402-11.565.403-11.555a.605 4.004 0 0 0 .002-.065l.282-8.73.283 8.73.403 12.456a.605 4.004 0 0 0 .014.337l.533 11.457.399 10.577a.605 4.004 0 0 0 .01.173l.403 8.905a.605 4.004 0 0 0 .005.108l.404 8.014a.605 4.004 0 0 0 .07.945l.53 5.266.396 4.366a.605 4.004 0 0 0 .184 1.27l.402 1.781a.605 4.004 0 0 0 .336.674h.537a.605 4.004 0 0 0 .428-1.173l.404-2.672a.605 4.004 0 0 0 .056-.434l.404-3.551a.605 4.004 0 0 0 .072-.825l.402-6.2.535-7.983a.605 4.004 0 0 0 .031-.575l.404-9.784a.605 4.004 0 0 0 .003-.087l.404-10.675a.605 4.004 0 0 0 .003-.13l.4-12.358.536-13.248a.605 4.004 0 0 0 .008-.25l.115-3.79.046 1.216.4 13.249.404 13.346a.605 4.004 0 0 0 .003.12l.404 11.565a.605 4.004 0 0 0 .015.358l.535 10.62.4 8.84a.605 4.004 0 0 0 .007.12l.402 8.003a.605 4.004 0 0 0 .033.52l.404 5.344a.605 4.004 0 0 0 .113 1.031l.538 3.562a.605 4.004 0 0 0 .237.967l.403.89a.605 4.004 0 0 0 .383 0l.403-.89a.605 4.004 0 0 0 .171-.598l.538-2.66a.605 4.004 0 0 0 .178-1.412l.403-5.343a.605 4.004 0 0 0 .033-.52l.404-8.015a.605 4.004 0 0 0 .005-.108l.4-8.84.535-10.62a.605 4.004 0 0 0 .018-.424l.404-12.455a.605 4.004 0 0 0 .002-.056l.403-13.346a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.375-13.15.183 6.884a.605 4.004 0 0 0 .009.271l.535 14.14.4 13.248a.605 4.004 0 0 0 .002.055l.404 12.456a.605 4.004 0 0 0 .005.13l.402 10.675a.605 4.004 0 0 0 .026.52l.535 8.85.4 7.081a.605 4.004 0 0 0 .027.38l.403 5.343a.605 4.004 0 0 0 .114 1.043l.402 2.671a.605 4.004 0 0 0 .282 1.043l.536.89a.605 4.004 0 0 0 .483-.554l.404-1.77a.605 4.004 0 0 0 .183-1.27l.403-4.453a.605 4.004 0 0 0 .047-.651l.397-7.004.532-7.906a.605 4.004 0 0 0 .033-.651l.404-10.675a.605 4.004 0 0 0 .005-.13l.4-12.39.537-14.172a.605 4.004 0 0 0 .006-.228l.404-14.237a.605 4.004 0 0 0 .003-.076l.21-8.34.345 13.672a.605 4.004 0 0 0 .002.045l.402 15.127a.605 4.004 0 0 0 .003.087l.404 13.346a.605 4.004 0 0 0 .008.239l.537 13.313.402 10.653a.605 4.004 0 0 0 .007.173l.404 8.894a.605 4.004 0 0 0 .039.64l.537 7.125a.605 4.004 0 0 0 .023.26l.403 4.453a.605 4.004 0 0 0 .182 1.27l.404 1.781a.605 4.004 0 0 0 .527.467l.404-.89a.605 4.004 0 0 0 .17-.597l.539-2.672a.605 4.004 0 0 0 .178-1.412l.403-5.331a.605 4.004 0 0 0 .032-.533l.404-8.003a.605 4.004 0 0 0 .013-.293l.399-10.566.533-11.467a.605 4.004 0 0 0 .017-.435l.403-14.236a.605 4.004 0 0 0 .002-.045l.4-15.04.527-15.692.03 1.27a.605 4.004 0 0 0 .008.283l.533 15.898.4 15.91a.605 4.004 0 0 0 .004.086l.402 14.226a.605 4.004 0 0 0 .002.055l.404 13.335a.605 4.004 0 0 0 .02.489l.534 10.62.4 8.829a.605 4.004 0 0 0 .024.434l.403 6.223a.605 4.004 0 0 0 .128 1.26l.539 3.55a.605 4.004 0 0 0 .092.5l.403 1.78a.605 4.004 0 0 0 .67 0l.404-1.78a.605 4.004 0 0 0 .183-1.27l.404-4.442a.605 4.004 0 0 0 .022-.271l.538-7.124a.605 4.004 0 0 0 .038-.63l.403-8.905a.605 4.004 0 0 0 .01-.25l.404-11.564a.605 4.004 0 0 0 .005-.163l.4-14.14.535-15.028a.605 4.004 0 0 0 .009-.293l.403-16.908a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.302-13.325.25 11.522a.605 4.004 0 0 0 .001.056l.404 16.908a.605 4.004 0 0 0 .005.195l.537 16.864.402 14.182a.605 4.004 0 0 0 .001.056l.402 13.346a.605 4.004 0 0 0 .007.185l.404 10.675a.605 4.004 0 0 0 .024.51l.539 8.894a.605 4.004 0 0 0 .021.304l.402 5.342a.605 4.004 0 0 0 .113 1.043l.404 2.66a.605 4.004 0 0 0 .236.967l.404.89a.605 4.004 0 0 0 .619-.966l.538-3.551a.605 4.004 0 0 0 .113-1.043l.404-5.342a.605 4.004 0 0 0 .038-.641l.4-8.829.535-10.62a.605 4.004 0 0 0 .02-.478l.404-13.346a.605 4.004 0 0 0 .001-.087l.404-15.127a.605 4.004 0 0 0 .001-.076l.402-16.832.537-18.623a.605 4.004 0 0 0 .005-.207l.089-4.279.463 16.843.402 17.733a.605 4.004 0 0 0 0 .035l.403 16.897a.605 4.004 0 0 0 .01.293l.535 15.062.402 13.27a.605 4.004 0 0 0 .007.195l.402 10.675a.605 4.004 0 0 0 .013.293l.404 8.003a.605 4.004 0 0 0 .102 1.238l.538 4.442a.605 4.004 0 0 0 .044.336l.404 2.671a.605 4.004 0 0 0 .763.5l.404-1.78a.605 4.004 0 0 0 .147-.935l.404-3.55a.605 4.004 0 0 0 .069-.782l.537-8.004a.605 4.004 0 0 0 .03-.575l.404-9.785a.605 4.004 0 0 0 .009-.217l.402-12.412.537-15.084a.605 4.004 0 0 0 .008-.325l.404-17.788a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.403-18.678a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.4-19.45.149 7.83a.605 4.004 0 0 0 .001.02l.402 20.47a.605 4.004 0 0 0 .007.228l.535 18.613.402 16.843a.605 4.004 0 0 0 .002.035l.402 16.017a.605 4.004 0 0 0 .006.185l.402 12.444a.605 4.004 0 0 0 .018.435l.539 10.675a.605 4.004 0 0 0 .006.14l.404 7.113a.605 4.004 0 0 0 .048.652l.403 4.452a.605 4.004 0 0 0 .373 1.825l.537.89a.605 4.004 0 0 0 .574-1.053l.404-2.672a.605 4.004 0 0 0 .128-1.248l.403-6.234a.605 4.004 0 0 0 .023-.423l.404-8.883.537-11.554a.605 4.004 0 0 0 .018-.478l.404-15.127a.605 4.004 0 0 0 .001-.065l.402-16.908a.605 4.004 0 0 0 .002-.056l.402-18.623.537-20.405a.605 4.004 0 0 0 .005-.206l.24-13.303.306 16.865a.605 4.004 0 0 0 0 .02l.404 21.35a.605 4.004 0 0 0 0 .044l.403 19.568a.605 4.004 0 0 0 .007.24l.537 17.755.402 15.072a.605 4.004 0 0 0 .003.141l.404 12.456a.605 4.004 0 0 0 .01.217l.402 9.785a.605 4.004 0 0 0 .059.934l.538 6.222a.605 4.004 0 0 0 .041.423l.404 3.551a.605 4.004 0 0 0 .674 1.401l.404-.89a.605 4.004 0 0 0 .236-.967l.539-3.562a.605 4.004 0 0 0 .146-1.563l.402-8.004a.605 4.004 0 0 0 .013-.293l.404-10.674a.605 4.004 0 0 0 .006-.185l.403-13.324.538-16.887a.605 4.004 0 0 0 .007-.26l.403-18.678a.605 4.004 0 0 0 .002-.076l.402-21.35a.605 4.004 0 0 0 0-.01l.404-22.185.1-4.442.042 2.574a.605 4.004 0 0 0 .004.163l.536 23.065.403 22.175a.605 4.004 0 0 0 .001.065l.402 19.568a.605 4.004 0 0 0 .002.02l.402 18.678a.605 4.004 0 0 0 .012.358l.535 15.084.402 12.412a.605 4.004 0 0 0 .013.315l.403 8.893a.605 4.004 0 0 0 .038.641l.404 5.332a.605 4.004 0 0 0 .269 1.792l.538 1.78a.605 4.004 0 0 0 .607-.25l.403-1.78a.605 4.004 0 0 0 .221-1.748l.402-6.234a.605 4.004 0 0 0 .025-.423l.402-8.894a.605 4.004 0 0 0 .007-.12l.536-13.346a.605 4.004 0 0 0 .012-.337l.403-15.116a.605 4.004 0 0 0 .004-.13l.402-18.635.537-21.305a.605 4.004 0 0 0 .003-.207l.404-23.13a.605 4.004 0 0 0 0-.01l.336-20.014.208 12.88a.605 4.004 0 0 0 .002.02l.402 24.01a.605 4.004 0 0 0 0 .02l.404 23.13a.605 4.004 0 0 0 .005.228l.536 20.415.403 17.744a.605 4.004 0 0 0 .003.098l.404 15.127a.605 4.004 0 0 0 .016.478l.538 11.565a.605 4.004 0 0 0 .005.087l.402 8.014a.605 4.004 0 0 0 .056.793l.404 4.441a.605 4.004 0 0 0 .326 1.738l.404.89a.605 4.004 0 0 0 .663-1.292l.538-4.453a.605 4.004 0 0 0 .094-1.096l.404-7.113a.605 4.004 0 0 0 .023-.51l.403-11.566a.605 4.004 0 0 0 .007-.195l.402-15.084.537-17.744a.605 4.004 0 0 0 .007-.271l.403-20.46a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.034l.402-23.076.537-24.857a.605 4.004 0 0 0 .005-.173l.125-8.286.42 20.828.403 24.857a.605 4.004 0 0 0 0 .035l.404 23.13a.605 4.004 0 0 0 0 .056l.404 20.459a.605 4.004 0 0 0 .007.27l.536 17.745.402 15.084a.605 4.004 0 0 0 .009.27l.403 10.675a.605 4.004 0 0 0 .046.815l.539 7.124a.605 4.004 0 0 0 .113 1.042l.404 2.66a.605 4.004 0 0 0 .618.967l.404-.89a.605 4.004 0 0 0 .35-1.998l.403-5.343a.605 4.004 0 0 0 .027-.424l.538-9.784a.605 4.004 0 0 0 .024-.586l.404-13.336a.605 4.004 0 0 0 .005-.195l.397-17.787a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.035l.404-19.536.537-23.098a.605 4.004 0 0 0 .003-.195l.404-25.802a.605 4.004 0 0 0 0-.01l.403-26.692a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.025-1.684.115 7.917.404 27.583a.605 4.004 0 0 0 .003.162l.537 25.748.402 23.087a.605 4.004 0 0 0 .002.044l.402 21.35a.605 4.004 0 0 0 .003.098l.402 17.787a.605 4.004 0 0 0 .015.434l.537 13.314.402 10.653a.605 4.004 0 0 0 .046.814l.402 5.343a.605 4.004 0 0 0 .206 1.542l.402 1.77a.605 4.004 0 0 0 .765-.5l.537-3.55a.605 4.004 0 0 0 .14-1.434l.401-7.113a.605 4.004 0 0 0 .025-.499l.402-11.565a.605 4.004 0 0 0 .002-.035l.538-16.017a.605 4.004 0 0 0 .009-.326l.403-19.569a.605 4.004 0 0 0 .002-.065l.402-22.24a.605 4.004 0 0 0 .002-.065l.402-25.747.537-27.529a.605 4.004 0 0 0 .003-.14l.404-28.463a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.402-30.254a.605 4.003 0 0 0-.01-.347.605 4.003 0 0 0 .01-.348l-.402-30.254a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-28.462a.605 4.004 0 0 0-.003-.141l-.537-27.529-.402-25.747a.605 4.004 0 0 0-.002-.065l-.402-22.24a.605 4.004 0 0 0-.001-.065l-.404-19.568a.605 4.004 0 0 0-.009-.326l-.538-16.018a.605 4.004 0 0 0-.002-.034l-.402-11.566a.605 4.004 0 0 0-.024-.5l-.402-7.123a.605 4.004 0 0 0-.14-1.423l-.545-3.55a.605 4.004 0 0 0-.765-.5l-.402 1.77a.605 4.004 0 0 0-.206 1.542l-.402 5.343a.605 4.004 0 0 0-.046.814l-.402 10.642-.537 13.314a.605 4.004 0 0 0-.015.445l-.402 17.788a.605 4.004 0 0 0-.005.098l-.402 21.35a.605 4.004 0 0 0-.002.044l-.402 23.087-.537 25.747a.605 4.004 0 0 0-.003.163l-.404 27.583-.115 7.916-.024-1.683a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-26.692a.605 4.004 0 0 0 0-.01l-.404-25.802a.605 4.004 0 0 0-.003-.195l-.537-23.098-.404-19.536a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.035.605 4.004 0 0 0 0-.01l-.403-17.787a.605 4.004 0 0 0-.005-.195l-.404-13.336a.605 4.004 0 0 0-.025-.586l-.538-9.784a.605 4.004 0 0 0-.026-.424l-.404-5.342a.605 4.004 0 0 0-.35-2.01l-.403-.88a.605 4.004 0 0 0-.619.967l-.404 2.664a.605 4.004 0 0 0-.113 1.042l-.538 7.124a.605 4.004 0 0 0-.046.815l-.404 10.674a.605 4.004 0 0 0-.008.272l-.402 15.083-.537 17.745a.605 4.004 0 0 0-.007.271l-.403 20.46a.605 4.004 0 0 0 0 .055l-.404 23.13a.605 4.004 0 0 0 0 .035l-.404 24.857-.42 20.828-.125-8.286a.605 4.004 0 0 0-.003-.173l-.537-24.857-.402-23.076a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.035l-.403-20.459a.605 4.004 0 0 0-.007-.271l-.537-17.744-.402-15.084a.605 4.004 0 0 0-.006-.206l-.404-11.565a.605 4.004 0 0 0-.023-.5l-.404-7.112a.605 4.004 0 0 0-.093-1.097l-.537-4.452a.605 4.004 0 0 0-.663-1.292l-.404.89a.605 4.004 0 0 0-.326 1.737l-.404 4.442a.605 4.004 0 0 0-.056.793l-.402 8.014a.605 4.004 0 0 0-.007.087l-.538 11.565a.605 4.004 0 0 0-.016.478l-.404 15.127a.605 4.004 0 0 0-.003.097l-.403 17.745-.536 20.415a.605 4.004 0 0 0-.005.228L9.866 333a.605 4.004 0 0 0 0 .02l-.402 24.01a.605 4.004 0 0 0-.002.02l-.206 12.879-.337-20.014a.605 4.004 0 0 0 0-.01l-.403-23.13a.605 4.004 0 0 0-.005-.206l-.537-21.306-.402-18.635a.605 4.004 0 0 0-.004-.13l-.403-15.116a.605 4.004 0 0 0-.012-.336L6.617 257.7a.605 4.004 0 0 0-.007-.12l-.402-8.894a.605 4.004 0 0 0-.025-.423l-.402-6.233a.605 4.004 0 0 0-.221-1.749l-.403-1.78a.605 4.004 0 0 0-.607-.25l-.538 1.78a.605 4.004 0 0 0-.27 1.782l-.403 5.342a.605 4.004 0 0 0-.038.641l-.403 8.894a.605 4.004 0 0 0-.013.315l-.402 12.412-.535 15.084a.605 4.004 0 0 0-.012.347l-.402 18.69a.605 4.004 0 0 0-.002.02l-.402 19.568a.605 4.004 0 0 0-.001.065l-.402 22.174-.537 23.066a.605 4.004 0 0 0-.003.162l-.043 2.574-.1-4.441-.404-22.186a.605 4.004 0 0 0 0-.01l-.402-21.36a.605 4.004 0 0 0-.002-.065l-.403-18.678a.605 4.004 0 0 0-.007-.26l-.539-16.887-.402-13.325a.605 4.004 0 0 0-.006-.184l-.404-10.675a.605 4.004 0 0 0-.013-.293l-.402-8.003a.605 4.004 0 0 0-.146-1.564l-.539-3.562a.605 4.004 0 0 0-.236-.966l-.404-.89a.605 4.004 0 0 0-.674 1.39l-.404 3.561a.605 4.004 0 0 0-.04.413l-.539 6.233a.605 4.004 0 0 0-.06.934l-.401 9.784a.605 4.004 0 0 0-.009.218l-.403 12.455a.605 4.004 0 0 0-.004.141L-7.2 298.02l-.536 17.755a.605 4.004 0 0 0-.007.24l-.404 19.568a.605 4.004 0 0 0 0 .044l-.403 21.35a.605 4.004 0 0 0 0 .02l-.306 16.864-.24-13.303a.605 4.004 0 0 0-.006-.206l-.548-20.444-.402-18.624a.605 4.004 0 0 0-.002-.055l-.402-16.908a.605 4.004 0 0 0-.002-.065l-.403-15.127a.605 4.004 0 0 0-.019-.478l-.536-11.554-.404-8.883a.605 4.004 0 0 0-.023-.424l-.404-6.233a.605 4.004 0 0 0-.128-1.249l-.403-2.671a.605 4.004 0 0 0-.575-1.053l-.536.89a.605 4.004 0 0 0-.373 1.824l-.404 4.453a.605 4.004 0 0 0-.047.651l-.404 7.113a.605 4.004 0 0 0-.007.141l-.538 10.675a.605 4.004 0 0 0-.018.434l-.402 12.445a.605 4.004 0 0 0-.008.185l-.402 16.017a.605 4.004 0 0 0-.002.035l-.402 16.832-.535 18.624a.605 4.004 0 0 0-.007.228l-.402 20.458a.605 4.004 0 0 0-.001.02l-.148 7.83-.4-19.438a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-18.678a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-17.788a.605 4.004 0 0 0-.008-.326l-.537-15.083-.402-12.412a.605 4.004 0 0 0-.009-.218l-.403-9.784a.605 4.004 0 0 0-.031-.576l-.537-8.003a.605 4.004 0 0 0-.069-.782l-.404-3.55a.605 4.004 0 0 0-.148-.94l-.403-1.78a.605 4.004 0 0 0-.763.5l-.404 2.67a.605 4.004 0 0 0-.044.337l-.539 4.441a.605 4.004 0 0 0-.101 1.238l-.404 8.004a.605 4.004 0 0 0-.013.293l-.402 10.674a.605 4.004 0 0 0-.007.185l-.402 13.28-.535 15.063a.605 4.004 0 0 0-.009.293l-.403 16.897a.605 4.004 0 0 0 0 .034l-.402 17.734-.463 16.842-.089-4.278a.605 4.004 0 0 0-.005-.207l-.536-18.623-.402-16.832a.605 4.004 0 0 0-.002-.076l-.404-15.127a.605 4.004 0 0 0-.001-.087l-.404-13.346a.605 4.004 0 0 0-.02-.478l-.535-10.62-.4-8.829a.605 4.004 0 0 0-.038-.64l-.404-5.343a.605 4.004 0 0 0-.113-1.043l-.538-3.55a.605 4.004 0 0 0-.619-.967l-.404.88a.605 4.004 0 0 0-.236.966l-.404 2.671a.605 4.004 0 0 0-.113 1.043l-.402 5.343a.605 4.004 0 0 0-.021.304l-.539 8.894a.605 4.004 0 0 0-.024.51l-.404 10.675a.605 4.004 0 0 0-.007.185l-.402 13.346a.605 4.004 0 0 0-.001.055l-.402 14.182-.537 16.865a.605 4.004 0 0 0-.005.196l-.404 16.908a.605 4.004 0 0 0-.001.055l-.25 11.522-.302-13.324a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-16.908a.605 4.004 0 0 0-.01-.293l-.534-15.03-.4-14.138a.605 4.004 0 0 0-.006-.163l-.404-11.566a.605 4.004 0 0 0-.01-.25l-.403-8.904a.605 4.004 0 0 0-.038-.64l-.538-7.113a.605 4.004 0 0 0-.022-.272l-.403-4.441a.605 4.004 0 0 0-.184-1.27l-.404-1.781a.605 4.004 0 0 0-.67 0l-.403 1.78a.605 4.004 0 0 0-.092.5l-.538 3.551a.605 4.004 0 0 0-.128 1.26l-.404 6.222a.605 4.004 0 0 0-.023.435l-.4 8.828-.535 10.62a.605 4.004 0 0 0-.02.478l-.404 13.346a.605 4.004 0 0 0-.001.056l-.402 14.226a.605 4.004 0 0 0-.004.087l-.4 15.898-.534 15.909a.605 4.004 0 0 0-.008.282l-.03 1.27-.526-15.691-.4-15.04a.605 4.004 0 0 0-.002-.045l-.404-14.237a.605 4.004 0 0 0-.017-.434l-.533-11.467-.399-10.566a.605 4.004 0 0 0-.013-.293l-.404-8.015a.605 4.004 0 0 0-.032-.52l-.402-5.332a.605 4.004 0 0 0-.18-1.412l-.538-2.672a.605 4.004 0 0 0-.17-.597l-.404-.89a.605 4.004 0 0 0-.527.467l-.404 1.78a.605 4.004 0 0 0-.182 1.271l-.403 4.453a.605 4.004 0 0 0-.023.26l-.537 7.124a.605 4.004 0 0 0-.04.64l-.403 8.895a.605 4.004 0 0 0-.007.173l-.402 10.653-.536 13.313a.605 4.004 0 0 0-.009.24l-.404 13.346a.605 4.004 0 0 0-.003.087l-.402 15.127a.605 4.004 0 0 0-.002.035l-.344 13.682-.21-8.34a.605 4.004 0 0 0-.002-.076l-.404-14.236a.605 4.004 0 0 0-.007-.24l-.536-14.167-.4-12.39a.605 4.004 0 0 0-.006-.13l-.404-10.675a.605 4.004 0 0 0-.032-.652l-.532-7.905-.397-7.004a.605 4.004 0 0 0-.048-.652l-.402-4.452a.605 4.004 0 0 0-.184-1.27l-.415-1.789a.605 4.004 0 0 0-.482-.543l-.537.88a.605 4.004 0 0 0-.282 1.053l-.402 2.671a.605 4.004 0 0 0-.113 1.043l-.404 5.332a.605 4.004 0 0 0-.026.39l-.4 7.08-.536 8.85a.605 4.004 0 0 0-.026.522l-.402 10.675a.605 4.004 0 0 0-.005.13l-.404 12.455a.605 4.004 0 0 0-.001.056l-.4 13.248-.536 14.139a.605 4.004 0 0 0-.008.271l-.184 6.885-.374-13.15a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-13.347a.605 4.004 0 0 0-.002-.055l-.403-12.456a.605 4.004 0 0 0-.018-.424l-.535-10.62-.4-8.84a.605 4.004 0 0 0-.008-.12l-.403-8.002a.605 4.004 0 0 0-.033-.521l-.404-5.343a.605 4.004 0 0 0-.177-1.416l-.538-2.66a.605 4.004 0 0 0-.171-.598l-.404-.89a.605 4.004 0 0 0-.382 0l-.404.89a.605 4.004 0 0 0-.236.967l-.538 3.55a.605 4.004 0 0 0-.114 1.043l-.403 5.343a.605 4.004 0 0 0-.033.52l-.402 8.004a.605 4.004 0 0 0-.007.12l-.4 8.84-.535 10.62a.605 4.004 0 0 0-.015.358l-.404 11.565a.605 4.004 0 0 0-.003.12l-.404 13.346-.4 13.248-.046 1.216-.115-3.79a.605 4.004 0 0 0-.009-.25l-.535-13.248-.4-12.358a.605 4.004 0 0 0-.004-.13l-.403-10.674a.605 4.004 0 0 0-.004-.087l-.403-9.784a.605 4.004 0 0 0-.032-.576l-.535-7.982-.402-6.2a.605 4.004 0 0 0-.072-.826l-.403-3.55a.605 4.004 0 0 0-.056-.435l-.404-2.67a.605 4.004 0 0 0-.428-1.174h-.537a.605 4.004 0 0 0-.336.673l-.402 1.781a.605 4.004 0 0 0-.184 1.271l-.396 4.365-.53 5.256a.605 4.004 0 0 0-.07.956l-.404 8.014a.605 4.004 0 0 0-.005.108l-.404 8.894a.605 4.004 0 0 0-.008.185l-.399 10.566-.533 11.467a.605 4.004 0 0 0-.014.337l-.403 12.456-.282 8.73-.283-8.73a.605 4.004 0 0 0-.001-.065l-.404-11.566-.402-11.565a.605 4.004 0 0 0-.022-.467l-.535-9.73-.4-7.96a.605 4.004 0 0 0-.008-.13l-.404-7.124a.605 4.004 0 0 0-.062-.814l-.539-5.332a.605 4.004 0 0 0-.075-.619l-.404-2.66a.605 4.004 0 0 0-.092-.5l-.404-1.781a.605 4.004 0 0 0-.526-.467l-.402.89a.605 4.004 0 0 0-.173.587l-.538 2.67a.605 4.004 0 0 0-.156 1.141l-.402 4.452a.605 4.004 0 0 0-.038.489l-.403 6.222a.605 4.004 0 0 0-.01.174l-.404 7.113a.605 4.004 0 0 0-.002.044l-.538 9.784a.605 4.004 0 0 0-.015.315l-.403 9.785a.605 4.004 0 0 0-.005.151l-.4 11.424-.53 11.424a.605 4.004 0 0 0-.014.338l-.06 1.9-.513-11.022-.4-10.577a.605 4.004 0 0 0-.004-.087l-.402-9.784a.605 4.004 0 0 0-.005-.098l-.403-8.894a.605 4.004 0 0 0-.038-.64l-.53-7.005-.396-6.124a.605 4.004 0 0 0-.072-.826l-.404-3.562a.605 4.004 0 0 0-.121-.792l-.538-2.672a.605 4.004 0 0 0-.17-.597l-.405-.89a.605 4.004 0 0 0-.526.467l-.404 1.78a.605 4.004 0 0 0-.092.5l-.404 2.671a.605 4.004 0 0 0-.075.609l-.537 5.342a.605 4.004 0 0 0-.054.641l-.402 6.222a.605 4.004 0 0 0-.012.174l-.402 7.113a.605 4.004 0 0 0-.013.26l-.4 8.84-.535 10.62a.605 4.004 0 0 0-.013.293l-.404 10.675-.387 10.273-.187-4.941-.404-10.675a.605 4.004 0 0 0-.012-.293l-.535-10.62-.402-8.829a.605 4.004 0 0 0-.011-.26l-.404-7.114a.605 4.004 0 0 0-.011-.173l-.403-6.233a.605 4.004 0 0 0-.052-.64l-.538-5.333a.605 4.004 0 0 0-.076-.619l-.403-2.66a.605 4.004 0 0 0-.092-.5l-.404-1.78a.605 4.004 0 0 0-.335-.674h-.404a.605 4.004 0 0 0-.27.423l-.539 1.781a.605 4.004 0 0 0-.213 1.173l-.402 3.562a.605 4.004 0 0 0-.058.608l-.395 5.245-.53 6.125a.605 4.004 0 0 0-.05.717l-.401 8.014-.404 8.003a.605 4.004 0 0 0-.01.217l-.399 9.676-.533 10.566a.605 4.004 0 0 0-.013.293l-.168 4.452-.415-8.242-.399-8.796-.402-9.73a.605 4.004 0 0 0-.043-.738l-.523-6.928-.392-6.918a.605 4.004 0 0 0-.025-.39l-.404-5.333a.605 4.004 0 0 0-.02-.27l-.405-4.453a.605 4.004 0 0 0-.247-1.52l-.539-1.781a.605 4.004 0 0 0-.078-.218l-.404-.89a.605 4.004 0 0 0-.383 0l-.403.89a.605 4.004 0 0 0-.145.468l-.403 1.78a.605 4.004 0 0 0-.092.5l-.539 3.562a.605 4.004 0 0 0-.113 1.042l-.402 5.332a.605 4.004 0 0 0-.026.39l-.392 6.918-.524 6.928a.605 4.004 0 0 0-.037.641l-.404 8.894-.404 8.894a.605 4.004 0 0 0-.003.097l-.399 9.676-.103 2.03-.079-1.921-.403-9.785a.605 4.004 0 0 0-.022-.434l-.532-8.785-.397-7.895a.605 4.004 0 0 0-.01-.14l-.402-7.114a.605 4.004 0 0 0-.042-.586l-.537-6.223a.605 4.004 0 0 0-.007-.076l-.404-4.441a.605 4.004 0 0 0-.034-.348l-.404-3.561a.605 4.004 0 0 0-.148-.923l-.403-1.781a.605 4.004 0 0 0-.337-.674h-.536a.605 4.004 0 0 0-.337.674l-.404 1.78a.605 4.004 0 0 0-.091.5l-.402 2.671a.605 4.004 0 0 0-.058.424l-.402 3.562a.605 4.004 0 0 0-.02.184l-.538 5.332a.605 4.004 0 0 0-.062.815l-.404 7.123-.404 7.113a.605 4.004 0 0 0-.013.25l-.395 8.73-.527 8.732a.605 4.004 0 0 0-.018.336l-.335 7.384-.254-5.603-.404-8.905-.404-8.894a.605 4.004 0 0 0-.038-.64l-.53-7.005-.395-6.124a.605 4.004 0 0 0-.015-.218l-.404-5.332a.605 4.004 0 0 0-.057-.608l-.404-3.562a.605 4.004 0 0 0-.12-.803l-.538-2.672a.605 4.004 0 0 0-.172-.586l-.404-.89a.605 4.004 0 0 0-.19-.207h-.404a.605 4.004 0 0 0-.27.423l-.537 1.781a.605 4.004 0 0 0-.214 1.173l-.404 3.562a.605 4.004 0 0 0-.034.336l-.404 4.452a.605 4.004 0 0 0-.023.272l-.395 5.234-.53 6.135a.605 4.004 0 0 0-.048.717l-.404 8.003-.403 8.014a.605 4.004 0 0 0-.005.109l-.396 8.73-.208 3.443a.605 4.004 0 0 0-.003-.056l-.53-8.785-.399-7.895-.402-8.003a.605 4.004 0 0 0-.018-.315l-.404-6.222a.605 4.004 0 0 0-.031-.413l-.538-6.233a.605 4.004 0 0 0-.005-.065l-.404-4.452a.605 4.004 0 0 0-.092-.771l-.394-2.671a.605 4.004 0 0 0-.093-.5l-.4-1.777a.605 4.004 0 0 0-.189-.543l-.538-.89a.605 4.004 0 0 0-.338.086l-.404.88a.605 4.004 0 0 0-.144.467l-.404 1.781a.605 4.004 0 0 0-.092.5l-.537 3.562a.605 4.004 0 0 0-.091.77l-.404 4.453a.605 4.004 0 0 0-.036.478l-.404 6.233-.402 6.2-.537 7.982a.605 4.004 0 0 0-.02.358l-.403 8.003-.404 8.004a.605 4.004 0 0 0-.007.12l-.024.532-.165-3.258-.4-8.84a.605 4.004 0 0 0-.013-.25l-.404-7.123a.605 4.004 0 0 0-.024-.38l-.53-7.016-.398-6.113a.605 4.004 0 0 0-.036-.489l-.403-4.441a.605 4.004 0 0 0-.046-.446l-.539-4.452a.605 4.004 0 0 0-.136-.825l-.404-1.781-.403-1.781a.605 4.004 0 0 0-.335-.674h-.404a.605 4.004 0 0 0-.147.12l-.537.89a.605 4.004 0 0 0-.28 1.054l-.404 2.671a.605 4.004 0 0 0-.056.424l-.404 3.562a.605 4.004 0 0 0-.057.608l-.388 5.115-.515 5.136a.605 4.004 0 0 0-.064.814l-.404 7.113-.397 7.004-.53 7.906a.605 4.004 0 0 0-.021.358l-.23 4.561-.38-5.636-.393-7.819a.605 4.004 0 0 0-.01-.14l-.401-7.124a.605 4.004 0 0 0-.012-.163l-.402-6.233a.605 4.004 0 0 0-.05-.641l-.53-5.256-.398-4.366a.605 4.004 0 0 0-.034-.347l-.403-3.562a.605 4.004 0 0 0-.215-1.173l-.536-1.78a.605 4.004 0 0 0-.08-.218l-.403-.89a.605 4.004 0 0 0-.382 0l-.404.89-.403.89a.605 4.004 0 0 0-.237.967l-.538 3.562a.605 4.004 0 0 0-.056.423l-.404 3.562a.605 4.004 0 0 0-.057.608l-.402 5.343a.605 4.004 0 0 0-.017.206l-.39 6.016-.52 6.038a.605 4.004 0 0 0-.04.576l-.403 7.113a.605 4.004 0 0 0-.01.14l-.395 7.83-.148 2.205-.057-1.14-.404-8.004a.605 4.004 0 0 0-.033-.52l-.53-7.016-.395-6.114-.404-6.233a.605 4.004 0 0 0-.038-.478l-.402-4.452a.605 4.004 0 0 0-.047-.434l-.537-4.453a.605 4.004 0 0 0-.044-.325l-.404-2.672a.605 4.004 0 0 0-.092-.5l-.404-1.78a.605 4.004 0 0 0-.336-.673h-.402a.605 4.004 0 0 0-.148.12l-.537.89a.605 4.004 0 0 0-.19.554l-.402 1.78a.605 4.004 0 0 0-.15.924l-.396 3.507-.532 4.398a.605 4.004 0 0 0-.046.446l-.404 4.452a.605 4.004 0 0 0-.038.478l-.403 6.233a.605 4.004 0 0 0-.01.163l-.393 6.928-.523 6.928a.605 4.004 0 0 0-.033.521l-.333 6.603-.28-4.181-.398-7.015-.404-7.113a.605 4.004 0 0 0-.04-.576l-.529-6.135-.396-5.234a.605 4.004 0 0 0-.022-.272l-.404-4.452a.605 4.004 0 0 0-.035-.337l-.403-3.561a.605 4.004 0 0 0-.214-1.173l-.503-1.672-.373-1.64a.605 4.004 0 0 0-.334-.674h-.404a.605 4.004 0 0 0-.335.673l-.404 1.781a.605 4.004 0 0 0-.027.13l-.539 2.66a.605 4.004 0 0 0-.12.805l-.403 3.561a.605 4.004 0 0 0-.035.337l-.395 4.365-.53 5.267a.605 4.004 0 0 0-.053.64l-.403 6.223a.605 4.004 0 0 0-.01.173l-.404 7.113-.392 6.928-.25 3.29-.377-6.656a.605 4.004 0 0 0-.025-.38l-.53-7.016-.396-6.124-.403-6.223a.605 4.004 0 0 0-.084-.923l-.512-4.235-.382-4.224a.605 4.004 0 0 0-.092-.771l-.402-2.66a.605 4.004 0 0 0-.094-.5l-.402-1.78a.605 4.004 0 0 0-.19-.555l-.537-.89a.605 4.004 0 0 0-.338.087l-.404.89a.605 4.004 0 0 0-.144.467l-.404 1.781a.605 4.004 0 0 0-.092.5l-.404 2.66-.536 3.562a.605 4.004 0 0 0-.113 1.042l-.404 5.332-.404 5.343a.605 4.004 0 0 0-.015.218l-.395 6.114-.53 7.015a.605 4.004 0 0 0-.026.38l-.403 7.113a.605 4.004 0 0 0-.009.14l-.054 1.065-.143-2.834a.605 4.004 0 0 0-.007-.141l-.403-7.124-.404-7.113a.605 4.004 0 0 0-.04-.586l-.531-6.125-.396-5.234a.605 4.004 0 0 0-.02-.271l-.405-4.452a.605 4.004 0 0 0-.034-.338l-.404-3.561a.605 4.004 0 0 0-.121-.804l-.537-2.671a.605 4.004 0 0 0-.172-.587l-.404-.89a.605 4.004 0 0 0-.19-.206h-.404a.605 4.004 0 0 0-.148.12l-.536.89a.605 4.004 0 0 0-.19.554l-.401 1.77a.605 4.004 0 0 0-.15.934l-.402 3.561-.403 3.551a.605 4.004 0 0 0-.02.185l-.538 5.343a.605 4.004 0 0 0-.053.64l-.402 6.223-.404 6.233a.605 4.004 0 0 0-.01.174l-.392 6.917-.387 5.115-.386-5.115-.392-6.917a.605 4.004 0 0 0-.01-.174l-.404-6.233-.402-6.222a.605 4.004 0 0 0-.054-.641l-.536-5.343a.605 4.004 0 0 0-.02-.185l-.404-3.55-.404-3.562a.605 4.004 0 0 0-.147-.934l-.404-1.77a.605 4.004 0 0 0-.189-.554l-.536-.89a.605 4.004 0 0 0-.148-.12h-.404a.605 4.004 0 0 0-.19.206l-.404.89a.605 4.004 0 0 0-.172.587l-.537 2.671a.605 4.004 0 0 0-.121.804l-.404 3.561a.605 4.004 0 0 0-.034.338l-.404 4.452a.605 4.004 0 0 0-.022.271l-.397 5.234-.528 6.125a.605 4.004 0 0 0-.041.586l-.404 7.113-.404 7.124a.605 4.004 0 0 0-.009.14l-.142 2.835-.055-1.064a.605 4.004 0 0 0-.009-.141l-.402-7.113a.605 4.004 0 0 0-.026-.38l-.53-7.015-.395-6.114a.605 4.004 0 0 0-.015-.218l-.404-5.343-.404-5.332a.605 4.004 0 0 0-.113-1.042l-.537-3.562-.403-2.66a.605 4.004 0 0 0-.092-.5l-.404-1.78a.605 4.004 0 0 0-.144-.468l-.404-.89a.605 4.004 0 0 0-.338-.087l-.538.89a.605 4.004 0 0 0-.189.554l-.402 1.781a.605 4.004 0 0 0-.094.5l-.402 2.66a.605 4.004 0 0 0-.092.77l-.382 4.225-.512 4.235a.605 4.004 0 0 0-.084.923l-.403 6.223-.396 6.124-.53 7.015a.605 4.004 0 0 0-.025.38l-.377 6.658-.25-3.29-.392-6.929-.404-7.113a.605 4.004 0 0 0-.01-.173l-.403-6.223a.605 4.004 0 0 0-.053-.64l-.53-5.267-.395-4.365a.605 4.004 0 0 0-.035-.337l-.404-3.561a.605 4.004 0 0 0-.121-.804l-.537-2.66a.605 4.004 0 0 0-.028-.13l-.403-1.782a.605 4.004 0 0 0-.334-.673h-.404a.605 4.004 0 0 0-.335.673l-.373 1.64-.503 1.673a.605 4.004 0 0 0-.214 1.172l-.403 3.562a.605 4.004 0 0 0-.035.336l-.404 4.453a.605 4.004 0 0 0-.023.27l-.395 5.235-.529 6.135a.605 4.004 0 0 0-.04.576l-.404 7.113-.397 7.015-.281 4.18-.333-6.602a.605 4.004 0 0 0-.033-.52l-.523-6.929-.393-6.928a.605 4.004 0 0 0-.01-.163l-.403-6.233a.605 4.004 0 0 0-.038-.478l-.404-4.452a.605 4.004 0 0 0-.046-.446l-.532-4.398-.397-3.507a.605 4.004 0 0 0-.149-.923l-.402-1.781a.605 4.004 0 0 0-.19-.554l-.537-.89a.605 4.004 0 0 0-.148-.12h-.402a.605 4.004 0 0 0-.336.673l-.404 1.781a.605 4.004 0 0 0-.092.5l-.404 2.67a.605 4.004 0 0 0-.044.326l-.537 4.453a.605 4.004 0 0 0-.047.434l-.402 4.453a.605 4.004 0 0 0-.038.477l-.404 6.233-.395 6.114-.53 7.015a.605 4.004 0 0 0-.033.521l-.404 8.004-.057 1.14-.148-2.205-.396-7.83a.605 4.004 0 0 0-.007-.14l-.403-7.113a.605 4.004 0 0 0-.041-.576l-.52-6.037-.391-6.016a.605 4.004 0 0 0-.015-.206l-.404-5.343a.605 4.004 0 0 0-.055-.608l-.404-3.562a.605 4.004 0 0 0-.056-.424l-.538-3.562a.605 4.004 0 0 0-.236-.966l-.404-.89-.404-.891a.605 4.004 0 0 0-.382 0l-.404.89a.605 4.004 0 0 0-.079.218l-.538 1.78a.605 4.004 0 0 0-.213 1.174l-.402 3.562a.605 4.004 0 0 0-.037.347l-.395 4.365-.53 5.256a.605 4.004 0 0 0-.053.641l-.402 6.233a.605 4.004 0 0 0-.011.163l-.404 7.124a.605 4.004 0 0 0-.007.141l-.394 7.82-.379 5.635-.23-4.56a.605 4.004 0 0 0-.021-.359l-.53-7.905-.397-7.005-.404-7.112a.605 4.004 0 0 0-.064-.815l-.517-5.136-.386-5.115a.605 4.004 0 0 0-.057-.608l-.404-3.562a.605 4.004 0 0 0-.056-.424l-.403-2.671a.605 4.004 0 0 0-.281-1.053l-.538-.89a.605 4.004 0 0 0-.146-.12h-.404a.605 4.004 0 0 0-.335.673l-.402 1.78-.404 1.782a.605 4.004 0 0 0-.136.825l-.538 4.452a.605 4.004 0 0 0-.046.446l-.404 4.441a.605 4.004 0 0 0-.036.489l-.397 6.113-.53 7.016a.605 4.004 0 0 0-.026.38l-.404 7.124a.605 4.004 0 0 0-.012.25l-.4 8.839-.164 3.258-.025-.533a.605 4.004 0 0 0-.007-.12l-.403-8.003-.404-8.003a.605 4.004 0 0 0-.02-.358l-.536-7.981-.403-6.201-.403-6.233a.605 4.004 0 0 0-.036-.478l-.404-4.452a.605 4.004 0 0 0-.092-.771l-.537-3.562a.605 4.004 0 0 0-.091-.5l-.404-1.78a.605 4.004 0 0 0-.144-.468l-.404-.88a.605 4.004 0 0 0-.338-.086l-.538.89a.605 4.004 0 0 0-.189.544l-.402 1.78a.605 4.004 0 0 0-.093.5l-.402 2.672a.605 4.004 0 0 0-.092.77l-.404 4.453a.605 4.004 0 0 0-.007.065l-.537 6.233a.605 4.004 0 0 0-.03.413l-.405 6.222a.605 4.004 0 0 0-.018.315l-.402 8.003-.399 7.895-.53 8.785a.605 4.004 0 0 0-.003.056l-.208-3.443-.396-8.73a.605 4.004 0 0 0-.005-.109l-.403-8.014-.404-8.003a.605 4.004 0 0 0-.048-.717l-.53-6.135-.395-5.235a.605 4.004 0 0 0-.023-.27l-.404-4.453a.605 4.004 0 0 0-.034-.336l-.404-3.562a.605 4.004 0 0 0-.213-1.173l-.537-1.78a.605 4.004 0 0 0-.27-.424h-.404a.605 4.004 0 0 0-.192.206l-.402.89a.605 4.004 0 0 0-.173.587l-.538 2.671a.605 4.004 0 0 0-.12.804l-.404 3.561a.605 4.004 0 0 0-.057.609l-.404 5.332a.605 4.004 0 0 0-.015.217l-.395 6.125-.53 7.004a.605 4.004 0 0 0-.038.64l-.404 8.894-.403 8.905-.255 5.603-.335-7.384a.605 4.004 0 0 0-.018-.336l-.526-8.73-.396-8.732a.605 4.004 0 0 0-.013-.25l-.404-7.112-.403-7.124a.605 4.004 0 0 0-.063-.815l-.538-5.331a.605 4.004 0 0 0-.02-.185l-.402-3.562a.605 4.004 0 0 0-.057-.424l-.402-2.671a.605 4.004 0 0 0-.094-.5l-.402-1.78a.605 4.004 0 0 0-.336-.673h-.537a.605 4.004 0 0 0-.336.673l-.403 1.78a.605 4.004 0 0 0-.147.924l-.404 3.562a.605 4.004 0 0 0-.034.347l-.404 4.442a.605 4.004 0 0 0-.01.076l-.536 6.223a.605 4.004 0 0 0-.042.586l-.403 7.113a.605 4.004 0 0 0-.009.14l-.397 7.896-.531 8.785a.605 4.004 0 0 0-.022.434l-.404 9.784-.078 1.922-.104-2.03-.398-9.676a.605 4.004 0 0 0-.003-.098l-.404-8.894-.404-8.893a.605 4.004 0 0 0-.038-.64l-.523-6.93-.392-6.917a.605 4.004 0 0 0-.027-.39l-.402-5.332a.605 4.004 0 0 0-.113-1.043l-.538-3.562a.605 4.004 0 0 0-.092-.499l-.404-1.78a.605 4.004 0 0 0-.144-.468l-.404-.89a.605 4.004 0 0 0-.382 0l-.404.89a.605 4.004 0 0 0-.079.217l-.538 1.781a.605 4.004 0 0 0-.248 1.52l-.403 4.453a.605 4.004 0 0 0-.022.271l-.403 5.332a.605 4.004 0 0 0-.025.39l-.392 6.918-.524 6.928a.605 4.004 0 0 0-.043.739l-.402 9.73-.398 8.796-.416 8.242-.167-4.452a.605 4.004 0 0 0-.013-.293l-.534-10.566-.398-9.676a.605 4.004 0 0 0-.01-.217l-.404-8.004-.402-8.014a.605 4.004 0 0 0-.05-.717l-.53-6.124-.395-5.245a.605 4.004 0 0 0-.057-.608l-.402-3.562a.605 4.004 0 0 0-.214-1.173l-.538-1.781a.605 4.004 0 0 0-.27-.424h-.405a.605 4.004 0 0 0-.334.674l-.404 1.78a.605 4.004 0 0 0-.092.5l-.402 2.66a.605 4.004 0 0 0-.075.62l-.539 5.332a.605 4.004 0 0 0-.052.64l-.404 6.234a.605 4.004 0 0 0-.01.173l-.404 7.113a.605 4.004 0 0 0-.013.26l-.4 8.83-.535 10.62a.605 4.004 0 0 0-.013.293l-.402 10.674-.187 4.941-.388-10.273-.403-10.674a.605 4.004 0 0 0-.014-.293l-.535-10.62-.4-8.84a.605 4.004 0 0 0-.013-.26l-.402-7.114a.605 4.004 0 0 0-.012-.173l-.402-6.222a.605 4.004 0 0 0-.054-.641l-.537-5.343a.605 4.004 0 0 0-.075-.608l-.404-2.671a.605 4.004 0 0 0-.092-.5l-.403-1.78a.605 4.004 0 0 0-.527-.468l-.404.89a.605 4.004 0 0 0-.17.598l-.539 2.671a.605 4.004 0 0 0-.121.793l-.404 3.562a.605 4.004 0 0 0-.072.825l-.395 6.125-.53 7.004a.605 4.004 0 0 0-.038.64l-.404 8.895a.605 4.004 0 0 0-.005.097l-.402 9.785a.605 4.004 0 0 0-.005.086l-.4 10.577-.513 11.023-.06-1.9a.605 4.004 0 0 0-.013-.338l-.532-11.424-.399-11.424a.605 4.004 0 0 0-.005-.152l-.404-9.784a.605 4.004 0 0 0-.014-.315l-.539-9.784a.605 4.004 0 0 0-.002-.045l-.403-7.113a.605 4.004 0 0 0-.01-.173l-.404-6.222a.605 4.004 0 0 0-.038-.489l-.402-4.452a.605 4.004 0 0 0-.156-1.14l-.538-2.672a.605 4.004 0 0 0-.172-.586l-.403-.89a.605 4.004 0 0 0-.526.467l-.404 1.78a.605 4.004 0 0 0-.092.5l-.404 2.66a.605 4.004 0 0 0-.075.62l-.538 5.332a.605 4.004 0 0 0-.063.814l-.403 7.124a.605 4.004 0 0 0-.01.13l-.4 7.96-.535 9.73a.605 4.004 0 0 0-.021.467l-.402 11.565-.404 11.565a.605 4.004 0 0 0-.002.065l-.282 8.731-.283-8.73-.403-12.456a.605 4.004 0 0 0-.013-.337l-.534-11.467-.399-10.566a.605 4.004 0 0 0-.009-.185l-.403-8.894a.605 4.004 0 0 0-.005-.108l-.404-8.014a.605 4.004 0 0 0-.07-.956l-.53-5.255-.396-4.366a.605 4.004 0 0 0-.184-1.27l-.4-1.781a.605 4.004 0 0 0-.337-.674h-.536a.605 4.004 0 0 0-.429 1.173l-.404 2.672a.605 4.004 0 0 0-.055.434l-.404 3.55a.605 4.004 0 0 0-.072.826l-.402 6.2-.535 7.983a.605 4.004 0 0 0-.032.575l-.403 9.784a.605 4.004 0 0 0-.003.087l-.404 10.675a.605 4.004 0 0 0-.005.13l-.4 12.358-.535 13.248a.605 4.004 0 0 0-.01.25l-.114 3.79-.046-1.216-.4-13.249-.404-13.346a.605 4.004 0 0 0-.003-.12l-.404-11.565a.605 4.004 0 0 0-.015-.358l-.535-10.62-.4-8.84a.605 4.004 0 0 0-.007-.12l-.402-8.003a.605 4.004 0 0 0-.033-.52l-.404-5.343a.605 4.004 0 0 0-.113-1.043l-.538-3.55a.605 4.004 0 0 0-.237-.967l-.403-.89a.605 4.004 0 0 0-.383 0l-.404.89a.605 4.004 0 0 0-.17.597l-.539 2.66a.605 4.004 0 0 0-.177 1.412l-.403 5.343a.605 4.004 0 0 0-.033.521l-.404 8.003a.605 4.004 0 0 0-.005.12l-.4 8.84-.535 10.62a.605 4.004 0 0 0-.019.423l-.403 12.456a.605 4.004 0 0 0-.002.056l-.404 13.346a.605 4.004 0 0 0-.002.044l-.372 13.151-.184-6.885a.605 4.004 0 0 0-.01-.27l-.534-14.14-.4-13.248a.605 4.004 0 0 0-.002-.056l-.404-12.455a.605 4.004 0 0 0-.005-.13l-.402-10.675a.605 4.004 0 0 0-.026-.521l-.535-8.85-.4-7.08a.605 4.004 0 0 0-.027-.391l-.403-5.332a.605 4.004 0 0 0-.114-1.043l-.4-2.675a.605 4.004 0 0 0-.282-1.054l-.536-.88a.605 4.004 0 0 0-.483.544l-.403 1.781a.605 4.004 0 0 0-.184 1.27l-.402 4.453a.605 4.004 0 0 0-.048.651l-.397 7.005-.532 7.905a.605 4.004 0 0 0-.033.652l-.403 10.674a.605 4.004 0 0 0-.005.13l-.4 12.391-.537 14.16a.605 4.004 0 0 0-.007.24l-.404 14.236a.605 4.004 0 0 0-.002.076l-.21 8.34-.345-13.682a.605 4.004 0 0 0-.002-.035l-.402-15.127a.605 4.004 0 0 0-.003-.087l-.404-13.346a.605 4.004 0 0 0-.009-.239l-.536-13.313-.402-10.653a.605 4.004 0 0 0-.01-.174l-.402-8.893a.605 4.004 0 0 0-.04-.641l-.536-7.124a.605 4.004 0 0 0-.023-.26l-.404-4.453a.605 4.004 0 0 0-.179-1.27l-.404-1.781a.605 4.004 0 0 0-.526-.468l-.404.89a.605 4.004 0 0 0-.172.598l-.537 2.672a.605 4.004 0 0 0-.179 1.411l-.402 5.332a.605 4.004 0 0 0-.033.521l-.404 8.014a.605 4.004 0 0 0-.013.293l-.4 10.566-.532 11.468a.605 4.004 0 0 0-.016.434l-.404 14.237a.605 4.004 0 0 0-.002.044l-.4 15.04-.527 15.692-.031-1.27a.605 4.004 0 0 0-.01-.283l-.533-15.909-.4-15.898a.605 4.004 0 0 0-.003-.087l-.402-14.225a.605 4.004 0 0 0-.002-.056l-.404-13.346a.605 4.004 0 0 0-.02-.477l-.535-10.62-.4-8.83a.605 4.004 0 0 0-.023-.434l-.404-6.222a.605 4.004 0 0 0-.128-1.26l-.538-3.55a.605 4.004 0 0 0-.092-.5l-.404-1.782a.605 4.004 0 0 0-.67 0l-.403 1.781a.605 4.004 0 0 0-.184 1.27l-.403 4.442a.605 4.004 0 0 0-.022.272l-.538 7.113a.605 4.004 0 0 0-.038.64l-.404 8.905a.605 4.004 0 0 0-.01.25l-.403 11.565a.605 4.004 0 0 0-.005.163l-.4 14.139-.536 15.029a.605 4.004 0 0 0-.009.293l-.403 16.908a.605 4.004 0 0 0-.002.035l-.3 13.313-.25-11.51a.605 4.004 0 0 0-.002-.056l-.404-16.908a.605 4.004 0 0 0-.005-.196l-.537-16.864-.402-14.183a.605 4.004 0 0 0-.002-.055l-.402-13.346a.605 4.004 0 0 0-.007-.185l-.403-10.675a.605 4.004 0 0 0-.025-.51l-.538-8.894a.605 4.004 0 0 0-.022-.304l-.402-5.343a.605 4.004 0 0 0-.113-1.042l-.404-2.672a.605 4.004 0 0 0-.236-.966l-.404-.88a.605 4.004 0 0 0-.619.967l-.538 3.55a.605 4.004 0 0 0-.113 1.043l-.404 5.343a.605 4.004 0 0 0-.038.64l-.4 8.83-.535 10.62a.605 4.004 0 0 0-.02.477l-.403 13.346a.605 4.004 0 0 0-.002.087l-.404 15.127a.605 4.004 0 0 0-.002.076l-.402 16.832-.537 18.624a.605 4.004 0 0 0-.005.206l-.088 4.279-.463-16.843-.402-17.733a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-16.897a.605 4.004 0 0 0-.009-.293l-.535-15.062-.402-13.281a.605 4.004 0 0 0-.007-.185l-.402-10.675a.605 4.004 0 0 0-.013-.293l-.404-8.003a.605 4.004 0 0 0-.1-1.238l-.538-4.441a.605 4.004 0 0 0-.045-.336l-.403-2.672a.605 4.004 0 0 0-.763-.5l-.404 1.781a.605 4.004 0 0 0-.148.934l-.404 3.551a.605 4.004 0 0 0-.068.782l-.537 8.003a.605 4.004 0 0 0-.031.576l-.404 9.784a.605 4.004 0 0 0-.01.218l-.402 12.412-.537 15.083a.605 4.004 0 0 0-.009.326l-.403 17.788a.605 4.004 0 0 0 0 .034l-.404 18.678a.605 4.004 0 0 0 0 .02l-.402 19.406-.146-7.797a.605 4.004 0 0 0-.002-.02l-.402-20.459a.605 4.004 0 0 0-.007-.228l-.535-18.623-.402-16.832a.605 4.004 0 0 0-.002-.035l-.404-16.018a.605 4.004 0 0 0-.005-.184l-.4-12.441a.605 4.004 0 0 0-.018-.434l-.538-10.675a.605 4.004 0 0 0-.007-.14l-.404-7.114a.605 4.004 0 0 0-.047-.651l-.404-4.453a.605 4.004 0 0 0-.373-1.824l-.536-.89a.605 4.004 0 0 0-.575 1.053l-.403 2.671a.605 4.004 0 0 0-.128 1.25l-.404 6.232a.605 4.004 0 0 0-.023.424l-.404 8.883-.536 11.554a.605 4.004 0 0 0-.018.478l-.404 15.127a.605 4.004 0 0 0-.002.065l-.402 16.908a.605 4.004 0 0 0-.002.055l-.402 18.624-.537 20.405a.605 4.004 0 0 0-.005.206l-.241 13.302-.305-16.864a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-21.35a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-19.569a.605 4.004 0 0 0-.007-.239l-.536-17.755-.402-15.073a.605 4.004 0 0 0-.003-.141l-.404-12.456a.605 4.004 0 0 0-.009-.217l-.404-9.784a.605 4.004 0 0 0-.057-.934l-.538-6.234a.605 4.004 0 0 0-.041-.412l-.404-3.562a.605 4.004 0 0 0-.675-1.39l-.403.89a.605 4.004 0 0 0-.237.967l-.538 3.562a.605 4.004 0 0 0-.146 1.564l-.404 8.003a.605 4.004 0 0 0-.011.293l-.404 10.675a.605 4.004 0 0 0-.009.184l-.402 13.325-.538 16.886a.605 4.004 0 0 0-.007.26l-.404 18.679a.605 4.004 0 0 0-.002.065l-.402 21.36a.605 4.004 0 0 0-.002.01l-.402 22.185-.1 4.442-.043-2.574a.605 4.004 0 0 0-.003-.163l-.537-23.065-.402-22.175a.605 4.004 0 0 0-.002-.065l-.402-19.568a.605 4.004 0 0 0-.002-.02l-.403-18.689a.605 4.004 0 0 0-.01-.347l-.535-15.084-.403-12.412a.605 4.004 0 0 0-.013-.315l-.403-8.894a.605 4.004 0 0 0-.038-.64l-.404-5.344a.605 4.004 0 0 0-.27-1.78l-.537-1.782a.605 4.004 0 0 0-.608.25l-.402 1.781a.605 4.004 0 0 0-.221 1.749l-.402 6.233a.605 4.004 0 0 0-.025.423l-.402 8.894a.605 4.004 0 0 0-.007.12l-.537 13.346a.605 4.004 0 0 0-.011.336l-.404 15.116a.605 4.004 0 0 0-.003.13l-.402 18.635-.536 21.306a.605 4.004 0 0 0-.003.206l-.404 23.13a.605 4.004 0 0 0 0 .01l-.333 20.014-.209-12.88a.605 4.004 0 0 0-.002-.02l-.403-24.01a.605 4.004 0 0 0-.002-.019l-.402-23.13a.605 4.004 0 0 0-.005-.228l-.537-20.416-.402-17.744a.605 4.004 0 0 0-.003-.098l-.404-15.127a.605 4.004 0 0 0-.016-.477l-.539-11.565a.605 4.004 0 0 0-.005-.087l-.402-8.015a.605 4.004 0 0 0-.055-.792l-.404-4.442a.605 4.004 0 0 0-.327-1.737l-.403-.89a.605 4.004 0 0 0-.663 1.292l-.539 4.452a.605 4.004 0 0 0-.093 1.097l-.404 7.113a.605 4.004 0 0 0-.023.499l-.404 11.565a.605 4.004 0 0 0-.007.207l-.402 15.083-.536 17.744a.605 4.004 0 0 0-.007.272l-.404 20.459a.605 4.004 0 0 0 0 .055l-.402 23.076-.537 24.857a.605 4.004 0 0 0-.003.174l-.124 8.285-.42-20.828-.404-24.857a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.404-23.13a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.035.605 4.004 0 0 0 0-.01l-.395-20.459a.605 4.004 0 0 0-.007-.271l-.536-17.744-.402-15.084a.605 4.004 0 0 0-.01-.27l-.402-10.676a.605 4.004 0 0 0-.046-.814l-.539-7.124a.605 4.004 0 0 0-.113-1.042l-.403-2.66a.605 4.004 0 0 0-.62-.967l-.403.88a.605 4.004 0 0 0-.35 2.008l-.403 5.343a.605 4.004 0 0 0-.026.424l-.539 9.784a.605 4.004 0 0 0-.024.586l-.404 13.335a.605 4.004 0 0 0-.005.196l-.404 17.787a.605 4.004 0 0 0 0 .056l-.403 19.536-.537 23.097a.605 4.004 0 0 0-.003.196l-.404 25.801a.605 4.004 0 0 0 0 .01l-.404 26.692a.605 4.004 0 0 0 0 .02l-.024 1.684-.115-7.917-.404-27.583a.605 4.004 0 0 0-.003-.162l-.536-25.748-.403-23.087a.605 4.004 0 0 0-.002-.044l-.402-21.35a.605 4.004 0 0 0-.003-.098l-.402-17.787a.605 4.004 0 0 0-.014-.446l-.537-13.313-.402-10.642a.605 4.004 0 0 0-.046-.815l-.402-5.342a.605 4.004 0 0 0-.207-1.542zm-.323 8.905.223 2.932.387 10.25a.605 4.004 0 0 0 .002.066l.53 13.129.397 17.516.402 21.284.403 23.109a.605 4.004 0 0 0 .002.086l.536 25.715.402 27.507.404 27.572a.605 4.004 0 0 0 .002.108l.327 17.299-.327 17.299a.605 4.004 0 0 0-.002.108l-.404 27.572-.402 27.496-.536 25.725a.605 4.004 0 0 0-.002.087l-.403 23.109-.402 21.284-.397 17.516-.53 13.129a.605 4.004 0 0 0-.002.065l-.387 10.251-.223 2.932-.03-.195-.345-6.06-.393-11.293-.532-15.833-.399-19.373-.402-22.175-.402-25.769a.605 4.004 0 0 0-.003-.098l-.537-27.506-.402-28.387-.399-29.884.4-29.885.401-28.386.537-27.507a.605 4.004 0 0 0 .003-.098l.402-25.769.402-22.175.399-19.373.532-15.833.393-11.293.345-6.06zm462.445 0 .03.195.344 6.06.394 11.293.531 15.833.4 19.373.401 22.175.402 25.769a.605 4.004 0 0 0 .002.098l.537 27.506.402 28.387.398 29.884-.398 29.885-.402 28.387-.537 27.506a.605 4.004 0 0 0-.002.098l-.402 25.77-.402 22.174-.399 19.373-.531 15.833-.394 11.293-.345 6.06-.03.195-.223-2.932-.387-10.251a.605 4.004 0 0 0-.003-.065l-.53-13.129-.396-17.516-.404-21.284-.4-23.109a.605 4.004 0 0 0-.003-.087l-.537-25.726-.402-27.495-.404-27.572a.605 4.004 0 0 0-.002-.108l-.326-17.3.326-17.298a.605 4.004 0 0 0 .002-.108l.404-27.572.402-27.507.536-25.715a.605 4.004 0 0 0 .004-.087l.4-23.108.404-21.284.396-17.516.53-13.13a.605 4.004 0 0 0 .003-.064l.387-10.252zm-453.383 10.49.436 5.788.383 10.11.4 14.985a.605 4.004 0 0 0 .002.087l.534 17.669.4 20.296.402 23.076.404 24.9a.605 4.004 0 0 0 .002.098l.536 26.627.402 26.616.09 5.831-.09 5.832-.402 26.616-.536 26.627a.605 4.004 0 0 0-.002.098l-.404 24.9-.402 23.076-.4 20.296-.534 17.668a.605 4.004 0 0 0-.002.087l-.4 14.986-.383 10.11-.436 5.788-.184-2.421-.51-9.285-.39-12.944-.401-17.669-.404-19.546a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.035.605 4.004 0 0 0 0-.02l-.537-23.033-.402-25.693-.402-26.67-.404-28.452a.605 4.004 0 0 0-.002-.13l-.192-10.175.192-10.175a.605 4.004 0 0 0 .002-.13l.404-28.452.402-26.67.402-25.693.537-23.033a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.034.605 4.004 0 0 0 0-.02l.404-19.547.4-17.668.39-12.945.511-9.284zm444.322 0 .182 2.421.51 9.285.391 12.944.4 17.668.404 19.547a.605 4.004 0 0 0 0 .065l.537 23.033.4 25.693.404 26.67.404 28.452a.605 4.004 0 0 0 .002.13l.192 10.175-.192 10.175a.605 4.004 0 0 0-.002.13l-.404 28.452-.404 26.67-.4 25.693-.537 23.033a.605 4.004 0 0 0 0 .065l-.403 19.547-.4 17.668-.391 12.944-.51 9.285-.183 2.421-.438-5.788-.382-10.11-.4-14.986a.605 4.004 0 0 0-.004-.086l-.534-17.668-.4-20.296-.402-23.077-.404-24.9a.605 4.004 0 0 0-.001-.098l-.537-26.627-.402-26.616-.089-5.831.089-5.832.402-26.616.537-26.627a.605 4.004 0 0 0 .001-.098l.404-24.9.402-23.076.4-20.296.534-17.668a.605 4.004 0 0 0 .003-.087l.4-14.986.383-10.11zm-435.27 9.86.141 1.553.381 7.547.524 11.283.395 14.823.402 17.744a.605 4.004 0 0 0 .003.087l.535 20.35.4 23.011.404 23.999.402 24.9a.605 4.004 0 0 0 .003.141l.45 20.785-.45 20.785a.605 4.004 0 0 0-.003.14l-.402 24.901-.403 24-.4 23.01-.536 20.35a.605 4.004 0 0 0-.003.087l-.402 17.744-.395 14.823-.524 11.283-.38 7.548-.142 1.552-.118-.988-.354-6.266-.391-11.206-.402-15.019a.605 4.004 0 0 0-.003-.087l-.533-17.657-.4-20.307-.405-23.098a.605 4.004 0 0 0-.002-.108l-.535-24.824-.402-26.606-.303-20.057.303-20.068.402-26.594.535-24.825a.605 4.004 0 0 0 .002-.108l.404-23.108.4-20.296.534-17.658a.605 4.004 0 0 0 .003-.087l.402-15.018.39-11.207.355-6.276zm426.216 0 .118.977.355 6.277.39 11.207.402 15.018a.605 4.004 0 0 0 .002.087l.533 17.657.4 20.296.405 23.109a.605 4.004 0 0 0 .001.108l.535 24.825.402 26.594.304 20.068-.304 20.057-.402 26.605-.535 24.825a.605 4.004 0 0 0-.001.108l-.404 23.098-.4 20.307-.534 17.657a.605 4.004 0 0 0-.002.087l-.402 15.018-.39 11.207-.355 6.266-.118.988-.141-1.553-.38-7.547-.524-11.283-.396-14.823-.402-17.744a.605 4.004 0 0 0-.005-.087l-.535-20.35-.4-23.011-.404-23.999-.402-24.9a.605 4.004 0 0 0-.003-.141l-.45-20.785.45-20.785a.605 4.004 0 0 0 .003-.14l.402-24.901.404-24 .4-23.01.535-20.35a.605 4.004 0 0 0 .005-.087l.402-17.745.396-14.823.523-11.282.381-7.548zm-417.12 9.013.02.065.29 3.834.382 8.415.397 12.293a.605 4.004 0 0 0 .003.076l.532 14.954.398 18.493.403 19.525.403 22.207a.605 4.004 0 0 0 .002.13l.537 23.044.402 23.945a.605 4.004 0 0 0 0 .01l.179 10.218-.18 10.219a.605 4.004 0 0 0 0 .01l-.401 23.934-.537 23.054a.605 4.004 0 0 0-.002.13l-.404 22.207-.402 19.525-.398 18.494-.532 14.953a.605 4.004 0 0 0-.003.077l-.397 12.292-.383 8.416-.288 3.834-.022.065-.303-4.68-.391-8.623-.528-13.118-.398-14.888-.402-18.613a.605 4.004 0 0 0-.003-.087l-.535-21.251-.402-23.022-.402-24-.404-25.78a.605 4.004 0 0 0-.003-.152l-.064-2.997.064-2.997a.605 4.004 0 0 0 .003-.152l.404-25.78.402-23.999.402-23.022.535-21.251a.605 4.004 0 0 0 .003-.087l.402-18.613.398-14.899.528-13.118.39-8.611zm408.025 0 .302 4.68.392 8.612.529 13.118.397 14.899.402 18.613a.605 4.004 0 0 0 .002.087l.535 21.251.402 23.022.402 24 .403 25.78a.605 4.004 0 0 0 .004.151l.064 2.997-.064 2.997a.605 4.004 0 0 0-.004.153l-.403 25.78-.402 23.999-.402 23.022-.535 21.251a.605 4.004 0 0 0-.002.087l-.402 18.613-.397 14.888-.529 13.118-.392 8.622-.302 4.68-.021-.064-.29-3.834-.381-8.416-.398-12.292a.605 4.004 0 0 0-.005-.076l-.531-14.954-.4-18.493-.401-19.525-.404-22.207a.605 4.004 0 0 0-.003-.13l-.535-23.056-.402-23.933a.605 4.004 0 0 0 0-.01l-.18-10.22.18-10.218a.605 4.004 0 0 0 0-.01l.402-23.945.535-23.043a.605 4.004 0 0 0 .003-.13l.404-22.207.402-19.525.399-18.494.531-14.953a.605 4.004 0 0 0 .005-.076l.397-12.293.383-8.416.289-3.833zm-398.996 10.164.077.685.482 5.57.378 9.187.397 12.271.402 15.051a.605 4.004 0 0 0 .003.098l.533 17.668.4 19.428.403 21.316.403 22.23a.605 4.004 0 0 0 .003.151l.537 22.164.023 1.227-.023 1.227-.537 22.164a.605 4.004 0 0 0-.003.153l-.403 22.229-.402 21.316-.4 19.428-.534 17.668a.605 4.004 0 0 0-.003.087l-.402 15.05-.397 12.283-.378 9.187-.482 5.57-.077.685-.232-1.532-.351-6.971-.394-10.436-.4-13.248a.605 4.004 0 0 0-.003-.035l-.534-16.778-.399-18.515-.402-21.306-.403-22.229a.605 4.004 0 0 0-.003-.108l-.535-23.956-.209-11.934.209-11.935.535-23.955a.605 4.004 0 0 0 .003-.109l.403-22.229.402-21.305.4-18.516.533-16.777a.605 4.004 0 0 0 .003-.035l.4-13.26.394-10.424.351-6.972zm389.965 0 .233 1.532.351 6.971.394 10.425.4 13.26a.605 4.004 0 0 0 .002.034l.534 16.778.398 18.515.404 21.306.402 22.229a.605 4.004 0 0 0 .004.108l.535 23.956.208 11.934-.208 11.935-.535 23.955a.605 4.004 0 0 0-.004.108l-.402 22.23-.404 21.305-.398 18.516-.534 16.777a.605 4.004 0 0 0-.001.035l-.4 13.248-.395 10.436-.35 6.972-.234 1.531-.077-.684-.48-5.571-.378-9.187-.4-12.282-.4-15.05a.605 4.004 0 0 0-.005-.088l-.533-17.668-.4-19.427-.402-21.317-.404-22.229a.605 4.004 0 0 0-.003-.152l-.537-22.164-.023-1.227.023-1.227.537-22.164a.605 4.004 0 0 0 .003-.152l.404-22.23.402-21.316.4-19.427.533-17.668a.605 4.004 0 0 0 .005-.098l.4-15.051.4-12.271.377-9.187.481-5.571zm-380.88 8.384.228 2.52.38 6.71.524 10.393.394 12.151.4 15.898.402 16.886a.605 4.004 0 0 0 .003.13l.535 18.56.4 20.339.405 21.338a.605 4.004 0 0 0 0 .02l.27 13.715-.27 13.716a.605 4.004 0 0 0 0 .02l-.404 21.338-.4 20.34-.536 18.558a.605 4.004 0 0 0-.003.13l-.402 16.886-.4 15.898-.394 12.152-.523 10.392-.381 6.711-.228 2.52-.06-.391-.342-5.31-.394-8.677a.605 4.004 0 0 0-.002-.035l-.527-11.326-.396-14.845-.402-16.831-.402-18.657a.605 4.004 0 0 0-.005-.12l-.535-20.35-.4-22.142-.363-19.981.363-19.981.4-22.142.535-20.35a.605 4.004 0 0 0 .005-.12l.402-18.657.402-16.832.396-14.844.527-11.327a.605 4.004 0 0 0 .002-.034l.394-8.677.343-5.31zm371.797 0 .059.39.343 5.31.394 8.677a.605 4.004 0 0 0 .001.035l.527 11.326.395 14.845.402 16.832.403 18.656a.605 4.004 0 0 0 .003.12l.535 20.35.4 22.143.363 19.98-.363 19.982-.4 22.142-.535 20.35a.605 4.004 0 0 0-.003.12l-.403 18.656-.402 16.832-.395 14.845-.527 11.326a.605 4.004 0 0 0-.001.035l-.394 8.676-.343 5.31-.06.391-.228-2.519-.38-6.711-.524-10.392-.394-12.152-.4-15.898-.402-16.886a.605 4.004 0 0 0-.005-.13l-.535-18.559-.4-20.34-.404-21.338a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.271-13.715.27-13.716a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.404-21.338.4-20.34.536-18.558a.605 4.004 0 0 0 .005-.13l.402-16.886.4-15.899.394-12.151.524-10.392.38-6.711zm-362.737 9.665.002.01.45 3.713.363 7.19.393 10.435.4 13.249a.605 4.004 0 0 0 .006.13l.532 14.975.398 16.745.404 17.776a.605 4.004 0 0 0 .003.12l.535 19.482.402 19.481.117 5.69-.117 5.69-.402 19.482-.535 19.482a.605 4.004 0 0 0-.003.12l-.404 17.776-.398 16.745-.532 14.975a.605 4.004 0 0 0-.005.13l-.4 13.249-.394 10.436-.363 7.189-.45 3.713-.002.01-.231-2.041-.49-7.32-.388-9.382-.4-12.347a.605 4.004 0 0 0-.004-.076l-.53-14.964-.402-17.614-.402-18.656-.404-19.558a.605 4.004 0 0 0-.002-.12l-.536-21.283-.112-5.636.112-5.636.536-21.285a.605 4.004 0 0 0 .002-.12l.404-19.557.402-18.656.402-17.614.53-14.964a.605 4.004 0 0 0 .003-.076l.4-12.347.388-9.383.49-7.319zm353.676 0 .231 2.041.491 7.32.387 9.382.4 12.347a.605 4.004 0 0 0 .002.076l.532 14.964.4 17.614.403 18.656.403 19.558a.605 4.004 0 0 0 .002.12l.537 21.284.111 5.636-.111 5.635-.537 21.285a.605 4.004 0 0 0-.002.12l-.403 19.557-.402 18.656-.4 17.614-.533 14.964a.605 4.004 0 0 0-.001.076l-.4 12.347-.388 9.383-.49 7.319-.232 2.041-.003-.01-.45-3.713-.363-7.19-.394-10.435-.4-13.248a.605 4.004 0 0 0-.005-.13l-.532-14.975-.4-16.746-.402-17.776a.605 4.004 0 0 0-.004-.12l-.535-19.481-.402-19.482-.116-5.69.116-5.69.402-19.482.535-19.482a.605 4.004 0 0 0 .004-.12l.402-17.776.4-16.745.532-14.975a.605 4.004 0 0 0 .005-.13l.4-13.249.394-10.436.363-7.188.45-3.714zm-344.619 8.34.176 1.15.348 4.616.514 8.481.389 10.327.4 13.227.402 14.204a.605 4.004 0 0 0 .003.087l.535 16.799.4 16.778.403 18.656a.605 4.004 0 0 0 .005.173l.464 16.159-.464 16.148a.605 4.004 0 0 0-.005.184l-.403 18.657-.4 16.766-.535 16.81a.605 4.004 0 0 0-.003.087l-.402 14.204-.4 13.227-.39 10.327-.513 8.481-.348 4.616-.176 1.15-.174-1.15-.336-4.453-.389-8.568a.605 4.004 0 0 0-.007-.108l-.525-10.447-.396-13.052-.4-15.04-.404-16.865a.605 4.004 0 0 0-.003-.13l-.533-18.57-.402-19.47-.264-12.804.264-12.803.402-19.47.533-18.57a.605 4.004 0 0 0 .003-.13l.404-16.864.4-15.04.396-13.064.525-10.436a.605 4.004 0 0 0 .007-.108l.39-8.568.335-4.453zm335.56 0 .176 1.15.336 4.453.39 8.568a.605 4.004 0 0 0 .004.108l.525 10.436.396 13.064.4 15.04.404 16.864a.605 4.004 0 0 0 .003.13l.534 18.57.402 19.47.264 12.804-.264 12.803-.402 19.47-.534 18.57a.605 4.004 0 0 0-.003.13l-.404 16.865-.4 15.04-.396 13.053-.525 10.446a.605 4.004 0 0 0-.005.109l-.389 8.568-.336 4.452-.176 1.15-.174-1.15-.348-4.615-.513-8.481-.39-10.328-.4-13.226-.402-14.204a.605 4.004 0 0 0-.005-.087l-.535-16.81-.4-16.767-.402-18.656a.605 4.004 0 0 0-.005-.185l-.465-16.148.465-16.159a.605 4.004 0 0 0 .005-.173l.402-18.656.4-16.778.535-16.8a.605 4.004 0 0 0 .005-.086l.402-14.204.4-13.227.39-10.327.513-8.481.348-4.615zm-326.532 8.133.412 2.726.343 5.3.394 8.687a.605 4.004 0 0 0 .005.108l.527 10.447.394 13.074.402 14.172.402 15.963a.605 4.004 0 0 0 .007.217l.533 15.876.4 17.647a.605 4.004 0 0 0 0 .035l.197 8.274-.196 8.275a.605 4.004 0 0 0 0 .02l-.4 17.657-.534 15.877a.605 4.004 0 0 0-.007.217l-.402 15.963-.402 14.172-.394 13.074-.527 10.447a.605 4.004 0 0 0-.005.108l-.394 8.677-.343 5.31-.412 2.726-.295-3.258-.504-6.668-.382-8.437-.398-11.36-.4-14.149a.605 4.004 0 0 0-.009-.185l-.532-14.975-.4-16.734-.402-17.777-.404-17.798a.605 4.004 0 0 0-.003-.152l-.03-1.031.03-1.032a.605 4.004 0 0 0 .003-.152l.404-17.798.402-17.777.4-16.734.532-14.975a.605 4.004 0 0 0 .009-.185l.4-14.15.398-11.359.382-8.437.504-6.679zm317.506 0 .295 3.247.504 6.679.383 8.437.397 11.36.4 14.149a.605 4.004 0 0 0 .007.184l.532 14.975.4 16.735.402 17.776.404 17.799a.605 4.004 0 0 0 .003.152l.03 1.031-.03 1.032a.605 4.004 0 0 0-.003.152l-.404 17.798-.402 17.777-.4 16.734-.532 14.975a.605 4.004 0 0 0-.007.185l-.4 14.15-.397 11.358-.383 8.438-.504 6.668-.295 3.257-.412-2.725-.343-5.31-.394-8.677a.605 4.004 0 0 0-.006-.108l-.527-10.447-.394-13.075-.402-14.171-.402-15.963a.605 4.004 0 0 0-.007-.218l-.533-15.876-.4-17.657a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l-.198-8.275.197-8.275a.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01.605 4.004 0 0 0 0-.01l.4-17.646.534-15.876a.605 4.004 0 0 0 .007-.218l.402-15.963.402-14.171.394-13.075.527-10.447a.605 4.004 0 0 0 .006-.108l.394-8.687.343-5.3zm-308.339 7.526.045.184.321 3.551.504 6.668.384 8.481.4 10.577a.605 4.004 0 0 0 .003.065l.533 13.216.397 13.183.402 15.051.402 15.996a.605 4.004 0 0 0 .007.217l.535 15.909.048 1.9-.048 1.9-.535 15.91a.605 4.004 0 0 0-.007.217l-.402 15.996-.402 15.051-.397 13.183-.533 13.216a.605 4.004 0 0 0-.002.065l-.4 10.577-.385 8.481-.504 6.668-.321 3.55-.045.185-.03-.065-.344-1.705-.32-4.246-.382-7.59-.399-10.523a.605 4.004 0 0 0-.01-.206l-.527-11.348-.397-13.987-.402-15.105a.605 4.004 0 0 0-.007-.173l-.533-15.888-.4-16.777-.176-7.384.175-7.385.4-16.777.534-15.888a.605 4.004 0 0 0 .007-.173l.402-15.105.397-13.987.527-11.348a.605 4.004 0 0 0 .01-.206l.399-10.534.382-7.59.32-4.235.345-1.705zm299.172 0 .028.065.344 1.705.32 4.235.383 7.59.399 10.534a.605 4.004 0 0 0 .01.206l.526 11.348.397 13.987.402 15.105a.605 4.004 0 0 0 .007.173l.533 15.887.4 16.778.177 7.384-.176 7.385-.4 16.777-.534 15.888a.605 4.004 0 0 0-.007.173l-.402 15.105-.397 13.987-.527 11.348a.605 4.004 0 0 0-.01.206l-.398 10.523-.383 7.59-.32 4.246-.344 1.705-.028.065-.044-.184-.322-3.551-.504-6.668-.384-8.481-.4-10.577a.605 4.004 0 0 0-.002-.065l-.533-13.216-.397-13.183-.402-15.051-.404-15.996a.605 4.004 0 0 0-.007-.217l-.535-15.91-.047-1.9.047-1.9.535-15.909a.605 4.004 0 0 0 .007-.217l.404-15.996.402-15.051.397-13.183.533-13.216a.605 4.004 0 0 0 .002-.065l.4-10.577.384-8.481.504-6.668.322-3.55zm-290.23 7.004.114.196.217 1.422.344 4.572.392 6.917a.605 4.004 0 0 0 .005.087l.522 8.644.39 10.338.401 12.369.404 13.313a.605 4.004 0 0 0 .007.185l.532 14.096.4 14.985.289 10.87-.289 10.87-.4 14.987-.532 14.095a.605 4.004 0 0 0-.007.185l-.404 13.313-.4 12.369-.39 10.338-.523 8.644a.605 4.004 0 0 0-.005.087l-.392 6.917-.344 4.572-.217 1.423-.115.195-.067-.304-.305-3.366-.384-6.765a.605 4.004 0 0 0-.014-.228l-.517-7.689-.387-10.273-.402-12.38a.605 4.004 0 0 0-.007-.14l-.533-14.118-.399-14.073-.402-15.975-.32-12.683.32-12.684.402-15.974.399-14.074.533-14.117a.605 4.004 0 0 0 .007-.14l.402-12.38.387-10.273.517-7.689a.605 4.004 0 0 0 .014-.227l.384-6.777.305-3.355zm281.29 0 .066.304.306 3.355.384 6.776a.605 4.004 0 0 0 .013.228l.517 7.689.387 10.273.402 12.38a.605 4.004 0 0 0 .005.14l.534 14.118.398 14.074.402 15.974.32 12.683-.32 12.684-.402 15.974-.398 14.074-.534 14.117a.605 4.004 0 0 0-.005.141l-.402 12.38-.387 10.273-.517 7.688a.605 4.004 0 0 0-.013.228l-.384 6.765-.306 3.367-.067.304-.115-.196-.216-1.423-.345-4.571-.392-6.918a.605 4.004 0 0 0-.007-.087l-.522-8.644-.392-10.338-.399-12.368-.403-13.314a.605 4.004 0 0 0-.007-.185l-.532-14.095-.4-14.986-.29-10.87.29-10.87.4-14.986.532-14.095a.605 4.004 0 0 0 .007-.185l.403-13.314.399-12.368.392-10.338.522-8.644a.605 4.004 0 0 0 .007-.087l.392-6.918.345-4.571.216-1.423zm-272.127 7.026.075.173.368 2.422.34 4.506.387 7.678.4 8.84a.605 4.004 0 0 0 .007.12l.529 10.49.394 11.325.402 13.281.404 13.346a.605 4.004 0 0 0 .007.185l.533 14.117.128 4.485-.128 4.485-.533 14.117a.605 4.004 0 0 0-.007.185l-.404 13.346-.402 13.28-.394 11.327-.529 10.49a.605 4.004 0 0 0-.007.12l-.4 8.84-.387 7.677-.34 4.496-.368 2.432-.075.173-.12-.26-.344-1.716-.32-4.235-.388-7.678-.4-8.84a.605 4.004 0 0 0-.007-.119l-.529-10.468-.393-12.206-.403-13.292-.403-14.215a.605 4.004 0 0 0-.005-.173l-.534-15.018-.073-2.748.073-2.747.534-15.019a.605 4.004 0 0 0 .005-.173l.403-14.215.403-13.291.393-12.217.529-10.458a.605 4.004 0 0 0 .007-.12l.4-8.839.388-7.677.32-4.236.344-1.715zm262.962 0 .12.26.345 1.716.32 4.235.387 7.678.4 8.84a.605 4.004 0 0 0 .005.119l.527 10.458.396 12.216.402 13.292.403 14.215a.605 4.004 0 0 0 .005.173l.534 15.019.074 2.747-.074 2.747-.534 15.019a.605 4.004 0 0 0-.005.173l-.403 14.215-.402 13.292-.396 12.206-.527 10.468a.605 4.004 0 0 0-.005.12l-.4 8.84-.387 7.677-.32 4.235-.345 1.716-.12.26-.075-.173-.368-2.433-.341-4.495-.386-7.678-.4-8.84a.605 4.004 0 0 0-.009-.119l-.528-10.49-.396-11.326-.4-13.281-.404-13.346a.605 4.004 0 0 0-.006-.185l-.534-14.117-.128-4.485.128-4.485.534-14.117a.605 4.004 0 0 0 .006-.185l.404-13.346.4-13.28.396-11.327.528-10.49a.605 4.004 0 0 0 .009-.12l.4-8.84.386-7.677.341-4.506.368-2.422zm-253.974 6.016h.105l.138.608.333 3.67a.605 4.004 0 0 0 .015.163l.492 4.887.376 7.439.396 8.752.4 10.588a.605 4.004 0 0 0 .01.207l.53 11.391.398 12.293.402 12.423.38 12.531-.38 12.532-.402 12.423-.399 12.293-.53 11.391a.605 4.004 0 0 0-.009.207l-.4 10.588-.396 8.741-.376 7.45-.492 4.887a.605 4.004 0 0 0-.015.162l-.333 3.67-.138.609h-.105l-.195-1.292-.335-2.943-.374-5.788a.605 4.004 0 0 0-.005-.056l-.519-7.72-.39-9.46-.399-10.565-.4-12.38a.605 4.004 0 0 0-.01-.196l-.531-13.226-.399-13.194-.231-8.134.231-8.133.399-13.195.532-13.226a.605 4.004 0 0 0 .009-.196l.4-12.38.399-10.576.39-9.448.52-7.72a.605 4.004 0 0 0 .004-.056l.374-5.788.335-2.943zm244.88 0h.106l.195 1.292.335 2.943.374 5.788a.605 4.004 0 0 0 .004.056l.518 7.72.39 9.448.4 10.577.4 12.38a.605 4.004 0 0 0 .007.195l.533 13.227.399 13.194.231 8.134-.231 8.133-.399 13.194-.533 13.227a.605 4.004 0 0 0-.007.196l-.4 12.38-.4 10.565-.39 9.459-.518 7.72a.605 4.004 0 0 0-.004.056l-.374 5.788-.335 2.943-.195 1.293h-.105l-.138-.609-.333-3.67a.605 4.004 0 0 0-.015-.163l-.492-4.887-.376-7.449-.396-8.742-.4-10.587a.605 4.004 0 0 0-.01-.207l-.53-11.391-.399-12.293-.402-12.423-.379-12.531.38-12.532.401-12.423.4-12.293.53-11.391a.605 4.004 0 0 0 .009-.206l.4-10.588.396-8.753.376-7.438.492-4.887a.605 4.004 0 0 0 .015-.163l.333-3.67zm-235.765 5.745.028.065.364 1.813.322 3.54.382 5.897.4 7.004.526 9.61.394 9.557.4 11.489a.605 4.004 0 0 0 .013.27l.53 11.403.397 12.282a.605 4.004 0 0 0 .002.056l.217 6.222-.217 6.212a.605 4.004 0 0 0-.002.065l-.397 12.281-.53 11.403a.605 4.004 0 0 0-.013.27l-.4 11.49-.394 9.556-.527 9.61-.399 7.005-.382 5.896-.322 3.54-.364 1.814-.028.065-.107-.478-.318-2.106-.466-4.626-.374-6.614-.4-7.938a.605 4.004 0 0 0-.008-.098l-.525-9.556-.395-11.326-.402-11.533-.402-12.423a.605 4.004 0 0 0-.007-.195l-.498-12.315.498-12.314a.605 4.004 0 0 0 .007-.196l.402-12.423.402-11.532.395-11.327.525-9.556a.605 4.004 0 0 0 .007-.098l.4-7.938.375-6.613.466-4.626.318-2.107zm226.755 0 .108.477.318 2.107.466 4.626.375 6.613.4 7.938a.605 4.004 0 0 0 .005.098l.525 9.556.396 11.327.402 11.532.402 12.423a.605 4.004 0 0 0 .006.196l.498 12.314-.498 12.315a.605 4.004 0 0 0-.006.195l-.402 12.424-.402 11.532-.396 11.326-.525 9.557a.605 4.004 0 0 0-.005.097l-.4 7.938-.375 6.614-.466 4.626-.318 2.107-.108.477-.028-.065-.366-1.813-.32-3.54-.383-5.897-.397-7.004-.528-9.61-.394-9.557-.4-11.49a.605 4.004 0 0 0-.012-.27l-.53-11.402-.397-12.282a.605 4.004 0 0 0-.004-.065l-.216-6.212.216-6.222a.605 4.004 0 0 0 .004-.056l.397-12.282.53-11.402a.605 4.004 0 0 0 .011-.271l.4-11.49.395-9.555.528-9.61.397-7.005.383-5.897.32-3.54.366-1.813zm-217.657 5.342.107.467.32 2.107.473 4.702.375 5.81.393 6.907.397 8.763a.605 4.004 0 0 0 .005.12l.53 10.522.399 10.534.403 10.675a.605 4.004 0 0 0 .01.206l.531 11.424.058 1.628-.058 1.63-.532 11.423a.605 4.004 0 0 0-.009.206l-.403 10.675-.4 10.534-.53 10.522a.605 4.004 0 0 0-.004.12l-.397 8.764-.393 6.906-.375 5.799-.473 4.702-.32 2.118-.107.467-.03-.065-.39-1.933-.307-2.715-.376-5.788a.605 4.004 0 0 0-.014-.217l-.514-6.81-.386-8.513-.4-9.697-.402-10.632a.605 4.004 0 0 0-.01-.206l-.53-11.402-.397-12.282a.605 4.004 0 0 0-.003-.055l-.124-3.551.124-3.551a.605 4.004 0 0 0 .003-.056l.397-12.293.53-11.391a.605 4.004 0 0 0 .01-.207l.402-10.63.4-9.698.386-8.514.514-6.809a.605 4.004 0 0 0 .014-.217l.376-5.788.307-2.715.39-1.933zm208.56 0 .03.065.39 1.933.307 2.715.376 5.788a.605 4.004 0 0 0 .015.218l.513 6.808.386 8.514.4 9.697.402 10.632a.605 4.004 0 0 0 .009.206l.53 11.392.397 12.292a.605 4.004 0 0 0 .003.056l.124 3.55-.124 3.552a.605 4.004 0 0 0-.003.056l-.397 12.281-.53 11.403a.605 4.004 0 0 0-.009.206l-.402 10.631-.4 9.698-.386 8.513-.513 6.81a.605 4.004 0 0 0-.015.217l-.376 5.788-.307 2.715-.39 1.933-.03.065-.107-.468-.32-2.117-.472-4.702-.376-5.8-.392-6.906-.398-8.763a.605 4.004 0 0 0-.006-.12l-.53-10.523-.4-10.533-.403-10.675a.605 4.004 0 0 0-.008-.206l-.532-11.424-.057-1.629.057-1.629.532-11.424a.605 4.004 0 0 0 .008-.206l.404-10.674.399-10.534.53-10.523a.605 4.004 0 0 0 .006-.12l.398-8.763.392-6.906.376-5.81.472-4.702.32-2.107zm-199.548 4.92h.077l.282.933.286 2.52.379 5.006a.605 4.004 0 0 0 .015.196l.508 5.885.384 7.634.397 7.895.4 9.687a.605 4.004 0 0 0 .01.206l.532 10.533.397 10.523.3 7.927-.3 7.927-.397 10.523-.532 10.534a.605 4.004 0 0 0-.01.206l-.4 9.675-.397 7.906-.384 7.634-.508 5.875a.605 4.004 0 0 0-.015.195l-.38 5.017-.285 2.52-.282.933h-.077l-.202-.89-.319-2.107-.472-4.702-.376-5.81-.392-6.895-.397-8.775a.605 4.004 0 0 0-.007-.108l-.532-10.533-.397-10.523-.402-10.642-.278-7.96.278-7.96.402-10.642.397-10.523.532-10.533a.605 4.004 0 0 0 .007-.109l.397-8.774.392-6.906.376-5.8.472-4.701.319-2.107zm190.46 0h.077l.201.89.319 2.107.472 4.702.376 5.799.393 6.906.397 8.775a.605 4.004 0 0 0 .005.108l.531 10.533.398 10.523.402 10.642.277 7.96-.277 7.96-.402 10.642-.398 10.523-.531 10.533a.605 4.004 0 0 0-.005.108l-.397 8.775-.393 6.895-.376 5.81-.472 4.702-.319 2.107-.201.89h-.077l-.283-.934-.285-2.519-.38-5.017a.605 4.004 0 0 0-.014-.195l-.509-5.875-.384-7.634-.399-7.906-.399-9.675a.605 4.004 0 0 0-.01-.206l-.53-10.534-.397-10.523-.3-7.927.3-7.927.397-10.523.53-10.533a.605 4.004 0 0 0 .01-.206l.4-9.687.398-7.895.384-7.634.509-5.885a.605 4.004 0 0 0 .015-.196l.379-5.006.285-2.52zm-181.367 4.669.135.293.285 1.26.427 2.823.344 4.572.393 6.917a.605 4.004 0 0 0 .024.38l.514 6.81.389 8.567.402 8.85.4 9.73a.605 4.004 0 0 0 .01.218l.532 10.566.136 3.29-.136 3.291-.532 10.566a.605 4.004 0 0 0-.01.218l-.4 9.73-.402 8.85-.389 8.568-.514 6.809a.605 4.004 0 0 0-.024.38l-.393 6.917-.344 4.572-.427 2.823-.285 1.26-.135.293-.172-.38-.342-1.13-.3-3.312-.38-5.017-.391-6.917a.605 4.004 0 0 0-.025-.38l-.512-6.766-.387-9.404a.605 4.004 0 0 0-.005-.098l-.404-8.894a.605 4.004 0 0 0-.005-.12l-.532-10.522-.397-10.533-.031-.804.031-.804.397-10.533.532-10.523a.605 4.004 0 0 0 .005-.12l.404-8.893a.605 4.004 0 0 0 .005-.098l.387-9.404.512-6.766a.605 4.004 0 0 0 .025-.38l.392-6.917.379-5.017.3-3.312.342-1.14zm172.35 0 .173.37.341 1.14.3 3.312.38 5.017.392 6.917a.605 4.004 0 0 0 .024.38l.512 6.766.388 9.404a.605 4.004 0 0 0 .003.098l.403 8.894a.605 4.004 0 0 0 .005.12l.532 10.522.397 10.533.031.804-.03.804-.398 10.533-.532 10.523a.605 4.004 0 0 0-.005.12l-.403 8.893a.605 4.004 0 0 0-.003.098l-.388 9.404-.512 6.766a.605 4.004 0 0 0-.024.38l-.393 6.917-.379 5.017-.3 3.312-.341 1.13-.173.38-.134-.293-.286-1.26-.427-2.823-.344-4.572-.392-6.917a.605 4.004 0 0 0-.027-.38l-.513-6.81-.39-8.567-.4-8.85-.402-9.73a.605 4.004 0 0 0-.01-.218l-.531-10.566-.137-3.29.137-3.29.531-10.567a.605 4.004 0 0 0 .01-.217l.402-9.73.4-8.85.39-8.569.513-6.809a.605 4.004 0 0 0 .027-.38l.392-6.917.344-4.572.427-2.823.286-1.26zm-163.429 3.334h.172l.2.89.332 2.194.366 3.236.49 4.865.38 6.678.395 6.994.397 8.763a.605 4.004 0 0 0 .019.337l.528 8.731.392 8.677.396 9.578-.396 9.578-.392 8.676-.528 8.72a.605 4.004 0 0 0-.019.337l-.397 8.774-.395 6.994-.38 6.678-.49 4.865-.366 3.236-.331 2.194-.2.88h-.173l-.164-.717-.323-2.845-.384-4.236-.51-5.918-.383-6.744-.399-7.938a.605 4.004 0 0 0-.013-.217l-.524-8.688-.395-9.556-.402-9.795-.177-4.279.177-4.289.402-9.784.395-9.556.524-8.688a.605 4.004 0 0 0 .013-.217l.399-7.938.382-6.744.51-5.918.385-4.236.323-2.845zm154.336 0h.172l.164.727.324 2.846.384 4.235.51 5.918.382 6.744.4 7.938a.605 4.004 0 0 0 .012.217l.524 8.688.395 9.556.402 9.784.178 4.29-.178 4.278-.402 9.795-.395 9.556-.524 8.688a.605 4.004 0 0 0-.013.217l-.399 7.939-.382 6.743-.51 5.918-.384 4.236-.324 2.845-.164.716h-.172l-.2-.88-.332-2.193-.367-3.236-.49-4.865-.379-6.678-.395-6.994-.397-8.774a.605 4.004 0 0 0-.018-.337l-.529-8.72-.394-8.677-.393-9.578.393-9.578.394-8.676.529-8.731a.605 4.004 0 0 0 .018-.337l.397-8.764.395-6.993.38-6.678.489-4.865.367-3.237.332-2.193zm-145.144 3.562h.162l.283.934.298 2.638.376 4.138.392 5.201a.605 4.004 0 0 0 .017.196l.507 5.886.384 7.623.4 7.95.402 8.839a.605 4.004 0 0 0 .015.337l.529 8.73.221 4.909-.221 4.908-.529 8.731a.605 4.004 0 0 0-.015.336l-.402 8.84-.4 7.949-.384 7.623-.507 5.886a.605 4.004 0 0 0-.017.196l-.392 5.201-.376 4.138-.298 2.638-.283.934h-.162l-.217-.477-.39-1.944-.319-2.813-.37-4.908-.398-6.114a.605 4.004 0 0 0-.014-.217l-.514-6.81-.39-8.556-.403-8.905-.404-8.894a.605 4.004 0 0 0-.01-.217l-.413-7.526.413-7.525a.605 4.004 0 0 0 .01-.218l.404-8.904.404-8.894.389-8.557.514-6.81a.605 4.004 0 0 0 .014-.217l.397-6.113.371-4.92.319-2.812.39-1.933zm135.962 0h.162l.217.477.39 1.933.319 2.813.37 4.92.398 6.113a.605 4.004 0 0 0 .015.217l.514 6.81.388 8.556.404 8.894.404 8.905a.605 4.004 0 0 0 .01.217l.413 7.526-.413 7.525a.605 4.004 0 0 0-.01.218l-.404 8.893-.404 8.905-.388 8.557-.514 6.809a.605 4.004 0 0 0-.015.217l-.397 6.114-.371 4.909-.318 2.812-.39 1.944-.218.478h-.162l-.282-.934-.299-2.639-.376-4.137-.392-5.202a.605 4.004 0 0 0-.016-.196l-.508-5.885-.385-7.624-.4-7.949-.401-8.84a.605 4.004 0 0 0-.016-.335l-.529-8.731-.221-4.909.221-4.908.529-8.73a.605 4.004 0 0 0 .016-.338l.4-8.84.4-7.949.386-7.623.508-5.885a.605 4.004 0 0 0 .016-.196l.392-5.202.376-4.137.299-2.639zm-126.808 2.834.16.348.285 1.26.443 2.931.344 3.79.386 5.984.404 6.222a.605 4.004 0 0 0 .003.056l.527 7.83.393 7.818.4 7.949.401 8.84a.605 4.004 0 0 0 .018.336l.072 1.184-.072 1.184a.605 4.004 0 0 0-.018.336l-.4 8.84-.4 7.948-.394 7.82-.527 7.829a.605 4.004 0 0 0-.003.055l-.404 6.223-.386 5.972-.344 3.801-.443 2.921-.286 1.27-.16.348-.265-.434-.266-1.183-.308-2.031-.361-3.996-.519-5.984-.38-5.864-.395-7.851-.403-8.003a.605 4.004 0 0 0-.012-.228l-.528-8.731-.396-8.72-.069-1.52.07-1.52.395-8.72.528-8.732a.605 4.004 0 0 0 .012-.228l.403-8.003.396-7.851.379-5.864.519-5.984.36-3.996.31-2.041.265-1.173zm117.816 0 .266.434.266 1.173.309 2.042.36 3.996.52 5.983.378 5.864.396 7.852.404 8.003a.605 4.004 0 0 0 .011.228l.528 8.73.396 8.72.069 1.521-.069 1.52-.396 8.72-.528 8.731a.605 4.004 0 0 0-.011.228l-.404 8.004-.396 7.85-.379 5.865-.518 5.983-.361 3.997-.309 2.03-.266 1.184-.266.434-.159-.347-.285-1.27-.443-2.922-.345-3.8-.386-5.973-.403-6.223a.605 4.004 0 0 0-.005-.055l-.527-7.83-.394-7.818-.4-7.95-.401-8.839a.605 4.004 0 0 0-.018-.336l-.072-1.184.072-1.183a.605 4.004 0 0 0 .018-.338l.4-8.839.4-7.949.395-7.819.527-7.83a.605 4.004 0 0 0 .005-.055l.403-6.222.386-5.984.345-3.79.443-2.932.285-1.26zm-108.87 2.509h.146l.302.499.254 1.683.345 3.04.379 5.018a.605 4.004 0 0 0 .037.423l.5 4.963.378 6.678.404 7.124a.605 4.004 0 0 0 .012.217l.526 7.83.391 7.764.309 6.798-.309 6.798-.39 7.765-.527 7.83a.605 4.004 0 0 0-.012.217l-.404 7.123-.379 6.679-.499 4.963a.605 4.004 0 0 0-.037.423l-.38 5.017-.344 3.04-.254 1.684-.302.5h-.146l-.252-1.108-.324-1.433-.455-3.747-.361-3.985-.387-5.984a.605 4.004 0 0 0-.015-.206l-.524-6.928-.384-6.798-.399-8.763a.605 4.004 0 0 0-.007-.12l-.403-8.003a.605 4.004 0 0 0-.012-.228l-.287-4.735.287-4.745a.605 4.004 0 0 0 .012-.218l.403-8.003a.605 4.004 0 0 0 .007-.12l.4-8.763.383-6.798.524-6.928a.605 4.004 0 0 0 .015-.206l.387-5.984.36-3.985.456-3.747.324-1.433zm99.779 0h.146l.25 1.107.326 1.434.453 3.746.362 3.985.388 5.984a.605 4.004 0 0 0 .014.206l.524 6.928.384 6.798.397 8.764a.605 4.004 0 0 0 .007.12l.404 8.003a.605 4.004 0 0 0 .011.217l.288 4.745-.288 4.735a.605 4.004 0 0 0-.011.228l-.404 8.003a.605 4.004 0 0 0-.007.12l-.397 8.763-.384 6.798-.524 6.929a.605 4.004 0 0 0-.014.206l-.388 5.983-.362 3.986-.453 3.746-.325 1.433-.251 1.108h-.146l-.302-.5-.255-1.683-.344-3.04-.38-5.018a.605 4.004 0 0 0-.037-.423l-.5-4.963-.378-6.678-.404-7.124a.605 4.004 0 0 0-.013-.217l-.527-7.83-.39-7.764-.309-6.798.309-6.798.39-7.765.527-7.83a.605 4.004 0 0 0 .013-.217l.404-7.123.379-6.679.499-4.963a.605 4.004 0 0 0 .038-.423l.379-5.017.344-3.04.255-1.684zm-90.686 1.987.212.467.267.597.407 2.693.345 3.04.37 4.91.396 6.113a.605 4.004 0 0 0 .031.413l.514 5.95.382 6.744.4 7.939a.605 4.004 0 0 0 .022.358l.525 7.83.151 2.997-.15 2.997-.526 7.83a.605 4.004 0 0 0-.021.358l-.4 7.938-.383 6.744-.514 5.95a.605 4.004 0 0 0-.03.413l-.396 6.114-.371 4.909-.345 3.04-.407 2.693-.267.587-.212.467-.172-.37-.371-1.227-.299-2.638-.387-4.279a.605 4.004 0 0 0-.015-.152l-.507-5.039-.376-5.799-.395-6.96-.4-7.939a.605 4.004 0 0 0-.02-.358l-.527-7.83-.375-7.449.375-7.45.526-7.829a.605 4.004 0 0 0 .022-.358l.399-7.938.395-6.961.376-5.799.507-5.039a.605 4.004 0 0 0 .015-.152l.387-4.278.299-2.64.37-1.226zm81.738 0 .171.38.373 1.227.298 2.639.388 4.279a.605 4.004 0 0 0 .014.152l.507 5.038.376 5.8.396 6.96.399 7.938a.605 4.004 0 0 0 .02.359l.528 7.83.374 7.449-.374 7.45-.527 7.829a.605 4.004 0 0 0-.021.358l-.4 7.938-.395 6.96-.376 5.8-.507 5.038a.605 4.004 0 0 0-.014.152l-.388 4.279-.298 2.639-.373 1.227-.17.369-.212-.468-.268-.586-.407-2.693-.344-3.04-.371-4.91-.396-6.113a.605 4.004 0 0 0-.031-.412l-.514-5.951-.382-6.744-.4-7.938a.605 4.004 0 0 0-.022-.359l-.525-7.83-.151-2.996.15-2.998.526-7.83a.605 4.004 0 0 0 .021-.358l.4-7.938.383-6.743.514-5.951a.605 4.004 0 0 0 .031-.413l.396-6.114.37-4.908.345-3.04.407-2.694.268-.597zm-72.817 1.563h.146l.364.609.23 1.01.341 3.008a.605 4.004 0 0 0 .012.097l.512 4.246.361 3.986.382 5.885.398 7.037a.605 4.004 0 0 0 .026.38l.518 6.864.39 7.731.383 7.635-.384 7.634-.389 7.731-.518 6.864a.605 4.004 0 0 0-.026.38l-.398 7.037-.382 5.886-.361 3.985-.512 4.246a.605 4.004 0 0 0-.012.098l-.34 3.008-.23 1.01-.365.608h-.146l-.2-.89-.338-2.238-.491-4.061-.361-3.985-.387-5.973-.404-6.233a.605 4.004 0 0 0-.015-.206l-.518-6.863-.391-7.743-.402-8.003-.115-2.292.115-2.291.402-8.003.39-7.743.52-6.863a.605 4.004 0 0 0 .014-.206l.404-6.233.387-5.973.361-3.985.49-4.062.339-2.237zm63.75 0h.146l.2.89.339 2.238.49 4.061.361 3.986.388 5.972.403 6.234a.605 4.004 0 0 0 .015.206l.519 6.863.39 7.742.402 8.004.115 2.291-.115 2.291-.402 8.004-.39 7.742-.519 6.863a.605 4.004 0 0 0-.015.206l-.403 6.234-.388 5.972-.36 3.986-.491 4.061-.338 2.237-.2.89h-.147l-.364-.608-.23-1.01-.341-3.008a.605 4.004 0 0 0-.012-.097l-.512-4.246-.36-3.986-.383-5.885-.397-7.037a.605 4.004 0 0 0-.026-.38l-.519-6.864-.389-7.731-.384-7.635.384-7.634.389-7.731.519-6.864a.605 4.004 0 0 0 .026-.38l.397-7.037.382-5.885.361-3.986.512-4.246a.605 4.004 0 0 0 .012-.098l.341-3.008.23-1.01zm-54.473.89h.036l.238 1.043.455 2.27.333 2.932.387 4.268a.605 4.004 0 0 0 .015.163l.507 5.027.376 5.81.399 7.026.403 7.124a.605 4.004 0 0 0 .025.38l.519 6.863.236 4.691-.236 4.692-.519 6.863a.605 4.004 0 0 0-.025.38l-.403 7.124-.4 7.026-.375 5.81-.507 5.027a.605 4.004 0 0 0-.015.163l-.387 4.268-.333 2.932-.455 2.259-.238 1.053h-.036l-.251-1.108a.605 4.004 0 0 0-.066-.25l-.41-1.357-.299-2.639-.374-4.137-.394-5.202a.605 4.004 0 0 0-.016-.195l-.514-5.951-.385-6.809-.404-7.124a.605 4.004 0 0 0-.013-.217l-.53-7.895-.268-4.713.268-4.713.53-7.894a.605 4.004 0 0 0 .013-.218l.404-7.124.385-6.808.514-5.951a.605 4.004 0 0 0 .016-.196l.394-5.201.374-4.138.3-2.639.41-1.357a.605 4.004 0 0 0 .065-.25zm45.306 0h.036l.251 1.109a.605 4.004 0 0 0 .066.25l.41 1.357.299 2.639.374 4.137.394 5.202a.605 4.004 0 0 0 .016.195l.514 5.951.386 6.809.403 7.124a.605 4.004 0 0 0 .012.217l.53 7.895.267 4.713-.267 4.713-.53 7.894a.605 4.004 0 0 0-.012.218l-.403 7.124-.386 6.808-.514 5.951a.605 4.004 0 0 0-.016.196l-.394 5.202-.374 4.137-.299 2.639-.41 1.357a.605 4.004 0 0 0-.066.25l-.25 1.108h-.037l-.238-1.054-.454-2.259-.334-2.932-.387-4.267a.605 4.004 0 0 0-.015-.163l-.507-5.028-.376-5.81-.398-7.026-.404-7.123a.605 4.004 0 0 0-.025-.38l-.518-6.864-.237-4.691.237-4.691.518-6.863a.605 4.004 0 0 0 .025-.38l.404-7.124.398-7.026.376-5.81.507-5.028a.605 4.004 0 0 0 .015-.163l.387-4.268.334-2.932.454-2.27zm-36.237 1.054.159.359.286 1.26.36 2.389.47 3.094.36 4.757.393 5.234.397 6.114a.605 4.004 0 0 0 .015.217l.524 6.929.389 6.852.398 7.938a.605 4.004 0 0 0 .033.52l.066.88-.066.88a.605 4.004 0 0 0-.033.521l-.398 7.938-.39 6.852-.523 6.929a.605 4.004 0 0 0-.015.217l-.397 6.114-.394 5.234-.359 4.756-.47 3.095-.36 2.39-.286 1.26-.16.358-.265-.446-.266-1.173-.308-2.041-.365-4.018a.605 4.004 0 0 0-.047-.446l-.486-4.028-.371-5.723-.404-6.223a.605 4.004 0 0 0-.014-.217l-.524-6.928-.387-6.853-.4-7.938-.027-.51.026-.51.4-7.939.388-6.852.524-6.928a.605 4.004 0 0 0 .014-.218l.404-6.222.37-5.734.487-4.018a.605 4.004 0 0 0 .047-.445l.365-4.018.308-2.042.266-1.172zm27.204 0 .266.446.266 1.172.309 2.042.364 4.018a.605 4.004 0 0 0 .048.445l.484 4.018.372 5.734.404 6.222a.605 4.004 0 0 0 .015.218l.523 6.928.388 6.852.4 7.939.025.51-.025.51-.4 7.938-.388 6.853-.523 6.928a.605 4.004 0 0 0-.015.217l-.404 6.223-.372 5.723-.484 4.029a.605 4.004 0 0 0-.048.445l-.364 4.018-.309 2.041-.266 1.173-.266.446-.159-.359-.285-1.26-.361-2.389-.47-3.095-.36-4.756-.395-5.234-.395-6.114a.605 4.004 0 0 0-.015-.217l-.523-6.929-.39-6.852-.398-7.938a.605 4.004 0 0 0-.035-.521l-.067-.88.067-.88a.605 4.004 0 0 0 .035-.52l.399-7.938.389-6.853.523-6.928a.605 4.004 0 0 0 .015-.217l.395-6.114.396-5.234.36-4.757.469-3.094.36-2.39.286-1.26zm-18.344.728h.232l.362.608.232 1.01.34 3.008.393 3.475.497 4.93.383 5.897.397 6.135.399 7.037a.605 4.004 0 0 0 .024.38l.52 6.863.326 6.473-.327 6.472-.519 6.863a.605 4.004 0 0 0-.024.38l-.399 7.037-.397 6.135-.383 5.897-.497 4.93-.394 3.475-.34 3.008-.23 1.01-.363.608h-.232l-.216-.477-.391-1.944-.333-2.932-.374-4.138-.394-5.201a.605 4.004 0 0 0-.015-.196l-.514-5.95-.387-6.81-.399-7.047-.4-7.938a.605 4.004 0 0 0-.035-.521l-.202-2.66.202-2.661a.605 4.004 0 0 0 .035-.521l.4-7.939.399-7.047.387-6.809.514-5.95a.605 4.004 0 0 0 .015-.197l.394-5.201.374-4.137.333-2.943.39-1.933zm9.253 0h.231l.217.478.39 1.933.332 2.942.376 4.138.393 5.201a.605 4.004 0 0 0 .015.196l.514 5.95.387 6.81.399 7.047.4 7.939a.605 4.004 0 0 0 .033.52l.2 2.661-.2 2.66a.605 4.004 0 0 0-.033.522l-.4 7.938-.399 7.047-.387 6.81-.514 5.95a.605 4.004 0 0 0-.015.196l-.393 5.201-.376 4.138-.332 2.932-.39 1.944-.217.477h-.231l-.363-.608-.231-1.01-.34-3.008-.394-3.475-.497-4.93-.383-5.897-.397-6.135-.399-7.037a.605 4.004 0 0 0-.024-.38l-.519-6.863-.326-6.472.326-6.473.519-6.863a.605 4.004 0 0 0 .024-.38l.4-7.037.396-6.135.383-5.897.497-4.93.394-3.475.34-3.008.231-1.01z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 2.16141,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          id="ka-band"
          d="M33.358 233.346a.606 8.597 0 0 0-.666 3.918l-.404 9.561a.606 8.597 0 0 0-.047 1.398l-.406 15.274a.606 8.597 0 0 0-.006.305l-.538 22.921a.606 8.597 0 0 0-.021 1.143l-.404 30.571a.606 8.597 0 0 0-.004.165l-.402 34.395a.606 8.597 0 0 0-.002.071l-.04 3.544-.11-9.35a.606 8.597 0 0 0-.002-.096l-.403-32.46a.606 8.597 0 0 0-.004-.326l-.404-26.724a.606 8.597 0 0 0-.023-1.143l-.54-21.011a.606 8.597 0 0 0-.012-.443l-.404-13.385a.606 8.597 0 0 0-.22-3.753l-.404-3.826a.606 8.597 0 0 0-.607-.535l-.539 3.824a.606 8.597 0 0 0-.272 3.824l-.404 11.473a.606 8.597 0 0 0-.042 1.586l-.403 21.012a.606 8.597 0 0 0-.006.326l-.406 24.81-.537 32.462a.606 8.597 0 0 0-.007.466l-.147 11.776-.415-23.621-.401-28.45a.606 8.597 0 0 0-.01-.583l-.404-21.01a.606 8.597 0 0 0-.019-.747l-.401-15.297a.606 8.597 0 0 0-.141-3.055l-.537-7.65a.606 8.597 0 0 0-.428-2.518h-.406a.606 8.597 0 0 0-.52 4.175l-.403 9.561a.606 8.597 0 0 0-.021.582l-.54 15.274a.606 8.597 0 0 0-.047 1.774l-.403 22.921a.606 8.597 0 0 0-.006.28l-.402 26.747a.606 8.597 0 0 0-.004.211l-.367 27.82-.193-14.457a.606 8.597 0 0 0-.001-.096l-.404-28.659a.606 8.597 0 0 0-.019-1.026l-.54-22.923a.606 8.597 0 0 0-.006-.303l-.404-15.274a.606 8.597 0 0 0-.025-.84l-.405-11.45a.606 8.597 0 0 0-.394-4.5l-.54-1.913a.606 8.597 0 0 0-.576 2.263l-.403 5.736a.606 8.597 0 0 0-.115 2.24l-.403 11.448a.606 8.597 0 0 0-.038 1.377l-.402 19.075-.54 24.812a.606 8.597 0 0 0-.012.724l-.406 26.747a.606 8.597 0 0 0-.001.209l-.124 9.304-.036-2.029-.402-28.379a.606 8.597 0 0 0-.006-.396l-.403-22.947a.606 8.597 0 0 0-.027-1.095l-.537-19.1a.606 8.597 0 0 0-.021-.651l-.405-11.473a.606 8.597 0 0 0-.206-3.312l-.404-3.801a.606 8.597 0 0 0-.527-1.003l-.404 1.912a.606 8.597 0 0 0-.238 2.075l-.538 7.626a.606 8.597 0 0 0-.14 3.055l-.4 15.297a.606 8.597 0 0 0-.02.746l-.404 21.012a.606 8.597 0 0 0-.005.349l-.404 24.672-.36 19.192-.35-17.35-.398-24.626a.606 8.597 0 0 0-.011-.534l-.404-19.1a.606 8.597 0 0 0-.023-.909l-.405-13.385a.606 8.597 0 0 0-.128-2.683l-.539-7.647a.606 8.597 0 0 0-.428-2.52h-.404a.606 8.597 0 0 0-.428 2.52l-.405 5.735a.606 8.597 0 0 0-.113 2.24l-.405 11.449a.606 8.597 0 0 0-.012.373l-.537 17.186a.606 8.597 0 0 0-.034 1.4l-.405 22.922a.606 8.597 0 0 0-.005.164l-.401 24.834a.606 8.597 0 0 0-.004.12l-.048 3.147-.114-7.087-.406-24.836a.606 8.597 0 0 0-.026-1.26l-.537-19.028-.402-15.18a.606 8.597 0 0 0-.048-1.4l-.403-9.562a.606 8.597 0 0 0-.33-3.73l-.401-1.913a.606 8.597 0 0 0-.34-.186l-.538 1.911a.606 8.597 0 0 0-.373 3.918l-.406 9.562a.606 8.597 0 0 0-.047 1.4l-.402 15.273a.606 8.597 0 0 0-.01.304l-.403 17.186-.539 22.923a.606 8.597 0 0 0-.015.792l-.21 12.827-.363-20.615a.606 8.597 0 0 0-.002-.186l-.405-21.012a.606 8.597 0 0 0-.015-.746l-.406-15.297a.606 8.597 0 0 0-.063-1.749l-.538-11.45a.606 8.597 0 0 0-.168-2.403l-.404-3.8a.606 8.597 0 0 0-.337-1.447h-.403a.606 8.597 0 0 0-.428 2.518l-.404 5.715a.606 8.597 0 0 0-.076 1.329l-.539 11.45a.606 8.597 0 0 0-.07 2.052l-.404 17.186a.606 8.597 0 0 0-.006.257l-.402 18.982-.436 18.538-.15-8.487a.606 8.597 0 0 0-.025-1.098l-.53-18.865-.399-16.952a.606 8.597 0 0 0-.034-1.143l-.404-11.45a.606 8.597 0 0 0-.057-1.306l-.403-7.65a.606 8.597 0 0 0-.34-3.194l-.538-1.912a.606 8.597 0 0 0-.482 1.19l-.403 3.824a.606 8.597 0 0 0-.185 2.729l-.403 9.56a.606 8.597 0 0 0-.008.164l-.537 13.362a.606 8.597 0 0 0-.05 1.538l-.405 17.21a.606 8.597 0 0 0-.004.232l-.406 19.123a.606 8.597 0 0 0-.005.373l-.136 7.601-.04-2.052a.606 8.597 0 0 0-.004-.211l-.405-19.098a.606 8.597 0 0 0-.005-.257l-.405-17.186a.606 8.597 0 0 0-.048-1.54l-.538-13.385a.606 8.597 0 0 0-.008-.14l-.404-9.559a.606 8.597 0 0 0-.327-3.731l-.404-1.912a.606 8.597 0 0 0-.192-.443h-.404a.606 8.597 0 0 0-.428 2.517l-.539 7.65a.606 8.597 0 0 0-.091 1.655l-.404 9.538a.606 8.597 0 0 0-.047 1.423l-.402 15.18-.537 19.029a.606 8.597 0 0 0-.017.722l-.251 11.892-.35-12.383-.398-16.952a.606 8.597 0 0 0-.02-.677l-.403-13.362a.606 8.597 0 0 0-.038-1.05l-.402-9.537a.606 8.597 0 0 0-.156-2.472l-.54-5.713a.606 8.597 0 0 0-.362-1.726h-.406a.606 8.597 0 0 0-.335 1.446l-.403 3.824a.606 8.597 0 0 0-.134 1.775l-.538 9.56a.606 8.597 0 0 0-.07 1.516l-.405 11.473a.606 8.597 0 0 0-.024.817l-.404 15.274a.606 8.597 0 0 0-.013.56l-.396 18.726-.07 2.447-.124-5.899a.606 8.597 0 0 0-.006-.234l-.404-17.209a.606 8.597 0 0 0-.047-1.54l-.532-13.15-.396-11.265a.606 8.597 0 0 0-.114-2.238l-.403-5.713a.606 8.597 0 0 0-.282-2.263l-.539-1.911a.606 8.597 0 0 0-.339.186l-.405 1.912a.606 8.597 0 0 0-.236 2.077l-.404 5.712a.606 8.597 0 0 0-.114 2.238l-.396 11.264-.53 13.152a.606 8.597 0 0 0-.041 1.26l-.404 15.273a.606 8.597 0 0 0-.007.304l-.235 9.887-.367-15.623a.606 8.597 0 0 0-.017-.677l-.406-13.362a.606 8.597 0 0 0-.051-1.375l-.539-11.473a.606 8.597 0 0 0-.02-.398l-.403-7.624a.606 8.597 0 0 0-.15-2.006l-.404-3.824a.606 8.597 0 0 0-.335-1.446h-.405a.606 8.597 0 0 0-.364 1.726l-.538 5.736a.606 8.597 0 0 0-.12 1.726l-.404 7.624a.606 8.597 0 0 0-.059 1.33l-.404 11.45a.606 8.597 0 0 0-.015.467l-.396 13.128-.485 13.829-.149-5.573a.606 8.597 0 0 0-.024-.84l-.54-15.275-.403-11.473a.606 8.597 0 0 0-.057-1.306l-.405-7.647a.606 8.597 0 0 0-.12-1.703l-.54-5.738a.606 8.597 0 0 0-.363-1.726h-.403a.606 8.597 0 0 0-.193.443l-.403 1.914a.606 8.597 0 0 0-.238 2.075l-.404 5.736a.606 8.597 0 0 0-.046.7l-.536 9.56a.606 8.597 0 0 0-.084 1.983l-.404 13.36-.405 13.388a.606 8.597 0 0 0-.01.372l-.156 5.899-.055-2.098-.406-15.274a.606 8.597 0 0 0-.062-1.749l-.54-11.473a.606 8.597 0 0 0-.018-.373l-.404-7.65-.403-7.649a.606 8.597 0 0 0-.295-2.983l-.402-1.912a.606 8.597 0 0 0-.339-.187l-.539 1.912a.606 8.597 0 0 0-.19 1.19l-.404 3.823a.606 8.597 0 0 0-.148 1.983l-.404 7.648a.606 8.597 0 0 0-.057 1.306l-.386 10.984-.518 11.03a.606 8.597 0 0 0-.055 1.375l-.316 10.518-.32-10.518a.606 8.597 0 0 0-.015-.466l-.404-11.45a.606 8.597 0 0 0-.021-.582l-.405-9.56a.606 8.597 0 0 0-.157-2.449l-.538-5.737a.606 8.597 0 0 0-.027-.257l-.404-3.824a.606 8.597 0 0 0-.337-1.446h-.403a.606 8.597 0 0 0-.192.443l-.404 1.912a.606 8.597 0 0 0-.171 1.26l-.54 5.736a.606 8.597 0 0 0-.155 2.449l-.406 9.561a.606 8.597 0 0 0-.02.583l-.39 10.982-.517 11.007a.606 8.597 0 0 0-.051 1.4l-.021.652-.076-2.564a.606 8.597 0 0 0-.056-1.4l-.529-11.287-.398-9.373a.606 8.597 0 0 0-.034-.723l-.404-7.647a.606 8.597 0 0 0-.148-2.006l-.404-3.826a.606 8.597 0 0 0-.188-1.165l-.539-1.914a.606 8.597 0 0 0-.337.187l-.405 1.89a.606 8.597 0 0 0-.145 1.002l-.404 3.824a.606 8.597 0 0 0-.148 2.006l-.4 7.532-.531 9.445a.606 8.597 0 0 0-.048.955l-.403 9.538a.606 8.597 0 0 0-.037 1.05l-.232 7.672-.001-.048a.606 8.597 0 0 0-.014-.443l-.405-11.473a.606 8.597 0 0 0-.021-.583l-.404-9.536a.606 8.597 0 0 0-.093-1.657l-.537-7.647-.405-5.738a.606 8.597 0 0 0-.237-2.075l-.403-1.912a.606 8.597 0 0 0-.192-.443h-.404a.606 8.597 0 0 0-.27.909l-.541 3.826a.606 8.597 0 0 0-.158 1.609l-.402 5.735a.606 8.597 0 0 0-.057.934l-.398 7.53-.533 9.445a.606 8.597 0 0 0-.068 1.517l-.36 10.236-.337-7.159-.398-9.375a.606 8.597 0 0 0-.034-.746l-.404-7.648a.606 8.597 0 0 0-.055-.91l-.405-5.736a.606 8.597 0 0 0-.158-1.61l-.537-3.825a.606 8.597 0 0 0-.273-.909h-.403a.606 8.597 0 0 0-.19.443l-.406 1.912a.606 8.597 0 0 0-.08.468l-.537 3.824a.606 8.597 0 0 0-.158 1.61l-.405 5.735a.606 8.597 0 0 0-.09 1.657l-.403 9.536-.398 9.375-.221 4.71-.07-2.029a.606 8.597 0 0 0-.023-.581l-.404-9.562a.606 8.597 0 0 0-.091-1.656l-.54-7.625-.403-5.738-.403-5.735a.606 8.597 0 0 0-.43-2.518h-.943a.606 8.597 0 0 0-.337 1.446l-.402 3.824-.403 3.823a.606 8.597 0 0 0-.094 1.073l-.538 7.626a.606 8.597 0 0 0-.092 1.655l-.403 9.561-.354 8.419-.358-8.419a.606 8.597 0 0 0-.035-.722l-.403-7.648-.406-7.649a.606 8.597 0 0 0-.213-2.518l-.504-3.592-.373-3.52a.606 8.597 0 0 0-.335-1.446h-.406a.606 8.597 0 0 0-.147.256l-.538 1.912a.606 8.597 0 0 0-.189 1.19l-.403 3.823a.606 8.597 0 0 0-.149 1.983l-.405 7.648-.377 7.16-.509 7.205a.606 8.597 0 0 0-.091 1.656l-.048 1.095-.125-3.007a.606 8.597 0 0 0-.092-1.656l-.538-7.648-.404-5.738-.404-5.712a.606 8.597 0 0 0-.158-1.61l-.538-3.825a.606 8.597 0 0 0-.27-.908h-.808a.606 8.597 0 0 0-.337 1.445l-.371 3.521-.506 3.592a.606 8.597 0 0 0-.216 2.518l-.401 7.65-.406 7.624-.339 6.436-.019-.35-.388-9.164a.606 8.597 0 0 0-.156-2.448l-.505-5.364-.373-5.293a.606 8.597 0 0 0-.091-1.073l-.406-3.824a.606 8.597 0 0 0-.144-1.003l-.402-1.912a.606 8.597 0 0 0-.192-.443h-.54a.606 8.597 0 0 0-.19.443l-.405 1.912a.606 8.597 0 0 0-.145 1.003l-.403 3.824a.606 8.597 0 0 0-.094 1.073l-.403 5.713-.537 7.65a.606 8.597 0 0 0-.059.908l-.402 7.65-.09 1.677-.288-5.501-.402-7.627a.606 8.597 0 0 0-.06-.932l-.4-5.738a.606 8.597 0 0 0-.159-1.609l-.539-3.8a.606 8.597 0 0 0-.08-.466l-.403-1.914-.406-1.912a.606 8.597 0 0 0-.382 0l-.404 1.912a.606 8.597 0 0 0-.08.468l-.539 3.8a.606 8.597 0 0 0-.063.538l-.405 3.824a.606 8.597 0 0 0-.091 1.072l-.406 5.738a.606 8.597 0 0 0-.055.932l-.379 7.136-.282 4.01-.177-2.518-.539-7.65-.403-5.735a.606 8.597 0 0 0-.092-1.073l-.405-3.823-.404-3.803a.606 8.597 0 0 0-.19-1.19l-.539-1.911a.606 8.597 0 0 0-.337.186l-.403 1.912-.406 1.889a.606 8.597 0 0 0-.144 1.003l-.374 3.546-.504 3.566a.606 8.597 0 0 0-.213 2.543l-.38 7.136-.372 5.316-.046.654a.606 8.597 0 0 0-.04-.654l-.404-5.736-.403-5.736a.606 8.597 0 0 0-.065-.794l-.539-5.736a.606 8.597 0 0 0-.171-1.282l-.404-1.912-.405-1.914a.606 8.597 0 0 0-.192-.418h-.942a.606 8.597 0 0 0-.336 1.423l-.403 3.824-.406 3.823a.606 8.597 0 0 0-.027.281l-.538 5.736a.606 8.597 0 0 0-.065.794l-.406 5.735a.606 8.597 0 0 0-.055.911l-.122 2.284-.306-3.264-.352-6.67a.606 8.597 0 0 0-.149-1.982l-.403-3.824-.406-3.823a.606 8.597 0 0 0-.188-1.19l-.516-1.82-.38-1.817a.606 8.597 0 0 0-.386 0l-.382 1.818-.516 1.82a.606 8.597 0 0 0-.189 1.189l-.405 3.823-.402 3.824a.606 8.597 0 0 0-.093 1.073l-.373 5.293-.47 4.99-.05-.721-.405-5.738a.606 8.597 0 0 0-.063-.791l-.54-5.738a.606 8.597 0 0 0-.028-.278l-.405-3.826a.606 8.597 0 0 0-.143-1.003l-.403-1.912-.406-1.912a.606 8.597 0 0 0-.192-.443h-.537a.606 8.597 0 0 0-.192.443l-.406 1.912a.606 8.597 0 0 0-.143 1.003l-.373 3.521-.504 3.592a.606 8.597 0 0 0-.065.537l-.405 3.824a.606 8.596 0 0 0-.035.746.606 8.596 0 0 0-.057.326l-.403 5.738-.177 2.495-.313-4.41-.403-5.735a.606 8.597 0 0 0-.094-1.073l-.403-3.824a.606 8.597 0 0 0-.067-.537l-.537-3.824a.606 8.597 0 0 0-.08-.466l-.405-1.913a.606 8.597 0 0 0-.19-.443h-.943a.606 8.597 0 0 0-.337 1.445l-.337 3.195-.325 1.54a.606 8.597 0 0 0-.238 2.075l-.333 4.758-.452 3.194a.606 8.597 0 0 0-.158 1.61l-.243 3.474-.11-1.563a.606 8.597 0 0 0-.067-.816l-.537-5.713a.606 8.597 0 0 0-.029-.28l-.403-3.824-.404-3.824a.606 8.597 0 0 0-.19-1.19l-.537-1.913a.606 8.597 0 0 0-.149-.256h-.807a.606 8.597 0 0 0-.192.443l-.38 1.818-.517 1.82a.606 8.597 0 0 0-.19 1.19l-.404 3.823a.606 8.597 0 0 0-.091 1.073l-.362 5.13-.354 3.335a.606 8.597 0 0 0-.028.28l-.12 1.258-.03-.443a.606 8.597 0 0 0-.092-1.094l-.39-3.684-.526-5.573a.606 8.597 0 0 0-.027-.28l-.405-3.823a.606 8.597 0 0 0-.145-1.003l-.404-1.912-.403-1.914a.606 8.597 0 0 0-.192-.443h-.54a.606 8.597 0 0 0-.19.443l-.403 1.914-.406 1.912a.606 8.597 0 0 0-.144 1.003l-.372 3.52-.506 3.592a.606 8.597 0 0 0-.065.535l-.403 3.826a.606 8.597 0 0 0-.092 1.072l-.14 1.981-.42-2.984-.334-4.734a.606 8.597 0 0 0-.236-2.075l-.364-1.726-.5-3.544a.606 8.597 0 0 0-.079-.468l-.405-1.912a.606 8.597 0 0 0-.192-.443h-.808a.606 8.597 0 0 0-.146.257l-.539 1.912a.606 8.597 0 0 0-.044.186l-.403 1.912a.606 8.597 0 0 0-.145 1.003l-.406 3.825-.403 3.824a.606 8.597 0 0 0-.027.257l-.482 5.13-.165-1.586a.606 8.597 0 0 0-.065-.535l-.506-3.569-.372-3.52-.403-3.825a.606 8.597 0 0 0-.145-1.003l-.405-1.911a.606 8.597 0 0 0-.044-.188l-.539-1.912a.606 8.597 0 0 0-.146-.257h-.406a.606 8.597 0 0 0-.19.443l-.404 1.914-.405 1.912a.606 8.597 0 0 0-.078.466l-.54 3.826a.606 8.597 0 0 0-.064.534l-.403 3.824-.406 3.801a.606 8.597 0 0 0-.028.28l-.193 2.075-.047-.443-.406-3.8-.403-3.824a.606 8.597 0 0 0-.065-.537l-.539-3.824a.606 8.597 0 0 0-.08-.466l-.403-1.914-.404-1.911a.606 8.597 0 0 0-.192-.443h-.943a.606 8.597 0 0 0-.192.443l-.404 1.911-.403 1.914a.606 8.597 0 0 0-.08.466l-.539 3.824a.606 8.597 0 0 0-.065.537L-164 391.2a.606 8.597 0 0 0-.093 1.073l-.229 3.24-.384-2.705-.372-3.52-.405-3.825-.404-3.825a.606 8.597 0 0 0-.19-1.19l-.539-1.911a.606 8.597 0 0 0-.147-.257h-.807a.606 8.597 0 0 0-.192.443l-.383 1.797-.514 1.84a.606 8.597 0 0 0-.19 1.19l-.335 3.172-.328 1.562a.606 8.597 0 0 0-.173 1.26l-.523 5.596-.055.513-.067-.654-.406-3.8a.606 8.597 0 0 0-.064-.536l-.505-3.591-.373-3.521a.606 8.597 0 0 0-.143-1.003l-.405-1.914-.404-1.912a.606 8.597 0 0 0-.192-.443h-.539a.606 8.597 0 0 0-.192.443l-.404 1.912-.38 1.797-.518 1.843a.606 8.597 0 0 0-.189 1.189l-.403 3.824-.404 3.8-.314 2.986-.267-3.802a.606 8.597 0 0 0-.095-1.072l-.402-3.824a.606 8.597 0 0 0-.144-1.003l-.406-1.912a.606 8.597 0 0 0-.044-.186l-.515-1.843-.383-1.795-.404-1.914a.606 8.597 0 0 0-.339-.186l-.466 1.657h-.33a.606 8.597 0 0 0-.336 1.446l-.335 3.17-.328 1.562a.606 8.597 0 0 0-.08.468l-.537 3.824a.606 8.597 0 0 0-.066.537l-.396 3.707-.052-.722a.606 8.597 0 0 0-.158-1.632l-.539-3.8a.606 8.597 0 0 0-.078-.469l-.327-1.56-.335-3.172a.606 8.597 0 0 0-.19-1.19l-.54-1.912a.606 8.597 0 0 0-.146-.256h-1.212a.606 8.597 0 0 0-.147.256l-.539 1.912a.606 8.597 0 0 0-.188 1.19l-.337 3.171-.328 1.561a.606 8.597 0 0 0-.144 1.003l-.404 3.801a.606 8.597 0 0 0-.027.28l-.196 2.075-.047-.443-.404-3.8-.403-3.824a.606 8.597 0 0 0-.189-1.19l-.516-1.842-.384-1.795-.402-1.912a.606 8.597 0 0 0-.192-.443h-.943a.606 8.597 0 0 0-.192.443l-.404 1.912-.405 1.912a.606 8.597 0 0 0-.078.465l-.539 3.826a.606 8.597 0 0 0-.065.535l-.405 3.8-.284 2.684-.42-2.963-.374-3.521-.403-3.824a.606 8.597 0 0 0-.19-1.189l-.516-1.843-.381-1.795a.606 8.597 0 0 0-.192-.443h-1.346a.606 8.597 0 0 0-.337 1.446l-.337 3.172-.326 1.561a.606 8.597 0 0 0-.145 1.003l-.373 3.523-.506 3.566a.606 8.597 0 0 0-.063.538l-.069.652-.068-.652a.606 8.597 0 0 0-.065-.538l-.504-3.566-.373-3.523a.606 8.597 0 0 0-.145-1.003l-.326-1.561-.337-3.172a.606 8.597 0 0 0-.336-1.446h-1.346a.606 8.597 0 0 0-.193.443l-.38 1.795-.516 1.843a.606 8.597 0 0 0-.19 1.19l-.404 3.823-.373 3.52-.421 2.964-.284-2.683-.405-3.801a.606 8.597 0 0 0-.065-.535l-.539-3.826a.606 8.597 0 0 0-.078-.465l-.405-1.912-.404-1.912a.606 8.597 0 0 0-.192-.443h-.943a.606 8.597 0 0 0-.192.443l-.401 1.912-.385 1.795-.516 1.843a.606 8.597 0 0 0-.188 1.189l-.404 3.824-.404 3.802-.047.443-.196-2.076a.606 8.597 0 0 0-.027-.281l-.404-3.8a.606 8.597 0 0 0-.144-1.004l-.328-1.563-.337-3.17a.606 8.597 0 0 0-.188-1.189l-.539-1.913a.606 8.597 0 0 0-.147-.256h-1.212a.606 8.597 0 0 0-.147.256l-.539 1.913a.606 8.597 0 0 0-.19 1.19l-.335 3.17-.327 1.562a.606 8.597 0 0 0-.078.468l-.54 3.801a.606 8.597 0 0 0-.157 1.632l-.052.722-.396-3.708a.606 8.597 0 0 0-.066-.535l-.537-3.83a.606 8.597 0 0 0-.08-.465l-.327-1.563-.335-3.172a.606 8.597 0 0 0-.337-1.446h-.33l-.466-1.655a.606 8.597 0 0 0-.339.187l-.406 1.911-.38 1.797-.516 1.841a.606 8.597 0 0 0-.044.188l-.405 1.912a.606 8.597 0 0 0-.145 1.002l-.402 3.824a.606 8.597 0 0 0-.095 1.072l-.267 3.801-.314-2.984-.403-3.8-.404-3.826a.606 8.597 0 0 0-.188-1.19l-.518-1.84-.383-1.797-.402-1.912a.606 8.597 0 0 0-.192-.443h-.54a.606 8.597 0 0 0-.19.443l-.404 1.912-.406 1.912a.606 8.597 0 0 0-.145 1.003l-.37 3.522-.505 3.59a.606 8.597 0 0 0-.065.537l-.406 3.801-.066.655-.055-.514-.524-5.597a.606 8.597 0 0 0-.173-1.258l-.328-1.563-.335-3.172a.606 8.597 0 0 0-.19-1.19l-.514-1.842-.383-1.795a.606 8.597 0 0 0-.192-.443h-.807a.606 8.597 0 0 0-.147.257l-.539 1.912a.606 8.597 0 0 0-.19 1.189l-.403 3.824-.406 3.825-.371 3.521-.385 2.706-.228-3.243a.606 8.597 0 0 0-.094-1.072l-.403-3.824a.606 8.597 0 0 0-.065-.537l-.539-3.824a.606 8.597 0 0 0-.08-.465l-.403-1.914-.404-1.912a.606 8.597 0 0 0-.192-.443h-.942a.606 8.597 0 0 0-.193.443l-.403 1.912-.404 1.914a.606 8.597 0 0 0-.08.465l-.538 3.824a.606 8.597 0 0 0-.065.537l-.404 3.824-.405 3.8-.048.444-.192-2.075a.606 8.597 0 0 0-.029-.28l-.405-3.801-.404-3.824a.606 8.597 0 0 0-.064-.537l-.54-3.824a.606 8.597 0 0 0-.077-.466l-.406-1.914-.403-1.912a.606 8.597 0 0 0-.19-.443h-.406a.606 8.597 0 0 0-.147.257l-.539 1.912a.606 8.597 0 0 0-.043.186l-.406 1.914a.606 8.597 0 0 0-.144 1.003l-.404 3.824-.371 3.52-.507 3.57a.606 8.597 0 0 0-.064.534l-.166 1.586-.482-5.13a.606 8.597 0 0 0-.026-.256l-.404-3.824-.405-3.824a.606 8.597 0 0 0-.145-1.003l-.404-1.913a.606 8.597 0 0 0-.044-.187l-.54-1.912a.606 8.597 0 0 0-.145-.256h-.807a.606 8.597 0 0 0-.192.443l-.406 1.912a.606 8.597 0 0 0-.078.468l-.5 3.544-.364 1.725a.606 8.597 0 0 0-.236 2.075l-.335 4.735-.42 2.984-.14-1.981a.606 8.597 0 0 0-.091-1.072l-.404-3.826a.606 8.597 0 0 0-.065-.535l-.506-3.592-.371-3.522a.606 8.597 0 0 0-.145-1.003l-.405-1.912-.404-1.912a.606 8.597 0 0 0-.19-.443h-.54a.606 8.597 0 0 0-.191.443l-.404 1.912-.404 1.912a.606 8.597 0 0 0-.144 1.003l-.406 3.825a.606 8.597 0 0 0-.027.279l-.525 5.574-.39 3.684a.606 8.597 0 0 0-.092 1.097l-.03.443-.12-1.26a.606 8.597 0 0 0-.029-.28l-.354-3.335-.361-5.13a.606 8.597 0 0 0-.092-1.073l-.403-3.824a.606 8.597 0 0 0-.19-1.19l-.517-1.817-.38-1.82a.606 8.597 0 0 0-.193-.443h-.807a.606 8.597 0 0 0-.148.257l-.537 1.912a.606 8.597 0 0 0-.19 1.189l-.404 3.824-.404 3.825a.606 8.597 0 0 0-.028.279l-.537 5.714a.606 8.597 0 0 0-.067.817l-.11 1.56-.244-3.474a.606 8.597 0 0 0-.158-1.609l-.451-3.195-.333-4.755a.606 8.597 0 0 0-.238-2.077l-.326-1.538-.337-3.195a.606 8.597 0 0 0-.337-1.446h-.942a.606 8.597 0 0 0-.192.443l-.404 1.912a.606 8.597 0 0 0-.08.466l-.537 3.825a.606 8.597 0 0 0-.066.535l-.404 3.826a.606 8.597 0 0 0-.093 1.072l-.404 5.738-.31 4.406-.18-2.494-.403-5.738a.606 8.597 0 0 0-.091-1.072l-.406-3.824a.606 8.597 0 0 0-.064-.535l-.505-3.592-.373-3.52a.606 8.597 0 0 0-.145-1.003l-.403-1.914a.606 8.597 0 0 0-.193-.443h-.538a.606 8.597 0 0 0-.19.443l-.406 1.914-.404 1.911a.606 8.597 0 0 0-.144 1.003l-.404 3.824a.606 8.597 0 0 0-.027.28l-.54 5.736a.606 8.597 0 0 0-.063.794l-.406 5.736-.05.724-.47-4.992-.373-5.293a.606 8.597 0 0 0-.093-1.072l-.402-3.824-.405-3.825a.606 8.597 0 0 0-.188-1.19l-.516-1.817-.383-1.82a.606 8.597 0 0 0-.385 0l-.38 1.82-.516 1.817a.606 8.597 0 0 0-.189 1.19l-.405 3.825-.404 3.824a.606 8.597 0 0 0-.148 1.981l-.353 6.67-.306 3.265-.122-2.285a.606 8.597 0 0 0-.055-.909l-.406-5.738a.606 8.597 0 0 0-.064-.791l-.539-5.738a.606 8.597 0 0 0-.027-.278l-.405-3.826-.404-3.824a.606 8.597 0 0 0-.335-1.423h-.942a.606 8.597 0 0 0-.192.42l-.406 1.913-.404 1.911a.606 8.597 0 0 0-.17 1.283l-.54 5.738a.606 8.597 0 0 0-.064.792l-.404 5.735-.404 5.738a.606 8.597 0 0 0-.04.652l-.045-.652-.373-5.318-.38-7.135a.606 8.597 0 0 0-.212-2.541l-.505-3.569-.373-3.544a.606 8.597 0 0 0-.145-1.003l-.405-1.889-.404-1.912a.606 8.597 0 0 0-.339-.186l-.537 1.912a.606 8.597 0 0 0-.19 1.19l-.404 3.8-.405 3.824a.606 8.597 0 0 0-.091 1.072l-.404 5.738-.539 7.65-.177 2.517-.282-4.012-.378-7.135a.606 8.597 0 0 0-.056-.933l-.405-5.737a.606 8.597 0 0 0-.092-1.073l-.405-3.823a.606 8.597 0 0 0-.063-.535l-.539-3.803a.606 8.597 0 0 0-.08-.466l-.403-1.912a.606 8.597 0 0 0-.383 0l-.405 1.912-.404 1.912a.606 8.597 0 0 0-.08.468l-.539 3.801a.606 8.597 0 0 0-.158 1.609l-.401 5.736a.606 8.597 0 0 0-.06.933l-.401 7.625-.29 5.503-.089-1.68-.402-7.647a.606 8.597 0 0 0-.059-.91l-.536-7.648-.404-5.715a.606 8.597 0 0 0-.093-1.072l-.404-3.826a.606 8.597 0 0 0-.145-1.003l-.405-1.912a.606 8.597 0 0 0-.19-.443h-.54a.606 8.597 0 0 0-.192.443l-.403 1.912a.606 8.597 0 0 0-.145 1.003l-.403 3.826a.606 8.597 0 0 0-.092 1.072l-.373 5.295-.504 5.363a.606 8.597 0 0 0-.157 2.449l-.388 9.164-.019.35-.339-6.437-.405-7.626-.404-7.648a.606 8.597 0 0 0-.215-2.52l-.504-3.59-.372-3.522a.606 8.597 0 0 0-.337-1.446h-.807a.606 8.597 0 0 0-.27.911l-.539 3.824a.606 8.597 0 0 0-.158 1.609l-.405 5.714-.402 5.736-.539 7.65a.606 8.597 0 0 0-.091 1.655l-.126 3.008-.048-1.097a.606 8.597 0 0 0-.09-1.655l-.51-7.206-.376-7.159-.406-7.65a.606 8.597 0 0 0-.148-1.98l-.404-3.826a.606 8.597 0 0 0-.188-1.19l-.539-1.911a.606 8.597 0 0 0-.147-.257h-.405a.606 8.597 0 0 0-.335 1.446l-.373 3.521-.505 3.592a.606 8.597 0 0 0-.213 2.52l-.405 7.647-.404 7.65a.606 8.597 0 0 0-.034.72l-.358 8.42-.354-8.42-.406-9.559a.606 8.597 0 0 0-.09-1.657l-.538-7.624a.606 8.597 0 0 0-.093-1.072l-.404-3.826-.404-3.824a.606 8.597 0 0 0-.337-1.446h-.94a.606 8.597 0 0 0-.43 2.518l-.404 5.738-.403 5.735-.54 7.627a.606 8.597 0 0 0-.09 1.655l-.404 9.561a.606 8.597 0 0 0-.023.583l-.07 2.029-.223-4.712-.396-9.373-.404-9.539a.606 8.597 0 0 0-.091-1.655l-.404-5.737a.606 8.597 0 0 0-.158-1.61l-.538-3.823a.606 8.597 0 0 0-.08-.466l-.404-1.913a.606 8.597 0 0 0-.19-.443h-.406a.606 8.597 0 0 0-.27.91l-.537 3.824a.606 8.597 0 0 0-.158 1.61l-.406 5.737a.606 8.597 0 0 0-.055.908l-.403 7.65a.606 8.597 0 0 0-.037.746l-.396 9.374-.337 7.16-.36-10.238a.606 8.597 0 0 0-.068-1.515l-.533-9.444-.398-7.533a.606 8.597 0 0 0-.057-.932l-.403-5.738a.606 8.597 0 0 0-.157-1.609l-.54-3.824a.606 8.597 0 0 0-.27-.91h-.404a.606 8.597 0 0 0-.192.442l-.404 1.914a.606 8.597 0 0 0-.236 2.075l-.406 5.736-.536 7.649a.606 8.597 0 0 0-.094 1.655l-.403 9.538a.606 8.597 0 0 0-.021.583l-.406 11.473a.606 8.597 0 0 0-.013.443l-.002.048-.232-7.672a.606 8.597 0 0 0-.037-1.05l-.403-9.538a.606 8.597 0 0 0-.048-.958l-.53-9.444-.4-7.533a.606 8.597 0 0 0-.15-2.004l-.403-3.825a.606 8.597 0 0 0-.144-1.003l-.406-1.89a.606 8.597 0 0 0-.339-.186l-.537 1.912a.606 8.597 0 0 0-.188 1.166l-.406 3.824a.606 8.597 0 0 0-.146 2.005l-.406 7.65a.606 8.597 0 0 0-.034.721l-.398 9.375-.53 11.286a.606 8.597 0 0 0-.052 1.4l-.078 2.565-.02-.654a.606 8.597 0 0 0-.053-1.4l-.518-11.005-.388-10.984a.606 8.597 0 0 0-.021-.583l-.404-9.56a.606 8.597 0 0 0-.156-2.448l-.54-5.738a.606 8.597 0 0 0-.172-1.258l-.403-1.914a.606 8.597 0 0 0-.193-.443h-.401a.606 8.597 0 0 0-.34 1.446l-.403 3.826a.606 8.597 0 0 0-.026.257l-.54 5.735a.606 8.597 0 0 0-.155 2.45l-.404 9.56a.606 8.597 0 0 0-.023.583l-.403 11.448a.606 8.597 0 0 0-.015.468l-.318 10.54-.32-10.54a.606 8.597 0 0 0-.052-1.376l-.517-11.03-.387-10.983a.606 8.597 0 0 0-.059-1.306l-.403-7.65a.606 8.597 0 0 0-.149-1.98l-.404-3.826a.606 8.597 0 0 0-.188-1.19l-.54-1.911a.606 8.597 0 0 0-.34.186l-.401 1.912a.606 8.597 0 0 0-.295 2.986l-.402 7.65-.405 7.647a.606 8.597 0 0 0-.02.372l-.538 11.474a.606 8.597 0 0 0-.063 1.748l-.404 15.276-.057 2.098-.156-5.9a.606 8.597 0 0 0-.01-.373l-.403-13.385-.406-13.362a.606 8.597 0 0 0-.084-1.983l-.537-9.56a.606 8.597 0 0 0-.045-.699l-.404-5.738a.606 8.597 0 0 0-.236-2.074l-.405-1.912a.606 8.597 0 0 0-.193-.443h-.401a.606 8.597 0 0 0-.366 1.726l-.537 5.735a.606 8.597 0 0 0-.122 1.703l-.405 7.65a.606 8.597 0 0 0-.057 1.306l-.402 11.473-.54 15.274a.606 8.597 0 0 0-.025.838l-.147 5.575-.487-13.829-.396-13.13a.606 8.597 0 0 0-.015-.465l-.404-11.45a.606 8.597 0 0 0-.057-1.33l-.406-7.626a.606 8.597 0 0 0-.12-1.724l-.538-5.738a.606 8.597 0 0 0-.364-1.725h-.404a.606 8.597 0 0 0-.335 1.446l-.405 3.823a.606 8.597 0 0 0-.149 2.006l-.403 7.627a.606 8.597 0 0 0-.02.395l-.54 11.473a.606 8.597 0 0 0-.051 1.377l-.406 13.362a.606 8.597 0 0 0-.017.675l-.367 15.625-.233-9.888a.606 8.597 0 0 0-.01-.304l-.401-15.274a.606 8.597 0 0 0-.044-1.258l-.53-13.153-.395-11.263a.606 8.597 0 0 0-.113-2.24l-.405-5.712a.606 8.597 0 0 0-.236-2.075l-.406-1.912a.606 8.597 0 0 0-.337-.187l-.54 1.913a.606 8.597 0 0 0-.28 2.261l-.406 5.713a.606 8.597 0 0 0-.112 2.24l-.396 11.262-.531 13.153a.606 8.597 0 0 0-.048 1.538l-.405 17.211a.606 8.597 0 0 0-.004.232l-.126 5.9-.068-2.449-.396-18.725a.606 8.597 0 0 0-.014-.56l-.405-15.274a.606 8.597 0 0 0-.025-.817l-.403-11.473a.606 8.597 0 0 0-.069-1.515l-.539-9.558a.606 8.597 0 0 0-.137-1.772l-.405-3.824a.606 8.597 0 0 0-.335-1.446h-.404a.606 8.597 0 0 0-.364 1.724l-.538 5.715a.606 8.597 0 0 0-.156 2.472l-.404 9.536a.606 8.597 0 0 0-.038 1.05l-.404 13.363a.606 8.597 0 0 0-.019.674l-.396 16.954-.35 12.382-.251-11.893a.606 8.597 0 0 0-.02-.722l-.534-19.029-.402-15.18a.606 8.597 0 0 0-.047-1.423l-.406-9.536a.606 8.597 0 0 0-.09-1.657l-.538-7.648a.606 8.597 0 0 0-.43-2.52h-.402a.606 8.597 0 0 0-.192.443l-.406 1.912a.606 8.597 0 0 0-.327 3.732l-.404 9.561a.606 8.597 0 0 0-.006.14l-.54 13.385a.606 8.597 0 0 0-.048 1.538l-.404 17.188a.606 8.597 0 0 0-.008.256l-.401 19.1a.606 8.597 0 0 0-.006.208l-.04 2.054-.134-7.603a.606 8.597 0 0 0-.008-.373l-.403-19.122a.606 8.597 0 0 0-.006-.232l-.404-17.209a.606 8.597 0 0 0-.05-1.54l-.54-13.362a.606 8.597 0 0 0-.004-.162l-.406-9.562a.606 8.597 0 0 0-.182-2.729l-.406-3.823a.606 8.597 0 0 0-.483-1.19l-.537 1.912a.606 8.597 0 0 0-.34 3.195l-.4 7.65a.606 8.597 0 0 0-.06 1.306l-.403 11.448a.606 8.597 0 0 0-.033 1.143l-.398 16.953-.533 18.866a.606 8.597 0 0 0-.024 1.095l-.15 8.49-.435-18.54-.402-18.983a.606 8.597 0 0 0-.008-.256l-.403-17.187a.606 8.597 0 0 0-.07-2.052l-.54-11.45a.606 8.597 0 0 0-.073-1.33l-.406-5.712a.606 8.597 0 0 0-.428-2.518h-.404a.606 8.597 0 0 0-.337 1.446l-.402 3.799a.606 8.597 0 0 0-.169 2.403l-.539 11.45a.606 8.597 0 0 0-.063 1.749l-.403 15.297a.606 8.597 0 0 0-.017.746l-.404 21.012a.606 8.597 0 0 0-.004.186l-.364 20.613-.207-12.826a.606 8.597 0 0 0-.017-.791l-.537-22.924-.406-17.186a.606 8.597 0 0 0-.008-.303l-.403-15.274a.606 8.597 0 0 0-.048-1.4l-.403-9.561a.606 8.597 0 0 0-.374-3.918l-.538-1.912a.606 8.597 0 0 0-.34.186l-.403 1.912a.606 8.597 0 0 0-.327 3.732l-.406 9.561a.606 8.597 0 0 0-.047 1.4l-.402 15.18-.535 19.03a.606 8.597 0 0 0-.028 1.26l-.404 24.833-.116 7.089-.048-3.147a.606 8.597 0 0 0-.002-.12l-.403-24.836a.606 8.597 0 0 0-.004-.162l-.404-22.924a.606 8.597 0 0 0-.034-1.398l-.539-17.186a.606 8.597 0 0 0-.011-.373l-.404-11.45a.606 8.597 0 0 0-.114-2.238l-.404-5.736a.606 8.597 0 0 0-.428-2.52h-.404a.606 8.597 0 0 0-.428 2.52l-.54 7.647a.606 8.597 0 0 0-.128 2.683l-.404 13.385a.606 8.597 0 0 0-.023.909l-.405 19.1a.606 8.597 0 0 0-.01.535l-.4 24.626-.35 17.349-.36-19.192-.402-24.672a.606 8.597 0 0 0-.006-.349l-.403-21.008a.606 8.597 0 0 0-.02-.746l-.401-15.299a.606 8.597 0 0 0-.14-3.055l-.54-7.624a.606 8.597 0 0 0-.236-2.075l-.403-1.914a.606 8.597 0 0 0-.528 1.003l-.403 3.803a.606 8.597 0 0 0-.206 3.31l-.405 11.473a.606 8.597 0 0 0-.021.654l-.537 19.098a.606 8.597 0 0 0-.027 1.097l-.405 22.947a.606 8.597 0 0 0-.004.395l-.402 28.381-.038 2.03-.124-9.305a.606 8.597 0 0 0 0-.212l-.405-26.747a.606 8.597 0 0 0-.014-.722l-.538-24.81-.404-19.076a.606 8.597 0 0 0-.036-1.377l-.406-11.45a.606 8.597 0 0 0-.112-2.238l-.406-5.737a.606 8.597 0 0 0-.574-2.261l-.54 1.912a.606 8.597 0 0 0-.393 4.5l-.406 11.45a.606 8.597 0 0 0-.024.839l-.404 15.276a.606 8.597 0 0 0-.01.303l-.537 22.922a.606 8.597 0 0 0-.019 1.025l-.405 28.66a.606 8.597 0 0 0-.002.095l-.19 14.459-.368-27.821a.606 8.597 0 0 0-.004-.21l-.404-26.746a.606 8.597 0 0 0-.004-.28l-.405-22.924a.606 8.597 0 0 0-.046-1.772l-.539-15.274a.606 8.597 0 0 0-.02-.583l-.406-9.561a.606 8.597 0 0 0-.52-4.173h-.404a.606 8.597 0 0 0-.428 2.518l-.539 7.65a.606 8.597 0 0 0-.139 3.054l-.403 15.297a.606 8.597 0 0 0-.017.746l-.404 21.012a.606 8.597 0 0 0-.011.581l-.4 28.45-.417 23.624-.147-11.776a.606 8.597 0 0 0-.006-.468l-.539-32.46-.403-24.813a.606 8.597 0 0 0-.008-.326l-.402-21.01a.606 8.597 0 0 0-.044-1.585l-.403-11.474a.606 8.597 0 0 0-.27-3.825l-.541-3.824a.606 8.597 0 0 0-.606.537l-.405 3.824a.606 8.597 0 0 0-.219 3.755l-.405 13.385a.606 8.597 0 0 0-.012.443l-.539 21.011a.606 8.597 0 0 0-.023 1.142l-.405 26.724a.606 8.597 0 0 0-.002.326l-.406 32.462a.606 8.597 0 0 0-.002.095l-.108 9.353-.04-3.546a.606 8.597 0 0 0-.002-.072l-.406-34.397a.606 8.597 0 0 0 0-.163l-.405-30.571a.606 8.597 0 0 0-.019-1.143l-.539-22.923a.606 8.597 0 0 0-.008-.304l-.403-15.274a.606 8.597 0 0 0-.048-1.4l-.405-9.56a.606 8.597 0 0 0-.667-3.919l-.537 1.912a.606 8.597 0 0 0-.373 3.918l-.405 9.56a.606 8.597 0 0 0-.061 1.936l-.402 19.121a.606 8.597 0 0 0-.013.655l-.402 26.607-.535 30.43a.606 8.597 0 0 0-.011.795l-.406 38.22-.403 38.196a.606 8.596 0 0 0 .022 1.283.606 8.596 0 0 0-.022 1.283l.403 38.197.406 38.198a.606 8.597 0 0 0 .011.815l.535 30.433.402 26.608a.606 8.597 0 0 0 .013.652l.402 19.1a.606 8.597 0 0 0 .06 1.957l.406 9.562a.606 8.597 0 0 0 .373 3.917l.537 1.912a.606 8.597 0 0 0 .668-3.917l.404-9.562a.606 8.597 0 0 0 .048-1.398l.405-15.274a.606 8.597 0 0 0 .006-.304l.539-22.922a.606 8.597 0 0 0 .02-1.143l.404-30.57a.606 8.597 0 0 0 .002-.165l.404-34.395a.606 8.597 0 0 0 .002-.072l.04-3.567.11 9.374a.606 8.597 0 0 0 .002.095l.404 32.46a.606 8.597 0 0 0 .004.305l.404 26.747a.606 8.597 0 0 0 .023 1.141l.54 21.012a.606 8.597 0 0 0 .012.443l.403 13.385a.606 8.597 0 0 0 .221 3.755l.404 3.824a.606 8.597 0 0 0 .607.537l.539-3.826a.606 8.597 0 0 0 .272-3.824l.404-11.473a.606 8.597 0 0 0 .043-1.586l.402-21.01a.606 8.597 0 0 0 .008-.325l.404-24.813.536-32.46a.606 8.597 0 0 0 .008-.49l.147-11.754.415 23.624.402 28.45a.606 8.597 0 0 0 .01.583l.403 21.01a.606 8.597 0 0 0 .018.746l.405 15.299a.606 8.597 0 0 0 .139 3.052l.537 7.65a.606 8.597 0 0 0 .43 2.518h.404a.606 8.597 0 0 0 .52-4.173l.403-9.561a.606 8.597 0 0 0 .023-.583l.539-15.274a.606 8.597 0 0 0 .045-1.772l.404-22.924a.606 8.597 0 0 0 .004-.28l.405-26.747a.606 8.597 0 0 0 .002-.21l.37-27.843.19 14.459a.606 8.597 0 0 0 .002.119l.404 28.659a.606 8.597 0 0 0 .02 1.026l.538 22.923a.606 8.597 0 0 0 .008.303l.405 15.274a.606 8.597 0 0 0 .025.841l.403 11.45a.606 8.597 0 0 0 .394 4.499l.541 1.914a.606 8.597 0 0 0 .575-2.263l.404-5.736a.606 8.597 0 0 0 .114-2.24l.403-11.45a.606 8.597 0 0 0 .038-1.375l.404-19.074.539-24.813a.606 8.597 0 0 0 .013-.723l.404-26.748a.606 8.597 0 0 0 .002-.211l.123-9.304.038 2.028.4 28.38a.606 8.597 0 0 0 .006.397l.404 22.924a.606 8.597 0 0 0 .026 1.117l.54 19.098a.606 8.597 0 0 0 .02.654l.404 11.474a.606 8.597 0 0 0 .205 3.288l.406 3.824a.606 8.597 0 0 0 .527 1.003l.402-1.912a.606 8.597 0 0 0 .238-2.077l.539-7.624a.606 8.597 0 0 0 .139-3.078l.403-15.274a.606 8.597 0 0 0 .017-.746l.406-21.012a.606 8.597 0 0 0 .004-.348l.403-24.673.36-19.192.35 17.35.4 24.6a.606 8.597 0 0 0 .01.56l.404 19.1a.606 8.597 0 0 0 .023.91l.405 13.361a.606 8.597 0 0 0 .128 2.706l.539 7.648a.606 8.597 0 0 0 .43 2.52h.401a.606 8.597 0 0 0 .43-2.52l.404-5.736a.606 8.597 0 0 0 .115-2.238l.403-11.45a.606 8.597 0 0 0 .012-.373l.538-17.188a.606 8.597 0 0 0 .035-1.398l.403-22.923a.606 8.597 0 0 0 .004-.164l.402-24.835a.606 8.597 0 0 0 .004-.12l.048-3.148.116 7.09.403 24.835a.606 8.597 0 0 0 .029 1.258l.535 19.029.401 15.181a.606 8.597 0 0 0 .048 1.398l.404 9.562a.606 8.597 0 0 0 .329 3.732l.404 1.911a.606 8.597 0 0 0 .337.187l.54-1.912a.606 8.597 0 0 0 .373-3.918l.404-9.561a.606 8.597 0 0 0 .048-1.398l.403-15.276a.606 8.597 0 0 0 .008-.303l.406-17.186.536-22.924a.606 8.597 0 0 0 .016-.792l.21-12.825.363 20.613a.606 8.597 0 0 0 .004.187l.403 21.01a.606 8.597 0 0 0 .017.746l.404 15.3a.606 8.597 0 0 0 .061 1.748l.539 11.449a.606 8.597 0 0 0 .17 2.38l.403 3.823a.606 8.597 0 0 0 .337 1.446h.401a.606 8.597 0 0 0 .43-2.518l.404-5.737a.606 8.597 0 0 0 .076-1.306l.537-11.45a.606 8.597 0 0 0 .07-2.052l.406-17.186a.606 8.597 0 0 0 .006-.257l.402-18.981.436-18.54.15 8.49a.606 8.597 0 0 0 .023 1.094l.533 18.866.398 16.954a.606 8.597 0 0 0 .032 1.142l.406 11.45a.606 8.597 0 0 0 .057 1.306l.404 7.65a.606 8.597 0 0 0 .338 3.194l.537 1.889a.606 8.597 0 0 0 .484-1.165l.403-3.826a.606 8.597 0 0 0 .185-2.727l.404-9.561a.606 8.597 0 0 0 .006-.163l.538-13.362a.606 8.597 0 0 0 .05-1.563l.404-17.186a.606 8.597 0 0 0 .006-.234l.403-19.12a.606 8.597 0 0 0 .008-.373l.135-7.627.04 2.075a.606 8.597 0 0 0 .004.211l.404 19.098a.606 8.597 0 0 0 .006.234l.405 17.21a.606 8.597 0 0 0 .048 1.539l.539 13.362a.606 8.597 0 0 0 .006.163l.405 9.56a.606 8.597 0 0 0 .328 3.73l.403 1.915a.606 8.597 0 0 0 .193.442h.403a.606 8.597 0 0 0 .429-2.52l.538-7.647a.606 8.597 0 0 0 .092-1.657l.403-9.536a.606 8.597 0 0 0 .048-1.423l.402-15.182.534-19.029a.606 8.597 0 0 0 .02-.72l.25-11.894.351 12.382.398 16.954a.606 8.597 0 0 0 .017.675l.406 13.362a.606 8.597 0 0 0 .038 1.05l.401 9.538a.606 8.597 0 0 0 .156 2.471l.54 5.713a.606 8.597 0 0 0 .363 1.726h.403a.606 8.597 0 0 0 .335-1.446l.406-3.826a.606 8.597 0 0 0 .137-1.772l.539-9.56a.606 8.597 0 0 0 .068-1.516l.404-11.473a.606 8.597 0 0 0 .025-.817l.405-15.297a.606 8.597 0 0 0 .013-.537l.396-18.749.069-2.447.126 5.922a.606 8.597 0 0 0 .004.234l.405 17.209a.606 8.597 0 0 0 .048 1.54l.53 13.15.397 11.265a.606 8.597 0 0 0 .112 2.238l.406 5.713a.606 8.597 0 0 0 .28 2.263l.54 1.911a.606 8.597 0 0 0 .339-.186l.404-1.912a.606 8.597 0 0 0 .236-2.075l.405-5.714a.606 8.597 0 0 0 .112-2.238l.396-11.264.53-13.151a.606 8.597 0 0 0 .043-1.26l.402-15.274a.606 8.597 0 0 0 .01-.304l.232-9.887.368 15.623a.606 8.597 0 0 0 .017.677l.405 13.362a.606 8.597 0 0 0 .054 1.375l.539 11.473a.606 8.597 0 0 0 .019.398l.403 7.625a.606 8.597 0 0 0 .149 2.005l.405 3.824a.606 8.597 0 0 0 .335 1.423h.404a.606 8.597 0 0 0 .363-1.7l.54-5.738a.606 8.597 0 0 0 .119-1.726l.406-7.625a.606 8.597 0 0 0 .057-1.329l.403-11.45a.606 8.597 0 0 0 .015-.468l.396-13.128.488-13.828.148 5.572a.606 8.597 0 0 0 .025.84l.539 15.274.401 11.473a.606 8.597 0 0 0 .06 1.306l.403 7.65a.606 8.597 0 0 0 .122 1.7l.537 5.738a.606 8.597 0 0 0 .365 1.726h.402a.606 8.597 0 0 0 .192-.443l.406-1.912a.606 8.597 0 0 0 .236-2.077l.405-5.736a.606 8.597 0 0 0 .044-.7l.537-9.56a.606 8.597 0 0 0 .084-1.984l.405-13.36.404-13.387a.606 8.597 0 0 0 .01-.372l.156-5.899.057 2.098.403 15.274a.606 8.597 0 0 0 .063 1.749l.539 11.45a.606 8.597 0 0 0 .019.398l.406 7.647.401 7.65a.606 8.597 0 0 0 .295 2.984l.404 1.913a.606 8.597 0 0 0 .337.187l.54-1.912a.606 8.597 0 0 0 .189-1.19l.404-3.824a.606 8.597 0 0 0 .148-1.981l.406-7.65a.606 8.597 0 0 0 .057-1.306l.386-10.984.518-11.03a.606 8.597 0 0 0 .051-1.375l.32-10.541.318 10.54a.606 8.597 0 0 0 .015.466l.406 11.45a.606 8.597 0 0 0 .02.583l.404 9.562a.606 8.597 0 0 0 .157 2.449l.538 5.735a.606 8.597 0 0 0 .027.257l.405 3.824a.606 8.597 0 0 0 .337 1.446h.402a.606 8.597 0 0 0 .192-.443l.406-1.912a.606 8.597 0 0 0 .17-1.283l.54-5.713a.606 8.597 0 0 0 .156-2.472l.404-9.538a.606 8.597 0 0 0 .02-.583l.389-10.982.518-11.007a.606 8.597 0 0 0 .053-1.398l.02-.655.077 2.566a.606 8.597 0 0 0 .053 1.398l.53 11.288.398 9.373a.606 8.597 0 0 0 .034.723l.405 7.65a.606 8.597 0 0 0 .147 2.004l.405 3.802a.606 8.597 0 0 0 .189 1.19l.537 1.912a.606 8.597 0 0 0 .339-.187l.405-1.912a.606 8.597 0 0 0 .145-1.003l.403-3.8a.606 8.597 0 0 0 .149-2.006l.4-7.533.53-9.444a.606 8.597 0 0 0 .048-.956l.404-9.537a.606 8.597 0 0 0 .036-1.05l.232-7.671.002.048a.606 8.597 0 0 0 .016.443l.403 11.473a.606 8.597 0 0 0 .021.582l.406 9.539a.606 8.597 0 0 0 .091 1.655l.537 7.65.406 5.735a.606 8.597 0 0 0 .236 2.077l.403 1.912a.606 8.597 0 0 0 .192.42h.404a.606 8.597 0 0 0 .272-.886l.539-3.824a.606 8.597 0 0 0 .158-1.609l.402-5.737a.606 8.597 0 0 0 .057-.932l.398-7.532.533-9.445a.606 8.597 0 0 0 .068-1.515l.36-10.238.337 7.159.398 9.375a.606 8.597 0 0 0 .034.746l.404 7.65a.606 8.597 0 0 0 .055.908l.406 5.738a.606 8.597 0 0 0 .158 1.609l.536 3.824a.606 8.597 0 0 0 .273.908h.403a.606 8.597 0 0 0 .19-.443l.406-1.912a.606 8.597 0 0 0 .078-.465l.539-3.824a.606 8.597 0 0 0 .158-1.611l.405-5.736a.606 8.597 0 0 0 .09-1.655l.403-9.538.398-9.398.22-4.687.072 2.029a.606 8.597 0 0 0 .022.583l.404 9.561a.606 8.597 0 0 0 .091 1.655l.54 7.624.403 5.738.403 5.736a.606 8.597 0 0 0 .43 2.52h.943a.606 8.597 0 0 0 .337-1.446l.402-3.826.405-3.824a.606 8.597 0 0 0 .092-1.072l.538-7.65a.606 8.597 0 0 0 .092-1.654l.403-9.539.356-8.418.356 8.418a.606 8.597 0 0 0 .035.725l.403 7.647.406 7.65a.606 8.597 0 0 0 .213 2.518l.504 3.592.374 3.52a.606 8.597 0 0 0 .335 1.446h.405a.606 8.597 0 0 0 .147-.256l.538-1.912a.606 8.597 0 0 0 .189-1.19l.405-3.823a.606 8.597 0 0 0 .147-1.983l.405-7.65.377-7.158.509-7.205a.606 8.597 0 0 0 .091-1.657l.048-1.095.125 3.007a.606 8.597 0 0 0 .092 1.657l.539 7.648.401 5.714.406 5.736a.606 8.597 0 0 0 .158 1.609l.538 3.824a.606 8.597 0 0 0 .27.908h.808a.606 8.597 0 0 0 .337-1.446l.371-3.52.505-3.592a.606 8.597 0 0 0 .215-2.518l.403-7.65.406-7.624.337-6.436.02.349.39 9.164a.606 8.597 0 0 0 .155 2.45l.505 5.363.373 5.293a.606 8.597 0 0 0 .091 1.072l.404 3.825a.606 8.597 0 0 0 .145 1.003l.403 1.912a.606 8.597 0 0 0 .192.443h.54a.606 8.597 0 0 0 .19-.443l.405-1.912a.606 8.597 0 0 0 .145-1.003l.403-3.823a.606 8.597 0 0 0 .094-1.074l.403-5.712.537-7.65a.606 8.597 0 0 0 .06-.932l.4-7.625.09-1.68.29 5.504.401 7.626a.606 8.597 0 0 0 .06.933l.401 5.735a.606 8.597 0 0 0 .158 1.61l.539 3.8a.606 8.597 0 0 0 .08.468l.403 1.912.404 1.912a.606 8.597 0 0 0 .385 0l.403-1.912a.606 8.597 0 0 0 .08-.466l.539-3.825a.606 8.597 0 0 0 .063-.535l.405-3.801a.606 8.597 0 0 0 .092-1.074l.405-5.737a.606 8.597 0 0 0 .055-.933l.38-7.135.28-4.012.178 2.52.539 7.647.403 5.738a.606 8.597 0 0 0 .092 1.072l.405 3.824.404 3.8a.606 8.597 0 0 0 .19 1.191l.537 1.912a.606 8.597 0 0 0 .339-.186l.403-1.912.406-1.914a.606 8.597 0 0 0 .145-1.003l.373-3.52.504-3.567a.606 8.597 0 0 0 .214-2.543l.378-7.136.373-5.317.046-.652a.606 8.597 0 0 0 .04.652l.404 5.737.403 5.736a.606 8.597 0 0 0 .065.794l.539 5.735a.606 8.597 0 0 0 .171 1.283l.404 1.912.405 1.89a.606 8.597 0 0 0 .193.442h.941a.606 8.597 0 0 0 .336-1.446l.404-3.8.405-3.824a.606 8.597 0 0 0 .027-.28l.538-5.735a.606 8.597 0 0 0 .065-.794l.406-5.736a.606 8.597 0 0 0 .055-.911l.122-2.284.306 3.264.352 6.646a.606 8.597 0 0 0 .149 2.006l.404 3.824.405 3.824a.606 8.597 0 0 0 .188 1.189l.516 1.82.381 1.795a.606 8.597 0 0 0 .385 0l.382-1.795.516-1.82a.606 8.597 0 0 0 .189-1.19l.405-3.823.402-3.824a.606 8.597 0 0 0 .093-1.073l.373-5.293.47-4.99.05.722.406 5.737a.606 8.597 0 0 0 .062.792l.541 5.738a.606 8.597 0 0 0 .027.278l.403 3.825a.606 8.597 0 0 0 .145 1.003l.404 1.912.405 1.912a.606 8.597 0 0 0 .19.42h.54a.606 8.597 0 0 0 .192-.42l.403-1.912a.606 8.597 0 0 0 .145-1.003l.373-3.52.504-3.592a.606 8.597 0 0 0 .065-.537l.406-3.824a.606 8.597 0 0 0 .091-1.074l.404-5.735.179-2.495.31 4.407.403 5.735a.606 8.597 0 0 0 .094 1.074l.403 3.823a.606 8.597 0 0 0 .067.535l.537 3.826a.606 8.597 0 0 0 .08.466l.404 1.911a.606 8.597 0 0 0 .192.443h.943a.606 8.597 0 0 0 .336-1.445l.337-3.195.326-1.538a.606 8.597 0 0 0 .238-2.075l.333-4.758.45-3.195a.606 8.597 0 0 0 .159-1.608l.244-3.475.11 1.563a.606 8.597 0 0 0 .067.816l.537 5.713a.606 8.597 0 0 0 .028.28l.404 3.824.403 3.824a.606 8.597 0 0 0 .19 1.19l.537 1.911a.606 8.597 0 0 0 .149.257h.807a.606 8.597 0 0 0 .192-.443l.381-1.818.516-1.82a.606 8.597 0 0 0 .19-1.189l.404-3.824a.606 8.597 0 0 0 .091-1.072l.362-5.132.354-3.357a.606 8.597 0 0 0 .029-.257l.12-1.258.03.443a.606 8.597 0 0 0 .092 1.072l.39 3.707.525 5.574a.606 8.597 0 0 0 .027.279l.405 3.825a.606 8.597 0 0 0 .145 1.003l.404 1.912.403 1.912a.606 8.597 0 0 0 .193.445h.538a.606 8.597 0 0 0 .19-.443l.404-1.911.406-1.912a.606 8.597 0 0 0 .145-1.003l.37-3.523.507-3.59a.606 8.597 0 0 0 .065-.537l.403-3.824a.606 8.597 0 0 0 .092-1.072l.14-1.983.42 2.986.335 4.733a.606 8.597 0 0 0 .236 2.076l.363 1.724.501 3.546a.606 8.597 0 0 0 .078.466l.405 1.912a.606 8.597 0 0 0 .193.443h.807a.606 8.597 0 0 0 .145-.256l.54-1.914a.606 8.597 0 0 0 .044-.186l.404-1.912a.606 8.597 0 0 0 .144-1.003l.406-3.824.403-3.823a.606 8.597 0 0 0 .027-.28l.482-5.108.165 1.561a.606 8.597 0 0 0 .065.538l.507 3.591.37 3.521.404 3.824a.606 8.597 0 0 0 .145 1.003l.406 1.912a.606 8.597 0 0 0 .043.187l.537 1.912a.606 8.597 0 0 0 .149.257h.405a.606 8.597 0 0 0 .19-.443l.404-1.914.406-1.912a.606 8.597 0 0 0 .078-.465l.538-3.826a.606 8.597 0 0 0 .065-.535l.404-3.824.405-3.825a.606 8.597 0 0 0 .027-.257l.194-2.075.048.443.405 3.8.404 3.824a.606 8.597 0 0 0 .064.538l.54 3.824a.606 8.597 0 0 0 .08.465l.403 1.914.403 1.912a.606 8.597 0 0 0 .193.443h.942a.606 8.597 0 0 0 .192-.443l.404-1.912.403-1.914a.606 8.597 0 0 0 .08-.465l.539-3.824a.606 8.597 0 0 0 .065-.538l.403-3.823a.606 8.597 0 0 0 .094-1.072l.228-3.243.385 2.706.37 3.52.406 3.826.404 3.824a.606 8.597 0 0 0 .188 1.19l.541 1.91a.606 8.597 0 0 0 .147.258h.807a.606 8.597 0 0 0 .192-.443l.383-1.818.514-1.82a.606 8.597 0 0 0 .19-1.19l.335-3.171.328-1.563a.606 8.597 0 0 0 .173-1.283l.523-5.573.056-.513.066.654.406 3.801a.606 8.597 0 0 0 .065.537l.504 3.59.371 3.523a.606 8.597 0 0 0 .145 1.003l.405 1.912.404 1.912a.606 8.597 0 0 0 .19.443h.541a.606 8.597 0 0 0 .192-.443l.402-1.912.383-1.797.516-1.841a.606 8.597 0 0 0 .19-1.19l.404-3.825.403-3.824.314-2.96.267 3.8a.606 8.597 0 0 0 .095 1.073l.402 3.823a.606 8.597 0 0 0 .144 1.003l.406 1.912a.606 8.597 0 0 0 .044.186l.516 1.843.38 1.795.406 1.914a.606 8.597 0 0 0 .339.186l.466-1.657h.33a.606 8.597 0 0 0 .336-1.445l.335-3.17.328-1.563a.606 8.597 0 0 0 .08-.468l.537-3.824a.606 8.597 0 0 0 .066-.535l.396-3.709.052.723a.606 8.597 0 0 0 .158 1.609l.539 3.823a.606 8.597 0 0 0 .078.466l.327 1.563.335 3.172a.606 8.597 0 0 0 .19 1.189l.54 1.912a.606 8.597 0 0 0 .146.256h1.212a.606 8.597 0 0 0 .147-.256l.539-1.912a.606 8.597 0 0 0 .188-1.19l.337-3.171.328-1.563a.606 8.597 0 0 0 .144-1.003l.404-3.824a.606 8.597 0 0 0 .027-.256l.196-2.075.047.443.404 3.8.404 3.824a.606 8.597 0 0 0 .188 1.19l.516 1.841.384 1.797.402 1.912a.606 8.597 0 0 0 .192.446h.943a.606 8.597 0 0 0 .192-.443l.404-1.914.405-1.912a.606 8.597 0 0 0 .078-.466l.539-3.826a.606 8.597 0 0 0 .065-.534l.405-3.824.284-2.683.42 2.986.374 3.52.403 3.824a.606 8.597 0 0 0 .19 1.19l.516 1.842.381 1.795a.606 8.597 0 0 0 .193.443h1.345a.606 8.597 0 0 0 .337-1.446l.337-3.17.326-1.562a.606 8.597 0 0 0 .145-1.003l.373-3.521.504-3.569a.606 8.597 0 0 0 .065-.535l.068-.654.069.654a.606 8.597 0 0 0 .063.535l.506 3.569.373 3.52a.606 8.597 0 0 0 .145 1.004l.326 1.562.337 3.172a.606 8.597 0 0 0 .337 1.444h1.345a.606 8.597 0 0 0 .193-.443l.38-1.795.516-1.843a.606 8.597 0 0 0 .19-1.189l.404-3.823.373-3.521.421-2.986.284 2.683.405 3.824a.606 8.597 0 0 0 .063.537l.54 3.824a.606 8.597 0 0 0 .079.465l.405 1.914.404 1.912a.606 8.597 0 0 0 .192.443h.943a.606 8.597 0 0 0 .192-.443l.402-1.912.384-1.797.516-1.843a.606 8.597 0 0 0 .188-1.189l.404-3.823.404-3.801.047-.443.196 2.075a.606 8.597 0 0 0 .027.256l.404 3.824a.606 8.597 0 0 0 .144 1.003l.328 1.563.337 3.172a.606 8.597 0 0 0 .188 1.189l.539 1.912a.606 8.597 0 0 0 .147.257h1.212a.606 8.597 0 0 0 .147-.257l.539-1.912a.606 8.597 0 0 0 .19-1.19l.335-3.171.327-1.563a.606 8.597 0 0 0 .078-.466l.54-3.823a.606 8.597 0 0 0 .157-1.61l.052-.723.396 3.707a.606 8.597 0 0 0 .066.537l.537 3.824a.606 8.597 0 0 0 .08.468l.328 1.561.335 3.172a.606 8.597 0 0 0 .337 1.446h.329l.466 1.657a.606 8.597 0 0 0 .34-.186l.403-1.914.382-1.795.516-1.843a.606 8.597 0 0 0 .044-.186l.406-1.912a.606 8.597 0 0 0 .144-1.003l.402-3.824a.606 8.597 0 0 0 .093-1.072l.269-3.8.314 2.96.404 3.824.403 3.825a.606 8.597 0 0 0 .189 1.19l.517 1.84.381 1.797.404 1.912a.606 8.597 0 0 0 .192.443h.539a.606 8.597 0 0 0 .192-.443l.404-1.912.403-1.911a.606 8.597 0 0 0 .145-1.003l.373-3.523.505-3.59a.606 8.597 0 0 0 .064-.537l.406-3.803.066-.654.056.513.523 5.573a.606 8.597 0 0 0 .173 1.283l.328 1.563.335 3.171a.606 8.597 0 0 0 .19 1.19l.514 1.818.383 1.82a.606 8.597 0 0 0 .192.442h.807a.606 8.597 0 0 0 .147-.256l.539-1.912a.606 8.597 0 0 0 .19-1.19l.404-3.825.405-3.824.371-3.52.385-2.707.228 3.241a.606 8.597 0 0 0 .094 1.074l.403 3.823a.606 8.597 0 0 0 .065.538l.539 3.824a.606 8.597 0 0 0 .08.465l.403 1.914.404 1.912a.606 8.597 0 0 0 .192.443h.943a.606 8.597 0 0 0 .192-.443l.403-1.912.404-1.914a.606 8.597 0 0 0 .08-.465l.539-3.824a.606 8.597 0 0 0 .064-.538l.404-3.823.406-3.801.047-.443.192 2.075a.606 8.597 0 0 0 .029.257l.405 3.823.404 3.824a.606 8.597 0 0 0 .065.537l.538 3.824a.606 8.597 0 0 0 .078.468l.406 1.912.404 1.912a.606 8.597 0 0 0 .19.443h.405a.606 8.597 0 0 0 .147-.257l.539-1.912a.606 8.597 0 0 0 .044-.186l.403-1.912a.606 8.597 0 0 0 .145-1.003l.405-3.826.372-3.52.506-3.59a.606 8.597 0 0 0 .065-.537l.165-1.563.482 5.106a.606 8.597 0 0 0 .027.28l.403 3.825.406 3.825a.606 8.597 0 0 0 .142 1.003l.406 1.912a.606 8.597 0 0 0 .044.186l.539 1.912a.606 8.597 0 0 0 .146.257h.807a.606 8.597 0 0 0 .193-.443l.405-1.912a.606 8.597 0 0 0 .078-.468l.5-3.544.362-1.726a.606 8.597 0 0 0 .238-2.074l.335-4.735.42-2.984.14 1.981a.606 8.597 0 0 0 .092 1.072l.403 3.826a.606 8.597 0 0 0 .065.535l.506 3.592.372 3.52a.606 8.597 0 0 0 .144 1.003l.404 1.912.405 1.914a.606 8.597 0 0 0 .19.443h.54a.606 8.597 0 0 0 .192-.443l.403-1.914.404-1.912a.606 8.597 0 0 0 .145-1.003l.405-3.823a.606 8.597 0 0 0 .025-.28l.527-5.573.388-3.708a.606 8.597 0 0 0 .094-1.072l.03-.443.12 1.26a.606 8.597 0 0 0 .029.256l.354 3.358.36 5.13a.606 8.597 0 0 0 .093 1.072l.403 3.826a.606 8.597 0 0 0 .19 1.189l.517 1.818.38 1.82a.606 8.597 0 0 0 .193.443h.807a.606 8.597 0 0 0 .148-.257l.537-1.912a.606 8.597 0 0 0 .19-1.19l.404-3.825.404-3.824a.606 8.597 0 0 0 .028-.28l.537-5.713a.606 8.597 0 0 0 .067-.817l.11-1.562.244 3.474a.606 8.597 0 0 0 .158 1.61l.451 3.194.333 4.758a.606 8.597 0 0 0 .236 2.075l.328 1.54.337 3.194a.606 8.597 0 0 0 .335 1.446h.944a.606 8.597 0 0 0 .19-.443l.406-1.912a.606 8.597 0 0 0 .08-.468l.537-3.824a.606 8.597 0 0 0 .067-.537l.403-3.824a.606 8.597 0 0 0 .094-1.072l.403-5.737.312-4.407.175 2.495.406 5.737a.606 8.596 0 0 0 .057.326.606 8.596 0 0 0 .034.746l.406 3.826a.606 8.597 0 0 0 .065.535l.504 3.592.373 3.52a.606 8.597 0 0 0 .143 1.003l.405 1.912a.606 8.597 0 0 0 .193.42h.537a.606 8.597 0 0 0 .192-.42l.405-1.912.404-1.911a.606 8.597 0 0 0 .143-1.003l.405-3.824a.606 8.597 0 0 0 .027-.28l.539-5.735a.606 8.597 0 0 0 .064-.794l.406-5.736.05-.722.468 4.99.373 5.294a.606 8.597 0 0 0 .095 1.072l.402 3.824.405 3.826a.606 8.597 0 0 0 .189 1.189l.516 1.818.382 1.797a.606 8.597 0 0 0 .383 0l.383-1.797.515-1.818a.606 8.597 0 0 0 .189-1.19l.405-3.825.404-3.824a.606 8.597 0 0 0 .149-2.006l.352-6.646.306-3.264.122 2.286a.606 8.597 0 0 0 .055.908l.406 5.738a.606 8.597 0 0 0 .064.792l.54 5.735a.606 8.597 0 0 0 .026.28l.405 3.825.404 3.801a.606 8.597 0 0 0 .335 1.444h.942a.606 8.597 0 0 0 .193-.443l.405-1.889.404-1.912a.606 8.597 0 0 0 .171-1.283l.539-5.735a.606 8.597 0 0 0 .065-.794l.403-5.736.404-5.736a.606 8.597 0 0 0 .04-.654l.045.654.374 5.316.378 7.136a.606 8.597 0 0 0 .214 2.542l.504 3.567.373 3.521a.606 8.597 0 0 0 .145 1.003l.405 1.914.404 1.912a.606 8.597 0 0 0 .337.186l.539-1.912a.606 8.597 0 0 0 .19-1.19l.404-3.802.405-3.824a.606 8.597 0 0 0 .092-1.072l.403-5.735.539-7.65.177-2.518.282 4.01.379 7.136a.606 8.597 0 0 0 .055.933l.405 5.736a.606 8.597 0 0 0 .092 1.073l.405 3.801a.606 8.597 0 0 0 .063.535l.539 3.826a.606 8.597 0 0 0 .08.465l.403 1.912a.606 8.597 0 0 0 .385 0l.404-1.912.403-1.912a.606 8.597 0 0 0 .08-.465l.539-3.803a.606 8.597 0 0 0 .158-1.609l.402-5.735a.606 8.597 0 0 0 .059-.933l.401-7.626.29-5.504.09 1.68.4 7.624a.606 8.597 0 0 0 .06.934l.537 7.648.403 5.714a.606 8.597 0 0 0 .094 1.072l.403 3.824a.606 8.597 0 0 0 .145 1.003l.405 1.912a.606 8.597 0 0 0 .19.443h.54a.606 8.597 0 0 0 .192-.443l.403-1.912a.606 8.597 0 0 0 .143-1.003l.406-3.824a.606 8.597 0 0 0 .091-1.072l.373-5.294.505-5.364a.606 8.597 0 0 0 .156-2.449l.388-9.164.021-.349.337 6.436.405 7.626.402 7.648a.606 8.597 0 0 0 .215 2.518l.507 3.592.37 3.52a.606 8.597 0 0 0 .338 1.446h.807a.606 8.597 0 0 0 .27-.908l.54-3.826a.606 8.597 0 0 0 .157-1.609l.404-5.736.403-5.712.54-7.65a.606 8.597 0 0 0 .09-1.657l.126-3.007.048 1.095a.606 8.597 0 0 0 .091 1.657l.508 7.205.377 7.16.406 7.648a.606 8.597 0 0 0 .148 1.983l.404 3.823a.606 8.597 0 0 0 .188 1.19l.54 1.912a.606 8.597 0 0 0 .146.256h.405a.606 8.597 0 0 0 .335-1.446l.373-3.52.505-3.592a.606 8.597 0 0 0 .213-2.518l.406-7.65.403-7.647a.606 8.597 0 0 0 .035-.722l.356-8.419.356 8.419.403 9.536a.606 8.597 0 0 0 .092 1.657l.538 7.647a.606 8.597 0 0 0 .094 1.073l.403 3.825.402 3.824a.606 8.597 0 0 0 .339 1.446h.94a.606 8.597 0 0 0 .43-2.518l.404-5.738.404-5.735.538-7.627a.606 8.597 0 0 0 .092-1.655l.403-9.561a.606 8.597 0 0 0 .023-.583l.073-2.029.218 4.69.398 9.396.404 9.538a.606 8.597 0 0 0 .09 1.655l.405 5.737a.606 8.597 0 0 0 .158 1.61l.537 3.823a.606 8.597 0 0 0 .08.466l.405 1.914a.606 8.597 0 0 0 .19.442h.404a.606 8.597 0 0 0 .272-.91l.537-3.824a.606 8.597 0 0 0 .158-1.61l.406-5.737a.606 8.597 0 0 0 .055-.908l.404-7.65a.606 8.597 0 0 0 .034-.746l.398-9.374.337-7.16.36 10.238a.606 8.597 0 0 0 .068 1.515l.533 9.445.398 7.532a.606 8.597 0 0 0 .057.931l.402 5.738a.606 8.597 0 0 0 .158 1.609l.54 3.824a.606 8.597 0 0 0 .27.886h.404a.606 8.597 0 0 0 .193-.42l.403-1.912a.606 8.597 0 0 0 .236-2.075l.406-5.738.537-7.65a.606 8.597 0 0 0 .093-1.654l.404-9.539a.606 8.597 0 0 0 .02-.581l.406-11.473a.606 8.597 0 0 0 .013-.443l.002-.048.232 7.672a.606 8.597 0 0 0 .036 1.05l.404 9.536a.606 8.597 0 0 0 .048.957l.53 9.444.4 7.533a.606 8.597 0 0 0 .15 2.005l.403 3.801a.606 8.597 0 0 0 .144 1.003l.406 1.912a.606 8.597 0 0 0 .337.186l.539-1.912a.606 8.597 0 0 0 .188-1.189l.406-3.8a.606 8.597 0 0 0 .146-2.006l.406-7.65a.606 8.597 0 0 0 .034-.721l.398-9.375.529-11.287a.606 8.597 0 0 0 .053-1.398l.078-2.566.02.654a.606 8.597 0 0 0 .053 1.398l.517 11.007.389 10.985a.606 8.597 0 0 0 .02.581l.404 9.538a.606 8.597 0 0 0 .156 2.472l.541 5.713a.606 8.597 0 0 0 .17 1.283l.405 1.912a.606 8.597 0 0 0 .192.443h.402a.606 8.597 0 0 0 .337-1.446l.405-3.824a.606 8.597 0 0 0 .027-.257l.539-5.735a.606 8.597 0 0 0 .156-2.45l.404-9.56a.606 8.597 0 0 0 .022-.583l.404-11.449a.606 8.597 0 0 0 .015-.468l.318-10.539.318 10.54a.606 8.597 0 0 0 .053 1.376l.518 11.028.387 10.985a.606 8.597 0 0 0 .059 1.306l.403 7.65a.606 8.597 0 0 0 .149 1.98l.403 3.826a.606 8.597 0 0 0 .189 1.189l.54 1.912a.606 8.597 0 0 0 .34-.186l.401-1.912a.606 8.597 0 0 0 .295-2.986l.402-7.65.405-7.647a.606 8.597 0 0 0 .02-.398l.538-11.45a.606 8.597 0 0 0 .063-1.749l.403-15.274.058-2.098.156 5.899a.606 8.597 0 0 0 .01.374l.403 13.385.405 13.362a.606 8.597 0 0 0 .084 1.98l.537 9.562a.606 8.597 0 0 0 .044.7l.405 5.735a.606 8.597 0 0 0 .236 2.077l.406 1.912a.606 8.597 0 0 0 .192.443h.402a.606 8.597 0 0 0 .365-1.726l.537-5.735a.606 8.597 0 0 0 .122-1.703l.405-7.65a.606 8.597 0 0 0 .058-1.306l.401-11.473.54-15.274a.606 8.597 0 0 0 .026-.84l.146-5.572.488 13.828.396 13.13a.606 8.597 0 0 0 .015.466l.403 11.45a.606 8.597 0 0 0 .057 1.329l.406 7.625a.606 8.597 0 0 0 .12 1.725l.539 5.738a.606 8.597 0 0 0 .363 1.701h.404a.606 8.597 0 0 0 .335-1.421l.405-3.826a.606 8.597 0 0 0 .149-2.004l.404-7.626a.606 8.597 0 0 0 .019-.398l.54-11.473a.606 8.597 0 0 0 .052-1.375l.405-13.362a.606 8.597 0 0 0 .017-.675l.368-15.625.232 9.888a.606 8.597 0 0 0 .01.303l.401 15.274a.606 8.597 0 0 0 .044 1.26l.53 13.153.395 11.262a.606 8.597 0 0 0 .112 2.238l.406 5.715a.606 8.597 0 0 0 .236 2.075l.406 1.912a.606 8.597 0 0 0 .337.186l.54-1.912a.606 8.597 0 0 0 .28-2.26l.406-5.716a.606 8.597 0 0 0 .112-2.237l.396-11.265.531-13.15a.606 8.597 0 0 0 .048-1.54l.405-17.21a.606 8.597 0 0 0 .004-.231l.126-5.924.068 2.449.396 18.749a.606 8.597 0 0 0 .014.535l.405 15.297a.606 8.597 0 0 0 .025.816l.404 11.474a.606 8.597 0 0 0 .068 1.516l.54 9.56a.606 8.597 0 0 0 .136 1.774l.405 3.823a.606 8.597 0 0 0 .335 1.448h.404a.606 8.597 0 0 0 .364-1.726l.538-5.714a.606 8.597 0 0 0 .157-2.472l.403-9.536a.606 8.597 0 0 0 .038-1.05l.404-13.362a.606 8.597 0 0 0 .017-.677l.398-16.952.35-12.384.251 11.893a.606 8.597 0 0 0 .02.723l.534 19.028.402 15.18a.606 8.597 0 0 0 .048 1.423l.405 9.539a.606 8.597 0 0 0 .09 1.655l.538 7.65a.606 8.597 0 0 0 .43 2.517h.402a.606 8.597 0 0 0 .193-.443l.405-1.912a.606 8.597 0 0 0 .326-3.732l.405-9.561a.606 8.597 0 0 0 .006-.162l.54-13.363a.606 8.597 0 0 0 .048-1.538l.404-17.21a.606 8.597 0 0 0 .006-.232l.403-19.1a.606 8.597 0 0 0 .006-.209l.04-2.074.134 7.624a.606 8.597 0 0 0 .007.372l.404 19.123a.606 8.597 0 0 0 .006.232l.403 17.186a.606 8.597 0 0 0 .05 1.563l.539 13.362a.606 8.597 0 0 0 .005.162l.406 9.562a.606 8.597 0 0 0 .183 2.728l.403 3.826a.606 8.597 0 0 0 .482 1.166l.54-1.89a.606 8.597 0 0 0 .338-3.194l.403-7.65a.606 8.597 0 0 0 .057-1.306l.406-11.448a.606 8.597 0 0 0 .032-1.142l.398-16.954.533-18.866a.606 8.597 0 0 0 .025-1.095l.148-8.49.436 18.54.402 18.983a.606 8.597 0 0 0 .006.256l.403 17.188a.606 8.597 0 0 0 .07 2.051l.54 11.45a.606 8.597 0 0 0 .076 1.307l.403 5.735a.606 8.597 0 0 0 .43 2.518h.402a.606 8.597 0 0 0 .337-1.446l.406-3.824a.606 8.597 0 0 0 .167-2.377l.54-11.45a.606 8.597 0 0 0 .062-1.75l.404-15.299a.606 8.597 0 0 0 .017-.746l.403-21.01a.606 8.597 0 0 0 .005-.186l.363-20.614.208 12.825a.606 8.597 0 0 0 .017.791l.537 22.924.405 17.186a.606 8.597 0 0 0 .008.303l.403 15.276a.606 8.597 0 0 0 .048 1.398l.403 9.561a.606 8.597 0 0 0 .374 3.918l.538 1.912a.606 8.597 0 0 0 .34-.186l.403-1.912a.606 8.597 0 0 0 .327-3.732l.406-9.561a.606 8.597 0 0 0 .047-1.398l.402-15.182.535-19.029a.606 8.597 0 0 0 .028-1.258l.404-24.835.116-7.09.048 3.149a.606 8.597 0 0 0 .002.12l.403 24.835a.606 8.597 0 0 0 .004.163l.404 22.924a.606 8.597 0 0 0 .034 1.398l.539 17.188a.606 8.597 0 0 0 .011.372l.404 11.45a.606 8.597 0 0 0 .114 2.238l.404 5.738a.606 8.597 0 0 0 .428 2.518h.404a.606 8.597 0 0 0 .428-2.518l.54-7.65a.606 8.597 0 0 0 .128-2.705l.404-13.363a.606 8.597 0 0 0 .023-.908l.405-19.098a.606 8.597 0 0 0 .01-.56l.4-24.603.35-17.35.36 19.192.401 24.673a.606 8.597 0 0 0 .006.349l.404 21.011a.606 8.597 0 0 0 .019.746l.402 15.275a.606 8.597 0 0 0 .14 3.077l.537 7.627a.606 8.597 0 0 0 .238 2.075l.404 1.911a.606 8.597 0 0 0 .527-1.002l.406-3.824a.606 8.597 0 0 0 .205-3.289l.404-11.473a.606 8.597 0 0 0 .02-.654l.54-19.098a.606 8.597 0 0 0 .024-1.118l.406-22.923a.606 8.597 0 0 0 .004-.398l.402-28.38.038-2.028.124 9.304a.606 8.597 0 0 0 .001.212l.404 26.747a.606 8.597 0 0 0 .013.723l.539 24.813.404 19.075a.606 8.597 0 0 0 .036 1.375l.405 11.45a.606 8.597 0 0 0 .113 2.24l.405 5.735a.606 8.597 0 0 0 .575 2.263l.539-1.912a.606 8.597 0 0 0 .396-4.5l.403-11.45a.606 8.597 0 0 0 .025-.841l.404-15.274a.606 8.597 0 0 0 .007-.303l.539-22.924a.606 8.597 0 0 0 .019-1.026l.405-28.659a.606 8.597 0 0 0 .002-.12l.19-14.458.368 27.844a.606 8.597 0 0 0 .004.211l.404 26.748a.606 8.597 0 0 0 .004.278l.405 22.923a.606 8.597 0 0 0 .046 1.772l.539 15.274a.606 8.597 0 0 0 .02.583l.406 9.561a.606 8.597 0 0 0 .52 4.175h.404a.606 8.597 0 0 0 .428-2.52l.537-7.65a.606 8.597 0 0 0 .14-3.054l.402-15.297a.606 8.597 0 0 0 .02-.746L23.7 509.5a.606 8.597 0 0 0 .01-.583l.401-28.448.417-23.623.145 11.753a.606 8.597 0 0 0 .007.49l.537 32.461.406 24.81a.606 8.597 0 0 0 .006.327l.403 21.011a.606 8.597 0 0 0 .042 1.586l.406 11.474a.606 8.597 0 0 0 .27 3.823l.539 3.824a.606 8.597 0 0 0 .607-.535l.404-3.825a.606 8.597 0 0 0 .22-3.753l.404-13.385a.606 8.597 0 0 0 .012-.443l.54-21.012a.606 8.597 0 0 0 .023-1.143l.404-26.747a.606 8.597 0 0 0 .004-.303l.403-32.46a.606 8.597 0 0 0 .002-.096l.11-9.375.04 3.569a.606 8.597 0 0 0 .002.071l.402 34.397a.606 8.597 0 0 0 .004.164l.404 30.573a.606 8.597 0 0 0 .02 1.141l.54 22.923a.606 8.597 0 0 0 .005.304l.406 15.274a.606 8.597 0 0 0 .047 1.4l.404 9.561a.606 8.597 0 0 0 .666 3.918l.539-1.912a.606 8.597 0 0 0 .373-3.918l.406-9.561a.606 8.597 0 0 0 .06-1.96l.402-19.098a.606 8.597 0 0 0 .014-.654l.401-26.607.535-30.432a.606 8.597 0 0 0 .012-.816l.405-38.198.404-38.197a.606 8.596 0 0 0-.01-1.281.606 8.596 0 0 0 .01-1.283l-.404-38.198-.405-38.22a.606 8.597 0 0 0-.012-.792l-.535-30.433-.401-26.607a.606 8.597 0 0 0-.014-.652l-.401-19.123a.606 8.597 0 0 0-.061-1.935l-.406-9.561a.606 8.597 0 0 0-.373-3.918zm-466.31 19.635.086 2.006.38 14.41.523 22.225.396 29.896.403 34.256.402 36.261a.606 8.597 0 0 0 .006.351l.19 13.594-.19 13.596a.606 8.597 0 0 0-.006.349l-.402 36.263-.403 34.255-.396 29.896-.522 22.223-.38 14.411-.087 1.983-.154-3.663-.375-17.722-.4-26.42a.606 8.597 0 0 0-.004-.28l-.53-30.152-.4-37.802-.393-36.938.393-36.937.4-37.801.53-30.151a.606 8.597 0 0 0 .004-.28l.4-26.422.375-17.746zm466.394 0 .154 3.663.375 17.746.4 26.42a.606 8.597 0 0 0 .004.279l.531 30.153.4 37.8.392 36.938-.392 36.938-.4 37.8-.53 30.152a.606 8.597 0 0 0-.005.28l-.4 26.422-.375 17.722-.154 3.661-.086-1.983-.38-14.41-.522-22.224-.396-29.894-.404-34.257-.401-36.261a.606 8.597 0 0 0-.006-.351l-.19-13.594.19-13.596a.606 8.597 0 0 0 .006-.349l.401-36.263.404-34.254.396-29.896.522-22.224.38-14.411zM-427 261.331l.02.14.288 8.138.385 20.031.401 24.67a.606 8.597 0 0 0 .002.025l.533 32.25.4 32.157.305 27.237-.305 27.238-.4 32.157-.533 32.251a.606 8.597 0 0 0-.002.024l-.401 24.672-.385 20.032-.287 8.139-.021.14-.31-10.285-.519-20.218-.394-26.001-.4-32.297-.403-34.35a.606 8.597 0 0 0-.004-.257l-.3-21.244.3-21.244a.606 8.597 0 0 0 .004-.256l.404-34.35.4-32.296.393-26.002.518-20.24zm454.49 0 .31 10.26.519 20.241.394 26.002.4 32.297.403 34.349a.606 8.597 0 0 0 .005.256l.3 21.244-.3 21.244a.606 8.597 0 0 0-.005.256l-.403 34.351-.4 32.297-.394 26.001-.52 20.218-.308 10.282-.021-.138-.288-8.139-.384-20.031-.402-24.673a.606 8.597 0 0 0-.002-.024l-.533-32.25-.4-32.16-.304-27.236.305-27.236.4-32.159.532-32.249a.606 8.597 0 0 0 .002-.024l.402-24.672.384-20.03.288-8.139zm-448.633 9.747.143 3.404.499 14.156.386 21.85.4 26.515.402 30.454a.606 8.597 0 0 0 .006.28l.535 34.186.051 4.058-.051 4.058-.535 34.185a.606 8.597 0 0 0-.006.281l-.402 30.454-.4 26.515-.386 21.85-.499 14.154-.143 3.406-.148-2.123-.349-13.174-.392-20.335-.4-28.356a.606 8.597 0 0 0-.005-.398l-.534-30.245-.4-34-.07-6.272.07-6.273.4-34 .534-30.245a.606 8.597 0 0 0 .006-.396l.4-28.356.391-20.335.349-13.176zm442.776 0 .149 2.123.348 13.174.392 20.335.4 28.356a.606 8.597 0 0 0 .006.396l.533 30.245.4 34 .07 6.273-.07 6.272-.4 34-.533 30.245a.606 8.597 0 0 0-.006.398l-.4 28.356-.392 20.335-.348 13.176-.149 2.12-.143-3.403-.5-14.156-.385-21.85-.4-26.513-.401-30.456a.606 8.597 0 0 0-.006-.28l-.537-34.187-.05-4.057.05-4.058.537-34.186a.606 8.597 0 0 0 .006-.28l.401-30.454.4-26.514.385-21.851.5-14.155zm-436.863 7.415.056.772.337 9.536.388 18.4a.606 8.597 0 0 0 0 .072l.531 24.461.398 26.281.402 30.408.219 17.56-.22 17.56-.401 30.408-.398 26.282-.531 24.461a.606 8.597 0 0 0 0 .072l-.388 18.398-.337 9.538-.056.769-.238-6.762-.388-14.714-.522-22.247-.397-28.1-.402-30.455-.314-25.21.314-25.207.402-30.479.397-28.076.522-22.246.388-14.715zm430.95 0 .238 6.764.388 14.714.522 22.247.396 28.076.404 30.479.314 25.207-.314 25.21-.404 30.454-.396 28.099-.522 22.247-.388 14.715-.238 6.762-.055-.769-.337-9.538-.389-18.4a.606 8.597 0 0 0 0-.071l-.53-24.462-.399-26.281-.401-30.408-.22-17.56.22-17.56.401-30.408.398-26.281.531-24.462a.606 8.597 0 0 0 0-.071l.389-18.398.337-9.539zm-425.06 9.025.336 4.78.348 13.177.394 20.45.402 24.672a.606 8.597 0 0 0 .006.28l.533 28.401.377 26.702-.377 26.7-.533 28.403a.606 8.597 0 0 0-.006.28l-.402 24.67-.394 20.452-.348 13.176-.337 4.78-.018-.187-.321-9.093-.514-18.237-.39-22.153-.4-28.45a.606 8.597 0 0 0-.01-.535l-.533-28.287-.143-11.52.143-11.519.533-28.287a.606 8.597 0 0 0 .01-.537l.4-28.448.39-22.155.514-18.235.321-9.095zm419.17 0 .019.186.322 9.095.514 18.235.39 22.155.4 28.448a.606 8.597 0 0 0 .01.537l.53 28.288.145 11.519-.145 11.52-.53 28.286a.606 8.597 0 0 0-.01.535l-.4 28.45-.39 22.153-.514 18.237-.322 9.093-.017.188-.337-4.781-.349-13.176-.394-20.452-.401-24.67a.606 8.597 0 0 0-.006-.28l-.533-28.402-.377-26.701.377-26.702.533-28.402a.606 8.597 0 0 0 .006-.28l.401-24.672.394-20.45.349-13.175zm-413.264 7.392.108 1.54.355 10.05.514 16.323.388 22.13.402 24.695.401 26.679a.606 8.597 0 0 0 .01.395l.174 9.258-.174 9.236a.606 8.597 0 0 0-.01.418l-.401 26.678-.402 24.695-.388 22.13-.514 16.323-.355 10.05-.108 1.54-.228-3.266-.345-11.402-.388-18.377-.398-24.553a.606 8.597 0 0 0-.01-.443l-.531-26.398-.377-26.63.377-26.631.53-26.398a.606 8.597 0 0 0 .01-.443l.399-24.556.388-18.375.344-11.404zm407.357 0 .228 3.264.346 11.404.389 18.375.398 24.556a.606 8.597 0 0 0 .01.443l.53 26.398.375 26.63-.375 26.63-.53 26.399a.606 8.597 0 0 0-.01.443l-.398 24.555-.389 18.375-.346 11.404-.228 3.264-.109-1.538-.352-10.052-.514-16.323-.389-22.13-.401-24.695-.402-26.678a.606 8.597 0 0 0-.01-.418l-.173-9.236.174-9.256a.606 8.597 0 0 0 .01-.397l.4-26.678.402-24.693.389-22.132.514-16.323.352-10.05Zm-401.473 7.299.124.443.246 5.83.38 14.41.4 17.025.53 22.55.397 24.367.29 19.146-.29 19.146-.397 24.368-.53 22.551-.4 17.023-.38 14.411-.246 5.83-.124.443-.024-.12-.261-6.157-.385-14.551a.606 8.597 0 0 0-.004-.187l-.521-18.468-.394-24.207-.404-24.833a.606 8.597 0 0 0-.004-.28l-.284-14.97.284-14.972a.606 8.597 0 0 0 .004-.28l.404-24.835.394-24.204.521-18.492a.606 8.597 0 0 0 .004-.165l.385-14.55.26-6.155zm395.59 0 .025.12.259 6.157.386 14.55a.606 8.597 0 0 0 .004.163l.522 18.492.392 24.207.406 24.835a.606 8.597 0 0 0 .004.278l.283 14.971-.283 14.971a.606 8.597 0 0 0-.004.28l-.406 24.835-.392 24.206-.522 18.47a.606 8.597 0 0 0-.004.186l-.386 14.55-.26 6.156-.024.12-.124-.443-.245-5.83-.383-14.41-.398-17.024-.53-22.55-.397-24.369-.29-19.144.29-19.145.398-24.37.53-22.55.397-17.022.383-14.411.245-5.83zm-389.66 7.463.174 2.447.46 9.795.376 15.974.4 18.981a.606 8.597 0 0 0 .007.257l.531 22.598.396 22.526.061 3.73-.06 3.732-.397 22.526-.53 22.596a.606 8.597 0 0 0-.009.257l-.4 18.982-.374 15.974-.461 9.794-.173 2.449-.132-1.26-.434-9.21-.367-13.992-.396-20.523-.404-22.852a.606 8.597 0 0 0-.008-.443l-.531-24.461-.055-3.57.055-3.566.531-24.461a.606 8.597 0 0 0 .008-.443l.404-22.855.396-20.52.367-13.992.434-9.212zm383.73 0 .131 1.258.434 9.213.368 13.99.396 20.521.401 22.853a.606 8.597 0 0 0 .01.443l.531 24.461.053 3.57-.053 3.568-.531 24.461a.606 8.597 0 0 0-.01.443l-.401 22.853-.396 20.52-.368 13.994-.434 9.21-.131 1.26-.173-2.449-.461-9.795-.375-15.974-.4-18.981a.606 8.597 0 0 0-.007-.257l-.532-22.595-.396-22.527-.06-3.732.06-3.731.396-22.527.532-22.596a.606 8.597 0 0 0 .007-.256l.4-18.983.375-15.974.46-9.793zm-377.813 6.225.067.654.331 7.813.507 12.545.38 16.277.398 18.772.402 22.737a.606 8.597 0 0 0 .013.63l.25 10.656-.25 10.656a.606 8.597 0 0 0-.013.63l-.402 22.737-.398 18.772-.38 16.277-.507 12.545-.33 7.812-.068.655-.068-.257-.244-4.572-.36-10.236-.39-16.603a.606 8.597 0 0 0-.013-.49l-.522-18.538-.394-22.293-.278-17.094.278-17.094.394-22.292.522-18.563a.606 8.597 0 0 0 .013-.466l.39-16.603.36-10.238.244-4.57zm371.896 0 .069.257.243 4.571.36 10.237.39 16.603a.606 8.597 0 0 0 .014.468l.521 18.563.394 22.292.278 17.092-.278 17.094-.394 22.293-.521 18.54a.606 8.597 0 0 0-.014.489l-.39 16.603-.36 10.238-.243 4.57-.069.257-.067-.652-.33-7.813-.507-12.545-.381-16.277-.398-18.774-.402-22.735a.606 8.597 0 0 0-.013-.63l-.25-10.656.25-10.658a.606 8.597 0 0 0 .013-.63l.402-22.735.398-18.772.38-16.277.507-12.547.331-7.81zm-366.028 6.973h.055l.306 4.385.337 7.974.387 14.55a.606 8.597 0 0 0 .004.166l.53 18.748.393 18.632.36 18.655-.36 18.657-.394 18.632-.53 18.748a.606 8.597 0 0 0-.003.163l-.387 14.55-.337 7.976-.306 4.361h-.055l-.097-.443-.288-6.761-.504-12.548-.383-16.253-.4-18.887-.4-20.895a.606 8.597 0 0 0-.01-.468l-.161-6.833.161-6.832a.606 8.597 0 0 0 .01-.466l.4-20.894.4-18.89.383-16.253.504-12.545.288-6.762zm360.105 0h.056l.097.468.285 6.761.507 12.547.382 16.252.4 18.89.4 20.894a.606 8.597 0 0 0 .01.468l.161 6.832-.162 6.833a.606 8.597 0 0 0-.009.466l-.4 20.894-.4 18.889-.382 16.254-.507 12.545-.285 6.762-.097.443h-.056l-.308-4.361-.337-7.975-.384-14.552a.606 8.597 0 0 0-.005-.162l-.529-18.749-.396-18.632-.358-18.654.358-18.657.396-18.632.53-18.749a.606 8.597 0 0 0 .004-.162l.384-14.551.337-7.976zm-354.211 5.737h.019l.171 1.632.442 7.812.361 10.237.385 14.599.398 18.818a.606 8.597 0 0 0 .017.723l.53 18.75.102 4.803-.103 4.804-.529 18.748a.606 8.597 0 0 0-.017.721l-.398 18.82-.385 14.597-.361 10.239-.442 7.812-.171 1.632h-.02l-.281-3.009-.322-7.601-.377-12.522-.398-16.837a.606 8.597 0 0 0-.011-.49l-.525-18.634-.353-18.28.353-18.283.525-18.632a.606 8.597 0 0 0 .011-.491l.398-16.86.377-12.5.322-7.6zm348.354 0h.019l.281 3.007.322 7.603.377 12.5.396 16.86a.606 8.597 0 0 0 .013.49l.526 18.63.352 18.284-.352 18.283-.526 18.631a.606 8.597 0 0 0-.013.49l-.396 16.837-.377 12.522-.322 7.602-.281 3.008h-.02l-.173-1.632-.44-7.812-.361-10.236-.385-14.598-.4-18.82a.606 8.597 0 0 0-.015-.723l-.529-18.749-.103-4.803.103-4.804.53-18.749a.606 8.597 0 0 0 .015-.721l.4-18.82.384-14.597.362-10.238.44-7.81zm-342.386 6.087.1.465.235 3.312.36 10.213a.606 8.597 0 0 0 .015.42l.516 12.78.383 14.482.396 16.929.27 12.687-.27 12.685-.396 16.93-.383 14.481-.516 12.78a.606 8.597 0 0 0-.015.42l-.36 10.213-.234 3.289-.101.49-.206-.723-.215-3.055-.36-10.213a.606 8.597 0 0 0-.015-.42l-.508-12.64-.383-16.277-.401-18.957-.19-9.002.19-9.001.401-18.96.383-16.277.508-12.637a.606 8.597 0 0 0 .015-.422l.36-10.213.215-3.055zm336.436 0 .204.72.217 3.056.36 10.215a.606 8.597 0 0 0 .015.42l.509 12.64.382 16.276.402 18.958.19 9.002-.19 9.001-.402 18.958-.382 16.277-.509 12.639a.606 8.597 0 0 0-.015.42l-.36 10.216-.217 3.054-.204.722-.1-.49-.235-3.289-.36-10.213a.606 8.597 0 0 0-.015-.42l-.516-12.78-.382-14.48-.396-16.93-.27-12.686.27-12.685.396-16.93.382-14.483.516-12.777a.606 8.597 0 0 0 .016-.422l.36-10.213.234-3.312zm-330.573 5.386h.02l.306 3.264.32 6.04.371 10.54.398 13.153a.606 8.597 0 0 0 .015.443l.52 14.737.388 16.626.027 1.098-.027 1.097-.388 16.626-.52 14.737a.606 8.597 0 0 0-.015.443l-.398 13.153-.371 10.54-.32 6.04-.307 3.264h-.019l-.165-1.561-.33-6.273-.5-10.61-.371-12.313-.396-16.837a.606 8.597 0 0 0-.021-.792l-.524-16.697-.017-.816.017-.84.524-16.675a.606 8.597 0 0 0 .02-.791l.397-16.837.37-12.337.501-10.585.33-6.274zm324.69 0h.02l.166 1.563.329 6.273.5 10.585.372 12.337.396 16.836a.606 8.597 0 0 0 .02.794l.524 16.672.017.84-.017.818-.523 16.697a.606 8.597 0 0 0-.021.791l-.396 16.837-.371 12.313-.501 10.61-.33 6.273-.165 1.563h-.02l-.306-3.266-.32-6.038-.37-10.542-.399-13.151a.606 8.597 0 0 0-.015-.443l-.52-14.739-.39-16.626-.026-1.097.026-1.095.39-16.628.52-14.737a.606 8.597 0 0 0 .015-.443l.398-13.153.372-10.54.32-6.04zm-318.881 5.713h.104l.176.84.28 3.964.464 8.256.371 12.313.4 13.174.4 15.111a.606 8.597 0 0 0 .024.817l.2 5.712-.2 5.715a.606 8.597 0 0 0-.024.816l-.4 15.11-.4 13.177-.371 12.313-.465 8.255-.28 3.964-.175.817h-.104l-.307-3.266-.32-6.039-.378-10.773-.526-14.879-.388-14.714-.246-10.493.246-10.494.388-14.716.526-14.877.378-10.773.32-6.04zm312.988 0h.103l.308 3.289.32 6.038.379 10.774.525 14.879.389 14.714.245 10.493-.245 10.494-.389 14.716-.525 14.877-.379 10.773-.32 6.04-.308 3.264h-.103l-.175-.816-.28-3.964-.465-8.256-.373-12.313-.398-13.174-.4-15.111a.606 8.597 0 0 0-.024-.817l-.202-5.712.202-5.715a.606 8.597 0 0 0 .025-.817l.4-15.11.397-13.175.373-12.313.465-8.255.28-3.964zm-307.106 4.175.265.955.23 2.169.31 5.854.38 10.774a.606 8.597 0 0 0 .037.908l.509 10.797.377 12.476.32 12.079-.32 12.081-.377 12.451-.509 10.822a.606 8.597 0 0 0-.038.908l-.378 10.774-.31 5.852-.231 2.17-.265.956-.057-.281-.291-5.502-.392-7.44-.491-10.448-.381-14.34-.402-15.297a.606 8.597 0 0 0-.027-.816l-.066-1.89.066-1.888a.606 8.597 0 0 0 .027-.817l.402-15.297.38-14.342.492-10.447.392-7.462.291-5.48zm301.328 0 .057.278.292 5.48.392 7.462.49 10.447.382 14.343.401 15.297a.606 8.597 0 0 0 .027.816l.065 1.89-.065 1.888a.606 8.597 0 0 0-.027.817l-.401 15.297-.381 14.342-.491 10.447-.392 7.439-.292 5.503-.057.28-.266-.956-.229-2.168-.31-5.853-.379-10.773a.606 8.597 0 0 0-.038-.911l-.508-10.82-.377-12.453-.32-12.08.32-12.078.377-12.477.508-10.796a.606 8.597 0 0 0 .038-.91l.379-10.774.31-5.853.229-2.169zm-295.379 5.386h.122l.22 1.026.365 3.893.33 7.812.395 11.17a.606 8.597 0 0 0 .036.932l.507 10.798.384 12.64.07 2.354-.07 2.355-.384 12.64-.507 10.796a.606 8.597 0 0 0-.036.932l-.396 11.17-.33 7.813-.365 3.895-.219 1.025h-.122l-.236-2.24-.43-4.592-.331-7.813-.387-10.936-.396-13.153a.606 8.597 0 0 0-.015-.466l-.401-11.427.401-11.45a.606 8.597 0 0 0 .015-.444l.396-13.15.387-10.937.331-7.813.43-4.594zm289.306 0h.124l.236 2.238.43 4.595.331 7.812.387 10.937.396 13.151a.606 8.597 0 0 0 .015.443l.402 11.45-.402 11.428a.606 8.597 0 0 0-.015.465l-.396 13.153-.387 10.937-.33 7.812-.431 4.593-.236 2.24h-.124l-.217-1.026-.365-3.895-.33-7.812-.396-11.17a.606 8.597 0 0 0-.036-.933l-.506-10.796-.385-12.64-.07-2.354.07-2.355.385-12.64.506-10.797a.606 8.597 0 0 0 .036-.933l.396-11.17.33-7.813.365-3.893zm-283.318 4.175.16.746.25 2.378.342 6.459a.606 8.597 0 0 0 .011.211l.512 9.096.364 8.556.388 12.85a.606 8.597 0 0 0 .052 1.375l.226 4.78-.226 4.781a.606 8.597 0 0 0-.052 1.377l-.388 12.849-.364 8.558-.512 9.093a.606 8.597 0 0 0-.011.212l-.343 6.458-.25 2.38-.16.746-.264-.932-.232-2.192-.322-6.11-.388-9.166a.606 8.597 0 0 0-.014-.349l-.508-10.796-.382-12.662-.13-4.246.13-4.266.382-12.64.508-10.796a.606 8.597 0 0 0 .014-.351l.388-9.164.322-6.11.232-2.192zm277.455 0 .264.933.23 2.191.324 6.11.389 9.164a.606 8.597 0 0 0 .013.35l.508 10.797.383 12.64.13 4.266-.13 4.244-.383 12.662-.508 10.799a.606 8.597 0 0 0-.013.348l-.389 9.165-.323 6.11-.23 2.191-.265.933-.16-.747-.25-2.377-.342-6.461a.606 8.597 0 0 0-.012-.209l-.514-9.095-.361-8.559-.389-12.848a.606 8.597 0 0 0-.051-1.375l-.227-4.78.227-4.781a.606 8.597 0 0 0 .051-1.377l.389-12.848.361-8.559.514-9.095a.606 8.597 0 0 0 .012-.21l.342-6.46.25-2.378zm-271.677 3.473h.163l.324 2.286.305 4.315.377 7.158a.606 8.597 0 0 0 .01.211l.5 8.837.375 10.635.335 9.537-.335 9.538-.375 10.633-.5 8.839a.606 8.597 0 0 0-.01.209l-.377 7.16-.305 4.313-.324 2.286h-.163l-.174-.817-.302-4.313-.488-6.88-.352-8.37-.386-10.939-.353-11.66.353-11.659.386-10.936.352-8.372.488-6.902.302-4.292zm265.735 0h.164l.173.817.303 4.291.487 6.902.352 8.372.387 10.937.352 11.659-.352 11.661-.387 10.937-.352 8.37-.487 6.88-.303 4.313-.173.817h-.164l-.324-2.284-.304-4.315-.377-7.158a.606 8.597 0 0 0-.012-.211l-.498-8.839-.375-10.633-.337-9.539.337-9.536.375-10.633.498-8.839a.606 8.597 0 0 0 .012-.211l.377-7.159.304-4.314zm-259.899 3.826h.162l.27 1.258.412 2.94.282 3.986.367 8.653.402 9.536a.606 8.597 0 0 0 .017.351l.531 11.285.048 1.143-.048 1.143-.531 11.287a.606 8.597 0 0 0-.017.349l-.402 9.538-.367 8.65-.282 3.99-.411 2.937-.27 1.258h-.163l-.323-2.284-.303-4.315-.362-6.786-.386-9.188a.606 8.597 0 0 0-.015-.326l-.518-11.03-.185-5.224.185-5.223.518-11.029a.606 8.597 0 0 0 .015-.326l.386-9.189.362-6.785.303-4.314zm254.064 0h.162l.324 2.284.302 4.314.36 6.787.388 9.187a.606 8.597 0 0 0 .016.326l.517 11.03.185 5.224-.185 5.224-.517 11.03a.606 8.597 0 0 0-.016.326l-.388 9.188-.36 6.786-.302 4.313-.324 2.286h-.162l-.27-1.26-.411-2.938-.282-3.987-.368-8.652-.401-9.537a.606 8.597 0 0 0-.017-.35l-.532-11.288-.047-1.141.047-1.143.532-11.287a.606 8.597 0 0 0 .017-.349l.401-9.538.368-8.65.282-3.99.41-2.937zm-248.3 3.8h.509l.25 2.378.354 3.358.443 6.298.366 8.627.405 9.561.217 5.13-.217 5.13-.405 9.538-.366 8.653-.443 6.295-.354 3.358-.25 2.355h-.51l-.225-3.195-.405-5.736-.485-6.903-.355-8.347-.392-11.148.392-11.147.355-8.348.485-6.903.405-5.736zm242.19 0h.509l.225 3.218.405 5.736.486 6.903.354 8.348.392 11.147-.392 11.148-.354 8.347-.486 6.903-.405 5.736-.225 3.195h-.51l-.25-2.355-.353-3.358-.446-6.295-.363-8.653-.406-9.538-.217-5.13.217-5.13.406-9.56.363-8.628.446-6.298.354-3.358zm-236.063 1.912h.145l.365 1.306.23 2.17.342 6.458.405 7.65a.606 8.597 0 0 0 .055.932l.486 6.88.339 8.045-.34 8.044-.485 6.88a.606 8.597 0 0 0-.055.933l-.405 7.65-.341 6.458-.23 2.17-.366 1.305h-.145l-.251-2.38a.606 8.597 0 0 0-.067-.535l-.411-2.914-.316-6.018-.386-7.299-.389-9.164a.606 8.597 0 0 0-.046-.955l-.236-4.175.236-4.175a.606 8.597 0 0 0 .046-.957l.389-9.165.386-7.298.316-6.016.411-2.915a.606 8.597 0 0 0 .067-.537zm230.3 0h.144l.251 2.378a.606 8.597 0 0 0 .067.537l.41 2.915.317 6.016.387 7.3.388 9.165a.606 8.597 0 0 0 .046.955l.234 4.175-.234 4.174a.606 8.597 0 0 0-.046.957l-.388 9.164-.387 7.299-.318 6.015-.409 2.915a.606 8.597 0 0 0-.067.538l-.25 2.377h-.146l-.365-1.305-.23-2.17-.341-6.458-.406-7.65a.606 8.597 0 0 0-.055-.932l-.487-6.879-.337-8.046.337-8.044.487-6.879a.606 8.597 0 0 0 .055-.934l.406-7.647.34-6.46.231-2.17zm-224.55 3.824h.481l.251 2.38a.606 8.597 0 0 0 .065.535l.411 2.915.318 6.017.404 7.648.405 7.626a.606 8.597 0 0 0 .012.232l.127 2.263-.127 2.26a.606 8.597 0 0 0-.012.212l-.405 7.65-.404 7.647-.318 6.017-.41 2.915a.606 8.597 0 0 0-.066.535l-.25 2.38h-.482l-.324-2.286-.333-4.758-.404-5.735-.487-6.88-.366-8.651-.055-1.306.055-1.306.366-8.652.487-6.879.404-5.738.333-4.755zm218.463 0h.481l.325 2.286.333 4.758.403 5.735.486 6.88.367 8.651.055 1.306-.055 1.306-.367 8.653-.486 6.878-.403 5.736-.333 4.757-.324 2.286h-.482l-.251-2.38a.606 8.597 0 0 0-.065-.534l-.411-2.915-.318-6.018-.404-7.647-.405-7.65a.606 8.597 0 0 0-.011-.209l-.128-2.263.128-2.26a.606 8.597 0 0 0 .011-.235l.405-7.624.404-7.65.318-6.015.411-2.915a.606 8.597 0 0 0 .065-.537zm-212.448 1.914h.341l.234 1.117.286 2.706.362 5.13.508 7.205.379 7.16.23 4.384-.23 4.383-.38 7.159-.507 7.207-.362 5.13-.286 2.705-.234 1.118h-.34l-.235-1.118-.287-2.706-.362-5.13a.606 8.597 0 0 0-.065-.793l-.443-4.71-.343-8.116a.606 8.597 0 0 0-.034-.746l-.232-4.384.232-4.383a.606 8.597 0 0 0 .034-.746l.343-8.116.443-4.712a.606 8.597 0 0 0 .065-.791l.362-5.13.287-2.706zm206.571 0h.343l.234 1.117.288 2.706.361 5.13a.606 8.597 0 0 0 .063.792l.446 4.711.342 8.114a.606 8.597 0 0 0 .035.747l.232 4.384-.232 4.384a.606 8.597 0 0 0-.035.746l-.342 8.115-.446 4.71a.606 8.597 0 0 0-.063.794l-.361 5.13-.288 2.705-.234 1.118h-.343l-.232-1.118-.285-2.705-.362-5.13-.508-7.207-.381-7.158-.23-4.384.23-4.384.38-7.16.509-7.205.362-5.131.285-2.704zm-200.475 2.378.171.816.467 3.312.324 3.03.329 4.712.379 7.158a.606 8.597 0 0 0 .055.909l.383 5.386-.383 5.389a.606 8.597 0 0 0-.055.909l-.38 7.158-.328 4.687-.324 3.055-.467 3.311-.17.817-.214-1.003-.364-1.726-.41-2.914-.304-4.313-.378-7.16-.404-7.625a.606 8.597 0 0 0-.034-.583.606 8.597 0 0 0 .034-.583l.404-7.624.378-7.16.303-4.313.411-2.915.364-1.726zm194.722 0 .214 1.003.363 1.726.41 2.914.304 4.313.379 7.16.403 7.625a.606 8.597 0 0 0 .035.583.606 8.597 0 0 0-.035.582l-.403 7.625-.379 7.16-.305 4.313-.409 2.915-.363 1.726-.214 1.003-.171-.817-.466-3.31-.324-3.056-.33-4.687-.378-7.159a.606 8.597 0 0 0-.055-.908l-.383-5.389.383-5.386a.606 8.597 0 0 0 .055-.91l.379-7.158.329-4.711.324-3.03.466-3.312zm-188.955 1.795.236 1.12.327 1.538.337 3.194a.606 8.597 0 0 0 .065.538l.409 2.914.32 6.016a.606 8.597 0 0 0 .055.911l.406 5.736.11 1.563-.11 1.563-.406 5.735a.606 8.597 0 0 0-.055.911l-.32 6.016-.41 2.915a.606 8.597 0 0 0-.064.535l-.337 3.194-.327 1.54-.236 1.118-.265-.931-.318-3.01-.354-3.332-.362-5.132-.539-7.647-.243-3.475.243-3.475.54-7.65.36-5.13.355-3.334.318-3.009zm183.189 0 .264.932.318 3.009.354 3.335.362 5.13.539 7.649.244 3.475-.244 3.474-.539 7.648-.362 5.132-.354 3.334-.318 3.007-.264.934-.236-1.12-.328-1.538-.337-3.195a.606 8.597 0 0 0-.064-.537l-.412-2.915-.317-6.015a.606 8.597 0 0 0-.056-.911l-.405-5.736-.11-1.563.11-1.563.405-5.736a.606 8.597 0 0 0 .056-.91l.317-6.016.412-2.915a.606 8.597 0 0 0 .064-.537l.337-3.195.328-1.538zm-177.412 3.475h.661l.251 2.377.39 3.686.492 5.224.342 4.873.208 3.894-.208 3.895-.342 4.873-.491 5.223-.39 3.686-.252 2.378h-.661l-.31-1.469-.312-1.469-.425-4.524-.373-5.294-.373-5.316-.107-1.983.107-2.006.373-5.292.373-5.295.425-4.524.312-1.469zm170.973 0h.661l.31 1.468.313 1.47.422 4.523.375 5.295.373 5.292.105 2.006-.105 1.983-.373 5.316-.375 5.294-.422 4.524-.313 1.469-.31 1.469h-.661l-.25-2.378-.393-3.686-.49-5.223-.342-4.873-.208-3.895.208-3.894.343-4.873.489-5.224.392-3.686zm-164.877.468.213 1.002a.606 8.597 0 0 0 .044.187l.438 1.538.316 3.008.354 3.335.362 5.13a.606 8.597 0 0 0 .065.794l.43 4.593-.43 4.594a.606 8.597 0 0 0-.065.792l-.362 5.132-.354 3.332-.316 3.01-.438 1.54a.606 8.597 0 0 0-.044.185l-.213 1.003-.211-1.003a.606 8.597 0 0 0-.046-.186l-.436-1.54-.318-3.009-.316-2.983-.342-6.484a.606 8.597 0 0 0-.122-1.7l-.252-2.684.252-2.68a.606 8.597 0 0 0 .122-1.703l.342-6.484.316-2.984.318-3.009.436-1.538a.606 8.597 0 0 0 .046-.186zm159.44 0 .214 1.002a.606 8.597 0 0 0 .043.187l.438 1.538.318 3.008.316 2.986.343 6.482a.606 8.597 0 0 0 .122 1.703l.251 2.68-.251 2.683a.606 8.597 0 0 0-.122 1.701l-.343 6.484-.316 2.986-.318 3.006-.438 1.54a.606 8.597 0 0 0-.043.187l-.214 1.003-.211-1.003a.606 8.597 0 0 0-.044-.187l-.438-1.54-.318-3.006-.352-3.335-.361-5.132a.606 8.597 0 0 0-.065-.791l-.43-4.595.43-4.593a.606 8.597 0 0 0 .065-.794l.361-5.13.352-3.334.318-3.01.438-1.537a.606 8.597 0 0 0 .044-.186zm-153.685 1.445h.341l.236 1.095.335 3.195a.606 8.597 0 0 0 .065.537l.504 3.567.324 3.055.362 5.132.108 1.56-.108 1.563-.362 5.13-.324 3.055-.504 3.569a.606 8.597 0 0 0-.065.535l-.335 3.194-.236 1.098h-.34l-.313-1.47-.326-1.54-.323-3.054-.49-5.224-.374-5.292-.11-1.563.11-1.563.375-5.293.489-5.223.323-3.055.326-1.54zm147.591 0h.341l.312 1.47.326 1.537.324 3.055.489 5.224.375 5.294.11 1.561-.11 1.563-.375 5.295-.49 5.222-.323 3.054-.326 1.54-.312 1.47h-.34l-.237-1.096-.335-3.194a.606 8.597 0 0 0-.064-.538l-.507-3.567-.318-3.008-.365-5.178-.11-1.563.11-1.56.365-5.178.318-3.01.507-3.566a.606 8.597 0 0 0 .064-.537l.335-3.195zm-141.8 1.912h.661l.251 2.378a.606 8.597 0 0 0 .145 1.003l.268 1.26.301 4.29a.606 8.597 0 0 0 .158 1.609l.451 3.194.176 2.495-.176 2.497-.45 3.195a.606 8.597 0 0 0-.159 1.609l-.3 4.29-.27 1.26a.606 8.597 0 0 0-.144 1.002l-.251 2.378h-.661l-.27-1.258-.466-3.311-.322-3.055-.362-5.132-.245-3.473.245-3.475.362-5.131.322-3.055.466-3.31zm135.69 0h.66l.27 1.258.467 3.312.322 3.055.361 5.13.246 3.474-.246 3.475-.361 5.132-.322 3.055-.467 3.31-.27 1.26h-.661l-.25-2.379a.606 8.597 0 0 0-.146-1.003l-.268-1.26-.303-4.291a.606 8.597 0 0 0-.156-1.609l-.45-3.195-.176-2.495.175-2.495.451-3.194a.606 8.597 0 0 0 .156-1.61l.303-4.29.268-1.259a.606 8.597 0 0 0 .145-1.003zm-129.923 1.912h.634l.31 1.47a.606 8.597 0 0 0 .044.163l.438 1.563.266 2.517.362 5.132a.606 8.597 0 0 0 .093 1.072l.253 2.403-.253 2.4a.606 8.597 0 0 0-.093 1.073l-.362 5.132-.266 2.518-.438 1.54a.606 8.597 0 0 0-.044.186l-.31 1.469h-.634l-.366-1.283-.316-2.984-.39-3.709-.491-5.224-.078-1.117.078-1.143.491-5.2.39-3.707.316-2.986zm6.082 0h.343l.31 1.47.328 1.539.335 3.17a.606 8.597 0 0 0 .066.537l.505 3.592.323 3.055.067.955-.067.957-.323 3.055-.505 3.592a.606 8.597 0 0 0-.066.535l-.335 3.172-.328 1.54-.31 1.468h-.343l-.31-1.468-.328-1.54-.321-3.055-.526-5.573a.606 8.597 0 0 0-.026-.28l-.254-2.4.254-2.403a.606 8.597 0 0 0 .026-.28l.526-5.572.321-3.055.328-1.54zm112.31 0h.342l.31 1.47.328 1.539.322 3.055.525 5.572a.606 8.597 0 0 0 .027.28l.255 2.4-.255 2.404a.606 8.597 0 0 0-.027.278l-.525 5.574-.322 3.055-.328 1.538-.31 1.469h-.343l-.31-1.469-.327-1.538-.337-3.172a.606 8.597 0 0 0-.065-.537l-.504-3.59-.324-3.055-.067-.957.067-.956.324-3.055.504-3.592a.606 8.597 0 0 0 .065-.535l.337-3.172.327-1.54zm5.79 0h.635l.365 1.283.316 2.984.39 3.709.492 5.198.078 1.143-.078 1.12-.492 5.224-.39 3.707-.316 2.985-.365 1.281h-.634l-.31-1.469a.606 8.597 0 0 0-.046-.186l-.436-1.538-.269-2.52-.36-5.13a.606 8.597 0 0 0-.093-1.072l-.255-2.402.255-2.401a.606 8.597 0 0 0 .093-1.074l.36-5.13.269-2.517.436-1.563a.606 8.597 0 0 0 .045-.164zm-112.309 1.89h.636l.444 1.585.304 1.446.337 3.17.389 3.685.238 2.541-.238 2.543-.389 3.684-.337 3.172-.304 1.446-.444 1.563h-.636l-.27-1.26-.5-3.544a.606 8.597 0 0 0-.079-.468l-.27-1.283-.3-4.29a.606 8.597 0 0 0-.155-1.563.606 8.597 0 0 0 .154-1.563l.301-4.29.27-1.282a.606 8.597 0 0 0 .078-.466l.501-3.546zm6.17 0h.233l.31 1.468.364 1.726.464 3.312.373 3.52.255 2.401-.255 2.403-.373 3.521-.464 3.312-.364 1.703-.31 1.469h-.233l-.443-1.563-.305-1.446-.337-3.172-.403-3.824a.606 8.597 0 0 0-.065-.537l-.26-1.866.26-1.864a.606 8.597 0 0 0 .065-.537l.403-3.824.337-3.172.305-1.446zm88.498 0h.232l.444 1.585.304 1.446.337 3.17.404 3.825a.606 8.597 0 0 0 .064.535l.261 1.866-.26 1.866a.606 8.597 0 0 0-.065.537l-.404 3.824-.337 3.172-.304 1.446-.444 1.56h-.232l-.31-1.468-.364-1.701-.465-3.312-.373-3.52-.253-2.404.253-2.4.373-3.523.465-3.31.363-1.726zm5.766 0h.636l.27 1.282.5 3.544a.606 8.597 0 0 0 .08.465l.268 1.283.302 4.292a.606 8.597 0 0 0 .153 1.563.606 8.597 0 0 0-.153 1.56l-.302 4.292-.269 1.283a.606 8.597 0 0 0-.08.466l-.499 3.544-.27 1.26h-.635l-.444-1.563-.305-1.446-.337-3.17-.388-3.686-.24-2.54.24-2.543.388-3.684.337-3.172.305-1.446zm-88.585 1.911h.747l.312 1.469.361 1.726.469 3.312.322 3.054.066.956-.066.957-.322 3.055-.469 3.312-.361 1.726-.312 1.469h-.747l-.31-1.47-.364-1.725-.464-3.312-.373-3.52-.052-.49.052-.491.373-3.521.464-3.312.364-1.724zm5.767 0h.637l.31 1.469a.606 8.597 0 0 0 .045.186l.437 1.563.316 2.986a.606 8.597 0 0 0 .145 1.003l.31 1.469.172 1.84-.172 1.843-.31 1.47a.606 8.597 0 0 0-.145 1.002l-.316 2.984-.437 1.563a.606 8.597 0 0 0-.044.186l-.31 1.47h-.638l-.362-1.307-.318-2.984-.403-3.823-.254-2.403.254-2.403.403-3.824.318-2.983zm6.084 0h.343l.31 1.469.404 1.912a.606 8.597 0 0 0 .045.186l.436 1.563.318 2.986.253 2.4-.253 2.403-.318 2.984-.436 1.563a.606 8.597 0 0 0-.045.186l-.404 1.912-.31 1.47h-.343l-.31-1.47-.328-1.56-.335-3.173a.606 8.597 0 0 0-.066-.537l-.505-3.59-.019-.188.02-.186.504-3.59a.606 8.597 0 0 0 .066-.539l.335-3.17.328-1.562zm53.328 0h.342l.31 1.469.328 1.563.335 3.172a.606 8.597 0 0 0 .065.534l.506 3.592.02.186-.02.187-.506 3.591a.606 8.597 0 0 0-.065.535l-.335 3.172-.327 1.563-.31 1.469h-.343l-.31-1.469-.404-1.912a.606 8.597 0 0 0-.046-.186l-.436-1.563-.318-2.986-.253-2.4.253-2.404.318-2.983.436-1.563a.606 8.597 0 0 0 .046-.186l.403-1.912zm5.789 0h.636l.363 1.306.318 2.984.404 3.825.253 2.401-.253 2.403-.404 3.824-.318 2.986-.363 1.306h-.636l-.31-1.47a.606 8.597 0 0 0-.044-.187l-.438-1.56-.316-2.987a.606 8.597 0 0 0-.145-1.002l-.31-1.47-.171-1.842.17-1.841.311-1.47a.606 8.597 0 0 0 .145-1.002l.316-2.986.438-1.563a.606 8.597 0 0 0 .044-.186zm5.658 0h.746l.31 1.469.364 1.726.465 3.312.373 3.52.053.49-.053.49-.373 3.521-.465 3.312-.364 1.724-.31 1.471h-.746l-.312-1.47-.362-1.725-.468-3.312-.322-3.054-.067-.958.067-.956.322-3.055.468-3.31.362-1.726zm-58.652.349.365 1.306a.606 8.597 0 0 0 .147.256h.222l.252 2.38a.606 8.597 0 0 0 .142 1.003l.364 1.724.466 3.312.02.186-.02.186-.466 3.312-.364 1.726a.606 8.597 0 0 0-.142 1.003l-.252 2.38h-.222a.606 8.597 0 0 0-.147.255l-.365 1.283-.238-1.095-.404-1.914a.606 8.597 0 0 0-.044-.186l-.516-1.84-.306-1.447-.286-2.706-.068-.957.068-.955.286-2.706.306-1.446.516-1.843a.606 8.597 0 0 0 .044-.186l.404-1.912zm41.425 0 .238 1.12.403 1.911a.606 8.597 0 0 0 .044.187l.516 1.843.307 1.445.285 2.704.069.957-.069.957-.285 2.704-.307 1.446-.516 1.843a.606 8.597 0 0 0-.044.186l-.403 1.912-.238 1.097-.366-1.283a.606 8.597 0 0 0-.148-.256h-.22l-.252-2.378a.606 8.597 0 0 0-.143-1.003l-.364-1.726-.466-3.312-.02-.186.02-.186.466-3.312.364-1.726a.606 8.597 0 0 0 .143-1.003l.251-2.378h.22a.606 8.597 0 0 0 .15-.256zm-35.99 1.563h1.062l.365 1.305.317 2.986a.606 8.597 0 0 0 .144 1.003l.328 1.538.186 1.772-.186 1.749-.328 1.563a.606 8.597 0 0 0-.144 1.003l-.317 2.985-.365 1.306h-1.063l-.363-1.306-.316-2.985a.606 8.597 0 0 0-.145-1.003l-.363-1.726-.225-1.586.225-1.584.363-1.726a.606 8.597 0 0 0 .145-1.003l.316-2.986zm6.084 0h.746l.31 1.468.364 1.726.465 3.312.222 2.098-.222 2.1-.465 3.312-.363 1.723-.31 1.471h-.747l-.31-1.47-.406-1.912a.606 8.597 0 0 0-.044-.187l-.437-1.563-.315-2.983-.053-.49.053-.49.315-2.984.437-1.563a.606 8.597 0 0 0 .044-.187l.406-1.912zm5.79 0h1.065l.252 2.377a.606 8.597 0 0 0 .144 1.003l.328 1.563.337 3.172a.606 8.597 0 0 0 .059.49.606 8.597 0 0 0-.06.49l-.336 3.17-.328 1.563a.606 8.597 0 0 0-.144 1.003l-.252 2.38h-1.066l-.31-1.471a.606 8.597 0 0 0-.044-.186l-.438-1.561-.316-2.986-.253-2.403.253-2.4.316-2.987.438-1.56a.606 8.597 0 0 0 .044-.187zm5.741 0h1.066l.31 1.468a.606 8.597 0 0 0 .044.187l.436 1.563.318 2.985.255 2.401-.255 2.403-.318 2.984-.436 1.563a.606 8.597 0 0 0-.044.186l-.31 1.469h-1.066l-.251-2.378a.606 8.597 0 0 0-.145-1.003l-.327-1.563-.337-3.172a.606 8.597 0 0 0-.06-.489.606 8.597 0 0 0 .06-.49l.337-3.171.327-1.563a.606 8.597 0 0 0 .145-1.003zm6.11 0h.746l.31 1.468.405 1.912a.606 8.597 0 0 0 .044.188l.438 1.56.314 2.987.051.49-.051.489-.314 2.985-.438 1.563a.606 8.597 0 0 0-.044.186l-.405 1.912-.31 1.47h-.747l-.31-1.47-.364-1.726-.464-3.311-.223-2.098.223-2.1.464-3.31.364-1.726zm5.766 0h1.064l.363 1.305.316 2.986a.606 8.597 0 0 0 .145 1.003l.364 1.726.224 1.584-.224 1.586-.364 1.726a.606 8.597 0 0 0-.145 1.003l-.316 2.984-.363 1.305h-1.064l-.364-1.305-.316-2.984a.606 8.597 0 0 0-.145-1.003l-.327-1.563-.187-1.749.187-1.772.327-1.54a.606 8.597 0 0 0 .145-1.003l.316-2.984z"
          style={{
            display: "none",
            fill: "#cb0505",
            strokeWidth: 2.85485,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
      <g
        id="mirror-container"
        style={{ strokeWidth: 0.900589, strokeDasharray: "none" }}
        transform="matrix(1.00982 0 0 1 -4.765 0)"
      >
        <g
          id="rod-with-threaded-spacer"
          style={{ strokeWidth: 16.6195, strokeDasharray: "none" }}
          transform="matrix(-.0378 0 0 -.07767 326.624 194.713)"
        >
          <path
            id="inside-threaded-spacer"
            fill="url(#linearGradient113)"
            strokeWidth={5.718}
            d="M-745.025 63.298c21.28.062 33.857-17.244 32.862-35.858C-713.202 7.987-723.79-9.919-743.4-9.998c-12.436-.05-16.553 73.251-1.626 73.298zm.65-73.504c.523-.257 1.52-.47 2.481-.674l.508.13z"
            style={{
              fill: "url(#linearGradient216)",
              strokeWidth: 16.6195,
              strokeDasharray: "none",
              paintOrder: "fill markers stroke",
            }}
          />
          <rect
            id="tuning-rod"
            width={11316.445}
            height={40.82}
            x={-4253.396}
            y={5.865}
            fill="url(#linearGradient7-0)"
            strokeWidth={1.968}
            rx={139.809}
            ry={12.706}
            style={{
              display: "inline",
              fill: "url(#linearGradient227)",
              stroke: "none",
              strokeWidth: 16.1032,
              strokeDasharray: "none",
              paintOrder: "fill markers stroke",
            }}
            transform="rotate(.018)skewX(-.075)"
          />
          <rect
            id="tuning-rod-pattern"
            width={11316.446}
            height={40.82}
            x={-4253.396}
            y={5.865}
            fill="url(#linearGradient7-0)"
            strokeWidth={1.968}
            rx={139.809}
            ry={12.706}
            style={{
              display: "inline",
              fill: "url(#pattern227)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 16.1032,
              strokeDasharray: "none",
              paintOrder: "fill markers stroke",
            }}
            transform="rotate(.018)skewX(-.075)"
          />
          <g
            id="attachment-and-threaded-spacer"
            style={{ strokeWidth: 16.6195, strokeDasharray: "none" }}
          >
            <path
              id="spacer-to-mirror-attachement"
              fill="url(#linearGradient12)"
              d="M235.363-129.78h132.675v64.36H235.363z"
              style={{
                display: "inline",
                fill: "url(#linearGradient229)",
                strokeWidth: 16.6195,
                strokeDasharray: "none",
              }}
              transform="rotate(180 0 0)"
            />
            <path
              id="threaded-spacer"
              fill="url(#linearGradient99)"
              strokeWidth={5.116}
              d="M-13.756 66.13h-717.75c-40.595 0 17.793-9.309 16.987-39.446-.88-32.902-57.583-38.956-16.987-38.956h717.75c74.047 0 86.937-2.165 87.55 39.2.64 43.135-13.503 39.202-87.55 39.202"
              style={{
                fill: "url(#linearGradient217)",
                strokeWidth: 16.6195,
                strokeDasharray: "none",
                paintOrder: "fill markers stroke",
              }}
            />
          </g>
        </g>
        <path
          id="movable-mirror"
          fill="url(#linearGradient31)"
          strokeWidth={1.048}
          d="M324.162 40.139h29.381s-5.892 1.796-11.454 21.74c-6.718 24.091-5.072 73.352-.478 100.592 2.974 17.635 11.932 22.193 11.932 22.193h-29.38z"
          style={{
            fill: "url(#linearGradient18)",
            strokeWidth: 0.900589,
            strokeDasharray: "none",
            paintOrder: "fill markers stroke",
          }}
        />
        <path
          id="nozzle"
          fill="url(#radialGradient180)"
          d="M334.36 103.194v3.189h-10.14l.03 4.448-.03 4.449h10.14v3.189h3.273v-7.205h-3.802l-.016-.433.016-.433h3.802v-7.204z"
          style={{
            fill: "url(#radialGradient180)",
            strokeWidth: 0.918724,
            strokeDasharray: "none",
            paintOrder: "fill markers stroke",
          }}
        />
        <g
          id="rod-with-smooth-spacer"
          style={{ strokeWidth: 0.900589, strokeDasharray: "none" }}
        >
          <path
            id="inside-smooth-spacer"
            fill="url(#linearGradient113)"
            strokeWidth={0.31}
            d="M353.94 29.367c-.804-.005-1.28 1.34-1.242 2.785.04 1.511.44 2.902 1.181 2.908.47.004.626-5.69.062-5.693zm-.024 5.71a.3.3 0 0 1-.094.052l-.019-.01z"
            style={{
              fill: "#cecece",
              fillOpacity: 1,
              strokeWidth: 0.900589,
              strokeDasharray: "none",
              paintOrder: "fill markers stroke",
            }}
          />
          <path
            id="smooth-rod"
            d="M159.267 32.045h325.58"
            style={{
              fill: "none",
              stroke: "url(#linearGradient213)",
              strokeWidth: 3.88597,
              strokeDasharray: "none",
              paintOrder: "markers fill stroke",
            }}
          />
          <g
            id="attachment-and-smooth-spacer"
            style={{ strokeWidth: 16.6195, strokeDasharray: "none" }}
            transform="matrix(-.0378 0 0 .07767 325.707 30.124)"
          >
            <path
              id="spacer-to-mirror-attachement-2"
              fill="url(#linearGradient12)"
              d="M235.363-129.78h132.675v64.36H235.363z"
              style={{
                display: "inline",
                fill: "url(#linearGradient232)",
                strokeWidth: 16.6195,
                strokeDasharray: "none",
              }}
              transform="rotate(180 0 0)"
            />
            <path
              id="smooth-spacer"
              fill="url(#linearGradient99)"
              strokeWidth={5.116}
              d="M-13.756 66.13h-717.75c-40.595 0 17.793-9.309 16.987-39.446-.88-32.902-57.583-38.956-16.987-38.956h717.75c74.047 0 86.937-2.165 87.55 39.2.64 43.135-13.503 39.202-87.55 39.202"
              style={{
                fill: "url(#linearGradient233)",
                strokeWidth: 16.6195,
                strokeDasharray: "none",
                paintOrder: "fill markers stroke",
              }}
            />
          </g>
        </g>
        <path
          id="path4"
          fill="url(#linearGradient31)"
          strokeWidth={1.048}
          d="M484.449 40.139h-29.381s5.892 1.796 11.454 21.74c6.718 24.091 5.072 73.352.478 100.592-2.974 17.635-11.932 22.193-11.932 22.193h29.38z"
          style={{
            fill: "url(#linearGradient20)",
            strokeWidth: 0.900589,
            strokeDasharray: "none",
            paintOrder: "fill markers stroke",
          }}
        />
      </g>
      <g
        id="motor-and-rod"
        style={{ display: "inline" }}
        transform="rotate(180 100.056 109.95)scale(.4928)"
      >
        <g id="motor" transform="matrix(-.26648 0 0 -.21404 88.256 140.65)">
          <g id="g308" strokeLinecap="square">
            <path
              id="rect294"
              fill="gray"
              strokeWidth={1.341}
              d="M-718.39-25.744h110.17v53.797h-110.17z"
              style={{ paintOrder: "markers stroke fill" }}
            />
            <path
              id="rect295"
              fill="url(#linearGradient12628-1)"
              strokeWidth={1.554}
              d="M-30.028-764.03h57.439v10.129h-57.439z"
              style={{
                fill: "url(#linearGradient12628-1)",
                paintOrder: "markers stroke fill",
              }}
              transform="rotate(-90)"
            />
            <g
              id="g307"
              strokeWidth={2.916}
              transform="matrix(.63872 0 0 .89231 -164.67 -26.761)"
            >
              <path
                id="rect296"
                fill="url(#linearGradient36)"
                d="M824.85-94.632h97.741v128.67H824.85z"
                style={{
                  fill: "url(#linearGradient36)",
                  paintOrder: "fill markers stroke",
                }}
                transform="scale(-1)"
              />
              <g id="g306" fill="#1a1a1a">
                <path
                  id="rect297"
                  d="M824.83-82.59h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect298"
                  d="M824.83-71.042h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect299"
                  d="M824.83-59.495h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect300"
                  d="M824.83-47.947h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect301"
                  d="M824.83-37.224h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect302"
                  d="M824.83-25.677h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect303"
                  d="M824.83-14.129h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect304"
                  d="M824.83-2.582h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect305"
                  d="M824.83 9.131h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
                <path
                  id="rect306"
                  d="M824.83 20.679h97.754v1.776H824.83z"
                  style={{ paintOrder: "fill markers stroke" }}
                  transform="scale(-1)"
                />
              </g>
            </g>
          </g>
          <g id="g311" transform="matrix(1.9717 0 0 .74829 601.06 3.395)">
            <path
              id="path308"
              fill="url(#linearGradient76316-0-8-4)"
              strokeWidth={0.218}
              d="M-623.08-51a.386 10.33.155 0 0 .32 10.217v.064l.04-.005 2.039-.286v-.064a.386 10.33.155 0 0 .04.058.386 10.33.155 0 0 .411-10.384.386 10.33.155 0 0-.36-10.276.386 10.33.155 0 0-.04.07v-.064l-2.038.286-.04.005v.065A.386 10.33.155 0 0-623.08-51m.36 10.434 2.098-.452z"
              style={{ fill: "url(#linearGradient76316-0-8-4)" }}
            />
            <path
              id="path2"
              fill="url(#linearGradient76316-0-8-4)"
              strokeWidth={0.218}
              d="M-623.08 46.047a.386 10.33.155 0 0 .32 10.218v.063l.04-.005 2.039-.286v-.064a.386 10.33.155 0 0 .04.058.386 10.33.155 0 0 .411-10.384.386 10.33.155 0 0-.36-10.276.386 10.33.155 0 0-.04.07v-.064l-2.038.286-.04.005v.065a.386 10.33.155 0 0-.372 10.314m.36 10.434 2.098-.452z"
              style={{ display: "inline", fill: "url(#linearGradient16)" }}
            />
            <path
              id="rect310"
              fill="url(#linearGradient48)"
              strokeWidth={1.818}
              d="M526.78 68.118h36.353v34.032H526.78z"
              style={{
                fill: "url(#linearGradient48)",
                paintOrder: "fill markers stroke",
              }}
              transform="scale(-1)"
            />
            <path
              id="path310"
              fill="url(#linearGradient49)"
              stroke="#000"
              strokeWidth={1.044}
              d="m-546.72-93.077 3.057.051 1.51 6.423-1.546 6.372-3.058-.05-1.51-6.424z"
              style={{
                fill: "url(#linearGradient49)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="rect309"
              fill="#1a1a1a"
              strokeWidth={1.583}
              d="M618.489-56.058h2.067V63.255h-2.067z"
              style={{ display: "inline", paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <rect
              id="rect311"
              width={292.752}
              height={130.532}
              x={-618.55}
              y={-68.806}
              fill="url(#linearGradient52)"
              strokeLinecap="square"
              strokeWidth={1.381}
              ry={3.644}
              style={{
                fill: "url(#linearGradient52)",
                paintOrder: "markers stroke fill",
              }}
            />
          </g>
        </g>
        <g id="g326" transform="matrix(-.19382 0 0 -.08557 109.65 57.778)">
          <rect
            id="rect238-7"
            width={21.511}
            height={132.255}
            x={117.283}
            y={-44.533}
            fill="url(#linearGradient183)"
            rx={1.537}
            ry={24.363}
            style={{
              fill: "url(#linearGradient6)",
              strokeWidth: 15.7572,
              paintOrder: "fill markers stroke",
            }}
          />
          <rect
            id="rect238-7-4"
            width={21.511}
            height={132.255}
            x={3526.873}
            y={-34.487}
            fill="url(#linearGradient183)"
            rx={1.537}
            ry={24.363}
            style={{
              display: "inline",
              fill: "url(#linearGradient9)",
              strokeWidth: 15.7572,
              paintOrder: "fill markers stroke",
            }}
          />
          <path
            id="rect313"
            fill="url(#linearGradient53)"
            strokeWidth={2.482}
            d="M-74.415-936.96h93.618v15.858h-93.618z"
            style={{
              fill: "url(#linearGradient53)",
              paintOrder: "markers stroke fill",
            }}
            transform="rotate(-90 0 0)"
          />
          <path
            id="rect314"
            fill="url(#linearGradient146)"
            strokeWidth={2.482}
            d="M-74.415-826.46h93.618v15.858h-93.618z"
            style={{
              fill: "url(#linearGradient146)",
              paintOrder: "markers stroke fill",
            }}
            transform="rotate(-90)"
          />
          <path
            id="rect315"
            fill="url(#linearGradient36-0)"
            strokeWidth={2.916}
            d="M824.85-94.632h97.741v128.67H824.85z"
            style={{
              fill: "url(#linearGradient36-0)",
              paintOrder: "fill markers stroke",
            }}
            transform="scale(-1)"
          />
          <g id="g325" fill="#1a1a1a" strokeWidth={2.916}>
            <path
              id="rect316"
              d="M824.83-82.59h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect317"
              d="M824.83-71.042h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect318"
              d="M824.83-59.495h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect319"
              d="M824.83-47.947h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect320"
              d="M824.83-37.224h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect321"
              d="M824.83-25.677h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect322"
              d="M824.83-14.129h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect323"
              d="M824.83-2.582h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect324"
              d="M824.83 9.131h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
            <path
              id="rect325"
              d="M824.83 20.679h97.754v1.776H824.83z"
              style={{ paintOrder: "fill markers stroke" }}
              transform="scale(-1)"
            />
          </g>
          <rect
            id="belt"
            width={79.197}
            height={1305.8}
            x={833.75}
            y={-145.41}
            fill="url(#linearGradient55)"
            strokeWidth={4.88}
            rx={32.171}
            ry={23.403}
            style={{
              fill: "url(#linearGradient55)",
              paintOrder: "fill markers stroke",
            }}
            transform="scale(-1)"
          />
        </g>
        <path
          id="rect327"
          fill="url(#linearGradient147)"
          strokeWidth={0.664}
          d="M255.91 39.981h7.139v123.87h-7.139z"
          style={{
            fill: "url(#linearGradient147)",
            paintOrder: "fill markers stroke",
          }}
        />
        <path
          id="rect328"
          fill="url(#linearGradient82)"
          strokeWidth={0.664}
          d="M92.427 39.981h7.139v123.87h-7.139z"
          style={{
            fill: "url(#linearGradient82)",
            paintOrder: "fill markers stroke",
          }}
        />
      </g>
      <g id="microwave-chamber">
        <g id="g353">
          <g
            id="diffusion-pump-hose"
            transform="matrix(-.24301 0 0 .24301 887.226 -328.93)"
          >
            <path
              id="rect244"
              fill="green"
              d="M2359.2-2072.2h45v261.32h-45z"
              style={{ paintOrder: "markers stroke fill" }}
              transform="rotate(90)"
            />
            <path
              id="path244"
              fill="url(#linearGradient18507)"
              d="M1810.9 2359.2v2.658l.469.469-.469.469v2.828l1.883-1.883 2.12 2.121-2.12 2.121-1.883-1.883v2.828l.469.47-.469.468v2.83l1.883-1.883 2.12 2.121-2.12 2.121-1.883-1.882V2376l.469.468-.469.47v2.827l1.883-1.882 2.12 2.12-2.12 2.122-1.883-1.883v2.828l.469.469-.469.469v2.828l1.883-1.883 2.12 2.121-2.12 2.123-1.883-1.885v2.83l.469.47-.469.468v2.828l1.883-1.883 2.12 2.121-2.12 2.121-1.883-1.882v2.828l.469.468-.469.47v2.827l1.883-1.882 2.12 2.12-2.12 2.122-1.883-1.883v2.744h3.85l1.568-1.568 1.568 1.568h3.934l1.57-1.568 1.569 1.568h3.933l1.569-1.568 1.568 1.568h3.934l1.568-1.568 1.568 1.568h3.936l1.568-1.568 1.569 1.568h3.933l1.568-1.568 1.569 1.568h3.933l1.57-1.568 1.569 1.568h3.934l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.935l1.569-1.568 1.568 1.568h3.934l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.57 1.568h3.934l1.569-1.568 1.568 1.568h3.933l1.569-1.568 1.568 1.568h3.936l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.933l1.569-1.568 1.57 1.568h3.934l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.933l1.57-1.568 1.569 1.568h3.934l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.935l1.568-1.568 1.569 1.568h3.933l1.569-1.568 1.568 1.568h3.934l1.57-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.933l1.569-1.568 1.568 1.568h3.936l1.568-1.568 1.568 1.568h3.934l1.568-1.568 1.569 1.568h3.933l1.569-1.568 1.57 1.568h3.933l1.569-1.568 1.568 1.568h3.934l1.568-1.568 1.568 1.568h3.934l1.57-1.568 1.569 1.568h3.933l1.569-1.568 1.568 1.568h3.934l1.568-1.568 1.568 1.568h3.936l1.568-1.568 1.569 1.568h3.933l1.569-1.568 1.34 1.34v-5.508l-1.34 1.34-2.122-2.122 2.122-2.12 1.34 1.34v-5.509l-1.34 1.34-2.122-2.12 2.122-2.124 1.34 1.342v-5.51l-1.34 1.34-2.122-2.121 2.122-2.121 1.34 1.34v-5.508l-1.34 1.34-2.122-2.121 2.122-2.122 1.34 1.34v-5.51l-1.34 1.342-2.122-2.123 2.122-2.12 1.34 1.339v-5.508l-1.34 1.34-2.122-2.121 2.122-2.121 1.34 1.34v-2.346h-3.163l-1.713 1.713-1.712-1.713h-3.645l-1.713 1.713-1.715-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.645l-1.712 1.713-1.713-1.713h-3.645l-1.715 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.647l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.644l-1.715 1.713-1.713-1.713h-3.645l-1.713 1.713-1.712-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.646l-1.713 1.713-1.713-1.713h-3.645l-1.712 1.713-1.713-1.713h-3.645l-1.713 1.713-1.715-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.645l-1.715 1.713-1.712-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.647l-1.712 1.713-1.713-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.644l-1.715 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.646l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.645l-1.713 1.713-1.714-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.646l-1.713 1.713-1.713-1.713h-3.645l-1.713 1.713-1.713-1.713h-3.644l-1.713 1.713-1.715-1.713h-3.644l-1.713 1.713-1.713-1.713h-3.645l-1.713 1.713-1.712-1.713h-3.645l-1.715 1.713-1.713-1.713h-3.644l-1.713 1.713-1.713-1.713zm5.418 1.006 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.123 2.12-2.123 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.071 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.122-2.121zm-243.95 3.535 2.123 2.121-2.123 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.071 0 2.123 2.121-2.123 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.071 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.123 2.121-2.123 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm-251.02 3.535 2.122 2.121-2.121 2.123-2.122-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.123-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.122 2.123-2.12-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.124-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.122-2.123zm7.07 0 2.124 2.121-2.123 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.122 2.123-2.12-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.123 2.121-2.123 2.123-2.12-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.124-2.123zm7.07 0 2.122 2.121-2.122 2.123-2.12-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.123-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.123 2.121-2.123 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.121 2.123-2.123-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm-243.95 3.537 2.123 2.121-2.123 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.123 2.121-2.123 2.121-2.121-2.12zm7.072 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm-251.02 3.535 2.121 2.121-2.12 2.122-2.122-2.122zm7.072 0 2.122 2.121-2.122 2.122-2.123-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.121-2.122zm7.071 0 2.121 2.121-2.121 2.122-2.121-2.122zm7.072 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.121-2.122zm7.073 0 2.121 2.121-2.121 2.122-2.123-2.122zm7.07 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.122-2.122zm7.073 0 2.12 2.121-2.12 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.123 2.121-2.123 2.122-2.12-2.122zm7.073 0 2.12 2.121-2.12 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.121 2.122-2.121-2.122zm7.072 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.121-2.122zm7.07 0 2.124 2.121-2.123 2.122-2.121-2.122zm7.073 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.122 2.122-2.12-2.122zm7.073 0 2.12 2.121-2.12 2.122-2.123-2.122zm7.07 0 2.121 2.121-2.121 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.073 0 2.12 2.121-2.12 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.121 2.122-2.121-2.122zm7.072 0 2.121 2.121-2.12 2.122-2.124-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.121 2.122-2.121-2.122zm7.073 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.07 0 2.122 2.121-2.122 2.122-2.12-2.122zm7.07 0 2.124 2.121-2.123 2.122-2.121-2.122zm7.073 0 2.121 2.121-2.121 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.073 0 2.12 2.121-2.12 2.122-2.123-2.122zm7.07 0 2.12 2.121-2.12 2.122-2.121-2.122zm7.07 0 2.121 2.121-2.12 2.122-2.122-2.122zm7.072 0 2.122 2.121-2.122 2.122-2.12-2.122zm-243.95 3.536 2.123 2.12-2.123 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.123 2.12-2.123 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.071 0 2.123 2.12-2.123 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.122 2.12-2.122 2.122-2.123-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm-251.02 3.535 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.071 0 2.123 2.12-2.123 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.123 2.12-2.123 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.073 0 2.121 2.12-2.121 2.122-2.121-2.121zm-243.95 3.535 2.123 2.121-2.123 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.123-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.122-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.124-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.122-2.123zm7.07 0 2.124 2.121-2.123 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.122 2.123-2.12-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.123 2.121-2.123 2.123-2.12-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.072 0 2.121 2.121-2.12 2.123-2.124-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.122-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.124 2.121-2.123 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.121 2.123-2.121-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm7.073 0 2.12 2.121-2.12 2.123-2.122-2.123zm7.07 0 2.12 2.121-2.12 2.123-2.121-2.123zm7.07 0 2.123 2.121-2.123 2.123-2.121-2.123zm7.072 0 2.122 2.121-2.122 2.123-2.12-2.123zm7.07 0 2.122 2.121-2.121 2.123-2.121-2.123zm7.073 0 2.121 2.121-2.121 2.123-2.123-2.123zm7.07 0 2.121 2.121-2.12 2.123-2.122-2.123zm-251.02 3.535 2.121 2.123-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.123-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.123-2.12 2.121-2.121-2.12zm7.072 0 2.121 2.123-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.123-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.123-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.123-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.123-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.123-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.071 0 2.123 2.123-2.123 2.121-2.121-2.12zm7.072 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.123-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.123-2.122 2.121-2.123-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.071 0 2.121 2.123-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.07 0 2.124 2.123-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.123-2.121 2.121-2.121-2.12zm7.07 0 2.122 2.123-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.121-2.12zm-243.95 3.537 2.123 2.121-2.123 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.121-2.122 2.121-2.123-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.071 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.124 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.123 2.121-2.123 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm-251.02 3.535 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.123 2.121-2.123 2.121-2.12-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.121-2.122 2.121-2.12-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.071 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm-243.95 3.535 2.123 2.122-2.123 2.12-2.12-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.12 2.122-2.12 2.12-2.121-2.12zm7.072 0 2.121 2.122-2.121 2.12-2.123-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.121-2.12zm7.073 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.123-2.12zm7.07 0 2.12 2.122-2.12 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.072 0 2.122 2.122-2.122 2.12-2.12-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.121-2.12zm7.071 0 2.123 2.122-2.123 2.12-2.121-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.121-2.12zm7.073 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.124 2.122-2.123 2.12-2.122-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.124-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.121-2.12zm7.071 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.122-2.12zm7.07 0 2.124 2.122-2.123 2.12-2.121-2.12zm7.073 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.122 2.122-2.122 2.12-2.12-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.123 2.122-2.123 2.12-2.12-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.124-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.122-2.12z"
              style={{
                fill: "url(#linearGradient18507)",
                paintOrder: "markers stroke fill",
              }}
            />
            <rect
              id="rect245"
              width={45}
              height={55}
              x={2071.8}
              y={2381.9}
              fill="green"
              ry={0}
              style={{ paintOrder: "markers stroke fill" }}
            />
            <path
              id="path245"
              fill="url(#linearGradient18523)"
              d="m2072.6 2381.9 1.38 1.38-2.12 2.122-.076-.076v2.98l.076-.076 2.12 2.121-2.12 2.122-.076-.076v2.98l.076-.076 2.12 2.123-2.12 2.121-.076-.076v2.98l.076-.075 2.12 2.12-2.12 2.122-.076-.076v2.98l.076-.076 2.12 2.121-2.12 2.121-.076-.076v2.983l.076-.076 2.12 2.121-2.12 2.121-.076-.076v2.98l.076-.075 2.12 2.12-2.12 2.122-.076-.076v2.98l.076-.076 2.12 2.121-2.12 2.124-.076-.076v2.076h2.076l-.586-.586 2.123-2.121 2.121 2.12-.586.587h4l-.586-.586 2.121-2.121 2.121 2.12-.585.587h4l-.586-.586 2.12-2.121 2.122 2.12-.586.587h4.002l-.586-.586 2.121-2.121 2.121 2.12-.586.587h4l-.586-.586 2.121-2.121 2.121 2.12-.586.587h4l-.586-.586 2.122-2.121 2.123 2.12-.586.587h4l-.586-.586 1.082-1.082v-4.908l-1.082-1.082 1.082-1.083v-4.906l-1.082-1.082 1.082-1.082v-4.906l-1.082-1.082 1.082-1.084v-4.906l-1.082-1.082 1.082-1.082v-4.907l-1.082-1.082 1.082-1.082v-4.908l-1.082-1.082 1.082-1.082v-4.906l-1.082-1.082 1.082-1.082v-3.834h-1.756l1.38 1.38-2.12 2.122-2.121-2.121 1.38-1.381h-5.591l1.38 1.38-2.12 2.122-2.122-2.121 1.381-1.381h-5.59l1.381 1.38-2.12 2.122-2.122-2.121 1.38-1.381h-5.589l1.38 1.38-2.12 2.122-2.123-2.121 1.383-1.381h-5.592l1.38 1.38-2.12 2.122-2.122-2.121 1.381-1.381h-5.59l1.381 1.38-2.12 2.122-2.122-2.121 1.381-1.381zm2.797 2.795 2.121 2.121-2.121 2.121-2.123-2.121zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.121zm7.07 0 2.122 2.121-2.122 2.121-2.12-2.121zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.121zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.121zm7.07 0 2.123 2.121-2.123 2.121-2.12-2.121zm-31.818 3.535 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.073 0 2.121 2.121-2.121 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm-38.891 3.535 2.12 2.121-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.073 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.123 2.121-2.123 2.121-2.12-2.12zm-31.818 3.535 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.122-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.123-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.122 2.121-2.12-2.12zm7.073 0 2.12 2.123-2.12 2.121-2.121-2.12zm-38.891 3.537 2.12 2.122-2.12 2.12-2.123-2.12zm7.07 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.073 0 2.12 2.122-2.12 2.12-2.122-2.12zm7.07 0 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.123 2.122-2.123 2.12-2.12-2.12zm-31.818 3.536 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.073 0 2.12 2.12-2.12 2.122-2.122-2.121zm-38.891 3.535 2.12 2.12-2.12 2.122-2.123-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.07 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.072 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.122 2.12-2.121 2.122-2.121-2.121zm7.071 0 2.123 2.12-2.123 2.122-2.121-2.121zm-31.818 3.535 2.121 2.121-2.12 2.121-2.122-2.121zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.121zm7.073 0 2.12 2.121-2.12 2.121-2.123-2.121zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.121zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.121zm7.072 0 2.122 2.121-2.122 2.121-2.12-2.121zm-38.89 3.535 2.12 2.123-2.12 2.121-2.124-2.12zm7.07 0 2.12 2.123-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.072 0 2.121 2.123-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.123-2.121 2.121-2.121-2.12zm7.071 0 2.123 2.123-2.123 2.121-2.121-2.12zm-31.818 3.537 2.121 2.121-2.121 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.122 2.121-2.122 2.121-2.123-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.121-2.12zm7.071 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm-38.89 3.535 2.12 2.121-2.12 2.121-2.124-2.12zm7.07 0 2.12 2.121-2.12 2.121-2.121-2.12zm7.07 0 2.121 2.121-2.121 2.121-2.121-2.12zm7.072 0 2.121 2.121-2.12 2.121-2.122-2.12zm7.07 0 2.122 2.121-2.121 2.121-2.122-2.12zm7.07 0 2.124 2.121-2.123 2.121-2.121-2.12zm-31.817 3.535 2.121 2.122-2.121 2.12-2.121-2.12zm7.07 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.124-2.12zm7.07 0 2.122 2.122-2.121 2.12-2.121-2.12zm7.071 0 2.121 2.122-2.12 2.12-2.122-2.12zm7.072 0 2.121 2.122-2.12 2.12-2.122-2.12zm-38.89 3.536 2.12 2.12-2.12 2.122-2.124-2.121zm7.07 0 2.12 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.121 2.12-2.121 2.122-2.121-2.121zm7.072 0 2.121 2.12-2.12 2.122-2.122-2.121zm7.07 0 2.122 2.12-2.122 2.122-2.12-2.121zm7.07 0 2.124 2.12-2.123 2.122-2.121-2.121zm-31.817 3.535 2.12 2.12-2.12 2.124-2.121-2.123zm7.07 0 2.121 2.12-2.12 2.124-2.122-2.123zm7.072 0 2.121 2.12-2.12 2.124-2.124-2.123zm7.07 0 2.122 2.12-2.121 2.124-2.121-2.123zm7.071 0 2.121 2.12-2.121 2.124-2.121-2.123zm7.072 0 2.121 2.12-2.12 2.124-2.122-2.123z"
              style={{
                fill: "url(#linearGradient18523)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="rect246"
              fill="green"
              d="M1763.7 2399.5h45v113.115h-45z"
              style={{ strokeWidth: 1.4341, paintOrder: "markers stroke fill" }}
            />
            <path
              id="path246"
              fill="url(#linearGradient17759)"
              d="M1763.7 2399.5v3.194l1.717 3.53-1.717 3.531v7.48l1.717 3.534-1.717 3.531v7.48l1.717 3.53-1.717 3.531v7.48l1.717 3.53-1.717 3.532v7.483l1.717 3.53-1.717 3.532v7.479l1.717 3.53-1.717 3.532v7.479l1.717 3.53-1.717 3.536v7.48l1.717 3.53-1.717 3.53v1.061h2.315l.818-1.683.818 1.683h5.434l.818-1.683.819 1.683h5.433l.819-1.683.818 1.683h5.435l.819-1.683.818 1.683h5.434l.818-1.683.818 1.683h5.434l.818-1.683.819 1.683h5.435l.26-.534v-8.114l-1.562-3.213 1.562-3.214v-8.118l-1.562-3.213 1.562-3.214v-8.114l-1.562-3.214 1.562-3.213v-8.114l-1.562-3.214 1.562-3.217v-8.114l-1.562-3.214 1.562-3.213v-8.114l-1.562-3.214 1.562-3.213v-8.114l-1.562-3.218 1.562-3.214v-8.114l-1.297-2.667h-3.36l-1.857 3.816-1.855-3.816h-3.36l-1.855 3.816-1.855-3.816h-3.36l-1.855 3.816-1.856-3.816h-3.361l-1.855 3.816-1.856-3.816h-3.36l-1.855 3.816-1.855-3.816h-3.36l-1.855 3.816-1.858-3.816zm6.668 2.362 2.121 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.124 4.363-2.123 4.362-2.121-4.362zm7.073 0 2.121 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.073 0 2.12 4.363-2.12 4.362-2.122-4.362zm-38.891 7.27 2.12 4.363-2.12 4.366-2.123-4.366zm7.07 0 2.121 4.363-2.121 4.366-2.121-4.366zm7.07 0 2.121 4.363-2.12 4.366-2.122-4.366zm7.072 0 2.122 4.363-2.122 4.366-2.12-4.366zm7.07 0 2.122 4.363-2.121 4.366-2.121-4.366zm7.071 0 2.123 4.363-2.123 4.366-2.121-4.366zm-31.818 7.271 2.121 4.366-2.12 4.363-2.122-4.363zm7.07 0 2.122 4.366-2.122 4.363-2.12-4.363zm7.07 0 2.124 4.366-2.123 4.363-2.121-4.363zm7.073 0 2.121 4.366-2.121 4.363-2.121-4.363zm7.07 0 2.121 4.366-2.12 4.363-2.122-4.363zm7.073 0 2.12 4.366-2.12 4.363-2.121-4.363zm-38.891 7.275 2.12 4.362-2.12 4.362-2.123-4.362zm7.07 0 2.121 4.362-2.121 4.362-2.121-4.362zm7.07 0 2.121 4.362-2.12 4.362-2.122-4.362zm7.073 0 2.12 4.362-2.12 4.362-2.122-4.362zm7.07 0 2.12 4.362-2.12 4.362-2.121-4.362zm7.07 0 2.123 4.362-2.123 4.362-2.12-4.362zm-31.818 7.27 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.122-4.362zm7.07 0 2.124 4.363-2.123 4.362-2.121-4.362zm7.073 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.122 4.362-2.12-4.362zm7.073 0 2.12 4.363-2.12 4.362-2.121-4.362zm-38.891 7.27 2.12 4.363-2.12 4.362-2.123-4.362zm7.07 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.122 4.362-2.12-4.362zm7.073 0 2.12 4.363-2.12 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.123 4.363-2.123 4.362-2.12-4.362zm-31.818 7.271 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.124 4.363-2.123 4.362-2.121-4.362zm7.073 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.122-4.362zm7.073 0 2.12 4.363-2.12 4.362-2.121-4.362zm-38.891 7.27 2.12 4.367-2.12 4.363-2.123-4.363zm7.07 0 2.121 4.367-2.12 4.363-2.122-4.363zm7.07 0 2.122 4.367-2.121 4.363-2.122-4.363zm7.073 0 2.12 4.367-2.12 4.363-2.121-4.363zm7.07 0 2.121 4.367-2.12 4.363-2.122-4.363zm7.07 0 2.123 4.367-2.123 4.363-2.12-4.363zm-31.818 7.275 2.122 4.363-2.122 4.362-2.12-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.121-4.362zm7.071 0 2.123 4.363-2.123 4.362-2.121-4.362zm7.072 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.121-4.362zm7.073 0 2.121 4.363-2.121 4.362-2.121-4.362zm-38.891 7.271 2.121 4.362-2.121 4.363-2.123-4.363zm7.07 0 2.121 4.362-2.12 4.363-2.122-4.363zm7.07 0 2.122 4.362-2.121 4.363-2.121-4.363zm7.073 0 2.12 4.362-2.12 4.363-2.121-4.363zm7.07 0 2.121 4.362-2.12 4.363-2.122-4.363zm7.07 0 2.124 4.362-2.123 4.363-2.122-4.363zm-31.817 7.27 2.12 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.12 4.363-2.12 4.362-2.121-4.362zm7.07 0 2.123 4.363-2.123 4.362-2.121-4.362zm7.072 0 2.122 4.363-2.122 4.362-2.12-4.362zm7.07 0 2.122 4.363-2.121 4.362-2.121-4.362zm7.073 0 2.121 4.363-2.121 4.362-2.121-4.362zm-38.891 7.271 2.121 4.362-2.121 4.363-2.123-4.363zm7.07 0 2.122 4.362-2.122 4.363-2.12-4.363zm7.07 0 2.122 4.362-2.121 4.363-2.121-4.363zm7.073 0 2.121 4.362-2.121 4.363-2.121-4.363zm7.07 0 2.121 4.362-2.12 4.363-2.122-4.363zm7.07 0 2.124 4.362-2.123 4.363-2.121-4.363zm-31.817 7.27 2.12 4.363-2.12 4.366-2.121-4.366zm7.07 0 2.121 4.363-2.121 4.366-2.121-4.366zm7.07 0 2.123 4.363-2.123 4.366-2.12-4.366zm7.073 0 2.12 4.363-2.12 4.366-2.122-4.366zm7.07 0 2.12 4.363-2.12 4.366-2.121-4.366zm7.072 0 2.121 4.363-2.12 4.366-2.122-4.366zm-38.89 7.275 2.12 4.363-2.12 4.362-2.124-4.362zm7.07 0 2.12 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.12 4.363-2.12 4.362-2.121-4.362zm7.072 0 2.121 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.12 4.362-2.122-4.362zm7.07 0 2.124 4.363-2.123 4.362-2.121-4.362zm-31.817 7.27 2.12 4.363-2.12 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.121 4.362-2.121-4.362zm7.07 0 2.123 4.363-2.123 4.362-2.12-4.362zm7.073 0 2.12 4.363-2.12 4.362-2.121-4.362zm7.07 0 2.121 4.363-2.121 4.362-2.121-4.362zm7.072 0 2.121 4.363-2.12 4.362-2.122-4.362z"
              style={{
                fill: "url(#linearGradient17759)",
                strokeWidth: 1.4341,
                paintOrder: "markers stroke fill",
              }}
            />
            <g id="g248">
              <path
                id="rect247"
                fill="url(#linearGradient16139)"
                d="M1760.2 2355.7h52v52h-52z"
                style={{
                  fill: "url(#linearGradient16139)",
                  paintOrder: "markers stroke fill",
                }}
              />
              <path
                id="rect248"
                fill="url(#linearGradient16081)"
                d="M2067.9 2355.7h52v52h-52z"
                style={{
                  fill: "url(#linearGradient16081)",
                  paintOrder: "markers stroke fill",
                }}
              />
            </g>
          </g>
          <g
            id="rotary-pump"
            transform="matrix(-.18782 0 0 .18782 374.486 301.22)"
          >
            <g id="g285" strokeLinecap="square">
              <rect
                id="rect283"
                width={114.88}
                height={36.18}
                x={-590}
                y={77.864}
                fill="gray"
                strokeWidth={3.431}
                ry={2.246}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <rect
                id="rect284"
                width={192.58}
                height={97.687}
                x={-779.25}
                y={-36.104}
                fill="#666"
                strokeWidth={1.98}
                rx={0}
                ry={15.029}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <path
                id="path284"
                fill="url(#linearGradient55895-5-1)"
                stroke="#000"
                strokeWidth={0.823}
                d="M-758.41-40.928a2.24 2.24 0 0 0-2.245 2.245v9.379c0 1.244 1 2.245 2.245 2.245h105.08a2.24 2.24 0 0 0 2.247-2.245v-9.379a2.24 2.24 0 0 0-2.247-2.245zm0 15.075a2.24 2.24 0 0 0-2.245 2.245v9.379c0 1.244 1 2.245 2.245 2.245h105.08a2.24 2.24 0 0 0 2.247-2.245v-9.379a2.24 2.24 0 0 0-2.247-2.245zm0 15.075a2.24 2.24 0 0 0-2.245 2.245V.846c0 1.244 1 2.245 2.245 2.245h105.08a2.24 2.24 0 0 0 2.247-2.245v-9.379a2.24 2.24 0 0 0-2.247-2.245zm0 15.075a2.24 2.24 0 0 0-2.245 2.245v9.377c0 1.244 1 2.247 2.245 2.247h105.08a2.24 2.24 0 0 0 2.247-2.247V6.542a2.24 2.24 0 0 0-2.247-2.245zm0 15.074a2.24 2.24 0 0 0-2.245 2.247v9.377c0 1.244 1 2.246 2.245 2.246h105.08a2.24 2.24 0 0 0 2.247-2.246v-9.378a2.24 2.24 0 0 0-2.247-2.246zm0 15.075a2.24 2.24 0 0 0-2.245 2.247v9.377c0 1.244 1 2.246 2.245 2.246h105.08a2.24 2.24 0 0 0 2.247-2.246v-9.378a2.24 2.24 0 0 0-2.247-2.246zm0 15.075a2.24 2.24 0 0 0-2.245 2.247v9.377c0 1.244 1 2.245 2.245 2.245h105.08a2.24 2.24 0 0 0 2.247-2.245v-9.378a2.24 2.24 0 0 0-2.247-2.246z"
                style={{
                  fill: "url(#linearGradient55895-5-1)",
                  paintOrder: "markers stroke fill",
                }}
              />
              <rect
                id="rect285"
                width={57.773}
                height={136.28}
                x={-660.39}
                y={-52.988}
                fill="gray"
                strokeWidth={1.546}
                ry={13.17}
                style={{ paintOrder: "markers stroke fill" }}
              />
            </g>
            <path
              id="rect286"
              fill="url(#linearGradient40)"
              strokeWidth={1.398}
              d="M-449.34-109.84h60.651v7.761h-60.651z"
              style={{
                fill: "url(#linearGradient40)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="rect287"
              fill="url(#linearGradient72)"
              strokeWidth={1.398}
              d="M-592.7-109.84h60.651v7.761H-592.7z"
              style={{
                fill: "url(#linearGradient72)",
                paintOrder: "markers stroke fill",
              }}
            />
            <rect
              id="rect288"
              width={36.302}
              height={109.63}
              x={-781.45}
              y={-43.428}
              fill="url(#linearGradient39)"
              strokeWidth={4.23}
              rx={2.511}
              ry={46.105}
              style={{
                fill: "url(#linearGradient39)",
                paintOrder: "fill markers stroke",
              }}
            />
            <path
              id="path288"
              fill="url(#linearGradient76316-0-8)"
              strokeWidth={0.839}
              d="M-607.67-76.402a3.488 16.865.894 0 0-2.9-16.679l.001-.104-.357.009-18.435.467-.001.104a3.488 16.865.894 0 0-.357-.095 3.488 16.865.894 0 0-3.725 16.95 3.488 16.865.894 0 0 3.258 16.775 3.488 16.865.894 0 0 .36-.115l-.002.106 18.435-.467.358-.01.001-.105a3.488 16.865.894 0 0 3.364-16.836m-3.252-17.032-18.976.738z"
              style={{ fill: "url(#linearGradient76316-0-8)" }}
            />
            <rect
              id="rect289"
              width={249.69}
              height={200.2}
              x={-618.55}
              y={-103.64}
              fill="url(#linearGradient48503-5-4)"
              strokeLinecap="square"
              strokeWidth={1.58}
              ry={9.648}
              style={{
                fill: "url(#linearGradient48503-5-4)",
                paintOrder: "markers stroke fill",
              }}
            />
            <g id="g293" strokeLinecap="square">
              <rect
                id="rect290"
                width={274.26}
                height={17.487}
                x={-641.79}
                y={105}
                fill="#999"
                strokeWidth={1.463}
                ry={6.633}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <rect
                id="rect291"
                width={2.656}
                height={200.2}
                x={-478.43}
                y={-103.64}
                strokeWidth={0.802}
                ry={0}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <rect
                id="rect292"
                width={2.656}
                height={200.2}
                x={-590.66}
                y={-103.64}
                strokeWidth={0.802}
                ry={0}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <path
                id="path292"
                fill="url(#linearGradient44732-4-3)"
                strokeWidth={0.823}
                d="M-474.2-79.52a2.24 2.24 0 0 0-2.246 2.245v9.379a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.379c0-1.244-1-2.245-2.245-2.245zm0 17.487a2.24 2.24 0 0 0-2.246 2.247v9.377a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.378c0-1.244-1-2.246-2.245-2.246zm0 18.09a2.24 2.24 0 0 0-2.246 2.245v9.379a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.379c0-1.244-1-2.245-2.245-2.245zm0 17.487a2.24 2.24 0 0 0-2.246 2.245v9.379a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.379c0-1.244-1-2.245-2.245-2.245zm0 16.884a2.24 2.24 0 0 0-2.246 2.247v9.377a2.24 2.24 0 0 0 2.246 2.246h105.08a2.24 2.24 0 0 0 2.245-2.246v-9.377c0-1.245-1-2.247-2.245-2.247zm0 18.09a2.24 2.24 0 0 0-2.246 2.247v9.377a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.377c0-1.245-1-2.247-2.245-2.247zm0 19.297a2.24 2.24 0 0 0-2.246 2.245v9.377a2.24 2.24 0 0 0 2.246 2.247h105.08a2.24 2.24 0 0 0 2.245-2.247V30.06c0-1.244-1-2.245-2.245-2.245zm0 17.487a2.24 2.24 0 0 0-2.246 2.245v9.377a2.24 2.24 0 0 0 2.246 2.247h105.08a2.24 2.24 0 0 0 2.245-2.247v-9.377c0-1.244-1-2.245-2.245-2.245zm0 17.487a2.24 2.24 0 0 0-2.246 2.245v9.379a2.24 2.24 0 0 0 2.246 2.245h105.08a2.24 2.24 0 0 0 2.245-2.245v-9.379c0-1.244-1-2.245-2.245-2.245z"
                style={{
                  fill: "url(#linearGradient44732-4-3)",
                  paintOrder: "markers stroke fill",
                }}
              />
              <path
                id="path293"
                fill="url(#linearGradient75726-1)"
                stroke="#000"
                strokeWidth={1.332}
                d="m15.103 29.487-6.066-.042-2.996-5.274 3.069-5.232 6.066.042 2.996 5.274z"
                style={{
                  fill: "url(#linearGradient17)",
                  paintOrder: "markers stroke fill",
                }}
                transform="matrix(1.409 0 0 1.2279 -416.8 56.274)"
              />
            </g>
          </g>
          <g
            id="diffusion-pump"
            transform="translate(269.876 200.39)scale(.38073)"
          >
            <path
              id="path249"
              fill="url(#linearGradient80317)"
              d="m269.02 166.23-.08 59.159c-3.307 14.246-4.407 15.197-17.772 16.538h-87.836v36.142l104.84-2.102c17.219-7.612 21.275-12.32 28.34-23.933 0 0 4.439-7.824 5.46-20.662l.085-65.01z"
              style={{
                fill: "url(#linearGradient80317)",
                paintOrder: "markers stroke fill",
              }}
            />
            <g id="g252" fill="#ccc" stroke="#000" strokeLinecap="square">
              <path
                id="rect249"
                strokeWidth={1.136}
                d="M230.02-199.23h39.122v2.847H230.02z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.00634 .99998 -.99835 -.05745 0 0)"
              />
              <path
                id="rect250"
                strokeWidth={1.241}
                d="M217.33-191.81h48.363v2.749H217.33z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.00495 .99999 -.99729 -.07356 0 0)"
              />
              <path
                id="rect251"
                strokeWidth={1.082}
                d="M230.22-208.37h34.866v2.9H230.22z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.00725 .99997 -.99874 -.05027 0 0)"
              />
              <path
                id="rect252"
                strokeWidth={1.162}
                d="M226.63-219.65h41.255v2.824H226.63z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.00596 .99998 -.99813 -.06108 0 0)"
              />
            </g>
            <path
              id="path252"
              fill="gray"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={1.916}
              d="m214.65 211.57-2.168 26.744-2.892 18.793-9.396 33.972-13.01 28.189-.723 4.337h13.01l12.288-35.417 7.951-27.467 3.614-50.596z"
              style={{ paintOrder: "markers stroke fill" }}
            />
            <path
              id="rect253"
              fill="url(#linearGradient44613)"
              d="M202.18-225.49h10.119v13.01H202.18z"
              style={{
                fill: "url(#linearGradient44613)",
                paintOrder: "markers stroke fill",
              }}
              transform="rotate(90 0 0)"
            />
            <path
              id="rect254"
              fill="url(#linearGradient44617)"
              d="M202.18-196.58h10.119v15.902H202.18z"
              style={{
                fill: "url(#linearGradient44617)",
                paintOrder: "markers stroke fill",
              }}
              transform="rotate(90 0 0)"
            />
            <path
              id="path254"
              fill="url(#linearGradient27658)"
              d="M72.393 32.054v20.462a23.888 72.244 0 0 0-20 71.242 23.888 72.244 0 0 0 20 71.242v128.98h113.33V194.73a23.888 72.244 0 0 0 19.443-70.963 23.888 72.244 0 0 0-19.443-70.977V32.062Z"
              style={{
                fill: "url(#linearGradient27658)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="rect255"
              fill="url(#linearGradient27761)"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={2.324}
              d="M59.401 26.214h139.2v14.124h-139.2z"
              style={{
                fill: "url(#linearGradient27761)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="path255"
              fill="gray"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={1.916}
              d="M156.1 260.72h15.179l15.179-6.505 7.228-13.733 1.446-14.456v-15.18h-6.506v15.18l-.722 12.288-4.337 9.396-11.565 6.505-16.624.723z"
              style={{ paintOrder: "markers stroke fill" }}
            />
            <path
              id="rect256"
              fill="url(#linearGradient47525)"
              d="M-160.34-257.99h10.122v12.916h-10.122z"
              style={{
                fill: "url(#linearGradient47525)",
                paintOrder: "markers stroke fill",
              }}
              transform="matrix(-.99943 -.03385 .01792 -.99984 0 0)"
            />
            <g id="g268" fill="#ccc" stroke="#000" strokeLinecap="square">
              <path
                id="rect257"
                strokeWidth={1.506}
                d="M59.404 67.878h76.07v2.573h-76.07z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99262 -.12129 .03972 .99921 0 0)"
              />
              <path
                id="rect258"
                strokeWidth={2.023}
                d="M49.739 75.839h143.71v2.458H49.739z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99813 -.06119 .07898 .99688 0 0)"
              />
              <path
                id="rect259"
                strokeWidth={2.085}
                d="M43.847 89.001h153.53v2.444H43.847z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99838 -.05694 .08486 .99639 0 0)"
              />
              <path
                id="rect260"
                strokeWidth={2.112}
                d="M39.804 104.28h157.83v2.439H39.804z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99847 -.05525 .08744 .99617 0 0)"
              />
              <path
                id="rect261"
                strokeWidth={2.123}
                d="M37.813 118.47h159.67v2.436H37.813z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99851 -.05455 .08856 .99607 0 0)"
              />
              <path
                id="rect262"
                strokeWidth={2.119}
                d="M36.541 133.35h159.05v2.437H36.541z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.9985 -.05478 .08818 .9961 0 0)"
              />
              <path
                id="rect263"
                strokeWidth={2.104}
                d="M36.621 148.94h156.6v2.44h-156.6z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99845 -.05572 .0867 .99623 0 0)"
              />
              <path
                id="rect264"
                strokeWidth={2.062}
                d="M40.865 164.8h149.84v2.449H40.865z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99829 -.05846 .08265 .99658 0 0)"
              />
              <path
                id="rect265"
                strokeWidth={1.983}
                d="M48.945 180.41h137.57v2.466H48.945z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99794 -.06416 .07533 .99716 0 0)"
              />
              <path
                id="rect266"
                strokeWidth={1.9}
                d="M55.011 196.75h125.41v2.484H55.011z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="rotate(-4.068)skewX(-.161)"
              />
              <path
                id="rect267"
                strokeWidth={1.847}
                d="M57.153 210.71h117.95v2.496H57.153z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99712 -.0758 .06377 .99796 0 0)"
              />
              <path
                id="rect268"
                strokeWidth={1.864}
                d="M54.609 225.98h120.41v2.492H54.609z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.99725 -.07413 .0652 .99787 0 0)"
              />
            </g>
            <path
              id="rect269"
              fill="url(#linearGradient28437)"
              d="M314.93-187.91h10.119v119.99H314.93z"
              style={{
                fill: "url(#linearGradient28437)",
                paintOrder: "markers stroke fill",
              }}
              transform="rotate(90 0 0)"
            />
            <path
              id="rect270"
              fill="url(#linearGradient34315)"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={1.738}
              d="M174.17 127h57.824v75.894H174.17z"
              style={{
                fill: "url(#linearGradient34315)",
                paintOrder: "markers stroke fill",
              }}
            />
            <path
              id="rect271"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={1.057}
              d="M203.38 126.57h1.581v77.476h-1.581z"
              style={{ paintOrder: "markers stroke fill" }}
            />
            <g id="g272" fill="none" stroke="#000" strokeLinecap="square">
              <ellipse
                id="ellipse271"
                cx={188.99}
                cy={163.51}
                strokeWidth={1.183}
                rx={11.57}
                ry={13.016}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <circle
                id="circle271"
                cx={189.71}
                cy={136.76}
                r={6.867}
                strokeWidth={1.916}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <circle
                id="circle272"
                cx={189.71}
                cy={189.53}
                r={6.867}
                strokeWidth={1.916}
                style={{ paintOrder: "markers stroke fill" }}
              />
            </g>
            <path
              id="rect272"
              fill="url(#linearGradient40247)"
              d="M124.96 219.62h10.119v93.978H124.96z"
              style={{
                fill: "url(#linearGradient40247)",
                paintOrder: "markers stroke fill",
              }}
              transform="rotate(.256 0 .002)skewX(-.175)"
            />
            <g id="g275" stroke="#000" strokeLinecap="square">
              <path
                id="rect273"
                fill="url(#linearGradient41703)"
                strokeWidth={1.042}
                d="M108.05 245.92h38.282v41.173H108.05z"
                style={{
                  fill: "url(#linearGradient41703)",
                  paintOrder: "markers stroke fill",
                }}
              />
              <circle
                id="circle273"
                cx={127.55}
                cy={267.59}
                r={10.481}
                fill="none"
                strokeWidth={1.916}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <path
                id="path273"
                fill="gray"
                strokeWidth={0.301}
                d="m18.255 65.875-3.728.335-2.155-3.061 1.574-3.397 3.729-.335 2.154 3.062z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(1.6543 .17176 -.16591 1.8887 91.316 192.83)"
              />
              <path
                id="path274"
                fill="gray"
                strokeWidth={0.301}
                d="m18.255 65.875-3.728.335-2.155-3.061 1.574-3.397 3.729-.335 2.154 3.062z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(1.6543 .17176 -.16591 1.8887 130.35 192.83)"
              />
              <ellipse
                id="ellipse274"
                cx={128.27}
                cy={232.53}
                fill="none"
                strokeWidth={1.916}
                rx={3.253}
                ry={2.891}
                style={{ paintOrder: "markers stroke fill" }}
              />
              <ellipse
                id="ellipse275"
                cx={128.27}
                cy={301.92}
                fill="none"
                strokeWidth={1.916}
                rx={3.253}
                ry={2.891}
                style={{ paintOrder: "markers stroke fill" }}
              />
            </g>
            <path
              id="rect275"
              fill="gray"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={0.959}
              d="M115.15 48.463h25.533v11.8H115.15z"
              style={{ paintOrder: "markers stroke fill" }}
            />
            <circle
              id="circle275"
              cx={127.55}
              cy={54.362}
              r={3.975}
              fill="gray"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={1.916}
              style={{ paintOrder: "markers stroke fill" }}
            />
            <path
              id="rect276"
              fill="url(#linearGradient82507)"
              d="M163.34-302.92h10.119v45.559H163.34z"
              style={{
                fill: "url(#linearGradient82507)",
                paintOrder: "markers stroke fill",
              }}
              transform="matrix(.02959 .99956 -1 -.00215 0 0)"
            />
            <g id="g281" fill="#ccc" stroke="#000" strokeLinecap="square">
              <path
                id="rect277"
                strokeWidth={1.145}
                d="M227.36-228.25h39.834v2.84H227.36z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(.00621 .99998 -.99828 -.05864 0 0)"
              />
              <g id="g280" strokeWidth={1.238}>
                <path
                  id="rect278"
                  d="M-314.12-210.38h39.731v3.332h-39.731z"
                  style={{ paintOrder: "markers stroke fill" }}
                  transform="matrix(-.99978 .02081 .04367 -.99905 0 0)"
                />
                <path
                  id="rect279"
                  d="M-314.49-202.43h39.731v3.332h-39.731z"
                  style={{ paintOrder: "markers stroke fill" }}
                  transform="matrix(-.99978 .02081 .04367 -.99905 0 0)"
                />
                <path
                  id="rect280"
                  d="M-314.53-219.8h39.731v3.332h-39.731z"
                  style={{ paintOrder: "markers stroke fill" }}
                  transform="matrix(-.99978 .02081 .04367 -.99905 0 0)"
                />
              </g>
              <path
                id="rect281"
                strokeWidth={0.897}
                d="M-288.35-199.18h19.217v3.612h-19.217z"
                style={{ paintOrder: "markers stroke fill" }}
                transform="matrix(-.99891 .0467 .01946 -.99981 0 0)"
              />
            </g>
            <path
              id="rect282"
              fill="gray"
              stroke="#000"
              strokeLinecap="square"
              strokeWidth={0.666}
              d="M277.63 179.87h17.152v8.478H277.63z"
              style={{ paintOrder: "markers stroke fill" }}
            />
          </g>
        </g>
        <rect
          id="rect337"
          width={2.055}
          height={5.577}
          x={157.434}
          y={107.897}
          fill="url(#linearGradient183)"
          rx={0.147}
          ry={1.027}
          style={{
            display: "inline",
            fill: "url(#linearGradient337)",
            strokeWidth: 0.999999,
            paintOrder: "fill markers stroke",
          }}
        />
        <rect
          id="rect338"
          width={2.055}
          height={5.577}
          x={152.375}
          y={107.897}
          fill="url(#linearGradient183)"
          rx={0.147}
          ry={1.027}
          style={{
            display: "inline",
            fill: "url(#linearGradient338)",
            strokeWidth: 0.999999,
            paintOrder: "fill markers stroke",
          }}
        />
        <path
          id="path238"
          fill="url(#linearGradient32)"
          strokeWidth={0.703}
          d="M154.337 15.145v197.89H487.78V15.145Zm3.397 3.03h326.655v191.84H157.734Z"
          style={{
            fill: "url(#linearGradient32)",
            paintOrder: "fill markers stroke",
          }}
        />
      </g>
      <g id="electric" transform="translate(-2.369 -2.535)" style={{ cursor: "pointer" }} onClick={() => onNavigateClick('/schematic')}>
        <path
          id="rect330"
          d="M468.609 111.15h26.69v.757h-26.69z"
          style={{ strokeWidth: 0.948634, paintOrder: "fill markers stroke" }}
        />
        <path
          id="rect331"
          d="M111.15-469h3.597v.757h-3.597z"
          style={{ paintOrder: "fill markers stroke" }}
          transform="rotate(90)"
        />
        <rect
          id="electronics"
          width={34.707}
          height={35.465}
          x={491.6}
          y={93.591}
          fill="url(#radialGradient163)"
          rx={4.225}
          ry={5.47}
          style={{
            fill: "url(#radialGradient163)",
            paintOrder: "fill markers stroke",
          }}
        />
        <g id="g335">
          <path
            id="path332"
            d="m511.008 98.979-14.164 14.164 10.565.806-1.856 9.665 14.164-14.164-10.565-.807z"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <path
            id="rect333"
            d="M109.8-491.26h3.597v.757H109.8z"
            style={{ paintOrder: "fill markers stroke" }}
            transform="rotate(90)"
          />
          <path
            id="rect334"
            d="M489.88 109.8h1.23v.757h-1.23z"
            style={{ paintOrder: "fill markers stroke" }}
          />
          <path
            id="rect335"
            d="M489.88 112.64h1.23v.757h-1.23z"
            style={{ paintOrder: "fill markers stroke" }}
          />
        </g>
      </g>
      <g id="lecture" transform="translate(76.398 8.006)scale(.11552)">
        <g id="g25-4">
          <path
            id="rect19-5"
            fill="url(#linearGradient11661)"
            strokeWidth={0.325}
            d="M-58.082 101.43h53.146v72.126h-53.146z"
            style={{ fill: "url(#linearGradient11661)" }}
          />
          <path
            id="rect20-8"
            fill="url(#linearGradient10403)"
            strokeWidth={0.196}
            d="M-69.47 173.56H6.453v37.961H-69.47z"
            style={{ fill: "url(#linearGradient10403)" }}
          />
          <rect
            id="rect21-6"
            width={75.923}
            height={0.759}
            x={-69.47}
            y={183.75}
            fill="#a0a0a0"
            strokeWidth={0.083}
            ry={0}
          />
          <path
            id="rect22-2"
            fill="url(#linearGradient11675)"
            strokeWidth={0.285}
            d="M-5.411 120.41h22.777v37.961H-5.411z"
            style={{ fill: "url(#linearGradient11675)" }}
          />
          <path
            id="rect23-5"
            fill="url(#linearGradient11706)"
            strokeWidth={0.605}
            d="M-46.694 93.838h30.369v7.592h-30.369z"
            style={{ fill: "url(#linearGradient11706)" }}
          />
          <rect
            id="rect24-1"
            width={106.29}
            height={11.388}
            x={-84.655}
            y={82.451}
            fill="url(#linearGradient12498)"
            strokeWidth={0.398}
            ry={3.796}
            style={{ fill: "url(#linearGradient12498)" }}
          />
          <path
            id="path24"
            fill="url(#linearGradient12519)"
            strokeWidth={0.387}
            d="M87.831 313.33a113.88 113.2 0 0 0-113.88-113.2 113.88 113.2 0 0 0-113.88 113.2 113.88 113.2 0 0 0 .133 1.844c-.036.435-.133.854-.133 1.299v437.97c0 8.37 6.772 15.109 15.184 15.109h197.4c8.412 0 15.184-6.739 15.184-15.11v-437.97c0-.205-.05-.399-.06-.604a113.88 113.2 0 0 0 .06-2.538z"
            style={{ fill: "url(#linearGradient12519)" }}
          />
          <rect
            id="rect25-3"
            width={189.03}
            height={392.5}
            x={-119.45}
            y={348.43}
            fill="url(#linearGradient15522)"
            strokeWidth={7.109}
            ry={5.607}
            style={{ fill: "url(#linearGradient15522)" }}
            transform="skewX(.01)"
          />
        </g>
        <text
          xmlSpace="preserve"
          id="molecule-value"
          x={-291.4}
          y={-8.052}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={16.227}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={46.157}
          style={{
            fontSize: "73.2903px",
            lineHeight: 0,
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
          transform="rotate(-90)"
        >
          <tspan
            id="tspan25-7"
            x={-548.96}
            y={-24.279}
            strokeWidth={16.227}
            fontSize={46.157}
            style={{ fontSize: "73.2903px" }}
          >
            {molecule}
          </tspan>
        </text>
      </g>
      <g id="readout" transform="translate(233.072 252.998)scale(.08926)">
        <path
          id="background-1"
          fill="#1d2022"
          stroke="#daa520"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15.793}
          d="M-478.13-333.51V746.9h769.558V-333.51H-93.35Z"
          style={{ paintOrder: "fill markers stroke" }}
        />
        <text
          xmlSpace="preserve"
          id="cycle-title"
          x={-219.534}
          y={22.895}
          fill="#fff"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          fontFamily="sans-serif"
          fontSize={74.667}
          style={{
            lineHeight: 0,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
        >
          <tspan
            id="tspan3-6"
            x={-219.534}
            y={22.895}
            fontSize={74.667}
            style={{ lineHeight: 0 }}
          >
            {"Cycle"}
          </tspan>
        </text>
        <path
          id="cycle-text-box"
          fill="#fff"
          d="M-446.03 48.166h700v100h-700z"
          style={{ paintOrder: "fill markers stroke" }}
        />
        <text
          xmlSpace="preserve"
          id="cycle-value"
          x={-98.612}
          y={104.668}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={85.333}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
        >
          <tspan id="tspan4-2" x={-98.612} y={104.668}>
            {cyclePerStep}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          id="frequency-title"
          x={-407.844}
          y={281.104}
          fill="#fff"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          fontFamily="sans-serif"
          fontSize={74.667}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
        >
          <tspan id="tspan5-9" x={-407.844} y={281.104} fontSize={74.667}>
            {"Frequency (MHz)"}
          </tspan>
        </text>
        <path
          id="frequency-text-box"
          fill="#fff"
          d="M-440.672 314.372h700v100h-700z"
          style={{ paintOrder: "fill markers stroke" }}
        />
        <text
          xmlSpace="preserve"
          id="frequency-value"
          x={-93.254}
          y={370.877}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={85.333}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
        >
          <tspan id="tspan6-3" x={-93.254} y={370.877}>
            {frequency}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          id="range-title"
          x={-227.572}
          y={-222.121}
          fill="#fff"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          fontFamily="'Franklin Gothic Medium'"
          fontSize={74.667}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
        >
          <tspan
            id="tspan7-8"
            x={-227.572}
            y={-222.121}
            fontFamily="sans-serif"
            fontSize={74.667}
            style={{
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
          >
            {"Range"}
          </tspan>
        </text>
        <path
          id="range-text-box"
          fill="#fff"
          d="M-446.03-186.41h700v100h-700z"
          style={{ paintOrder: "fill markers stroke" }}
        />
        <text
          xmlSpace="preserve"
          id="range-value"
          x={-98.612}
          y={-129.906}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={85.333}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
        >
          <tspan id="tspan8-8" x={-98.612} y={-129.906}>
            {range}
          </tspan>
        </text>
        <path
          id="gas-text-box"
          fill="#fff"
          d="M-445.026 579.431h700v100h-700z"
          style={{ paintOrder: "fill markers stroke" }}
        />
        <text
          xmlSpace="preserve"
          id="mw-band-tile"
          x={-280.344}
          y={551.161}
          fill="#fff"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          fontFamily="sans-serif"
          fontSize={74.667}
          style={{
            lineHeight: 0,
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
        >
          <tspan
            id="tspan3"
            x={-280.344}
            y={551.161}
            fontSize={74.667}
            style={{ lineHeight: 0 }}
          >
            {"MW Band"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          id="mw-band-value"
          x={-98.612}
          y={631.965}
          fill="#000"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={15}
          dominantBaseline="central"
          fontFamily="sans-serif"
          fontSize={85.333}
          style={{
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            paintOrder: "fill markers stroke",
          }}
          textAnchor="middle"
        >
          <tspan id="tspan4" x={-98.612} y={631.965}>
            {mwBand}
          </tspan>
        </text>
      </g>
      <g
        id="g9"
        style={{ display: "inline" }}
        onClick={onDisplayCLick}
        transform="translate(46.907 223.632)scale(.37439)"
      >
        <path
          id="rect2"
          d="M54.679 259.208h226.996v10.266H54.679z"
          style={{
            fill: "#afafaf",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 1.14064,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "normal",
          }}
        />
        <path
          id="path3"
          d="M111.271 225.078h113.812l55.35 33.062H55.921Z"
          style={{
            fill: "#afafaf",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.999991,
            strokeLinecap: "square",
            strokeDasharray: "none",
          }}
        />
        <path
          id="path5"
          d="M247.517 225.079a79.278 27.374 0 0 1-39.639 23.706 79.278 27.374 0 0 1-79.277 0 79.278 27.374 0 0 1-39.64-23.706h79.278z"
          style={{
            fill: "#afafaf",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 1.14058,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "normal",
          }}
        />
        <rect
          id="rect6"
          width={296.578}
          height={222.433}
          x={20.211}
          y={9.489}
          rx={28.517}
          ry={28.517}
          style={{
            fill: "#bec3c9",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 3.42205,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "normal",
          }}
        />
        <rect
          id="rect8"
          width={228.137}
          height={171.103}
          x={54.432}
          y={35.155}
          rx={28.517}
          ry={28.517}
          style={{
            fill: "url(#linearGradient896-8)",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 3.42205,
            strokeLinecap: "square",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <path
          id="spectrum-ready"
          d="M96.043 93.957q-1.51.377-1.886 1.885l3.017 1.133h9.77l3.018-1.133q-.377-1.508-1.886-1.885zm16.937 0v1.885l3.017 1.133h9.053l1.51-1.51-1.51-1.508zm20.784 0q-1.508.377-1.886 1.885l3.018 1.133h10.147l1.132-3.018zm18.861 0q-1.508.377-1.886 1.885l3.018 1.133h10.147l1.132-3.018zm18.861 0q-1.508.377-1.886 1.885l3.018 1.133h9.77l3.017-1.133q-.377-1.508-1.886-1.885zm18.861 0q-1.508.377-1.886 1.885l3.017 1.133h9.016l1.132-3.018zm12.033 0-1.13 3.018v7.92l2.262 2.264.754-.754V95.842q-.377-1.508-1.886-1.885m18.861 0-1.132 3.018v7.92l2.264 2.264.754-.754V95.842q-.377-1.508-1.886-1.885m6.828 0q-1.509.377-1.887 1.885l3.018 1.133h9.017l1.13-3.018zm12.033 0-1.132 3.018v7.92l2.264 2.264.754-.754V95.842q-.377-1.508-1.886-1.885m-30.932.377q-1.508.377-1.886 1.886v10.562l.755.754 2.263-2.263v-7.921zm-82.233 1.508-1.132 1.133v7.92l2.263 2.264.755-.754v-8.677zm-32.818.755v9.808l.754.754 2.264-2.263v-7.168zm18.86 0v9.808l.755.754 2.263-2.263v-7.168zm18.862 0v9.808l.754.754 2.263-2.263v-7.168zm18.86 0v9.808l.755.754 2.263-2.263v-7.168zm37.722 0v9.808l.755.754 2.263-2.263v-7.168zm37.722 0v9.808l.754.754 2.263-2.263v-7.168zm-50.17 1.131v7.922l1.51 1.509 1.508-1.509v-7.922zm56.583 0v8.677l1.508 1.509 1.51-1.509v-8.677zm-135.421 8.3-1.51 1.508 1.51 1.51h9.807l1.51-1.51-1.51-1.508zm18.86 0-1.509 1.508 1.509 1.51h9.808l1.508-1.51-1.508-1.508zm18.861 0-1.509 1.508 1.51 1.51h9.807l1.509-1.51-1.51-1.508zm56.583 0-1.51 1.508 1.51 1.51h9.808l1.509-1.51-1.509-1.508zm-82.234 1.886-2.263 2.263v7.922l1.132 3.017q1.508-.377 1.886-1.886v-10.562zm4.527 0-.754.754v10.562q.377 1.51 1.886 1.886l1.131-3.017v-7.922zm18.86 0-.753.754v9.807l3.017-1.13v-7.168zm18.862 0-.755.754v9.807l3.018-1.13v-7.168zm26.028 0-1.51 1.508v8.677l1.133 3.017q1.508-.377 1.886-1.886v-9.808zm11.694 0-.755.754v10.562q.377 1.51 1.886 1.886l1.132-3.017v-7.922zm18.861 0-.755.754v9.807l3.018-1.13v-7.168zm14.334 0-2.264 2.263v7.922l1.132 3.017q1.51-.377 1.886-1.886v-10.562zm4.526 0-.754.754v10.562q.377 1.51 1.886 1.886l1.132-3.017v-7.922zm14.335 0-2.264 2.263v7.922l1.132 3.017q1.51-.377 1.886-1.886v-10.562zm-49.039 1.886v2.263l9.054 9.053q2.263 0 3.017-1.508l-9.808-9.808zm-95.058 8.299-3.018 1.131q.377 1.51 1.886 1.886h11.316l-1.131-3.017zm37.721 0-3.017 1.131q.377 1.51 1.886 1.886h12.448l-1.132-3.017zm18.861 0-3.018 1.131q.378 1.51 1.887 1.886h12.448l-1.132-3.017zm56.583 0-3.018 1.131q.377 1.51 1.886 1.886h11.317l-1.132-3.017zm-89.134 7.34q-1.508.376-1.886 1.886l3.019 1.131h9.015l1.13-3.018zm12.034 0-1.132 3.017v7.922l2.264 2.264.754-.755v-10.562q-.378-1.509-1.886-1.887m6.827 0q-1.508.376-1.885 1.886l3.017 1.131h10.147l1.132-3.018zm18.862 0q-1.51.376-1.886 1.886l3.017 1.131h9.016l1.131-3.018zm12.033 0-1.132 3.017v7.922l2.263 2.264.755-.755v-10.562q-.377-1.509-1.886-1.887m4.904 0v1.886l3.017 1.131h9.053l1.51-1.508-1.51-1.51zm32.817 0-1.131 3.017v7.922l2.263 2.264.755-.755v-10.562q-.378-1.509-1.887-1.887m-13.956 1.509v10.939l.754.755 2.263-2.264v-8.299zm-4.904.377-1.132 1.131v7.922l2.263 2.264.755-.755v-8.676zm-70.54.754v9.808l.754.755 2.264-2.264v-7.167zm18.86 0v9.808l.755.755 2.264-2.264v-7.167zm18.862 0v9.808l.754.755 2.264-2.264v-7.167zm18.86 0v9.808l.755.755 2.263-2.264v-7.167zm-53.564 9.43-1.51 1.51 1.51 1.509h9.807l1.509-1.51-1.509-1.508zm18.86 0-1.509 1.51 1.51 1.509h9.807l1.509-1.51-1.51-1.508zm18.862 0-1.51 1.51 1.51 1.509h9.807l1.51-1.51-1.51-1.508zm37.72 0-1.508 1.51 1.509 1.509h9.808l1.508-1.51-1.508-1.508zM120 139.396l-.754.755v10.562q.377 1.509 1.885 1.887l1.133-3.018v-7.922zm18.861 0-.754.755v9.808l3.018-1.132v-7.167zm18.861 0-.754.755v10.562q.377 1.509 1.886 1.887l1.132-3.018v-7.922zm14.334 0-2.263 2.264v7.922l1.132 3.018q1.508-.378 1.886-1.887V140.15zm4.527 0-.754.755v9.808l3.017-1.132v-7.167zm14.334 0-2.263 2.264v7.922l1.132 1.131 1.886-1.886v-8.676zm18.861 0-2.263 2.264v7.922l1.131 3.018q1.509-.378 1.887-1.887V140.15zm-86.76 1.886v2.265l9.053 9.053q2.264 0 3.018-1.51l-9.807-9.808zm18.107 8.3-3.018 1.131q.377 1.509 1.885 1.887h12.449l-1.132-3.018zm37.72 0-3.016 1.131v1.887h12.033l1.508-1.51-1.508-1.508zm18.862 0-3.017 1.131q.377 1.509 1.886 1.887h11.316l-1.132-3.018z"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "28.8px",
            lineHeight: 0,
            fontFamily: "&quot",
            InkscapeFontSpecification: "&quot",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            textAlign: "start",
            letterSpacing: 0,
            writingMode: "lr-tb",
            direction: "rtl",
            textAnchor: "start",
            fill: "#0f0",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2.16115,
            strokeLinecap: "square",
            display: "none"
          }}
        />
      </g>
    </g>
  </svg>
);
export default SvgInstrumentWindowComponent;
