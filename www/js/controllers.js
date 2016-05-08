/**
 * Created by QQ on 2016/5/3.
 */


angular.module('starter.controllers', [])

  .controller('HomeCtrl', function($scope, ArticleFactory, ENV) {
    $scope.name='HomeCtrl';
    $scope.ENV=ENV;

    // 测试
    $scope.showloading = false;
    $scope.articlesListData = [
      {'article_id': 1, 'headline': '第1个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 2, 'headline': '第2个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 3, 'headline': '第3个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 4, 'headline': '第4个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 5, 'headline': '第5个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 6, 'headline': '第6个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 7, 'headline': '第7个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 8, 'headline': '第8个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 9, 'headline': '第9个新闻', 'pic': 'img/ionic.png'},
      {'article_id': 10, 'headline': '第10个新闻', 'pic': 'img/ionic.png'}
    ];


    /*
     $scope.showloading = true;

    //获取服务器数据保存
    ArticleFactory.getTopArticles();
    //接收到刚才传过来的通知
    $scope.$on('ArticlesList.articlesUpdated', function() {
      $scope.articlesListData=ArticleFactory.getArticles();
      $scope.showloading = false;
    });
    //下拉更新
    $scope.doRefresh=function(){
      ArticleFactory.getTopArticles();
      $scope.$broadcast('scroll.refreshComplete');
    };
    //上拉更新
    $scope.loadMore=function(){
      ArticleFactory.getMoreArticles();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.hasNextPage = function() {
      return ArticleFactory.hasNextPage();
    };
    */
  })

  //ArticleCtrl
  .controller('ArticleCtrl', function($scope,ArticleFactory,ENV) {
    $scope.name='ArticleCtrl';
    $scope.ENV=ENV;

    // 测试
    $scope.showloading = false;
    var flag = false;
    if(flag == false){
      flag = true;
      $scope.articlesListData = [
        {'article_id': 1, 'headline': '第1个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 2, 'headline': '第2个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 3, 'headline': '第3个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 4, 'headline': '第4个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 5, 'headline': '第5个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 6, 'headline': '第6个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 7, 'headline': '第7个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 8, 'headline': '第8个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 9, 'headline': '第9个新闻', 'pic': 'img/ionic.png'},
        {'article_id': 10, 'headline': '第10个新闻', 'pic': 'img/ionic.png'}
      ];
    }
    $scope.changeTab=function(cateid){
      var a=document.getElementById('sub_header_list').getElementsByTagName('a');
      for (var i = 0; i < 8; i++) {
        a[i].className = "button button-clear ";
      }
      //鎶婄偣鍑荤殑閭ｄ釜鏄剧ず鍑烘潵
      a[cateid].className = "button button-clear sub_button_select";
      //数据请求
      //ArticleFactory.setArticleCateId(cateid);
      if(cateid == 0){
        $scope.articlesListData = [
          {'article_id': 11, 'headline': '目录1新闻01', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录1新闻02', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录1新闻03', 'pic': 'img/ionic.png'},
        ]
      }
      else if(cateid == 1){
        $scope.articlesListData = [
          {'article_id': 11, 'headline': '目录2新闻01', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录2新闻02', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录2新闻03', 'pic': 'img/ionic.png'},
        ]
      }
      else if(cateid == 2){
        $scope.articlesListData = [
          {'article_id': 11, 'headline': '目录3新闻01', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录3新闻02', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录3新闻03', 'pic': 'img/ionic.png'},
        ]
      }
      else if(cateid == 3){
        $scope.articlesListData = [
          {'article_id': 11, 'headline': '目录4新闻01', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录4新闻02', 'pic': 'img/ionic.png'},
          {'article_id': 11, 'headline': '目录4新闻03', 'pic': 'img/ionic.png'},
        ]
      }
    };


    /*
    $scope.showloading = true;
    //获取服务器数据保存
    ArticleFactory.getTopArticles();
    //接收到刚才传过来的通知
    $scope.$on('ArticlesList.articlesUpdated', function() {
      $scope.articlesListData=ArticleFactory.getArticles();
      $scope.showloading = false;
    });
    //下拉更新
    $scope.doRefresh=function(){
      ArticleFactory.getTopArticles();
      $scope.$broadcast('scroll.refreshComplete');
    }
    //上拉更新
    $scope.loadMore=function(){
      ArticleFactory.getMoreArticles();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
    $scope.hasNextPage = function() {
      return ArticleFactory.hasNextPage();
    };

    $scope.changeTab=function(cateid,index){
      var a=document.getElementById('sub_header_list').getElementsByTagName('a');
      for (var i = 0; i < 8; i++) {
        a[i].className = "button button-clear ";
      }
      //鎶婄偣鍑荤殑閭ｄ釜鏄剧ず鍑烘潵
      a[index].className = "button button-clear sub_button_select";
      //数据请求
      ArticleFactory.setArticleCateId(cateid);
    }
    */
  })




  //文章详情
  .controller('NewsContentCtrl', function($scope,$stateParams,ArticleContentFactory) {

    var article_id=$stateParams['article_id'];

    // 测试
    $scope.showloading = false;
    $scope.NewsContentData = {
      'headline': '新闻标题',
      'content': '这是内容',
      'pic': 'img/ionic.png',
      'source': '作者',
      'create_time': '2016/05/08',
    };

    /*
    $scope.showloading = true;
    ArticleContentFactory.get(aid);
    $scope.$on('NewsContent.newsUpdated', function() {
      $scope.NewsContentData=ArticleContentFactory.getArticle();
      console.log( $scope.NewsContentData);
      $scope.showloading = false;
    });
    */
  })


  .controller('ThreadCtrl', function($scope) {
    $scope.name='ThreadCtrl';
  })

  .controller('UserCtrl', function($scope, $rootScope) {
    var storageKey = 'user';
    $scope.$on('$ionicView.beforeEnter', function() {
      if(Storage.get(storageKey)&&Storage.get(storageKey).username!=''){
        $scope.userInfo=Storage.get(storageKey);
        console.log($scope.userInfo);
      }
      console.log('User');
    });

    //退出登录
    $rootScope.$on('User.logoutUpdated', function() {
      var storageKey = 'user';
      $scope.userInfo='';
      Storage.remove(storageKey);
    });
  })


  //登陆
  .controller('LoginCtrl', function($scope,User,Storage,$state,$ionicLoading) {
    $scope.user={
      'username':'',
      'password':''
    };
    var storageKey = 'user';
    $scope.signIn = function(user) {

      User.login($scope.user.username,$scope.user.password);
    };

    $scope.$on('User.loginUpdated', function() {
      var userRel = User.getCurrentUser();
      if(userRel.success==false){//登陆失败
        //    alert(userRel.message);
        $ionicLoading.show({
          noBackdrop: true,
          template: userRel.message,
          duration: 1500
        });
      }else{
        Storage.set(storageKey,userRel);
        $state.go('tabs.user',{reload: true});  //路由跳转
      }
    });
  })
  //注册
  .controller('RegisterCtrl', function($scope, $state) {
    $scope.signIn = function(user) {
      console.log('registerCtrl', user);
      $state.go('tabs.home');
    };
  })
