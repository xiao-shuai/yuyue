export default class Main extends Component {

  componentDidMount() {
      SplashScreen.hide()
  }

  _backAndroidHandler() {
      if (Platform.OS === 'android') {
          if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
              return false
          }
          this.lastBackPressed = Date.now()
          ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
          return true
      }else {
          return true
      }
  }

render() {
  return (
          <Router onExitApp={this._backAndroidHandler}>
              <Scene key="root" hideNavBar>
                  <Scene key="tabbar" tabs tabBarStyle={{backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#BBB'}}>
                      <Scene key="tab1" initial title="知乎" icon={TabIcon} tabIcon="home" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                          <Scene key='article'  component={Article} title='你知道吗' />
                          <Scene key='articleContent'  component={ArticleContent} title='文章内容' hideTabBar/>
                      </Scene>
                      <Scene key="tab2" title="妹图" icon={TabIcon} tabIcon="circle-o" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                          <Scene key="ooxx" component={Image} title="OOXX" />
                      </Scene>
                      <Scene key="tab3" title="歌单" icon={TabIcon} tabIcon="music" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                          <Scene key='music' title='热歌榜' component={Music} />
                      </Scene>                               
                      <Scene key="tab4" title="地图" icon={TabIcon} tabIcon="map-marker" navigationBarStyle={{backgroundColor: '#ffdb42'}}>
                          <Scene key='map' title='我在哪' component={Map} />
                      </Scene>
                  </Scene>
              </Scene>
          </Router>
  )
}
}

