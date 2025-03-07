// const
const MAPBOX_TOKEN =
  // For security reasons, please avoid using the default public token provided by Mapbox as much as possible.
  // Instead, manually add a new token and apply URL restrictions.
  // (please refer to https://github.com/yihong0618/running_page/issues/643#issuecomment-2042668580)
  'pk.eyJ1IjoiYmVuLTI5IiwiYSI6ImNrZ3Q4Ym9mMDBqMGYyeXFvODV2dWl6YzQifQ.gSKoWF-fMjhzU67TuDezJQ';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];
const MAP_LAYER_LIST = [
  'road-label',
  'waterway-label',
  'natural-line-label',
  'natural-point-label',
  'water-line-label',
  'water-point-label',
  'poi-label',
  'airport-label',
  'settlement-subdivision-label',
  'settlement-label',
  'state-label',
  'country-label',
];

const USE_GOOGLE_ANALYTICS = false;
const GOOGLE_ANALYTICS_TRACKING_ID = '';

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = false;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.6;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;
// update for now 2024/11/17 the privacy mode is true
//set to `true` if you want to display only the routes without showing the map.
const PRIVACY_MODE = false;
// update for now 2024/11/17 the lights on default is false
//set to `false` if you want to make light off as default, only effect when `PRIVACY_MODE` = false
const LIGHTS_ON =false;
// richer title for the activity types (like garmin style)
const RICH_TITLE = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength: number, year: string): string =>
  `户外运动 ${yearLength} 年 ` + ( year === 'Total' ? '' : `，地图展示的是 ${year} 年的轨迹`);

const ENGLISH_INFO_MESSAGE = (yearLength: number, year: string): string =>
  `Logged ${yearLength} Years of Outdoor Journey` +  ( year === 'Total' ? '' : `, the map show routes in ${year}`);

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我去过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下来，不要停下探索的脚步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const RUN_TITLE = IS_CHINESE ? '跑步' : 'Run';
const TRAIL_RUN_TITLE = IS_CHINESE ? '越野跑' : 'Trail Run';
const SWIM_TITLE = IS_CHINESE ? '游泳' : 'Swim';

const RIDE_TITLE = IS_CHINESE ? '骑行' : 'Ride';
const INDOOR_RIDE_TITLE = IS_CHINESE ? '室内骑行' : 'Indoor Ride';
const VIRTUAL_RIDE_TITLE = IS_CHINESE ? '虚拟骑行' : 'Virtual Ride';
const HIKE_TITLE = IS_CHINESE ? '徒步' : 'Hike';
const ROWING_TITLE = IS_CHINESE ? '划船' : 'Rowing';
const KAYAKING_TITLE = IS_CHINESE ? '皮划艇' : 'Kayaking';
const SNOWBOARD_TITLE = IS_CHINESE ? '单板滑雪' : 'Snowboard';
const SKI_TITLE = IS_CHINESE ? '双板滑雪' : 'Ski';
const ROAD_TRIP_TITLE = IS_CHINESE ? '自驾' : 'RoadTrip';
const FLIGHT_TITLE = IS_CHINESE ? '飞行' : 'Flight';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  RUN_TITLE,
  TRAIL_RUN_TITLE,

  RIDE_TITLE,
  INDOOR_RIDE_TITLE,
  VIRTUAL_RIDE_TITLE,
  HIKE_TITLE,
  ROWING_TITLE,
  KAYAKING_TITLE,
  SWIM_TITLE,
  ROAD_TRIP_TITLE,
  FLIGHT_TITLE,
  SNOWBOARD_TITLE,
  SKI_TITLE,
};

export {
  USE_GOOGLE_ANALYTICS,
  GOOGLE_ANALYTICS_TRACKING_ID,
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  MAP_LAYER_LIST,
  IS_CHINESE,
  ROAD_LABEL_DISPLAY,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
  MAP_HEIGHT,
  PRIVACY_MODE,
  LIGHTS_ON,
  RICH_TITLE,
};


// 更新后的配色方案（低饱和度，适配黑色背景）
const mutedSlate = 'rgb(160, 174, 192)';  // 石板灰
const sageGreen = 'rgb(131, 169, 143)';   // 鼠尾草绿
const duskBlue = 'rgb(106, 133, 182)';    // 黄昏蓝
const clayPink = 'rgb(191, 147, 155)';   // 黏土粉
const mistyTeal = 'rgb(96, 179, 172)';   // 雾霭青
const deepMoss = 'rgb(85, 115, 95)';     // 深苔藓
const twilightPurple = 'rgb(118, 102, 135)'; // 暮色紫
const sandstone = 'rgb(194, 178, 144)';  // 砂岩色
const slateBlue = 'rgb(101, 126, 154)';  // 板岩蓝
const duskRose = 'rgb(167, 121, 134)';   // 暮色玫瑰
const pineGreen = 'rgb(70, 112, 98)';    // 松绿
const foggyGray = 'rgb(152, 164, 174)';  // 雾灰
const mutedCoral = 'rgb(210, 138, 126)'; // 哑光珊瑚
const deepAqua = 'rgb(73, 136, 154)';    // 深水色

// If your map has an offset please change this line
// issues #92 and #198

// 更新导出颜色部分
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = sageGreen;
export const RUN_COLOR = mutedCoral;      // 跑步-珊瑚色代表活力
export const RIDE_COLOR = pineGreen;      // 骑行-自然绿色系
export const VIRTUAL_RIDE_COLOR = slateBlue; // 虚拟骑行-科技感的冷色调
export const HIKE_COLOR = sandstone;      // 徒步-大地色系
export const SWIM_COLOR = duskBlue;       // 游泳-水蓝色
export const ROWING_COLOR = deepAqua;     // 划船-深水色
export const ROAD_TRIP_COLOR = twilightPurple; // 自驾-暮色紫
export const FLIGHT_COLOR = foggyGray;    // 飞行-雾灰色
export const PROVINCE_FILL_COLOR = deepMoss;  // 省级填充色
export const COUNTRY_FILL_COLOR = slateBlue;  // 国家级填充色
export const KAYAKING_COLOR = mistyTeal;  // 皮划艇-青绿色
export const SNOWBOARD_COLOR = duskBlue;  // 单板滑雪-冷色调
export const TRAIL_RUN_COLOR = clayPink;  // 越野跑-区别于普通跑步