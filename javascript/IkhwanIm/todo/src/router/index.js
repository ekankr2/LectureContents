import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Todo from '../views/Todo.vue'
import Homework from '../views/Homework.vue'

// board
import BoardListPage from '@/views/BoardListPage.vue'
import BoardRegisterPage from '@/views/BoardRegisterPage.vue'
import BoardReadPage from "../views/BoardReadPage";
import BoardModifyPage from "../views/BoardModifyPage";

//game
import MemberRegisterPage from "../views/MemberRegisterPage";

//삼목
import Concave from "../views/Concave.vue"
Vue.use(VueRouter)

// product
import ProductListPage from "../views/ProductListPage";
import ProductRegisterPage from "../views/ProductRegisterPage";
import ProductReadPage from "../views/ProductReadPage";
import ProductModifyPage from "../views/ProductModifyPage";

// Monster
import MonsterListPage from "../views/MonsterListPage";
import MonsterRegisterPage from "../views/MonsterRegisterPage";
import MonsterReadPage from "../views/MonsterReadPage";
import MonsterModifyPage from "../views/MonsterModifyPage";

import EventBusTestPage from "../views/EventBusTestPage";

//던전
import DungeonListPage from "../views/DungeonListPage";
// 학생
import StudentListPage from "../views/StudentListPage";

import OnlyVuePage from "../views/OnlyVuePage";

import SpringInterconnectionPage from "../views/SpringInterconnectionPage";
// 크롤링
import DaumNewsCrawlerPage from "../views/DaumNewsCrawlerPage";

// un-named slot
import UnNamedSlotTestPage from "../views/UnNamedSlotTestPage";
import NamedSlotTestPage from "../views/NamedSlotTestPage";
import ScopedSlotTestPage from "../views/ScopedSlotTestPage";
import RecentSlotTestPage from "../views/RecentSlotTestPage";

// materialize
import MaterializeTestPage from "../views/MaterializeTestPage";
import MaterializeGridTestPage from "../views/MaterializeGridTestPage";
import VuetifyAllInOneTestPage from "../views/VuetifyAllInOneTestPage";
import AwesomeSwiperTestPage from "../views/AwesomeSwiperTestPage";
import ImageGalleryTestPage from "../views/ImageGalleryTestPage";
import CalendarTestPage from "../views/CalendarTestPage";
import MemberJoinColumnTestPage from "../views/MemberJoinColumnTestPage";
import VuetifyMemberRegisterPage from "../views/VuetifyMemberRegisterPage";
import VuetifyMemberLoginPage from "../views/VuetifyMemberLoginPage";
import FileUploadPage from "../views/FileUploadPage";
import SessionLoginPage from "../views/SessionLoginPage";
import AccountRegisterPage from "../views/AccountRegisterPage";
import PythonLoginTestPage from "../views/PythonLoginTestPage";
import KakaoLoginPage from "../views/KakaoLoginPage";
import OrderTestPage from "../views/OrderTestPage";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/homework',
    name: 'Homework',
    component: Homework
  },
  {
    path: '/board',
    name: 'BoardListPage',
    components: {
      default: BoardListPage
    }
  },
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/member/create',
    name: 'MemberRegisterPage',
    components: {
      default: MemberRegisterPage
  }
  },
  {
    path: '/board/:boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/concave',
    name: 'Concave',
    components: {
      default: Concave
    }
  },
    // product
  {
    path: '/product',
    name: 'ProductListPage',
    components: {
      default: ProductListPage
    }
  },
  {
    path: '/product/create',
    name: 'ProductRegisterPage',
    components: {
      default: ProductRegisterPage
    }
  },
  {
    path: '/product/:productNo',
    name: 'ProductReadPage',
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product/:productNo/edit',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    }
  },
    //monster
  {
    path: '/monster',
    name: 'MonsterListPage',
    components: {
      default: MonsterListPage
    }
  },
  {
    path: '/monster/create',
    name: 'MonsterRegisterPage',
    components: {
      default: MonsterRegisterPage
    }
  },
  {
    path: '/monster/:monsterNo',
    name: 'MonsterReadPage',
    components: {
      default: MonsterReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/monster/:monsterNo/edit',
    name: 'MonsterModifyPage',
    components: {
      default: MonsterModifyPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/eventBusTest',
    name: 'EventBusTestPage',
    components: {
      default: EventBusTestPage
    }
  },
  {
    path: '/dungeon',
    name: 'DungeonListPage',
    components: {
      default: DungeonListPage
    }
  },
  {
    path: '/student',
    name: 'StudentListPage',
    components: {
      default: StudentListPage
    }
  },
  {
    path: '/OnlyVuePage',
    name: 'OnlyVuePage',
    components: {
      default: OnlyVuePage
    }
  },
  {
    path: '/springintercon',
    name: 'SpringInterconnectionPage',
    components: {
      default: SpringInterconnectionPage
    }
  },
  {
    path: '/daumNewsCrawler',
    name: 'DaumNewsCrawlerPage',
    components: {
      default: DaumNewsCrawlerPage
    }
  },
  {
    path: '/unNamedSlot',
    name: 'UnNamedSlotTestPage',
    components: {
      default: UnNamedSlotTestPage
    }
  },
  {
    path: '/NamedSlot',
    name: 'NamedSlotTestPage',
    components: {
      default: NamedSlotTestPage
    }
  },
  {
    path: '/ScopedSlot',
    name: 'ScopedSlotTestPage',
    components: {
      default: ScopedSlotTestPage
    }
  },
  {
    path: '/vSlot',
    name: 'RecentSlotTestPage',
    components: {
      default: RecentSlotTestPage
    }
  },
  {
    path: '/materialize',
    name: 'MaterializeTestPage',
    components: {
      default: MaterializeTestPage
    }
  },
  {
    path: '/materializeGrid',
    name: 'MaterializeGridTestPage',
    components: {
      default: MaterializeGridTestPage
    }
  },
  {
    path: '/vuetifyAllInOne',
    name: 'VuetifyAllInOneTestPage',
    components: {
      default: VuetifyAllInOneTestPage
    }
  },
  {
    path: '/vuetifyMemberRegister',
    name: 'VuetifyMemberRegisterPage',
    components: {
      default: VuetifyMemberRegisterPage
    }
  },
  {
    path: '/awesomeSwiperTest',
    name: 'AwesomeSwiperTestPage',
    components: {
      default: AwesomeSwiperTestPage
    }
  },
  {
    path: '/imageGallery',
    name: 'ImageGalleryTestPage',
    components: {
      default: ImageGalleryTestPage
    }
  },
  {
    path: '/calendar',
    name: 'CalendarTestPage',
    components: {
      default: CalendarTestPage
    }
  },
  {
    path: '/memberJoinColumn',
    name: 'MemberJoinColumnTestPage',
    components: {
      default: MemberJoinColumnTestPage
    }
  },
  {
    path: '/memberLogin',
    name: 'VuetifyMemberLoginPage',
    components: {
      default: VuetifyMemberLoginPage
    }
  },
  {
    path: '/fileUpload',
    name: 'FileUploadPage',
    components: {
      default: FileUploadPage
    }
  },
  {
    path: '/sessionLogin',
    name: 'SessionLoginPage',
    components: {
      default: SessionLoginPage
    }
  },
  {
    path: '/accountRegister',
    name: 'AccountRegisterPage',
    components: {
      default: AccountRegisterPage
    }
  },
  {
    path: '/pyLogin',
    name: 'PythonLoginTestPage',
    components: {
      default: PythonLoginTestPage
    }
  },
  {
    path: '/kakaoLogin',
    name: 'KakaoLoginPage',
    components: {
      default: KakaoLoginPage
    }
  },
  {
    path: '/OrderTestPage',
    name: 'OrderTestPage',
    components: {
      default: OrderTestPage
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
